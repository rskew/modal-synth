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
        handle-width (dommy/px (:handle-highpass bp) :width)
        handle-highpass-pos (* @(:state-highpass bp) fader-width)
        handle-lowpass-pos (* @(:state-lowpass bp) fader-width)
        bar-left (+ handle-highpass-pos handle-width 1)
        bar-right (- handle-lowpass-pos 1)]
    (set-style! (:handle-highpass bp)
                :left
                (str handle-highpass-pos "px"))
    (set-style! (:handle-lowpass bp)
                :left
                (str handle-lowpass-pos "px"))
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


(defn create-bandpass [elements state-highpass state-lowpass]
  (let [receive-chan-highpass (chan)
        receive-chan-lowpass (chan)]
    {:state-highpass state-highpass
     :state-lowpass state-lowpass
     :chan-highpass receive-chan-highpass
     :chan-lowpass receive-chan-lowpass
     :bar (:bar elements)
     :box (:box elements)
     :handle-highpass (:handle-highpass elements)
     :handle-lowpass (:handle-lowpass elements)
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
    (reset! (:state-highpass bp) @(:state-highpass bp))
    (reset! (:state-lowpass bp) @(:state-lowpass bp))
    ; process to update highpass cutoff
    (go (while true
                (let [new-level (<! (:chan-highpass bp))
                      highpass-max (- @(:state-lowpass bp) bandpass-min-bandwidth)]
                  (if (< new-level highpass-max)
                    (reset! (:state-highpass bp) new-level)
                    (reset! (:state-highpass bp) highpass-max))
                  (draw bp))))
     ; process to update lowpass cutoff
     (go (while true
                 (let [new-level (<! (:chan-lowpass bp))
                       lowpass-min (+ @(:state-highpass bp) bandpass-min-bandwidth)]
                   (if (> new-level lowpass-min)
                     (reset! (:state-lowpass bp) new-level)
                     (reset! (:state-lowpass bp) lowpass-min))
                   (draw bp))))
     (mouse-control (:handle-highpass bp) (:state-highpass bp) (:chan-highpass bp))
     (mouse-control (:handle-lowpass bp) (:state-lowpass bp) (:chan-lowpass bp))
     (mouse-control (:bar bp) (:state-highpass bp) (:chan-highpass bp))
     (mouse-control (:bar bp) (:state-lowpass bp) (:chan-lowpass bp)))  
