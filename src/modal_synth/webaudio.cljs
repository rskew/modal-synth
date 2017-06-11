(ns modal-synth.webaudio
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [cljs.core.async :refer [<! >! put! chan close! alts! poll!]]
            [modal-synth.utils :refer [smooth-array!]]))


(defn create-audio-context []
  (if js/window.AudioContext.
    (js/window.AudioContext.)
    (js/window.webkitAudioContext.)))


(defn get-now [audio-context]
  (.-currentTime audio-context))


(defn destination [audio-context]
  {:input-node (.-destination audio-context)
   :output-node nil
   :type :Fanin})


(defn connect-node-to-node! [source-graph sink-graph]
  (.connect (:output-node source-graph) (:input-node sink-graph))
  {:input-node (:input-node source-graph)
   :output-node (:output-node sink-graph)
   :type :Graph})


(defn connect! [graph1 graph2]
  (let [result-graph (for [source (flatten (vector graph1))
                           sink (flatten (vector graph2))]
                          (connect-node-to-node! source sink))]
    (doall result-graph)
    result-graph))


(defn ramp-to-value-at-time! [param new-val at-time & {:keys [slope]
                                                      :or {slope :linear}}]
  (if (= slope :exponential)
    (.exponentialRampToValueAtTime param new-val at-time)
    (.linearRampToValueAtTime param new-val at-time)))


(defn get-gain [gain-graph]
  (-> gain-graph
      :node
      .-gain))


(defn set-gain!
  ([gain-graph new-gain]
   (-> gain-graph
       :node
       .-gain
       .-value
       (set! new-gain)))
  ([gain-graph new-gain at-time]
   (-> gain-graph
       :node
       .-gain
       (ramp-to-value-at-time! new-gain at-time))))


(defn make-gain [init-gain audio-context]
  (let [gain-node (.createGain audio-context)
        gain-graph {:input-node gain-node
                    :output-node gain-node
                    :type :Gain
                    :node gain-node}]
    (set-gain! gain-graph init-gain)
    gain-graph))


(defn make-compressor [audio-context & {:keys [threshold knee ratio attack release]
                                        :or {threshold -24
                                             knee 30
                                             ratio 12
                                             attack 0.003
                                             release 0.25}}]
  (let [compressor-node (.createDynamicsCompressor audio-context)
        compressor-graph {:input-node compressor-node
                          :output-node compressor-node
                          :type :Compressor
                          :node compressor-node}]
    (doto compressor-node
        (-> .-threshold .-value (set! threshold))
        (-> .-knee .-value (set! knee))
        (-> .-ratio .-value (set! ratio))
        (-> .-attack .-value (set! attack))
        (-> .-release .-value (set! release)))
    compressor-graph))


(defn set-delay-time!
  ([delay-graph new-delay-time]
   (-> (:node delay-graph)
       .-delayTime
       .-value
       (set! new-delay-time)))
  ([delay-graph new-delay-time at-time]
   (println "setting delay to " new-delay-time " at time " at-time)
   (-> delay-graph
       :node
       .-delayTime
       (ramp-to-value-at-time! new-delay-time at-time))))


(defn make-delay-line [max-delay-time audio-context]
  (let [delay-node (.createDelay audio-context max-delay-time)
        delay-graph {:input-node delay-node
                     :output-node delay-node
                     :type :Delay
                     :node delay-node}]
    delay-graph))


(defn make-osc [freq audio-context & {:keys [osc-type]}]
  (let [osc-node (.createOscillator audio-context)]
    (-> osc-node
        .-frequency
        .-value
        (set! freq))
    (-> osc-node
        .-type
        (set! osc-type))
    {:input-node nil
     :output-node osc-node
     :type :Osc
     :node osc-node}))


(defn osc-start! [osc start-time]
  (.start (:node osc) start-time))


(defn osc-stop! [osc stop-time]
  (.stop (:node osc) stop-time))


(defn make-bandpass [highpass-cutoff lowpass-cutoff audio-context]
  (let [highpass-node (.createBiquadFilter audio-context)
        lowpass-node (.createBiquadFilter audio-context)
        Q-val 1e-255]
    (doto highpass-node
          (-> .-type (set! "highpass"))
          (-> .-frequency .-value (set! highpass-cutoff))
          (-> .-Q .-value (set! Q-val)))  
    (doto lowpass-node
          (-> .-type (set! "lowpass"))
          (-> .-frequency .-value (set! lowpass-cutoff))
          (-> .-Q .-value (set! Q-val))) 
    (.connect lowpass-node highpass-node)
    {:input-node lowpass-node
     :output-node highpass-node
     :type :Bandpass
     :lowpass-node lowpass-node
     :highpass-node highpass-node
     :lowpass-cutoff lowpass-cutoff
     :highpass-cutoff highpass-cutoff}))


(defn set-lowpass-cutoff!
  ([bandpass new-lowpass-cutoff]
   (-> bandpass
       :lowpass-node
       .-frequency
       .-value
       (set! new-lowpass-cutoff)))
  ([bandpass new-lowpass-cutoff at-time]
   (-> bandpass
       :lowpass-node
       .-frequency
       (ramp-to-value-at-time! new-lowpass-cutoff at-time))))   


(defn set-highpass-cutoff!
  ([bandpass new-highpass-cutoff]
   (-> bandpass
       :highpass-node
       .-frequency
       .-value
       (set! new-highpass-cutoff)))
  ([bandpass new-highpass-cutoff at-time]
   (-> bandpass
       :highpass-node
       .-frequency
       (ramp-to-value-at-time! new-highpass-cutoff at-time))))      


(defn make-analyser [fft-size audio-context]
  (let [analyser-node (.createAnalyser audio-context)]
    (-> analyser-node .-fftSize (set! fft-size))
    {:input-node analyser-node
     :output-node nil
     :analyser-node analyser-node
     :type :Analyser}))


(defn get-fft-bin-count [analyser-graph]
   (-> analyser-graph
       :analyser-node
       .-frequencyBinCount))


(defn make-noise-buffer [length audio-context & {:keys [noise-type]}]
  (let [buffer-size (* length (.-sampleRate audio-context))
        noise-buffer (.createBuffer audio-context 1 buffer-size (.-sampleRate audio-context))
        noise-buffer-data (.getChannelData noise-buffer 0)
        generate-noise-sample (fn [] (-> (rand) (* 2) (- 1)))]
    (cond
      (= noise-type :brownian)
      (do
        (dotimes [i buffer-size]
          (let [prev-sample (aget noise-buffer-data i)
                uptake 0.03
                filtered-sample (-> (generate-noise-sample)
                                    (* uptake)
                                    (+ prev-sample)
                                    (/ (+ 1.0 uptake)))]
            (aset noise-buffer-data (+ i 1) filtered-sample)))
        (dotimes [i buffer-size]
          (let [sample (aget noise-buffer-data i)
                makeup-gain 3.5]
            (aset noise-buffer-data i (* sample makeup-gain)))))
      :default
      (dotimes [i buffer-size]
        (aset noise-buffer-data i (generate-noise-sample))))
        
    noise-buffer))


(defn make-noise-osc [audio-context & {:keys [highpass-cutoff lowpass-cutoff]
                                       :or {highpass-cutoff 0
                                            lowpass-cutoff 3000}}]
  (let [noise-buffer (make-noise-buffer 5 audio-context :noise-type :brownian)
        noise-buffer-source (.createBufferSource audio-context)
        bandpass (make-bandpass highpass-cutoff lowpass-cutoff audio-context)]
    (set! (.-buffer noise-buffer-source) noise-buffer)
    (.connect noise-buffer-source (:input-node bandpass))
    {:input-node nil
     :output-node (:output-node bandpass)
     :type :NoiseOsc
     :node noise-buffer-source}))


(defn loop-noise-osc! [noise-osc]
  (-> noise-osc
      :node
      .-loop
      (set! "true")))


(defn fire-noise-burst-through [graphs freq audio-context]
  (let [noise-osc (make-noise-osc audio-context
                                  :highpass-cutoff 30
                                  :lowpass-cutoff 1800)
        now (get-now audio-context)]
    (-> noise-osc
        (connect! graphs))
    (osc-start! noise-osc now)
    (osc-stop! noise-osc (+ now 0.025))
    (print "Fire!")))


(defn make-adsr [attack-time decay-time sustain-level release-time
                 & {:keys [slope]
                    :or [:slope :linear]}]
  {:attack-time attack-time
   :decay-time decay-time
   :sustain-level sustain-level
   :release-time release-time
   :slope slope})


(defn apply-adsr! [param adsr noteoff-chan audio-context
                  & {:keys [start-time-offset start-val attack-peak-val]
                     :or {start-time-offset 0
                          start-val 1e-30
                          attack-peak-val 1}}]
  (let [now (get-now audio-context)
        attack-start-time (+ now start-time-offset)
        decay-start-time (+ attack-start-time (:attack-time adsr))
        sustain-start-time (+ decay-start-time (:decay-time adsr))]
    (.setValueAtTime param start-val attack-start-time)
    (ramp-to-value-at-time! param attack-peak-val decay-start-time :slope (:slope adsr))
    (ramp-to-value-at-time! param (:sustain-level adsr) sustain-start-time :slope (:slope adsr))
    ;;wait for noteoff, then release
    (go
      (<! noteoff-chan)
      (print "noteoff!")
      (let [now (get-now audio-context)
            release-end-time (+ now (:release-time adsr))]
        (ramp-to-value-at-time! param start-val release-end-time :slope (:slope adsr)))
      (while (poll! noteoff-chan)))))


(defn apply-ar-envelope! [param adsr audio-context
                          & {:keys [start-time-offset start-val attack-peak-val]
                             :or {start-time-offset 0
                                  start-val 1e-30
                                  attack-peak-val 1}}]
  (let [noteoff-chan (chan)]
    (put! noteoff-chan :noteoff)
    (apply-adsr! param adsr noteoff-chan audio-context)))
