(ns modal-synth.layout
  (:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [cljs.core.async :refer [<! >! put! chan close! alts!]]))

; all this should go into the css

(def layout-params 
  (let [margin 20
        fader-width (- js/innerWidth (* 3 margin))
        handle-width 60]
    {:margin        margin
     :canvas-width  (- js/innerWidth margin)
     :canvas-height (/ (- js/innerHeight margin) 5)
     :handle-width  handle-width
     :fader-width   fader-width
     :bar-width     (- fader-width handle-width)
     :fader-height  15
     :channel-gap   30
     :bar-colour    "#000000"
     :handle-colour "#999999"
     }))

