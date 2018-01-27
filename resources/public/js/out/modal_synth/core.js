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
modal_synth.core.channel1_state = modal_synth.channel.init_channel_state_BANG_.call(null,(1),0.46,(0),(1),modal_synth.core.channel1_audio);
}

modal_synth.core.channel1 = modal_synth.channel_dom.create_BANG_.call(null,new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_state),new cljs.core.Keyword(null,"delay-time","delay-time",1390409728).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_state),new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_state),new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_state),"channel1");

if(typeof modal_synth.core.channel1_cycle_state !== 'undefined'){
} else {
modal_synth.core.channel1_cycle_state = modal_synth.channel.init_channel_state_BANG_.call(null,0.8,(1),0.3,0.7,null);
}

modal_synth.core.channel1_cycle = modal_synth.channel_dom.create_cycle_BANG_.call(null,new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_cycle_state),new cljs.core.Keyword(null,"delay-time","delay-time",1390409728).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_cycle_state),new cljs.core.Keyword(null,"highpass-cutoff","highpass-cutoff",-102255000).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_cycle_state),new cljs.core.Keyword(null,"lowpass-cutoff","lowpass-cutoff",-922427310).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_cycle_state),"channel1");

modal_synth.core.divider1 = modal_synth.channel_dom.create_divider.call(null,"divider1");

modal_synth.channel_dom.add_to_BANG_.call(null,document.body,modal_synth.core.divider1);

var G__32374_32375 = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"spectrum-vis","spectrum-vis",-2084864708).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1));
G__32374_32375.fillStyle = "rgb(200, 0, 0)";

G__32374_32375.fillRect((0),(0),(11635),(1135));


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

navigator.mediaDevices.getUserMedia((function (){var obj32379 = {"audio":true,"video:":false};
return obj32379;
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
modal_synth.core.cycle1 = modal_synth.cycles.create.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null),(5),audio_fader1,cycle_fader1,drag_and_drop_cycle,modal_synth.core.scheduler,new cljs.core.Keyword(null,"freq","freq",-1855845278),cljs.core.atom.call(null,(10)));
}

dommy.core.append_BANG_.call(null,modal_synth.core.cycles_div,new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(modal_synth.core.cycle1));

var fader_pairs = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio-fader","audio-fader",2132086428),new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1),new cljs.core.Keyword(null,"cycle-fader","cycle-fader",-836872222),new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_cycle)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio-fader","audio-fader",2132086428),new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1),new cljs.core.Keyword(null,"cycle-fader","cycle-fader",-836872222),new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(modal_synth.core.channel1_cycle)], null)], null);
cljs.core.doall.call(null,cljs.core.map.call(null,((function (fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle){
return (function (p__32480){
var map__32481 = p__32480;
var map__32481__$1 = ((((!((map__32481 == null)))?((((map__32481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32481):map__32481);
var audio_fader = cljs.core.get.call(null,map__32481__$1,new cljs.core.Keyword(null,"audio-fader","audio-fader",2132086428));
var cycle_fader = cljs.core.get.call(null,map__32481__$1,new cljs.core.Keyword(null,"cycle-fader","cycle-fader",-836872222));
var drop_chan = modal_synth.utils.listen.call(null,new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(audio_fader),"drop");
var c__26831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26831__auto__,drop_chan,map__32481,map__32481__$1,audio_fader,cycle_fader,fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle){
return (function (){
var f__26832__auto__ = (function (){var switch__26810__auto__ = ((function (c__26831__auto__,drop_chan,map__32481,map__32481__$1,audio_fader,cycle_fader,fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle){
return (function (state_32509){
var state_val_32510 = (state_32509[(1)]);
if((state_val_32510 === (7))){
var inst_32486 = (state_32509[(2)]);
var inst_32487 = cljs.core.deref.call(null,drag_and_drop_cycle);
var state_32509__$1 = (function (){var statearr_32511 = state_32509;
(statearr_32511[(7)] = inst_32486);

return statearr_32511;
})();
if(cljs.core.truth_(inst_32487)){
var statearr_32512_32580 = state_32509__$1;
(statearr_32512_32580[(1)] = (8));

} else {
var statearr_32513_32581 = state_32509__$1;
(statearr_32513_32581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32510 === (1))){
var state_32509__$1 = state_32509;
var statearr_32514_32582 = state_32509__$1;
(statearr_32514_32582[(2)] = null);

(statearr_32514_32582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32510 === (4))){
var state_32509__$1 = state_32509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32509__$1,(7),drop_chan);
} else {
if((state_val_32510 === (6))){
var inst_32505 = (state_32509[(2)]);
var state_32509__$1 = state_32509;
var statearr_32515_32583 = state_32509__$1;
(statearr_32515_32583[(2)] = inst_32505);

(statearr_32515_32583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32510 === (3))){
var inst_32507 = (state_32509[(2)]);
var state_32509__$1 = state_32509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32509__$1,inst_32507);
} else {
if((state_val_32510 === (2))){
var state_32509__$1 = state_32509;
var statearr_32516_32584 = state_32509__$1;
(statearr_32516_32584[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32510 === (9))){
var state_32509__$1 = state_32509;
var statearr_32518_32585 = state_32509__$1;
(statearr_32518_32585[(2)] = null);

(statearr_32518_32585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32510 === (5))){
var state_32509__$1 = state_32509;
var statearr_32519_32586 = state_32509__$1;
(statearr_32519_32586[(2)] = null);

(statearr_32519_32586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32510 === (10))){
var inst_32501 = (state_32509[(2)]);
var state_32509__$1 = (function (){var statearr_32520 = state_32509;
(statearr_32520[(8)] = inst_32501);

return statearr_32520;
})();
var statearr_32521_32587 = state_32509__$1;
(statearr_32521_32587[(2)] = null);

(statearr_32521_32587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32510 === (8))){
var inst_32489 = cljs.core.deref.call(null,drag_and_drop_cycle);
var inst_32490 = new cljs.core.Keyword(null,"audio-fader","audio-fader",2132086428).cljs$core$IFn$_invoke$arity$1(inst_32489);
var inst_32491 = cljs.core.reset_BANG_.call(null,inst_32490,audio_fader);
var inst_32492 = cljs.core.deref.call(null,drag_and_drop_cycle);
var inst_32493 = new cljs.core.Keyword(null,"cycle-fader","cycle-fader",-836872222).cljs$core$IFn$_invoke$arity$1(inst_32492);
var inst_32494 = cljs.core.reset_BANG_.call(null,inst_32493,cycle_fader);
var inst_32495 = document.createEvent("HTMLEvents");
var inst_32496 = inst_32495.initEvent("dragleave",false,true);
var inst_32497 = new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(audio_fader);
var inst_32498 = inst_32497.dispatchEvent(inst_32495);
var state_32509__$1 = (function (){var statearr_32522 = state_32509;
(statearr_32522[(9)] = inst_32494);

(statearr_32522[(10)] = inst_32496);

(statearr_32522[(11)] = inst_32491);

return statearr_32522;
})();
var statearr_32523_32588 = state_32509__$1;
(statearr_32523_32588[(2)] = inst_32498);

(statearr_32523_32588[(1)] = (10));


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
});})(c__26831__auto__,drop_chan,map__32481,map__32481__$1,audio_fader,cycle_fader,fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle))
;
return ((function (switch__26810__auto__,c__26831__auto__,drop_chan,map__32481,map__32481__$1,audio_fader,cycle_fader,fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle){
return (function() {
var modal_synth$core$init_cycles_BANG__$_state_machine__26811__auto__ = null;
var modal_synth$core$init_cycles_BANG__$_state_machine__26811__auto____0 = (function (){
var statearr_32527 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32527[(0)] = modal_synth$core$init_cycles_BANG__$_state_machine__26811__auto__);

(statearr_32527[(1)] = (1));

return statearr_32527;
});
var modal_synth$core$init_cycles_BANG__$_state_machine__26811__auto____1 = (function (state_32509){
while(true){
var ret_value__26812__auto__ = (function (){try{while(true){
var result__26813__auto__ = switch__26810__auto__.call(null,state_32509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26813__auto__;
}
break;
}
}catch (e32528){if((e32528 instanceof Object)){
var ex__26814__auto__ = e32528;
var statearr_32529_32589 = state_32509;
(statearr_32529_32589[(5)] = ex__26814__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32590 = state_32509;
state_32509 = G__32590;
continue;
} else {
return ret_value__26812__auto__;
}
break;
}
});
modal_synth$core$init_cycles_BANG__$_state_machine__26811__auto__ = function(state_32509){
switch(arguments.length){
case 0:
return modal_synth$core$init_cycles_BANG__$_state_machine__26811__auto____0.call(this);
case 1:
return modal_synth$core$init_cycles_BANG__$_state_machine__26811__auto____1.call(this,state_32509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modal_synth$core$init_cycles_BANG__$_state_machine__26811__auto__.cljs$core$IFn$_invoke$arity$0 = modal_synth$core$init_cycles_BANG__$_state_machine__26811__auto____0;
modal_synth$core$init_cycles_BANG__$_state_machine__26811__auto__.cljs$core$IFn$_invoke$arity$1 = modal_synth$core$init_cycles_BANG__$_state_machine__26811__auto____1;
return modal_synth$core$init_cycles_BANG__$_state_machine__26811__auto__;
})()
;})(switch__26810__auto__,c__26831__auto__,drop_chan,map__32481,map__32481__$1,audio_fader,cycle_fader,fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle))
})();
var state__26833__auto__ = (function (){var statearr_32530 = f__26832__auto__.call(null);
(statearr_32530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26831__auto__);

return statearr_32530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26833__auto__);
});})(c__26831__auto__,drop_chan,map__32481,map__32481__$1,audio_fader,cycle_fader,fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle))
);

return c__26831__auto__;
});})(fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle))
,fader_pairs));

cljs.core.doall.call(null,cljs.core.map.call(null,((function (fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle){
return (function (p__32531){
var map__32532 = p__32531;
var map__32532__$1 = ((((!((map__32532 == null)))?((((map__32532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32532):map__32532);
var audio_fader = cljs.core.get.call(null,map__32532__$1,new cljs.core.Keyword(null,"audio-fader","audio-fader",2132086428));
var cycle_fader = cljs.core.get.call(null,map__32532__$1,new cljs.core.Keyword(null,"cycle-fader","cycle-fader",-836872222));
var dragenter_chan = modal_synth.utils.listen.call(null,new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(audio_fader),"dragenter");
var c__26831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26831__auto__,dragenter_chan,map__32532,map__32532__$1,audio_fader,cycle_fader,fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle){
return (function (){
var f__26832__auto__ = (function (){var switch__26810__auto__ = ((function (c__26831__auto__,dragenter_chan,map__32532,map__32532__$1,audio_fader,cycle_fader,fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle){
return (function (state_32558){
var state_val_32559 = (state_32558[(1)]);
if((state_val_32559 === (7))){
var inst_32537 = (state_32558[(2)]);
var inst_32538 = new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(audio_fader);
var inst_32539 = modal_synth.utils.listen.call(null,inst_32538,"dragleave");
var inst_32540 = cljs.core.deref.call(null,drag_and_drop_cycle);
var state_32558__$1 = (function (){var statearr_32560 = state_32558;
(statearr_32560[(7)] = inst_32537);

(statearr_32560[(8)] = inst_32539);

return statearr_32560;
})();
if(cljs.core.truth_(inst_32540)){
var statearr_32561_32591 = state_32558__$1;
(statearr_32561_32591[(1)] = (8));

} else {
var statearr_32562_32592 = state_32558__$1;
(statearr_32562_32592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (1))){
var state_32558__$1 = state_32558;
var statearr_32563_32593 = state_32558__$1;
(statearr_32563_32593[(2)] = null);

(statearr_32563_32593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (4))){
var state_32558__$1 = state_32558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32558__$1,(7),dragenter_chan);
} else {
if((state_val_32559 === (6))){
var inst_32554 = (state_32558[(2)]);
var state_32558__$1 = state_32558;
var statearr_32564_32594 = state_32558__$1;
(statearr_32564_32594[(2)] = inst_32554);

(statearr_32564_32594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (3))){
var inst_32556 = (state_32558[(2)]);
var state_32558__$1 = state_32558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32558__$1,inst_32556);
} else {
if((state_val_32559 === (2))){
var state_32558__$1 = state_32558;
var statearr_32565_32595 = state_32558__$1;
(statearr_32565_32595[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (11))){
var inst_32548 = (state_32558[(2)]);
var inst_32549 = new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(audio_fader);
var inst_32550 = dommy.core.set_style_BANG_.call(null,inst_32549,new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(255,0,0,0.0)");
var state_32558__$1 = (function (){var statearr_32567 = state_32558;
(statearr_32567[(9)] = inst_32550);

(statearr_32567[(10)] = inst_32548);

return statearr_32567;
})();
var statearr_32568_32596 = state_32558__$1;
(statearr_32568_32596[(2)] = null);

(statearr_32568_32596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (9))){
var state_32558__$1 = state_32558;
var statearr_32569_32597 = state_32558__$1;
(statearr_32569_32597[(2)] = null);

(statearr_32569_32597[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (5))){
var state_32558__$1 = state_32558;
var statearr_32570_32598 = state_32558__$1;
(statearr_32570_32598[(2)] = null);

(statearr_32570_32598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32559 === (10))){
var inst_32539 = (state_32558[(8)]);
var inst_32546 = (state_32558[(2)]);
var state_32558__$1 = (function (){var statearr_32571 = state_32558;
(statearr_32571[(11)] = inst_32546);

return statearr_32571;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32558__$1,(11),inst_32539);
} else {
if((state_val_32559 === (8))){
var inst_32542 = new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(audio_fader);
var inst_32543 = dommy.core.set_style_BANG_.call(null,inst_32542,new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(255,0,0,0.2)");
var state_32558__$1 = state_32558;
var statearr_32572_32599 = state_32558__$1;
(statearr_32572_32599[(2)] = inst_32543);

(statearr_32572_32599[(1)] = (10));


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
});})(c__26831__auto__,dragenter_chan,map__32532,map__32532__$1,audio_fader,cycle_fader,fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle))
;
return ((function (switch__26810__auto__,c__26831__auto__,dragenter_chan,map__32532,map__32532__$1,audio_fader,cycle_fader,fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle){
return (function() {
var modal_synth$core$init_cycles_BANG__$_state_machine__26811__auto__ = null;
var modal_synth$core$init_cycles_BANG__$_state_machine__26811__auto____0 = (function (){
var statearr_32576 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32576[(0)] = modal_synth$core$init_cycles_BANG__$_state_machine__26811__auto__);

(statearr_32576[(1)] = (1));

return statearr_32576;
});
var modal_synth$core$init_cycles_BANG__$_state_machine__26811__auto____1 = (function (state_32558){
while(true){
var ret_value__26812__auto__ = (function (){try{while(true){
var result__26813__auto__ = switch__26810__auto__.call(null,state_32558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26813__auto__;
}
break;
}
}catch (e32577){if((e32577 instanceof Object)){
var ex__26814__auto__ = e32577;
var statearr_32578_32600 = state_32558;
(statearr_32578_32600[(5)] = ex__26814__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32601 = state_32558;
state_32558 = G__32601;
continue;
} else {
return ret_value__26812__auto__;
}
break;
}
});
modal_synth$core$init_cycles_BANG__$_state_machine__26811__auto__ = function(state_32558){
switch(arguments.length){
case 0:
return modal_synth$core$init_cycles_BANG__$_state_machine__26811__auto____0.call(this);
case 1:
return modal_synth$core$init_cycles_BANG__$_state_machine__26811__auto____1.call(this,state_32558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modal_synth$core$init_cycles_BANG__$_state_machine__26811__auto__.cljs$core$IFn$_invoke$arity$0 = modal_synth$core$init_cycles_BANG__$_state_machine__26811__auto____0;
modal_synth$core$init_cycles_BANG__$_state_machine__26811__auto__.cljs$core$IFn$_invoke$arity$1 = modal_synth$core$init_cycles_BANG__$_state_machine__26811__auto____1;
return modal_synth$core$init_cycles_BANG__$_state_machine__26811__auto__;
})()
;})(switch__26810__auto__,c__26831__auto__,dragenter_chan,map__32532,map__32532__$1,audio_fader,cycle_fader,fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle))
})();
var state__26833__auto__ = (function (){var statearr_32579 = f__26832__auto__.call(null);
(statearr_32579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26831__auto__);

return statearr_32579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26833__auto__);
});})(c__26831__auto__,dragenter_chan,map__32532,map__32532__$1,audio_fader,cycle_fader,fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle))
);

return c__26831__auto__;
});})(fader_pairs,cycle_fader1,audio_fader1,drag_and_drop_cycle))
,fader_pairs));

return modal_synth.scheduler.recursion_through_time_BANG_.call(null,modal_synth.core.scheduler,new cljs.core.Keyword(null,"tick!","tick!",68058958).cljs$core$IFn$_invoke$arity$1(modal_synth.core.cycle1),modal_synth.core.audio_context.currentTime);
});
modal_synth.core.main = (function modal_synth$core$main(){
modal_synth.core.init_channels_BANG_.call(null);

modal_synth.core.connect_audio_nodes_BANG_.call(null);

modal_synth.core.init_keyboard_control_BANG_.call(null);

modal_synth.core.init_scheduler_BANG_.call(null);

modal_synth.core.init_cycles_BANG_.call(null);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(modal_synth.core.cycle1)),(0))),(0));

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(modal_synth.core.cycle1)),(1))),(1));
});
window.addEventListener("DOMContentLoaded",modal_synth.core.main);

//# sourceMappingURL=core.js.map?rel=1517065421241