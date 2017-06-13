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


;set tempo
;- up and down arrows?

;make more/less cycles
;- plus and minus next to master


(defn make-node [audio-fader cycle-fader]
  (let [node-element (create-element :div)
        node-state (atom @(:state @audio-fader))]
    (set-class! node-element "cycle-node")
    (let [mousedown (fn [element state]
                        (when @cycle-fader
                          (reset! (:state @cycle-fader) @state)
                          (set-style! (:box @cycle-fader) :visibility "visible")))
          mouseup (fn [element state]
                      (when @cycle-fader
                        (reset! state @(:state @cycle-fader))
                        (set-style! (:box @cycle-fader) :visibility "hidden")))
          mousemove (fn [element state]
                        (when @cycle-fader
                          (reset! (:state @cycle-fader) @state)))]
      (fader/mouse-control! node-element
                            node-state
                            :mousedown-func mousedown
                            :mouseup-func mouseup
                            :mousemove-func mousemove)
      {:element node-element
       :state node-state})))


(defn deactivate-node! [{:keys [element]}]
  (set-style! element :background-color "rgba(0,0,0,0.2)"))


(defn activate-node! [{:keys [element]}]
  (set-style! element :background-color "rgba(50,130,200,0.6)"))


(defn make-ticker [nodes audio-fader]
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
          (reset! (:state @audio-fader) @(:state (nth @nodes @active-node-index)))))))


(defn calc-next-tick-time [cycle-freq]
  (fn [at-time]
      (+ at-time
         (/ 1. @cycle-freq))))


(defn add-node! [cycle- audio-fader cycle-fader]
  (let [new-node (make-node audio-fader cycle-fader)
        last-node (last @(:nodes cycle-))]
    (reset! (:state new-node) @(:state last-node))
    (append! (:node-div cycle-) (:element new-node))
    (swap! (:nodes cycle-) conj new-node)))


(defn remove-node! [nodes]
  (let [node (last @nodes)]
    (remove! (:element node))
    (swap! nodes #(vec (drop-last %)))))


(defn make-increment-element [nodes node-div audio-fader cycle-fader]
  (let [element (create-element :div)
        horizontal (create-element :div)  
        vertical (create-element :div)]
    (set-style! element
                :top "5px"
                :left "25px"
                :display "table-cell"
                :position "relative")
    (set-attr! element
               :onmousedown #(add-node! {:nodes nodes :node-div node-div} audio-fader cycle-fader))
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


(defn create [topleft n audio-fader cycle-fader drag-and-drop-cycle & {:keys [freq]
                                                                       :or {freq 0.5}}]
  (let [cycle-element (create-element :div)
        node-div (create-element :div)
        cycle-fader-wrap (atom cycle-fader)
        audio-fader-wrap (atom audio-fader)
        nodes (atom (vec (for [_ (range n)] (make-node audio-fader-wrap cycle-fader-wrap))))
        controls-div (create-element :div)
        fader-assign-handle (create-element :div)
        decrement-nodes (make-decrement-element nodes)
        increment-nodes (make-increment-element nodes
                                                node-div
                                                audio-fader-wrap
                                                cycle-fader-wrap)
        tick! (make-ticker nodes audio-fader-wrap)
        dragstart-chan (listen fader-assign-handle "dragstart")]
    (set-class! cycle-element "cycle")
    (set-class! node-div "node-div")
    (set-class! controls-div "controls-div")
    (append! cycle-element node-div)
    (set-class! fader-assign-handle "slider-handle")
    (set-style! fader-assign-handle
                :position "relative"
                :top "5px"
                :display "table-cell")
    (set-attr! fader-assign-handle
               :draggable "true")
    (go (while true
               (let [event (<! dragstart-chan)
                     dragend-chan (listen fader-assign-handle "dragend")]
                 (reset! drag-and-drop-cycle {:audio-fader audio-fader-wrap
                                              :cycle-fader cycle-fader-wrap})
                 (<! dragend-chan)
                 (reset! drag-and-drop-cycle nil))))
    (append! cycle-element fader-assign-handle)
    (append! cycle-element decrement-nodes)
    (append! cycle-element increment-nodes)
    (swap! nodes doall)
    (doall
      (map (fn [node] (append! node-div (:element node))) @nodes)) 
    {:element cycle-element
     :node-div node-div
     :nodes nodes
     :freq freq
     :tick! tick!
     :cycle-fader cycle-fader-wrap
     :audio-fader audio-fader-wrap}))
