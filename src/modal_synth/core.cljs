(ns modal-synth.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [modal-synth.utils :refer [listen
                                       set-html! ]]
            [modal-synth.layout :refer [layout-params]]
            [modal-synth.fader :as fader]
            [modal-synth.webaudio :as webaudio]
            [goog.dom :as dom]
            [goog.events :as events]
            [dommy.core :as dommy :refer [sel1]]
            [cljs.core.async :refer [<! >! put! chan close! alts!]]))


;noise burst
;filters
;master channel spectrum vis
;button to fire noise shot to ring synth
;channel spectrum vis
;reverb
;save states
;morph between states
; - morph time
; - morph curve (eg linear, step)
;keyboard control

;build dom in clojurescript
;signal flow shown visually
;(no sequencer vis, only go by feel)
;put audio stuff in namespace


(enable-console-print!)


(defn select-fader [index channel-node]
  {:box (sel1 channel-node (keyword (str "#slider" index)))
   :bar (sel1 channel-node (keyword (str "#slider-bar" index)))
   :handle (sel1 channel-node (keyword (str "#slider-handle" index)))})


(defn select-bandpass [index channel-node]
  {:box (sel1 channel-node (keyword (str "#bandpass" index)))
   :bar (sel1 channel-node (keyword (str "#bandpass-bar" index)))
   :handle-lower (sel1 channel-node (keyword (str "#bandpass-handle-lower" index)))
   :handle-upper (sel1 channel-node (keyword (str "#bandpass-handle-upper" index)))}) 


(defn select-channel [index]
  (let [channel-node (sel1 (keyword (str "#channel" index)))]
    {:gain-fader (select-fader "-gain" channel-node)
     :delay-fader (select-fader "-delay" channel-node)
     :bandpass (select-bandpass "1" channel-node)}))


(defn make-channel [channel-elements
                    channel-state]
  (let [gain-fader (fader/create (:gain-fader channel-elements)
                                 (:gain channel-state)
                                 "Gain")
        delay-fader (fader/create (:delay-fader channel-elements)
                                  (:delay channel-state)
                                  "Delay")
        bandpass (fader/create-bandpass (:bandpass channel-elements)
                                        (:lower-cutoff channel-state)
                                        (:upper-cutoff channel-state))]
    (fader/init gain-fader)
    (fader/init delay-fader)
    (fader/init-bandpass bandpass)))


(defonce audio-context (webaudio/create-audio-context))


(defn make-channel-audio []
  (let [delay-line (webaudio/make-delay-line 2.0 audio-context)
        gain (webaudio/make-gain 0.1 audio-context)]
    {:graph (webaudio/connect delay-line gain)
     :gain-graph gain
     :delay-graph delay-line}))


(defn gain-mapping [fader-level]
  "Maps the fader levels to appropriate gain levels"
  fader-level)


(defn delay-mapping [fader-level]
  "Maps the fader levels to appropriate delay time levels"
  (* 2 fader-level))


(defn make-gain-watcher-fn [gain]
  (fn [key atom old-state new-state]
      (webaudio/set-gain! gain new-state)))


(defn make-delay-watcher-fn [delay-line]
  (fn [key atom old-state new-state]
      (webaudio/set-delay-time! delay-line (delay-mapping new-state))))


(defn init []
  (let [channel1-elements (select-channel "1")
        channel1-audio (make-channel-audio)
        channel2-elements (select-channel "2")
        channel2-audio (make-channel-audio)
        channel-master-elements (select-channel "-master")
        channel-master-audio (make-channel-audio)]
    (defonce channel1-state {:gain (atom 0.6)
                             :delay (atom 0.4)
                             :lower-cutoff (atom 0.4)
                             :upper-cutoff(atom 0.9)})
    (add-watch (:gain channel1-state)
               :gain-watcher1
               (make-gain-watcher-fn (:gain-graph channel1-audio))) 
    (add-watch (:delay channel1-state)
               :delay-watcher1
               (make-delay-watcher-fn (:delay-graph channel1-audio))) 
    (defonce channel2-state {:gain (atom 0.2)
                             :delay (atom 0.3)
                             :lower-cutoff (atom 0.4)
                             :upper-cutoff(atom 0.5)})
    (add-watch (:gain channel2-state)
               :gain-watcher2
               (make-gain-watcher-fn (:gain-graph channel2-audio))) 
    (add-watch (:delay channel2-state)
               :delay-watcher2
               (make-delay-watcher-fn (:delay-graph channel2-audio))) 
    (defonce channel-master-state {:gain (atom 0.7)
                                   :delay (atom 0.4)
                                   :lower-cutoff (atom 0.1)
                                   :upper-cutoff(atom 0.5)})
    (add-watch (:gain channel-master-state)
               :gain-watcher-master
               (make-gain-watcher-fn (:gain-graph channel-master-audio))) 
    (add-watch (:delay channel-master-state)
               :delay-watcher-master
               (make-delay-watcher-fn (:delay-graph channel-master-audio))) 

    (defonce master-fanin (webaudio/fanin (:graph channel-master-audio)))
    (defonce master-fanout (webaudio/fanout (:graph channel-master-audio)))
    (webaudio/connect [(:graph channel1-audio) (:graph channel2-audio)] master-fanin)
    (webaudio/connect master-fanout (webaudio/destination audio-context))

    (webaudio/connect master-fanout [(:graph channel1-audio) (:graph channel2-audio)])

    (defn fire-noise-callback [event]
      (webaudio/fire-noise-burst-through [(:graph channel1-audio) (:graph channel2-audio)]
                                 200
                                 audio-context))
    (events/listen (sel1 :#fire-note) "mousedown" fire-noise-callback)

    (make-channel channel1-elements
                  channel1-state)
    (make-channel channel2-elements
                  channel2-state)
    (make-channel channel-master-elements
                  channel-master-state)))

(init)
