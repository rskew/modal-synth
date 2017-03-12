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
