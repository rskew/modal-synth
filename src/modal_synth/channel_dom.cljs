(ns modal-synth.channel-dom
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [modal-synth.fader :as fader]
            [dommy.core :as dommy :refer [sel1 append! create-element set-class!
                                          set-attr! set-style! replace! attr]]))


(defn add-to! [parent element]
  (let [id (attr element :id)
        old-element (sel1 (str "#" id))]
    (if old-element
      (replace! old-element element)
      (append! parent element))))


(defn init! [channel]
  (fader/init! (:gain channel))
  (fader/init! (:delay channel))
  (fader/init-bandpass! (:bandpass channel)))


(defn init-cycle! [channel]
  (fader/init-cycle! (:gain channel))
  (fader/init-cycle! (:delay channel))
  (fader/init-bandpass! (:bandpass channel)))


(defn create-spectrum-vis []
  (let [canvas (create-element :canvas)
        context (-> canvas (.getContext "2d"))]
    (set-class! canvas "spectrum-vis")
    {:canvas-element canvas
     :context context}))


(defn make [gain-fader-state
            delay-fader-state
            highpass-cutoff-state
            lowpass-cutoff-state
            id]
  (let [channel-element (create-element :div)
        gain-fader (fader/create gain-fader-state :Gain)
        delay-fader (fader/create delay-fader-state :Delay)
        bandpass (fader/create-bandpass highpass-cutoff-state lowpass-cutoff-state)
        spectrum-vis (create-spectrum-vis)
        channel {:element channel-element
                 :gain gain-fader
                 :delay delay-fader
                 :bandpass bandpass
                 :spectrum-vis spectrum-vis}]
    (append! channel-element (:box gain-fader))
    (append! channel-element (:box delay-fader))
    (append! channel-element (:box bandpass))
    (append! (:box bandpass) (:canvas-element spectrum-vis))
    (set-class! channel-element "channel")
    (set-attr! channel-element
               "onmousedown"
               "event.preventDefault ? event.preventDefault() : event.returnValue = false"
               :id id)
    channel))


(defn create! [gain-state
               delay-state
               highpass-state
               lowpass-state
               id]
  (let [channel (make gain-state delay-state highpass-state lowpass-state id)]
    (append! (sel1 :body) (:element channel))
    (init! channel)
    channel))


(defn create-cycle! [gain-state delay-state highpass-state lowpass-state id]
  (let [channel (make gain-state delay-state highpass-state lowpass-state id)]
    (set-class! (:element channel) "cycle-channel")
    (set-style! (-> channel :gain :box) :visibility "hidden")
    (set-style! (-> channel :delay :box) :visibility "hidden")
    (set-style! (-> channel :bandpass :box) :visibility "hidden")
    (append! (sel1 :body) (:element channel))
    (init-cycle! channel)
    channel))


(defn create-divider [id]
  (let [divider-element (create-element :div)]
    (set-class! divider-element "divider")
    (set-attr! divider-element :id id)
    divider-element))
