// Compiled by ClojureScript 1.9.229 {}
goog.provide('modal_synth.cycles');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('modal_synth.webaudio');
goog.require('modal_synth.keyboard_control');
goog.require('modal_synth.spectro_vis');
goog.require('modal_synth.channel_dom');
goog.require('dommy.core');
goog.require('modal_synth.utils');
goog.require('cljs.core.async');
goog.require('modal_synth.scheduler');
goog.require('goog.events');
goog.require('modal_synth.fader');
goog.require('modal_synth.channel');
modal_synth.cycles.make_node = (function modal_synth$cycles$make_node(audio_fader,cycle_fader){
var node_element = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var node_state = cljs.core.atom.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_fader))));
dommy.core.set_class_BANG_.call(null,node_element,"cycle-node");

var mousedown = ((function (node_element,node_state){
return (function (element,state){
if(cljs.core.truth_(cljs.core.deref.call(null,cycle_fader))){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cycle_fader)),cljs.core.deref.call(null,state));

dommy.core.set_style_BANG_.call(null,node_element,new cljs.core.Keyword(null,"border","border",1444987323),"1px solid rgba(50,130,200,0.6)");

return dommy.core.set_style_BANG_.call(null,new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cycle_fader)),new cljs.core.Keyword(null,"visibility","visibility",1338380893),"visible");
} else {
return null;
}
});})(node_element,node_state))
;
var mouseup = ((function (mousedown,node_element,node_state){
return (function (element,state){
if(cljs.core.truth_(cljs.core.deref.call(null,cycle_fader))){
cljs.core.reset_BANG_.call(null,state,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cycle_fader))));

dommy.core.set_style_BANG_.call(null,node_element,new cljs.core.Keyword(null,"border","border",1444987323),"1px solid white");

return dommy.core.set_style_BANG_.call(null,new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cycle_fader)),new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden");
} else {
return null;
}
});})(mousedown,node_element,node_state))
;
var mousemove = ((function (mousedown,mouseup,node_element,node_state){
return (function (element,state){
if(cljs.core.truth_(cljs.core.deref.call(null,cycle_fader))){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cycle_fader)),cljs.core.deref.call(null,state));
} else {
return null;
}
});})(mousedown,mouseup,node_element,node_state))
;
modal_synth.fader.mouse_control_BANG_.call(null,node_element,node_state,new cljs.core.Keyword(null,"mousedown-func","mousedown-func",-563610940),mousedown,new cljs.core.Keyword(null,"mouseup-func","mouseup-func",1423081267),mouseup,new cljs.core.Keyword(null,"mousemove-func","mousemove-func",1572367312),mousemove);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"element","element",1974019749),node_element,new cljs.core.Keyword(null,"state","state",-1988618099),node_state], null);
});
modal_synth.cycles.deactivate_node_BANG_ = (function modal_synth$cycles$deactivate_node_BANG_(p__27930){
var map__27933 = p__27930;
var map__27933__$1 = ((((!((map__27933 == null)))?((((map__27933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27933):map__27933);
var element = cljs.core.get.call(null,map__27933__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return dommy.core.set_style_BANG_.call(null,element,new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(0,0,0,0.2)");
});
modal_synth.cycles.activate_node_BANG_ = (function modal_synth$cycles$activate_node_BANG_(p__27935){
var map__27938 = p__27935;
var map__27938__$1 = ((((!((map__27938 == null)))?((((map__27938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27938):map__27938);
var element = cljs.core.get.call(null,map__27938__$1,new cljs.core.Keyword(null,"element","element",1974019749));
return dommy.core.set_style_BANG_.call(null,element,new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(50,130,200,0.6)");
});
modal_synth.cycles.smooth_transition = (function modal_synth$cycles$smooth_transition(audio_fader,move_to,start_time,end_time){
var offset = cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_fader)));
var gradient = ((move_to - offset) / (end_time - start_time));
return ((function (offset,gradient){
return (function (at_time){
var new_fader_val = ((gradient * (at_time - start_time)) + offset);
var next_infinitesimal_moment = (at_time + 0.01);
if((at_time < end_time)){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_fader)),new_fader_val);

return next_infinitesimal_moment;
} else {
return null;
}
});
;})(offset,gradient))
});
modal_synth.cycles.make_ticker = (function modal_synth$cycles$make_ticker(scheduler,nodes,audio_fader,freq,smooth){
var active_node_index = cljs.core.atom.call(null,(0));
return ((function (active_node_index){
return (function (event_fire_time){
var next_event_time = (event_fire_time + (1.0 / cljs.core.deref.call(null,freq)));
if((cljs.core.deref.call(null,active_node_index) < cljs.core.count.call(null,cljs.core.deref.call(null,nodes)))){
modal_synth.cycles.deactivate_node_BANG_.call(null,cljs.core.nth.call(null,cljs.core.deref.call(null,nodes),cljs.core.deref.call(null,active_node_index)));
} else {
}

if((cljs.core.count.call(null,cljs.core.deref.call(null,nodes)) > (0))){
cljs.core.swap_BANG_.call(null,active_node_index,((function (next_event_time,active_node_index){
return (function (p1__27940_SHARP_){
return cljs.core.mod.call(null,(p1__27940_SHARP_ + (1)),cljs.core.count.call(null,cljs.core.deref.call(null,nodes)));
});})(next_event_time,active_node_index))
);
} else {
cljs.core.reset_BANG_.call(null,active_node_index,(0));
}

if((cljs.core.deref.call(null,active_node_index) < cljs.core.count.call(null,cljs.core.deref.call(null,nodes)))){
modal_synth.cycles.activate_node_BANG_.call(null,cljs.core.nth.call(null,cljs.core.deref.call(null,nodes),cljs.core.deref.call(null,active_node_index)));

if(cljs.core.truth_(cljs.core.deref.call(null,smooth))){
modal_synth.scheduler.recursion_through_time_BANG_.call(null,scheduler,modal_synth.cycles.smooth_transition.call(null,audio_fader,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,nodes),cljs.core.deref.call(null,active_node_index)))),event_fire_time,next_event_time),event_fire_time);
} else {
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_fader)),cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,nodes),cljs.core.deref.call(null,active_node_index)))));
}
} else {
}

return next_event_time;
});
;})(active_node_index))
});
modal_synth.cycles.add_node_BANG_ = (function modal_synth$cycles$add_node_BANG_(cycle_,audio_fader,cycle_fader){
var new_node = modal_synth.cycles.make_node.call(null,audio_fader,cycle_fader);
var temp__4655__auto___27941 = cljs.core.last.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cycle_)));
if(cljs.core.truth_(temp__4655__auto___27941)){
var last_node_27942 = temp__4655__auto___27941;
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new_node),cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(last_node_27942)));
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,audio_fader))){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new_node),cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,audio_fader))));
} else {
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new_node),(0));
}
}

dommy.core.append_BANG_.call(null,new cljs.core.Keyword(null,"node-div","node-div",-1199111024).cljs$core$IFn$_invoke$arity$1(cycle_),new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(new_node));

return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(cycle_),cljs.core.conj,new_node);
});
modal_synth.cycles.remove_node_BANG_ = (function modal_synth$cycles$remove_node_BANG_(nodes){
var node = cljs.core.last.call(null,cljs.core.deref.call(null,nodes));
dommy.core.remove_BANG_.call(null,new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(node));

return cljs.core.swap_BANG_.call(null,nodes,((function (node){
return (function (p1__27943_SHARP_){
return cljs.core.vec.call(null,cljs.core.drop_last.call(null,p1__27943_SHARP_));
});})(node))
);
});
modal_synth.cycles.make_increment_element = (function modal_synth$cycles$make_increment_element(nodes,node_div,audio_fader,cycle_fader){
var element = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var horizontal = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var vertical = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
dommy.core.set_style_BANG_.call(null,element,new cljs.core.Keyword(null,"top","top",-1856271961),"5px",new cljs.core.Keyword(null,"left","left",-399115937),"25px",new cljs.core.Keyword(null,"display","display",242065432),"table-cell",new cljs.core.Keyword(null,"position","position",-2011731912),"relative");

dommy.core.set_attr_BANG_.call(null,element,new cljs.core.Keyword(null,"onmousedown","onmousedown",-1118865611),((function (element,horizontal,vertical){
return (function (){
return modal_synth.cycles.add_node_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes,new cljs.core.Keyword(null,"node-div","node-div",-1199111024),node_div], null),audio_fader,cycle_fader);
});})(element,horizontal,vertical))
);

dommy.core.append_BANG_.call(null,element,horizontal);

dommy.core.set_style_BANG_.call(null,horizontal,new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"top","top",-1856271961),"7px",new cljs.core.Keyword(null,"height","height",1025178622),"6px",new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute");

dommy.core.append_BANG_.call(null,element,vertical);

dommy.core.set_style_BANG_.call(null,vertical,new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"left","left",-399115937),"7px",new cljs.core.Keyword(null,"height","height",1025178622),"20px",new cljs.core.Keyword(null,"width","width",-384071477),"6px",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute");

return element;
});
modal_synth.cycles.make_decrement_element = (function modal_synth$cycles$make_decrement_element(nodes){
var element = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var minus = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
dommy.core.append_BANG_.call(null,element,minus);

dommy.core.set_style_BANG_.call(null,element,new cljs.core.Keyword(null,"top","top",-1856271961),"5px",new cljs.core.Keyword(null,"left","left",-399115937),"5px",new cljs.core.Keyword(null,"display","display",242065432),"table-cell",new cljs.core.Keyword(null,"position","position",-2011731912),"relative");

dommy.core.set_attr_BANG_.call(null,element,new cljs.core.Keyword(null,"onmousedown","onmousedown",-1118865611),((function (element,minus){
return (function (){
return modal_synth.cycles.remove_node_BANG_.call(null,nodes);
});})(element,minus))
);

dommy.core.set_style_BANG_.call(null,minus,new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"top","top",-1856271961),"7px",new cljs.core.Keyword(null,"height","height",1025178622),"6px",new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute");

return element;
});
modal_synth.cycles.create = (function modal_synth$cycles$create(var_args){
var args__25883__auto__ = [];
var len__25876__auto___27994 = arguments.length;
var i__25877__auto___27995 = (0);
while(true){
if((i__25877__auto___27995 < len__25876__auto___27994)){
args__25883__auto__.push((arguments[i__25877__auto___27995]));

var G__27996 = (i__25877__auto___27995 + (1));
i__25877__auto___27995 = G__27996;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((6) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((6)),(0),null)):null);
return modal_synth.cycles.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__25884__auto__);
});

modal_synth.cycles.create.cljs$core$IFn$_invoke$arity$variadic = (function (topleft,n,audio_fader,cycle_fader,drag_and_drop_cycle,scheduler,p__27951){
var map__27952 = p__27951;
var map__27952__$1 = ((((!((map__27952 == null)))?((((map__27952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27952):map__27952);
var freq = cljs.core.get.call(null,map__27952__$1,new cljs.core.Keyword(null,"freq","freq",-1855845278),0.5);
var cycle_element = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var node_div = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var cycle_fader_wrap = cljs.core.atom.call(null,cycle_fader);
var audio_fader_wrap = cljs.core.atom.call(null,audio_fader);
var nodes = cljs.core.atom.call(null,cljs.core.vec.call(null,(function (){var iter__25581__auto__ = ((function (cycle_element,node_div,cycle_fader_wrap,audio_fader_wrap,map__27952,map__27952__$1,freq){
return (function modal_synth$cycles$iter__27954(s__27955){
return (new cljs.core.LazySeq(null,((function (cycle_element,node_div,cycle_fader_wrap,audio_fader_wrap,map__27952,map__27952__$1,freq){
return (function (){
var s__27955__$1 = s__27955;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__27955__$1);
if(temp__4657__auto__){
var s__27955__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27955__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__27955__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__27957 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__27956 = (0);
while(true){
if((i__27956 < size__25580__auto__)){
var _ = cljs.core._nth.call(null,c__25579__auto__,i__27956);
cljs.core.chunk_append.call(null,b__27957,modal_synth.cycles.make_node.call(null,audio_fader_wrap,cycle_fader_wrap));

var G__27997 = (i__27956 + (1));
i__27956 = G__27997;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27957),modal_synth$cycles$iter__27954.call(null,cljs.core.chunk_rest.call(null,s__27955__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27957),null);
}
} else {
var _ = cljs.core.first.call(null,s__27955__$2);
return cljs.core.cons.call(null,modal_synth.cycles.make_node.call(null,audio_fader_wrap,cycle_fader_wrap),modal_synth$cycles$iter__27954.call(null,cljs.core.rest.call(null,s__27955__$2)));
}
} else {
return null;
}
break;
}
});})(cycle_element,node_div,cycle_fader_wrap,audio_fader_wrap,map__27952,map__27952__$1,freq))
,null,null));
});})(cycle_element,node_div,cycle_fader_wrap,audio_fader_wrap,map__27952,map__27952__$1,freq))
;
return iter__25581__auto__.call(null,cljs.core.range.call(null,n));
})()));
var controls_div = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var fader_assign_handle = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var decrement_nodes = modal_synth.cycles.make_decrement_element.call(null,nodes);
var increment_nodes = modal_synth.cycles.make_increment_element.call(null,nodes,node_div,audio_fader_wrap,cycle_fader_wrap);
var smooth = cljs.core.atom.call(null,true);
var tick_BANG_ = modal_synth.cycles.make_ticker.call(null,scheduler,nodes,audio_fader_wrap,freq,smooth);
var dragstart_chan = modal_synth.utils.listen.call(null,fader_assign_handle,"dragstart");
dommy.core.set_class_BANG_.call(null,cycle_element,"cycle");

dommy.core.set_class_BANG_.call(null,node_div,"node-div");

dommy.core.set_class_BANG_.call(null,controls_div,"controls-div");

dommy.core.append_BANG_.call(null,cycle_element,node_div);

dommy.core.set_class_BANG_.call(null,fader_assign_handle,"slider-handle");

dommy.core.set_style_BANG_.call(null,fader_assign_handle,new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"top","top",-1856271961),"5px",new cljs.core.Keyword(null,"display","display",242065432),"table-cell");

dommy.core.set_attr_BANG_.call(null,fader_assign_handle,new cljs.core.Keyword(null,"draggable","draggable",1676206163),"true");

var c__26831__auto___27998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26831__auto___27998,cycle_element,node_div,cycle_fader_wrap,audio_fader_wrap,nodes,controls_div,fader_assign_handle,decrement_nodes,increment_nodes,smooth,tick_BANG_,dragstart_chan,map__27952,map__27952__$1,freq){
return (function (){
var f__26832__auto__ = (function (){var switch__26810__auto__ = ((function (c__26831__auto___27998,cycle_element,node_div,cycle_fader_wrap,audio_fader_wrap,nodes,controls_div,fader_assign_handle,decrement_nodes,increment_nodes,smooth,tick_BANG_,dragstart_chan,map__27952,map__27952__$1,freq){
return (function (state_27977){
var state_val_27978 = (state_27977[(1)]);
if((state_val_27978 === (1))){
var state_27977__$1 = state_27977;
var statearr_27979_27999 = state_27977__$1;
(statearr_27979_27999[(2)] = null);

(statearr_27979_27999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (2))){
var state_27977__$1 = state_27977;
var statearr_27980_28000 = state_27977__$1;
(statearr_27980_28000[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (3))){
var inst_27975 = (state_27977[(2)]);
var state_27977__$1 = state_27977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27977__$1,inst_27975);
} else {
if((state_val_27978 === (4))){
var state_27977__$1 = state_27977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27977__$1,(7),dragstart_chan);
} else {
if((state_val_27978 === (5))){
var state_27977__$1 = state_27977;
var statearr_27982_28001 = state_27977__$1;
(statearr_27982_28001[(2)] = null);

(statearr_27982_28001[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (6))){
var inst_27973 = (state_27977[(2)]);
var state_27977__$1 = state_27977;
var statearr_27983_28002 = state_27977__$1;
(statearr_27983_28002[(2)] = inst_27973);

(statearr_27983_28002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27978 === (7))){
var inst_27961 = (state_27977[(2)]);
var inst_27962 = modal_synth.utils.listen.call(null,fader_assign_handle,"dragend");
var inst_27963 = [new cljs.core.Keyword(null,"audio-fader","audio-fader",2132086428),new cljs.core.Keyword(null,"cycle-fader","cycle-fader",-836872222)];
var inst_27964 = [audio_fader_wrap,cycle_fader_wrap];
var inst_27965 = cljs.core.PersistentHashMap.fromArrays(inst_27963,inst_27964);
var inst_27966 = cljs.core.reset_BANG_.call(null,drag_and_drop_cycle,inst_27965);
var state_27977__$1 = (function (){var statearr_27984 = state_27977;
(statearr_27984[(7)] = inst_27966);

(statearr_27984[(8)] = inst_27961);

return statearr_27984;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27977__$1,(8),inst_27962);
} else {
if((state_val_27978 === (8))){
var inst_27968 = (state_27977[(2)]);
var inst_27969 = cljs.core.reset_BANG_.call(null,drag_and_drop_cycle,null);
var state_27977__$1 = (function (){var statearr_27985 = state_27977;
(statearr_27985[(9)] = inst_27969);

(statearr_27985[(10)] = inst_27968);

return statearr_27985;
})();
var statearr_27986_28003 = state_27977__$1;
(statearr_27986_28003[(2)] = null);

(statearr_27986_28003[(1)] = (2));


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
});})(c__26831__auto___27998,cycle_element,node_div,cycle_fader_wrap,audio_fader_wrap,nodes,controls_div,fader_assign_handle,decrement_nodes,increment_nodes,smooth,tick_BANG_,dragstart_chan,map__27952,map__27952__$1,freq))
;
return ((function (switch__26810__auto__,c__26831__auto___27998,cycle_element,node_div,cycle_fader_wrap,audio_fader_wrap,nodes,controls_div,fader_assign_handle,decrement_nodes,increment_nodes,smooth,tick_BANG_,dragstart_chan,map__27952,map__27952__$1,freq){
return (function() {
var modal_synth$cycles$state_machine__26811__auto__ = null;
var modal_synth$cycles$state_machine__26811__auto____0 = (function (){
var statearr_27990 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27990[(0)] = modal_synth$cycles$state_machine__26811__auto__);

(statearr_27990[(1)] = (1));

return statearr_27990;
});
var modal_synth$cycles$state_machine__26811__auto____1 = (function (state_27977){
while(true){
var ret_value__26812__auto__ = (function (){try{while(true){
var result__26813__auto__ = switch__26810__auto__.call(null,state_27977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26813__auto__;
}
break;
}
}catch (e27991){if((e27991 instanceof Object)){
var ex__26814__auto__ = e27991;
var statearr_27992_28004 = state_27977;
(statearr_27992_28004[(5)] = ex__26814__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28005 = state_27977;
state_27977 = G__28005;
continue;
} else {
return ret_value__26812__auto__;
}
break;
}
});
modal_synth$cycles$state_machine__26811__auto__ = function(state_27977){
switch(arguments.length){
case 0:
return modal_synth$cycles$state_machine__26811__auto____0.call(this);
case 1:
return modal_synth$cycles$state_machine__26811__auto____1.call(this,state_27977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modal_synth$cycles$state_machine__26811__auto__.cljs$core$IFn$_invoke$arity$0 = modal_synth$cycles$state_machine__26811__auto____0;
modal_synth$cycles$state_machine__26811__auto__.cljs$core$IFn$_invoke$arity$1 = modal_synth$cycles$state_machine__26811__auto____1;
return modal_synth$cycles$state_machine__26811__auto__;
})()
;})(switch__26810__auto__,c__26831__auto___27998,cycle_element,node_div,cycle_fader_wrap,audio_fader_wrap,nodes,controls_div,fader_assign_handle,decrement_nodes,increment_nodes,smooth,tick_BANG_,dragstart_chan,map__27952,map__27952__$1,freq))
})();
var state__26833__auto__ = (function (){var statearr_27993 = f__26832__auto__.call(null);
(statearr_27993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26831__auto___27998);

return statearr_27993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26833__auto__);
});})(c__26831__auto___27998,cycle_element,node_div,cycle_fader_wrap,audio_fader_wrap,nodes,controls_div,fader_assign_handle,decrement_nodes,increment_nodes,smooth,tick_BANG_,dragstart_chan,map__27952,map__27952__$1,freq))
);


dommy.core.append_BANG_.call(null,cycle_element,fader_assign_handle);

dommy.core.append_BANG_.call(null,cycle_element,decrement_nodes);

dommy.core.append_BANG_.call(null,cycle_element,increment_nodes);

cljs.core.swap_BANG_.call(null,nodes,cljs.core.doall);

cljs.core.doall.call(null,cljs.core.map.call(null,((function (cycle_element,node_div,cycle_fader_wrap,audio_fader_wrap,nodes,controls_div,fader_assign_handle,decrement_nodes,increment_nodes,smooth,tick_BANG_,dragstart_chan,map__27952,map__27952__$1,freq){
return (function (node){
return dommy.core.append_BANG_.call(null,node_div,new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(node));
});})(cycle_element,node_div,cycle_fader_wrap,audio_fader_wrap,nodes,controls_div,fader_assign_handle,decrement_nodes,increment_nodes,smooth,tick_BANG_,dragstart_chan,map__27952,map__27952__$1,freq))
,cljs.core.deref.call(null,nodes)));

return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"element","element",1974019749),cycle_element,new cljs.core.Keyword(null,"node-div","node-div",-1199111024),node_div,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes,new cljs.core.Keyword(null,"freq","freq",-1855845278),freq,new cljs.core.Keyword(null,"tick!","tick!",68058958),tick_BANG_,new cljs.core.Keyword(null,"cycle-fader","cycle-fader",-836872222),cycle_fader_wrap,new cljs.core.Keyword(null,"audio-fader","audio-fader",2132086428),audio_fader_wrap,new cljs.core.Keyword(null,"smooth","smooth",-809843519),smooth], null);
});

modal_synth.cycles.create.cljs$lang$maxFixedArity = (6);

modal_synth.cycles.create.cljs$lang$applyTo = (function (seq27944){
var G__27945 = cljs.core.first.call(null,seq27944);
var seq27944__$1 = cljs.core.next.call(null,seq27944);
var G__27946 = cljs.core.first.call(null,seq27944__$1);
var seq27944__$2 = cljs.core.next.call(null,seq27944__$1);
var G__27947 = cljs.core.first.call(null,seq27944__$2);
var seq27944__$3 = cljs.core.next.call(null,seq27944__$2);
var G__27948 = cljs.core.first.call(null,seq27944__$3);
var seq27944__$4 = cljs.core.next.call(null,seq27944__$3);
var G__27949 = cljs.core.first.call(null,seq27944__$4);
var seq27944__$5 = cljs.core.next.call(null,seq27944__$4);
var G__27950 = cljs.core.first.call(null,seq27944__$5);
var seq27944__$6 = cljs.core.next.call(null,seq27944__$5);
return modal_synth.cycles.create.cljs$core$IFn$_invoke$arity$variadic(G__27945,G__27946,G__27947,G__27948,G__27949,G__27950,seq27944__$6);
});


//# sourceMappingURL=cycles.js.map?rel=1517065385948