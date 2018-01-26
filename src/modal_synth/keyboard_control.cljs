(ns modal-synth.keyboard-control
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [modal-synth.utils :refer [listen]]
            [modal-synth.fader :as fader]
            [modal-synth.webaudio :as webaudio]
            [dommy.core :as dommy :refer [sel1]]
            [cljs.core.async :refer [<! >! put! chan close! alts!]]))

;Clunky keyboard-based fader control scheme.
; more thought needs to be put into how commands will be composed and higher-level commands will be constructed.
; also research other existing ways of using the keyboard for controlling control panels.
; need a 'learn mode' where state is clearly visually displayed

;Fader control scheme:
; fader selection then new position then transition time
; when all these are set, event is submitted
; press spacebar to initialise all submitted events
; selecting new fader before new position + transition time are set aborts current event
; can set event to happen after previous events on a fader
; new position in current event shown as different colour handle
; - new position in future events shown if handle that is a new colour again

;Fader Selection
; 'asdf' select gain, delay, lower, upper, lower + upper
; 'uiop' select channel number in binary
; hold 'asdf' to select fader type, lift and re-press to re-select binary channel number
; ???'jk' for up/down???

;Set New Position
; 'g' for go to
; new position shown by new fader handle
; - colour: blue?
; 'j' for relative lower
; 'k' for relative higher
; 'qweruiop' for 8 bit binary number setting course position
; hit 'j' or 'k' to change direction, holding the last position of the 'new position' fader
; multi-tapping 'qweruiop' increments the fader by that amount again

;Set Transition Time
; 'l' for set transition length
; 'qweruiop' to set 8 bit binary number
; - smallest length desired: ~125ms?
; - largest length desired: 128 seconds?
;   - can chain multiple events
; - requires 10 bits
;   - 'm' to set a multiplier, 'qweruiop' to choose number to multiply by

;Cycle selection
; 'c' for cycle select
; 'qweruiop' for cycle number
; 'c;' to set cycle fader
; - release 'c' but hold ';' then use 'asdf'
; 'cp' for cycle position, 'qweruiop' to select position
; set new position as above (using 'g' etc)
; 'cn' for cycle number, 'qweruiop' for number of counts before increment
; 'cb' for cycle begin, sets the cycle to go to start position on next tick (after spacebar)

;Cycle metronome
; 'mt' for metronome time
; 'qweuriop' for new metronome time, multiply by 20 for time in BPM




(defn fire-noise-ar! [synth-state]
  (let [noise-gain (:noise-gain synth-state)]
    (webaudio/apply-ar-envelope! (webaudio/get-gain noise-gain)
                                 (webaudio/make-adsr 0 0.01 1 0.55 :slope :exponential)
                                 (:audio-context synth-state))
    (print "Fire AR!"))) 


(defn fire-noise-adsr! [noteoff-chan synth-state]
  (let [noise-gain (:noise-gain synth-state)]
    (webaudio/apply-adsr! (webaudio/get-gain noise-gain)
                          (webaudio/make-adsr 0 0.2 0.4 0.3 :slope :linear)
                          noteoff-chan
                          (:audio-context synth-state))
    (print "Fire ADSR!"))) 


(defn fire-bow-adsr! [noteoff-chan synth-state]
  (let [bow-gain (:bow-gain synth-state)]
    (webaudio/apply-adsr! (webaudio/get-gain bow-gain)
                          (webaudio/make-adsr 0 0.2 0.4 0.3 :slope :linear)
                          noteoff-chan
                          (:audio-context synth-state))
    (print "Fire Bow ADSR!"))) 


(defonce keyboard-state
  {:66 (atom :up)
   :68 (atom :up)
   :70 (atom :up)
   :80 (atom :up)})  


(def key-map
  (let [up-chan-66 (chan)
        up-chan-68 (chan)
        up-chan-70 (chan)]
    {:66 {:down (partial fire-bow-adsr! up-chan-66)
          :up (fn [synth-state]
                  (put! up-chan-66 :up)
                  (reset! (:66 keyboard-state) :up))}
     :68 {:down (partial fire-noise-adsr! up-chan-68)
          :up (fn [synth-state]
                  (put! up-chan-68 :up)
                  (reset! (:68 keyboard-state) :up))}
     :70 {:down fire-noise-ar!
          :up (fn [synth-state]
                     (put! up-chan-70 :up)
                     (reset! (:70 keyboard-state) :up))}
     :80 {:down (fn [synth-state]
                    (print synth-state)
                    (print (-> synth-state
                               :audio-context
                               .-sampleRate)))
          :up (fn [synth-state]
                     (put! up-chan-70 :up)
                     (reset! (:80 keyboard-state) :up))}
     ;can make function to return [:xx-up fn .. put!]
     ; and simply assoc key-map with each new keyup ting
     }))


(defn init! [synth-state]
  "break this up"
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
                                     ;; fire noise if a key other than
                                     ;;  alt, ctrl, t, r, windows, 0-9 is pressed
                                     (when-not (#{:18 :91 :17 :82 :84 :27 :48 :49
                                                  :50 :51 :52 :53 :54 :55 :56 :57} key-code-keyword)
                                               (fire-noise-ar! synth-state)))
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
