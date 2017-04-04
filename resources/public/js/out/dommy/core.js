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
var or__24777__auto__ = elem.textContent;
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
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
var args34949 = [];
var len__25852__auto___34952 = arguments.length;
var i__25853__auto___34953 = (0);
while(true){
if((i__25853__auto___34953 < len__25852__auto___34952)){
args34949.push((arguments[i__25853__auto___34953]));

var G__34954 = (i__25853__auto___34953 + (1));
i__25853__auto___34953 = G__34954;
continue;
} else {
}
break;
}

var G__34951 = args34949.length;
switch (G__34951) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34949.length)].join('')));

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
var args34956 = [];
var len__25852__auto___34959 = arguments.length;
var i__25853__auto___34960 = (0);
while(true){
if((i__25853__auto___34960 < len__25852__auto___34959)){
args34956.push((arguments[i__25853__auto___34960]));

var G__34961 = (i__25853__auto___34960 + (1));
i__25853__auto___34960 = G__34961;
continue;
} else {
}
break;
}

var G__34958 = args34956.length;
switch (G__34958) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34956.length)].join('')));

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
var args34964 = [];
var len__25852__auto___34967 = arguments.length;
var i__25853__auto___34968 = (0);
while(true){
if((i__25853__auto___34968 < len__25852__auto___34967)){
args34964.push((arguments[i__25853__auto___34968]));

var G__34969 = (i__25853__auto___34968 + (1));
i__25853__auto___34968 = G__34969;
continue;
} else {
}
break;
}

var G__34966 = args34964.length;
switch (G__34966) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34964.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__34963_SHARP_){
return !((p1__34963_SHARP_ === base));
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
var args__25859__auto__ = [];
var len__25852__auto___34983 = arguments.length;
var i__25853__auto___34984 = (0);
while(true){
if((i__25853__auto___34984 < len__25852__auto___34983)){
args__25859__auto__.push((arguments[i__25853__auto___34984]));

var G__34985 = (i__25853__auto___34984 + (1));
i__25853__auto___34984 = G__34985;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((1) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25860__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__34973_34986 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__34974_34987 = null;
var count__34975_34988 = (0);
var i__34976_34989 = (0);
while(true){
if((i__34976_34989 < count__34975_34988)){
var vec__34977_34990 = cljs.core._nth.call(null,chunk__34974_34987,i__34976_34989);
var k_34991 = cljs.core.nth.call(null,vec__34977_34990,(0),null);
var v_34992 = cljs.core.nth.call(null,vec__34977_34990,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_34991),v_34992);

var G__34993 = seq__34973_34986;
var G__34994 = chunk__34974_34987;
var G__34995 = count__34975_34988;
var G__34996 = (i__34976_34989 + (1));
seq__34973_34986 = G__34993;
chunk__34974_34987 = G__34994;
count__34975_34988 = G__34995;
i__34976_34989 = G__34996;
continue;
} else {
var temp__4657__auto___34997 = cljs.core.seq.call(null,seq__34973_34986);
if(temp__4657__auto___34997){
var seq__34973_34998__$1 = temp__4657__auto___34997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34973_34998__$1)){
var c__25588__auto___34999 = cljs.core.chunk_first.call(null,seq__34973_34998__$1);
var G__35000 = cljs.core.chunk_rest.call(null,seq__34973_34998__$1);
var G__35001 = c__25588__auto___34999;
var G__35002 = cljs.core.count.call(null,c__25588__auto___34999);
var G__35003 = (0);
seq__34973_34986 = G__35000;
chunk__34974_34987 = G__35001;
count__34975_34988 = G__35002;
i__34976_34989 = G__35003;
continue;
} else {
var vec__34980_35004 = cljs.core.first.call(null,seq__34973_34998__$1);
var k_35005 = cljs.core.nth.call(null,vec__34980_35004,(0),null);
var v_35006 = cljs.core.nth.call(null,vec__34980_35004,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_35005),v_35006);

var G__35007 = cljs.core.next.call(null,seq__34973_34998__$1);
var G__35008 = null;
var G__35009 = (0);
var G__35010 = (0);
seq__34973_34986 = G__35007;
chunk__34974_34987 = G__35008;
count__34975_34988 = G__35009;
i__34976_34989 = G__35010;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq34971){
var G__34972 = cljs.core.first.call(null,seq34971);
var seq34971__$1 = cljs.core.next.call(null,seq34971);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34972,seq34971__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__25859__auto__ = [];
var len__25852__auto___35017 = arguments.length;
var i__25853__auto___35018 = (0);
while(true){
if((i__25853__auto___35018 < len__25852__auto___35017)){
args__25859__auto__.push((arguments[i__25853__auto___35018]));

var G__35019 = (i__25853__auto___35018 + (1));
i__25853__auto___35018 = G__35019;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((1) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25860__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__35013_35020 = cljs.core.seq.call(null,keywords);
var chunk__35014_35021 = null;
var count__35015_35022 = (0);
var i__35016_35023 = (0);
while(true){
if((i__35016_35023 < count__35015_35022)){
var kw_35024 = cljs.core._nth.call(null,chunk__35014_35021,i__35016_35023);
style.removeProperty(dommy.utils.as_str.call(null,kw_35024));

var G__35025 = seq__35013_35020;
var G__35026 = chunk__35014_35021;
var G__35027 = count__35015_35022;
var G__35028 = (i__35016_35023 + (1));
seq__35013_35020 = G__35025;
chunk__35014_35021 = G__35026;
count__35015_35022 = G__35027;
i__35016_35023 = G__35028;
continue;
} else {
var temp__4657__auto___35029 = cljs.core.seq.call(null,seq__35013_35020);
if(temp__4657__auto___35029){
var seq__35013_35030__$1 = temp__4657__auto___35029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35013_35030__$1)){
var c__25588__auto___35031 = cljs.core.chunk_first.call(null,seq__35013_35030__$1);
var G__35032 = cljs.core.chunk_rest.call(null,seq__35013_35030__$1);
var G__35033 = c__25588__auto___35031;
var G__35034 = cljs.core.count.call(null,c__25588__auto___35031);
var G__35035 = (0);
seq__35013_35020 = G__35032;
chunk__35014_35021 = G__35033;
count__35015_35022 = G__35034;
i__35016_35023 = G__35035;
continue;
} else {
var kw_35036 = cljs.core.first.call(null,seq__35013_35030__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_35036));

var G__35037 = cljs.core.next.call(null,seq__35013_35030__$1);
var G__35038 = null;
var G__35039 = (0);
var G__35040 = (0);
seq__35013_35020 = G__35037;
chunk__35014_35021 = G__35038;
count__35015_35022 = G__35039;
i__35016_35023 = G__35040;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq35011){
var G__35012 = cljs.core.first.call(null,seq35011);
var seq35011__$1 = cljs.core.next.call(null,seq35011);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35012,seq35011__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__25859__auto__ = [];
var len__25852__auto___35053 = arguments.length;
var i__25853__auto___35054 = (0);
while(true){
if((i__25853__auto___35054 < len__25852__auto___35053)){
args__25859__auto__.push((arguments[i__25853__auto___35054]));

var G__35055 = (i__25853__auto___35054 + (1));
i__25853__auto___35054 = G__35055;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((1) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25860__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__35043_35056 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__35044_35057 = null;
var count__35045_35058 = (0);
var i__35046_35059 = (0);
while(true){
if((i__35046_35059 < count__35045_35058)){
var vec__35047_35060 = cljs.core._nth.call(null,chunk__35044_35057,i__35046_35059);
var k_35061 = cljs.core.nth.call(null,vec__35047_35060,(0),null);
var v_35062 = cljs.core.nth.call(null,vec__35047_35060,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_35061,[cljs.core.str(v_35062),cljs.core.str("px")].join(''));

var G__35063 = seq__35043_35056;
var G__35064 = chunk__35044_35057;
var G__35065 = count__35045_35058;
var G__35066 = (i__35046_35059 + (1));
seq__35043_35056 = G__35063;
chunk__35044_35057 = G__35064;
count__35045_35058 = G__35065;
i__35046_35059 = G__35066;
continue;
} else {
var temp__4657__auto___35067 = cljs.core.seq.call(null,seq__35043_35056);
if(temp__4657__auto___35067){
var seq__35043_35068__$1 = temp__4657__auto___35067;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35043_35068__$1)){
var c__25588__auto___35069 = cljs.core.chunk_first.call(null,seq__35043_35068__$1);
var G__35070 = cljs.core.chunk_rest.call(null,seq__35043_35068__$1);
var G__35071 = c__25588__auto___35069;
var G__35072 = cljs.core.count.call(null,c__25588__auto___35069);
var G__35073 = (0);
seq__35043_35056 = G__35070;
chunk__35044_35057 = G__35071;
count__35045_35058 = G__35072;
i__35046_35059 = G__35073;
continue;
} else {
var vec__35050_35074 = cljs.core.first.call(null,seq__35043_35068__$1);
var k_35075 = cljs.core.nth.call(null,vec__35050_35074,(0),null);
var v_35076 = cljs.core.nth.call(null,vec__35050_35074,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_35075,[cljs.core.str(v_35076),cljs.core.str("px")].join(''));

var G__35077 = cljs.core.next.call(null,seq__35043_35068__$1);
var G__35078 = null;
var G__35079 = (0);
var G__35080 = (0);
seq__35043_35056 = G__35077;
chunk__35044_35057 = G__35078;
count__35045_35058 = G__35079;
i__35046_35059 = G__35080;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq35041){
var G__35042 = cljs.core.first.call(null,seq35041);
var seq35041__$1 = cljs.core.next.call(null,seq35041);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35042,seq35041__$1);
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
var args35081 = [];
var len__25852__auto___35100 = arguments.length;
var i__25853__auto___35101 = (0);
while(true){
if((i__25853__auto___35101 < len__25852__auto___35100)){
args35081.push((arguments[i__25853__auto___35101]));

var G__35102 = (i__25853__auto___35101 + (1));
i__25853__auto___35101 = G__35102;
continue;
} else {
}
break;
}

var G__35087 = args35081.length;
switch (G__35087) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__25871__auto__ = (new cljs.core.IndexedSeq(args35081.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25871__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__35088 = elem;
(G__35088[k__$1] = v);

return G__35088;
} else {
var G__35089 = elem;
G__35089.setAttribute(k__$1,v);

return G__35089;
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

var seq__35090_35104 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__35091_35105 = null;
var count__35092_35106 = (0);
var i__35093_35107 = (0);
while(true){
if((i__35093_35107 < count__35092_35106)){
var vec__35094_35108 = cljs.core._nth.call(null,chunk__35091_35105,i__35093_35107);
var k_35109__$1 = cljs.core.nth.call(null,vec__35094_35108,(0),null);
var v_35110__$1 = cljs.core.nth.call(null,vec__35094_35108,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_35109__$1,v_35110__$1);

var G__35111 = seq__35090_35104;
var G__35112 = chunk__35091_35105;
var G__35113 = count__35092_35106;
var G__35114 = (i__35093_35107 + (1));
seq__35090_35104 = G__35111;
chunk__35091_35105 = G__35112;
count__35092_35106 = G__35113;
i__35093_35107 = G__35114;
continue;
} else {
var temp__4657__auto___35115 = cljs.core.seq.call(null,seq__35090_35104);
if(temp__4657__auto___35115){
var seq__35090_35116__$1 = temp__4657__auto___35115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35090_35116__$1)){
var c__25588__auto___35117 = cljs.core.chunk_first.call(null,seq__35090_35116__$1);
var G__35118 = cljs.core.chunk_rest.call(null,seq__35090_35116__$1);
var G__35119 = c__25588__auto___35117;
var G__35120 = cljs.core.count.call(null,c__25588__auto___35117);
var G__35121 = (0);
seq__35090_35104 = G__35118;
chunk__35091_35105 = G__35119;
count__35092_35106 = G__35120;
i__35093_35107 = G__35121;
continue;
} else {
var vec__35097_35122 = cljs.core.first.call(null,seq__35090_35116__$1);
var k_35123__$1 = cljs.core.nth.call(null,vec__35097_35122,(0),null);
var v_35124__$1 = cljs.core.nth.call(null,vec__35097_35122,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_35123__$1,v_35124__$1);

var G__35125 = cljs.core.next.call(null,seq__35090_35116__$1);
var G__35126 = null;
var G__35127 = (0);
var G__35128 = (0);
seq__35090_35104 = G__35125;
chunk__35091_35105 = G__35126;
count__35092_35106 = G__35127;
i__35093_35107 = G__35128;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq35082){
var G__35083 = cljs.core.first.call(null,seq35082);
var seq35082__$1 = cljs.core.next.call(null,seq35082);
var G__35084 = cljs.core.first.call(null,seq35082__$1);
var seq35082__$2 = cljs.core.next.call(null,seq35082__$1);
var G__35085 = cljs.core.first.call(null,seq35082__$2);
var seq35082__$3 = cljs.core.next.call(null,seq35082__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35083,G__35084,G__35085,seq35082__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args35129 = [];
var len__25852__auto___35139 = arguments.length;
var i__25853__auto___35140 = (0);
while(true){
if((i__25853__auto___35140 < len__25852__auto___35139)){
args35129.push((arguments[i__25853__auto___35140]));

var G__35141 = (i__25853__auto___35140 + (1));
i__25853__auto___35140 = G__35141;
continue;
} else {
}
break;
}

var G__35134 = args35129.length;
switch (G__35134) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25871__auto__ = (new cljs.core.IndexedSeq(args35129.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25871__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_35143__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_35143__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_35143__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__35135_35144 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__35136_35145 = null;
var count__35137_35146 = (0);
var i__35138_35147 = (0);
while(true){
if((i__35138_35147 < count__35137_35146)){
var k_35148__$1 = cljs.core._nth.call(null,chunk__35136_35145,i__35138_35147);
dommy.core.remove_attr_BANG_.call(null,elem,k_35148__$1);

var G__35149 = seq__35135_35144;
var G__35150 = chunk__35136_35145;
var G__35151 = count__35137_35146;
var G__35152 = (i__35138_35147 + (1));
seq__35135_35144 = G__35149;
chunk__35136_35145 = G__35150;
count__35137_35146 = G__35151;
i__35138_35147 = G__35152;
continue;
} else {
var temp__4657__auto___35153 = cljs.core.seq.call(null,seq__35135_35144);
if(temp__4657__auto___35153){
var seq__35135_35154__$1 = temp__4657__auto___35153;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35135_35154__$1)){
var c__25588__auto___35155 = cljs.core.chunk_first.call(null,seq__35135_35154__$1);
var G__35156 = cljs.core.chunk_rest.call(null,seq__35135_35154__$1);
var G__35157 = c__25588__auto___35155;
var G__35158 = cljs.core.count.call(null,c__25588__auto___35155);
var G__35159 = (0);
seq__35135_35144 = G__35156;
chunk__35136_35145 = G__35157;
count__35137_35146 = G__35158;
i__35138_35147 = G__35159;
continue;
} else {
var k_35160__$1 = cljs.core.first.call(null,seq__35135_35154__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_35160__$1);

var G__35161 = cljs.core.next.call(null,seq__35135_35154__$1);
var G__35162 = null;
var G__35163 = (0);
var G__35164 = (0);
seq__35135_35144 = G__35161;
chunk__35136_35145 = G__35162;
count__35137_35146 = G__35163;
i__35138_35147 = G__35164;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq35130){
var G__35131 = cljs.core.first.call(null,seq35130);
var seq35130__$1 = cljs.core.next.call(null,seq35130);
var G__35132 = cljs.core.first.call(null,seq35130__$1);
var seq35130__$2 = cljs.core.next.call(null,seq35130__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35131,G__35132,seq35130__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args35165 = [];
var len__25852__auto___35168 = arguments.length;
var i__25853__auto___35169 = (0);
while(true){
if((i__25853__auto___35169 < len__25852__auto___35168)){
args35165.push((arguments[i__25853__auto___35169]));

var G__35170 = (i__25853__auto___35169 + (1));
i__25853__auto___35169 = G__35170;
continue;
} else {
}
break;
}

var G__35167 = args35165.length;
switch (G__35167) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35165.length)].join('')));

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
var args35172 = [];
var len__25852__auto___35190 = arguments.length;
var i__25853__auto___35191 = (0);
while(true){
if((i__25853__auto___35191 < len__25852__auto___35190)){
args35172.push((arguments[i__25853__auto___35191]));

var G__35192 = (i__25853__auto___35191 + (1));
i__25853__auto___35191 = G__35192;
continue;
} else {
}
break;
}

var G__35177 = args35172.length;
switch (G__35177) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25871__auto__ = (new cljs.core.IndexedSeq(args35172.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25871__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___35194 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___35194)){
var class_list_35195 = temp__4655__auto___35194;
var seq__35178_35196 = cljs.core.seq.call(null,classes__$1);
var chunk__35179_35197 = null;
var count__35180_35198 = (0);
var i__35181_35199 = (0);
while(true){
if((i__35181_35199 < count__35180_35198)){
var c_35200 = cljs.core._nth.call(null,chunk__35179_35197,i__35181_35199);
class_list_35195.add(c_35200);

var G__35201 = seq__35178_35196;
var G__35202 = chunk__35179_35197;
var G__35203 = count__35180_35198;
var G__35204 = (i__35181_35199 + (1));
seq__35178_35196 = G__35201;
chunk__35179_35197 = G__35202;
count__35180_35198 = G__35203;
i__35181_35199 = G__35204;
continue;
} else {
var temp__4657__auto___35205 = cljs.core.seq.call(null,seq__35178_35196);
if(temp__4657__auto___35205){
var seq__35178_35206__$1 = temp__4657__auto___35205;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35178_35206__$1)){
var c__25588__auto___35207 = cljs.core.chunk_first.call(null,seq__35178_35206__$1);
var G__35208 = cljs.core.chunk_rest.call(null,seq__35178_35206__$1);
var G__35209 = c__25588__auto___35207;
var G__35210 = cljs.core.count.call(null,c__25588__auto___35207);
var G__35211 = (0);
seq__35178_35196 = G__35208;
chunk__35179_35197 = G__35209;
count__35180_35198 = G__35210;
i__35181_35199 = G__35211;
continue;
} else {
var c_35212 = cljs.core.first.call(null,seq__35178_35206__$1);
class_list_35195.add(c_35212);

var G__35213 = cljs.core.next.call(null,seq__35178_35206__$1);
var G__35214 = null;
var G__35215 = (0);
var G__35216 = (0);
seq__35178_35196 = G__35213;
chunk__35179_35197 = G__35214;
count__35180_35198 = G__35215;
i__35181_35199 = G__35216;
continue;
}
} else {
}
}
break;
}
} else {
var seq__35182_35217 = cljs.core.seq.call(null,classes__$1);
var chunk__35183_35218 = null;
var count__35184_35219 = (0);
var i__35185_35220 = (0);
while(true){
if((i__35185_35220 < count__35184_35219)){
var c_35221 = cljs.core._nth.call(null,chunk__35183_35218,i__35185_35220);
var class_name_35222 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_35222,c_35221))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_35222 === ""))?c_35221:[cljs.core.str(class_name_35222),cljs.core.str(" "),cljs.core.str(c_35221)].join('')));
}

var G__35223 = seq__35182_35217;
var G__35224 = chunk__35183_35218;
var G__35225 = count__35184_35219;
var G__35226 = (i__35185_35220 + (1));
seq__35182_35217 = G__35223;
chunk__35183_35218 = G__35224;
count__35184_35219 = G__35225;
i__35185_35220 = G__35226;
continue;
} else {
var temp__4657__auto___35227 = cljs.core.seq.call(null,seq__35182_35217);
if(temp__4657__auto___35227){
var seq__35182_35228__$1 = temp__4657__auto___35227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35182_35228__$1)){
var c__25588__auto___35229 = cljs.core.chunk_first.call(null,seq__35182_35228__$1);
var G__35230 = cljs.core.chunk_rest.call(null,seq__35182_35228__$1);
var G__35231 = c__25588__auto___35229;
var G__35232 = cljs.core.count.call(null,c__25588__auto___35229);
var G__35233 = (0);
seq__35182_35217 = G__35230;
chunk__35183_35218 = G__35231;
count__35184_35219 = G__35232;
i__35185_35220 = G__35233;
continue;
} else {
var c_35234 = cljs.core.first.call(null,seq__35182_35228__$1);
var class_name_35235 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_35235,c_35234))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_35235 === ""))?c_35234:[cljs.core.str(class_name_35235),cljs.core.str(" "),cljs.core.str(c_35234)].join('')));
}

var G__35236 = cljs.core.next.call(null,seq__35182_35228__$1);
var G__35237 = null;
var G__35238 = (0);
var G__35239 = (0);
seq__35182_35217 = G__35236;
chunk__35183_35218 = G__35237;
count__35184_35219 = G__35238;
i__35185_35220 = G__35239;
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
var seq__35186_35240 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__35187_35241 = null;
var count__35188_35242 = (0);
var i__35189_35243 = (0);
while(true){
if((i__35189_35243 < count__35188_35242)){
var c_35244 = cljs.core._nth.call(null,chunk__35187_35241,i__35189_35243);
dommy.core.add_class_BANG_.call(null,elem,c_35244);

var G__35245 = seq__35186_35240;
var G__35246 = chunk__35187_35241;
var G__35247 = count__35188_35242;
var G__35248 = (i__35189_35243 + (1));
seq__35186_35240 = G__35245;
chunk__35187_35241 = G__35246;
count__35188_35242 = G__35247;
i__35189_35243 = G__35248;
continue;
} else {
var temp__4657__auto___35249 = cljs.core.seq.call(null,seq__35186_35240);
if(temp__4657__auto___35249){
var seq__35186_35250__$1 = temp__4657__auto___35249;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35186_35250__$1)){
var c__25588__auto___35251 = cljs.core.chunk_first.call(null,seq__35186_35250__$1);
var G__35252 = cljs.core.chunk_rest.call(null,seq__35186_35250__$1);
var G__35253 = c__25588__auto___35251;
var G__35254 = cljs.core.count.call(null,c__25588__auto___35251);
var G__35255 = (0);
seq__35186_35240 = G__35252;
chunk__35187_35241 = G__35253;
count__35188_35242 = G__35254;
i__35189_35243 = G__35255;
continue;
} else {
var c_35256 = cljs.core.first.call(null,seq__35186_35250__$1);
dommy.core.add_class_BANG_.call(null,elem,c_35256);

var G__35257 = cljs.core.next.call(null,seq__35186_35250__$1);
var G__35258 = null;
var G__35259 = (0);
var G__35260 = (0);
seq__35186_35240 = G__35257;
chunk__35187_35241 = G__35258;
count__35188_35242 = G__35259;
i__35189_35243 = G__35260;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq35173){
var G__35174 = cljs.core.first.call(null,seq35173);
var seq35173__$1 = cljs.core.next.call(null,seq35173);
var G__35175 = cljs.core.first.call(null,seq35173__$1);
var seq35173__$2 = cljs.core.next.call(null,seq35173__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35174,G__35175,seq35173__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args35261 = [];
var len__25852__auto___35271 = arguments.length;
var i__25853__auto___35272 = (0);
while(true){
if((i__25853__auto___35272 < len__25852__auto___35271)){
args35261.push((arguments[i__25853__auto___35272]));

var G__35273 = (i__25853__auto___35272 + (1));
i__25853__auto___35272 = G__35273;
continue;
} else {
}
break;
}

var G__35266 = args35261.length;
switch (G__35266) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25871__auto__ = (new cljs.core.IndexedSeq(args35261.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25871__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___35275 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___35275)){
var class_list_35276 = temp__4655__auto___35275;
class_list_35276.remove(c__$1);
} else {
var class_name_35277 = dommy.core.class$.call(null,elem);
var new_class_name_35278 = dommy.utils.remove_class_str.call(null,class_name_35277,c__$1);
if((class_name_35277 === new_class_name_35278)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_35278);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__35267 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__35268 = null;
var count__35269 = (0);
var i__35270 = (0);
while(true){
if((i__35270 < count__35269)){
var c = cljs.core._nth.call(null,chunk__35268,i__35270);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__35279 = seq__35267;
var G__35280 = chunk__35268;
var G__35281 = count__35269;
var G__35282 = (i__35270 + (1));
seq__35267 = G__35279;
chunk__35268 = G__35280;
count__35269 = G__35281;
i__35270 = G__35282;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35267);
if(temp__4657__auto__){
var seq__35267__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35267__$1)){
var c__25588__auto__ = cljs.core.chunk_first.call(null,seq__35267__$1);
var G__35283 = cljs.core.chunk_rest.call(null,seq__35267__$1);
var G__35284 = c__25588__auto__;
var G__35285 = cljs.core.count.call(null,c__25588__auto__);
var G__35286 = (0);
seq__35267 = G__35283;
chunk__35268 = G__35284;
count__35269 = G__35285;
i__35270 = G__35286;
continue;
} else {
var c = cljs.core.first.call(null,seq__35267__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__35287 = cljs.core.next.call(null,seq__35267__$1);
var G__35288 = null;
var G__35289 = (0);
var G__35290 = (0);
seq__35267 = G__35287;
chunk__35268 = G__35288;
count__35269 = G__35289;
i__35270 = G__35290;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq35262){
var G__35263 = cljs.core.first.call(null,seq35262);
var seq35262__$1 = cljs.core.next.call(null,seq35262);
var G__35264 = cljs.core.first.call(null,seq35262__$1);
var seq35262__$2 = cljs.core.next.call(null,seq35262__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35263,G__35264,seq35262__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args35291 = [];
var len__25852__auto___35294 = arguments.length;
var i__25853__auto___35295 = (0);
while(true){
if((i__25853__auto___35295 < len__25852__auto___35294)){
args35291.push((arguments[i__25853__auto___35295]));

var G__35296 = (i__25853__auto___35295 + (1));
i__25853__auto___35295 = G__35296;
continue;
} else {
}
break;
}

var G__35293 = args35291.length;
switch (G__35293) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35291.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___35298 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___35298)){
var class_list_35299 = temp__4655__auto___35298;
class_list_35299.toggle(c__$1);
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
var args35300 = [];
var len__25852__auto___35303 = arguments.length;
var i__25853__auto___35304 = (0);
while(true){
if((i__25853__auto___35304 < len__25852__auto___35303)){
args35300.push((arguments[i__25853__auto___35304]));

var G__35305 = (i__25853__auto___35304 + (1));
i__25853__auto___35304 = G__35305;
continue;
} else {
}
break;
}

var G__35302 = args35300.length;
switch (G__35302) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35300.length)].join('')));

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
var args35307 = [];
var len__25852__auto___35310 = arguments.length;
var i__25853__auto___35311 = (0);
while(true){
if((i__25853__auto___35311 < len__25852__auto___35310)){
args35307.push((arguments[i__25853__auto___35311]));

var G__35312 = (i__25853__auto___35311 + (1));
i__25853__auto___35311 = G__35312;
continue;
} else {
}
break;
}

var G__35309 = args35307.length;
switch (G__35309) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35307.length)].join('')));

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
var args35314 = [];
var len__25852__auto___35325 = arguments.length;
var i__25853__auto___35326 = (0);
while(true){
if((i__25853__auto___35326 < len__25852__auto___35325)){
args35314.push((arguments[i__25853__auto___35326]));

var G__35327 = (i__25853__auto___35326 + (1));
i__25853__auto___35326 = G__35327;
continue;
} else {
}
break;
}

var G__35319 = args35314.length;
switch (G__35319) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25871__auto__ = (new cljs.core.IndexedSeq(args35314.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25871__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__35320 = parent;
G__35320.appendChild(child);

return G__35320;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__35321_35329 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__35322_35330 = null;
var count__35323_35331 = (0);
var i__35324_35332 = (0);
while(true){
if((i__35324_35332 < count__35323_35331)){
var c_35333 = cljs.core._nth.call(null,chunk__35322_35330,i__35324_35332);
dommy.core.append_BANG_.call(null,parent,c_35333);

var G__35334 = seq__35321_35329;
var G__35335 = chunk__35322_35330;
var G__35336 = count__35323_35331;
var G__35337 = (i__35324_35332 + (1));
seq__35321_35329 = G__35334;
chunk__35322_35330 = G__35335;
count__35323_35331 = G__35336;
i__35324_35332 = G__35337;
continue;
} else {
var temp__4657__auto___35338 = cljs.core.seq.call(null,seq__35321_35329);
if(temp__4657__auto___35338){
var seq__35321_35339__$1 = temp__4657__auto___35338;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35321_35339__$1)){
var c__25588__auto___35340 = cljs.core.chunk_first.call(null,seq__35321_35339__$1);
var G__35341 = cljs.core.chunk_rest.call(null,seq__35321_35339__$1);
var G__35342 = c__25588__auto___35340;
var G__35343 = cljs.core.count.call(null,c__25588__auto___35340);
var G__35344 = (0);
seq__35321_35329 = G__35341;
chunk__35322_35330 = G__35342;
count__35323_35331 = G__35343;
i__35324_35332 = G__35344;
continue;
} else {
var c_35345 = cljs.core.first.call(null,seq__35321_35339__$1);
dommy.core.append_BANG_.call(null,parent,c_35345);

var G__35346 = cljs.core.next.call(null,seq__35321_35339__$1);
var G__35347 = null;
var G__35348 = (0);
var G__35349 = (0);
seq__35321_35329 = G__35346;
chunk__35322_35330 = G__35347;
count__35323_35331 = G__35348;
i__35324_35332 = G__35349;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq35315){
var G__35316 = cljs.core.first.call(null,seq35315);
var seq35315__$1 = cljs.core.next.call(null,seq35315);
var G__35317 = cljs.core.first.call(null,seq35315__$1);
var seq35315__$2 = cljs.core.next.call(null,seq35315__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35316,G__35317,seq35315__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args35350 = [];
var len__25852__auto___35361 = arguments.length;
var i__25853__auto___35362 = (0);
while(true){
if((i__25853__auto___35362 < len__25852__auto___35361)){
args35350.push((arguments[i__25853__auto___35362]));

var G__35363 = (i__25853__auto___35362 + (1));
i__25853__auto___35362 = G__35363;
continue;
} else {
}
break;
}

var G__35355 = args35350.length;
switch (G__35355) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25871__auto__ = (new cljs.core.IndexedSeq(args35350.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25871__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__35356 = parent;
G__35356.insertBefore(child,parent.firstChild);

return G__35356;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__35357_35365 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__35358_35366 = null;
var count__35359_35367 = (0);
var i__35360_35368 = (0);
while(true){
if((i__35360_35368 < count__35359_35367)){
var c_35369 = cljs.core._nth.call(null,chunk__35358_35366,i__35360_35368);
dommy.core.prepend_BANG_.call(null,parent,c_35369);

var G__35370 = seq__35357_35365;
var G__35371 = chunk__35358_35366;
var G__35372 = count__35359_35367;
var G__35373 = (i__35360_35368 + (1));
seq__35357_35365 = G__35370;
chunk__35358_35366 = G__35371;
count__35359_35367 = G__35372;
i__35360_35368 = G__35373;
continue;
} else {
var temp__4657__auto___35374 = cljs.core.seq.call(null,seq__35357_35365);
if(temp__4657__auto___35374){
var seq__35357_35375__$1 = temp__4657__auto___35374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35357_35375__$1)){
var c__25588__auto___35376 = cljs.core.chunk_first.call(null,seq__35357_35375__$1);
var G__35377 = cljs.core.chunk_rest.call(null,seq__35357_35375__$1);
var G__35378 = c__25588__auto___35376;
var G__35379 = cljs.core.count.call(null,c__25588__auto___35376);
var G__35380 = (0);
seq__35357_35365 = G__35377;
chunk__35358_35366 = G__35378;
count__35359_35367 = G__35379;
i__35360_35368 = G__35380;
continue;
} else {
var c_35381 = cljs.core.first.call(null,seq__35357_35375__$1);
dommy.core.prepend_BANG_.call(null,parent,c_35381);

var G__35382 = cljs.core.next.call(null,seq__35357_35375__$1);
var G__35383 = null;
var G__35384 = (0);
var G__35385 = (0);
seq__35357_35365 = G__35382;
chunk__35358_35366 = G__35383;
count__35359_35367 = G__35384;
i__35360_35368 = G__35385;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq35351){
var G__35352 = cljs.core.first.call(null,seq35351);
var seq35351__$1 = cljs.core.next.call(null,seq35351);
var G__35353 = cljs.core.first.call(null,seq35351__$1);
var seq35351__$2 = cljs.core.next.call(null,seq35351__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35352,G__35353,seq35351__$2);
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
var temp__4655__auto___35386 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___35386)){
var next_35387 = temp__4655__auto___35386;
dommy.core.insert_before_BANG_.call(null,elem,next_35387);
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
var args35388 = [];
var len__25852__auto___35392 = arguments.length;
var i__25853__auto___35393 = (0);
while(true){
if((i__25853__auto___35393 < len__25852__auto___35392)){
args35388.push((arguments[i__25853__auto___35393]));

var G__35394 = (i__25853__auto___35393 + (1));
i__25853__auto___35393 = G__35394;
continue;
} else {
}
break;
}

var G__35390 = args35388.length;
switch (G__35390) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35388.length)].join('')));

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
var G__35391 = p;
G__35391.removeChild(elem);

return G__35391;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__35396){
var vec__35397 = p__35396;
var special_mouse_event = cljs.core.nth.call(null,vec__35397,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__35397,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__35397,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__35397,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__24777__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__24765__auto__ = related_target;
if(cljs.core.truth_(and__24765__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__24765__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__35397,special_mouse_event,real_mouse_event))
});})(vec__35397,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__24765__auto__ = selected_target;
if(cljs.core.truth_(and__24765__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__24765__auto__;
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
var or__24777__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__25859__auto__ = [];
var len__25852__auto___35403 = arguments.length;
var i__25853__auto___35404 = (0);
while(true){
if((i__25853__auto___35404 < len__25852__auto___35403)){
args__25859__auto__.push((arguments[i__25853__auto___35404]));

var G__35405 = (i__25853__auto___35404 + (1));
i__25853__auto___35404 = G__35405;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((2) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25860__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq35400){
var G__35401 = cljs.core.first.call(null,seq35400);
var seq35400__$1 = cljs.core.next.call(null,seq35400);
var G__35402 = cljs.core.first.call(null,seq35400__$1);
var seq35400__$2 = cljs.core.next.call(null,seq35400__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35401,G__35402,seq35400__$2);
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
var args__25859__auto__ = [];
var len__25852__auto___35445 = arguments.length;
var i__25853__auto___35446 = (0);
while(true){
if((i__25853__auto___35446 < len__25852__auto___35445)){
args__25859__auto__.push((arguments[i__25853__auto___35446]));

var G__35447 = (i__25853__auto___35446 + (1));
i__25853__auto___35446 = G__35447;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((1) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25860__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__35408_35448 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_35449 = cljs.core.nth.call(null,vec__35408_35448,(0),null);
var selector_35450 = cljs.core.nth.call(null,vec__35408_35448,(1),null);
var seq__35411_35451 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__35418_35452 = null;
var count__35419_35453 = (0);
var i__35420_35454 = (0);
while(true){
if((i__35420_35454 < count__35419_35453)){
var vec__35427_35455 = cljs.core._nth.call(null,chunk__35418_35452,i__35420_35454);
var orig_type_35456 = cljs.core.nth.call(null,vec__35427_35455,(0),null);
var f_35457 = cljs.core.nth.call(null,vec__35427_35455,(1),null);
var seq__35421_35458 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35456,cljs.core.PersistentArrayMap.fromArray([orig_type_35456,cljs.core.identity], true, false)));
var chunk__35423_35459 = null;
var count__35424_35460 = (0);
var i__35425_35461 = (0);
while(true){
if((i__35425_35461 < count__35424_35460)){
var vec__35430_35462 = cljs.core._nth.call(null,chunk__35423_35459,i__35425_35461);
var actual_type_35463 = cljs.core.nth.call(null,vec__35430_35462,(0),null);
var factory_35464 = cljs.core.nth.call(null,vec__35430_35462,(1),null);
var canonical_f_35465 = (cljs.core.truth_(selector_35450)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35449,selector_35450):cljs.core.identity).call(null,factory_35464.call(null,f_35457));
dommy.core.update_event_listeners_BANG_.call(null,elem_35449,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35450,actual_type_35463,f_35457], null),canonical_f_35465);

if(cljs.core.truth_(elem_35449.addEventListener)){
elem_35449.addEventListener(cljs.core.name.call(null,actual_type_35463),canonical_f_35465);
} else {
elem_35449.attachEvent(cljs.core.name.call(null,actual_type_35463),canonical_f_35465);
}

var G__35466 = seq__35421_35458;
var G__35467 = chunk__35423_35459;
var G__35468 = count__35424_35460;
var G__35469 = (i__35425_35461 + (1));
seq__35421_35458 = G__35466;
chunk__35423_35459 = G__35467;
count__35424_35460 = G__35468;
i__35425_35461 = G__35469;
continue;
} else {
var temp__4657__auto___35470 = cljs.core.seq.call(null,seq__35421_35458);
if(temp__4657__auto___35470){
var seq__35421_35471__$1 = temp__4657__auto___35470;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35421_35471__$1)){
var c__25588__auto___35472 = cljs.core.chunk_first.call(null,seq__35421_35471__$1);
var G__35473 = cljs.core.chunk_rest.call(null,seq__35421_35471__$1);
var G__35474 = c__25588__auto___35472;
var G__35475 = cljs.core.count.call(null,c__25588__auto___35472);
var G__35476 = (0);
seq__35421_35458 = G__35473;
chunk__35423_35459 = G__35474;
count__35424_35460 = G__35475;
i__35425_35461 = G__35476;
continue;
} else {
var vec__35433_35477 = cljs.core.first.call(null,seq__35421_35471__$1);
var actual_type_35478 = cljs.core.nth.call(null,vec__35433_35477,(0),null);
var factory_35479 = cljs.core.nth.call(null,vec__35433_35477,(1),null);
var canonical_f_35480 = (cljs.core.truth_(selector_35450)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35449,selector_35450):cljs.core.identity).call(null,factory_35479.call(null,f_35457));
dommy.core.update_event_listeners_BANG_.call(null,elem_35449,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35450,actual_type_35478,f_35457], null),canonical_f_35480);

if(cljs.core.truth_(elem_35449.addEventListener)){
elem_35449.addEventListener(cljs.core.name.call(null,actual_type_35478),canonical_f_35480);
} else {
elem_35449.attachEvent(cljs.core.name.call(null,actual_type_35478),canonical_f_35480);
}

var G__35481 = cljs.core.next.call(null,seq__35421_35471__$1);
var G__35482 = null;
var G__35483 = (0);
var G__35484 = (0);
seq__35421_35458 = G__35481;
chunk__35423_35459 = G__35482;
count__35424_35460 = G__35483;
i__35425_35461 = G__35484;
continue;
}
} else {
}
}
break;
}

var G__35485 = seq__35411_35451;
var G__35486 = chunk__35418_35452;
var G__35487 = count__35419_35453;
var G__35488 = (i__35420_35454 + (1));
seq__35411_35451 = G__35485;
chunk__35418_35452 = G__35486;
count__35419_35453 = G__35487;
i__35420_35454 = G__35488;
continue;
} else {
var temp__4657__auto___35489 = cljs.core.seq.call(null,seq__35411_35451);
if(temp__4657__auto___35489){
var seq__35411_35490__$1 = temp__4657__auto___35489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35411_35490__$1)){
var c__25588__auto___35491 = cljs.core.chunk_first.call(null,seq__35411_35490__$1);
var G__35492 = cljs.core.chunk_rest.call(null,seq__35411_35490__$1);
var G__35493 = c__25588__auto___35491;
var G__35494 = cljs.core.count.call(null,c__25588__auto___35491);
var G__35495 = (0);
seq__35411_35451 = G__35492;
chunk__35418_35452 = G__35493;
count__35419_35453 = G__35494;
i__35420_35454 = G__35495;
continue;
} else {
var vec__35436_35496 = cljs.core.first.call(null,seq__35411_35490__$1);
var orig_type_35497 = cljs.core.nth.call(null,vec__35436_35496,(0),null);
var f_35498 = cljs.core.nth.call(null,vec__35436_35496,(1),null);
var seq__35412_35499 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35497,cljs.core.PersistentArrayMap.fromArray([orig_type_35497,cljs.core.identity], true, false)));
var chunk__35414_35500 = null;
var count__35415_35501 = (0);
var i__35416_35502 = (0);
while(true){
if((i__35416_35502 < count__35415_35501)){
var vec__35439_35503 = cljs.core._nth.call(null,chunk__35414_35500,i__35416_35502);
var actual_type_35504 = cljs.core.nth.call(null,vec__35439_35503,(0),null);
var factory_35505 = cljs.core.nth.call(null,vec__35439_35503,(1),null);
var canonical_f_35506 = (cljs.core.truth_(selector_35450)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35449,selector_35450):cljs.core.identity).call(null,factory_35505.call(null,f_35498));
dommy.core.update_event_listeners_BANG_.call(null,elem_35449,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35450,actual_type_35504,f_35498], null),canonical_f_35506);

if(cljs.core.truth_(elem_35449.addEventListener)){
elem_35449.addEventListener(cljs.core.name.call(null,actual_type_35504),canonical_f_35506);
} else {
elem_35449.attachEvent(cljs.core.name.call(null,actual_type_35504),canonical_f_35506);
}

var G__35507 = seq__35412_35499;
var G__35508 = chunk__35414_35500;
var G__35509 = count__35415_35501;
var G__35510 = (i__35416_35502 + (1));
seq__35412_35499 = G__35507;
chunk__35414_35500 = G__35508;
count__35415_35501 = G__35509;
i__35416_35502 = G__35510;
continue;
} else {
var temp__4657__auto___35511__$1 = cljs.core.seq.call(null,seq__35412_35499);
if(temp__4657__auto___35511__$1){
var seq__35412_35512__$1 = temp__4657__auto___35511__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35412_35512__$1)){
var c__25588__auto___35513 = cljs.core.chunk_first.call(null,seq__35412_35512__$1);
var G__35514 = cljs.core.chunk_rest.call(null,seq__35412_35512__$1);
var G__35515 = c__25588__auto___35513;
var G__35516 = cljs.core.count.call(null,c__25588__auto___35513);
var G__35517 = (0);
seq__35412_35499 = G__35514;
chunk__35414_35500 = G__35515;
count__35415_35501 = G__35516;
i__35416_35502 = G__35517;
continue;
} else {
var vec__35442_35518 = cljs.core.first.call(null,seq__35412_35512__$1);
var actual_type_35519 = cljs.core.nth.call(null,vec__35442_35518,(0),null);
var factory_35520 = cljs.core.nth.call(null,vec__35442_35518,(1),null);
var canonical_f_35521 = (cljs.core.truth_(selector_35450)?cljs.core.partial.call(null,dommy.core.live_listener,elem_35449,selector_35450):cljs.core.identity).call(null,factory_35520.call(null,f_35498));
dommy.core.update_event_listeners_BANG_.call(null,elem_35449,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35450,actual_type_35519,f_35498], null),canonical_f_35521);

if(cljs.core.truth_(elem_35449.addEventListener)){
elem_35449.addEventListener(cljs.core.name.call(null,actual_type_35519),canonical_f_35521);
} else {
elem_35449.attachEvent(cljs.core.name.call(null,actual_type_35519),canonical_f_35521);
}

var G__35522 = cljs.core.next.call(null,seq__35412_35512__$1);
var G__35523 = null;
var G__35524 = (0);
var G__35525 = (0);
seq__35412_35499 = G__35522;
chunk__35414_35500 = G__35523;
count__35415_35501 = G__35524;
i__35416_35502 = G__35525;
continue;
}
} else {
}
}
break;
}

var G__35526 = cljs.core.next.call(null,seq__35411_35490__$1);
var G__35527 = null;
var G__35528 = (0);
var G__35529 = (0);
seq__35411_35451 = G__35526;
chunk__35418_35452 = G__35527;
count__35419_35453 = G__35528;
i__35420_35454 = G__35529;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq35406){
var G__35407 = cljs.core.first.call(null,seq35406);
var seq35406__$1 = cljs.core.next.call(null,seq35406);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35407,seq35406__$1);
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
var args__25859__auto__ = [];
var len__25852__auto___35569 = arguments.length;
var i__25853__auto___35570 = (0);
while(true){
if((i__25853__auto___35570 < len__25852__auto___35569)){
args__25859__auto__.push((arguments[i__25853__auto___35570]));

var G__35571 = (i__25853__auto___35570 + (1));
i__25853__auto___35570 = G__35571;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((1) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25860__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__35532_35572 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_35573 = cljs.core.nth.call(null,vec__35532_35572,(0),null);
var selector_35574 = cljs.core.nth.call(null,vec__35532_35572,(1),null);
var seq__35535_35575 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__35542_35576 = null;
var count__35543_35577 = (0);
var i__35544_35578 = (0);
while(true){
if((i__35544_35578 < count__35543_35577)){
var vec__35551_35579 = cljs.core._nth.call(null,chunk__35542_35576,i__35544_35578);
var orig_type_35580 = cljs.core.nth.call(null,vec__35551_35579,(0),null);
var f_35581 = cljs.core.nth.call(null,vec__35551_35579,(1),null);
var seq__35545_35582 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35580,cljs.core.PersistentArrayMap.fromArray([orig_type_35580,cljs.core.identity], true, false)));
var chunk__35547_35583 = null;
var count__35548_35584 = (0);
var i__35549_35585 = (0);
while(true){
if((i__35549_35585 < count__35548_35584)){
var vec__35554_35586 = cljs.core._nth.call(null,chunk__35547_35583,i__35549_35585);
var actual_type_35587 = cljs.core.nth.call(null,vec__35554_35586,(0),null);
var __35588 = cljs.core.nth.call(null,vec__35554_35586,(1),null);
var keys_35589 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35574,actual_type_35587,f_35581], null);
var canonical_f_35590 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35573),keys_35589);
dommy.core.update_event_listeners_BANG_.call(null,elem_35573,dommy.utils.dissoc_in,keys_35589);

if(cljs.core.truth_(elem_35573.removeEventListener)){
elem_35573.removeEventListener(cljs.core.name.call(null,actual_type_35587),canonical_f_35590);
} else {
elem_35573.detachEvent(cljs.core.name.call(null,actual_type_35587),canonical_f_35590);
}

var G__35591 = seq__35545_35582;
var G__35592 = chunk__35547_35583;
var G__35593 = count__35548_35584;
var G__35594 = (i__35549_35585 + (1));
seq__35545_35582 = G__35591;
chunk__35547_35583 = G__35592;
count__35548_35584 = G__35593;
i__35549_35585 = G__35594;
continue;
} else {
var temp__4657__auto___35595 = cljs.core.seq.call(null,seq__35545_35582);
if(temp__4657__auto___35595){
var seq__35545_35596__$1 = temp__4657__auto___35595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35545_35596__$1)){
var c__25588__auto___35597 = cljs.core.chunk_first.call(null,seq__35545_35596__$1);
var G__35598 = cljs.core.chunk_rest.call(null,seq__35545_35596__$1);
var G__35599 = c__25588__auto___35597;
var G__35600 = cljs.core.count.call(null,c__25588__auto___35597);
var G__35601 = (0);
seq__35545_35582 = G__35598;
chunk__35547_35583 = G__35599;
count__35548_35584 = G__35600;
i__35549_35585 = G__35601;
continue;
} else {
var vec__35557_35602 = cljs.core.first.call(null,seq__35545_35596__$1);
var actual_type_35603 = cljs.core.nth.call(null,vec__35557_35602,(0),null);
var __35604 = cljs.core.nth.call(null,vec__35557_35602,(1),null);
var keys_35605 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35574,actual_type_35603,f_35581], null);
var canonical_f_35606 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35573),keys_35605);
dommy.core.update_event_listeners_BANG_.call(null,elem_35573,dommy.utils.dissoc_in,keys_35605);

if(cljs.core.truth_(elem_35573.removeEventListener)){
elem_35573.removeEventListener(cljs.core.name.call(null,actual_type_35603),canonical_f_35606);
} else {
elem_35573.detachEvent(cljs.core.name.call(null,actual_type_35603),canonical_f_35606);
}

var G__35607 = cljs.core.next.call(null,seq__35545_35596__$1);
var G__35608 = null;
var G__35609 = (0);
var G__35610 = (0);
seq__35545_35582 = G__35607;
chunk__35547_35583 = G__35608;
count__35548_35584 = G__35609;
i__35549_35585 = G__35610;
continue;
}
} else {
}
}
break;
}

var G__35611 = seq__35535_35575;
var G__35612 = chunk__35542_35576;
var G__35613 = count__35543_35577;
var G__35614 = (i__35544_35578 + (1));
seq__35535_35575 = G__35611;
chunk__35542_35576 = G__35612;
count__35543_35577 = G__35613;
i__35544_35578 = G__35614;
continue;
} else {
var temp__4657__auto___35615 = cljs.core.seq.call(null,seq__35535_35575);
if(temp__4657__auto___35615){
var seq__35535_35616__$1 = temp__4657__auto___35615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35535_35616__$1)){
var c__25588__auto___35617 = cljs.core.chunk_first.call(null,seq__35535_35616__$1);
var G__35618 = cljs.core.chunk_rest.call(null,seq__35535_35616__$1);
var G__35619 = c__25588__auto___35617;
var G__35620 = cljs.core.count.call(null,c__25588__auto___35617);
var G__35621 = (0);
seq__35535_35575 = G__35618;
chunk__35542_35576 = G__35619;
count__35543_35577 = G__35620;
i__35544_35578 = G__35621;
continue;
} else {
var vec__35560_35622 = cljs.core.first.call(null,seq__35535_35616__$1);
var orig_type_35623 = cljs.core.nth.call(null,vec__35560_35622,(0),null);
var f_35624 = cljs.core.nth.call(null,vec__35560_35622,(1),null);
var seq__35536_35625 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_35623,cljs.core.PersistentArrayMap.fromArray([orig_type_35623,cljs.core.identity], true, false)));
var chunk__35538_35626 = null;
var count__35539_35627 = (0);
var i__35540_35628 = (0);
while(true){
if((i__35540_35628 < count__35539_35627)){
var vec__35563_35629 = cljs.core._nth.call(null,chunk__35538_35626,i__35540_35628);
var actual_type_35630 = cljs.core.nth.call(null,vec__35563_35629,(0),null);
var __35631 = cljs.core.nth.call(null,vec__35563_35629,(1),null);
var keys_35632 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35574,actual_type_35630,f_35624], null);
var canonical_f_35633 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35573),keys_35632);
dommy.core.update_event_listeners_BANG_.call(null,elem_35573,dommy.utils.dissoc_in,keys_35632);

if(cljs.core.truth_(elem_35573.removeEventListener)){
elem_35573.removeEventListener(cljs.core.name.call(null,actual_type_35630),canonical_f_35633);
} else {
elem_35573.detachEvent(cljs.core.name.call(null,actual_type_35630),canonical_f_35633);
}

var G__35634 = seq__35536_35625;
var G__35635 = chunk__35538_35626;
var G__35636 = count__35539_35627;
var G__35637 = (i__35540_35628 + (1));
seq__35536_35625 = G__35634;
chunk__35538_35626 = G__35635;
count__35539_35627 = G__35636;
i__35540_35628 = G__35637;
continue;
} else {
var temp__4657__auto___35638__$1 = cljs.core.seq.call(null,seq__35536_35625);
if(temp__4657__auto___35638__$1){
var seq__35536_35639__$1 = temp__4657__auto___35638__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35536_35639__$1)){
var c__25588__auto___35640 = cljs.core.chunk_first.call(null,seq__35536_35639__$1);
var G__35641 = cljs.core.chunk_rest.call(null,seq__35536_35639__$1);
var G__35642 = c__25588__auto___35640;
var G__35643 = cljs.core.count.call(null,c__25588__auto___35640);
var G__35644 = (0);
seq__35536_35625 = G__35641;
chunk__35538_35626 = G__35642;
count__35539_35627 = G__35643;
i__35540_35628 = G__35644;
continue;
} else {
var vec__35566_35645 = cljs.core.first.call(null,seq__35536_35639__$1);
var actual_type_35646 = cljs.core.nth.call(null,vec__35566_35645,(0),null);
var __35647 = cljs.core.nth.call(null,vec__35566_35645,(1),null);
var keys_35648 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_35574,actual_type_35646,f_35624], null);
var canonical_f_35649 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_35573),keys_35648);
dommy.core.update_event_listeners_BANG_.call(null,elem_35573,dommy.utils.dissoc_in,keys_35648);

if(cljs.core.truth_(elem_35573.removeEventListener)){
elem_35573.removeEventListener(cljs.core.name.call(null,actual_type_35646),canonical_f_35649);
} else {
elem_35573.detachEvent(cljs.core.name.call(null,actual_type_35646),canonical_f_35649);
}

var G__35650 = cljs.core.next.call(null,seq__35536_35639__$1);
var G__35651 = null;
var G__35652 = (0);
var G__35653 = (0);
seq__35536_35625 = G__35650;
chunk__35538_35626 = G__35651;
count__35539_35627 = G__35652;
i__35540_35628 = G__35653;
continue;
}
} else {
}
}
break;
}

var G__35654 = cljs.core.next.call(null,seq__35535_35616__$1);
var G__35655 = null;
var G__35656 = (0);
var G__35657 = (0);
seq__35535_35575 = G__35654;
chunk__35542_35576 = G__35655;
count__35543_35577 = G__35656;
i__35544_35578 = G__35657;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq35530){
var G__35531 = cljs.core.first.call(null,seq35530);
var seq35530__$1 = cljs.core.next.call(null,seq35530);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35531,seq35530__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__25859__auto__ = [];
var len__25852__auto___35673 = arguments.length;
var i__25853__auto___35674 = (0);
while(true){
if((i__25853__auto___35674 < len__25852__auto___35673)){
args__25859__auto__.push((arguments[i__25853__auto___35674]));

var G__35675 = (i__25853__auto___35674 + (1));
i__25853__auto___35674 = G__35675;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((1) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25860__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__35660_35676 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_35677 = cljs.core.nth.call(null,vec__35660_35676,(0),null);
var selector_35678 = cljs.core.nth.call(null,vec__35660_35676,(1),null);
var seq__35663_35679 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__35664_35680 = null;
var count__35665_35681 = (0);
var i__35666_35682 = (0);
while(true){
if((i__35666_35682 < count__35665_35681)){
var vec__35667_35683 = cljs.core._nth.call(null,chunk__35664_35680,i__35666_35682);
var type_35684 = cljs.core.nth.call(null,vec__35667_35683,(0),null);
var f_35685 = cljs.core.nth.call(null,vec__35667_35683,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_35684,((function (seq__35663_35679,chunk__35664_35680,count__35665_35681,i__35666_35682,vec__35667_35683,type_35684,f_35685,vec__35660_35676,elem_35677,selector_35678){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_35684,dommy$core$this_fn);

return f_35685.call(null,e);
});})(seq__35663_35679,chunk__35664_35680,count__35665_35681,i__35666_35682,vec__35667_35683,type_35684,f_35685,vec__35660_35676,elem_35677,selector_35678))
);

var G__35686 = seq__35663_35679;
var G__35687 = chunk__35664_35680;
var G__35688 = count__35665_35681;
var G__35689 = (i__35666_35682 + (1));
seq__35663_35679 = G__35686;
chunk__35664_35680 = G__35687;
count__35665_35681 = G__35688;
i__35666_35682 = G__35689;
continue;
} else {
var temp__4657__auto___35690 = cljs.core.seq.call(null,seq__35663_35679);
if(temp__4657__auto___35690){
var seq__35663_35691__$1 = temp__4657__auto___35690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35663_35691__$1)){
var c__25588__auto___35692 = cljs.core.chunk_first.call(null,seq__35663_35691__$1);
var G__35693 = cljs.core.chunk_rest.call(null,seq__35663_35691__$1);
var G__35694 = c__25588__auto___35692;
var G__35695 = cljs.core.count.call(null,c__25588__auto___35692);
var G__35696 = (0);
seq__35663_35679 = G__35693;
chunk__35664_35680 = G__35694;
count__35665_35681 = G__35695;
i__35666_35682 = G__35696;
continue;
} else {
var vec__35670_35697 = cljs.core.first.call(null,seq__35663_35691__$1);
var type_35698 = cljs.core.nth.call(null,vec__35670_35697,(0),null);
var f_35699 = cljs.core.nth.call(null,vec__35670_35697,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_35698,((function (seq__35663_35679,chunk__35664_35680,count__35665_35681,i__35666_35682,vec__35670_35697,type_35698,f_35699,seq__35663_35691__$1,temp__4657__auto___35690,vec__35660_35676,elem_35677,selector_35678){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_35698,dommy$core$this_fn);

return f_35699.call(null,e);
});})(seq__35663_35679,chunk__35664_35680,count__35665_35681,i__35666_35682,vec__35670_35697,type_35698,f_35699,seq__35663_35691__$1,temp__4657__auto___35690,vec__35660_35676,elem_35677,selector_35678))
);

var G__35700 = cljs.core.next.call(null,seq__35663_35691__$1);
var G__35701 = null;
var G__35702 = (0);
var G__35703 = (0);
seq__35663_35679 = G__35700;
chunk__35664_35680 = G__35701;
count__35665_35681 = G__35702;
i__35666_35682 = G__35703;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq35658){
var G__35659 = cljs.core.first.call(null,seq35658);
var seq35658__$1 = cljs.core.next.call(null,seq35658);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35659,seq35658__$1);
});


//# sourceMappingURL=core.js.map?rel=1489155471503