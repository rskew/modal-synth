(ns modal-synth.fader
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [modal-synth.utils :refer [listen]]
            [goog.dom :as dom]
            [goog.events :as events]
            [cljs.core.async :refer [<! >! put! chan close! alts!]]
            [dommy.core :as dommy :refer [sel1 set-style! set-class! set-attr! create-element append!]]))


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
  

(defn make-drag-scaler 
  "Make closure to calculate the amount the fader should move
  due to the change in mouse pos"
  [state click-event]
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


(defn mouse-control!
  "Handler for mouse events relating to an element"
  [element state & {:keys [mousedown-func mouseup-func mousemove-func]}]
  (let [mousedown-chan (listen element "mousedown")]
    (go (while true
               (let [click-event (<! mousedown-chan)]
                 (when mousedown-func
                   (mousedown-func element state))
                 (let [move-chan (listen js/window "mousemove")
                       mouseup-chan (listen js/document "mouseup")
                       drag-scaler (make-drag-scaler state click-event)]
                   (set-style! element
                               :cursor
                               "move")
                   (loop []
                         (alt!
                           move-chan ([move-event]
                                      (when mousemove-func
                                        (mousemove-func element state))
                                      (reset! state (drag-scaler move-event))
                                      (recur))
                           mouseup-chan ([]
                                         (when mouseup-func
                                           (mouseup-func element state))         
                                         (close! mouseup-chan)
                                         (close! move-chan)
                                         (set-style! element
                                                     :cursor
                                                     "pointer"))))))))))


(defn init!
  "re-draw the faders whenever the state is updated,
  by mouse or by automation"
  [fader]
  (add-watch (:state fader)
             :draw-watcher
             (fn [key atom old-state new-state]
                 (draw fader)))
  ;; kick start processes to update the state in response to mouse-move inputs
  ;; kick start processes to listen for mouse inputs
  (mouse-control! (:handle fader) (:state fader))
  (set-class! (:bar fader) (str (dommy/class (:bar fader)) " audio-fader"))
  ;; initialise the states to sync up all that depend on them
  (reset! (:state fader) @(:state fader)))


(defn init-cycle! [fader]
  ;decouple fader from node
  ;- mousecontrol goes to cycle-node side
  (add-watch (:state fader)
             :draw-watcher
             (fn [key atom old-state new-state]
                 (draw fader)))
  (set-class! (:bar fader) (str (dommy/class (:bar fader)) " cycle-fader"))
  ;; hide it!
  (set-style! (:bar fader) :background-color "rgba(0,0,0,0.3)")
  (set-style! (:box fader) :visibility "hidden"))


(defn create [fader-state fader-type]
  (let [box (create-element :div)
        bar (create-element :div)
        handle (create-element :div)
        fader {:state fader-state
               :chan (chan)
               :box box
               :bar bar
               :handle handle
               :type fader-type}]  
    (set-class! box "slider box")
    (set-class! bar "slider-bar")
    (set-class! handle "slider-handle")
    (set-attr! box
               :ondragover "event.preventDefault()") 
    (append! box bar)
    (append! box handle)
    fader))


(defn init-bandpass!
  "re-draw the faders whenever the state is updated,
  by mouse or by automation"
  [bp]
  (add-watch (:state-highpass bp)
             :draw-watcher
             (fn [key atom old-state new-state]
                 (draw bp)))
  (add-watch (:state-lowpass bp)
             :draw-watcher
             (fn [key atom old-state new-state]
                 (draw bp)))
  ;; kick start processes to update the state in response to mouse-move inputs
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
  ;; kick start processes to listen for mouse inputs
  (mouse-control! (:handle-highpass bp) (:state-highpass bp) (:chan-highpass bp))
  (mouse-control! (:handle-lowpass bp) (:state-lowpass bp) (:chan-lowpass bp))
  (mouse-control! (:bar bp) (:state-highpass bp) (:chan-highpass bp))
  (mouse-control! (:bar bp) (:state-lowpass bp) (:chan-lowpass bp))
  ;; initialise the states to sync up all that depend on them
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
    (set-class! box "bandpass box")
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
