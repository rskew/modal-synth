(ns modal-synth.layout-params
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [cljs.core.async :refer [<! >! put! chan close! alts!]]))

(def layout-params 
  (let [margin 20]
    {:margin        margin
     :canvas-width  (- js/innerWidth margin)
     :canvas-height (- js/innerHeight margin)
     :handle-width  60
     :fader-width   (- js/innerWidth (* 3 margin))
     :bar-width     (- (:fader-width layout-params)
                       (:handle-width layout-params))
     :fader-height  15
     :channel-gap   30
     :bar-colour    "#000000"
     :handle-colour "#999999"
     }))

