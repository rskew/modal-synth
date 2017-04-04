// Compiled by ClojureScript 1.9.229 {}
goog.provide('modal_synth.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('modal_synth.webaudio');
goog.require('modal_synth.keyboard_control');
goog.require('modal_synth.channel_dom');
goog.require('dommy.core');
goog.require('modal_synth.utils');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('modal_synth.fader');
modal_synth.core.gain_multiplier = (1);
modal_synth.core.delay_time_multiplier = 0.05;
modal_synth.core.lowpass_cutoff_upper_bound = (20000);
modal_synth.core.highpass_cutoff_upper_bound = (20000);
cljs.core.enable_console_print_BANG_.call(null);
if(typeof modal_synth.core.audio_context !== 'undefined'){
} else {
modal_synth.core.audio_context = modal_synth.webaudio.create_audio_context.call(null);
}
modal_synth.core.make_channel_audio = (function modal_synth$core$make_channel_audio(){
var delay_line = modal_synth.webaudio.make_delay_line.call(null,2.0,modal_synth.core.audio_context);
var gain = modal_synth.webaudio.make_gain.call(null,0.1,modal_synth.core.audio_context);
var compressor = modal_synth.webaudio.make_compressor.call(null,modal_synth.core.audio_context,new cljs.core.Keyword(null,"ratio","ratio",-926560044),(4),new cljs.core.Keyword(null,"threshold","threshold",204221583),(-12),new cljs.core.Keyword(null,"attack","attack",1957061788),(0),new cljs.core.Keyword(null,"release","release",-1534371381),(0));
var bandpass = modal_synth.webaudio.make_bandpass.call(null,0.4,0.5,modal_synth.core.audio_context);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"graph","graph",1558099509),cljs.core.reduce.call(null,modal_synth.webaudio.connect,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [delay_line,bandpass,gain,compressor], null)),new cljs.core.Keyword(null,"gain-graph","gain-graph",-1150542917),gain,new cljs.core.Keyword(null,"compressor-graph","compressor-graph",-1191300367),compressor,new cljs.core.Keyword(null,"delay-graph","delay-graph",-1466473451),delay_line,new cljs.core.Keyword(null,"bandpass-graph","bandpass-graph",1414189324),bandpass], null);
});
modal_synth.core.gain_mapping = (function modal_synth$core$gain_mapping(fader_level){

return (fader_level * modal_synth.core.gain_multiplier);
});
modal_synth.core.delay_mapping = (function modal_synth$core$delay_mapping(fader_level){

return (fader_level * modal_synth.core.delay_time_multiplier);
});
modal_synth.core.highpass_cutoff_mapping = (function modal_synth$core$highpass_cutoff_mapping(fader_level){

return Math.pow(modal_synth.core.highpass_cutoff_upper_bound,fader_level);
});
modal_synth.core.lowpass_cutoff_mapping = (function modal_synth$core$lowpass_cutoff_mapping(fader_level){

cljs.core.print.call(null,"updating lowpass cutoff with fader level ",fader_level);

return Math.pow(modal_synth.core.lowpass_cutoff_upper_bound,fader_level);
});
modal_synth.core.make_watcher = (function modal_synth$core$make_watcher(graph,setter,mapping){
return (function (key,atom,old_state,new_state){
return setter.call(null,graph,mapping.call(null,new_state));
});
});
modal_synth.core.init_channel_state = (function modal_synth$core$init_channel_state(gain,delay_time,highpass_cutoff,lowpass_cutoff,channel_audio){
var channel_state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"gain","gain",1350925045),cljs.core.atom.call(null,gain),new cljs.core.Keyword(null,"delay","delay",-574225219),cljs.core.atom.call(null,delay_time),new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000),cljs.core.atom.call(null,highpass_cutoff),new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310),cljs.core.atom.call(null,lowpass_cutoff)], null);
cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(channel_state),new cljs.core.Keyword(null,"gain-watcher","gain-watcher",1316598598),modal_synth.core.make_watcher.call(null,new cljs.core.Keyword(null,"gain-graph","gain-graph",-1150542917).cljs$core$IFn$_invoke$arity$1(channel_audio),modal_synth.webaudio.set_gain_BANG_,modal_synth.core.gain_mapping));

cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(channel_state),new cljs.core.Keyword(null,"delay-watcher","delay-watcher",-1439115087),modal_synth.core.make_watcher.call(null,new cljs.core.Keyword(null,"delay-graph","delay-graph",-1466473451).cljs$core$IFn$_invoke$arity$1(channel_audio),modal_synth.webaudio.set_delay_time_BANG_,modal_synth.core.delay_mapping));

cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310).cljs$core$IFn$_invoke$arity$1(channel_state),new cljs.core.Keyword(null,"lowpass-cutoff-watcher","lowpass-cutoff-watcher",-1255930732),modal_synth.core.make_watcher.call(null,new cljs.core.Keyword(null,"bandpass-graph","bandpass-graph",1414189324).cljs$core$IFn$_invoke$arity$1(channel_audio),modal_synth.webaudio.set_lowpass_cutoff_BANG_,modal_synth.core.lowpass_cutoff_mapping));

cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000).cljs$core$IFn$_invoke$arity$1(channel_state),new cljs.core.Keyword(null,"highpass-cutoff-watcher","highpass-cutoff-watcher",-1589763230),modal_synth.core.make_watcher.call(null,new cljs.core.Keyword(null,"bandpass-graph","bandpass-graph",1414189324).cljs$core$IFn$_invoke$arity$1(channel_audio),modal_synth.webaudio.set_highpass_cutoff_BANG_,modal_synth.core.highpass_cutoff_mapping));

return channel_state;
});
if(typeof modal_synth.core.channel1_audio !== 'undefined'){
} else {
modal_synth.core.channel1_audio = modal_synth.core.make_channel_audio.call(null);
}
if(typeof modal_synth.core.channel1_state !== 'undefined'){
} else {
modal_synth.core.channel1_state = modal_synth.core.init_channel_state.call(null,0.3,(0),(0),(1),modal_synth.core.channel1_audio);
}
modal_synth.core.channel1 = modal_synth.channel_dom.create.call(null,new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_state),new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_state),new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_state),new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_state),"channel1");
modal_synth.core.divider1 = modal_synth.channel_dom.create_divider.call(null,"divider1");
modal_synth.channel_dom.add_to.call(null,document.body,modal_synth.core.divider1);
if(typeof modal_synth.core.channel2_audio !== 'undefined'){
} else {
modal_synth.core.channel2_audio = modal_synth.core.make_channel_audio.call(null);
}
if(typeof modal_synth.core.channel2_state !== 'undefined'){
} else {
modal_synth.core.channel2_state = modal_synth.core.init_channel_state.call(null,0.3,(0),(0),(1),modal_synth.core.channel2_audio);
}
modal_synth.core.channel2 = modal_synth.channel_dom.create.call(null,new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel2_state),new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel2_state),new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel2_state),new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel2_state),"channel2");
modal_synth.core.divider2 = modal_synth.channel_dom.create_divider.call(null,"divider2");
modal_synth.channel_dom.add_to.call(null,document.body,modal_synth.core.divider2);
if(typeof modal_synth.core.channel3_audio !== 'undefined'){
} else {
modal_synth.core.channel3_audio = modal_synth.core.make_channel_audio.call(null);
}
if(typeof modal_synth.core.channel3_state !== 'undefined'){
} else {
modal_synth.core.channel3_state = modal_synth.core.init_channel_state.call(null,0.3,(0),(0),(1),modal_synth.core.channel3_audio);
}
modal_synth.core.channel3 = modal_synth.channel_dom.create.call(null,new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel3_state),new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel3_state),new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel3_state),new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel3_state),"channel3");
modal_synth.core.divider3 = modal_synth.channel_dom.create_divider.call(null,"divider3");
modal_synth.channel_dom.add_to.call(null,document.body,modal_synth.core.divider3);
if(typeof modal_synth.core.channel4_audio !== 'undefined'){
} else {
modal_synth.core.channel4_audio = modal_synth.core.make_channel_audio.call(null);
}
if(typeof modal_synth.core.channel4_state !== 'undefined'){
} else {
modal_synth.core.channel4_state = modal_synth.core.init_channel_state.call(null,0.3,(0),(0),(1),modal_synth.core.channel4_audio);
}
modal_synth.core.channel4 = modal_synth.channel_dom.create.call(null,new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel4_state),new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel4_state),new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel4_state),new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel4_state),"channel4");
modal_synth.core.divider_master1 = modal_synth.channel_dom.create_divider.call(null,"divider-master1");
modal_synth.channel_dom.add_to.call(null,document.body,modal_synth.core.divider_master1);
modal_synth.core.divider_master2 = modal_synth.channel_dom.create_divider.call(null,"divider-master2");
modal_synth.channel_dom.add_to.call(null,document.body,modal_synth.core.divider_master2);
if(typeof modal_synth.core.channel_master_audio !== 'undefined'){
} else {
modal_synth.core.channel_master_audio = modal_synth.core.make_channel_audio.call(null);
}
if(typeof modal_synth.core.channel_master_state !== 'undefined'){
} else {
modal_synth.core.channel_master_state = modal_synth.core.init_channel_state.call(null,0.3,(0),(0),(1),modal_synth.core.channel_master_audio);
}
modal_synth.core.channel_master = modal_synth.channel_dom.create.call(null,new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel_master_state),new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel_master_state),new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel_master_state),new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel_master_state),"channel-master");
if(typeof modal_synth.core.master_fanin !== 'undefined'){
} else {
modal_synth.core.master_fanin = modal_synth.webaudio.fanin.call(null,new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel_master_audio));
}
if(typeof modal_synth.core.master_fanout !== 'undefined'){
} else {
modal_synth.core.master_fanout = modal_synth.webaudio.fanout.call(null,new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel_master_audio));
}
modal_synth.webaudio.connect.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_audio),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel2_audio),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel3_audio),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel4_audio)], null),modal_synth.core.master_fanin);
modal_synth.webaudio.connect.call(null,modal_synth.core.master_fanout,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_audio),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel2_audio),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel3_audio),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel4_audio)], null));
modal_synth.webaudio.connect.call(null,modal_synth.core.master_fanout,modal_synth.webaudio.destination.call(null,modal_synth.core.audio_context));
if(typeof modal_synth.core.noise_osc !== 'undefined'){
} else {
modal_synth.core.noise_osc = (function (){var osc_node = modal_synth.webaudio.make_noise_osc.call(null,modal_synth.core.audio_context,new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000),(30),new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310),(1800));
modal_synth.webaudio.loop_noise_osc.call(null,osc_node);

modal_synth.webaudio.osc_start.call(null,osc_node,modal_synth.webaudio.get_now.call(null,modal_synth.core.audio_context));

return osc_node;
})();
}
if(typeof modal_synth.core.noise_gain !== 'undefined'){
} else {
modal_synth.core.noise_gain = modal_synth.webaudio.make_gain.call(null,(0),modal_synth.core.audio_context);
}
modal_synth.webaudio.connect.call(null,modal_synth.webaudio.fanout.call(null,modal_synth.webaudio.connect.call(null,modal_synth.core.noise_osc,modal_synth.core.noise_gain)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_audio),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel2_audio),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel3_audio),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel4_audio)], null));
if(typeof modal_synth.core.noise_gain_state !== 'undefined'){
} else {
modal_synth.core.noise_gain_state = cljs.core.atom.call(null,(0));
}
cljs.core.add_watch.call(null,modal_synth.core.noise_gain_state,new cljs.core.Keyword(null,"noise-gain-watcher","noise-gain-watcher",937576375),modal_synth.core.make_watcher.call(null,modal_synth.core.noise_osc,modal_synth.webaudio.set_gain_BANG_,cljs.core.identity));
if(typeof modal_synth.core.bow_osc !== 'undefined'){
} else {
modal_synth.core.bow_osc = (function (){var osc_node = modal_synth.webaudio.make_osc.call(null,(40),modal_synth.core.audio_context,new cljs.core.Keyword(null,"osc-type","osc-type",1936803365),"sawtooth");
modal_synth.webaudio.osc_start.call(null,osc_node,modal_synth.webaudio.get_now.call(null,modal_synth.core.audio_context));

return osc_node;
})();
}
if(typeof modal_synth.core.bow_gain !== 'undefined'){
} else {
modal_synth.core.bow_gain = modal_synth.webaudio.make_gain.call(null,(0),modal_synth.core.audio_context);
}
modal_synth.webaudio.connect.call(null,modal_synth.webaudio.fanout.call(null,modal_synth.webaudio.connect.call(null,modal_synth.core.bow_osc,modal_synth.core.bow_gain)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_audio),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel2_audio),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel3_audio),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel4_audio)], null));
if(typeof modal_synth.core.bow_gain_state !== 'undefined'){
} else {
modal_synth.core.bow_gain_state = cljs.core.atom.call(null,(0));
}
cljs.core.add_watch.call(null,modal_synth.core.bow_gain_state,new cljs.core.Keyword(null,"bow-gain-watcher","bow-gain-watcher",1973588402),modal_synth.core.make_watcher.call(null,modal_synth.core.bow_osc,modal_synth.webaudio.set_gain_BANG_,cljs.core.identity));
modal_synth.keyboard_control.init.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"channel-states","channel-states",-1679098618),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"1","1",-521621649),modal_synth.core.channel1_state,new cljs.core.Keyword(null,"2","2",-1645882217),modal_synth.core.channel2_state,new cljs.core.Keyword(null,"3","3",2097825370),modal_synth.core.channel3_state,new cljs.core.Keyword(null,"4","4",-1197948085),modal_synth.core.channel4_state,new cljs.core.Keyword(null,"master","master",779988698),modal_synth.core.channel_master_state], null),new cljs.core.Keyword(null,"noise-gain-state","noise-gain-state",-72582685),modal_synth.core.noise_gain_state,new cljs.core.Keyword(null,"noise-gain","noise-gain",-1909022045),modal_synth.core.noise_gain,new cljs.core.Keyword(null,"bow-gain-state","bow-gain-state",110234516),modal_synth.core.bow_gain_state,new cljs.core.Keyword(null,"bow-gain","bow-gain",620436542),modal_synth.core.bow_gain,new cljs.core.Keyword(null,"audio-context","audio-context",1642559898),modal_synth.core.audio_context], null));

//# sourceMappingURL=core.js.map?rel=1491276482815