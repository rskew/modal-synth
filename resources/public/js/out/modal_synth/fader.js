// Compiled by ClojureScript 1.9.229 {}
goog.provide('modal_synth.fader');
goog.require('cljs.core');
goog.require('modal_synth.utils');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('cljs.core.async');
goog.require('dommy.core');
modal_synth.fader.bandpass_min_bandwidth = 0.0;
if(typeof modal_synth.fader.draw !== 'undefined'){
} else {
modal_synth.fader.draw = (function (){var method_table__25726__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25727__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25728__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25729__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25730__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"modal-synth.fader","draw"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25730__auto__,method_table__25726__auto__,prefer_table__25727__auto__,method_cache__25728__auto__,cached_hierarchy__25729__auto__));
})();
}
modal_synth.fader.draw_standard = (function modal_synth$fader$draw_standard(fader){
var fader_width = dommy.core.px.call(null,new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(fader),new cljs.core.Keyword(null,"width","width",-384071477));
var handle_pos = (cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(fader)) * fader_width);
dommy.core.set_style_BANG_.call(null,new cljs.core.Keyword(null,"bar","bar",-1386246584).cljs$core$IFn$_invoke$arity$1(fader),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(handle_pos),cljs.core.str("px")].join(''));

return dommy.core.set_style_BANG_.call(null,new cljs.core.Keyword(null,"handle","handle",1538948854).cljs$core$IFn$_invoke$arity$1(fader),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str((handle_pos + (1))),cljs.core.str("px")].join(''));
});
cljs.core._add_method.call(null,modal_synth.fader.draw,new cljs.core.Keyword(null,"Gain","Gain",-983157825),(function (fader){
return modal_synth.fader.draw_standard.call(null,fader);
}));
cljs.core._add_method.call(null,modal_synth.fader.draw,new cljs.core.Keyword(null,"Delay","Delay",1697640197),(function (fader){
return modal_synth.fader.draw_standard.call(null,fader);
}));
cljs.core._add_method.call(null,modal_synth.fader.draw,new cljs.core.Keyword(null,"Bandpass","Bandpass",-2105196290),(function (bp){
var fader_width = dommy.core.px.call(null,new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.Keyword(null,"width","width",-384071477));
var handle_width = dommy.core.px.call(null,new cljs.core.Keyword(null,"handle-highpass","handle-highpass",-797863762).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.Keyword(null,"width","width",-384071477));
var handle_highpass_pos = (cljs.core.deref.call(null,new cljs.core.Keyword(null,"state-highpass","state-highpass",1777216902).cljs$core$IFn$_invoke$arity$1(bp)) * fader_width);
var handle_lowpass_pos = (cljs.core.deref.call(null,new cljs.core.Keyword(null,"state-lowpass","state-lowpass",838292240).cljs$core$IFn$_invoke$arity$1(bp)) * fader_width);
var bar_left = ((handle_highpass_pos + handle_width) + (1));
var bar_right = (handle_lowpass_pos - (1));
dommy.core.set_style_BANG_.call(null,new cljs.core.Keyword(null,"handle-highpass","handle-highpass",-797863762).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str(handle_highpass_pos),cljs.core.str("px")].join(''));

dommy.core.set_style_BANG_.call(null,new cljs.core.Keyword(null,"handle-lowpass","handle-lowpass",2009375751).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str(handle_lowpass_pos),cljs.core.str("px")].join(''));

return dommy.core.set_style_BANG_.call(null,new cljs.core.Keyword(null,"bar","bar",-1386246584).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str(bar_left),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str((bar_right - bar_left)),cljs.core.str("px")].join(''));
}));
/**
 * Make closure to calculate the amount the fader should move
 *   due to the change in mouse pos
 */
modal_synth.fader.make_drag_scaler = (function modal_synth$fader$make_drag_scaler(state,click_event){
var click_x = click_event.clientX;
var fader_width = dommy.core.px.call(null,document.getElementById("channel1"),new cljs.core.Keyword(null,"width","width",-384071477));
var old_val = cljs.core.deref.call(null,state);
return ((function (click_x,fader_width,old_val){
return (function (move_event){
var move_x = move_event.clientX;
var level_moved = ((move_x - click_x) / fader_width);
var level = (old_val + level_moved);
if((level >= (1))){
return (1);
} else {
if((level <= (0))){
return (0);
} else {
return level;

}
}
});
;})(click_x,fader_width,old_val))
});
/**
 * Handler for mouse events relating to an element
 */
modal_synth.fader.mouse_control_BANG_ = (function modal_synth$fader$mouse_control_BANG_(var_args){
var args__25883__auto__ = [];
var len__25876__auto___36516 = arguments.length;
var i__25877__auto___36517 = (0);
while(true){
if((i__25877__auto___36517 < len__25876__auto___36516)){
args__25883__auto__.push((arguments[i__25877__auto___36517]));

var G__36518 = (i__25877__auto___36517 + (1));
i__25877__auto___36517 = G__36518;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((2) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((2)),(0),null)):null);
return modal_synth.fader.mouse_control_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25884__auto__);
});

modal_synth.fader.mouse_control_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (element,state,p__36390){
var map__36391 = p__36390;
var map__36391__$1 = ((((!((map__36391 == null)))?((((map__36391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36391):map__36391);
var mousedown_func = cljs.core.get.call(null,map__36391__$1,new cljs.core.Keyword(null,"mousedown-func","mousedown-func",-563610940));
var mouseup_func = cljs.core.get.call(null,map__36391__$1,new cljs.core.Keyword(null,"mouseup-func","mouseup-func",1423081267));
var mousemove_func = cljs.core.get.call(null,map__36391__$1,new cljs.core.Keyword(null,"mousemove-func","mousemove-func",1572367312));
var mousedown_chan = modal_synth.utils.listen.call(null,element,"mousedown");
var c__26973__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto__,mousedown_chan,map__36391,map__36391__$1,mousedown_func,mouseup_func,mousemove_func){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto__,mousedown_chan,map__36391,map__36391__$1,mousedown_func,mouseup_func,mousemove_func){
return (function (state_36468){
var state_val_36469 = (state_36468[(1)]);
if((state_val_36469 === (7))){
var inst_36396 = (state_36468[(2)]);
var state_36468__$1 = (function (){var statearr_36470 = state_36468;
(statearr_36470[(7)] = inst_36396);

return statearr_36470;
})();
if(cljs.core.truth_(mousedown_func)){
var statearr_36471_36519 = state_36468__$1;
(statearr_36471_36519[(1)] = (8));

} else {
var statearr_36472_36520 = state_36468__$1;
(statearr_36472_36520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36469 === (20))){
var state_36468__$1 = state_36468;
if(cljs.core.truth_(mouseup_func)){
var statearr_36473_36521 = state_36468__$1;
(statearr_36473_36521[(1)] = (23));

} else {
var statearr_36474_36522 = state_36468__$1;
(statearr_36474_36522[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36469 === (27))){
var state_36468__$1 = state_36468;
var statearr_36475_36523 = state_36468__$1;
(statearr_36475_36523[(2)] = null);

(statearr_36475_36523[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36469 === (1))){
var state_36468__$1 = state_36468;
var statearr_36476_36524 = state_36468__$1;
(statearr_36476_36524[(2)] = null);

(statearr_36476_36524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36469 === (24))){
var state_36468__$1 = state_36468;
var statearr_36477_36525 = state_36468__$1;
(statearr_36477_36525[(2)] = null);

(statearr_36477_36525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36469 === (4))){
var state_36468__$1 = state_36468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36468__$1,(7),mousedown_chan);
} else {
if((state_val_36469 === (15))){
var inst_36403 = (state_36468[(8)]);
var inst_36420 = (state_36468[(9)]);
var inst_36436 = cljs.core._EQ_.call(null,inst_36420,inst_36403);
var state_36468__$1 = state_36468;
if(inst_36436){
var statearr_36478_36526 = state_36468__$1;
(statearr_36478_36526[(1)] = (20));

} else {
var statearr_36479_36527 = state_36468__$1;
(statearr_36479_36527[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36469 === (21))){
var inst_36420 = (state_36468[(9)]);
var inst_36450 = cljs.core._EQ_.call(null,inst_36420,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_36468__$1 = state_36468;
if(inst_36450){
var statearr_36480_36528 = state_36468__$1;
(statearr_36480_36528[(1)] = (26));

} else {
var statearr_36481_36529 = state_36468__$1;
(statearr_36481_36529[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36469 === (13))){
var inst_36418 = (state_36468[(10)]);
var inst_36420 = (state_36468[(9)]);
var inst_36402 = (state_36468[(11)]);
var inst_36418__$1 = (state_36468[(2)]);
var inst_36419 = cljs.core.nth.call(null,inst_36418__$1,(0),null);
var inst_36420__$1 = cljs.core.nth.call(null,inst_36418__$1,(1),null);
var inst_36421 = cljs.core._EQ_.call(null,inst_36420__$1,inst_36402);
var state_36468__$1 = (function (){var statearr_36482 = state_36468;
(statearr_36482[(10)] = inst_36418__$1);

(statearr_36482[(9)] = inst_36420__$1);

(statearr_36482[(12)] = inst_36419);

return statearr_36482;
})();
if(inst_36421){
var statearr_36483_36530 = state_36468__$1;
(statearr_36483_36530[(1)] = (14));

} else {
var statearr_36484_36531 = state_36468__$1;
(statearr_36484_36531[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36469 === (22))){
var inst_36456 = (state_36468[(2)]);
var state_36468__$1 = state_36468;
var statearr_36485_36532 = state_36468__$1;
(statearr_36485_36532[(2)] = inst_36456);

(statearr_36485_36532[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36469 === (6))){
var inst_36464 = (state_36468[(2)]);
var state_36468__$1 = state_36468;
var statearr_36486_36533 = state_36468__$1;
(statearr_36486_36533[(2)] = inst_36464);

(statearr_36486_36533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36469 === (28))){
var inst_36454 = (state_36468[(2)]);
var state_36468__$1 = state_36468;
var statearr_36487_36534 = state_36468__$1;
(statearr_36487_36534[(2)] = inst_36454);

(statearr_36487_36534[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36469 === (25))){
var inst_36403 = (state_36468[(8)]);
var inst_36402 = (state_36468[(11)]);
var inst_36445 = (state_36468[(2)]);
var inst_36446 = cljs.core.async.close_BANG_.call(null,inst_36403);
var inst_36447 = cljs.core.async.close_BANG_.call(null,inst_36402);
var inst_36448 = dommy.core.set_style_BANG_.call(null,element,new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer");
var state_36468__$1 = (function (){var statearr_36488 = state_36468;
(statearr_36488[(13)] = inst_36445);

(statearr_36488[(14)] = inst_36447);

(statearr_36488[(15)] = inst_36446);

return statearr_36488;
})();
var statearr_36489_36535 = state_36468__$1;
(statearr_36489_36535[(2)] = inst_36448);

(statearr_36489_36535[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36469 === (17))){
var inst_36428 = mousemove_func.call(null,element,state);
var state_36468__$1 = state_36468;
var statearr_36490_36536 = state_36468__$1;
(statearr_36490_36536[(2)] = inst_36428);

(statearr_36490_36536[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36469 === (3))){
var inst_36466 = (state_36468[(2)]);
var state_36468__$1 = state_36468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36468__$1,inst_36466);
} else {
if((state_val_36469 === (12))){
var inst_36460 = (state_36468[(2)]);
var state_36468__$1 = (function (){var statearr_36491 = state_36468;
(statearr_36491[(16)] = inst_36460);

return statearr_36491;
})();
var statearr_36492_36537 = state_36468__$1;
(statearr_36492_36537[(2)] = null);

(statearr_36492_36537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36469 === (2))){
var state_36468__$1 = state_36468;
var statearr_36493_36538 = state_36468__$1;
(statearr_36493_36538[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36469 === (23))){
var inst_36442 = mouseup_func.call(null,element,state);
var state_36468__$1 = state_36468;
var statearr_36495_36539 = state_36468__$1;
(statearr_36495_36539[(2)] = inst_36442);

(statearr_36495_36539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36469 === (19))){
var inst_36426 = (state_36468[(17)]);
var inst_36404 = (state_36468[(18)]);
var inst_36431 = (state_36468[(2)]);
var inst_36432 = inst_36404.call(null,inst_36426);
var inst_36433 = cljs.core.reset_BANG_.call(null,state,inst_36432);
var state_36468__$1 = (function (){var statearr_36496 = state_36468;
(statearr_36496[(19)] = inst_36433);

(statearr_36496[(20)] = inst_36431);

return statearr_36496;
})();
var statearr_36497_36540 = state_36468__$1;
(statearr_36497_36540[(2)] = null);

(statearr_36497_36540[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36469 === (11))){
var inst_36403 = (state_36468[(8)]);
var inst_36402 = (state_36468[(11)]);
var inst_36414 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36415 = [inst_36402,inst_36403];
var inst_36416 = (new cljs.core.PersistentVector(null,2,(5),inst_36414,inst_36415,null));
var state_36468__$1 = state_36468;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36468__$1,(13),inst_36416);
} else {
if((state_val_36469 === (9))){
var state_36468__$1 = state_36468;
var statearr_36498_36541 = state_36468__$1;
(statearr_36498_36541[(2)] = null);

(statearr_36498_36541[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36469 === (5))){
var state_36468__$1 = state_36468;
var statearr_36499_36542 = state_36468__$1;
(statearr_36499_36542[(2)] = null);

(statearr_36499_36542[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36469 === (14))){
var inst_36418 = (state_36468[(10)]);
var inst_36426 = cljs.core.nth.call(null,inst_36418,(0),null);
var state_36468__$1 = (function (){var statearr_36500 = state_36468;
(statearr_36500[(17)] = inst_36426);

return statearr_36500;
})();
if(cljs.core.truth_(mousemove_func)){
var statearr_36501_36543 = state_36468__$1;
(statearr_36501_36543[(1)] = (17));

} else {
var statearr_36502_36544 = state_36468__$1;
(statearr_36502_36544[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36469 === (26))){
var inst_36419 = (state_36468[(12)]);
var state_36468__$1 = state_36468;
var statearr_36503_36545 = state_36468__$1;
(statearr_36503_36545[(2)] = inst_36419);

(statearr_36503_36545[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36469 === (16))){
var inst_36458 = (state_36468[(2)]);
var state_36468__$1 = state_36468;
var statearr_36504_36546 = state_36468__$1;
(statearr_36504_36546[(2)] = inst_36458);

(statearr_36504_36546[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36469 === (10))){
var inst_36396 = (state_36468[(7)]);
var inst_36401 = (state_36468[(2)]);
var inst_36402 = modal_synth.utils.listen.call(null,window,"mousemove");
var inst_36403 = modal_synth.utils.listen.call(null,document,"mouseup");
var inst_36404 = modal_synth.fader.make_drag_scaler.call(null,state,inst_36396);
var inst_36405 = dommy.core.set_style_BANG_.call(null,element,new cljs.core.Keyword(null,"cursor","cursor",1011937484),"move");
var state_36468__$1 = (function (){var statearr_36505 = state_36468;
(statearr_36505[(8)] = inst_36403);

(statearr_36505[(21)] = inst_36405);

(statearr_36505[(18)] = inst_36404);

(statearr_36505[(11)] = inst_36402);

(statearr_36505[(22)] = inst_36401);

return statearr_36505;
})();
var statearr_36506_36547 = state_36468__$1;
(statearr_36506_36547[(2)] = null);

(statearr_36506_36547[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36469 === (18))){
var state_36468__$1 = state_36468;
var statearr_36507_36548 = state_36468__$1;
(statearr_36507_36548[(2)] = null);

(statearr_36507_36548[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36469 === (8))){
var inst_36398 = mousedown_func.call(null,element,state);
var state_36468__$1 = state_36468;
var statearr_36508_36549 = state_36468__$1;
(statearr_36508_36549[(2)] = inst_36398);

(statearr_36508_36549[(1)] = (10));


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
});})(c__26973__auto__,mousedown_chan,map__36391,map__36391__$1,mousedown_func,mouseup_func,mousemove_func))
;
return ((function (switch__26861__auto__,c__26973__auto__,mousedown_chan,map__36391,map__36391__$1,mousedown_func,mouseup_func,mousemove_func){
return (function() {
var modal_synth$fader$state_machine__26862__auto__ = null;
var modal_synth$fader$state_machine__26862__auto____0 = (function (){
var statearr_36512 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36512[(0)] = modal_synth$fader$state_machine__26862__auto__);

(statearr_36512[(1)] = (1));

return statearr_36512;
});
var modal_synth$fader$state_machine__26862__auto____1 = (function (state_36468){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_36468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e36513){if((e36513 instanceof Object)){
var ex__26865__auto__ = e36513;
var statearr_36514_36550 = state_36468;
(statearr_36514_36550[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36551 = state_36468;
state_36468 = G__36551;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
modal_synth$fader$state_machine__26862__auto__ = function(state_36468){
switch(arguments.length){
case 0:
return modal_synth$fader$state_machine__26862__auto____0.call(this);
case 1:
return modal_synth$fader$state_machine__26862__auto____1.call(this,state_36468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modal_synth$fader$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = modal_synth$fader$state_machine__26862__auto____0;
modal_synth$fader$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = modal_synth$fader$state_machine__26862__auto____1;
return modal_synth$fader$state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto__,mousedown_chan,map__36391,map__36391__$1,mousedown_func,mouseup_func,mousemove_func))
})();
var state__26975__auto__ = (function (){var statearr_36515 = f__26974__auto__.call(null);
(statearr_36515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto__);

return statearr_36515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto__,mousedown_chan,map__36391,map__36391__$1,mousedown_func,mouseup_func,mousemove_func))
);

return c__26973__auto__;
});

modal_synth.fader.mouse_control_BANG_.cljs$lang$maxFixedArity = (2);

modal_synth.fader.mouse_control_BANG_.cljs$lang$applyTo = (function (seq36387){
var G__36388 = cljs.core.first.call(null,seq36387);
var seq36387__$1 = cljs.core.next.call(null,seq36387);
var G__36389 = cljs.core.first.call(null,seq36387__$1);
var seq36387__$2 = cljs.core.next.call(null,seq36387__$1);
return modal_synth.fader.mouse_control_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36388,G__36389,seq36387__$2);
});

/**
 * re-draw the faders whenever the state is updated,
 *   by mouse or by automation
 */
modal_synth.fader.init_BANG_ = (function modal_synth$fader$init_BANG_(fader){
cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(fader),new cljs.core.Keyword(null,"draw-watcher","draw-watcher",1889384452),(function (key,atom,old_state,new_state){
return modal_synth.fader.draw.call(null,fader);
}));

modal_synth.fader.mouse_control_BANG_.call(null,new cljs.core.Keyword(null,"handle","handle",1538948854).cljs$core$IFn$_invoke$arity$1(fader),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(fader));

dommy.core.set_class_BANG_.call(null,new cljs.core.Keyword(null,"bar","bar",-1386246584).cljs$core$IFn$_invoke$arity$1(fader),[cljs.core.str(dommy.core.class$.call(null,new cljs.core.Keyword(null,"bar","bar",-1386246584).cljs$core$IFn$_invoke$arity$1(fader))),cljs.core.str(" audio-fader")].join(''));

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(fader),cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(fader)));
});
modal_synth.fader.init_cycle_BANG_ = (function modal_synth$fader$init_cycle_BANG_(fader){
cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(fader),new cljs.core.Keyword(null,"draw-watcher","draw-watcher",1889384452),(function (key,atom,old_state,new_state){
return modal_synth.fader.draw.call(null,fader);
}));

dommy.core.set_class_BANG_.call(null,new cljs.core.Keyword(null,"bar","bar",-1386246584).cljs$core$IFn$_invoke$arity$1(fader),[cljs.core.str(dommy.core.class$.call(null,new cljs.core.Keyword(null,"bar","bar",-1386246584).cljs$core$IFn$_invoke$arity$1(fader))),cljs.core.str(" cycle-fader")].join(''));

dommy.core.set_style_BANG_.call(null,new cljs.core.Keyword(null,"bar","bar",-1386246584).cljs$core$IFn$_invoke$arity$1(fader),new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(0,0,0,0.3)");

return dommy.core.set_style_BANG_.call(null,new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(fader),new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden");
});
modal_synth.fader.create = (function modal_synth$fader$create(fader_state,fader_type){
var box = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var bar = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var handle = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var fader = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",-1988618099),fader_state,new cljs.core.Keyword(null,"chan","chan",-2103021695),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"box","box",1530920394),box,new cljs.core.Keyword(null,"bar","bar",-1386246584),bar,new cljs.core.Keyword(null,"handle","handle",1538948854),handle,new cljs.core.Keyword(null,"type","type",1174270348),fader_type], null);
dommy.core.set_class_BANG_.call(null,box,"slider box");

dommy.core.set_class_BANG_.call(null,bar,"slider-bar");

dommy.core.set_class_BANG_.call(null,handle,"slider-handle");

dommy.core.set_attr_BANG_.call(null,box,new cljs.core.Keyword(null,"ondragover","ondragover",1004915919),"event.preventDefault()");

dommy.core.append_BANG_.call(null,box,bar);

dommy.core.append_BANG_.call(null,box,handle);

return fader;
});
/**
 * re-draw the faders whenever the state is updated,
 *   by mouse or by automation
 */
modal_synth.fader.init_bandpass_BANG_ = (function modal_synth$fader$init_bandpass_BANG_(bp){
cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"state-highpass","state-highpass",1777216902).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.Keyword(null,"draw-watcher","draw-watcher",1889384452),(function (key,atom,old_state,new_state){
return modal_synth.fader.draw.call(null,bp);
}));

cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"state-lowpass","state-lowpass",838292240).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.Keyword(null,"draw-watcher","draw-watcher",1889384452),(function (key,atom,old_state,new_state){
return modal_synth.fader.draw.call(null,bp);
}));

var c__26973__auto___36732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto___36732){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto___36732){
return (function (state_36666){
var state_val_36667 = (state_36666[(1)]);
if((state_val_36667 === (7))){
var inst_36649 = (state_36666[(7)]);
var inst_36646 = (state_36666[(8)]);
var inst_36646__$1 = (state_36666[(2)]);
var inst_36647 = new cljs.core.Keyword(null,"state-lowpass","state-lowpass",838292240).cljs$core$IFn$_invoke$arity$1(bp);
var inst_36648 = cljs.core.deref.call(null,inst_36647);
var inst_36649__$1 = (inst_36648 - modal_synth.fader.bandpass_min_bandwidth);
var inst_36650 = (inst_36646__$1 < inst_36649__$1);
var state_36666__$1 = (function (){var statearr_36668 = state_36666;
(statearr_36668[(7)] = inst_36649__$1);

(statearr_36668[(8)] = inst_36646__$1);

return statearr_36668;
})();
if(cljs.core.truth_(inst_36650)){
var statearr_36669_36733 = state_36666__$1;
(statearr_36669_36733[(1)] = (8));

} else {
var statearr_36670_36734 = state_36666__$1;
(statearr_36670_36734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (1))){
var state_36666__$1 = state_36666;
var statearr_36671_36735 = state_36666__$1;
(statearr_36671_36735[(2)] = null);

(statearr_36671_36735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (4))){
var inst_36644 = new cljs.core.Keyword(null,"chan-highpass","chan-highpass",-2095911059).cljs$core$IFn$_invoke$arity$1(bp);
var state_36666__$1 = state_36666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36666__$1,(7),inst_36644);
} else {
if((state_val_36667 === (6))){
var inst_36662 = (state_36666[(2)]);
var state_36666__$1 = state_36666;
var statearr_36672_36736 = state_36666__$1;
(statearr_36672_36736[(2)] = inst_36662);

(statearr_36672_36736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (3))){
var inst_36664 = (state_36666[(2)]);
var state_36666__$1 = state_36666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36666__$1,inst_36664);
} else {
if((state_val_36667 === (2))){
var state_36666__$1 = state_36666;
var statearr_36673_36737 = state_36666__$1;
(statearr_36673_36737[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (9))){
var inst_36649 = (state_36666[(7)]);
var inst_36655 = new cljs.core.Keyword(null,"state-highpass","state-highpass",1777216902).cljs$core$IFn$_invoke$arity$1(bp);
var inst_36656 = cljs.core.reset_BANG_.call(null,inst_36655,inst_36649);
var state_36666__$1 = state_36666;
var statearr_36675_36738 = state_36666__$1;
(statearr_36675_36738[(2)] = inst_36656);

(statearr_36675_36738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (5))){
var state_36666__$1 = state_36666;
var statearr_36676_36739 = state_36666__$1;
(statearr_36676_36739[(2)] = null);

(statearr_36676_36739[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (10))){
var inst_36658 = (state_36666[(2)]);
var state_36666__$1 = (function (){var statearr_36677 = state_36666;
(statearr_36677[(9)] = inst_36658);

return statearr_36677;
})();
var statearr_36678_36740 = state_36666__$1;
(statearr_36678_36740[(2)] = null);

(statearr_36678_36740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36667 === (8))){
var inst_36646 = (state_36666[(8)]);
var inst_36652 = new cljs.core.Keyword(null,"state-highpass","state-highpass",1777216902).cljs$core$IFn$_invoke$arity$1(bp);
var inst_36653 = cljs.core.reset_BANG_.call(null,inst_36652,inst_36646);
var state_36666__$1 = state_36666;
var statearr_36679_36741 = state_36666__$1;
(statearr_36679_36741[(2)] = inst_36653);

(statearr_36679_36741[(1)] = (10));


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
});})(c__26973__auto___36732))
;
return ((function (switch__26861__auto__,c__26973__auto___36732){
return (function() {
var modal_synth$fader$init_bandpass_BANG__$_state_machine__26862__auto__ = null;
var modal_synth$fader$init_bandpass_BANG__$_state_machine__26862__auto____0 = (function (){
var statearr_36683 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36683[(0)] = modal_synth$fader$init_bandpass_BANG__$_state_machine__26862__auto__);

(statearr_36683[(1)] = (1));

return statearr_36683;
});
var modal_synth$fader$init_bandpass_BANG__$_state_machine__26862__auto____1 = (function (state_36666){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_36666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e36684){if((e36684 instanceof Object)){
var ex__26865__auto__ = e36684;
var statearr_36685_36742 = state_36666;
(statearr_36685_36742[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36743 = state_36666;
state_36666 = G__36743;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
modal_synth$fader$init_bandpass_BANG__$_state_machine__26862__auto__ = function(state_36666){
switch(arguments.length){
case 0:
return modal_synth$fader$init_bandpass_BANG__$_state_machine__26862__auto____0.call(this);
case 1:
return modal_synth$fader$init_bandpass_BANG__$_state_machine__26862__auto____1.call(this,state_36666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modal_synth$fader$init_bandpass_BANG__$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = modal_synth$fader$init_bandpass_BANG__$_state_machine__26862__auto____0;
modal_synth$fader$init_bandpass_BANG__$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = modal_synth$fader$init_bandpass_BANG__$_state_machine__26862__auto____1;
return modal_synth$fader$init_bandpass_BANG__$_state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto___36732))
})();
var state__26975__auto__ = (function (){var statearr_36686 = f__26974__auto__.call(null);
(statearr_36686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto___36732);

return statearr_36686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto___36732))
);


var c__26973__auto___36744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto___36744){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto___36744){
return (function (state_36711){
var state_val_36712 = (state_36711[(1)]);
if((state_val_36712 === (7))){
var inst_36691 = (state_36711[(7)]);
var inst_36694 = (state_36711[(8)]);
var inst_36691__$1 = (state_36711[(2)]);
var inst_36692 = new cljs.core.Keyword(null,"state-highpass","state-highpass",1777216902).cljs$core$IFn$_invoke$arity$1(bp);
var inst_36693 = cljs.core.deref.call(null,inst_36692);
var inst_36694__$1 = (inst_36693 + modal_synth.fader.bandpass_min_bandwidth);
var inst_36695 = (inst_36691__$1 > inst_36694__$1);
var state_36711__$1 = (function (){var statearr_36713 = state_36711;
(statearr_36713[(7)] = inst_36691__$1);

(statearr_36713[(8)] = inst_36694__$1);

return statearr_36713;
})();
if(cljs.core.truth_(inst_36695)){
var statearr_36714_36745 = state_36711__$1;
(statearr_36714_36745[(1)] = (8));

} else {
var statearr_36715_36746 = state_36711__$1;
(statearr_36715_36746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (1))){
var state_36711__$1 = state_36711;
var statearr_36716_36747 = state_36711__$1;
(statearr_36716_36747[(2)] = null);

(statearr_36716_36747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (4))){
var inst_36689 = new cljs.core.Keyword(null,"chan-lowpass","chan-lowpass",-1804822836).cljs$core$IFn$_invoke$arity$1(bp);
var state_36711__$1 = state_36711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36711__$1,(7),inst_36689);
} else {
if((state_val_36712 === (6))){
var inst_36707 = (state_36711[(2)]);
var state_36711__$1 = state_36711;
var statearr_36717_36748 = state_36711__$1;
(statearr_36717_36748[(2)] = inst_36707);

(statearr_36717_36748[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (3))){
var inst_36709 = (state_36711[(2)]);
var state_36711__$1 = state_36711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36711__$1,inst_36709);
} else {
if((state_val_36712 === (2))){
var state_36711__$1 = state_36711;
var statearr_36718_36749 = state_36711__$1;
(statearr_36718_36749[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (9))){
var inst_36694 = (state_36711[(8)]);
var inst_36700 = new cljs.core.Keyword(null,"state-lowpass","state-lowpass",838292240).cljs$core$IFn$_invoke$arity$1(bp);
var inst_36701 = cljs.core.reset_BANG_.call(null,inst_36700,inst_36694);
var state_36711__$1 = state_36711;
var statearr_36720_36750 = state_36711__$1;
(statearr_36720_36750[(2)] = inst_36701);

(statearr_36720_36750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (5))){
var state_36711__$1 = state_36711;
var statearr_36721_36751 = state_36711__$1;
(statearr_36721_36751[(2)] = null);

(statearr_36721_36751[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (10))){
var inst_36703 = (state_36711[(2)]);
var state_36711__$1 = (function (){var statearr_36722 = state_36711;
(statearr_36722[(9)] = inst_36703);

return statearr_36722;
})();
var statearr_36723_36752 = state_36711__$1;
(statearr_36723_36752[(2)] = null);

(statearr_36723_36752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (8))){
var inst_36691 = (state_36711[(7)]);
var inst_36697 = new cljs.core.Keyword(null,"state-lowpass","state-lowpass",838292240).cljs$core$IFn$_invoke$arity$1(bp);
var inst_36698 = cljs.core.reset_BANG_.call(null,inst_36697,inst_36691);
var state_36711__$1 = state_36711;
var statearr_36724_36753 = state_36711__$1;
(statearr_36724_36753[(2)] = inst_36698);

(statearr_36724_36753[(1)] = (10));


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
});})(c__26973__auto___36744))
;
return ((function (switch__26861__auto__,c__26973__auto___36744){
return (function() {
var modal_synth$fader$init_bandpass_BANG__$_state_machine__26862__auto__ = null;
var modal_synth$fader$init_bandpass_BANG__$_state_machine__26862__auto____0 = (function (){
var statearr_36728 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36728[(0)] = modal_synth$fader$init_bandpass_BANG__$_state_machine__26862__auto__);

(statearr_36728[(1)] = (1));

return statearr_36728;
});
var modal_synth$fader$init_bandpass_BANG__$_state_machine__26862__auto____1 = (function (state_36711){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_36711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e36729){if((e36729 instanceof Object)){
var ex__26865__auto__ = e36729;
var statearr_36730_36754 = state_36711;
(statearr_36730_36754[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36755 = state_36711;
state_36711 = G__36755;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
modal_synth$fader$init_bandpass_BANG__$_state_machine__26862__auto__ = function(state_36711){
switch(arguments.length){
case 0:
return modal_synth$fader$init_bandpass_BANG__$_state_machine__26862__auto____0.call(this);
case 1:
return modal_synth$fader$init_bandpass_BANG__$_state_machine__26862__auto____1.call(this,state_36711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modal_synth$fader$init_bandpass_BANG__$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = modal_synth$fader$init_bandpass_BANG__$_state_machine__26862__auto____0;
modal_synth$fader$init_bandpass_BANG__$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = modal_synth$fader$init_bandpass_BANG__$_state_machine__26862__auto____1;
return modal_synth$fader$init_bandpass_BANG__$_state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto___36744))
})();
var state__26975__auto__ = (function (){var statearr_36731 = f__26974__auto__.call(null);
(statearr_36731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto___36744);

return statearr_36731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto___36744))
);


modal_synth.fader.mouse_control_BANG_.call(null,new cljs.core.Keyword(null,"handle-highpass","handle-highpass",-797863762).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.Keyword(null,"state-highpass","state-highpass",1777216902).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.Keyword(null,"chan-highpass","chan-highpass",-2095911059).cljs$core$IFn$_invoke$arity$1(bp));

modal_synth.fader.mouse_control_BANG_.call(null,new cljs.core.Keyword(null,"handle-lowpass","handle-lowpass",2009375751).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.Keyword(null,"state-lowpass","state-lowpass",838292240).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.Keyword(null,"chan-lowpass","chan-lowpass",-1804822836).cljs$core$IFn$_invoke$arity$1(bp));

modal_synth.fader.mouse_control_BANG_.call(null,new cljs.core.Keyword(null,"bar","bar",-1386246584).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.Keyword(null,"state-highpass","state-highpass",1777216902).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.Keyword(null,"chan-highpass","chan-highpass",-2095911059).cljs$core$IFn$_invoke$arity$1(bp));

modal_synth.fader.mouse_control_BANG_.call(null,new cljs.core.Keyword(null,"bar","bar",-1386246584).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.Keyword(null,"state-lowpass","state-lowpass",838292240).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.Keyword(null,"chan-lowpass","chan-lowpass",-1804822836).cljs$core$IFn$_invoke$arity$1(bp));

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state-highpass","state-highpass",1777216902).cljs$core$IFn$_invoke$arity$1(bp),cljs.core.deref.call(null,new cljs.core.Keyword(null,"state-highpass","state-highpass",1777216902).cljs$core$IFn$_invoke$arity$1(bp)));

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state-lowpass","state-lowpass",838292240).cljs$core$IFn$_invoke$arity$1(bp),cljs.core.deref.call(null,new cljs.core.Keyword(null,"state-lowpass","state-lowpass",838292240).cljs$core$IFn$_invoke$arity$1(bp)));
});
modal_synth.fader.create_bandpass = (function modal_synth$fader$create_bandpass(state_highpass,state_lowpass){
var box = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var bar = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var bar_upper = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var bar_lower = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var handle_highpass = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var handle_highpass_vert = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var handle_highpass_horiz = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var handle_lowpass = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var handle_lowpass_vert = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var handle_lowpass_horiz = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var receive_chan_highpass = cljs.core.async.chan.call(null);
var receive_chan_lowpass = cljs.core.async.chan.call(null);
var bp = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"state-highpass","state-highpass",1777216902),new cljs.core.Keyword(null,"handle-lowpass","handle-lowpass",2009375751),new cljs.core.Keyword(null,"bar","bar",-1386246584),new cljs.core.Keyword(null,"box","box",1530920394),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"chan-lowpass","chan-lowpass",-1804822836),new cljs.core.Keyword(null,"chan-highpass","chan-highpass",-2095911059),new cljs.core.Keyword(null,"handle-highpass","handle-highpass",-797863762),new cljs.core.Keyword(null,"state-lowpass","state-lowpass",838292240)],[state_highpass,handle_lowpass,bar,box,new cljs.core.Keyword(null,"Bandpass","Bandpass",-2105196290),receive_chan_lowpass,receive_chan_highpass,handle_highpass,state_lowpass]);
dommy.core.set_class_BANG_.call(null,box,"bandpass box");

dommy.core.set_class_BANG_.call(null,bar,"bandpass-bar");

dommy.core.set_class_BANG_.call(null,bar_upper,"bandpass-bar-upper");

dommy.core.set_class_BANG_.call(null,bar_lower,"bandpass-bar-lower");

dommy.core.set_class_BANG_.call(null,handle_highpass,"bandpass-handle-highpass");

dommy.core.set_class_BANG_.call(null,handle_highpass_vert,"bandpass-handle-highpass-vert");

dommy.core.set_class_BANG_.call(null,handle_highpass_horiz,"bandpass-handle-highpass-horiz");

dommy.core.set_class_BANG_.call(null,handle_lowpass,"bandpass-handle-lowpass");

dommy.core.set_class_BANG_.call(null,handle_lowpass_vert,"bandpass-handle-lowpass-vert");

dommy.core.set_class_BANG_.call(null,handle_lowpass_horiz,"bandpass-handle-lowpass-horiz");

dommy.core.append_BANG_.call(null,box,bar);

dommy.core.append_BANG_.call(null,bar,bar_upper);

dommy.core.append_BANG_.call(null,bar,bar_lower);

dommy.core.append_BANG_.call(null,box,handle_highpass);

dommy.core.append_BANG_.call(null,handle_highpass,handle_highpass_vert);

dommy.core.append_BANG_.call(null,handle_highpass,handle_highpass_horiz);

dommy.core.append_BANG_.call(null,box,handle_lowpass);

dommy.core.append_BANG_.call(null,handle_lowpass,handle_lowpass_vert);

dommy.core.append_BANG_.call(null,handle_lowpass,handle_lowpass_horiz);

return bp;
});

//# sourceMappingURL=fader.js.map?rel=1516956393483