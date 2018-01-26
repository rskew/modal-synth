(defproject modal-synth "0.1.0-SNAPSHOT"
  :description "Modal synthesis for experimental music"
  :url "subtleblank.com"
  :license {:name "MIT License"
            :url "https://opensource.org/licenses/MIT"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.229"]
                 [prismatic/dommy "1.1.0"]
                 [org.clojure/core.async "0.2.395"]]
  :plugins [[lein-figwheel "0.5.8"]
            [lein-cljsbuild "1.1.5"]]
  :clean-targets ^{:protect false} ["resources/public/js/out"
                                    "resources/public/js/min"
                                    "resources/public/js/modal-synth.js"]
  ;:main ^:skip-aot modal-synth.core
  ;:target-path "target/%s"
  :profiles {:uberjar {:aot :all}}

  :cljsbuild {
              :builds [{ :id "dev" 
                        :source-paths ["src"]
                        :figwheel true 
                        :compiler { :main "modal-synth.core"
                                   :asset-path "js/out"
                                   :output-to "resources/public/js/modal-synth.js"
                                   :output-dir "resources/public/js/out"
                                   :source-map true
                                   } }
                       { :id "min" 
                        :source-paths ["src"]
                        :compiler { :main "modal-synth.core"
                                   :output-to "resources/public/js/modal-synth.js"
                                   :output-dir "resources/public/js/min"
                                   :optimizations :advanced
                                   :pretty-print false } }]}
  :figwheel {
             :http-server-root "public" ;; this will be in resources/
             ;:server-port 5309          ;; default is 3449
             ;:server-ip   "0.0.0.0"     ;; default is "localhost"

             ;; CSS reloading (optional)
             ;; :css-dirs has no default value 
             ;; if :css-dirs is set figwheel will detect css file changes and
             ;; send them to the browser
             :css-dirs ["resources/public/css"]

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server
             ;:ring-handler example.server/handler

             ;; Clojure Macro reloading
             ;; disable clj file reloading
             ; :reload-clj-files false
             ;; or specify which suffixes will cause the reloading
             ; :reload-clj-files {:clj true :cljc false}

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path, a line number and a column
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2:$3 $1 
             ;;
             :open-file-command "myfile-opener"

             ;; if you want to disable the REPL
             ;; :repl false

             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log" 

             ;; Start an nREPL server into the running figwheel process
             ;; :nrepl-port 7888

             ;; Load CIDER, refactor-nrepl and piggieback middleware
             ;;  :nrepl-middleware ["cider.nrepl/cider-middleware"
             ;;                     "refactor-nrepl.middleware/wrap-refactor"
             ;;                     "cemerick.piggieback/wrap-cljs-repl"]

             ;; if you need to watch files with polling instead of FS events
             ;; :hawk-options {:watcher :polling}     
             ;; ^ this can be useful in Docker environments

             ;; if your project.clj contains conflicting builds,
             ;; you can choose to only load the builds specified
             ;; on the command line
             ;; :load-all-builds false ; default is true
             } 
  )
