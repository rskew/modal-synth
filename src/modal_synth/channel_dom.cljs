(ns modal-synth.channel-dom
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [modal-synth.fader :as fader]
            [dommy.core :as dommy :refer [sel1 append! create-element set-class!
                                          set-attr! replace! attr]]))


(defn add-to [parent element]
  (let [id (attr element :id)
        old-element (sel1 (str "#" id))]
    (if old-element
      (replace! old-element element)
      (append! parent element))))


(defn init [channel]
  (fader/init (:gain channel))
  (fader/init (:delay channel))
  (fader/init-bandpass (:bandpass channel)))


(defn create [gain-fader-state
              delay-fader-state
              highpass-cutoff-state
              lowpass-cutoff-state
              id]
  (let [channel-element (create-element :div)
        gain-fader (fader/create gain-fader-state :Gain)
        delay-fader (fader/create delay-fader-state :Delay)
        bandpass (fader/create-bandpass highpass-cutoff-state lowpass-cutoff-state)
        channel {:channel-element channel-element
                 :gain gain-fader
                 :delay delay-fader
                 :bandpass bandpass}]
    (append! channel-element (:box gain-fader))
    (append! channel-element (:box delay-fader))
    (append! channel-element (:box bandpass))
    (set-class! channel-element "channel")
    (set-attr! channel-element
               "onmousedown"
               "event.preventDefault ? event.preventDefault() : event.returnValue = false"
               :id
               id)
    (add-to (sel1 :body) channel-element)
    (init channel)
    channel))


(defn create-divider [id]
  (let [divider-element (create-element :div)]
    (set-class! divider-element "divider")
    (set-attr! divider-element :id id)
    divider-element))
