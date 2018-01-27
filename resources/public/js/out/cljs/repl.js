// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33204){
var map__33229 = p__33204;
var map__33229__$1 = ((((!((map__33229 == null)))?((((map__33229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33229):map__33229);
var m = map__33229__$1;
var n = cljs.core.get.call(null,map__33229__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33229__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__33231_33253 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33232_33254 = null;
var count__33233_33255 = (0);
var i__33234_33256 = (0);
while(true){
if((i__33234_33256 < count__33233_33255)){
var f_33257 = cljs.core._nth.call(null,chunk__33232_33254,i__33234_33256);
cljs.core.println.call(null,"  ",f_33257);

var G__33258 = seq__33231_33253;
var G__33259 = chunk__33232_33254;
var G__33260 = count__33233_33255;
var G__33261 = (i__33234_33256 + (1));
seq__33231_33253 = G__33258;
chunk__33232_33254 = G__33259;
count__33233_33255 = G__33260;
i__33234_33256 = G__33261;
continue;
} else {
var temp__4657__auto___33262 = cljs.core.seq.call(null,seq__33231_33253);
if(temp__4657__auto___33262){
var seq__33231_33263__$1 = temp__4657__auto___33262;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33231_33263__$1)){
var c__25612__auto___33264 = cljs.core.chunk_first.call(null,seq__33231_33263__$1);
var G__33265 = cljs.core.chunk_rest.call(null,seq__33231_33263__$1);
var G__33266 = c__25612__auto___33264;
var G__33267 = cljs.core.count.call(null,c__25612__auto___33264);
var G__33268 = (0);
seq__33231_33253 = G__33265;
chunk__33232_33254 = G__33266;
count__33233_33255 = G__33267;
i__33234_33256 = G__33268;
continue;
} else {
var f_33269 = cljs.core.first.call(null,seq__33231_33263__$1);
cljs.core.println.call(null,"  ",f_33269);

var G__33270 = cljs.core.next.call(null,seq__33231_33263__$1);
var G__33271 = null;
var G__33272 = (0);
var G__33273 = (0);
seq__33231_33253 = G__33270;
chunk__33232_33254 = G__33271;
count__33233_33255 = G__33272;
i__33234_33256 = G__33273;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33274 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24801__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33274);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33274)))?cljs.core.second.call(null,arglists_33274):arglists_33274));
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
var seq__33235_33275 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33236_33276 = null;
var count__33237_33277 = (0);
var i__33238_33278 = (0);
while(true){
if((i__33238_33278 < count__33237_33277)){
var vec__33239_33279 = cljs.core._nth.call(null,chunk__33236_33276,i__33238_33278);
var name_33280 = cljs.core.nth.call(null,vec__33239_33279,(0),null);
var map__33242_33281 = cljs.core.nth.call(null,vec__33239_33279,(1),null);
var map__33242_33282__$1 = ((((!((map__33242_33281 == null)))?((((map__33242_33281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33242_33281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33242_33281):map__33242_33281);
var doc_33283 = cljs.core.get.call(null,map__33242_33282__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33284 = cljs.core.get.call(null,map__33242_33282__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33280);

cljs.core.println.call(null," ",arglists_33284);

if(cljs.core.truth_(doc_33283)){
cljs.core.println.call(null," ",doc_33283);
} else {
}

var G__33285 = seq__33235_33275;
var G__33286 = chunk__33236_33276;
var G__33287 = count__33237_33277;
var G__33288 = (i__33238_33278 + (1));
seq__33235_33275 = G__33285;
chunk__33236_33276 = G__33286;
count__33237_33277 = G__33287;
i__33238_33278 = G__33288;
continue;
} else {
var temp__4657__auto___33289 = cljs.core.seq.call(null,seq__33235_33275);
if(temp__4657__auto___33289){
var seq__33235_33290__$1 = temp__4657__auto___33289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33235_33290__$1)){
var c__25612__auto___33291 = cljs.core.chunk_first.call(null,seq__33235_33290__$1);
var G__33292 = cljs.core.chunk_rest.call(null,seq__33235_33290__$1);
var G__33293 = c__25612__auto___33291;
var G__33294 = cljs.core.count.call(null,c__25612__auto___33291);
var G__33295 = (0);
seq__33235_33275 = G__33292;
chunk__33236_33276 = G__33293;
count__33237_33277 = G__33294;
i__33238_33278 = G__33295;
continue;
} else {
var vec__33244_33296 = cljs.core.first.call(null,seq__33235_33290__$1);
var name_33297 = cljs.core.nth.call(null,vec__33244_33296,(0),null);
var map__33247_33298 = cljs.core.nth.call(null,vec__33244_33296,(1),null);
var map__33247_33299__$1 = ((((!((map__33247_33298 == null)))?((((map__33247_33298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33247_33298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33247_33298):map__33247_33298);
var doc_33300 = cljs.core.get.call(null,map__33247_33299__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33301 = cljs.core.get.call(null,map__33247_33299__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33297);

cljs.core.println.call(null," ",arglists_33301);

if(cljs.core.truth_(doc_33300)){
cljs.core.println.call(null," ",doc_33300);
} else {
}

var G__33302 = cljs.core.next.call(null,seq__33235_33290__$1);
var G__33303 = null;
var G__33304 = (0);
var G__33305 = (0);
seq__33235_33275 = G__33302;
chunk__33236_33276 = G__33303;
count__33237_33277 = G__33304;
i__33238_33278 = G__33305;
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

var seq__33249 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33250 = null;
var count__33251 = (0);
var i__33252 = (0);
while(true){
if((i__33252 < count__33251)){
var role = cljs.core._nth.call(null,chunk__33250,i__33252);
var temp__4657__auto___33306__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33306__$1)){
var spec_33307 = temp__4657__auto___33306__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33307));
} else {
}

var G__33308 = seq__33249;
var G__33309 = chunk__33250;
var G__33310 = count__33251;
var G__33311 = (i__33252 + (1));
seq__33249 = G__33308;
chunk__33250 = G__33309;
count__33251 = G__33310;
i__33252 = G__33311;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__33249);
if(temp__4657__auto____$1){
var seq__33249__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33249__$1)){
var c__25612__auto__ = cljs.core.chunk_first.call(null,seq__33249__$1);
var G__33312 = cljs.core.chunk_rest.call(null,seq__33249__$1);
var G__33313 = c__25612__auto__;
var G__33314 = cljs.core.count.call(null,c__25612__auto__);
var G__33315 = (0);
seq__33249 = G__33312;
chunk__33250 = G__33313;
count__33251 = G__33314;
i__33252 = G__33315;
continue;
} else {
var role = cljs.core.first.call(null,seq__33249__$1);
var temp__4657__auto___33316__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33316__$2)){
var spec_33317 = temp__4657__auto___33316__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33317));
} else {
}

var G__33318 = cljs.core.next.call(null,seq__33249__$1);
var G__33319 = null;
var G__33320 = (0);
var G__33321 = (0);
seq__33249 = G__33318;
chunk__33250 = G__33319;
count__33251 = G__33320;
i__33252 = G__33321;
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

//# sourceMappingURL=repl.js.map?rel=1516956387069