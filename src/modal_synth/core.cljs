(ns modal-synth.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [modal-synth.utils :refer [listen
                                       set-html!]]
            [modal-synth.channel-dom :as channel-dom]
            [modal-synth.fader :as fader]
            [modal-synth.webaudio :as webaudio]
            [modal-synth.keyboard-control :as keyboard-control]
            [goog.dom :as dom]
            [goog.events :as events]
            [dommy.core :as dommy :refer [sel1 append! parent replace!]]
            [cljs.core.async :refer [<! >! put! chan close! alts!]]))


;fix default vals for showing peeps
;narrower faders

;try compressor on master only

;keyboard control
;select fader w keyboard
; - highlight
; - send to pos
;send fader to pos over time
; - setInterval()
;reverb
;adsr keyboard
; - with sliders for a, d, s, r
;master channel spectrum vis
;channel spectrum vis
;save states
;morph between states
; - morph time
; - morph curve (eg linear, step)

;make it live at subtleblank.com

;signal flow shown visually
;(no sequencer vis, only go by feel)
;control system to regulate amplitude between decay/saturation
;animate faders
; - sin wave slow perturbation to all params
;event oscillator
; - polyrythms?
;'clocks' multiple cycles, all tick together but have different number of positions
; - direct product of cyclic groups
;   - discrete motion
; - need a way of setting clocks
; - directly move corresponding fader
;   - ticking from low to high?
;   - or make arbitrary sequence?
;   - need a way to specify fader positions without actuating it and capturing new state
;     - 'send to pos' same problem
;chopper/tremolo (discourse)
;fullscreen
;rainmask into modal synth
; - audio pipe utility page?
;come back from sleep

(def gain-multiplier 1)
(def delay-time-multiplier 0.05)
(def cutoff-upper-bound 20000)
(def cutoff-lower-bound 30)


(enable-console-print!)


(defonce audio-context (webaudio/create-audio-context))


(defn make-channel-audio []
  (let [delay-line (webaudio/make-delay-line 2.0 audio-context)
        gain (webaudio/make-gain 0.1 audio-context)
        compressor (webaudio/make-compressor audio-context
                                             :ratio 4
                                             :threshold -12
                                             :attack 0
                                             :release 0
                                             )
        bandpass (webaudio/make-bandpass 0.4 0.5 audio-context)]
    {:graph (reduce webaudio/connect [delay-line bandpass gain compressor])
     :gain-graph gain
     :compressor-graph compressor
     :delay-graph delay-line
     :bandpass-graph bandpass}))


(defn gain-mapping [fader-level]
  "Maps the fader levels to appropriate gain levels"
  (* fader-level gain-multiplier))


(defn delay-mapping [fader-level]
  "Maps the fader levels to appropriate delay time levels"
  (* fader-level delay-time-multiplier))


(defn highpass-cutoff-mapping [fader-level]
  "Maps the fader levels to appropriate highpass cutoff levels"
  (+ (Math/pow (- cutoff-upper-bound cutoff-lower-bound)
               fader-level)
     cutoff-lower-bound)) 


(defn lowpass-cutoff-mapping [fader-level]
  "Maps the fader levels to appropriate lowpass cutoff levels"
  (print "updating lowpass cutoff with fader level " fader-level)
  (+ (Math/pow (- cutoff-upper-bound cutoff-lower-bound)
               fader-level)
     cutoff-lower-bound))


(defn make-watcher [graph setter mapping]
  (fn [key atom old-state new-state]
      (setter graph (mapping new-state))))


(defn init-channel-state [gain delay-time highpass-cutoff lowpass-cutoff
                          channel-audio]
  (let [channel-state {:gain (atom gain)
                       :delay (atom delay-time)
                       :highpass-cutoff(atom highpass-cutoff)
                       :lowpass-cutoff (atom lowpass-cutoff)}]
    (add-watch (:gain channel-state)
               :gain-watcher
               (make-watcher (:gain-graph channel-audio)
                             webaudio/set-gain!
                             gain-mapping)) 
    (add-watch (:delay channel-state)
               :delay-watcher
               (make-watcher (:delay-graph channel-audio)
                             webaudio/set-delay-time!
                             delay-mapping))  
    (add-watch (:lowpass-cutoff channel-state)
               :lowpass-cutoff-watcher
               (make-watcher (:bandpass-graph channel-audio)
                             webaudio/set-lowpass-cutoff!
                             lowpass-cutoff-mapping))  
    (add-watch (:highpass-cutoff channel-state)
               :highpass-cutoff-watcher
               (make-watcher (:bandpass-graph channel-audio)
                             webaudio/set-highpass-cutoff!
                             highpass-cutoff-mapping))  
    channel-state))


;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;; Make the channels
;;;;;;;;;;;;;;;;;;;;;;;;;

(defn main []
  (defonce channel1-audio (make-channel-audio))
  (defonce channel1-state (init-channel-state 0.2 0.96 0 1
                                              channel1-audio))
  (def channel1 (channel-dom/create (:gain channel1-state)
                                    (:delay channel1-state)
                                    (:highpass-cutoff channel1-state)
                                    (:lowpass-cutoff channel1-state)
                                    "channel1"))
  (def divider1 (channel-dom/create-divider "divider1"))
  (channel-dom/add-to (sel1 :body) divider1)


  (defonce channel2-audio (make-channel-audio))
  (defonce channel2-state (init-channel-state 0.7 0.73 0.5 1
                                              channel2-audio))
  (def channel2 (channel-dom/create (:gain channel2-state)
                                    (:delay channel2-state)
                                    (:highpass-cutoff channel2-state)
                                    (:lowpass-cutoff channel2-state)
                                    "channel2"))
  (def divider2 (channel-dom/create-divider "divider2"))
  (channel-dom/add-to (sel1 :body) divider2)


  (defonce channel3-audio (make-channel-audio))
  (defonce channel3-state (init-channel-state 0.8 0.12 0.2 0.6
                                              channel3-audio))
  (def channel3 (channel-dom/create (:gain channel3-state)
                                    (:delay channel3-state)
                                    (:highpass-cutoff channel3-state)
                                    (:lowpass-cutoff channel3-state)
                                    "channel3"))
  (def divider3 (channel-dom/create-divider "divider3"))
  (channel-dom/add-to (sel1 :body) divider3)


  (defonce channel4-audio (make-channel-audio))
  (defonce channel4-state (init-channel-state 0.8 0.3 0 0.4
                                              channel4-audio))
  (def channel4 (channel-dom/create (:gain channel4-state)
                                    (:delay channel4-state)
                                    (:highpass-cutoff channel4-state)
                                    (:lowpass-cutoff channel4-state)
                                    "channel4"))

  (def divider-master1 (channel-dom/create-divider "divider-master1"))
  (channel-dom/add-to (sel1 :body) divider-master1)
  (def divider-master2 (channel-dom/create-divider "divider-master2"))
  (channel-dom/add-to (sel1 :body) divider-master2)


  (defonce channel-master-audio (make-channel-audio))
  (defonce channel-master-state (init-channel-state 0.7 0.13 0 1
                                                    channel-master-audio))
  (def channel-master (channel-dom/create (:gain channel-master-state)
                                          (:delay channel-master-state)
                                          (:highpass-cutoff channel-master-state)
                                          (:lowpass-cutoff channel-master-state)
                                          "channel-master"))


  ; Connect everything up

  (defonce master-fanin (webaudio/fanin (:graph channel-master-audio)))
  (defonce master-fanout (webaudio/fanout (:graph channel-master-audio)))
  (webaudio/connect [(:graph channel1-audio) (:graph channel2-audio) (:graph channel3-audio) (:graph channel4-audio)]
                    master-fanin)
  (webaudio/connect master-fanout
                    [(:graph channel1-audio) (:graph channel2-audio) (:graph channel3-audio) (:graph channel4-audio)])
  (webaudio/connect master-fanout
                    (webaudio/destination audio-context))


  ; Make the noise osc for pingning the resonator

  (defonce noise-osc
    (let [osc-node (webaudio/make-noise-osc audio-context
                                            :highpass-cutoff 30
                                            :lowpass-cutoff 1800)]
      (webaudio/loop-noise-osc osc-node)
      (webaudio/osc-start osc-node (webaudio/get-now audio-context))
      osc-node))
  (defonce noise-gain (webaudio/make-gain 0 audio-context))
  (-> noise-osc
      (webaudio/connect noise-gain)
      webaudio/fanout
      (webaudio/connect [(:graph channel1-audio) (:graph channel2-audio) (:graph channel3-audio) (:graph channel4-audio)]))
  (defonce noise-gain-state (atom 0))
  (add-watch noise-gain-state
             :noise-gain-watcher
             (make-watcher noise-osc
                           webaudio/set-gain!
                           identity))


  ; Make the saw osc for bowing the resonator

  (defonce bow-osc
    (let [osc-node (webaudio/make-osc 
                     40
                     audio-context
                     :osc-type "sawtooth")]
      (webaudio/osc-start osc-node (webaudio/get-now audio-context))
      osc-node))
  (defonce bow-gain (webaudio/make-gain 0 audio-context))
  (-> bow-osc
      (webaudio/connect bow-gain)
      webaudio/fanout
      (webaudio/connect [(:graph channel1-audio) (:graph channel2-audio) (:graph channel3-audio) (:graph channel4-audio)]))
  (defonce bow-gain-state (atom 0))
  (add-watch bow-gain-state
             :bow-gain-watcher
             (make-watcher bow-osc
                           webaudio/set-gain!
                           identity))
  
  
  ; Kick off the keyboard control
  
  (keyboard-control/init {:channel-states {:1 channel1-state
                                           :2 channel2-state
                                           :3 channel3-state
                                           :4 channel4-state
                                           :master channel-master-state}
                          :noise-gain-state noise-gain-state
                          :noise-gain noise-gain
                          :bow-gain-state bow-gain-state
                          :bow-gain bow-gain
                          :audio-context audio-context}))


(.addEventListener
  js/window
  "DOMContentLoaded"
  main)
