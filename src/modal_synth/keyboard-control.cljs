(ns modal-synth.keyboard-control
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [modal-synth.utils :refer [listen]]
            [modal-synth.fader :as fader]
            [modal-synth.webaudio :as webaudio]
            [dommy.core :as dommy :refer [sel1]]
            [cljs.core.async :refer [<! >! put! chan close! alts!]]))


(defn fire-noise-ar [synth-state]
  (let [noise-gain (:noise-gain synth-state)]
    (webaudio/apply-ar-envelope (webaudio/get-gain noise-gain)
                                (webaudio/make-adsr 0 0.01 1 0.1 :slope :linear)
                                (:audio-context synth-state))
    (print "Fire AR!"))) 


(defn fire-noise-adsr [noteoff-chan synth-state]
  (let [noise-gain (:noise-gain synth-state)]
    (webaudio/apply-adsr (webaudio/get-gain noise-gain)
                         (webaudio/make-adsr 0 0.2 0.4 0.3 :slope :linear)
                         noteoff-chan
                         (:audio-context synth-state))
    (print "Fire ADSR!"))) 


(defonce keyboard-state
  {:68 (atom :up)
   :70 (atom :up)})


(defonce key-map
  (let [up-chan-68 (chan)
        up-chan-70 (chan)]
    {:68 {:down (partial fire-noise-adsr up-chan-68)
          :up (fn [synth-state]
                  (put! up-chan-68 :up)
                  (reset! (:68 keyboard-state) :up))}
     :70 {:down fire-noise-ar
          :up (fn [synth-state]
                     (put! up-chan-70 :up)
                     (reset! (:70 keyboard-state) :up))}
     ;can make function to return [:xx-up fn .. put!]
     ; and simply assoc key-map with each new keyup ting
     }))


(defn init [synth-state]
  (let [keydown-chan (listen js/window "keydown")
        keyup-chan (listen js/window "keyup")]
    (go (while true
               (alt!
                 keydown-chan ([keydown-event]
                               (let [key-code-keyword (-> keydown-event
                                                          .-keyCode
                                                          str
                                                          keyword)
                                     key-state (key-code-keyword keyboard-state)
                                     keydown-command (-> key-code-keyword
                                                         key-map
                                                         :down)]
                                 (if (nil? keydown-command)
                                   (do
                                     (print key-code-keyword)
                                     (fire-noise-ar synth-state))
                                   (when (= @key-state :up)
                                     (reset! key-state :down)
                                     (keydown-command synth-state)))))
                 keyup-chan ([keyup-event]
                             (let [key-code-keyword (-> keyup-event
                                                        .-keyCode
                                                        str
                                                        keyword)
                                   key-state (key-code-keyword keyboard-state)
                                   keyup-command (-> key-code-keyword
                                                     key-map
                                                     :up)]
                               (if (nil? keyup-command)
                                 (do
                                   (print key-code-keyword)
                                   ;(reset! key-state :up)
                                   )
                                 (when (= @key-state :down)
                                   (keyup-command synth-state))))))))))
