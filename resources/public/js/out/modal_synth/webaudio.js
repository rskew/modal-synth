// Compiled by ClojureScript 1.9.229 {}
goog.provide('modal_synth.webaudio');
goog.require('cljs.core');
goog.require('cljs.core.async');
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
modal_synth.webaudio.connect_node_to_node_BANG_ = (function modal_synth$webaudio$connect_node_to_node_BANG_(source_graph,sink_graph){
new cljs.core.Keyword(null,"output-node","output-node",-726641186).cljs$core$IFn$_invoke$arity$1(source_graph).connect(new cljs.core.Keyword(null,"input-node","input-node",-1489678281).cljs$core$IFn$_invoke$arity$1(sink_graph));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input-node","input-node",-1489678281),new cljs.core.Keyword(null,"input-node","input-node",-1489678281).cljs$core$IFn$_invoke$arity$1(source_graph),new cljs.core.Keyword(null,"output-node","output-node",-726641186),new cljs.core.Keyword(null,"output-node","output-node",-726641186).cljs$core$IFn$_invoke$arity$1(sink_graph),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Graph","Graph",-1424984007)], null);
});
modal_synth.webaudio.connect_BANG_ = (function modal_synth$webaudio$connect_BANG_(graph1,graph2){
var result_graph = (function (){var iter__25581__auto__ = (function modal_synth$webaudio$connect_BANG__$_iter__26966(s__26967){
return (new cljs.core.LazySeq(null,(function (){
var s__26967__$1 = s__26967;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__26967__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var source = cljs.core.first.call(null,xs__5205__auto__);
var iterys__25577__auto__ = ((function (s__26967__$1,source,xs__5205__auto__,temp__4657__auto__){
return (function modal_synth$webaudio$connect_BANG__$_iter__26966_$_iter__26968(s__26969){
return (new cljs.core.LazySeq(null,((function (s__26967__$1,source,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__26969__$1 = s__26969;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__26969__$1);
if(temp__4657__auto____$1){
var s__26969__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26969__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__26969__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__26971 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__26970 = (0);
while(true){
if((i__26970 < size__25580__auto__)){
var sink = cljs.core._nth.call(null,c__25579__auto__,i__26970);
cljs.core.chunk_append.call(null,b__26971,modal_synth.webaudio.connect_node_to_node_BANG_.call(null,source,sink));

var G__26972 = (i__26970 + (1));
i__26970 = G__26972;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26971),modal_synth$webaudio$connect_BANG__$_iter__26966_$_iter__26968.call(null,cljs.core.chunk_rest.call(null,s__26969__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26971),null);
}
} else {
var sink = cljs.core.first.call(null,s__26969__$2);
return cljs.core.cons.call(null,modal_synth.webaudio.connect_node_to_node_BANG_.call(null,source,sink),modal_synth$webaudio$connect_BANG__$_iter__26966_$_iter__26968.call(null,cljs.core.rest.call(null,s__26969__$2)));
}
} else {
return null;
}
break;
}
});})(s__26967__$1,source,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__26967__$1,source,xs__5205__auto__,temp__4657__auto__))
;
var fs__25578__auto__ = cljs.core.seq.call(null,iterys__25577__auto__.call(null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[graph2],null)))));
if(fs__25578__auto__){
return cljs.core.concat.call(null,fs__25578__auto__,modal_synth$webaudio$connect_BANG__$_iter__26966.call(null,cljs.core.rest.call(null,s__26967__$1)));
} else {
var G__26973 = cljs.core.rest.call(null,s__26967__$1);
s__26967__$1 = G__26973;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25581__auto__.call(null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[graph1],null))));
})();
cljs.core.doall.call(null,result_graph);

return result_graph;
});
modal_synth.webaudio.ramp_to_value_at_time_BANG_ = (function modal_synth$webaudio$ramp_to_value_at_time_BANG_(var_args){
var args__25883__auto__ = [];
var len__25876__auto___26981 = arguments.length;
var i__25877__auto___26982 = (0);
while(true){
if((i__25877__auto___26982 < len__25876__auto___26981)){
args__25883__auto__.push((arguments[i__25877__auto___26982]));

var G__26983 = (i__25877__auto___26982 + (1));
i__25877__auto___26982 = G__26983;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((3) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((3)),(0),null)):null);
return modal_synth.webaudio.ramp_to_value_at_time_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25884__auto__);
});

modal_synth.webaudio.ramp_to_value_at_time_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (param,new_val,at_time,p__26978){
var map__26979 = p__26978;
var map__26979__$1 = ((((!((map__26979 == null)))?((((map__26979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26979):map__26979);
var slope = cljs.core.get.call(null,map__26979__$1,new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.Keyword(null,"linear","linear",872268697));
if(cljs.core._EQ_.call(null,slope,new cljs.core.Keyword(null,"exponential","exponential",-1578523660))){
return param.exponentialRampToValueAtTime(new_val,at_time);
} else {
return param.linearRampToValueAtTime(new_val,at_time);
}
});

modal_synth.webaudio.ramp_to_value_at_time_BANG_.cljs$lang$maxFixedArity = (3);

modal_synth.webaudio.ramp_to_value_at_time_BANG_.cljs$lang$applyTo = (function (seq26974){
var G__26975 = cljs.core.first.call(null,seq26974);
var seq26974__$1 = cljs.core.next.call(null,seq26974);
var G__26976 = cljs.core.first.call(null,seq26974__$1);
var seq26974__$2 = cljs.core.next.call(null,seq26974__$1);
var G__26977 = cljs.core.first.call(null,seq26974__$2);
var seq26974__$3 = cljs.core.next.call(null,seq26974__$2);
return modal_synth.webaudio.ramp_to_value_at_time_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26975,G__26976,G__26977,seq26974__$3);
});

modal_synth.webaudio.get_gain = (function modal_synth$webaudio$get_gain(gain_graph){
return new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(gain_graph).gain;
});
modal_synth.webaudio.set_gain_BANG_ = (function modal_synth$webaudio$set_gain_BANG_(var_args){
var args26984 = [];
var len__25876__auto___26987 = arguments.length;
var i__25877__auto___26988 = (0);
while(true){
if((i__25877__auto___26988 < len__25876__auto___26987)){
args26984.push((arguments[i__25877__auto___26988]));

var G__26989 = (i__25877__auto___26988 + (1));
i__25877__auto___26988 = G__26989;
continue;
} else {
}
break;
}

var G__26986 = args26984.length;
switch (G__26986) {
case 2:
return modal_synth.webaudio.set_gain_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return modal_synth.webaudio.set_gain_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26984.length)].join('')));

}
});

modal_synth.webaudio.set_gain_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (gain_graph,new_gain){
return new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(gain_graph).gain.value = new_gain;
});

modal_synth.webaudio.set_gain_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (gain_graph,new_gain,at_time){
return modal_synth.webaudio.ramp_to_value_at_time_BANG_.call(null,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(gain_graph).gain,new_gain,at_time);
});

modal_synth.webaudio.set_gain_BANG_.cljs$lang$maxFixedArity = 3;

modal_synth.webaudio.make_gain = (function modal_synth$webaudio$make_gain(init_gain,audio_context){
var gain_node = audio_context.createGain();
var gain_graph = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"input-node","input-node",-1489678281),gain_node,new cljs.core.Keyword(null,"output-node","output-node",-726641186),gain_node,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Gain","Gain",-983157825),new cljs.core.Keyword(null,"node","node",581201198),gain_node], null);
modal_synth.webaudio.set_gain_BANG_.call(null,gain_graph,init_gain);

return gain_graph;
});
modal_synth.webaudio.make_compressor = (function modal_synth$webaudio$make_compressor(var_args){
var args__25883__auto__ = [];
var len__25876__auto___26997 = arguments.length;
var i__25877__auto___26998 = (0);
while(true){
if((i__25877__auto___26998 < len__25876__auto___26997)){
args__25883__auto__.push((arguments[i__25877__auto___26998]));

var G__26999 = (i__25877__auto___26998 + (1));
i__25877__auto___26998 = G__26999;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return modal_synth.webaudio.make_compressor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

modal_synth.webaudio.make_compressor.cljs$core$IFn$_invoke$arity$variadic = (function (audio_context,p__26993){
var map__26994 = p__26993;
var map__26994__$1 = ((((!((map__26994 == null)))?((((map__26994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26994):map__26994);
var threshold = cljs.core.get.call(null,map__26994__$1,new cljs.core.Keyword(null,"threshold","threshold",204221583),(-24));
var knee = cljs.core.get.call(null,map__26994__$1,new cljs.core.Keyword(null,"knee","knee",-968652302),(30));
var ratio = cljs.core.get.call(null,map__26994__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044),(12));
var attack = cljs.core.get.call(null,map__26994__$1,new cljs.core.Keyword(null,"attack","attack",1957061788),0.003);
var release = cljs.core.get.call(null,map__26994__$1,new cljs.core.Keyword(null,"release","release",-1534371381),0.25);
var compressor_node = audio_context.createDynamicsCompressor();
var compressor_graph = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"input-node","input-node",-1489678281),compressor_node,new cljs.core.Keyword(null,"output-node","output-node",-726641186),compressor_node,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Compressor","Compressor",-399517845),new cljs.core.Keyword(null,"node","node",581201198),compressor_node], null);
var G__26996_27000 = compressor_node;
G__26996_27000.threshold.value = threshold;

G__26996_27000.knee.value = knee;

G__26996_27000.ratio.value = ratio;

G__26996_27000.attack.value = attack;

G__26996_27000.release.value = release;


return compressor_graph;
});

modal_synth.webaudio.make_compressor.cljs$lang$maxFixedArity = (1);

modal_synth.webaudio.make_compressor.cljs$lang$applyTo = (function (seq26991){
var G__26992 = cljs.core.first.call(null,seq26991);
var seq26991__$1 = cljs.core.next.call(null,seq26991);
return modal_synth.webaudio.make_compressor.cljs$core$IFn$_invoke$arity$variadic(G__26992,seq26991__$1);
});

modal_synth.webaudio.set_delay_time_BANG_ = (function modal_synth$webaudio$set_delay_time_BANG_(var_args){
var args27001 = [];
var len__25876__auto___27004 = arguments.length;
var i__25877__auto___27005 = (0);
while(true){
if((i__25877__auto___27005 < len__25876__auto___27004)){
args27001.push((arguments[i__25877__auto___27005]));

var G__27006 = (i__25877__auto___27005 + (1));
i__25877__auto___27005 = G__27006;
continue;
} else {
}
break;
}

var G__27003 = args27001.length;
switch (G__27003) {
case 2:
return modal_synth.webaudio.set_delay_time_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return modal_synth.webaudio.set_delay_time_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27001.length)].join('')));

}
});

modal_synth.webaudio.set_delay_time_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (delay_graph,new_delay_time){
return new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(delay_graph).delayTime.value = new_delay_time;
});

modal_synth.webaudio.set_delay_time_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (delay_graph,new_delay_time,at_time){
cljs.core.println.call(null,"setting delay to ",new_delay_time," at time ",at_time);

return modal_synth.webaudio.ramp_to_value_at_time_BANG_.call(null,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(delay_graph).delayTime,new_delay_time,at_time);
});

modal_synth.webaudio.set_delay_time_BANG_.cljs$lang$maxFixedArity = 3;

modal_synth.webaudio.make_delay_line = (function modal_synth$webaudio$make_delay_line(max_delay_time,audio_context){
var delay_node = audio_context.createDelay(max_delay_time);
var delay_graph = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"input-node","input-node",-1489678281),delay_node,new cljs.core.Keyword(null,"output-node","output-node",-726641186),delay_node,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Delay","Delay",1697640197),new cljs.core.Keyword(null,"node","node",581201198),delay_node], null);
return delay_graph;
});
modal_synth.webaudio.make_osc = (function modal_synth$webaudio$make_osc(var_args){
var args__25883__auto__ = [];
var len__25876__auto___27014 = arguments.length;
var i__25877__auto___27015 = (0);
while(true){
if((i__25877__auto___27015 < len__25876__auto___27014)){
args__25883__auto__.push((arguments[i__25877__auto___27015]));

var G__27016 = (i__25877__auto___27015 + (1));
i__25877__auto___27015 = G__27016;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((2) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((2)),(0),null)):null);
return modal_synth.webaudio.make_osc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25884__auto__);
});

modal_synth.webaudio.make_osc.cljs$core$IFn$_invoke$arity$variadic = (function (freq,audio_context,p__27011){
var map__27012 = p__27011;
var map__27012__$1 = ((((!((map__27012 == null)))?((((map__27012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27012):map__27012);
var osc_type = cljs.core.get.call(null,map__27012__$1,new cljs.core.Keyword(null,"osc-type","osc-type",1936803365));
var osc_node = audio_context.createOscillator();
osc_node.frequency.value = freq;

osc_node.type = osc_type;

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"input-node","input-node",-1489678281),null,new cljs.core.Keyword(null,"output-node","output-node",-726641186),osc_node,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Osc","Osc",-215134621),new cljs.core.Keyword(null,"node","node",581201198),osc_node], null);
});

modal_synth.webaudio.make_osc.cljs$lang$maxFixedArity = (2);

modal_synth.webaudio.make_osc.cljs$lang$applyTo = (function (seq27008){
var G__27009 = cljs.core.first.call(null,seq27008);
var seq27008__$1 = cljs.core.next.call(null,seq27008);
var G__27010 = cljs.core.first.call(null,seq27008__$1);
var seq27008__$2 = cljs.core.next.call(null,seq27008__$1);
return modal_synth.webaudio.make_osc.cljs$core$IFn$_invoke$arity$variadic(G__27009,G__27010,seq27008__$2);
});

modal_synth.webaudio.osc_start_BANG_ = (function modal_synth$webaudio$osc_start_BANG_(osc,start_time){
return new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(osc).start(start_time);
});
modal_synth.webaudio.osc_stop_BANG_ = (function modal_synth$webaudio$osc_stop_BANG_(osc,stop_time){
return new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(osc).stop(stop_time);
});
modal_synth.webaudio.make_bandpass = (function modal_synth$webaudio$make_bandpass(highpass_cutoff,lowpass_cutoff,audio_context){
var highpass_node = audio_context.createBiquadFilter();
var lowpass_node = audio_context.createBiquadFilter();
var Q_val = 1.0E-255;
var G__27019_27021 = highpass_node;
G__27019_27021.type = "highpass";

G__27019_27021.frequency.value = highpass_cutoff;

G__27019_27021.Q.value = Q_val;


var G__27020_27022 = lowpass_node;
G__27020_27022.type = "lowpass";

G__27020_27022.frequency.value = lowpass_cutoff;

G__27020_27022.Q.value = Q_val;


lowpass_node.connect(highpass_node);

return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"input-node","input-node",-1489678281),lowpass_node,new cljs.core.Keyword(null,"output-node","output-node",-726641186),highpass_node,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Bandpass","Bandpass",-2105196290),new cljs.core.Keyword(null,"lowpass-node","lowpass-node",-558045431),lowpass_node,new cljs.core.Keyword(null,"highpass-node","highpass-node",-186034932),highpass_node,new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310),lowpass_cutoff,new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000),highpass_cutoff], null);
});
modal_synth.webaudio.set_lowpass_cutoff_BANG_ = (function modal_synth$webaudio$set_lowpass_cutoff_BANG_(var_args){
var args27023 = [];
var len__25876__auto___27026 = arguments.length;
var i__25877__auto___27027 = (0);
while(true){
if((i__25877__auto___27027 < len__25876__auto___27026)){
args27023.push((arguments[i__25877__auto___27027]));

var G__27028 = (i__25877__auto___27027 + (1));
i__25877__auto___27027 = G__27028;
continue;
} else {
}
break;
}

var G__27025 = args27023.length;
switch (G__27025) {
case 2:
return modal_synth.webaudio.set_lowpass_cutoff_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return modal_synth.webaudio.set_lowpass_cutoff_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27023.length)].join('')));

}
});

modal_synth.webaudio.set_lowpass_cutoff_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (bandpass,new_lowpass_cutoff){
return new cljs.core.Keyword(null,"lowpass-node","lowpass-node",-558045431).cljs$core$IFn$_invoke$arity$1(bandpass).frequency.value = new_lowpass_cutoff;
});

modal_synth.webaudio.set_lowpass_cutoff_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (bandpass,new_lowpass_cutoff,at_time){
return modal_synth.webaudio.ramp_to_value_at_time_BANG_.call(null,new cljs.core.Keyword(null,"lowpass-node","lowpass-node",-558045431).cljs$core$IFn$_invoke$arity$1(bandpass).frequency,new_lowpass_cutoff,at_time);
});

modal_synth.webaudio.set_lowpass_cutoff_BANG_.cljs$lang$maxFixedArity = 3;

modal_synth.webaudio.set_highpass_cutoff_BANG_ = (function modal_synth$webaudio$set_highpass_cutoff_BANG_(var_args){
var args27030 = [];
var len__25876__auto___27033 = arguments.length;
var i__25877__auto___27034 = (0);
while(true){
if((i__25877__auto___27034 < len__25876__auto___27033)){
args27030.push((arguments[i__25877__auto___27034]));

var G__27035 = (i__25877__auto___27034 + (1));
i__25877__auto___27034 = G__27035;
continue;
} else {
}
break;
}

var G__27032 = args27030.length;
switch (G__27032) {
case 2:
return modal_synth.webaudio.set_highpass_cutoff_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return modal_synth.webaudio.set_highpass_cutoff_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27030.length)].join('')));

}
});

modal_synth.webaudio.set_highpass_cutoff_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (bandpass,new_highpass_cutoff){
return new cljs.core.Keyword(null,"highpass-node","highpass-node",-186034932).cljs$core$IFn$_invoke$arity$1(bandpass).frequency.value = new_highpass_cutoff;
});

modal_synth.webaudio.set_highpass_cutoff_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (bandpass,new_highpass_cutoff,at_time){
return modal_synth.webaudio.ramp_to_value_at_time_BANG_.call(null,new cljs.core.Keyword(null,"highpass-node","highpass-node",-186034932).cljs$core$IFn$_invoke$arity$1(bandpass).frequency,new_highpass_cutoff,at_time);
});

modal_synth.webaudio.set_highpass_cutoff_BANG_.cljs$lang$maxFixedArity = 3;

modal_synth.webaudio.make_analyser = (function modal_synth$webaudio$make_analyser(fft_size,audio_context){
var analyser_node = audio_context.createAnalyser();
analyser_node.fftSize = fft_size;

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"input-node","input-node",-1489678281),analyser_node,new cljs.core.Keyword(null,"output-node","output-node",-726641186),null,new cljs.core.Keyword(null,"analyser-node","analyser-node",846848674),analyser_node,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Analyser","Analyser",-1898581887)], null);
});
modal_synth.webaudio.get_fft_bin_count = (function modal_synth$webaudio$get_fft_bin_count(analyser_graph){
return new cljs.core.Keyword(null,"analyser-node","analyser-node",846848674).cljs$core$IFn$_invoke$arity$1(analyser_graph).frequencyBinCount;
});
modal_synth.webaudio.make_noise_buffer = (function modal_synth$webaudio$make_noise_buffer(var_args){
var args__25883__auto__ = [];
var len__25876__auto___27043 = arguments.length;
var i__25877__auto___27044 = (0);
while(true){
if((i__25877__auto___27044 < len__25876__auto___27043)){
args__25883__auto__.push((arguments[i__25877__auto___27044]));

var G__27045 = (i__25877__auto___27044 + (1));
i__25877__auto___27044 = G__27045;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((2) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((2)),(0),null)):null);
return modal_synth.webaudio.make_noise_buffer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25884__auto__);
});

modal_synth.webaudio.make_noise_buffer.cljs$core$IFn$_invoke$arity$variadic = (function (length,audio_context,p__27040){
var map__27041 = p__27040;
var map__27041__$1 = ((((!((map__27041 == null)))?((((map__27041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27041):map__27041);
var noise_type = cljs.core.get.call(null,map__27041__$1,new cljs.core.Keyword(null,"noise-type","noise-type",739698482));
var buffer_size = (length * audio_context.sampleRate);
var noise_buffer = audio_context.createBuffer((1),buffer_size,audio_context.sampleRate);
var noise_buffer_data = noise_buffer.getChannelData((0));
var generate_noise_sample = ((function (buffer_size,noise_buffer,noise_buffer_data,map__27041,map__27041__$1,noise_type){
return (function (){
return ((cljs.core.rand.call(null) * (2)) - (1));
});})(buffer_size,noise_buffer,noise_buffer_data,map__27041,map__27041__$1,noise_type))
;
if(cljs.core._EQ_.call(null,noise_type,new cljs.core.Keyword(null,"brownian","brownian",-211478877))){
var n__25716__auto___27046 = buffer_size;
var i_27047 = (0);
while(true){
if((i_27047 < n__25716__auto___27046)){
var prev_sample_27048 = (noise_buffer_data[i_27047]);
var uptake_27049 = 0.03;
var filtered_sample_27050 = (((generate_noise_sample.call(null) * uptake_27049) + prev_sample_27048) / (1.0 + uptake_27049));
(noise_buffer_data[(i_27047 + (1))] = filtered_sample_27050);

var G__27051 = (i_27047 + (1));
i_27047 = G__27051;
continue;
} else {
}
break;
}

var n__25716__auto___27052 = buffer_size;
var i_27053 = (0);
while(true){
if((i_27053 < n__25716__auto___27052)){
var sample_27054 = (noise_buffer_data[i_27053]);
var makeup_gain_27055 = 3.5;
(noise_buffer_data[i_27053] = (sample_27054 * makeup_gain_27055));

var G__27056 = (i_27053 + (1));
i_27053 = G__27056;
continue;
} else {
}
break;
}
} else {
var n__25716__auto___27057 = buffer_size;
var i_27058 = (0);
while(true){
if((i_27058 < n__25716__auto___27057)){
(noise_buffer_data[i_27058] = generate_noise_sample.call(null));

var G__27059 = (i_27058 + (1));
i_27058 = G__27059;
continue;
} else {
}
break;
}

}

return noise_buffer;
});

modal_synth.webaudio.make_noise_buffer.cljs$lang$maxFixedArity = (2);

modal_synth.webaudio.make_noise_buffer.cljs$lang$applyTo = (function (seq27037){
var G__27038 = cljs.core.first.call(null,seq27037);
var seq27037__$1 = cljs.core.next.call(null,seq27037);
var G__27039 = cljs.core.first.call(null,seq27037__$1);
var seq27037__$2 = cljs.core.next.call(null,seq27037__$1);
return modal_synth.webaudio.make_noise_buffer.cljs$core$IFn$_invoke$arity$variadic(G__27038,G__27039,seq27037__$2);
});

modal_synth.webaudio.make_noise_osc = (function modal_synth$webaudio$make_noise_osc(var_args){
var args__25883__auto__ = [];
var len__25876__auto___27065 = arguments.length;
var i__25877__auto___27066 = (0);
while(true){
if((i__25877__auto___27066 < len__25876__auto___27065)){
args__25883__auto__.push((arguments[i__25877__auto___27066]));

var G__27067 = (i__25877__auto___27066 + (1));
i__25877__auto___27066 = G__27067;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return modal_synth.webaudio.make_noise_osc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

modal_synth.webaudio.make_noise_osc.cljs$core$IFn$_invoke$arity$variadic = (function (audio_context,p__27062){
var map__27063 = p__27062;
var map__27063__$1 = ((((!((map__27063 == null)))?((((map__27063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27063):map__27063);
var highpass_cutoff = cljs.core.get.call(null,map__27063__$1,new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000),(0));
var lowpass_cutoff = cljs.core.get.call(null,map__27063__$1,new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310),(3000));
var noise_buffer = modal_synth.webaudio.make_noise_buffer.call(null,(5),audio_context,new cljs.core.Keyword(null,"noise-type","noise-type",739698482),new cljs.core.Keyword(null,"brownian","brownian",-211478877));
var noise_buffer_source = audio_context.createBufferSource();
var bandpass = modal_synth.webaudio.make_bandpass.call(null,highpass_cutoff,lowpass_cutoff,audio_context);
noise_buffer_source.buffer = noise_buffer;

noise_buffer_source.connect(new cljs.core.Keyword(null,"input-node","input-node",-1489678281).cljs$core$IFn$_invoke$arity$1(bandpass));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"input-node","input-node",-1489678281),null,new cljs.core.Keyword(null,"output-node","output-node",-726641186),new cljs.core.Keyword(null,"output-node","output-node",-726641186).cljs$core$IFn$_invoke$arity$1(bandpass),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"NoiseOsc","NoiseOsc",-1408090371),new cljs.core.Keyword(null,"node","node",581201198),noise_buffer_source], null);
});

modal_synth.webaudio.make_noise_osc.cljs$lang$maxFixedArity = (1);

modal_synth.webaudio.make_noise_osc.cljs$lang$applyTo = (function (seq27060){
var G__27061 = cljs.core.first.call(null,seq27060);
var seq27060__$1 = cljs.core.next.call(null,seq27060);
return modal_synth.webaudio.make_noise_osc.cljs$core$IFn$_invoke$arity$variadic(G__27061,seq27060__$1);
});

modal_synth.webaudio.loop_noise_osc_BANG_ = (function modal_synth$webaudio$loop_noise_osc_BANG_(noise_osc){
return new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(noise_osc).loop = "true";
});
modal_synth.webaudio.fire_noise_burst_through = (function modal_synth$webaudio$fire_noise_burst_through(graphs,freq,audio_context){
var noise_osc = modal_synth.webaudio.make_noise_osc.call(null,audio_context,new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000),(30),new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310),(1800));
var now = modal_synth.webaudio.get_now.call(null,audio_context);
modal_synth.webaudio.connect_BANG_.call(null,noise_osc,graphs);

modal_synth.webaudio.osc_start_BANG_.call(null,noise_osc,now);

modal_synth.webaudio.osc_stop_BANG_.call(null,noise_osc,(now + 0.025));

return cljs.core.print.call(null,"Fire!");
});
modal_synth.webaudio.make_adsr = (function modal_synth$webaudio$make_adsr(var_args){
var args__25883__auto__ = [];
var len__25876__auto___27076 = arguments.length;
var i__25877__auto___27077 = (0);
while(true){
if((i__25877__auto___27077 < len__25876__auto___27076)){
args__25883__auto__.push((arguments[i__25877__auto___27077]));

var G__27078 = (i__25877__auto___27077 + (1));
i__25877__auto___27077 = G__27078;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((4) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((4)),(0),null)):null);
return modal_synth.webaudio.make_adsr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25884__auto__);
});

modal_synth.webaudio.make_adsr.cljs$core$IFn$_invoke$arity$variadic = (function (attack_time,decay_time,sustain_level,release_time,p__27073){
var map__27074 = p__27073;
var map__27074__$1 = ((((!((map__27074 == null)))?((((map__27074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27074):map__27074);
var slope = cljs.core.get.call(null,map__27074__$1,new cljs.core.Keyword(null,"slope","slope",-1227938123));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"attack-time","attack-time",-1223233591),attack_time,new cljs.core.Keyword(null,"decay-time","decay-time",967759431),decay_time,new cljs.core.Keyword(null,"sustain-level","sustain-level",2030703043),sustain_level,new cljs.core.Keyword(null,"release-time","release-time",210242290),release_time,new cljs.core.Keyword(null,"slope","slope",-1227938123),slope], null);
});

modal_synth.webaudio.make_adsr.cljs$lang$maxFixedArity = (4);

modal_synth.webaudio.make_adsr.cljs$lang$applyTo = (function (seq27068){
var G__27069 = cljs.core.first.call(null,seq27068);
var seq27068__$1 = cljs.core.next.call(null,seq27068);
var G__27070 = cljs.core.first.call(null,seq27068__$1);
var seq27068__$2 = cljs.core.next.call(null,seq27068__$1);
var G__27071 = cljs.core.first.call(null,seq27068__$2);
var seq27068__$3 = cljs.core.next.call(null,seq27068__$2);
var G__27072 = cljs.core.first.call(null,seq27068__$3);
var seq27068__$4 = cljs.core.next.call(null,seq27068__$3);
return modal_synth.webaudio.make_adsr.cljs$core$IFn$_invoke$arity$variadic(G__27069,G__27070,G__27071,G__27072,seq27068__$4);
});

modal_synth.webaudio.apply_adsr_BANG_ = (function modal_synth$webaudio$apply_adsr_BANG_(var_args){
var args__25883__auto__ = [];
var len__25876__auto___27121 = arguments.length;
var i__25877__auto___27122 = (0);
while(true){
if((i__25877__auto___27122 < len__25876__auto___27121)){
args__25883__auto__.push((arguments[i__25877__auto___27122]));

var G__27123 = (i__25877__auto___27122 + (1));
i__25877__auto___27122 = G__27123;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((4) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((4)),(0),null)):null);
return modal_synth.webaudio.apply_adsr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25884__auto__);
});

modal_synth.webaudio.apply_adsr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (param,adsr,noteoff_chan,audio_context,p__27084){
var map__27085 = p__27084;
var map__27085__$1 = ((((!((map__27085 == null)))?((((map__27085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27085):map__27085);
var start_time_offset = cljs.core.get.call(null,map__27085__$1,new cljs.core.Keyword(null,"start-time-offset","start-time-offset",-1189089602),(0));
var start_val = cljs.core.get.call(null,map__27085__$1,new cljs.core.Keyword(null,"start-val","start-val",-1126485981),1.0E-30);
var attack_peak_val = cljs.core.get.call(null,map__27085__$1,new cljs.core.Keyword(null,"attack-peak-val","attack-peak-val",-2074198938),(1));
var now = modal_synth.webaudio.get_now.call(null,audio_context);
var attack_start_time = (now + start_time_offset);
var decay_start_time = (attack_start_time + new cljs.core.Keyword(null,"attack-time","attack-time",-1223233591).cljs$core$IFn$_invoke$arity$1(adsr));
var sustain_start_time = (decay_start_time + new cljs.core.Keyword(null,"decay-time","decay-time",967759431).cljs$core$IFn$_invoke$arity$1(adsr));
param.setValueAtTime(start_val,attack_start_time);

modal_synth.webaudio.ramp_to_value_at_time_BANG_.call(null,param,attack_peak_val,decay_start_time,new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.Keyword(null,"slope","slope",-1227938123).cljs$core$IFn$_invoke$arity$1(adsr));

modal_synth.webaudio.ramp_to_value_at_time_BANG_.call(null,param,new cljs.core.Keyword(null,"sustain-level","sustain-level",2030703043).cljs$core$IFn$_invoke$arity$1(adsr),sustain_start_time,new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.Keyword(null,"slope","slope",-1227938123).cljs$core$IFn$_invoke$arity$1(adsr));

var c__26831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26831__auto__,now,attack_start_time,decay_start_time,sustain_start_time,map__27085,map__27085__$1,start_time_offset,start_val,attack_peak_val){
return (function (){
var f__26832__auto__ = (function (){var switch__26810__auto__ = ((function (c__26831__auto__,now,attack_start_time,decay_start_time,sustain_start_time,map__27085,map__27085__$1,start_time_offset,start_val,attack_peak_val){
return (function (state_27105){
var state_val_27106 = (state_27105[(1)]);
if((state_val_27106 === (1))){
var state_27105__$1 = state_27105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27105__$1,(2),noteoff_chan);
} else {
if((state_val_27106 === (2))){
var inst_27088 = (state_27105[(2)]);
var inst_27089 = cljs.core.print.call(null,"noteoff!");
var inst_27090 = modal_synth.webaudio.get_now.call(null,audio_context);
var inst_27091 = new cljs.core.Keyword(null,"release-time","release-time",210242290).cljs$core$IFn$_invoke$arity$1(adsr);
var inst_27092 = (inst_27090 + inst_27091);
var inst_27093 = new cljs.core.Keyword(null,"slope","slope",-1227938123).cljs$core$IFn$_invoke$arity$1(adsr);
var inst_27094 = modal_synth.webaudio.ramp_to_value_at_time_BANG_.call(null,param,start_val,inst_27092,new cljs.core.Keyword(null,"slope","slope",-1227938123),inst_27093);
var state_27105__$1 = (function (){var statearr_27107 = state_27105;
(statearr_27107[(7)] = inst_27088);

(statearr_27107[(8)] = inst_27094);

(statearr_27107[(9)] = inst_27089);

return statearr_27107;
})();
var statearr_27108_27124 = state_27105__$1;
(statearr_27108_27124[(2)] = null);

(statearr_27108_27124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27106 === (3))){
var inst_27096 = cljs.core.async.poll_BANG_.call(null,noteoff_chan);
var state_27105__$1 = state_27105;
if(cljs.core.truth_(inst_27096)){
var statearr_27109_27125 = state_27105__$1;
(statearr_27109_27125[(1)] = (5));

} else {
var statearr_27110_27126 = state_27105__$1;
(statearr_27110_27126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27106 === (4))){
var inst_27103 = (state_27105[(2)]);
var state_27105__$1 = state_27105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27105__$1,inst_27103);
} else {
if((state_val_27106 === (5))){
var state_27105__$1 = state_27105;
var statearr_27111_27127 = state_27105__$1;
(statearr_27111_27127[(2)] = null);

(statearr_27111_27127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27106 === (6))){
var state_27105__$1 = state_27105;
var statearr_27112_27128 = state_27105__$1;
(statearr_27112_27128[(2)] = null);

(statearr_27112_27128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27106 === (7))){
var inst_27101 = (state_27105[(2)]);
var state_27105__$1 = state_27105;
var statearr_27113_27129 = state_27105__$1;
(statearr_27113_27129[(2)] = inst_27101);

(statearr_27113_27129[(1)] = (4));


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
});})(c__26831__auto__,now,attack_start_time,decay_start_time,sustain_start_time,map__27085,map__27085__$1,start_time_offset,start_val,attack_peak_val))
;
return ((function (switch__26810__auto__,c__26831__auto__,now,attack_start_time,decay_start_time,sustain_start_time,map__27085,map__27085__$1,start_time_offset,start_val,attack_peak_val){
return (function() {
var modal_synth$webaudio$state_machine__26811__auto__ = null;
var modal_synth$webaudio$state_machine__26811__auto____0 = (function (){
var statearr_27117 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27117[(0)] = modal_synth$webaudio$state_machine__26811__auto__);

(statearr_27117[(1)] = (1));

return statearr_27117;
});
var modal_synth$webaudio$state_machine__26811__auto____1 = (function (state_27105){
while(true){
var ret_value__26812__auto__ = (function (){try{while(true){
var result__26813__auto__ = switch__26810__auto__.call(null,state_27105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26813__auto__;
}
break;
}
}catch (e27118){if((e27118 instanceof Object)){
var ex__26814__auto__ = e27118;
var statearr_27119_27130 = state_27105;
(statearr_27119_27130[(5)] = ex__26814__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27131 = state_27105;
state_27105 = G__27131;
continue;
} else {
return ret_value__26812__auto__;
}
break;
}
});
modal_synth$webaudio$state_machine__26811__auto__ = function(state_27105){
switch(arguments.length){
case 0:
return modal_synth$webaudio$state_machine__26811__auto____0.call(this);
case 1:
return modal_synth$webaudio$state_machine__26811__auto____1.call(this,state_27105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modal_synth$webaudio$state_machine__26811__auto__.cljs$core$IFn$_invoke$arity$0 = modal_synth$webaudio$state_machine__26811__auto____0;
modal_synth$webaudio$state_machine__26811__auto__.cljs$core$IFn$_invoke$arity$1 = modal_synth$webaudio$state_machine__26811__auto____1;
return modal_synth$webaudio$state_machine__26811__auto__;
})()
;})(switch__26810__auto__,c__26831__auto__,now,attack_start_time,decay_start_time,sustain_start_time,map__27085,map__27085__$1,start_time_offset,start_val,attack_peak_val))
})();
var state__26833__auto__ = (function (){var statearr_27120 = f__26832__auto__.call(null);
(statearr_27120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26831__auto__);

return statearr_27120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26833__auto__);
});})(c__26831__auto__,now,attack_start_time,decay_start_time,sustain_start_time,map__27085,map__27085__$1,start_time_offset,start_val,attack_peak_val))
);

return c__26831__auto__;
});

modal_synth.webaudio.apply_adsr_BANG_.cljs$lang$maxFixedArity = (4);

modal_synth.webaudio.apply_adsr_BANG_.cljs$lang$applyTo = (function (seq27079){
var G__27080 = cljs.core.first.call(null,seq27079);
var seq27079__$1 = cljs.core.next.call(null,seq27079);
var G__27081 = cljs.core.first.call(null,seq27079__$1);
var seq27079__$2 = cljs.core.next.call(null,seq27079__$1);
var G__27082 = cljs.core.first.call(null,seq27079__$2);
var seq27079__$3 = cljs.core.next.call(null,seq27079__$2);
var G__27083 = cljs.core.first.call(null,seq27079__$3);
var seq27079__$4 = cljs.core.next.call(null,seq27079__$3);
return modal_synth.webaudio.apply_adsr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27080,G__27081,G__27082,G__27083,seq27079__$4);
});

modal_synth.webaudio.apply_ar_envelope_BANG_ = (function modal_synth$webaudio$apply_ar_envelope_BANG_(var_args){
var args__25883__auto__ = [];
var len__25876__auto___27139 = arguments.length;
var i__25877__auto___27140 = (0);
while(true){
if((i__25877__auto___27140 < len__25876__auto___27139)){
args__25883__auto__.push((arguments[i__25877__auto___27140]));

var G__27141 = (i__25877__auto___27140 + (1));
i__25877__auto___27140 = G__27141;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((3) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((3)),(0),null)):null);
return modal_synth.webaudio.apply_ar_envelope_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25884__auto__);
});

modal_synth.webaudio.apply_ar_envelope_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (param,adsr,audio_context,p__27136){
var map__27137 = p__27136;
var map__27137__$1 = ((((!((map__27137 == null)))?((((map__27137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27137):map__27137);
var start_time_offset = cljs.core.get.call(null,map__27137__$1,new cljs.core.Keyword(null,"start-time-offset","start-time-offset",-1189089602),(0));
var start_val = cljs.core.get.call(null,map__27137__$1,new cljs.core.Keyword(null,"start-val","start-val",-1126485981),1.0E-30);
var attack_peak_val = cljs.core.get.call(null,map__27137__$1,new cljs.core.Keyword(null,"attack-peak-val","attack-peak-val",-2074198938),(1));
var noteoff_chan = cljs.core.async.chan.call(null);
cljs.core.async.put_BANG_.call(null,noteoff_chan,new cljs.core.Keyword(null,"noteoff","noteoff",-544089122));

return modal_synth.webaudio.apply_adsr_BANG_.call(null,param,adsr,noteoff_chan,audio_context);
});

modal_synth.webaudio.apply_ar_envelope_BANG_.cljs$lang$maxFixedArity = (3);

modal_synth.webaudio.apply_ar_envelope_BANG_.cljs$lang$applyTo = (function (seq27132){
var G__27133 = cljs.core.first.call(null,seq27132);
var seq27132__$1 = cljs.core.next.call(null,seq27132);
var G__27134 = cljs.core.first.call(null,seq27132__$1);
var seq27132__$2 = cljs.core.next.call(null,seq27132__$1);
var G__27135 = cljs.core.first.call(null,seq27132__$2);
var seq27132__$3 = cljs.core.next.call(null,seq27132__$2);
return modal_synth.webaudio.apply_ar_envelope_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27133,G__27134,G__27135,seq27132__$3);
});


//# sourceMappingURL=webaudio.js.map?rel=1517065384228