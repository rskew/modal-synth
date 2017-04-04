// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__35016__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__35016 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35017__i = 0, G__35017__a = new Array(arguments.length -  0);
while (G__35017__i < G__35017__a.length) {G__35017__a[G__35017__i] = arguments[G__35017__i + 0]; ++G__35017__i;}
  args = new cljs.core.IndexedSeq(G__35017__a,0);
} 
return G__35016__delegate.call(this,args);};
G__35016.cljs$lang$maxFixedArity = 0;
G__35016.cljs$lang$applyTo = (function (arglist__35018){
var args = cljs.core.seq(arglist__35018);
return G__35016__delegate(args);
});
G__35016.cljs$core$IFn$_invoke$arity$variadic = G__35016__delegate;
return G__35016;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__35019__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__35019 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35020__i = 0, G__35020__a = new Array(arguments.length -  0);
while (G__35020__i < G__35020__a.length) {G__35020__a[G__35020__i] = arguments[G__35020__i + 0]; ++G__35020__i;}
  args = new cljs.core.IndexedSeq(G__35020__a,0);
} 
return G__35019__delegate.call(this,args);};
G__35019.cljs$lang$maxFixedArity = 0;
G__35019.cljs$lang$applyTo = (function (arglist__35021){
var args = cljs.core.seq(arglist__35021);
return G__35019__delegate(args);
});
G__35019.cljs$core$IFn$_invoke$arity$variadic = G__35019__delegate;
return G__35019;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1485855396728