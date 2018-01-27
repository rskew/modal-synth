// Compiled by ClojureScript 1.9.229 {}
goog.provide('modal_synth.utils');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('dommy.core');
goog.require('cljs.core.async');
modal_synth.utils.listen = (function modal_synth$utils$listen(el,type){
var out = cljs.core.async.chan.call(null);
goog.events.listen(el,type,((function (out){
return (function (e){
return cljs.core.async.put_BANG_.call(null,out,e);
});})(out))
);

return out;
});

//# sourceMappingURL=utils.js.map?rel=1517065383373