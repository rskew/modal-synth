// Compiled by ClojureScript 1.9.229 {}
goog.provide('modal_synth.channel');
goog.require('cljs.core');
goog.require('modal_synth.fader');
goog.require('modal_synth.webaudio');
goog.require('dommy.core');
modal_synth.channel.gain_multiplier = (1);
modal_synth.channel.delay_time_multiplier = 0.05;
modal_synth.channel.cutoff_upper_bound = (20000);
modal_synth.channel.cutoff_lower_bound = (30);
modal_synth.channel.make_channel_audio = (function modal_synth$channel$make_channel_audio(audio_context){
var delay_line = modal_synth.webaudio.make_delay_line.call(null,2.0,audio_context);
var gain = modal_synth.webaudio.make_gain.call(null,0.1,audio_context);
var compressor = modal_synth.webaudio.make_compressor.call(null,audio_context,new cljs.core.Keyword(null,"ratio","ratio",-926560044),(4),new cljs.core.Keyword(null,"threshold","threshold",204221583),(-12),new cljs.core.Keyword(null,"attack","attack",1957061788),(0),new cljs.core.Keyword(null,"release","release",-1534371381),(0));
var bandpass = modal_synth.webaudio.make_bandpass.call(null,0.4,0.5,audio_context);
var analyser = modal_synth.webaudio.make_analyser.call(null,(2048),audio_context);
modal_synth.webaudio.connect_BANG_.call(null,compressor,analyser);

return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"graph","graph",1558099509),cljs.core.reduce.call(null,modal_synth.webaudio.connect_BANG_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [delay_line,bandpass,gain,compressor], null)),new cljs.core.Keyword(null,"gain-graph","gain-graph",-1150542917),gain,new cljs.core.Keyword(null,"compressor-graph","compressor-graph",-1191300367),compressor,new cljs.core.Keyword(null,"delay-graph","delay-graph",-1466473451),delay_line,new cljs.core.Keyword(null,"bandpass-graph","bandpass-graph",1414189324),bandpass,new cljs.core.Keyword(null,"analyser-graph","analyser-graph",1532600469),analyser], null);
});
modal_synth.channel.update_audio_at_time_BANG_ = (function modal_synth$channel$update_audio_at_time_BANG_(channel_audio,channel_state,at_time){
modal_synth.webaudio.set_gain_BANG_.call(null,new cljs.core.Keyword(null,"gain-graph","gain-graph",-1150542917).cljs$core$IFn$_invoke$arity$1(channel_audio),cljs.core.deref.call(null,new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(channel_state)),at_time);

modal_synth.webaudio.set_delay_time_BANG_.call(null,new cljs.core.Keyword(null,"delay-graph","delay-graph",-1466473451).cljs$core$IFn$_invoke$arity$1(channel_audio),cljs.core.deref.call(null,new cljs.core.Keyword(null,"delay-time","delay-time",1390409728).cljs$core$IFn$_invoke$arity$1(channel_state)),at_time);

modal_synth.webaudio.set_highpass_cutoff_BANG_.call(null,new cljs.core.Keyword(null,"bandpass-graph","bandpass-graph",1414189324).cljs$core$IFn$_invoke$arity$1(channel_audio),cljs.core.deref.call(null,new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000).cljs$core$IFn$_invoke$arity$1(channel_state)),at_time);

return modal_synth.webaudio.set_lowpass_cutoff_BANG_.call(null,new cljs.core.Keyword(null,"bandpass-graph","bandpass-graph",1414189324).cljs$core$IFn$_invoke$arity$1(channel_audio),cljs.core.deref.call(null,new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310).cljs$core$IFn$_invoke$arity$1(channel_state)),at_time);
});
modal_synth.channel.create_channel_state = (function modal_synth$channel$create_channel_state(gain,delay_time,highpass_cutoff,lowpass_cutoff){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"gain","gain",1350925045),cljs.core.atom.call(null,gain),new cljs.core.Keyword(null,"delay-time","delay-time",1390409728),cljs.core.atom.call(null,delay_time),new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000),cljs.core.atom.call(null,highpass_cutoff),new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310),cljs.core.atom.call(null,lowpass_cutoff)], null);
});
modal_synth.channel.copy_channel_state_BANG_ = (function modal_synth$channel$copy_channel_state_BANG_(channel_from,channel_to){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(channel_to),cljs.core.deref.call(null,new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(channel_from)));

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"delay-time","delay-time",1390409728).cljs$core$IFn$_invoke$arity$1(channel_to),cljs.core.deref.call(null,new cljs.core.Keyword(null,"delay-time","delay-time",1390409728).cljs$core$IFn$_invoke$arity$1(channel_from)));

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000).cljs$core$IFn$_invoke$arity$1(channel_to),cljs.core.deref.call(null,new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000).cljs$core$IFn$_invoke$arity$1(channel_from)));

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310).cljs$core$IFn$_invoke$arity$1(channel_to),cljs.core.deref.call(null,new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310).cljs$core$IFn$_invoke$arity$1(channel_from)));

return channel_to;
});
modal_synth.channel.transition_channel_state_BANG_ = (function modal_synth$channel$transition_channel_state_BANG_(channel_to,channel_from,at_time){
return null;
});
modal_synth.channel.gain_mapping = (function modal_synth$channel$gain_mapping(fader_level){

return (fader_level * modal_synth.channel.gain_multiplier);
});
modal_synth.channel.delay_mapping = (function modal_synth$channel$delay_mapping(fader_level){

return (fader_level * modal_synth.channel.delay_time_multiplier);
});
modal_synth.channel.highpass_cutoff_mapping = (function modal_synth$channel$highpass_cutoff_mapping(fader_level){

return (Math.pow((modal_synth.channel.cutoff_upper_bound - modal_synth.channel.cutoff_lower_bound),fader_level) + modal_synth.channel.cutoff_lower_bound);
});
modal_synth.channel.lowpass_cutoff_mapping = (function modal_synth$channel$lowpass_cutoff_mapping(fader_level){

return (Math.pow((modal_synth.channel.cutoff_upper_bound - modal_synth.channel.cutoff_lower_bound),fader_level) + modal_synth.channel.cutoff_lower_bound);
});
modal_synth.channel.make_watcher = (function modal_synth$channel$make_watcher(graph,setter,mapping){
return (function (key,atom,old_state,new_state){
return setter.call(null,graph,mapping.call(null,new_state));
});
});
modal_synth.channel.init_channel_state_BANG_ = (function modal_synth$channel$init_channel_state_BANG_(initial_gain,initial_delay_time,initial_highpass_cutoff,initial_lowpass_cutoff,channel_audio){
var channel_state = modal_synth.channel.create_channel_state.call(null,initial_gain,initial_delay_time,initial_highpass_cutoff,initial_lowpass_cutoff);
if(cljs.core.truth_(channel_audio)){
var aug_channel_state = cljs.core.assoc.call(null,channel_state,new cljs.core.Keyword(null,"analyser-array","analyser-array",-1245423519),(new Uint8Array(modal_synth.webaudio.get_fft_bin_count.call(null,new cljs.core.Keyword(null,"analyser-graph","analyser-graph",1532600469).cljs$core$IFn$_invoke$arity$1(channel_audio)))));
cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(aug_channel_state),new cljs.core.Keyword(null,"gain-watcher","gain-watcher",1316598598),modal_synth.channel.make_watcher.call(null,new cljs.core.Keyword(null,"gain-graph","gain-graph",-1150542917).cljs$core$IFn$_invoke$arity$1(channel_audio),modal_synth.webaudio.set_gain_BANG_,modal_synth.channel.gain_mapping));

cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"delay-time","delay-time",1390409728).cljs$core$IFn$_invoke$arity$1(aug_channel_state),new cljs.core.Keyword(null,"delay-watcher","delay-watcher",-1439115087),modal_synth.channel.make_watcher.call(null,new cljs.core.Keyword(null,"delay-graph","delay-graph",-1466473451).cljs$core$IFn$_invoke$arity$1(channel_audio),modal_synth.webaudio.set_delay_time_BANG_,modal_synth.channel.delay_mapping));

cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310).cljs$core$IFn$_invoke$arity$1(aug_channel_state),new cljs.core.Keyword(null,"lowpass-cutoff-watcher","lowpass-cutoff-watcher",-1255930732),modal_synth.channel.make_watcher.call(null,new cljs.core.Keyword(null,"bandpass-graph","bandpass-graph",1414189324).cljs$core$IFn$_invoke$arity$1(channel_audio),modal_synth.webaudio.set_lowpass_cutoff_BANG_,modal_synth.channel.lowpass_cutoff_mapping));

cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000).cljs$core$IFn$_invoke$arity$1(aug_channel_state),new cljs.core.Keyword(null,"highpass-cutoff-watcher","highpass-cutoff-watcher",-1589763230),modal_synth.channel.make_watcher.call(null,new cljs.core.Keyword(null,"bandpass-graph","bandpass-graph",1414189324).cljs$core$IFn$_invoke$arity$1(channel_audio),modal_synth.webaudio.set_highpass_cutoff_BANG_,modal_synth.channel.highpass_cutoff_mapping));

return aug_channel_state;
} else {
return channel_state;
}
});

//# sourceMappingURL=channel.js.map?rel=1516956393871