// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27068 = [];
var len__25852__auto___27074 = arguments.length;
var i__25853__auto___27075 = (0);
while(true){
if((i__25853__auto___27075 < len__25852__auto___27074)){
args27068.push((arguments[i__25853__auto___27075]));

var G__27076 = (i__25853__auto___27075 + (1));
i__25853__auto___27075 = G__27076;
continue;
} else {
}
break;
}

var G__27070 = args27068.length;
switch (G__27070) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27068.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27071 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27071 = (function (f,blockable,meta27072){
this.f = f;
this.blockable = blockable;
this.meta27072 = meta27072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27073,meta27072__$1){
var self__ = this;
var _27073__$1 = this;
return (new cljs.core.async.t_cljs$core$async27071(self__.f,self__.blockable,meta27072__$1));
});

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27073){
var self__ = this;
var _27073__$1 = this;
return self__.meta27072;
});

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27072","meta27072",1308492625,null)], null);
});

cljs.core.async.t_cljs$core$async27071.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27071";

cljs.core.async.t_cljs$core$async27071.cljs$lang$ctorPrWriter = (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async27071");
});

cljs.core.async.__GT_t_cljs$core$async27071 = (function cljs$core$async$__GT_t_cljs$core$async27071(f__$1,blockable__$1,meta27072){
return (new cljs.core.async.t_cljs$core$async27071(f__$1,blockable__$1,meta27072));
});

}

return (new cljs.core.async.t_cljs$core$async27071(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27080 = [];
var len__25852__auto___27083 = arguments.length;
var i__25853__auto___27084 = (0);
while(true){
if((i__25853__auto___27084 < len__25852__auto___27083)){
args27080.push((arguments[i__25853__auto___27084]));

var G__27085 = (i__25853__auto___27084 + (1));
i__25853__auto___27084 = G__27085;
continue;
} else {
}
break;
}

var G__27082 = args27080.length;
switch (G__27082) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27080.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27087 = [];
var len__25852__auto___27090 = arguments.length;
var i__25853__auto___27091 = (0);
while(true){
if((i__25853__auto___27091 < len__25852__auto___27090)){
args27087.push((arguments[i__25853__auto___27091]));

var G__27092 = (i__25853__auto___27091 + (1));
i__25853__auto___27091 = G__27092;
continue;
} else {
}
break;
}

var G__27089 = args27087.length;
switch (G__27089) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27087.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27094 = [];
var len__25852__auto___27097 = arguments.length;
var i__25853__auto___27098 = (0);
while(true){
if((i__25853__auto___27098 < len__25852__auto___27097)){
args27094.push((arguments[i__25853__auto___27098]));

var G__27099 = (i__25853__auto___27098 + (1));
i__25853__auto___27098 = G__27099;
continue;
} else {
}
break;
}

var G__27096 = args27094.length;
switch (G__27096) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27094.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27101 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27101);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27101,ret){
return (function (){
return fn1.call(null,val_27101);
});})(val_27101,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27102 = [];
var len__25852__auto___27105 = arguments.length;
var i__25853__auto___27106 = (0);
while(true){
if((i__25853__auto___27106 < len__25852__auto___27105)){
args27102.push((arguments[i__25853__auto___27106]));

var G__27107 = (i__25853__auto___27106 + (1));
i__25853__auto___27106 = G__27107;
continue;
} else {
}
break;
}

var G__27104 = args27102.length;
switch (G__27104) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27102.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25692__auto___27109 = n;
var x_27110 = (0);
while(true){
if((x_27110 < n__25692__auto___27109)){
(a[x_27110] = (0));

var G__27111 = (x_27110 + (1));
x_27110 = G__27111;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27112 = (i + (1));
i = G__27112;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27116 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27116 = (function (alt_flag,flag,meta27117){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27117 = meta27117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27118,meta27117__$1){
var self__ = this;
var _27118__$1 = this;
return (new cljs.core.async.t_cljs$core$async27116(self__.alt_flag,self__.flag,meta27117__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27116.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27118){
var self__ = this;
var _27118__$1 = this;
return self__.meta27117;
});})(flag))
;

cljs.core.async.t_cljs$core$async27116.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27116.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27116.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27117","meta27117",727684567,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27116.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27116";

cljs.core.async.t_cljs$core$async27116.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async27116");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27116 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27116(alt_flag__$1,flag__$1,meta27117){
return (new cljs.core.async.t_cljs$core$async27116(alt_flag__$1,flag__$1,meta27117));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27116(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27122 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27122 = (function (alt_handler,flag,cb,meta27123){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27123 = meta27123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27124,meta27123__$1){
var self__ = this;
var _27124__$1 = this;
return (new cljs.core.async.t_cljs$core$async27122(self__.alt_handler,self__.flag,self__.cb,meta27123__$1));
});

cljs.core.async.t_cljs$core$async27122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27124){
var self__ = this;
var _27124__$1 = this;
return self__.meta27123;
});

cljs.core.async.t_cljs$core$async27122.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27122.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27122.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27122.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27123","meta27123",480608006,null)], null);
});

cljs.core.async.t_cljs$core$async27122.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27122";

cljs.core.async.t_cljs$core$async27122.cljs$lang$ctorPrWriter = (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async27122");
});

cljs.core.async.__GT_t_cljs$core$async27122 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27122(alt_handler__$1,flag__$1,cb__$1,meta27123){
return (new cljs.core.async.t_cljs$core$async27122(alt_handler__$1,flag__$1,cb__$1,meta27123));
});

}

return (new cljs.core.async.t_cljs$core$async27122(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27125_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27125_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27126_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27126_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24777__auto__ = wport;
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27127 = (i + (1));
i = G__27127;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24777__auto__ = ret;
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24765__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24765__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24765__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25859__auto__ = [];
var len__25852__auto___27133 = arguments.length;
var i__25853__auto___27134 = (0);
while(true){
if((i__25853__auto___27134 < len__25852__auto___27133)){
args__25859__auto__.push((arguments[i__25853__auto___27134]));

var G__27135 = (i__25853__auto___27134 + (1));
i__25853__auto___27134 = G__27135;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((1) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25860__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27130){
var map__27131 = p__27130;
var map__27131__$1 = ((((!((map__27131 == null)))?((((map__27131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27131):map__27131);
var opts = map__27131__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27128){
var G__27129 = cljs.core.first.call(null,seq27128);
var seq27128__$1 = cljs.core.next.call(null,seq27128);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27129,seq27128__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27136 = [];
var len__25852__auto___27186 = arguments.length;
var i__25853__auto___27187 = (0);
while(true){
if((i__25853__auto___27187 < len__25852__auto___27186)){
args27136.push((arguments[i__25853__auto___27187]));

var G__27188 = (i__25853__auto___27187 + (1));
i__25853__auto___27187 = G__27188;
continue;
} else {
}
break;
}

var G__27138 = args27136.length;
switch (G__27138) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27136.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27023__auto___27190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___27190){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto___27190){
return (function (state_27162){
var state_val_27163 = (state_27162[(1)]);
if((state_val_27163 === (7))){
var inst_27158 = (state_27162[(2)]);
var state_27162__$1 = state_27162;
var statearr_27164_27191 = state_27162__$1;
(statearr_27164_27191[(2)] = inst_27158);

(statearr_27164_27191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (1))){
var state_27162__$1 = state_27162;
var statearr_27165_27192 = state_27162__$1;
(statearr_27165_27192[(2)] = null);

(statearr_27165_27192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (4))){
var inst_27141 = (state_27162[(7)]);
var inst_27141__$1 = (state_27162[(2)]);
var inst_27142 = (inst_27141__$1 == null);
var state_27162__$1 = (function (){var statearr_27166 = state_27162;
(statearr_27166[(7)] = inst_27141__$1);

return statearr_27166;
})();
if(cljs.core.truth_(inst_27142)){
var statearr_27167_27193 = state_27162__$1;
(statearr_27167_27193[(1)] = (5));

} else {
var statearr_27168_27194 = state_27162__$1;
(statearr_27168_27194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (13))){
var state_27162__$1 = state_27162;
var statearr_27169_27195 = state_27162__$1;
(statearr_27169_27195[(2)] = null);

(statearr_27169_27195[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (6))){
var inst_27141 = (state_27162[(7)]);
var state_27162__$1 = state_27162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27162__$1,(11),to,inst_27141);
} else {
if((state_val_27163 === (3))){
var inst_27160 = (state_27162[(2)]);
var state_27162__$1 = state_27162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27162__$1,inst_27160);
} else {
if((state_val_27163 === (12))){
var state_27162__$1 = state_27162;
var statearr_27170_27196 = state_27162__$1;
(statearr_27170_27196[(2)] = null);

(statearr_27170_27196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (2))){
var state_27162__$1 = state_27162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27162__$1,(4),from);
} else {
if((state_val_27163 === (11))){
var inst_27151 = (state_27162[(2)]);
var state_27162__$1 = state_27162;
if(cljs.core.truth_(inst_27151)){
var statearr_27171_27197 = state_27162__$1;
(statearr_27171_27197[(1)] = (12));

} else {
var statearr_27172_27198 = state_27162__$1;
(statearr_27172_27198[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (9))){
var state_27162__$1 = state_27162;
var statearr_27173_27199 = state_27162__$1;
(statearr_27173_27199[(2)] = null);

(statearr_27173_27199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (5))){
var state_27162__$1 = state_27162;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27174_27200 = state_27162__$1;
(statearr_27174_27200[(1)] = (8));

} else {
var statearr_27175_27201 = state_27162__$1;
(statearr_27175_27201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (14))){
var inst_27156 = (state_27162[(2)]);
var state_27162__$1 = state_27162;
var statearr_27176_27202 = state_27162__$1;
(statearr_27176_27202[(2)] = inst_27156);

(statearr_27176_27202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (10))){
var inst_27148 = (state_27162[(2)]);
var state_27162__$1 = state_27162;
var statearr_27177_27203 = state_27162__$1;
(statearr_27177_27203[(2)] = inst_27148);

(statearr_27177_27203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27163 === (8))){
var inst_27145 = cljs.core.async.close_BANG_.call(null,to);
var state_27162__$1 = state_27162;
var statearr_27178_27204 = state_27162__$1;
(statearr_27178_27204[(2)] = inst_27145);

(statearr_27178_27204[(1)] = (10));


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
});})(c__27023__auto___27190))
;
return ((function (switch__26911__auto__,c__27023__auto___27190){
return (function() {
var cljs$core$async$state_machine__26912__auto__ = null;
var cljs$core$async$state_machine__26912__auto____0 = (function (){
var statearr_27182 = [null,null,null,null,null,null,null,null];
(statearr_27182[(0)] = cljs$core$async$state_machine__26912__auto__);

(statearr_27182[(1)] = (1));

return statearr_27182;
});
var cljs$core$async$state_machine__26912__auto____1 = (function (state_27162){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_27162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e27183){if((e27183 instanceof Object)){
var ex__26915__auto__ = e27183;
var statearr_27184_27205 = state_27162;
(statearr_27184_27205[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27206 = state_27162;
state_27162 = G__27206;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
cljs$core$async$state_machine__26912__auto__ = function(state_27162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26912__auto____1.call(this,state_27162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26912__auto____0;
cljs$core$async$state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26912__auto____1;
return cljs$core$async$state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto___27190))
})();
var state__27025__auto__ = (function (){var statearr_27185 = f__27024__auto__.call(null);
(statearr_27185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto___27190);

return statearr_27185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___27190))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27394){
var vec__27395 = p__27394;
var v = cljs.core.nth.call(null,vec__27395,(0),null);
var p = cljs.core.nth.call(null,vec__27395,(1),null);
var job = vec__27395;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27023__auto___27581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___27581,res,vec__27395,v,p,job,jobs,results){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto___27581,res,vec__27395,v,p,job,jobs,results){
return (function (state_27402){
var state_val_27403 = (state_27402[(1)]);
if((state_val_27403 === (1))){
var state_27402__$1 = state_27402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27402__$1,(2),res,v);
} else {
if((state_val_27403 === (2))){
var inst_27399 = (state_27402[(2)]);
var inst_27400 = cljs.core.async.close_BANG_.call(null,res);
var state_27402__$1 = (function (){var statearr_27404 = state_27402;
(statearr_27404[(7)] = inst_27399);

return statearr_27404;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27402__$1,inst_27400);
} else {
return null;
}
}
});})(c__27023__auto___27581,res,vec__27395,v,p,job,jobs,results))
;
return ((function (switch__26911__auto__,c__27023__auto___27581,res,vec__27395,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____0 = (function (){
var statearr_27408 = [null,null,null,null,null,null,null,null];
(statearr_27408[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__);

(statearr_27408[(1)] = (1));

return statearr_27408;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____1 = (function (state_27402){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_27402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e27409){if((e27409 instanceof Object)){
var ex__26915__auto__ = e27409;
var statearr_27410_27582 = state_27402;
(statearr_27410_27582[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27583 = state_27402;
state_27402 = G__27583;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__ = function(state_27402){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____1.call(this,state_27402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto___27581,res,vec__27395,v,p,job,jobs,results))
})();
var state__27025__auto__ = (function (){var statearr_27411 = f__27024__auto__.call(null);
(statearr_27411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto___27581);

return statearr_27411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___27581,res,vec__27395,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27412){
var vec__27413 = p__27412;
var v = cljs.core.nth.call(null,vec__27413,(0),null);
var p = cljs.core.nth.call(null,vec__27413,(1),null);
var job = vec__27413;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25692__auto___27584 = n;
var __27585 = (0);
while(true){
if((__27585 < n__25692__auto___27584)){
var G__27416_27586 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27416_27586) {
case "compute":
var c__27023__auto___27588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27585,c__27023__auto___27588,G__27416_27586,n__25692__auto___27584,jobs,results,process,async){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (__27585,c__27023__auto___27588,G__27416_27586,n__25692__auto___27584,jobs,results,process,async){
return (function (state_27429){
var state_val_27430 = (state_27429[(1)]);
if((state_val_27430 === (1))){
var state_27429__$1 = state_27429;
var statearr_27431_27589 = state_27429__$1;
(statearr_27431_27589[(2)] = null);

(statearr_27431_27589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27430 === (2))){
var state_27429__$1 = state_27429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27429__$1,(4),jobs);
} else {
if((state_val_27430 === (3))){
var inst_27427 = (state_27429[(2)]);
var state_27429__$1 = state_27429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27429__$1,inst_27427);
} else {
if((state_val_27430 === (4))){
var inst_27419 = (state_27429[(2)]);
var inst_27420 = process.call(null,inst_27419);
var state_27429__$1 = state_27429;
if(cljs.core.truth_(inst_27420)){
var statearr_27432_27590 = state_27429__$1;
(statearr_27432_27590[(1)] = (5));

} else {
var statearr_27433_27591 = state_27429__$1;
(statearr_27433_27591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27430 === (5))){
var state_27429__$1 = state_27429;
var statearr_27434_27592 = state_27429__$1;
(statearr_27434_27592[(2)] = null);

(statearr_27434_27592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27430 === (6))){
var state_27429__$1 = state_27429;
var statearr_27435_27593 = state_27429__$1;
(statearr_27435_27593[(2)] = null);

(statearr_27435_27593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27430 === (7))){
var inst_27425 = (state_27429[(2)]);
var state_27429__$1 = state_27429;
var statearr_27436_27594 = state_27429__$1;
(statearr_27436_27594[(2)] = inst_27425);

(statearr_27436_27594[(1)] = (3));


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
});})(__27585,c__27023__auto___27588,G__27416_27586,n__25692__auto___27584,jobs,results,process,async))
;
return ((function (__27585,switch__26911__auto__,c__27023__auto___27588,G__27416_27586,n__25692__auto___27584,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____0 = (function (){
var statearr_27440 = [null,null,null,null,null,null,null];
(statearr_27440[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__);

(statearr_27440[(1)] = (1));

return statearr_27440;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____1 = (function (state_27429){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_27429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e27441){if((e27441 instanceof Object)){
var ex__26915__auto__ = e27441;
var statearr_27442_27595 = state_27429;
(statearr_27442_27595[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27596 = state_27429;
state_27429 = G__27596;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__ = function(state_27429){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____1.call(this,state_27429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__;
})()
;})(__27585,switch__26911__auto__,c__27023__auto___27588,G__27416_27586,n__25692__auto___27584,jobs,results,process,async))
})();
var state__27025__auto__ = (function (){var statearr_27443 = f__27024__auto__.call(null);
(statearr_27443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto___27588);

return statearr_27443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(__27585,c__27023__auto___27588,G__27416_27586,n__25692__auto___27584,jobs,results,process,async))
);


break;
case "async":
var c__27023__auto___27597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27585,c__27023__auto___27597,G__27416_27586,n__25692__auto___27584,jobs,results,process,async){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (__27585,c__27023__auto___27597,G__27416_27586,n__25692__auto___27584,jobs,results,process,async){
return (function (state_27456){
var state_val_27457 = (state_27456[(1)]);
if((state_val_27457 === (1))){
var state_27456__$1 = state_27456;
var statearr_27458_27598 = state_27456__$1;
(statearr_27458_27598[(2)] = null);

(statearr_27458_27598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (2))){
var state_27456__$1 = state_27456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27456__$1,(4),jobs);
} else {
if((state_val_27457 === (3))){
var inst_27454 = (state_27456[(2)]);
var state_27456__$1 = state_27456;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27456__$1,inst_27454);
} else {
if((state_val_27457 === (4))){
var inst_27446 = (state_27456[(2)]);
var inst_27447 = async.call(null,inst_27446);
var state_27456__$1 = state_27456;
if(cljs.core.truth_(inst_27447)){
var statearr_27459_27599 = state_27456__$1;
(statearr_27459_27599[(1)] = (5));

} else {
var statearr_27460_27600 = state_27456__$1;
(statearr_27460_27600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (5))){
var state_27456__$1 = state_27456;
var statearr_27461_27601 = state_27456__$1;
(statearr_27461_27601[(2)] = null);

(statearr_27461_27601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (6))){
var state_27456__$1 = state_27456;
var statearr_27462_27602 = state_27456__$1;
(statearr_27462_27602[(2)] = null);

(statearr_27462_27602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (7))){
var inst_27452 = (state_27456[(2)]);
var state_27456__$1 = state_27456;
var statearr_27463_27603 = state_27456__$1;
(statearr_27463_27603[(2)] = inst_27452);

(statearr_27463_27603[(1)] = (3));


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
});})(__27585,c__27023__auto___27597,G__27416_27586,n__25692__auto___27584,jobs,results,process,async))
;
return ((function (__27585,switch__26911__auto__,c__27023__auto___27597,G__27416_27586,n__25692__auto___27584,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____0 = (function (){
var statearr_27467 = [null,null,null,null,null,null,null];
(statearr_27467[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__);

(statearr_27467[(1)] = (1));

return statearr_27467;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____1 = (function (state_27456){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_27456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e27468){if((e27468 instanceof Object)){
var ex__26915__auto__ = e27468;
var statearr_27469_27604 = state_27456;
(statearr_27469_27604[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27605 = state_27456;
state_27456 = G__27605;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__ = function(state_27456){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____1.call(this,state_27456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__;
})()
;})(__27585,switch__26911__auto__,c__27023__auto___27597,G__27416_27586,n__25692__auto___27584,jobs,results,process,async))
})();
var state__27025__auto__ = (function (){var statearr_27470 = f__27024__auto__.call(null);
(statearr_27470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto___27597);

return statearr_27470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(__27585,c__27023__auto___27597,G__27416_27586,n__25692__auto___27584,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27606 = (__27585 + (1));
__27585 = G__27606;
continue;
} else {
}
break;
}

var c__27023__auto___27607 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___27607,jobs,results,process,async){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto___27607,jobs,results,process,async){
return (function (state_27492){
var state_val_27493 = (state_27492[(1)]);
if((state_val_27493 === (1))){
var state_27492__$1 = state_27492;
var statearr_27494_27608 = state_27492__$1;
(statearr_27494_27608[(2)] = null);

(statearr_27494_27608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (2))){
var state_27492__$1 = state_27492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27492__$1,(4),from);
} else {
if((state_val_27493 === (3))){
var inst_27490 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27492__$1,inst_27490);
} else {
if((state_val_27493 === (4))){
var inst_27473 = (state_27492[(7)]);
var inst_27473__$1 = (state_27492[(2)]);
var inst_27474 = (inst_27473__$1 == null);
var state_27492__$1 = (function (){var statearr_27495 = state_27492;
(statearr_27495[(7)] = inst_27473__$1);

return statearr_27495;
})();
if(cljs.core.truth_(inst_27474)){
var statearr_27496_27609 = state_27492__$1;
(statearr_27496_27609[(1)] = (5));

} else {
var statearr_27497_27610 = state_27492__$1;
(statearr_27497_27610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (5))){
var inst_27476 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27492__$1 = state_27492;
var statearr_27498_27611 = state_27492__$1;
(statearr_27498_27611[(2)] = inst_27476);

(statearr_27498_27611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (6))){
var inst_27473 = (state_27492[(7)]);
var inst_27478 = (state_27492[(8)]);
var inst_27478__$1 = cljs.core.async.chan.call(null,(1));
var inst_27479 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27480 = [inst_27473,inst_27478__$1];
var inst_27481 = (new cljs.core.PersistentVector(null,2,(5),inst_27479,inst_27480,null));
var state_27492__$1 = (function (){var statearr_27499 = state_27492;
(statearr_27499[(8)] = inst_27478__$1);

return statearr_27499;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27492__$1,(8),jobs,inst_27481);
} else {
if((state_val_27493 === (7))){
var inst_27488 = (state_27492[(2)]);
var state_27492__$1 = state_27492;
var statearr_27500_27612 = state_27492__$1;
(statearr_27500_27612[(2)] = inst_27488);

(statearr_27500_27612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27493 === (8))){
var inst_27478 = (state_27492[(8)]);
var inst_27483 = (state_27492[(2)]);
var state_27492__$1 = (function (){var statearr_27501 = state_27492;
(statearr_27501[(9)] = inst_27483);

return statearr_27501;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27492__$1,(9),results,inst_27478);
} else {
if((state_val_27493 === (9))){
var inst_27485 = (state_27492[(2)]);
var state_27492__$1 = (function (){var statearr_27502 = state_27492;
(statearr_27502[(10)] = inst_27485);

return statearr_27502;
})();
var statearr_27503_27613 = state_27492__$1;
(statearr_27503_27613[(2)] = null);

(statearr_27503_27613[(1)] = (2));


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
});})(c__27023__auto___27607,jobs,results,process,async))
;
return ((function (switch__26911__auto__,c__27023__auto___27607,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____0 = (function (){
var statearr_27507 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27507[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__);

(statearr_27507[(1)] = (1));

return statearr_27507;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____1 = (function (state_27492){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_27492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e27508){if((e27508 instanceof Object)){
var ex__26915__auto__ = e27508;
var statearr_27509_27614 = state_27492;
(statearr_27509_27614[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27615 = state_27492;
state_27492 = G__27615;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__ = function(state_27492){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____1.call(this,state_27492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto___27607,jobs,results,process,async))
})();
var state__27025__auto__ = (function (){var statearr_27510 = f__27024__auto__.call(null);
(statearr_27510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto___27607);

return statearr_27510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___27607,jobs,results,process,async))
);


var c__27023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto__,jobs,results,process,async){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto__,jobs,results,process,async){
return (function (state_27548){
var state_val_27549 = (state_27548[(1)]);
if((state_val_27549 === (7))){
var inst_27544 = (state_27548[(2)]);
var state_27548__$1 = state_27548;
var statearr_27550_27616 = state_27548__$1;
(statearr_27550_27616[(2)] = inst_27544);

(statearr_27550_27616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (20))){
var state_27548__$1 = state_27548;
var statearr_27551_27617 = state_27548__$1;
(statearr_27551_27617[(2)] = null);

(statearr_27551_27617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (1))){
var state_27548__$1 = state_27548;
var statearr_27552_27618 = state_27548__$1;
(statearr_27552_27618[(2)] = null);

(statearr_27552_27618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (4))){
var inst_27513 = (state_27548[(7)]);
var inst_27513__$1 = (state_27548[(2)]);
var inst_27514 = (inst_27513__$1 == null);
var state_27548__$1 = (function (){var statearr_27553 = state_27548;
(statearr_27553[(7)] = inst_27513__$1);

return statearr_27553;
})();
if(cljs.core.truth_(inst_27514)){
var statearr_27554_27619 = state_27548__$1;
(statearr_27554_27619[(1)] = (5));

} else {
var statearr_27555_27620 = state_27548__$1;
(statearr_27555_27620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (15))){
var inst_27526 = (state_27548[(8)]);
var state_27548__$1 = state_27548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27548__$1,(18),to,inst_27526);
} else {
if((state_val_27549 === (21))){
var inst_27539 = (state_27548[(2)]);
var state_27548__$1 = state_27548;
var statearr_27556_27621 = state_27548__$1;
(statearr_27556_27621[(2)] = inst_27539);

(statearr_27556_27621[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (13))){
var inst_27541 = (state_27548[(2)]);
var state_27548__$1 = (function (){var statearr_27557 = state_27548;
(statearr_27557[(9)] = inst_27541);

return statearr_27557;
})();
var statearr_27558_27622 = state_27548__$1;
(statearr_27558_27622[(2)] = null);

(statearr_27558_27622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (6))){
var inst_27513 = (state_27548[(7)]);
var state_27548__$1 = state_27548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27548__$1,(11),inst_27513);
} else {
if((state_val_27549 === (17))){
var inst_27534 = (state_27548[(2)]);
var state_27548__$1 = state_27548;
if(cljs.core.truth_(inst_27534)){
var statearr_27559_27623 = state_27548__$1;
(statearr_27559_27623[(1)] = (19));

} else {
var statearr_27560_27624 = state_27548__$1;
(statearr_27560_27624[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (3))){
var inst_27546 = (state_27548[(2)]);
var state_27548__$1 = state_27548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27548__$1,inst_27546);
} else {
if((state_val_27549 === (12))){
var inst_27523 = (state_27548[(10)]);
var state_27548__$1 = state_27548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27548__$1,(14),inst_27523);
} else {
if((state_val_27549 === (2))){
var state_27548__$1 = state_27548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27548__$1,(4),results);
} else {
if((state_val_27549 === (19))){
var state_27548__$1 = state_27548;
var statearr_27561_27625 = state_27548__$1;
(statearr_27561_27625[(2)] = null);

(statearr_27561_27625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (11))){
var inst_27523 = (state_27548[(2)]);
var state_27548__$1 = (function (){var statearr_27562 = state_27548;
(statearr_27562[(10)] = inst_27523);

return statearr_27562;
})();
var statearr_27563_27626 = state_27548__$1;
(statearr_27563_27626[(2)] = null);

(statearr_27563_27626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (9))){
var state_27548__$1 = state_27548;
var statearr_27564_27627 = state_27548__$1;
(statearr_27564_27627[(2)] = null);

(statearr_27564_27627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (5))){
var state_27548__$1 = state_27548;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27565_27628 = state_27548__$1;
(statearr_27565_27628[(1)] = (8));

} else {
var statearr_27566_27629 = state_27548__$1;
(statearr_27566_27629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (14))){
var inst_27526 = (state_27548[(8)]);
var inst_27528 = (state_27548[(11)]);
var inst_27526__$1 = (state_27548[(2)]);
var inst_27527 = (inst_27526__$1 == null);
var inst_27528__$1 = cljs.core.not.call(null,inst_27527);
var state_27548__$1 = (function (){var statearr_27567 = state_27548;
(statearr_27567[(8)] = inst_27526__$1);

(statearr_27567[(11)] = inst_27528__$1);

return statearr_27567;
})();
if(inst_27528__$1){
var statearr_27568_27630 = state_27548__$1;
(statearr_27568_27630[(1)] = (15));

} else {
var statearr_27569_27631 = state_27548__$1;
(statearr_27569_27631[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (16))){
var inst_27528 = (state_27548[(11)]);
var state_27548__$1 = state_27548;
var statearr_27570_27632 = state_27548__$1;
(statearr_27570_27632[(2)] = inst_27528);

(statearr_27570_27632[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (10))){
var inst_27520 = (state_27548[(2)]);
var state_27548__$1 = state_27548;
var statearr_27571_27633 = state_27548__$1;
(statearr_27571_27633[(2)] = inst_27520);

(statearr_27571_27633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (18))){
var inst_27531 = (state_27548[(2)]);
var state_27548__$1 = state_27548;
var statearr_27572_27634 = state_27548__$1;
(statearr_27572_27634[(2)] = inst_27531);

(statearr_27572_27634[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27549 === (8))){
var inst_27517 = cljs.core.async.close_BANG_.call(null,to);
var state_27548__$1 = state_27548;
var statearr_27573_27635 = state_27548__$1;
(statearr_27573_27635[(2)] = inst_27517);

(statearr_27573_27635[(1)] = (10));


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
});})(c__27023__auto__,jobs,results,process,async))
;
return ((function (switch__26911__auto__,c__27023__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____0 = (function (){
var statearr_27577 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27577[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__);

(statearr_27577[(1)] = (1));

return statearr_27577;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____1 = (function (state_27548){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_27548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e27578){if((e27578 instanceof Object)){
var ex__26915__auto__ = e27578;
var statearr_27579_27636 = state_27548;
(statearr_27579_27636[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27637 = state_27548;
state_27548 = G__27637;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__ = function(state_27548){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____1.call(this,state_27548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26912__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto__,jobs,results,process,async))
})();
var state__27025__auto__ = (function (){var statearr_27580 = f__27024__auto__.call(null);
(statearr_27580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto__);

return statearr_27580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto__,jobs,results,process,async))
);

return c__27023__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27638 = [];
var len__25852__auto___27641 = arguments.length;
var i__25853__auto___27642 = (0);
while(true){
if((i__25853__auto___27642 < len__25852__auto___27641)){
args27638.push((arguments[i__25853__auto___27642]));

var G__27643 = (i__25853__auto___27642 + (1));
i__25853__auto___27642 = G__27643;
continue;
} else {
}
break;
}

var G__27640 = args27638.length;
switch (G__27640) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27638.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args27645 = [];
var len__25852__auto___27648 = arguments.length;
var i__25853__auto___27649 = (0);
while(true){
if((i__25853__auto___27649 < len__25852__auto___27648)){
args27645.push((arguments[i__25853__auto___27649]));

var G__27650 = (i__25853__auto___27649 + (1));
i__25853__auto___27649 = G__27650;
continue;
} else {
}
break;
}

var G__27647 = args27645.length;
switch (G__27647) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27645.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args27652 = [];
var len__25852__auto___27705 = arguments.length;
var i__25853__auto___27706 = (0);
while(true){
if((i__25853__auto___27706 < len__25852__auto___27705)){
args27652.push((arguments[i__25853__auto___27706]));

var G__27707 = (i__25853__auto___27706 + (1));
i__25853__auto___27706 = G__27707;
continue;
} else {
}
break;
}

var G__27654 = args27652.length;
switch (G__27654) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27652.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27023__auto___27709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___27709,tc,fc){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto___27709,tc,fc){
return (function (state_27680){
var state_val_27681 = (state_27680[(1)]);
if((state_val_27681 === (7))){
var inst_27676 = (state_27680[(2)]);
var state_27680__$1 = state_27680;
var statearr_27682_27710 = state_27680__$1;
(statearr_27682_27710[(2)] = inst_27676);

(statearr_27682_27710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (1))){
var state_27680__$1 = state_27680;
var statearr_27683_27711 = state_27680__$1;
(statearr_27683_27711[(2)] = null);

(statearr_27683_27711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (4))){
var inst_27657 = (state_27680[(7)]);
var inst_27657__$1 = (state_27680[(2)]);
var inst_27658 = (inst_27657__$1 == null);
var state_27680__$1 = (function (){var statearr_27684 = state_27680;
(statearr_27684[(7)] = inst_27657__$1);

return statearr_27684;
})();
if(cljs.core.truth_(inst_27658)){
var statearr_27685_27712 = state_27680__$1;
(statearr_27685_27712[(1)] = (5));

} else {
var statearr_27686_27713 = state_27680__$1;
(statearr_27686_27713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (13))){
var state_27680__$1 = state_27680;
var statearr_27687_27714 = state_27680__$1;
(statearr_27687_27714[(2)] = null);

(statearr_27687_27714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (6))){
var inst_27657 = (state_27680[(7)]);
var inst_27663 = p.call(null,inst_27657);
var state_27680__$1 = state_27680;
if(cljs.core.truth_(inst_27663)){
var statearr_27688_27715 = state_27680__$1;
(statearr_27688_27715[(1)] = (9));

} else {
var statearr_27689_27716 = state_27680__$1;
(statearr_27689_27716[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (3))){
var inst_27678 = (state_27680[(2)]);
var state_27680__$1 = state_27680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27680__$1,inst_27678);
} else {
if((state_val_27681 === (12))){
var state_27680__$1 = state_27680;
var statearr_27690_27717 = state_27680__$1;
(statearr_27690_27717[(2)] = null);

(statearr_27690_27717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (2))){
var state_27680__$1 = state_27680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27680__$1,(4),ch);
} else {
if((state_val_27681 === (11))){
var inst_27657 = (state_27680[(7)]);
var inst_27667 = (state_27680[(2)]);
var state_27680__$1 = state_27680;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27680__$1,(8),inst_27667,inst_27657);
} else {
if((state_val_27681 === (9))){
var state_27680__$1 = state_27680;
var statearr_27691_27718 = state_27680__$1;
(statearr_27691_27718[(2)] = tc);

(statearr_27691_27718[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (5))){
var inst_27660 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27661 = cljs.core.async.close_BANG_.call(null,fc);
var state_27680__$1 = (function (){var statearr_27692 = state_27680;
(statearr_27692[(8)] = inst_27660);

return statearr_27692;
})();
var statearr_27693_27719 = state_27680__$1;
(statearr_27693_27719[(2)] = inst_27661);

(statearr_27693_27719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (14))){
var inst_27674 = (state_27680[(2)]);
var state_27680__$1 = state_27680;
var statearr_27694_27720 = state_27680__$1;
(statearr_27694_27720[(2)] = inst_27674);

(statearr_27694_27720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (10))){
var state_27680__$1 = state_27680;
var statearr_27695_27721 = state_27680__$1;
(statearr_27695_27721[(2)] = fc);

(statearr_27695_27721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27681 === (8))){
var inst_27669 = (state_27680[(2)]);
var state_27680__$1 = state_27680;
if(cljs.core.truth_(inst_27669)){
var statearr_27696_27722 = state_27680__$1;
(statearr_27696_27722[(1)] = (12));

} else {
var statearr_27697_27723 = state_27680__$1;
(statearr_27697_27723[(1)] = (13));

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
});})(c__27023__auto___27709,tc,fc))
;
return ((function (switch__26911__auto__,c__27023__auto___27709,tc,fc){
return (function() {
var cljs$core$async$state_machine__26912__auto__ = null;
var cljs$core$async$state_machine__26912__auto____0 = (function (){
var statearr_27701 = [null,null,null,null,null,null,null,null,null];
(statearr_27701[(0)] = cljs$core$async$state_machine__26912__auto__);

(statearr_27701[(1)] = (1));

return statearr_27701;
});
var cljs$core$async$state_machine__26912__auto____1 = (function (state_27680){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_27680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e27702){if((e27702 instanceof Object)){
var ex__26915__auto__ = e27702;
var statearr_27703_27724 = state_27680;
(statearr_27703_27724[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27725 = state_27680;
state_27680 = G__27725;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
cljs$core$async$state_machine__26912__auto__ = function(state_27680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26912__auto____1.call(this,state_27680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26912__auto____0;
cljs$core$async$state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26912__auto____1;
return cljs$core$async$state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto___27709,tc,fc))
})();
var state__27025__auto__ = (function (){var statearr_27704 = f__27024__auto__.call(null);
(statearr_27704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto___27709);

return statearr_27704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___27709,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto__){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto__){
return (function (state_27789){
var state_val_27790 = (state_27789[(1)]);
if((state_val_27790 === (7))){
var inst_27785 = (state_27789[(2)]);
var state_27789__$1 = state_27789;
var statearr_27791_27812 = state_27789__$1;
(statearr_27791_27812[(2)] = inst_27785);

(statearr_27791_27812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (1))){
var inst_27769 = init;
var state_27789__$1 = (function (){var statearr_27792 = state_27789;
(statearr_27792[(7)] = inst_27769);

return statearr_27792;
})();
var statearr_27793_27813 = state_27789__$1;
(statearr_27793_27813[(2)] = null);

(statearr_27793_27813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (4))){
var inst_27772 = (state_27789[(8)]);
var inst_27772__$1 = (state_27789[(2)]);
var inst_27773 = (inst_27772__$1 == null);
var state_27789__$1 = (function (){var statearr_27794 = state_27789;
(statearr_27794[(8)] = inst_27772__$1);

return statearr_27794;
})();
if(cljs.core.truth_(inst_27773)){
var statearr_27795_27814 = state_27789__$1;
(statearr_27795_27814[(1)] = (5));

} else {
var statearr_27796_27815 = state_27789__$1;
(statearr_27796_27815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (6))){
var inst_27769 = (state_27789[(7)]);
var inst_27776 = (state_27789[(9)]);
var inst_27772 = (state_27789[(8)]);
var inst_27776__$1 = f.call(null,inst_27769,inst_27772);
var inst_27777 = cljs.core.reduced_QMARK_.call(null,inst_27776__$1);
var state_27789__$1 = (function (){var statearr_27797 = state_27789;
(statearr_27797[(9)] = inst_27776__$1);

return statearr_27797;
})();
if(inst_27777){
var statearr_27798_27816 = state_27789__$1;
(statearr_27798_27816[(1)] = (8));

} else {
var statearr_27799_27817 = state_27789__$1;
(statearr_27799_27817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (3))){
var inst_27787 = (state_27789[(2)]);
var state_27789__$1 = state_27789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27789__$1,inst_27787);
} else {
if((state_val_27790 === (2))){
var state_27789__$1 = state_27789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27789__$1,(4),ch);
} else {
if((state_val_27790 === (9))){
var inst_27776 = (state_27789[(9)]);
var inst_27769 = inst_27776;
var state_27789__$1 = (function (){var statearr_27800 = state_27789;
(statearr_27800[(7)] = inst_27769);

return statearr_27800;
})();
var statearr_27801_27818 = state_27789__$1;
(statearr_27801_27818[(2)] = null);

(statearr_27801_27818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (5))){
var inst_27769 = (state_27789[(7)]);
var state_27789__$1 = state_27789;
var statearr_27802_27819 = state_27789__$1;
(statearr_27802_27819[(2)] = inst_27769);

(statearr_27802_27819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (10))){
var inst_27783 = (state_27789[(2)]);
var state_27789__$1 = state_27789;
var statearr_27803_27820 = state_27789__$1;
(statearr_27803_27820[(2)] = inst_27783);

(statearr_27803_27820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27790 === (8))){
var inst_27776 = (state_27789[(9)]);
var inst_27779 = cljs.core.deref.call(null,inst_27776);
var state_27789__$1 = state_27789;
var statearr_27804_27821 = state_27789__$1;
(statearr_27804_27821[(2)] = inst_27779);

(statearr_27804_27821[(1)] = (10));


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
});})(c__27023__auto__))
;
return ((function (switch__26911__auto__,c__27023__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26912__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26912__auto____0 = (function (){
var statearr_27808 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27808[(0)] = cljs$core$async$reduce_$_state_machine__26912__auto__);

(statearr_27808[(1)] = (1));

return statearr_27808;
});
var cljs$core$async$reduce_$_state_machine__26912__auto____1 = (function (state_27789){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_27789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e27809){if((e27809 instanceof Object)){
var ex__26915__auto__ = e27809;
var statearr_27810_27822 = state_27789;
(statearr_27810_27822[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27823 = state_27789;
state_27789 = G__27823;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26912__auto__ = function(state_27789){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26912__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26912__auto____1.call(this,state_27789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26912__auto____0;
cljs$core$async$reduce_$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26912__auto____1;
return cljs$core$async$reduce_$_state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto__))
})();
var state__27025__auto__ = (function (){var statearr_27811 = f__27024__auto__.call(null);
(statearr_27811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto__);

return statearr_27811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto__))
);

return c__27023__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args27824 = [];
var len__25852__auto___27876 = arguments.length;
var i__25853__auto___27877 = (0);
while(true){
if((i__25853__auto___27877 < len__25852__auto___27876)){
args27824.push((arguments[i__25853__auto___27877]));

var G__27878 = (i__25853__auto___27877 + (1));
i__25853__auto___27877 = G__27878;
continue;
} else {
}
break;
}

var G__27826 = args27824.length;
switch (G__27826) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27824.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto__){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto__){
return (function (state_27851){
var state_val_27852 = (state_27851[(1)]);
if((state_val_27852 === (7))){
var inst_27833 = (state_27851[(2)]);
var state_27851__$1 = state_27851;
var statearr_27853_27880 = state_27851__$1;
(statearr_27853_27880[(2)] = inst_27833);

(statearr_27853_27880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (1))){
var inst_27827 = cljs.core.seq.call(null,coll);
var inst_27828 = inst_27827;
var state_27851__$1 = (function (){var statearr_27854 = state_27851;
(statearr_27854[(7)] = inst_27828);

return statearr_27854;
})();
var statearr_27855_27881 = state_27851__$1;
(statearr_27855_27881[(2)] = null);

(statearr_27855_27881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (4))){
var inst_27828 = (state_27851[(7)]);
var inst_27831 = cljs.core.first.call(null,inst_27828);
var state_27851__$1 = state_27851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27851__$1,(7),ch,inst_27831);
} else {
if((state_val_27852 === (13))){
var inst_27845 = (state_27851[(2)]);
var state_27851__$1 = state_27851;
var statearr_27856_27882 = state_27851__$1;
(statearr_27856_27882[(2)] = inst_27845);

(statearr_27856_27882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (6))){
var inst_27836 = (state_27851[(2)]);
var state_27851__$1 = state_27851;
if(cljs.core.truth_(inst_27836)){
var statearr_27857_27883 = state_27851__$1;
(statearr_27857_27883[(1)] = (8));

} else {
var statearr_27858_27884 = state_27851__$1;
(statearr_27858_27884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (3))){
var inst_27849 = (state_27851[(2)]);
var state_27851__$1 = state_27851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27851__$1,inst_27849);
} else {
if((state_val_27852 === (12))){
var state_27851__$1 = state_27851;
var statearr_27859_27885 = state_27851__$1;
(statearr_27859_27885[(2)] = null);

(statearr_27859_27885[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (2))){
var inst_27828 = (state_27851[(7)]);
var state_27851__$1 = state_27851;
if(cljs.core.truth_(inst_27828)){
var statearr_27860_27886 = state_27851__$1;
(statearr_27860_27886[(1)] = (4));

} else {
var statearr_27861_27887 = state_27851__$1;
(statearr_27861_27887[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (11))){
var inst_27842 = cljs.core.async.close_BANG_.call(null,ch);
var state_27851__$1 = state_27851;
var statearr_27862_27888 = state_27851__$1;
(statearr_27862_27888[(2)] = inst_27842);

(statearr_27862_27888[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (9))){
var state_27851__$1 = state_27851;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27863_27889 = state_27851__$1;
(statearr_27863_27889[(1)] = (11));

} else {
var statearr_27864_27890 = state_27851__$1;
(statearr_27864_27890[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (5))){
var inst_27828 = (state_27851[(7)]);
var state_27851__$1 = state_27851;
var statearr_27865_27891 = state_27851__$1;
(statearr_27865_27891[(2)] = inst_27828);

(statearr_27865_27891[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (10))){
var inst_27847 = (state_27851[(2)]);
var state_27851__$1 = state_27851;
var statearr_27866_27892 = state_27851__$1;
(statearr_27866_27892[(2)] = inst_27847);

(statearr_27866_27892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27852 === (8))){
var inst_27828 = (state_27851[(7)]);
var inst_27838 = cljs.core.next.call(null,inst_27828);
var inst_27828__$1 = inst_27838;
var state_27851__$1 = (function (){var statearr_27867 = state_27851;
(statearr_27867[(7)] = inst_27828__$1);

return statearr_27867;
})();
var statearr_27868_27893 = state_27851__$1;
(statearr_27868_27893[(2)] = null);

(statearr_27868_27893[(1)] = (2));


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
});})(c__27023__auto__))
;
return ((function (switch__26911__auto__,c__27023__auto__){
return (function() {
var cljs$core$async$state_machine__26912__auto__ = null;
var cljs$core$async$state_machine__26912__auto____0 = (function (){
var statearr_27872 = [null,null,null,null,null,null,null,null];
(statearr_27872[(0)] = cljs$core$async$state_machine__26912__auto__);

(statearr_27872[(1)] = (1));

return statearr_27872;
});
var cljs$core$async$state_machine__26912__auto____1 = (function (state_27851){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_27851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e27873){if((e27873 instanceof Object)){
var ex__26915__auto__ = e27873;
var statearr_27874_27894 = state_27851;
(statearr_27874_27894[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27895 = state_27851;
state_27851 = G__27895;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
cljs$core$async$state_machine__26912__auto__ = function(state_27851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26912__auto____1.call(this,state_27851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26912__auto____0;
cljs$core$async$state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26912__auto____1;
return cljs$core$async$state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto__))
})();
var state__27025__auto__ = (function (){var statearr_27875 = f__27024__auto__.call(null);
(statearr_27875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto__);

return statearr_27875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto__))
);

return c__27023__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25440__auto__ = (((_ == null))?null:_);
var m__25441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,_);
} else {
var m__25441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25440__auto__ = (((m == null))?null:m);
var m__25441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25440__auto__ = (((m == null))?null:m);
var m__25441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,m,ch);
} else {
var m__25441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25440__auto__ = (((m == null))?null:m);
var m__25441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,m);
} else {
var m__25441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28121 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28121 = (function (mult,ch,cs,meta28122){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28122 = meta28122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28123,meta28122__$1){
var self__ = this;
var _28123__$1 = this;
return (new cljs.core.async.t_cljs$core$async28121(self__.mult,self__.ch,self__.cs,meta28122__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28121.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28123){
var self__ = this;
var _28123__$1 = this;
return self__.meta28122;
});})(cs))
;

cljs.core.async.t_cljs$core$async28121.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28121.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28121.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28121.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28121.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28121.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28121.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28122","meta28122",-11022984,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28121.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28121";

cljs.core.async.t_cljs$core$async28121.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async28121");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28121 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28121(mult__$1,ch__$1,cs__$1,meta28122){
return (new cljs.core.async.t_cljs$core$async28121(mult__$1,ch__$1,cs__$1,meta28122));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28121(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27023__auto___28346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___28346,cs,m,dchan,dctr,done){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto___28346,cs,m,dchan,dctr,done){
return (function (state_28258){
var state_val_28259 = (state_28258[(1)]);
if((state_val_28259 === (7))){
var inst_28254 = (state_28258[(2)]);
var state_28258__$1 = state_28258;
var statearr_28260_28347 = state_28258__$1;
(statearr_28260_28347[(2)] = inst_28254);

(statearr_28260_28347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (20))){
var inst_28157 = (state_28258[(7)]);
var inst_28169 = cljs.core.first.call(null,inst_28157);
var inst_28170 = cljs.core.nth.call(null,inst_28169,(0),null);
var inst_28171 = cljs.core.nth.call(null,inst_28169,(1),null);
var state_28258__$1 = (function (){var statearr_28261 = state_28258;
(statearr_28261[(8)] = inst_28170);

return statearr_28261;
})();
if(cljs.core.truth_(inst_28171)){
var statearr_28262_28348 = state_28258__$1;
(statearr_28262_28348[(1)] = (22));

} else {
var statearr_28263_28349 = state_28258__$1;
(statearr_28263_28349[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (27))){
var inst_28206 = (state_28258[(9)]);
var inst_28126 = (state_28258[(10)]);
var inst_28199 = (state_28258[(11)]);
var inst_28201 = (state_28258[(12)]);
var inst_28206__$1 = cljs.core._nth.call(null,inst_28199,inst_28201);
var inst_28207 = cljs.core.async.put_BANG_.call(null,inst_28206__$1,inst_28126,done);
var state_28258__$1 = (function (){var statearr_28264 = state_28258;
(statearr_28264[(9)] = inst_28206__$1);

return statearr_28264;
})();
if(cljs.core.truth_(inst_28207)){
var statearr_28265_28350 = state_28258__$1;
(statearr_28265_28350[(1)] = (30));

} else {
var statearr_28266_28351 = state_28258__$1;
(statearr_28266_28351[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (1))){
var state_28258__$1 = state_28258;
var statearr_28267_28352 = state_28258__$1;
(statearr_28267_28352[(2)] = null);

(statearr_28267_28352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (24))){
var inst_28157 = (state_28258[(7)]);
var inst_28176 = (state_28258[(2)]);
var inst_28177 = cljs.core.next.call(null,inst_28157);
var inst_28135 = inst_28177;
var inst_28136 = null;
var inst_28137 = (0);
var inst_28138 = (0);
var state_28258__$1 = (function (){var statearr_28268 = state_28258;
(statearr_28268[(13)] = inst_28136);

(statearr_28268[(14)] = inst_28135);

(statearr_28268[(15)] = inst_28176);

(statearr_28268[(16)] = inst_28138);

(statearr_28268[(17)] = inst_28137);

return statearr_28268;
})();
var statearr_28269_28353 = state_28258__$1;
(statearr_28269_28353[(2)] = null);

(statearr_28269_28353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (39))){
var state_28258__$1 = state_28258;
var statearr_28273_28354 = state_28258__$1;
(statearr_28273_28354[(2)] = null);

(statearr_28273_28354[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (4))){
var inst_28126 = (state_28258[(10)]);
var inst_28126__$1 = (state_28258[(2)]);
var inst_28127 = (inst_28126__$1 == null);
var state_28258__$1 = (function (){var statearr_28274 = state_28258;
(statearr_28274[(10)] = inst_28126__$1);

return statearr_28274;
})();
if(cljs.core.truth_(inst_28127)){
var statearr_28275_28355 = state_28258__$1;
(statearr_28275_28355[(1)] = (5));

} else {
var statearr_28276_28356 = state_28258__$1;
(statearr_28276_28356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (15))){
var inst_28136 = (state_28258[(13)]);
var inst_28135 = (state_28258[(14)]);
var inst_28138 = (state_28258[(16)]);
var inst_28137 = (state_28258[(17)]);
var inst_28153 = (state_28258[(2)]);
var inst_28154 = (inst_28138 + (1));
var tmp28270 = inst_28136;
var tmp28271 = inst_28135;
var tmp28272 = inst_28137;
var inst_28135__$1 = tmp28271;
var inst_28136__$1 = tmp28270;
var inst_28137__$1 = tmp28272;
var inst_28138__$1 = inst_28154;
var state_28258__$1 = (function (){var statearr_28277 = state_28258;
(statearr_28277[(13)] = inst_28136__$1);

(statearr_28277[(14)] = inst_28135__$1);

(statearr_28277[(18)] = inst_28153);

(statearr_28277[(16)] = inst_28138__$1);

(statearr_28277[(17)] = inst_28137__$1);

return statearr_28277;
})();
var statearr_28278_28357 = state_28258__$1;
(statearr_28278_28357[(2)] = null);

(statearr_28278_28357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (21))){
var inst_28180 = (state_28258[(2)]);
var state_28258__$1 = state_28258;
var statearr_28282_28358 = state_28258__$1;
(statearr_28282_28358[(2)] = inst_28180);

(statearr_28282_28358[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (31))){
var inst_28206 = (state_28258[(9)]);
var inst_28210 = done.call(null,null);
var inst_28211 = cljs.core.async.untap_STAR_.call(null,m,inst_28206);
var state_28258__$1 = (function (){var statearr_28283 = state_28258;
(statearr_28283[(19)] = inst_28210);

return statearr_28283;
})();
var statearr_28284_28359 = state_28258__$1;
(statearr_28284_28359[(2)] = inst_28211);

(statearr_28284_28359[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (32))){
var inst_28199 = (state_28258[(11)]);
var inst_28200 = (state_28258[(20)]);
var inst_28201 = (state_28258[(12)]);
var inst_28198 = (state_28258[(21)]);
var inst_28213 = (state_28258[(2)]);
var inst_28214 = (inst_28201 + (1));
var tmp28279 = inst_28199;
var tmp28280 = inst_28200;
var tmp28281 = inst_28198;
var inst_28198__$1 = tmp28281;
var inst_28199__$1 = tmp28279;
var inst_28200__$1 = tmp28280;
var inst_28201__$1 = inst_28214;
var state_28258__$1 = (function (){var statearr_28285 = state_28258;
(statearr_28285[(22)] = inst_28213);

(statearr_28285[(11)] = inst_28199__$1);

(statearr_28285[(20)] = inst_28200__$1);

(statearr_28285[(12)] = inst_28201__$1);

(statearr_28285[(21)] = inst_28198__$1);

return statearr_28285;
})();
var statearr_28286_28360 = state_28258__$1;
(statearr_28286_28360[(2)] = null);

(statearr_28286_28360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (40))){
var inst_28226 = (state_28258[(23)]);
var inst_28230 = done.call(null,null);
var inst_28231 = cljs.core.async.untap_STAR_.call(null,m,inst_28226);
var state_28258__$1 = (function (){var statearr_28287 = state_28258;
(statearr_28287[(24)] = inst_28230);

return statearr_28287;
})();
var statearr_28288_28361 = state_28258__$1;
(statearr_28288_28361[(2)] = inst_28231);

(statearr_28288_28361[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (33))){
var inst_28217 = (state_28258[(25)]);
var inst_28219 = cljs.core.chunked_seq_QMARK_.call(null,inst_28217);
var state_28258__$1 = state_28258;
if(inst_28219){
var statearr_28289_28362 = state_28258__$1;
(statearr_28289_28362[(1)] = (36));

} else {
var statearr_28290_28363 = state_28258__$1;
(statearr_28290_28363[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (13))){
var inst_28147 = (state_28258[(26)]);
var inst_28150 = cljs.core.async.close_BANG_.call(null,inst_28147);
var state_28258__$1 = state_28258;
var statearr_28291_28364 = state_28258__$1;
(statearr_28291_28364[(2)] = inst_28150);

(statearr_28291_28364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (22))){
var inst_28170 = (state_28258[(8)]);
var inst_28173 = cljs.core.async.close_BANG_.call(null,inst_28170);
var state_28258__$1 = state_28258;
var statearr_28292_28365 = state_28258__$1;
(statearr_28292_28365[(2)] = inst_28173);

(statearr_28292_28365[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (36))){
var inst_28217 = (state_28258[(25)]);
var inst_28221 = cljs.core.chunk_first.call(null,inst_28217);
var inst_28222 = cljs.core.chunk_rest.call(null,inst_28217);
var inst_28223 = cljs.core.count.call(null,inst_28221);
var inst_28198 = inst_28222;
var inst_28199 = inst_28221;
var inst_28200 = inst_28223;
var inst_28201 = (0);
var state_28258__$1 = (function (){var statearr_28293 = state_28258;
(statearr_28293[(11)] = inst_28199);

(statearr_28293[(20)] = inst_28200);

(statearr_28293[(12)] = inst_28201);

(statearr_28293[(21)] = inst_28198);

return statearr_28293;
})();
var statearr_28294_28366 = state_28258__$1;
(statearr_28294_28366[(2)] = null);

(statearr_28294_28366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (41))){
var inst_28217 = (state_28258[(25)]);
var inst_28233 = (state_28258[(2)]);
var inst_28234 = cljs.core.next.call(null,inst_28217);
var inst_28198 = inst_28234;
var inst_28199 = null;
var inst_28200 = (0);
var inst_28201 = (0);
var state_28258__$1 = (function (){var statearr_28295 = state_28258;
(statearr_28295[(11)] = inst_28199);

(statearr_28295[(20)] = inst_28200);

(statearr_28295[(12)] = inst_28201);

(statearr_28295[(21)] = inst_28198);

(statearr_28295[(27)] = inst_28233);

return statearr_28295;
})();
var statearr_28296_28367 = state_28258__$1;
(statearr_28296_28367[(2)] = null);

(statearr_28296_28367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (43))){
var state_28258__$1 = state_28258;
var statearr_28297_28368 = state_28258__$1;
(statearr_28297_28368[(2)] = null);

(statearr_28297_28368[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (29))){
var inst_28242 = (state_28258[(2)]);
var state_28258__$1 = state_28258;
var statearr_28298_28369 = state_28258__$1;
(statearr_28298_28369[(2)] = inst_28242);

(statearr_28298_28369[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (44))){
var inst_28251 = (state_28258[(2)]);
var state_28258__$1 = (function (){var statearr_28299 = state_28258;
(statearr_28299[(28)] = inst_28251);

return statearr_28299;
})();
var statearr_28300_28370 = state_28258__$1;
(statearr_28300_28370[(2)] = null);

(statearr_28300_28370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (6))){
var inst_28190 = (state_28258[(29)]);
var inst_28189 = cljs.core.deref.call(null,cs);
var inst_28190__$1 = cljs.core.keys.call(null,inst_28189);
var inst_28191 = cljs.core.count.call(null,inst_28190__$1);
var inst_28192 = cljs.core.reset_BANG_.call(null,dctr,inst_28191);
var inst_28197 = cljs.core.seq.call(null,inst_28190__$1);
var inst_28198 = inst_28197;
var inst_28199 = null;
var inst_28200 = (0);
var inst_28201 = (0);
var state_28258__$1 = (function (){var statearr_28301 = state_28258;
(statearr_28301[(11)] = inst_28199);

(statearr_28301[(29)] = inst_28190__$1);

(statearr_28301[(20)] = inst_28200);

(statearr_28301[(12)] = inst_28201);

(statearr_28301[(21)] = inst_28198);

(statearr_28301[(30)] = inst_28192);

return statearr_28301;
})();
var statearr_28302_28371 = state_28258__$1;
(statearr_28302_28371[(2)] = null);

(statearr_28302_28371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (28))){
var inst_28217 = (state_28258[(25)]);
var inst_28198 = (state_28258[(21)]);
var inst_28217__$1 = cljs.core.seq.call(null,inst_28198);
var state_28258__$1 = (function (){var statearr_28303 = state_28258;
(statearr_28303[(25)] = inst_28217__$1);

return statearr_28303;
})();
if(inst_28217__$1){
var statearr_28304_28372 = state_28258__$1;
(statearr_28304_28372[(1)] = (33));

} else {
var statearr_28305_28373 = state_28258__$1;
(statearr_28305_28373[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (25))){
var inst_28200 = (state_28258[(20)]);
var inst_28201 = (state_28258[(12)]);
var inst_28203 = (inst_28201 < inst_28200);
var inst_28204 = inst_28203;
var state_28258__$1 = state_28258;
if(cljs.core.truth_(inst_28204)){
var statearr_28306_28374 = state_28258__$1;
(statearr_28306_28374[(1)] = (27));

} else {
var statearr_28307_28375 = state_28258__$1;
(statearr_28307_28375[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (34))){
var state_28258__$1 = state_28258;
var statearr_28308_28376 = state_28258__$1;
(statearr_28308_28376[(2)] = null);

(statearr_28308_28376[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (17))){
var state_28258__$1 = state_28258;
var statearr_28309_28377 = state_28258__$1;
(statearr_28309_28377[(2)] = null);

(statearr_28309_28377[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (3))){
var inst_28256 = (state_28258[(2)]);
var state_28258__$1 = state_28258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28258__$1,inst_28256);
} else {
if((state_val_28259 === (12))){
var inst_28185 = (state_28258[(2)]);
var state_28258__$1 = state_28258;
var statearr_28310_28378 = state_28258__$1;
(statearr_28310_28378[(2)] = inst_28185);

(statearr_28310_28378[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (2))){
var state_28258__$1 = state_28258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28258__$1,(4),ch);
} else {
if((state_val_28259 === (23))){
var state_28258__$1 = state_28258;
var statearr_28311_28379 = state_28258__$1;
(statearr_28311_28379[(2)] = null);

(statearr_28311_28379[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (35))){
var inst_28240 = (state_28258[(2)]);
var state_28258__$1 = state_28258;
var statearr_28312_28380 = state_28258__$1;
(statearr_28312_28380[(2)] = inst_28240);

(statearr_28312_28380[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (19))){
var inst_28157 = (state_28258[(7)]);
var inst_28161 = cljs.core.chunk_first.call(null,inst_28157);
var inst_28162 = cljs.core.chunk_rest.call(null,inst_28157);
var inst_28163 = cljs.core.count.call(null,inst_28161);
var inst_28135 = inst_28162;
var inst_28136 = inst_28161;
var inst_28137 = inst_28163;
var inst_28138 = (0);
var state_28258__$1 = (function (){var statearr_28313 = state_28258;
(statearr_28313[(13)] = inst_28136);

(statearr_28313[(14)] = inst_28135);

(statearr_28313[(16)] = inst_28138);

(statearr_28313[(17)] = inst_28137);

return statearr_28313;
})();
var statearr_28314_28381 = state_28258__$1;
(statearr_28314_28381[(2)] = null);

(statearr_28314_28381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (11))){
var inst_28135 = (state_28258[(14)]);
var inst_28157 = (state_28258[(7)]);
var inst_28157__$1 = cljs.core.seq.call(null,inst_28135);
var state_28258__$1 = (function (){var statearr_28315 = state_28258;
(statearr_28315[(7)] = inst_28157__$1);

return statearr_28315;
})();
if(inst_28157__$1){
var statearr_28316_28382 = state_28258__$1;
(statearr_28316_28382[(1)] = (16));

} else {
var statearr_28317_28383 = state_28258__$1;
(statearr_28317_28383[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (9))){
var inst_28187 = (state_28258[(2)]);
var state_28258__$1 = state_28258;
var statearr_28318_28384 = state_28258__$1;
(statearr_28318_28384[(2)] = inst_28187);

(statearr_28318_28384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (5))){
var inst_28133 = cljs.core.deref.call(null,cs);
var inst_28134 = cljs.core.seq.call(null,inst_28133);
var inst_28135 = inst_28134;
var inst_28136 = null;
var inst_28137 = (0);
var inst_28138 = (0);
var state_28258__$1 = (function (){var statearr_28319 = state_28258;
(statearr_28319[(13)] = inst_28136);

(statearr_28319[(14)] = inst_28135);

(statearr_28319[(16)] = inst_28138);

(statearr_28319[(17)] = inst_28137);

return statearr_28319;
})();
var statearr_28320_28385 = state_28258__$1;
(statearr_28320_28385[(2)] = null);

(statearr_28320_28385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (14))){
var state_28258__$1 = state_28258;
var statearr_28321_28386 = state_28258__$1;
(statearr_28321_28386[(2)] = null);

(statearr_28321_28386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (45))){
var inst_28248 = (state_28258[(2)]);
var state_28258__$1 = state_28258;
var statearr_28322_28387 = state_28258__$1;
(statearr_28322_28387[(2)] = inst_28248);

(statearr_28322_28387[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (26))){
var inst_28190 = (state_28258[(29)]);
var inst_28244 = (state_28258[(2)]);
var inst_28245 = cljs.core.seq.call(null,inst_28190);
var state_28258__$1 = (function (){var statearr_28323 = state_28258;
(statearr_28323[(31)] = inst_28244);

return statearr_28323;
})();
if(inst_28245){
var statearr_28324_28388 = state_28258__$1;
(statearr_28324_28388[(1)] = (42));

} else {
var statearr_28325_28389 = state_28258__$1;
(statearr_28325_28389[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (16))){
var inst_28157 = (state_28258[(7)]);
var inst_28159 = cljs.core.chunked_seq_QMARK_.call(null,inst_28157);
var state_28258__$1 = state_28258;
if(inst_28159){
var statearr_28326_28390 = state_28258__$1;
(statearr_28326_28390[(1)] = (19));

} else {
var statearr_28327_28391 = state_28258__$1;
(statearr_28327_28391[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (38))){
var inst_28237 = (state_28258[(2)]);
var state_28258__$1 = state_28258;
var statearr_28328_28392 = state_28258__$1;
(statearr_28328_28392[(2)] = inst_28237);

(statearr_28328_28392[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (30))){
var state_28258__$1 = state_28258;
var statearr_28329_28393 = state_28258__$1;
(statearr_28329_28393[(2)] = null);

(statearr_28329_28393[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (10))){
var inst_28136 = (state_28258[(13)]);
var inst_28138 = (state_28258[(16)]);
var inst_28146 = cljs.core._nth.call(null,inst_28136,inst_28138);
var inst_28147 = cljs.core.nth.call(null,inst_28146,(0),null);
var inst_28148 = cljs.core.nth.call(null,inst_28146,(1),null);
var state_28258__$1 = (function (){var statearr_28330 = state_28258;
(statearr_28330[(26)] = inst_28147);

return statearr_28330;
})();
if(cljs.core.truth_(inst_28148)){
var statearr_28331_28394 = state_28258__$1;
(statearr_28331_28394[(1)] = (13));

} else {
var statearr_28332_28395 = state_28258__$1;
(statearr_28332_28395[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (18))){
var inst_28183 = (state_28258[(2)]);
var state_28258__$1 = state_28258;
var statearr_28333_28396 = state_28258__$1;
(statearr_28333_28396[(2)] = inst_28183);

(statearr_28333_28396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (42))){
var state_28258__$1 = state_28258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28258__$1,(45),dchan);
} else {
if((state_val_28259 === (37))){
var inst_28126 = (state_28258[(10)]);
var inst_28217 = (state_28258[(25)]);
var inst_28226 = (state_28258[(23)]);
var inst_28226__$1 = cljs.core.first.call(null,inst_28217);
var inst_28227 = cljs.core.async.put_BANG_.call(null,inst_28226__$1,inst_28126,done);
var state_28258__$1 = (function (){var statearr_28334 = state_28258;
(statearr_28334[(23)] = inst_28226__$1);

return statearr_28334;
})();
if(cljs.core.truth_(inst_28227)){
var statearr_28335_28397 = state_28258__$1;
(statearr_28335_28397[(1)] = (39));

} else {
var statearr_28336_28398 = state_28258__$1;
(statearr_28336_28398[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (8))){
var inst_28138 = (state_28258[(16)]);
var inst_28137 = (state_28258[(17)]);
var inst_28140 = (inst_28138 < inst_28137);
var inst_28141 = inst_28140;
var state_28258__$1 = state_28258;
if(cljs.core.truth_(inst_28141)){
var statearr_28337_28399 = state_28258__$1;
(statearr_28337_28399[(1)] = (10));

} else {
var statearr_28338_28400 = state_28258__$1;
(statearr_28338_28400[(1)] = (11));

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
});})(c__27023__auto___28346,cs,m,dchan,dctr,done))
;
return ((function (switch__26911__auto__,c__27023__auto___28346,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26912__auto__ = null;
var cljs$core$async$mult_$_state_machine__26912__auto____0 = (function (){
var statearr_28342 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28342[(0)] = cljs$core$async$mult_$_state_machine__26912__auto__);

(statearr_28342[(1)] = (1));

return statearr_28342;
});
var cljs$core$async$mult_$_state_machine__26912__auto____1 = (function (state_28258){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_28258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e28343){if((e28343 instanceof Object)){
var ex__26915__auto__ = e28343;
var statearr_28344_28401 = state_28258;
(statearr_28344_28401[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28402 = state_28258;
state_28258 = G__28402;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26912__auto__ = function(state_28258){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26912__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26912__auto____1.call(this,state_28258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26912__auto____0;
cljs$core$async$mult_$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26912__auto____1;
return cljs$core$async$mult_$_state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto___28346,cs,m,dchan,dctr,done))
})();
var state__27025__auto__ = (function (){var statearr_28345 = f__27024__auto__.call(null);
(statearr_28345[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto___28346);

return statearr_28345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___28346,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28403 = [];
var len__25852__auto___28406 = arguments.length;
var i__25853__auto___28407 = (0);
while(true){
if((i__25853__auto___28407 < len__25852__auto___28406)){
args28403.push((arguments[i__25853__auto___28407]));

var G__28408 = (i__25853__auto___28407 + (1));
i__25853__auto___28407 = G__28408;
continue;
} else {
}
break;
}

var G__28405 = args28403.length;
switch (G__28405) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28403.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25440__auto__ = (((m == null))?null:m);
var m__25441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,m,ch);
} else {
var m__25441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25440__auto__ = (((m == null))?null:m);
var m__25441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,m,ch);
} else {
var m__25441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25440__auto__ = (((m == null))?null:m);
var m__25441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,m);
} else {
var m__25441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25440__auto__ = (((m == null))?null:m);
var m__25441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,m,state_map);
} else {
var m__25441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25440__auto__ = (((m == null))?null:m);
var m__25441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,m,mode);
} else {
var m__25441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25859__auto__ = [];
var len__25852__auto___28420 = arguments.length;
var i__25853__auto___28421 = (0);
while(true){
if((i__25853__auto___28421 < len__25852__auto___28420)){
args__25859__auto__.push((arguments[i__25853__auto___28421]));

var G__28422 = (i__25853__auto___28421 + (1));
i__25853__auto___28421 = G__28422;
continue;
} else {
}
break;
}

var argseq__25860__auto__ = ((((3) < args__25859__auto__.length))?(new cljs.core.IndexedSeq(args__25859__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25860__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28414){
var map__28415 = p__28414;
var map__28415__$1 = ((((!((map__28415 == null)))?((((map__28415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28415):map__28415);
var opts = map__28415__$1;
var statearr_28417_28423 = state;
(statearr_28417_28423[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28415,map__28415__$1,opts){
return (function (val){
var statearr_28418_28424 = state;
(statearr_28418_28424[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28415,map__28415__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28419_28425 = state;
(statearr_28419_28425[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28410){
var G__28411 = cljs.core.first.call(null,seq28410);
var seq28410__$1 = cljs.core.next.call(null,seq28410);
var G__28412 = cljs.core.first.call(null,seq28410__$1);
var seq28410__$2 = cljs.core.next.call(null,seq28410__$1);
var G__28413 = cljs.core.first.call(null,seq28410__$2);
var seq28410__$3 = cljs.core.next.call(null,seq28410__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28411,G__28412,G__28413,seq28410__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28591 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28591 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28592){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28592 = meta28592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28593,meta28592__$1){
var self__ = this;
var _28593__$1 = this;
return (new cljs.core.async.t_cljs$core$async28591(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28592__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28591.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28593){
var self__ = this;
var _28593__$1 = this;
return self__.meta28592;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28591.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28591.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28591.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28591.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28591.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28591.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28591.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28591.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28591.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28592","meta28592",1334426534,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28591";

cljs.core.async.t_cljs$core$async28591.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async28591");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28591 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28591(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28592){
return (new cljs.core.async.t_cljs$core$async28591(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28592));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28591(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27023__auto___28756 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___28756,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto___28756,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28693){
var state_val_28694 = (state_28693[(1)]);
if((state_val_28694 === (7))){
var inst_28609 = (state_28693[(2)]);
var state_28693__$1 = state_28693;
var statearr_28695_28757 = state_28693__$1;
(statearr_28695_28757[(2)] = inst_28609);

(statearr_28695_28757[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (20))){
var inst_28621 = (state_28693[(7)]);
var state_28693__$1 = state_28693;
var statearr_28696_28758 = state_28693__$1;
(statearr_28696_28758[(2)] = inst_28621);

(statearr_28696_28758[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (27))){
var state_28693__$1 = state_28693;
var statearr_28697_28759 = state_28693__$1;
(statearr_28697_28759[(2)] = null);

(statearr_28697_28759[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (1))){
var inst_28597 = (state_28693[(8)]);
var inst_28597__$1 = calc_state.call(null);
var inst_28599 = (inst_28597__$1 == null);
var inst_28600 = cljs.core.not.call(null,inst_28599);
var state_28693__$1 = (function (){var statearr_28698 = state_28693;
(statearr_28698[(8)] = inst_28597__$1);

return statearr_28698;
})();
if(inst_28600){
var statearr_28699_28760 = state_28693__$1;
(statearr_28699_28760[(1)] = (2));

} else {
var statearr_28700_28761 = state_28693__$1;
(statearr_28700_28761[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (24))){
var inst_28653 = (state_28693[(9)]);
var inst_28667 = (state_28693[(10)]);
var inst_28644 = (state_28693[(11)]);
var inst_28667__$1 = inst_28644.call(null,inst_28653);
var state_28693__$1 = (function (){var statearr_28701 = state_28693;
(statearr_28701[(10)] = inst_28667__$1);

return statearr_28701;
})();
if(cljs.core.truth_(inst_28667__$1)){
var statearr_28702_28762 = state_28693__$1;
(statearr_28702_28762[(1)] = (29));

} else {
var statearr_28703_28763 = state_28693__$1;
(statearr_28703_28763[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (4))){
var inst_28612 = (state_28693[(2)]);
var state_28693__$1 = state_28693;
if(cljs.core.truth_(inst_28612)){
var statearr_28704_28764 = state_28693__$1;
(statearr_28704_28764[(1)] = (8));

} else {
var statearr_28705_28765 = state_28693__$1;
(statearr_28705_28765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (15))){
var inst_28638 = (state_28693[(2)]);
var state_28693__$1 = state_28693;
if(cljs.core.truth_(inst_28638)){
var statearr_28706_28766 = state_28693__$1;
(statearr_28706_28766[(1)] = (19));

} else {
var statearr_28707_28767 = state_28693__$1;
(statearr_28707_28767[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (21))){
var inst_28643 = (state_28693[(12)]);
var inst_28643__$1 = (state_28693[(2)]);
var inst_28644 = cljs.core.get.call(null,inst_28643__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28645 = cljs.core.get.call(null,inst_28643__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28646 = cljs.core.get.call(null,inst_28643__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28693__$1 = (function (){var statearr_28708 = state_28693;
(statearr_28708[(12)] = inst_28643__$1);

(statearr_28708[(13)] = inst_28645);

(statearr_28708[(11)] = inst_28644);

return statearr_28708;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28693__$1,(22),inst_28646);
} else {
if((state_val_28694 === (31))){
var inst_28675 = (state_28693[(2)]);
var state_28693__$1 = state_28693;
if(cljs.core.truth_(inst_28675)){
var statearr_28709_28768 = state_28693__$1;
(statearr_28709_28768[(1)] = (32));

} else {
var statearr_28710_28769 = state_28693__$1;
(statearr_28710_28769[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (32))){
var inst_28652 = (state_28693[(14)]);
var state_28693__$1 = state_28693;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28693__$1,(35),out,inst_28652);
} else {
if((state_val_28694 === (33))){
var inst_28643 = (state_28693[(12)]);
var inst_28621 = inst_28643;
var state_28693__$1 = (function (){var statearr_28711 = state_28693;
(statearr_28711[(7)] = inst_28621);

return statearr_28711;
})();
var statearr_28712_28770 = state_28693__$1;
(statearr_28712_28770[(2)] = null);

(statearr_28712_28770[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (13))){
var inst_28621 = (state_28693[(7)]);
var inst_28628 = inst_28621.cljs$lang$protocol_mask$partition0$;
var inst_28629 = (inst_28628 & (64));
var inst_28630 = inst_28621.cljs$core$ISeq$;
var inst_28631 = (inst_28629) || (inst_28630);
var state_28693__$1 = state_28693;
if(cljs.core.truth_(inst_28631)){
var statearr_28713_28771 = state_28693__$1;
(statearr_28713_28771[(1)] = (16));

} else {
var statearr_28714_28772 = state_28693__$1;
(statearr_28714_28772[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (22))){
var inst_28653 = (state_28693[(9)]);
var inst_28652 = (state_28693[(14)]);
var inst_28651 = (state_28693[(2)]);
var inst_28652__$1 = cljs.core.nth.call(null,inst_28651,(0),null);
var inst_28653__$1 = cljs.core.nth.call(null,inst_28651,(1),null);
var inst_28654 = (inst_28652__$1 == null);
var inst_28655 = cljs.core._EQ_.call(null,inst_28653__$1,change);
var inst_28656 = (inst_28654) || (inst_28655);
var state_28693__$1 = (function (){var statearr_28715 = state_28693;
(statearr_28715[(9)] = inst_28653__$1);

(statearr_28715[(14)] = inst_28652__$1);

return statearr_28715;
})();
if(cljs.core.truth_(inst_28656)){
var statearr_28716_28773 = state_28693__$1;
(statearr_28716_28773[(1)] = (23));

} else {
var statearr_28717_28774 = state_28693__$1;
(statearr_28717_28774[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (36))){
var inst_28643 = (state_28693[(12)]);
var inst_28621 = inst_28643;
var state_28693__$1 = (function (){var statearr_28718 = state_28693;
(statearr_28718[(7)] = inst_28621);

return statearr_28718;
})();
var statearr_28719_28775 = state_28693__$1;
(statearr_28719_28775[(2)] = null);

(statearr_28719_28775[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (29))){
var inst_28667 = (state_28693[(10)]);
var state_28693__$1 = state_28693;
var statearr_28720_28776 = state_28693__$1;
(statearr_28720_28776[(2)] = inst_28667);

(statearr_28720_28776[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (6))){
var state_28693__$1 = state_28693;
var statearr_28721_28777 = state_28693__$1;
(statearr_28721_28777[(2)] = false);

(statearr_28721_28777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (28))){
var inst_28663 = (state_28693[(2)]);
var inst_28664 = calc_state.call(null);
var inst_28621 = inst_28664;
var state_28693__$1 = (function (){var statearr_28722 = state_28693;
(statearr_28722[(7)] = inst_28621);

(statearr_28722[(15)] = inst_28663);

return statearr_28722;
})();
var statearr_28723_28778 = state_28693__$1;
(statearr_28723_28778[(2)] = null);

(statearr_28723_28778[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (25))){
var inst_28689 = (state_28693[(2)]);
var state_28693__$1 = state_28693;
var statearr_28724_28779 = state_28693__$1;
(statearr_28724_28779[(2)] = inst_28689);

(statearr_28724_28779[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (34))){
var inst_28687 = (state_28693[(2)]);
var state_28693__$1 = state_28693;
var statearr_28725_28780 = state_28693__$1;
(statearr_28725_28780[(2)] = inst_28687);

(statearr_28725_28780[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (17))){
var state_28693__$1 = state_28693;
var statearr_28726_28781 = state_28693__$1;
(statearr_28726_28781[(2)] = false);

(statearr_28726_28781[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (3))){
var state_28693__$1 = state_28693;
var statearr_28727_28782 = state_28693__$1;
(statearr_28727_28782[(2)] = false);

(statearr_28727_28782[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (12))){
var inst_28691 = (state_28693[(2)]);
var state_28693__$1 = state_28693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28693__$1,inst_28691);
} else {
if((state_val_28694 === (2))){
var inst_28597 = (state_28693[(8)]);
var inst_28602 = inst_28597.cljs$lang$protocol_mask$partition0$;
var inst_28603 = (inst_28602 & (64));
var inst_28604 = inst_28597.cljs$core$ISeq$;
var inst_28605 = (inst_28603) || (inst_28604);
var state_28693__$1 = state_28693;
if(cljs.core.truth_(inst_28605)){
var statearr_28728_28783 = state_28693__$1;
(statearr_28728_28783[(1)] = (5));

} else {
var statearr_28729_28784 = state_28693__$1;
(statearr_28729_28784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (23))){
var inst_28652 = (state_28693[(14)]);
var inst_28658 = (inst_28652 == null);
var state_28693__$1 = state_28693;
if(cljs.core.truth_(inst_28658)){
var statearr_28730_28785 = state_28693__$1;
(statearr_28730_28785[(1)] = (26));

} else {
var statearr_28731_28786 = state_28693__$1;
(statearr_28731_28786[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (35))){
var inst_28678 = (state_28693[(2)]);
var state_28693__$1 = state_28693;
if(cljs.core.truth_(inst_28678)){
var statearr_28732_28787 = state_28693__$1;
(statearr_28732_28787[(1)] = (36));

} else {
var statearr_28733_28788 = state_28693__$1;
(statearr_28733_28788[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (19))){
var inst_28621 = (state_28693[(7)]);
var inst_28640 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28621);
var state_28693__$1 = state_28693;
var statearr_28734_28789 = state_28693__$1;
(statearr_28734_28789[(2)] = inst_28640);

(statearr_28734_28789[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (11))){
var inst_28621 = (state_28693[(7)]);
var inst_28625 = (inst_28621 == null);
var inst_28626 = cljs.core.not.call(null,inst_28625);
var state_28693__$1 = state_28693;
if(inst_28626){
var statearr_28735_28790 = state_28693__$1;
(statearr_28735_28790[(1)] = (13));

} else {
var statearr_28736_28791 = state_28693__$1;
(statearr_28736_28791[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (9))){
var inst_28597 = (state_28693[(8)]);
var state_28693__$1 = state_28693;
var statearr_28737_28792 = state_28693__$1;
(statearr_28737_28792[(2)] = inst_28597);

(statearr_28737_28792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (5))){
var state_28693__$1 = state_28693;
var statearr_28738_28793 = state_28693__$1;
(statearr_28738_28793[(2)] = true);

(statearr_28738_28793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (14))){
var state_28693__$1 = state_28693;
var statearr_28739_28794 = state_28693__$1;
(statearr_28739_28794[(2)] = false);

(statearr_28739_28794[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (26))){
var inst_28653 = (state_28693[(9)]);
var inst_28660 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28653);
var state_28693__$1 = state_28693;
var statearr_28740_28795 = state_28693__$1;
(statearr_28740_28795[(2)] = inst_28660);

(statearr_28740_28795[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (16))){
var state_28693__$1 = state_28693;
var statearr_28741_28796 = state_28693__$1;
(statearr_28741_28796[(2)] = true);

(statearr_28741_28796[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (38))){
var inst_28683 = (state_28693[(2)]);
var state_28693__$1 = state_28693;
var statearr_28742_28797 = state_28693__$1;
(statearr_28742_28797[(2)] = inst_28683);

(statearr_28742_28797[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (30))){
var inst_28653 = (state_28693[(9)]);
var inst_28645 = (state_28693[(13)]);
var inst_28644 = (state_28693[(11)]);
var inst_28670 = cljs.core.empty_QMARK_.call(null,inst_28644);
var inst_28671 = inst_28645.call(null,inst_28653);
var inst_28672 = cljs.core.not.call(null,inst_28671);
var inst_28673 = (inst_28670) && (inst_28672);
var state_28693__$1 = state_28693;
var statearr_28743_28798 = state_28693__$1;
(statearr_28743_28798[(2)] = inst_28673);

(statearr_28743_28798[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (10))){
var inst_28597 = (state_28693[(8)]);
var inst_28617 = (state_28693[(2)]);
var inst_28618 = cljs.core.get.call(null,inst_28617,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28619 = cljs.core.get.call(null,inst_28617,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28620 = cljs.core.get.call(null,inst_28617,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28621 = inst_28597;
var state_28693__$1 = (function (){var statearr_28744 = state_28693;
(statearr_28744[(16)] = inst_28620);

(statearr_28744[(7)] = inst_28621);

(statearr_28744[(17)] = inst_28619);

(statearr_28744[(18)] = inst_28618);

return statearr_28744;
})();
var statearr_28745_28799 = state_28693__$1;
(statearr_28745_28799[(2)] = null);

(statearr_28745_28799[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (18))){
var inst_28635 = (state_28693[(2)]);
var state_28693__$1 = state_28693;
var statearr_28746_28800 = state_28693__$1;
(statearr_28746_28800[(2)] = inst_28635);

(statearr_28746_28800[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (37))){
var state_28693__$1 = state_28693;
var statearr_28747_28801 = state_28693__$1;
(statearr_28747_28801[(2)] = null);

(statearr_28747_28801[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28694 === (8))){
var inst_28597 = (state_28693[(8)]);
var inst_28614 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28597);
var state_28693__$1 = state_28693;
var statearr_28748_28802 = state_28693__$1;
(statearr_28748_28802[(2)] = inst_28614);

(statearr_28748_28802[(1)] = (10));


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
}
}
}
}
}
}
}
});})(c__27023__auto___28756,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26911__auto__,c__27023__auto___28756,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26912__auto__ = null;
var cljs$core$async$mix_$_state_machine__26912__auto____0 = (function (){
var statearr_28752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28752[(0)] = cljs$core$async$mix_$_state_machine__26912__auto__);

(statearr_28752[(1)] = (1));

return statearr_28752;
});
var cljs$core$async$mix_$_state_machine__26912__auto____1 = (function (state_28693){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_28693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e28753){if((e28753 instanceof Object)){
var ex__26915__auto__ = e28753;
var statearr_28754_28803 = state_28693;
(statearr_28754_28803[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28804 = state_28693;
state_28693 = G__28804;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26912__auto__ = function(state_28693){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26912__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26912__auto____1.call(this,state_28693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26912__auto____0;
cljs$core$async$mix_$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26912__auto____1;
return cljs$core$async$mix_$_state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto___28756,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27025__auto__ = (function (){var statearr_28755 = f__27024__auto__.call(null);
(statearr_28755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto___28756);

return statearr_28755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___28756,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25440__auto__ = (((p == null))?null:p);
var m__25441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25440__auto__ = (((p == null))?null:p);
var m__25441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,p,v,ch);
} else {
var m__25441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28805 = [];
var len__25852__auto___28808 = arguments.length;
var i__25853__auto___28809 = (0);
while(true){
if((i__25853__auto___28809 < len__25852__auto___28808)){
args28805.push((arguments[i__25853__auto___28809]));

var G__28810 = (i__25853__auto___28809 + (1));
i__25853__auto___28809 = G__28810;
continue;
} else {
}
break;
}

var G__28807 = args28805.length;
switch (G__28807) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28805.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25440__auto__ = (((p == null))?null:p);
var m__25441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,p);
} else {
var m__25441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25440__auto__ = (((p == null))?null:p);
var m__25441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25440__auto__)]);
if(!((m__25441__auto__ == null))){
return m__25441__auto__.call(null,p,v);
} else {
var m__25441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25441__auto____$1 == null))){
return m__25441__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args28813 = [];
var len__25852__auto___28938 = arguments.length;
var i__25853__auto___28939 = (0);
while(true){
if((i__25853__auto___28939 < len__25852__auto___28938)){
args28813.push((arguments[i__25853__auto___28939]));

var G__28940 = (i__25853__auto___28939 + (1));
i__25853__auto___28939 = G__28940;
continue;
} else {
}
break;
}

var G__28815 = args28813.length;
switch (G__28815) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28813.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24777__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24777__auto__,mults){
return (function (p1__28812_SHARP_){
if(cljs.core.truth_(p1__28812_SHARP_.call(null,topic))){
return p1__28812_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28812_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24777__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28816 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28816 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28817){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28817 = meta28817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28818,meta28817__$1){
var self__ = this;
var _28818__$1 = this;
return (new cljs.core.async.t_cljs$core$async28816(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28817__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28816.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28818){
var self__ = this;
var _28818__$1 = this;
return self__.meta28817;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28816.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28816.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28816.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28816.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28816.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28816.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28816.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28816.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28817","meta28817",-746421753,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28816.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28816";

cljs.core.async.t_cljs$core$async28816.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async28816");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28816 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28816(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28817){
return (new cljs.core.async.t_cljs$core$async28816(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28817));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28816(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27023__auto___28942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___28942,mults,ensure_mult,p){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto___28942,mults,ensure_mult,p){
return (function (state_28890){
var state_val_28891 = (state_28890[(1)]);
if((state_val_28891 === (7))){
var inst_28886 = (state_28890[(2)]);
var state_28890__$1 = state_28890;
var statearr_28892_28943 = state_28890__$1;
(statearr_28892_28943[(2)] = inst_28886);

(statearr_28892_28943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (20))){
var state_28890__$1 = state_28890;
var statearr_28893_28944 = state_28890__$1;
(statearr_28893_28944[(2)] = null);

(statearr_28893_28944[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (1))){
var state_28890__$1 = state_28890;
var statearr_28894_28945 = state_28890__$1;
(statearr_28894_28945[(2)] = null);

(statearr_28894_28945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (24))){
var inst_28869 = (state_28890[(7)]);
var inst_28878 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28869);
var state_28890__$1 = state_28890;
var statearr_28895_28946 = state_28890__$1;
(statearr_28895_28946[(2)] = inst_28878);

(statearr_28895_28946[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (4))){
var inst_28821 = (state_28890[(8)]);
var inst_28821__$1 = (state_28890[(2)]);
var inst_28822 = (inst_28821__$1 == null);
var state_28890__$1 = (function (){var statearr_28896 = state_28890;
(statearr_28896[(8)] = inst_28821__$1);

return statearr_28896;
})();
if(cljs.core.truth_(inst_28822)){
var statearr_28897_28947 = state_28890__$1;
(statearr_28897_28947[(1)] = (5));

} else {
var statearr_28898_28948 = state_28890__$1;
(statearr_28898_28948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (15))){
var inst_28863 = (state_28890[(2)]);
var state_28890__$1 = state_28890;
var statearr_28899_28949 = state_28890__$1;
(statearr_28899_28949[(2)] = inst_28863);

(statearr_28899_28949[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (21))){
var inst_28883 = (state_28890[(2)]);
var state_28890__$1 = (function (){var statearr_28900 = state_28890;
(statearr_28900[(9)] = inst_28883);

return statearr_28900;
})();
var statearr_28901_28950 = state_28890__$1;
(statearr_28901_28950[(2)] = null);

(statearr_28901_28950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (13))){
var inst_28845 = (state_28890[(10)]);
var inst_28847 = cljs.core.chunked_seq_QMARK_.call(null,inst_28845);
var state_28890__$1 = state_28890;
if(inst_28847){
var statearr_28902_28951 = state_28890__$1;
(statearr_28902_28951[(1)] = (16));

} else {
var statearr_28903_28952 = state_28890__$1;
(statearr_28903_28952[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (22))){
var inst_28875 = (state_28890[(2)]);
var state_28890__$1 = state_28890;
if(cljs.core.truth_(inst_28875)){
var statearr_28904_28953 = state_28890__$1;
(statearr_28904_28953[(1)] = (23));

} else {
var statearr_28905_28954 = state_28890__$1;
(statearr_28905_28954[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (6))){
var inst_28869 = (state_28890[(7)]);
var inst_28871 = (state_28890[(11)]);
var inst_28821 = (state_28890[(8)]);
var inst_28869__$1 = topic_fn.call(null,inst_28821);
var inst_28870 = cljs.core.deref.call(null,mults);
var inst_28871__$1 = cljs.core.get.call(null,inst_28870,inst_28869__$1);
var state_28890__$1 = (function (){var statearr_28906 = state_28890;
(statearr_28906[(7)] = inst_28869__$1);

(statearr_28906[(11)] = inst_28871__$1);

return statearr_28906;
})();
if(cljs.core.truth_(inst_28871__$1)){
var statearr_28907_28955 = state_28890__$1;
(statearr_28907_28955[(1)] = (19));

} else {
var statearr_28908_28956 = state_28890__$1;
(statearr_28908_28956[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (25))){
var inst_28880 = (state_28890[(2)]);
var state_28890__$1 = state_28890;
var statearr_28909_28957 = state_28890__$1;
(statearr_28909_28957[(2)] = inst_28880);

(statearr_28909_28957[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (17))){
var inst_28845 = (state_28890[(10)]);
var inst_28854 = cljs.core.first.call(null,inst_28845);
var inst_28855 = cljs.core.async.muxch_STAR_.call(null,inst_28854);
var inst_28856 = cljs.core.async.close_BANG_.call(null,inst_28855);
var inst_28857 = cljs.core.next.call(null,inst_28845);
var inst_28831 = inst_28857;
var inst_28832 = null;
var inst_28833 = (0);
var inst_28834 = (0);
var state_28890__$1 = (function (){var statearr_28910 = state_28890;
(statearr_28910[(12)] = inst_28831);

(statearr_28910[(13)] = inst_28834);

(statearr_28910[(14)] = inst_28832);

(statearr_28910[(15)] = inst_28833);

(statearr_28910[(16)] = inst_28856);

return statearr_28910;
})();
var statearr_28911_28958 = state_28890__$1;
(statearr_28911_28958[(2)] = null);

(statearr_28911_28958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (3))){
var inst_28888 = (state_28890[(2)]);
var state_28890__$1 = state_28890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28890__$1,inst_28888);
} else {
if((state_val_28891 === (12))){
var inst_28865 = (state_28890[(2)]);
var state_28890__$1 = state_28890;
var statearr_28912_28959 = state_28890__$1;
(statearr_28912_28959[(2)] = inst_28865);

(statearr_28912_28959[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (2))){
var state_28890__$1 = state_28890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28890__$1,(4),ch);
} else {
if((state_val_28891 === (23))){
var state_28890__$1 = state_28890;
var statearr_28913_28960 = state_28890__$1;
(statearr_28913_28960[(2)] = null);

(statearr_28913_28960[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (19))){
var inst_28871 = (state_28890[(11)]);
var inst_28821 = (state_28890[(8)]);
var inst_28873 = cljs.core.async.muxch_STAR_.call(null,inst_28871);
var state_28890__$1 = state_28890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28890__$1,(22),inst_28873,inst_28821);
} else {
if((state_val_28891 === (11))){
var inst_28831 = (state_28890[(12)]);
var inst_28845 = (state_28890[(10)]);
var inst_28845__$1 = cljs.core.seq.call(null,inst_28831);
var state_28890__$1 = (function (){var statearr_28914 = state_28890;
(statearr_28914[(10)] = inst_28845__$1);

return statearr_28914;
})();
if(inst_28845__$1){
var statearr_28915_28961 = state_28890__$1;
(statearr_28915_28961[(1)] = (13));

} else {
var statearr_28916_28962 = state_28890__$1;
(statearr_28916_28962[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (9))){
var inst_28867 = (state_28890[(2)]);
var state_28890__$1 = state_28890;
var statearr_28917_28963 = state_28890__$1;
(statearr_28917_28963[(2)] = inst_28867);

(statearr_28917_28963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (5))){
var inst_28828 = cljs.core.deref.call(null,mults);
var inst_28829 = cljs.core.vals.call(null,inst_28828);
var inst_28830 = cljs.core.seq.call(null,inst_28829);
var inst_28831 = inst_28830;
var inst_28832 = null;
var inst_28833 = (0);
var inst_28834 = (0);
var state_28890__$1 = (function (){var statearr_28918 = state_28890;
(statearr_28918[(12)] = inst_28831);

(statearr_28918[(13)] = inst_28834);

(statearr_28918[(14)] = inst_28832);

(statearr_28918[(15)] = inst_28833);

return statearr_28918;
})();
var statearr_28919_28964 = state_28890__$1;
(statearr_28919_28964[(2)] = null);

(statearr_28919_28964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (14))){
var state_28890__$1 = state_28890;
var statearr_28923_28965 = state_28890__$1;
(statearr_28923_28965[(2)] = null);

(statearr_28923_28965[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (16))){
var inst_28845 = (state_28890[(10)]);
var inst_28849 = cljs.core.chunk_first.call(null,inst_28845);
var inst_28850 = cljs.core.chunk_rest.call(null,inst_28845);
var inst_28851 = cljs.core.count.call(null,inst_28849);
var inst_28831 = inst_28850;
var inst_28832 = inst_28849;
var inst_28833 = inst_28851;
var inst_28834 = (0);
var state_28890__$1 = (function (){var statearr_28924 = state_28890;
(statearr_28924[(12)] = inst_28831);

(statearr_28924[(13)] = inst_28834);

(statearr_28924[(14)] = inst_28832);

(statearr_28924[(15)] = inst_28833);

return statearr_28924;
})();
var statearr_28925_28966 = state_28890__$1;
(statearr_28925_28966[(2)] = null);

(statearr_28925_28966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (10))){
var inst_28831 = (state_28890[(12)]);
var inst_28834 = (state_28890[(13)]);
var inst_28832 = (state_28890[(14)]);
var inst_28833 = (state_28890[(15)]);
var inst_28839 = cljs.core._nth.call(null,inst_28832,inst_28834);
var inst_28840 = cljs.core.async.muxch_STAR_.call(null,inst_28839);
var inst_28841 = cljs.core.async.close_BANG_.call(null,inst_28840);
var inst_28842 = (inst_28834 + (1));
var tmp28920 = inst_28831;
var tmp28921 = inst_28832;
var tmp28922 = inst_28833;
var inst_28831__$1 = tmp28920;
var inst_28832__$1 = tmp28921;
var inst_28833__$1 = tmp28922;
var inst_28834__$1 = inst_28842;
var state_28890__$1 = (function (){var statearr_28926 = state_28890;
(statearr_28926[(12)] = inst_28831__$1);

(statearr_28926[(17)] = inst_28841);

(statearr_28926[(13)] = inst_28834__$1);

(statearr_28926[(14)] = inst_28832__$1);

(statearr_28926[(15)] = inst_28833__$1);

return statearr_28926;
})();
var statearr_28927_28967 = state_28890__$1;
(statearr_28927_28967[(2)] = null);

(statearr_28927_28967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (18))){
var inst_28860 = (state_28890[(2)]);
var state_28890__$1 = state_28890;
var statearr_28928_28968 = state_28890__$1;
(statearr_28928_28968[(2)] = inst_28860);

(statearr_28928_28968[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28891 === (8))){
var inst_28834 = (state_28890[(13)]);
var inst_28833 = (state_28890[(15)]);
var inst_28836 = (inst_28834 < inst_28833);
var inst_28837 = inst_28836;
var state_28890__$1 = state_28890;
if(cljs.core.truth_(inst_28837)){
var statearr_28929_28969 = state_28890__$1;
(statearr_28929_28969[(1)] = (10));

} else {
var statearr_28930_28970 = state_28890__$1;
(statearr_28930_28970[(1)] = (11));

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
});})(c__27023__auto___28942,mults,ensure_mult,p))
;
return ((function (switch__26911__auto__,c__27023__auto___28942,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26912__auto__ = null;
var cljs$core$async$state_machine__26912__auto____0 = (function (){
var statearr_28934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28934[(0)] = cljs$core$async$state_machine__26912__auto__);

(statearr_28934[(1)] = (1));

return statearr_28934;
});
var cljs$core$async$state_machine__26912__auto____1 = (function (state_28890){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_28890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e28935){if((e28935 instanceof Object)){
var ex__26915__auto__ = e28935;
var statearr_28936_28971 = state_28890;
(statearr_28936_28971[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28972 = state_28890;
state_28890 = G__28972;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
cljs$core$async$state_machine__26912__auto__ = function(state_28890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26912__auto____1.call(this,state_28890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26912__auto____0;
cljs$core$async$state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26912__auto____1;
return cljs$core$async$state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto___28942,mults,ensure_mult,p))
})();
var state__27025__auto__ = (function (){var statearr_28937 = f__27024__auto__.call(null);
(statearr_28937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto___28942);

return statearr_28937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___28942,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args28973 = [];
var len__25852__auto___28976 = arguments.length;
var i__25853__auto___28977 = (0);
while(true){
if((i__25853__auto___28977 < len__25852__auto___28976)){
args28973.push((arguments[i__25853__auto___28977]));

var G__28978 = (i__25853__auto___28977 + (1));
i__25853__auto___28977 = G__28978;
continue;
} else {
}
break;
}

var G__28975 = args28973.length;
switch (G__28975) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28973.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args28980 = [];
var len__25852__auto___28983 = arguments.length;
var i__25853__auto___28984 = (0);
while(true){
if((i__25853__auto___28984 < len__25852__auto___28983)){
args28980.push((arguments[i__25853__auto___28984]));

var G__28985 = (i__25853__auto___28984 + (1));
i__25853__auto___28984 = G__28985;
continue;
} else {
}
break;
}

var G__28982 = args28980.length;
switch (G__28982) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28980.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args28987 = [];
var len__25852__auto___29058 = arguments.length;
var i__25853__auto___29059 = (0);
while(true){
if((i__25853__auto___29059 < len__25852__auto___29058)){
args28987.push((arguments[i__25853__auto___29059]));

var G__29060 = (i__25853__auto___29059 + (1));
i__25853__auto___29059 = G__29060;
continue;
} else {
}
break;
}

var G__28989 = args28987.length;
switch (G__28989) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28987.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27023__auto___29062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___29062,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto___29062,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29028){
var state_val_29029 = (state_29028[(1)]);
if((state_val_29029 === (7))){
var state_29028__$1 = state_29028;
var statearr_29030_29063 = state_29028__$1;
(statearr_29030_29063[(2)] = null);

(statearr_29030_29063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (1))){
var state_29028__$1 = state_29028;
var statearr_29031_29064 = state_29028__$1;
(statearr_29031_29064[(2)] = null);

(statearr_29031_29064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (4))){
var inst_28992 = (state_29028[(7)]);
var inst_28994 = (inst_28992 < cnt);
var state_29028__$1 = state_29028;
if(cljs.core.truth_(inst_28994)){
var statearr_29032_29065 = state_29028__$1;
(statearr_29032_29065[(1)] = (6));

} else {
var statearr_29033_29066 = state_29028__$1;
(statearr_29033_29066[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (15))){
var inst_29024 = (state_29028[(2)]);
var state_29028__$1 = state_29028;
var statearr_29034_29067 = state_29028__$1;
(statearr_29034_29067[(2)] = inst_29024);

(statearr_29034_29067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (13))){
var inst_29017 = cljs.core.async.close_BANG_.call(null,out);
var state_29028__$1 = state_29028;
var statearr_29035_29068 = state_29028__$1;
(statearr_29035_29068[(2)] = inst_29017);

(statearr_29035_29068[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (6))){
var state_29028__$1 = state_29028;
var statearr_29036_29069 = state_29028__$1;
(statearr_29036_29069[(2)] = null);

(statearr_29036_29069[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (3))){
var inst_29026 = (state_29028[(2)]);
var state_29028__$1 = state_29028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29028__$1,inst_29026);
} else {
if((state_val_29029 === (12))){
var inst_29014 = (state_29028[(8)]);
var inst_29014__$1 = (state_29028[(2)]);
var inst_29015 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29014__$1);
var state_29028__$1 = (function (){var statearr_29037 = state_29028;
(statearr_29037[(8)] = inst_29014__$1);

return statearr_29037;
})();
if(cljs.core.truth_(inst_29015)){
var statearr_29038_29070 = state_29028__$1;
(statearr_29038_29070[(1)] = (13));

} else {
var statearr_29039_29071 = state_29028__$1;
(statearr_29039_29071[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (2))){
var inst_28991 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28992 = (0);
var state_29028__$1 = (function (){var statearr_29040 = state_29028;
(statearr_29040[(9)] = inst_28991);

(statearr_29040[(7)] = inst_28992);

return statearr_29040;
})();
var statearr_29041_29072 = state_29028__$1;
(statearr_29041_29072[(2)] = null);

(statearr_29041_29072[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (11))){
var inst_28992 = (state_29028[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29028,(10),Object,null,(9));
var inst_29001 = chs__$1.call(null,inst_28992);
var inst_29002 = done.call(null,inst_28992);
var inst_29003 = cljs.core.async.take_BANG_.call(null,inst_29001,inst_29002);
var state_29028__$1 = state_29028;
var statearr_29042_29073 = state_29028__$1;
(statearr_29042_29073[(2)] = inst_29003);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29028__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (9))){
var inst_28992 = (state_29028[(7)]);
var inst_29005 = (state_29028[(2)]);
var inst_29006 = (inst_28992 + (1));
var inst_28992__$1 = inst_29006;
var state_29028__$1 = (function (){var statearr_29043 = state_29028;
(statearr_29043[(10)] = inst_29005);

(statearr_29043[(7)] = inst_28992__$1);

return statearr_29043;
})();
var statearr_29044_29074 = state_29028__$1;
(statearr_29044_29074[(2)] = null);

(statearr_29044_29074[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (5))){
var inst_29012 = (state_29028[(2)]);
var state_29028__$1 = (function (){var statearr_29045 = state_29028;
(statearr_29045[(11)] = inst_29012);

return statearr_29045;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29028__$1,(12),dchan);
} else {
if((state_val_29029 === (14))){
var inst_29014 = (state_29028[(8)]);
var inst_29019 = cljs.core.apply.call(null,f,inst_29014);
var state_29028__$1 = state_29028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29028__$1,(16),out,inst_29019);
} else {
if((state_val_29029 === (16))){
var inst_29021 = (state_29028[(2)]);
var state_29028__$1 = (function (){var statearr_29046 = state_29028;
(statearr_29046[(12)] = inst_29021);

return statearr_29046;
})();
var statearr_29047_29075 = state_29028__$1;
(statearr_29047_29075[(2)] = null);

(statearr_29047_29075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (10))){
var inst_28996 = (state_29028[(2)]);
var inst_28997 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29028__$1 = (function (){var statearr_29048 = state_29028;
(statearr_29048[(13)] = inst_28996);

return statearr_29048;
})();
var statearr_29049_29076 = state_29028__$1;
(statearr_29049_29076[(2)] = inst_28997);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29028__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29029 === (8))){
var inst_29010 = (state_29028[(2)]);
var state_29028__$1 = state_29028;
var statearr_29050_29077 = state_29028__$1;
(statearr_29050_29077[(2)] = inst_29010);

(statearr_29050_29077[(1)] = (5));


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
});})(c__27023__auto___29062,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26911__auto__,c__27023__auto___29062,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26912__auto__ = null;
var cljs$core$async$state_machine__26912__auto____0 = (function (){
var statearr_29054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29054[(0)] = cljs$core$async$state_machine__26912__auto__);

(statearr_29054[(1)] = (1));

return statearr_29054;
});
var cljs$core$async$state_machine__26912__auto____1 = (function (state_29028){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_29028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e29055){if((e29055 instanceof Object)){
var ex__26915__auto__ = e29055;
var statearr_29056_29078 = state_29028;
(statearr_29056_29078[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29079 = state_29028;
state_29028 = G__29079;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
cljs$core$async$state_machine__26912__auto__ = function(state_29028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26912__auto____1.call(this,state_29028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26912__auto____0;
cljs$core$async$state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26912__auto____1;
return cljs$core$async$state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto___29062,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27025__auto__ = (function (){var statearr_29057 = f__27024__auto__.call(null);
(statearr_29057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto___29062);

return statearr_29057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___29062,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29081 = [];
var len__25852__auto___29139 = arguments.length;
var i__25853__auto___29140 = (0);
while(true){
if((i__25853__auto___29140 < len__25852__auto___29139)){
args29081.push((arguments[i__25853__auto___29140]));

var G__29141 = (i__25853__auto___29140 + (1));
i__25853__auto___29140 = G__29141;
continue;
} else {
}
break;
}

var G__29083 = args29081.length;
switch (G__29083) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29081.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27023__auto___29143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___29143,out){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto___29143,out){
return (function (state_29115){
var state_val_29116 = (state_29115[(1)]);
if((state_val_29116 === (7))){
var inst_29094 = (state_29115[(7)]);
var inst_29095 = (state_29115[(8)]);
var inst_29094__$1 = (state_29115[(2)]);
var inst_29095__$1 = cljs.core.nth.call(null,inst_29094__$1,(0),null);
var inst_29096 = cljs.core.nth.call(null,inst_29094__$1,(1),null);
var inst_29097 = (inst_29095__$1 == null);
var state_29115__$1 = (function (){var statearr_29117 = state_29115;
(statearr_29117[(7)] = inst_29094__$1);

(statearr_29117[(9)] = inst_29096);

(statearr_29117[(8)] = inst_29095__$1);

return statearr_29117;
})();
if(cljs.core.truth_(inst_29097)){
var statearr_29118_29144 = state_29115__$1;
(statearr_29118_29144[(1)] = (8));

} else {
var statearr_29119_29145 = state_29115__$1;
(statearr_29119_29145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (1))){
var inst_29084 = cljs.core.vec.call(null,chs);
var inst_29085 = inst_29084;
var state_29115__$1 = (function (){var statearr_29120 = state_29115;
(statearr_29120[(10)] = inst_29085);

return statearr_29120;
})();
var statearr_29121_29146 = state_29115__$1;
(statearr_29121_29146[(2)] = null);

(statearr_29121_29146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (4))){
var inst_29085 = (state_29115[(10)]);
var state_29115__$1 = state_29115;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29115__$1,(7),inst_29085);
} else {
if((state_val_29116 === (6))){
var inst_29111 = (state_29115[(2)]);
var state_29115__$1 = state_29115;
var statearr_29122_29147 = state_29115__$1;
(statearr_29122_29147[(2)] = inst_29111);

(statearr_29122_29147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (3))){
var inst_29113 = (state_29115[(2)]);
var state_29115__$1 = state_29115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29115__$1,inst_29113);
} else {
if((state_val_29116 === (2))){
var inst_29085 = (state_29115[(10)]);
var inst_29087 = cljs.core.count.call(null,inst_29085);
var inst_29088 = (inst_29087 > (0));
var state_29115__$1 = state_29115;
if(cljs.core.truth_(inst_29088)){
var statearr_29124_29148 = state_29115__$1;
(statearr_29124_29148[(1)] = (4));

} else {
var statearr_29125_29149 = state_29115__$1;
(statearr_29125_29149[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (11))){
var inst_29085 = (state_29115[(10)]);
var inst_29104 = (state_29115[(2)]);
var tmp29123 = inst_29085;
var inst_29085__$1 = tmp29123;
var state_29115__$1 = (function (){var statearr_29126 = state_29115;
(statearr_29126[(10)] = inst_29085__$1);

(statearr_29126[(11)] = inst_29104);

return statearr_29126;
})();
var statearr_29127_29150 = state_29115__$1;
(statearr_29127_29150[(2)] = null);

(statearr_29127_29150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (9))){
var inst_29095 = (state_29115[(8)]);
var state_29115__$1 = state_29115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29115__$1,(11),out,inst_29095);
} else {
if((state_val_29116 === (5))){
var inst_29109 = cljs.core.async.close_BANG_.call(null,out);
var state_29115__$1 = state_29115;
var statearr_29128_29151 = state_29115__$1;
(statearr_29128_29151[(2)] = inst_29109);

(statearr_29128_29151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (10))){
var inst_29107 = (state_29115[(2)]);
var state_29115__$1 = state_29115;
var statearr_29129_29152 = state_29115__$1;
(statearr_29129_29152[(2)] = inst_29107);

(statearr_29129_29152[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (8))){
var inst_29094 = (state_29115[(7)]);
var inst_29085 = (state_29115[(10)]);
var inst_29096 = (state_29115[(9)]);
var inst_29095 = (state_29115[(8)]);
var inst_29099 = (function (){var cs = inst_29085;
var vec__29090 = inst_29094;
var v = inst_29095;
var c = inst_29096;
return ((function (cs,vec__29090,v,c,inst_29094,inst_29085,inst_29096,inst_29095,state_val_29116,c__27023__auto___29143,out){
return (function (p1__29080_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29080_SHARP_);
});
;})(cs,vec__29090,v,c,inst_29094,inst_29085,inst_29096,inst_29095,state_val_29116,c__27023__auto___29143,out))
})();
var inst_29100 = cljs.core.filterv.call(null,inst_29099,inst_29085);
var inst_29085__$1 = inst_29100;
var state_29115__$1 = (function (){var statearr_29130 = state_29115;
(statearr_29130[(10)] = inst_29085__$1);

return statearr_29130;
})();
var statearr_29131_29153 = state_29115__$1;
(statearr_29131_29153[(2)] = null);

(statearr_29131_29153[(1)] = (2));


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
});})(c__27023__auto___29143,out))
;
return ((function (switch__26911__auto__,c__27023__auto___29143,out){
return (function() {
var cljs$core$async$state_machine__26912__auto__ = null;
var cljs$core$async$state_machine__26912__auto____0 = (function (){
var statearr_29135 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29135[(0)] = cljs$core$async$state_machine__26912__auto__);

(statearr_29135[(1)] = (1));

return statearr_29135;
});
var cljs$core$async$state_machine__26912__auto____1 = (function (state_29115){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_29115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e29136){if((e29136 instanceof Object)){
var ex__26915__auto__ = e29136;
var statearr_29137_29154 = state_29115;
(statearr_29137_29154[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29155 = state_29115;
state_29115 = G__29155;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
cljs$core$async$state_machine__26912__auto__ = function(state_29115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26912__auto____1.call(this,state_29115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26912__auto____0;
cljs$core$async$state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26912__auto____1;
return cljs$core$async$state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto___29143,out))
})();
var state__27025__auto__ = (function (){var statearr_29138 = f__27024__auto__.call(null);
(statearr_29138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto___29143);

return statearr_29138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___29143,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29156 = [];
var len__25852__auto___29205 = arguments.length;
var i__25853__auto___29206 = (0);
while(true){
if((i__25853__auto___29206 < len__25852__auto___29205)){
args29156.push((arguments[i__25853__auto___29206]));

var G__29207 = (i__25853__auto___29206 + (1));
i__25853__auto___29206 = G__29207;
continue;
} else {
}
break;
}

var G__29158 = args29156.length;
switch (G__29158) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29156.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27023__auto___29209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___29209,out){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto___29209,out){
return (function (state_29182){
var state_val_29183 = (state_29182[(1)]);
if((state_val_29183 === (7))){
var inst_29164 = (state_29182[(7)]);
var inst_29164__$1 = (state_29182[(2)]);
var inst_29165 = (inst_29164__$1 == null);
var inst_29166 = cljs.core.not.call(null,inst_29165);
var state_29182__$1 = (function (){var statearr_29184 = state_29182;
(statearr_29184[(7)] = inst_29164__$1);

return statearr_29184;
})();
if(inst_29166){
var statearr_29185_29210 = state_29182__$1;
(statearr_29185_29210[(1)] = (8));

} else {
var statearr_29186_29211 = state_29182__$1;
(statearr_29186_29211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (1))){
var inst_29159 = (0);
var state_29182__$1 = (function (){var statearr_29187 = state_29182;
(statearr_29187[(8)] = inst_29159);

return statearr_29187;
})();
var statearr_29188_29212 = state_29182__$1;
(statearr_29188_29212[(2)] = null);

(statearr_29188_29212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (4))){
var state_29182__$1 = state_29182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29182__$1,(7),ch);
} else {
if((state_val_29183 === (6))){
var inst_29177 = (state_29182[(2)]);
var state_29182__$1 = state_29182;
var statearr_29189_29213 = state_29182__$1;
(statearr_29189_29213[(2)] = inst_29177);

(statearr_29189_29213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (3))){
var inst_29179 = (state_29182[(2)]);
var inst_29180 = cljs.core.async.close_BANG_.call(null,out);
var state_29182__$1 = (function (){var statearr_29190 = state_29182;
(statearr_29190[(9)] = inst_29179);

return statearr_29190;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29182__$1,inst_29180);
} else {
if((state_val_29183 === (2))){
var inst_29159 = (state_29182[(8)]);
var inst_29161 = (inst_29159 < n);
var state_29182__$1 = state_29182;
if(cljs.core.truth_(inst_29161)){
var statearr_29191_29214 = state_29182__$1;
(statearr_29191_29214[(1)] = (4));

} else {
var statearr_29192_29215 = state_29182__$1;
(statearr_29192_29215[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (11))){
var inst_29159 = (state_29182[(8)]);
var inst_29169 = (state_29182[(2)]);
var inst_29170 = (inst_29159 + (1));
var inst_29159__$1 = inst_29170;
var state_29182__$1 = (function (){var statearr_29193 = state_29182;
(statearr_29193[(8)] = inst_29159__$1);

(statearr_29193[(10)] = inst_29169);

return statearr_29193;
})();
var statearr_29194_29216 = state_29182__$1;
(statearr_29194_29216[(2)] = null);

(statearr_29194_29216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (9))){
var state_29182__$1 = state_29182;
var statearr_29195_29217 = state_29182__$1;
(statearr_29195_29217[(2)] = null);

(statearr_29195_29217[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (5))){
var state_29182__$1 = state_29182;
var statearr_29196_29218 = state_29182__$1;
(statearr_29196_29218[(2)] = null);

(statearr_29196_29218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (10))){
var inst_29174 = (state_29182[(2)]);
var state_29182__$1 = state_29182;
var statearr_29197_29219 = state_29182__$1;
(statearr_29197_29219[(2)] = inst_29174);

(statearr_29197_29219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29183 === (8))){
var inst_29164 = (state_29182[(7)]);
var state_29182__$1 = state_29182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29182__$1,(11),out,inst_29164);
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
});})(c__27023__auto___29209,out))
;
return ((function (switch__26911__auto__,c__27023__auto___29209,out){
return (function() {
var cljs$core$async$state_machine__26912__auto__ = null;
var cljs$core$async$state_machine__26912__auto____0 = (function (){
var statearr_29201 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29201[(0)] = cljs$core$async$state_machine__26912__auto__);

(statearr_29201[(1)] = (1));

return statearr_29201;
});
var cljs$core$async$state_machine__26912__auto____1 = (function (state_29182){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_29182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e29202){if((e29202 instanceof Object)){
var ex__26915__auto__ = e29202;
var statearr_29203_29220 = state_29182;
(statearr_29203_29220[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29221 = state_29182;
state_29182 = G__29221;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
cljs$core$async$state_machine__26912__auto__ = function(state_29182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26912__auto____1.call(this,state_29182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26912__auto____0;
cljs$core$async$state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26912__auto____1;
return cljs$core$async$state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto___29209,out))
})();
var state__27025__auto__ = (function (){var statearr_29204 = f__27024__auto__.call(null);
(statearr_29204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto___29209);

return statearr_29204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___29209,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29229 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29229 = (function (map_LT_,f,ch,meta29230){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29230 = meta29230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29231,meta29230__$1){
var self__ = this;
var _29231__$1 = this;
return (new cljs.core.async.t_cljs$core$async29229(self__.map_LT_,self__.f,self__.ch,meta29230__$1));
});

cljs.core.async.t_cljs$core$async29229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29231){
var self__ = this;
var _29231__$1 = this;
return self__.meta29230;
});

cljs.core.async.t_cljs$core$async29229.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29229.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29229.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29229.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29229.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29232 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29232 = (function (map_LT_,f,ch,meta29230,_,fn1,meta29233){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29230 = meta29230;
this._ = _;
this.fn1 = fn1;
this.meta29233 = meta29233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29234,meta29233__$1){
var self__ = this;
var _29234__$1 = this;
return (new cljs.core.async.t_cljs$core$async29232(self__.map_LT_,self__.f,self__.ch,self__.meta29230,self__._,self__.fn1,meta29233__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29232.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29234){
var self__ = this;
var _29234__$1 = this;
return self__.meta29233;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29232.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29232.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29222_SHARP_){
return f1.call(null,(((p1__29222_SHARP_ == null))?null:self__.f.call(null,p1__29222_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29232.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29230","meta29230",178141195,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29229","cljs.core.async/t_cljs$core$async29229",2122104420,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29233","meta29233",493288134,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29232.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29232";

cljs.core.async.t_cljs$core$async29232.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async29232");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29232 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29232(map_LT___$1,f__$1,ch__$1,meta29230__$1,___$2,fn1__$1,meta29233){
return (new cljs.core.async.t_cljs$core$async29232(map_LT___$1,f__$1,ch__$1,meta29230__$1,___$2,fn1__$1,meta29233));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29232(self__.map_LT_,self__.f,self__.ch,self__.meta29230,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24765__auto__ = ret;
if(cljs.core.truth_(and__24765__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24765__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29229.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29229.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29230","meta29230",178141195,null)], null);
});

cljs.core.async.t_cljs$core$async29229.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29229";

cljs.core.async.t_cljs$core$async29229.cljs$lang$ctorPrWriter = (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async29229");
});

cljs.core.async.__GT_t_cljs$core$async29229 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29229(map_LT___$1,f__$1,ch__$1,meta29230){
return (new cljs.core.async.t_cljs$core$async29229(map_LT___$1,f__$1,ch__$1,meta29230));
});

}

return (new cljs.core.async.t_cljs$core$async29229(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29238 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29238 = (function (map_GT_,f,ch,meta29239){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29239 = meta29239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29240,meta29239__$1){
var self__ = this;
var _29240__$1 = this;
return (new cljs.core.async.t_cljs$core$async29238(self__.map_GT_,self__.f,self__.ch,meta29239__$1));
});

cljs.core.async.t_cljs$core$async29238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29240){
var self__ = this;
var _29240__$1 = this;
return self__.meta29239;
});

cljs.core.async.t_cljs$core$async29238.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29238.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29238.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29238.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29238.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29238.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29239","meta29239",2042363793,null)], null);
});

cljs.core.async.t_cljs$core$async29238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29238";

cljs.core.async.t_cljs$core$async29238.cljs$lang$ctorPrWriter = (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async29238");
});

cljs.core.async.__GT_t_cljs$core$async29238 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29238(map_GT___$1,f__$1,ch__$1,meta29239){
return (new cljs.core.async.t_cljs$core$async29238(map_GT___$1,f__$1,ch__$1,meta29239));
});

}

return (new cljs.core.async.t_cljs$core$async29238(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29244 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29244 = (function (filter_GT_,p,ch,meta29245){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29245 = meta29245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29246,meta29245__$1){
var self__ = this;
var _29246__$1 = this;
return (new cljs.core.async.t_cljs$core$async29244(self__.filter_GT_,self__.p,self__.ch,meta29245__$1));
});

cljs.core.async.t_cljs$core$async29244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29246){
var self__ = this;
var _29246__$1 = this;
return self__.meta29245;
});

cljs.core.async.t_cljs$core$async29244.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29244.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29244.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29244.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29244.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29244.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29244.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29245","meta29245",69070935,null)], null);
});

cljs.core.async.t_cljs$core$async29244.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29244";

cljs.core.async.t_cljs$core$async29244.cljs$lang$ctorPrWriter = (function (this__25383__auto__,writer__25384__auto__,opt__25385__auto__){
return cljs.core._write.call(null,writer__25384__auto__,"cljs.core.async/t_cljs$core$async29244");
});

cljs.core.async.__GT_t_cljs$core$async29244 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29244(filter_GT___$1,p__$1,ch__$1,meta29245){
return (new cljs.core.async.t_cljs$core$async29244(filter_GT___$1,p__$1,ch__$1,meta29245));
});

}

return (new cljs.core.async.t_cljs$core$async29244(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29247 = [];
var len__25852__auto___29291 = arguments.length;
var i__25853__auto___29292 = (0);
while(true){
if((i__25853__auto___29292 < len__25852__auto___29291)){
args29247.push((arguments[i__25853__auto___29292]));

var G__29293 = (i__25853__auto___29292 + (1));
i__25853__auto___29292 = G__29293;
continue;
} else {
}
break;
}

var G__29249 = args29247.length;
switch (G__29249) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29247.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27023__auto___29295 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___29295,out){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto___29295,out){
return (function (state_29270){
var state_val_29271 = (state_29270[(1)]);
if((state_val_29271 === (7))){
var inst_29266 = (state_29270[(2)]);
var state_29270__$1 = state_29270;
var statearr_29272_29296 = state_29270__$1;
(statearr_29272_29296[(2)] = inst_29266);

(statearr_29272_29296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (1))){
var state_29270__$1 = state_29270;
var statearr_29273_29297 = state_29270__$1;
(statearr_29273_29297[(2)] = null);

(statearr_29273_29297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (4))){
var inst_29252 = (state_29270[(7)]);
var inst_29252__$1 = (state_29270[(2)]);
var inst_29253 = (inst_29252__$1 == null);
var state_29270__$1 = (function (){var statearr_29274 = state_29270;
(statearr_29274[(7)] = inst_29252__$1);

return statearr_29274;
})();
if(cljs.core.truth_(inst_29253)){
var statearr_29275_29298 = state_29270__$1;
(statearr_29275_29298[(1)] = (5));

} else {
var statearr_29276_29299 = state_29270__$1;
(statearr_29276_29299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (6))){
var inst_29252 = (state_29270[(7)]);
var inst_29257 = p.call(null,inst_29252);
var state_29270__$1 = state_29270;
if(cljs.core.truth_(inst_29257)){
var statearr_29277_29300 = state_29270__$1;
(statearr_29277_29300[(1)] = (8));

} else {
var statearr_29278_29301 = state_29270__$1;
(statearr_29278_29301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (3))){
var inst_29268 = (state_29270[(2)]);
var state_29270__$1 = state_29270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29270__$1,inst_29268);
} else {
if((state_val_29271 === (2))){
var state_29270__$1 = state_29270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29270__$1,(4),ch);
} else {
if((state_val_29271 === (11))){
var inst_29260 = (state_29270[(2)]);
var state_29270__$1 = state_29270;
var statearr_29279_29302 = state_29270__$1;
(statearr_29279_29302[(2)] = inst_29260);

(statearr_29279_29302[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (9))){
var state_29270__$1 = state_29270;
var statearr_29280_29303 = state_29270__$1;
(statearr_29280_29303[(2)] = null);

(statearr_29280_29303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (5))){
var inst_29255 = cljs.core.async.close_BANG_.call(null,out);
var state_29270__$1 = state_29270;
var statearr_29281_29304 = state_29270__$1;
(statearr_29281_29304[(2)] = inst_29255);

(statearr_29281_29304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (10))){
var inst_29263 = (state_29270[(2)]);
var state_29270__$1 = (function (){var statearr_29282 = state_29270;
(statearr_29282[(8)] = inst_29263);

return statearr_29282;
})();
var statearr_29283_29305 = state_29270__$1;
(statearr_29283_29305[(2)] = null);

(statearr_29283_29305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29271 === (8))){
var inst_29252 = (state_29270[(7)]);
var state_29270__$1 = state_29270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29270__$1,(11),out,inst_29252);
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
});})(c__27023__auto___29295,out))
;
return ((function (switch__26911__auto__,c__27023__auto___29295,out){
return (function() {
var cljs$core$async$state_machine__26912__auto__ = null;
var cljs$core$async$state_machine__26912__auto____0 = (function (){
var statearr_29287 = [null,null,null,null,null,null,null,null,null];
(statearr_29287[(0)] = cljs$core$async$state_machine__26912__auto__);

(statearr_29287[(1)] = (1));

return statearr_29287;
});
var cljs$core$async$state_machine__26912__auto____1 = (function (state_29270){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_29270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e29288){if((e29288 instanceof Object)){
var ex__26915__auto__ = e29288;
var statearr_29289_29306 = state_29270;
(statearr_29289_29306[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29307 = state_29270;
state_29270 = G__29307;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
cljs$core$async$state_machine__26912__auto__ = function(state_29270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26912__auto____1.call(this,state_29270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26912__auto____0;
cljs$core$async$state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26912__auto____1;
return cljs$core$async$state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto___29295,out))
})();
var state__27025__auto__ = (function (){var statearr_29290 = f__27024__auto__.call(null);
(statearr_29290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto___29295);

return statearr_29290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___29295,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29308 = [];
var len__25852__auto___29311 = arguments.length;
var i__25853__auto___29312 = (0);
while(true){
if((i__25853__auto___29312 < len__25852__auto___29311)){
args29308.push((arguments[i__25853__auto___29312]));

var G__29313 = (i__25853__auto___29312 + (1));
i__25853__auto___29312 = G__29313;
continue;
} else {
}
break;
}

var G__29310 = args29308.length;
switch (G__29310) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29308.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto__){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto__){
return (function (state_29480){
var state_val_29481 = (state_29480[(1)]);
if((state_val_29481 === (7))){
var inst_29476 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
var statearr_29482_29523 = state_29480__$1;
(statearr_29482_29523[(2)] = inst_29476);

(statearr_29482_29523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (20))){
var inst_29446 = (state_29480[(7)]);
var inst_29457 = (state_29480[(2)]);
var inst_29458 = cljs.core.next.call(null,inst_29446);
var inst_29432 = inst_29458;
var inst_29433 = null;
var inst_29434 = (0);
var inst_29435 = (0);
var state_29480__$1 = (function (){var statearr_29483 = state_29480;
(statearr_29483[(8)] = inst_29433);

(statearr_29483[(9)] = inst_29432);

(statearr_29483[(10)] = inst_29434);

(statearr_29483[(11)] = inst_29457);

(statearr_29483[(12)] = inst_29435);

return statearr_29483;
})();
var statearr_29484_29524 = state_29480__$1;
(statearr_29484_29524[(2)] = null);

(statearr_29484_29524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (1))){
var state_29480__$1 = state_29480;
var statearr_29485_29525 = state_29480__$1;
(statearr_29485_29525[(2)] = null);

(statearr_29485_29525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (4))){
var inst_29421 = (state_29480[(13)]);
var inst_29421__$1 = (state_29480[(2)]);
var inst_29422 = (inst_29421__$1 == null);
var state_29480__$1 = (function (){var statearr_29486 = state_29480;
(statearr_29486[(13)] = inst_29421__$1);

return statearr_29486;
})();
if(cljs.core.truth_(inst_29422)){
var statearr_29487_29526 = state_29480__$1;
(statearr_29487_29526[(1)] = (5));

} else {
var statearr_29488_29527 = state_29480__$1;
(statearr_29488_29527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (15))){
var state_29480__$1 = state_29480;
var statearr_29492_29528 = state_29480__$1;
(statearr_29492_29528[(2)] = null);

(statearr_29492_29528[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (21))){
var state_29480__$1 = state_29480;
var statearr_29493_29529 = state_29480__$1;
(statearr_29493_29529[(2)] = null);

(statearr_29493_29529[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (13))){
var inst_29433 = (state_29480[(8)]);
var inst_29432 = (state_29480[(9)]);
var inst_29434 = (state_29480[(10)]);
var inst_29435 = (state_29480[(12)]);
var inst_29442 = (state_29480[(2)]);
var inst_29443 = (inst_29435 + (1));
var tmp29489 = inst_29433;
var tmp29490 = inst_29432;
var tmp29491 = inst_29434;
var inst_29432__$1 = tmp29490;
var inst_29433__$1 = tmp29489;
var inst_29434__$1 = tmp29491;
var inst_29435__$1 = inst_29443;
var state_29480__$1 = (function (){var statearr_29494 = state_29480;
(statearr_29494[(8)] = inst_29433__$1);

(statearr_29494[(9)] = inst_29432__$1);

(statearr_29494[(10)] = inst_29434__$1);

(statearr_29494[(14)] = inst_29442);

(statearr_29494[(12)] = inst_29435__$1);

return statearr_29494;
})();
var statearr_29495_29530 = state_29480__$1;
(statearr_29495_29530[(2)] = null);

(statearr_29495_29530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (22))){
var state_29480__$1 = state_29480;
var statearr_29496_29531 = state_29480__$1;
(statearr_29496_29531[(2)] = null);

(statearr_29496_29531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (6))){
var inst_29421 = (state_29480[(13)]);
var inst_29430 = f.call(null,inst_29421);
var inst_29431 = cljs.core.seq.call(null,inst_29430);
var inst_29432 = inst_29431;
var inst_29433 = null;
var inst_29434 = (0);
var inst_29435 = (0);
var state_29480__$1 = (function (){var statearr_29497 = state_29480;
(statearr_29497[(8)] = inst_29433);

(statearr_29497[(9)] = inst_29432);

(statearr_29497[(10)] = inst_29434);

(statearr_29497[(12)] = inst_29435);

return statearr_29497;
})();
var statearr_29498_29532 = state_29480__$1;
(statearr_29498_29532[(2)] = null);

(statearr_29498_29532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (17))){
var inst_29446 = (state_29480[(7)]);
var inst_29450 = cljs.core.chunk_first.call(null,inst_29446);
var inst_29451 = cljs.core.chunk_rest.call(null,inst_29446);
var inst_29452 = cljs.core.count.call(null,inst_29450);
var inst_29432 = inst_29451;
var inst_29433 = inst_29450;
var inst_29434 = inst_29452;
var inst_29435 = (0);
var state_29480__$1 = (function (){var statearr_29499 = state_29480;
(statearr_29499[(8)] = inst_29433);

(statearr_29499[(9)] = inst_29432);

(statearr_29499[(10)] = inst_29434);

(statearr_29499[(12)] = inst_29435);

return statearr_29499;
})();
var statearr_29500_29533 = state_29480__$1;
(statearr_29500_29533[(2)] = null);

(statearr_29500_29533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (3))){
var inst_29478 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29480__$1,inst_29478);
} else {
if((state_val_29481 === (12))){
var inst_29466 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
var statearr_29501_29534 = state_29480__$1;
(statearr_29501_29534[(2)] = inst_29466);

(statearr_29501_29534[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (2))){
var state_29480__$1 = state_29480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29480__$1,(4),in$);
} else {
if((state_val_29481 === (23))){
var inst_29474 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
var statearr_29502_29535 = state_29480__$1;
(statearr_29502_29535[(2)] = inst_29474);

(statearr_29502_29535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (19))){
var inst_29461 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
var statearr_29503_29536 = state_29480__$1;
(statearr_29503_29536[(2)] = inst_29461);

(statearr_29503_29536[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (11))){
var inst_29446 = (state_29480[(7)]);
var inst_29432 = (state_29480[(9)]);
var inst_29446__$1 = cljs.core.seq.call(null,inst_29432);
var state_29480__$1 = (function (){var statearr_29504 = state_29480;
(statearr_29504[(7)] = inst_29446__$1);

return statearr_29504;
})();
if(inst_29446__$1){
var statearr_29505_29537 = state_29480__$1;
(statearr_29505_29537[(1)] = (14));

} else {
var statearr_29506_29538 = state_29480__$1;
(statearr_29506_29538[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (9))){
var inst_29468 = (state_29480[(2)]);
var inst_29469 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29480__$1 = (function (){var statearr_29507 = state_29480;
(statearr_29507[(15)] = inst_29468);

return statearr_29507;
})();
if(cljs.core.truth_(inst_29469)){
var statearr_29508_29539 = state_29480__$1;
(statearr_29508_29539[(1)] = (21));

} else {
var statearr_29509_29540 = state_29480__$1;
(statearr_29509_29540[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (5))){
var inst_29424 = cljs.core.async.close_BANG_.call(null,out);
var state_29480__$1 = state_29480;
var statearr_29510_29541 = state_29480__$1;
(statearr_29510_29541[(2)] = inst_29424);

(statearr_29510_29541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (14))){
var inst_29446 = (state_29480[(7)]);
var inst_29448 = cljs.core.chunked_seq_QMARK_.call(null,inst_29446);
var state_29480__$1 = state_29480;
if(inst_29448){
var statearr_29511_29542 = state_29480__$1;
(statearr_29511_29542[(1)] = (17));

} else {
var statearr_29512_29543 = state_29480__$1;
(statearr_29512_29543[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (16))){
var inst_29464 = (state_29480[(2)]);
var state_29480__$1 = state_29480;
var statearr_29513_29544 = state_29480__$1;
(statearr_29513_29544[(2)] = inst_29464);

(statearr_29513_29544[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29481 === (10))){
var inst_29433 = (state_29480[(8)]);
var inst_29435 = (state_29480[(12)]);
var inst_29440 = cljs.core._nth.call(null,inst_29433,inst_29435);
var state_29480__$1 = state_29480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29480__$1,(13),out,inst_29440);
} else {
if((state_val_29481 === (18))){
var inst_29446 = (state_29480[(7)]);
var inst_29455 = cljs.core.first.call(null,inst_29446);
var state_29480__$1 = state_29480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29480__$1,(20),out,inst_29455);
} else {
if((state_val_29481 === (8))){
var inst_29434 = (state_29480[(10)]);
var inst_29435 = (state_29480[(12)]);
var inst_29437 = (inst_29435 < inst_29434);
var inst_29438 = inst_29437;
var state_29480__$1 = state_29480;
if(cljs.core.truth_(inst_29438)){
var statearr_29514_29545 = state_29480__$1;
(statearr_29514_29545[(1)] = (10));

} else {
var statearr_29515_29546 = state_29480__$1;
(statearr_29515_29546[(1)] = (11));

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
});})(c__27023__auto__))
;
return ((function (switch__26911__auto__,c__27023__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26912__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26912__auto____0 = (function (){
var statearr_29519 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29519[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26912__auto__);

(statearr_29519[(1)] = (1));

return statearr_29519;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26912__auto____1 = (function (state_29480){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_29480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e29520){if((e29520 instanceof Object)){
var ex__26915__auto__ = e29520;
var statearr_29521_29547 = state_29480;
(statearr_29521_29547[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29548 = state_29480;
state_29480 = G__29548;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26912__auto__ = function(state_29480){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26912__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26912__auto____1.call(this,state_29480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26912__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26912__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto__))
})();
var state__27025__auto__ = (function (){var statearr_29522 = f__27024__auto__.call(null);
(statearr_29522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto__);

return statearr_29522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto__))
);

return c__27023__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29549 = [];
var len__25852__auto___29552 = arguments.length;
var i__25853__auto___29553 = (0);
while(true){
if((i__25853__auto___29553 < len__25852__auto___29552)){
args29549.push((arguments[i__25853__auto___29553]));

var G__29554 = (i__25853__auto___29553 + (1));
i__25853__auto___29553 = G__29554;
continue;
} else {
}
break;
}

var G__29551 = args29549.length;
switch (G__29551) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29549.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29556 = [];
var len__25852__auto___29559 = arguments.length;
var i__25853__auto___29560 = (0);
while(true){
if((i__25853__auto___29560 < len__25852__auto___29559)){
args29556.push((arguments[i__25853__auto___29560]));

var G__29561 = (i__25853__auto___29560 + (1));
i__25853__auto___29560 = G__29561;
continue;
} else {
}
break;
}

var G__29558 = args29556.length;
switch (G__29558) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29556.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29563 = [];
var len__25852__auto___29614 = arguments.length;
var i__25853__auto___29615 = (0);
while(true){
if((i__25853__auto___29615 < len__25852__auto___29614)){
args29563.push((arguments[i__25853__auto___29615]));

var G__29616 = (i__25853__auto___29615 + (1));
i__25853__auto___29615 = G__29616;
continue;
} else {
}
break;
}

var G__29565 = args29563.length;
switch (G__29565) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29563.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27023__auto___29618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___29618,out){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto___29618,out){
return (function (state_29589){
var state_val_29590 = (state_29589[(1)]);
if((state_val_29590 === (7))){
var inst_29584 = (state_29589[(2)]);
var state_29589__$1 = state_29589;
var statearr_29591_29619 = state_29589__$1;
(statearr_29591_29619[(2)] = inst_29584);

(statearr_29591_29619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (1))){
var inst_29566 = null;
var state_29589__$1 = (function (){var statearr_29592 = state_29589;
(statearr_29592[(7)] = inst_29566);

return statearr_29592;
})();
var statearr_29593_29620 = state_29589__$1;
(statearr_29593_29620[(2)] = null);

(statearr_29593_29620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (4))){
var inst_29569 = (state_29589[(8)]);
var inst_29569__$1 = (state_29589[(2)]);
var inst_29570 = (inst_29569__$1 == null);
var inst_29571 = cljs.core.not.call(null,inst_29570);
var state_29589__$1 = (function (){var statearr_29594 = state_29589;
(statearr_29594[(8)] = inst_29569__$1);

return statearr_29594;
})();
if(inst_29571){
var statearr_29595_29621 = state_29589__$1;
(statearr_29595_29621[(1)] = (5));

} else {
var statearr_29596_29622 = state_29589__$1;
(statearr_29596_29622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (6))){
var state_29589__$1 = state_29589;
var statearr_29597_29623 = state_29589__$1;
(statearr_29597_29623[(2)] = null);

(statearr_29597_29623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (3))){
var inst_29586 = (state_29589[(2)]);
var inst_29587 = cljs.core.async.close_BANG_.call(null,out);
var state_29589__$1 = (function (){var statearr_29598 = state_29589;
(statearr_29598[(9)] = inst_29586);

return statearr_29598;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29589__$1,inst_29587);
} else {
if((state_val_29590 === (2))){
var state_29589__$1 = state_29589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29589__$1,(4),ch);
} else {
if((state_val_29590 === (11))){
var inst_29569 = (state_29589[(8)]);
var inst_29578 = (state_29589[(2)]);
var inst_29566 = inst_29569;
var state_29589__$1 = (function (){var statearr_29599 = state_29589;
(statearr_29599[(10)] = inst_29578);

(statearr_29599[(7)] = inst_29566);

return statearr_29599;
})();
var statearr_29600_29624 = state_29589__$1;
(statearr_29600_29624[(2)] = null);

(statearr_29600_29624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (9))){
var inst_29569 = (state_29589[(8)]);
var state_29589__$1 = state_29589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29589__$1,(11),out,inst_29569);
} else {
if((state_val_29590 === (5))){
var inst_29569 = (state_29589[(8)]);
var inst_29566 = (state_29589[(7)]);
var inst_29573 = cljs.core._EQ_.call(null,inst_29569,inst_29566);
var state_29589__$1 = state_29589;
if(inst_29573){
var statearr_29602_29625 = state_29589__$1;
(statearr_29602_29625[(1)] = (8));

} else {
var statearr_29603_29626 = state_29589__$1;
(statearr_29603_29626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (10))){
var inst_29581 = (state_29589[(2)]);
var state_29589__$1 = state_29589;
var statearr_29604_29627 = state_29589__$1;
(statearr_29604_29627[(2)] = inst_29581);

(statearr_29604_29627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29590 === (8))){
var inst_29566 = (state_29589[(7)]);
var tmp29601 = inst_29566;
var inst_29566__$1 = tmp29601;
var state_29589__$1 = (function (){var statearr_29605 = state_29589;
(statearr_29605[(7)] = inst_29566__$1);

return statearr_29605;
})();
var statearr_29606_29628 = state_29589__$1;
(statearr_29606_29628[(2)] = null);

(statearr_29606_29628[(1)] = (2));


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
});})(c__27023__auto___29618,out))
;
return ((function (switch__26911__auto__,c__27023__auto___29618,out){
return (function() {
var cljs$core$async$state_machine__26912__auto__ = null;
var cljs$core$async$state_machine__26912__auto____0 = (function (){
var statearr_29610 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29610[(0)] = cljs$core$async$state_machine__26912__auto__);

(statearr_29610[(1)] = (1));

return statearr_29610;
});
var cljs$core$async$state_machine__26912__auto____1 = (function (state_29589){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_29589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e29611){if((e29611 instanceof Object)){
var ex__26915__auto__ = e29611;
var statearr_29612_29629 = state_29589;
(statearr_29612_29629[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29630 = state_29589;
state_29589 = G__29630;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
cljs$core$async$state_machine__26912__auto__ = function(state_29589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26912__auto____1.call(this,state_29589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26912__auto____0;
cljs$core$async$state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26912__auto____1;
return cljs$core$async$state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto___29618,out))
})();
var state__27025__auto__ = (function (){var statearr_29613 = f__27024__auto__.call(null);
(statearr_29613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto___29618);

return statearr_29613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___29618,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29631 = [];
var len__25852__auto___29701 = arguments.length;
var i__25853__auto___29702 = (0);
while(true){
if((i__25853__auto___29702 < len__25852__auto___29701)){
args29631.push((arguments[i__25853__auto___29702]));

var G__29703 = (i__25853__auto___29702 + (1));
i__25853__auto___29702 = G__29703;
continue;
} else {
}
break;
}

var G__29633 = args29631.length;
switch (G__29633) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29631.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27023__auto___29705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___29705,out){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto___29705,out){
return (function (state_29671){
var state_val_29672 = (state_29671[(1)]);
if((state_val_29672 === (7))){
var inst_29667 = (state_29671[(2)]);
var state_29671__$1 = state_29671;
var statearr_29673_29706 = state_29671__$1;
(statearr_29673_29706[(2)] = inst_29667);

(statearr_29673_29706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (1))){
var inst_29634 = (new Array(n));
var inst_29635 = inst_29634;
var inst_29636 = (0);
var state_29671__$1 = (function (){var statearr_29674 = state_29671;
(statearr_29674[(7)] = inst_29635);

(statearr_29674[(8)] = inst_29636);

return statearr_29674;
})();
var statearr_29675_29707 = state_29671__$1;
(statearr_29675_29707[(2)] = null);

(statearr_29675_29707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (4))){
var inst_29639 = (state_29671[(9)]);
var inst_29639__$1 = (state_29671[(2)]);
var inst_29640 = (inst_29639__$1 == null);
var inst_29641 = cljs.core.not.call(null,inst_29640);
var state_29671__$1 = (function (){var statearr_29676 = state_29671;
(statearr_29676[(9)] = inst_29639__$1);

return statearr_29676;
})();
if(inst_29641){
var statearr_29677_29708 = state_29671__$1;
(statearr_29677_29708[(1)] = (5));

} else {
var statearr_29678_29709 = state_29671__$1;
(statearr_29678_29709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (15))){
var inst_29661 = (state_29671[(2)]);
var state_29671__$1 = state_29671;
var statearr_29679_29710 = state_29671__$1;
(statearr_29679_29710[(2)] = inst_29661);

(statearr_29679_29710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (13))){
var state_29671__$1 = state_29671;
var statearr_29680_29711 = state_29671__$1;
(statearr_29680_29711[(2)] = null);

(statearr_29680_29711[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (6))){
var inst_29636 = (state_29671[(8)]);
var inst_29657 = (inst_29636 > (0));
var state_29671__$1 = state_29671;
if(cljs.core.truth_(inst_29657)){
var statearr_29681_29712 = state_29671__$1;
(statearr_29681_29712[(1)] = (12));

} else {
var statearr_29682_29713 = state_29671__$1;
(statearr_29682_29713[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (3))){
var inst_29669 = (state_29671[(2)]);
var state_29671__$1 = state_29671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29671__$1,inst_29669);
} else {
if((state_val_29672 === (12))){
var inst_29635 = (state_29671[(7)]);
var inst_29659 = cljs.core.vec.call(null,inst_29635);
var state_29671__$1 = state_29671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29671__$1,(15),out,inst_29659);
} else {
if((state_val_29672 === (2))){
var state_29671__$1 = state_29671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29671__$1,(4),ch);
} else {
if((state_val_29672 === (11))){
var inst_29651 = (state_29671[(2)]);
var inst_29652 = (new Array(n));
var inst_29635 = inst_29652;
var inst_29636 = (0);
var state_29671__$1 = (function (){var statearr_29683 = state_29671;
(statearr_29683[(7)] = inst_29635);

(statearr_29683[(8)] = inst_29636);

(statearr_29683[(10)] = inst_29651);

return statearr_29683;
})();
var statearr_29684_29714 = state_29671__$1;
(statearr_29684_29714[(2)] = null);

(statearr_29684_29714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (9))){
var inst_29635 = (state_29671[(7)]);
var inst_29649 = cljs.core.vec.call(null,inst_29635);
var state_29671__$1 = state_29671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29671__$1,(11),out,inst_29649);
} else {
if((state_val_29672 === (5))){
var inst_29635 = (state_29671[(7)]);
var inst_29639 = (state_29671[(9)]);
var inst_29636 = (state_29671[(8)]);
var inst_29644 = (state_29671[(11)]);
var inst_29643 = (inst_29635[inst_29636] = inst_29639);
var inst_29644__$1 = (inst_29636 + (1));
var inst_29645 = (inst_29644__$1 < n);
var state_29671__$1 = (function (){var statearr_29685 = state_29671;
(statearr_29685[(11)] = inst_29644__$1);

(statearr_29685[(12)] = inst_29643);

return statearr_29685;
})();
if(cljs.core.truth_(inst_29645)){
var statearr_29686_29715 = state_29671__$1;
(statearr_29686_29715[(1)] = (8));

} else {
var statearr_29687_29716 = state_29671__$1;
(statearr_29687_29716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (14))){
var inst_29664 = (state_29671[(2)]);
var inst_29665 = cljs.core.async.close_BANG_.call(null,out);
var state_29671__$1 = (function (){var statearr_29689 = state_29671;
(statearr_29689[(13)] = inst_29664);

return statearr_29689;
})();
var statearr_29690_29717 = state_29671__$1;
(statearr_29690_29717[(2)] = inst_29665);

(statearr_29690_29717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (10))){
var inst_29655 = (state_29671[(2)]);
var state_29671__$1 = state_29671;
var statearr_29691_29718 = state_29671__$1;
(statearr_29691_29718[(2)] = inst_29655);

(statearr_29691_29718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29672 === (8))){
var inst_29635 = (state_29671[(7)]);
var inst_29644 = (state_29671[(11)]);
var tmp29688 = inst_29635;
var inst_29635__$1 = tmp29688;
var inst_29636 = inst_29644;
var state_29671__$1 = (function (){var statearr_29692 = state_29671;
(statearr_29692[(7)] = inst_29635__$1);

(statearr_29692[(8)] = inst_29636);

return statearr_29692;
})();
var statearr_29693_29719 = state_29671__$1;
(statearr_29693_29719[(2)] = null);

(statearr_29693_29719[(1)] = (2));


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
});})(c__27023__auto___29705,out))
;
return ((function (switch__26911__auto__,c__27023__auto___29705,out){
return (function() {
var cljs$core$async$state_machine__26912__auto__ = null;
var cljs$core$async$state_machine__26912__auto____0 = (function (){
var statearr_29697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29697[(0)] = cljs$core$async$state_machine__26912__auto__);

(statearr_29697[(1)] = (1));

return statearr_29697;
});
var cljs$core$async$state_machine__26912__auto____1 = (function (state_29671){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_29671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e29698){if((e29698 instanceof Object)){
var ex__26915__auto__ = e29698;
var statearr_29699_29720 = state_29671;
(statearr_29699_29720[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29721 = state_29671;
state_29671 = G__29721;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
cljs$core$async$state_machine__26912__auto__ = function(state_29671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26912__auto____1.call(this,state_29671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26912__auto____0;
cljs$core$async$state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26912__auto____1;
return cljs$core$async$state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto___29705,out))
})();
var state__27025__auto__ = (function (){var statearr_29700 = f__27024__auto__.call(null);
(statearr_29700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto___29705);

return statearr_29700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___29705,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29722 = [];
var len__25852__auto___29796 = arguments.length;
var i__25853__auto___29797 = (0);
while(true){
if((i__25853__auto___29797 < len__25852__auto___29796)){
args29722.push((arguments[i__25853__auto___29797]));

var G__29798 = (i__25853__auto___29797 + (1));
i__25853__auto___29797 = G__29798;
continue;
} else {
}
break;
}

var G__29724 = args29722.length;
switch (G__29724) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29722.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27023__auto___29800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___29800,out){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto___29800,out){
return (function (state_29766){
var state_val_29767 = (state_29766[(1)]);
if((state_val_29767 === (7))){
var inst_29762 = (state_29766[(2)]);
var state_29766__$1 = state_29766;
var statearr_29768_29801 = state_29766__$1;
(statearr_29768_29801[(2)] = inst_29762);

(statearr_29768_29801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (1))){
var inst_29725 = [];
var inst_29726 = inst_29725;
var inst_29727 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29766__$1 = (function (){var statearr_29769 = state_29766;
(statearr_29769[(7)] = inst_29726);

(statearr_29769[(8)] = inst_29727);

return statearr_29769;
})();
var statearr_29770_29802 = state_29766__$1;
(statearr_29770_29802[(2)] = null);

(statearr_29770_29802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (4))){
var inst_29730 = (state_29766[(9)]);
var inst_29730__$1 = (state_29766[(2)]);
var inst_29731 = (inst_29730__$1 == null);
var inst_29732 = cljs.core.not.call(null,inst_29731);
var state_29766__$1 = (function (){var statearr_29771 = state_29766;
(statearr_29771[(9)] = inst_29730__$1);

return statearr_29771;
})();
if(inst_29732){
var statearr_29772_29803 = state_29766__$1;
(statearr_29772_29803[(1)] = (5));

} else {
var statearr_29773_29804 = state_29766__$1;
(statearr_29773_29804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (15))){
var inst_29756 = (state_29766[(2)]);
var state_29766__$1 = state_29766;
var statearr_29774_29805 = state_29766__$1;
(statearr_29774_29805[(2)] = inst_29756);

(statearr_29774_29805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (13))){
var state_29766__$1 = state_29766;
var statearr_29775_29806 = state_29766__$1;
(statearr_29775_29806[(2)] = null);

(statearr_29775_29806[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (6))){
var inst_29726 = (state_29766[(7)]);
var inst_29751 = inst_29726.length;
var inst_29752 = (inst_29751 > (0));
var state_29766__$1 = state_29766;
if(cljs.core.truth_(inst_29752)){
var statearr_29776_29807 = state_29766__$1;
(statearr_29776_29807[(1)] = (12));

} else {
var statearr_29777_29808 = state_29766__$1;
(statearr_29777_29808[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (3))){
var inst_29764 = (state_29766[(2)]);
var state_29766__$1 = state_29766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29766__$1,inst_29764);
} else {
if((state_val_29767 === (12))){
var inst_29726 = (state_29766[(7)]);
var inst_29754 = cljs.core.vec.call(null,inst_29726);
var state_29766__$1 = state_29766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29766__$1,(15),out,inst_29754);
} else {
if((state_val_29767 === (2))){
var state_29766__$1 = state_29766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29766__$1,(4),ch);
} else {
if((state_val_29767 === (11))){
var inst_29734 = (state_29766[(10)]);
var inst_29730 = (state_29766[(9)]);
var inst_29744 = (state_29766[(2)]);
var inst_29745 = [];
var inst_29746 = inst_29745.push(inst_29730);
var inst_29726 = inst_29745;
var inst_29727 = inst_29734;
var state_29766__$1 = (function (){var statearr_29778 = state_29766;
(statearr_29778[(7)] = inst_29726);

(statearr_29778[(11)] = inst_29746);

(statearr_29778[(12)] = inst_29744);

(statearr_29778[(8)] = inst_29727);

return statearr_29778;
})();
var statearr_29779_29809 = state_29766__$1;
(statearr_29779_29809[(2)] = null);

(statearr_29779_29809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (9))){
var inst_29726 = (state_29766[(7)]);
var inst_29742 = cljs.core.vec.call(null,inst_29726);
var state_29766__$1 = state_29766;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29766__$1,(11),out,inst_29742);
} else {
if((state_val_29767 === (5))){
var inst_29734 = (state_29766[(10)]);
var inst_29730 = (state_29766[(9)]);
var inst_29727 = (state_29766[(8)]);
var inst_29734__$1 = f.call(null,inst_29730);
var inst_29735 = cljs.core._EQ_.call(null,inst_29734__$1,inst_29727);
var inst_29736 = cljs.core.keyword_identical_QMARK_.call(null,inst_29727,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29737 = (inst_29735) || (inst_29736);
var state_29766__$1 = (function (){var statearr_29780 = state_29766;
(statearr_29780[(10)] = inst_29734__$1);

return statearr_29780;
})();
if(cljs.core.truth_(inst_29737)){
var statearr_29781_29810 = state_29766__$1;
(statearr_29781_29810[(1)] = (8));

} else {
var statearr_29782_29811 = state_29766__$1;
(statearr_29782_29811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (14))){
var inst_29759 = (state_29766[(2)]);
var inst_29760 = cljs.core.async.close_BANG_.call(null,out);
var state_29766__$1 = (function (){var statearr_29784 = state_29766;
(statearr_29784[(13)] = inst_29759);

return statearr_29784;
})();
var statearr_29785_29812 = state_29766__$1;
(statearr_29785_29812[(2)] = inst_29760);

(statearr_29785_29812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (10))){
var inst_29749 = (state_29766[(2)]);
var state_29766__$1 = state_29766;
var statearr_29786_29813 = state_29766__$1;
(statearr_29786_29813[(2)] = inst_29749);

(statearr_29786_29813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29767 === (8))){
var inst_29726 = (state_29766[(7)]);
var inst_29734 = (state_29766[(10)]);
var inst_29730 = (state_29766[(9)]);
var inst_29739 = inst_29726.push(inst_29730);
var tmp29783 = inst_29726;
var inst_29726__$1 = tmp29783;
var inst_29727 = inst_29734;
var state_29766__$1 = (function (){var statearr_29787 = state_29766;
(statearr_29787[(7)] = inst_29726__$1);

(statearr_29787[(14)] = inst_29739);

(statearr_29787[(8)] = inst_29727);

return statearr_29787;
})();
var statearr_29788_29814 = state_29766__$1;
(statearr_29788_29814[(2)] = null);

(statearr_29788_29814[(1)] = (2));


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
});})(c__27023__auto___29800,out))
;
return ((function (switch__26911__auto__,c__27023__auto___29800,out){
return (function() {
var cljs$core$async$state_machine__26912__auto__ = null;
var cljs$core$async$state_machine__26912__auto____0 = (function (){
var statearr_29792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29792[(0)] = cljs$core$async$state_machine__26912__auto__);

(statearr_29792[(1)] = (1));

return statearr_29792;
});
var cljs$core$async$state_machine__26912__auto____1 = (function (state_29766){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_29766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e29793){if((e29793 instanceof Object)){
var ex__26915__auto__ = e29793;
var statearr_29794_29815 = state_29766;
(statearr_29794_29815[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29816 = state_29766;
state_29766 = G__29816;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
cljs$core$async$state_machine__26912__auto__ = function(state_29766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26912__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26912__auto____1.call(this,state_29766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26912__auto____0;
cljs$core$async$state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26912__auto____1;
return cljs$core$async$state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto___29800,out))
})();
var state__27025__auto__ = (function (){var statearr_29795 = f__27024__auto__.call(null);
(statearr_29795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto___29800);

return statearr_29795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___29800,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1485355879420