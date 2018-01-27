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
var result_graph = (function (){var iter__25581__auto__ = (function modal_synth$webaudio$connect_BANG__$_iter__36209(s__36210){
return (new cljs.core.LazySeq(null,(function (){
var s__36210__$1 = s__36210;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36210__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var source = cljs.core.first.call(null,xs__5205__auto__);
var iterys__25577__auto__ = ((function (s__36210__$1,source,xs__5205__auto__,temp__4657__auto__){
return (function modal_synth$webaudio$connect_BANG__$_iter__36209_$_iter__36211(s__36212){
return (new cljs.core.LazySeq(null,((function (s__36210__$1,source,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__36212__$1 = s__36212;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__36212__$1);
if(temp__4657__auto____$1){
var s__36212__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36212__$2)){
var c__25579__auto__ = cljs.core.chunk_first.call(null,s__36212__$2);
var size__25580__auto__ = cljs.core.count.call(null,c__25579__auto__);
var b__36214 = cljs.core.chunk_buffer.call(null,size__25580__auto__);
if((function (){var i__36213 = (0);
while(true){
if((i__36213 < size__25580__auto__)){
var sink = cljs.core._nth.call(null,c__25579__auto__,i__36213);
cljs.core.chunk_append.call(null,b__36214,modal_synth.webaudio.connect_node_to_node_BANG_.call(null,source,sink));

var G__36215 = (i__36213 + (1));
i__36213 = G__36215;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36214),modal_synth$webaudio$connect_BANG__$_iter__36209_$_iter__36211.call(null,cljs.core.chunk_rest.call(null,s__36212__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36214),null);
}
} else {
var sink = cljs.core.first.call(null,s__36212__$2);
return cljs.core.cons.call(null,modal_synth.webaudio.connect_node_to_node_BANG_.call(null,source,sink),modal_synth$webaudio$connect_BANG__$_iter__36209_$_iter__36211.call(null,cljs.core.rest.call(null,s__36212__$2)));
}
} else {
return null;
}
break;
}
});})(s__36210__$1,source,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__36210__$1,source,xs__5205__auto__,temp__4657__auto__))
;
var fs__25578__auto__ = cljs.core.seq.call(null,iterys__25577__auto__.call(null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[graph2],null)))));
if(fs__25578__auto__){
return cljs.core.concat.call(null,fs__25578__auto__,modal_synth$webaudio$connect_BANG__$_iter__36209.call(null,cljs.core.rest.call(null,s__36210__$1)));
} else {
var G__36216 = cljs.core.rest.call(null,s__36210__$1);
s__36210__$1 = G__36216;
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
var len__25876__auto___36224 = arguments.length;
var i__25877__auto___36225 = (0);
while(true){
if((i__25877__auto___36225 < len__25876__auto___36224)){
args__25883__auto__.push((arguments[i__25877__auto___36225]));

var G__36226 = (i__25877__auto___36225 + (1));
i__25877__auto___36225 = G__36226;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((3) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((3)),(0),null)):null);
return modal_synth.webaudio.ramp_to_value_at_time_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25884__auto__);
});

modal_synth.webaudio.ramp_to_value_at_time_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (param,new_val,at_time,p__36221){
var map__36222 = p__36221;
var map__36222__$1 = ((((!((map__36222 == null)))?((((map__36222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36222):map__36222);
var slope = cljs.core.get.call(null,map__36222__$1,new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.Keyword(null,"linear","linear",872268697));
if(cljs.core._EQ_.call(null,slope,new cljs.core.Keyword(null,"exponential","exponential",-1578523660))){
return param.exponentialRampToValueAtTime(new_val,at_time);
} else {
return param.linearRampToValueAtTime(new_val,at_time);
}
});

modal_synth.webaudio.ramp_to_value_at_time_BANG_.cljs$lang$maxFixedArity = (3);

modal_synth.webaudio.ramp_to_value_at_time_BANG_.cljs$lang$applyTo = (function (seq36217){
var G__36218 = cljs.core.first.call(null,seq36217);
var seq36217__$1 = cljs.core.next.call(null,seq36217);
var G__36219 = cljs.core.first.call(null,seq36217__$1);
var seq36217__$2 = cljs.core.next.call(null,seq36217__$1);
var G__36220 = cljs.core.first.call(null,seq36217__$2);
var seq36217__$3 = cljs.core.next.call(null,seq36217__$2);
return modal_synth.webaudio.ramp_to_value_at_time_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36218,G__36219,G__36220,seq36217__$3);
});

modal_synth.webaudio.get_gain = (function modal_synth$webaudio$get_gain(gain_graph){
return new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(gain_graph).gain;
});
modal_synth.webaudio.set_gain_BANG_ = (function modal_synth$webaudio$set_gain_BANG_(var_args){
var args36227 = [];
var len__25876__auto___36230 = arguments.length;
var i__25877__auto___36231 = (0);
while(true){
if((i__25877__auto___36231 < len__25876__auto___36230)){
args36227.push((arguments[i__25877__auto___36231]));

var G__36232 = (i__25877__auto___36231 + (1));
i__25877__auto___36231 = G__36232;
continue;
} else {
}
break;
}

var G__36229 = args36227.length;
switch (G__36229) {
case 2:
return modal_synth.webaudio.set_gain_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return modal_synth.webaudio.set_gain_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36227.length)].join('')));

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
var len__25876__auto___36240 = arguments.length;
var i__25877__auto___36241 = (0);
while(true){
if((i__25877__auto___36241 < len__25876__auto___36240)){
args__25883__auto__.push((arguments[i__25877__auto___36241]));

var G__36242 = (i__25877__auto___36241 + (1));
i__25877__auto___36241 = G__36242;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return modal_synth.webaudio.make_compressor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

modal_synth.webaudio.make_compressor.cljs$core$IFn$_invoke$arity$variadic = (function (audio_context,p__36236){
var map__36237 = p__36236;
var map__36237__$1 = ((((!((map__36237 == null)))?((((map__36237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36237):map__36237);
var threshold = cljs.core.get.call(null,map__36237__$1,new cljs.core.Keyword(null,"threshold","threshold",204221583),(-24));
var knee = cljs.core.get.call(null,map__36237__$1,new cljs.core.Keyword(null,"knee","knee",-968652302),(30));
var ratio = cljs.core.get.call(null,map__36237__$1,new cljs.core.Keyword(null,"ratio","ratio",-926560044),(12));
var attack = cljs.core.get.call(null,map__36237__$1,new cljs.core.Keyword(null,"attack","attack",1957061788),0.003);
var release = cljs.core.get.call(null,map__36237__$1,new cljs.core.Keyword(null,"release","release",-1534371381),0.25);
var compressor_node = audio_context.createDynamicsCompressor();
var compressor_graph = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"input-node","input-node",-1489678281),compressor_node,new cljs.core.Keyword(null,"output-node","output-node",-726641186),compressor_node,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Compressor","Compressor",-399517845),new cljs.core.Keyword(null,"node","node",581201198),compressor_node], null);
var G__36239_36243 = compressor_node;
G__36239_36243.threshold.value = threshold;

G__36239_36243.knee.value = knee;

G__36239_36243.ratio.value = ratio;

G__36239_36243.attack.value = attack;

G__36239_36243.release.value = release;


return compressor_graph;
});

modal_synth.webaudio.make_compressor.cljs$lang$maxFixedArity = (1);

modal_synth.webaudio.make_compressor.cljs$lang$applyTo = (function (seq36234){
var G__36235 = cljs.core.first.call(null,seq36234);
var seq36234__$1 = cljs.core.next.call(null,seq36234);
return modal_synth.webaudio.make_compressor.cljs$core$IFn$_invoke$arity$variadic(G__36235,seq36234__$1);
});

modal_synth.webaudio.set_delay_time_BANG_ = (function modal_synth$webaudio$set_delay_time_BANG_(var_args){
var args36244 = [];
var len__25876__auto___36247 = arguments.length;
var i__25877__auto___36248 = (0);
while(true){
if((i__25877__auto___36248 < len__25876__auto___36247)){
args36244.push((arguments[i__25877__auto___36248]));

var G__36249 = (i__25877__auto___36248 + (1));
i__25877__auto___36248 = G__36249;
continue;
} else {
}
break;
}

var G__36246 = args36244.length;
switch (G__36246) {
case 2:
return modal_synth.webaudio.set_delay_time_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return modal_synth.webaudio.set_delay_time_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36244.length)].join('')));

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
var len__25876__auto___36257 = arguments.length;
var i__25877__auto___36258 = (0);
while(true){
if((i__25877__auto___36258 < len__25876__auto___36257)){
args__25883__auto__.push((arguments[i__25877__auto___36258]));

var G__36259 = (i__25877__auto___36258 + (1));
i__25877__auto___36258 = G__36259;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((2) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((2)),(0),null)):null);
return modal_synth.webaudio.make_osc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25884__auto__);
});

modal_synth.webaudio.make_osc.cljs$core$IFn$_invoke$arity$variadic = (function (freq,audio_context,p__36254){
var map__36255 = p__36254;
var map__36255__$1 = ((((!((map__36255 == null)))?((((map__36255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36255):map__36255);
var osc_type = cljs.core.get.call(null,map__36255__$1,new cljs.core.Keyword(null,"osc-type","osc-type",1936803365));
var osc_node = audio_context.createOscillator();
osc_node.frequency.value = freq;

osc_node.type = osc_type;

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"input-node","input-node",-1489678281),null,new cljs.core.Keyword(null,"output-node","output-node",-726641186),osc_node,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Osc","Osc",-215134621),new cljs.core.Keyword(null,"node","node",581201198),osc_node], null);
});

modal_synth.webaudio.make_osc.cljs$lang$maxFixedArity = (2);

modal_synth.webaudio.make_osc.cljs$lang$applyTo = (function (seq36251){
var G__36252 = cljs.core.first.call(null,seq36251);
var seq36251__$1 = cljs.core.next.call(null,seq36251);
var G__36253 = cljs.core.first.call(null,seq36251__$1);
var seq36251__$2 = cljs.core.next.call(null,seq36251__$1);
return modal_synth.webaudio.make_osc.cljs$core$IFn$_invoke$arity$variadic(G__36252,G__36253,seq36251__$2);
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
var G__36262_36264 = highpass_node;
G__36262_36264.type = "highpass";

G__36262_36264.frequency.value = highpass_cutoff;

G__36262_36264.Q.value = Q_val;


var G__36263_36265 = lowpass_node;
G__36263_36265.type = "lowpass";

G__36263_36265.frequency.value = lowpass_cutoff;

G__36263_36265.Q.value = Q_val;


lowpass_node.connect(highpass_node);

return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"input-node","input-node",-1489678281),lowpass_node,new cljs.core.Keyword(null,"output-node","output-node",-726641186),highpass_node,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Bandpass","Bandpass",-2105196290),new cljs.core.Keyword(null,"lowpass-node","lowpass-node",-558045431),lowpass_node,new cljs.core.Keyword(null,"highpass-node","highpass-node",-186034932),highpass_node,new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310),lowpass_cutoff,new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000),highpass_cutoff], null);
});
modal_synth.webaudio.set_lowpass_cutoff_BANG_ = (function modal_synth$webaudio$set_lowpass_cutoff_BANG_(var_args){
var args36266 = [];
var len__25876__auto___36269 = arguments.length;
var i__25877__auto___36270 = (0);
while(true){
if((i__25877__auto___36270 < len__25876__auto___36269)){
args36266.push((arguments[i__25877__auto___36270]));

var G__36271 = (i__25877__auto___36270 + (1));
i__25877__auto___36270 = G__36271;
continue;
} else {
}
break;
}

var G__36268 = args36266.length;
switch (G__36268) {
case 2:
return modal_synth.webaudio.set_lowpass_cutoff_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return modal_synth.webaudio.set_lowpass_cutoff_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36266.length)].join('')));

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
var args36273 = [];
var len__25876__auto___36276 = arguments.length;
var i__25877__auto___36277 = (0);
while(true){
if((i__25877__auto___36277 < len__25876__auto___36276)){
args36273.push((arguments[i__25877__auto___36277]));

var G__36278 = (i__25877__auto___36277 + (1));
i__25877__auto___36277 = G__36278;
continue;
} else {
}
break;
}

var G__36275 = args36273.length;
switch (G__36275) {
case 2:
return modal_synth.webaudio.set_highpass_cutoff_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return modal_synth.webaudio.set_highpass_cutoff_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36273.length)].join('')));

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
var len__25876__auto___36286 = arguments.length;
var i__25877__auto___36287 = (0);
while(true){
if((i__25877__auto___36287 < len__25876__auto___36286)){
args__25883__auto__.push((arguments[i__25877__auto___36287]));

var G__36288 = (i__25877__auto___36287 + (1));
i__25877__auto___36287 = G__36288;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((2) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((2)),(0),null)):null);
return modal_synth.webaudio.make_noise_buffer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25884__auto__);
});

modal_synth.webaudio.make_noise_buffer.cljs$core$IFn$_invoke$arity$variadic = (function (length,audio_context,p__36283){
var map__36284 = p__36283;
var map__36284__$1 = ((((!((map__36284 == null)))?((((map__36284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36284):map__36284);
var noise_type = cljs.core.get.call(null,map__36284__$1,new cljs.core.Keyword(null,"noise-type","noise-type",739698482));
var buffer_size = (length * audio_context.sampleRate);
var noise_buffer = audio_context.createBuffer((1),buffer_size,audio_context.sampleRate);
var noise_buffer_data = noise_buffer.getChannelData((0));
var generate_noise_sample = ((function (buffer_size,noise_buffer,noise_buffer_data,map__36284,map__36284__$1,noise_type){
return (function (){
return ((cljs.core.rand.call(null) * (2)) - (1));
});})(buffer_size,noise_buffer,noise_buffer_data,map__36284,map__36284__$1,noise_type))
;
if(cljs.core._EQ_.call(null,noise_type,new cljs.core.Keyword(null,"brownian","brownian",-211478877))){
var n__25716__auto___36289 = buffer_size;
var i_36290 = (0);
while(true){
if((i_36290 < n__25716__auto___36289)){
var prev_sample_36291 = (noise_buffer_data[i_36290]);
var uptake_36292 = 0.03;
var filtered_sample_36293 = (((generate_noise_sample.call(null) * uptake_36292) + prev_sample_36291) / (1.0 + uptake_36292));
(noise_buffer_data[(i_36290 + (1))] = filtered_sample_36293);

var G__36294 = (i_36290 + (1));
i_36290 = G__36294;
continue;
} else {
}
break;
}

var n__25716__auto___36295 = buffer_size;
var i_36296 = (0);
while(true){
if((i_36296 < n__25716__auto___36295)){
var sample_36297 = (noise_buffer_data[i_36296]);
var makeup_gain_36298 = 3.5;
(noise_buffer_data[i_36296] = (sample_36297 * makeup_gain_36298));

var G__36299 = (i_36296 + (1));
i_36296 = G__36299;
continue;
} else {
}
break;
}
} else {
var n__25716__auto___36300 = buffer_size;
var i_36301 = (0);
while(true){
if((i_36301 < n__25716__auto___36300)){
(noise_buffer_data[i_36301] = generate_noise_sample.call(null));

var G__36302 = (i_36301 + (1));
i_36301 = G__36302;
continue;
} else {
}
break;
}

}

return noise_buffer;
});

modal_synth.webaudio.make_noise_buffer.cljs$lang$maxFixedArity = (2);

modal_synth.webaudio.make_noise_buffer.cljs$lang$applyTo = (function (seq36280){
var G__36281 = cljs.core.first.call(null,seq36280);
var seq36280__$1 = cljs.core.next.call(null,seq36280);
var G__36282 = cljs.core.first.call(null,seq36280__$1);
var seq36280__$2 = cljs.core.next.call(null,seq36280__$1);
return modal_synth.webaudio.make_noise_buffer.cljs$core$IFn$_invoke$arity$variadic(G__36281,G__36282,seq36280__$2);
});

modal_synth.webaudio.make_noise_osc = (function modal_synth$webaudio$make_noise_osc(var_args){
var args__25883__auto__ = [];
var len__25876__auto___36308 = arguments.length;
var i__25877__auto___36309 = (0);
while(true){
if((i__25877__auto___36309 < len__25876__auto___36308)){
args__25883__auto__.push((arguments[i__25877__auto___36309]));

var G__36310 = (i__25877__auto___36309 + (1));
i__25877__auto___36309 = G__36310;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return modal_synth.webaudio.make_noise_osc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

modal_synth.webaudio.make_noise_osc.cljs$core$IFn$_invoke$arity$variadic = (function (audio_context,p__36305){
var map__36306 = p__36305;
var map__36306__$1 = ((((!((map__36306 == null)))?((((map__36306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36306):map__36306);
var highpass_cutoff = cljs.core.get.call(null,map__36306__$1,new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000),(0));
var lowpass_cutoff = cljs.core.get.call(null,map__36306__$1,new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310),(3000));
var noise_buffer = modal_synth.webaudio.make_noise_buffer.call(null,(5),audio_context,new cljs.core.Keyword(null,"noise-type","noise-type",739698482),new cljs.core.Keyword(null,"brownian","brownian",-211478877));
var noise_buffer_source = audio_context.createBufferSource();
var bandpass = modal_synth.webaudio.make_bandpass.call(null,highpass_cutoff,lowpass_cutoff,audio_context);
noise_buffer_source.buffer = noise_buffer;

noise_buffer_source.connect(new cljs.core.Keyword(null,"input-node","input-node",-1489678281).cljs$core$IFn$_invoke$arity$1(bandpass));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"input-node","input-node",-1489678281),null,new cljs.core.Keyword(null,"output-node","output-node",-726641186),new cljs.core.Keyword(null,"output-node","output-node",-726641186).cljs$core$IFn$_invoke$arity$1(bandpass),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"NoiseOsc","NoiseOsc",-1408090371),new cljs.core.Keyword(null,"node","node",581201198),noise_buffer_source], null);
});

modal_synth.webaudio.make_noise_osc.cljs$lang$maxFixedArity = (1);

modal_synth.webaudio.make_noise_osc.cljs$lang$applyTo = (function (seq36303){
var G__36304 = cljs.core.first.call(null,seq36303);
var seq36303__$1 = cljs.core.next.call(null,seq36303);
return modal_synth.webaudio.make_noise_osc.cljs$core$IFn$_invoke$arity$variadic(G__36304,seq36303__$1);
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
var len__25876__auto___36319 = arguments.length;
var i__25877__auto___36320 = (0);
while(true){
if((i__25877__auto___36320 < len__25876__auto___36319)){
args__25883__auto__.push((arguments[i__25877__auto___36320]));

var G__36321 = (i__25877__auto___36320 + (1));
i__25877__auto___36320 = G__36321;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((4) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((4)),(0),null)):null);
return modal_synth.webaudio.make_adsr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25884__auto__);
});

modal_synth.webaudio.make_adsr.cljs$core$IFn$_invoke$arity$variadic = (function (attack_time,decay_time,sustain_level,release_time,p__36316){
var map__36317 = p__36316;
var map__36317__$1 = ((((!((map__36317 == null)))?((((map__36317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36317):map__36317);
var slope = cljs.core.get.call(null,map__36317__$1,new cljs.core.Keyword(null,"slope","slope",-1227938123));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"attack-time","attack-time",-1223233591),attack_time,new cljs.core.Keyword(null,"decay-time","decay-time",967759431),decay_time,new cljs.core.Keyword(null,"sustain-level","sustain-level",2030703043),sustain_level,new cljs.core.Keyword(null,"release-time","release-time",210242290),release_time,new cljs.core.Keyword(null,"slope","slope",-1227938123),slope], null);
});

modal_synth.webaudio.make_adsr.cljs$lang$maxFixedArity = (4);

modal_synth.webaudio.make_adsr.cljs$lang$applyTo = (function (seq36311){
var G__36312 = cljs.core.first.call(null,seq36311);
var seq36311__$1 = cljs.core.next.call(null,seq36311);
var G__36313 = cljs.core.first.call(null,seq36311__$1);
var seq36311__$2 = cljs.core.next.call(null,seq36311__$1);
var G__36314 = cljs.core.first.call(null,seq36311__$2);
var seq36311__$3 = cljs.core.next.call(null,seq36311__$2);
var G__36315 = cljs.core.first.call(null,seq36311__$3);
var seq36311__$4 = cljs.core.next.call(null,seq36311__$3);
return modal_synth.webaudio.make_adsr.cljs$core$IFn$_invoke$arity$variadic(G__36312,G__36313,G__36314,G__36315,seq36311__$4);
});

modal_synth.webaudio.apply_adsr_BANG_ = (function modal_synth$webaudio$apply_adsr_BANG_(var_args){
var args__25883__auto__ = [];
var len__25876__auto___36364 = arguments.length;
var i__25877__auto___36365 = (0);
while(true){
if((i__25877__auto___36365 < len__25876__auto___36364)){
args__25883__auto__.push((arguments[i__25877__auto___36365]));

var G__36366 = (i__25877__auto___36365 + (1));
i__25877__auto___36365 = G__36366;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((4) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((4)),(0),null)):null);
return modal_synth.webaudio.apply_adsr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__25884__auto__);
});

modal_synth.webaudio.apply_adsr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (param,adsr,noteoff_chan,audio_context,p__36327){
var map__36328 = p__36327;
var map__36328__$1 = ((((!((map__36328 == null)))?((((map__36328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36328):map__36328);
var start_time_offset = cljs.core.get.call(null,map__36328__$1,new cljs.core.Keyword(null,"start-time-offset","start-time-offset",-1189089602),(0));
var start_val = cljs.core.get.call(null,map__36328__$1,new cljs.core.Keyword(null,"start-val","start-val",-1126485981),1.0E-30);
var attack_peak_val = cljs.core.get.call(null,map__36328__$1,new cljs.core.Keyword(null,"attack-peak-val","attack-peak-val",-2074198938),(1));
var now = modal_synth.webaudio.get_now.call(null,audio_context);
var attack_start_time = (now + start_time_offset);
var decay_start_time = (attack_start_time + new cljs.core.Keyword(null,"attack-time","attack-time",-1223233591).cljs$core$IFn$_invoke$arity$1(adsr));
var sustain_start_time = (decay_start_time + new cljs.core.Keyword(null,"decay-time","decay-time",967759431).cljs$core$IFn$_invoke$arity$1(adsr));
param.setValueAtTime(start_val,attack_start_time);

modal_synth.webaudio.ramp_to_value_at_time_BANG_.call(null,param,attack_peak_val,decay_start_time,new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.Keyword(null,"slope","slope",-1227938123).cljs$core$IFn$_invoke$arity$1(adsr));

modal_synth.webaudio.ramp_to_value_at_time_BANG_.call(null,param,new cljs.core.Keyword(null,"sustain-level","sustain-level",2030703043).cljs$core$IFn$_invoke$arity$1(adsr),sustain_start_time,new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.Keyword(null,"slope","slope",-1227938123).cljs$core$IFn$_invoke$arity$1(adsr));

var c__26973__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto__,now,attack_start_time,decay_start_time,sustain_start_time,map__36328,map__36328__$1,start_time_offset,start_val,attack_peak_val){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto__,now,attack_start_time,decay_start_time,sustain_start_time,map__36328,map__36328__$1,start_time_offset,start_val,attack_peak_val){
return (function (state_36348){
var state_val_36349 = (state_36348[(1)]);
if((state_val_36349 === (1))){
var state_36348__$1 = state_36348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36348__$1,(2),noteoff_chan);
} else {
if((state_val_36349 === (2))){
var inst_36331 = (state_36348[(2)]);
var inst_36332 = cljs.core.print.call(null,"noteoff!");
var inst_36333 = modal_synth.webaudio.get_now.call(null,audio_context);
var inst_36334 = new cljs.core.Keyword(null,"release-time","release-time",210242290).cljs$core$IFn$_invoke$arity$1(adsr);
var inst_36335 = (inst_36333 + inst_36334);
var inst_36336 = new cljs.core.Keyword(null,"slope","slope",-1227938123).cljs$core$IFn$_invoke$arity$1(adsr);
var inst_36337 = modal_synth.webaudio.ramp_to_value_at_time_BANG_.call(null,param,start_val,inst_36335,new cljs.core.Keyword(null,"slope","slope",-1227938123),inst_36336);
var state_36348__$1 = (function (){var statearr_36350 = state_36348;
(statearr_36350[(7)] = inst_36337);

(statearr_36350[(8)] = inst_36332);

(statearr_36350[(9)] = inst_36331);

return statearr_36350;
})();
var statearr_36351_36367 = state_36348__$1;
(statearr_36351_36367[(2)] = null);

(statearr_36351_36367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36349 === (3))){
var inst_36339 = cljs.core.async.poll_BANG_.call(null,noteoff_chan);
var state_36348__$1 = state_36348;
if(cljs.core.truth_(inst_36339)){
var statearr_36352_36368 = state_36348__$1;
(statearr_36352_36368[(1)] = (5));

} else {
var statearr_36353_36369 = state_36348__$1;
(statearr_36353_36369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36349 === (4))){
var inst_36346 = (state_36348[(2)]);
var state_36348__$1 = state_36348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36348__$1,inst_36346);
} else {
if((state_val_36349 === (5))){
var state_36348__$1 = state_36348;
var statearr_36354_36370 = state_36348__$1;
(statearr_36354_36370[(2)] = null);

(statearr_36354_36370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36349 === (6))){
var state_36348__$1 = state_36348;
var statearr_36355_36371 = state_36348__$1;
(statearr_36355_36371[(2)] = null);

(statearr_36355_36371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36349 === (7))){
var inst_36344 = (state_36348[(2)]);
var state_36348__$1 = state_36348;
var statearr_36356_36372 = state_36348__$1;
(statearr_36356_36372[(2)] = inst_36344);

(statearr_36356_36372[(1)] = (4));


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
});})(c__26973__auto__,now,attack_start_time,decay_start_time,sustain_start_time,map__36328,map__36328__$1,start_time_offset,start_val,attack_peak_val))
;
return ((function (switch__26861__auto__,c__26973__auto__,now,attack_start_time,decay_start_time,sustain_start_time,map__36328,map__36328__$1,start_time_offset,start_val,attack_peak_val){
return (function() {
var modal_synth$webaudio$state_machine__26862__auto__ = null;
var modal_synth$webaudio$state_machine__26862__auto____0 = (function (){
var statearr_36360 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36360[(0)] = modal_synth$webaudio$state_machine__26862__auto__);

(statearr_36360[(1)] = (1));

return statearr_36360;
});
var modal_synth$webaudio$state_machine__26862__auto____1 = (function (state_36348){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_36348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e36361){if((e36361 instanceof Object)){
var ex__26865__auto__ = e36361;
var statearr_36362_36373 = state_36348;
(statearr_36362_36373[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36374 = state_36348;
state_36348 = G__36374;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
modal_synth$webaudio$state_machine__26862__auto__ = function(state_36348){
switch(arguments.length){
case 0:
return modal_synth$webaudio$state_machine__26862__auto____0.call(this);
case 1:
return modal_synth$webaudio$state_machine__26862__auto____1.call(this,state_36348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modal_synth$webaudio$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = modal_synth$webaudio$state_machine__26862__auto____0;
modal_synth$webaudio$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = modal_synth$webaudio$state_machine__26862__auto____1;
return modal_synth$webaudio$state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto__,now,attack_start_time,decay_start_time,sustain_start_time,map__36328,map__36328__$1,start_time_offset,start_val,attack_peak_val))
})();
var state__26975__auto__ = (function (){var statearr_36363 = f__26974__auto__.call(null);
(statearr_36363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto__);

return statearr_36363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto__,now,attack_start_time,decay_start_time,sustain_start_time,map__36328,map__36328__$1,start_time_offset,start_val,attack_peak_val))
);

return c__26973__auto__;
});

modal_synth.webaudio.apply_adsr_BANG_.cljs$lang$maxFixedArity = (4);

modal_synth.webaudio.apply_adsr_BANG_.cljs$lang$applyTo = (function (seq36322){
var G__36323 = cljs.core.first.call(null,seq36322);
var seq36322__$1 = cljs.core.next.call(null,seq36322);
var G__36324 = cljs.core.first.call(null,seq36322__$1);
var seq36322__$2 = cljs.core.next.call(null,seq36322__$1);
var G__36325 = cljs.core.first.call(null,seq36322__$2);
var seq36322__$3 = cljs.core.next.call(null,seq36322__$2);
var G__36326 = cljs.core.first.call(null,seq36322__$3);
var seq36322__$4 = cljs.core.next.call(null,seq36322__$3);
return modal_synth.webaudio.apply_adsr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36323,G__36324,G__36325,G__36326,seq36322__$4);
});

modal_synth.webaudio.apply_ar_envelope_BANG_ = (function modal_synth$webaudio$apply_ar_envelope_BANG_(var_args){
var args__25883__auto__ = [];
var len__25876__auto___36382 = arguments.length;
var i__25877__auto___36383 = (0);
while(true){
if((i__25877__auto___36383 < len__25876__auto___36382)){
args__25883__auto__.push((arguments[i__25877__auto___36383]));

var G__36384 = (i__25877__auto___36383 + (1));
i__25877__auto___36383 = G__36384;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((3) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((3)),(0),null)):null);
return modal_synth.webaudio.apply_ar_envelope_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25884__auto__);
});

modal_synth.webaudio.apply_ar_envelope_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (param,adsr,audio_context,p__36379){
var map__36380 = p__36379;
var map__36380__$1 = ((((!((map__36380 == null)))?((((map__36380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36380):map__36380);
var start_time_offset = cljs.core.get.call(null,map__36380__$1,new cljs.core.Keyword(null,"start-time-offset","start-time-offset",-1189089602),(0));
var start_val = cljs.core.get.call(null,map__36380__$1,new cljs.core.Keyword(null,"start-val","start-val",-1126485981),1.0E-30);
var attack_peak_val = cljs.core.get.call(null,map__36380__$1,new cljs.core.Keyword(null,"attack-peak-val","attack-peak-val",-2074198938),(1));
var noteoff_chan = cljs.core.async.chan.call(null);
cljs.core.async.put_BANG_.call(null,noteoff_chan,new cljs.core.Keyword(null,"noteoff","noteoff",-544089122));

return modal_synth.webaudio.apply_adsr_BANG_.call(null,param,adsr,noteoff_chan,audio_context);
});

modal_synth.webaudio.apply_ar_envelope_BANG_.cljs$lang$maxFixedArity = (3);

modal_synth.webaudio.apply_ar_envelope_BANG_.cljs$lang$applyTo = (function (seq36375){
var G__36376 = cljs.core.first.call(null,seq36375);
var seq36375__$1 = cljs.core.next.call(null,seq36375);
var G__36377 = cljs.core.first.call(null,seq36375__$1);
var seq36375__$2 = cljs.core.next.call(null,seq36375__$1);
var G__36378 = cljs.core.first.call(null,seq36375__$2);
var seq36375__$3 = cljs.core.next.call(null,seq36375__$2);
return modal_synth.webaudio.apply_ar_envelope_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36376,G__36377,G__36378,seq36375__$3);
});


//# sourceMappingURL=webaudio.js.map?rel=1516956393070