// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32296){
var map__32321 = p__32296;
var map__32321__$1 = ((((!((map__32321 == null)))?((((map__32321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32321):map__32321);
var m = map__32321__$1;
var n = cljs.core.get.call(null,map__32321__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32321__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32323_32345 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32324_32346 = null;
var count__32325_32347 = (0);
var i__32326_32348 = (0);
while(true){
if((i__32326_32348 < count__32325_32347)){
var f_32349 = cljs.core._nth.call(null,chunk__32324_32346,i__32326_32348);
cljs.core.println.call(null,"  ",f_32349);

var G__32350 = seq__32323_32345;
var G__32351 = chunk__32324_32346;
var G__32352 = count__32325_32347;
var G__32353 = (i__32326_32348 + (1));
seq__32323_32345 = G__32350;
chunk__32324_32346 = G__32351;
count__32325_32347 = G__32352;
i__32326_32348 = G__32353;
continue;
} else {
var temp__4657__auto___32354 = cljs.core.seq.call(null,seq__32323_32345);
if(temp__4657__auto___32354){
var seq__32323_32355__$1 = temp__4657__auto___32354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32323_32355__$1)){
var c__25588__auto___32356 = cljs.core.chunk_first.call(null,seq__32323_32355__$1);
var G__32357 = cljs.core.chunk_rest.call(null,seq__32323_32355__$1);
var G__32358 = c__25588__auto___32356;
var G__32359 = cljs.core.count.call(null,c__25588__auto___32356);
var G__32360 = (0);
seq__32323_32345 = G__32357;
chunk__32324_32346 = G__32358;
count__32325_32347 = G__32359;
i__32326_32348 = G__32360;
continue;
} else {
var f_32361 = cljs.core.first.call(null,seq__32323_32355__$1);
cljs.core.println.call(null,"  ",f_32361);

var G__32362 = cljs.core.next.call(null,seq__32323_32355__$1);
var G__32363 = null;
var G__32364 = (0);
var G__32365 = (0);
seq__32323_32345 = G__32362;
chunk__32324_32346 = G__32363;
count__32325_32347 = G__32364;
i__32326_32348 = G__32365;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32366 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24777__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32366);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32366)))?cljs.core.second.call(null,arglists_32366):arglists_32366));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32327_32367 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32328_32368 = null;
var count__32329_32369 = (0);
var i__32330_32370 = (0);
while(true){
if((i__32330_32370 < count__32329_32369)){
var vec__32331_32371 = cljs.core._nth.call(null,chunk__32328_32368,i__32330_32370);
var name_32372 = cljs.core.nth.call(null,vec__32331_32371,(0),null);
var map__32334_32373 = cljs.core.nth.call(null,vec__32331_32371,(1),null);
var map__32334_32374__$1 = ((((!((map__32334_32373 == null)))?((((map__32334_32373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32334_32373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32334_32373):map__32334_32373);
var doc_32375 = cljs.core.get.call(null,map__32334_32374__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32376 = cljs.core.get.call(null,map__32334_32374__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32372);

cljs.core.println.call(null," ",arglists_32376);

if(cljs.core.truth_(doc_32375)){
cljs.core.println.call(null," ",doc_32375);
} else {
}

var G__32377 = seq__32327_32367;
var G__32378 = chunk__32328_32368;
var G__32379 = count__32329_32369;
var G__32380 = (i__32330_32370 + (1));
seq__32327_32367 = G__32377;
chunk__32328_32368 = G__32378;
count__32329_32369 = G__32379;
i__32330_32370 = G__32380;
continue;
} else {
var temp__4657__auto___32381 = cljs.core.seq.call(null,seq__32327_32367);
if(temp__4657__auto___32381){
var seq__32327_32382__$1 = temp__4657__auto___32381;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32327_32382__$1)){
var c__25588__auto___32383 = cljs.core.chunk_first.call(null,seq__32327_32382__$1);
var G__32384 = cljs.core.chunk_rest.call(null,seq__32327_32382__$1);
var G__32385 = c__25588__auto___32383;
var G__32386 = cljs.core.count.call(null,c__25588__auto___32383);
var G__32387 = (0);
seq__32327_32367 = G__32384;
chunk__32328_32368 = G__32385;
count__32329_32369 = G__32386;
i__32330_32370 = G__32387;
continue;
} else {
var vec__32336_32388 = cljs.core.first.call(null,seq__32327_32382__$1);
var name_32389 = cljs.core.nth.call(null,vec__32336_32388,(0),null);
var map__32339_32390 = cljs.core.nth.call(null,vec__32336_32388,(1),null);
var map__32339_32391__$1 = ((((!((map__32339_32390 == null)))?((((map__32339_32390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32339_32390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32339_32390):map__32339_32390);
var doc_32392 = cljs.core.get.call(null,map__32339_32391__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32393 = cljs.core.get.call(null,map__32339_32391__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32389);

cljs.core.println.call(null," ",arglists_32393);

if(cljs.core.truth_(doc_32392)){
cljs.core.println.call(null," ",doc_32392);
} else {
}

var G__32394 = cljs.core.next.call(null,seq__32327_32382__$1);
var G__32395 = null;
var G__32396 = (0);
var G__32397 = (0);
seq__32327_32367 = G__32394;
chunk__32328_32368 = G__32395;
count__32329_32369 = G__32396;
i__32330_32370 = G__32397;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__32341 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32342 = null;
var count__32343 = (0);
var i__32344 = (0);
while(true){
if((i__32344 < count__32343)){
var role = cljs.core._nth.call(null,chunk__32342,i__32344);
var temp__4657__auto___32398__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32398__$1)){
var spec_32399 = temp__4657__auto___32398__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32399));
} else {
}

var G__32400 = seq__32341;
var G__32401 = chunk__32342;
var G__32402 = count__32343;
var G__32403 = (i__32344 + (1));
seq__32341 = G__32400;
chunk__32342 = G__32401;
count__32343 = G__32402;
i__32344 = G__32403;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__32341);
if(temp__4657__auto____$1){
var seq__32341__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32341__$1)){
var c__25588__auto__ = cljs.core.chunk_first.call(null,seq__32341__$1);
var G__32404 = cljs.core.chunk_rest.call(null,seq__32341__$1);
var G__32405 = c__25588__auto__;
var G__32406 = cljs.core.count.call(null,c__25588__auto__);
var G__32407 = (0);
seq__32341 = G__32404;
chunk__32342 = G__32405;
count__32343 = G__32406;
i__32344 = G__32407;
continue;
} else {
var role = cljs.core.first.call(null,seq__32341__$1);
var temp__4657__auto___32408__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32408__$2)){
var spec_32409 = temp__4657__auto___32408__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32409));
} else {
}

var G__32410 = cljs.core.next.call(null,seq__32341__$1);
var G__32411 = null;
var G__32412 = (0);
var G__32413 = (0);
seq__32341 = G__32410;
chunk__32342 = G__32411;
count__32343 = G__32412;
i__32344 = G__32413;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1485355883702