// Compiled by ClojureScript 1.9.229 {}
goog.provide('modal_synth.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('modal_synth.webaudio');
goog.require('modal_synth.keyboard_control');
goog.require('modal_synth.spectro_vis');
goog.require('modal_synth.channel_dom');
goog.require('modal_synth.cycles');
goog.require('dommy.core');
goog.require('modal_synth.utils');
goog.require('cljs.core.async');
goog.require('modal_synth.scheduler');
goog.require('goog.events');
goog.require('modal_synth.fader');
goog.require('modal_synth.channel');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof modal_synth.core.audio_context !== 'undefined'){
} else {
modal_synth.core.audio_context = modal_synth.webaudio.create_audio_context.call(null);
}
modal_synth.core.init_channels_BANG_ = (function modal_synth$core$init_channels_BANG_(){
if(typeof modal_synth.core.channel1_audio !== 'undefined'){
} else {
modal_synth.core.channel1_audio = modal_synth.channel.make_channel_audio.call(null,modal_synth.core.audio_context);
}

if(typeof modal_synth.core.channel1_state !== 'undefined'){
} else {
modal_synth.core.channel1_state = modal_synth.channel.init_channel_state_BANG_.call(null,0.2,0.46,(0),(1),modal_synth.core.channel1_audio);
}

modal_synth.core.channel1 = modal_synth.channel_dom.create_BANG_.call(null,new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_state),new cljs.core.Keyword(null,"delay-time","delay-time",1390409728).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_state),new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_state),new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_state),"channel1");

if(typeof modal_synth.core.channel1_cycle_state !== 'undefined'){
} else {
modal_synth.core.channel1_cycle_state = modal_synth.channel.init_channel_state_BANG_.call(null,0.8,(1),0.3,0.7,null);
}

modal_synth.core.channel1_cycle = modal_synth.channel_dom.create_cycle_BANG_.call(null,new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_cycle_state),new cljs.core.Keyword(null,"delay-time","delay-time",1390409728).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_cycle_state),new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_cycle_state),new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_cycle_state),"channel1");

modal_synth.core.divider1 = modal_synth.channel_dom.create_divider.call(null,"divider1");

modal_synth.channel_dom.add_to_BANG_.call(null,document.body,modal_synth.core.divider1);

var G__35826_35827 = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spectrum-vis","spectrum-vis",-2084864708).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1));
G__35826_35827.fillStyle = "rgb(200, 0, 0)";

G__35826_35827.fillRect((0),(0),(11635),(1135));


if(typeof modal_synth.core.channel2_audio !== 'undefined'){
} else {
modal_synth.core.channel2_audio = modal_synth.channel.make_channel_audio.call(null,modal_synth.core.audio_context);
}

if(typeof modal_synth.core.channel2_state !== 'undefined'){
} else {
modal_synth.core.channel2_state = modal_synth.channel.init_channel_state_BANG_.call(null,0.7,0.73,0.5,(1),modal_synth.core.channel2_audio);
}

modal_synth.core.channel2 = modal_synth.channel_dom.create_BANG_.call(null,new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel2_state),new cljs.core.Keyword(null,"delay-time","delay-time",1390409728).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel2_state),new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel2_state),new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel2_state),"channel2");

modal_synth.core.divider2 = modal_synth.channel_dom.create_divider.call(null,"divider2");

modal_synth.channel_dom.add_to_BANG_.call(null,document.body,modal_synth.core.divider2);

if(typeof modal_synth.core.channel3_audio !== 'undefined'){
} else {
modal_synth.core.channel3_audio = modal_synth.channel.make_channel_audio.call(null,modal_synth.core.audio_context);
}

if(typeof modal_synth.core.channel3_state !== 'undefined'){
} else {
modal_synth.core.channel3_state = modal_synth.channel.init_channel_state_BANG_.call(null,0.8,0.12,0.2,0.6,modal_synth.core.channel3_audio);
}

modal_synth.core.channel3 = modal_synth.channel_dom.create_BANG_.call(null,new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel3_state),new cljs.core.Keyword(null,"delay-time","delay-time",1390409728).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel3_state),new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel3_state),new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel3_state),"channel3");

modal_synth.core.divider3 = modal_synth.channel_dom.create_divider.call(null,"divider3");

modal_synth.channel_dom.add_to_BANG_.call(null,document.body,modal_synth.core.divider3);

if(typeof modal_synth.core.channel4_audio !== 'undefined'){
} else {
modal_synth.core.channel4_audio = modal_synth.channel.make_channel_audio.call(null,modal_synth.core.audio_context);
}

if(typeof modal_synth.core.channel4_state !== 'undefined'){
} else {
modal_synth.core.channel4_state = modal_synth.channel.init_channel_state_BANG_.call(null,0.8,0.3,(0),0.4,modal_synth.core.channel4_audio);
}

modal_synth.core.channel4 = modal_synth.channel_dom.create_BANG_.call(null,new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel4_state),new cljs.core.Keyword(null,"delay-time","delay-time",1390409728).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel4_state),new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel4_state),new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel4_state),"channel4");

modal_synth.core.divider_master1 = modal_synth.channel_dom.create_divider.call(null,"divider-master1");

modal_synth.channel_dom.add_to_BANG_.call(null,document.body,modal_synth.core.divider_master1);

modal_synth.core.divider_master2 = modal_synth.channel_dom.create_divider.call(null,"divider-master2");

modal_synth.channel_dom.add_to_BANG_.call(null,document.body,modal_synth.core.divider_master2);

if(typeof modal_synth.core.channel_master_audio !== 'undefined'){
} else {
modal_synth.core.channel_master_audio = modal_synth.channel.make_channel_audio.call(null,modal_synth.core.audio_context);
}

if(typeof modal_synth.core.channel_master_state !== 'undefined'){
} else {
modal_synth.core.channel_master_state = modal_synth.channel.init_channel_state_BANG_.call(null,0.7,0.13,(0),(1),modal_synth.core.channel_master_audio);
}

modal_synth.core.channel_master = modal_synth.channel_dom.create_BANG_.call(null,new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel_master_state),new cljs.core.Keyword(null,"delay-time","delay-time",1390409728).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel_master_state),new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel_master_state),new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel_master_state),"channel-master");
});
modal_synth.core.connect_audio_nodes_BANG_ = (function modal_synth$core$connect_audio_nodes_BANG_(){
modal_synth.webaudio.connect_BANG_.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_audio),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel2_audio),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel3_audio),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel4_audio)], null),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel_master_audio));

modal_synth.webaudio.connect_BANG_.call(null,new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel_master_audio),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_audio),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel2_audio),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel3_audio),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel4_audio)], null));

modal_synth.webaudio.connect_BANG_.call(null,new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel_master_audio),modal_synth.webaudio.destination.call(null,modal_synth.core.audio_context));

navigator.mediaDevices.getUserMedia((function (){var obj35831 = {"audio":true,"video:":false};
return obj35831;
})()).then((function (stream){
var audio_stream_node = modal_synth.core.audio_context.createMediaStreamSource(stream);
var input = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input-node","input-node",-1489678281),null,new cljs.core.Keyword(null,"output-node","output-node",-726641186),audio_stream_node,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Fanin","Fanin",1370374010)], null);
return modal_synth.webaudio.connect_BANG_.call(null,input,new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel2_audio));
}));

if(typeof modal_synth.core.noise_osc !== 'undefined'){
} else {
modal_synth.core.noise_osc = (function (){var osc_node = modal_synth.webaudio.make_noise_osc.call(null,modal_synth.core.audio_context,new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000),(30),new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310),(1800));
modal_synth.webaudio.loop_noise_osc_BANG_.call(null,osc_node);

modal_synth.webaudio.osc_start_BANG_.call(null,osc_node,modal_synth.webaudio.get_now.call(null,modal_synth.core.audio_context));

return osc_node;
})();
}

if(typeof modal_synth.core.noise_gain !== 'undefined'){
} else {
modal_synth.core.noise_gain = modal_synth.webaudio.make_gain.call(null,(0),modal_synth.core.audio_context);
}

modal_synth.webaudio.connect_BANG_.call(null,modal_synth.webaudio.connect_BANG_.call(null,modal_synth.core.noise_osc,modal_synth.core.noise_gain),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_audio),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel2_audio),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel3_audio),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel4_audio)], null));

if(typeof modal_synth.core.noise_gain_state !== 'undefined'){
} else {
modal_synth.core.noise_gain_state = cljs.core.atom.call(null,(0));
}

cljs.core.add_watch.call(null,modal_synth.core.noise_gain_state,new cljs.core.Keyword(null,"noise-gain-watcher","noise-gain-watcher",937576375),modal_synth.channel.make_watcher.call(null,modal_synth.core.noise_osc,modal_synth.webaudio.set_gain_BANG_,cljs.core.identity));

if(typeof modal_synth.core.bow_osc !== 'undefined'){
} else {
modal_synth.core.bow_osc = (function (){var osc_node = modal_synth.webaudio.make_osc.call(null,(40),modal_synth.core.audio_context,new cljs.core.Keyword(null,"osc-type","osc-type",1936803365),"sawtooth");
modal_synth.webaudio.osc_start_BANG_.call(null,osc_node,modal_synth.webaudio.get_now.call(null,modal_synth.core.audio_context));

return osc_node;
})();
}

if(typeof modal_synth.core.bow_gain !== 'undefined'){
} else {
modal_synth.core.bow_gain = modal_synth.webaudio.make_gain.call(null,(0),modal_synth.core.audio_context);
}

modal_synth.webaudio.connect_BANG_.call(null,modal_synth.webaudio.connect_BANG_.call(null,modal_synth.core.bow_osc,modal_synth.core.bow_gain),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_audio),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel2_audio),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel3_audio),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel4_audio)], null));

if(typeof modal_synth.core.bow_gain_state !== 'undefined'){
} else {
modal_synth.core.bow_gain_state = cljs.core.atom.call(null,(0));
}

return cljs.core.add_watch.call(null,modal_synth.core.bow_gain_state,new cljs.core.Keyword(null,"bow-gain-watcher","bow-gain-watcher",1973588402),modal_synth.channel.make_watcher.call(null,modal_synth.core.bow_osc,modal_synth.webaudio.set_gain_BANG_,cljs.core.identity));
});
modal_synth.core.init_keyboard_control_BANG_ = (function modal_synth$core$init_keyboard_control_BANG_(){
return modal_synth.keyboard_control.init_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"channel-states","channel-states",-1679098618),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"1","1",-521621649),modal_synth.core.channel1_state,new cljs.core.Keyword(null,"2","2",-1645882217),modal_synth.core.channel2_state,new cljs.core.Keyword(null,"3","3",2097825370),modal_synth.core.channel3_state,new cljs.core.Keyword(null,"4","4",-1197948085),modal_synth.core.channel4_state,new cljs.core.Keyword(null,"master","master",779988698),modal_synth.core.channel_master_state], null),new cljs.core.Keyword(null,"noise-gain-state","noise-gain-state",-72582685),modal_synth.core.noise_gain_state,new cljs.core.Keyword(null,"noise-gain","noise-gain",-1909022045),modal_synth.core.noise_gain,new cljs.core.Keyword(null,"bow-gain-state","bow-gain-state",110234516),modal_synth.core.bow_gain_state,new cljs.core.Keyword(null,"bow-gain","bow-gain",620436542),modal_synth.core.bow_gain,new cljs.core.Keyword(null,"audio-context","audio-context",1642559898),modal_synth.core.audio_context], null));
});
modal_synth.core.init_scheduler_BANG_ = (function modal_synth$core$init_scheduler_BANG_(){
if(typeof modal_synth.core.scheduler !== 'undefined'){
return null;
} else {
modal_synth.core.scheduler = modal_synth.scheduler.create_BANG_.call(null,modal_synth.core.audio_context,new cljs.core.Keyword(null,"lookahead","lookahead",-400102393),0.03,new cljs.core.Keyword(null,"period","period",-352129191),(3));
}
});
modal_synth.core.init_cycles_BANG_ = (function modal_synth$core$init_cycles_BANG_(){
var cycle_fader1 = new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_cycle);
var audio_fader1 = new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1);
var drag_and_drop_cycle = cljs.core.atom.call(null,null);
if(typeof modal_synth.core.cycles_div !== 'undefined'){
} else {
modal_synth.core.cycles_div = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
}

dommy.core.set_attr_BANG_.call(null,modal_synth.core.cycles_div,new cljs.core.Keyword(null,"id","id",-1388402092),"cycles");

dommy.core.append_BANG_.call(null,document.body,modal_synth.core.cycles_div);

if(typeof modal_synth.core.cycle1 !== 'undefined'){
} else {
modal_synth.core.cycle1 = modal_synth.cycles.create.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),(7),audio_fader1,cycle_fader1,drag_and_drop_cycle,modal_synth.core.scheduler,new cljs.core.Keyword(null,"freq","freq",-1855845278),cljs.core.atom.call(null,(10)));
}

dommy.core.append_BANG_.call(null,modal_synth.core.cycles_div,new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(modal_synth.core.cycle1));

var fader_pairs = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio-fader","audio-fader",2132086428),new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1),new cljs.core.Keyword(null,"cycle-fader","cycle-fader",-836872222),new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_cycle)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio-fader","audio-fader",2132086428),new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1),new cljs.core.Keyword(null,"cycle-fader","cycle-fader",-836872222),new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_cycle)], null)], null);
cljs.core.doall.call(null,cljs.core.map.call(null,((function (fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle){
return (function (p__35932){
var map__35933 = p__35932;
var map__35933__$1 = ((((!((map__35933 == null)))?((((map__35933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35933):map__35933);
var audio_fader = cljs.core.get.call(null,map__35933__$1,new cljs.core.Keyword(null,"audio-fader","audio-fader",2132086428));
var cycle_fader = cljs.core.get.call(null,map__35933__$1,new cljs.core.Keyword(null,"cycle-fader","cycle-fader",-836872222));
var drop_chan = modal_synth.utils.listen.call(null,new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(audio_fader),"drop");
var c__27981__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27981__auto__,drop_chan,map__35933,map__35933__$1,audio_fader,cycle_fader,fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle){
return (function (){
var f__27982__auto__ = (function (){var switch__27916__auto__ = ((function (c__27981__auto__,drop_chan,map__35933,map__35933__$1,audio_fader,cycle_fader,fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle){
return (function (state_35961){
var state_val_35962 = (state_35961[(1)]);
if((state_val_35962 === (7))){
var inst_35938 = (state_35961[(2)]);
var inst_35939 = cljs.core.deref.call(null,drag_and_drop_cycle);
var state_35961__$1 = (function (){var statearr_35963 = state_35961;
(statearr_35963[(7)] = inst_35938);

return statearr_35963;
})();
if(cljs.core.truth_(inst_35939)){
var statearr_35964_36032 = state_35961__$1;
(statearr_35964_36032[(1)] = (8));

} else {
var statearr_35965_36033 = state_35961__$1;
(statearr_35965_36033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (1))){
var state_35961__$1 = state_35961;
var statearr_35966_36034 = state_35961__$1;
(statearr_35966_36034[(2)] = null);

(statearr_35966_36034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (4))){
var state_35961__$1 = state_35961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35961__$1,(7),drop_chan);
} else {
if((state_val_35962 === (6))){
var inst_35957 = (state_35961[(2)]);
var state_35961__$1 = state_35961;
var statearr_35967_36035 = state_35961__$1;
(statearr_35967_36035[(2)] = inst_35957);

(statearr_35967_36035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (3))){
var inst_35959 = (state_35961[(2)]);
var state_35961__$1 = state_35961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35961__$1,inst_35959);
} else {
if((state_val_35962 === (2))){
var state_35961__$1 = state_35961;
var statearr_35968_36036 = state_35961__$1;
(statearr_35968_36036[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (9))){
var state_35961__$1 = state_35961;
var statearr_35970_36037 = state_35961__$1;
(statearr_35970_36037[(2)] = null);

(statearr_35970_36037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (5))){
var state_35961__$1 = state_35961;
var statearr_35971_36038 = state_35961__$1;
(statearr_35971_36038[(2)] = null);

(statearr_35971_36038[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (10))){
var inst_35953 = (state_35961[(2)]);
var state_35961__$1 = (function (){var statearr_35972 = state_35961;
(statearr_35972[(8)] = inst_35953);

return statearr_35972;
})();
var statearr_35973_36039 = state_35961__$1;
(statearr_35973_36039[(2)] = null);

(statearr_35973_36039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (8))){
var inst_35941 = cljs.core.deref.call(null,drag_and_drop_cycle);
var inst_35942 = new cljs.core.Keyword(null,"audio-fader","audio-fader",2132086428).cljs$core$IFn$_invoke$arity$1(inst_35941);
var inst_35943 = cljs.core.reset_BANG_.call(null,inst_35942,audio_fader);
var inst_35944 = cljs.core.deref.call(null,drag_and_drop_cycle);
var inst_35945 = new cljs.core.Keyword(null,"cycle-fader","cycle-fader",-836872222).cljs$core$IFn$_invoke$arity$1(inst_35944);
var inst_35946 = cljs.core.reset_BANG_.call(null,inst_35945,cycle_fader);
var inst_35947 = document.createEvent("HTMLEvents");
var inst_35948 = inst_35947.initEvent("dragleave",false,true);
var inst_35949 = new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(audio_fader);
var inst_35950 = inst_35949.dispatchEvent(inst_35947);
var state_35961__$1 = (function (){var statearr_35974 = state_35961;
(statearr_35974[(9)] = inst_35948);

(statearr_35974[(10)] = inst_35943);

(statearr_35974[(11)] = inst_35946);

return statearr_35974;
})();
var statearr_35975_36040 = state_35961__$1;
(statearr_35975_36040[(2)] = inst_35950);

(statearr_35975_36040[(1)] = (10));


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
});})(c__27981__auto__,drop_chan,map__35933,map__35933__$1,audio_fader,cycle_fader,fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle))
;
return ((function (switch__27916__auto__,c__27981__auto__,drop_chan,map__35933,map__35933__$1,audio_fader,cycle_fader,fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle){
return (function() {
var modal_synth$core$init_cycles_BANG__$_state_machine__27917__auto__ = null;
var modal_synth$core$init_cycles_BANG__$_state_machine__27917__auto____0 = (function (){
var statearr_35979 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35979[(0)] = modal_synth$core$init_cycles_BANG__$_state_machine__27917__auto__);

(statearr_35979[(1)] = (1));

return statearr_35979;
});
var modal_synth$core$init_cycles_BANG__$_state_machine__27917__auto____1 = (function (state_35961){
while(true){
var ret_value__27918__auto__ = (function (){try{while(true){
var result__27919__auto__ = switch__27916__auto__.call(null,state_35961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27919__auto__;
}
break;
}
}catch (e35980){if((e35980 instanceof Object)){
var ex__27920__auto__ = e35980;
var statearr_35981_36041 = state_35961;
(statearr_35981_36041[(5)] = ex__27920__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36042 = state_35961;
state_35961 = G__36042;
continue;
} else {
return ret_value__27918__auto__;
}
break;
}
});
modal_synth$core$init_cycles_BANG__$_state_machine__27917__auto__ = function(state_35961){
switch(arguments.length){
case 0:
return modal_synth$core$init_cycles_BANG__$_state_machine__27917__auto____0.call(this);
case 1:
return modal_synth$core$init_cycles_BANG__$_state_machine__27917__auto____1.call(this,state_35961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modal_synth$core$init_cycles_BANG__$_state_machine__27917__auto__.cljs$core$IFn$_invoke$arity$0 = modal_synth$core$init_cycles_BANG__$_state_machine__27917__auto____0;
modal_synth$core$init_cycles_BANG__$_state_machine__27917__auto__.cljs$core$IFn$_invoke$arity$1 = modal_synth$core$init_cycles_BANG__$_state_machine__27917__auto____1;
return modal_synth$core$init_cycles_BANG__$_state_machine__27917__auto__;
})()
;})(switch__27916__auto__,c__27981__auto__,drop_chan,map__35933,map__35933__$1,audio_fader,cycle_fader,fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle))
})();
var state__27983__auto__ = (function (){var statearr_35982 = f__27982__auto__.call(null);
(statearr_35982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27981__auto__);

return statearr_35982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27983__auto__);
});})(c__27981__auto__,drop_chan,map__35933,map__35933__$1,audio_fader,cycle_fader,fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle))
);

return c__27981__auto__;
});})(fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle))
,fader_pairs));

cljs.core.doall.call(null,cljs.core.map.call(null,((function (fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle){
return (function (p__35983){
var map__35984 = p__35983;
var map__35984__$1 = ((((!((map__35984 == null)))?((((map__35984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35984):map__35984);
var audio_fader = cljs.core.get.call(null,map__35984__$1,new cljs.core.Keyword(null,"audio-fader","audio-fader",2132086428));
var cycle_fader = cljs.core.get.call(null,map__35984__$1,new cljs.core.Keyword(null,"cycle-fader","cycle-fader",-836872222));
var dragenter_chan = modal_synth.utils.listen.call(null,new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(audio_fader),"dragenter");
var c__27981__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27981__auto__,dragenter_chan,map__35984,map__35984__$1,audio_fader,cycle_fader,fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle){
return (function (){
var f__27982__auto__ = (function (){var switch__27916__auto__ = ((function (c__27981__auto__,dragenter_chan,map__35984,map__35984__$1,audio_fader,cycle_fader,fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle){
return (function (state_36010){
var state_val_36011 = (state_36010[(1)]);
if((state_val_36011 === (7))){
var inst_35989 = (state_36010[(2)]);
var inst_35990 = new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(audio_fader);
var inst_35991 = modal_synth.utils.listen.call(null,inst_35990,"dragleave");
var inst_35992 = cljs.core.deref.call(null,drag_and_drop_cycle);
var state_36010__$1 = (function (){var statearr_36012 = state_36010;
(statearr_36012[(7)] = inst_35989);

(statearr_36012[(8)] = inst_35991);

return statearr_36012;
})();
if(cljs.core.truth_(inst_35992)){
var statearr_36013_36043 = state_36010__$1;
(statearr_36013_36043[(1)] = (8));

} else {
var statearr_36014_36044 = state_36010__$1;
(statearr_36014_36044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (1))){
var state_36010__$1 = state_36010;
var statearr_36015_36045 = state_36010__$1;
(statearr_36015_36045[(2)] = null);

(statearr_36015_36045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (4))){
var state_36010__$1 = state_36010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36010__$1,(7),dragenter_chan);
} else {
if((state_val_36011 === (6))){
var inst_36006 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
var statearr_36016_36046 = state_36010__$1;
(statearr_36016_36046[(2)] = inst_36006);

(statearr_36016_36046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (3))){
var inst_36008 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36010__$1,inst_36008);
} else {
if((state_val_36011 === (2))){
var state_36010__$1 = state_36010;
var statearr_36017_36047 = state_36010__$1;
(statearr_36017_36047[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (11))){
var inst_36000 = (state_36010[(2)]);
var inst_36001 = new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(audio_fader);
var inst_36002 = dommy.core.set_style_BANG_.call(null,inst_36001,new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(255,0,0,0.0)");
var state_36010__$1 = (function (){var statearr_36019 = state_36010;
(statearr_36019[(9)] = inst_36002);

(statearr_36019[(10)] = inst_36000);

return statearr_36019;
})();
var statearr_36020_36048 = state_36010__$1;
(statearr_36020_36048[(2)] = null);

(statearr_36020_36048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (9))){
var state_36010__$1 = state_36010;
var statearr_36021_36049 = state_36010__$1;
(statearr_36021_36049[(2)] = null);

(statearr_36021_36049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (5))){
var state_36010__$1 = state_36010;
var statearr_36022_36050 = state_36010__$1;
(statearr_36022_36050[(2)] = null);

(statearr_36022_36050[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (10))){
var inst_35991 = (state_36010[(8)]);
var inst_35998 = (state_36010[(2)]);
var state_36010__$1 = (function (){var statearr_36023 = state_36010;
(statearr_36023[(11)] = inst_35998);

return statearr_36023;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36010__$1,(11),inst_35991);
} else {
if((state_val_36011 === (8))){
var inst_35994 = new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(audio_fader);
var inst_35995 = dommy.core.set_style_BANG_.call(null,inst_35994,new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(255,0,0,0.2)");
var state_36010__$1 = state_36010;
var statearr_36024_36051 = state_36010__$1;
(statearr_36024_36051[(2)] = inst_35995);

(statearr_36024_36051[(1)] = (10));


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
});})(c__27981__auto__,dragenter_chan,map__35984,map__35984__$1,audio_fader,cycle_fader,fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle))
;
return ((function (switch__27916__auto__,c__27981__auto__,dragenter_chan,map__35984,map__35984__$1,audio_fader,cycle_fader,fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle){
return (function() {
var modal_synth$core$init_cycles_BANG__$_state_machine__27917__auto__ = null;
var modal_synth$core$init_cycles_BANG__$_state_machine__27917__auto____0 = (function (){
var statearr_36028 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36028[(0)] = modal_synth$core$init_cycles_BANG__$_state_machine__27917__auto__);

(statearr_36028[(1)] = (1));

return statearr_36028;
});
var modal_synth$core$init_cycles_BANG__$_state_machine__27917__auto____1 = (function (state_36010){
while(true){
var ret_value__27918__auto__ = (function (){try{while(true){
var result__27919__auto__ = switch__27916__auto__.call(null,state_36010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27919__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27919__auto__;
}
break;
}
}catch (e36029){if((e36029 instanceof Object)){
var ex__27920__auto__ = e36029;
var statearr_36030_36052 = state_36010;
(statearr_36030_36052[(5)] = ex__27920__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27918__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36053 = state_36010;
state_36010 = G__36053;
continue;
} else {
return ret_value__27918__auto__;
}
break;
}
});
modal_synth$core$init_cycles_BANG__$_state_machine__27917__auto__ = function(state_36010){
switch(arguments.length){
case 0:
return modal_synth$core$init_cycles_BANG__$_state_machine__27917__auto____0.call(this);
case 1:
return modal_synth$core$init_cycles_BANG__$_state_machine__27917__auto____1.call(this,state_36010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modal_synth$core$init_cycles_BANG__$_state_machine__27917__auto__.cljs$core$IFn$_invoke$arity$0 = modal_synth$core$init_cycles_BANG__$_state_machine__27917__auto____0;
modal_synth$core$init_cycles_BANG__$_state_machine__27917__auto__.cljs$core$IFn$_invoke$arity$1 = modal_synth$core$init_cycles_BANG__$_state_machine__27917__auto____1;
return modal_synth$core$init_cycles_BANG__$_state_machine__27917__auto__;
})()
;})(switch__27916__auto__,c__27981__auto__,dragenter_chan,map__35984,map__35984__$1,audio_fader,cycle_fader,fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle))
})();
var state__27983__auto__ = (function (){var statearr_36031 = f__27982__auto__.call(null);
(statearr_36031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27981__auto__);

return statearr_36031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27983__auto__);
});})(c__27981__auto__,dragenter_chan,map__35984,map__35984__$1,audio_fader,cycle_fader,fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle))
);

return c__27981__auto__;
});})(fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle))
,fader_pairs));

return modal_synth.scheduler.recursion_through_time_BANG_.call(null,modal_synth.core.scheduler,new cljs.core.Keyword(null,"tick!","tick!",68058958).cljs$core$IFn$_invoke$arity$1(modal_synth.core.cycle1),modal_synth.core.audio_context.currentTime);
});
modal_synth.core.main = (function modal_synth$core$main(){
modal_synth.core.init_channels_BANG_.call(null);

modal_synth.core.connect_audio_nodes_BANG_.call(null);

modal_synth.core.init_keyboard_control_BANG_.call(null);

modal_synth.core.init_scheduler_BANG_.call(null);

return modal_synth.core.init_cycles_BANG_.call(null);
});
window.addEventListener("DOMContentLoaded",modal_synth.core.main);

//# sourceMappingURL=core.js.map?rel=1516956647973