// Compiled by ClojureScript 1.9.229 {}
goog.provide('modal_synth.keyboard_control');
goog.require('cljs.core');
goog.require('modal_synth.utils');
goog.require('modal_synth.fader');
goog.require('modal_synth.webaudio');
goog.require('dommy.core');
goog.require('cljs.core.async');
modal_synth.keyboard_control.fire_noise_ar_BANG_ = (function modal_synth$keyboard_control$fire_noise_ar_BANG_(synth_state){
var noise_gain = new cljs.core.Keyword(null,"noise-gain","noise-gain",-1909022045).cljs$core$IFn$_invoke$arity$1(synth_state);
modal_synth.webaudio.apply_ar_envelope_BANG_.call(null,modal_synth.webaudio.get_gain.call(null,noise_gain),modal_synth.webaudio.make_adsr.call(null,(0),0.01,(1),0.55,new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.Keyword(null,"exponential","exponential",-1578523660)),new cljs.core.Keyword(null,"audio-context","audio-context",1642559898).cljs$core$IFn$_invoke$arity$1(synth_state));

return cljs.core.print.call(null,"Fire AR!");
});
modal_synth.keyboard_control.fire_noise_adsr_BANG_ = (function modal_synth$keyboard_control$fire_noise_adsr_BANG_(noteoff_chan,synth_state){
var noise_gain = new cljs.core.Keyword(null,"noise-gain","noise-gain",-1909022045).cljs$core$IFn$_invoke$arity$1(synth_state);
modal_synth.webaudio.apply_adsr_BANG_.call(null,modal_synth.webaudio.get_gain.call(null,noise_gain),modal_synth.webaudio.make_adsr.call(null,(0),0.2,0.4,0.3,new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.Keyword(null,"linear","linear",872268697)),noteoff_chan,new cljs.core.Keyword(null,"audio-context","audio-context",1642559898).cljs$core$IFn$_invoke$arity$1(synth_state));

return cljs.core.print.call(null,"Fire ADSR!");
});
modal_synth.keyboard_control.fire_bow_adsr_BANG_ = (function modal_synth$keyboard_control$fire_bow_adsr_BANG_(noteoff_chan,synth_state){
var bow_gain = new cljs.core.Keyword(null,"bow-gain","bow-gain",620436542).cljs$core$IFn$_invoke$arity$1(synth_state);
modal_synth.webaudio.apply_adsr_BANG_.call(null,modal_synth.webaudio.get_gain.call(null,bow_gain),modal_synth.webaudio.make_adsr.call(null,(0),0.2,0.4,0.3,new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.Keyword(null,"linear","linear",872268697)),noteoff_chan,new cljs.core.Keyword(null,"audio-context","audio-context",1642559898).cljs$core$IFn$_invoke$arity$1(synth_state));

return cljs.core.print.call(null,"Fire Bow ADSR!");
});
if(typeof modal_synth.keyboard_control.keyboard_state !== 'undefined'){
} else {
modal_synth.keyboard_control.keyboard_state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"66","66",-1344855254),cljs.core.atom.call(null,new cljs.core.Keyword(null,"up","up",-269712113)),new cljs.core.Keyword(null,"68","68",-94762081),cljs.core.atom.call(null,new cljs.core.Keyword(null,"up","up",-269712113)),new cljs.core.Keyword(null,"70","70",1643945641),cljs.core.atom.call(null,new cljs.core.Keyword(null,"up","up",-269712113)),new cljs.core.Keyword(null,"80","80",314908061),cljs.core.atom.call(null,new cljs.core.Keyword(null,"up","up",-269712113))], null);
}
modal_synth.keyboard_control.key_map = (function (){var up_chan_66 = cljs.core.async.chan.call(null);
var up_chan_68 = cljs.core.async.chan.call(null);
var up_chan_70 = cljs.core.async.chan.call(null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"66","66",-1344855254),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"down","down",1565245570),cljs.core.partial.call(null,modal_synth.keyboard_control.fire_bow_adsr_BANG_,up_chan_66),new cljs.core.Keyword(null,"up","up",-269712113),((function (up_chan_66,up_chan_68,up_chan_70){
return (function (synth_state){
cljs.core.async.put_BANG_.call(null,up_chan_66,new cljs.core.Keyword(null,"up","up",-269712113));

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"66","66",-1344855254).cljs$core$IFn$_invoke$arity$1(modal_synth.keyboard_control.keyboard_state),new cljs.core.Keyword(null,"up","up",-269712113));
});})(up_chan_66,up_chan_68,up_chan_70))
], null),new cljs.core.Keyword(null,"68","68",-94762081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"down","down",1565245570),cljs.core.partial.call(null,modal_synth.keyboard_control.fire_noise_adsr_BANG_,up_chan_68),new cljs.core.Keyword(null,"up","up",-269712113),((function (up_chan_66,up_chan_68,up_chan_70){
return (function (synth_state){
cljs.core.async.put_BANG_.call(null,up_chan_68,new cljs.core.Keyword(null,"up","up",-269712113));

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"68","68",-94762081).cljs$core$IFn$_invoke$arity$1(modal_synth.keyboard_control.keyboard_state),new cljs.core.Keyword(null,"up","up",-269712113));
});})(up_chan_66,up_chan_68,up_chan_70))
], null),new cljs.core.Keyword(null,"70","70",1643945641),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"down","down",1565245570),modal_synth.keyboard_control.fire_noise_ar_BANG_,new cljs.core.Keyword(null,"up","up",-269712113),((function (up_chan_66,up_chan_68,up_chan_70){
return (function (synth_state){
cljs.core.async.put_BANG_.call(null,up_chan_70,new cljs.core.Keyword(null,"up","up",-269712113));

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"70","70",1643945641).cljs$core$IFn$_invoke$arity$1(modal_synth.keyboard_control.keyboard_state),new cljs.core.Keyword(null,"up","up",-269712113));
});})(up_chan_66,up_chan_68,up_chan_70))
], null),new cljs.core.Keyword(null,"80","80",314908061),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"down","down",1565245570),((function (up_chan_66,up_chan_68,up_chan_70){
return (function (synth_state){
cljs.core.print.call(null,synth_state);

return cljs.core.print.call(null,new cljs.core.Keyword(null,"audio-context","audio-context",1642559898).cljs$core$IFn$_invoke$arity$1(synth_state).sampleRate);
});})(up_chan_66,up_chan_68,up_chan_70))
,new cljs.core.Keyword(null,"up","up",-269712113),((function (up_chan_66,up_chan_68,up_chan_70){
return (function (synth_state){
cljs.core.async.put_BANG_.call(null,up_chan_70,new cljs.core.Keyword(null,"up","up",-269712113));

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"80","80",314908061).cljs$core$IFn$_invoke$arity$1(modal_synth.keyboard_control.keyboard_state),new cljs.core.Keyword(null,"up","up",-269712113));
});})(up_chan_66,up_chan_68,up_chan_70))
], null)], null);
})();
modal_synth.keyboard_control.init_BANG_ = (function modal_synth$keyboard_control$init_BANG_(synth_state){

var keydown_chan = modal_synth.utils.listen.call(null,window,"keydown");
var keyup_chan = modal_synth.utils.listen.call(null,window,"keyup");
var c__26831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26831__auto__,keydown_chan,keyup_chan){
return (function (){
var f__26832__auto__ = (function (){var switch__26810__auto__ = ((function (c__26831__auto__,keydown_chan,keyup_chan){
return (function (state_27754){
var state_val_27755 = (state_27754[(1)]);
if((state_val_27755 === (7))){
var inst_27674 = (state_27754[(7)]);
var inst_27676 = (state_27754[(8)]);
var inst_27674__$1 = (state_27754[(2)]);
var inst_27675 = cljs.core.nth.call(null,inst_27674__$1,(0),null);
var inst_27676__$1 = cljs.core.nth.call(null,inst_27674__$1,(1),null);
var inst_27677 = cljs.core._EQ_.call(null,inst_27676__$1,keydown_chan);
var state_27754__$1 = (function (){var statearr_27756 = state_27754;
(statearr_27756[(7)] = inst_27674__$1);

(statearr_27756[(8)] = inst_27676__$1);

(statearr_27756[(9)] = inst_27675);

return statearr_27756;
})();
if(inst_27677){
var statearr_27757_27807 = state_27754__$1;
(statearr_27757_27807[(1)] = (8));

} else {
var statearr_27758_27808 = state_27754__$1;
(statearr_27758_27808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (20))){
var inst_27723 = (state_27754[(10)]);
var inst_27720 = (state_27754[(11)]);
var inst_27674 = (state_27754[(7)]);
var inst_27717 = cljs.core.nth.call(null,inst_27674,(0),null);
var inst_27718 = inst_27717.keyCode;
var inst_27719 = [cljs.core.str(inst_27718)].join('');
var inst_27720__$1 = cljs.core.keyword.call(null,inst_27719);
var inst_27721 = inst_27720__$1.call(null,modal_synth.keyboard_control.keyboard_state);
var inst_27722 = modal_synth.keyboard_control.key_map.call(null,inst_27720__$1);
var inst_27723__$1 = new cljs.core.Keyword(null,"up","up",-269712113).cljs$core$IFn$_invoke$arity$1(inst_27722);
var inst_27724 = (inst_27723__$1 == null);
var state_27754__$1 = (function (){var statearr_27759 = state_27754;
(statearr_27759[(10)] = inst_27723__$1);

(statearr_27759[(11)] = inst_27720__$1);

(statearr_27759[(12)] = inst_27721);

return statearr_27759;
})();
if(cljs.core.truth_(inst_27724)){
var statearr_27760_27809 = state_27754__$1;
(statearr_27760_27809[(1)] = (23));

} else {
var statearr_27761_27810 = state_27754__$1;
(statearr_27761_27810[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (27))){
var state_27754__$1 = state_27754;
var statearr_27762_27811 = state_27754__$1;
(statearr_27762_27811[(2)] = null);

(statearr_27762_27811[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (1))){
var state_27754__$1 = state_27754;
var statearr_27763_27812 = state_27754__$1;
(statearr_27763_27812[(2)] = null);

(statearr_27763_27812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (24))){
var inst_27721 = (state_27754[(12)]);
var inst_27728 = cljs.core.deref.call(null,inst_27721);
var inst_27729 = cljs.core._EQ_.call(null,inst_27728,new cljs.core.Keyword(null,"down","down",1565245570));
var state_27754__$1 = state_27754;
if(inst_27729){
var statearr_27764_27813 = state_27754__$1;
(statearr_27764_27813[(1)] = (26));

} else {
var statearr_27765_27814 = state_27754__$1;
(statearr_27765_27814[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (4))){
var inst_27670 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27671 = [keydown_chan,keyup_chan];
var inst_27672 = (new cljs.core.PersistentVector(null,2,(5),inst_27670,inst_27671,null));
var state_27754__$1 = state_27754;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27754__$1,(7),inst_27672);
} else {
if((state_val_27755 === (15))){
var inst_27697 = modal_synth.keyboard_control.fire_noise_ar_BANG_.call(null,synth_state);
var state_27754__$1 = state_27754;
var statearr_27766_27815 = state_27754__$1;
(statearr_27766_27815[(2)] = inst_27697);

(statearr_27766_27815[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (21))){
var inst_27676 = (state_27754[(8)]);
var inst_27738 = cljs.core._EQ_.call(null,inst_27676,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_27754__$1 = state_27754;
if(inst_27738){
var statearr_27767_27816 = state_27754__$1;
(statearr_27767_27816[(1)] = (29));

} else {
var statearr_27768_27817 = state_27754__$1;
(statearr_27768_27817[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (31))){
var inst_27742 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
var statearr_27769_27818 = state_27754__$1;
(statearr_27769_27818[(2)] = inst_27742);

(statearr_27769_27818[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (13))){
var inst_27710 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
var statearr_27770_27819 = state_27754__$1;
(statearr_27770_27819[(2)] = inst_27710);

(statearr_27770_27819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (22))){
var inst_27744 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
var statearr_27771_27820 = state_27754__$1;
(statearr_27771_27820[(2)] = inst_27744);

(statearr_27771_27820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (29))){
var inst_27675 = (state_27754[(9)]);
var state_27754__$1 = state_27754;
var statearr_27772_27821 = state_27754__$1;
(statearr_27772_27821[(2)] = inst_27675);

(statearr_27772_27821[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (6))){
var inst_27750 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
var statearr_27773_27822 = state_27754__$1;
(statearr_27773_27822[(2)] = inst_27750);

(statearr_27773_27822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (28))){
var inst_27734 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
var statearr_27774_27823 = state_27754__$1;
(statearr_27774_27823[(2)] = inst_27734);

(statearr_27774_27823[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (25))){
var inst_27736 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
var statearr_27775_27824 = state_27754__$1;
(statearr_27775_27824[(2)] = inst_27736);

(statearr_27775_27824[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (17))){
var inst_27688 = (state_27754[(13)]);
var inst_27686 = (state_27754[(14)]);
var inst_27704 = cljs.core.reset_BANG_.call(null,inst_27686,new cljs.core.Keyword(null,"down","down",1565245570));
var inst_27705 = inst_27688.call(null,synth_state);
var state_27754__$1 = (function (){var statearr_27776 = state_27754;
(statearr_27776[(15)] = inst_27704);

return statearr_27776;
})();
var statearr_27777_27825 = state_27754__$1;
(statearr_27777_27825[(2)] = inst_27705);

(statearr_27777_27825[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (3))){
var inst_27752 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27754__$1,inst_27752);
} else {
if((state_val_27755 === (12))){
var inst_27686 = (state_27754[(14)]);
var inst_27701 = cljs.core.deref.call(null,inst_27686);
var inst_27702 = cljs.core._EQ_.call(null,inst_27701,new cljs.core.Keyword(null,"up","up",-269712113));
var state_27754__$1 = state_27754;
if(inst_27702){
var statearr_27778_27826 = state_27754__$1;
(statearr_27778_27826[(1)] = (17));

} else {
var statearr_27779_27827 = state_27754__$1;
(statearr_27779_27827[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (2))){
var state_27754__$1 = state_27754;
var statearr_27780_27828 = state_27754__$1;
(statearr_27780_27828[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (23))){
var inst_27720 = (state_27754[(11)]);
var inst_27726 = cljs.core.print.call(null,inst_27720);
var state_27754__$1 = state_27754;
var statearr_27782_27829 = state_27754__$1;
(statearr_27782_27829[(2)] = inst_27726);

(statearr_27782_27829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (19))){
var inst_27708 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
var statearr_27783_27830 = state_27754__$1;
(statearr_27783_27830[(2)] = inst_27708);

(statearr_27783_27830[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (11))){
var inst_27685 = (state_27754[(16)]);
var inst_27691 = cljs.core.print.call(null,inst_27685);
var inst_27692 = [new cljs.core.Keyword(null,"27","27",156078148),new cljs.core.Keyword(null,"18","18",-252431834),new cljs.core.Keyword(null,"52","52",-1710276890),new cljs.core.Keyword(null,"56","56",952887817),new cljs.core.Keyword(null,"53","53",749578027),new cljs.core.Keyword(null,"57","57",-819443668),new cljs.core.Keyword(null,"91","91",-2145127346),new cljs.core.Keyword(null,"55","55",474895791),new cljs.core.Keyword(null,"50","50",-510472304),new cljs.core.Keyword(null,"17","17",411375923),new cljs.core.Keyword(null,"49","49",973939221),new cljs.core.Keyword(null,"48","48",1049432214),new cljs.core.Keyword(null,"51","51",796806460),new cljs.core.Keyword(null,"54","54",-1174129028),new cljs.core.Keyword(null,"82","82",-1765742788),new cljs.core.Keyword(null,"84","84",-899053668)];
var inst_27693 = cljs.core.PersistentHashSet.fromArray(inst_27692,true);
var inst_27694 = inst_27693.call(null,inst_27685);
var state_27754__$1 = (function (){var statearr_27784 = state_27754;
(statearr_27784[(17)] = inst_27691);

return statearr_27784;
})();
if(cljs.core.truth_(inst_27694)){
var statearr_27785_27831 = state_27754__$1;
(statearr_27785_27831[(1)] = (14));

} else {
var statearr_27786_27832 = state_27754__$1;
(statearr_27786_27832[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (9))){
var inst_27676 = (state_27754[(8)]);
var inst_27712 = cljs.core._EQ_.call(null,inst_27676,keyup_chan);
var state_27754__$1 = state_27754;
if(inst_27712){
var statearr_27787_27833 = state_27754__$1;
(statearr_27787_27833[(1)] = (20));

} else {
var statearr_27788_27834 = state_27754__$1;
(statearr_27788_27834[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (5))){
var state_27754__$1 = state_27754;
var statearr_27789_27835 = state_27754__$1;
(statearr_27789_27835[(2)] = null);

(statearr_27789_27835[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (14))){
var state_27754__$1 = state_27754;
var statearr_27790_27836 = state_27754__$1;
(statearr_27790_27836[(2)] = null);

(statearr_27790_27836[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (26))){
var inst_27723 = (state_27754[(10)]);
var inst_27731 = inst_27723.call(null,synth_state);
var state_27754__$1 = state_27754;
var statearr_27791_27837 = state_27754__$1;
(statearr_27791_27837[(2)] = inst_27731);

(statearr_27791_27837[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (16))){
var inst_27699 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
var statearr_27792_27838 = state_27754__$1;
(statearr_27792_27838[(2)] = inst_27699);

(statearr_27792_27838[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (30))){
var state_27754__$1 = state_27754;
var statearr_27793_27839 = state_27754__$1;
(statearr_27793_27839[(2)] = null);

(statearr_27793_27839[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (10))){
var inst_27746 = (state_27754[(2)]);
var state_27754__$1 = (function (){var statearr_27794 = state_27754;
(statearr_27794[(18)] = inst_27746);

return statearr_27794;
})();
var statearr_27795_27840 = state_27754__$1;
(statearr_27795_27840[(2)] = null);

(statearr_27795_27840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (18))){
var state_27754__$1 = state_27754;
var statearr_27796_27841 = state_27754__$1;
(statearr_27796_27841[(2)] = null);

(statearr_27796_27841[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (8))){
var inst_27688 = (state_27754[(13)]);
var inst_27674 = (state_27754[(7)]);
var inst_27685 = (state_27754[(16)]);
var inst_27682 = cljs.core.nth.call(null,inst_27674,(0),null);
var inst_27683 = inst_27682.keyCode;
var inst_27684 = [cljs.core.str(inst_27683)].join('');
var inst_27685__$1 = cljs.core.keyword.call(null,inst_27684);
var inst_27686 = inst_27685__$1.call(null,modal_synth.keyboard_control.keyboard_state);
var inst_27687 = modal_synth.keyboard_control.key_map.call(null,inst_27685__$1);
var inst_27688__$1 = new cljs.core.Keyword(null,"down","down",1565245570).cljs$core$IFn$_invoke$arity$1(inst_27687);
var inst_27689 = (inst_27688__$1 == null);
var state_27754__$1 = (function (){var statearr_27797 = state_27754;
(statearr_27797[(13)] = inst_27688__$1);

(statearr_27797[(14)] = inst_27686);

(statearr_27797[(16)] = inst_27685__$1);

return statearr_27797;
})();
if(cljs.core.truth_(inst_27689)){
var statearr_27798_27842 = state_27754__$1;
(statearr_27798_27842[(1)] = (11));

} else {
var statearr_27799_27843 = state_27754__$1;
(statearr_27799_27843[(1)] = (12));

}

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
}
}
}
}
}
}
}
}
}
});})(c__26831__auto__,keydown_chan,keyup_chan))
;
return ((function (switch__26810__auto__,c__26831__auto__,keydown_chan,keyup_chan){
return (function() {
var modal_synth$keyboard_control$init_BANG__$_state_machine__26811__auto__ = null;
var modal_synth$keyboard_control$init_BANG__$_state_machine__26811__auto____0 = (function (){
var statearr_27803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27803[(0)] = modal_synth$keyboard_control$init_BANG__$_state_machine__26811__auto__);

(statearr_27803[(1)] = (1));

return statearr_27803;
});
var modal_synth$keyboard_control$init_BANG__$_state_machine__26811__auto____1 = (function (state_27754){
while(true){
var ret_value__26812__auto__ = (function (){try{while(true){
var result__26813__auto__ = switch__26810__auto__.call(null,state_27754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26813__auto__;
}
break;
}
}catch (e27804){if((e27804 instanceof Object)){
var ex__26814__auto__ = e27804;
var statearr_27805_27844 = state_27754;
(statearr_27805_27844[(5)] = ex__26814__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27845 = state_27754;
state_27754 = G__27845;
continue;
} else {
return ret_value__26812__auto__;
}
break;
}
});
modal_synth$keyboard_control$init_BANG__$_state_machine__26811__auto__ = function(state_27754){
switch(arguments.length){
case 0:
return modal_synth$keyboard_control$init_BANG__$_state_machine__26811__auto____0.call(this);
case 1:
return modal_synth$keyboard_control$init_BANG__$_state_machine__26811__auto____1.call(this,state_27754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modal_synth$keyboard_control$init_BANG__$_state_machine__26811__auto__.cljs$core$IFn$_invoke$arity$0 = modal_synth$keyboard_control$init_BANG__$_state_machine__26811__auto____0;
modal_synth$keyboard_control$init_BANG__$_state_machine__26811__auto__.cljs$core$IFn$_invoke$arity$1 = modal_synth$keyboard_control$init_BANG__$_state_machine__26811__auto____1;
return modal_synth$keyboard_control$init_BANG__$_state_machine__26811__auto__;
})()
;})(switch__26810__auto__,c__26831__auto__,keydown_chan,keyup_chan))
})();
var state__26833__auto__ = (function (){var statearr_27806 = f__26832__auto__.call(null);
(statearr_27806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26831__auto__);

return statearr_27806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26833__auto__);
});})(c__26831__auto__,keydown_chan,keyup_chan))
);

return c__26831__auto__;
});

//# sourceMappingURL=keyboard_control.js.map?rel=1517065385227