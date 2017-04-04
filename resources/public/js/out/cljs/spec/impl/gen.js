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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__25859__auto__ = [];
var len__25852__auto___31032 = arguments.length;
var i__25853__auto___31033 = (0);
while(true){
if((i__25853__auto___31033 < len__25852__auto___31032)){
args__25859__auto__.push((arguments[i__25853__auto___31033]));

var G__31034 = (i__25853__auto___31033 + (1));
i__25853__auto___31033 = G__31034;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq31031){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31031));
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
var args__25859__auto__ = [];
var len__25852__auto___31036 = arguments.length;
var i__25853__auto___31037 = (0);
while(true){
if((i__25853__auto___31037 < len__25852__auto___31036)){
args__25859__auto__.push((arguments[i__25853__auto___31037]));

var G__31038 = (i__25853__auto___31037 + (1));
i__25853__auto___31037 = G__31038;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq31035){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31035));
});

var g_QMARK__31039 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_31040 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__31039){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__31039))
,null));
var mkg_31041 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__31039,g_31040){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__31039,g_31040))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__31039,g_31040,mkg_31041){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__31039).call(null,x);
});})(g_QMARK__31039,g_31040,mkg_31041))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__31039,g_31040,mkg_31041){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_31041).call(null,gfn);
});})(g_QMARK__31039,g_31040,mkg_31041))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__31039,g_31040,mkg_31041){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_31040).call(null,generator);
});})(g_QMARK__31039,g_31040,mkg_31041))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__31003__auto___31060 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__31003__auto___31060){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31061 = arguments.length;
var i__25853__auto___31062 = (0);
while(true){
if((i__25853__auto___31062 < len__25852__auto___31061)){
args__25859__auto__.push((arguments[i__25853__auto___31062]));

var G__31063 = (i__25853__auto___31062 + (1));
i__25853__auto___31062 = G__31063;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31003__auto___31060))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31003__auto___31060){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31003__auto___31060),args);
});})(g__31003__auto___31060))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__31003__auto___31060){
return (function (seq31042){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31042));
});})(g__31003__auto___31060))
;


var g__31003__auto___31064 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__31003__auto___31064){
return (function cljs$spec$impl$gen$list(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31065 = arguments.length;
var i__25853__auto___31066 = (0);
while(true){
if((i__25853__auto___31066 < len__25852__auto___31065)){
args__25859__auto__.push((arguments[i__25853__auto___31066]));

var G__31067 = (i__25853__auto___31066 + (1));
i__25853__auto___31066 = G__31067;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31003__auto___31064))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31003__auto___31064){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31003__auto___31064),args);
});})(g__31003__auto___31064))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__31003__auto___31064){
return (function (seq31043){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31043));
});})(g__31003__auto___31064))
;


var g__31003__auto___31068 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__31003__auto___31068){
return (function cljs$spec$impl$gen$map(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31069 = arguments.length;
var i__25853__auto___31070 = (0);
while(true){
if((i__25853__auto___31070 < len__25852__auto___31069)){
args__25859__auto__.push((arguments[i__25853__auto___31070]));

var G__31071 = (i__25853__auto___31070 + (1));
i__25853__auto___31070 = G__31071;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31003__auto___31068))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31003__auto___31068){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31003__auto___31068),args);
});})(g__31003__auto___31068))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__31003__auto___31068){
return (function (seq31044){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31044));
});})(g__31003__auto___31068))
;


var g__31003__auto___31072 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__31003__auto___31072){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31073 = arguments.length;
var i__25853__auto___31074 = (0);
while(true){
if((i__25853__auto___31074 < len__25852__auto___31073)){
args__25859__auto__.push((arguments[i__25853__auto___31074]));

var G__31075 = (i__25853__auto___31074 + (1));
i__25853__auto___31074 = G__31075;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31003__auto___31072))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31003__auto___31072){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31003__auto___31072),args);
});})(g__31003__auto___31072))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__31003__auto___31072){
return (function (seq31045){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31045));
});})(g__31003__auto___31072))
;


var g__31003__auto___31076 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__31003__auto___31076){
return (function cljs$spec$impl$gen$set(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31077 = arguments.length;
var i__25853__auto___31078 = (0);
while(true){
if((i__25853__auto___31078 < len__25852__auto___31077)){
args__25859__auto__.push((arguments[i__25853__auto___31078]));

var G__31079 = (i__25853__auto___31078 + (1));
i__25853__auto___31078 = G__31079;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31003__auto___31076))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31003__auto___31076){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31003__auto___31076),args);
});})(g__31003__auto___31076))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__31003__auto___31076){
return (function (seq31046){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31046));
});})(g__31003__auto___31076))
;


var g__31003__auto___31080 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__31003__auto___31080){
return (function cljs$spec$impl$gen$vector(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31081 = arguments.length;
var i__25853__auto___31082 = (0);
while(true){
if((i__25853__auto___31082 < len__25852__auto___31081)){
args__25859__auto__.push((arguments[i__25853__auto___31082]));

var G__31083 = (i__25853__auto___31082 + (1));
i__25853__auto___31082 = G__31083;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31003__auto___31080))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31003__auto___31080){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31003__auto___31080),args);
});})(g__31003__auto___31080))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__31003__auto___31080){
return (function (seq31047){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31047));
});})(g__31003__auto___31080))
;


var g__31003__auto___31084 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__31003__auto___31084){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31085 = arguments.length;
var i__25853__auto___31086 = (0);
while(true){
if((i__25853__auto___31086 < len__25852__auto___31085)){
args__25859__auto__.push((arguments[i__25853__auto___31086]));

var G__31087 = (i__25853__auto___31086 + (1));
i__25853__auto___31086 = G__31087;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31003__auto___31084))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31003__auto___31084){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31003__auto___31084),args);
});})(g__31003__auto___31084))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__31003__auto___31084){
return (function (seq31048){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31048));
});})(g__31003__auto___31084))
;


var g__31003__auto___31088 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__31003__auto___31088){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31089 = arguments.length;
var i__25853__auto___31090 = (0);
while(true){
if((i__25853__auto___31090 < len__25852__auto___31089)){
args__25859__auto__.push((arguments[i__25853__auto___31090]));

var G__31091 = (i__25853__auto___31090 + (1));
i__25853__auto___31090 = G__31091;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31003__auto___31088))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31003__auto___31088){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31003__auto___31088),args);
});})(g__31003__auto___31088))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__31003__auto___31088){
return (function (seq31049){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31049));
});})(g__31003__auto___31088))
;


var g__31003__auto___31092 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__31003__auto___31092){
return (function cljs$spec$impl$gen$elements(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31093 = arguments.length;
var i__25853__auto___31094 = (0);
while(true){
if((i__25853__auto___31094 < len__25852__auto___31093)){
args__25859__auto__.push((arguments[i__25853__auto___31094]));

var G__31095 = (i__25853__auto___31094 + (1));
i__25853__auto___31094 = G__31095;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31003__auto___31092))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31003__auto___31092){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31003__auto___31092),args);
});})(g__31003__auto___31092))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__31003__auto___31092){
return (function (seq31050){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31050));
});})(g__31003__auto___31092))
;


var g__31003__auto___31096 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__31003__auto___31096){
return (function cljs$spec$impl$gen$bind(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31097 = arguments.length;
var i__25853__auto___31098 = (0);
while(true){
if((i__25853__auto___31098 < len__25852__auto___31097)){
args__25859__auto__.push((arguments[i__25853__auto___31098]));

var G__31099 = (i__25853__auto___31098 + (1));
i__25853__auto___31098 = G__31099;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31003__auto___31096))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31003__auto___31096){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31003__auto___31096),args);
});})(g__31003__auto___31096))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__31003__auto___31096){
return (function (seq31051){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31051));
});})(g__31003__auto___31096))
;


var g__31003__auto___31100 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__31003__auto___31100){
return (function cljs$spec$impl$gen$choose(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31101 = arguments.length;
var i__25853__auto___31102 = (0);
while(true){
if((i__25853__auto___31102 < len__25852__auto___31101)){
args__25859__auto__.push((arguments[i__25853__auto___31102]));

var G__31103 = (i__25853__auto___31102 + (1));
i__25853__auto___31102 = G__31103;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31003__auto___31100))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31003__auto___31100){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31003__auto___31100),args);
});})(g__31003__auto___31100))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__31003__auto___31100){
return (function (seq31052){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31052));
});})(g__31003__auto___31100))
;


var g__31003__auto___31104 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__31003__auto___31104){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31105 = arguments.length;
var i__25853__auto___31106 = (0);
while(true){
if((i__25853__auto___31106 < len__25852__auto___31105)){
args__25859__auto__.push((arguments[i__25853__auto___31106]));

var G__31107 = (i__25853__auto___31106 + (1));
i__25853__auto___31106 = G__31107;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31003__auto___31104))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31003__auto___31104){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31003__auto___31104),args);
});})(g__31003__auto___31104))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__31003__auto___31104){
return (function (seq31053){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31053));
});})(g__31003__auto___31104))
;


var g__31003__auto___31108 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__31003__auto___31108){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31109 = arguments.length;
var i__25853__auto___31110 = (0);
while(true){
if((i__25853__auto___31110 < len__25852__auto___31109)){
args__25859__auto__.push((arguments[i__25853__auto___31110]));

var G__31111 = (i__25853__auto___31110 + (1));
i__25853__auto___31110 = G__31111;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31003__auto___31108))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31003__auto___31108){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31003__auto___31108),args);
});})(g__31003__auto___31108))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__31003__auto___31108){
return (function (seq31054){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31054));
});})(g__31003__auto___31108))
;


var g__31003__auto___31112 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__31003__auto___31112){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31113 = arguments.length;
var i__25853__auto___31114 = (0);
while(true){
if((i__25853__auto___31114 < len__25852__auto___31113)){
args__25859__auto__.push((arguments[i__25853__auto___31114]));

var G__31115 = (i__25853__auto___31114 + (1));
i__25853__auto___31114 = G__31115;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31003__auto___31112))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31003__auto___31112){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31003__auto___31112),args);
});})(g__31003__auto___31112))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__31003__auto___31112){
return (function (seq31055){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31055));
});})(g__31003__auto___31112))
;


var g__31003__auto___31116 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__31003__auto___31116){
return (function cljs$spec$impl$gen$sample(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31117 = arguments.length;
var i__25853__auto___31118 = (0);
while(true){
if((i__25853__auto___31118 < len__25852__auto___31117)){
args__25859__auto__.push((arguments[i__25853__auto___31118]));

var G__31119 = (i__25853__auto___31118 + (1));
i__25853__auto___31118 = G__31119;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31003__auto___31116))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31003__auto___31116){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31003__auto___31116),args);
});})(g__31003__auto___31116))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__31003__auto___31116){
return (function (seq31056){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31056));
});})(g__31003__auto___31116))
;


var g__31003__auto___31120 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__31003__auto___31120){
return (function cljs$spec$impl$gen$return(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31121 = arguments.length;
var i__25853__auto___31122 = (0);
while(true){
if((i__25853__auto___31122 < len__25852__auto___31121)){
args__25859__auto__.push((arguments[i__25853__auto___31122]));

var G__31123 = (i__25853__auto___31122 + (1));
i__25853__auto___31122 = G__31123;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31003__auto___31120))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31003__auto___31120){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31003__auto___31120),args);
});})(g__31003__auto___31120))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__31003__auto___31120){
return (function (seq31057){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31057));
});})(g__31003__auto___31120))
;


var g__31003__auto___31124 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__31003__auto___31124){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31125 = arguments.length;
var i__25853__auto___31126 = (0);
while(true){
if((i__25853__auto___31126 < len__25852__auto___31125)){
args__25859__auto__.push((arguments[i__25853__auto___31126]));

var G__31127 = (i__25853__auto___31126 + (1));
i__25853__auto___31126 = G__31127;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31003__auto___31124))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31003__auto___31124){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31003__auto___31124),args);
});})(g__31003__auto___31124))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__31003__auto___31124){
return (function (seq31058){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31058));
});})(g__31003__auto___31124))
;


var g__31003__auto___31128 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__31003__auto___31128){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31129 = arguments.length;
var i__25853__auto___31130 = (0);
while(true){
if((i__25853__auto___31130 < len__25852__auto___31129)){
args__25859__auto__.push((arguments[i__25853__auto___31130]));

var G__31131 = (i__25853__auto___31130 + (1));
i__25853__auto___31130 = G__31131;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31003__auto___31128))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31003__auto___31128){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31003__auto___31128),args);
});})(g__31003__auto___31128))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__31003__auto___31128){
return (function (seq31059){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31059));
});})(g__31003__auto___31128))
;

var g__31016__auto___31153 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__31016__auto___31153){
return (function cljs$spec$impl$gen$any(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31154 = arguments.length;
var i__25853__auto___31155 = (0);
while(true){
if((i__25853__auto___31155 < len__25852__auto___31154)){
args__25859__auto__.push((arguments[i__25853__auto___31155]));

var G__31156 = (i__25853__auto___31155 + (1));
i__25853__auto___31155 = G__31156;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31016__auto___31153))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31016__auto___31153){
return (function (args){
return cljs.core.deref.call(null,g__31016__auto___31153);
});})(g__31016__auto___31153))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__31016__auto___31153){
return (function (seq31132){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31132));
});})(g__31016__auto___31153))
;


var g__31016__auto___31157 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__31016__auto___31157){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31158 = arguments.length;
var i__25853__auto___31159 = (0);
while(true){
if((i__25853__auto___31159 < len__25852__auto___31158)){
args__25859__auto__.push((arguments[i__25853__auto___31159]));

var G__31160 = (i__25853__auto___31159 + (1));
i__25853__auto___31159 = G__31160;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31016__auto___31157))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31016__auto___31157){
return (function (args){
return cljs.core.deref.call(null,g__31016__auto___31157);
});})(g__31016__auto___31157))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__31016__auto___31157){
return (function (seq31133){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31133));
});})(g__31016__auto___31157))
;


var g__31016__auto___31161 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__31016__auto___31161){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31162 = arguments.length;
var i__25853__auto___31163 = (0);
while(true){
if((i__25853__auto___31163 < len__25852__auto___31162)){
args__25859__auto__.push((arguments[i__25853__auto___31163]));

var G__31164 = (i__25853__auto___31163 + (1));
i__25853__auto___31163 = G__31164;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31016__auto___31161))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31016__auto___31161){
return (function (args){
return cljs.core.deref.call(null,g__31016__auto___31161);
});})(g__31016__auto___31161))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__31016__auto___31161){
return (function (seq31134){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31134));
});})(g__31016__auto___31161))
;


var g__31016__auto___31165 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__31016__auto___31165){
return (function cljs$spec$impl$gen$char(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31166 = arguments.length;
var i__25853__auto___31167 = (0);
while(true){
if((i__25853__auto___31167 < len__25852__auto___31166)){
args__25859__auto__.push((arguments[i__25853__auto___31167]));

var G__31168 = (i__25853__auto___31167 + (1));
i__25853__auto___31167 = G__31168;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31016__auto___31165))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31016__auto___31165){
return (function (args){
return cljs.core.deref.call(null,g__31016__auto___31165);
});})(g__31016__auto___31165))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__31016__auto___31165){
return (function (seq31135){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31135));
});})(g__31016__auto___31165))
;


var g__31016__auto___31169 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__31016__auto___31169){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31170 = arguments.length;
var i__25853__auto___31171 = (0);
while(true){
if((i__25853__auto___31171 < len__25852__auto___31170)){
args__25859__auto__.push((arguments[i__25853__auto___31171]));

var G__31172 = (i__25853__auto___31171 + (1));
i__25853__auto___31171 = G__31172;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31016__auto___31169))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31016__auto___31169){
return (function (args){
return cljs.core.deref.call(null,g__31016__auto___31169);
});})(g__31016__auto___31169))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__31016__auto___31169){
return (function (seq31136){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31136));
});})(g__31016__auto___31169))
;


var g__31016__auto___31173 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__31016__auto___31173){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31174 = arguments.length;
var i__25853__auto___31175 = (0);
while(true){
if((i__25853__auto___31175 < len__25852__auto___31174)){
args__25859__auto__.push((arguments[i__25853__auto___31175]));

var G__31176 = (i__25853__auto___31175 + (1));
i__25853__auto___31175 = G__31176;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31016__auto___31173))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31016__auto___31173){
return (function (args){
return cljs.core.deref.call(null,g__31016__auto___31173);
});})(g__31016__auto___31173))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__31016__auto___31173){
return (function (seq31137){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31137));
});})(g__31016__auto___31173))
;


var g__31016__auto___31177 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__31016__auto___31177){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31178 = arguments.length;
var i__25853__auto___31179 = (0);
while(true){
if((i__25853__auto___31179 < len__25852__auto___31178)){
args__25859__auto__.push((arguments[i__25853__auto___31179]));

var G__31180 = (i__25853__auto___31179 + (1));
i__25853__auto___31179 = G__31180;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31016__auto___31177))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31016__auto___31177){
return (function (args){
return cljs.core.deref.call(null,g__31016__auto___31177);
});})(g__31016__auto___31177))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__31016__auto___31177){
return (function (seq31138){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31138));
});})(g__31016__auto___31177))
;


var g__31016__auto___31181 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__31016__auto___31181){
return (function cljs$spec$impl$gen$double(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31182 = arguments.length;
var i__25853__auto___31183 = (0);
while(true){
if((i__25853__auto___31183 < len__25852__auto___31182)){
args__25859__auto__.push((arguments[i__25853__auto___31183]));

var G__31184 = (i__25853__auto___31183 + (1));
i__25853__auto___31183 = G__31184;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31016__auto___31181))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31016__auto___31181){
return (function (args){
return cljs.core.deref.call(null,g__31016__auto___31181);
});})(g__31016__auto___31181))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__31016__auto___31181){
return (function (seq31139){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31139));
});})(g__31016__auto___31181))
;


var g__31016__auto___31185 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__31016__auto___31185){
return (function cljs$spec$impl$gen$int(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31186 = arguments.length;
var i__25853__auto___31187 = (0);
while(true){
if((i__25853__auto___31187 < len__25852__auto___31186)){
args__25859__auto__.push((arguments[i__25853__auto___31187]));

var G__31188 = (i__25853__auto___31187 + (1));
i__25853__auto___31187 = G__31188;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31016__auto___31185))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31016__auto___31185){
return (function (args){
return cljs.core.deref.call(null,g__31016__auto___31185);
});})(g__31016__auto___31185))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__31016__auto___31185){
return (function (seq31140){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31140));
});})(g__31016__auto___31185))
;


var g__31016__auto___31189 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__31016__auto___31189){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31190 = arguments.length;
var i__25853__auto___31191 = (0);
while(true){
if((i__25853__auto___31191 < len__25852__auto___31190)){
args__25859__auto__.push((arguments[i__25853__auto___31191]));

var G__31192 = (i__25853__auto___31191 + (1));
i__25853__auto___31191 = G__31192;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31016__auto___31189))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31016__auto___31189){
return (function (args){
return cljs.core.deref.call(null,g__31016__auto___31189);
});})(g__31016__auto___31189))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__31016__auto___31189){
return (function (seq31141){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31141));
});})(g__31016__auto___31189))
;


var g__31016__auto___31193 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__31016__auto___31193){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31194 = arguments.length;
var i__25853__auto___31195 = (0);
while(true){
if((i__25853__auto___31195 < len__25852__auto___31194)){
args__25859__auto__.push((arguments[i__25853__auto___31195]));

var G__31196 = (i__25853__auto___31195 + (1));
i__25853__auto___31195 = G__31196;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31016__auto___31193))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31016__auto___31193){
return (function (args){
return cljs.core.deref.call(null,g__31016__auto___31193);
});})(g__31016__auto___31193))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__31016__auto___31193){
return (function (seq31142){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31142));
});})(g__31016__auto___31193))
;


var g__31016__auto___31197 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__31016__auto___31197){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31198 = arguments.length;
var i__25853__auto___31199 = (0);
while(true){
if((i__25853__auto___31199 < len__25852__auto___31198)){
args__25859__auto__.push((arguments[i__25853__auto___31199]));

var G__31200 = (i__25853__auto___31199 + (1));
i__25853__auto___31199 = G__31200;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31016__auto___31197))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31016__auto___31197){
return (function (args){
return cljs.core.deref.call(null,g__31016__auto___31197);
});})(g__31016__auto___31197))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__31016__auto___31197){
return (function (seq31143){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31143));
});})(g__31016__auto___31197))
;


var g__31016__auto___31201 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__31016__auto___31201){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31202 = arguments.length;
var i__25853__auto___31203 = (0);
while(true){
if((i__25853__auto___31203 < len__25852__auto___31202)){
args__25859__auto__.push((arguments[i__25853__auto___31203]));

var G__31204 = (i__25853__auto___31203 + (1));
i__25853__auto___31203 = G__31204;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31016__auto___31201))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31016__auto___31201){
return (function (args){
return cljs.core.deref.call(null,g__31016__auto___31201);
});})(g__31016__auto___31201))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__31016__auto___31201){
return (function (seq31144){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31144));
});})(g__31016__auto___31201))
;


var g__31016__auto___31205 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__31016__auto___31205){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31206 = arguments.length;
var i__25853__auto___31207 = (0);
while(true){
if((i__25853__auto___31207 < len__25852__auto___31206)){
args__25859__auto__.push((arguments[i__25853__auto___31207]));

var G__31208 = (i__25853__auto___31207 + (1));
i__25853__auto___31207 = G__31208;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31016__auto___31205))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31016__auto___31205){
return (function (args){
return cljs.core.deref.call(null,g__31016__auto___31205);
});})(g__31016__auto___31205))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__31016__auto___31205){
return (function (seq31145){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31145));
});})(g__31016__auto___31205))
;


var g__31016__auto___31209 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__31016__auto___31209){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31210 = arguments.length;
var i__25853__auto___31211 = (0);
while(true){
if((i__25853__auto___31211 < len__25852__auto___31210)){
args__25859__auto__.push((arguments[i__25853__auto___31211]));

var G__31212 = (i__25853__auto___31211 + (1));
i__25853__auto___31211 = G__31212;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31016__auto___31209))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31016__auto___31209){
return (function (args){
return cljs.core.deref.call(null,g__31016__auto___31209);
});})(g__31016__auto___31209))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__31016__auto___31209){
return (function (seq31146){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31146));
});})(g__31016__auto___31209))
;


var g__31016__auto___31213 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__31016__auto___31213){
return (function cljs$spec$impl$gen$string(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31214 = arguments.length;
var i__25853__auto___31215 = (0);
while(true){
if((i__25853__auto___31215 < len__25852__auto___31214)){
args__25859__auto__.push((arguments[i__25853__auto___31215]));

var G__31216 = (i__25853__auto___31215 + (1));
i__25853__auto___31215 = G__31216;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31016__auto___31213))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31016__auto___31213){
return (function (args){
return cljs.core.deref.call(null,g__31016__auto___31213);
});})(g__31016__auto___31213))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__31016__auto___31213){
return (function (seq31147){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31147));
});})(g__31016__auto___31213))
;


var g__31016__auto___31217 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__31016__auto___31217){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31218 = arguments.length;
var i__25853__auto___31219 = (0);
while(true){
if((i__25853__auto___31219 < len__25852__auto___31218)){
args__25859__auto__.push((arguments[i__25853__auto___31219]));

var G__31220 = (i__25853__auto___31219 + (1));
i__25853__auto___31219 = G__31220;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31016__auto___31217))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31016__auto___31217){
return (function (args){
return cljs.core.deref.call(null,g__31016__auto___31217);
});})(g__31016__auto___31217))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__31016__auto___31217){
return (function (seq31148){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31148));
});})(g__31016__auto___31217))
;


var g__31016__auto___31221 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__31016__auto___31221){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31222 = arguments.length;
var i__25853__auto___31223 = (0);
while(true){
if((i__25853__auto___31223 < len__25852__auto___31222)){
args__25859__auto__.push((arguments[i__25853__auto___31223]));

var G__31224 = (i__25853__auto___31223 + (1));
i__25853__auto___31223 = G__31224;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31016__auto___31221))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31016__auto___31221){
return (function (args){
return cljs.core.deref.call(null,g__31016__auto___31221);
});})(g__31016__auto___31221))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__31016__auto___31221){
return (function (seq31149){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31149));
});})(g__31016__auto___31221))
;


var g__31016__auto___31225 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__31016__auto___31225){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31226 = arguments.length;
var i__25853__auto___31227 = (0);
while(true){
if((i__25853__auto___31227 < len__25852__auto___31226)){
args__25859__auto__.push((arguments[i__25853__auto___31227]));

var G__31228 = (i__25853__auto___31227 + (1));
i__25853__auto___31227 = G__31228;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31016__auto___31225))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31016__auto___31225){
return (function (args){
return cljs.core.deref.call(null,g__31016__auto___31225);
});})(g__31016__auto___31225))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__31016__auto___31225){
return (function (seq31150){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31150));
});})(g__31016__auto___31225))
;


var g__31016__auto___31229 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__31016__auto___31229){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31230 = arguments.length;
var i__25853__auto___31231 = (0);
while(true){
if((i__25853__auto___31231 < len__25852__auto___31230)){
args__25859__auto__.push((arguments[i__25853__auto___31231]));

var G__31232 = (i__25853__auto___31231 + (1));
i__25853__auto___31231 = G__31232;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31016__auto___31229))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31016__auto___31229){
return (function (args){
return cljs.core.deref.call(null,g__31016__auto___31229);
});})(g__31016__auto___31229))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__31016__auto___31229){
return (function (seq31151){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31151));
});})(g__31016__auto___31229))
;


var g__31016__auto___31233 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__31016__auto___31233){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31234 = arguments.length;
var i__25853__auto___31235 = (0);
while(true){
if((i__25853__auto___31235 < len__25852__auto___31234)){
args__25859__auto__.push((arguments[i__25853__auto___31235]));

var G__31236 = (i__25853__auto___31235 + (1));
i__25853__auto___31235 = G__31236;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});})(g__31016__auto___31233))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31016__auto___31233){
return (function (args){
return cljs.core.deref.call(null,g__31016__auto___31233);
});})(g__31016__auto___31233))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__31016__auto___31233){
return (function (seq31152){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31152));
});})(g__31016__auto___31233))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__25859__auto__ = [];
var len__25852__auto___31239 = arguments.length;
var i__25853__auto___31240 = (0);
while(true){
if((i__25853__auto___31240 < len__25852__auto___31239)){
args__25859__auto__.push((arguments[i__25853__auto___31240]));

var G__31241 = (i__25853__auto___31240 + (1));
i__25853__auto___31240 = G__31241;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__31237_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__31237_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq31238){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31238));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__31242_SHARP_){
return (new Date(p1__31242_SHARP_));
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

//# sourceMappingURL=gen.js.map?rel=1485355881316