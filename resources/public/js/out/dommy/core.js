// Compiled by ClojureScript 1.9.229 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__24801__auto__ = elem.textContent;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args29943 = [];
var len__25876__auto___29946 = arguments.length;
var i__25877__auto___29947 = (0);
while(true){
if((i__25877__auto___29947 < len__25876__auto___29946)){
args29943.push((arguments[i__25877__auto___29947]));

var G__29948 = (i__25877__auto___29947 + (1));
i__25877__auto___29947 = G__29948;
continue;
} else {
}
break;
}

var G__29945 = args29943.length;
switch (G__29945) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29943.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args29950 = [];
var len__25876__auto___29953 = arguments.length;
var i__25877__auto___29954 = (0);
while(true){
if((i__25877__auto___29954 < len__25876__auto___29953)){
args29950.push((arguments[i__25877__auto___29954]));

var G__29955 = (i__25877__auto___29954 + (1));
i__25877__auto___29954 = G__29955;
continue;
} else {
}
break;
}

var G__29952 = args29950.length;
switch (G__29952) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29950.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args29958 = [];
var len__25876__auto___29961 = arguments.length;
var i__25877__auto___29962 = (0);
while(true){
if((i__25877__auto___29962 < len__25876__auto___29961)){
args29958.push((arguments[i__25877__auto___29962]));

var G__29963 = (i__25877__auto___29962 + (1));
i__25877__auto___29962 = G__29963;
continue;
} else {
}
break;
}

var G__29960 = args29958.length;
switch (G__29960) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29958.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__29957_SHARP_){
return !((p1__29957_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__25883__auto__ = [];
var len__25876__auto___29977 = arguments.length;
var i__25877__auto___29978 = (0);
while(true){
if((i__25877__auto___29978 < len__25876__auto___29977)){
args__25883__auto__.push((arguments[i__25877__auto___29978]));

var G__29979 = (i__25877__auto___29978 + (1));
i__25877__auto___29978 = G__29979;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__29967_29980 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__29968_29981 = null;
var count__29969_29982 = (0);
var i__29970_29983 = (0);
while(true){
if((i__29970_29983 < count__29969_29982)){
var vec__29971_29984 = cljs.core._nth.call(null,chunk__29968_29981,i__29970_29983);
var k_29985 = cljs.core.nth.call(null,vec__29971_29984,(0),null);
var v_29986 = cljs.core.nth.call(null,vec__29971_29984,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_29985),v_29986);

var G__29987 = seq__29967_29980;
var G__29988 = chunk__29968_29981;
var G__29989 = count__29969_29982;
var G__29990 = (i__29970_29983 + (1));
seq__29967_29980 = G__29987;
chunk__29968_29981 = G__29988;
count__29969_29982 = G__29989;
i__29970_29983 = G__29990;
continue;
} else {
var temp__4657__auto___29991 = cljs.core.seq.call(null,seq__29967_29980);
if(temp__4657__auto___29991){
var seq__29967_29992__$1 = temp__4657__auto___29991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29967_29992__$1)){
var c__25612__auto___29993 = cljs.core.chunk_first.call(null,seq__29967_29992__$1);
var G__29994 = cljs.core.chunk_rest.call(null,seq__29967_29992__$1);
var G__29995 = c__25612__auto___29993;
var G__29996 = cljs.core.count.call(null,c__25612__auto___29993);
var G__29997 = (0);
seq__29967_29980 = G__29994;
chunk__29968_29981 = G__29995;
count__29969_29982 = G__29996;
i__29970_29983 = G__29997;
continue;
} else {
var vec__29974_29998 = cljs.core.first.call(null,seq__29967_29992__$1);
var k_29999 = cljs.core.nth.call(null,vec__29974_29998,(0),null);
var v_30000 = cljs.core.nth.call(null,vec__29974_29998,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_29999),v_30000);

var G__30001 = cljs.core.next.call(null,seq__29967_29992__$1);
var G__30002 = null;
var G__30003 = (0);
var G__30004 = (0);
seq__29967_29980 = G__30001;
chunk__29968_29981 = G__30002;
count__29969_29982 = G__30003;
i__29970_29983 = G__30004;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq29965){
var G__29966 = cljs.core.first.call(null,seq29965);
var seq29965__$1 = cljs.core.next.call(null,seq29965);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29966,seq29965__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__25883__auto__ = [];
var len__25876__auto___30011 = arguments.length;
var i__25877__auto___30012 = (0);
while(true){
if((i__25877__auto___30012 < len__25876__auto___30011)){
args__25883__auto__.push((arguments[i__25877__auto___30012]));

var G__30013 = (i__25877__auto___30012 + (1));
i__25877__auto___30012 = G__30013;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__30007_30014 = cljs.core.seq.call(null,keywords);
var chunk__30008_30015 = null;
var count__30009_30016 = (0);
var i__30010_30017 = (0);
while(true){
if((i__30010_30017 < count__30009_30016)){
var kw_30018 = cljs.core._nth.call(null,chunk__30008_30015,i__30010_30017);
style.removeProperty(dommy.utils.as_str.call(null,kw_30018));

var G__30019 = seq__30007_30014;
var G__30020 = chunk__30008_30015;
var G__30021 = count__30009_30016;
var G__30022 = (i__30010_30017 + (1));
seq__30007_30014 = G__30019;
chunk__30008_30015 = G__30020;
count__30009_30016 = G__30021;
i__30010_30017 = G__30022;
continue;
} else {
var temp__4657__auto___30023 = cljs.core.seq.call(null,seq__30007_30014);
if(temp__4657__auto___30023){
var seq__30007_30024__$1 = temp__4657__auto___30023;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30007_30024__$1)){
var c__25612__auto___30025 = cljs.core.chunk_first.call(null,seq__30007_30024__$1);
var G__30026 = cljs.core.chunk_rest.call(null,seq__30007_30024__$1);
var G__30027 = c__25612__auto___30025;
var G__30028 = cljs.core.count.call(null,c__25612__auto___30025);
var G__30029 = (0);
seq__30007_30014 = G__30026;
chunk__30008_30015 = G__30027;
count__30009_30016 = G__30028;
i__30010_30017 = G__30029;
continue;
} else {
var kw_30030 = cljs.core.first.call(null,seq__30007_30024__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_30030));

var G__30031 = cljs.core.next.call(null,seq__30007_30024__$1);
var G__30032 = null;
var G__30033 = (0);
var G__30034 = (0);
seq__30007_30014 = G__30031;
chunk__30008_30015 = G__30032;
count__30009_30016 = G__30033;
i__30010_30017 = G__30034;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq30005){
var G__30006 = cljs.core.first.call(null,seq30005);
var seq30005__$1 = cljs.core.next.call(null,seq30005);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30006,seq30005__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__25883__auto__ = [];
var len__25876__auto___30047 = arguments.length;
var i__25877__auto___30048 = (0);
while(true){
if((i__25877__auto___30048 < len__25876__auto___30047)){
args__25883__auto__.push((arguments[i__25877__auto___30048]));

var G__30049 = (i__25877__auto___30048 + (1));
i__25877__auto___30048 = G__30049;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__30037_30050 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__30038_30051 = null;
var count__30039_30052 = (0);
var i__30040_30053 = (0);
while(true){
if((i__30040_30053 < count__30039_30052)){
var vec__30041_30054 = cljs.core._nth.call(null,chunk__30038_30051,i__30040_30053);
var k_30055 = cljs.core.nth.call(null,vec__30041_30054,(0),null);
var v_30056 = cljs.core.nth.call(null,vec__30041_30054,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_30055,[cljs.core.str(v_30056),cljs.core.str("px")].join(''));

var G__30057 = seq__30037_30050;
var G__30058 = chunk__30038_30051;
var G__30059 = count__30039_30052;
var G__30060 = (i__30040_30053 + (1));
seq__30037_30050 = G__30057;
chunk__30038_30051 = G__30058;
count__30039_30052 = G__30059;
i__30040_30053 = G__30060;
continue;
} else {
var temp__4657__auto___30061 = cljs.core.seq.call(null,seq__30037_30050);
if(temp__4657__auto___30061){
var seq__30037_30062__$1 = temp__4657__auto___30061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30037_30062__$1)){
var c__25612__auto___30063 = cljs.core.chunk_first.call(null,seq__30037_30062__$1);
var G__30064 = cljs.core.chunk_rest.call(null,seq__30037_30062__$1);
var G__30065 = c__25612__auto___30063;
var G__30066 = cljs.core.count.call(null,c__25612__auto___30063);
var G__30067 = (0);
seq__30037_30050 = G__30064;
chunk__30038_30051 = G__30065;
count__30039_30052 = G__30066;
i__30040_30053 = G__30067;
continue;
} else {
var vec__30044_30068 = cljs.core.first.call(null,seq__30037_30062__$1);
var k_30069 = cljs.core.nth.call(null,vec__30044_30068,(0),null);
var v_30070 = cljs.core.nth.call(null,vec__30044_30068,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_30069,[cljs.core.str(v_30070),cljs.core.str("px")].join(''));

var G__30071 = cljs.core.next.call(null,seq__30037_30062__$1);
var G__30072 = null;
var G__30073 = (0);
var G__30074 = (0);
seq__30037_30050 = G__30071;
chunk__30038_30051 = G__30072;
count__30039_30052 = G__30073;
i__30040_30053 = G__30074;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq30035){
var G__30036 = cljs.core.first.call(null,seq30035);
var seq30035__$1 = cljs.core.next.call(null,seq30035);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30036,seq30035__$1);
});

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args30075 = [];
var len__25876__auto___30094 = arguments.length;
var i__25877__auto___30095 = (0);
while(true){
if((i__25877__auto___30095 < len__25876__auto___30094)){
args30075.push((arguments[i__25877__auto___30095]));

var G__30096 = (i__25877__auto___30095 + (1));
i__25877__auto___30095 = G__30096;
continue;
} else {
}
break;
}

var G__30081 = args30075.length;
switch (G__30081) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__25895__auto__ = (new cljs.core.IndexedSeq(args30075.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25895__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__30082 = elem;
(G__30082[k__$1] = v);

return G__30082;
} else {
var G__30083 = elem;
G__30083.setAttribute(k__$1,v);

return G__30083;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__30084_30098 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__30085_30099 = null;
var count__30086_30100 = (0);
var i__30087_30101 = (0);
while(true){
if((i__30087_30101 < count__30086_30100)){
var vec__30088_30102 = cljs.core._nth.call(null,chunk__30085_30099,i__30087_30101);
var k_30103__$1 = cljs.core.nth.call(null,vec__30088_30102,(0),null);
var v_30104__$1 = cljs.core.nth.call(null,vec__30088_30102,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_30103__$1,v_30104__$1);

var G__30105 = seq__30084_30098;
var G__30106 = chunk__30085_30099;
var G__30107 = count__30086_30100;
var G__30108 = (i__30087_30101 + (1));
seq__30084_30098 = G__30105;
chunk__30085_30099 = G__30106;
count__30086_30100 = G__30107;
i__30087_30101 = G__30108;
continue;
} else {
var temp__4657__auto___30109 = cljs.core.seq.call(null,seq__30084_30098);
if(temp__4657__auto___30109){
var seq__30084_30110__$1 = temp__4657__auto___30109;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30084_30110__$1)){
var c__25612__auto___30111 = cljs.core.chunk_first.call(null,seq__30084_30110__$1);
var G__30112 = cljs.core.chunk_rest.call(null,seq__30084_30110__$1);
var G__30113 = c__25612__auto___30111;
var G__30114 = cljs.core.count.call(null,c__25612__auto___30111);
var G__30115 = (0);
seq__30084_30098 = G__30112;
chunk__30085_30099 = G__30113;
count__30086_30100 = G__30114;
i__30087_30101 = G__30115;
continue;
} else {
var vec__30091_30116 = cljs.core.first.call(null,seq__30084_30110__$1);
var k_30117__$1 = cljs.core.nth.call(null,vec__30091_30116,(0),null);
var v_30118__$1 = cljs.core.nth.call(null,vec__30091_30116,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_30117__$1,v_30118__$1);

var G__30119 = cljs.core.next.call(null,seq__30084_30110__$1);
var G__30120 = null;
var G__30121 = (0);
var G__30122 = (0);
seq__30084_30098 = G__30119;
chunk__30085_30099 = G__30120;
count__30086_30100 = G__30121;
i__30087_30101 = G__30122;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq30076){
var G__30077 = cljs.core.first.call(null,seq30076);
var seq30076__$1 = cljs.core.next.call(null,seq30076);
var G__30078 = cljs.core.first.call(null,seq30076__$1);
var seq30076__$2 = cljs.core.next.call(null,seq30076__$1);
var G__30079 = cljs.core.first.call(null,seq30076__$2);
var seq30076__$3 = cljs.core.next.call(null,seq30076__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30077,G__30078,G__30079,seq30076__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args30123 = [];
var len__25876__auto___30133 = arguments.length;
var i__25877__auto___30134 = (0);
while(true){
if((i__25877__auto___30134 < len__25876__auto___30133)){
args30123.push((arguments[i__25877__auto___30134]));

var G__30135 = (i__25877__auto___30134 + (1));
i__25877__auto___30134 = G__30135;
continue;
} else {
}
break;
}

var G__30128 = args30123.length;
switch (G__30128) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25895__auto__ = (new cljs.core.IndexedSeq(args30123.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25895__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_30137__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_30137__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_30137__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__30129_30138 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__30130_30139 = null;
var count__30131_30140 = (0);
var i__30132_30141 = (0);
while(true){
if((i__30132_30141 < count__30131_30140)){
var k_30142__$1 = cljs.core._nth.call(null,chunk__30130_30139,i__30132_30141);
dommy.core.remove_attr_BANG_.call(null,elem,k_30142__$1);

var G__30143 = seq__30129_30138;
var G__30144 = chunk__30130_30139;
var G__30145 = count__30131_30140;
var G__30146 = (i__30132_30141 + (1));
seq__30129_30138 = G__30143;
chunk__30130_30139 = G__30144;
count__30131_30140 = G__30145;
i__30132_30141 = G__30146;
continue;
} else {
var temp__4657__auto___30147 = cljs.core.seq.call(null,seq__30129_30138);
if(temp__4657__auto___30147){
var seq__30129_30148__$1 = temp__4657__auto___30147;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30129_30148__$1)){
var c__25612__auto___30149 = cljs.core.chunk_first.call(null,seq__30129_30148__$1);
var G__30150 = cljs.core.chunk_rest.call(null,seq__30129_30148__$1);
var G__30151 = c__25612__auto___30149;
var G__30152 = cljs.core.count.call(null,c__25612__auto___30149);
var G__30153 = (0);
seq__30129_30138 = G__30150;
chunk__30130_30139 = G__30151;
count__30131_30140 = G__30152;
i__30132_30141 = G__30153;
continue;
} else {
var k_30154__$1 = cljs.core.first.call(null,seq__30129_30148__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_30154__$1);

var G__30155 = cljs.core.next.call(null,seq__30129_30148__$1);
var G__30156 = null;
var G__30157 = (0);
var G__30158 = (0);
seq__30129_30138 = G__30155;
chunk__30130_30139 = G__30156;
count__30131_30140 = G__30157;
i__30132_30141 = G__30158;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq30124){
var G__30125 = cljs.core.first.call(null,seq30124);
var seq30124__$1 = cljs.core.next.call(null,seq30124);
var G__30126 = cljs.core.first.call(null,seq30124__$1);
var seq30124__$2 = cljs.core.next.call(null,seq30124__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30125,G__30126,seq30124__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args30159 = [];
var len__25876__auto___30162 = arguments.length;
var i__25877__auto___30163 = (0);
while(true){
if((i__25877__auto___30163 < len__25876__auto___30162)){
args30159.push((arguments[i__25877__auto___30163]));

var G__30164 = (i__25877__auto___30163 + (1));
i__25877__auto___30163 = G__30164;
continue;
} else {
}
break;
}

var G__30161 = args30159.length;
switch (G__30161) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30159.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args30166 = [];
var len__25876__auto___30184 = arguments.length;
var i__25877__auto___30185 = (0);
while(true){
if((i__25877__auto___30185 < len__25876__auto___30184)){
args30166.push((arguments[i__25877__auto___30185]));

var G__30186 = (i__25877__auto___30185 + (1));
i__25877__auto___30185 = G__30186;
continue;
} else {
}
break;
}

var G__30171 = args30166.length;
switch (G__30171) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25895__auto__ = (new cljs.core.IndexedSeq(args30166.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25895__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___30188 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___30188)){
var class_list_30189 = temp__4655__auto___30188;
var seq__30172_30190 = cljs.core.seq.call(null,classes__$1);
var chunk__30173_30191 = null;
var count__30174_30192 = (0);
var i__30175_30193 = (0);
while(true){
if((i__30175_30193 < count__30174_30192)){
var c_30194 = cljs.core._nth.call(null,chunk__30173_30191,i__30175_30193);
class_list_30189.add(c_30194);

var G__30195 = seq__30172_30190;
var G__30196 = chunk__30173_30191;
var G__30197 = count__30174_30192;
var G__30198 = (i__30175_30193 + (1));
seq__30172_30190 = G__30195;
chunk__30173_30191 = G__30196;
count__30174_30192 = G__30197;
i__30175_30193 = G__30198;
continue;
} else {
var temp__4657__auto___30199 = cljs.core.seq.call(null,seq__30172_30190);
if(temp__4657__auto___30199){
var seq__30172_30200__$1 = temp__4657__auto___30199;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30172_30200__$1)){
var c__25612__auto___30201 = cljs.core.chunk_first.call(null,seq__30172_30200__$1);
var G__30202 = cljs.core.chunk_rest.call(null,seq__30172_30200__$1);
var G__30203 = c__25612__auto___30201;
var G__30204 = cljs.core.count.call(null,c__25612__auto___30201);
var G__30205 = (0);
seq__30172_30190 = G__30202;
chunk__30173_30191 = G__30203;
count__30174_30192 = G__30204;
i__30175_30193 = G__30205;
continue;
} else {
var c_30206 = cljs.core.first.call(null,seq__30172_30200__$1);
class_list_30189.add(c_30206);

var G__30207 = cljs.core.next.call(null,seq__30172_30200__$1);
var G__30208 = null;
var G__30209 = (0);
var G__30210 = (0);
seq__30172_30190 = G__30207;
chunk__30173_30191 = G__30208;
count__30174_30192 = G__30209;
i__30175_30193 = G__30210;
continue;
}
} else {
}
}
break;
}
} else {
var seq__30176_30211 = cljs.core.seq.call(null,classes__$1);
var chunk__30177_30212 = null;
var count__30178_30213 = (0);
var i__30179_30214 = (0);
while(true){
if((i__30179_30214 < count__30178_30213)){
var c_30215 = cljs.core._nth.call(null,chunk__30177_30212,i__30179_30214);
var class_name_30216 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_30216,c_30215))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_30216 === ""))?c_30215:[cljs.core.str(class_name_30216),cljs.core.str(" "),cljs.core.str(c_30215)].join('')));
}

var G__30217 = seq__30176_30211;
var G__30218 = chunk__30177_30212;
var G__30219 = count__30178_30213;
var G__30220 = (i__30179_30214 + (1));
seq__30176_30211 = G__30217;
chunk__30177_30212 = G__30218;
count__30178_30213 = G__30219;
i__30179_30214 = G__30220;
continue;
} else {
var temp__4657__auto___30221 = cljs.core.seq.call(null,seq__30176_30211);
if(temp__4657__auto___30221){
var seq__30176_30222__$1 = temp__4657__auto___30221;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30176_30222__$1)){
var c__25612__auto___30223 = cljs.core.chunk_first.call(null,seq__30176_30222__$1);
var G__30224 = cljs.core.chunk_rest.call(null,seq__30176_30222__$1);
var G__30225 = c__25612__auto___30223;
var G__30226 = cljs.core.count.call(null,c__25612__auto___30223);
var G__30227 = (0);
seq__30176_30211 = G__30224;
chunk__30177_30212 = G__30225;
count__30178_30213 = G__30226;
i__30179_30214 = G__30227;
continue;
} else {
var c_30228 = cljs.core.first.call(null,seq__30176_30222__$1);
var class_name_30229 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_30229,c_30228))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_30229 === ""))?c_30228:[cljs.core.str(class_name_30229),cljs.core.str(" "),cljs.core.str(c_30228)].join('')));
}

var G__30230 = cljs.core.next.call(null,seq__30176_30222__$1);
var G__30231 = null;
var G__30232 = (0);
var G__30233 = (0);
seq__30176_30211 = G__30230;
chunk__30177_30212 = G__30231;
count__30178_30213 = G__30232;
i__30179_30214 = G__30233;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__30180_30234 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__30181_30235 = null;
var count__30182_30236 = (0);
var i__30183_30237 = (0);
while(true){
if((i__30183_30237 < count__30182_30236)){
var c_30238 = cljs.core._nth.call(null,chunk__30181_30235,i__30183_30237);
dommy.core.add_class_BANG_.call(null,elem,c_30238);

var G__30239 = seq__30180_30234;
var G__30240 = chunk__30181_30235;
var G__30241 = count__30182_30236;
var G__30242 = (i__30183_30237 + (1));
seq__30180_30234 = G__30239;
chunk__30181_30235 = G__30240;
count__30182_30236 = G__30241;
i__30183_30237 = G__30242;
continue;
} else {
var temp__4657__auto___30243 = cljs.core.seq.call(null,seq__30180_30234);
if(temp__4657__auto___30243){
var seq__30180_30244__$1 = temp__4657__auto___30243;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30180_30244__$1)){
var c__25612__auto___30245 = cljs.core.chunk_first.call(null,seq__30180_30244__$1);
var G__30246 = cljs.core.chunk_rest.call(null,seq__30180_30244__$1);
var G__30247 = c__25612__auto___30245;
var G__30248 = cljs.core.count.call(null,c__25612__auto___30245);
var G__30249 = (0);
seq__30180_30234 = G__30246;
chunk__30181_30235 = G__30247;
count__30182_30236 = G__30248;
i__30183_30237 = G__30249;
continue;
} else {
var c_30250 = cljs.core.first.call(null,seq__30180_30244__$1);
dommy.core.add_class_BANG_.call(null,elem,c_30250);

var G__30251 = cljs.core.next.call(null,seq__30180_30244__$1);
var G__30252 = null;
var G__30253 = (0);
var G__30254 = (0);
seq__30180_30234 = G__30251;
chunk__30181_30235 = G__30252;
count__30182_30236 = G__30253;
i__30183_30237 = G__30254;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq30167){
var G__30168 = cljs.core.first.call(null,seq30167);
var seq30167__$1 = cljs.core.next.call(null,seq30167);
var G__30169 = cljs.core.first.call(null,seq30167__$1);
var seq30167__$2 = cljs.core.next.call(null,seq30167__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30168,G__30169,seq30167__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args30255 = [];
var len__25876__auto___30265 = arguments.length;
var i__25877__auto___30266 = (0);
while(true){
if((i__25877__auto___30266 < len__25876__auto___30265)){
args30255.push((arguments[i__25877__auto___30266]));

var G__30267 = (i__25877__auto___30266 + (1));
i__25877__auto___30266 = G__30267;
continue;
} else {
}
break;
}

var G__30260 = args30255.length;
switch (G__30260) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25895__auto__ = (new cljs.core.IndexedSeq(args30255.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25895__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___30269 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___30269)){
var class_list_30270 = temp__4655__auto___30269;
class_list_30270.remove(c__$1);
} else {
var class_name_30271 = dommy.core.class$.call(null,elem);
var new_class_name_30272 = dommy.utils.remove_class_str.call(null,class_name_30271,c__$1);
if((class_name_30271 === new_class_name_30272)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_30272);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__30261 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__30262 = null;
var count__30263 = (0);
var i__30264 = (0);
while(true){
if((i__30264 < count__30263)){
var c = cljs.core._nth.call(null,chunk__30262,i__30264);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__30273 = seq__30261;
var G__30274 = chunk__30262;
var G__30275 = count__30263;
var G__30276 = (i__30264 + (1));
seq__30261 = G__30273;
chunk__30262 = G__30274;
count__30263 = G__30275;
i__30264 = G__30276;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30261);
if(temp__4657__auto__){
var seq__30261__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30261__$1)){
var c__25612__auto__ = cljs.core.chunk_first.call(null,seq__30261__$1);
var G__30277 = cljs.core.chunk_rest.call(null,seq__30261__$1);
var G__30278 = c__25612__auto__;
var G__30279 = cljs.core.count.call(null,c__25612__auto__);
var G__30280 = (0);
seq__30261 = G__30277;
chunk__30262 = G__30278;
count__30263 = G__30279;
i__30264 = G__30280;
continue;
} else {
var c = cljs.core.first.call(null,seq__30261__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__30281 = cljs.core.next.call(null,seq__30261__$1);
var G__30282 = null;
var G__30283 = (0);
var G__30284 = (0);
seq__30261 = G__30281;
chunk__30262 = G__30282;
count__30263 = G__30283;
i__30264 = G__30284;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq30256){
var G__30257 = cljs.core.first.call(null,seq30256);
var seq30256__$1 = cljs.core.next.call(null,seq30256);
var G__30258 = cljs.core.first.call(null,seq30256__$1);
var seq30256__$2 = cljs.core.next.call(null,seq30256__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30257,G__30258,seq30256__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args30285 = [];
var len__25876__auto___30288 = arguments.length;
var i__25877__auto___30289 = (0);
while(true){
if((i__25877__auto___30289 < len__25876__auto___30288)){
args30285.push((arguments[i__25877__auto___30289]));

var G__30290 = (i__25877__auto___30289 + (1));
i__25877__auto___30289 = G__30290;
continue;
} else {
}
break;
}

var G__30287 = args30285.length;
switch (G__30287) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30285.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___30292 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___30292)){
var class_list_30293 = temp__4655__auto___30292;
class_list_30293.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args30294 = [];
var len__25876__auto___30297 = arguments.length;
var i__25877__auto___30298 = (0);
while(true){
if((i__25877__auto___30298 < len__25876__auto___30297)){
args30294.push((arguments[i__25877__auto___30298]));

var G__30299 = (i__25877__auto___30298 + (1));
i__25877__auto___30298 = G__30299;
continue;
} else {
}
break;
}

var G__30296 = args30294.length;
switch (G__30296) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30294.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args30301 = [];
var len__25876__auto___30304 = arguments.length;
var i__25877__auto___30305 = (0);
while(true){
if((i__25877__auto___30305 < len__25876__auto___30304)){
args30301.push((arguments[i__25877__auto___30305]));

var G__30306 = (i__25877__auto___30305 + (1));
i__25877__auto___30305 = G__30306;
continue;
} else {
}
break;
}

var G__30303 = args30301.length;
switch (G__30303) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30301.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args30308 = [];
var len__25876__auto___30319 = arguments.length;
var i__25877__auto___30320 = (0);
while(true){
if((i__25877__auto___30320 < len__25876__auto___30319)){
args30308.push((arguments[i__25877__auto___30320]));

var G__30321 = (i__25877__auto___30320 + (1));
i__25877__auto___30320 = G__30321;
continue;
} else {
}
break;
}

var G__30313 = args30308.length;
switch (G__30313) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25895__auto__ = (new cljs.core.IndexedSeq(args30308.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25895__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__30314 = parent;
G__30314.appendChild(child);

return G__30314;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__30315_30323 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__30316_30324 = null;
var count__30317_30325 = (0);
var i__30318_30326 = (0);
while(true){
if((i__30318_30326 < count__30317_30325)){
var c_30327 = cljs.core._nth.call(null,chunk__30316_30324,i__30318_30326);
dommy.core.append_BANG_.call(null,parent,c_30327);

var G__30328 = seq__30315_30323;
var G__30329 = chunk__30316_30324;
var G__30330 = count__30317_30325;
var G__30331 = (i__30318_30326 + (1));
seq__30315_30323 = G__30328;
chunk__30316_30324 = G__30329;
count__30317_30325 = G__30330;
i__30318_30326 = G__30331;
continue;
} else {
var temp__4657__auto___30332 = cljs.core.seq.call(null,seq__30315_30323);
if(temp__4657__auto___30332){
var seq__30315_30333__$1 = temp__4657__auto___30332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30315_30333__$1)){
var c__25612__auto___30334 = cljs.core.chunk_first.call(null,seq__30315_30333__$1);
var G__30335 = cljs.core.chunk_rest.call(null,seq__30315_30333__$1);
var G__30336 = c__25612__auto___30334;
var G__30337 = cljs.core.count.call(null,c__25612__auto___30334);
var G__30338 = (0);
seq__30315_30323 = G__30335;
chunk__30316_30324 = G__30336;
count__30317_30325 = G__30337;
i__30318_30326 = G__30338;
continue;
} else {
var c_30339 = cljs.core.first.call(null,seq__30315_30333__$1);
dommy.core.append_BANG_.call(null,parent,c_30339);

var G__30340 = cljs.core.next.call(null,seq__30315_30333__$1);
var G__30341 = null;
var G__30342 = (0);
var G__30343 = (0);
seq__30315_30323 = G__30340;
chunk__30316_30324 = G__30341;
count__30317_30325 = G__30342;
i__30318_30326 = G__30343;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq30309){
var G__30310 = cljs.core.first.call(null,seq30309);
var seq30309__$1 = cljs.core.next.call(null,seq30309);
var G__30311 = cljs.core.first.call(null,seq30309__$1);
var seq30309__$2 = cljs.core.next.call(null,seq30309__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30310,G__30311,seq30309__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args30344 = [];
var len__25876__auto___30355 = arguments.length;
var i__25877__auto___30356 = (0);
while(true){
if((i__25877__auto___30356 < len__25876__auto___30355)){
args30344.push((arguments[i__25877__auto___30356]));

var G__30357 = (i__25877__auto___30356 + (1));
i__25877__auto___30356 = G__30357;
continue;
} else {
}
break;
}

var G__30349 = args30344.length;
switch (G__30349) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25895__auto__ = (new cljs.core.IndexedSeq(args30344.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25895__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__30350 = parent;
G__30350.insertBefore(child,parent.firstChild);

return G__30350;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__30351_30359 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__30352_30360 = null;
var count__30353_30361 = (0);
var i__30354_30362 = (0);
while(true){
if((i__30354_30362 < count__30353_30361)){
var c_30363 = cljs.core._nth.call(null,chunk__30352_30360,i__30354_30362);
dommy.core.prepend_BANG_.call(null,parent,c_30363);

var G__30364 = seq__30351_30359;
var G__30365 = chunk__30352_30360;
var G__30366 = count__30353_30361;
var G__30367 = (i__30354_30362 + (1));
seq__30351_30359 = G__30364;
chunk__30352_30360 = G__30365;
count__30353_30361 = G__30366;
i__30354_30362 = G__30367;
continue;
} else {
var temp__4657__auto___30368 = cljs.core.seq.call(null,seq__30351_30359);
if(temp__4657__auto___30368){
var seq__30351_30369__$1 = temp__4657__auto___30368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30351_30369__$1)){
var c__25612__auto___30370 = cljs.core.chunk_first.call(null,seq__30351_30369__$1);
var G__30371 = cljs.core.chunk_rest.call(null,seq__30351_30369__$1);
var G__30372 = c__25612__auto___30370;
var G__30373 = cljs.core.count.call(null,c__25612__auto___30370);
var G__30374 = (0);
seq__30351_30359 = G__30371;
chunk__30352_30360 = G__30372;
count__30353_30361 = G__30373;
i__30354_30362 = G__30374;
continue;
} else {
var c_30375 = cljs.core.first.call(null,seq__30351_30369__$1);
dommy.core.prepend_BANG_.call(null,parent,c_30375);

var G__30376 = cljs.core.next.call(null,seq__30351_30369__$1);
var G__30377 = null;
var G__30378 = (0);
var G__30379 = (0);
seq__30351_30359 = G__30376;
chunk__30352_30360 = G__30377;
count__30353_30361 = G__30378;
i__30354_30362 = G__30379;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq30345){
var G__30346 = cljs.core.first.call(null,seq30345);
var seq30345__$1 = cljs.core.next.call(null,seq30345);
var G__30347 = cljs.core.first.call(null,seq30345__$1);
var seq30345__$2 = cljs.core.next.call(null,seq30345__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30346,G__30347,seq30345__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___30380 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___30380)){
var next_30381 = temp__4655__auto___30380;
dommy.core.insert_before_BANG_.call(null,elem,next_30381);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args30382 = [];
var len__25876__auto___30386 = arguments.length;
var i__25877__auto___30387 = (0);
while(true){
if((i__25877__auto___30387 < len__25876__auto___30386)){
args30382.push((arguments[i__25877__auto___30387]));

var G__30388 = (i__25877__auto___30387 + (1));
i__25877__auto___30387 = G__30388;
continue;
} else {
}
break;
}

var G__30384 = args30382.length;
switch (G__30384) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30382.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__30385 = p;
G__30385.removeChild(elem);

return G__30385;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__30390){
var vec__30391 = p__30390;
var special_mouse_event = cljs.core.nth.call(null,vec__30391,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__30391,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__30391,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__30391,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__24801__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__24789__auto__ = related_target;
if(cljs.core.truth_(and__24789__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__24789__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__30391,special_mouse_event,real_mouse_event))
});})(vec__30391,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__24789__auto__ = selected_target;
if(cljs.core.truth_(and__24789__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__24789__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__24801__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__25883__auto__ = [];
var len__25876__auto___30397 = arguments.length;
var i__25877__auto___30398 = (0);
while(true){
if((i__25877__auto___30398 < len__25876__auto___30397)){
args__25883__auto__.push((arguments[i__25877__auto___30398]));

var G__30399 = (i__25877__auto___30398 + (1));
i__25877__auto___30398 = G__30399;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((2) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25884__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq30394){
var G__30395 = cljs.core.first.call(null,seq30394);
var seq30394__$1 = cljs.core.next.call(null,seq30394);
var G__30396 = cljs.core.first.call(null,seq30394__$1);
var seq30394__$2 = cljs.core.next.call(null,seq30394__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30395,G__30396,seq30394__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__25883__auto__ = [];
var len__25876__auto___30439 = arguments.length;
var i__25877__auto___30440 = (0);
while(true){
if((i__25877__auto___30440 < len__25876__auto___30439)){
args__25883__auto__.push((arguments[i__25877__auto___30440]));

var G__30441 = (i__25877__auto___30440 + (1));
i__25877__auto___30440 = G__30441;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__30402_30442 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_30443 = cljs.core.nth.call(null,vec__30402_30442,(0),null);
var selector_30444 = cljs.core.nth.call(null,vec__30402_30442,(1),null);
var seq__30405_30445 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__30412_30446 = null;
var count__30413_30447 = (0);
var i__30414_30448 = (0);
while(true){
if((i__30414_30448 < count__30413_30447)){
var vec__30421_30449 = cljs.core._nth.call(null,chunk__30412_30446,i__30414_30448);
var orig_type_30450 = cljs.core.nth.call(null,vec__30421_30449,(0),null);
var f_30451 = cljs.core.nth.call(null,vec__30421_30449,(1),null);
var seq__30415_30452 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_30450,cljs.core.PersistentArrayMap.fromArray([orig_type_30450,cljs.core.identity], true, false)));
var chunk__30417_30453 = null;
var count__30418_30454 = (0);
var i__30419_30455 = (0);
while(true){
if((i__30419_30455 < count__30418_30454)){
var vec__30424_30456 = cljs.core._nth.call(null,chunk__30417_30453,i__30419_30455);
var actual_type_30457 = cljs.core.nth.call(null,vec__30424_30456,(0),null);
var factory_30458 = cljs.core.nth.call(null,vec__30424_30456,(1),null);
var canonical_f_30459 = (cljs.core.truth_(selector_30444)?cljs.core.partial.call(null,dommy.core.live_listener,elem_30443,selector_30444):cljs.core.identity).call(null,factory_30458.call(null,f_30451));
dommy.core.update_event_listeners_BANG_.call(null,elem_30443,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30444,actual_type_30457,f_30451], null),canonical_f_30459);

if(cljs.core.truth_(elem_30443.addEventListener)){
elem_30443.addEventListener(cljs.core.name.call(null,actual_type_30457),canonical_f_30459);
} else {
elem_30443.attachEvent(cljs.core.name.call(null,actual_type_30457),canonical_f_30459);
}

var G__30460 = seq__30415_30452;
var G__30461 = chunk__30417_30453;
var G__30462 = count__30418_30454;
var G__30463 = (i__30419_30455 + (1));
seq__30415_30452 = G__30460;
chunk__30417_30453 = G__30461;
count__30418_30454 = G__30462;
i__30419_30455 = G__30463;
continue;
} else {
var temp__4657__auto___30464 = cljs.core.seq.call(null,seq__30415_30452);
if(temp__4657__auto___30464){
var seq__30415_30465__$1 = temp__4657__auto___30464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30415_30465__$1)){
var c__25612__auto___30466 = cljs.core.chunk_first.call(null,seq__30415_30465__$1);
var G__30467 = cljs.core.chunk_rest.call(null,seq__30415_30465__$1);
var G__30468 = c__25612__auto___30466;
var G__30469 = cljs.core.count.call(null,c__25612__auto___30466);
var G__30470 = (0);
seq__30415_30452 = G__30467;
chunk__30417_30453 = G__30468;
count__30418_30454 = G__30469;
i__30419_30455 = G__30470;
continue;
} else {
var vec__30427_30471 = cljs.core.first.call(null,seq__30415_30465__$1);
var actual_type_30472 = cljs.core.nth.call(null,vec__30427_30471,(0),null);
var factory_30473 = cljs.core.nth.call(null,vec__30427_30471,(1),null);
var canonical_f_30474 = (cljs.core.truth_(selector_30444)?cljs.core.partial.call(null,dommy.core.live_listener,elem_30443,selector_30444):cljs.core.identity).call(null,factory_30473.call(null,f_30451));
dommy.core.update_event_listeners_BANG_.call(null,elem_30443,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30444,actual_type_30472,f_30451], null),canonical_f_30474);

if(cljs.core.truth_(elem_30443.addEventListener)){
elem_30443.addEventListener(cljs.core.name.call(null,actual_type_30472),canonical_f_30474);
} else {
elem_30443.attachEvent(cljs.core.name.call(null,actual_type_30472),canonical_f_30474);
}

var G__30475 = cljs.core.next.call(null,seq__30415_30465__$1);
var G__30476 = null;
var G__30477 = (0);
var G__30478 = (0);
seq__30415_30452 = G__30475;
chunk__30417_30453 = G__30476;
count__30418_30454 = G__30477;
i__30419_30455 = G__30478;
continue;
}
} else {
}
}
break;
}

var G__30479 = seq__30405_30445;
var G__30480 = chunk__30412_30446;
var G__30481 = count__30413_30447;
var G__30482 = (i__30414_30448 + (1));
seq__30405_30445 = G__30479;
chunk__30412_30446 = G__30480;
count__30413_30447 = G__30481;
i__30414_30448 = G__30482;
continue;
} else {
var temp__4657__auto___30483 = cljs.core.seq.call(null,seq__30405_30445);
if(temp__4657__auto___30483){
var seq__30405_30484__$1 = temp__4657__auto___30483;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30405_30484__$1)){
var c__25612__auto___30485 = cljs.core.chunk_first.call(null,seq__30405_30484__$1);
var G__30486 = cljs.core.chunk_rest.call(null,seq__30405_30484__$1);
var G__30487 = c__25612__auto___30485;
var G__30488 = cljs.core.count.call(null,c__25612__auto___30485);
var G__30489 = (0);
seq__30405_30445 = G__30486;
chunk__30412_30446 = G__30487;
count__30413_30447 = G__30488;
i__30414_30448 = G__30489;
continue;
} else {
var vec__30430_30490 = cljs.core.first.call(null,seq__30405_30484__$1);
var orig_type_30491 = cljs.core.nth.call(null,vec__30430_30490,(0),null);
var f_30492 = cljs.core.nth.call(null,vec__30430_30490,(1),null);
var seq__30406_30493 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_30491,cljs.core.PersistentArrayMap.fromArray([orig_type_30491,cljs.core.identity], true, false)));
var chunk__30408_30494 = null;
var count__30409_30495 = (0);
var i__30410_30496 = (0);
while(true){
if((i__30410_30496 < count__30409_30495)){
var vec__30433_30497 = cljs.core._nth.call(null,chunk__30408_30494,i__30410_30496);
var actual_type_30498 = cljs.core.nth.call(null,vec__30433_30497,(0),null);
var factory_30499 = cljs.core.nth.call(null,vec__30433_30497,(1),null);
var canonical_f_30500 = (cljs.core.truth_(selector_30444)?cljs.core.partial.call(null,dommy.core.live_listener,elem_30443,selector_30444):cljs.core.identity).call(null,factory_30499.call(null,f_30492));
dommy.core.update_event_listeners_BANG_.call(null,elem_30443,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30444,actual_type_30498,f_30492], null),canonical_f_30500);

if(cljs.core.truth_(elem_30443.addEventListener)){
elem_30443.addEventListener(cljs.core.name.call(null,actual_type_30498),canonical_f_30500);
} else {
elem_30443.attachEvent(cljs.core.name.call(null,actual_type_30498),canonical_f_30500);
}

var G__30501 = seq__30406_30493;
var G__30502 = chunk__30408_30494;
var G__30503 = count__30409_30495;
var G__30504 = (i__30410_30496 + (1));
seq__30406_30493 = G__30501;
chunk__30408_30494 = G__30502;
count__30409_30495 = G__30503;
i__30410_30496 = G__30504;
continue;
} else {
var temp__4657__auto___30505__$1 = cljs.core.seq.call(null,seq__30406_30493);
if(temp__4657__auto___30505__$1){
var seq__30406_30506__$1 = temp__4657__auto___30505__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30406_30506__$1)){
var c__25612__auto___30507 = cljs.core.chunk_first.call(null,seq__30406_30506__$1);
var G__30508 = cljs.core.chunk_rest.call(null,seq__30406_30506__$1);
var G__30509 = c__25612__auto___30507;
var G__30510 = cljs.core.count.call(null,c__25612__auto___30507);
var G__30511 = (0);
seq__30406_30493 = G__30508;
chunk__30408_30494 = G__30509;
count__30409_30495 = G__30510;
i__30410_30496 = G__30511;
continue;
} else {
var vec__30436_30512 = cljs.core.first.call(null,seq__30406_30506__$1);
var actual_type_30513 = cljs.core.nth.call(null,vec__30436_30512,(0),null);
var factory_30514 = cljs.core.nth.call(null,vec__30436_30512,(1),null);
var canonical_f_30515 = (cljs.core.truth_(selector_30444)?cljs.core.partial.call(null,dommy.core.live_listener,elem_30443,selector_30444):cljs.core.identity).call(null,factory_30514.call(null,f_30492));
dommy.core.update_event_listeners_BANG_.call(null,elem_30443,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30444,actual_type_30513,f_30492], null),canonical_f_30515);

if(cljs.core.truth_(elem_30443.addEventListener)){
elem_30443.addEventListener(cljs.core.name.call(null,actual_type_30513),canonical_f_30515);
} else {
elem_30443.attachEvent(cljs.core.name.call(null,actual_type_30513),canonical_f_30515);
}

var G__30516 = cljs.core.next.call(null,seq__30406_30506__$1);
var G__30517 = null;
var G__30518 = (0);
var G__30519 = (0);
seq__30406_30493 = G__30516;
chunk__30408_30494 = G__30517;
count__30409_30495 = G__30518;
i__30410_30496 = G__30519;
continue;
}
} else {
}
}
break;
}

var G__30520 = cljs.core.next.call(null,seq__30405_30484__$1);
var G__30521 = null;
var G__30522 = (0);
var G__30523 = (0);
seq__30405_30445 = G__30520;
chunk__30412_30446 = G__30521;
count__30413_30447 = G__30522;
i__30414_30448 = G__30523;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq30400){
var G__30401 = cljs.core.first.call(null,seq30400);
var seq30400__$1 = cljs.core.next.call(null,seq30400);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30401,seq30400__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__25883__auto__ = [];
var len__25876__auto___30563 = arguments.length;
var i__25877__auto___30564 = (0);
while(true){
if((i__25877__auto___30564 < len__25876__auto___30563)){
args__25883__auto__.push((arguments[i__25877__auto___30564]));

var G__30565 = (i__25877__auto___30564 + (1));
i__25877__auto___30564 = G__30565;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__30526_30566 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_30567 = cljs.core.nth.call(null,vec__30526_30566,(0),null);
var selector_30568 = cljs.core.nth.call(null,vec__30526_30566,(1),null);
var seq__30529_30569 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__30536_30570 = null;
var count__30537_30571 = (0);
var i__30538_30572 = (0);
while(true){
if((i__30538_30572 < count__30537_30571)){
var vec__30545_30573 = cljs.core._nth.call(null,chunk__30536_30570,i__30538_30572);
var orig_type_30574 = cljs.core.nth.call(null,vec__30545_30573,(0),null);
var f_30575 = cljs.core.nth.call(null,vec__30545_30573,(1),null);
var seq__30539_30576 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_30574,cljs.core.PersistentArrayMap.fromArray([orig_type_30574,cljs.core.identity], true, false)));
var chunk__30541_30577 = null;
var count__30542_30578 = (0);
var i__30543_30579 = (0);
while(true){
if((i__30543_30579 < count__30542_30578)){
var vec__30548_30580 = cljs.core._nth.call(null,chunk__30541_30577,i__30543_30579);
var actual_type_30581 = cljs.core.nth.call(null,vec__30548_30580,(0),null);
var __30582 = cljs.core.nth.call(null,vec__30548_30580,(1),null);
var keys_30583 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30568,actual_type_30581,f_30575], null);
var canonical_f_30584 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_30567),keys_30583);
dommy.core.update_event_listeners_BANG_.call(null,elem_30567,dommy.utils.dissoc_in,keys_30583);

if(cljs.core.truth_(elem_30567.removeEventListener)){
elem_30567.removeEventListener(cljs.core.name.call(null,actual_type_30581),canonical_f_30584);
} else {
elem_30567.detachEvent(cljs.core.name.call(null,actual_type_30581),canonical_f_30584);
}

var G__30585 = seq__30539_30576;
var G__30586 = chunk__30541_30577;
var G__30587 = count__30542_30578;
var G__30588 = (i__30543_30579 + (1));
seq__30539_30576 = G__30585;
chunk__30541_30577 = G__30586;
count__30542_30578 = G__30587;
i__30543_30579 = G__30588;
continue;
} else {
var temp__4657__auto___30589 = cljs.core.seq.call(null,seq__30539_30576);
if(temp__4657__auto___30589){
var seq__30539_30590__$1 = temp__4657__auto___30589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30539_30590__$1)){
var c__25612__auto___30591 = cljs.core.chunk_first.call(null,seq__30539_30590__$1);
var G__30592 = cljs.core.chunk_rest.call(null,seq__30539_30590__$1);
var G__30593 = c__25612__auto___30591;
var G__30594 = cljs.core.count.call(null,c__25612__auto___30591);
var G__30595 = (0);
seq__30539_30576 = G__30592;
chunk__30541_30577 = G__30593;
count__30542_30578 = G__30594;
i__30543_30579 = G__30595;
continue;
} else {
var vec__30551_30596 = cljs.core.first.call(null,seq__30539_30590__$1);
var actual_type_30597 = cljs.core.nth.call(null,vec__30551_30596,(0),null);
var __30598 = cljs.core.nth.call(null,vec__30551_30596,(1),null);
var keys_30599 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30568,actual_type_30597,f_30575], null);
var canonical_f_30600 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_30567),keys_30599);
dommy.core.update_event_listeners_BANG_.call(null,elem_30567,dommy.utils.dissoc_in,keys_30599);

if(cljs.core.truth_(elem_30567.removeEventListener)){
elem_30567.removeEventListener(cljs.core.name.call(null,actual_type_30597),canonical_f_30600);
} else {
elem_30567.detachEvent(cljs.core.name.call(null,actual_type_30597),canonical_f_30600);
}

var G__30601 = cljs.core.next.call(null,seq__30539_30590__$1);
var G__30602 = null;
var G__30603 = (0);
var G__30604 = (0);
seq__30539_30576 = G__30601;
chunk__30541_30577 = G__30602;
count__30542_30578 = G__30603;
i__30543_30579 = G__30604;
continue;
}
} else {
}
}
break;
}

var G__30605 = seq__30529_30569;
var G__30606 = chunk__30536_30570;
var G__30607 = count__30537_30571;
var G__30608 = (i__30538_30572 + (1));
seq__30529_30569 = G__30605;
chunk__30536_30570 = G__30606;
count__30537_30571 = G__30607;
i__30538_30572 = G__30608;
continue;
} else {
var temp__4657__auto___30609 = cljs.core.seq.call(null,seq__30529_30569);
if(temp__4657__auto___30609){
var seq__30529_30610__$1 = temp__4657__auto___30609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30529_30610__$1)){
var c__25612__auto___30611 = cljs.core.chunk_first.call(null,seq__30529_30610__$1);
var G__30612 = cljs.core.chunk_rest.call(null,seq__30529_30610__$1);
var G__30613 = c__25612__auto___30611;
var G__30614 = cljs.core.count.call(null,c__25612__auto___30611);
var G__30615 = (0);
seq__30529_30569 = G__30612;
chunk__30536_30570 = G__30613;
count__30537_30571 = G__30614;
i__30538_30572 = G__30615;
continue;
} else {
var vec__30554_30616 = cljs.core.first.call(null,seq__30529_30610__$1);
var orig_type_30617 = cljs.core.nth.call(null,vec__30554_30616,(0),null);
var f_30618 = cljs.core.nth.call(null,vec__30554_30616,(1),null);
var seq__30530_30619 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_30617,cljs.core.PersistentArrayMap.fromArray([orig_type_30617,cljs.core.identity], true, false)));
var chunk__30532_30620 = null;
var count__30533_30621 = (0);
var i__30534_30622 = (0);
while(true){
if((i__30534_30622 < count__30533_30621)){
var vec__30557_30623 = cljs.core._nth.call(null,chunk__30532_30620,i__30534_30622);
var actual_type_30624 = cljs.core.nth.call(null,vec__30557_30623,(0),null);
var __30625 = cljs.core.nth.call(null,vec__30557_30623,(1),null);
var keys_30626 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30568,actual_type_30624,f_30618], null);
var canonical_f_30627 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_30567),keys_30626);
dommy.core.update_event_listeners_BANG_.call(null,elem_30567,dommy.utils.dissoc_in,keys_30626);

if(cljs.core.truth_(elem_30567.removeEventListener)){
elem_30567.removeEventListener(cljs.core.name.call(null,actual_type_30624),canonical_f_30627);
} else {
elem_30567.detachEvent(cljs.core.name.call(null,actual_type_30624),canonical_f_30627);
}

var G__30628 = seq__30530_30619;
var G__30629 = chunk__30532_30620;
var G__30630 = count__30533_30621;
var G__30631 = (i__30534_30622 + (1));
seq__30530_30619 = G__30628;
chunk__30532_30620 = G__30629;
count__30533_30621 = G__30630;
i__30534_30622 = G__30631;
continue;
} else {
var temp__4657__auto___30632__$1 = cljs.core.seq.call(null,seq__30530_30619);
if(temp__4657__auto___30632__$1){
var seq__30530_30633__$1 = temp__4657__auto___30632__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30530_30633__$1)){
var c__25612__auto___30634 = cljs.core.chunk_first.call(null,seq__30530_30633__$1);
var G__30635 = cljs.core.chunk_rest.call(null,seq__30530_30633__$1);
var G__30636 = c__25612__auto___30634;
var G__30637 = cljs.core.count.call(null,c__25612__auto___30634);
var G__30638 = (0);
seq__30530_30619 = G__30635;
chunk__30532_30620 = G__30636;
count__30533_30621 = G__30637;
i__30534_30622 = G__30638;
continue;
} else {
var vec__30560_30639 = cljs.core.first.call(null,seq__30530_30633__$1);
var actual_type_30640 = cljs.core.nth.call(null,vec__30560_30639,(0),null);
var __30641 = cljs.core.nth.call(null,vec__30560_30639,(1),null);
var keys_30642 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_30568,actual_type_30640,f_30618], null);
var canonical_f_30643 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_30567),keys_30642);
dommy.core.update_event_listeners_BANG_.call(null,elem_30567,dommy.utils.dissoc_in,keys_30642);

if(cljs.core.truth_(elem_30567.removeEventListener)){
elem_30567.removeEventListener(cljs.core.name.call(null,actual_type_30640),canonical_f_30643);
} else {
elem_30567.detachEvent(cljs.core.name.call(null,actual_type_30640),canonical_f_30643);
}

var G__30644 = cljs.core.next.call(null,seq__30530_30633__$1);
var G__30645 = null;
var G__30646 = (0);
var G__30647 = (0);
seq__30530_30619 = G__30644;
chunk__30532_30620 = G__30645;
count__30533_30621 = G__30646;
i__30534_30622 = G__30647;
continue;
}
} else {
}
}
break;
}

var G__30648 = cljs.core.next.call(null,seq__30529_30610__$1);
var G__30649 = null;
var G__30650 = (0);
var G__30651 = (0);
seq__30529_30569 = G__30648;
chunk__30536_30570 = G__30649;
count__30537_30571 = G__30650;
i__30538_30572 = G__30651;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq30524){
var G__30525 = cljs.core.first.call(null,seq30524);
var seq30524__$1 = cljs.core.next.call(null,seq30524);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30525,seq30524__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__25883__auto__ = [];
var len__25876__auto___30667 = arguments.length;
var i__25877__auto___30668 = (0);
while(true){
if((i__25877__auto___30668 < len__25876__auto___30667)){
args__25883__auto__.push((arguments[i__25877__auto___30668]));

var G__30669 = (i__25877__auto___30668 + (1));
i__25877__auto___30668 = G__30669;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__30654_30670 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_30671 = cljs.core.nth.call(null,vec__30654_30670,(0),null);
var selector_30672 = cljs.core.nth.call(null,vec__30654_30670,(1),null);
var seq__30657_30673 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__30658_30674 = null;
var count__30659_30675 = (0);
var i__30660_30676 = (0);
while(true){
if((i__30660_30676 < count__30659_30675)){
var vec__30661_30677 = cljs.core._nth.call(null,chunk__30658_30674,i__30660_30676);
var type_30678 = cljs.core.nth.call(null,vec__30661_30677,(0),null);
var f_30679 = cljs.core.nth.call(null,vec__30661_30677,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_30678,((function (seq__30657_30673,chunk__30658_30674,count__30659_30675,i__30660_30676,vec__30661_30677,type_30678,f_30679,vec__30654_30670,elem_30671,selector_30672){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_30678,dommy$core$this_fn);

return f_30679.call(null,e);
});})(seq__30657_30673,chunk__30658_30674,count__30659_30675,i__30660_30676,vec__30661_30677,type_30678,f_30679,vec__30654_30670,elem_30671,selector_30672))
);

var G__30680 = seq__30657_30673;
var G__30681 = chunk__30658_30674;
var G__30682 = count__30659_30675;
var G__30683 = (i__30660_30676 + (1));
seq__30657_30673 = G__30680;
chunk__30658_30674 = G__30681;
count__30659_30675 = G__30682;
i__30660_30676 = G__30683;
continue;
} else {
var temp__4657__auto___30684 = cljs.core.seq.call(null,seq__30657_30673);
if(temp__4657__auto___30684){
var seq__30657_30685__$1 = temp__4657__auto___30684;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30657_30685__$1)){
var c__25612__auto___30686 = cljs.core.chunk_first.call(null,seq__30657_30685__$1);
var G__30687 = cljs.core.chunk_rest.call(null,seq__30657_30685__$1);
var G__30688 = c__25612__auto___30686;
var G__30689 = cljs.core.count.call(null,c__25612__auto___30686);
var G__30690 = (0);
seq__30657_30673 = G__30687;
chunk__30658_30674 = G__30688;
count__30659_30675 = G__30689;
i__30660_30676 = G__30690;
continue;
} else {
var vec__30664_30691 = cljs.core.first.call(null,seq__30657_30685__$1);
var type_30692 = cljs.core.nth.call(null,vec__30664_30691,(0),null);
var f_30693 = cljs.core.nth.call(null,vec__30664_30691,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_30692,((function (seq__30657_30673,chunk__30658_30674,count__30659_30675,i__30660_30676,vec__30664_30691,type_30692,f_30693,seq__30657_30685__$1,temp__4657__auto___30684,vec__30654_30670,elem_30671,selector_30672){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_30692,dommy$core$this_fn);

return f_30693.call(null,e);
});})(seq__30657_30673,chunk__30658_30674,count__30659_30675,i__30660_30676,vec__30664_30691,type_30692,f_30693,seq__30657_30685__$1,temp__4657__auto___30684,vec__30654_30670,elem_30671,selector_30672))
);

var G__30694 = cljs.core.next.call(null,seq__30657_30685__$1);
var G__30695 = null;
var G__30696 = (0);
var G__30697 = (0);
seq__30657_30673 = G__30694;
chunk__30658_30674 = G__30695;
count__30659_30675 = G__30696;
i__30660_30676 = G__30697;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq30652){
var G__30653 = cljs.core.first.call(null,seq30652);
var seq30652__$1 = cljs.core.next.call(null,seq30652);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30653,seq30652__$1);
});


//# sourceMappingURL=core.js.map?rel=1516956382792