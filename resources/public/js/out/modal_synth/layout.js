// Compiled by ClojureScript 1.9.229 {}
goog.provide('modal_synth.layout');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('cljs.core.async');
modal_synth.layout.layout_params = (function (){var margin = (20);
var fader_width = (innerWidth - ((3) * margin));
var handle_width = (60);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"fader-height","fader-height",2098048100),new cljs.core.Keyword(null,"bar-width","bar-width",1233240523),new cljs.core.Keyword(null,"handle-width","handle-width",-1346948208),new cljs.core.Keyword(null,"bar-colour","bar-colour",-280506351),new cljs.core.Keyword(null,"fader-width","fader-width",-38098190),new cljs.core.Keyword(null,"channel-gap","channel-gap",682438173),new cljs.core.Keyword(null,"canvas-width","canvas-width",1321931102),new cljs.core.Keyword(null,"handle-colour","handle-colour",133407871),new cljs.core.Keyword(null,"canvas-height","canvas-height",291287231),new cljs.core.Keyword(null,"margin","margin",-995903681)],[(15),(fader_width - handle_width),handle_width,"#000000",fader_width,(30),(innerWidth - margin),"#999999",((innerHeight - margin) / (5)),margin]);
})();

//# sourceMappingURL=layout.js.map?rel=1488637311430