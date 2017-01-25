(defproject modal-synth "0.1.0-SNAPSHOT"
  :description "Modal synthesis for experimental music"
  :url "http://subtleblank.com"
  :license {:name "Creative Commons Attribution 4.0 International"
            :url "https://creativecommons.org/licenses/by/4.0"}
  :dependencies [[org.clojure/clojure "1.8.0"]]
  :main ^:skip-aot modal-synth.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
