(ns modal-synth.cycles
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [modal-synth.channel-dom :as channel-dom]
            [modal-synth.fader :as fader]
            [modal-synth.webaudio :as webaudio]
            [modal-synth.channel :as channel]
            [modal-synth.keyboard-control :as keyboard-control]
            [modal-synth.spectro-vis :as spectro-vis]
            [goog.dom :as dom]
            [goog.events :as events]
            [dommy.core :as dommy :refer [create-element sel1 append! set-attr! set-class! set-style! attr]]
            [cljs.core.async :refer [<! >! put! chan close! alts! timeout]]))



;;
;node has audio graph state, when activated applies that state

;click node
;- timout then second click saves current state to that node
;- if click before timeout then make that node active next

;set tempo

;radius of node in pixels
(def node-radius 14)


(defn arrange [{:keys [width]
                {:keys [x y]} :topleft}
               n]
  (let [angles (map #(/ (* 2. Math/PI %) n) (range n))
        radius (- (/ width 2) node-radius)
        angle-to-pos (fn [angle] {:x (+ (* radius (Math/sin angle)) x (/ width 2))
                                  :y (+ (* radius (- (Math/cos angle))) y (/ width 2))})]
    (map angle-to-pos angles)))


(defn create-circle []
  (let [circle (create-element "http://www.w3.org/2000/svg" :circle)]
    (set-attr! circle :cx node-radius)
    (set-attr! circle :cy node-radius)
    (set-attr! circle :r node-radius)
    (set-attr! circle :fill "black")
    (set-attr! circle :stroke "white")
    circle))


(defn make-node [real-channel-state position]
  (let [svg-element (create-element "http://www.w3.org/2000/svg" :svg)
        node-state (channel/create-channel-state 0.5 0.5 0 1)]
    (channel/copy-channel-state! real-channel-state node-state)
    (set-class! svg-element "cycle-node")
    (set-style! svg-element :left (str (int (- (:x position) node-radius)) "px")
                            :top (str (int (- (:y position) node-radius)) "px")
                            :position "absolute")
    (set-attr! svg-element :width (* 2 node-radius)
                           :height (* 2 node-radius)
                           :onclick #(do
                                      (channel/copy-channel-state! real-channel-state
                                                                   node-state)
                                      (println "updating node at " position
                                               " to " node-state)))
    (let [circle-element (create-circle)]
      (append! svg-element circle-element)
      {:position position
       :svg-element svg-element
       :circle-element circle-element
       :state node-state})))


(defn deactivate-node! [{:keys [circle-element]}]
  (set-attr! circle-element :fill "black"))


(defn activate-node! [{:keys [circle-element]}]
  (set-attr! circle-element :fill "#777777"))


(defn make-ticker [nodes channel-audio channel-state]
  (let [active-node-index (atom 0)]
    (fn [event-fire-time]
        ;turn current active node off
        (deactivate-node! (nth nodes @active-node-index))
        ;increment active-node-index
        (swap! active-node-index #(mod (inc %) (count nodes)))
        ;activate next node
        (println "activating node " @active-node-index)
        (activate-node! (nth nodes @active-node-index))
        (channel/copy-channel-state! (:state (nth nodes @active-node-index))
                                     channel-state)    
        #_(channel/update-audio-at-time! channel-audio channel-state event-fire-time)
        #_(go
          (<! (timeout 10))
          (println "updating state with active node " @active-node-index)
          (channel/copy-channel-state! (:state (nth nodes @active-node-index))
                                       channel-state)))))


(defn calc-next-tick-time [cycle-freq]
  (fn [at-time]
      (+ at-time
         (/ 1. @cycle-freq))))


(defn create [box n & {:keys [freq channel-audio channel-state]
                                  :or {freq 0.5}}]
  (let [cycle-element (create-element :div)
        positions (arrange box n)
        nodes (map (partial make-node channel-state) positions)
        tick! (make-ticker nodes channel-audio channel-state)]
    (doall
      (map (fn [node] (append! cycle-element (:svg-element node))) nodes))
    {:cycle-element cycle-element
     :nodes nodes
     :freq freq
     :tick! tick!}))
