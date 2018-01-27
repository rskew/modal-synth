// Compiled by ClojureScript 1.9.229 {}
goog.provide('modal_synth.scheduler');
goog.require('cljs.core');
goog.require('cljs.core.async');
modal_synth.scheduler.earlier_QMARK_ = (function modal_synth$scheduler$earlier_QMARK_(new_event){
return (function (event){
if((new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(new_event) > new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(event))){
return true;
} else {
return false;
}
});
});
modal_synth.scheduler.insert = (function modal_synth$scheduler$insert(queue,new_event){
var vec__27855 = cljs.core.split_with.call(null,modal_synth.scheduler.earlier_QMARK_.call(null,new_event),queue);
var earlier = cljs.core.nth.call(null,vec__27855,(0),null);
var later = cljs.core.nth.call(null,vec__27855,(1),null);
return cljs.core.concat.call(null,earlier,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_event], null),later);
});
modal_synth.scheduler.next_event_within_horizon_QMARK_ = (function modal_synth$scheduler$next_event_within_horizon_QMARK_(scheduler,now){
var next_event = cljs.core.first.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(scheduler)));
if(cljs.core.truth_((function (){var and__24789__auto__ = next_event;
if(cljs.core.truth_(and__24789__auto__)){
return (new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(next_event) < (now + cljs.core.deref.call(null,new cljs.core.Keyword(null,"lookahead","lookahead",-400102393).cljs$core$IFn$_invoke$arity$1(scheduler))));
} else {
return and__24789__auto__;
}
})())){
return true;
} else {
return false;
}
});
modal_synth.scheduler.create_BANG_ = (function modal_synth$scheduler$create_BANG_(var_args){
var args__25883__auto__ = [];
var len__25876__auto___27912 = arguments.length;
var i__25877__auto___27913 = (0);
while(true){
if((i__25877__auto___27913 < len__25876__auto___27912)){
args__25883__auto__.push((arguments[i__25877__auto___27913]));

var G__27914 = (i__25877__auto___27913 + (1));
i__25877__auto___27913 = G__27914;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return modal_synth.scheduler.create_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

modal_synth.scheduler.create_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (audio_context,p__27860){
var map__27861 = p__27860;
var map__27861__$1 = ((((!((map__27861 == null)))?((((map__27861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27861):map__27861);
var lookahead = cljs.core.get.call(null,map__27861__$1,new cljs.core.Keyword(null,"lookahead","lookahead",-400102393),0.1);
var period = cljs.core.get.call(null,map__27861__$1,new cljs.core.Keyword(null,"period","period",-352129191),(20));
var scheduler = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lookahead","lookahead",-400102393),cljs.core.atom.call(null,lookahead),new cljs.core.Keyword(null,"period","period",-352129191),cljs.core.atom.call(null,period),new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)], null);
var c__26831__auto___27915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26831__auto___27915,scheduler,map__27861,map__27861__$1,lookahead,period){
return (function (){
var f__26832__auto__ = (function (){var switch__26810__auto__ = ((function (c__26831__auto___27915,scheduler,map__27861,map__27861__$1,lookahead,period){
return (function (state_27891){
var state_val_27892 = (state_27891[(1)]);
if((state_val_27892 === (1))){
var state_27891__$1 = state_27891;
var statearr_27893_27916 = state_27891__$1;
(statearr_27893_27916[(2)] = null);

(statearr_27893_27916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27892 === (2))){
var inst_27864 = audio_context.currentTime;
var state_27891__$1 = (function (){var statearr_27894 = state_27891;
(statearr_27894[(7)] = inst_27864);

return statearr_27894;
})();
var statearr_27895_27917 = state_27891__$1;
(statearr_27895_27917[(2)] = null);

(statearr_27895_27917[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27892 === (3))){
var inst_27889 = (state_27891[(2)]);
var state_27891__$1 = state_27891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27891__$1,inst_27889);
} else {
if((state_val_27892 === (4))){
var inst_27864 = (state_27891[(7)]);
var inst_27866 = modal_synth.scheduler.next_event_within_horizon_QMARK_.call(null,scheduler,inst_27864);
var state_27891__$1 = state_27891;
if(cljs.core.truth_(inst_27866)){
var statearr_27896_27918 = state_27891__$1;
(statearr_27896_27918[(1)] = (6));

} else {
var statearr_27897_27919 = state_27891__$1;
(statearr_27897_27919[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27892 === (5))){
var inst_27881 = (state_27891[(2)]);
var inst_27882 = new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(scheduler);
var inst_27883 = cljs.core.deref.call(null,inst_27882);
var inst_27884 = cljs.core.async.timeout.call(null,inst_27883);
var state_27891__$1 = (function (){var statearr_27898 = state_27891;
(statearr_27898[(8)] = inst_27881);

return statearr_27898;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27891__$1,(9),inst_27884);
} else {
if((state_val_27892 === (6))){
var inst_27868 = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(scheduler);
var inst_27869 = cljs.core.deref.call(null,inst_27868);
var inst_27870 = cljs.core.first.call(null,inst_27869);
var inst_27871 = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(scheduler);
var inst_27872 = cljs.core.swap_BANG_.call(null,inst_27871,cljs.core.rest);
var inst_27873 = new cljs.core.Keyword(null,"callback!","callback!",1377016901).cljs$core$IFn$_invoke$arity$1(inst_27870);
var inst_27874 = new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(inst_27870);
var inst_27875 = inst_27873.call(null,inst_27874);
var state_27891__$1 = (function (){var statearr_27899 = state_27891;
(statearr_27899[(9)] = inst_27875);

(statearr_27899[(10)] = inst_27872);

return statearr_27899;
})();
var statearr_27900_27920 = state_27891__$1;
(statearr_27900_27920[(2)] = null);

(statearr_27900_27920[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27892 === (7))){
var state_27891__$1 = state_27891;
var statearr_27901_27921 = state_27891__$1;
(statearr_27901_27921[(2)] = null);

(statearr_27901_27921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27892 === (8))){
var inst_27879 = (state_27891[(2)]);
var state_27891__$1 = state_27891;
var statearr_27902_27922 = state_27891__$1;
(statearr_27902_27922[(2)] = inst_27879);

(statearr_27902_27922[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27892 === (9))){
var inst_27886 = (state_27891[(2)]);
var state_27891__$1 = (function (){var statearr_27903 = state_27891;
(statearr_27903[(11)] = inst_27886);

return statearr_27903;
})();
var statearr_27904_27923 = state_27891__$1;
(statearr_27904_27923[(2)] = null);

(statearr_27904_27923[(1)] = (2));


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
});})(c__26831__auto___27915,scheduler,map__27861,map__27861__$1,lookahead,period))
;
return ((function (switch__26810__auto__,c__26831__auto___27915,scheduler,map__27861,map__27861__$1,lookahead,period){
return (function() {
var modal_synth$scheduler$state_machine__26811__auto__ = null;
var modal_synth$scheduler$state_machine__26811__auto____0 = (function (){
var statearr_27908 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27908[(0)] = modal_synth$scheduler$state_machine__26811__auto__);

(statearr_27908[(1)] = (1));

return statearr_27908;
});
var modal_synth$scheduler$state_machine__26811__auto____1 = (function (state_27891){
while(true){
var ret_value__26812__auto__ = (function (){try{while(true){
var result__26813__auto__ = switch__26810__auto__.call(null,state_27891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26813__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26813__auto__;
}
break;
}
}catch (e27909){if((e27909 instanceof Object)){
var ex__26814__auto__ = e27909;
var statearr_27910_27924 = state_27891;
(statearr_27910_27924[(5)] = ex__26814__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27925 = state_27891;
state_27891 = G__27925;
continue;
} else {
return ret_value__26812__auto__;
}
break;
}
});
modal_synth$scheduler$state_machine__26811__auto__ = function(state_27891){
switch(arguments.length){
case 0:
return modal_synth$scheduler$state_machine__26811__auto____0.call(this);
case 1:
return modal_synth$scheduler$state_machine__26811__auto____1.call(this,state_27891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modal_synth$scheduler$state_machine__26811__auto__.cljs$core$IFn$_invoke$arity$0 = modal_synth$scheduler$state_machine__26811__auto____0;
modal_synth$scheduler$state_machine__26811__auto__.cljs$core$IFn$_invoke$arity$1 = modal_synth$scheduler$state_machine__26811__auto____1;
return modal_synth$scheduler$state_machine__26811__auto__;
})()
;})(switch__26810__auto__,c__26831__auto___27915,scheduler,map__27861,map__27861__$1,lookahead,period))
})();
var state__26833__auto__ = (function (){var statearr_27911 = f__26832__auto__.call(null);
(statearr_27911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26831__auto___27915);

return statearr_27911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26833__auto__);
});})(c__26831__auto___27915,scheduler,map__27861,map__27861__$1,lookahead,period))
);


return scheduler;
});

modal_synth.scheduler.create_BANG_.cljs$lang$maxFixedArity = (1);

modal_synth.scheduler.create_BANG_.cljs$lang$applyTo = (function (seq27858){
var G__27859 = cljs.core.first.call(null,seq27858);
var seq27858__$1 = cljs.core.next.call(null,seq27858);
return modal_synth.scheduler.create_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27859,seq27858__$1);
});

modal_synth.scheduler.call_at_time_BANG_ = (function modal_synth$scheduler$call_at_time_BANG_(scheduler,callback_BANG_,at_time){
var call_event = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),at_time,new cljs.core.Keyword(null,"callback!","callback!",1377016901),callback_BANG_], null);
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(scheduler),modal_synth.scheduler.insert,call_event);
});
/**
 * Ripping off Extempore :)
 * callback! must return the time it should be called next,
 *  or nil for end of sequence.
 */
modal_synth.scheduler.recursion_through_time_BANG_ = (function modal_synth$scheduler$recursion_through_time_BANG_(scheduler,callback_BANG_,at_time){
var recursive_wrapper_BANG_ = (function (self,scheduler__$1,callback_BANG___$1){
return (function (at_time__$1){
var next_time = callback_BANG___$1.call(null,at_time__$1);
if(cljs.core.truth_(next_time)){
return modal_synth.scheduler.call_at_time_BANG_.call(null,scheduler__$1,self.call(null,self,scheduler__$1,callback_BANG___$1),next_time);
} else {
return null;
}
});
});
return modal_synth.scheduler.call_at_time_BANG_.call(null,scheduler,recursive_wrapper_BANG_.call(null,recursive_wrapper_BANG_,scheduler,callback_BANG_),at_time);
});

//# sourceMappingURL=scheduler.js.map?rel=1517065385597