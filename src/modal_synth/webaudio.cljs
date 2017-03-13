(ns modal-synth.webaudio
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [cljs.core.async :refer [<! >! put! chan close! alts!]]))


; types (maps):
;  - gain-node {:type "gain-node" :node node}
;  - delay-node
;  - subgraph {:type "subgraph" :input node :output node}

;use multi-methods for connect

;multi methods for 'setValue'

;is there a way to keep the implementation totally abstracted?
; - dont expose how to make and change the maps for objects
; - change to protocol from multimethods later

(defn create-audio-context []
  (if js/window.AudioContext.
    (js/window.AudioContext.)
    (js/window.webkitAudioContext.)))


(defn now [audio-context]
  (.-currentTime audio-context))


(defn destination [audio-context]
  {:input-node (.-destination audio-context)
   :output-node nil
   :type :Fanin})


(defn set-gain! [gain-graph new-gain]
  (-> (:node gain-graph)
      .-gain
      .-value
      (set! new-gain)))


(defn make-gain [init-gain audio-context]
  (let [gain-node (.createGain audio-context)
        gain-graph {:input-node gain-node
                    :output-node gain-node
                    :type :Gain
                    :node gain-node}]
    (set-gain! gain-graph init-gain)
    gain-graph))


(defn set-delay-time! [delay-graph new-delay-time]
  (-> (:node delay-graph)
      .-delayTime
      .-value
      (set! new-delay-time)))


(defn make-delay-line [max-delay-time audio-context]
  (let [delay-node (.createDelay audio-context max-delay-time)
        delay-graph {:input-node delay-node
                     :output-node delay-node
                     :type :Delay
                     :node delay-node}]
    delay-graph))


(defn make-osc [freq audio-context & {:keys [osc-type]}]
  (let [osc-node (.createOscillator audio-context)]
    (-> osc-node
        .-frequency
        .-value
        (set! freq))
    (-> osc-node
        .-type
        (set! osc-type))
    {:input-node osc-node
     :output-node osc-node
     :type :Osc
     :node osc-node}))


(defn osc-start [osc start-time]
  (.start (:node osc) start-time))


(defn osc-stop [osc stop-time]
  (.stop (:node osc) stop-time))


(defn fanout [graph]
  (assoc graph :type :Fanout))


(defn fanin [graph]
  (assoc graph :type :Fanin))


(defmulti connect (fn [graph1 graph2] [(:type graph1) (:type graph2)]))

(defmethod connect [:Fanout nil] [fanout sink-graphs]
  (doseq [source [fanout]
          sink sink-graphs]
         (connect source sink)))

(defmethod connect [nil :Fanin] [source-graphs fanin]
  (doseq [source source-graphs
          sink [fanin]]
         (connect source sink)))

(defmethod connect :default [source-graph sink-graph]
  (.connect (:output-node source-graph) (:input-node sink-graph))
  {:input-node (:input-node source-graph)
   :output-node (:output-node sink-graph)
   :type :Graph})


(defn fire-noise-burst-through [graphs freq audio-context]
  (let [osc (make-osc freq audio-context :osc-type "sine")
        now (now audio-context)]
    (-> osc
        fanout
        (connect graphs))
    (osc-start osc now)
    (osc-stop osc (+ now 0.3))
    (print "Fire!")))
