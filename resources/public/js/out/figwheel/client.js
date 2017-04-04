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
var args34449 = [];
var len__25852__auto___34452 = arguments.length;
var i__25853__auto___34453 = (0);
while(true){
if((i__25853__auto___34453 < len__25852__auto___34452)){
args34449.push((arguments[i__25853__auto___34453]));

var G__34454 = (i__25853__auto___34453 + (1));
i__25853__auto___34453 = G__34454;
continue;
} else {
}
break;
}

var G__34451 = args34449.length;
switch (G__34451) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34449.length)].join('')));

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
var args__25859__auto__ = [];
var len__25852__auto___34457 = arguments.length;
var i__25853__auto___34458 = (0);
while(true){
if((i__25853__auto___34458 < len__25852__auto___34457)){
args__25859__auto__.push((arguments[i__25853__auto___34458]));

var G__34459 = (i__25853__auto___34458 + (1));
i__25853__auto___34458 = G__34459;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34456){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34456));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25859__auto__ = [];
var len__25852__auto___34461 = arguments.length;
var i__25853__auto___34462 = (0);
while(true){
if((i__25853__auto___34462 < len__25852__auto___34461)){
args__25859__auto__.push((arguments[i__25853__auto___34462]));

var G__34463 = (i__25853__auto___34462 + (1));
i__25853__auto___34462 = G__34463;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34460){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34460));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__34464 = cljs.core._EQ_;
var expr__34465 = (function (){var or__24777__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e34468){if((e34468 instanceof Error)){
var e = e34468;
return false;
} else {
throw e34468;

}
}})();
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__34464.call(null,"true",expr__34465))){
return true;
} else {
if(cljs.core.truth_(pred__34464.call(null,"false",expr__34465))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__34465)].join('')));
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
}catch (e34470){if((e34470 instanceof Error)){
var e = e34470;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e34470;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34471){
var map__34474 = p__34471;
var map__34474__$1 = ((((!((map__34474 == null)))?((((map__34474.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34474.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34474):map__34474);
var message = cljs.core.get.call(null,map__34474__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34474__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24777__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24765__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24765__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24765__auto__;
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
var c__27023__auto___34636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___34636,ch){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto___34636,ch){
return (function (state_34605){
var state_val_34606 = (state_34605[(1)]);
if((state_val_34606 === (7))){
var inst_34601 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34607_34637 = state_34605__$1;
(statearr_34607_34637[(2)] = inst_34601);

(statearr_34607_34637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (1))){
var state_34605__$1 = state_34605;
var statearr_34608_34638 = state_34605__$1;
(statearr_34608_34638[(2)] = null);

(statearr_34608_34638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (4))){
var inst_34558 = (state_34605[(7)]);
var inst_34558__$1 = (state_34605[(2)]);
var state_34605__$1 = (function (){var statearr_34609 = state_34605;
(statearr_34609[(7)] = inst_34558__$1);

return statearr_34609;
})();
if(cljs.core.truth_(inst_34558__$1)){
var statearr_34610_34639 = state_34605__$1;
(statearr_34610_34639[(1)] = (5));

} else {
var statearr_34611_34640 = state_34605__$1;
(statearr_34611_34640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (15))){
var inst_34565 = (state_34605[(8)]);
var inst_34580 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34565);
var inst_34581 = cljs.core.first.call(null,inst_34580);
var inst_34582 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34581);
var inst_34583 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_34582)].join('');
var inst_34584 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34583);
var state_34605__$1 = state_34605;
var statearr_34612_34641 = state_34605__$1;
(statearr_34612_34641[(2)] = inst_34584);

(statearr_34612_34641[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (13))){
var inst_34589 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34613_34642 = state_34605__$1;
(statearr_34613_34642[(2)] = inst_34589);

(statearr_34613_34642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (6))){
var state_34605__$1 = state_34605;
var statearr_34614_34643 = state_34605__$1;
(statearr_34614_34643[(2)] = null);

(statearr_34614_34643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (17))){
var inst_34587 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34615_34644 = state_34605__$1;
(statearr_34615_34644[(2)] = inst_34587);

(statearr_34615_34644[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (3))){
var inst_34603 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34605__$1,inst_34603);
} else {
if((state_val_34606 === (12))){
var inst_34564 = (state_34605[(9)]);
var inst_34578 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34564,opts);
var state_34605__$1 = state_34605;
if(cljs.core.truth_(inst_34578)){
var statearr_34616_34645 = state_34605__$1;
(statearr_34616_34645[(1)] = (15));

} else {
var statearr_34617_34646 = state_34605__$1;
(statearr_34617_34646[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (2))){
var state_34605__$1 = state_34605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34605__$1,(4),ch);
} else {
if((state_val_34606 === (11))){
var inst_34565 = (state_34605[(8)]);
var inst_34570 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34571 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34565);
var inst_34572 = cljs.core.async.timeout.call(null,(1000));
var inst_34573 = [inst_34571,inst_34572];
var inst_34574 = (new cljs.core.PersistentVector(null,2,(5),inst_34570,inst_34573,null));
var state_34605__$1 = state_34605;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34605__$1,(14),inst_34574);
} else {
if((state_val_34606 === (9))){
var inst_34565 = (state_34605[(8)]);
var inst_34591 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34592 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34565);
var inst_34593 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34592);
var inst_34594 = [cljs.core.str("Not loading: "),cljs.core.str(inst_34593)].join('');
var inst_34595 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34594);
var state_34605__$1 = (function (){var statearr_34618 = state_34605;
(statearr_34618[(10)] = inst_34591);

return statearr_34618;
})();
var statearr_34619_34647 = state_34605__$1;
(statearr_34619_34647[(2)] = inst_34595);

(statearr_34619_34647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (5))){
var inst_34558 = (state_34605[(7)]);
var inst_34560 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34561 = (new cljs.core.PersistentArrayMap(null,2,inst_34560,null));
var inst_34562 = (new cljs.core.PersistentHashSet(null,inst_34561,null));
var inst_34563 = figwheel.client.focus_msgs.call(null,inst_34562,inst_34558);
var inst_34564 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34563);
var inst_34565 = cljs.core.first.call(null,inst_34563);
var inst_34566 = figwheel.client.autoload_QMARK_.call(null);
var state_34605__$1 = (function (){var statearr_34620 = state_34605;
(statearr_34620[(8)] = inst_34565);

(statearr_34620[(9)] = inst_34564);

return statearr_34620;
})();
if(cljs.core.truth_(inst_34566)){
var statearr_34621_34648 = state_34605__$1;
(statearr_34621_34648[(1)] = (8));

} else {
var statearr_34622_34649 = state_34605__$1;
(statearr_34622_34649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (14))){
var inst_34576 = (state_34605[(2)]);
var state_34605__$1 = state_34605;
var statearr_34623_34650 = state_34605__$1;
(statearr_34623_34650[(2)] = inst_34576);

(statearr_34623_34650[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (16))){
var state_34605__$1 = state_34605;
var statearr_34624_34651 = state_34605__$1;
(statearr_34624_34651[(2)] = null);

(statearr_34624_34651[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (10))){
var inst_34597 = (state_34605[(2)]);
var state_34605__$1 = (function (){var statearr_34625 = state_34605;
(statearr_34625[(11)] = inst_34597);

return statearr_34625;
})();
var statearr_34626_34652 = state_34605__$1;
(statearr_34626_34652[(2)] = null);

(statearr_34626_34652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34606 === (8))){
var inst_34564 = (state_34605[(9)]);
var inst_34568 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34564,opts);
var state_34605__$1 = state_34605;
if(cljs.core.truth_(inst_34568)){
var statearr_34627_34653 = state_34605__$1;
(statearr_34627_34653[(1)] = (11));

} else {
var statearr_34628_34654 = state_34605__$1;
(statearr_34628_34654[(1)] = (12));

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
});})(c__27023__auto___34636,ch))
;
return ((function (switch__26911__auto__,c__27023__auto___34636,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26912__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26912__auto____0 = (function (){
var statearr_34632 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34632[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26912__auto__);

(statearr_34632[(1)] = (1));

return statearr_34632;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26912__auto____1 = (function (state_34605){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_34605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e34633){if((e34633 instanceof Object)){
var ex__26915__auto__ = e34633;
var statearr_34634_34655 = state_34605;
(statearr_34634_34655[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34656 = state_34605;
state_34605 = G__34656;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26912__auto__ = function(state_34605){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26912__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26912__auto____1.call(this,state_34605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26912__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26912__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto___34636,ch))
})();
var state__27025__auto__ = (function (){var statearr_34635 = f__27024__auto__.call(null);
(statearr_34635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto___34636);

return statearr_34635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___34636,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34657_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34657_SHARP_));
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
var base_path_34660 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34660){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e34659){if((e34659 instanceof Error)){
var e = e34659;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34660], null));
} else {
var e = e34659;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_34660))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34661){
var map__34670 = p__34661;
var map__34670__$1 = ((((!((map__34670 == null)))?((((map__34670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34670):map__34670);
var opts = map__34670__$1;
var build_id = cljs.core.get.call(null,map__34670__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34670,map__34670__$1,opts,build_id){
return (function (p__34672){
var vec__34673 = p__34672;
var seq__34674 = cljs.core.seq.call(null,vec__34673);
var first__34675 = cljs.core.first.call(null,seq__34674);
var seq__34674__$1 = cljs.core.next.call(null,seq__34674);
var map__34676 = first__34675;
var map__34676__$1 = ((((!((map__34676 == null)))?((((map__34676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34676):map__34676);
var msg = map__34676__$1;
var msg_name = cljs.core.get.call(null,map__34676__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34674__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34673,seq__34674,first__34675,seq__34674__$1,map__34676,map__34676__$1,msg,msg_name,_,map__34670,map__34670__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34673,seq__34674,first__34675,seq__34674__$1,map__34676,map__34676__$1,msg,msg_name,_,map__34670,map__34670__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34670,map__34670__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34684){
var vec__34685 = p__34684;
var seq__34686 = cljs.core.seq.call(null,vec__34685);
var first__34687 = cljs.core.first.call(null,seq__34686);
var seq__34686__$1 = cljs.core.next.call(null,seq__34686);
var map__34688 = first__34687;
var map__34688__$1 = ((((!((map__34688 == null)))?((((map__34688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34688):map__34688);
var msg = map__34688__$1;
var msg_name = cljs.core.get.call(null,map__34688__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34686__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34690){
var map__34702 = p__34690;
var map__34702__$1 = ((((!((map__34702 == null)))?((((map__34702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34702):map__34702);
var on_compile_warning = cljs.core.get.call(null,map__34702__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34702__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34702,map__34702__$1,on_compile_warning,on_compile_fail){
return (function (p__34704){
var vec__34705 = p__34704;
var seq__34706 = cljs.core.seq.call(null,vec__34705);
var first__34707 = cljs.core.first.call(null,seq__34706);
var seq__34706__$1 = cljs.core.next.call(null,seq__34706);
var map__34708 = first__34707;
var map__34708__$1 = ((((!((map__34708 == null)))?((((map__34708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34708):map__34708);
var msg = map__34708__$1;
var msg_name = cljs.core.get.call(null,map__34708__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34706__$1;
var pred__34710 = cljs.core._EQ_;
var expr__34711 = msg_name;
if(cljs.core.truth_(pred__34710.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34711))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34710.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34711))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34702,map__34702__$1,on_compile_warning,on_compile_fail))
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
var c__27023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto__,msg_hist,msg_names,msg){
return (function (state_34939){
var state_val_34940 = (state_34939[(1)]);
if((state_val_34940 === (7))){
var inst_34859 = (state_34939[(2)]);
var state_34939__$1 = state_34939;
if(cljs.core.truth_(inst_34859)){
var statearr_34941_34991 = state_34939__$1;
(statearr_34941_34991[(1)] = (8));

} else {
var statearr_34942_34992 = state_34939__$1;
(statearr_34942_34992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (20))){
var inst_34933 = (state_34939[(2)]);
var state_34939__$1 = state_34939;
var statearr_34943_34993 = state_34939__$1;
(statearr_34943_34993[(2)] = inst_34933);

(statearr_34943_34993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (27))){
var inst_34929 = (state_34939[(2)]);
var state_34939__$1 = state_34939;
var statearr_34944_34994 = state_34939__$1;
(statearr_34944_34994[(2)] = inst_34929);

(statearr_34944_34994[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (1))){
var inst_34852 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34939__$1 = state_34939;
if(cljs.core.truth_(inst_34852)){
var statearr_34945_34995 = state_34939__$1;
(statearr_34945_34995[(1)] = (2));

} else {
var statearr_34946_34996 = state_34939__$1;
(statearr_34946_34996[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (24))){
var inst_34931 = (state_34939[(2)]);
var state_34939__$1 = state_34939;
var statearr_34947_34997 = state_34939__$1;
(statearr_34947_34997[(2)] = inst_34931);

(statearr_34947_34997[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (4))){
var inst_34937 = (state_34939[(2)]);
var state_34939__$1 = state_34939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34939__$1,inst_34937);
} else {
if((state_val_34940 === (15))){
var inst_34935 = (state_34939[(2)]);
var state_34939__$1 = state_34939;
var statearr_34948_34998 = state_34939__$1;
(statearr_34948_34998[(2)] = inst_34935);

(statearr_34948_34998[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (21))){
var inst_34888 = (state_34939[(2)]);
var inst_34889 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34890 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34889);
var state_34939__$1 = (function (){var statearr_34949 = state_34939;
(statearr_34949[(7)] = inst_34888);

return statearr_34949;
})();
var statearr_34950_34999 = state_34939__$1;
(statearr_34950_34999[(2)] = inst_34890);

(statearr_34950_34999[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (31))){
var inst_34918 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34939__$1 = state_34939;
if(cljs.core.truth_(inst_34918)){
var statearr_34951_35000 = state_34939__$1;
(statearr_34951_35000[(1)] = (34));

} else {
var statearr_34952_35001 = state_34939__$1;
(statearr_34952_35001[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (32))){
var inst_34927 = (state_34939[(2)]);
var state_34939__$1 = state_34939;
var statearr_34953_35002 = state_34939__$1;
(statearr_34953_35002[(2)] = inst_34927);

(statearr_34953_35002[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (33))){
var inst_34914 = (state_34939[(2)]);
var inst_34915 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34916 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34915);
var state_34939__$1 = (function (){var statearr_34954 = state_34939;
(statearr_34954[(8)] = inst_34914);

return statearr_34954;
})();
var statearr_34955_35003 = state_34939__$1;
(statearr_34955_35003[(2)] = inst_34916);

(statearr_34955_35003[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (13))){
var inst_34873 = figwheel.client.heads_up.clear.call(null);
var state_34939__$1 = state_34939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34939__$1,(16),inst_34873);
} else {
if((state_val_34940 === (22))){
var inst_34894 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34895 = figwheel.client.heads_up.append_warning_message.call(null,inst_34894);
var state_34939__$1 = state_34939;
var statearr_34956_35004 = state_34939__$1;
(statearr_34956_35004[(2)] = inst_34895);

(statearr_34956_35004[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (36))){
var inst_34925 = (state_34939[(2)]);
var state_34939__$1 = state_34939;
var statearr_34957_35005 = state_34939__$1;
(statearr_34957_35005[(2)] = inst_34925);

(statearr_34957_35005[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (29))){
var inst_34905 = (state_34939[(2)]);
var inst_34906 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34907 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34906);
var state_34939__$1 = (function (){var statearr_34958 = state_34939;
(statearr_34958[(9)] = inst_34905);

return statearr_34958;
})();
var statearr_34959_35006 = state_34939__$1;
(statearr_34959_35006[(2)] = inst_34907);

(statearr_34959_35006[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (6))){
var inst_34854 = (state_34939[(10)]);
var state_34939__$1 = state_34939;
var statearr_34960_35007 = state_34939__$1;
(statearr_34960_35007[(2)] = inst_34854);

(statearr_34960_35007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (28))){
var inst_34901 = (state_34939[(2)]);
var inst_34902 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34903 = figwheel.client.heads_up.display_warning.call(null,inst_34902);
var state_34939__$1 = (function (){var statearr_34961 = state_34939;
(statearr_34961[(11)] = inst_34901);

return statearr_34961;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34939__$1,(29),inst_34903);
} else {
if((state_val_34940 === (25))){
var inst_34899 = figwheel.client.heads_up.clear.call(null);
var state_34939__$1 = state_34939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34939__$1,(28),inst_34899);
} else {
if((state_val_34940 === (34))){
var inst_34920 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34939__$1 = state_34939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34939__$1,(37),inst_34920);
} else {
if((state_val_34940 === (17))){
var inst_34879 = (state_34939[(2)]);
var inst_34880 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34881 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34880);
var state_34939__$1 = (function (){var statearr_34962 = state_34939;
(statearr_34962[(12)] = inst_34879);

return statearr_34962;
})();
var statearr_34963_35008 = state_34939__$1;
(statearr_34963_35008[(2)] = inst_34881);

(statearr_34963_35008[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (3))){
var inst_34871 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34939__$1 = state_34939;
if(cljs.core.truth_(inst_34871)){
var statearr_34964_35009 = state_34939__$1;
(statearr_34964_35009[(1)] = (13));

} else {
var statearr_34965_35010 = state_34939__$1;
(statearr_34965_35010[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (12))){
var inst_34867 = (state_34939[(2)]);
var state_34939__$1 = state_34939;
var statearr_34966_35011 = state_34939__$1;
(statearr_34966_35011[(2)] = inst_34867);

(statearr_34966_35011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (2))){
var inst_34854 = (state_34939[(10)]);
var inst_34854__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34939__$1 = (function (){var statearr_34967 = state_34939;
(statearr_34967[(10)] = inst_34854__$1);

return statearr_34967;
})();
if(cljs.core.truth_(inst_34854__$1)){
var statearr_34968_35012 = state_34939__$1;
(statearr_34968_35012[(1)] = (5));

} else {
var statearr_34969_35013 = state_34939__$1;
(statearr_34969_35013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (23))){
var inst_34897 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34939__$1 = state_34939;
if(cljs.core.truth_(inst_34897)){
var statearr_34970_35014 = state_34939__$1;
(statearr_34970_35014[(1)] = (25));

} else {
var statearr_34971_35015 = state_34939__$1;
(statearr_34971_35015[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (35))){
var state_34939__$1 = state_34939;
var statearr_34972_35016 = state_34939__$1;
(statearr_34972_35016[(2)] = null);

(statearr_34972_35016[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (19))){
var inst_34892 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34939__$1 = state_34939;
if(cljs.core.truth_(inst_34892)){
var statearr_34973_35017 = state_34939__$1;
(statearr_34973_35017[(1)] = (22));

} else {
var statearr_34974_35018 = state_34939__$1;
(statearr_34974_35018[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (11))){
var inst_34863 = (state_34939[(2)]);
var state_34939__$1 = state_34939;
var statearr_34975_35019 = state_34939__$1;
(statearr_34975_35019[(2)] = inst_34863);

(statearr_34975_35019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (9))){
var inst_34865 = figwheel.client.heads_up.clear.call(null);
var state_34939__$1 = state_34939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34939__$1,(12),inst_34865);
} else {
if((state_val_34940 === (5))){
var inst_34856 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34939__$1 = state_34939;
var statearr_34976_35020 = state_34939__$1;
(statearr_34976_35020[(2)] = inst_34856);

(statearr_34976_35020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (14))){
var inst_34883 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34939__$1 = state_34939;
if(cljs.core.truth_(inst_34883)){
var statearr_34977_35021 = state_34939__$1;
(statearr_34977_35021[(1)] = (18));

} else {
var statearr_34978_35022 = state_34939__$1;
(statearr_34978_35022[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (26))){
var inst_34909 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34939__$1 = state_34939;
if(cljs.core.truth_(inst_34909)){
var statearr_34979_35023 = state_34939__$1;
(statearr_34979_35023[(1)] = (30));

} else {
var statearr_34980_35024 = state_34939__$1;
(statearr_34980_35024[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (16))){
var inst_34875 = (state_34939[(2)]);
var inst_34876 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34877 = figwheel.client.heads_up.display_exception.call(null,inst_34876);
var state_34939__$1 = (function (){var statearr_34981 = state_34939;
(statearr_34981[(13)] = inst_34875);

return statearr_34981;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34939__$1,(17),inst_34877);
} else {
if((state_val_34940 === (30))){
var inst_34911 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34912 = figwheel.client.heads_up.display_warning.call(null,inst_34911);
var state_34939__$1 = state_34939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34939__$1,(33),inst_34912);
} else {
if((state_val_34940 === (10))){
var inst_34869 = (state_34939[(2)]);
var state_34939__$1 = state_34939;
var statearr_34982_35025 = state_34939__$1;
(statearr_34982_35025[(2)] = inst_34869);

(statearr_34982_35025[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (18))){
var inst_34885 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34886 = figwheel.client.heads_up.display_exception.call(null,inst_34885);
var state_34939__$1 = state_34939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34939__$1,(21),inst_34886);
} else {
if((state_val_34940 === (37))){
var inst_34922 = (state_34939[(2)]);
var state_34939__$1 = state_34939;
var statearr_34983_35026 = state_34939__$1;
(statearr_34983_35026[(2)] = inst_34922);

(statearr_34983_35026[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34940 === (8))){
var inst_34861 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34939__$1 = state_34939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34939__$1,(11),inst_34861);
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
});})(c__27023__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26911__auto__,c__27023__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26912__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26912__auto____0 = (function (){
var statearr_34987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34987[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26912__auto__);

(statearr_34987[(1)] = (1));

return statearr_34987;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26912__auto____1 = (function (state_34939){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_34939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e34988){if((e34988 instanceof Object)){
var ex__26915__auto__ = e34988;
var statearr_34989_35027 = state_34939;
(statearr_34989_35027[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35028 = state_34939;
state_34939 = G__35028;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26912__auto__ = function(state_34939){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26912__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26912__auto____1.call(this,state_34939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26912__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26912__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto__,msg_hist,msg_names,msg))
})();
var state__27025__auto__ = (function (){var statearr_34990 = f__27024__auto__.call(null);
(statearr_34990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto__);

return statearr_34990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto__,msg_hist,msg_names,msg))
);

return c__27023__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27023__auto___35091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___35091,ch){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto___35091,ch){
return (function (state_35074){
var state_val_35075 = (state_35074[(1)]);
if((state_val_35075 === (1))){
var state_35074__$1 = state_35074;
var statearr_35076_35092 = state_35074__$1;
(statearr_35076_35092[(2)] = null);

(statearr_35076_35092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35075 === (2))){
var state_35074__$1 = state_35074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35074__$1,(4),ch);
} else {
if((state_val_35075 === (3))){
var inst_35072 = (state_35074[(2)]);
var state_35074__$1 = state_35074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35074__$1,inst_35072);
} else {
if((state_val_35075 === (4))){
var inst_35062 = (state_35074[(7)]);
var inst_35062__$1 = (state_35074[(2)]);
var state_35074__$1 = (function (){var statearr_35077 = state_35074;
(statearr_35077[(7)] = inst_35062__$1);

return statearr_35077;
})();
if(cljs.core.truth_(inst_35062__$1)){
var statearr_35078_35093 = state_35074__$1;
(statearr_35078_35093[(1)] = (5));

} else {
var statearr_35079_35094 = state_35074__$1;
(statearr_35079_35094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35075 === (5))){
var inst_35062 = (state_35074[(7)]);
var inst_35064 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35062);
var state_35074__$1 = state_35074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35074__$1,(8),inst_35064);
} else {
if((state_val_35075 === (6))){
var state_35074__$1 = state_35074;
var statearr_35080_35095 = state_35074__$1;
(statearr_35080_35095[(2)] = null);

(statearr_35080_35095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35075 === (7))){
var inst_35070 = (state_35074[(2)]);
var state_35074__$1 = state_35074;
var statearr_35081_35096 = state_35074__$1;
(statearr_35081_35096[(2)] = inst_35070);

(statearr_35081_35096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35075 === (8))){
var inst_35066 = (state_35074[(2)]);
var state_35074__$1 = (function (){var statearr_35082 = state_35074;
(statearr_35082[(8)] = inst_35066);

return statearr_35082;
})();
var statearr_35083_35097 = state_35074__$1;
(statearr_35083_35097[(2)] = null);

(statearr_35083_35097[(1)] = (2));


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
});})(c__27023__auto___35091,ch))
;
return ((function (switch__26911__auto__,c__27023__auto___35091,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26912__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26912__auto____0 = (function (){
var statearr_35087 = [null,null,null,null,null,null,null,null,null];
(statearr_35087[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26912__auto__);

(statearr_35087[(1)] = (1));

return statearr_35087;
});
var figwheel$client$heads_up_plugin_$_state_machine__26912__auto____1 = (function (state_35074){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_35074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e35088){if((e35088 instanceof Object)){
var ex__26915__auto__ = e35088;
var statearr_35089_35098 = state_35074;
(statearr_35089_35098[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35099 = state_35074;
state_35074 = G__35099;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26912__auto__ = function(state_35074){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26912__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26912__auto____1.call(this,state_35074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26912__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26912__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto___35091,ch))
})();
var state__27025__auto__ = (function (){var statearr_35090 = f__27024__auto__.call(null);
(statearr_35090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto___35091);

return statearr_35090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___35091,ch))
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
var c__27023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto__){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto__){
return (function (state_35120){
var state_val_35121 = (state_35120[(1)]);
if((state_val_35121 === (1))){
var inst_35115 = cljs.core.async.timeout.call(null,(3000));
var state_35120__$1 = state_35120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35120__$1,(2),inst_35115);
} else {
if((state_val_35121 === (2))){
var inst_35117 = (state_35120[(2)]);
var inst_35118 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35120__$1 = (function (){var statearr_35122 = state_35120;
(statearr_35122[(7)] = inst_35117);

return statearr_35122;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35120__$1,inst_35118);
} else {
return null;
}
}
});})(c__27023__auto__))
;
return ((function (switch__26911__auto__,c__27023__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26912__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26912__auto____0 = (function (){
var statearr_35126 = [null,null,null,null,null,null,null,null];
(statearr_35126[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26912__auto__);

(statearr_35126[(1)] = (1));

return statearr_35126;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26912__auto____1 = (function (state_35120){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_35120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e35127){if((e35127 instanceof Object)){
var ex__26915__auto__ = e35127;
var statearr_35128_35130 = state_35120;
(statearr_35128_35130[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35131 = state_35120;
state_35120 = G__35131;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26912__auto__ = function(state_35120){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26912__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26912__auto____1.call(this,state_35120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26912__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26912__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto__))
})();
var state__27025__auto__ = (function (){var statearr_35129 = f__27024__auto__.call(null);
(statearr_35129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto__);

return statearr_35129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto__))
);

return c__27023__auto__;
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
var c__27023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35154){
var state_val_35155 = (state_35154[(1)]);
if((state_val_35155 === (1))){
var inst_35148 = cljs.core.async.timeout.call(null,(2000));
var state_35154__$1 = state_35154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35154__$1,(2),inst_35148);
} else {
if((state_val_35155 === (2))){
var inst_35150 = (state_35154[(2)]);
var inst_35151 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35152 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35151);
var state_35154__$1 = (function (){var statearr_35156 = state_35154;
(statearr_35156[(7)] = inst_35150);

return statearr_35156;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35154__$1,inst_35152);
} else {
return null;
}
}
});})(c__27023__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__26911__auto__,c__27023__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26912__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26912__auto____0 = (function (){
var statearr_35160 = [null,null,null,null,null,null,null,null];
(statearr_35160[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26912__auto__);

(statearr_35160[(1)] = (1));

return statearr_35160;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26912__auto____1 = (function (state_35154){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_35154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e35161){if((e35161 instanceof Object)){
var ex__26915__auto__ = e35161;
var statearr_35162_35164 = state_35154;
(statearr_35162_35164[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35165 = state_35154;
state_35154 = G__35165;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26912__auto__ = function(state_35154){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26912__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26912__auto____1.call(this,state_35154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26912__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26912__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27025__auto__ = (function (){var statearr_35163 = f__27024__auto__.call(null);
(statearr_35163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto__);

return statearr_35163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto__,figwheel_version,temp__4657__auto__))
);

return c__27023__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35166){
var map__35170 = p__35166;
var map__35170__$1 = ((((!((map__35170 == null)))?((((map__35170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35170):map__35170);
var file = cljs.core.get.call(null,map__35170__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35170__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35170__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35172 = "";
var G__35172__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35172),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35172);
var G__35172__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35172__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35172__$1);
if(cljs.core.truth_((function (){var and__24765__auto__ = line;
if(cljs.core.truth_(and__24765__auto__)){
return column;
} else {
return and__24765__auto__;
}
})())){
return [cljs.core.str(G__35172__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35172__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35173){
var map__35180 = p__35173;
var map__35180__$1 = ((((!((map__35180 == null)))?((((map__35180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35180):map__35180);
var ed = map__35180__$1;
var formatted_exception = cljs.core.get.call(null,map__35180__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35180__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35180__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35182_35186 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35183_35187 = null;
var count__35184_35188 = (0);
var i__35185_35189 = (0);
while(true){
if((i__35185_35189 < count__35184_35188)){
var msg_35190 = cljs.core._nth.call(null,chunk__35183_35187,i__35185_35189);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35190);

var G__35191 = seq__35182_35186;
var G__35192 = chunk__35183_35187;
var G__35193 = count__35184_35188;
var G__35194 = (i__35185_35189 + (1));
seq__35182_35186 = G__35191;
chunk__35183_35187 = G__35192;
count__35184_35188 = G__35193;
i__35185_35189 = G__35194;
continue;
} else {
var temp__4657__auto___35195 = cljs.core.seq.call(null,seq__35182_35186);
if(temp__4657__auto___35195){
var seq__35182_35196__$1 = temp__4657__auto___35195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35182_35196__$1)){
var c__25588__auto___35197 = cljs.core.chunk_first.call(null,seq__35182_35196__$1);
var G__35198 = cljs.core.chunk_rest.call(null,seq__35182_35196__$1);
var G__35199 = c__25588__auto___35197;
var G__35200 = cljs.core.count.call(null,c__25588__auto___35197);
var G__35201 = (0);
seq__35182_35186 = G__35198;
chunk__35183_35187 = G__35199;
count__35184_35188 = G__35200;
i__35185_35189 = G__35201;
continue;
} else {
var msg_35202 = cljs.core.first.call(null,seq__35182_35196__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35202);

var G__35203 = cljs.core.next.call(null,seq__35182_35196__$1);
var G__35204 = null;
var G__35205 = (0);
var G__35206 = (0);
seq__35182_35186 = G__35203;
chunk__35183_35187 = G__35204;
count__35184_35188 = G__35205;
i__35185_35189 = G__35206;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35207){
var map__35210 = p__35207;
var map__35210__$1 = ((((!((map__35210 == null)))?((((map__35210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35210):map__35210);
var w = map__35210__$1;
var message = cljs.core.get.call(null,map__35210__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__24765__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24765__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24765__auto__;
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
var seq__35222 = cljs.core.seq.call(null,plugins);
var chunk__35223 = null;
var count__35224 = (0);
var i__35225 = (0);
while(true){
if((i__35225 < count__35224)){
var vec__35226 = cljs.core._nth.call(null,chunk__35223,i__35225);
var k = cljs.core.nth.call(null,vec__35226,(0),null);
var plugin = cljs.core.nth.call(null,vec__35226,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35232 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35222,chunk__35223,count__35224,i__35225,pl_35232,vec__35226,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35232.call(null,msg_hist);
});})(seq__35222,chunk__35223,count__35224,i__35225,pl_35232,vec__35226,k,plugin))
);
} else {
}

var G__35233 = seq__35222;
var G__35234 = chunk__35223;
var G__35235 = count__35224;
var G__35236 = (i__35225 + (1));
seq__35222 = G__35233;
chunk__35223 = G__35234;
count__35224 = G__35235;
i__35225 = G__35236;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35222);
if(temp__4657__auto__){
var seq__35222__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35222__$1)){
var c__25588__auto__ = cljs.core.chunk_first.call(null,seq__35222__$1);
var G__35237 = cljs.core.chunk_rest.call(null,seq__35222__$1);
var G__35238 = c__25588__auto__;
var G__35239 = cljs.core.count.call(null,c__25588__auto__);
var G__35240 = (0);
seq__35222 = G__35237;
chunk__35223 = G__35238;
count__35224 = G__35239;
i__35225 = G__35240;
continue;
} else {
var vec__35229 = cljs.core.first.call(null,seq__35222__$1);
var k = cljs.core.nth.call(null,vec__35229,(0),null);
var plugin = cljs.core.nth.call(null,vec__35229,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35241 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35222,chunk__35223,count__35224,i__35225,pl_35241,vec__35229,k,plugin,seq__35222__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35241.call(null,msg_hist);
});})(seq__35222,chunk__35223,count__35224,i__35225,pl_35241,vec__35229,k,plugin,seq__35222__$1,temp__4657__auto__))
);
} else {
}

var G__35242 = cljs.core.next.call(null,seq__35222__$1);
var G__35243 = null;
var G__35244 = (0);
var G__35245 = (0);
seq__35222 = G__35242;
chunk__35223 = G__35243;
count__35224 = G__35244;
i__35225 = G__35245;
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
var args35246 = [];
var len__25852__auto___35253 = arguments.length;
var i__25853__auto___35254 = (0);
while(true){
if((i__25853__auto___35254 < len__25852__auto___35253)){
args35246.push((arguments[i__25853__auto___35254]));

var G__35255 = (i__25853__auto___35254 + (1));
i__25853__auto___35254 = G__35255;
continue;
} else {
}
break;
}

var G__35248 = args35246.length;
switch (G__35248) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35246.length)].join('')));

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

var seq__35249_35257 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35250_35258 = null;
var count__35251_35259 = (0);
var i__35252_35260 = (0);
while(true){
if((i__35252_35260 < count__35251_35259)){
var msg_35261 = cljs.core._nth.call(null,chunk__35250_35258,i__35252_35260);
figwheel.client.socket.handle_incoming_message.call(null,msg_35261);

var G__35262 = seq__35249_35257;
var G__35263 = chunk__35250_35258;
var G__35264 = count__35251_35259;
var G__35265 = (i__35252_35260 + (1));
seq__35249_35257 = G__35262;
chunk__35250_35258 = G__35263;
count__35251_35259 = G__35264;
i__35252_35260 = G__35265;
continue;
} else {
var temp__4657__auto___35266 = cljs.core.seq.call(null,seq__35249_35257);
if(temp__4657__auto___35266){
var seq__35249_35267__$1 = temp__4657__auto___35266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35249_35267__$1)){
var c__25588__auto___35268 = cljs.core.chunk_first.call(null,seq__35249_35267__$1);
var G__35269 = cljs.core.chunk_rest.call(null,seq__35249_35267__$1);
var G__35270 = c__25588__auto___35268;
var G__35271 = cljs.core.count.call(null,c__25588__auto___35268);
var G__35272 = (0);
seq__35249_35257 = G__35269;
chunk__35250_35258 = G__35270;
count__35251_35259 = G__35271;
i__35252_35260 = G__35272;
continue;
} else {
var msg_35273 = cljs.core.first.call(null,seq__35249_35267__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35273);

var G__35274 = cljs.core.next.call(null,seq__35249_35267__$1);
var G__35275 = null;
var G__35276 = (0);
var G__35277 = (0);
seq__35249_35257 = G__35274;
chunk__35250_35258 = G__35275;
count__35251_35259 = G__35276;
i__35252_35260 = G__35277;
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
var args__25859__auto__ = [];
var len__25852__auto___35282 = arguments.length;
var i__25853__auto___35283 = (0);
while(true){
if((i__25853__auto___35283 < len__25852__auto___35282)){
args__25859__auto__.push((arguments[i__25853__auto___35283]));

var G__35284 = (i__25853__auto___35283 + (1));
i__25853__auto___35283 = G__35284;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((0) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25860__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35279){
var map__35280 = p__35279;
var map__35280__$1 = ((((!((map__35280 == null)))?((((map__35280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35280):map__35280);
var opts = map__35280__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35278){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35278));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35286){if((e35286 instanceof Error)){
var e = e35286;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35286;

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
return (function (p__35290){
var map__35291 = p__35290;
var map__35291__$1 = ((((!((map__35291 == null)))?((((map__35291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35291):map__35291);
var msg_name = cljs.core.get.call(null,map__35291__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1485355889610