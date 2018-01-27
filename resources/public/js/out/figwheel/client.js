// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args35357 = [];
var len__25876__auto___35360 = arguments.length;
var i__25877__auto___35361 = (0);
while(true){
if((i__25877__auto___35361 < len__25876__auto___35360)){
args35357.push((arguments[i__25877__auto___35361]));

var G__35362 = (i__25877__auto___35361 + (1));
i__25877__auto___35361 = G__35362;
continue;
} else {
}
break;
}

var G__35359 = args35357.length;
switch (G__35359) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35357.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25883__auto__ = [];
var len__25876__auto___35365 = arguments.length;
var i__25877__auto___35366 = (0);
while(true){
if((i__25877__auto___35366 < len__25876__auto___35365)){
args__25883__auto__.push((arguments[i__25877__auto___35366]));

var G__35367 = (i__25877__auto___35366 + (1));
i__25877__auto___35366 = G__35367;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35364){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35364));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25883__auto__ = [];
var len__25876__auto___35369 = arguments.length;
var i__25877__auto___35370 = (0);
while(true){
if((i__25877__auto___35370 < len__25876__auto___35369)){
args__25883__auto__.push((arguments[i__25877__auto___35370]));

var G__35371 = (i__25877__auto___35370 + (1));
i__25877__auto___35370 = G__35371;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35368){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35368));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__35372 = cljs.core._EQ_;
var expr__35373 = (function (){var or__24801__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e35376){if((e35376 instanceof Error)){
var e = e35376;
return false;
} else {
throw e35376;

}
}})();
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__35372.call(null,"true",expr__35373))){
return true;
} else {
if(cljs.core.truth_(pred__35372.call(null,"false",expr__35373))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35373)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e35378){if((e35378 instanceof Error)){
var e = e35378;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e35378;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35379){
var map__35382 = p__35379;
var map__35382__$1 = ((((!((map__35382 == null)))?((((map__35382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35382):map__35382);
var message = cljs.core.get.call(null,map__35382__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35382__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24801__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24789__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24789__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24789__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26973__auto___35544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto___35544,ch){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto___35544,ch){
return (function (state_35513){
var state_val_35514 = (state_35513[(1)]);
if((state_val_35514 === (7))){
var inst_35509 = (state_35513[(2)]);
var state_35513__$1 = state_35513;
var statearr_35515_35545 = state_35513__$1;
(statearr_35515_35545[(2)] = inst_35509);

(statearr_35515_35545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (1))){
var state_35513__$1 = state_35513;
var statearr_35516_35546 = state_35513__$1;
(statearr_35516_35546[(2)] = null);

(statearr_35516_35546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (4))){
var inst_35466 = (state_35513[(7)]);
var inst_35466__$1 = (state_35513[(2)]);
var state_35513__$1 = (function (){var statearr_35517 = state_35513;
(statearr_35517[(7)] = inst_35466__$1);

return statearr_35517;
})();
if(cljs.core.truth_(inst_35466__$1)){
var statearr_35518_35547 = state_35513__$1;
(statearr_35518_35547[(1)] = (5));

} else {
var statearr_35519_35548 = state_35513__$1;
(statearr_35519_35548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (15))){
var inst_35473 = (state_35513[(8)]);
var inst_35488 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35473);
var inst_35489 = cljs.core.first.call(null,inst_35488);
var inst_35490 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35489);
var inst_35491 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_35490)].join('');
var inst_35492 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35491);
var state_35513__$1 = state_35513;
var statearr_35520_35549 = state_35513__$1;
(statearr_35520_35549[(2)] = inst_35492);

(statearr_35520_35549[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (13))){
var inst_35497 = (state_35513[(2)]);
var state_35513__$1 = state_35513;
var statearr_35521_35550 = state_35513__$1;
(statearr_35521_35550[(2)] = inst_35497);

(statearr_35521_35550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (6))){
var state_35513__$1 = state_35513;
var statearr_35522_35551 = state_35513__$1;
(statearr_35522_35551[(2)] = null);

(statearr_35522_35551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (17))){
var inst_35495 = (state_35513[(2)]);
var state_35513__$1 = state_35513;
var statearr_35523_35552 = state_35513__$1;
(statearr_35523_35552[(2)] = inst_35495);

(statearr_35523_35552[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (3))){
var inst_35511 = (state_35513[(2)]);
var state_35513__$1 = state_35513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35513__$1,inst_35511);
} else {
if((state_val_35514 === (12))){
var inst_35472 = (state_35513[(9)]);
var inst_35486 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35472,opts);
var state_35513__$1 = state_35513;
if(cljs.core.truth_(inst_35486)){
var statearr_35524_35553 = state_35513__$1;
(statearr_35524_35553[(1)] = (15));

} else {
var statearr_35525_35554 = state_35513__$1;
(statearr_35525_35554[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (2))){
var state_35513__$1 = state_35513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35513__$1,(4),ch);
} else {
if((state_val_35514 === (11))){
var inst_35473 = (state_35513[(8)]);
var inst_35478 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35479 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35473);
var inst_35480 = cljs.core.async.timeout.call(null,(1000));
var inst_35481 = [inst_35479,inst_35480];
var inst_35482 = (new cljs.core.PersistentVector(null,2,(5),inst_35478,inst_35481,null));
var state_35513__$1 = state_35513;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35513__$1,(14),inst_35482);
} else {
if((state_val_35514 === (9))){
var inst_35473 = (state_35513[(8)]);
var inst_35499 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35500 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35473);
var inst_35501 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35500);
var inst_35502 = [cljs.core.str("Not loading: "),cljs.core.str(inst_35501)].join('');
var inst_35503 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35502);
var state_35513__$1 = (function (){var statearr_35526 = state_35513;
(statearr_35526[(10)] = inst_35499);

return statearr_35526;
})();
var statearr_35527_35555 = state_35513__$1;
(statearr_35527_35555[(2)] = inst_35503);

(statearr_35527_35555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (5))){
var inst_35466 = (state_35513[(7)]);
var inst_35468 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35469 = (new cljs.core.PersistentArrayMap(null,2,inst_35468,null));
var inst_35470 = (new cljs.core.PersistentHashSet(null,inst_35469,null));
var inst_35471 = figwheel.client.focus_msgs.call(null,inst_35470,inst_35466);
var inst_35472 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35471);
var inst_35473 = cljs.core.first.call(null,inst_35471);
var inst_35474 = figwheel.client.autoload_QMARK_.call(null);
var state_35513__$1 = (function (){var statearr_35528 = state_35513;
(statearr_35528[(9)] = inst_35472);

(statearr_35528[(8)] = inst_35473);

return statearr_35528;
})();
if(cljs.core.truth_(inst_35474)){
var statearr_35529_35556 = state_35513__$1;
(statearr_35529_35556[(1)] = (8));

} else {
var statearr_35530_35557 = state_35513__$1;
(statearr_35530_35557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (14))){
var inst_35484 = (state_35513[(2)]);
var state_35513__$1 = state_35513;
var statearr_35531_35558 = state_35513__$1;
(statearr_35531_35558[(2)] = inst_35484);

(statearr_35531_35558[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (16))){
var state_35513__$1 = state_35513;
var statearr_35532_35559 = state_35513__$1;
(statearr_35532_35559[(2)] = null);

(statearr_35532_35559[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (10))){
var inst_35505 = (state_35513[(2)]);
var state_35513__$1 = (function (){var statearr_35533 = state_35513;
(statearr_35533[(11)] = inst_35505);

return statearr_35533;
})();
var statearr_35534_35560 = state_35513__$1;
(statearr_35534_35560[(2)] = null);

(statearr_35534_35560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35514 === (8))){
var inst_35472 = (state_35513[(9)]);
var inst_35476 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35472,opts);
var state_35513__$1 = state_35513;
if(cljs.core.truth_(inst_35476)){
var statearr_35535_35561 = state_35513__$1;
(statearr_35535_35561[(1)] = (11));

} else {
var statearr_35536_35562 = state_35513__$1;
(statearr_35536_35562[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26973__auto___35544,ch))
;
return ((function (switch__26861__auto__,c__26973__auto___35544,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26862__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26862__auto____0 = (function (){
var statearr_35540 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35540[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26862__auto__);

(statearr_35540[(1)] = (1));

return statearr_35540;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26862__auto____1 = (function (state_35513){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_35513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e35541){if((e35541 instanceof Object)){
var ex__26865__auto__ = e35541;
var statearr_35542_35563 = state_35513;
(statearr_35542_35563[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35564 = state_35513;
state_35513 = G__35564;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26862__auto__ = function(state_35513){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26862__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26862__auto____1.call(this,state_35513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26862__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26862__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto___35544,ch))
})();
var state__26975__auto__ = (function (){var statearr_35543 = f__26974__auto__.call(null);
(statearr_35543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto___35544);

return statearr_35543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto___35544,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35565_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35565_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_35568 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35568){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35567){if((e35567 instanceof Error)){
var e = e35567;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35568], null));
} else {
var e = e35567;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35568))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35569){
var map__35578 = p__35569;
var map__35578__$1 = ((((!((map__35578 == null)))?((((map__35578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35578):map__35578);
var opts = map__35578__$1;
var build_id = cljs.core.get.call(null,map__35578__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35578,map__35578__$1,opts,build_id){
return (function (p__35580){
var vec__35581 = p__35580;
var seq__35582 = cljs.core.seq.call(null,vec__35581);
var first__35583 = cljs.core.first.call(null,seq__35582);
var seq__35582__$1 = cljs.core.next.call(null,seq__35582);
var map__35584 = first__35583;
var map__35584__$1 = ((((!((map__35584 == null)))?((((map__35584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35584):map__35584);
var msg = map__35584__$1;
var msg_name = cljs.core.get.call(null,map__35584__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35582__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35581,seq__35582,first__35583,seq__35582__$1,map__35584,map__35584__$1,msg,msg_name,_,map__35578,map__35578__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35581,seq__35582,first__35583,seq__35582__$1,map__35584,map__35584__$1,msg,msg_name,_,map__35578,map__35578__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35578,map__35578__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35592){
var vec__35593 = p__35592;
var seq__35594 = cljs.core.seq.call(null,vec__35593);
var first__35595 = cljs.core.first.call(null,seq__35594);
var seq__35594__$1 = cljs.core.next.call(null,seq__35594);
var map__35596 = first__35595;
var map__35596__$1 = ((((!((map__35596 == null)))?((((map__35596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35596):map__35596);
var msg = map__35596__$1;
var msg_name = cljs.core.get.call(null,map__35596__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35594__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35598){
var map__35610 = p__35598;
var map__35610__$1 = ((((!((map__35610 == null)))?((((map__35610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35610):map__35610);
var on_compile_warning = cljs.core.get.call(null,map__35610__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35610__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35610,map__35610__$1,on_compile_warning,on_compile_fail){
return (function (p__35612){
var vec__35613 = p__35612;
var seq__35614 = cljs.core.seq.call(null,vec__35613);
var first__35615 = cljs.core.first.call(null,seq__35614);
var seq__35614__$1 = cljs.core.next.call(null,seq__35614);
var map__35616 = first__35615;
var map__35616__$1 = ((((!((map__35616 == null)))?((((map__35616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35616):map__35616);
var msg = map__35616__$1;
var msg_name = cljs.core.get.call(null,map__35616__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35614__$1;
var pred__35618 = cljs.core._EQ_;
var expr__35619 = msg_name;
if(cljs.core.truth_(pred__35618.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35619))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35618.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35619))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35610,map__35610__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26973__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto__,msg_hist,msg_names,msg){
return (function (state_35847){
var state_val_35848 = (state_35847[(1)]);
if((state_val_35848 === (7))){
var inst_35767 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
if(cljs.core.truth_(inst_35767)){
var statearr_35849_35899 = state_35847__$1;
(statearr_35849_35899[(1)] = (8));

} else {
var statearr_35850_35900 = state_35847__$1;
(statearr_35850_35900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (20))){
var inst_35841 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
var statearr_35851_35901 = state_35847__$1;
(statearr_35851_35901[(2)] = inst_35841);

(statearr_35851_35901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (27))){
var inst_35837 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
var statearr_35852_35902 = state_35847__$1;
(statearr_35852_35902[(2)] = inst_35837);

(statearr_35852_35902[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (1))){
var inst_35760 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35847__$1 = state_35847;
if(cljs.core.truth_(inst_35760)){
var statearr_35853_35903 = state_35847__$1;
(statearr_35853_35903[(1)] = (2));

} else {
var statearr_35854_35904 = state_35847__$1;
(statearr_35854_35904[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (24))){
var inst_35839 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
var statearr_35855_35905 = state_35847__$1;
(statearr_35855_35905[(2)] = inst_35839);

(statearr_35855_35905[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (4))){
var inst_35845 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35847__$1,inst_35845);
} else {
if((state_val_35848 === (15))){
var inst_35843 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
var statearr_35856_35906 = state_35847__$1;
(statearr_35856_35906[(2)] = inst_35843);

(statearr_35856_35906[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (21))){
var inst_35796 = (state_35847[(2)]);
var inst_35797 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35798 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35797);
var state_35847__$1 = (function (){var statearr_35857 = state_35847;
(statearr_35857[(7)] = inst_35796);

return statearr_35857;
})();
var statearr_35858_35907 = state_35847__$1;
(statearr_35858_35907[(2)] = inst_35798);

(statearr_35858_35907[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (31))){
var inst_35826 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35847__$1 = state_35847;
if(cljs.core.truth_(inst_35826)){
var statearr_35859_35908 = state_35847__$1;
(statearr_35859_35908[(1)] = (34));

} else {
var statearr_35860_35909 = state_35847__$1;
(statearr_35860_35909[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (32))){
var inst_35835 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
var statearr_35861_35910 = state_35847__$1;
(statearr_35861_35910[(2)] = inst_35835);

(statearr_35861_35910[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (33))){
var inst_35822 = (state_35847[(2)]);
var inst_35823 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35824 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35823);
var state_35847__$1 = (function (){var statearr_35862 = state_35847;
(statearr_35862[(8)] = inst_35822);

return statearr_35862;
})();
var statearr_35863_35911 = state_35847__$1;
(statearr_35863_35911[(2)] = inst_35824);

(statearr_35863_35911[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (13))){
var inst_35781 = figwheel.client.heads_up.clear.call(null);
var state_35847__$1 = state_35847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35847__$1,(16),inst_35781);
} else {
if((state_val_35848 === (22))){
var inst_35802 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35803 = figwheel.client.heads_up.append_warning_message.call(null,inst_35802);
var state_35847__$1 = state_35847;
var statearr_35864_35912 = state_35847__$1;
(statearr_35864_35912[(2)] = inst_35803);

(statearr_35864_35912[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (36))){
var inst_35833 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
var statearr_35865_35913 = state_35847__$1;
(statearr_35865_35913[(2)] = inst_35833);

(statearr_35865_35913[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (29))){
var inst_35813 = (state_35847[(2)]);
var inst_35814 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35815 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35814);
var state_35847__$1 = (function (){var statearr_35866 = state_35847;
(statearr_35866[(9)] = inst_35813);

return statearr_35866;
})();
var statearr_35867_35914 = state_35847__$1;
(statearr_35867_35914[(2)] = inst_35815);

(statearr_35867_35914[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (6))){
var inst_35762 = (state_35847[(10)]);
var state_35847__$1 = state_35847;
var statearr_35868_35915 = state_35847__$1;
(statearr_35868_35915[(2)] = inst_35762);

(statearr_35868_35915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (28))){
var inst_35809 = (state_35847[(2)]);
var inst_35810 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35811 = figwheel.client.heads_up.display_warning.call(null,inst_35810);
var state_35847__$1 = (function (){var statearr_35869 = state_35847;
(statearr_35869[(11)] = inst_35809);

return statearr_35869;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35847__$1,(29),inst_35811);
} else {
if((state_val_35848 === (25))){
var inst_35807 = figwheel.client.heads_up.clear.call(null);
var state_35847__$1 = state_35847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35847__$1,(28),inst_35807);
} else {
if((state_val_35848 === (34))){
var inst_35828 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35847__$1 = state_35847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35847__$1,(37),inst_35828);
} else {
if((state_val_35848 === (17))){
var inst_35787 = (state_35847[(2)]);
var inst_35788 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35789 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35788);
var state_35847__$1 = (function (){var statearr_35870 = state_35847;
(statearr_35870[(12)] = inst_35787);

return statearr_35870;
})();
var statearr_35871_35916 = state_35847__$1;
(statearr_35871_35916[(2)] = inst_35789);

(statearr_35871_35916[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (3))){
var inst_35779 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35847__$1 = state_35847;
if(cljs.core.truth_(inst_35779)){
var statearr_35872_35917 = state_35847__$1;
(statearr_35872_35917[(1)] = (13));

} else {
var statearr_35873_35918 = state_35847__$1;
(statearr_35873_35918[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (12))){
var inst_35775 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
var statearr_35874_35919 = state_35847__$1;
(statearr_35874_35919[(2)] = inst_35775);

(statearr_35874_35919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (2))){
var inst_35762 = (state_35847[(10)]);
var inst_35762__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35847__$1 = (function (){var statearr_35875 = state_35847;
(statearr_35875[(10)] = inst_35762__$1);

return statearr_35875;
})();
if(cljs.core.truth_(inst_35762__$1)){
var statearr_35876_35920 = state_35847__$1;
(statearr_35876_35920[(1)] = (5));

} else {
var statearr_35877_35921 = state_35847__$1;
(statearr_35877_35921[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (23))){
var inst_35805 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35847__$1 = state_35847;
if(cljs.core.truth_(inst_35805)){
var statearr_35878_35922 = state_35847__$1;
(statearr_35878_35922[(1)] = (25));

} else {
var statearr_35879_35923 = state_35847__$1;
(statearr_35879_35923[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (35))){
var state_35847__$1 = state_35847;
var statearr_35880_35924 = state_35847__$1;
(statearr_35880_35924[(2)] = null);

(statearr_35880_35924[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (19))){
var inst_35800 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35847__$1 = state_35847;
if(cljs.core.truth_(inst_35800)){
var statearr_35881_35925 = state_35847__$1;
(statearr_35881_35925[(1)] = (22));

} else {
var statearr_35882_35926 = state_35847__$1;
(statearr_35882_35926[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (11))){
var inst_35771 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
var statearr_35883_35927 = state_35847__$1;
(statearr_35883_35927[(2)] = inst_35771);

(statearr_35883_35927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (9))){
var inst_35773 = figwheel.client.heads_up.clear.call(null);
var state_35847__$1 = state_35847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35847__$1,(12),inst_35773);
} else {
if((state_val_35848 === (5))){
var inst_35764 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35847__$1 = state_35847;
var statearr_35884_35928 = state_35847__$1;
(statearr_35884_35928[(2)] = inst_35764);

(statearr_35884_35928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (14))){
var inst_35791 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35847__$1 = state_35847;
if(cljs.core.truth_(inst_35791)){
var statearr_35885_35929 = state_35847__$1;
(statearr_35885_35929[(1)] = (18));

} else {
var statearr_35886_35930 = state_35847__$1;
(statearr_35886_35930[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (26))){
var inst_35817 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35847__$1 = state_35847;
if(cljs.core.truth_(inst_35817)){
var statearr_35887_35931 = state_35847__$1;
(statearr_35887_35931[(1)] = (30));

} else {
var statearr_35888_35932 = state_35847__$1;
(statearr_35888_35932[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (16))){
var inst_35783 = (state_35847[(2)]);
var inst_35784 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35785 = figwheel.client.heads_up.display_exception.call(null,inst_35784);
var state_35847__$1 = (function (){var statearr_35889 = state_35847;
(statearr_35889[(13)] = inst_35783);

return statearr_35889;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35847__$1,(17),inst_35785);
} else {
if((state_val_35848 === (30))){
var inst_35819 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35820 = figwheel.client.heads_up.display_warning.call(null,inst_35819);
var state_35847__$1 = state_35847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35847__$1,(33),inst_35820);
} else {
if((state_val_35848 === (10))){
var inst_35777 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
var statearr_35890_35933 = state_35847__$1;
(statearr_35890_35933[(2)] = inst_35777);

(statearr_35890_35933[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (18))){
var inst_35793 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35794 = figwheel.client.heads_up.display_exception.call(null,inst_35793);
var state_35847__$1 = state_35847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35847__$1,(21),inst_35794);
} else {
if((state_val_35848 === (37))){
var inst_35830 = (state_35847[(2)]);
var state_35847__$1 = state_35847;
var statearr_35891_35934 = state_35847__$1;
(statearr_35891_35934[(2)] = inst_35830);

(statearr_35891_35934[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35848 === (8))){
var inst_35769 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35847__$1 = state_35847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35847__$1,(11),inst_35769);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26973__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26861__auto__,c__26973__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26862__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26862__auto____0 = (function (){
var statearr_35895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35895[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26862__auto__);

(statearr_35895[(1)] = (1));

return statearr_35895;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26862__auto____1 = (function (state_35847){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_35847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e35896){if((e35896 instanceof Object)){
var ex__26865__auto__ = e35896;
var statearr_35897_35935 = state_35847;
(statearr_35897_35935[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35936 = state_35847;
state_35847 = G__35936;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26862__auto__ = function(state_35847){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26862__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26862__auto____1.call(this,state_35847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26862__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26862__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto__,msg_hist,msg_names,msg))
})();
var state__26975__auto__ = (function (){var statearr_35898 = f__26974__auto__.call(null);
(statearr_35898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto__);

return statearr_35898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto__,msg_hist,msg_names,msg))
);

return c__26973__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26973__auto___35999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto___35999,ch){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto___35999,ch){
return (function (state_35982){
var state_val_35983 = (state_35982[(1)]);
if((state_val_35983 === (1))){
var state_35982__$1 = state_35982;
var statearr_35984_36000 = state_35982__$1;
(statearr_35984_36000[(2)] = null);

(statearr_35984_36000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (2))){
var state_35982__$1 = state_35982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35982__$1,(4),ch);
} else {
if((state_val_35983 === (3))){
var inst_35980 = (state_35982[(2)]);
var state_35982__$1 = state_35982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35982__$1,inst_35980);
} else {
if((state_val_35983 === (4))){
var inst_35970 = (state_35982[(7)]);
var inst_35970__$1 = (state_35982[(2)]);
var state_35982__$1 = (function (){var statearr_35985 = state_35982;
(statearr_35985[(7)] = inst_35970__$1);

return statearr_35985;
})();
if(cljs.core.truth_(inst_35970__$1)){
var statearr_35986_36001 = state_35982__$1;
(statearr_35986_36001[(1)] = (5));

} else {
var statearr_35987_36002 = state_35982__$1;
(statearr_35987_36002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (5))){
var inst_35970 = (state_35982[(7)]);
var inst_35972 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35970);
var state_35982__$1 = state_35982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35982__$1,(8),inst_35972);
} else {
if((state_val_35983 === (6))){
var state_35982__$1 = state_35982;
var statearr_35988_36003 = state_35982__$1;
(statearr_35988_36003[(2)] = null);

(statearr_35988_36003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (7))){
var inst_35978 = (state_35982[(2)]);
var state_35982__$1 = state_35982;
var statearr_35989_36004 = state_35982__$1;
(statearr_35989_36004[(2)] = inst_35978);

(statearr_35989_36004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35983 === (8))){
var inst_35974 = (state_35982[(2)]);
var state_35982__$1 = (function (){var statearr_35990 = state_35982;
(statearr_35990[(8)] = inst_35974);

return statearr_35990;
})();
var statearr_35991_36005 = state_35982__$1;
(statearr_35991_36005[(2)] = null);

(statearr_35991_36005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__26973__auto___35999,ch))
;
return ((function (switch__26861__auto__,c__26973__auto___35999,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26862__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26862__auto____0 = (function (){
var statearr_35995 = [null,null,null,null,null,null,null,null,null];
(statearr_35995[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26862__auto__);

(statearr_35995[(1)] = (1));

return statearr_35995;
});
var figwheel$client$heads_up_plugin_$_state_machine__26862__auto____1 = (function (state_35982){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_35982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e35996){if((e35996 instanceof Object)){
var ex__26865__auto__ = e35996;
var statearr_35997_36006 = state_35982;
(statearr_35997_36006[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36007 = state_35982;
state_35982 = G__36007;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26862__auto__ = function(state_35982){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26862__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26862__auto____1.call(this,state_35982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26862__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26862__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto___35999,ch))
})();
var state__26975__auto__ = (function (){var statearr_35998 = f__26974__auto__.call(null);
(statearr_35998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto___35999);

return statearr_35998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto___35999,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26973__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto__){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto__){
return (function (state_36028){
var state_val_36029 = (state_36028[(1)]);
if((state_val_36029 === (1))){
var inst_36023 = cljs.core.async.timeout.call(null,(3000));
var state_36028__$1 = state_36028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36028__$1,(2),inst_36023);
} else {
if((state_val_36029 === (2))){
var inst_36025 = (state_36028[(2)]);
var inst_36026 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36028__$1 = (function (){var statearr_36030 = state_36028;
(statearr_36030[(7)] = inst_36025);

return statearr_36030;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36028__$1,inst_36026);
} else {
return null;
}
}
});})(c__26973__auto__))
;
return ((function (switch__26861__auto__,c__26973__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26862__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26862__auto____0 = (function (){
var statearr_36034 = [null,null,null,null,null,null,null,null];
(statearr_36034[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26862__auto__);

(statearr_36034[(1)] = (1));

return statearr_36034;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26862__auto____1 = (function (state_36028){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_36028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e36035){if((e36035 instanceof Object)){
var ex__26865__auto__ = e36035;
var statearr_36036_36038 = state_36028;
(statearr_36036_36038[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36039 = state_36028;
state_36028 = G__36039;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26862__auto__ = function(state_36028){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26862__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26862__auto____1.call(this,state_36028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26862__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26862__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto__))
})();
var state__26975__auto__ = (function (){var statearr_36037 = f__26974__auto__.call(null);
(statearr_36037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto__);

return statearr_36037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto__))
);

return c__26973__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26973__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36062){
var state_val_36063 = (state_36062[(1)]);
if((state_val_36063 === (1))){
var inst_36056 = cljs.core.async.timeout.call(null,(2000));
var state_36062__$1 = state_36062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36062__$1,(2),inst_36056);
} else {
if((state_val_36063 === (2))){
var inst_36058 = (state_36062[(2)]);
var inst_36059 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_36060 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36059);
var state_36062__$1 = (function (){var statearr_36064 = state_36062;
(statearr_36064[(7)] = inst_36058);

return statearr_36064;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36062__$1,inst_36060);
} else {
return null;
}
}
});})(c__26973__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__26861__auto__,c__26973__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26862__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26862__auto____0 = (function (){
var statearr_36068 = [null,null,null,null,null,null,null,null];
(statearr_36068[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26862__auto__);

(statearr_36068[(1)] = (1));

return statearr_36068;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26862__auto____1 = (function (state_36062){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_36062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e36069){if((e36069 instanceof Object)){
var ex__26865__auto__ = e36069;
var statearr_36070_36072 = state_36062;
(statearr_36070_36072[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36073 = state_36062;
state_36062 = G__36073;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26862__auto__ = function(state_36062){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26862__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26862__auto____1.call(this,state_36062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26862__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26862__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto__,figwheel_version,temp__4657__auto__))
})();
var state__26975__auto__ = (function (){var statearr_36071 = f__26974__auto__.call(null);
(statearr_36071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto__);

return statearr_36071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto__,figwheel_version,temp__4657__auto__))
);

return c__26973__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36074){
var map__36078 = p__36074;
var map__36078__$1 = ((((!((map__36078 == null)))?((((map__36078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36078):map__36078);
var file = cljs.core.get.call(null,map__36078__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36078__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36078__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36080 = "";
var G__36080__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__36080),cljs.core.str("file "),cljs.core.str(file)].join(''):G__36080);
var G__36080__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__36080__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__36080__$1);
if(cljs.core.truth_((function (){var and__24789__auto__ = line;
if(cljs.core.truth_(and__24789__auto__)){
return column;
} else {
return and__24789__auto__;
}
})())){
return [cljs.core.str(G__36080__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__36080__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36081){
var map__36088 = p__36081;
var map__36088__$1 = ((((!((map__36088 == null)))?((((map__36088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36088):map__36088);
var ed = map__36088__$1;
var formatted_exception = cljs.core.get.call(null,map__36088__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36088__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36088__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36090_36094 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36091_36095 = null;
var count__36092_36096 = (0);
var i__36093_36097 = (0);
while(true){
if((i__36093_36097 < count__36092_36096)){
var msg_36098 = cljs.core._nth.call(null,chunk__36091_36095,i__36093_36097);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36098);

var G__36099 = seq__36090_36094;
var G__36100 = chunk__36091_36095;
var G__36101 = count__36092_36096;
var G__36102 = (i__36093_36097 + (1));
seq__36090_36094 = G__36099;
chunk__36091_36095 = G__36100;
count__36092_36096 = G__36101;
i__36093_36097 = G__36102;
continue;
} else {
var temp__4657__auto___36103 = cljs.core.seq.call(null,seq__36090_36094);
if(temp__4657__auto___36103){
var seq__36090_36104__$1 = temp__4657__auto___36103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36090_36104__$1)){
var c__25612__auto___36105 = cljs.core.chunk_first.call(null,seq__36090_36104__$1);
var G__36106 = cljs.core.chunk_rest.call(null,seq__36090_36104__$1);
var G__36107 = c__25612__auto___36105;
var G__36108 = cljs.core.count.call(null,c__25612__auto___36105);
var G__36109 = (0);
seq__36090_36094 = G__36106;
chunk__36091_36095 = G__36107;
count__36092_36096 = G__36108;
i__36093_36097 = G__36109;
continue;
} else {
var msg_36110 = cljs.core.first.call(null,seq__36090_36104__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36110);

var G__36111 = cljs.core.next.call(null,seq__36090_36104__$1);
var G__36112 = null;
var G__36113 = (0);
var G__36114 = (0);
seq__36090_36094 = G__36111;
chunk__36091_36095 = G__36112;
count__36092_36096 = G__36113;
i__36093_36097 = G__36114;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36115){
var map__36118 = p__36115;
var map__36118__$1 = ((((!((map__36118 == null)))?((((map__36118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36118):map__36118);
var w = map__36118__$1;
var message = cljs.core.get.call(null,map__36118__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24789__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24789__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24789__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36130 = cljs.core.seq.call(null,plugins);
var chunk__36131 = null;
var count__36132 = (0);
var i__36133 = (0);
while(true){
if((i__36133 < count__36132)){
var vec__36134 = cljs.core._nth.call(null,chunk__36131,i__36133);
var k = cljs.core.nth.call(null,vec__36134,(0),null);
var plugin = cljs.core.nth.call(null,vec__36134,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36140 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36130,chunk__36131,count__36132,i__36133,pl_36140,vec__36134,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36140.call(null,msg_hist);
});})(seq__36130,chunk__36131,count__36132,i__36133,pl_36140,vec__36134,k,plugin))
);
} else {
}

var G__36141 = seq__36130;
var G__36142 = chunk__36131;
var G__36143 = count__36132;
var G__36144 = (i__36133 + (1));
seq__36130 = G__36141;
chunk__36131 = G__36142;
count__36132 = G__36143;
i__36133 = G__36144;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36130);
if(temp__4657__auto__){
var seq__36130__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36130__$1)){
var c__25612__auto__ = cljs.core.chunk_first.call(null,seq__36130__$1);
var G__36145 = cljs.core.chunk_rest.call(null,seq__36130__$1);
var G__36146 = c__25612__auto__;
var G__36147 = cljs.core.count.call(null,c__25612__auto__);
var G__36148 = (0);
seq__36130 = G__36145;
chunk__36131 = G__36146;
count__36132 = G__36147;
i__36133 = G__36148;
continue;
} else {
var vec__36137 = cljs.core.first.call(null,seq__36130__$1);
var k = cljs.core.nth.call(null,vec__36137,(0),null);
var plugin = cljs.core.nth.call(null,vec__36137,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36149 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36130,chunk__36131,count__36132,i__36133,pl_36149,vec__36137,k,plugin,seq__36130__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36149.call(null,msg_hist);
});})(seq__36130,chunk__36131,count__36132,i__36133,pl_36149,vec__36137,k,plugin,seq__36130__$1,temp__4657__auto__))
);
} else {
}

var G__36150 = cljs.core.next.call(null,seq__36130__$1);
var G__36151 = null;
var G__36152 = (0);
var G__36153 = (0);
seq__36130 = G__36150;
chunk__36131 = G__36151;
count__36132 = G__36152;
i__36133 = G__36153;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args36154 = [];
var len__25876__auto___36161 = arguments.length;
var i__25877__auto___36162 = (0);
while(true){
if((i__25877__auto___36162 < len__25876__auto___36161)){
args36154.push((arguments[i__25877__auto___36162]));

var G__36163 = (i__25877__auto___36162 + (1));
i__25877__auto___36162 = G__36163;
continue;
} else {
}
break;
}

var G__36156 = args36154.length;
switch (G__36156) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36154.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__36157_36165 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36158_36166 = null;
var count__36159_36167 = (0);
var i__36160_36168 = (0);
while(true){
if((i__36160_36168 < count__36159_36167)){
var msg_36169 = cljs.core._nth.call(null,chunk__36158_36166,i__36160_36168);
figwheel.client.socket.handle_incoming_message.call(null,msg_36169);

var G__36170 = seq__36157_36165;
var G__36171 = chunk__36158_36166;
var G__36172 = count__36159_36167;
var G__36173 = (i__36160_36168 + (1));
seq__36157_36165 = G__36170;
chunk__36158_36166 = G__36171;
count__36159_36167 = G__36172;
i__36160_36168 = G__36173;
continue;
} else {
var temp__4657__auto___36174 = cljs.core.seq.call(null,seq__36157_36165);
if(temp__4657__auto___36174){
var seq__36157_36175__$1 = temp__4657__auto___36174;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36157_36175__$1)){
var c__25612__auto___36176 = cljs.core.chunk_first.call(null,seq__36157_36175__$1);
var G__36177 = cljs.core.chunk_rest.call(null,seq__36157_36175__$1);
var G__36178 = c__25612__auto___36176;
var G__36179 = cljs.core.count.call(null,c__25612__auto___36176);
var G__36180 = (0);
seq__36157_36165 = G__36177;
chunk__36158_36166 = G__36178;
count__36159_36167 = G__36179;
i__36160_36168 = G__36180;
continue;
} else {
var msg_36181 = cljs.core.first.call(null,seq__36157_36175__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36181);

var G__36182 = cljs.core.next.call(null,seq__36157_36175__$1);
var G__36183 = null;
var G__36184 = (0);
var G__36185 = (0);
seq__36157_36165 = G__36182;
chunk__36158_36166 = G__36183;
count__36159_36167 = G__36184;
i__36160_36168 = G__36185;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25883__auto__ = [];
var len__25876__auto___36190 = arguments.length;
var i__25877__auto___36191 = (0);
while(true){
if((i__25877__auto___36191 < len__25876__auto___36190)){
args__25883__auto__.push((arguments[i__25877__auto___36191]));

var G__36192 = (i__25877__auto___36191 + (1));
i__25877__auto___36191 = G__36192;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((0) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25884__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36187){
var map__36188 = p__36187;
var map__36188__$1 = ((((!((map__36188 == null)))?((((map__36188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36188):map__36188);
var opts = map__36188__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36186){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36186));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36194){if((e36194 instanceof Error)){
var e = e36194;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36194;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__36198){
var map__36199 = p__36198;
var map__36199__$1 = ((((!((map__36199 == null)))?((((map__36199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36199):map__36199);
var msg_name = cljs.core.get.call(null,map__36199__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1516956392651