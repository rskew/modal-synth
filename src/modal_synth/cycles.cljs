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
            [dommy.core :as dommy :refer [create-element sel1 append! set-attr! set-class! set-style! attr remove!]]
            [cljs.core.async :refer [<! >! put! chan close! alts! timeout]]))


;add/remove nodes

;assign to fader
;- grab fader-selection-symbol and drag onto fader?
;  - make fader-selection-symbol draggable
;  - set faders  with ondragover, ondrop easy peasy

;set tempo

;radius of node in pixels
(def node-radius 14)


(defn arrange [{:keys [x y]} n]
  (let [width 400
        angles (map #(/ (* 2. Math/PI %) n) (range n))
        radius (- (/ width 2) node-radius)
        angle-to-pos (fn [angle] {:x (+ (* radius (Math/sin angle)) x (/ width 2))
                                  :y (+ (* radius (- (Math/cos angle))) y (/ width 2))})]
    (map angle-to-pos angles)))


(defn make-node [audio-fader-state cycle-fader]
  (let [node-element (create-element :div)
        node-state (atom @audio-fader-state)]
    (set-class! node-element "cycle-node")
    (let [mousedown (fn [element state output-chan]
                        (reset! state @node-state)
                        (set-style! (:box cycle-fader) :visibility "visible"))
          mouseup (fn [element state output-chan]
                      (reset! node-state @state)
                      (set-style! (:box cycle-fader) :visibility "hidden"))]
      {:element node-element
       :state node-state
       :mouseup mouseup
       :mousedown mousedown})))


(defn deactivate-node! [{:keys [element]}]
  (set-style! element :background-color "rgba(0,0,0,0.2)"))


(defn activate-node! [{:keys [element]}]
  (set-style! element :background-color "rgba(50,130,200,0.6)"))


(defn make-ticker [nodes audio-fader-state]
  (let [active-node-index (atom 0)]
    (fn [event-fire-time]
        ;; turn current active node off
        (when (< @active-node-index (count @nodes))
          (deactivate-node! (nth @nodes @active-node-index)))
        ;; increment active-node-index
        (swap! active-node-index #(mod (inc %) (count @nodes)))
        ;; activate next node
        (when (< @active-node-index (count @nodes))
          (activate-node! (nth @nodes @active-node-index))
          (reset! audio-fader-state @(:state (nth @nodes @active-node-index)))))))


(defn calc-next-tick-time [cycle-freq]
  (fn [at-time]
      (+ at-time
         (/ 1. @cycle-freq))))


(defn add-node! [cycle- audio-fader-state cycle-fader]
  (let [new-node (make-node audio-fader-state cycle-fader)
        last-node (last @(:nodes cycle-))]
    (reset! (:state new-node) @(:state last-node))
    (append! (:node-div cycle-) (:element new-node))
    (fader/init-cycle! cycle-fader new-node)  
    (swap! (:nodes cycle-) conj new-node)))


(defn remove-node! [nodes]
  (let [node (last @nodes)]
    (remove! (:element node))
    (swap! nodes #(vec (drop-last %)))))


(defn make-increment-element [nodes node-div audio-fader-state cycle-fader]
  (let [element (create-element :div)
        horizontal (create-element :div)  
        vertical (create-element :div)]
    (set-style! element
                :top "5px"
                :left "25px"
                :display "table-cell"
                :position "relative")
    (set-attr! element
               :onmousedown #(add-node! {:nodes nodes :node-div node-div} audio-fader-state cycle-fader))
    (append! element horizontal)
    (set-style! horizontal
                :background-color "black"
                :top "7px"
                :height "6px"
                :width "20px"
                :position "absolute")
    (append! element vertical)
    (set-style! vertical
                :background-color "black"
                :left "7px"
                :height "20px"
                :width "6px"
                :position "absolute")
    element))


(defn make-decrement-element [nodes]
  (let [element (create-element :div)
        minus (create-element :div)]
    (append! element minus)
    (set-style! element
                :top "5px"
                :left "5px"
                :display "table-cell"
                :position "relative")
    (set-attr! element
               :onmousedown #(remove-node! nodes))
    (set-style! minus
                :background-color "black"
                :top "7px"
                :height "6px"
                :width "20px"
                :position "absolute")
    element))


(defn create [topleft n audio-fader-state cycle-fader & {:keys [freq]
                       :or {freq 0.5}}]
  (let [cycle-element (create-element :div)
        node-div (create-element :div)
        nodes (atom (vec (for [_ (range n)] (make-node audio-fader-state cycle-fader))))
        controls-div (create-element :div)
        fader-assign-handle (create-element :div)
        decrement-nodes (make-decrement-element nodes)
        increment-nodes (make-increment-element nodes node-div audio-fader-state cycle-fader)
        tick! (make-ticker nodes audio-fader-state)]
    (set-class! cycle-element "cycle")
    (set-class! node-div "node-div")
    (set-class! controls-div "controls-div")
    (append! cycle-element node-div)
    (set-class! fader-assign-handle "slider-handle")
    (set-style! fader-assign-handle
                :position "relative"
                :top "5px"
                :display "table-cell")
    (append! cycle-element fader-assign-handle)
    (append! cycle-element decrement-nodes)
    (append! cycle-element increment-nodes)
    (swap! nodes doall)
    (doall
      (map (fn [node] (append! node-div (:element node))) @nodes)) 
    {:cycle-element cycle-element
     :node-div node-div
     :nodes nodes
     :freq freq
     :tick! tick!
     :cycle-fader cycle-fader}))
