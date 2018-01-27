(ns modal-synth.core
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [modal-synth.utils :refer [listen]]
            [modal-synth.channel :as channel]
            [modal-synth.channel-dom :as channel-dom]
            [modal-synth.fader :as fader]
            [modal-synth.webaudio :as webaudio]
            [modal-synth.keyboard-control :as keyboard-control]
            [modal-synth.spectro-vis :as spectro-vis]
            [modal-synth.cycles :as cycles]
            [modal-synth.scheduler :as event-scheduler]
            [goog.dom :as dom]
            [goog.events :as events]
            [dommy.core :as dommy :refer [sel1 sel append! parent replace! create-element set-attr! set-style!]]
            [cljs.core.async :refer [<! >! put! chan close! alts!]]))

(enable-console-print!)

(defonce audio-context (webaudio/create-audio-context))

;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;; Make the channels
;;;;;;;;;;;;;;;;;;;;;;;;;
(defn init-channels! []
  (defonce channel1-audio (channel/make-channel-audio audio-context))
  (defonce channel1-state (channel/init-channel-state! 0.2 0.46 0 1
                                                       channel1-audio))
  (def channel1 (channel-dom/create! (:gain channel1-state)
                                     (:delay-time channel1-state)
                                     (:highpass-cutoff channel1-state)
                                     (:lowpass-cutoff channel1-state)
                                     "channel1"))
  (defonce channel1-cycle-state (channel/init-channel-state! 0.8 1 0.3 0.7
                                                             nil))
  (def channel1-cycle (channel-dom/create-cycle! (:gain channel1-cycle-state)
                                                 (:delay-time channel1-cycle-state)
                                                 (:highpass-cutoff channel1-cycle-state)
                                                 (:lowpass-cutoff channel1-cycle-state)
                                                 "channel1"))
  (def divider1 (channel-dom/create-divider "divider1"))
  (channel-dom/add-to! (sel1 :body) divider1)

  ;;; test out canvas
  (-> channel1
      :spectrum-vis
      :context
      (doto
       (-> .-fillStyle
           (set! "rgb(200, 0, 0)"))
        (.fillRect 0 0 11635 1135))) (defonce channel2-audio (channel/make-channel-audio audio-context))
  (defonce channel2-state (channel/init-channel-state! 0.7 0.73 0.5 1
                                                       channel2-audio))
  (def channel2 (channel-dom/create! (:gain channel2-state)
                                     (:delay-time channel2-state)
                                     (:highpass-cutoff channel2-state)
                                     (:lowpass-cutoff channel2-state)
                                     "channel2"))
  (def divider2 (channel-dom/create-divider "divider2"))
  (channel-dom/add-to! (sel1 :body) divider2) (defonce channel3-audio (channel/make-channel-audio audio-context))
  (defonce channel3-state (channel/init-channel-state! 0.8 0.12 0.2 0.6
                                                       channel3-audio))
  (def channel3 (channel-dom/create! (:gain channel3-state)
                                     (:delay-time channel3-state)
                                     (:highpass-cutoff channel3-state)
                                     (:lowpass-cutoff channel3-state)
                                     "channel3"))
  (def divider3 (channel-dom/create-divider "divider3"))
  (channel-dom/add-to! (sel1 :body) divider3) (defonce channel4-audio (channel/make-channel-audio audio-context))
  (defonce channel4-state (channel/init-channel-state! 0.8 0.3 0 0.4
                                                       channel4-audio))
  (def channel4 (channel-dom/create! (:gain channel4-state)
                                     (:delay-time channel4-state)
                                     (:highpass-cutoff channel4-state)
                                     (:lowpass-cutoff channel4-state)
                                     "channel4"))

  (def divider-master1 (channel-dom/create-divider "divider-master1"))
  (channel-dom/add-to! (sel1 :body) divider-master1)
  (def divider-master2 (channel-dom/create-divider "divider-master2"))
  (channel-dom/add-to! (sel1 :body) divider-master2) (defonce channel-master-audio (channel/make-channel-audio audio-context))
  (defonce channel-master-state (channel/init-channel-state! 0.7 0.13 0 1
                                                             channel-master-audio))
  (def channel-master (channel-dom/create! (:gain channel-master-state)
                                           (:delay-time channel-master-state)
                                           (:highpass-cutoff channel-master-state)
                                           (:lowpass-cutoff channel-master-state)
                                           "channel-master")))

(defn connect-audio-nodes! []
  (webaudio/connect! [(:graph channel1-audio)
                      (:graph channel2-audio)
                      (:graph channel3-audio)
                      (:graph channel4-audio)]
                     (:graph channel-master-audio))

  (webaudio/connect! (:graph channel-master-audio)
                     [(:graph channel1-audio)
                      (:graph channel2-audio)
                      (:graph channel3-audio)
                      (:graph channel4-audio)])

  (webaudio/connect! (:graph channel-master-audio)
                     (webaudio/destination audio-context))

  (.then (.getUserMedia (.-mediaDevices js/navigator)
                        (js-obj "audio" true "video:" false))
         (fn [stream]
           (let [audio-stream-node
                 (.createMediaStreamSource audio-context stream)
                 input {:input-node nil
                        :output-node audio-stream-node
                        :type :Fanin}]
             (webaudio/connect! input
                                (:graph channel2-audio)))))
                                ;[(:graph channel1-audio)
                                ; (:graph channel2-audio)
                                ; (:graph channel3-audio)
                                ; (:graph channel4-audio)]))))

  ; Start analysis loop
  ; - requestAnimationFrame
  ; - do analysis for each channel
  ; - map analysis outputs to channel imageData array (lin -> log)
  ;   - do this once the rest is working
  ; - putImageData
  ; - recur with next animation frame

  ; Make the noise osc for pinging the resonator

  (defonce noise-osc
    (let [osc-node (webaudio/make-noise-osc audio-context
                                            :highpass-cutoff 30
                                            :lowpass-cutoff 1800)]
      (webaudio/loop-noise-osc! osc-node)
      (webaudio/osc-start! osc-node (webaudio/get-now audio-context))
      osc-node))
  (defonce noise-gain (webaudio/make-gain 0 audio-context))
  (-> noise-osc
      (webaudio/connect! noise-gain)
      (webaudio/connect! [(:graph channel1-audio)
                          (:graph channel2-audio)
                          (:graph channel3-audio)
                          (:graph channel4-audio)]))
  (defonce noise-gain-state (atom 0))
  (add-watch noise-gain-state
             :noise-gain-watcher
             (channel/make-watcher noise-osc
                                   webaudio/set-gain!
                                   identity));;; Make the saw osc for bowing the resonator
  (defonce bow-osc
    (let [osc-node (webaudio/make-osc
                    40
                    audio-context
                    :osc-type "sawtooth")]
      (webaudio/osc-start! osc-node (webaudio/get-now audio-context))
      osc-node))
  (defonce bow-gain (webaudio/make-gain 0 audio-context))
  (-> bow-osc
      (webaudio/connect! bow-gain)
      (webaudio/connect! [(:graph channel1-audio)
                          (:graph channel2-audio)
                          (:graph channel3-audio)
                          (:graph channel4-audio)]))
  (defonce bow-gain-state (atom 0))
  (add-watch bow-gain-state
             :bow-gain-watcher
             (channel/make-watcher bow-osc
                                   webaudio/set-gain!
                                   identity)))

(defn init-keyboard-control! []
  (keyboard-control/init! {:channel-states {:1 channel1-state
                                            :2 channel2-state
                                            :3 channel3-state
                                            :4 channel4-state
                                            :master channel-master-state}
                           :noise-gain-state noise-gain-state
                           :noise-gain noise-gain
                           :bow-gain-state bow-gain-state
                           :bow-gain bow-gain
                           :audio-context audio-context}))

(defn init-scheduler! []
  (defonce scheduler (event-scheduler/create! audio-context
                                              :lookahead 0.03
                                              :period 3)))

(defn init-cycles! []
  (let [cycle-fader1 (:delay channel1-cycle)
        audio-fader1 (:delay channel1)
        drag-and-drop-cycle (atom nil)]
    (defonce cycles-div (create-element :div))
    (set-attr! cycles-div :id "cycles")
    (append! (sel1 :body) cycles-div)
    (defonce cycle1 (cycles/create {:x 10 :y 10}
                                   7
                                   audio-fader1
                                   cycle-fader1
                                   drag-and-drop-cycle
                                   scheduler
                                   :freq (atom 10)))
    (append! cycles-div (:element cycle1))
    (let [fader-pairs [{:audio-fader (:gain channel1)
                        :cycle-fader (:gain channel1-cycle)}
                       {:audio-fader (:delay channel1)
                        :cycle-fader (:delay channel1-cycle)}]]
      (doall (map (fn [{:keys [audio-fader cycle-fader]}]
                    (let [drop-chan (listen (:box audio-fader) "drop")]
                      (go (while true
                            (let [event (<! drop-chan)]
                              (when @drag-and-drop-cycle
                                (reset! (:audio-fader @drag-and-drop-cycle) audio-fader)
                                (reset! (:cycle-fader @drag-and-drop-cycle) cycle-fader)
                                (let [dragleave-event (.createEvent js/document "HTMLEvents")]
                                  (.initEvent dragleave-event "dragleave" false true)
                                  (.dispatchEvent (:box audio-fader) dragleave-event))))))))
                  fader-pairs))
      (doall (map (fn [{:keys [audio-fader cycle-fader]}]
                    (let [dragenter-chan (listen (:box audio-fader) "dragenter")]
                      (go (while true
                            (let [event (<! dragenter-chan)
                                  dragleave-chan (listen (:box audio-fader) "dragleave")]
                              (when @drag-and-drop-cycle
                                (set-style! (:box audio-fader)
                                            :background-color "rgba(255,0,0,0.2)"))
                              (<! dragleave-chan)
                              (set-style! (:box audio-fader)
                                          :background-color "rgba(255,0,0,0.0)"))))))
                  fader-pairs))
      (event-scheduler/recursion-through-time! scheduler
                                               (:tick! cycle1)
                                               (.-currentTime audio-context)))))

(defn main []
  (init-channels!)
  (connect-audio-nodes!)
  (init-keyboard-control!)
  (init-scheduler!)
  (init-cycles!))

(.addEventListener
 js/window
 "DOMContentLoaded"
 main)
