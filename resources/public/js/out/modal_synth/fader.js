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
var len__25876__auto___27273 = arguments.length;
var i__25877__auto___27274 = (0);
while(true){
if((i__25877__auto___27274 < len__25876__auto___27273)){
args__25883__auto__.push((arguments[i__25877__auto___27274]));

var G__27275 = (i__25877__auto___27274 + (1));
i__25877__auto___27274 = G__27275;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((2) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((2)),(0),null)):null);
return modal_synth.fader.mouse_control_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25884__auto__);
});

modal_synth.fader.mouse_control_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (element,state,p__27147){
var map__27148 = p__27147;
var map__27148__$1 = ((((!((map__27148 == null)))?((((map__27148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27148):map__27148);
var mousedown_func = cljs.core.get.call(null,map__27148__$1,new cljs.core.Keyword(null,"mousedown-func","mousedown-func",-563610940));
var mouseup_func = cljs.core.get.call(null,map__27148__$1,new cljs.core.Keyword(null,"mouseup-func","mouseup-func",1423081267));
var mousemove_func = cljs.core.get.call(null,map__27148__$1,new cljs.core.Keyword(null,"mousemove-func","mousemove-func",1572367312));
var mousedown_chan = modal_synth.utils.listen.call(null,element,"mousedown");
var c__26831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26831__auto__,mousedown_chan,map__27148,map__27148__$1,mousedown_func,mouseup_func,mousemove_func){
return (function (){
var f__26832__auto__ = (function (){var switch__26810__auto__ = ((function (c__26831__auto__,mousedown_chan,map__27148,map__27148__$1,mousedown_func,mouseup_func,mousemove_func){
return (function (state_27225){
var state_val_27226 = (state_27225[(1)]);
if((state_val_27226 === (7))){
var inst_27153 = (state_27225[(2)]);
var state_27225__$1 = (function (){var statearr_27227 = state_27225;
(statearr_27227[(7)] = inst_27153);

return statearr_27227;
})();
if(cljs.core.truth_(mousedown_func)){
var statearr_27228_27276 = state_27225__$1;
(statearr_27228_27276[(1)] = (8));

} else {
var statearr_27229_27277 = state_27225__$1;
(statearr_27229_27277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (20))){
var state_27225__$1 = state_27225;
if(cljs.core.truth_(mouseup_func)){
var statearr_27230_27278 = state_27225__$1;
(statearr_27230_27278[(1)] = (23));

} else {
var statearr_27231_27279 = state_27225__$1;
(statearr_27231_27279[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (27))){
var state_27225__$1 = state_27225;
var statearr_27232_27280 = state_27225__$1;
(statearr_27232_27280[(2)] = null);

(statearr_27232_27280[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (1))){
var state_27225__$1 = state_27225;
var statearr_27233_27281 = state_27225__$1;
(statearr_27233_27281[(2)] = null);

(statearr_27233_27281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (24))){
var state_27225__$1 = state_27225;
var statearr_27234_27282 = state_27225__$1;
(statearr_27234_27282[(2)] = null);

(statearr_27234_27282[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (4))){
var state_27225__$1 = state_27225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27225__$1,(7),mousedown_chan);
} else {
if((state_val_27226 === (15))){
var inst_27160 = (state_27225[(8)]);
var inst_27177 = (state_27225[(9)]);
var inst_27193 = cljs.core._EQ_.call(null,inst_27177,inst_27160);
var state_27225__$1 = state_27225;
if(inst_27193){
var statearr_27235_27283 = state_27225__$1;
(statearr_27235_27283[(1)] = (20));

} else {
var statearr_27236_27284 = state_27225__$1;
(statearr_27236_27284[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (21))){
var inst_27177 = (state_27225[(9)]);
var inst_27207 = cljs.core._EQ_.call(null,inst_27177,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_27225__$1 = state_27225;
if(inst_27207){
var statearr_27237_27285 = state_27225__$1;
(statearr_27237_27285[(1)] = (26));

} else {
var statearr_27238_27286 = state_27225__$1;
(statearr_27238_27286[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (13))){
var inst_27175 = (state_27225[(10)]);
var inst_27159 = (state_27225[(11)]);
var inst_27177 = (state_27225[(9)]);
var inst_27175__$1 = (state_27225[(2)]);
var inst_27176 = cljs.core.nth.call(null,inst_27175__$1,(0),null);
var inst_27177__$1 = cljs.core.nth.call(null,inst_27175__$1,(1),null);
var inst_27178 = cljs.core._EQ_.call(null,inst_27177__$1,inst_27159);
var state_27225__$1 = (function (){var statearr_27239 = state_27225;
(statearr_27239[(10)] = inst_27175__$1);

(statearr_27239[(12)] = inst_27176);

(statearr_27239[(9)] = inst_27177__$1);

return statearr_27239;
})();
if(inst_27178){
var statearr_27240_27287 = state_27225__$1;
(statearr_27240_27287[(1)] = (14));

} else {
var statearr_27241_27288 = state_27225__$1;
(statearr_27241_27288[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (22))){
var inst_27213 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
var statearr_27242_27289 = state_27225__$1;
(statearr_27242_27289[(2)] = inst_27213);

(statearr_27242_27289[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (6))){
var inst_27221 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
var statearr_27243_27290 = state_27225__$1;
(statearr_27243_27290[(2)] = inst_27221);

(statearr_27243_27290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (28))){
var inst_27211 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
var statearr_27244_27291 = state_27225__$1;
(statearr_27244_27291[(2)] = inst_27211);

(statearr_27244_27291[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (25))){
var inst_27160 = (state_27225[(8)]);
var inst_27159 = (state_27225[(11)]);
var inst_27202 = (state_27225[(2)]);
var inst_27203 = cljs.core.async.close_BANG_.call(null,inst_27160);
var inst_27204 = cljs.core.async.close_BANG_.call(null,inst_27159);
var inst_27205 = dommy.core.set_style_BANG_.call(null,element,new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer");
var state_27225__$1 = (function (){var statearr_27245 = state_27225;
(statearr_27245[(13)] = inst_27202);

(statearr_27245[(14)] = inst_27203);

(statearr_27245[(15)] = inst_27204);

return statearr_27245;
})();
var statearr_27246_27292 = state_27225__$1;
(statearr_27246_27292[(2)] = inst_27205);

(statearr_27246_27292[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (17))){
var inst_27185 = mousemove_func.call(null,element,state);
var state_27225__$1 = state_27225;
var statearr_27247_27293 = state_27225__$1;
(statearr_27247_27293[(2)] = inst_27185);

(statearr_27247_27293[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (3))){
var inst_27223 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27225__$1,inst_27223);
} else {
if((state_val_27226 === (12))){
var inst_27217 = (state_27225[(2)]);
var state_27225__$1 = (function (){var statearr_27248 = state_27225;
(statearr_27248[(16)] = inst_27217);

return statearr_27248;
})();
var statearr_27249_27294 = state_27225__$1;
(statearr_27249_27294[(2)] = null);

(statearr_27249_27294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (2))){
var state_27225__$1 = state_27225;
var statearr_27250_27295 = state_27225__$1;
(statearr_27250_27295[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (23))){
var inst_27199 = mouseup_func.call(null,element,state);
var state_27225__$1 = state_27225;
var statearr_27252_27296 = state_27225__$1;
(statearr_27252_27296[(2)] = inst_27199);

(statearr_27252_27296[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (19))){
var inst_27161 = (state_27225[(17)]);
var inst_27183 = (state_27225[(18)]);
var inst_27188 = (state_27225[(2)]);
var inst_27189 = inst_27161.call(null,inst_27183);
var inst_27190 = cljs.core.reset_BANG_.call(null,state,inst_27189);
var state_27225__$1 = (function (){var statearr_27253 = state_27225;
(statearr_27253[(19)] = inst_27190);

(statearr_27253[(20)] = inst_27188);

return statearr_27253;
})();
var statearr_27254_27297 = state_27225__$1;
(statearr_27254_27297[(2)] = null);

(statearr_27254_27297[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (11))){
var inst_27160 = (state_27225[(8)]);
var inst_27159 = (state_27225[(11)]);
var inst_27171 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27172 = [inst_27159,inst_27160];
var inst_27173 = (new cljs.core.PersistentVector(null,2,(5),inst_27171,inst_27172,null));
var state_27225__$1 = state_27225;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27225__$1,(13),inst_27173);
} else {
if((state_val_27226 === (9))){
var state_27225__$1 = state_27225;
var statearr_27255_27298 = state_27225__$1;
(statearr_27255_27298[(2)] = null);

(statearr_27255_27298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (5))){
var state_27225__$1 = state_27225;
var statearr_27256_27299 = state_27225__$1;
(statearr_27256_27299[(2)] = null);

(statearr_27256_27299[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (14))){
var inst_27175 = (state_27225[(10)]);
var inst_27183 = cljs.core.nth.call(null,inst_27175,(0),null);
var state_27225__$1 = (function (){var statearr_27257 = state_27225;
(statearr_27257[(18)] = inst_27183);

return statearr_27257;
})();
if(cljs.core.truth_(mousemove_func)){
var statearr_27258_27300 = state_27225__$1;
(statearr_27258_27300[(1)] = (17));

} else {
var statearr_27259_27301 = state_27225__$1;
(statearr_27259_27301[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (26))){
var inst_27176 = (state_27225[(12)]);
var state_27225__$1 = state_27225;
var statearr_27260_27302 = state_27225__$1;
(statearr_27260_27302[(2)] = inst_27176);

(statearr_27260_27302[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (16))){
var inst_27215 = (state_27225[(2)]);
var state_27225__$1 = state_27225;
var statearr_27261_27303 = state_27225__$1;
(statearr_27261_27303[(2)] = inst_27215);

(statearr_27261_27303[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (10))){
var inst_27153 = (state_27225[(7)]);
var inst_27158 = (state_27225[(2)]);
var inst_27159 = modal_synth.utils.listen.call(null,window,"mousemove");
var inst_27160 = modal_synth.utils.listen.call(null,document,"mouseup");
var inst_27161 = modal_synth.fader.make_drag_scaler.call(null,state,inst_27153);
var inst_27162 = dommy.core.set_style_BANG_.call(null,element,new cljs.core.Keyword(null,"cursor","cursor",1011937484),"move");
var state_27225__$1 = (function (){var statearr_27262 = state_27225;
(statearr_27262[(8)] = inst_27160);

(statearr_27262[(21)] = inst_27162);

(statearr_27262[(22)] = inst_27158);

(statearr_27262[(17)] = inst_27161);

(statearr_27262[(11)] = inst_27159);

return statearr_27262;
})();
var statearr_27263_27304 = state_27225__$1;
(statearr_27263_27304[(2)] = null);

(statearr_27263_27304[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (18))){
var state_27225__$1 = state_27225;
var statearr_27264_27305 = state_27225__$1;
(statearr_27264_27305[(2)] = null);

(statearr_27264_27305[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27226 === (8))){
var inst_27155 = mousedown_func.call(null,element,state);
var state_27225__$1 = state_27225;
var statearr_27265_27306 = state_27225__$1;
(statearr_27265_27306[(2)] = inst_27155);

(statearr_27265_27306[(1)] = (10));


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
});})(c__26831__auto__,mousedown_chan,map__27148,map__27148__$1,mousedown_func,mouseup_func,mousemove_func))
;
return ((function (switch__26810__auto__,c__26831__auto__,mousedown_chan,map__27148,map__27148__$1,mousedown_func,mouseup_func,mousemove_func){
return (function() {
var modal_synth$fader$state_machine__26811__auto__ = null;
var modal_synth$fader$state_machine__26811__auto____0 = (function (){
var statearr_27269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27269[(0)] = modal_synth$fader$state_machine__26811__auto__);

(statearr_27269[(1)] = (1));

return statearr_27269;
});
var modal_synth$fader$state_machine__26811__auto____1 = (function (state_27225){
while(true){
var ret_value__26812__auto__ = (function (){try{while(true){
var result__26813__auto__ = switch__26810__auto__.call(null,state_27225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26813__auto__;
}
break;
}
}catch (e27270){if((e27270 instanceof Object)){
var ex__26814__auto__ = e27270;
var statearr_27271_27307 = state_27225;
(statearr_27271_27307[(5)] = ex__26814__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27308 = state_27225;
state_27225 = G__27308;
continue;
} else {
return ret_value__26812__auto__;
}
break;
}
});
modal_synth$fader$state_machine__26811__auto__ = function(state_27225){
switch(arguments.length){
case 0:
return modal_synth$fader$state_machine__26811__auto____0.call(this);
case 1:
return modal_synth$fader$state_machine__26811__auto____1.call(this,state_27225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modal_synth$fader$state_machine__26811__auto__.cljs$core$IFn$_invoke$arity$0 = modal_synth$fader$state_machine__26811__auto____0;
modal_synth$fader$state_machine__26811__auto__.cljs$core$IFn$_invoke$arity$1 = modal_synth$fader$state_machine__26811__auto____1;
return modal_synth$fader$state_machine__26811__auto__;
})()
;})(switch__26810__auto__,c__26831__auto__,mousedown_chan,map__27148,map__27148__$1,mousedown_func,mouseup_func,mousemove_func))
})();
var state__26833__auto__ = (function (){var statearr_27272 = f__26832__auto__.call(null);
(statearr_27272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26831__auto__);

return statearr_27272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26833__auto__);
});})(c__26831__auto__,mousedown_chan,map__27148,map__27148__$1,mousedown_func,mouseup_func,mousemove_func))
);

return c__26831__auto__;
});

modal_synth.fader.mouse_control_BANG_.cljs$lang$maxFixedArity = (2);

modal_synth.fader.mouse_control_BANG_.cljs$lang$applyTo = (function (seq27144){
var G__27145 = cljs.core.first.call(null,seq27144);
var seq27144__$1 = cljs.core.next.call(null,seq27144);
var G__27146 = cljs.core.first.call(null,seq27144__$1);
var seq27144__$2 = cljs.core.next.call(null,seq27144__$1);
return modal_synth.fader.mouse_control_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27145,G__27146,seq27144__$2);
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

var c__26831__auto___27489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26831__auto___27489){
return (function (){
var f__26832__auto__ = (function (){var switch__26810__auto__ = ((function (c__26831__auto___27489){
return (function (state_27423){
var state_val_27424 = (state_27423[(1)]);
if((state_val_27424 === (7))){
var inst_27403 = (state_27423[(7)]);
var inst_27406 = (state_27423[(8)]);
var inst_27403__$1 = (state_27423[(2)]);
var inst_27404 = new cljs.core.Keyword(null,"state-lowpass","state-lowpass",838292240).cljs$core$IFn$_invoke$arity$1(bp);
var inst_27405 = cljs.core.deref.call(null,inst_27404);
var inst_27406__$1 = (inst_27405 - modal_synth.fader.bandpass_min_bandwidth);
var inst_27407 = (inst_27403__$1 < inst_27406__$1);
var state_27423__$1 = (function (){var statearr_27425 = state_27423;
(statearr_27425[(7)] = inst_27403__$1);

(statearr_27425[(8)] = inst_27406__$1);

return statearr_27425;
})();
if(cljs.core.truth_(inst_27407)){
var statearr_27426_27490 = state_27423__$1;
(statearr_27426_27490[(1)] = (8));

} else {
var statearr_27427_27491 = state_27423__$1;
(statearr_27427_27491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27424 === (1))){
var state_27423__$1 = state_27423;
var statearr_27428_27492 = state_27423__$1;
(statearr_27428_27492[(2)] = null);

(statearr_27428_27492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27424 === (4))){
var inst_27401 = new cljs.core.Keyword(null,"chan-highpass","chan-highpass",-2095911059).cljs$core$IFn$_invoke$arity$1(bp);
var state_27423__$1 = state_27423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27423__$1,(7),inst_27401);
} else {
if((state_val_27424 === (6))){
var inst_27419 = (state_27423[(2)]);
var state_27423__$1 = state_27423;
var statearr_27429_27493 = state_27423__$1;
(statearr_27429_27493[(2)] = inst_27419);

(statearr_27429_27493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27424 === (3))){
var inst_27421 = (state_27423[(2)]);
var state_27423__$1 = state_27423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27423__$1,inst_27421);
} else {
if((state_val_27424 === (2))){
var state_27423__$1 = state_27423;
var statearr_27430_27494 = state_27423__$1;
(statearr_27430_27494[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27424 === (9))){
var inst_27406 = (state_27423[(8)]);
var inst_27412 = new cljs.core.Keyword(null,"state-highpass","state-highpass",1777216902).cljs$core$IFn$_invoke$arity$1(bp);
var inst_27413 = cljs.core.reset_BANG_.call(null,inst_27412,inst_27406);
var state_27423__$1 = state_27423;
var statearr_27432_27495 = state_27423__$1;
(statearr_27432_27495[(2)] = inst_27413);

(statearr_27432_27495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27424 === (5))){
var state_27423__$1 = state_27423;
var statearr_27433_27496 = state_27423__$1;
(statearr_27433_27496[(2)] = null);

(statearr_27433_27496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27424 === (10))){
var inst_27415 = (state_27423[(2)]);
var state_27423__$1 = (function (){var statearr_27434 = state_27423;
(statearr_27434[(9)] = inst_27415);

return statearr_27434;
})();
var statearr_27435_27497 = state_27423__$1;
(statearr_27435_27497[(2)] = null);

(statearr_27435_27497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27424 === (8))){
var inst_27403 = (state_27423[(7)]);
var inst_27409 = new cljs.core.Keyword(null,"state-highpass","state-highpass",1777216902).cljs$core$IFn$_invoke$arity$1(bp);
var inst_27410 = cljs.core.reset_BANG_.call(null,inst_27409,inst_27403);
var state_27423__$1 = state_27423;
var statearr_27436_27498 = state_27423__$1;
(statearr_27436_27498[(2)] = inst_27410);

(statearr_27436_27498[(1)] = (10));


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
});})(c__26831__auto___27489))
;
return ((function (switch__26810__auto__,c__26831__auto___27489){
return (function() {
var modal_synth$fader$init_bandpass_BANG__$_state_machine__26811__auto__ = null;
var modal_synth$fader$init_bandpass_BANG__$_state_machine__26811__auto____0 = (function (){
var statearr_27440 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27440[(0)] = modal_synth$fader$init_bandpass_BANG__$_state_machine__26811__auto__);

(statearr_27440[(1)] = (1));

return statearr_27440;
});
var modal_synth$fader$init_bandpass_BANG__$_state_machine__26811__auto____1 = (function (state_27423){
while(true){
var ret_value__26812__auto__ = (function (){try{while(true){
var result__26813__auto__ = switch__26810__auto__.call(null,state_27423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26813__auto__;
}
break;
}
}catch (e27441){if((e27441 instanceof Object)){
var ex__26814__auto__ = e27441;
var statearr_27442_27499 = state_27423;
(statearr_27442_27499[(5)] = ex__26814__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27500 = state_27423;
state_27423 = G__27500;
continue;
} else {
return ret_value__26812__auto__;
}
break;
}
});
modal_synth$fader$init_bandpass_BANG__$_state_machine__26811__auto__ = function(state_27423){
switch(arguments.length){
case 0:
return modal_synth$fader$init_bandpass_BANG__$_state_machine__26811__auto____0.call(this);
case 1:
return modal_synth$fader$init_bandpass_BANG__$_state_machine__26811__auto____1.call(this,state_27423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modal_synth$fader$init_bandpass_BANG__$_state_machine__26811__auto__.cljs$core$IFn$_invoke$arity$0 = modal_synth$fader$init_bandpass_BANG__$_state_machine__26811__auto____0;
modal_synth$fader$init_bandpass_BANG__$_state_machine__26811__auto__.cljs$core$IFn$_invoke$arity$1 = modal_synth$fader$init_bandpass_BANG__$_state_machine__26811__auto____1;
return modal_synth$fader$init_bandpass_BANG__$_state_machine__26811__auto__;
})()
;})(switch__26810__auto__,c__26831__auto___27489))
})();
var state__26833__auto__ = (function (){var statearr_27443 = f__26832__auto__.call(null);
(statearr_27443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26831__auto___27489);

return statearr_27443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26833__auto__);
});})(c__26831__auto___27489))
);


var c__26831__auto___27501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26831__auto___27501){
return (function (){
var f__26832__auto__ = (function (){var switch__26810__auto__ = ((function (c__26831__auto___27501){
return (function (state_27468){
var state_val_27469 = (state_27468[(1)]);
if((state_val_27469 === (7))){
var inst_27451 = (state_27468[(7)]);
var inst_27448 = (state_27468[(8)]);
var inst_27448__$1 = (state_27468[(2)]);
var inst_27449 = new cljs.core.Keyword(null,"state-highpass","state-highpass",1777216902).cljs$core$IFn$_invoke$arity$1(bp);
var inst_27450 = cljs.core.deref.call(null,inst_27449);
var inst_27451__$1 = (inst_27450 + modal_synth.fader.bandpass_min_bandwidth);
var inst_27452 = (inst_27448__$1 > inst_27451__$1);
var state_27468__$1 = (function (){var statearr_27470 = state_27468;
(statearr_27470[(7)] = inst_27451__$1);

(statearr_27470[(8)] = inst_27448__$1);

return statearr_27470;
})();
if(cljs.core.truth_(inst_27452)){
var statearr_27471_27502 = state_27468__$1;
(statearr_27471_27502[(1)] = (8));

} else {
var statearr_27472_27503 = state_27468__$1;
(statearr_27472_27503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (1))){
var state_27468__$1 = state_27468;
var statearr_27473_27504 = state_27468__$1;
(statearr_27473_27504[(2)] = null);

(statearr_27473_27504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (4))){
var inst_27446 = new cljs.core.Keyword(null,"chan-lowpass","chan-lowpass",-1804822836).cljs$core$IFn$_invoke$arity$1(bp);
var state_27468__$1 = state_27468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27468__$1,(7),inst_27446);
} else {
if((state_val_27469 === (6))){
var inst_27464 = (state_27468[(2)]);
var state_27468__$1 = state_27468;
var statearr_27474_27505 = state_27468__$1;
(statearr_27474_27505[(2)] = inst_27464);

(statearr_27474_27505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (3))){
var inst_27466 = (state_27468[(2)]);
var state_27468__$1 = state_27468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27468__$1,inst_27466);
} else {
if((state_val_27469 === (2))){
var state_27468__$1 = state_27468;
var statearr_27475_27506 = state_27468__$1;
(statearr_27475_27506[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (9))){
var inst_27451 = (state_27468[(7)]);
var inst_27457 = new cljs.core.Keyword(null,"state-lowpass","state-lowpass",838292240).cljs$core$IFn$_invoke$arity$1(bp);
var inst_27458 = cljs.core.reset_BANG_.call(null,inst_27457,inst_27451);
var state_27468__$1 = state_27468;
var statearr_27477_27507 = state_27468__$1;
(statearr_27477_27507[(2)] = inst_27458);

(statearr_27477_27507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (5))){
var state_27468__$1 = state_27468;
var statearr_27478_27508 = state_27468__$1;
(statearr_27478_27508[(2)] = null);

(statearr_27478_27508[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (10))){
var inst_27460 = (state_27468[(2)]);
var state_27468__$1 = (function (){var statearr_27479 = state_27468;
(statearr_27479[(9)] = inst_27460);

return statearr_27479;
})();
var statearr_27480_27509 = state_27468__$1;
(statearr_27480_27509[(2)] = null);

(statearr_27480_27509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (8))){
var inst_27448 = (state_27468[(8)]);
var inst_27454 = new cljs.core.Keyword(null,"state-lowpass","state-lowpass",838292240).cljs$core$IFn$_invoke$arity$1(bp);
var inst_27455 = cljs.core.reset_BANG_.call(null,inst_27454,inst_27448);
var state_27468__$1 = state_27468;
var statearr_27481_27510 = state_27468__$1;
(statearr_27481_27510[(2)] = inst_27455);

(statearr_27481_27510[(1)] = (10));


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
});})(c__26831__auto___27501))
;
return ((function (switch__26810__auto__,c__26831__auto___27501){
return (function() {
var modal_synth$fader$init_bandpass_BANG__$_state_machine__26811__auto__ = null;
var modal_synth$fader$init_bandpass_BANG__$_state_machine__26811__auto____0 = (function (){
var statearr_27485 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27485[(0)] = modal_synth$fader$init_bandpass_BANG__$_state_machine__26811__auto__);

(statearr_27485[(1)] = (1));

return statearr_27485;
});
var modal_synth$fader$init_bandpass_BANG__$_state_machine__26811__auto____1 = (function (state_27468){
while(true){
var ret_value__26812__auto__ = (function (){try{while(true){
var result__26813__auto__ = switch__26810__auto__.call(null,state_27468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26813__auto__;
}
break;
}
}catch (e27486){if((e27486 instanceof Object)){
var ex__26814__auto__ = e27486;
var statearr_27487_27511 = state_27468;
(statearr_27487_27511[(5)] = ex__26814__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27512 = state_27468;
state_27468 = G__27512;
continue;
} else {
return ret_value__26812__auto__;
}
break;
}
});
modal_synth$fader$init_bandpass_BANG__$_state_machine__26811__auto__ = function(state_27468){
switch(arguments.length){
case 0:
return modal_synth$fader$init_bandpass_BANG__$_state_machine__26811__auto____0.call(this);
case 1:
return modal_synth$fader$init_bandpass_BANG__$_state_machine__26811__auto____1.call(this,state_27468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modal_synth$fader$init_bandpass_BANG__$_state_machine__26811__auto__.cljs$core$IFn$_invoke$arity$0 = modal_synth$fader$init_bandpass_BANG__$_state_machine__26811__auto____0;
modal_synth$fader$init_bandpass_BANG__$_state_machine__26811__auto__.cljs$core$IFn$_invoke$arity$1 = modal_synth$fader$init_bandpass_BANG__$_state_machine__26811__auto____1;
return modal_synth$fader$init_bandpass_BANG__$_state_machine__26811__auto__;
})()
;})(switch__26810__auto__,c__26831__auto___27501))
})();
var state__26833__auto__ = (function (){var statearr_27488 = f__26832__auto__.call(null);
(statearr_27488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26831__auto___27501);

return statearr_27488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26833__auto__);
});})(c__26831__auto___27501))
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

//# sourceMappingURL=fader.js.map?rel=1517065384867