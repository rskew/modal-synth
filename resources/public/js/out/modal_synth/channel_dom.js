// Compiled by ClojureScript 1.9.229 {}
goog.provide('modal_synth.channel_dom');
goog.require('cljs.core');
goog.require('modal_synth.fader');
goog.require('dommy.core');
modal_synth.channel_dom.add_to_BANG_ = (function modal_synth$channel_dom$add_to_BANG_(parent,element){
var id = dommy.core.attr.call(null,element,new cljs.core.Keyword(null,"id","id",-1388402092));
var old_element = document.querySelector(dommy.core.selector.call(null,[cljs.core.str("#"),cljs.core.str(id)].join('')));
if(cljs.core.truth_(old_element)){
return dommy.core.replace_BANG_.call(null,old_element,element);
} else {
return dommy.core.append_BANG_.call(null,parent,element);
}
});
modal_synth.channel_dom.init_BANG_ = (function modal_synth$channel_dom$init_BANG_(channel){
modal_synth.fader.init_BANG_.call(null,new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(channel));

modal_synth.fader.init_BANG_.call(null,new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(channel));

return modal_synth.fader.init_bandpass_BANG_.call(null,new cljs.core.Keyword(null,"bandpass","bandpass",-1035271912).cljs$core$IFn$_invoke$arity$1(channel));
});
modal_synth.channel_dom.init_cycle_BANG_ = (function modal_synth$channel_dom$init_cycle_BANG_(channel){
modal_synth.fader.init_cycle_BANG_.call(null,new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(channel));

modal_synth.fader.init_cycle_BANG_.call(null,new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(channel));

return modal_synth.fader.init_bandpass_BANG_.call(null,new cljs.core.Keyword(null,"bandpass","bandpass",-1035271912).cljs$core$IFn$_invoke$arity$1(channel));
});
modal_synth.channel_dom.create_spectrum_vis = (function modal_synth$channel_dom$create_spectrum_vis(){
var canvas = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var context = canvas.getContext("2d");
dommy.core.set_class_BANG_.call(null,canvas,"spectrum-vis");

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"canvas-element","canvas-element",1011047486),canvas,new cljs.core.Keyword(null,"context","context",-830191113),context], null);
});
modal_synth.channel_dom.make = (function modal_synth$channel_dom$make(gain_fader_state,delay_fader_state,highpass_cutoff_state,lowpass_cutoff_state,id){
var channel_element = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
var gain_fader = modal_synth.fader.create.call(null,gain_fader_state,new cljs.core.Keyword(null,"Gain","Gain",-983157825));
var delay_fader = modal_synth.fader.create.call(null,delay_fader_state,new cljs.core.Keyword(null,"Delay","Delay",1697640197));
var bandpass = modal_synth.fader.create_bandpass.call(null,highpass_cutoff_state,lowpass_cutoff_state);
var spectrum_vis = modal_synth.channel_dom.create_spectrum_vis.call(null);
var channel = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"element","element",1974019749),channel_element,new cljs.core.Keyword(null,"gain","gain",1350925045),gain_fader,new cljs.core.Keyword(null,"delay","delay",-574225219),delay_fader,new cljs.core.Keyword(null,"bandpass","bandpass",-1035271912),bandpass,new cljs.core.Keyword(null,"spectrum-vis","spectrum-vis",-2084864708),spectrum_vis], null);
dommy.core.append_BANG_.call(null,channel_element,new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(gain_fader));

dommy.core.append_BANG_.call(null,channel_element,new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(delay_fader));

dommy.core.append_BANG_.call(null,channel_element,new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(bandpass));

dommy.core.append_BANG_.call(null,new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(bandpass),new cljs.core.Keyword(null,"canvas-element","canvas-element",1011047486).cljs$core$IFn$_invoke$arity$1(spectrum_vis));

dommy.core.set_class_BANG_.call(null,channel_element,"channel");

dommy.core.set_attr_BANG_.call(null,channel_element,"onmousedown","event.preventDefault ? event.preventDefault() : event.returnValue = false",new cljs.core.Keyword(null,"id","id",-1388402092),id);

return channel;
});
modal_synth.channel_dom.create_BANG_ = (function modal_synth$channel_dom$create_BANG_(gain_state,delay_state,highpass_state,lowpass_state,id){
var channel = modal_synth.channel_dom.make.call(null,gain_state,delay_state,highpass_state,lowpass_state,id);
dommy.core.append_BANG_.call(null,document.body,new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(channel));

modal_synth.channel_dom.init_BANG_.call(null,channel);

return channel;
});
modal_synth.channel_dom.create_cycle_BANG_ = (function modal_synth$channel_dom$create_cycle_BANG_(gain_state,delay_state,highpass_state,lowpass_state,id){
var channel = modal_synth.channel_dom.make.call(null,gain_state,delay_state,highpass_state,lowpass_state,id);
dommy.core.set_class_BANG_.call(null,new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(channel),"cycle-channel");

dommy.core.set_style_BANG_.call(null,new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"gain","gain",1350925045).cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden");

dommy.core.set_style_BANG_.call(null,new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden");

dommy.core.set_style_BANG_.call(null,new cljs.core.Keyword(null,"box","box",1530920394).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bandpass","bandpass",-1035271912).cljs$core$IFn$_invoke$arity$1(channel)),new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden");

dommy.core.append_BANG_.call(null,document.body,new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(channel));

modal_synth.channel_dom.init_cycle_BANG_.call(null,channel);

return channel;
});
modal_synth.channel_dom.create_divider = (function modal_synth$channel_dom$create_divider(id){
var divider_element = dommy.core.create_element.call(null,new cljs.core.Keyword(null,"div","div",1057191632));
dommy.core.set_class_BANG_.call(null,divider_element,"divider");

dommy.core.set_attr_BANG_.call(null,divider_element,new cljs.core.Keyword(null,"id","id",-1388402092),id);

return divider_element;
});

//# sourceMappingURL=channel_dom.js.map?rel=1517065385324