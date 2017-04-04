// Compiled by ClojureScript 1.9.229 {}
goog.provide('modal_synth.channel');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('modal_synth.webaudio');
goog.require('modal_synth.keyboard_control');
goog.require('dommy.core');
goog.require('modal_synth.utils');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('modal_synth.fader');
goog.require('modal_synth.layout');
modal_synth.channel.add_to = (function modal_synth$channel$add_to(parent,element){
var id = dommy.core.attr.call(null,element,new cljs.core.Keyword(null,"id","id",-1388402092));
var old_element = document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(id)].join('')));
if(cljs.core.truth_(old_element)){
return dommy.core.replace_BANG_.call(null,old_element,element);
} else {
return dommy.core.append_BANG_.call(null,parent,element);
}
});
modal_synth.channel.init = (function modal_synth$channel$init(channel){
modal_synth.fader.init.call(null,new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(channel));

modal_synth.fader.init.call(null,new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(channel));

return modal_synth.fader.init_bandpass.call(null,new cljs.core.Keyword(null,"bandpass","bandpass",-1035271912).cljs$core$IFn$_invoke$arity$1(channel));
});
modal_synth.channel.create = (function modal_synth$channel$create(gain_fader_state,delay_fader_state,highpass_cutoff_state,lowpass_cutoff_state,id){
var channel_element = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var gain_fader = modal_synth.fader.create.call(null,gain_fader_state,new cljs.core.Keyword(null,"Gain","Gain",-983157825));
var delay_fader = modal_synth.fader.create.call(null,delay_fader_state,new cljs.core.Keyword(null,"Delay","Delay",1697640197));
var bandpass = modal_synth.fader.create_bandpass.call(null,highpass_cutoff_state,lowpass_cutoff_state);
var channel = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"channel-element","channel-element",879566544),channel_element,new cljs.core.Keyword(null,"gain","gain",1350925045),gain_fader,new cljs.core.Keyword(null,"delay","delay",-574225219),delay_fader,new cljs.core.Keyword(null,"bandpass","bandpass",-1035271912),bandpass], null);
dommy.core.append_BANG_.call(null,channel_element,new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(gain_fader));

dommy.core.append_BANG_.call(null,channel_element,new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(delay_fader));

dommy.core.append_BANG_.call(null,channel_element,new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(bandpass));

dommy.core.set_class_BANG_.call(null,channel_element,"channel");

dommy.core.set_attr_BANG_.call(null,channel_element,"onmousedown","event.preventDefault ? event.preventDefault() : event.returnValue = false",new cljs.core.Keyword(null,"id","id",-1388402092),id);

modal_synth.channel.add_to.call(null,document.body,channel_element);

modal_synth.channel.init.call(null,channel);

return channel;
});
modal_synth.channel.create_divider = (function modal_synth$channel$create_divider(id){
var divider_element = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
dommy.core.set_class_BANG_.call(null,divider_element,"divider");

dommy.core.set_attr_BANG_.call(null,divider_element,new cljs.core.Keyword(null,"id","id",-1388402092),id);

return divider_element;
});

//# sourceMappingURL=channel.js.map?rel=1490266988102