(ns modal-synth.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [modal-synth.utils :refer [listen
                                       set-html!]]
            [modal-synth.layout :refer [layout-params]]
            [modal-synth.fader :as fader]
            [modal-synth.webaudio :as webaudio]
            [modal-synth.keyboard-control :as keyboard-control]
            [goog.dom :as dom]
            [goog.events :as events]
            [dommy.core :as dommy :refer [sel1]]
            [cljs.core.async :refer [<! >! put! chan close! alts!]]))


(def gain-multiplier 1)
(def delay-time-multiplier 0.05)
(def lowpass-cutoff-upper-bound 20000)
(def highpass-cutoff-upper-bound 20000)

;stop key repeat
;make reloadable
;adsr keyboard
; - with sliders for a, d, s, r
;reverb
;master channel spectrum vis
;channel spectrum vis
;save states
;morph between states
; - morph time
; - morph curve (eg linear, step)
;keyboard control

;build dom in clojurescript
;signal flow shown visually
;(no sequencer vis, only go by feel)
;control system to regulate amplitude between decay/saturation
;animate faders
; - sin wave slow perturbation to all params


(enable-console-print!)


(defn select-fader [index channel-node]
  {:box (sel1 channel-node (keyword (str "#slider" index)))
   :bar (sel1 channel-node (keyword (str "#slider-bar" index)))
   :handle (sel1 channel-node (keyword (str "#slider-handle" index)))})


(defn select-bandpass [index channel-node]
  {:box (sel1 channel-node (keyword (str "#bandpass" index)))
   :bar (sel1 channel-node (keyword (str "#bandpass-bar" index)))
   :handle-highpass (sel1 channel-node (keyword (str "#bandpass-handle-highpass" index))) 
   :handle-lowpass (sel1 channel-node (keyword (str "#bandpass-handle-lowpass" index)))})


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
                                        (:highpass-cutoff channel-state)
                                        (:lowpass-cutoff channel-state))]
    (fader/init gain-fader)
    (fader/init delay-fader)
    (fader/init-bandpass bandpass)))


(defonce audio-context (webaudio/create-audio-context))


(defn make-channel-audio []
  (let [delay-line (webaudio/make-delay-line 2.0 audio-context)
        gain (webaudio/make-gain 0.1 audio-context)
        bandpass (webaudio/make-bandpass 0.4 0.5 audio-context)]
    {:graph (reduce webaudio/connect [delay-line bandpass gain])
     :gain-graph gain
     :delay-graph delay-line
     :bandpass-graph bandpass}))


(defn gain-mapping [fader-level]
  "Maps the fader levels to appropriate gain levels"
  (* fader-level gain-multiplier))


(defn delay-mapping [fader-level]
  "Maps the fader levels to appropriate delay time levels"
  (* fader-level delay-time-multiplier))


(defn highpass-cutoff-mapping [fader-level]
  "Maps the fader levels to appropriate highpass cutoff levels"
  (Math/pow highpass-cutoff-upper-bound
            fader-level)) 


(defn lowpass-cutoff-mapping [fader-level]
  "Maps the fader levels to appropriate lowpass cutoff levels"
  (print "updating lowpass cutoff with fader level " fader-level)
  (Math/pow lowpass-cutoff-upper-bound
            fader-level))


(defn make-watcher [graph setter mapping]
  (fn [key atom old-state new-state]
      (setter graph (mapping new-state))))


(defn init-channel-state [gain delay-time highpass-cutoff lowpass-cutoff
                          channel-audio]
  (let [channel-state {:gain (atom gain)
                       :delay (atom delay-time)
                       :highpass-cutoff(atom highpass-cutoff)
                       :lowpass-cutoff (atom lowpass-cutoff)}]
    (add-watch (:gain channel-state)
               :gain-watcher
               (make-watcher (:gain-graph channel-audio)
                             webaudio/set-gain!
                             gain-mapping)) 
    (add-watch (:delay channel-state)
               :delay-watcher
               (make-watcher (:delay-graph channel-audio)
                             webaudio/set-delay-time!
                             delay-mapping))  
    (add-watch (:lowpass-cutoff channel-state)
               :lowpass-cutoff-watcher
               (make-watcher (:bandpass-graph channel-audio)
                             webaudio/set-lowpass-cutoff!
                             lowpass-cutoff-mapping))  
    (add-watch (:highpass-cutoff channel-state)
               :highpass-cutoff-watcher
               (make-watcher (:bandpass-graph channel-audio)
                             webaudio/set-highpass-cutoff!
                             highpass-cutoff-mapping))  
    channel-state))


(defonce channel1-elements (select-channel "1"))
(defonce channel1-audio (make-channel-audio))
(defonce channel2-elements (select-channel "2"))
(defonce channel2-audio (make-channel-audio))
(defonce channel-master-elements (select-channel "-master"))
(defonce channel-master-audio (make-channel-audio))
(defonce channel1-state (init-channel-state 0.7 0.28 0.4 0.9
                                             channel1-audio))
(defonce channel2-state (init-channel-state 0.6 0.17 0.4 0.5
                                             channel2-audio))
(defonce channel-master-state (init-channel-state 0.4 0.0 0.1 0.5
                                                   channel-master-audio))

(defonce master-fanin (webaudio/fanin (:graph channel-master-audio)))
(defonce master-fanout (webaudio/fanout (:graph channel-master-audio)))

(webaudio/connect [(:graph channel1-audio) (:graph channel2-audio)]
                   master-fanin)
(webaudio/connect master-fanout
                   [(:graph channel1-audio) (:graph channel2-audio)])
(webaudio/connect master-fanout
                   (webaudio/destination audio-context))

(defonce noise-osc (webaudio/make-noise-osc audio-context
                                             :highpass-cutoff 30
                                             :lowpass-cutoff 1800))
(defonce noise-gain (webaudio/make-gain 0 audio-context))
(-> noise-osc
     (webaudio/connect noise-gain)
     webaudio/fanout
     (webaudio/connect [(:graph channel1-audio) (:graph channel2-audio)]))
(webaudio/loop-noise-osc noise-osc)
(webaudio/osc-start noise-osc (webaudio/get-now audio-context))
(defonce noise-gain-state (atom 0))
(add-watch noise-gain-state
           :noise-gain-watcher
           (make-watcher noise-osc
                         webaudio/set-gain!
                         identity))

(make-channel channel1-elements
               channel1-state)
(make-channel channel2-elements
               channel2-state)
(make-channel channel-master-elements
              channel-master-state)

(keyboard-control/init {:channel1-state channel1-state
                        :channel2-state channel2-state
                        :channel-master-state channel-master-state
                        :noise-gain-state noise-gain-state
                        :noise-gain noise-gain
                        :audio-context audio-context})
