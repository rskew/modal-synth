(ns modal-synth.utils
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [dommy.core :as dommy :refer [set-style!]]
            [cljs.core.async :refer [<! >! put! chan close! alts!]]))


(defn listen [el type]
  (let [out (chan)]
    (events/listen el type
      (fn [e] (put! out e)))
    out))


(defn set-html! [html-object & html]
  (set! (.-innerHTML html-object)
        (apply str html)))


(defn smooth-array! [array uptake gain]
  (dotimes [i (- (count array) 1)]
    (let [prev-element (aget array i)
          element (aget array (+ i 1))]
      (aset array (+ i 1)
            (-> element
                (* uptake)
                (+ prev-element)
                (/ (+ uptake 1.0))))))
  (dotimes [i (count array)]
    (aset array i (* (aget array i) gain))))
