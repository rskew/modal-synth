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
modal_synth.utils.set_html_BANG_ = (function modal_synth$utils$set_html_BANG_(var_args){
var args__25859__auto__ = [];
var len__25852__auto___37025 = arguments.length;
var i__25853__auto___37026 = (0);
while(true){
if((i__25853__auto___37026 < len__25852__auto___37025)){
args__25859__auto__.push((arguments[i__25853__auto___37026]));

var G__37027 = (i__25853__auto___37026 + (1));
i__25853__auto___37026 = G__37027;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((1) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((1)),(0),null)):null);
return modal_synth.utils.set_html_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25860__auto__);
});

modal_synth.utils.set_html_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (html_object,html){
return html_object.innerHTML = cljs.core.apply.call(null,cljs.core.str,html);
});

modal_synth.utils.set_html_BANG_.cljs$lang$maxFixedArity = (1);

modal_synth.utils.set_html_BANG_.cljs$lang$applyTo = (function (seq37023){
var G__37024 = cljs.core.first.call(null,seq37023);
var seq37023__$1 = cljs.core.next.call(null,seq37023);
return modal_synth.utils.set_html_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37024,seq37023__$1);
});

modal_synth.utils.smooth_array_BANG_ = (function modal_synth$utils$smooth_array_BANG_(array,uptake,gain){
var n__25692__auto___37028 = (cljs.core.count.call(null,array) - (1));
var i_37029 = (0);
while(true){
if((i_37029 < n__25692__auto___37028)){
var prev_element_37030 = (array[i_37029]);
var element_37031 = (array[(i_37029 + (1))]);
(array[(i_37029 + (1))] = (((element_37031 * uptake) + prev_element_37030) / (uptake + 1.0)));

var G__37032 = (i_37029 + (1));
i_37029 = G__37032;
continue;
} else {
}
break;
}

var n__25692__auto__ = cljs.core.count.call(null,array);
var i = (0);
while(true){
if((i < n__25692__auto__)){
(array[i] = ((array[i]) * gain));

var G__37033 = (i + (1));
i = G__37033;
continue;
} else {
return null;
}
break;
}
});

//# sourceMappingURL=utils.js.map?rel=1489662578768