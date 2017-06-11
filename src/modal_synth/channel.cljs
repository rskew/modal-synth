(ns modal-synth.channel
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [modal-synth.fader :as fader]
            [modal-synth.webaudio :as webaudio]
            [dommy.core :as dommy :refer [sel1 append! create-element set-class!
                                          set-attr! replace! attr]]))


(def gain-multiplier 1)
(def delay-time-multiplier 0.05)
(def cutoff-upper-bound 20000)
(def cutoff-lower-bound 30)


(defn make-channel-audio [audio-context]
  (let [delay-line (webaudio/make-delay-line 2.0 audio-context)
        gain (webaudio/make-gain 0.1 audio-context)
        compressor (webaudio/make-compressor audio-context
                                             :ratio 4
                                             :threshold -12
                                             :attack 0
                                             :release 0)
        bandpass (webaudio/make-bandpass 0.4 0.5 audio-context)
        analyser (webaudio/make-analyser 2048 audio-context)]
    (webaudio/connect! compressor analyser)
    {:graph (reduce webaudio/connect! [delay-line bandpass gain compressor])
     :gain-graph gain
     :compressor-graph compressor
     :delay-graph delay-line
     :bandpass-graph bandpass
     :analyser-graph analyser}))


(defn update-audio-at-time! [channel-audio channel-state at-time]
  (webaudio/set-gain! (:gain-graph channel-audio) @(:gain channel-state) at-time)
  (webaudio/set-delay-time! (:delay-graph channel-audio) @(:delay-time channel-state) at-time)
  (webaudio/set-highpass-cutoff! (:bandpass-graph channel-audio) @(:highpass-cutoff channel-state) at-time)
  (webaudio/set-lowpass-cutoff! (:bandpass-graph channel-audio) @(:lowpass-cutoff channel-state) at-time))


(defn create-channel-state [gain delay-time highpass-cutoff lowpass-cutoff]
  {:gain (atom gain)
   :delay-time (atom delay-time)
   :highpass-cutoff (atom highpass-cutoff)
   :lowpass-cutoff (atom lowpass-cutoff)})


(defn copy-channel-state! [channel-from channel-to]
  (reset! (:gain channel-to) @(:gain channel-from))
  (reset! (:delay-time channel-to) @(:delay-time channel-from))
  (reset! (:highpass-cutoff channel-to) @(:highpass-cutoff channel-from))
  (reset! (:lowpass-cutoff channel-to) @(:lowpass-cutoff channel-from))
  channel-to)


(defn transition-channel-state! [channel-to channel-from at-time]
  nil
  )


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
  (+ (Math/pow (- cutoff-upper-bound cutoff-lower-bound)
               fader-level)
     cutoff-lower-bound))


(defn make-watcher [graph setter mapping]
  (fn [key atom old-state new-state]
      (setter graph (mapping new-state))))


(defn init-channel-state [initial-gain 
                          initial-delay-time
                          initial-highpass-cutoff
                          initial-lowpass-cutoff
                          channel-audio]
  (let [channel-state (assoc  (create-channel-state initial-gain
                                                    initial-delay-time
                                                    initial-highpass-cutoff
                                                    initial-lowpass-cutoff)
                             :analyser-array (new js/Uint8Array (-> channel-audio
                                                                    :analyser-graph
                                                                    webaudio/get-fft-bin-count)))]
    (add-watch (:gain channel-state)
               :gain-watcher
               (make-watcher (:gain-graph channel-audio)
                             webaudio/set-gain!
                             gain-mapping)) 
    (add-watch (:delay-time channel-state)
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
