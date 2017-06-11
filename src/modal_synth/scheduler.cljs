(ns modal-synth.scheduler
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :refer [<! timeout]]))


(defn earlier? [new-event]
  (fn [event]
      (if (> (:time new-event)
             (:time event))
        true
        false)))


(defn insert [queue new-event]
  (let [[earlier later] (split-with (earlier? new-event) queue)]
    (concat earlier [new-event] later)))


(defn next-event-within-horizon? [scheduler now]
  (let [next-event (first @(:queue scheduler))]
    (if (and next-event
             (< (:time next-event)
                (+ now @(:lookahead scheduler))))
      true
      false)))


(defn create! [audio-context & {:keys [lookahead period]
                               :or {lookahead 0.100
                                    period 20}}]
  (let [scheduler {:lookahead (atom lookahead)
                   :period (atom period)
                   :queue (atom [])}]
    (go-loop []
             (let [now (.-currentTime audio-context)]
               (while (next-event-within-horizon? scheduler now)
                      (println "scheduling event , now= " (.-currentTime audio-context))
                      (let [event (first @(:queue scheduler))]
                        (swap! (:queue scheduler) rest) 
                        ((:callback! event) (:time event))))
               (<! (timeout @(:period scheduler)))
               (recur)))
    scheduler))


(defn call-at-time!
  [scheduler callback! at-time]
  (let [call-event {:time at-time
                    :callback! callback!}]
    (swap! (:queue scheduler) insert call-event)))


(defn recursion-through-time!
  "Ripping off Extempore :)"
  [scheduler callback! calc-next-time at-time]
  (let [recursive-wrapper! (fn [self callback! at-time]
                               (call-at-time! scheduler
                                              callback!
                                              at-time)
                               (call-at-time! scheduler
                                              (partial self self callback!)
                                              (calc-next-time at-time)))]
    (call-at-time! scheduler (partial recursive-wrapper! recursive-wrapper! callback!) at-time)))
