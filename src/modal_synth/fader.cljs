(ns modal-synth.fader
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [modal-synth.utils :refer [listen
                                       set-html! ]]
            [goog.dom :as dom]
            [goog.events :as events]
            [cljs.core.async :refer [<! >! put! chan close! alts!]]
            [dommy.core :as dommy :refer [sel1 set-style! set-class! create-element append!]]))


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

(defmethod draw :Gain [fader]
  (draw-standard fader))

(defmethod draw :Delay [fader]
  (draw-standard fader))

(defmethod draw :Bandpass [bp]
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


(defn mouse-control! [element state chan]
  "Handler for mouse events relating to an element"
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


;(defn create [elements fader-state fader-type]
;  "Initialise fader object, start 'go' block for updating state"
;  (let [receive-chan (chan)
;        bar (:bar elements)
;        box (:box elements)
;        handle (:handle elements)]
;    {:state fader-state
;     :chan receive-chan
;     :bar bar
;     :handle handle
;     :box box
;     :type fader-type}))


(defn init [fader]
  ;re-draw the faders whenever the state is updated,
  ; by mouse or by automation
  (add-watch (:state fader)
             :draw-watcher
             (fn [key atom old-state new-state]
                 (draw fader)))
  ;kick start processes to update the state in response to mouse-move inputs
  (go (while true
             (let [new-level (<! (:chan fader))]
               (reset! (:state fader) new-level))))
  ;kick start processes to listen for mouse inputs
  (mouse-control! (:handle fader) (:state fader) (:chan fader))
  ;initialise the states to sync up all that depend on them
  (reset! (:state fader) @(:state fader)))


(defn create [fader-state fader-type]
  (let [box (create-element :div)
        bar (create-element :div)
        handle (create-element :div)
        receive-chan (chan)
        fader {:state fader-state
               :chan receive-chan
               :box box
               :bar bar
               :handle handle
               :type fader-type}]  
    (set-class! box "slider")
    (set-class! bar "slider-bar")
    (set-class! handle "slider-handle")
    (append! box bar)
    (append! box handle)
    fader))


(defn init-bandpass [bp]
  ;re-draw the faders whenever the state is updated,
  ; by mouse or by automation
  (add-watch (:state-highpass bp)
             :draw-watcher
             (fn [key atom old-state new-state]
                 (draw bp)))
  (add-watch (:state-lowpass bp)
             :draw-watcher
             (fn [key atom old-state new-state]
                 (draw bp)))
  ;kick start processes to update the state in response to mouse-move inputs
  (go (while true
             (let [new-level (<! (:chan-highpass bp))
                   highpass-max (- @(:state-lowpass bp) bandpass-min-bandwidth)]
               (if (< new-level highpass-max)
                 (reset! (:state-highpass bp) new-level)
                 (reset! (:state-highpass bp) highpass-max)))))
  (go (while true
             (let [new-level (<! (:chan-lowpass bp))
                   lowpass-min (+ @(:state-highpass bp) bandpass-min-bandwidth)]
               (if (> new-level lowpass-min)
                 (reset! (:state-lowpass bp) new-level)
                 (reset! (:state-lowpass bp) lowpass-min)))))
  ;kick start processes to listen for mouse inputs
  (mouse-control! (:handle-highpass bp) (:state-highpass bp) (:chan-highpass bp))
  (mouse-control! (:handle-lowpass bp) (:state-lowpass bp) (:chan-lowpass bp))
  (mouse-control! (:bar bp) (:state-highpass bp) (:chan-highpass bp))
  (mouse-control! (:bar bp) (:state-lowpass bp) (:chan-lowpass bp))
  ;initialise the states to sync up all that depend on them
  (reset! (:state-highpass bp) @(:state-highpass bp))
  (reset! (:state-lowpass bp) @(:state-lowpass bp)))


(defn create-bandpass [state-highpass state-lowpass]
  (let [box (create-element :div)
        bar (create-element :div)
        bar-upper (create-element :div)
        bar-lower (create-element :div)
        handle-highpass (create-element :div)
        handle-highpass-vert (create-element :div)
        handle-highpass-horiz (create-element :div)
        handle-lowpass (create-element :div)
        handle-lowpass-vert (create-element :div)
        handle-lowpass-horiz (create-element :div)
        receive-chan-highpass (chan)
        receive-chan-lowpass (chan)
        bp {:state-highpass state-highpass
            :state-lowpass state-lowpass
            :chan-highpass receive-chan-highpass
            :chan-lowpass receive-chan-lowpass
            :bar bar
            :box box
            :handle-highpass handle-highpass
            :handle-lowpass handle-lowpass 
            :type :Bandpass}]
    (set-class! box "bandpass")
    (set-class! bar "bandpass-bar")
    (set-class! bar-upper "bandpass-bar-upper")
    (set-class! bar-lower "bandpass-bar-lower")
    (set-class! handle-highpass "bandpass-handle-highpass")
    (set-class! handle-highpass-vert "bandpass-handle-highpass-vert")
    (set-class! handle-highpass-horiz "bandpass-handle-highpass-horiz")
    (set-class! handle-lowpass "bandpass-handle-lowpass")
    (set-class! handle-lowpass-vert "bandpass-handle-lowpass-vert")
    (set-class! handle-lowpass-horiz "bandpass-handle-lowpass-horiz")
    (append! box bar)
    (append! bar bar-upper)
    (append! bar bar-lower)
    (append! box handle-highpass)
    (append! handle-highpass handle-highpass-vert)
    (append! handle-highpass handle-highpass-horiz)
    (append! box handle-lowpass)
    (append! handle-lowpass handle-lowpass-vert)
    (append! handle-lowpass handle-lowpass-horiz)
    bp))
