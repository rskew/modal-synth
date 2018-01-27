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
var vec__37098 = cljs.core.split_with.call(null,modal_synth.scheduler.earlier_QMARK_.call(null,new_event),queue);
var earlier = cljs.core.nth.call(null,vec__37098,(0),null);
var later = cljs.core.nth.call(null,vec__37098,(1),null);
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
var len__25876__auto___37155 = arguments.length;
var i__25877__auto___37156 = (0);
while(true){
if((i__25877__auto___37156 < len__25876__auto___37155)){
args__25883__auto__.push((arguments[i__25877__auto___37156]));

var G__37157 = (i__25877__auto___37156 + (1));
i__25877__auto___37156 = G__37157;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return modal_synth.scheduler.create_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

modal_synth.scheduler.create_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (audio_context,p__37103){
var map__37104 = p__37103;
var map__37104__$1 = ((((!((map__37104 == null)))?((((map__37104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37104):map__37104);
var lookahead = cljs.core.get.call(null,map__37104__$1,new cljs.core.Keyword(null,"lookahead","lookahead",-400102393),0.1);
var period = cljs.core.get.call(null,map__37104__$1,new cljs.core.Keyword(null,"period","period",-352129191),(20));
var scheduler = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lookahead","lookahead",-400102393),cljs.core.atom.call(null,lookahead),new cljs.core.Keyword(null,"period","period",-352129191),cljs.core.atom.call(null,period),new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)], null);
var c__26973__auto___37158 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto___37158,scheduler,map__37104,map__37104__$1,lookahead,period){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto___37158,scheduler,map__37104,map__37104__$1,lookahead,period){
return (function (state_37134){
var state_val_37135 = (state_37134[(1)]);
if((state_val_37135 === (1))){
var state_37134__$1 = state_37134;
var statearr_37136_37159 = state_37134__$1;
(statearr_37136_37159[(2)] = null);

(statearr_37136_37159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37135 === (2))){
var inst_37107 = audio_context.currentTime;
var state_37134__$1 = (function (){var statearr_37137 = state_37134;
(statearr_37137[(7)] = inst_37107);

return statearr_37137;
})();
var statearr_37138_37160 = state_37134__$1;
(statearr_37138_37160[(2)] = null);

(statearr_37138_37160[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37135 === (3))){
var inst_37132 = (state_37134[(2)]);
var state_37134__$1 = state_37134;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37134__$1,inst_37132);
} else {
if((state_val_37135 === (4))){
var inst_37107 = (state_37134[(7)]);
var inst_37109 = modal_synth.scheduler.next_event_within_horizon_QMARK_.call(null,scheduler,inst_37107);
var state_37134__$1 = state_37134;
if(cljs.core.truth_(inst_37109)){
var statearr_37139_37161 = state_37134__$1;
(statearr_37139_37161[(1)] = (6));

} else {
var statearr_37140_37162 = state_37134__$1;
(statearr_37140_37162[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37135 === (5))){
var inst_37124 = (state_37134[(2)]);
var inst_37125 = new cljs.core.Keyword(null,"period","period",-352129191).cljs$core$IFn$_invoke$arity$1(scheduler);
var inst_37126 = cljs.core.deref.call(null,inst_37125);
var inst_37127 = cljs.core.async.timeout.call(null,inst_37126);
var state_37134__$1 = (function (){var statearr_37141 = state_37134;
(statearr_37141[(8)] = inst_37124);

return statearr_37141;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37134__$1,(9),inst_37127);
} else {
if((state_val_37135 === (6))){
var inst_37111 = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(scheduler);
var inst_37112 = cljs.core.deref.call(null,inst_37111);
var inst_37113 = cljs.core.first.call(null,inst_37112);
var inst_37114 = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(scheduler);
var inst_37115 = cljs.core.swap_BANG_.call(null,inst_37114,cljs.core.rest);
var inst_37116 = new cljs.core.Keyword(null,"callback!","callback!",1377016901).cljs$core$IFn$_invoke$arity$1(inst_37113);
var inst_37117 = new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(inst_37113);
var inst_37118 = inst_37116.call(null,inst_37117);
var state_37134__$1 = (function (){var statearr_37142 = state_37134;
(statearr_37142[(9)] = inst_37118);

(statearr_37142[(10)] = inst_37115);

return statearr_37142;
})();
var statearr_37143_37163 = state_37134__$1;
(statearr_37143_37163[(2)] = null);

(statearr_37143_37163[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37135 === (7))){
var state_37134__$1 = state_37134;
var statearr_37144_37164 = state_37134__$1;
(statearr_37144_37164[(2)] = null);

(statearr_37144_37164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37135 === (8))){
var inst_37122 = (state_37134[(2)]);
var state_37134__$1 = state_37134;
var statearr_37145_37165 = state_37134__$1;
(statearr_37145_37165[(2)] = inst_37122);

(statearr_37145_37165[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37135 === (9))){
var inst_37129 = (state_37134[(2)]);
var state_37134__$1 = (function (){var statearr_37146 = state_37134;
(statearr_37146[(11)] = inst_37129);

return statearr_37146;
})();
var statearr_37147_37166 = state_37134__$1;
(statearr_37147_37166[(2)] = null);

(statearr_37147_37166[(1)] = (2));


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
});})(c__26973__auto___37158,scheduler,map__37104,map__37104__$1,lookahead,period))
;
return ((function (switch__26861__auto__,c__26973__auto___37158,scheduler,map__37104,map__37104__$1,lookahead,period){
return (function() {
var modal_synth$scheduler$state_machine__26862__auto__ = null;
var modal_synth$scheduler$state_machine__26862__auto____0 = (function (){
var statearr_37151 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37151[(0)] = modal_synth$scheduler$state_machine__26862__auto__);

(statearr_37151[(1)] = (1));

return statearr_37151;
});
var modal_synth$scheduler$state_machine__26862__auto____1 = (function (state_37134){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_37134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e37152){if((e37152 instanceof Object)){
var ex__26865__auto__ = e37152;
var statearr_37153_37167 = state_37134;
(statearr_37153_37167[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37168 = state_37134;
state_37134 = G__37168;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
modal_synth$scheduler$state_machine__26862__auto__ = function(state_37134){
switch(arguments.length){
case 0:
return modal_synth$scheduler$state_machine__26862__auto____0.call(this);
case 1:
return modal_synth$scheduler$state_machine__26862__auto____1.call(this,state_37134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
modal_synth$scheduler$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = modal_synth$scheduler$state_machine__26862__auto____0;
modal_synth$scheduler$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = modal_synth$scheduler$state_machine__26862__auto____1;
return modal_synth$scheduler$state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto___37158,scheduler,map__37104,map__37104__$1,lookahead,period))
})();
var state__26975__auto__ = (function (){var statearr_37154 = f__26974__auto__.call(null);
(statearr_37154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto___37158);

return statearr_37154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto___37158,scheduler,map__37104,map__37104__$1,lookahead,period))
);


return scheduler;
});

modal_synth.scheduler.create_BANG_.cljs$lang$maxFixedArity = (1);

modal_synth.scheduler.create_BANG_.cljs$lang$applyTo = (function (seq37101){
var G__37102 = cljs.core.first.call(null,seq37101);
var seq37101__$1 = cljs.core.next.call(null,seq37101);
return modal_synth.scheduler.create_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37102,seq37101__$1);
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

//# sourceMappingURL=scheduler.js.map?rel=1516956393980