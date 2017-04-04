// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs_bach.synthesis');
goog.require('cljs.core');
/**
 * Construct an audio context in a way that works even if it's prefixed.
 */
cljs_bach.synthesis.audio_context = (function cljs_bach$synthesis$audio_context(){
if(cljs.core.truth_(window.AudioContext)){
return (new window.AudioContext());
} else {
return (new window.webkitAudioContext());
}
});
/**
 * Return the current time as recorded by the audio context.
 */
cljs_bach.synthesis.current_time = (function cljs_bach$synthesis$current_time(context){
return context.currentTime;
});
cljs_bach.synthesis.subgraph = (function cljs_bach$synthesis$subgraph(var_args){
var args34482 = [];
var len__25853__auto___34485 = arguments.length;
var i__25854__auto___34486 = (0);
while(true){
if((i__25854__auto___34486 < len__25853__auto___34485)){
args34482.push((arguments[i__25854__auto___34486]));

var G__34487 = (i__25854__auto___34486 + (1));
i__25854__auto___34486 = G__34487;
continue;
} else {
}
break;
}

var G__34484 = args34482.length;
switch (G__34484) {
case 2:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34482.length)].join('')));

}
});

cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$2 = (function (input,output){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",556931961),input,new cljs.core.Keyword(null,"output","output",-1105869043),output], null);
});

cljs_bach.synthesis.subgraph.cljs$core$IFn$_invoke$arity$1 = (function (singleton){
return cljs_bach.synthesis.subgraph.call(null,singleton,singleton);
});

cljs_bach.synthesis.subgraph.cljs$lang$maxFixedArity = 2;

/**
 * A graph of synthesis nodes without an input, so another graph can't connect to it.
 */
cljs_bach.synthesis.source = (function cljs_bach$synthesis$source(node){
return cljs_bach.synthesis.subgraph.call(null,null,node);
});
/**
 * A graph of synthesis nodes without an output, so it can't connect to another graph.
 */
cljs_bach.synthesis.sink = (function cljs_bach$synthesis$sink(node){
return cljs_bach.synthesis.subgraph.call(null,node,null);
});
/**
 * Convert a synth (actually a reader fn) into a concrete subgraph by supplying context and timing.
 */
cljs_bach.synthesis.run_with = (function cljs_bach$synthesis$run_with(synth,context,at,duration){
return synth.call(null,context,at,duration);
});
/**
 * The destination of the audio context i.e. the speakers.
 */
cljs_bach.synthesis.destination = (function cljs_bach$synthesis$destination(context,at,duration){
return cljs_bach.synthesis.sink.call(null,context.destination);
});
cljs_bach.synthesis.plug = (function cljs_bach$synthesis$plug(param,input,context,at,duration){

if(typeof input === 'number'){
return param.setValueAtTime(input,at);
} else {
return new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(cljs_bach.synthesis.run_with.call(null,input,context,at,duration)).connect(param);
}
});
/**
 * Multiply the signal by level.
 */
cljs_bach.synthesis.gain = (function cljs_bach$synthesis$gain(level){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__34490 = context.createGain();
cljs_bach.synthesis.plug.call(null,G__34490.gain,level,context,at,duration);

return G__34490;
})());
});
});
/**
 * Pass the signal through unaltered.
 */
cljs_bach.synthesis.pass_through = cljs_bach.synthesis.gain.call(null,1.0);
/**
 * Build an envelope out of [segment-duration final-level] coordinates.
 */
cljs_bach.synthesis.envelope = (function cljs_bach$synthesis$envelope(var_args){
var args__25860__auto__ = [];
var len__25853__auto___34498 = arguments.length;
var i__25854__auto___34499 = (0);
while(true){
if((i__25854__auto___34499 < len__25853__auto___34498)){
args__25860__auto__.push((arguments[i__25854__auto___34499]));

var G__34500 = (i__25854__auto___34499 + (1));
i__25854__auto___34499 = G__34500;
continue;
} else {
}
break;
}

var argseq__25861__auto__ = ((((0) < args__25860__auto__.length))?(new cljs.core.IndexedSeq(args__25860__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(argseq__25861__auto__);
});

cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic = (function (corners){
return (function (context,at,duration){
var audio_node = context.createGain();
audio_node.gain.setValueAtTime((0),at);

var x_34501 = at;
var coordinates_34502 = corners;
while(true){
var temp__4657__auto___34503 = coordinates_34502;
if(cljs.core.truth_(temp__4657__auto___34503)){
var vec__34492_34504 = temp__4657__auto___34503;
var seq__34493_34505 = cljs.core.seq.call(null,vec__34492_34504);
var first__34494_34506 = cljs.core.first.call(null,seq__34493_34505);
var seq__34493_34507__$1 = cljs.core.next.call(null,seq__34493_34505);
var vec__34495_34508 = first__34494_34506;
var dx_34509 = cljs.core.nth.call(null,vec__34495_34508,(0),null);
var y_34510 = cljs.core.nth.call(null,vec__34495_34508,(1),null);
var remaining_34511 = seq__34493_34507__$1;
audio_node.gain.linearRampToValueAtTime(y_34510,(x_34501 + dx_34509));

var G__34512 = (dx_34509 + x_34501);
var G__34513 = remaining_34511;
x_34501 = G__34512;
coordinates_34502 = G__34513;
continue;
} else {
}
break;
}

return cljs_bach.synthesis.subgraph.call(null,audio_node);
});
});

cljs_bach.synthesis.envelope.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.envelope.cljs$lang$applyTo = (function (seq34491){
return cljs_bach.synthesis.envelope.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34491));
});

/**
 * An ADSR envelope that also lets you specify the hold duration.
 */
cljs_bach.synthesis.adshr = (function cljs_bach$synthesis$adshr(attack,decay,sustain,hold,release){
return cljs_bach.synthesis.envelope.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hold,sustain], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [release,(0)], null));
});
/**
 * A four-stage envelope.
 */
cljs_bach.synthesis.adsr = (function cljs_bach$synthesis$adsr(attack,decay,sustain,release){
return (function (context,at,duration){
var remainder = (((duration - attack) - decay) - sustain);
var hold = (function (){var x__25109__auto__ = 0.0;
var y__25110__auto__ = remainder;
return ((x__25109__auto__ > y__25110__auto__) ? x__25109__auto__ : y__25110__auto__);
})();
var node = cljs_bach.synthesis.adshr.call(null,attack,decay,sustain,hold,release);
return cljs_bach.synthesis.run_with.call(null,node,context,at,duration);
});
});
/**
 * A simple envelope.
 */
cljs_bach.synthesis.percussive = (function cljs_bach$synthesis$percussive(attack,decay){
return cljs_bach.synthesis.envelope.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attack,1.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [decay,0.0], null));
});
/**
 * Like update-in, but for the node graph a synth will return (and variadic).
 */
cljs_bach.synthesis.update_graph = (function cljs_bach$synthesis$update_graph(var_args){
var args__25860__auto__ = [];
var len__25853__auto___34517 = arguments.length;
var i__25854__auto___34518 = (0);
while(true){
if((i__25854__auto___34518 < len__25853__auto___34517)){
args__25860__auto__.push((arguments[i__25854__auto___34518]));

var G__34519 = (i__25854__auto___34518 + (1));
i__25854__auto___34518 = G__34519;
continue;
} else {
}
break;
}

var argseq__25861__auto__ = ((((1) < args__25860__auto__.length))?(new cljs.core.IndexedSeq(args__25860__auto__.slice((1)),(0),null)):null);
return cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25861__auto__);
});

cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic = (function (f,synths){
return (function (context,at,duration){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,(function (p1__34514_SHARP_){
return cljs_bach.synthesis.run_with.call(null,p1__34514_SHARP_,context,at,duration);
}),synths));
});
});

cljs_bach.synthesis.update_graph.cljs$lang$maxFixedArity = (1);

cljs_bach.synthesis.update_graph.cljs$lang$applyTo = (function (seq34515){
var G__34516 = cljs.core.first.call(null,seq34515);
var seq34515__$1 = cljs.core.next.call(null,seq34515);
return cljs_bach.synthesis.update_graph.cljs$core$IFn$_invoke$arity$variadic(G__34516,seq34515__$1);
});

/**
 * Use the output of one synth as the input to another.
 */
cljs_bach.synthesis.connect = (function cljs_bach$synthesis$connect(upstream_synth,downstream_synth){
return cljs_bach.synthesis.update_graph.call(null,(function (graph1,graph2){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph1).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph2));

return cljs_bach.synthesis.subgraph.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph1),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph2));
}),upstream_synth,downstream_synth);
});
/**
 * Connect synths in series.
 */
cljs_bach.synthesis.connect__GT_ = (function cljs_bach$synthesis$connect__GT_(var_args){
var args__25860__auto__ = [];
var len__25853__auto___34521 = arguments.length;
var i__25854__auto___34522 = (0);
while(true){
if((i__25854__auto___34522 < len__25853__auto___34521)){
args__25860__auto__.push((arguments[i__25854__auto___34522]));

var G__34523 = (i__25854__auto___34522 + (1));
i__25854__auto___34522 = G__34523;
continue;
} else {
}
break;
}

var argseq__25861__auto__ = ((((0) < args__25860__auto__.length))?(new cljs.core.IndexedSeq(args__25860__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__25861__auto__);
});

cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return cljs.core.reduce.call(null,cljs_bach.synthesis.connect,nodes);
});

cljs_bach.synthesis.connect__GT_.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.connect__GT_.cljs$lang$applyTo = (function (seq34520){
return cljs_bach.synthesis.connect__GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34520));
});

/**
 * Join the graphs in parallel, with upstream and downstream as the source and sink.
 */
cljs_bach.synthesis.join = (function cljs_bach$synthesis$join(var_args){
var args__25860__auto__ = [];
var len__25853__auto___34531 = arguments.length;
var i__25854__auto___34532 = (0);
while(true){
if((i__25854__auto___34532 < len__25853__auto___34531)){
args__25860__auto__.push((arguments[i__25854__auto___34532]));

var G__34533 = (i__25854__auto___34532 + (1));
i__25854__auto___34532 = G__34533;
continue;
} else {
}
break;
}

var argseq__25861__auto__ = ((((2) < args__25860__auto__.length))?(new cljs.core.IndexedSeq(args__25860__auto__.slice((2)),(0),null)):null);
return cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25861__auto__);
});

cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic = (function (upstream,downstream,graphs){
var seq__34527_34534 = cljs.core.seq.call(null,graphs);
var chunk__34528_34535 = null;
var count__34529_34536 = (0);
var i__34530_34537 = (0);
while(true){
if((i__34530_34537 < count__34529_34536)){
var graph_34538 = cljs.core._nth.call(null,chunk__34528_34535,i__34530_34537);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_34538).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_34538))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_34538));
} else {
}

var G__34539 = seq__34527_34534;
var G__34540 = chunk__34528_34535;
var G__34541 = count__34529_34536;
var G__34542 = (i__34530_34537 + (1));
seq__34527_34534 = G__34539;
chunk__34528_34535 = G__34540;
count__34529_34536 = G__34541;
i__34530_34537 = G__34542;
continue;
} else {
var temp__4657__auto___34543 = cljs.core.seq.call(null,seq__34527_34534);
if(temp__4657__auto___34543){
var seq__34527_34544__$1 = temp__4657__auto___34543;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34527_34544__$1)){
var c__25589__auto___34545 = cljs.core.chunk_first.call(null,seq__34527_34544__$1);
var G__34546 = cljs.core.chunk_rest.call(null,seq__34527_34544__$1);
var G__34547 = c__25589__auto___34545;
var G__34548 = cljs.core.count.call(null,c__25589__auto___34545);
var G__34549 = (0);
seq__34527_34534 = G__34546;
chunk__34528_34535 = G__34547;
count__34529_34536 = G__34548;
i__34530_34537 = G__34549;
continue;
} else {
var graph_34550 = cljs.core.first.call(null,seq__34527_34544__$1);
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(graph_34550).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(downstream));

if(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_34550))){
new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(upstream).connect(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(graph_34550));
} else {
}

var G__34551 = cljs.core.next.call(null,seq__34527_34544__$1);
var G__34552 = null;
var G__34553 = (0);
var G__34554 = (0);
seq__34527_34534 = G__34551;
chunk__34528_34535 = G__34552;
count__34529_34536 = G__34553;
i__34530_34537 = G__34554;
continue;
}
} else {
}
}
break;
}

return cljs_bach.synthesis.subgraph.call(null,new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(upstream),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(downstream));
});

cljs_bach.synthesis.join.cljs$lang$maxFixedArity = (2);

cljs_bach.synthesis.join.cljs$lang$applyTo = (function (seq34524){
var G__34525 = cljs.core.first.call(null,seq34524);
var seq34524__$1 = cljs.core.next.call(null,seq34524);
var G__34526 = cljs.core.first.call(null,seq34524__$1);
var seq34524__$2 = cljs.core.next.call(null,seq34524__$1);
return cljs_bach.synthesis.join.cljs$core$IFn$_invoke$arity$variadic(G__34525,G__34526,seq34524__$2);
});

/**
 * Add together synths by connecting them all to the same upstream and downstream gains.
 */
cljs_bach.synthesis.add = (function cljs_bach$synthesis$add(var_args){
var args__25860__auto__ = [];
var len__25853__auto___34556 = arguments.length;
var i__25854__auto___34557 = (0);
while(true){
if((i__25854__auto___34557 < len__25853__auto___34556)){
args__25860__auto__.push((arguments[i__25854__auto___34557]));

var G__34558 = (i__25854__auto___34557 + (1));
i__25854__auto___34557 = G__34558;
continue;
} else {
}
break;
}

var argseq__25861__auto__ = ((((0) < args__25860__auto__.length))?(new cljs.core.IndexedSeq(args__25860__auto__.slice((0)),(0),null)):null);
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(argseq__25861__auto__);
});

cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic = (function (synths){
return cljs.core.apply.call(null,cljs_bach.synthesis.update_graph,cljs_bach.synthesis.join,cljs_bach.synthesis.pass_through,cljs_bach.synthesis.pass_through,synths);
});

cljs_bach.synthesis.add.cljs$lang$maxFixedArity = (0);

cljs_bach.synthesis.add.cljs$lang$applyTo = (function (seq34555){
return cljs_bach.synthesis.add.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34555));
});

cljs_bach.synthesis.raw_buffer = (function cljs_bach$synthesis$raw_buffer(generate_bit_BANG_,context,duration){
var sample_rate = (44100);
var frame_count = (sample_rate * duration);
var buffer = context.createBuffer((1),frame_count,sample_rate);
var data = buffer.getChannelData((0));
var seq__34563_34567 = cljs.core.seq.call(null,cljs.core.range.call(null,sample_rate));
var chunk__34564_34568 = null;
var count__34565_34569 = (0);
var i__34566_34570 = (0);
while(true){
if((i__34566_34570 < count__34565_34569)){
var i_34571 = cljs.core._nth.call(null,chunk__34564_34568,i__34566_34570);
(data[i_34571] = generate_bit_BANG_.call(null,i_34571));

var G__34572 = seq__34563_34567;
var G__34573 = chunk__34564_34568;
var G__34574 = count__34565_34569;
var G__34575 = (i__34566_34570 + (1));
seq__34563_34567 = G__34572;
chunk__34564_34568 = G__34573;
count__34565_34569 = G__34574;
i__34566_34570 = G__34575;
continue;
} else {
var temp__4657__auto___34576 = cljs.core.seq.call(null,seq__34563_34567);
if(temp__4657__auto___34576){
var seq__34563_34577__$1 = temp__4657__auto___34576;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34563_34577__$1)){
var c__25589__auto___34578 = cljs.core.chunk_first.call(null,seq__34563_34577__$1);
var G__34579 = cljs.core.chunk_rest.call(null,seq__34563_34577__$1);
var G__34580 = c__25589__auto___34578;
var G__34581 = cljs.core.count.call(null,c__25589__auto___34578);
var G__34582 = (0);
seq__34563_34567 = G__34579;
chunk__34564_34568 = G__34580;
count__34565_34569 = G__34581;
i__34566_34570 = G__34582;
continue;
} else {
var i_34583 = cljs.core.first.call(null,seq__34563_34577__$1);
(data[i_34583] = generate_bit_BANG_.call(null,i_34583));

var G__34584 = cljs.core.next.call(null,seq__34563_34577__$1);
var G__34585 = null;
var G__34586 = (0);
var G__34587 = (0);
seq__34563_34567 = G__34584;
chunk__34564_34568 = G__34585;
count__34565_34569 = G__34586;
i__34566_34570 = G__34587;
continue;
}
} else {
}
}
break;
}

return buffer;
});
cljs_bach.synthesis.buffer = cljs.core.memoize.call(null,cljs_bach.synthesis.raw_buffer);
/**
 * Make noise according to the supplied strategy for creating bits.
 */
cljs_bach.synthesis.noise = (function cljs_bach$synthesis$noise(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.source.call(null,(function (){var G__34589 = context.createBufferSource();
G__34589.buffer = cljs_bach.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

G__34589.start(at);

return G__34589;
})());
});
});
/**
 * Random noise.
 */
cljs_bach.synthesis.white_noise = (function (){var white = (function (_){
return ((Math.random() * 2.0) - 1.0);
});
return cljs_bach.synthesis.noise.call(null,white);
})();
/**
 * Make a constant value by creating noise with a fixed value.
 */
cljs_bach.synthesis.constant = (function cljs_bach$synthesis$constant(x){
return cljs_bach.synthesis.noise.call(null,cljs.core.constantly.call(null,x));
});
/**
 * A periodic wave.
 */
cljs_bach.synthesis.oscillator = (function cljs_bach$synthesis$oscillator(type,freq){
return (function (context,at,duration){
return cljs_bach.synthesis.source.call(null,(function (){var G__34591 = context.createOscillator();
G__34591.frequency.value = (0);

cljs_bach.synthesis.plug.call(null,G__34591.frequency,freq,context,at,duration);

G__34591.type = type;

G__34591.start(at);

G__34591.stop(((at + duration) + 1.0));

return G__34591;
})());
});
});
cljs_bach.synthesis.sine = cljs.core.partial.call(null,cljs_bach.synthesis.oscillator,"sine");
cljs_bach.synthesis.sawtooth = cljs.core.partial.call(null,cljs_bach.synthesis.oscillator,"sawtooth");
cljs_bach.synthesis.square = cljs.core.partial.call(null,cljs_bach.synthesis.oscillator,"square");
cljs_bach.synthesis.triangle = cljs.core.partial.call(null,cljs_bach.synthesis.oscillator,"triangle");
/**
 * Attenuate frequencies beyond the cutoff, and intensify the cutoff frequency based on the value of q.
 */
cljs_bach.synthesis.biquad_filter = (function cljs_bach$synthesis$biquad_filter(var_args){
var args34592 = [];
var len__25853__auto___34596 = arguments.length;
var i__25854__auto___34597 = (0);
while(true){
if((i__25854__auto___34597 < len__25853__auto___34596)){
args34592.push((arguments[i__25854__auto___34597]));

var G__34598 = (i__25854__auto___34597 + (1));
i__25854__auto___34597 = G__34598;
continue;
} else {
}
break;
}

var G__34594 = args34592.length;
switch (G__34594) {
case 2:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34592.length)].join('')));

}
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$2 = (function (type,freq){
return cljs_bach.synthesis.biquad_filter.call(null,type,freq,1.0);
});

cljs_bach.synthesis.biquad_filter.cljs$core$IFn$_invoke$arity$3 = (function (type,freq,q){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__34595 = context.createBiquadFilter();
G__34595.frequency.value = (0);

cljs_bach.synthesis.plug.call(null,G__34595.frequency,freq,context,at,duration);

cljs_bach.synthesis.plug.call(null,G__34595.Q,q,context,at,duration);

G__34595.type = type;

return G__34595;
})());
});
});

cljs_bach.synthesis.biquad_filter.cljs$lang$maxFixedArity = 3;

cljs_bach.synthesis.low_pass = cljs.core.partial.call(null,cljs_bach.synthesis.biquad_filter,"lowpass");
cljs_bach.synthesis.high_pass = cljs.core.partial.call(null,cljs_bach.synthesis.biquad_filter,"highpass");
/**
 * Pan the signal left (-1) or right (1).
 */
cljs_bach.synthesis.stereo_panner = (function cljs_bach$synthesis$stereo_panner(pan){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__34601 = context.createStereoPanner();
cljs_bach.synthesis.plug.call(null,G__34601.pan,pan,context,at,duration);

return G__34601;
})());
});
});
/**
 * Delay the signal.
 */
cljs_bach.synthesis.delay_line = (function cljs_bach$synthesis$delay_line(seconds){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var maximum = (5);
var G__34603 = context.createDelay(maximum);
cljs_bach.synthesis.plug.call(null,G__34603.delayTime,seconds,context,at,duration);

return G__34603;
})());
});
});
/**
 * Linear convolution.
 */
cljs_bach.synthesis.convolver = (function cljs_bach$synthesis$convolver(generate_bit_BANG_){
return (function (context,at,duration){
return cljs_bach.synthesis.subgraph.call(null,(function (){var G__34605 = context.createConvolver();
G__34605.buffer = cljs_bach.synthesis.buffer.call(null,generate_bit_BANG_,context,(duration + 1.0));

return G__34605;
})());
});
});
/**
 * Crude reverb.
 */
cljs_bach.synthesis.reverb = (function (){var duration = (5);
var decay = (3);
var sample_rate = (44100);
var length = (sample_rate * (duration + 1.0));
var logarithmic_decay = ((function (duration,decay,sample_rate,length){
return (function (i){
return (((Math.random(i) * 2.0) - 1.0) * Math.pow(((1) - (i / length)),decay));
});})(duration,decay,sample_rate,length))
;
return cljs_bach.synthesis.convolver.call(null,logarithmic_decay);
})();
/**
 * Mix the original signal with one with the effect applied.
 */
cljs_bach.synthesis.enhance = (function cljs_bach$synthesis$enhance(effect,level){
return cljs_bach.synthesis.add.call(null,cljs_bach.synthesis.pass_through,cljs_bach.synthesis.connect__GT_.call(null,effect,cljs_bach.synthesis.gain.call(null,level)));
});

//# sourceMappingURL=synthesis.js.map?rel=1489313206673