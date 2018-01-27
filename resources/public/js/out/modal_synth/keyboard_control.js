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
var c__26973__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto__,keydown_chan,keyup_chan){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto__,keydown_chan,keyup_chan){
return (function (state_36997){
var state_val_36998 = (state_36997[(1)]);
if((state_val_36998 === (7))){
var inst_36919 = (state_36997[(7)]);
var inst_36917 = (state_36997[(8)]);
var inst_36917__$1 = (state_36997[(2)]);
var inst_36918 = cljs.core.nth.call(null,inst_36917__$1,(0),null);
var inst_36919__$1 = cljs.core.nth.call(null,inst_36917__$1,(1),null);
var inst_36920 = cljs.core._EQ_.call(null,inst_36919__$1,keydown_chan);
var state_36997__$1 = (function (){var statearr_36999 = state_36997;
(statearr_36999[(7)] = inst_36919__$1);

(statearr_36999[(8)] = inst_36917__$1);

(statearr_36999[(9)] = inst_36918);

return statearr_36999;
})();
if(inst_36920){
var statearr_37000_37050 = state_36997__$1;
(statearr_37000_37050[(1)] = (8));

} else {
var statearr_37001_37051 = state_36997__$1;
(statearr_37001_37051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (20))){
var inst_36966 = (state_36997[(10)]);
var inst_36917 = (state_36997[(8)]);
var inst_36963 = (state_36997[(11)]);
var inst_36960 = cljs.core.nth.call(null,inst_36917,(0),null);
var inst_36961 = inst_36960.keyCode;
var inst_36962 = [cljs.core.str(inst_36961)].join('');
var inst_36963__$1 = cljs.core.keyword.call(null,inst_36962);
var inst_36964 = inst_36963__$1.call(null,modal_synth.keyboard_control.keyboard_state);
var inst_36965 = modal_synth.keyboard_control.key_map.call(null,inst_36963__$1);
var inst_36966__$1 = new cljs.core.Keyword(null,"up","up",-269712113).cljs$core$IFn$_invoke$arity$1(inst_36965);
var inst_36967 = (inst_36966__$1 == null);
var state_36997__$1 = (function (){var statearr_37002 = state_36997;
(statearr_37002[(10)] = inst_36966__$1);

(statearr_37002[(12)] = inst_36964);

(statearr_37002[(11)] = inst_36963__$1);

return statearr_37002;
})();
if(cljs.core.truth_(inst_36967)){
var statearr_37003_37052 = state_36997__$1;
(statearr_37003_37052[(1)] = (23));

} else {
var statearr_37004_37053 = state_36997__$1;
(statearr_37004_37053[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (27))){
var state_36997__$1 = state_36997;
var statearr_37005_37054 = state_36997__$1;
(statearr_37005_37054[(2)] = null);

(statearr_37005_37054[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (1))){
var state_36997__$1 = state_36997;
var statearr_37006_37055 = state_36997__$1;
(statearr_37006_37055[(2)] = null);

(statearr_37006_37055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (24))){
var inst_36964 = (state_36997[(12)]);
var inst_36971 = cljs.core.deref.call(null,inst_36964);
var inst_36972 = cljs.core._EQ_.call(null,inst_36971,new cljs.core.Keyword(null,"down","down",1565245570));
var state_36997__$1 = state_36997;
if(inst_36972){
var statearr_37007_37056 = state_36997__$1;
(statearr_37007_37056[(1)] = (26));

} else {
var statearr_37008_37057 = state_36997__$1;
(statearr_37008_37057[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (4))){
var inst_36913 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36914 = [keydown_chan,keyup_chan];
var inst_36915 = (new cljs.core.PersistentVector(null,2,(5),inst_36913,inst_36914,null));
var state_36997__$1 = state_36997;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36997__$1,(7),inst_36915);
} else {
if((state_val_36998 === (15))){
var inst_36940 = modal_synth.keyboard_control.fire_noise_ar_BANG_.call(null,synth_state);
var state_36997__$1 = state_36997;
var statearr_37009_37058 = state_36997__$1;
(statearr_37009_37058[(2)] = inst_36940);

(statearr_37009_37058[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (21))){
var inst_36919 = (state_36997[(7)]);
var inst_36981 = cljs.core._EQ_.call(null,inst_36919,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_36997__$1 = state_36997;
if(inst_36981){
var statearr_37010_37059 = state_36997__$1;
(statearr_37010_37059[(1)] = (29));

} else {
var statearr_37011_37060 = state_36997__$1;
(statearr_37011_37060[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (31))){
var inst_36985 = (state_36997[(2)]);
var state_36997__$1 = state_36997;
var statearr_37012_37061 = state_36997__$1;
(statearr_37012_37061[(2)] = inst_36985);

(statearr_37012_37061[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (13))){
var inst_36953 = (state_36997[(2)]);
var state_36997__$1 = state_36997;
var statearr_37013_37062 = state_36997__$1;
(statearr_37013_37062[(2)] = inst_36953);

(statearr_37013_37062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (22))){
var inst_36987 = (state_36997[(2)]);
var state_36997__$1 = state_36997;
var statearr_37014_37063 = state_36997__$1;
(statearr_37014_37063[(2)] = inst_36987);

(statearr_37014_37063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (29))){
var inst_36918 = (state_36997[(9)]);
var state_36997__$1 = state_36997;
var statearr_37015_37064 = state_36997__$1;
(statearr_37015_37064[(2)] = inst_36918);

(statearr_37015_37064[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (6))){
var inst_36993 = (state_36997[(2)]);
var state_36997__$1 = state_36997;
var statearr_37016_37065 = state_36997__$1;
(statearr_37016_37065[(2)] = inst_36993);

(statearr_37016_37065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (28))){
var inst_36977 = (state_36997[(2)]);
var state_36997__$1 = state_36997;
var statearr_37017_37066 = state_36997__$1;
(statearr_37017_37066[(2)] = inst_36977);

(statearr_37017_37066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (25))){
var inst_36979 = (state_36997[(2)]);
var state_36997__$1 = state_36997;
var statearr_37018_37067 = state_36997__$1;
(statearr_37018_37067[(2)] = inst_36979);

(statearr_37018_37067[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (17))){
var inst_36929 = (state_36997[(13)]);
var inst_36931 = (state_36997[(14)]);
var inst_36947 = cljs.core.reset_BANG_.call(null,inst_36929,new cljs.core.Keyword(null,"down","down",1565245570));
var inst_36948 = inst_36931.call(null,synth_state);
var state_36997__$1 = (function (){var statearr_37019 = state_36997;
(statearr_37019[(15)] = inst_36947);

return statearr_37019;
})();
var statearr_37020_37068 = state_36997__$1;
(statearr_37020_37068[(2)] = inst_36948);

(statearr_37020_37068[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (3))){
var inst_36995 = (state_36997[(2)]);
var state_36997__$1 = state_36997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36997__$1,inst_36995);
} else {
if((state_val_36998 === (12))){
var inst_36929 = (state_36997[(13)]);
var inst_36944 = cljs.core.deref.call(null,inst_36929);
var inst_36945 = cljs.core._EQ_.call(null,inst_36944,new cljs.core.Keyword(null,"up","up",-269712113));
var state_36997__$1 = state_36997;
if(inst_36945){
var statearr_37021_37069 = state_36997__$1;
(statearr_37021_37069[(1)] = (17));

} else {
var statearr_37022_37070 = state_36997__$1;
(statearr_37022_37070[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (2))){
var state_36997__$1 = state_36997;
var statearr_37023_37071 = state_36997__$1;
(statearr_37023_37071[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (23))){
var inst_36963 = (state_36997[(11)]);
var inst_36969 = cljs.core.print.call(null,inst_36963);
var state_36997__$1 = state_36997;
var statearr_37025_37072 = state_36997__$1;
(statearr_37025_37072[(2)] = inst_36969);

(statearr_37025_37072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (19))){
var inst_36951 = (state_36997[(2)]);
var state_36997__$1 = state_36997;
var statearr_37026_37073 = state_36997__$1;
(statearr_37026_37073[(2)] = inst_36951);

(statearr_37026_37073[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (11))){
var inst_36928 = (state_36997[(16)]);
var inst_36934 = cljs.core.print.call(null,inst_36928);
var inst_36935 = [new cljs.core.Keyword(null,"27","27",156078148),new cljs.core.Keyword(null,"18","18",-252431834),new cljs.core.Keyword(null,"52","52",-1710276890),new cljs.core.Keyword(null,"56","56",952887817),new cljs.core.Keyword(null,"53","53",749578027),new cljs.core.Keyword(null,"57","57",-819443668),new cljs.core.Keyword(null,"91","91",-2145127346),new cljs.core.Keyword(null,"55","55",474895791),new cljs.core.Keyword(null,"50","50",-510472304),new cljs.core.Keyword(null,"17","17",411375923),new cljs.core.Keyword(null,"49","49",973939221),new cljs.core.Keyword(null,"48","48",1049432214),new cljs.core.Keyword(null,"51","51",796806460),new cljs.core.Keyword(null,"54","54",-1174129028),new cljs.core.Keyword(null,"82","82",-1765742788),new cljs.core.Keyword(null,"84","84",-899053668)];
var inst_36936 = cljs.core.PersistentHashSet.fromArray(inst_36935,true);
var inst_36937 = inst_36936.call(null,inst_36928);
var state_36997__$1 = (function (){var statearr_37027 = state_36997;
(statearr_37027[(17)] = inst_36934);

return statearr_37027;
})();
if(cljs.core.truth_(inst_36937)){
var statearr_37028_37074 = state_36997__$1;
(statearr_37028_37074[(1)] = (14));

} else {
var statearr_37029_37075 = state_36997__$1;
(statearr_37029_37075[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (9))){
var inst_36919 = (state_36997[(7)]);
var inst_36955 = cljs.core._EQ_.call(null,inst_36919,keyup_chan);
var state_36997__$1 = state_36997;
if(inst_36955){
var statearr_37030_37076 = state_36997__$1;
(statearr_37030_37076[(1)] = (20));

} else {
var statearr_37031_37077 = state_36997__$1;
(statearr_37031_37077[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (5))){
var state_36997__$1 = state_36997;
var statearr_37032_37078 = state_36997__$1;
(statearr_37032_37078[(2)] = null);

(statearr_37032_37078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (14))){
var state_36997__$1 = state_36997;
var statearr_37033_37079 = state_36997__$1;
(statearr_37033_37079[(2)] = null);

(statearr_37033_37079[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (26))){
var inst_36966 = (state_36997[(10)]);
var inst_36974 = inst_36966.call(null,synth_state);
var state_36997__$1 = state_36997;
var statearr_37034_37080 = state_36997__$1;
(statearr_37034_37080[(2)] = inst_36974);

(statearr_37034_37080[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (16))){
var inst_36942 = (state_36997[(2)]);
var state_36997__$1 = state_36997;
var statearr_37035_37081 = state_36997__$1;
(statearr_37035_37081[(2)] = inst_36942);

(statearr_37035_37081[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (30))){
var state_36997__$1 = state_36997;
var statearr_37036_37082 = state_36997__$1;
(statearr_37036_37082[(2)] = null);

(statearr_37036_37082[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (10))){
var inst_36989 = (state_36997[(2)]);
var state_36997__$1 = (function (){var statearr_37037 = state_36997;
(statearr_37037[(18)] = inst_36989);

return statearr_37037;
})();
var statearr_37038_37083 = state_36997__$1;
(statearr_37038_37083[(2)] = null);

(statearr_37038_37083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (18))){
var state_36997__$1 = state_36997;
var statearr_37039_37084 = state_36997__$1;
(statearr_37039_37084[(2)] = null);

(statearr_37039_37084[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36998 === (8))){
var inst_36917 = (state_36997[(8)]);
var inst_36928 = (state_36997[(16)]);
var inst_36931 = (state_36997[(14)]);
var inst_36925 = cljs.core.nth.call(null,inst_36917,(0),null);
var inst_36926 = inst_36925.keyCode;
var inst_36927 = [cljs.core.str(inst_36926)].join('');
var inst_36928__$1 = cljs.core.keyword.call(null,inst_36927);
var inst_36929 = inst_36928__$1.call(null,modal_synth.keyboard_control.keyboard_state);
var inst_36930 = modal_synth.keyboard_control.key_map.call(null,inst_36928__$1);
var inst_36931__$1 = new cljs.core.Keyword(null,"down","down",1565245570).cljs$core$IFn$_invoke$arity$1(inst_36930);
var inst_36932 = (inst_36931__$1 == null);
var state_36997__$1 = (function (){var statearr_37040 = state_36997;
(statearr_37040[(16)] = inst_36928__$1);

(statearr_37040[(13)] = inst_36929);

(statearr_37040[(14)] = inst_36931__$1);

return statearr_37040;
})();
if(cljs.core.truth_(inst_36932)){
var statearr_37041_37085 = state_36997__$1;
(statearr_37041_37085[(1)] = (11));

} else {
var statearr_37042_37086 = state_36997__$1;
(statearr_37042_37086[(1)] = (12));

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
});})(c__26973__auto__,keydown_chan,keyup_chan))
;
return ((function (switch__26861__auto__,c__26973__auto__,keydown_chan,keyup_chan){
return (function() {
var modal_synth$keyboard_control$init_BANG__$_state_machine__26862__auto__ = null;
var modal_synth$keyboard_control$init_BANG__$_state_machine__26862__auto____0 = (function (){
var statearr_37046 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37046[(0)] = modal_synth$keyboard_control$init_BANG__$_state_machine__26862__auto__);

(statearr_37046[(1)] = (1));

return statearr_37046;
});
var modal_synth$keyboard_control$init_BANG__$_state_machine__26862__auto____1 = (function (state_36997){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_36997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e37047){if((e37047 instanceof Object)){
var ex__26865__auto__ = e37047;
var statearr_37048_37087 = state_36997;
(statearr_37048_37087[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37088 = state_36997;
state_36997 = G__37088;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
modal_synth$keyboard_control$init_BANG__$_state_machine__26862__auto__ = function(state_36997){
switch(arguments.length){
case 0:
return modal_synth$keyboard_control$init_BANG__$_state_machine__26862__auto____0.call(this);
case 1:
return modal_synth$keyboard_control$init_BANG__$_state_machine__26862__auto____1.call(this,state_36997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modal_synth$keyboard_control$init_BANG__$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = modal_synth$keyboard_control$init_BANG__$_state_machine__26862__auto____0;
modal_synth$keyboard_control$init_BANG__$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = modal_synth$keyboard_control$init_BANG__$_state_machine__26862__auto____1;
return modal_synth$keyboard_control$init_BANG__$_state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto__,keydown_chan,keyup_chan))
})();
var state__26975__auto__ = (function (){var statearr_37049 = f__26974__auto__.call(null);
(statearr_37049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto__);

return statearr_37049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto__,keydown_chan,keyup_chan))
);

return c__26973__auto__;
});

//# sourceMappingURL=keyboard_control.js.map?rel=1516956393729