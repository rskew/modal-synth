// Compiled by ClojureScript 1.9.229 {}
goog.provide('modal_synth.keyboard_control');
goog.require('cljs.core');
goog.require('modal_synth.utils');
goog.require('modal_synth.fader');
goog.require('modal_synth.webaudio');
goog.require('dommy.core');
goog.require('cljs.core.async');
modal_synth.keyboard_control.fire_noise_ar = (function modal_synth$keyboard_control$fire_noise_ar(synth_state){
var noise_gain = new cljs.core.Keyword(null,"noise-gain","noise-gain",-1909022045).cljs$core$IFn$_invoke$arity$1(synth_state);
modal_synth.webaudio.apply_ar_envelope.call(null,modal_synth.webaudio.get_gain.call(null,noise_gain),modal_synth.webaudio.make_adsr.call(null,(0),0.01,(1),0.55,new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.Keyword(null,"exponential","exponential",-1578523660)),new cljs.core.Keyword(null,"audio-context","audio-context",1642559898).cljs$core$IFn$_invoke$arity$1(synth_state));

return cljs.core.print.call(null,"Fire AR!");
});
modal_synth.keyboard_control.fire_noise_adsr = (function modal_synth$keyboard_control$fire_noise_adsr(noteoff_chan,synth_state){
var noise_gain = new cljs.core.Keyword(null,"noise-gain","noise-gain",-1909022045).cljs$core$IFn$_invoke$arity$1(synth_state);
modal_synth.webaudio.apply_adsr.call(null,modal_synth.webaudio.get_gain.call(null,noise_gain),modal_synth.webaudio.make_adsr.call(null,(0),0.2,0.4,0.3,new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.Keyword(null,"linear","linear",872268697)),noteoff_chan,new cljs.core.Keyword(null,"audio-context","audio-context",1642559898).cljs$core$IFn$_invoke$arity$1(synth_state));

return cljs.core.print.call(null,"Fire ADSR!");
});
modal_synth.keyboard_control.fire_bow_adsr = (function modal_synth$keyboard_control$fire_bow_adsr(noteoff_chan,synth_state){
var bow_gain = new cljs.core.Keyword(null,"bow-gain","bow-gain",620436542).cljs$core$IFn$_invoke$arity$1(synth_state);
modal_synth.webaudio.apply_adsr.call(null,modal_synth.webaudio.get_gain.call(null,bow_gain),modal_synth.webaudio.make_adsr.call(null,(0),0.2,0.4,0.3,new cljs.core.Keyword(null,"slope","slope",-1227938123),new cljs.core.Keyword(null,"linear","linear",872268697)),noteoff_chan,new cljs.core.Keyword(null,"audio-context","audio-context",1642559898).cljs$core$IFn$_invoke$arity$1(synth_state));

return cljs.core.print.call(null,"Fire Bow ADSR!");
});
if(typeof modal_synth.keyboard_control.keyboard_state !== 'undefined'){
} else {
modal_synth.keyboard_control.keyboard_state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"66","66",-1344855254),cljs.core.atom.call(null,new cljs.core.Keyword(null,"up","up",-269712113)),new cljs.core.Keyword(null,"68","68",-94762081),cljs.core.atom.call(null,new cljs.core.Keyword(null,"up","up",-269712113)),new cljs.core.Keyword(null,"70","70",1643945641),cljs.core.atom.call(null,new cljs.core.Keyword(null,"up","up",-269712113)),new cljs.core.Keyword(null,"80","80",314908061),cljs.core.atom.call(null,new cljs.core.Keyword(null,"up","up",-269712113))], null);
}
modal_synth.keyboard_control.key_map = (function (){var up_chan_66 = cljs.core.async.chan.call(null);
var up_chan_68 = cljs.core.async.chan.call(null);
var up_chan_70 = cljs.core.async.chan.call(null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"66","66",-1344855254),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"down","down",1565245570),cljs.core.partial.call(null,modal_synth.keyboard_control.fire_bow_adsr,up_chan_66),new cljs.core.Keyword(null,"up","up",-269712113),((function (up_chan_66,up_chan_68,up_chan_70){
return (function (synth_state){
cljs.core.async.put_BANG_.call(null,up_chan_66,new cljs.core.Keyword(null,"up","up",-269712113));

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"66","66",-1344855254).cljs$core$IFn$_invoke$arity$1(modal_synth.keyboard_control.keyboard_state),new cljs.core.Keyword(null,"up","up",-269712113));
});})(up_chan_66,up_chan_68,up_chan_70))
], null),new cljs.core.Keyword(null,"68","68",-94762081),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"down","down",1565245570),cljs.core.partial.call(null,modal_synth.keyboard_control.fire_noise_adsr,up_chan_68),new cljs.core.Keyword(null,"up","up",-269712113),((function (up_chan_66,up_chan_68,up_chan_70){
return (function (synth_state){
cljs.core.async.put_BANG_.call(null,up_chan_68,new cljs.core.Keyword(null,"up","up",-269712113));

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"68","68",-94762081).cljs$core$IFn$_invoke$arity$1(modal_synth.keyboard_control.keyboard_state),new cljs.core.Keyword(null,"up","up",-269712113));
});})(up_chan_66,up_chan_68,up_chan_70))
], null),new cljs.core.Keyword(null,"70","70",1643945641),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"down","down",1565245570),modal_synth.keyboard_control.fire_noise_ar,new cljs.core.Keyword(null,"up","up",-269712113),((function (up_chan_66,up_chan_68,up_chan_70){
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
modal_synth.keyboard_control.init = (function modal_synth$keyboard_control$init(synth_state){

var keydown_chan = modal_synth.utils.listen.call(null,window,"keydown");
var keyup_chan = modal_synth.utils.listen.call(null,window,"keyup");
var c__27957__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27957__auto__,keydown_chan,keyup_chan){
return (function (){
var f__27958__auto__ = (function (){var switch__27892__auto__ = ((function (c__27957__auto__,keydown_chan,keyup_chan){
return (function (state_44035){
var state_val_44036 = (state_44035[(1)]);
if((state_val_44036 === (7))){
var inst_43964 = (state_44035[(7)]);
var inst_43962 = (state_44035[(8)]);
var inst_43962__$1 = (state_44035[(2)]);
var inst_43963 = cljs.core.nth.call(null,inst_43962__$1,(0),null);
var inst_43964__$1 = cljs.core.nth.call(null,inst_43962__$1,(1),null);
var inst_43965 = cljs.core._EQ_.call(null,inst_43964__$1,keydown_chan);
var state_44035__$1 = (function (){var statearr_44037 = state_44035;
(statearr_44037[(7)] = inst_43964__$1);

(statearr_44037[(8)] = inst_43962__$1);

(statearr_44037[(9)] = inst_43963);

return statearr_44037;
})();
if(inst_43965){
var statearr_44038_44084 = state_44035__$1;
(statearr_44038_44084[(1)] = (8));

} else {
var statearr_44039_44085 = state_44035__$1;
(statearr_44039_44085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (20))){
var inst_44001 = (state_44035[(10)]);
var inst_44007 = cljs.core.print.call(null,inst_44001);
var state_44035__$1 = state_44035;
var statearr_44040_44086 = state_44035__$1;
(statearr_44040_44086[(2)] = inst_44007);

(statearr_44040_44086[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (27))){
var state_44035__$1 = state_44035;
var statearr_44041_44087 = state_44035__$1;
(statearr_44041_44087[(2)] = null);

(statearr_44041_44087[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (1))){
var state_44035__$1 = state_44035;
var statearr_44042_44088 = state_44035__$1;
(statearr_44042_44088[(2)] = null);

(statearr_44042_44088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (24))){
var state_44035__$1 = state_44035;
var statearr_44043_44089 = state_44035__$1;
(statearr_44043_44089[(2)] = null);

(statearr_44043_44089[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (4))){
var inst_43958 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43959 = [keydown_chan,keyup_chan];
var inst_43960 = (new cljs.core.PersistentVector(null,2,(5),inst_43958,inst_43959,null));
var state_44035__$1 = state_44035;
return cljs.core.async.ioc_alts_BANG_.call(null,state_44035__$1,(7),inst_43960);
} else {
if((state_val_44036 === (15))){
var state_44035__$1 = state_44035;
var statearr_44044_44090 = state_44035__$1;
(statearr_44044_44090[(2)] = null);

(statearr_44044_44090[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (21))){
var inst_44002 = (state_44035[(11)]);
var inst_44009 = cljs.core.deref.call(null,inst_44002);
var inst_44010 = cljs.core._EQ_.call(null,inst_44009,new cljs.core.Keyword(null,"down","down",1565245570));
var state_44035__$1 = state_44035;
if(inst_44010){
var statearr_44045_44091 = state_44035__$1;
(statearr_44045_44091[(1)] = (23));

} else {
var statearr_44046_44092 = state_44035__$1;
(statearr_44046_44092[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (13))){
var inst_43991 = (state_44035[(2)]);
var state_44035__$1 = state_44035;
var statearr_44047_44093 = state_44035__$1;
(statearr_44047_44093[(2)] = inst_43991);

(statearr_44047_44093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (22))){
var inst_44017 = (state_44035[(2)]);
var state_44035__$1 = state_44035;
var statearr_44048_44094 = state_44035__$1;
(statearr_44048_44094[(2)] = inst_44017);

(statearr_44048_44094[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (6))){
var inst_44031 = (state_44035[(2)]);
var state_44035__$1 = state_44035;
var statearr_44049_44095 = state_44035__$1;
(statearr_44049_44095[(2)] = inst_44031);

(statearr_44049_44095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (28))){
var inst_44023 = (state_44035[(2)]);
var state_44035__$1 = state_44035;
var statearr_44050_44096 = state_44035__$1;
(statearr_44050_44096[(2)] = inst_44023);

(statearr_44050_44096[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (25))){
var inst_44015 = (state_44035[(2)]);
var state_44035__$1 = state_44035;
var statearr_44051_44097 = state_44035__$1;
(statearr_44051_44097[(2)] = inst_44015);

(statearr_44051_44097[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (17))){
var inst_43962 = (state_44035[(8)]);
var inst_44004 = (state_44035[(12)]);
var inst_44001 = (state_44035[(10)]);
var inst_43998 = cljs.core.nth.call(null,inst_43962,(0),null);
var inst_43999 = inst_43998.keyCode;
var inst_44000 = [cljs.core.str(inst_43999)].join('');
var inst_44001__$1 = cljs.core.keyword.call(null,inst_44000);
var inst_44002 = inst_44001__$1.call(null,modal_synth.keyboard_control.keyboard_state);
var inst_44003 = modal_synth.keyboard_control.key_map.call(null,inst_44001__$1);
var inst_44004__$1 = new cljs.core.Keyword(null,"up","up",-269712113).cljs$core$IFn$_invoke$arity$1(inst_44003);
var inst_44005 = (inst_44004__$1 == null);
var state_44035__$1 = (function (){var statearr_44052 = state_44035;
(statearr_44052[(11)] = inst_44002);

(statearr_44052[(12)] = inst_44004__$1);

(statearr_44052[(10)] = inst_44001__$1);

return statearr_44052;
})();
if(cljs.core.truth_(inst_44005)){
var statearr_44053_44098 = state_44035__$1;
(statearr_44053_44098[(1)] = (20));

} else {
var statearr_44054_44099 = state_44035__$1;
(statearr_44054_44099[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (3))){
var inst_44033 = (state_44035[(2)]);
var state_44035__$1 = state_44035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44035__$1,inst_44033);
} else {
if((state_val_44036 === (12))){
var inst_43974 = (state_44035[(13)]);
var inst_43982 = cljs.core.deref.call(null,inst_43974);
var inst_43983 = cljs.core._EQ_.call(null,inst_43982,new cljs.core.Keyword(null,"up","up",-269712113));
var state_44035__$1 = state_44035;
if(inst_43983){
var statearr_44055_44100 = state_44035__$1;
(statearr_44055_44100[(1)] = (14));

} else {
var statearr_44056_44101 = state_44035__$1;
(statearr_44056_44101[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (2))){
var state_44035__$1 = state_44035;
var statearr_44057_44102 = state_44035__$1;
(statearr_44057_44102[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (23))){
var inst_44004 = (state_44035[(12)]);
var inst_44012 = inst_44004.call(null,synth_state);
var state_44035__$1 = state_44035;
var statearr_44059_44103 = state_44035__$1;
(statearr_44059_44103[(2)] = inst_44012);

(statearr_44059_44103[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (19))){
var inst_44025 = (state_44035[(2)]);
var state_44035__$1 = state_44035;
var statearr_44060_44104 = state_44035__$1;
(statearr_44060_44104[(2)] = inst_44025);

(statearr_44060_44104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (11))){
var inst_43973 = (state_44035[(14)]);
var inst_43979 = cljs.core.print.call(null,inst_43973);
var inst_43980 = modal_synth.keyboard_control.fire_noise_ar.call(null,synth_state);
var state_44035__$1 = (function (){var statearr_44061 = state_44035;
(statearr_44061[(15)] = inst_43979);

return statearr_44061;
})();
var statearr_44062_44105 = state_44035__$1;
(statearr_44062_44105[(2)] = inst_43980);

(statearr_44062_44105[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (9))){
var inst_43964 = (state_44035[(7)]);
var inst_43993 = cljs.core._EQ_.call(null,inst_43964,keyup_chan);
var state_44035__$1 = state_44035;
if(inst_43993){
var statearr_44063_44106 = state_44035__$1;
(statearr_44063_44106[(1)] = (17));

} else {
var statearr_44064_44107 = state_44035__$1;
(statearr_44064_44107[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (5))){
var state_44035__$1 = state_44035;
var statearr_44065_44108 = state_44035__$1;
(statearr_44065_44108[(2)] = null);

(statearr_44065_44108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (14))){
var inst_43976 = (state_44035[(16)]);
var inst_43974 = (state_44035[(13)]);
var inst_43985 = cljs.core.reset_BANG_.call(null,inst_43974,new cljs.core.Keyword(null,"down","down",1565245570));
var inst_43986 = inst_43976.call(null,synth_state);
var state_44035__$1 = (function (){var statearr_44066 = state_44035;
(statearr_44066[(17)] = inst_43985);

return statearr_44066;
})();
var statearr_44067_44109 = state_44035__$1;
(statearr_44067_44109[(2)] = inst_43986);

(statearr_44067_44109[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (26))){
var inst_43963 = (state_44035[(9)]);
var state_44035__$1 = state_44035;
var statearr_44068_44110 = state_44035__$1;
(statearr_44068_44110[(2)] = inst_43963);

(statearr_44068_44110[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (16))){
var inst_43989 = (state_44035[(2)]);
var state_44035__$1 = state_44035;
var statearr_44069_44111 = state_44035__$1;
(statearr_44069_44111[(2)] = inst_43989);

(statearr_44069_44111[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (10))){
var inst_44027 = (state_44035[(2)]);
var state_44035__$1 = (function (){var statearr_44070 = state_44035;
(statearr_44070[(18)] = inst_44027);

return statearr_44070;
})();
var statearr_44071_44112 = state_44035__$1;
(statearr_44071_44112[(2)] = null);

(statearr_44071_44112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (18))){
var inst_43964 = (state_44035[(7)]);
var inst_44019 = cljs.core._EQ_.call(null,inst_43964,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_44035__$1 = state_44035;
if(inst_44019){
var statearr_44072_44113 = state_44035__$1;
(statearr_44072_44113[(1)] = (26));

} else {
var statearr_44073_44114 = state_44035__$1;
(statearr_44073_44114[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44036 === (8))){
var inst_43962 = (state_44035[(8)]);
var inst_43976 = (state_44035[(16)]);
var inst_43973 = (state_44035[(14)]);
var inst_43970 = cljs.core.nth.call(null,inst_43962,(0),null);
var inst_43971 = inst_43970.keyCode;
var inst_43972 = [cljs.core.str(inst_43971)].join('');
var inst_43973__$1 = cljs.core.keyword.call(null,inst_43972);
var inst_43974 = inst_43973__$1.call(null,modal_synth.keyboard_control.keyboard_state);
var inst_43975 = modal_synth.keyboard_control.key_map.call(null,inst_43973__$1);
var inst_43976__$1 = new cljs.core.Keyword(null,"down","down",1565245570).cljs$core$IFn$_invoke$arity$1(inst_43975);
var inst_43977 = (inst_43976__$1 == null);
var state_44035__$1 = (function (){var statearr_44074 = state_44035;
(statearr_44074[(16)] = inst_43976__$1);

(statearr_44074[(14)] = inst_43973__$1);

(statearr_44074[(13)] = inst_43974);

return statearr_44074;
})();
if(cljs.core.truth_(inst_43977)){
var statearr_44075_44115 = state_44035__$1;
(statearr_44075_44115[(1)] = (11));

} else {
var statearr_44076_44116 = state_44035__$1;
(statearr_44076_44116[(1)] = (12));

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
});})(c__27957__auto__,keydown_chan,keyup_chan))
;
return ((function (switch__27892__auto__,c__27957__auto__,keydown_chan,keyup_chan){
return (function() {
var modal_synth$keyboard_control$init_$_state_machine__27893__auto__ = null;
var modal_synth$keyboard_control$init_$_state_machine__27893__auto____0 = (function (){
var statearr_44080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44080[(0)] = modal_synth$keyboard_control$init_$_state_machine__27893__auto__);

(statearr_44080[(1)] = (1));

return statearr_44080;
});
var modal_synth$keyboard_control$init_$_state_machine__27893__auto____1 = (function (state_44035){
while(true){
var ret_value__27894__auto__ = (function (){try{while(true){
var result__27895__auto__ = switch__27892__auto__.call(null,state_44035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27895__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27895__auto__;
}
break;
}
}catch (e44081){if((e44081 instanceof Object)){
var ex__27896__auto__ = e44081;
var statearr_44082_44117 = state_44035;
(statearr_44082_44117[(5)] = ex__27896__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27894__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44118 = state_44035;
state_44035 = G__44118;
continue;
} else {
return ret_value__27894__auto__;
}
break;
}
});
modal_synth$keyboard_control$init_$_state_machine__27893__auto__ = function(state_44035){
switch(arguments.length){
case 0:
return modal_synth$keyboard_control$init_$_state_machine__27893__auto____0.call(this);
case 1:
return modal_synth$keyboard_control$init_$_state_machine__27893__auto____1.call(this,state_44035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modal_synth$keyboard_control$init_$_state_machine__27893__auto__.cljs$core$IFn$_invoke$arity$0 = modal_synth$keyboard_control$init_$_state_machine__27893__auto____0;
modal_synth$keyboard_control$init_$_state_machine__27893__auto__.cljs$core$IFn$_invoke$arity$1 = modal_synth$keyboard_control$init_$_state_machine__27893__auto____1;
return modal_synth$keyboard_control$init_$_state_machine__27893__auto__;
})()
;})(switch__27892__auto__,c__27957__auto__,keydown_chan,keyup_chan))
})();
var state__27959__auto__ = (function (){var statearr_44083 = f__27958__auto__.call(null);
(statearr_44083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27957__auto__);

return statearr_44083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27959__auto__);
});})(c__27957__auto__,keydown_chan,keyup_chan))
);

return c__27957__auto__;
});

//# sourceMappingURL=keyboard_control.js.map?rel=1491108914865