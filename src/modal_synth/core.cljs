(ns modal-synth.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [modal-synth.utils :refer [listen
                                       set-html! ]]
            [modal-synth.layout :refer [layout-params]]
            [modal-synth.fader :as fader]
            [goog.dom :as dom]
            [goog.events :as events]
            [dommy.core :as dommy :refer [sel1]]
            [cljs.core.async :refer [<! >! put! chan close! alts!]]
            [cljs-bach.synthesis :as cljs-bach]))


;put audio stuff in namespace
;feedback loop
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


(defonce audio-context 
  (if js/window.AudioContext.
    (js/window.AudioContext.)
    (js/window.webkitAudioContext.)))


(defn make-channel-audio-graph []
  (let [delay-node (.createDelay audio-context)
        gain-node (.createGain audio-context)]
    (.connect delay-node gain-node)
    [{:input delay-node :output gain-node}
     (.-gain gain-node)
     (.-delayTime delay-node)]))


(defn make-watcher-fn [param mapping]
  (fn [key atom old-state new-state]
      (set! (.-value param) new-state)))


(defn gain-mapping [fader-level]
  "Maps the fader levels to appropriate gain levels"
  fader-level)


(defn delay-mapping [fader-level]
  "Maps the fader levels to appropriate delay time levels"
  (* 2 fader-level))


(defn create-audio-graph
  ([node1 node2]
   (.connect node1 node2)
   {:input node1 :output node2})
  ([node]
   {:intput node :output node}))


(defonce destination-graph
  {:input (.-destination audio-context)
   :output nil})


(defn connect-audio-graphs [graph1 graph2]
  (.connect (:output graph1) (:input graph2))
  {:input (:input graph1)
   :output (:output graph2)})


(defn fire-note [audio-graph]
  (let [osc (.createOscillator audio-context)
        osc-graph (create-audio-graph osc)
        ;note-graph (connect-audio-graphs osc-graph destination-graph)
        note-graph (reduce connect-audio-graphs [osc-graph audio-graph destination-graph])
        now (.-currentTime audio-context)]
    (set! (.-frequency osc) 300)
    (.start osc now)
    (.stop osc (+ now 0.3))
    (print "Fire!")
    note-graph))


(defn init []
  (let [channel1-elements (select-channel "1")
        [channel-audio-graph1 gain-param1 delay-param1] (make-channel-audio-graph)
        channel2-elements (select-channel "2")
        [channel-audio-graph2 gain-param2 delay-param2] (make-channel-audio-graph)
        channel-master-elements (select-channel "-master")
        [channel-audio-graph-master gain-param-master delay-param-master] (make-channel-audio-graph)]
    (defonce channel1-state {:gain (atom 0.6)
                             :delay (atom 0.4)
                             :lower-cutoff (atom 0.4)
                             :upper-cutoff(atom 0.9)})
    (add-watch (:gain channel1-state)
               :gain-watcher1
               (make-watcher-fn gain-param1 gain-mapping)) 
    (add-watch (:delay channel1-state)
               :delay-watcher1
               (make-watcher-fn delay-param1 delay-mapping)) 
    (print gain-param1)
    (defn fire-note-callback [event]
      (fire-note channel-audio-graph1))
    (events/listen (sel1 :#fire-note) "mousedown" fire-note-callback)
    (fire-note-callback "thing")

    (defonce channel2-state {:gain (atom 0.2)
                             :delay (atom 0.3)
                             :lower-cutoff (atom 0.4)
                             :upper-cutoff(atom 0.5)})
    (defonce channel-master-state {:gain (atom 0.7)
                                   :delay (atom 0.4)
                                   :lower-cutoff (atom 0.1)
                                   :upper-cutoff(atom 0.5)})
    (make-channel channel1-elements
                  channel1-state)
    (make-channel channel2-elements
                  channel2-state)
    (make-channel channel-master-elements
                  channel-master-state)))

(init)
