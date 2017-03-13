(ns modal-synth.fader
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [modal-synth.utils :refer [listen
                                       set-html! ]]
            [modal-synth.layout :refer [layout-params]]
            [goog.dom :as dom]
            [goog.events :as events]
            [cljs.core.async :refer [<! >! put! chan close! alts!]]
            [dommy.core :as dommy :refer [sel1 set-style!]]))


;(defn getAbsolutePositionLeft [elt]
;  "not used"
;  (loop [element elt x 0]
;        (if (.-offsetParent element)
;          (recur (.-offsetParent element) (+ x (.-offsetLeft element)))
;          x)))

(def bandpass-min-bandwidth 0.00)


(defmulti draw :type)

(defn draw-standard [fader]
  (let [fader-width (dommy/px (:box fader) :width)
        handle-pos (* @(:state fader) fader-width)]
    (set-style! (:bar fader)
                :width
                (str handle-pos "px")) 
    (set-style! (:handle fader)
                :left
                (str (+ handle-pos 1) "px"))))

(defmethod draw "Gain" [fader]
  (draw-standard fader))

(defmethod draw "Delay" [fader]
  (draw-standard fader))

(defmethod draw "Bandpass" [bp]
  (let [fader-width (dommy/px (:box bp) :width)
        handle-width (dommy/px (:handle-lower bp) :width)
        handle-lower-pos (* @(:state-lower bp) fader-width)
        handle-upper-pos (* @(:state-upper bp) fader-width)
        bar-left (+ handle-lower-pos handle-width 1)
        bar-right (- handle-upper-pos 1)]
    (set-style! (:handle-lower bp)
                :left
                (str handle-lower-pos "px"))
    (set-style! (:handle-upper bp)
                :left
                (str handle-upper-pos "px"))
    (set-style! (:bar bp)
                :left
                (str bar-left "px")
                :width
                (str (- bar-right bar-left) "px"))))
  

(defn make-drag-scaler [state click-event]
  "Make closure to calculate the amount the fader should move
  due to the change in mouse pos"
  (let [click-x  (.-clientX click-event)
        fader-width (dommy/px (sel1 :#channel1) :width)
        old-val @state]
    (fn [move-event]
        (let [move-x (.-clientX move-event)
              level-moved (/ (- move-x click-x)
                             fader-width)
              level (+ old-val level-moved)]
          (cond 
            (>= level 1) 1
            (<= level 0) 0
            :else level)))))


(defn mouse-control [element state chan]
  "Handler for mouse events relating to a fader"
  (let [mousedown-chan (listen element "mousedown")]
    (go (while true
               (let [click-event (<! mousedown-chan)]
                 (let [move-chan (listen js/window "mousemove")
                       mouseup-chan (listen js/document "mouseup")
                       drag-scaler (make-drag-scaler state click-event)]
                   (set-style! element
                               :cursor
                               "move")
                   (loop []
                         (alt!
                           move-chan ([move-event]
                                      (>! chan (drag-scaler move-event))
                                      (recur))
                           mouseup-chan ([]
                                         (close! mouseup-chan)
                                         (close! move-chan)
                                         (set-style! element
                                                     :cursor
                                                     "pointer"))))))))))


(defn create [elements fader-state fader-type]
  "Initialise fader object, start 'go' block for updating state"
  (let [receive-chan (chan)
        bar (:bar elements)
        box (:box elements)
        handle (:handle elements)]
    {:state fader-state
     :chan receive-chan
     :bar bar
     :handle handle
     :box box
     :type fader-type}))


(defn create-bandpass [elements state-lower state-upper]
  (let [receive-chan-lower (chan)
        receive-chan-upper (chan)]
    {:state-lower state-lower
     :state-upper state-upper
     :chan-lower receive-chan-lower
     :chan-upper receive-chan-upper
     :bar (:bar elements)
     :box (:box elements)
     :handle-lower (:handle-lower elements)
     :handle-upper (:handle-upper elements)
     :type "Bandpass"}))


(defn init [fader]
  (draw fader)   
  (mouse-control (:handle fader) (:state fader) (:chan fader))
  (reset! (:state fader) @(:state fader))
  (go (while true
             (let [new-level (<! (:chan fader))]
               (reset! (:state fader) new-level)
               (draw fader)))))


(defn init-bandpass [bp]
    (draw bp)
    (reset! (:state-lower bp) @(:state-lower bp))
    (reset! (:state-upper bp) @(:state-upper bp))
    ; process to update lower cutoff
    (go (while true
                (let [new-level (<! (:chan-lower bp))
                      lower-max (- @(:state-upper bp) bandpass-min-bandwidth)]
                  (if (< new-level lower-max)
                    (reset! (:state-lower bp) new-level)
                    (reset! (:state-lower bp) lower-max))
                  (draw bp))))
     ; process to update upper cutoff
     (go (while true
                 (let [new-level (<! (:chan-upper bp))
                       upper-min (+ @(:state-lower bp) bandpass-min-bandwidth)]
                   (if (> new-level upper-min)
                     (reset! (:state-upper bp) new-level)
                     (reset! (:state-upper bp) upper-min))
                   (draw bp))))
     (mouse-control (:handle-lower bp) (:state-lower bp) (:chan-lower bp))
     (mouse-control (:handle-upper bp) (:state-upper bp) (:chan-upper bp))
     (mouse-control (:bar bp) (:state-lower bp) (:chan-lower bp))
     (mouse-control (:bar bp) (:state-upper bp) (:chan-upper bp)))  
