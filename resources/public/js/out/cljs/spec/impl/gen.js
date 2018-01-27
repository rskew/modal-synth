// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__,opt__25409__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__25883__auto__ = [];
var len__25876__auto___31940 = arguments.length;
var i__25877__auto___31941 = (0);
while(true){
if((i__25877__auto___31941 < len__25876__auto___31940)){
args__25883__auto__.push((arguments[i__25877__auto___31941]));

var G__31942 = (i__25877__auto___31941 + (1));
i__25877__auto___31941 = G__31942;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq31939){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31939));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__25883__auto__ = [];
var len__25876__auto___31944 = arguments.length;
var i__25877__auto___31945 = (0);
while(true){
if((i__25877__auto___31945 < len__25876__auto___31944)){
args__25883__auto__.push((arguments[i__25877__auto___31945]));

var G__31946 = (i__25877__auto___31945 + (1));
i__25877__auto___31945 = G__31946;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq31943){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31943));
});

var g_QMARK__31947 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_31948 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__31947){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__31947))
,null));
var mkg_31949 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__31947,g_31948){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__31947,g_31948))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__31947,g_31948,mkg_31949){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__31947).call(null,x);
});})(g_QMARK__31947,g_31948,mkg_31949))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__31947,g_31948,mkg_31949){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_31949).call(null,gfn);
});})(g_QMARK__31947,g_31948,mkg_31949))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__31947,g_31948,mkg_31949){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_31948).call(null,generator);
});})(g_QMARK__31947,g_31948,mkg_31949))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__31911__auto___31968 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__31911__auto___31968){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__25883__auto__ = [];
var len__25876__auto___31969 = arguments.length;
var i__25877__auto___31970 = (0);
while(true){
if((i__25877__auto___31970 < len__25876__auto___31969)){
args__25883__auto__.push((arguments[i__25877__auto___31970]));

var G__31971 = (i__25877__auto___31970 + (1));
i__25877__auto___31970 = G__31971;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31911__auto___31968))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31911__auto___31968){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31911__auto___31968),args);
});})(g__31911__auto___31968))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__31911__auto___31968){
return (function (seq31950){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31950));
});})(g__31911__auto___31968))
;


var g__31911__auto___31972 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__31911__auto___31972){
return (function cljs$spec$impl$gen$list(var_args){
var args__25883__auto__ = [];
var len__25876__auto___31973 = arguments.length;
var i__25877__auto___31974 = (0);
while(true){
if((i__25877__auto___31974 < len__25876__auto___31973)){
args__25883__auto__.push((arguments[i__25877__auto___31974]));

var G__31975 = (i__25877__auto___31974 + (1));
i__25877__auto___31974 = G__31975;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31911__auto___31972))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31911__auto___31972){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31911__auto___31972),args);
});})(g__31911__auto___31972))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__31911__auto___31972){
return (function (seq31951){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31951));
});})(g__31911__auto___31972))
;


var g__31911__auto___31976 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__31911__auto___31976){
return (function cljs$spec$impl$gen$map(var_args){
var args__25883__auto__ = [];
var len__25876__auto___31977 = arguments.length;
var i__25877__auto___31978 = (0);
while(true){
if((i__25877__auto___31978 < len__25876__auto___31977)){
args__25883__auto__.push((arguments[i__25877__auto___31978]));

var G__31979 = (i__25877__auto___31978 + (1));
i__25877__auto___31978 = G__31979;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31911__auto___31976))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31911__auto___31976){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31911__auto___31976),args);
});})(g__31911__auto___31976))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__31911__auto___31976){
return (function (seq31952){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31952));
});})(g__31911__auto___31976))
;


var g__31911__auto___31980 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__31911__auto___31980){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__25883__auto__ = [];
var len__25876__auto___31981 = arguments.length;
var i__25877__auto___31982 = (0);
while(true){
if((i__25877__auto___31982 < len__25876__auto___31981)){
args__25883__auto__.push((arguments[i__25877__auto___31982]));

var G__31983 = (i__25877__auto___31982 + (1));
i__25877__auto___31982 = G__31983;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31911__auto___31980))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31911__auto___31980){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31911__auto___31980),args);
});})(g__31911__auto___31980))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__31911__auto___31980){
return (function (seq31953){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31953));
});})(g__31911__auto___31980))
;


var g__31911__auto___31984 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__31911__auto___31984){
return (function cljs$spec$impl$gen$set(var_args){
var args__25883__auto__ = [];
var len__25876__auto___31985 = arguments.length;
var i__25877__auto___31986 = (0);
while(true){
if((i__25877__auto___31986 < len__25876__auto___31985)){
args__25883__auto__.push((arguments[i__25877__auto___31986]));

var G__31987 = (i__25877__auto___31986 + (1));
i__25877__auto___31986 = G__31987;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31911__auto___31984))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31911__auto___31984){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31911__auto___31984),args);
});})(g__31911__auto___31984))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__31911__auto___31984){
return (function (seq31954){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31954));
});})(g__31911__auto___31984))
;


var g__31911__auto___31988 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__31911__auto___31988){
return (function cljs$spec$impl$gen$vector(var_args){
var args__25883__auto__ = [];
var len__25876__auto___31989 = arguments.length;
var i__25877__auto___31990 = (0);
while(true){
if((i__25877__auto___31990 < len__25876__auto___31989)){
args__25883__auto__.push((arguments[i__25877__auto___31990]));

var G__31991 = (i__25877__auto___31990 + (1));
i__25877__auto___31990 = G__31991;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31911__auto___31988))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31911__auto___31988){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31911__auto___31988),args);
});})(g__31911__auto___31988))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__31911__auto___31988){
return (function (seq31955){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31955));
});})(g__31911__auto___31988))
;


var g__31911__auto___31992 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__31911__auto___31992){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__25883__auto__ = [];
var len__25876__auto___31993 = arguments.length;
var i__25877__auto___31994 = (0);
while(true){
if((i__25877__auto___31994 < len__25876__auto___31993)){
args__25883__auto__.push((arguments[i__25877__auto___31994]));

var G__31995 = (i__25877__auto___31994 + (1));
i__25877__auto___31994 = G__31995;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31911__auto___31992))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31911__auto___31992){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31911__auto___31992),args);
});})(g__31911__auto___31992))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__31911__auto___31992){
return (function (seq31956){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31956));
});})(g__31911__auto___31992))
;


var g__31911__auto___31996 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__31911__auto___31996){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__25883__auto__ = [];
var len__25876__auto___31997 = arguments.length;
var i__25877__auto___31998 = (0);
while(true){
if((i__25877__auto___31998 < len__25876__auto___31997)){
args__25883__auto__.push((arguments[i__25877__auto___31998]));

var G__31999 = (i__25877__auto___31998 + (1));
i__25877__auto___31998 = G__31999;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31911__auto___31996))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31911__auto___31996){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31911__auto___31996),args);
});})(g__31911__auto___31996))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__31911__auto___31996){
return (function (seq31957){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31957));
});})(g__31911__auto___31996))
;


var g__31911__auto___32000 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__31911__auto___32000){
return (function cljs$spec$impl$gen$elements(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32001 = arguments.length;
var i__25877__auto___32002 = (0);
while(true){
if((i__25877__auto___32002 < len__25876__auto___32001)){
args__25883__auto__.push((arguments[i__25877__auto___32002]));

var G__32003 = (i__25877__auto___32002 + (1));
i__25877__auto___32002 = G__32003;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31911__auto___32000))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31911__auto___32000){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31911__auto___32000),args);
});})(g__31911__auto___32000))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__31911__auto___32000){
return (function (seq31958){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31958));
});})(g__31911__auto___32000))
;


var g__31911__auto___32004 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__31911__auto___32004){
return (function cljs$spec$impl$gen$bind(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32005 = arguments.length;
var i__25877__auto___32006 = (0);
while(true){
if((i__25877__auto___32006 < len__25876__auto___32005)){
args__25883__auto__.push((arguments[i__25877__auto___32006]));

var G__32007 = (i__25877__auto___32006 + (1));
i__25877__auto___32006 = G__32007;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31911__auto___32004))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31911__auto___32004){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31911__auto___32004),args);
});})(g__31911__auto___32004))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__31911__auto___32004){
return (function (seq31959){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31959));
});})(g__31911__auto___32004))
;


var g__31911__auto___32008 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__31911__auto___32008){
return (function cljs$spec$impl$gen$choose(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32009 = arguments.length;
var i__25877__auto___32010 = (0);
while(true){
if((i__25877__auto___32010 < len__25876__auto___32009)){
args__25883__auto__.push((arguments[i__25877__auto___32010]));

var G__32011 = (i__25877__auto___32010 + (1));
i__25877__auto___32010 = G__32011;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31911__auto___32008))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31911__auto___32008){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31911__auto___32008),args);
});})(g__31911__auto___32008))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__31911__auto___32008){
return (function (seq31960){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31960));
});})(g__31911__auto___32008))
;


var g__31911__auto___32012 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__31911__auto___32012){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32013 = arguments.length;
var i__25877__auto___32014 = (0);
while(true){
if((i__25877__auto___32014 < len__25876__auto___32013)){
args__25883__auto__.push((arguments[i__25877__auto___32014]));

var G__32015 = (i__25877__auto___32014 + (1));
i__25877__auto___32014 = G__32015;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31911__auto___32012))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31911__auto___32012){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31911__auto___32012),args);
});})(g__31911__auto___32012))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__31911__auto___32012){
return (function (seq31961){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31961));
});})(g__31911__auto___32012))
;


var g__31911__auto___32016 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__31911__auto___32016){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32017 = arguments.length;
var i__25877__auto___32018 = (0);
while(true){
if((i__25877__auto___32018 < len__25876__auto___32017)){
args__25883__auto__.push((arguments[i__25877__auto___32018]));

var G__32019 = (i__25877__auto___32018 + (1));
i__25877__auto___32018 = G__32019;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31911__auto___32016))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31911__auto___32016){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31911__auto___32016),args);
});})(g__31911__auto___32016))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__31911__auto___32016){
return (function (seq31962){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31962));
});})(g__31911__auto___32016))
;


var g__31911__auto___32020 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__31911__auto___32020){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32021 = arguments.length;
var i__25877__auto___32022 = (0);
while(true){
if((i__25877__auto___32022 < len__25876__auto___32021)){
args__25883__auto__.push((arguments[i__25877__auto___32022]));

var G__32023 = (i__25877__auto___32022 + (1));
i__25877__auto___32022 = G__32023;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31911__auto___32020))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31911__auto___32020){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31911__auto___32020),args);
});})(g__31911__auto___32020))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__31911__auto___32020){
return (function (seq31963){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31963));
});})(g__31911__auto___32020))
;


var g__31911__auto___32024 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__31911__auto___32024){
return (function cljs$spec$impl$gen$sample(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32025 = arguments.length;
var i__25877__auto___32026 = (0);
while(true){
if((i__25877__auto___32026 < len__25876__auto___32025)){
args__25883__auto__.push((arguments[i__25877__auto___32026]));

var G__32027 = (i__25877__auto___32026 + (1));
i__25877__auto___32026 = G__32027;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31911__auto___32024))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31911__auto___32024){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31911__auto___32024),args);
});})(g__31911__auto___32024))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__31911__auto___32024){
return (function (seq31964){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31964));
});})(g__31911__auto___32024))
;


var g__31911__auto___32028 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__31911__auto___32028){
return (function cljs$spec$impl$gen$return(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32029 = arguments.length;
var i__25877__auto___32030 = (0);
while(true){
if((i__25877__auto___32030 < len__25876__auto___32029)){
args__25883__auto__.push((arguments[i__25877__auto___32030]));

var G__32031 = (i__25877__auto___32030 + (1));
i__25877__auto___32030 = G__32031;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31911__auto___32028))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31911__auto___32028){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31911__auto___32028),args);
});})(g__31911__auto___32028))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__31911__auto___32028){
return (function (seq31965){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31965));
});})(g__31911__auto___32028))
;


var g__31911__auto___32032 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__31911__auto___32032){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32033 = arguments.length;
var i__25877__auto___32034 = (0);
while(true){
if((i__25877__auto___32034 < len__25876__auto___32033)){
args__25883__auto__.push((arguments[i__25877__auto___32034]));

var G__32035 = (i__25877__auto___32034 + (1));
i__25877__auto___32034 = G__32035;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31911__auto___32032))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31911__auto___32032){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31911__auto___32032),args);
});})(g__31911__auto___32032))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__31911__auto___32032){
return (function (seq31966){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31966));
});})(g__31911__auto___32032))
;


var g__31911__auto___32036 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__31911__auto___32036){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32037 = arguments.length;
var i__25877__auto___32038 = (0);
while(true){
if((i__25877__auto___32038 < len__25876__auto___32037)){
args__25883__auto__.push((arguments[i__25877__auto___32038]));

var G__32039 = (i__25877__auto___32038 + (1));
i__25877__auto___32038 = G__32039;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31911__auto___32036))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31911__auto___32036){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31911__auto___32036),args);
});})(g__31911__auto___32036))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__31911__auto___32036){
return (function (seq31967){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31967));
});})(g__31911__auto___32036))
;

var g__31924__auto___32061 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__31924__auto___32061){
return (function cljs$spec$impl$gen$any(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32062 = arguments.length;
var i__25877__auto___32063 = (0);
while(true){
if((i__25877__auto___32063 < len__25876__auto___32062)){
args__25883__auto__.push((arguments[i__25877__auto___32063]));

var G__32064 = (i__25877__auto___32063 + (1));
i__25877__auto___32063 = G__32064;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31924__auto___32061))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31924__auto___32061){
return (function (args){
return cljs.core.deref.call(null,g__31924__auto___32061);
});})(g__31924__auto___32061))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__31924__auto___32061){
return (function (seq32040){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32040));
});})(g__31924__auto___32061))
;


var g__31924__auto___32065 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__31924__auto___32065){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32066 = arguments.length;
var i__25877__auto___32067 = (0);
while(true){
if((i__25877__auto___32067 < len__25876__auto___32066)){
args__25883__auto__.push((arguments[i__25877__auto___32067]));

var G__32068 = (i__25877__auto___32067 + (1));
i__25877__auto___32067 = G__32068;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31924__auto___32065))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31924__auto___32065){
return (function (args){
return cljs.core.deref.call(null,g__31924__auto___32065);
});})(g__31924__auto___32065))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__31924__auto___32065){
return (function (seq32041){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32041));
});})(g__31924__auto___32065))
;


var g__31924__auto___32069 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__31924__auto___32069){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32070 = arguments.length;
var i__25877__auto___32071 = (0);
while(true){
if((i__25877__auto___32071 < len__25876__auto___32070)){
args__25883__auto__.push((arguments[i__25877__auto___32071]));

var G__32072 = (i__25877__auto___32071 + (1));
i__25877__auto___32071 = G__32072;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31924__auto___32069))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31924__auto___32069){
return (function (args){
return cljs.core.deref.call(null,g__31924__auto___32069);
});})(g__31924__auto___32069))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__31924__auto___32069){
return (function (seq32042){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32042));
});})(g__31924__auto___32069))
;


var g__31924__auto___32073 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__31924__auto___32073){
return (function cljs$spec$impl$gen$char(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32074 = arguments.length;
var i__25877__auto___32075 = (0);
while(true){
if((i__25877__auto___32075 < len__25876__auto___32074)){
args__25883__auto__.push((arguments[i__25877__auto___32075]));

var G__32076 = (i__25877__auto___32075 + (1));
i__25877__auto___32075 = G__32076;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31924__auto___32073))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31924__auto___32073){
return (function (args){
return cljs.core.deref.call(null,g__31924__auto___32073);
});})(g__31924__auto___32073))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__31924__auto___32073){
return (function (seq32043){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32043));
});})(g__31924__auto___32073))
;


var g__31924__auto___32077 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__31924__auto___32077){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32078 = arguments.length;
var i__25877__auto___32079 = (0);
while(true){
if((i__25877__auto___32079 < len__25876__auto___32078)){
args__25883__auto__.push((arguments[i__25877__auto___32079]));

var G__32080 = (i__25877__auto___32079 + (1));
i__25877__auto___32079 = G__32080;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31924__auto___32077))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31924__auto___32077){
return (function (args){
return cljs.core.deref.call(null,g__31924__auto___32077);
});})(g__31924__auto___32077))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__31924__auto___32077){
return (function (seq32044){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32044));
});})(g__31924__auto___32077))
;


var g__31924__auto___32081 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__31924__auto___32081){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32082 = arguments.length;
var i__25877__auto___32083 = (0);
while(true){
if((i__25877__auto___32083 < len__25876__auto___32082)){
args__25883__auto__.push((arguments[i__25877__auto___32083]));

var G__32084 = (i__25877__auto___32083 + (1));
i__25877__auto___32083 = G__32084;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31924__auto___32081))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31924__auto___32081){
return (function (args){
return cljs.core.deref.call(null,g__31924__auto___32081);
});})(g__31924__auto___32081))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__31924__auto___32081){
return (function (seq32045){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32045));
});})(g__31924__auto___32081))
;


var g__31924__auto___32085 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__31924__auto___32085){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32086 = arguments.length;
var i__25877__auto___32087 = (0);
while(true){
if((i__25877__auto___32087 < len__25876__auto___32086)){
args__25883__auto__.push((arguments[i__25877__auto___32087]));

var G__32088 = (i__25877__auto___32087 + (1));
i__25877__auto___32087 = G__32088;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31924__auto___32085))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31924__auto___32085){
return (function (args){
return cljs.core.deref.call(null,g__31924__auto___32085);
});})(g__31924__auto___32085))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__31924__auto___32085){
return (function (seq32046){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32046));
});})(g__31924__auto___32085))
;


var g__31924__auto___32089 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__31924__auto___32089){
return (function cljs$spec$impl$gen$double(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32090 = arguments.length;
var i__25877__auto___32091 = (0);
while(true){
if((i__25877__auto___32091 < len__25876__auto___32090)){
args__25883__auto__.push((arguments[i__25877__auto___32091]));

var G__32092 = (i__25877__auto___32091 + (1));
i__25877__auto___32091 = G__32092;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31924__auto___32089))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31924__auto___32089){
return (function (args){
return cljs.core.deref.call(null,g__31924__auto___32089);
});})(g__31924__auto___32089))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__31924__auto___32089){
return (function (seq32047){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32047));
});})(g__31924__auto___32089))
;


var g__31924__auto___32093 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__31924__auto___32093){
return (function cljs$spec$impl$gen$int(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32094 = arguments.length;
var i__25877__auto___32095 = (0);
while(true){
if((i__25877__auto___32095 < len__25876__auto___32094)){
args__25883__auto__.push((arguments[i__25877__auto___32095]));

var G__32096 = (i__25877__auto___32095 + (1));
i__25877__auto___32095 = G__32096;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31924__auto___32093))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31924__auto___32093){
return (function (args){
return cljs.core.deref.call(null,g__31924__auto___32093);
});})(g__31924__auto___32093))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__31924__auto___32093){
return (function (seq32048){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32048));
});})(g__31924__auto___32093))
;


var g__31924__auto___32097 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__31924__auto___32097){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32098 = arguments.length;
var i__25877__auto___32099 = (0);
while(true){
if((i__25877__auto___32099 < len__25876__auto___32098)){
args__25883__auto__.push((arguments[i__25877__auto___32099]));

var G__32100 = (i__25877__auto___32099 + (1));
i__25877__auto___32099 = G__32100;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31924__auto___32097))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31924__auto___32097){
return (function (args){
return cljs.core.deref.call(null,g__31924__auto___32097);
});})(g__31924__auto___32097))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__31924__auto___32097){
return (function (seq32049){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32049));
});})(g__31924__auto___32097))
;


var g__31924__auto___32101 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__31924__auto___32101){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32102 = arguments.length;
var i__25877__auto___32103 = (0);
while(true){
if((i__25877__auto___32103 < len__25876__auto___32102)){
args__25883__auto__.push((arguments[i__25877__auto___32103]));

var G__32104 = (i__25877__auto___32103 + (1));
i__25877__auto___32103 = G__32104;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31924__auto___32101))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31924__auto___32101){
return (function (args){
return cljs.core.deref.call(null,g__31924__auto___32101);
});})(g__31924__auto___32101))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__31924__auto___32101){
return (function (seq32050){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32050));
});})(g__31924__auto___32101))
;


var g__31924__auto___32105 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__31924__auto___32105){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32106 = arguments.length;
var i__25877__auto___32107 = (0);
while(true){
if((i__25877__auto___32107 < len__25876__auto___32106)){
args__25883__auto__.push((arguments[i__25877__auto___32107]));

var G__32108 = (i__25877__auto___32107 + (1));
i__25877__auto___32107 = G__32108;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31924__auto___32105))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31924__auto___32105){
return (function (args){
return cljs.core.deref.call(null,g__31924__auto___32105);
});})(g__31924__auto___32105))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__31924__auto___32105){
return (function (seq32051){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32051));
});})(g__31924__auto___32105))
;


var g__31924__auto___32109 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__31924__auto___32109){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32110 = arguments.length;
var i__25877__auto___32111 = (0);
while(true){
if((i__25877__auto___32111 < len__25876__auto___32110)){
args__25883__auto__.push((arguments[i__25877__auto___32111]));

var G__32112 = (i__25877__auto___32111 + (1));
i__25877__auto___32111 = G__32112;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31924__auto___32109))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31924__auto___32109){
return (function (args){
return cljs.core.deref.call(null,g__31924__auto___32109);
});})(g__31924__auto___32109))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__31924__auto___32109){
return (function (seq32052){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32052));
});})(g__31924__auto___32109))
;


var g__31924__auto___32113 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__31924__auto___32113){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32114 = arguments.length;
var i__25877__auto___32115 = (0);
while(true){
if((i__25877__auto___32115 < len__25876__auto___32114)){
args__25883__auto__.push((arguments[i__25877__auto___32115]));

var G__32116 = (i__25877__auto___32115 + (1));
i__25877__auto___32115 = G__32116;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31924__auto___32113))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31924__auto___32113){
return (function (args){
return cljs.core.deref.call(null,g__31924__auto___32113);
});})(g__31924__auto___32113))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__31924__auto___32113){
return (function (seq32053){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32053));
});})(g__31924__auto___32113))
;


var g__31924__auto___32117 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__31924__auto___32117){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32118 = arguments.length;
var i__25877__auto___32119 = (0);
while(true){
if((i__25877__auto___32119 < len__25876__auto___32118)){
args__25883__auto__.push((arguments[i__25877__auto___32119]));

var G__32120 = (i__25877__auto___32119 + (1));
i__25877__auto___32119 = G__32120;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31924__auto___32117))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31924__auto___32117){
return (function (args){
return cljs.core.deref.call(null,g__31924__auto___32117);
});})(g__31924__auto___32117))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__31924__auto___32117){
return (function (seq32054){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32054));
});})(g__31924__auto___32117))
;


var g__31924__auto___32121 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__31924__auto___32121){
return (function cljs$spec$impl$gen$string(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32122 = arguments.length;
var i__25877__auto___32123 = (0);
while(true){
if((i__25877__auto___32123 < len__25876__auto___32122)){
args__25883__auto__.push((arguments[i__25877__auto___32123]));

var G__32124 = (i__25877__auto___32123 + (1));
i__25877__auto___32123 = G__32124;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31924__auto___32121))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31924__auto___32121){
return (function (args){
return cljs.core.deref.call(null,g__31924__auto___32121);
});})(g__31924__auto___32121))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__31924__auto___32121){
return (function (seq32055){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32055));
});})(g__31924__auto___32121))
;


var g__31924__auto___32125 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__31924__auto___32125){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32126 = arguments.length;
var i__25877__auto___32127 = (0);
while(true){
if((i__25877__auto___32127 < len__25876__auto___32126)){
args__25883__auto__.push((arguments[i__25877__auto___32127]));

var G__32128 = (i__25877__auto___32127 + (1));
i__25877__auto___32127 = G__32128;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31924__auto___32125))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31924__auto___32125){
return (function (args){
return cljs.core.deref.call(null,g__31924__auto___32125);
});})(g__31924__auto___32125))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__31924__auto___32125){
return (function (seq32056){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32056));
});})(g__31924__auto___32125))
;


var g__31924__auto___32129 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__31924__auto___32129){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32130 = arguments.length;
var i__25877__auto___32131 = (0);
while(true){
if((i__25877__auto___32131 < len__25876__auto___32130)){
args__25883__auto__.push((arguments[i__25877__auto___32131]));

var G__32132 = (i__25877__auto___32131 + (1));
i__25877__auto___32131 = G__32132;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31924__auto___32129))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31924__auto___32129){
return (function (args){
return cljs.core.deref.call(null,g__31924__auto___32129);
});})(g__31924__auto___32129))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__31924__auto___32129){
return (function (seq32057){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32057));
});})(g__31924__auto___32129))
;


var g__31924__auto___32133 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__31924__auto___32133){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32134 = arguments.length;
var i__25877__auto___32135 = (0);
while(true){
if((i__25877__auto___32135 < len__25876__auto___32134)){
args__25883__auto__.push((arguments[i__25877__auto___32135]));

var G__32136 = (i__25877__auto___32135 + (1));
i__25877__auto___32135 = G__32136;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31924__auto___32133))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31924__auto___32133){
return (function (args){
return cljs.core.deref.call(null,g__31924__auto___32133);
});})(g__31924__auto___32133))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__31924__auto___32133){
return (function (seq32058){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32058));
});})(g__31924__auto___32133))
;


var g__31924__auto___32137 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__31924__auto___32137){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32138 = arguments.length;
var i__25877__auto___32139 = (0);
while(true){
if((i__25877__auto___32139 < len__25876__auto___32138)){
args__25883__auto__.push((arguments[i__25877__auto___32139]));

var G__32140 = (i__25877__auto___32139 + (1));
i__25877__auto___32139 = G__32140;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31924__auto___32137))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31924__auto___32137){
return (function (args){
return cljs.core.deref.call(null,g__31924__auto___32137);
});})(g__31924__auto___32137))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__31924__auto___32137){
return (function (seq32059){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32059));
});})(g__31924__auto___32137))
;


var g__31924__auto___32141 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__31924__auto___32141){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32142 = arguments.length;
var i__25877__auto___32143 = (0);
while(true){
if((i__25877__auto___32143 < len__25876__auto___32142)){
args__25883__auto__.push((arguments[i__25877__auto___32143]));

var G__32144 = (i__25877__auto___32143 + (1));
i__25877__auto___32143 = G__32144;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});})(g__31924__auto___32141))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31924__auto___32141){
return (function (args){
return cljs.core.deref.call(null,g__31924__auto___32141);
});})(g__31924__auto___32141))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__31924__auto___32141){
return (function (seq32060){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32060));
});})(g__31924__auto___32141))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__25883__auto__ = [];
var len__25876__auto___32147 = arguments.length;
var i__25877__auto___32148 = (0);
while(true){
if((i__25877__auto___32148 < len__25876__auto___32147)){
args__25883__auto__.push((arguments[i__25877__auto___32148]));

var G__32149 = (i__25877__auto___32148 + (1));
i__25877__auto___32148 = G__32149;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__32145_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__32145_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq32146){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32146));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__32150_SHARP_){
return (new Date(p1__32150_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1516956384740