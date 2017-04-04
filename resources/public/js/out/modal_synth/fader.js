// Compiled by ClojureScript 1.9.229 {}
goog.provide('modal_synth.fader');
goog.require('cljs.core');
goog.require('modal_synth.utils');
goog.require('modal_synth.layout');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('cljs.core.async');
goog.require('dommy.core');
modal_synth.fader.bandpass_min_bandwidth = 0.0;
if(typeof modal_synth.fader.draw !== 'undefined'){
} else {
modal_synth.fader.draw = (function (){var method_table__25702__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25703__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25705__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25706__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"modal-synth.fader","draw"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25706__auto__,method_table__25702__auto__,prefer_table__25703__auto__,method_cache__25704__auto__,cached_hierarchy__25705__auto__));
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
modal_synth.fader.mouse_control = (function modal_synth$fader$mouse_control(element,state,chan){

var mousedown_chan = modal_synth.utils.listen.call(null,element,"mousedown");
var c__27957__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27957__auto__,mousedown_chan){
return (function (){
var f__27958__auto__ = (function (){var switch__27892__auto__ = ((function (c__27957__auto__,mousedown_chan){
return (function (state_38907){
var state_val_38908 = (state_38907[(1)]);
if((state_val_38908 === (7))){
var inst_38849 = (state_38907[(2)]);
var inst_38850 = modal_synth.utils.listen.call(null,window,"mousemove");
var inst_38851 = modal_synth.utils.listen.call(null,document,"mouseup");
var inst_38852 = modal_synth.fader.make_drag_scaler.call(null,state,inst_38849);
var inst_38853 = dommy.core.set_style_BANG_.call(null,element,new cljs.core.Keyword(null,"cursor","cursor",1011937484),"move");
var state_38907__$1 = (function (){var statearr_38909 = state_38907;
(statearr_38909[(7)] = inst_38851);

(statearr_38909[(8)] = inst_38853);

(statearr_38909[(9)] = inst_38850);

(statearr_38909[(10)] = inst_38852);

return statearr_38909;
})();
var statearr_38910_38941 = state_38907__$1;
(statearr_38910_38941[(2)] = null);

(statearr_38910_38941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (20))){
var inst_38893 = (state_38907[(2)]);
var state_38907__$1 = state_38907;
var statearr_38911_38942 = state_38907__$1;
(statearr_38911_38942[(2)] = inst_38893);

(statearr_38911_38942[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (1))){
var state_38907__$1 = state_38907;
var statearr_38912_38943 = state_38907__$1;
(statearr_38912_38943[(2)] = null);

(statearr_38912_38943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (4))){
var state_38907__$1 = state_38907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38907__$1,(7),mousedown_chan);
} else {
if((state_val_38908 === (15))){
var inst_38851 = (state_38907[(7)]);
var inst_38850 = (state_38907[(9)]);
var inst_38885 = cljs.core.async.close_BANG_.call(null,inst_38851);
var inst_38886 = cljs.core.async.close_BANG_.call(null,inst_38850);
var inst_38887 = dommy.core.set_style_BANG_.call(null,element,new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer");
var state_38907__$1 = (function (){var statearr_38913 = state_38907;
(statearr_38913[(11)] = inst_38886);

(statearr_38913[(12)] = inst_38885);

return statearr_38913;
})();
var statearr_38914_38944 = state_38907__$1;
(statearr_38914_38944[(2)] = inst_38887);

(statearr_38914_38944[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (13))){
var inst_38897 = (state_38907[(2)]);
var state_38907__$1 = state_38907;
var statearr_38915_38945 = state_38907__$1;
(statearr_38915_38945[(2)] = inst_38897);

(statearr_38915_38945[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (6))){
var inst_38903 = (state_38907[(2)]);
var state_38907__$1 = state_38907;
var statearr_38916_38946 = state_38907__$1;
(statearr_38916_38946[(2)] = inst_38903);

(statearr_38916_38946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (17))){
var inst_38895 = (state_38907[(2)]);
var state_38907__$1 = state_38907;
var statearr_38917_38947 = state_38907__$1;
(statearr_38917_38947[(2)] = inst_38895);

(statearr_38917_38947[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (3))){
var inst_38905 = (state_38907[(2)]);
var state_38907__$1 = state_38907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38907__$1,inst_38905);
} else {
if((state_val_38908 === (12))){
var inst_38868 = (state_38907[(13)]);
var inst_38851 = (state_38907[(7)]);
var inst_38880 = cljs.core._EQ_.call(null,inst_38868,inst_38851);
var state_38907__$1 = state_38907;
if(inst_38880){
var statearr_38918_38948 = state_38907__$1;
(statearr_38918_38948[(1)] = (15));

} else {
var statearr_38919_38949 = state_38907__$1;
(statearr_38919_38949[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (2))){
var state_38907__$1 = state_38907;
var statearr_38920_38950 = state_38907__$1;
(statearr_38920_38950[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (19))){
var state_38907__$1 = state_38907;
var statearr_38922_38951 = state_38907__$1;
(statearr_38922_38951[(2)] = null);

(statearr_38922_38951[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (11))){
var inst_38866 = (state_38907[(14)]);
var inst_38852 = (state_38907[(10)]);
var inst_38874 = cljs.core.nth.call(null,inst_38866,(0),null);
var inst_38875 = inst_38852.call(null,inst_38874);
var state_38907__$1 = state_38907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38907__$1,(14),chan,inst_38875);
} else {
if((state_val_38908 === (9))){
var inst_38899 = (state_38907[(2)]);
var state_38907__$1 = (function (){var statearr_38923 = state_38907;
(statearr_38923[(15)] = inst_38899);

return statearr_38923;
})();
var statearr_38924_38952 = state_38907__$1;
(statearr_38924_38952[(2)] = null);

(statearr_38924_38952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (5))){
var state_38907__$1 = state_38907;
var statearr_38925_38953 = state_38907__$1;
(statearr_38925_38953[(2)] = null);

(statearr_38925_38953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (14))){
var inst_38877 = (state_38907[(2)]);
var state_38907__$1 = (function (){var statearr_38926 = state_38907;
(statearr_38926[(16)] = inst_38877);

return statearr_38926;
})();
var statearr_38927_38954 = state_38907__$1;
(statearr_38927_38954[(2)] = null);

(statearr_38927_38954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (16))){
var inst_38868 = (state_38907[(13)]);
var inst_38889 = cljs.core._EQ_.call(null,inst_38868,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_38907__$1 = state_38907;
if(inst_38889){
var statearr_38928_38955 = state_38907__$1;
(statearr_38928_38955[(1)] = (18));

} else {
var statearr_38929_38956 = state_38907__$1;
(statearr_38929_38956[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (10))){
var inst_38868 = (state_38907[(13)]);
var inst_38866 = (state_38907[(14)]);
var inst_38850 = (state_38907[(9)]);
var inst_38866__$1 = (state_38907[(2)]);
var inst_38867 = cljs.core.nth.call(null,inst_38866__$1,(0),null);
var inst_38868__$1 = cljs.core.nth.call(null,inst_38866__$1,(1),null);
var inst_38869 = cljs.core._EQ_.call(null,inst_38868__$1,inst_38850);
var state_38907__$1 = (function (){var statearr_38930 = state_38907;
(statearr_38930[(13)] = inst_38868__$1);

(statearr_38930[(14)] = inst_38866__$1);

(statearr_38930[(17)] = inst_38867);

return statearr_38930;
})();
if(inst_38869){
var statearr_38931_38957 = state_38907__$1;
(statearr_38931_38957[(1)] = (11));

} else {
var statearr_38932_38958 = state_38907__$1;
(statearr_38932_38958[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (18))){
var inst_38867 = (state_38907[(17)]);
var state_38907__$1 = state_38907;
var statearr_38933_38959 = state_38907__$1;
(statearr_38933_38959[(2)] = inst_38867);

(statearr_38933_38959[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38908 === (8))){
var inst_38851 = (state_38907[(7)]);
var inst_38850 = (state_38907[(9)]);
var inst_38862 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38863 = [inst_38850,inst_38851];
var inst_38864 = (new cljs.core.PersistentVector(null,2,(5),inst_38862,inst_38863,null));
var state_38907__$1 = state_38907;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38907__$1,(10),inst_38864);
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
});})(c__27957__auto__,mousedown_chan))
;
return ((function (switch__27892__auto__,c__27957__auto__,mousedown_chan){
return (function() {
var modal_synth$fader$mouse_control_$_state_machine__27893__auto__ = null;
var modal_synth$fader$mouse_control_$_state_machine__27893__auto____0 = (function (){
var statearr_38937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38937[(0)] = modal_synth$fader$mouse_control_$_state_machine__27893__auto__);

(statearr_38937[(1)] = (1));

return statearr_38937;
});
var modal_synth$fader$mouse_control_$_state_machine__27893__auto____1 = (function (state_38907){
while(true){
var ret_value__27894__auto__ = (function (){try{while(true){
var result__27895__auto__ = switch__27892__auto__.call(null,state_38907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27895__auto__;
}
break;
}
}catch (e38938){if((e38938 instanceof Object)){
var ex__27896__auto__ = e38938;
var statearr_38939_38960 = state_38907;
(statearr_38939_38960[(5)] = ex__27896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38961 = state_38907;
state_38907 = G__38961;
continue;
} else {
return ret_value__27894__auto__;
}
break;
}
});
modal_synth$fader$mouse_control_$_state_machine__27893__auto__ = function(state_38907){
switch(arguments.length){
case 0:
return modal_synth$fader$mouse_control_$_state_machine__27893__auto____0.call(this);
case 1:
return modal_synth$fader$mouse_control_$_state_machine__27893__auto____1.call(this,state_38907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modal_synth$fader$mouse_control_$_state_machine__27893__auto__.cljs$core$IFn$_invoke$arity$0 = modal_synth$fader$mouse_control_$_state_machine__27893__auto____0;
modal_synth$fader$mouse_control_$_state_machine__27893__auto__.cljs$core$IFn$_invoke$arity$1 = modal_synth$fader$mouse_control_$_state_machine__27893__auto____1;
return modal_synth$fader$mouse_control_$_state_machine__27893__auto__;
})()
;})(switch__27892__auto__,c__27957__auto__,mousedown_chan))
})();
var state__27959__auto__ = (function (){var statearr_38940 = f__27958__auto__.call(null);
(statearr_38940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27957__auto__);

return statearr_38940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27959__auto__);
});})(c__27957__auto__,mousedown_chan))
);

return c__27957__auto__;
});
modal_synth.fader.init = (function modal_synth$fader$init(fader){
cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(fader),new cljs.core.Keyword(null,"draw-watcher","draw-watcher",1889384452),(function (key,atom,old_state,new_state){
return modal_synth.fader.draw.call(null,fader);
}));

var c__27957__auto___39022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27957__auto___39022){
return (function (){
var f__27958__auto__ = (function (){var switch__27892__auto__ = ((function (c__27957__auto___39022){
return (function (state_39006){
var state_val_39007 = (state_39006[(1)]);
if((state_val_39007 === (1))){
var state_39006__$1 = state_39006;
var statearr_39008_39023 = state_39006__$1;
(statearr_39008_39023[(2)] = null);

(statearr_39008_39023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39007 === (2))){
var state_39006__$1 = state_39006;
var statearr_39009_39024 = state_39006__$1;
(statearr_39009_39024[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39007 === (3))){
var inst_39004 = (state_39006[(2)]);
var state_39006__$1 = state_39006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39006__$1,inst_39004);
} else {
if((state_val_39007 === (4))){
var inst_38994 = new cljs.core.Keyword(null,"chan","chan",-2103021695).cljs$core$IFn$_invoke$arity$1(fader);
var state_39006__$1 = state_39006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39006__$1,(7),inst_38994);
} else {
if((state_val_39007 === (5))){
var state_39006__$1 = state_39006;
var statearr_39011_39025 = state_39006__$1;
(statearr_39011_39025[(2)] = null);

(statearr_39011_39025[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39007 === (6))){
var inst_39002 = (state_39006[(2)]);
var state_39006__$1 = state_39006;
var statearr_39012_39026 = state_39006__$1;
(statearr_39012_39026[(2)] = inst_39002);

(statearr_39012_39026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39007 === (7))){
var inst_38996 = (state_39006[(2)]);
var inst_38997 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(fader);
var inst_38998 = cljs.core.reset_BANG_.call(null,inst_38997,inst_38996);
var state_39006__$1 = (function (){var statearr_39013 = state_39006;
(statearr_39013[(7)] = inst_38998);

return statearr_39013;
})();
var statearr_39014_39027 = state_39006__$1;
(statearr_39014_39027[(2)] = null);

(statearr_39014_39027[(1)] = (2));


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
});})(c__27957__auto___39022))
;
return ((function (switch__27892__auto__,c__27957__auto___39022){
return (function() {
var modal_synth$fader$init_$_state_machine__27893__auto__ = null;
var modal_synth$fader$init_$_state_machine__27893__auto____0 = (function (){
var statearr_39018 = [null,null,null,null,null,null,null,null];
(statearr_39018[(0)] = modal_synth$fader$init_$_state_machine__27893__auto__);

(statearr_39018[(1)] = (1));

return statearr_39018;
});
var modal_synth$fader$init_$_state_machine__27893__auto____1 = (function (state_39006){
while(true){
var ret_value__27894__auto__ = (function (){try{while(true){
var result__27895__auto__ = switch__27892__auto__.call(null,state_39006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27895__auto__;
}
break;
}
}catch (e39019){if((e39019 instanceof Object)){
var ex__27896__auto__ = e39019;
var statearr_39020_39028 = state_39006;
(statearr_39020_39028[(5)] = ex__27896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39029 = state_39006;
state_39006 = G__39029;
continue;
} else {
return ret_value__27894__auto__;
}
break;
}
});
modal_synth$fader$init_$_state_machine__27893__auto__ = function(state_39006){
switch(arguments.length){
case 0:
return modal_synth$fader$init_$_state_machine__27893__auto____0.call(this);
case 1:
return modal_synth$fader$init_$_state_machine__27893__auto____1.call(this,state_39006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modal_synth$fader$init_$_state_machine__27893__auto__.cljs$core$IFn$_invoke$arity$0 = modal_synth$fader$init_$_state_machine__27893__auto____0;
modal_synth$fader$init_$_state_machine__27893__auto__.cljs$core$IFn$_invoke$arity$1 = modal_synth$fader$init_$_state_machine__27893__auto____1;
return modal_synth$fader$init_$_state_machine__27893__auto__;
})()
;})(switch__27892__auto__,c__27957__auto___39022))
})();
var state__27959__auto__ = (function (){var statearr_39021 = f__27958__auto__.call(null);
(statearr_39021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27957__auto___39022);

return statearr_39021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27959__auto__);
});})(c__27957__auto___39022))
);


modal_synth.fader.mouse_control.call(null,new cljs.core.Keyword(null,"handle","handle",1538948854).cljs$core$IFn$_invoke$arity$1(fader),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(fader),new cljs.core.Keyword(null,"chan","chan",-2103021695).cljs$core$IFn$_invoke$arity$1(fader));

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(fader),cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(fader)));
});
modal_synth.fader.create = (function modal_synth$fader$create(fader_state,fader_type){
var box = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var bar = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var handle = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var receive_chan = cljs.core.async.chan.call(null);
var fader = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",-1988618099),fader_state,new cljs.core.Keyword(null,"chan","chan",-2103021695),receive_chan,new cljs.core.Keyword(null,"box","box",1530920394),box,new cljs.core.Keyword(null,"bar","bar",-1386246584),bar,new cljs.core.Keyword(null,"handle","handle",1538948854),handle,new cljs.core.Keyword(null,"type","type",1174270348),fader_type], null);
dommy.core.set_class_BANG_.call(null,box,"slider");

dommy.core.set_class_BANG_.call(null,bar,"slider-bar");

dommy.core.set_class_BANG_.call(null,handle,"slider-handle");

dommy.core.append_BANG_.call(null,box,bar);

dommy.core.append_BANG_.call(null,box,handle);

return fader;
});
modal_synth.fader.init_bandpass = (function modal_synth$fader$init_bandpass(bp){
cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"state-highpass","state-highpass",1777216902).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.Keyword(null,"draw-watcher","draw-watcher",1889384452),(function (key,atom,old_state,new_state){
return modal_synth.fader.draw.call(null,bp);
}));

cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"state-lowpass","state-lowpass",838292240).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.Keyword(null,"draw-watcher","draw-watcher",1889384452),(function (key,atom,old_state,new_state){
return modal_synth.fader.draw.call(null,bp);
}));

var c__27957__auto___39210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27957__auto___39210){
return (function (){
var f__27958__auto__ = (function (){var switch__27892__auto__ = ((function (c__27957__auto___39210){
return (function (state_39144){
var state_val_39145 = (state_39144[(1)]);
if((state_val_39145 === (7))){
var inst_39124 = (state_39144[(7)]);
var inst_39127 = (state_39144[(8)]);
var inst_39124__$1 = (state_39144[(2)]);
var inst_39125 = new cljs.core.Keyword(null,"state-lowpass","state-lowpass",838292240).cljs$core$IFn$_invoke$arity$1(bp);
var inst_39126 = cljs.core.deref.call(null,inst_39125);
var inst_39127__$1 = (inst_39126 - modal_synth.fader.bandpass_min_bandwidth);
var inst_39128 = (inst_39124__$1 < inst_39127__$1);
var state_39144__$1 = (function (){var statearr_39146 = state_39144;
(statearr_39146[(7)] = inst_39124__$1);

(statearr_39146[(8)] = inst_39127__$1);

return statearr_39146;
})();
if(cljs.core.truth_(inst_39128)){
var statearr_39147_39211 = state_39144__$1;
(statearr_39147_39211[(1)] = (8));

} else {
var statearr_39148_39212 = state_39144__$1;
(statearr_39148_39212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (1))){
var state_39144__$1 = state_39144;
var statearr_39149_39213 = state_39144__$1;
(statearr_39149_39213[(2)] = null);

(statearr_39149_39213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (4))){
var inst_39122 = new cljs.core.Keyword(null,"chan-highpass","chan-highpass",-2095911059).cljs$core$IFn$_invoke$arity$1(bp);
var state_39144__$1 = state_39144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39144__$1,(7),inst_39122);
} else {
if((state_val_39145 === (6))){
var inst_39140 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
var statearr_39150_39214 = state_39144__$1;
(statearr_39150_39214[(2)] = inst_39140);

(statearr_39150_39214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (3))){
var inst_39142 = (state_39144[(2)]);
var state_39144__$1 = state_39144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39144__$1,inst_39142);
} else {
if((state_val_39145 === (2))){
var state_39144__$1 = state_39144;
var statearr_39151_39215 = state_39144__$1;
(statearr_39151_39215[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (9))){
var inst_39127 = (state_39144[(8)]);
var inst_39133 = new cljs.core.Keyword(null,"state-highpass","state-highpass",1777216902).cljs$core$IFn$_invoke$arity$1(bp);
var inst_39134 = cljs.core.reset_BANG_.call(null,inst_39133,inst_39127);
var state_39144__$1 = state_39144;
var statearr_39153_39216 = state_39144__$1;
(statearr_39153_39216[(2)] = inst_39134);

(statearr_39153_39216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (5))){
var state_39144__$1 = state_39144;
var statearr_39154_39217 = state_39144__$1;
(statearr_39154_39217[(2)] = null);

(statearr_39154_39217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (10))){
var inst_39136 = (state_39144[(2)]);
var state_39144__$1 = (function (){var statearr_39155 = state_39144;
(statearr_39155[(9)] = inst_39136);

return statearr_39155;
})();
var statearr_39156_39218 = state_39144__$1;
(statearr_39156_39218[(2)] = null);

(statearr_39156_39218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39145 === (8))){
var inst_39124 = (state_39144[(7)]);
var inst_39130 = new cljs.core.Keyword(null,"state-highpass","state-highpass",1777216902).cljs$core$IFn$_invoke$arity$1(bp);
var inst_39131 = cljs.core.reset_BANG_.call(null,inst_39130,inst_39124);
var state_39144__$1 = state_39144;
var statearr_39157_39219 = state_39144__$1;
(statearr_39157_39219[(2)] = inst_39131);

(statearr_39157_39219[(1)] = (10));


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
});})(c__27957__auto___39210))
;
return ((function (switch__27892__auto__,c__27957__auto___39210){
return (function() {
var modal_synth$fader$init_bandpass_$_state_machine__27893__auto__ = null;
var modal_synth$fader$init_bandpass_$_state_machine__27893__auto____0 = (function (){
var statearr_39161 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39161[(0)] = modal_synth$fader$init_bandpass_$_state_machine__27893__auto__);

(statearr_39161[(1)] = (1));

return statearr_39161;
});
var modal_synth$fader$init_bandpass_$_state_machine__27893__auto____1 = (function (state_39144){
while(true){
var ret_value__27894__auto__ = (function (){try{while(true){
var result__27895__auto__ = switch__27892__auto__.call(null,state_39144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27895__auto__;
}
break;
}
}catch (e39162){if((e39162 instanceof Object)){
var ex__27896__auto__ = e39162;
var statearr_39163_39220 = state_39144;
(statearr_39163_39220[(5)] = ex__27896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39221 = state_39144;
state_39144 = G__39221;
continue;
} else {
return ret_value__27894__auto__;
}
break;
}
});
modal_synth$fader$init_bandpass_$_state_machine__27893__auto__ = function(state_39144){
switch(arguments.length){
case 0:
return modal_synth$fader$init_bandpass_$_state_machine__27893__auto____0.call(this);
case 1:
return modal_synth$fader$init_bandpass_$_state_machine__27893__auto____1.call(this,state_39144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modal_synth$fader$init_bandpass_$_state_machine__27893__auto__.cljs$core$IFn$_invoke$arity$0 = modal_synth$fader$init_bandpass_$_state_machine__27893__auto____0;
modal_synth$fader$init_bandpass_$_state_machine__27893__auto__.cljs$core$IFn$_invoke$arity$1 = modal_synth$fader$init_bandpass_$_state_machine__27893__auto____1;
return modal_synth$fader$init_bandpass_$_state_machine__27893__auto__;
})()
;})(switch__27892__auto__,c__27957__auto___39210))
})();
var state__27959__auto__ = (function (){var statearr_39164 = f__27958__auto__.call(null);
(statearr_39164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27957__auto___39210);

return statearr_39164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27959__auto__);
});})(c__27957__auto___39210))
);


var c__27957__auto___39222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27957__auto___39222){
return (function (){
var f__27958__auto__ = (function (){var switch__27892__auto__ = ((function (c__27957__auto___39222){
return (function (state_39189){
var state_val_39190 = (state_39189[(1)]);
if((state_val_39190 === (7))){
var inst_39169 = (state_39189[(7)]);
var inst_39172 = (state_39189[(8)]);
var inst_39169__$1 = (state_39189[(2)]);
var inst_39170 = new cljs.core.Keyword(null,"state-highpass","state-highpass",1777216902).cljs$core$IFn$_invoke$arity$1(bp);
var inst_39171 = cljs.core.deref.call(null,inst_39170);
var inst_39172__$1 = (inst_39171 + modal_synth.fader.bandpass_min_bandwidth);
var inst_39173 = (inst_39169__$1 > inst_39172__$1);
var state_39189__$1 = (function (){var statearr_39191 = state_39189;
(statearr_39191[(7)] = inst_39169__$1);

(statearr_39191[(8)] = inst_39172__$1);

return statearr_39191;
})();
if(cljs.core.truth_(inst_39173)){
var statearr_39192_39223 = state_39189__$1;
(statearr_39192_39223[(1)] = (8));

} else {
var statearr_39193_39224 = state_39189__$1;
(statearr_39193_39224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39190 === (1))){
var state_39189__$1 = state_39189;
var statearr_39194_39225 = state_39189__$1;
(statearr_39194_39225[(2)] = null);

(statearr_39194_39225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39190 === (4))){
var inst_39167 = new cljs.core.Keyword(null,"chan-lowpass","chan-lowpass",-1804822836).cljs$core$IFn$_invoke$arity$1(bp);
var state_39189__$1 = state_39189;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39189__$1,(7),inst_39167);
} else {
if((state_val_39190 === (6))){
var inst_39185 = (state_39189[(2)]);
var state_39189__$1 = state_39189;
var statearr_39195_39226 = state_39189__$1;
(statearr_39195_39226[(2)] = inst_39185);

(statearr_39195_39226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39190 === (3))){
var inst_39187 = (state_39189[(2)]);
var state_39189__$1 = state_39189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39189__$1,inst_39187);
} else {
if((state_val_39190 === (2))){
var state_39189__$1 = state_39189;
var statearr_39196_39227 = state_39189__$1;
(statearr_39196_39227[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39190 === (9))){
var inst_39172 = (state_39189[(8)]);
var inst_39178 = new cljs.core.Keyword(null,"state-lowpass","state-lowpass",838292240).cljs$core$IFn$_invoke$arity$1(bp);
var inst_39179 = cljs.core.reset_BANG_.call(null,inst_39178,inst_39172);
var state_39189__$1 = state_39189;
var statearr_39198_39228 = state_39189__$1;
(statearr_39198_39228[(2)] = inst_39179);

(statearr_39198_39228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39190 === (5))){
var state_39189__$1 = state_39189;
var statearr_39199_39229 = state_39189__$1;
(statearr_39199_39229[(2)] = null);

(statearr_39199_39229[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39190 === (10))){
var inst_39181 = (state_39189[(2)]);
var state_39189__$1 = (function (){var statearr_39200 = state_39189;
(statearr_39200[(9)] = inst_39181);

return statearr_39200;
})();
var statearr_39201_39230 = state_39189__$1;
(statearr_39201_39230[(2)] = null);

(statearr_39201_39230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39190 === (8))){
var inst_39169 = (state_39189[(7)]);
var inst_39175 = new cljs.core.Keyword(null,"state-lowpass","state-lowpass",838292240).cljs$core$IFn$_invoke$arity$1(bp);
var inst_39176 = cljs.core.reset_BANG_.call(null,inst_39175,inst_39169);
var state_39189__$1 = state_39189;
var statearr_39202_39231 = state_39189__$1;
(statearr_39202_39231[(2)] = inst_39176);

(statearr_39202_39231[(1)] = (10));


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
});})(c__27957__auto___39222))
;
return ((function (switch__27892__auto__,c__27957__auto___39222){
return (function() {
var modal_synth$fader$init_bandpass_$_state_machine__27893__auto__ = null;
var modal_synth$fader$init_bandpass_$_state_machine__27893__auto____0 = (function (){
var statearr_39206 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39206[(0)] = modal_synth$fader$init_bandpass_$_state_machine__27893__auto__);

(statearr_39206[(1)] = (1));

return statearr_39206;
});
var modal_synth$fader$init_bandpass_$_state_machine__27893__auto____1 = (function (state_39189){
while(true){
var ret_value__27894__auto__ = (function (){try{while(true){
var result__27895__auto__ = switch__27892__auto__.call(null,state_39189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27895__auto__;
}
break;
}
}catch (e39207){if((e39207 instanceof Object)){
var ex__27896__auto__ = e39207;
var statearr_39208_39232 = state_39189;
(statearr_39208_39232[(5)] = ex__27896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39233 = state_39189;
state_39189 = G__39233;
continue;
} else {
return ret_value__27894__auto__;
}
break;
}
});
modal_synth$fader$init_bandpass_$_state_machine__27893__auto__ = function(state_39189){
switch(arguments.length){
case 0:
return modal_synth$fader$init_bandpass_$_state_machine__27893__auto____0.call(this);
case 1:
return modal_synth$fader$init_bandpass_$_state_machine__27893__auto____1.call(this,state_39189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modal_synth$fader$init_bandpass_$_state_machine__27893__auto__.cljs$core$IFn$_invoke$arity$0 = modal_synth$fader$init_bandpass_$_state_machine__27893__auto____0;
modal_synth$fader$init_bandpass_$_state_machine__27893__auto__.cljs$core$IFn$_invoke$arity$1 = modal_synth$fader$init_bandpass_$_state_machine__27893__auto____1;
return modal_synth$fader$init_bandpass_$_state_machine__27893__auto__;
})()
;})(switch__27892__auto__,c__27957__auto___39222))
})();
var state__27959__auto__ = (function (){var statearr_39209 = f__27958__auto__.call(null);
(statearr_39209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27957__auto___39222);

return statearr_39209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27959__auto__);
});})(c__27957__auto___39222))
);


modal_synth.fader.mouse_control.call(null,new cljs.core.Keyword(null,"handle-highpass","handle-highpass",-797863762).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.Keyword(null,"state-highpass","state-highpass",1777216902).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.Keyword(null,"chan-highpass","chan-highpass",-2095911059).cljs$core$IFn$_invoke$arity$1(bp));

modal_synth.fader.mouse_control.call(null,new cljs.core.Keyword(null,"handle-lowpass","handle-lowpass",2009375751).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.Keyword(null,"state-lowpass","state-lowpass",838292240).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.Keyword(null,"chan-lowpass","chan-lowpass",-1804822836).cljs$core$IFn$_invoke$arity$1(bp));

modal_synth.fader.mouse_control.call(null,new cljs.core.Keyword(null,"bar","bar",-1386246584).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.Keyword(null,"state-highpass","state-highpass",1777216902).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.Keyword(null,"chan-highpass","chan-highpass",-2095911059).cljs$core$IFn$_invoke$arity$1(bp));

modal_synth.fader.mouse_control.call(null,new cljs.core.Keyword(null,"bar","bar",-1386246584).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.Keyword(null,"state-lowpass","state-lowpass",838292240).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.Keyword(null,"chan-lowpass","chan-lowpass",-1804822836).cljs$core$IFn$_invoke$arity$1(bp));

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
dommy.core.set_class_BANG_.call(null,box,"bandpass");

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

//# sourceMappingURL=fader.js.map?rel=1490260714375