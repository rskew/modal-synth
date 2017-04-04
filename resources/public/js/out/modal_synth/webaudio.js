// Compiled by ClojureScript 1.9.229 {}
goog.provide('modal_synth.webaudio');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('modal_synth.utils');
modal_synth.webaudio.create_audio_context = (function modal_synth$webaudio$create_audio_context(){
if(cljs.core.truth_(window.AudioContext)){
return (new window.AudioContext());
} else {
return (new window.webkitAudioContext());
}
});
modal_synth.webaudio.get_now = (function modal_synth$webaudio$get_now(audio_context){
return audio_context.currentTime;
});
modal_synth.webaudio.destination = (function modal_synth$webaudio$destination(audio_context){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input-node","input-node",-1489678281),audio_context.destination,new cljs.core.Keyword(null,"output-node","output-node",-726641186),null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Fanin","Fanin",1370374010)], null);
});
modal_synth.webaudio.fanout = (function modal_synth$webaudio$fanout(graph){
return cljs.core.assoc.call(null,graph,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Fanout","Fanout",1899803893));
});
modal_synth.webaudio.fanin = (function modal_synth$webaudio$fanin(graph){
return cljs.core.assoc.call(null,graph,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Fanin","Fanin",1370374010));
});
if(typeof modal_synth.webaudio.connect !== 'undefined'){
} else {
modal_synth.webaudio.connect = (function (){var method_table__25702__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__25703__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__25704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__25705__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__25706__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"modal-synth.webaudio","connect"),((function (method_table__25702__auto__,prefer_table__25703__auto__,method_cache__25704__auto__,cached_hierarchy__25705__auto__,hierarchy__25706__auto__){
return (function (graph1,graph2){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(graph1),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(graph2)], null);
});})(method_table__25702__auto__,prefer_table__25703__auto__,method_cache__25704__auto__,cached_hierarchy__25705__auto__,hierarchy__25706__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__25706__auto__,method_table__25702__auto__,prefer_table__25703__auto__,method_cache__25704__auto__,cached_hierarchy__25705__auto__));
})();
}
cljs.core._add_method.call(null,modal_synth.webaudio.connect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Fanout","Fanout",1899803893),null], null),(function (fanout,sink_graphs){
var seq__43551 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fanout], null));
var chunk__43556 = null;
var count__43557 = (0);
var i__43558 = (0);
while(true){
if((i__43558 < count__43557)){
var source = cljs.core._nth.call(null,chunk__43556,i__43558);
var seq__43559_43563 = cljs.core.seq.call(null,sink_graphs);
var chunk__43560_43564 = null;
var count__43561_43565 = (0);
var i__43562_43566 = (0);
while(true){
if((i__43562_43566 < count__43561_43565)){
var sink_43567 = cljs.core._nth.call(null,chunk__43560_43564,i__43562_43566);
modal_synth.webaudio.connect.call(null,source,sink_43567);

var G__43568 = seq__43559_43563;
var G__43569 = chunk__43560_43564;
var G__43570 = count__43561_43565;
var G__43571 = (i__43562_43566 + (1));
seq__43559_43563 = G__43568;
chunk__43560_43564 = G__43569;
count__43561_43565 = G__43570;
i__43562_43566 = G__43571;
continue;
} else {
var temp__4657__auto___43572 = cljs.core.seq.call(null,seq__43559_43563);
if(temp__4657__auto___43572){
var seq__43559_43573__$1 = temp__4657__auto___43572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43559_43573__$1)){
var c__25588__auto___43574 = cljs.core.chunk_first.call(null,seq__43559_43573__$1);
var G__43575 = cljs.core.chunk_rest.call(null,seq__43559_43573__$1);
var G__43576 = c__25588__auto___43574;
var G__43577 = cljs.core.count.call(null,c__25588__auto___43574);
var G__43578 = (0);
seq__43559_43563 = G__43575;
chunk__43560_43564 = G__43576;
count__43561_43565 = G__43577;
i__43562_43566 = G__43578;
continue;
} else {
var sink_43579 = cljs.core.first.call(null,seq__43559_43573__$1);
modal_synth.webaudio.connect.call(null,source,sink_43579);

var G__43580 = cljs.core.next.call(null,seq__43559_43573__$1);
var G__43581 = null;
var G__43582 = (0);
var G__43583 = (0);
seq__43559_43563 = G__43580;
chunk__43560_43564 = G__43581;
count__43561_43565 = G__43582;
i__43562_43566 = G__43583;
continue;
}
} else {
}
}
break;
}

var G__43584 = seq__43551;
var G__43585 = chunk__43556;
var G__43586 = count__43557;
var G__43587 = (i__43558 + (1));
seq__43551 = G__43584;
chunk__43556 = G__43585;
count__43557 = G__43586;
i__43558 = G__43587;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43551);
if(temp__4657__auto__){
var seq__43551__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43551__$1)){
var c__25588__auto__ = cljs.core.chunk_first.call(null,seq__43551__$1);
var G__43588 = cljs.core.chunk_rest.call(null,seq__43551__$1);
var G__43589 = c__25588__auto__;
var G__43590 = cljs.core.count.call(null,c__25588__auto__);
var G__43591 = (0);
seq__43551 = G__43588;
chunk__43556 = G__43589;
count__43557 = G__43590;
i__43558 = G__43591;
continue;
} else {
var source = cljs.core.first.call(null,seq__43551__$1);
var seq__43552_43592 = cljs.core.seq.call(null,sink_graphs);
var chunk__43553_43593 = null;
var count__43554_43594 = (0);
var i__43555_43595 = (0);
while(true){
if((i__43555_43595 < count__43554_43594)){
var sink_43596 = cljs.core._nth.call(null,chunk__43553_43593,i__43555_43595);
modal_synth.webaudio.connect.call(null,source,sink_43596);

var G__43597 = seq__43552_43592;
var G__43598 = chunk__43553_43593;
var G__43599 = count__43554_43594;
var G__43600 = (i__43555_43595 + (1));
seq__43552_43592 = G__43597;
chunk__43553_43593 = G__43598;
count__43554_43594 = G__43599;
i__43555_43595 = G__43600;
continue;
} else {
var temp__4657__auto___43601__$1 = cljs.core.seq.call(null,seq__43552_43592);
if(temp__4657__auto___43601__$1){
var seq__43552_43602__$1 = temp__4657__auto___43601__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43552_43602__$1)){
var c__25588__auto___43603 = cljs.core.chunk_first.call(null,seq__43552_43602__$1);
var G__43604 = cljs.core.chunk_rest.call(null,seq__43552_43602__$1);
var G__43605 = c__25588__auto___43603;
var G__43606 = cljs.core.count.call(null,c__25588__auto___43603);
var G__43607 = (0);
seq__43552_43592 = G__43604;
chunk__43553_43593 = G__43605;
count__43554_43594 = G__43606;
i__43555_43595 = G__43607;
continue;
} else {
var sink_43608 = cljs.core.first.call(null,seq__43552_43602__$1);
modal_synth.webaudio.connect.call(null,source,sink_43608);

var G__43609 = cljs.core.next.call(null,seq__43552_43602__$1);
var G__43610 = null;
var G__43611 = (0);
var G__43612 = (0);
seq__43552_43592 = G__43609;
chunk__43553_43593 = G__43610;
count__43554_43594 = G__43611;
i__43555_43595 = G__43612;
continue;
}
} else {
}
}
break;
}

var G__43613 = cljs.core.next.call(null,seq__43551__$1);
var G__43614 = null;
var G__43615 = (0);
var G__43616 = (0);
seq__43551 = G__43613;
chunk__43556 = G__43614;
count__43557 = G__43615;
i__43558 = G__43616;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,modal_synth.webaudio.connect,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.Keyword(null,"Fanin","Fanin",1370374010)], null),(function (source_graphs,fanin){
var seq__43617 = cljs.core.seq.call(null,source_graphs);
var chunk__43622 = null;
var count__43623 = (0);
var i__43624 = (0);
while(true){
if((i__43624 < count__43623)){
var source = cljs.core._nth.call(null,chunk__43622,i__43624);
var seq__43625_43629 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fanin], null));
var chunk__43626_43630 = null;
var count__43627_43631 = (0);
var i__43628_43632 = (0);
while(true){
if((i__43628_43632 < count__43627_43631)){
var sink_43633 = cljs.core._nth.call(null,chunk__43626_43630,i__43628_43632);
modal_synth.webaudio.connect.call(null,source,sink_43633);

var G__43634 = seq__43625_43629;
var G__43635 = chunk__43626_43630;
var G__43636 = count__43627_43631;
var G__43637 = (i__43628_43632 + (1));
seq__43625_43629 = G__43634;
chunk__43626_43630 = G__43635;
count__43627_43631 = G__43636;
i__43628_43632 = G__43637;
continue;
} else {
var temp__4657__auto___43638 = cljs.core.seq.call(null,seq__43625_43629);
if(temp__4657__auto___43638){
var seq__43625_43639__$1 = temp__4657__auto___43638;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43625_43639__$1)){
var c__25588__auto___43640 = cljs.core.chunk_first.call(null,seq__43625_43639__$1);
var G__43641 = cljs.core.chunk_rest.call(null,seq__43625_43639__$1);
var G__43642 = c__25588__auto___43640;
var G__43643 = cljs.core.count.call(null,c__25588__auto___43640);
var G__43644 = (0);
seq__43625_43629 = G__43641;
chunk__43626_43630 = G__43642;
count__43627_43631 = G__43643;
i__43628_43632 = G__43644;
continue;
} else {
var sink_43645 = cljs.core.first.call(null,seq__43625_43639__$1);
modal_synth.webaudio.connect.call(null,source,sink_43645);

var G__43646 = cljs.core.next.call(null,seq__43625_43639__$1);
var G__43647 = null;
var G__43648 = (0);
var G__43649 = (0);
seq__43625_43629 = G__43646;
chunk__43626_43630 = G__43647;
count__43627_43631 = G__43648;
i__43628_43632 = G__43649;
continue;
}
} else {
}
}
break;
}

var G__43650 = seq__43617;
var G__43651 = chunk__43622;
var G__43652 = count__43623;
var G__43653 = (i__43624 + (1));
seq__43617 = G__43650;
chunk__43622 = G__43651;
count__43623 = G__43652;
i__43624 = G__43653;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43617);
if(temp__4657__auto__){
var seq__43617__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43617__$1)){
var c__25588__auto__ = cljs.core.chunk_first.call(null,seq__43617__$1);
var G__43654 = cljs.core.chunk_rest.call(null,seq__43617__$1);
var G__43655 = c__25588__auto__;
var G__43656 = cljs.core.count.call(null,c__25588__auto__);
var G__43657 = (0);
seq__43617 = G__43654;
chunk__43622 = G__43655;
count__43623 = G__43656;
i__43624 = G__43657;
continue;
} else {
var source = cljs.core.first.call(null,seq__43617__$1);
var seq__43618_43658 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fanin], null));
var chunk__43619_43659 = null;
var count__43620_43660 = (0);
var i__43621_43661 = (0);
while(true){
if((i__43621_43661 < count__43620_43660)){
var sink_43662 = cljs.core._nth.call(null,chunk__43619_43659,i__43621_43661);
modal_synth.webaudio.connect.call(null,source,sink_43662);

var G__43663 = seq__43618_43658;
var G__43664 = chunk__43619_43659;
var G__43665 = count__43620_43660;
var G__43666 = (i__43621_43661 + (1));
seq__43618_43658 = G__43663;
chunk__43619_43659 = G__43664;
count__43620_43660 = G__43665;
i__43621_43661 = G__43666;
continue;
} else {
var temp__4657__auto___43667__$1 = cljs.core.seq.call(null,seq__43618_43658);
if(temp__4657__auto___43667__$1){
var seq__43618_43668__$1 = temp__4657__auto___43667__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43618_43668__$1)){
var c__25588__auto___43669 = cljs.core.chunk_first.call(null,seq__43618_43668__$1);
var G__43670 = cljs.core.chunk_rest.call(null,seq__43618_43668__$1);
var G__43671 = c__25588__auto___43669;
var G__43672 = cljs.core.count.call(null,c__25588__auto___43669);
var G__43673 = (0);
seq__43618_43658 = G__43670;
chunk__43619_43659 = G__43671;
count__43620_43660 = G__43672;
i__43621_43661 = G__43673;
continue;
} else {
var sink_43674 = cljs.core.first.call(null,seq__43618_43668__$1);
modal_synth.webaudio.connect.call(null,source,sink_43674);

var G__43675 = cljs.core.next.call(null,seq__43618_43668__$1);
var G__43676 = null;
var G__43677 = (0);
var G__43678 = (0);
seq__43618_43658 = G__43675;
chunk__43619_43659 = G__43676;
count__43620_43660 = G__43677;
i__43621_43661 = G__43678;
continue;
}
} else {
}
}
break;
}

var G__43679 = cljs.core.next.call(null,seq__43617__$1);
var G__43680 = null;
var G__43681 = (0);
var G__43682 = (0);
seq__43617 = G__43679;
chunk__43622 = G__43680;
count__43623 = G__43681;
i__43624 = G__43682;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,modal_synth.webaudio.connect,new cljs.core.Keyword(null,"default","default",-1987822328),(function (source_graph,sink_graph){
new cljs.core.Keyword(null,"output-node","output-node",-726641186).cljs$core$IFn$_invoke$arity$1(source_graph).connect(new cljs.core.Keyword(null,"input-node","input-node",-1489678281).cljs$core$IFn$_invoke$arity$1(sink_graph));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input-node","input-node",-1489678281),new cljs.core.Keyword(null,"input-node","input-node",-1489678281).cljs$core$IFn$_invoke$arity$1(source_graph),new cljs.core.Keyword(null,"output-node","output-node",-726641186),new cljs.core.Keyword(null,"output-node","output-node",-726641186).cljs$core$IFn$_invoke$arity$1(sink_graph),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Graph","Graph",-1424984007)], null);
}));
modal_synth.webaudio.get_gain = (function modal_synth$webaudio$get_gain(gain_graph){
return new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(gain_graph).gain;
});
modal_synth.webaudio.set_gain_BANG_ = (function modal_synth$webaudio$set_gain_BANG_(gain_graph,new_gain){
return new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(gain_graph).gain.value = new_gain;
});
modal_synth.webaudio.make_gain = (function modal_synth$webaudio$make_gain(init_gain,audio_context){
var gain_node = audio_context.createGain();
var gain_graph = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"input-node","input-node",-1489678281),gain_node,new cljs.core.Keyword(null,"output-node","output-node",-726641186),gain_node,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Gain","Gain",-983157825),new cljs.core.Keyword(null,"node","node",581201198),gain_node], null);
modal_synth.webaudio.set_gain_BANG_.call(null,gain_graph,init_gain);

return gain_graph;
});
modal_synth.webaudio.make_compressor = (function modal_synth$webaudio$make_compressor(var_args){
var args__25859__auto__ = [];
var len__25852__auto___43689 = arguments.length;
var i__25853__auto___43690 = (0);
while(true){
if((i__25853__auto___43690 < len__25852__auto___43689)){
args__25859__auto__.push((arguments[i__25853__auto___43690]));

var G__43691 = (i__25853__auto___43690 + (1));
i__25853__auto___43690 = G__43691;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((1) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((1)),(0),null)):null);
return modal_synth.webaudio.make_compressor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25860__auto__);
});

modal_synth.webaudio.make_compressor.cljs$core$IFn$_invoke$arity$variadic = (function (audio_context,p__43685){
var map__43686 = p__43685;
var map__43686__$1 = ((((!((map__43686 == null)))?((((map__43686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43686):map__43686);
var threshold = cljs.core.get.call(null,map__43686__$1,new cljs.core.Keyword(null,"threshold","threshold",204221583),(-24));
var knee = cljs.core.get.call(null,map__43686__$1,new cljs.core.Keyword(null,"knee","knee",-968652302),(30));
var ratio = cljs.core.get.call(null,map__43686__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044),(12));
var attack = cljs.core.get.call(null,map__43686__$1,new cljs.core.Keyword(null,"attack","attack",1957061788),0.003);
var release = cljs.core.get.call(null,map__43686__$1,new cljs.core.Keyword(null,"release","release",-1534371381),0.25);
var compressor_node = audio_context.createDynamicsCompressor();
var compressor_graph = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"input-node","input-node",-1489678281),compressor_node,new cljs.core.Keyword(null,"output-node","output-node",-726641186),compressor_node,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Compressor","Compressor",-399517845),new cljs.core.Keyword(null,"node","node",581201198),compressor_node], null);
var G__43688_43692 = compressor_node;
G__43688_43692.threshold.value = threshold;

G__43688_43692.knee.value = knee;

G__43688_43692.ratio.value = ratio;

G__43688_43692.attack.value = attack;

G__43688_43692.release.value = release;


return compressor_graph;
});

modal_synth.webaudio.make_compressor.cljs$lang$maxFixedArity = (1);

modal_synth.webaudio.make_compressor.cljs$lang$applyTo = (function (seq43683){
var G__43684 = cljs.core.first.call(null,seq43683);
var seq43683__$1 = cljs.core.next.call(null,seq43683);
return modal_synth.webaudio.make_compressor.cljs$core$IFn$_invoke$arity$variadic(G__43684,seq43683__$1);
});

modal_synth.webaudio.set_delay_time_BANG_ = (function modal_synth$webaudio$set_delay_time_BANG_(delay_graph,new_delay_time){
return new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(delay_graph).delayTime.value = new_delay_time;
});
modal_synth.webaudio.make_delay_line = (function modal_synth$webaudio$make_delay_line(max_delay_time,audio_context){
var delay_node = audio_context.createDelay(max_delay_time);
var delay_graph = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"input-node","input-node",-1489678281),delay_node,new cljs.core.Keyword(null,"output-node","output-node",-726641186),delay_node,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Delay","Delay",1697640197),new cljs.core.Keyword(null,"node","node",581201198),delay_node], null);
return delay_graph;
});
modal_synth.webaudio.make_osc = (function modal_synth$webaudio$make_osc(var_args){
var args__25859__auto__ = [];
var len__25852__auto___43699 = arguments.length;
var i__25853__auto___43700 = (0);
while(true){
if((i__25853__auto___43700 < len__25852__auto___43699)){
args__25859__auto__.push((arguments[i__25853__auto___43700]));

var G__43701 = (i__25853__auto___43700 + (1));
i__25853__auto___43700 = G__43701;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((2) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((2)),(0),null)):null);
return modal_synth.webaudio.make_osc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25860__auto__);
});

modal_synth.webaudio.make_osc.cljs$core$IFn$_invoke$arity$variadic = (function (freq,audio_context,p__43696){
var map__43697 = p__43696;
var map__43697__$1 = ((((!((map__43697 == null)))?((((map__43697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43697):map__43697);
var osc_type = cljs.core.get.call(null,map__43697__$1,new cljs.core.Keyword(null,"osc-type","osc-type",1936803365));
var osc_node = audio_context.createOscillator();
osc_node.frequency.value = freq;

osc_node.type = osc_type;

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"input-node","input-node",-1489678281),null,new cljs.core.Keyword(null,"output-node","output-node",-726641186),osc_node,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Osc","Osc",-215134621),new cljs.core.Keyword(null,"node","node",581201198),osc_node], null);
});

modal_synth.webaudio.make_osc.cljs$lang$maxFixedArity = (2);

modal_synth.webaudio.make_osc.cljs$lang$applyTo = (function (seq43693){
var G__43694 = cljs.core.first.call(null,seq43693);
var seq43693__$1 = cljs.core.next.call(null,seq43693);
var G__43695 = cljs.core.first.call(null,seq43693__$1);
var seq43693__$2 = cljs.core.next.call(null,seq43693__$1);
return modal_synth.webaudio.make_osc.cljs$core$IFn$_invoke$arity$variadic(G__43694,G__43695,seq43693__$2);
});

modal_synth.webaudio.osc_start = (function modal_synth$webaudio$osc_start(osc,start_time){
return new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(osc).start(start_time);
});
modal_synth.webaudio.osc_stop = (function modal_synth$webaudio$osc_stop(osc,stop_time){
return new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(osc).stop(stop_time);
});
modal_synth.webaudio.make_bandpass = (function modal_synth$webaudio$make_bandpass(highpass_cutoff,lowpass_cutoff,audio_context){
var highpass_node = audio_context.createBiquadFilter();
var lowpass_node = audio_context.createBiquadFilter();
var Q_val = 1.0E-255;
var G__43704_43706 = highpass_node;
G__43704_43706.type = "highpass";

G__43704_43706.frequency.value = highpass_cutoff;

G__43704_43706.Q.value = Q_val;


var G__43705_43707 = lowpass_node;
G__43705_43707.type = "lowpass";

G__43705_43707.frequency.value = lowpass_cutoff;

G__43705_43707.Q.value = Q_val;


lowpass_node.connect(highpass_node);

return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"input-node","input-node",-1489678281),lowpass_node,new cljs.core.Keyword(null,"output-node","output-node",-726641186),highpass_node,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Bandpass","Bandpass",-2105196290),new cljs.core.Keyword(null,"lowpass-node","lowpass-node",-558045431),lowpass_node,new cljs.core.Keyword(null,"highpass-node","highpass-node",-186034932),highpass_node,new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310),lowpass_cutoff,new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000),highpass_cutoff], null);
});
modal_synth.webaudio.set_lowpass_cutoff_BANG_ = (function modal_synth$webaudio$set_lowpass_cutoff_BANG_(bandpass,new_lowpass_cutoff){
cljs.core.print.call(null,"setting lowpass to ",new_lowpass_cutoff);

return new cljs.core.Keyword(null,"lowpass-node","lowpass-node",-558045431).cljs$core$IFn$_invoke$arity$1(bandpass).frequency.value = new_lowpass_cutoff;
});
modal_synth.webaudio.set_highpass_cutoff_BANG_ = (function modal_synth$webaudio$set_highpass_cutoff_BANG_(bandpass,new_highpass_cutoff){
cljs.core.print.call(null,"setting highpass to ",new_highpass_cutoff);

return new cljs.core.Keyword(null,"highpass-node","highpass-node",-186034932).cljs$core$IFn$_invoke$arity$1(bandpass).frequency.value = new_highpass_cutoff;
});
modal_synth.webaudio.make_noise_buffer = (function modal_synth$webaudio$make_noise_buffer(var_args){
var args__25859__auto__ = [];
var len__25852__auto___43714 = arguments.length;
var i__25853__auto___43715 = (0);
while(true){
if((i__25853__auto___43715 < len__25852__auto___43714)){
args__25859__auto__.push((arguments[i__25853__auto___43715]));

var G__43716 = (i__25853__auto___43715 + (1));
i__25853__auto___43715 = G__43716;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((2) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((2)),(0),null)):null);
return modal_synth.webaudio.make_noise_buffer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25860__auto__);
});

modal_synth.webaudio.make_noise_buffer.cljs$core$IFn$_invoke$arity$variadic = (function (length,audio_context,p__43711){
var map__43712 = p__43711;
var map__43712__$1 = ((((!((map__43712 == null)))?((((map__43712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43712):map__43712);
var noise_type = cljs.core.get.call(null,map__43712__$1,new cljs.core.Keyword(null,"noise-type","noise-type",739698482));
var buffer_size = (length * audio_context.sampleRate);
var noise_buffer = audio_context.createBuffer((1),buffer_size,audio_context.sampleRate);
var noise_buffer_data = noise_buffer.getChannelData((0));
var generate_noise_sample = ((function (buffer_size,noise_buffer,noise_buffer_data,map__43712,map__43712__$1,noise_type){
return (function (){
return ((cljs.core.rand.call(null) * (2)) - (1));
});})(buffer_size,noise_buffer,noise_buffer_data,map__43712,map__43712__$1,noise_type))
;
if(cljs.core._EQ_.call(null,noise_type,new cljs.core.Keyword(null,"brownian","brownian",-211478877))){
var n__25692__auto___43717 = buffer_size;
var i_43718 = (0);
while(true){
if((i_43718 < n__25692__auto___43717)){
var prev_sample_43719 = (noise_buffer_data[i_43718]);
var uptake_43720 = 0.03;
var filtered_sample_43721 = (((generate_noise_sample.call(null) * uptake_43720) + prev_sample_43719) / (1.0 + uptake_43720));
(noise_buffer_data[(i_43718 + (1))] = filtered_sample_43721);

var G__43722 = (i_43718 + (1));
i_43718 = G__43722;
continue;
} else {
}
break;
}

var n__25692__auto___43723 = buffer_size;
var i_43724 = (0);
while(true){
if((i_43724 < n__25692__auto___43723)){
var sample_43725 = (noise_buffer_data[i_43724]);
var makeup_gain_43726 = 3.5;
(noise_buffer_data[i_43724] = (sample_43725 * makeup_gain_43726));

var G__43727 = (i_43724 + (1));
i_43724 = G__43727;
continue;
} else {
}
break;
}
} else {
var n__25692__auto___43728 = buffer_size;
var i_43729 = (0);
while(true){
if((i_43729 < n__25692__auto___43728)){
(noise_buffer_data[i_43729] = generate_noise_sample.call(null));

var G__43730 = (i_43729 + (1));
i_43729 = G__43730;
continue;
} else {
}
break;
}

}

return noise_buffer;
});

modal_synth.webaudio.make_noise_buffer.cljs$lang$maxFixedArity = (2);

modal_synth.webaudio.make_noise_buffer.cljs$lang$applyTo = (function (seq43708){
var G__43709 = cljs.core.first.call(null,seq43708);
var seq43708__$1 = cljs.core.next.call(null,seq43708);
var G__43710 = cljs.core.first.call(null,seq43708__$1);
var seq43708__$2 = cljs.core.next.call(null,seq43708__$1);
return modal_synth.webaudio.make_noise_buffer.cljs$core$IFn$_invoke$arity$variadic(G__43709,G__43710,seq43708__$2);
});

modal_synth.webaudio.make_noise_osc = (function modal_synth$webaudio$make_noise_osc(var_args){
var args__25859__auto__ = [];
var len__25852__auto___43736 = arguments.length;
var i__25853__auto___43737 = (0);
while(true){
if((i__25853__auto___43737 < len__25852__auto___43736)){
args__25859__auto__.push((arguments[i__25853__auto___43737]));

var G__43738 = (i__25853__auto___43737 + (1));
i__25853__auto___43737 = G__43738;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((1) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((1)),(0),null)):null);
return modal_synth.webaudio.make_noise_osc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25860__auto__);
});

modal_synth.webaudio.make_noise_osc.cljs$core$IFn$_invoke$arity$variadic = (function (audio_context,p__43733){
var map__43734 = p__43733;
var map__43734__$1 = ((((!((map__43734 == null)))?((((map__43734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43734):map__43734);
var highpass_cutoff = cljs.core.get.call(null,map__43734__$1,new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000),(0));
var lowpass_cutoff = cljs.core.get.call(null,map__43734__$1,new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310),(3000));
var noise_buffer = modal_synth.webaudio.make_noise_buffer.call(null,(5),audio_context,new cljs.core.Keyword(null,"noise-type","noise-type",739698482),new cljs.core.Keyword(null,"brownian","brownian",-211478877));
var noise_buffer_source = audio_context.createBufferSource();
var bandpass = modal_synth.webaudio.make_bandpass.call(null,highpass_cutoff,lowpass_cutoff,audio_context);
noise_buffer_source.buffer = noise_buffer;

noise_buffer_source.connect(new cljs.core.Keyword(null,"input-node","input-node",-1489678281).cljs$core$IFn$_invoke$arity$1(bandpass));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"input-node","input-node",-1489678281),null,new cljs.core.Keyword(null,"output-node","output-node",-726641186),new cljs.core.Keyword(null,"output-node","output-node",-726641186).cljs$core$IFn$_invoke$arity$1(bandpass),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"NoiseOsc","NoiseOsc",-1408090371),new cljs.core.Keyword(null,"node","node",581201198),noise_buffer_source], null);
});

modal_synth.webaudio.make_noise_osc.cljs$lang$maxFixedArity = (1);

modal_synth.webaudio.make_noise_osc.cljs$lang$applyTo = (function (seq43731){
var G__43732 = cljs.core.first.call(null,seq43731);
var seq43731__$1 = cljs.core.next.call(null,seq43731);
return modal_synth.webaudio.make_noise_osc.cljs$core$IFn$_invoke$arity$variadic(G__43732,seq43731__$1);
});

modal_synth.webaudio.loop_noise_osc = (function modal_synth$webaudio$loop_noise_osc(noise_osc){
return new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(noise_osc).loop = "true";
});
modal_synth.webaudio.fire_noise_burst_through = (function modal_synth$webaudio$fire_noise_burst_through(graphs,freq,audio_context){
var noise_osc = modal_synth.webaudio.make_noise_osc.call(null,audio_context,new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000),(30),new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310),(1800));
var now = modal_synth.webaudio.get_now.call(null,audio_context);
modal_synth.webaudio.connect.call(null,modal_synth.webaudio.fanout.call(null,noise_osc),graphs);

modal_synth.webaudio.osc_start.call(null,noise_osc,now);

modal_synth.webaudio.osc_stop.call(null,noise_osc,(now + 0.025));

return cljs.core.print.call(null,"Fire!");
});
modal_synth.webaudio.make_adsr = (function modal_synth$webaudio$make_adsr(var_args){
var args__25859__auto__ = [];
var len__25852__auto___43747 = arguments.length;
var i__25853__auto___43748 = (0);
while(true){
if((i__25853__auto___43748 < len__25852__auto___43747)){
args__25859__auto__.push((arguments[i__25853__auto___43748]));

var G__43749 = (i__25853__auto___43748 + (1));
i__25853__auto___43748 = G__43749;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((4) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((4)),(0),null)):null);
return modal_synth.webaudio.make_adsr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25860__auto__);
});

modal_synth.webaudio.make_adsr.cljs$core$IFn$_invoke$arity$variadic = (function (attack_time,decay_time,sustain_level,release_time,p__43744){
var map__43745 = p__43744;
var map__43745__$1 = ((((!((map__43745 == null)))?((((map__43745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43745):map__43745);
var slope = cljs.core.get.call(null,map__43745__$1,new cljs.core.Keyword(null,"slope","slope",-1227938123));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"attack-time","attack-time",-1223233591),attack_time,new cljs.core.Keyword(null,"decay-time","decay-time",967759431),decay_time,new cljs.core.Keyword(null,"sustain-level","sustain-level",2030703043),sustain_level,new cljs.core.Keyword(null,"release-time","release-time",210242290),release_time,new cljs.core.Keyword(null,"slope","slope",-1227938123),slope], null);
});

modal_synth.webaudio.make_adsr.cljs$lang$maxFixedArity = (4);

modal_synth.webaudio.make_adsr.cljs$lang$applyTo = (function (seq43739){
var G__43740 = cljs.core.first.call(null,seq43739);
var seq43739__$1 = cljs.core.next.call(null,seq43739);
var G__43741 = cljs.core.first.call(null,seq43739__$1);
var seq43739__$2 = cljs.core.next.call(null,seq43739__$1);
var G__43742 = cljs.core.first.call(null,seq43739__$2);
var seq43739__$3 = cljs.core.next.call(null,seq43739__$2);
var G__43743 = cljs.core.first.call(null,seq43739__$3);
var seq43739__$4 = cljs.core.next.call(null,seq43739__$3);
return modal_synth.webaudio.make_adsr.cljs$core$IFn$_invoke$arity$variadic(G__43740,G__43741,G__43742,G__43743,seq43739__$4);
});

modal_synth.webaudio.apply_adsr = (function modal_synth$webaudio$apply_adsr(var_args){
var args__25859__auto__ = [];
var len__25852__auto___43791 = arguments.length;
var i__25853__auto___43792 = (0);
while(true){
if((i__25853__auto___43792 < len__25852__auto___43791)){
args__25859__auto__.push((arguments[i__25853__auto___43792]));

var G__43793 = (i__25853__auto___43792 + (1));
i__25853__auto___43792 = G__43793;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((4) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((4)),(0),null)):null);
return modal_synth.webaudio.apply_adsr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25860__auto__);
});

modal_synth.webaudio.apply_adsr.cljs$core$IFn$_invoke$arity$variadic = (function (param,adsr,noteoff_chan,audio_context,p__43755){
var map__43756 = p__43755;
var map__43756__$1 = ((((!((map__43756 == null)))?((((map__43756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43756):map__43756);
var start_time_offset = cljs.core.get.call(null,map__43756__$1,new cljs.core.Keyword(null,"start-time-offset","start-time-offset",-1189089602),(0));
var start_val = cljs.core.get.call(null,map__43756__$1,new cljs.core.Keyword(null,"start-val","start-val",-1126485981),1.0E-30);
var attack_peak_val = cljs.core.get.call(null,map__43756__$1,new cljs.core.Keyword(null,"attack-peak-val","attack-peak-val",-2074198938),(1));
var now = modal_synth.webaudio.get_now.call(null,audio_context);
var attack_start_time = (now + start_time_offset);
var decay_start_time = (attack_start_time + new cljs.core.Keyword(null,"attack-time","attack-time",-1223233591).cljs$core$IFn$_invoke$arity$1(adsr));
var sustain_start_time = (decay_start_time + new cljs.core.Keyword(null,"decay-time","decay-time",967759431).cljs$core$IFn$_invoke$arity$1(adsr));
var slope_func = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"slope","slope",-1227938123).cljs$core$IFn$_invoke$arity$1(adsr),new cljs.core.Keyword(null,"exponential","exponential",-1578523660)))?((function (now,attack_start_time,decay_start_time,sustain_start_time,map__43756,map__43756__$1,start_time_offset,start_val,attack_peak_val){
return (function (param__$1,new_val,at_time){
return param__$1.exponentialRampToValueAtTime(new_val,at_time);
});})(now,attack_start_time,decay_start_time,sustain_start_time,map__43756,map__43756__$1,start_time_offset,start_val,attack_peak_val))
:((function (now,attack_start_time,decay_start_time,sustain_start_time,map__43756,map__43756__$1,start_time_offset,start_val,attack_peak_val){
return (function (param__$1,new_val,at_time){
return param__$1.linearRampToValueAtTime(new_val,at_time);
});})(now,attack_start_time,decay_start_time,sustain_start_time,map__43756,map__43756__$1,start_time_offset,start_val,attack_peak_val))
);
param.setValueAtTime(start_val,attack_start_time);

slope_func.call(null,param,attack_peak_val,decay_start_time);

slope_func.call(null,param,new cljs.core.Keyword(null,"sustain-level","sustain-level",2030703043).cljs$core$IFn$_invoke$arity$1(adsr),sustain_start_time);

var c__27957__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27957__auto__,now,attack_start_time,decay_start_time,sustain_start_time,slope_func,map__43756,map__43756__$1,start_time_offset,start_val,attack_peak_val){
return (function (){
var f__27958__auto__ = (function (){var switch__27892__auto__ = ((function (c__27957__auto__,now,attack_start_time,decay_start_time,sustain_start_time,slope_func,map__43756,map__43756__$1,start_time_offset,start_val,attack_peak_val){
return (function (state_43775){
var state_val_43776 = (state_43775[(1)]);
if((state_val_43776 === (1))){
var state_43775__$1 = state_43775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43775__$1,(2),noteoff_chan);
} else {
if((state_val_43776 === (2))){
var inst_43759 = (state_43775[(2)]);
var inst_43760 = cljs.core.print.call(null,"noteoff!");
var inst_43761 = modal_synth.webaudio.get_now.call(null,audio_context);
var inst_43762 = new cljs.core.Keyword(null,"release-time","release-time",210242290).cljs$core$IFn$_invoke$arity$1(adsr);
var inst_43763 = (inst_43761 + inst_43762);
var inst_43764 = slope_func.call(null,param,start_val,inst_43763);
var state_43775__$1 = (function (){var statearr_43777 = state_43775;
(statearr_43777[(7)] = inst_43760);

(statearr_43777[(8)] = inst_43764);

(statearr_43777[(9)] = inst_43759);

return statearr_43777;
})();
var statearr_43778_43794 = state_43775__$1;
(statearr_43778_43794[(2)] = null);

(statearr_43778_43794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43776 === (3))){
var inst_43766 = cljs.core.async.poll_BANG_.call(null,noteoff_chan);
var state_43775__$1 = state_43775;
if(cljs.core.truth_(inst_43766)){
var statearr_43779_43795 = state_43775__$1;
(statearr_43779_43795[(1)] = (5));

} else {
var statearr_43780_43796 = state_43775__$1;
(statearr_43780_43796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43776 === (4))){
var inst_43773 = (state_43775[(2)]);
var state_43775__$1 = state_43775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43775__$1,inst_43773);
} else {
if((state_val_43776 === (5))){
var state_43775__$1 = state_43775;
var statearr_43781_43797 = state_43775__$1;
(statearr_43781_43797[(2)] = null);

(statearr_43781_43797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43776 === (6))){
var state_43775__$1 = state_43775;
var statearr_43782_43798 = state_43775__$1;
(statearr_43782_43798[(2)] = null);

(statearr_43782_43798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43776 === (7))){
var inst_43771 = (state_43775[(2)]);
var state_43775__$1 = state_43775;
var statearr_43783_43799 = state_43775__$1;
(statearr_43783_43799[(2)] = inst_43771);

(statearr_43783_43799[(1)] = (4));


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
});})(c__27957__auto__,now,attack_start_time,decay_start_time,sustain_start_time,slope_func,map__43756,map__43756__$1,start_time_offset,start_val,attack_peak_val))
;
return ((function (switch__27892__auto__,c__27957__auto__,now,attack_start_time,decay_start_time,sustain_start_time,slope_func,map__43756,map__43756__$1,start_time_offset,start_val,attack_peak_val){
return (function() {
var modal_synth$webaudio$state_machine__27893__auto__ = null;
var modal_synth$webaudio$state_machine__27893__auto____0 = (function (){
var statearr_43787 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43787[(0)] = modal_synth$webaudio$state_machine__27893__auto__);

(statearr_43787[(1)] = (1));

return statearr_43787;
});
var modal_synth$webaudio$state_machine__27893__auto____1 = (function (state_43775){
while(true){
var ret_value__27894__auto__ = (function (){try{while(true){
var result__27895__auto__ = switch__27892__auto__.call(null,state_43775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27895__auto__;
}
break;
}
}catch (e43788){if((e43788 instanceof Object)){
var ex__27896__auto__ = e43788;
var statearr_43789_43800 = state_43775;
(statearr_43789_43800[(5)] = ex__27896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43801 = state_43775;
state_43775 = G__43801;
continue;
} else {
return ret_value__27894__auto__;
}
break;
}
});
modal_synth$webaudio$state_machine__27893__auto__ = function(state_43775){
switch(arguments.length){
case 0:
return modal_synth$webaudio$state_machine__27893__auto____0.call(this);
case 1:
return modal_synth$webaudio$state_machine__27893__auto____1.call(this,state_43775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modal_synth$webaudio$state_machine__27893__auto__.cljs$core$IFn$_invoke$arity$0 = modal_synth$webaudio$state_machine__27893__auto____0;
modal_synth$webaudio$state_machine__27893__auto__.cljs$core$IFn$_invoke$arity$1 = modal_synth$webaudio$state_machine__27893__auto____1;
return modal_synth$webaudio$state_machine__27893__auto__;
})()
;})(switch__27892__auto__,c__27957__auto__,now,attack_start_time,decay_start_time,sustain_start_time,slope_func,map__43756,map__43756__$1,start_time_offset,start_val,attack_peak_val))
})();
var state__27959__auto__ = (function (){var statearr_43790 = f__27958__auto__.call(null);
(statearr_43790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27957__auto__);

return statearr_43790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27959__auto__);
});})(c__27957__auto__,now,attack_start_time,decay_start_time,sustain_start_time,slope_func,map__43756,map__43756__$1,start_time_offset,start_val,attack_peak_val))
);

return c__27957__auto__;
});

modal_synth.webaudio.apply_adsr.cljs$lang$maxFixedArity = (4);

modal_synth.webaudio.apply_adsr.cljs$lang$applyTo = (function (seq43750){
var G__43751 = cljs.core.first.call(null,seq43750);
var seq43750__$1 = cljs.core.next.call(null,seq43750);
var G__43752 = cljs.core.first.call(null,seq43750__$1);
var seq43750__$2 = cljs.core.next.call(null,seq43750__$1);
var G__43753 = cljs.core.first.call(null,seq43750__$2);
var seq43750__$3 = cljs.core.next.call(null,seq43750__$2);
var G__43754 = cljs.core.first.call(null,seq43750__$3);
var seq43750__$4 = cljs.core.next.call(null,seq43750__$3);
return modal_synth.webaudio.apply_adsr.cljs$core$IFn$_invoke$arity$variadic(G__43751,G__43752,G__43753,G__43754,seq43750__$4);
});

modal_synth.webaudio.apply_ar_envelope = (function modal_synth$webaudio$apply_ar_envelope(var_args){
var args__25859__auto__ = [];
var len__25852__auto___43809 = arguments.length;
var i__25853__auto___43810 = (0);
while(true){
if((i__25853__auto___43810 < len__25852__auto___43809)){
args__25859__auto__.push((arguments[i__25853__auto___43810]));

var G__43811 = (i__25853__auto___43810 + (1));
i__25853__auto___43810 = G__43811;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((3) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((3)),(0),null)):null);
return modal_synth.webaudio.apply_ar_envelope.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25860__auto__);
});

modal_synth.webaudio.apply_ar_envelope.cljs$core$IFn$_invoke$arity$variadic = (function (param,adsr,audio_context,p__43806){
var map__43807 = p__43806;
var map__43807__$1 = ((((!((map__43807 == null)))?((((map__43807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43807):map__43807);
var start_time_offset = cljs.core.get.call(null,map__43807__$1,new cljs.core.Keyword(null,"start-time-offset","start-time-offset",-1189089602),(0));
var start_val = cljs.core.get.call(null,map__43807__$1,new cljs.core.Keyword(null,"start-val","start-val",-1126485981),1.0E-30);
var attack_peak_val = cljs.core.get.call(null,map__43807__$1,new cljs.core.Keyword(null,"attack-peak-val","attack-peak-val",-2074198938),(1));
var noteoff_chan = cljs.core.async.chan.call(null);
cljs.core.async.put_BANG_.call(null,noteoff_chan,new cljs.core.Keyword(null,"noteoff","noteoff",-544089122));

return modal_synth.webaudio.apply_adsr.call(null,param,adsr,noteoff_chan,audio_context);
});

modal_synth.webaudio.apply_ar_envelope.cljs$lang$maxFixedArity = (3);

modal_synth.webaudio.apply_ar_envelope.cljs$lang$applyTo = (function (seq43802){
var G__43803 = cljs.core.first.call(null,seq43802);
var seq43802__$1 = cljs.core.next.call(null,seq43802);
var G__43804 = cljs.core.first.call(null,seq43802__$1);
var seq43802__$2 = cljs.core.next.call(null,seq43802__$1);
var G__43805 = cljs.core.first.call(null,seq43802__$2);
var seq43802__$3 = cljs.core.next.call(null,seq43802__$2);
return modal_synth.webaudio.apply_ar_envelope.cljs$core$IFn$_invoke$arity$variadic(G__43803,G__43804,G__43805,seq43802__$3);
});


//# sourceMappingURL=webaudio.js.map?rel=1491108914605