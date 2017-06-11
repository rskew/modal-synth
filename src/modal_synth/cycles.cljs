(ns modal-synth.cycles
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [modal-synth.channel-dom :as channel-dom]
            [modal-synth.utils :refer [listen]]
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
    (set-attr! circle :fill "rgba(50,130,200,0.6)")
    (set-attr! circle :stroke "white")
    circle))


(defn make-node [audio-fader-state cycle-fader position]
  (let [svg-element (create-element "http://www.w3.org/2000/svg" :svg)
        node-state (atom @audio-fader-state)]
    (set-class! svg-element "cycle-node")
    (set-style! svg-element :left (str (int (- (:x position) node-radius)) "px")
                            :top (str (int (- (:y position) node-radius)) "px")
                            :position "absolute")
    (set-attr! svg-element :width (* 2 node-radius)
                           :height (* 2 node-radius)
                           ;:onmousedown (set-style! (:box cycle-fader)
                           ;                           :visibility "visible")
                           ;:onmouseup (set-style! (:box cycle-fader)
                           ;                           :visibility "hidden")
                           ;:onclick (let [mouseup-chan (listen svg-element "mouseup")]
                           ;           (set-style! (:box cycle-fader)
                           ;                       :visibility "visible")
                           ;           (println "node now visible")
                           ;           (go
                           ;             (let [click-event (<! mouseup-chan)]
                           ;               (close! mouseup-chan)
                           ;               (set-style! (:box cycle-fader)
                           ;                           :visibility "hidden")
                           ;               (println "node now invisible"))))
                           ;:onclick #(do
                           ;           (channel/copy-channel-state! real-channel-state
                           ;                                        node-state)
                           ;           (println "updating node at " position
                           ;                    " to " node-state))
                           )

    (go (while true
               (let [mousedown-chan (listen svg-element "mousedown")]
                 (<! mousedown-chan)
                 (println "making cycle fader visible")
                 (reset! (:state cycle-fader) @audio-fader-state)
                 (set-style! (:box cycle-fader) :visibility "visible")
                 (let [mouseup-chan (listen js/document "mouseup")]
                   (<! mouseup-chan)
                   (println "hiding cycle fader")
                   (reset! node-state @(:state cycle-fader))
                   (set-style! (:box cycle-fader) :visibility "hidden")
                   (close! mouseup-chan)
                   (close! mousedown-chan)))))
    (let [circle-element (create-circle)]
      (append! svg-element circle-element)
      {:position position
       :svg-element svg-element
       :circle-element circle-element
       :state node-state})))


(defn deactivate-node! [{:keys [circle-element]}]
  (set-attr! circle-element :fill "rgba(50,130,200,0.6)"))


(defn activate-node! [{:keys [circle-element]}]
  (set-attr! circle-element :fill "#777777"))


(defn make-ticker [nodes audio-fader-state]
  (let [active-node-index (atom 0)]
    (fn [event-fire-time]
        ;turn current active node off
        (deactivate-node! (nth nodes @active-node-index))
        ;increment active-node-index
        (swap! active-node-index #(mod (inc %) (count nodes)))
        ;activate next node
        (activate-node! (nth nodes @active-node-index))
        (reset! audio-fader-state @(:state (nth nodes @active-node-index))))))


(defn calc-next-tick-time [cycle-freq]
  (fn [at-time]
      (+ at-time
         (/ 1. @cycle-freq))))


(defn create [box n audio-fader-state cycle-fader & {:keys [freq]
                       :or {freq 0.5}}]
  (let [cycle-element (create-element :div)
        positions (arrange box n)
        nodes (map (partial make-node audio-fader-state cycle-fader) positions)
        tick! (make-ticker nodes audio-fader-state)]
    (doall
      (map (fn [node] (append! cycle-element (:svg-element node))) nodes))
    {:cycle-element cycle-element
     :nodes nodes
     :freq freq
     :tick! tick!
     :cycle-fader cycle-fader}))
