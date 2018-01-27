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
var args27018 = [];
var len__25876__auto___27024 = arguments.length;
var i__25877__auto___27025 = (0);
while(true){
if((i__25877__auto___27025 < len__25876__auto___27024)){
args27018.push((arguments[i__25877__auto___27025]));

var G__27026 = (i__25877__auto___27025 + (1));
i__25877__auto___27025 = G__27026;
continue;
} else {
}
break;
}

var G__27020 = args27018.length;
switch (G__27020) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27018.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27021 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27021 = (function (f,blockable,meta27022){
this.f = f;
this.blockable = blockable;
this.meta27022 = meta27022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27023,meta27022__$1){
var self__ = this;
var _27023__$1 = this;
return (new cljs.core.async.t_cljs$core$async27021(self__.f,self__.blockable,meta27022__$1));
});

cljs.core.async.t_cljs$core$async27021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27023){
var self__ = this;
var _27023__$1 = this;
return self__.meta27022;
});

cljs.core.async.t_cljs$core$async27021.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27021.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27021.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27021.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27022","meta27022",-1165465141,null)], null);
});

cljs.core.async.t_cljs$core$async27021.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27021";

cljs.core.async.t_cljs$core$async27021.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__,opt__25409__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"cljs.core.async/t_cljs$core$async27021");
});

cljs.core.async.__GT_t_cljs$core$async27021 = (function cljs$core$async$__GT_t_cljs$core$async27021(f__$1,blockable__$1,meta27022){
return (new cljs.core.async.t_cljs$core$async27021(f__$1,blockable__$1,meta27022));
});

}

return (new cljs.core.async.t_cljs$core$async27021(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args27030 = [];
var len__25876__auto___27033 = arguments.length;
var i__25877__auto___27034 = (0);
while(true){
if((i__25877__auto___27034 < len__25876__auto___27033)){
args27030.push((arguments[i__25877__auto___27034]));

var G__27035 = (i__25877__auto___27034 + (1));
i__25877__auto___27034 = G__27035;
continue;
} else {
}
break;
}

var G__27032 = args27030.length;
switch (G__27032) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27030.length)].join('')));

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
var args27037 = [];
var len__25876__auto___27040 = arguments.length;
var i__25877__auto___27041 = (0);
while(true){
if((i__25877__auto___27041 < len__25876__auto___27040)){
args27037.push((arguments[i__25877__auto___27041]));

var G__27042 = (i__25877__auto___27041 + (1));
i__25877__auto___27041 = G__27042;
continue;
} else {
}
break;
}

var G__27039 = args27037.length;
switch (G__27039) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27037.length)].join('')));

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
var args27044 = [];
var len__25876__auto___27047 = arguments.length;
var i__25877__auto___27048 = (0);
while(true){
if((i__25877__auto___27048 < len__25876__auto___27047)){
args27044.push((arguments[i__25877__auto___27048]));

var G__27049 = (i__25877__auto___27048 + (1));
i__25877__auto___27048 = G__27049;
continue;
} else {
}
break;
}

var G__27046 = args27044.length;
switch (G__27046) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27044.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27051 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27051);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27051,ret){
return (function (){
return fn1.call(null,val_27051);
});})(val_27051,ret))
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
var args27052 = [];
var len__25876__auto___27055 = arguments.length;
var i__25877__auto___27056 = (0);
while(true){
if((i__25877__auto___27056 < len__25876__auto___27055)){
args27052.push((arguments[i__25877__auto___27056]));

var G__27057 = (i__25877__auto___27056 + (1));
i__25877__auto___27056 = G__27057;
continue;
} else {
}
break;
}

var G__27054 = args27052.length;
switch (G__27054) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27052.length)].join('')));

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
var n__25716__auto___27059 = n;
var x_27060 = (0);
while(true){
if((x_27060 < n__25716__auto___27059)){
(a[x_27060] = (0));

var G__27061 = (x_27060 + (1));
x_27060 = G__27061;
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

var G__27062 = (i + (1));
i = G__27062;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27066 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27066 = (function (alt_flag,flag,meta27067){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27067 = meta27067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27068,meta27067__$1){
var self__ = this;
var _27068__$1 = this;
return (new cljs.core.async.t_cljs$core$async27066(self__.alt_flag,self__.flag,meta27067__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27066.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27068){
var self__ = this;
var _27068__$1 = this;
return self__.meta27067;
});})(flag))
;

cljs.core.async.t_cljs$core$async27066.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27066.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27066.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27066.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27066.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27067","meta27067",66165185,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27066.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27066";

cljs.core.async.t_cljs$core$async27066.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25407__auto__,writer__25408__auto__,opt__25409__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"cljs.core.async/t_cljs$core$async27066");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27066 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27066(alt_flag__$1,flag__$1,meta27067){
return (new cljs.core.async.t_cljs$core$async27066(alt_flag__$1,flag__$1,meta27067));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27066(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27072 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27072 = (function (alt_handler,flag,cb,meta27073){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27073 = meta27073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27074,meta27073__$1){
var self__ = this;
var _27074__$1 = this;
return (new cljs.core.async.t_cljs$core$async27072(self__.alt_handler,self__.flag,self__.cb,meta27073__$1));
});

cljs.core.async.t_cljs$core$async27072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27074){
var self__ = this;
var _27074__$1 = this;
return self__.meta27073;
});

cljs.core.async.t_cljs$core$async27072.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27072.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27072.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27072.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27072.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27073","meta27073",-749184392,null)], null);
});

cljs.core.async.t_cljs$core$async27072.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27072.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27072";

cljs.core.async.t_cljs$core$async27072.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__,opt__25409__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"cljs.core.async/t_cljs$core$async27072");
});

cljs.core.async.__GT_t_cljs$core$async27072 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27072(alt_handler__$1,flag__$1,cb__$1,meta27073){
return (new cljs.core.async.t_cljs$core$async27072(alt_handler__$1,flag__$1,cb__$1,meta27073));
});

}

return (new cljs.core.async.t_cljs$core$async27072(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27075_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27075_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27076_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27076_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24801__auto__ = wport;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27077 = (i + (1));
i = G__27077;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24801__auto__ = ret;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24789__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24789__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24789__auto__;
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
var args__25883__auto__ = [];
var len__25876__auto___27083 = arguments.length;
var i__25877__auto___27084 = (0);
while(true){
if((i__25877__auto___27084 < len__25876__auto___27083)){
args__25883__auto__.push((arguments[i__25877__auto___27084]));

var G__27085 = (i__25877__auto___27084 + (1));
i__25877__auto___27084 = G__27085;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((1) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25884__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27080){
var map__27081 = p__27080;
var map__27081__$1 = ((((!((map__27081 == null)))?((((map__27081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27081):map__27081);
var opts = map__27081__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27078){
var G__27079 = cljs.core.first.call(null,seq27078);
var seq27078__$1 = cljs.core.next.call(null,seq27078);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27079,seq27078__$1);
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
var args27086 = [];
var len__25876__auto___27136 = arguments.length;
var i__25877__auto___27137 = (0);
while(true){
if((i__25877__auto___27137 < len__25876__auto___27136)){
args27086.push((arguments[i__25877__auto___27137]));

var G__27138 = (i__25877__auto___27137 + (1));
i__25877__auto___27137 = G__27138;
continue;
} else {
}
break;
}

var G__27088 = args27086.length;
switch (G__27088) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27086.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26973__auto___27140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto___27140){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto___27140){
return (function (state_27112){
var state_val_27113 = (state_27112[(1)]);
if((state_val_27113 === (7))){
var inst_27108 = (state_27112[(2)]);
var state_27112__$1 = state_27112;
var statearr_27114_27141 = state_27112__$1;
(statearr_27114_27141[(2)] = inst_27108);

(statearr_27114_27141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27113 === (1))){
var state_27112__$1 = state_27112;
var statearr_27115_27142 = state_27112__$1;
(statearr_27115_27142[(2)] = null);

(statearr_27115_27142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27113 === (4))){
var inst_27091 = (state_27112[(7)]);
var inst_27091__$1 = (state_27112[(2)]);
var inst_27092 = (inst_27091__$1 == null);
var state_27112__$1 = (function (){var statearr_27116 = state_27112;
(statearr_27116[(7)] = inst_27091__$1);

return statearr_27116;
})();
if(cljs.core.truth_(inst_27092)){
var statearr_27117_27143 = state_27112__$1;
(statearr_27117_27143[(1)] = (5));

} else {
var statearr_27118_27144 = state_27112__$1;
(statearr_27118_27144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27113 === (13))){
var state_27112__$1 = state_27112;
var statearr_27119_27145 = state_27112__$1;
(statearr_27119_27145[(2)] = null);

(statearr_27119_27145[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27113 === (6))){
var inst_27091 = (state_27112[(7)]);
var state_27112__$1 = state_27112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27112__$1,(11),to,inst_27091);
} else {
if((state_val_27113 === (3))){
var inst_27110 = (state_27112[(2)]);
var state_27112__$1 = state_27112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27112__$1,inst_27110);
} else {
if((state_val_27113 === (12))){
var state_27112__$1 = state_27112;
var statearr_27120_27146 = state_27112__$1;
(statearr_27120_27146[(2)] = null);

(statearr_27120_27146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27113 === (2))){
var state_27112__$1 = state_27112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27112__$1,(4),from);
} else {
if((state_val_27113 === (11))){
var inst_27101 = (state_27112[(2)]);
var state_27112__$1 = state_27112;
if(cljs.core.truth_(inst_27101)){
var statearr_27121_27147 = state_27112__$1;
(statearr_27121_27147[(1)] = (12));

} else {
var statearr_27122_27148 = state_27112__$1;
(statearr_27122_27148[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27113 === (9))){
var state_27112__$1 = state_27112;
var statearr_27123_27149 = state_27112__$1;
(statearr_27123_27149[(2)] = null);

(statearr_27123_27149[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27113 === (5))){
var state_27112__$1 = state_27112;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27124_27150 = state_27112__$1;
(statearr_27124_27150[(1)] = (8));

} else {
var statearr_27125_27151 = state_27112__$1;
(statearr_27125_27151[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27113 === (14))){
var inst_27106 = (state_27112[(2)]);
var state_27112__$1 = state_27112;
var statearr_27126_27152 = state_27112__$1;
(statearr_27126_27152[(2)] = inst_27106);

(statearr_27126_27152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27113 === (10))){
var inst_27098 = (state_27112[(2)]);
var state_27112__$1 = state_27112;
var statearr_27127_27153 = state_27112__$1;
(statearr_27127_27153[(2)] = inst_27098);

(statearr_27127_27153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27113 === (8))){
var inst_27095 = cljs.core.async.close_BANG_.call(null,to);
var state_27112__$1 = state_27112;
var statearr_27128_27154 = state_27112__$1;
(statearr_27128_27154[(2)] = inst_27095);

(statearr_27128_27154[(1)] = (10));


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
});})(c__26973__auto___27140))
;
return ((function (switch__26861__auto__,c__26973__auto___27140){
return (function() {
var cljs$core$async$state_machine__26862__auto__ = null;
var cljs$core$async$state_machine__26862__auto____0 = (function (){
var statearr_27132 = [null,null,null,null,null,null,null,null];
(statearr_27132[(0)] = cljs$core$async$state_machine__26862__auto__);

(statearr_27132[(1)] = (1));

return statearr_27132;
});
var cljs$core$async$state_machine__26862__auto____1 = (function (state_27112){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_27112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e27133){if((e27133 instanceof Object)){
var ex__26865__auto__ = e27133;
var statearr_27134_27155 = state_27112;
(statearr_27134_27155[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27156 = state_27112;
state_27112 = G__27156;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
cljs$core$async$state_machine__26862__auto__ = function(state_27112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26862__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26862__auto____1.call(this,state_27112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26862__auto____0;
cljs$core$async$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26862__auto____1;
return cljs$core$async$state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto___27140))
})();
var state__26975__auto__ = (function (){var statearr_27135 = f__26974__auto__.call(null);
(statearr_27135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto___27140);

return statearr_27135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto___27140))
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
return (function (p__27344){
var vec__27345 = p__27344;
var v = cljs.core.nth.call(null,vec__27345,(0),null);
var p = cljs.core.nth.call(null,vec__27345,(1),null);
var job = vec__27345;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26973__auto___27531 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto___27531,res,vec__27345,v,p,job,jobs,results){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto___27531,res,vec__27345,v,p,job,jobs,results){
return (function (state_27352){
var state_val_27353 = (state_27352[(1)]);
if((state_val_27353 === (1))){
var state_27352__$1 = state_27352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27352__$1,(2),res,v);
} else {
if((state_val_27353 === (2))){
var inst_27349 = (state_27352[(2)]);
var inst_27350 = cljs.core.async.close_BANG_.call(null,res);
var state_27352__$1 = (function (){var statearr_27354 = state_27352;
(statearr_27354[(7)] = inst_27349);

return statearr_27354;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27352__$1,inst_27350);
} else {
return null;
}
}
});})(c__26973__auto___27531,res,vec__27345,v,p,job,jobs,results))
;
return ((function (switch__26861__auto__,c__26973__auto___27531,res,vec__27345,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____0 = (function (){
var statearr_27358 = [null,null,null,null,null,null,null,null];
(statearr_27358[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__);

(statearr_27358[(1)] = (1));

return statearr_27358;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____1 = (function (state_27352){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_27352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e27359){if((e27359 instanceof Object)){
var ex__26865__auto__ = e27359;
var statearr_27360_27532 = state_27352;
(statearr_27360_27532[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27533 = state_27352;
state_27352 = G__27533;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__ = function(state_27352){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____1.call(this,state_27352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto___27531,res,vec__27345,v,p,job,jobs,results))
})();
var state__26975__auto__ = (function (){var statearr_27361 = f__26974__auto__.call(null);
(statearr_27361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto___27531);

return statearr_27361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto___27531,res,vec__27345,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27362){
var vec__27363 = p__27362;
var v = cljs.core.nth.call(null,vec__27363,(0),null);
var p = cljs.core.nth.call(null,vec__27363,(1),null);
var job = vec__27363;
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
var n__25716__auto___27534 = n;
var __27535 = (0);
while(true){
if((__27535 < n__25716__auto___27534)){
var G__27366_27536 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27366_27536) {
case "compute":
var c__26973__auto___27538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27535,c__26973__auto___27538,G__27366_27536,n__25716__auto___27534,jobs,results,process,async){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (__27535,c__26973__auto___27538,G__27366_27536,n__25716__auto___27534,jobs,results,process,async){
return (function (state_27379){
var state_val_27380 = (state_27379[(1)]);
if((state_val_27380 === (1))){
var state_27379__$1 = state_27379;
var statearr_27381_27539 = state_27379__$1;
(statearr_27381_27539[(2)] = null);

(statearr_27381_27539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (2))){
var state_27379__$1 = state_27379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27379__$1,(4),jobs);
} else {
if((state_val_27380 === (3))){
var inst_27377 = (state_27379[(2)]);
var state_27379__$1 = state_27379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27379__$1,inst_27377);
} else {
if((state_val_27380 === (4))){
var inst_27369 = (state_27379[(2)]);
var inst_27370 = process.call(null,inst_27369);
var state_27379__$1 = state_27379;
if(cljs.core.truth_(inst_27370)){
var statearr_27382_27540 = state_27379__$1;
(statearr_27382_27540[(1)] = (5));

} else {
var statearr_27383_27541 = state_27379__$1;
(statearr_27383_27541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (5))){
var state_27379__$1 = state_27379;
var statearr_27384_27542 = state_27379__$1;
(statearr_27384_27542[(2)] = null);

(statearr_27384_27542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (6))){
var state_27379__$1 = state_27379;
var statearr_27385_27543 = state_27379__$1;
(statearr_27385_27543[(2)] = null);

(statearr_27385_27543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27380 === (7))){
var inst_27375 = (state_27379[(2)]);
var state_27379__$1 = state_27379;
var statearr_27386_27544 = state_27379__$1;
(statearr_27386_27544[(2)] = inst_27375);

(statearr_27386_27544[(1)] = (3));


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
});})(__27535,c__26973__auto___27538,G__27366_27536,n__25716__auto___27534,jobs,results,process,async))
;
return ((function (__27535,switch__26861__auto__,c__26973__auto___27538,G__27366_27536,n__25716__auto___27534,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____0 = (function (){
var statearr_27390 = [null,null,null,null,null,null,null];
(statearr_27390[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__);

(statearr_27390[(1)] = (1));

return statearr_27390;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____1 = (function (state_27379){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_27379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e27391){if((e27391 instanceof Object)){
var ex__26865__auto__ = e27391;
var statearr_27392_27545 = state_27379;
(statearr_27392_27545[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27546 = state_27379;
state_27379 = G__27546;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__ = function(state_27379){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____1.call(this,state_27379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__;
})()
;})(__27535,switch__26861__auto__,c__26973__auto___27538,G__27366_27536,n__25716__auto___27534,jobs,results,process,async))
})();
var state__26975__auto__ = (function (){var statearr_27393 = f__26974__auto__.call(null);
(statearr_27393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto___27538);

return statearr_27393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(__27535,c__26973__auto___27538,G__27366_27536,n__25716__auto___27534,jobs,results,process,async))
);


break;
case "async":
var c__26973__auto___27547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27535,c__26973__auto___27547,G__27366_27536,n__25716__auto___27534,jobs,results,process,async){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (__27535,c__26973__auto___27547,G__27366_27536,n__25716__auto___27534,jobs,results,process,async){
return (function (state_27406){
var state_val_27407 = (state_27406[(1)]);
if((state_val_27407 === (1))){
var state_27406__$1 = state_27406;
var statearr_27408_27548 = state_27406__$1;
(statearr_27408_27548[(2)] = null);

(statearr_27408_27548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27407 === (2))){
var state_27406__$1 = state_27406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27406__$1,(4),jobs);
} else {
if((state_val_27407 === (3))){
var inst_27404 = (state_27406[(2)]);
var state_27406__$1 = state_27406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27406__$1,inst_27404);
} else {
if((state_val_27407 === (4))){
var inst_27396 = (state_27406[(2)]);
var inst_27397 = async.call(null,inst_27396);
var state_27406__$1 = state_27406;
if(cljs.core.truth_(inst_27397)){
var statearr_27409_27549 = state_27406__$1;
(statearr_27409_27549[(1)] = (5));

} else {
var statearr_27410_27550 = state_27406__$1;
(statearr_27410_27550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27407 === (5))){
var state_27406__$1 = state_27406;
var statearr_27411_27551 = state_27406__$1;
(statearr_27411_27551[(2)] = null);

(statearr_27411_27551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27407 === (6))){
var state_27406__$1 = state_27406;
var statearr_27412_27552 = state_27406__$1;
(statearr_27412_27552[(2)] = null);

(statearr_27412_27552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27407 === (7))){
var inst_27402 = (state_27406[(2)]);
var state_27406__$1 = state_27406;
var statearr_27413_27553 = state_27406__$1;
(statearr_27413_27553[(2)] = inst_27402);

(statearr_27413_27553[(1)] = (3));


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
});})(__27535,c__26973__auto___27547,G__27366_27536,n__25716__auto___27534,jobs,results,process,async))
;
return ((function (__27535,switch__26861__auto__,c__26973__auto___27547,G__27366_27536,n__25716__auto___27534,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____0 = (function (){
var statearr_27417 = [null,null,null,null,null,null,null];
(statearr_27417[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__);

(statearr_27417[(1)] = (1));

return statearr_27417;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____1 = (function (state_27406){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_27406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e27418){if((e27418 instanceof Object)){
var ex__26865__auto__ = e27418;
var statearr_27419_27554 = state_27406;
(statearr_27419_27554[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27555 = state_27406;
state_27406 = G__27555;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__ = function(state_27406){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____1.call(this,state_27406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__;
})()
;})(__27535,switch__26861__auto__,c__26973__auto___27547,G__27366_27536,n__25716__auto___27534,jobs,results,process,async))
})();
var state__26975__auto__ = (function (){var statearr_27420 = f__26974__auto__.call(null);
(statearr_27420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto___27547);

return statearr_27420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(__27535,c__26973__auto___27547,G__27366_27536,n__25716__auto___27534,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27556 = (__27535 + (1));
__27535 = G__27556;
continue;
} else {
}
break;
}

var c__26973__auto___27557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto___27557,jobs,results,process,async){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto___27557,jobs,results,process,async){
return (function (state_27442){
var state_val_27443 = (state_27442[(1)]);
if((state_val_27443 === (1))){
var state_27442__$1 = state_27442;
var statearr_27444_27558 = state_27442__$1;
(statearr_27444_27558[(2)] = null);

(statearr_27444_27558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (2))){
var state_27442__$1 = state_27442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27442__$1,(4),from);
} else {
if((state_val_27443 === (3))){
var inst_27440 = (state_27442[(2)]);
var state_27442__$1 = state_27442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27442__$1,inst_27440);
} else {
if((state_val_27443 === (4))){
var inst_27423 = (state_27442[(7)]);
var inst_27423__$1 = (state_27442[(2)]);
var inst_27424 = (inst_27423__$1 == null);
var state_27442__$1 = (function (){var statearr_27445 = state_27442;
(statearr_27445[(7)] = inst_27423__$1);

return statearr_27445;
})();
if(cljs.core.truth_(inst_27424)){
var statearr_27446_27559 = state_27442__$1;
(statearr_27446_27559[(1)] = (5));

} else {
var statearr_27447_27560 = state_27442__$1;
(statearr_27447_27560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (5))){
var inst_27426 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27442__$1 = state_27442;
var statearr_27448_27561 = state_27442__$1;
(statearr_27448_27561[(2)] = inst_27426);

(statearr_27448_27561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (6))){
var inst_27428 = (state_27442[(8)]);
var inst_27423 = (state_27442[(7)]);
var inst_27428__$1 = cljs.core.async.chan.call(null,(1));
var inst_27429 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27430 = [inst_27423,inst_27428__$1];
var inst_27431 = (new cljs.core.PersistentVector(null,2,(5),inst_27429,inst_27430,null));
var state_27442__$1 = (function (){var statearr_27449 = state_27442;
(statearr_27449[(8)] = inst_27428__$1);

return statearr_27449;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27442__$1,(8),jobs,inst_27431);
} else {
if((state_val_27443 === (7))){
var inst_27438 = (state_27442[(2)]);
var state_27442__$1 = state_27442;
var statearr_27450_27562 = state_27442__$1;
(statearr_27450_27562[(2)] = inst_27438);

(statearr_27450_27562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27443 === (8))){
var inst_27428 = (state_27442[(8)]);
var inst_27433 = (state_27442[(2)]);
var state_27442__$1 = (function (){var statearr_27451 = state_27442;
(statearr_27451[(9)] = inst_27433);

return statearr_27451;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27442__$1,(9),results,inst_27428);
} else {
if((state_val_27443 === (9))){
var inst_27435 = (state_27442[(2)]);
var state_27442__$1 = (function (){var statearr_27452 = state_27442;
(statearr_27452[(10)] = inst_27435);

return statearr_27452;
})();
var statearr_27453_27563 = state_27442__$1;
(statearr_27453_27563[(2)] = null);

(statearr_27453_27563[(1)] = (2));


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
});})(c__26973__auto___27557,jobs,results,process,async))
;
return ((function (switch__26861__auto__,c__26973__auto___27557,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____0 = (function (){
var statearr_27457 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27457[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__);

(statearr_27457[(1)] = (1));

return statearr_27457;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____1 = (function (state_27442){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_27442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e27458){if((e27458 instanceof Object)){
var ex__26865__auto__ = e27458;
var statearr_27459_27564 = state_27442;
(statearr_27459_27564[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27565 = state_27442;
state_27442 = G__27565;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__ = function(state_27442){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____1.call(this,state_27442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto___27557,jobs,results,process,async))
})();
var state__26975__auto__ = (function (){var statearr_27460 = f__26974__auto__.call(null);
(statearr_27460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto___27557);

return statearr_27460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto___27557,jobs,results,process,async))
);


var c__26973__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto__,jobs,results,process,async){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto__,jobs,results,process,async){
return (function (state_27498){
var state_val_27499 = (state_27498[(1)]);
if((state_val_27499 === (7))){
var inst_27494 = (state_27498[(2)]);
var state_27498__$1 = state_27498;
var statearr_27500_27566 = state_27498__$1;
(statearr_27500_27566[(2)] = inst_27494);

(statearr_27500_27566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (20))){
var state_27498__$1 = state_27498;
var statearr_27501_27567 = state_27498__$1;
(statearr_27501_27567[(2)] = null);

(statearr_27501_27567[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (1))){
var state_27498__$1 = state_27498;
var statearr_27502_27568 = state_27498__$1;
(statearr_27502_27568[(2)] = null);

(statearr_27502_27568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (4))){
var inst_27463 = (state_27498[(7)]);
var inst_27463__$1 = (state_27498[(2)]);
var inst_27464 = (inst_27463__$1 == null);
var state_27498__$1 = (function (){var statearr_27503 = state_27498;
(statearr_27503[(7)] = inst_27463__$1);

return statearr_27503;
})();
if(cljs.core.truth_(inst_27464)){
var statearr_27504_27569 = state_27498__$1;
(statearr_27504_27569[(1)] = (5));

} else {
var statearr_27505_27570 = state_27498__$1;
(statearr_27505_27570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (15))){
var inst_27476 = (state_27498[(8)]);
var state_27498__$1 = state_27498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27498__$1,(18),to,inst_27476);
} else {
if((state_val_27499 === (21))){
var inst_27489 = (state_27498[(2)]);
var state_27498__$1 = state_27498;
var statearr_27506_27571 = state_27498__$1;
(statearr_27506_27571[(2)] = inst_27489);

(statearr_27506_27571[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (13))){
var inst_27491 = (state_27498[(2)]);
var state_27498__$1 = (function (){var statearr_27507 = state_27498;
(statearr_27507[(9)] = inst_27491);

return statearr_27507;
})();
var statearr_27508_27572 = state_27498__$1;
(statearr_27508_27572[(2)] = null);

(statearr_27508_27572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (6))){
var inst_27463 = (state_27498[(7)]);
var state_27498__$1 = state_27498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27498__$1,(11),inst_27463);
} else {
if((state_val_27499 === (17))){
var inst_27484 = (state_27498[(2)]);
var state_27498__$1 = state_27498;
if(cljs.core.truth_(inst_27484)){
var statearr_27509_27573 = state_27498__$1;
(statearr_27509_27573[(1)] = (19));

} else {
var statearr_27510_27574 = state_27498__$1;
(statearr_27510_27574[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (3))){
var inst_27496 = (state_27498[(2)]);
var state_27498__$1 = state_27498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27498__$1,inst_27496);
} else {
if((state_val_27499 === (12))){
var inst_27473 = (state_27498[(10)]);
var state_27498__$1 = state_27498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27498__$1,(14),inst_27473);
} else {
if((state_val_27499 === (2))){
var state_27498__$1 = state_27498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27498__$1,(4),results);
} else {
if((state_val_27499 === (19))){
var state_27498__$1 = state_27498;
var statearr_27511_27575 = state_27498__$1;
(statearr_27511_27575[(2)] = null);

(statearr_27511_27575[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (11))){
var inst_27473 = (state_27498[(2)]);
var state_27498__$1 = (function (){var statearr_27512 = state_27498;
(statearr_27512[(10)] = inst_27473);

return statearr_27512;
})();
var statearr_27513_27576 = state_27498__$1;
(statearr_27513_27576[(2)] = null);

(statearr_27513_27576[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (9))){
var state_27498__$1 = state_27498;
var statearr_27514_27577 = state_27498__$1;
(statearr_27514_27577[(2)] = null);

(statearr_27514_27577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (5))){
var state_27498__$1 = state_27498;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27515_27578 = state_27498__$1;
(statearr_27515_27578[(1)] = (8));

} else {
var statearr_27516_27579 = state_27498__$1;
(statearr_27516_27579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (14))){
var inst_27476 = (state_27498[(8)]);
var inst_27478 = (state_27498[(11)]);
var inst_27476__$1 = (state_27498[(2)]);
var inst_27477 = (inst_27476__$1 == null);
var inst_27478__$1 = cljs.core.not.call(null,inst_27477);
var state_27498__$1 = (function (){var statearr_27517 = state_27498;
(statearr_27517[(8)] = inst_27476__$1);

(statearr_27517[(11)] = inst_27478__$1);

return statearr_27517;
})();
if(inst_27478__$1){
var statearr_27518_27580 = state_27498__$1;
(statearr_27518_27580[(1)] = (15));

} else {
var statearr_27519_27581 = state_27498__$1;
(statearr_27519_27581[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (16))){
var inst_27478 = (state_27498[(11)]);
var state_27498__$1 = state_27498;
var statearr_27520_27582 = state_27498__$1;
(statearr_27520_27582[(2)] = inst_27478);

(statearr_27520_27582[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (10))){
var inst_27470 = (state_27498[(2)]);
var state_27498__$1 = state_27498;
var statearr_27521_27583 = state_27498__$1;
(statearr_27521_27583[(2)] = inst_27470);

(statearr_27521_27583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (18))){
var inst_27481 = (state_27498[(2)]);
var state_27498__$1 = state_27498;
var statearr_27522_27584 = state_27498__$1;
(statearr_27522_27584[(2)] = inst_27481);

(statearr_27522_27584[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27499 === (8))){
var inst_27467 = cljs.core.async.close_BANG_.call(null,to);
var state_27498__$1 = state_27498;
var statearr_27523_27585 = state_27498__$1;
(statearr_27523_27585[(2)] = inst_27467);

(statearr_27523_27585[(1)] = (10));


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
});})(c__26973__auto__,jobs,results,process,async))
;
return ((function (switch__26861__auto__,c__26973__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____0 = (function (){
var statearr_27527 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27527[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__);

(statearr_27527[(1)] = (1));

return statearr_27527;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____1 = (function (state_27498){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_27498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e27528){if((e27528 instanceof Object)){
var ex__26865__auto__ = e27528;
var statearr_27529_27586 = state_27498;
(statearr_27529_27586[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27587 = state_27498;
state_27498 = G__27587;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__ = function(state_27498){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____1.call(this,state_27498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26862__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto__,jobs,results,process,async))
})();
var state__26975__auto__ = (function (){var statearr_27530 = f__26974__auto__.call(null);
(statearr_27530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto__);

return statearr_27530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto__,jobs,results,process,async))
);

return c__26973__auto__;
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
var args27588 = [];
var len__25876__auto___27591 = arguments.length;
var i__25877__auto___27592 = (0);
while(true){
if((i__25877__auto___27592 < len__25876__auto___27591)){
args27588.push((arguments[i__25877__auto___27592]));

var G__27593 = (i__25877__auto___27592 + (1));
i__25877__auto___27592 = G__27593;
continue;
} else {
}
break;
}

var G__27590 = args27588.length;
switch (G__27590) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27588.length)].join('')));

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
var args27595 = [];
var len__25876__auto___27598 = arguments.length;
var i__25877__auto___27599 = (0);
while(true){
if((i__25877__auto___27599 < len__25876__auto___27598)){
args27595.push((arguments[i__25877__auto___27599]));

var G__27600 = (i__25877__auto___27599 + (1));
i__25877__auto___27599 = G__27600;
continue;
} else {
}
break;
}

var G__27597 = args27595.length;
switch (G__27597) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27595.length)].join('')));

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
var args27602 = [];
var len__25876__auto___27655 = arguments.length;
var i__25877__auto___27656 = (0);
while(true){
if((i__25877__auto___27656 < len__25876__auto___27655)){
args27602.push((arguments[i__25877__auto___27656]));

var G__27657 = (i__25877__auto___27656 + (1));
i__25877__auto___27656 = G__27657;
continue;
} else {
}
break;
}

var G__27604 = args27602.length;
switch (G__27604) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27602.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26973__auto___27659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto___27659,tc,fc){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto___27659,tc,fc){
return (function (state_27630){
var state_val_27631 = (state_27630[(1)]);
if((state_val_27631 === (7))){
var inst_27626 = (state_27630[(2)]);
var state_27630__$1 = state_27630;
var statearr_27632_27660 = state_27630__$1;
(statearr_27632_27660[(2)] = inst_27626);

(statearr_27632_27660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (1))){
var state_27630__$1 = state_27630;
var statearr_27633_27661 = state_27630__$1;
(statearr_27633_27661[(2)] = null);

(statearr_27633_27661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (4))){
var inst_27607 = (state_27630[(7)]);
var inst_27607__$1 = (state_27630[(2)]);
var inst_27608 = (inst_27607__$1 == null);
var state_27630__$1 = (function (){var statearr_27634 = state_27630;
(statearr_27634[(7)] = inst_27607__$1);

return statearr_27634;
})();
if(cljs.core.truth_(inst_27608)){
var statearr_27635_27662 = state_27630__$1;
(statearr_27635_27662[(1)] = (5));

} else {
var statearr_27636_27663 = state_27630__$1;
(statearr_27636_27663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (13))){
var state_27630__$1 = state_27630;
var statearr_27637_27664 = state_27630__$1;
(statearr_27637_27664[(2)] = null);

(statearr_27637_27664[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (6))){
var inst_27607 = (state_27630[(7)]);
var inst_27613 = p.call(null,inst_27607);
var state_27630__$1 = state_27630;
if(cljs.core.truth_(inst_27613)){
var statearr_27638_27665 = state_27630__$1;
(statearr_27638_27665[(1)] = (9));

} else {
var statearr_27639_27666 = state_27630__$1;
(statearr_27639_27666[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (3))){
var inst_27628 = (state_27630[(2)]);
var state_27630__$1 = state_27630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27630__$1,inst_27628);
} else {
if((state_val_27631 === (12))){
var state_27630__$1 = state_27630;
var statearr_27640_27667 = state_27630__$1;
(statearr_27640_27667[(2)] = null);

(statearr_27640_27667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (2))){
var state_27630__$1 = state_27630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27630__$1,(4),ch);
} else {
if((state_val_27631 === (11))){
var inst_27607 = (state_27630[(7)]);
var inst_27617 = (state_27630[(2)]);
var state_27630__$1 = state_27630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27630__$1,(8),inst_27617,inst_27607);
} else {
if((state_val_27631 === (9))){
var state_27630__$1 = state_27630;
var statearr_27641_27668 = state_27630__$1;
(statearr_27641_27668[(2)] = tc);

(statearr_27641_27668[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (5))){
var inst_27610 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27611 = cljs.core.async.close_BANG_.call(null,fc);
var state_27630__$1 = (function (){var statearr_27642 = state_27630;
(statearr_27642[(8)] = inst_27610);

return statearr_27642;
})();
var statearr_27643_27669 = state_27630__$1;
(statearr_27643_27669[(2)] = inst_27611);

(statearr_27643_27669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (14))){
var inst_27624 = (state_27630[(2)]);
var state_27630__$1 = state_27630;
var statearr_27644_27670 = state_27630__$1;
(statearr_27644_27670[(2)] = inst_27624);

(statearr_27644_27670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (10))){
var state_27630__$1 = state_27630;
var statearr_27645_27671 = state_27630__$1;
(statearr_27645_27671[(2)] = fc);

(statearr_27645_27671[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (8))){
var inst_27619 = (state_27630[(2)]);
var state_27630__$1 = state_27630;
if(cljs.core.truth_(inst_27619)){
var statearr_27646_27672 = state_27630__$1;
(statearr_27646_27672[(1)] = (12));

} else {
var statearr_27647_27673 = state_27630__$1;
(statearr_27647_27673[(1)] = (13));

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
});})(c__26973__auto___27659,tc,fc))
;
return ((function (switch__26861__auto__,c__26973__auto___27659,tc,fc){
return (function() {
var cljs$core$async$state_machine__26862__auto__ = null;
var cljs$core$async$state_machine__26862__auto____0 = (function (){
var statearr_27651 = [null,null,null,null,null,null,null,null,null];
(statearr_27651[(0)] = cljs$core$async$state_machine__26862__auto__);

(statearr_27651[(1)] = (1));

return statearr_27651;
});
var cljs$core$async$state_machine__26862__auto____1 = (function (state_27630){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_27630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e27652){if((e27652 instanceof Object)){
var ex__26865__auto__ = e27652;
var statearr_27653_27674 = state_27630;
(statearr_27653_27674[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27675 = state_27630;
state_27630 = G__27675;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
cljs$core$async$state_machine__26862__auto__ = function(state_27630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26862__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26862__auto____1.call(this,state_27630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26862__auto____0;
cljs$core$async$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26862__auto____1;
return cljs$core$async$state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto___27659,tc,fc))
})();
var state__26975__auto__ = (function (){var statearr_27654 = f__26974__auto__.call(null);
(statearr_27654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto___27659);

return statearr_27654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto___27659,tc,fc))
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
var c__26973__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto__){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto__){
return (function (state_27739){
var state_val_27740 = (state_27739[(1)]);
if((state_val_27740 === (7))){
var inst_27735 = (state_27739[(2)]);
var state_27739__$1 = state_27739;
var statearr_27741_27762 = state_27739__$1;
(statearr_27741_27762[(2)] = inst_27735);

(statearr_27741_27762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27740 === (1))){
var inst_27719 = init;
var state_27739__$1 = (function (){var statearr_27742 = state_27739;
(statearr_27742[(7)] = inst_27719);

return statearr_27742;
})();
var statearr_27743_27763 = state_27739__$1;
(statearr_27743_27763[(2)] = null);

(statearr_27743_27763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27740 === (4))){
var inst_27722 = (state_27739[(8)]);
var inst_27722__$1 = (state_27739[(2)]);
var inst_27723 = (inst_27722__$1 == null);
var state_27739__$1 = (function (){var statearr_27744 = state_27739;
(statearr_27744[(8)] = inst_27722__$1);

return statearr_27744;
})();
if(cljs.core.truth_(inst_27723)){
var statearr_27745_27764 = state_27739__$1;
(statearr_27745_27764[(1)] = (5));

} else {
var statearr_27746_27765 = state_27739__$1;
(statearr_27746_27765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27740 === (6))){
var inst_27719 = (state_27739[(7)]);
var inst_27726 = (state_27739[(9)]);
var inst_27722 = (state_27739[(8)]);
var inst_27726__$1 = f.call(null,inst_27719,inst_27722);
var inst_27727 = cljs.core.reduced_QMARK_.call(null,inst_27726__$1);
var state_27739__$1 = (function (){var statearr_27747 = state_27739;
(statearr_27747[(9)] = inst_27726__$1);

return statearr_27747;
})();
if(inst_27727){
var statearr_27748_27766 = state_27739__$1;
(statearr_27748_27766[(1)] = (8));

} else {
var statearr_27749_27767 = state_27739__$1;
(statearr_27749_27767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27740 === (3))){
var inst_27737 = (state_27739[(2)]);
var state_27739__$1 = state_27739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27739__$1,inst_27737);
} else {
if((state_val_27740 === (2))){
var state_27739__$1 = state_27739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27739__$1,(4),ch);
} else {
if((state_val_27740 === (9))){
var inst_27726 = (state_27739[(9)]);
var inst_27719 = inst_27726;
var state_27739__$1 = (function (){var statearr_27750 = state_27739;
(statearr_27750[(7)] = inst_27719);

return statearr_27750;
})();
var statearr_27751_27768 = state_27739__$1;
(statearr_27751_27768[(2)] = null);

(statearr_27751_27768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27740 === (5))){
var inst_27719 = (state_27739[(7)]);
var state_27739__$1 = state_27739;
var statearr_27752_27769 = state_27739__$1;
(statearr_27752_27769[(2)] = inst_27719);

(statearr_27752_27769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27740 === (10))){
var inst_27733 = (state_27739[(2)]);
var state_27739__$1 = state_27739;
var statearr_27753_27770 = state_27739__$1;
(statearr_27753_27770[(2)] = inst_27733);

(statearr_27753_27770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27740 === (8))){
var inst_27726 = (state_27739[(9)]);
var inst_27729 = cljs.core.deref.call(null,inst_27726);
var state_27739__$1 = state_27739;
var statearr_27754_27771 = state_27739__$1;
(statearr_27754_27771[(2)] = inst_27729);

(statearr_27754_27771[(1)] = (10));


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
});})(c__26973__auto__))
;
return ((function (switch__26861__auto__,c__26973__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26862__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26862__auto____0 = (function (){
var statearr_27758 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27758[(0)] = cljs$core$async$reduce_$_state_machine__26862__auto__);

(statearr_27758[(1)] = (1));

return statearr_27758;
});
var cljs$core$async$reduce_$_state_machine__26862__auto____1 = (function (state_27739){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_27739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e27759){if((e27759 instanceof Object)){
var ex__26865__auto__ = e27759;
var statearr_27760_27772 = state_27739;
(statearr_27760_27772[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27773 = state_27739;
state_27739 = G__27773;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26862__auto__ = function(state_27739){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26862__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26862__auto____1.call(this,state_27739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26862__auto____0;
cljs$core$async$reduce_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26862__auto____1;
return cljs$core$async$reduce_$_state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto__))
})();
var state__26975__auto__ = (function (){var statearr_27761 = f__26974__auto__.call(null);
(statearr_27761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto__);

return statearr_27761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto__))
);

return c__26973__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26973__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto__,f__$1){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto__,f__$1){
return (function (state_27793){
var state_val_27794 = (state_27793[(1)]);
if((state_val_27794 === (1))){
var inst_27788 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27793__$1 = state_27793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27793__$1,(2),inst_27788);
} else {
if((state_val_27794 === (2))){
var inst_27790 = (state_27793[(2)]);
var inst_27791 = f__$1.call(null,inst_27790);
var state_27793__$1 = state_27793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27793__$1,inst_27791);
} else {
return null;
}
}
});})(c__26973__auto__,f__$1))
;
return ((function (switch__26861__auto__,c__26973__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26862__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26862__auto____0 = (function (){
var statearr_27798 = [null,null,null,null,null,null,null];
(statearr_27798[(0)] = cljs$core$async$transduce_$_state_machine__26862__auto__);

(statearr_27798[(1)] = (1));

return statearr_27798;
});
var cljs$core$async$transduce_$_state_machine__26862__auto____1 = (function (state_27793){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_27793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e27799){if((e27799 instanceof Object)){
var ex__26865__auto__ = e27799;
var statearr_27800_27802 = state_27793;
(statearr_27800_27802[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27803 = state_27793;
state_27793 = G__27803;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26862__auto__ = function(state_27793){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26862__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26862__auto____1.call(this,state_27793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26862__auto____0;
cljs$core$async$transduce_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26862__auto____1;
return cljs$core$async$transduce_$_state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto__,f__$1))
})();
var state__26975__auto__ = (function (){var statearr_27801 = f__26974__auto__.call(null);
(statearr_27801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto__);

return statearr_27801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto__,f__$1))
);

return c__26973__auto__;
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
var args27804 = [];
var len__25876__auto___27856 = arguments.length;
var i__25877__auto___27857 = (0);
while(true){
if((i__25877__auto___27857 < len__25876__auto___27856)){
args27804.push((arguments[i__25877__auto___27857]));

var G__27858 = (i__25877__auto___27857 + (1));
i__25877__auto___27857 = G__27858;
continue;
} else {
}
break;
}

var G__27806 = args27804.length;
switch (G__27806) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27804.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26973__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto__){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto__){
return (function (state_27831){
var state_val_27832 = (state_27831[(1)]);
if((state_val_27832 === (7))){
var inst_27813 = (state_27831[(2)]);
var state_27831__$1 = state_27831;
var statearr_27833_27860 = state_27831__$1;
(statearr_27833_27860[(2)] = inst_27813);

(statearr_27833_27860[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (1))){
var inst_27807 = cljs.core.seq.call(null,coll);
var inst_27808 = inst_27807;
var state_27831__$1 = (function (){var statearr_27834 = state_27831;
(statearr_27834[(7)] = inst_27808);

return statearr_27834;
})();
var statearr_27835_27861 = state_27831__$1;
(statearr_27835_27861[(2)] = null);

(statearr_27835_27861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (4))){
var inst_27808 = (state_27831[(7)]);
var inst_27811 = cljs.core.first.call(null,inst_27808);
var state_27831__$1 = state_27831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27831__$1,(7),ch,inst_27811);
} else {
if((state_val_27832 === (13))){
var inst_27825 = (state_27831[(2)]);
var state_27831__$1 = state_27831;
var statearr_27836_27862 = state_27831__$1;
(statearr_27836_27862[(2)] = inst_27825);

(statearr_27836_27862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (6))){
var inst_27816 = (state_27831[(2)]);
var state_27831__$1 = state_27831;
if(cljs.core.truth_(inst_27816)){
var statearr_27837_27863 = state_27831__$1;
(statearr_27837_27863[(1)] = (8));

} else {
var statearr_27838_27864 = state_27831__$1;
(statearr_27838_27864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (3))){
var inst_27829 = (state_27831[(2)]);
var state_27831__$1 = state_27831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27831__$1,inst_27829);
} else {
if((state_val_27832 === (12))){
var state_27831__$1 = state_27831;
var statearr_27839_27865 = state_27831__$1;
(statearr_27839_27865[(2)] = null);

(statearr_27839_27865[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (2))){
var inst_27808 = (state_27831[(7)]);
var state_27831__$1 = state_27831;
if(cljs.core.truth_(inst_27808)){
var statearr_27840_27866 = state_27831__$1;
(statearr_27840_27866[(1)] = (4));

} else {
var statearr_27841_27867 = state_27831__$1;
(statearr_27841_27867[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (11))){
var inst_27822 = cljs.core.async.close_BANG_.call(null,ch);
var state_27831__$1 = state_27831;
var statearr_27842_27868 = state_27831__$1;
(statearr_27842_27868[(2)] = inst_27822);

(statearr_27842_27868[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (9))){
var state_27831__$1 = state_27831;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27843_27869 = state_27831__$1;
(statearr_27843_27869[(1)] = (11));

} else {
var statearr_27844_27870 = state_27831__$1;
(statearr_27844_27870[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (5))){
var inst_27808 = (state_27831[(7)]);
var state_27831__$1 = state_27831;
var statearr_27845_27871 = state_27831__$1;
(statearr_27845_27871[(2)] = inst_27808);

(statearr_27845_27871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (10))){
var inst_27827 = (state_27831[(2)]);
var state_27831__$1 = state_27831;
var statearr_27846_27872 = state_27831__$1;
(statearr_27846_27872[(2)] = inst_27827);

(statearr_27846_27872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27832 === (8))){
var inst_27808 = (state_27831[(7)]);
var inst_27818 = cljs.core.next.call(null,inst_27808);
var inst_27808__$1 = inst_27818;
var state_27831__$1 = (function (){var statearr_27847 = state_27831;
(statearr_27847[(7)] = inst_27808__$1);

return statearr_27847;
})();
var statearr_27848_27873 = state_27831__$1;
(statearr_27848_27873[(2)] = null);

(statearr_27848_27873[(1)] = (2));


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
});})(c__26973__auto__))
;
return ((function (switch__26861__auto__,c__26973__auto__){
return (function() {
var cljs$core$async$state_machine__26862__auto__ = null;
var cljs$core$async$state_machine__26862__auto____0 = (function (){
var statearr_27852 = [null,null,null,null,null,null,null,null];
(statearr_27852[(0)] = cljs$core$async$state_machine__26862__auto__);

(statearr_27852[(1)] = (1));

return statearr_27852;
});
var cljs$core$async$state_machine__26862__auto____1 = (function (state_27831){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_27831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e27853){if((e27853 instanceof Object)){
var ex__26865__auto__ = e27853;
var statearr_27854_27874 = state_27831;
(statearr_27854_27874[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27875 = state_27831;
state_27831 = G__27875;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
cljs$core$async$state_machine__26862__auto__ = function(state_27831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26862__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26862__auto____1.call(this,state_27831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26862__auto____0;
cljs$core$async$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26862__auto____1;
return cljs$core$async$state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto__))
})();
var state__26975__auto__ = (function (){var statearr_27855 = f__26974__auto__.call(null);
(statearr_27855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto__);

return statearr_27855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto__))
);

return c__26973__auto__;
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
var x__25464__auto__ = (((_ == null))?null:_);
var m__25465__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,_);
} else {
var m__25465__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,_);
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
var x__25464__auto__ = (((m == null))?null:m);
var m__25465__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25465__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__25464__auto__ = (((m == null))?null:m);
var m__25465__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,m,ch);
} else {
var m__25465__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,m,ch);
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
var x__25464__auto__ = (((m == null))?null:m);
var m__25465__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,m);
} else {
var m__25465__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async28101 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28101 = (function (mult,ch,cs,meta28102){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28102 = meta28102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28103,meta28102__$1){
var self__ = this;
var _28103__$1 = this;
return (new cljs.core.async.t_cljs$core$async28101(self__.mult,self__.ch,self__.cs,meta28102__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28101.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28103){
var self__ = this;
var _28103__$1 = this;
return self__.meta28102;
});})(cs))
;

cljs.core.async.t_cljs$core$async28101.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28101.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28101.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28101.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28101.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28101.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28101.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28102","meta28102",-1129122251,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28101.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28101";

cljs.core.async.t_cljs$core$async28101.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25407__auto__,writer__25408__auto__,opt__25409__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"cljs.core.async/t_cljs$core$async28101");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28101 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28101(mult__$1,ch__$1,cs__$1,meta28102){
return (new cljs.core.async.t_cljs$core$async28101(mult__$1,ch__$1,cs__$1,meta28102));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28101(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26973__auto___28326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto___28326,cs,m,dchan,dctr,done){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto___28326,cs,m,dchan,dctr,done){
return (function (state_28238){
var state_val_28239 = (state_28238[(1)]);
if((state_val_28239 === (7))){
var inst_28234 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
var statearr_28240_28327 = state_28238__$1;
(statearr_28240_28327[(2)] = inst_28234);

(statearr_28240_28327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (20))){
var inst_28137 = (state_28238[(7)]);
var inst_28149 = cljs.core.first.call(null,inst_28137);
var inst_28150 = cljs.core.nth.call(null,inst_28149,(0),null);
var inst_28151 = cljs.core.nth.call(null,inst_28149,(1),null);
var state_28238__$1 = (function (){var statearr_28241 = state_28238;
(statearr_28241[(8)] = inst_28150);

return statearr_28241;
})();
if(cljs.core.truth_(inst_28151)){
var statearr_28242_28328 = state_28238__$1;
(statearr_28242_28328[(1)] = (22));

} else {
var statearr_28243_28329 = state_28238__$1;
(statearr_28243_28329[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (27))){
var inst_28181 = (state_28238[(9)]);
var inst_28186 = (state_28238[(10)]);
var inst_28179 = (state_28238[(11)]);
var inst_28106 = (state_28238[(12)]);
var inst_28186__$1 = cljs.core._nth.call(null,inst_28179,inst_28181);
var inst_28187 = cljs.core.async.put_BANG_.call(null,inst_28186__$1,inst_28106,done);
var state_28238__$1 = (function (){var statearr_28244 = state_28238;
(statearr_28244[(10)] = inst_28186__$1);

return statearr_28244;
})();
if(cljs.core.truth_(inst_28187)){
var statearr_28245_28330 = state_28238__$1;
(statearr_28245_28330[(1)] = (30));

} else {
var statearr_28246_28331 = state_28238__$1;
(statearr_28246_28331[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (1))){
var state_28238__$1 = state_28238;
var statearr_28247_28332 = state_28238__$1;
(statearr_28247_28332[(2)] = null);

(statearr_28247_28332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (24))){
var inst_28137 = (state_28238[(7)]);
var inst_28156 = (state_28238[(2)]);
var inst_28157 = cljs.core.next.call(null,inst_28137);
var inst_28115 = inst_28157;
var inst_28116 = null;
var inst_28117 = (0);
var inst_28118 = (0);
var state_28238__$1 = (function (){var statearr_28248 = state_28238;
(statearr_28248[(13)] = inst_28118);

(statearr_28248[(14)] = inst_28115);

(statearr_28248[(15)] = inst_28156);

(statearr_28248[(16)] = inst_28117);

(statearr_28248[(17)] = inst_28116);

return statearr_28248;
})();
var statearr_28249_28333 = state_28238__$1;
(statearr_28249_28333[(2)] = null);

(statearr_28249_28333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (39))){
var state_28238__$1 = state_28238;
var statearr_28253_28334 = state_28238__$1;
(statearr_28253_28334[(2)] = null);

(statearr_28253_28334[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (4))){
var inst_28106 = (state_28238[(12)]);
var inst_28106__$1 = (state_28238[(2)]);
var inst_28107 = (inst_28106__$1 == null);
var state_28238__$1 = (function (){var statearr_28254 = state_28238;
(statearr_28254[(12)] = inst_28106__$1);

return statearr_28254;
})();
if(cljs.core.truth_(inst_28107)){
var statearr_28255_28335 = state_28238__$1;
(statearr_28255_28335[(1)] = (5));

} else {
var statearr_28256_28336 = state_28238__$1;
(statearr_28256_28336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (15))){
var inst_28118 = (state_28238[(13)]);
var inst_28115 = (state_28238[(14)]);
var inst_28117 = (state_28238[(16)]);
var inst_28116 = (state_28238[(17)]);
var inst_28133 = (state_28238[(2)]);
var inst_28134 = (inst_28118 + (1));
var tmp28250 = inst_28115;
var tmp28251 = inst_28117;
var tmp28252 = inst_28116;
var inst_28115__$1 = tmp28250;
var inst_28116__$1 = tmp28252;
var inst_28117__$1 = tmp28251;
var inst_28118__$1 = inst_28134;
var state_28238__$1 = (function (){var statearr_28257 = state_28238;
(statearr_28257[(13)] = inst_28118__$1);

(statearr_28257[(14)] = inst_28115__$1);

(statearr_28257[(16)] = inst_28117__$1);

(statearr_28257[(18)] = inst_28133);

(statearr_28257[(17)] = inst_28116__$1);

return statearr_28257;
})();
var statearr_28258_28337 = state_28238__$1;
(statearr_28258_28337[(2)] = null);

(statearr_28258_28337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (21))){
var inst_28160 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
var statearr_28262_28338 = state_28238__$1;
(statearr_28262_28338[(2)] = inst_28160);

(statearr_28262_28338[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (31))){
var inst_28186 = (state_28238[(10)]);
var inst_28190 = done.call(null,null);
var inst_28191 = cljs.core.async.untap_STAR_.call(null,m,inst_28186);
var state_28238__$1 = (function (){var statearr_28263 = state_28238;
(statearr_28263[(19)] = inst_28190);

return statearr_28263;
})();
var statearr_28264_28339 = state_28238__$1;
(statearr_28264_28339[(2)] = inst_28191);

(statearr_28264_28339[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (32))){
var inst_28181 = (state_28238[(9)]);
var inst_28178 = (state_28238[(20)]);
var inst_28179 = (state_28238[(11)]);
var inst_28180 = (state_28238[(21)]);
var inst_28193 = (state_28238[(2)]);
var inst_28194 = (inst_28181 + (1));
var tmp28259 = inst_28178;
var tmp28260 = inst_28179;
var tmp28261 = inst_28180;
var inst_28178__$1 = tmp28259;
var inst_28179__$1 = tmp28260;
var inst_28180__$1 = tmp28261;
var inst_28181__$1 = inst_28194;
var state_28238__$1 = (function (){var statearr_28265 = state_28238;
(statearr_28265[(9)] = inst_28181__$1);

(statearr_28265[(22)] = inst_28193);

(statearr_28265[(20)] = inst_28178__$1);

(statearr_28265[(11)] = inst_28179__$1);

(statearr_28265[(21)] = inst_28180__$1);

return statearr_28265;
})();
var statearr_28266_28340 = state_28238__$1;
(statearr_28266_28340[(2)] = null);

(statearr_28266_28340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (40))){
var inst_28206 = (state_28238[(23)]);
var inst_28210 = done.call(null,null);
var inst_28211 = cljs.core.async.untap_STAR_.call(null,m,inst_28206);
var state_28238__$1 = (function (){var statearr_28267 = state_28238;
(statearr_28267[(24)] = inst_28210);

return statearr_28267;
})();
var statearr_28268_28341 = state_28238__$1;
(statearr_28268_28341[(2)] = inst_28211);

(statearr_28268_28341[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (33))){
var inst_28197 = (state_28238[(25)]);
var inst_28199 = cljs.core.chunked_seq_QMARK_.call(null,inst_28197);
var state_28238__$1 = state_28238;
if(inst_28199){
var statearr_28269_28342 = state_28238__$1;
(statearr_28269_28342[(1)] = (36));

} else {
var statearr_28270_28343 = state_28238__$1;
(statearr_28270_28343[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (13))){
var inst_28127 = (state_28238[(26)]);
var inst_28130 = cljs.core.async.close_BANG_.call(null,inst_28127);
var state_28238__$1 = state_28238;
var statearr_28271_28344 = state_28238__$1;
(statearr_28271_28344[(2)] = inst_28130);

(statearr_28271_28344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (22))){
var inst_28150 = (state_28238[(8)]);
var inst_28153 = cljs.core.async.close_BANG_.call(null,inst_28150);
var state_28238__$1 = state_28238;
var statearr_28272_28345 = state_28238__$1;
(statearr_28272_28345[(2)] = inst_28153);

(statearr_28272_28345[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (36))){
var inst_28197 = (state_28238[(25)]);
var inst_28201 = cljs.core.chunk_first.call(null,inst_28197);
var inst_28202 = cljs.core.chunk_rest.call(null,inst_28197);
var inst_28203 = cljs.core.count.call(null,inst_28201);
var inst_28178 = inst_28202;
var inst_28179 = inst_28201;
var inst_28180 = inst_28203;
var inst_28181 = (0);
var state_28238__$1 = (function (){var statearr_28273 = state_28238;
(statearr_28273[(9)] = inst_28181);

(statearr_28273[(20)] = inst_28178);

(statearr_28273[(11)] = inst_28179);

(statearr_28273[(21)] = inst_28180);

return statearr_28273;
})();
var statearr_28274_28346 = state_28238__$1;
(statearr_28274_28346[(2)] = null);

(statearr_28274_28346[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (41))){
var inst_28197 = (state_28238[(25)]);
var inst_28213 = (state_28238[(2)]);
var inst_28214 = cljs.core.next.call(null,inst_28197);
var inst_28178 = inst_28214;
var inst_28179 = null;
var inst_28180 = (0);
var inst_28181 = (0);
var state_28238__$1 = (function (){var statearr_28275 = state_28238;
(statearr_28275[(9)] = inst_28181);

(statearr_28275[(27)] = inst_28213);

(statearr_28275[(20)] = inst_28178);

(statearr_28275[(11)] = inst_28179);

(statearr_28275[(21)] = inst_28180);

return statearr_28275;
})();
var statearr_28276_28347 = state_28238__$1;
(statearr_28276_28347[(2)] = null);

(statearr_28276_28347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (43))){
var state_28238__$1 = state_28238;
var statearr_28277_28348 = state_28238__$1;
(statearr_28277_28348[(2)] = null);

(statearr_28277_28348[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (29))){
var inst_28222 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
var statearr_28278_28349 = state_28238__$1;
(statearr_28278_28349[(2)] = inst_28222);

(statearr_28278_28349[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (44))){
var inst_28231 = (state_28238[(2)]);
var state_28238__$1 = (function (){var statearr_28279 = state_28238;
(statearr_28279[(28)] = inst_28231);

return statearr_28279;
})();
var statearr_28280_28350 = state_28238__$1;
(statearr_28280_28350[(2)] = null);

(statearr_28280_28350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (6))){
var inst_28170 = (state_28238[(29)]);
var inst_28169 = cljs.core.deref.call(null,cs);
var inst_28170__$1 = cljs.core.keys.call(null,inst_28169);
var inst_28171 = cljs.core.count.call(null,inst_28170__$1);
var inst_28172 = cljs.core.reset_BANG_.call(null,dctr,inst_28171);
var inst_28177 = cljs.core.seq.call(null,inst_28170__$1);
var inst_28178 = inst_28177;
var inst_28179 = null;
var inst_28180 = (0);
var inst_28181 = (0);
var state_28238__$1 = (function (){var statearr_28281 = state_28238;
(statearr_28281[(9)] = inst_28181);

(statearr_28281[(29)] = inst_28170__$1);

(statearr_28281[(20)] = inst_28178);

(statearr_28281[(11)] = inst_28179);

(statearr_28281[(30)] = inst_28172);

(statearr_28281[(21)] = inst_28180);

return statearr_28281;
})();
var statearr_28282_28351 = state_28238__$1;
(statearr_28282_28351[(2)] = null);

(statearr_28282_28351[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (28))){
var inst_28178 = (state_28238[(20)]);
var inst_28197 = (state_28238[(25)]);
var inst_28197__$1 = cljs.core.seq.call(null,inst_28178);
var state_28238__$1 = (function (){var statearr_28283 = state_28238;
(statearr_28283[(25)] = inst_28197__$1);

return statearr_28283;
})();
if(inst_28197__$1){
var statearr_28284_28352 = state_28238__$1;
(statearr_28284_28352[(1)] = (33));

} else {
var statearr_28285_28353 = state_28238__$1;
(statearr_28285_28353[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (25))){
var inst_28181 = (state_28238[(9)]);
var inst_28180 = (state_28238[(21)]);
var inst_28183 = (inst_28181 < inst_28180);
var inst_28184 = inst_28183;
var state_28238__$1 = state_28238;
if(cljs.core.truth_(inst_28184)){
var statearr_28286_28354 = state_28238__$1;
(statearr_28286_28354[(1)] = (27));

} else {
var statearr_28287_28355 = state_28238__$1;
(statearr_28287_28355[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (34))){
var state_28238__$1 = state_28238;
var statearr_28288_28356 = state_28238__$1;
(statearr_28288_28356[(2)] = null);

(statearr_28288_28356[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (17))){
var state_28238__$1 = state_28238;
var statearr_28289_28357 = state_28238__$1;
(statearr_28289_28357[(2)] = null);

(statearr_28289_28357[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (3))){
var inst_28236 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28238__$1,inst_28236);
} else {
if((state_val_28239 === (12))){
var inst_28165 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
var statearr_28290_28358 = state_28238__$1;
(statearr_28290_28358[(2)] = inst_28165);

(statearr_28290_28358[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (2))){
var state_28238__$1 = state_28238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28238__$1,(4),ch);
} else {
if((state_val_28239 === (23))){
var state_28238__$1 = state_28238;
var statearr_28291_28359 = state_28238__$1;
(statearr_28291_28359[(2)] = null);

(statearr_28291_28359[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (35))){
var inst_28220 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
var statearr_28292_28360 = state_28238__$1;
(statearr_28292_28360[(2)] = inst_28220);

(statearr_28292_28360[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (19))){
var inst_28137 = (state_28238[(7)]);
var inst_28141 = cljs.core.chunk_first.call(null,inst_28137);
var inst_28142 = cljs.core.chunk_rest.call(null,inst_28137);
var inst_28143 = cljs.core.count.call(null,inst_28141);
var inst_28115 = inst_28142;
var inst_28116 = inst_28141;
var inst_28117 = inst_28143;
var inst_28118 = (0);
var state_28238__$1 = (function (){var statearr_28293 = state_28238;
(statearr_28293[(13)] = inst_28118);

(statearr_28293[(14)] = inst_28115);

(statearr_28293[(16)] = inst_28117);

(statearr_28293[(17)] = inst_28116);

return statearr_28293;
})();
var statearr_28294_28361 = state_28238__$1;
(statearr_28294_28361[(2)] = null);

(statearr_28294_28361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (11))){
var inst_28115 = (state_28238[(14)]);
var inst_28137 = (state_28238[(7)]);
var inst_28137__$1 = cljs.core.seq.call(null,inst_28115);
var state_28238__$1 = (function (){var statearr_28295 = state_28238;
(statearr_28295[(7)] = inst_28137__$1);

return statearr_28295;
})();
if(inst_28137__$1){
var statearr_28296_28362 = state_28238__$1;
(statearr_28296_28362[(1)] = (16));

} else {
var statearr_28297_28363 = state_28238__$1;
(statearr_28297_28363[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (9))){
var inst_28167 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
var statearr_28298_28364 = state_28238__$1;
(statearr_28298_28364[(2)] = inst_28167);

(statearr_28298_28364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (5))){
var inst_28113 = cljs.core.deref.call(null,cs);
var inst_28114 = cljs.core.seq.call(null,inst_28113);
var inst_28115 = inst_28114;
var inst_28116 = null;
var inst_28117 = (0);
var inst_28118 = (0);
var state_28238__$1 = (function (){var statearr_28299 = state_28238;
(statearr_28299[(13)] = inst_28118);

(statearr_28299[(14)] = inst_28115);

(statearr_28299[(16)] = inst_28117);

(statearr_28299[(17)] = inst_28116);

return statearr_28299;
})();
var statearr_28300_28365 = state_28238__$1;
(statearr_28300_28365[(2)] = null);

(statearr_28300_28365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (14))){
var state_28238__$1 = state_28238;
var statearr_28301_28366 = state_28238__$1;
(statearr_28301_28366[(2)] = null);

(statearr_28301_28366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (45))){
var inst_28228 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
var statearr_28302_28367 = state_28238__$1;
(statearr_28302_28367[(2)] = inst_28228);

(statearr_28302_28367[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (26))){
var inst_28170 = (state_28238[(29)]);
var inst_28224 = (state_28238[(2)]);
var inst_28225 = cljs.core.seq.call(null,inst_28170);
var state_28238__$1 = (function (){var statearr_28303 = state_28238;
(statearr_28303[(31)] = inst_28224);

return statearr_28303;
})();
if(inst_28225){
var statearr_28304_28368 = state_28238__$1;
(statearr_28304_28368[(1)] = (42));

} else {
var statearr_28305_28369 = state_28238__$1;
(statearr_28305_28369[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (16))){
var inst_28137 = (state_28238[(7)]);
var inst_28139 = cljs.core.chunked_seq_QMARK_.call(null,inst_28137);
var state_28238__$1 = state_28238;
if(inst_28139){
var statearr_28306_28370 = state_28238__$1;
(statearr_28306_28370[(1)] = (19));

} else {
var statearr_28307_28371 = state_28238__$1;
(statearr_28307_28371[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (38))){
var inst_28217 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
var statearr_28308_28372 = state_28238__$1;
(statearr_28308_28372[(2)] = inst_28217);

(statearr_28308_28372[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (30))){
var state_28238__$1 = state_28238;
var statearr_28309_28373 = state_28238__$1;
(statearr_28309_28373[(2)] = null);

(statearr_28309_28373[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (10))){
var inst_28118 = (state_28238[(13)]);
var inst_28116 = (state_28238[(17)]);
var inst_28126 = cljs.core._nth.call(null,inst_28116,inst_28118);
var inst_28127 = cljs.core.nth.call(null,inst_28126,(0),null);
var inst_28128 = cljs.core.nth.call(null,inst_28126,(1),null);
var state_28238__$1 = (function (){var statearr_28310 = state_28238;
(statearr_28310[(26)] = inst_28127);

return statearr_28310;
})();
if(cljs.core.truth_(inst_28128)){
var statearr_28311_28374 = state_28238__$1;
(statearr_28311_28374[(1)] = (13));

} else {
var statearr_28312_28375 = state_28238__$1;
(statearr_28312_28375[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (18))){
var inst_28163 = (state_28238[(2)]);
var state_28238__$1 = state_28238;
var statearr_28313_28376 = state_28238__$1;
(statearr_28313_28376[(2)] = inst_28163);

(statearr_28313_28376[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (42))){
var state_28238__$1 = state_28238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28238__$1,(45),dchan);
} else {
if((state_val_28239 === (37))){
var inst_28206 = (state_28238[(23)]);
var inst_28197 = (state_28238[(25)]);
var inst_28106 = (state_28238[(12)]);
var inst_28206__$1 = cljs.core.first.call(null,inst_28197);
var inst_28207 = cljs.core.async.put_BANG_.call(null,inst_28206__$1,inst_28106,done);
var state_28238__$1 = (function (){var statearr_28314 = state_28238;
(statearr_28314[(23)] = inst_28206__$1);

return statearr_28314;
})();
if(cljs.core.truth_(inst_28207)){
var statearr_28315_28377 = state_28238__$1;
(statearr_28315_28377[(1)] = (39));

} else {
var statearr_28316_28378 = state_28238__$1;
(statearr_28316_28378[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28239 === (8))){
var inst_28118 = (state_28238[(13)]);
var inst_28117 = (state_28238[(16)]);
var inst_28120 = (inst_28118 < inst_28117);
var inst_28121 = inst_28120;
var state_28238__$1 = state_28238;
if(cljs.core.truth_(inst_28121)){
var statearr_28317_28379 = state_28238__$1;
(statearr_28317_28379[(1)] = (10));

} else {
var statearr_28318_28380 = state_28238__$1;
(statearr_28318_28380[(1)] = (11));

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
});})(c__26973__auto___28326,cs,m,dchan,dctr,done))
;
return ((function (switch__26861__auto__,c__26973__auto___28326,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26862__auto__ = null;
var cljs$core$async$mult_$_state_machine__26862__auto____0 = (function (){
var statearr_28322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28322[(0)] = cljs$core$async$mult_$_state_machine__26862__auto__);

(statearr_28322[(1)] = (1));

return statearr_28322;
});
var cljs$core$async$mult_$_state_machine__26862__auto____1 = (function (state_28238){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_28238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e28323){if((e28323 instanceof Object)){
var ex__26865__auto__ = e28323;
var statearr_28324_28381 = state_28238;
(statearr_28324_28381[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28382 = state_28238;
state_28238 = G__28382;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26862__auto__ = function(state_28238){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26862__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26862__auto____1.call(this,state_28238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26862__auto____0;
cljs$core$async$mult_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26862__auto____1;
return cljs$core$async$mult_$_state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto___28326,cs,m,dchan,dctr,done))
})();
var state__26975__auto__ = (function (){var statearr_28325 = f__26974__auto__.call(null);
(statearr_28325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto___28326);

return statearr_28325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto___28326,cs,m,dchan,dctr,done))
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
var args28383 = [];
var len__25876__auto___28386 = arguments.length;
var i__25877__auto___28387 = (0);
while(true){
if((i__25877__auto___28387 < len__25876__auto___28386)){
args28383.push((arguments[i__25877__auto___28387]));

var G__28388 = (i__25877__auto___28387 + (1));
i__25877__auto___28387 = G__28388;
continue;
} else {
}
break;
}

var G__28385 = args28383.length;
switch (G__28385) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28383.length)].join('')));

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
var x__25464__auto__ = (((m == null))?null:m);
var m__25465__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,m,ch);
} else {
var m__25465__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,m,ch);
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
var x__25464__auto__ = (((m == null))?null:m);
var m__25465__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,m,ch);
} else {
var m__25465__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,m,ch);
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
var x__25464__auto__ = (((m == null))?null:m);
var m__25465__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,m);
} else {
var m__25465__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,m);
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
var x__25464__auto__ = (((m == null))?null:m);
var m__25465__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,m,state_map);
} else {
var m__25465__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,m,state_map);
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
var x__25464__auto__ = (((m == null))?null:m);
var m__25465__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,m,mode);
} else {
var m__25465__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25883__auto__ = [];
var len__25876__auto___28400 = arguments.length;
var i__25877__auto___28401 = (0);
while(true){
if((i__25877__auto___28401 < len__25876__auto___28400)){
args__25883__auto__.push((arguments[i__25877__auto___28401]));

var G__28402 = (i__25877__auto___28401 + (1));
i__25877__auto___28401 = G__28402;
continue;
} else {
}
break;
}

var argseq__25884__auto__ = ((((3) < args__25883__auto__.length))?(new cljs.core.IndexedSeq(args__25883__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25884__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28394){
var map__28395 = p__28394;
var map__28395__$1 = ((((!((map__28395 == null)))?((((map__28395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28395):map__28395);
var opts = map__28395__$1;
var statearr_28397_28403 = state;
(statearr_28397_28403[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28395,map__28395__$1,opts){
return (function (val){
var statearr_28398_28404 = state;
(statearr_28398_28404[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28395,map__28395__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28399_28405 = state;
(statearr_28399_28405[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28390){
var G__28391 = cljs.core.first.call(null,seq28390);
var seq28390__$1 = cljs.core.next.call(null,seq28390);
var G__28392 = cljs.core.first.call(null,seq28390__$1);
var seq28390__$2 = cljs.core.next.call(null,seq28390__$1);
var G__28393 = cljs.core.first.call(null,seq28390__$2);
var seq28390__$3 = cljs.core.next.call(null,seq28390__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28391,G__28392,G__28393,seq28390__$3);
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
if(typeof cljs.core.async.t_cljs$core$async28571 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28571 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28572){
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
this.meta28572 = meta28572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28573,meta28572__$1){
var self__ = this;
var _28573__$1 = this;
return (new cljs.core.async.t_cljs$core$async28571(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28572__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28573){
var self__ = this;
var _28573__$1 = this;
return self__.meta28572;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28571.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28571.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28572","meta28572",185418834,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28571.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28571";

cljs.core.async.t_cljs$core$async28571.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25407__auto__,writer__25408__auto__,opt__25409__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"cljs.core.async/t_cljs$core$async28571");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28571 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28571(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28572){
return (new cljs.core.async.t_cljs$core$async28571(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28572));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28571(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26973__auto___28736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto___28736,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto___28736,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28673){
var state_val_28674 = (state_28673[(1)]);
if((state_val_28674 === (7))){
var inst_28589 = (state_28673[(2)]);
var state_28673__$1 = state_28673;
var statearr_28675_28737 = state_28673__$1;
(statearr_28675_28737[(2)] = inst_28589);

(statearr_28675_28737[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (20))){
var inst_28601 = (state_28673[(7)]);
var state_28673__$1 = state_28673;
var statearr_28676_28738 = state_28673__$1;
(statearr_28676_28738[(2)] = inst_28601);

(statearr_28676_28738[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (27))){
var state_28673__$1 = state_28673;
var statearr_28677_28739 = state_28673__$1;
(statearr_28677_28739[(2)] = null);

(statearr_28677_28739[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (1))){
var inst_28577 = (state_28673[(8)]);
var inst_28577__$1 = calc_state.call(null);
var inst_28579 = (inst_28577__$1 == null);
var inst_28580 = cljs.core.not.call(null,inst_28579);
var state_28673__$1 = (function (){var statearr_28678 = state_28673;
(statearr_28678[(8)] = inst_28577__$1);

return statearr_28678;
})();
if(inst_28580){
var statearr_28679_28740 = state_28673__$1;
(statearr_28679_28740[(1)] = (2));

} else {
var statearr_28680_28741 = state_28673__$1;
(statearr_28680_28741[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (24))){
var inst_28624 = (state_28673[(9)]);
var inst_28647 = (state_28673[(10)]);
var inst_28633 = (state_28673[(11)]);
var inst_28647__$1 = inst_28624.call(null,inst_28633);
var state_28673__$1 = (function (){var statearr_28681 = state_28673;
(statearr_28681[(10)] = inst_28647__$1);

return statearr_28681;
})();
if(cljs.core.truth_(inst_28647__$1)){
var statearr_28682_28742 = state_28673__$1;
(statearr_28682_28742[(1)] = (29));

} else {
var statearr_28683_28743 = state_28673__$1;
(statearr_28683_28743[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (4))){
var inst_28592 = (state_28673[(2)]);
var state_28673__$1 = state_28673;
if(cljs.core.truth_(inst_28592)){
var statearr_28684_28744 = state_28673__$1;
(statearr_28684_28744[(1)] = (8));

} else {
var statearr_28685_28745 = state_28673__$1;
(statearr_28685_28745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (15))){
var inst_28618 = (state_28673[(2)]);
var state_28673__$1 = state_28673;
if(cljs.core.truth_(inst_28618)){
var statearr_28686_28746 = state_28673__$1;
(statearr_28686_28746[(1)] = (19));

} else {
var statearr_28687_28747 = state_28673__$1;
(statearr_28687_28747[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (21))){
var inst_28623 = (state_28673[(12)]);
var inst_28623__$1 = (state_28673[(2)]);
var inst_28624 = cljs.core.get.call(null,inst_28623__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28625 = cljs.core.get.call(null,inst_28623__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28626 = cljs.core.get.call(null,inst_28623__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28673__$1 = (function (){var statearr_28688 = state_28673;
(statearr_28688[(13)] = inst_28625);

(statearr_28688[(9)] = inst_28624);

(statearr_28688[(12)] = inst_28623__$1);

return statearr_28688;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28673__$1,(22),inst_28626);
} else {
if((state_val_28674 === (31))){
var inst_28655 = (state_28673[(2)]);
var state_28673__$1 = state_28673;
if(cljs.core.truth_(inst_28655)){
var statearr_28689_28748 = state_28673__$1;
(statearr_28689_28748[(1)] = (32));

} else {
var statearr_28690_28749 = state_28673__$1;
(statearr_28690_28749[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (32))){
var inst_28632 = (state_28673[(14)]);
var state_28673__$1 = state_28673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28673__$1,(35),out,inst_28632);
} else {
if((state_val_28674 === (33))){
var inst_28623 = (state_28673[(12)]);
var inst_28601 = inst_28623;
var state_28673__$1 = (function (){var statearr_28691 = state_28673;
(statearr_28691[(7)] = inst_28601);

return statearr_28691;
})();
var statearr_28692_28750 = state_28673__$1;
(statearr_28692_28750[(2)] = null);

(statearr_28692_28750[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (13))){
var inst_28601 = (state_28673[(7)]);
var inst_28608 = inst_28601.cljs$lang$protocol_mask$partition0$;
var inst_28609 = (inst_28608 & (64));
var inst_28610 = inst_28601.cljs$core$ISeq$;
var inst_28611 = (inst_28609) || (inst_28610);
var state_28673__$1 = state_28673;
if(cljs.core.truth_(inst_28611)){
var statearr_28693_28751 = state_28673__$1;
(statearr_28693_28751[(1)] = (16));

} else {
var statearr_28694_28752 = state_28673__$1;
(statearr_28694_28752[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (22))){
var inst_28632 = (state_28673[(14)]);
var inst_28633 = (state_28673[(11)]);
var inst_28631 = (state_28673[(2)]);
var inst_28632__$1 = cljs.core.nth.call(null,inst_28631,(0),null);
var inst_28633__$1 = cljs.core.nth.call(null,inst_28631,(1),null);
var inst_28634 = (inst_28632__$1 == null);
var inst_28635 = cljs.core._EQ_.call(null,inst_28633__$1,change);
var inst_28636 = (inst_28634) || (inst_28635);
var state_28673__$1 = (function (){var statearr_28695 = state_28673;
(statearr_28695[(14)] = inst_28632__$1);

(statearr_28695[(11)] = inst_28633__$1);

return statearr_28695;
})();
if(cljs.core.truth_(inst_28636)){
var statearr_28696_28753 = state_28673__$1;
(statearr_28696_28753[(1)] = (23));

} else {
var statearr_28697_28754 = state_28673__$1;
(statearr_28697_28754[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (36))){
var inst_28623 = (state_28673[(12)]);
var inst_28601 = inst_28623;
var state_28673__$1 = (function (){var statearr_28698 = state_28673;
(statearr_28698[(7)] = inst_28601);

return statearr_28698;
})();
var statearr_28699_28755 = state_28673__$1;
(statearr_28699_28755[(2)] = null);

(statearr_28699_28755[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (29))){
var inst_28647 = (state_28673[(10)]);
var state_28673__$1 = state_28673;
var statearr_28700_28756 = state_28673__$1;
(statearr_28700_28756[(2)] = inst_28647);

(statearr_28700_28756[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (6))){
var state_28673__$1 = state_28673;
var statearr_28701_28757 = state_28673__$1;
(statearr_28701_28757[(2)] = false);

(statearr_28701_28757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (28))){
var inst_28643 = (state_28673[(2)]);
var inst_28644 = calc_state.call(null);
var inst_28601 = inst_28644;
var state_28673__$1 = (function (){var statearr_28702 = state_28673;
(statearr_28702[(15)] = inst_28643);

(statearr_28702[(7)] = inst_28601);

return statearr_28702;
})();
var statearr_28703_28758 = state_28673__$1;
(statearr_28703_28758[(2)] = null);

(statearr_28703_28758[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (25))){
var inst_28669 = (state_28673[(2)]);
var state_28673__$1 = state_28673;
var statearr_28704_28759 = state_28673__$1;
(statearr_28704_28759[(2)] = inst_28669);

(statearr_28704_28759[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (34))){
var inst_28667 = (state_28673[(2)]);
var state_28673__$1 = state_28673;
var statearr_28705_28760 = state_28673__$1;
(statearr_28705_28760[(2)] = inst_28667);

(statearr_28705_28760[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (17))){
var state_28673__$1 = state_28673;
var statearr_28706_28761 = state_28673__$1;
(statearr_28706_28761[(2)] = false);

(statearr_28706_28761[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (3))){
var state_28673__$1 = state_28673;
var statearr_28707_28762 = state_28673__$1;
(statearr_28707_28762[(2)] = false);

(statearr_28707_28762[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (12))){
var inst_28671 = (state_28673[(2)]);
var state_28673__$1 = state_28673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28673__$1,inst_28671);
} else {
if((state_val_28674 === (2))){
var inst_28577 = (state_28673[(8)]);
var inst_28582 = inst_28577.cljs$lang$protocol_mask$partition0$;
var inst_28583 = (inst_28582 & (64));
var inst_28584 = inst_28577.cljs$core$ISeq$;
var inst_28585 = (inst_28583) || (inst_28584);
var state_28673__$1 = state_28673;
if(cljs.core.truth_(inst_28585)){
var statearr_28708_28763 = state_28673__$1;
(statearr_28708_28763[(1)] = (5));

} else {
var statearr_28709_28764 = state_28673__$1;
(statearr_28709_28764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (23))){
var inst_28632 = (state_28673[(14)]);
var inst_28638 = (inst_28632 == null);
var state_28673__$1 = state_28673;
if(cljs.core.truth_(inst_28638)){
var statearr_28710_28765 = state_28673__$1;
(statearr_28710_28765[(1)] = (26));

} else {
var statearr_28711_28766 = state_28673__$1;
(statearr_28711_28766[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (35))){
var inst_28658 = (state_28673[(2)]);
var state_28673__$1 = state_28673;
if(cljs.core.truth_(inst_28658)){
var statearr_28712_28767 = state_28673__$1;
(statearr_28712_28767[(1)] = (36));

} else {
var statearr_28713_28768 = state_28673__$1;
(statearr_28713_28768[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (19))){
var inst_28601 = (state_28673[(7)]);
var inst_28620 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28601);
var state_28673__$1 = state_28673;
var statearr_28714_28769 = state_28673__$1;
(statearr_28714_28769[(2)] = inst_28620);

(statearr_28714_28769[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (11))){
var inst_28601 = (state_28673[(7)]);
var inst_28605 = (inst_28601 == null);
var inst_28606 = cljs.core.not.call(null,inst_28605);
var state_28673__$1 = state_28673;
if(inst_28606){
var statearr_28715_28770 = state_28673__$1;
(statearr_28715_28770[(1)] = (13));

} else {
var statearr_28716_28771 = state_28673__$1;
(statearr_28716_28771[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (9))){
var inst_28577 = (state_28673[(8)]);
var state_28673__$1 = state_28673;
var statearr_28717_28772 = state_28673__$1;
(statearr_28717_28772[(2)] = inst_28577);

(statearr_28717_28772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (5))){
var state_28673__$1 = state_28673;
var statearr_28718_28773 = state_28673__$1;
(statearr_28718_28773[(2)] = true);

(statearr_28718_28773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (14))){
var state_28673__$1 = state_28673;
var statearr_28719_28774 = state_28673__$1;
(statearr_28719_28774[(2)] = false);

(statearr_28719_28774[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (26))){
var inst_28633 = (state_28673[(11)]);
var inst_28640 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28633);
var state_28673__$1 = state_28673;
var statearr_28720_28775 = state_28673__$1;
(statearr_28720_28775[(2)] = inst_28640);

(statearr_28720_28775[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (16))){
var state_28673__$1 = state_28673;
var statearr_28721_28776 = state_28673__$1;
(statearr_28721_28776[(2)] = true);

(statearr_28721_28776[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (38))){
var inst_28663 = (state_28673[(2)]);
var state_28673__$1 = state_28673;
var statearr_28722_28777 = state_28673__$1;
(statearr_28722_28777[(2)] = inst_28663);

(statearr_28722_28777[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (30))){
var inst_28625 = (state_28673[(13)]);
var inst_28624 = (state_28673[(9)]);
var inst_28633 = (state_28673[(11)]);
var inst_28650 = cljs.core.empty_QMARK_.call(null,inst_28624);
var inst_28651 = inst_28625.call(null,inst_28633);
var inst_28652 = cljs.core.not.call(null,inst_28651);
var inst_28653 = (inst_28650) && (inst_28652);
var state_28673__$1 = state_28673;
var statearr_28723_28778 = state_28673__$1;
(statearr_28723_28778[(2)] = inst_28653);

(statearr_28723_28778[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (10))){
var inst_28577 = (state_28673[(8)]);
var inst_28597 = (state_28673[(2)]);
var inst_28598 = cljs.core.get.call(null,inst_28597,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28599 = cljs.core.get.call(null,inst_28597,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28600 = cljs.core.get.call(null,inst_28597,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28601 = inst_28577;
var state_28673__$1 = (function (){var statearr_28724 = state_28673;
(statearr_28724[(16)] = inst_28600);

(statearr_28724[(7)] = inst_28601);

(statearr_28724[(17)] = inst_28599);

(statearr_28724[(18)] = inst_28598);

return statearr_28724;
})();
var statearr_28725_28779 = state_28673__$1;
(statearr_28725_28779[(2)] = null);

(statearr_28725_28779[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (18))){
var inst_28615 = (state_28673[(2)]);
var state_28673__$1 = state_28673;
var statearr_28726_28780 = state_28673__$1;
(statearr_28726_28780[(2)] = inst_28615);

(statearr_28726_28780[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (37))){
var state_28673__$1 = state_28673;
var statearr_28727_28781 = state_28673__$1;
(statearr_28727_28781[(2)] = null);

(statearr_28727_28781[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28674 === (8))){
var inst_28577 = (state_28673[(8)]);
var inst_28594 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28577);
var state_28673__$1 = state_28673;
var statearr_28728_28782 = state_28673__$1;
(statearr_28728_28782[(2)] = inst_28594);

(statearr_28728_28782[(1)] = (10));


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
});})(c__26973__auto___28736,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26861__auto__,c__26973__auto___28736,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26862__auto__ = null;
var cljs$core$async$mix_$_state_machine__26862__auto____0 = (function (){
var statearr_28732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28732[(0)] = cljs$core$async$mix_$_state_machine__26862__auto__);

(statearr_28732[(1)] = (1));

return statearr_28732;
});
var cljs$core$async$mix_$_state_machine__26862__auto____1 = (function (state_28673){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_28673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e28733){if((e28733 instanceof Object)){
var ex__26865__auto__ = e28733;
var statearr_28734_28783 = state_28673;
(statearr_28734_28783[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28784 = state_28673;
state_28673 = G__28784;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26862__auto__ = function(state_28673){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26862__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26862__auto____1.call(this,state_28673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26862__auto____0;
cljs$core$async$mix_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26862__auto____1;
return cljs$core$async$mix_$_state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto___28736,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26975__auto__ = (function (){var statearr_28735 = f__26974__auto__.call(null);
(statearr_28735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto___28736);

return statearr_28735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto___28736,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__25464__auto__ = (((p == null))?null:p);
var m__25465__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25465__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__25464__auto__ = (((p == null))?null:p);
var m__25465__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,p,v,ch);
} else {
var m__25465__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28785 = [];
var len__25876__auto___28788 = arguments.length;
var i__25877__auto___28789 = (0);
while(true){
if((i__25877__auto___28789 < len__25876__auto___28788)){
args28785.push((arguments[i__25877__auto___28789]));

var G__28790 = (i__25877__auto___28789 + (1));
i__25877__auto___28789 = G__28790;
continue;
} else {
}
break;
}

var G__28787 = args28785.length;
switch (G__28787) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28785.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25464__auto__ = (((p == null))?null:p);
var m__25465__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,p);
} else {
var m__25465__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,p);
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
var x__25464__auto__ = (((p == null))?null:p);
var m__25465__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25464__auto__)]);
if(!((m__25465__auto__ == null))){
return m__25465__auto__.call(null,p,v);
} else {
var m__25465__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25465__auto____$1 == null))){
return m__25465__auto____$1.call(null,p,v);
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
var args28793 = [];
var len__25876__auto___28918 = arguments.length;
var i__25877__auto___28919 = (0);
while(true){
if((i__25877__auto___28919 < len__25876__auto___28918)){
args28793.push((arguments[i__25877__auto___28919]));

var G__28920 = (i__25877__auto___28919 + (1));
i__25877__auto___28919 = G__28920;
continue;
} else {
}
break;
}

var G__28795 = args28793.length;
switch (G__28795) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28793.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24801__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24801__auto__,mults){
return (function (p1__28792_SHARP_){
if(cljs.core.truth_(p1__28792_SHARP_.call(null,topic))){
return p1__28792_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28792_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24801__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28796 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28796 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28797){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28797 = meta28797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28798,meta28797__$1){
var self__ = this;
var _28798__$1 = this;
return (new cljs.core.async.t_cljs$core$async28796(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28797__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28796.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28798){
var self__ = this;
var _28798__$1 = this;
return self__.meta28797;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28796.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28796.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28796.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28796.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28796.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28796.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28796.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28796.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28797","meta28797",-1897791375,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28796.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28796";

cljs.core.async.t_cljs$core$async28796.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25407__auto__,writer__25408__auto__,opt__25409__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"cljs.core.async/t_cljs$core$async28796");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28796 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28796(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28797){
return (new cljs.core.async.t_cljs$core$async28796(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28797));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28796(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26973__auto___28922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto___28922,mults,ensure_mult,p){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto___28922,mults,ensure_mult,p){
return (function (state_28870){
var state_val_28871 = (state_28870[(1)]);
if((state_val_28871 === (7))){
var inst_28866 = (state_28870[(2)]);
var state_28870__$1 = state_28870;
var statearr_28872_28923 = state_28870__$1;
(statearr_28872_28923[(2)] = inst_28866);

(statearr_28872_28923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (20))){
var state_28870__$1 = state_28870;
var statearr_28873_28924 = state_28870__$1;
(statearr_28873_28924[(2)] = null);

(statearr_28873_28924[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (1))){
var state_28870__$1 = state_28870;
var statearr_28874_28925 = state_28870__$1;
(statearr_28874_28925[(2)] = null);

(statearr_28874_28925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (24))){
var inst_28849 = (state_28870[(7)]);
var inst_28858 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28849);
var state_28870__$1 = state_28870;
var statearr_28875_28926 = state_28870__$1;
(statearr_28875_28926[(2)] = inst_28858);

(statearr_28875_28926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (4))){
var inst_28801 = (state_28870[(8)]);
var inst_28801__$1 = (state_28870[(2)]);
var inst_28802 = (inst_28801__$1 == null);
var state_28870__$1 = (function (){var statearr_28876 = state_28870;
(statearr_28876[(8)] = inst_28801__$1);

return statearr_28876;
})();
if(cljs.core.truth_(inst_28802)){
var statearr_28877_28927 = state_28870__$1;
(statearr_28877_28927[(1)] = (5));

} else {
var statearr_28878_28928 = state_28870__$1;
(statearr_28878_28928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (15))){
var inst_28843 = (state_28870[(2)]);
var state_28870__$1 = state_28870;
var statearr_28879_28929 = state_28870__$1;
(statearr_28879_28929[(2)] = inst_28843);

(statearr_28879_28929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (21))){
var inst_28863 = (state_28870[(2)]);
var state_28870__$1 = (function (){var statearr_28880 = state_28870;
(statearr_28880[(9)] = inst_28863);

return statearr_28880;
})();
var statearr_28881_28930 = state_28870__$1;
(statearr_28881_28930[(2)] = null);

(statearr_28881_28930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (13))){
var inst_28825 = (state_28870[(10)]);
var inst_28827 = cljs.core.chunked_seq_QMARK_.call(null,inst_28825);
var state_28870__$1 = state_28870;
if(inst_28827){
var statearr_28882_28931 = state_28870__$1;
(statearr_28882_28931[(1)] = (16));

} else {
var statearr_28883_28932 = state_28870__$1;
(statearr_28883_28932[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (22))){
var inst_28855 = (state_28870[(2)]);
var state_28870__$1 = state_28870;
if(cljs.core.truth_(inst_28855)){
var statearr_28884_28933 = state_28870__$1;
(statearr_28884_28933[(1)] = (23));

} else {
var statearr_28885_28934 = state_28870__$1;
(statearr_28885_28934[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (6))){
var inst_28849 = (state_28870[(7)]);
var inst_28801 = (state_28870[(8)]);
var inst_28851 = (state_28870[(11)]);
var inst_28849__$1 = topic_fn.call(null,inst_28801);
var inst_28850 = cljs.core.deref.call(null,mults);
var inst_28851__$1 = cljs.core.get.call(null,inst_28850,inst_28849__$1);
var state_28870__$1 = (function (){var statearr_28886 = state_28870;
(statearr_28886[(7)] = inst_28849__$1);

(statearr_28886[(11)] = inst_28851__$1);

return statearr_28886;
})();
if(cljs.core.truth_(inst_28851__$1)){
var statearr_28887_28935 = state_28870__$1;
(statearr_28887_28935[(1)] = (19));

} else {
var statearr_28888_28936 = state_28870__$1;
(statearr_28888_28936[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (25))){
var inst_28860 = (state_28870[(2)]);
var state_28870__$1 = state_28870;
var statearr_28889_28937 = state_28870__$1;
(statearr_28889_28937[(2)] = inst_28860);

(statearr_28889_28937[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (17))){
var inst_28825 = (state_28870[(10)]);
var inst_28834 = cljs.core.first.call(null,inst_28825);
var inst_28835 = cljs.core.async.muxch_STAR_.call(null,inst_28834);
var inst_28836 = cljs.core.async.close_BANG_.call(null,inst_28835);
var inst_28837 = cljs.core.next.call(null,inst_28825);
var inst_28811 = inst_28837;
var inst_28812 = null;
var inst_28813 = (0);
var inst_28814 = (0);
var state_28870__$1 = (function (){var statearr_28890 = state_28870;
(statearr_28890[(12)] = inst_28812);

(statearr_28890[(13)] = inst_28813);

(statearr_28890[(14)] = inst_28811);

(statearr_28890[(15)] = inst_28814);

(statearr_28890[(16)] = inst_28836);

return statearr_28890;
})();
var statearr_28891_28938 = state_28870__$1;
(statearr_28891_28938[(2)] = null);

(statearr_28891_28938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (3))){
var inst_28868 = (state_28870[(2)]);
var state_28870__$1 = state_28870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28870__$1,inst_28868);
} else {
if((state_val_28871 === (12))){
var inst_28845 = (state_28870[(2)]);
var state_28870__$1 = state_28870;
var statearr_28892_28939 = state_28870__$1;
(statearr_28892_28939[(2)] = inst_28845);

(statearr_28892_28939[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (2))){
var state_28870__$1 = state_28870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28870__$1,(4),ch);
} else {
if((state_val_28871 === (23))){
var state_28870__$1 = state_28870;
var statearr_28893_28940 = state_28870__$1;
(statearr_28893_28940[(2)] = null);

(statearr_28893_28940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (19))){
var inst_28801 = (state_28870[(8)]);
var inst_28851 = (state_28870[(11)]);
var inst_28853 = cljs.core.async.muxch_STAR_.call(null,inst_28851);
var state_28870__$1 = state_28870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28870__$1,(22),inst_28853,inst_28801);
} else {
if((state_val_28871 === (11))){
var inst_28825 = (state_28870[(10)]);
var inst_28811 = (state_28870[(14)]);
var inst_28825__$1 = cljs.core.seq.call(null,inst_28811);
var state_28870__$1 = (function (){var statearr_28894 = state_28870;
(statearr_28894[(10)] = inst_28825__$1);

return statearr_28894;
})();
if(inst_28825__$1){
var statearr_28895_28941 = state_28870__$1;
(statearr_28895_28941[(1)] = (13));

} else {
var statearr_28896_28942 = state_28870__$1;
(statearr_28896_28942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (9))){
var inst_28847 = (state_28870[(2)]);
var state_28870__$1 = state_28870;
var statearr_28897_28943 = state_28870__$1;
(statearr_28897_28943[(2)] = inst_28847);

(statearr_28897_28943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (5))){
var inst_28808 = cljs.core.deref.call(null,mults);
var inst_28809 = cljs.core.vals.call(null,inst_28808);
var inst_28810 = cljs.core.seq.call(null,inst_28809);
var inst_28811 = inst_28810;
var inst_28812 = null;
var inst_28813 = (0);
var inst_28814 = (0);
var state_28870__$1 = (function (){var statearr_28898 = state_28870;
(statearr_28898[(12)] = inst_28812);

(statearr_28898[(13)] = inst_28813);

(statearr_28898[(14)] = inst_28811);

(statearr_28898[(15)] = inst_28814);

return statearr_28898;
})();
var statearr_28899_28944 = state_28870__$1;
(statearr_28899_28944[(2)] = null);

(statearr_28899_28944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (14))){
var state_28870__$1 = state_28870;
var statearr_28903_28945 = state_28870__$1;
(statearr_28903_28945[(2)] = null);

(statearr_28903_28945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (16))){
var inst_28825 = (state_28870[(10)]);
var inst_28829 = cljs.core.chunk_first.call(null,inst_28825);
var inst_28830 = cljs.core.chunk_rest.call(null,inst_28825);
var inst_28831 = cljs.core.count.call(null,inst_28829);
var inst_28811 = inst_28830;
var inst_28812 = inst_28829;
var inst_28813 = inst_28831;
var inst_28814 = (0);
var state_28870__$1 = (function (){var statearr_28904 = state_28870;
(statearr_28904[(12)] = inst_28812);

(statearr_28904[(13)] = inst_28813);

(statearr_28904[(14)] = inst_28811);

(statearr_28904[(15)] = inst_28814);

return statearr_28904;
})();
var statearr_28905_28946 = state_28870__$1;
(statearr_28905_28946[(2)] = null);

(statearr_28905_28946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (10))){
var inst_28812 = (state_28870[(12)]);
var inst_28813 = (state_28870[(13)]);
var inst_28811 = (state_28870[(14)]);
var inst_28814 = (state_28870[(15)]);
var inst_28819 = cljs.core._nth.call(null,inst_28812,inst_28814);
var inst_28820 = cljs.core.async.muxch_STAR_.call(null,inst_28819);
var inst_28821 = cljs.core.async.close_BANG_.call(null,inst_28820);
var inst_28822 = (inst_28814 + (1));
var tmp28900 = inst_28812;
var tmp28901 = inst_28813;
var tmp28902 = inst_28811;
var inst_28811__$1 = tmp28902;
var inst_28812__$1 = tmp28900;
var inst_28813__$1 = tmp28901;
var inst_28814__$1 = inst_28822;
var state_28870__$1 = (function (){var statearr_28906 = state_28870;
(statearr_28906[(12)] = inst_28812__$1);

(statearr_28906[(13)] = inst_28813__$1);

(statearr_28906[(14)] = inst_28811__$1);

(statearr_28906[(15)] = inst_28814__$1);

(statearr_28906[(17)] = inst_28821);

return statearr_28906;
})();
var statearr_28907_28947 = state_28870__$1;
(statearr_28907_28947[(2)] = null);

(statearr_28907_28947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (18))){
var inst_28840 = (state_28870[(2)]);
var state_28870__$1 = state_28870;
var statearr_28908_28948 = state_28870__$1;
(statearr_28908_28948[(2)] = inst_28840);

(statearr_28908_28948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28871 === (8))){
var inst_28813 = (state_28870[(13)]);
var inst_28814 = (state_28870[(15)]);
var inst_28816 = (inst_28814 < inst_28813);
var inst_28817 = inst_28816;
var state_28870__$1 = state_28870;
if(cljs.core.truth_(inst_28817)){
var statearr_28909_28949 = state_28870__$1;
(statearr_28909_28949[(1)] = (10));

} else {
var statearr_28910_28950 = state_28870__$1;
(statearr_28910_28950[(1)] = (11));

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
});})(c__26973__auto___28922,mults,ensure_mult,p))
;
return ((function (switch__26861__auto__,c__26973__auto___28922,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26862__auto__ = null;
var cljs$core$async$state_machine__26862__auto____0 = (function (){
var statearr_28914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28914[(0)] = cljs$core$async$state_machine__26862__auto__);

(statearr_28914[(1)] = (1));

return statearr_28914;
});
var cljs$core$async$state_machine__26862__auto____1 = (function (state_28870){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_28870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e28915){if((e28915 instanceof Object)){
var ex__26865__auto__ = e28915;
var statearr_28916_28951 = state_28870;
(statearr_28916_28951[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28952 = state_28870;
state_28870 = G__28952;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
cljs$core$async$state_machine__26862__auto__ = function(state_28870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26862__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26862__auto____1.call(this,state_28870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26862__auto____0;
cljs$core$async$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26862__auto____1;
return cljs$core$async$state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto___28922,mults,ensure_mult,p))
})();
var state__26975__auto__ = (function (){var statearr_28917 = f__26974__auto__.call(null);
(statearr_28917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto___28922);

return statearr_28917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto___28922,mults,ensure_mult,p))
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
var args28953 = [];
var len__25876__auto___28956 = arguments.length;
var i__25877__auto___28957 = (0);
while(true){
if((i__25877__auto___28957 < len__25876__auto___28956)){
args28953.push((arguments[i__25877__auto___28957]));

var G__28958 = (i__25877__auto___28957 + (1));
i__25877__auto___28957 = G__28958;
continue;
} else {
}
break;
}

var G__28955 = args28953.length;
switch (G__28955) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28953.length)].join('')));

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
var args28960 = [];
var len__25876__auto___28963 = arguments.length;
var i__25877__auto___28964 = (0);
while(true){
if((i__25877__auto___28964 < len__25876__auto___28963)){
args28960.push((arguments[i__25877__auto___28964]));

var G__28965 = (i__25877__auto___28964 + (1));
i__25877__auto___28964 = G__28965;
continue;
} else {
}
break;
}

var G__28962 = args28960.length;
switch (G__28962) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28960.length)].join('')));

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
var args28967 = [];
var len__25876__auto___29038 = arguments.length;
var i__25877__auto___29039 = (0);
while(true){
if((i__25877__auto___29039 < len__25876__auto___29038)){
args28967.push((arguments[i__25877__auto___29039]));

var G__29040 = (i__25877__auto___29039 + (1));
i__25877__auto___29039 = G__29040;
continue;
} else {
}
break;
}

var G__28969 = args28967.length;
switch (G__28969) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28967.length)].join('')));

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
var c__26973__auto___29042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto___29042,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto___29042,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29008){
var state_val_29009 = (state_29008[(1)]);
if((state_val_29009 === (7))){
var state_29008__$1 = state_29008;
var statearr_29010_29043 = state_29008__$1;
(statearr_29010_29043[(2)] = null);

(statearr_29010_29043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (1))){
var state_29008__$1 = state_29008;
var statearr_29011_29044 = state_29008__$1;
(statearr_29011_29044[(2)] = null);

(statearr_29011_29044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (4))){
var inst_28972 = (state_29008[(7)]);
var inst_28974 = (inst_28972 < cnt);
var state_29008__$1 = state_29008;
if(cljs.core.truth_(inst_28974)){
var statearr_29012_29045 = state_29008__$1;
(statearr_29012_29045[(1)] = (6));

} else {
var statearr_29013_29046 = state_29008__$1;
(statearr_29013_29046[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (15))){
var inst_29004 = (state_29008[(2)]);
var state_29008__$1 = state_29008;
var statearr_29014_29047 = state_29008__$1;
(statearr_29014_29047[(2)] = inst_29004);

(statearr_29014_29047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (13))){
var inst_28997 = cljs.core.async.close_BANG_.call(null,out);
var state_29008__$1 = state_29008;
var statearr_29015_29048 = state_29008__$1;
(statearr_29015_29048[(2)] = inst_28997);

(statearr_29015_29048[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (6))){
var state_29008__$1 = state_29008;
var statearr_29016_29049 = state_29008__$1;
(statearr_29016_29049[(2)] = null);

(statearr_29016_29049[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (3))){
var inst_29006 = (state_29008[(2)]);
var state_29008__$1 = state_29008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29008__$1,inst_29006);
} else {
if((state_val_29009 === (12))){
var inst_28994 = (state_29008[(8)]);
var inst_28994__$1 = (state_29008[(2)]);
var inst_28995 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28994__$1);
var state_29008__$1 = (function (){var statearr_29017 = state_29008;
(statearr_29017[(8)] = inst_28994__$1);

return statearr_29017;
})();
if(cljs.core.truth_(inst_28995)){
var statearr_29018_29050 = state_29008__$1;
(statearr_29018_29050[(1)] = (13));

} else {
var statearr_29019_29051 = state_29008__$1;
(statearr_29019_29051[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (2))){
var inst_28971 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28972 = (0);
var state_29008__$1 = (function (){var statearr_29020 = state_29008;
(statearr_29020[(7)] = inst_28972);

(statearr_29020[(9)] = inst_28971);

return statearr_29020;
})();
var statearr_29021_29052 = state_29008__$1;
(statearr_29021_29052[(2)] = null);

(statearr_29021_29052[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (11))){
var inst_28972 = (state_29008[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29008,(10),Object,null,(9));
var inst_28981 = chs__$1.call(null,inst_28972);
var inst_28982 = done.call(null,inst_28972);
var inst_28983 = cljs.core.async.take_BANG_.call(null,inst_28981,inst_28982);
var state_29008__$1 = state_29008;
var statearr_29022_29053 = state_29008__$1;
(statearr_29022_29053[(2)] = inst_28983);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29008__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (9))){
var inst_28972 = (state_29008[(7)]);
var inst_28985 = (state_29008[(2)]);
var inst_28986 = (inst_28972 + (1));
var inst_28972__$1 = inst_28986;
var state_29008__$1 = (function (){var statearr_29023 = state_29008;
(statearr_29023[(7)] = inst_28972__$1);

(statearr_29023[(10)] = inst_28985);

return statearr_29023;
})();
var statearr_29024_29054 = state_29008__$1;
(statearr_29024_29054[(2)] = null);

(statearr_29024_29054[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (5))){
var inst_28992 = (state_29008[(2)]);
var state_29008__$1 = (function (){var statearr_29025 = state_29008;
(statearr_29025[(11)] = inst_28992);

return statearr_29025;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29008__$1,(12),dchan);
} else {
if((state_val_29009 === (14))){
var inst_28994 = (state_29008[(8)]);
var inst_28999 = cljs.core.apply.call(null,f,inst_28994);
var state_29008__$1 = state_29008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29008__$1,(16),out,inst_28999);
} else {
if((state_val_29009 === (16))){
var inst_29001 = (state_29008[(2)]);
var state_29008__$1 = (function (){var statearr_29026 = state_29008;
(statearr_29026[(12)] = inst_29001);

return statearr_29026;
})();
var statearr_29027_29055 = state_29008__$1;
(statearr_29027_29055[(2)] = null);

(statearr_29027_29055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (10))){
var inst_28976 = (state_29008[(2)]);
var inst_28977 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29008__$1 = (function (){var statearr_29028 = state_29008;
(statearr_29028[(13)] = inst_28976);

return statearr_29028;
})();
var statearr_29029_29056 = state_29008__$1;
(statearr_29029_29056[(2)] = inst_28977);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29008__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29009 === (8))){
var inst_28990 = (state_29008[(2)]);
var state_29008__$1 = state_29008;
var statearr_29030_29057 = state_29008__$1;
(statearr_29030_29057[(2)] = inst_28990);

(statearr_29030_29057[(1)] = (5));


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
});})(c__26973__auto___29042,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26861__auto__,c__26973__auto___29042,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26862__auto__ = null;
var cljs$core$async$state_machine__26862__auto____0 = (function (){
var statearr_29034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29034[(0)] = cljs$core$async$state_machine__26862__auto__);

(statearr_29034[(1)] = (1));

return statearr_29034;
});
var cljs$core$async$state_machine__26862__auto____1 = (function (state_29008){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_29008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e29035){if((e29035 instanceof Object)){
var ex__26865__auto__ = e29035;
var statearr_29036_29058 = state_29008;
(statearr_29036_29058[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29059 = state_29008;
state_29008 = G__29059;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
cljs$core$async$state_machine__26862__auto__ = function(state_29008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26862__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26862__auto____1.call(this,state_29008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26862__auto____0;
cljs$core$async$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26862__auto____1;
return cljs$core$async$state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto___29042,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26975__auto__ = (function (){var statearr_29037 = f__26974__auto__.call(null);
(statearr_29037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto___29042);

return statearr_29037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto___29042,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args29061 = [];
var len__25876__auto___29119 = arguments.length;
var i__25877__auto___29120 = (0);
while(true){
if((i__25877__auto___29120 < len__25876__auto___29119)){
args29061.push((arguments[i__25877__auto___29120]));

var G__29121 = (i__25877__auto___29120 + (1));
i__25877__auto___29120 = G__29121;
continue;
} else {
}
break;
}

var G__29063 = args29061.length;
switch (G__29063) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29061.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26973__auto___29123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto___29123,out){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto___29123,out){
return (function (state_29095){
var state_val_29096 = (state_29095[(1)]);
if((state_val_29096 === (7))){
var inst_29074 = (state_29095[(7)]);
var inst_29075 = (state_29095[(8)]);
var inst_29074__$1 = (state_29095[(2)]);
var inst_29075__$1 = cljs.core.nth.call(null,inst_29074__$1,(0),null);
var inst_29076 = cljs.core.nth.call(null,inst_29074__$1,(1),null);
var inst_29077 = (inst_29075__$1 == null);
var state_29095__$1 = (function (){var statearr_29097 = state_29095;
(statearr_29097[(7)] = inst_29074__$1);

(statearr_29097[(9)] = inst_29076);

(statearr_29097[(8)] = inst_29075__$1);

return statearr_29097;
})();
if(cljs.core.truth_(inst_29077)){
var statearr_29098_29124 = state_29095__$1;
(statearr_29098_29124[(1)] = (8));

} else {
var statearr_29099_29125 = state_29095__$1;
(statearr_29099_29125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (1))){
var inst_29064 = cljs.core.vec.call(null,chs);
var inst_29065 = inst_29064;
var state_29095__$1 = (function (){var statearr_29100 = state_29095;
(statearr_29100[(10)] = inst_29065);

return statearr_29100;
})();
var statearr_29101_29126 = state_29095__$1;
(statearr_29101_29126[(2)] = null);

(statearr_29101_29126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (4))){
var inst_29065 = (state_29095[(10)]);
var state_29095__$1 = state_29095;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29095__$1,(7),inst_29065);
} else {
if((state_val_29096 === (6))){
var inst_29091 = (state_29095[(2)]);
var state_29095__$1 = state_29095;
var statearr_29102_29127 = state_29095__$1;
(statearr_29102_29127[(2)] = inst_29091);

(statearr_29102_29127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (3))){
var inst_29093 = (state_29095[(2)]);
var state_29095__$1 = state_29095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29095__$1,inst_29093);
} else {
if((state_val_29096 === (2))){
var inst_29065 = (state_29095[(10)]);
var inst_29067 = cljs.core.count.call(null,inst_29065);
var inst_29068 = (inst_29067 > (0));
var state_29095__$1 = state_29095;
if(cljs.core.truth_(inst_29068)){
var statearr_29104_29128 = state_29095__$1;
(statearr_29104_29128[(1)] = (4));

} else {
var statearr_29105_29129 = state_29095__$1;
(statearr_29105_29129[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (11))){
var inst_29065 = (state_29095[(10)]);
var inst_29084 = (state_29095[(2)]);
var tmp29103 = inst_29065;
var inst_29065__$1 = tmp29103;
var state_29095__$1 = (function (){var statearr_29106 = state_29095;
(statearr_29106[(10)] = inst_29065__$1);

(statearr_29106[(11)] = inst_29084);

return statearr_29106;
})();
var statearr_29107_29130 = state_29095__$1;
(statearr_29107_29130[(2)] = null);

(statearr_29107_29130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (9))){
var inst_29075 = (state_29095[(8)]);
var state_29095__$1 = state_29095;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29095__$1,(11),out,inst_29075);
} else {
if((state_val_29096 === (5))){
var inst_29089 = cljs.core.async.close_BANG_.call(null,out);
var state_29095__$1 = state_29095;
var statearr_29108_29131 = state_29095__$1;
(statearr_29108_29131[(2)] = inst_29089);

(statearr_29108_29131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (10))){
var inst_29087 = (state_29095[(2)]);
var state_29095__$1 = state_29095;
var statearr_29109_29132 = state_29095__$1;
(statearr_29109_29132[(2)] = inst_29087);

(statearr_29109_29132[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29096 === (8))){
var inst_29065 = (state_29095[(10)]);
var inst_29074 = (state_29095[(7)]);
var inst_29076 = (state_29095[(9)]);
var inst_29075 = (state_29095[(8)]);
var inst_29079 = (function (){var cs = inst_29065;
var vec__29070 = inst_29074;
var v = inst_29075;
var c = inst_29076;
return ((function (cs,vec__29070,v,c,inst_29065,inst_29074,inst_29076,inst_29075,state_val_29096,c__26973__auto___29123,out){
return (function (p1__29060_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29060_SHARP_);
});
;})(cs,vec__29070,v,c,inst_29065,inst_29074,inst_29076,inst_29075,state_val_29096,c__26973__auto___29123,out))
})();
var inst_29080 = cljs.core.filterv.call(null,inst_29079,inst_29065);
var inst_29065__$1 = inst_29080;
var state_29095__$1 = (function (){var statearr_29110 = state_29095;
(statearr_29110[(10)] = inst_29065__$1);

return statearr_29110;
})();
var statearr_29111_29133 = state_29095__$1;
(statearr_29111_29133[(2)] = null);

(statearr_29111_29133[(1)] = (2));


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
});})(c__26973__auto___29123,out))
;
return ((function (switch__26861__auto__,c__26973__auto___29123,out){
return (function() {
var cljs$core$async$state_machine__26862__auto__ = null;
var cljs$core$async$state_machine__26862__auto____0 = (function (){
var statearr_29115 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29115[(0)] = cljs$core$async$state_machine__26862__auto__);

(statearr_29115[(1)] = (1));

return statearr_29115;
});
var cljs$core$async$state_machine__26862__auto____1 = (function (state_29095){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_29095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e29116){if((e29116 instanceof Object)){
var ex__26865__auto__ = e29116;
var statearr_29117_29134 = state_29095;
(statearr_29117_29134[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29135 = state_29095;
state_29095 = G__29135;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
cljs$core$async$state_machine__26862__auto__ = function(state_29095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26862__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26862__auto____1.call(this,state_29095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26862__auto____0;
cljs$core$async$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26862__auto____1;
return cljs$core$async$state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto___29123,out))
})();
var state__26975__auto__ = (function (){var statearr_29118 = f__26974__auto__.call(null);
(statearr_29118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto___29123);

return statearr_29118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto___29123,out))
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
var args29136 = [];
var len__25876__auto___29185 = arguments.length;
var i__25877__auto___29186 = (0);
while(true){
if((i__25877__auto___29186 < len__25876__auto___29185)){
args29136.push((arguments[i__25877__auto___29186]));

var G__29187 = (i__25877__auto___29186 + (1));
i__25877__auto___29186 = G__29187;
continue;
} else {
}
break;
}

var G__29138 = args29136.length;
switch (G__29138) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29136.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26973__auto___29189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto___29189,out){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto___29189,out){
return (function (state_29162){
var state_val_29163 = (state_29162[(1)]);
if((state_val_29163 === (7))){
var inst_29144 = (state_29162[(7)]);
var inst_29144__$1 = (state_29162[(2)]);
var inst_29145 = (inst_29144__$1 == null);
var inst_29146 = cljs.core.not.call(null,inst_29145);
var state_29162__$1 = (function (){var statearr_29164 = state_29162;
(statearr_29164[(7)] = inst_29144__$1);

return statearr_29164;
})();
if(inst_29146){
var statearr_29165_29190 = state_29162__$1;
(statearr_29165_29190[(1)] = (8));

} else {
var statearr_29166_29191 = state_29162__$1;
(statearr_29166_29191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (1))){
var inst_29139 = (0);
var state_29162__$1 = (function (){var statearr_29167 = state_29162;
(statearr_29167[(8)] = inst_29139);

return statearr_29167;
})();
var statearr_29168_29192 = state_29162__$1;
(statearr_29168_29192[(2)] = null);

(statearr_29168_29192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (4))){
var state_29162__$1 = state_29162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29162__$1,(7),ch);
} else {
if((state_val_29163 === (6))){
var inst_29157 = (state_29162[(2)]);
var state_29162__$1 = state_29162;
var statearr_29169_29193 = state_29162__$1;
(statearr_29169_29193[(2)] = inst_29157);

(statearr_29169_29193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (3))){
var inst_29159 = (state_29162[(2)]);
var inst_29160 = cljs.core.async.close_BANG_.call(null,out);
var state_29162__$1 = (function (){var statearr_29170 = state_29162;
(statearr_29170[(9)] = inst_29159);

return statearr_29170;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29162__$1,inst_29160);
} else {
if((state_val_29163 === (2))){
var inst_29139 = (state_29162[(8)]);
var inst_29141 = (inst_29139 < n);
var state_29162__$1 = state_29162;
if(cljs.core.truth_(inst_29141)){
var statearr_29171_29194 = state_29162__$1;
(statearr_29171_29194[(1)] = (4));

} else {
var statearr_29172_29195 = state_29162__$1;
(statearr_29172_29195[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (11))){
var inst_29139 = (state_29162[(8)]);
var inst_29149 = (state_29162[(2)]);
var inst_29150 = (inst_29139 + (1));
var inst_29139__$1 = inst_29150;
var state_29162__$1 = (function (){var statearr_29173 = state_29162;
(statearr_29173[(8)] = inst_29139__$1);

(statearr_29173[(10)] = inst_29149);

return statearr_29173;
})();
var statearr_29174_29196 = state_29162__$1;
(statearr_29174_29196[(2)] = null);

(statearr_29174_29196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (9))){
var state_29162__$1 = state_29162;
var statearr_29175_29197 = state_29162__$1;
(statearr_29175_29197[(2)] = null);

(statearr_29175_29197[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (5))){
var state_29162__$1 = state_29162;
var statearr_29176_29198 = state_29162__$1;
(statearr_29176_29198[(2)] = null);

(statearr_29176_29198[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (10))){
var inst_29154 = (state_29162[(2)]);
var state_29162__$1 = state_29162;
var statearr_29177_29199 = state_29162__$1;
(statearr_29177_29199[(2)] = inst_29154);

(statearr_29177_29199[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29163 === (8))){
var inst_29144 = (state_29162[(7)]);
var state_29162__$1 = state_29162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29162__$1,(11),out,inst_29144);
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
});})(c__26973__auto___29189,out))
;
return ((function (switch__26861__auto__,c__26973__auto___29189,out){
return (function() {
var cljs$core$async$state_machine__26862__auto__ = null;
var cljs$core$async$state_machine__26862__auto____0 = (function (){
var statearr_29181 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29181[(0)] = cljs$core$async$state_machine__26862__auto__);

(statearr_29181[(1)] = (1));

return statearr_29181;
});
var cljs$core$async$state_machine__26862__auto____1 = (function (state_29162){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_29162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e29182){if((e29182 instanceof Object)){
var ex__26865__auto__ = e29182;
var statearr_29183_29200 = state_29162;
(statearr_29183_29200[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29201 = state_29162;
state_29162 = G__29201;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
cljs$core$async$state_machine__26862__auto__ = function(state_29162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26862__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26862__auto____1.call(this,state_29162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26862__auto____0;
cljs$core$async$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26862__auto____1;
return cljs$core$async$state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto___29189,out))
})();
var state__26975__auto__ = (function (){var statearr_29184 = f__26974__auto__.call(null);
(statearr_29184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto___29189);

return statearr_29184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto___29189,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29209 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29209 = (function (map_LT_,f,ch,meta29210){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29210 = meta29210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29211,meta29210__$1){
var self__ = this;
var _29211__$1 = this;
return (new cljs.core.async.t_cljs$core$async29209(self__.map_LT_,self__.f,self__.ch,meta29210__$1));
});

cljs.core.async.t_cljs$core$async29209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29211){
var self__ = this;
var _29211__$1 = this;
return self__.meta29210;
});

cljs.core.async.t_cljs$core$async29209.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29209.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29209.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29209.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29209.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29212 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29212 = (function (map_LT_,f,ch,meta29210,_,fn1,meta29213){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29210 = meta29210;
this._ = _;
this.fn1 = fn1;
this.meta29213 = meta29213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29214,meta29213__$1){
var self__ = this;
var _29214__$1 = this;
return (new cljs.core.async.t_cljs$core$async29212(self__.map_LT_,self__.f,self__.ch,self__.meta29210,self__._,self__.fn1,meta29213__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29214){
var self__ = this;
var _29214__$1 = this;
return self__.meta29213;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29212.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29202_SHARP_){
return f1.call(null,(((p1__29202_SHARP_ == null))?null:self__.f.call(null,p1__29202_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29212.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29210","meta29210",-1244272858,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29209","cljs.core.async/t_cljs$core$async29209",-990496793,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29213","meta29213",815080954,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29212.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29212";

cljs.core.async.t_cljs$core$async29212.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25407__auto__,writer__25408__auto__,opt__25409__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"cljs.core.async/t_cljs$core$async29212");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29212 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29212(map_LT___$1,f__$1,ch__$1,meta29210__$1,___$2,fn1__$1,meta29213){
return (new cljs.core.async.t_cljs$core$async29212(map_LT___$1,f__$1,ch__$1,meta29210__$1,___$2,fn1__$1,meta29213));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29212(self__.map_LT_,self__.f,self__.ch,self__.meta29210,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24789__auto__ = ret;
if(cljs.core.truth_(and__24789__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24789__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29209.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29209.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29210","meta29210",-1244272858,null)], null);
});

cljs.core.async.t_cljs$core$async29209.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29209.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29209";

cljs.core.async.t_cljs$core$async29209.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__,opt__25409__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"cljs.core.async/t_cljs$core$async29209");
});

cljs.core.async.__GT_t_cljs$core$async29209 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29209(map_LT___$1,f__$1,ch__$1,meta29210){
return (new cljs.core.async.t_cljs$core$async29209(map_LT___$1,f__$1,ch__$1,meta29210));
});

}

return (new cljs.core.async.t_cljs$core$async29209(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29218 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29218 = (function (map_GT_,f,ch,meta29219){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29219 = meta29219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29220,meta29219__$1){
var self__ = this;
var _29220__$1 = this;
return (new cljs.core.async.t_cljs$core$async29218(self__.map_GT_,self__.f,self__.ch,meta29219__$1));
});

cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29220){
var self__ = this;
var _29220__$1 = this;
return self__.meta29219;
});

cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29218.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29219","meta29219",-1095825849,null)], null);
});

cljs.core.async.t_cljs$core$async29218.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29218";

cljs.core.async.t_cljs$core$async29218.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__,opt__25409__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"cljs.core.async/t_cljs$core$async29218");
});

cljs.core.async.__GT_t_cljs$core$async29218 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29218(map_GT___$1,f__$1,ch__$1,meta29219){
return (new cljs.core.async.t_cljs$core$async29218(map_GT___$1,f__$1,ch__$1,meta29219));
});

}

return (new cljs.core.async.t_cljs$core$async29218(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29224 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29224 = (function (filter_GT_,p,ch,meta29225){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29225 = meta29225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29226,meta29225__$1){
var self__ = this;
var _29226__$1 = this;
return (new cljs.core.async.t_cljs$core$async29224(self__.filter_GT_,self__.p,self__.ch,meta29225__$1));
});

cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29226){
var self__ = this;
var _29226__$1 = this;
return self__.meta29225;
});

cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29224.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29225","meta29225",-171715493,null)], null);
});

cljs.core.async.t_cljs$core$async29224.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29224";

cljs.core.async.t_cljs$core$async29224.cljs$lang$ctorPrWriter = (function (this__25407__auto__,writer__25408__auto__,opt__25409__auto__){
return cljs.core._write.call(null,writer__25408__auto__,"cljs.core.async/t_cljs$core$async29224");
});

cljs.core.async.__GT_t_cljs$core$async29224 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29224(filter_GT___$1,p__$1,ch__$1,meta29225){
return (new cljs.core.async.t_cljs$core$async29224(filter_GT___$1,p__$1,ch__$1,meta29225));
});

}

return (new cljs.core.async.t_cljs$core$async29224(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args29227 = [];
var len__25876__auto___29271 = arguments.length;
var i__25877__auto___29272 = (0);
while(true){
if((i__25877__auto___29272 < len__25876__auto___29271)){
args29227.push((arguments[i__25877__auto___29272]));

var G__29273 = (i__25877__auto___29272 + (1));
i__25877__auto___29272 = G__29273;
continue;
} else {
}
break;
}

var G__29229 = args29227.length;
switch (G__29229) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29227.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26973__auto___29275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto___29275,out){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto___29275,out){
return (function (state_29250){
var state_val_29251 = (state_29250[(1)]);
if((state_val_29251 === (7))){
var inst_29246 = (state_29250[(2)]);
var state_29250__$1 = state_29250;
var statearr_29252_29276 = state_29250__$1;
(statearr_29252_29276[(2)] = inst_29246);

(statearr_29252_29276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29251 === (1))){
var state_29250__$1 = state_29250;
var statearr_29253_29277 = state_29250__$1;
(statearr_29253_29277[(2)] = null);

(statearr_29253_29277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29251 === (4))){
var inst_29232 = (state_29250[(7)]);
var inst_29232__$1 = (state_29250[(2)]);
var inst_29233 = (inst_29232__$1 == null);
var state_29250__$1 = (function (){var statearr_29254 = state_29250;
(statearr_29254[(7)] = inst_29232__$1);

return statearr_29254;
})();
if(cljs.core.truth_(inst_29233)){
var statearr_29255_29278 = state_29250__$1;
(statearr_29255_29278[(1)] = (5));

} else {
var statearr_29256_29279 = state_29250__$1;
(statearr_29256_29279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29251 === (6))){
var inst_29232 = (state_29250[(7)]);
var inst_29237 = p.call(null,inst_29232);
var state_29250__$1 = state_29250;
if(cljs.core.truth_(inst_29237)){
var statearr_29257_29280 = state_29250__$1;
(statearr_29257_29280[(1)] = (8));

} else {
var statearr_29258_29281 = state_29250__$1;
(statearr_29258_29281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29251 === (3))){
var inst_29248 = (state_29250[(2)]);
var state_29250__$1 = state_29250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29250__$1,inst_29248);
} else {
if((state_val_29251 === (2))){
var state_29250__$1 = state_29250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29250__$1,(4),ch);
} else {
if((state_val_29251 === (11))){
var inst_29240 = (state_29250[(2)]);
var state_29250__$1 = state_29250;
var statearr_29259_29282 = state_29250__$1;
(statearr_29259_29282[(2)] = inst_29240);

(statearr_29259_29282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29251 === (9))){
var state_29250__$1 = state_29250;
var statearr_29260_29283 = state_29250__$1;
(statearr_29260_29283[(2)] = null);

(statearr_29260_29283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29251 === (5))){
var inst_29235 = cljs.core.async.close_BANG_.call(null,out);
var state_29250__$1 = state_29250;
var statearr_29261_29284 = state_29250__$1;
(statearr_29261_29284[(2)] = inst_29235);

(statearr_29261_29284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29251 === (10))){
var inst_29243 = (state_29250[(2)]);
var state_29250__$1 = (function (){var statearr_29262 = state_29250;
(statearr_29262[(8)] = inst_29243);

return statearr_29262;
})();
var statearr_29263_29285 = state_29250__$1;
(statearr_29263_29285[(2)] = null);

(statearr_29263_29285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29251 === (8))){
var inst_29232 = (state_29250[(7)]);
var state_29250__$1 = state_29250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29250__$1,(11),out,inst_29232);
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
});})(c__26973__auto___29275,out))
;
return ((function (switch__26861__auto__,c__26973__auto___29275,out){
return (function() {
var cljs$core$async$state_machine__26862__auto__ = null;
var cljs$core$async$state_machine__26862__auto____0 = (function (){
var statearr_29267 = [null,null,null,null,null,null,null,null,null];
(statearr_29267[(0)] = cljs$core$async$state_machine__26862__auto__);

(statearr_29267[(1)] = (1));

return statearr_29267;
});
var cljs$core$async$state_machine__26862__auto____1 = (function (state_29250){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_29250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e29268){if((e29268 instanceof Object)){
var ex__26865__auto__ = e29268;
var statearr_29269_29286 = state_29250;
(statearr_29269_29286[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29287 = state_29250;
state_29250 = G__29287;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
cljs$core$async$state_machine__26862__auto__ = function(state_29250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26862__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26862__auto____1.call(this,state_29250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26862__auto____0;
cljs$core$async$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26862__auto____1;
return cljs$core$async$state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto___29275,out))
})();
var state__26975__auto__ = (function (){var statearr_29270 = f__26974__auto__.call(null);
(statearr_29270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto___29275);

return statearr_29270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto___29275,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29288 = [];
var len__25876__auto___29291 = arguments.length;
var i__25877__auto___29292 = (0);
while(true){
if((i__25877__auto___29292 < len__25876__auto___29291)){
args29288.push((arguments[i__25877__auto___29292]));

var G__29293 = (i__25877__auto___29292 + (1));
i__25877__auto___29292 = G__29293;
continue;
} else {
}
break;
}

var G__29290 = args29288.length;
switch (G__29290) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29288.length)].join('')));

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
var c__26973__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto__){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto__){
return (function (state_29460){
var state_val_29461 = (state_29460[(1)]);
if((state_val_29461 === (7))){
var inst_29456 = (state_29460[(2)]);
var state_29460__$1 = state_29460;
var statearr_29462_29503 = state_29460__$1;
(statearr_29462_29503[(2)] = inst_29456);

(statearr_29462_29503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29461 === (20))){
var inst_29426 = (state_29460[(7)]);
var inst_29437 = (state_29460[(2)]);
var inst_29438 = cljs.core.next.call(null,inst_29426);
var inst_29412 = inst_29438;
var inst_29413 = null;
var inst_29414 = (0);
var inst_29415 = (0);
var state_29460__$1 = (function (){var statearr_29463 = state_29460;
(statearr_29463[(8)] = inst_29413);

(statearr_29463[(9)] = inst_29414);

(statearr_29463[(10)] = inst_29412);

(statearr_29463[(11)] = inst_29415);

(statearr_29463[(12)] = inst_29437);

return statearr_29463;
})();
var statearr_29464_29504 = state_29460__$1;
(statearr_29464_29504[(2)] = null);

(statearr_29464_29504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29461 === (1))){
var state_29460__$1 = state_29460;
var statearr_29465_29505 = state_29460__$1;
(statearr_29465_29505[(2)] = null);

(statearr_29465_29505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29461 === (4))){
var inst_29401 = (state_29460[(13)]);
var inst_29401__$1 = (state_29460[(2)]);
var inst_29402 = (inst_29401__$1 == null);
var state_29460__$1 = (function (){var statearr_29466 = state_29460;
(statearr_29466[(13)] = inst_29401__$1);

return statearr_29466;
})();
if(cljs.core.truth_(inst_29402)){
var statearr_29467_29506 = state_29460__$1;
(statearr_29467_29506[(1)] = (5));

} else {
var statearr_29468_29507 = state_29460__$1;
(statearr_29468_29507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29461 === (15))){
var state_29460__$1 = state_29460;
var statearr_29472_29508 = state_29460__$1;
(statearr_29472_29508[(2)] = null);

(statearr_29472_29508[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29461 === (21))){
var state_29460__$1 = state_29460;
var statearr_29473_29509 = state_29460__$1;
(statearr_29473_29509[(2)] = null);

(statearr_29473_29509[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29461 === (13))){
var inst_29413 = (state_29460[(8)]);
var inst_29414 = (state_29460[(9)]);
var inst_29412 = (state_29460[(10)]);
var inst_29415 = (state_29460[(11)]);
var inst_29422 = (state_29460[(2)]);
var inst_29423 = (inst_29415 + (1));
var tmp29469 = inst_29413;
var tmp29470 = inst_29414;
var tmp29471 = inst_29412;
var inst_29412__$1 = tmp29471;
var inst_29413__$1 = tmp29469;
var inst_29414__$1 = tmp29470;
var inst_29415__$1 = inst_29423;
var state_29460__$1 = (function (){var statearr_29474 = state_29460;
(statearr_29474[(8)] = inst_29413__$1);

(statearr_29474[(9)] = inst_29414__$1);

(statearr_29474[(14)] = inst_29422);

(statearr_29474[(10)] = inst_29412__$1);

(statearr_29474[(11)] = inst_29415__$1);

return statearr_29474;
})();
var statearr_29475_29510 = state_29460__$1;
(statearr_29475_29510[(2)] = null);

(statearr_29475_29510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29461 === (22))){
var state_29460__$1 = state_29460;
var statearr_29476_29511 = state_29460__$1;
(statearr_29476_29511[(2)] = null);

(statearr_29476_29511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29461 === (6))){
var inst_29401 = (state_29460[(13)]);
var inst_29410 = f.call(null,inst_29401);
var inst_29411 = cljs.core.seq.call(null,inst_29410);
var inst_29412 = inst_29411;
var inst_29413 = null;
var inst_29414 = (0);
var inst_29415 = (0);
var state_29460__$1 = (function (){var statearr_29477 = state_29460;
(statearr_29477[(8)] = inst_29413);

(statearr_29477[(9)] = inst_29414);

(statearr_29477[(10)] = inst_29412);

(statearr_29477[(11)] = inst_29415);

return statearr_29477;
})();
var statearr_29478_29512 = state_29460__$1;
(statearr_29478_29512[(2)] = null);

(statearr_29478_29512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29461 === (17))){
var inst_29426 = (state_29460[(7)]);
var inst_29430 = cljs.core.chunk_first.call(null,inst_29426);
var inst_29431 = cljs.core.chunk_rest.call(null,inst_29426);
var inst_29432 = cljs.core.count.call(null,inst_29430);
var inst_29412 = inst_29431;
var inst_29413 = inst_29430;
var inst_29414 = inst_29432;
var inst_29415 = (0);
var state_29460__$1 = (function (){var statearr_29479 = state_29460;
(statearr_29479[(8)] = inst_29413);

(statearr_29479[(9)] = inst_29414);

(statearr_29479[(10)] = inst_29412);

(statearr_29479[(11)] = inst_29415);

return statearr_29479;
})();
var statearr_29480_29513 = state_29460__$1;
(statearr_29480_29513[(2)] = null);

(statearr_29480_29513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29461 === (3))){
var inst_29458 = (state_29460[(2)]);
var state_29460__$1 = state_29460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29460__$1,inst_29458);
} else {
if((state_val_29461 === (12))){
var inst_29446 = (state_29460[(2)]);
var state_29460__$1 = state_29460;
var statearr_29481_29514 = state_29460__$1;
(statearr_29481_29514[(2)] = inst_29446);

(statearr_29481_29514[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29461 === (2))){
var state_29460__$1 = state_29460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29460__$1,(4),in$);
} else {
if((state_val_29461 === (23))){
var inst_29454 = (state_29460[(2)]);
var state_29460__$1 = state_29460;
var statearr_29482_29515 = state_29460__$1;
(statearr_29482_29515[(2)] = inst_29454);

(statearr_29482_29515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29461 === (19))){
var inst_29441 = (state_29460[(2)]);
var state_29460__$1 = state_29460;
var statearr_29483_29516 = state_29460__$1;
(statearr_29483_29516[(2)] = inst_29441);

(statearr_29483_29516[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29461 === (11))){
var inst_29426 = (state_29460[(7)]);
var inst_29412 = (state_29460[(10)]);
var inst_29426__$1 = cljs.core.seq.call(null,inst_29412);
var state_29460__$1 = (function (){var statearr_29484 = state_29460;
(statearr_29484[(7)] = inst_29426__$1);

return statearr_29484;
})();
if(inst_29426__$1){
var statearr_29485_29517 = state_29460__$1;
(statearr_29485_29517[(1)] = (14));

} else {
var statearr_29486_29518 = state_29460__$1;
(statearr_29486_29518[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29461 === (9))){
var inst_29448 = (state_29460[(2)]);
var inst_29449 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29460__$1 = (function (){var statearr_29487 = state_29460;
(statearr_29487[(15)] = inst_29448);

return statearr_29487;
})();
if(cljs.core.truth_(inst_29449)){
var statearr_29488_29519 = state_29460__$1;
(statearr_29488_29519[(1)] = (21));

} else {
var statearr_29489_29520 = state_29460__$1;
(statearr_29489_29520[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29461 === (5))){
var inst_29404 = cljs.core.async.close_BANG_.call(null,out);
var state_29460__$1 = state_29460;
var statearr_29490_29521 = state_29460__$1;
(statearr_29490_29521[(2)] = inst_29404);

(statearr_29490_29521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29461 === (14))){
var inst_29426 = (state_29460[(7)]);
var inst_29428 = cljs.core.chunked_seq_QMARK_.call(null,inst_29426);
var state_29460__$1 = state_29460;
if(inst_29428){
var statearr_29491_29522 = state_29460__$1;
(statearr_29491_29522[(1)] = (17));

} else {
var statearr_29492_29523 = state_29460__$1;
(statearr_29492_29523[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29461 === (16))){
var inst_29444 = (state_29460[(2)]);
var state_29460__$1 = state_29460;
var statearr_29493_29524 = state_29460__$1;
(statearr_29493_29524[(2)] = inst_29444);

(statearr_29493_29524[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29461 === (10))){
var inst_29413 = (state_29460[(8)]);
var inst_29415 = (state_29460[(11)]);
var inst_29420 = cljs.core._nth.call(null,inst_29413,inst_29415);
var state_29460__$1 = state_29460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29460__$1,(13),out,inst_29420);
} else {
if((state_val_29461 === (18))){
var inst_29426 = (state_29460[(7)]);
var inst_29435 = cljs.core.first.call(null,inst_29426);
var state_29460__$1 = state_29460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29460__$1,(20),out,inst_29435);
} else {
if((state_val_29461 === (8))){
var inst_29414 = (state_29460[(9)]);
var inst_29415 = (state_29460[(11)]);
var inst_29417 = (inst_29415 < inst_29414);
var inst_29418 = inst_29417;
var state_29460__$1 = state_29460;
if(cljs.core.truth_(inst_29418)){
var statearr_29494_29525 = state_29460__$1;
(statearr_29494_29525[(1)] = (10));

} else {
var statearr_29495_29526 = state_29460__$1;
(statearr_29495_29526[(1)] = (11));

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
});})(c__26973__auto__))
;
return ((function (switch__26861__auto__,c__26973__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26862__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26862__auto____0 = (function (){
var statearr_29499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29499[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26862__auto__);

(statearr_29499[(1)] = (1));

return statearr_29499;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26862__auto____1 = (function (state_29460){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_29460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e29500){if((e29500 instanceof Object)){
var ex__26865__auto__ = e29500;
var statearr_29501_29527 = state_29460;
(statearr_29501_29527[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29528 = state_29460;
state_29460 = G__29528;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26862__auto__ = function(state_29460){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26862__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26862__auto____1.call(this,state_29460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26862__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26862__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto__))
})();
var state__26975__auto__ = (function (){var statearr_29502 = f__26974__auto__.call(null);
(statearr_29502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto__);

return statearr_29502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto__))
);

return c__26973__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29529 = [];
var len__25876__auto___29532 = arguments.length;
var i__25877__auto___29533 = (0);
while(true){
if((i__25877__auto___29533 < len__25876__auto___29532)){
args29529.push((arguments[i__25877__auto___29533]));

var G__29534 = (i__25877__auto___29533 + (1));
i__25877__auto___29533 = G__29534;
continue;
} else {
}
break;
}

var G__29531 = args29529.length;
switch (G__29531) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29529.length)].join('')));

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
var args29536 = [];
var len__25876__auto___29539 = arguments.length;
var i__25877__auto___29540 = (0);
while(true){
if((i__25877__auto___29540 < len__25876__auto___29539)){
args29536.push((arguments[i__25877__auto___29540]));

var G__29541 = (i__25877__auto___29540 + (1));
i__25877__auto___29540 = G__29541;
continue;
} else {
}
break;
}

var G__29538 = args29536.length;
switch (G__29538) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29536.length)].join('')));

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
var args29543 = [];
var len__25876__auto___29594 = arguments.length;
var i__25877__auto___29595 = (0);
while(true){
if((i__25877__auto___29595 < len__25876__auto___29594)){
args29543.push((arguments[i__25877__auto___29595]));

var G__29596 = (i__25877__auto___29595 + (1));
i__25877__auto___29595 = G__29596;
continue;
} else {
}
break;
}

var G__29545 = args29543.length;
switch (G__29545) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29543.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26973__auto___29598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto___29598,out){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto___29598,out){
return (function (state_29569){
var state_val_29570 = (state_29569[(1)]);
if((state_val_29570 === (7))){
var inst_29564 = (state_29569[(2)]);
var state_29569__$1 = state_29569;
var statearr_29571_29599 = state_29569__$1;
(statearr_29571_29599[(2)] = inst_29564);

(statearr_29571_29599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (1))){
var inst_29546 = null;
var state_29569__$1 = (function (){var statearr_29572 = state_29569;
(statearr_29572[(7)] = inst_29546);

return statearr_29572;
})();
var statearr_29573_29600 = state_29569__$1;
(statearr_29573_29600[(2)] = null);

(statearr_29573_29600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (4))){
var inst_29549 = (state_29569[(8)]);
var inst_29549__$1 = (state_29569[(2)]);
var inst_29550 = (inst_29549__$1 == null);
var inst_29551 = cljs.core.not.call(null,inst_29550);
var state_29569__$1 = (function (){var statearr_29574 = state_29569;
(statearr_29574[(8)] = inst_29549__$1);

return statearr_29574;
})();
if(inst_29551){
var statearr_29575_29601 = state_29569__$1;
(statearr_29575_29601[(1)] = (5));

} else {
var statearr_29576_29602 = state_29569__$1;
(statearr_29576_29602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (6))){
var state_29569__$1 = state_29569;
var statearr_29577_29603 = state_29569__$1;
(statearr_29577_29603[(2)] = null);

(statearr_29577_29603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (3))){
var inst_29566 = (state_29569[(2)]);
var inst_29567 = cljs.core.async.close_BANG_.call(null,out);
var state_29569__$1 = (function (){var statearr_29578 = state_29569;
(statearr_29578[(9)] = inst_29566);

return statearr_29578;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29569__$1,inst_29567);
} else {
if((state_val_29570 === (2))){
var state_29569__$1 = state_29569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29569__$1,(4),ch);
} else {
if((state_val_29570 === (11))){
var inst_29549 = (state_29569[(8)]);
var inst_29558 = (state_29569[(2)]);
var inst_29546 = inst_29549;
var state_29569__$1 = (function (){var statearr_29579 = state_29569;
(statearr_29579[(7)] = inst_29546);

(statearr_29579[(10)] = inst_29558);

return statearr_29579;
})();
var statearr_29580_29604 = state_29569__$1;
(statearr_29580_29604[(2)] = null);

(statearr_29580_29604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (9))){
var inst_29549 = (state_29569[(8)]);
var state_29569__$1 = state_29569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29569__$1,(11),out,inst_29549);
} else {
if((state_val_29570 === (5))){
var inst_29549 = (state_29569[(8)]);
var inst_29546 = (state_29569[(7)]);
var inst_29553 = cljs.core._EQ_.call(null,inst_29549,inst_29546);
var state_29569__$1 = state_29569;
if(inst_29553){
var statearr_29582_29605 = state_29569__$1;
(statearr_29582_29605[(1)] = (8));

} else {
var statearr_29583_29606 = state_29569__$1;
(statearr_29583_29606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (10))){
var inst_29561 = (state_29569[(2)]);
var state_29569__$1 = state_29569;
var statearr_29584_29607 = state_29569__$1;
(statearr_29584_29607[(2)] = inst_29561);

(statearr_29584_29607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29570 === (8))){
var inst_29546 = (state_29569[(7)]);
var tmp29581 = inst_29546;
var inst_29546__$1 = tmp29581;
var state_29569__$1 = (function (){var statearr_29585 = state_29569;
(statearr_29585[(7)] = inst_29546__$1);

return statearr_29585;
})();
var statearr_29586_29608 = state_29569__$1;
(statearr_29586_29608[(2)] = null);

(statearr_29586_29608[(1)] = (2));


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
});})(c__26973__auto___29598,out))
;
return ((function (switch__26861__auto__,c__26973__auto___29598,out){
return (function() {
var cljs$core$async$state_machine__26862__auto__ = null;
var cljs$core$async$state_machine__26862__auto____0 = (function (){
var statearr_29590 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29590[(0)] = cljs$core$async$state_machine__26862__auto__);

(statearr_29590[(1)] = (1));

return statearr_29590;
});
var cljs$core$async$state_machine__26862__auto____1 = (function (state_29569){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_29569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e29591){if((e29591 instanceof Object)){
var ex__26865__auto__ = e29591;
var statearr_29592_29609 = state_29569;
(statearr_29592_29609[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29610 = state_29569;
state_29569 = G__29610;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
cljs$core$async$state_machine__26862__auto__ = function(state_29569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26862__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26862__auto____1.call(this,state_29569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26862__auto____0;
cljs$core$async$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26862__auto____1;
return cljs$core$async$state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto___29598,out))
})();
var state__26975__auto__ = (function (){var statearr_29593 = f__26974__auto__.call(null);
(statearr_29593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto___29598);

return statearr_29593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto___29598,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29611 = [];
var len__25876__auto___29681 = arguments.length;
var i__25877__auto___29682 = (0);
while(true){
if((i__25877__auto___29682 < len__25876__auto___29681)){
args29611.push((arguments[i__25877__auto___29682]));

var G__29683 = (i__25877__auto___29682 + (1));
i__25877__auto___29682 = G__29683;
continue;
} else {
}
break;
}

var G__29613 = args29611.length;
switch (G__29613) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29611.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26973__auto___29685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto___29685,out){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto___29685,out){
return (function (state_29651){
var state_val_29652 = (state_29651[(1)]);
if((state_val_29652 === (7))){
var inst_29647 = (state_29651[(2)]);
var state_29651__$1 = state_29651;
var statearr_29653_29686 = state_29651__$1;
(statearr_29653_29686[(2)] = inst_29647);

(statearr_29653_29686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (1))){
var inst_29614 = (new Array(n));
var inst_29615 = inst_29614;
var inst_29616 = (0);
var state_29651__$1 = (function (){var statearr_29654 = state_29651;
(statearr_29654[(7)] = inst_29615);

(statearr_29654[(8)] = inst_29616);

return statearr_29654;
})();
var statearr_29655_29687 = state_29651__$1;
(statearr_29655_29687[(2)] = null);

(statearr_29655_29687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (4))){
var inst_29619 = (state_29651[(9)]);
var inst_29619__$1 = (state_29651[(2)]);
var inst_29620 = (inst_29619__$1 == null);
var inst_29621 = cljs.core.not.call(null,inst_29620);
var state_29651__$1 = (function (){var statearr_29656 = state_29651;
(statearr_29656[(9)] = inst_29619__$1);

return statearr_29656;
})();
if(inst_29621){
var statearr_29657_29688 = state_29651__$1;
(statearr_29657_29688[(1)] = (5));

} else {
var statearr_29658_29689 = state_29651__$1;
(statearr_29658_29689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (15))){
var inst_29641 = (state_29651[(2)]);
var state_29651__$1 = state_29651;
var statearr_29659_29690 = state_29651__$1;
(statearr_29659_29690[(2)] = inst_29641);

(statearr_29659_29690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (13))){
var state_29651__$1 = state_29651;
var statearr_29660_29691 = state_29651__$1;
(statearr_29660_29691[(2)] = null);

(statearr_29660_29691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (6))){
var inst_29616 = (state_29651[(8)]);
var inst_29637 = (inst_29616 > (0));
var state_29651__$1 = state_29651;
if(cljs.core.truth_(inst_29637)){
var statearr_29661_29692 = state_29651__$1;
(statearr_29661_29692[(1)] = (12));

} else {
var statearr_29662_29693 = state_29651__$1;
(statearr_29662_29693[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (3))){
var inst_29649 = (state_29651[(2)]);
var state_29651__$1 = state_29651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29651__$1,inst_29649);
} else {
if((state_val_29652 === (12))){
var inst_29615 = (state_29651[(7)]);
var inst_29639 = cljs.core.vec.call(null,inst_29615);
var state_29651__$1 = state_29651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29651__$1,(15),out,inst_29639);
} else {
if((state_val_29652 === (2))){
var state_29651__$1 = state_29651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29651__$1,(4),ch);
} else {
if((state_val_29652 === (11))){
var inst_29631 = (state_29651[(2)]);
var inst_29632 = (new Array(n));
var inst_29615 = inst_29632;
var inst_29616 = (0);
var state_29651__$1 = (function (){var statearr_29663 = state_29651;
(statearr_29663[(7)] = inst_29615);

(statearr_29663[(10)] = inst_29631);

(statearr_29663[(8)] = inst_29616);

return statearr_29663;
})();
var statearr_29664_29694 = state_29651__$1;
(statearr_29664_29694[(2)] = null);

(statearr_29664_29694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (9))){
var inst_29615 = (state_29651[(7)]);
var inst_29629 = cljs.core.vec.call(null,inst_29615);
var state_29651__$1 = state_29651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29651__$1,(11),out,inst_29629);
} else {
if((state_val_29652 === (5))){
var inst_29615 = (state_29651[(7)]);
var inst_29624 = (state_29651[(11)]);
var inst_29616 = (state_29651[(8)]);
var inst_29619 = (state_29651[(9)]);
var inst_29623 = (inst_29615[inst_29616] = inst_29619);
var inst_29624__$1 = (inst_29616 + (1));
var inst_29625 = (inst_29624__$1 < n);
var state_29651__$1 = (function (){var statearr_29665 = state_29651;
(statearr_29665[(12)] = inst_29623);

(statearr_29665[(11)] = inst_29624__$1);

return statearr_29665;
})();
if(cljs.core.truth_(inst_29625)){
var statearr_29666_29695 = state_29651__$1;
(statearr_29666_29695[(1)] = (8));

} else {
var statearr_29667_29696 = state_29651__$1;
(statearr_29667_29696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (14))){
var inst_29644 = (state_29651[(2)]);
var inst_29645 = cljs.core.async.close_BANG_.call(null,out);
var state_29651__$1 = (function (){var statearr_29669 = state_29651;
(statearr_29669[(13)] = inst_29644);

return statearr_29669;
})();
var statearr_29670_29697 = state_29651__$1;
(statearr_29670_29697[(2)] = inst_29645);

(statearr_29670_29697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (10))){
var inst_29635 = (state_29651[(2)]);
var state_29651__$1 = state_29651;
var statearr_29671_29698 = state_29651__$1;
(statearr_29671_29698[(2)] = inst_29635);

(statearr_29671_29698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (8))){
var inst_29615 = (state_29651[(7)]);
var inst_29624 = (state_29651[(11)]);
var tmp29668 = inst_29615;
var inst_29615__$1 = tmp29668;
var inst_29616 = inst_29624;
var state_29651__$1 = (function (){var statearr_29672 = state_29651;
(statearr_29672[(7)] = inst_29615__$1);

(statearr_29672[(8)] = inst_29616);

return statearr_29672;
})();
var statearr_29673_29699 = state_29651__$1;
(statearr_29673_29699[(2)] = null);

(statearr_29673_29699[(1)] = (2));


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
});})(c__26973__auto___29685,out))
;
return ((function (switch__26861__auto__,c__26973__auto___29685,out){
return (function() {
var cljs$core$async$state_machine__26862__auto__ = null;
var cljs$core$async$state_machine__26862__auto____0 = (function (){
var statearr_29677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29677[(0)] = cljs$core$async$state_machine__26862__auto__);

(statearr_29677[(1)] = (1));

return statearr_29677;
});
var cljs$core$async$state_machine__26862__auto____1 = (function (state_29651){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_29651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e29678){if((e29678 instanceof Object)){
var ex__26865__auto__ = e29678;
var statearr_29679_29700 = state_29651;
(statearr_29679_29700[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29701 = state_29651;
state_29651 = G__29701;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
cljs$core$async$state_machine__26862__auto__ = function(state_29651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26862__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26862__auto____1.call(this,state_29651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26862__auto____0;
cljs$core$async$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26862__auto____1;
return cljs$core$async$state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto___29685,out))
})();
var state__26975__auto__ = (function (){var statearr_29680 = f__26974__auto__.call(null);
(statearr_29680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto___29685);

return statearr_29680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto___29685,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29702 = [];
var len__25876__auto___29776 = arguments.length;
var i__25877__auto___29777 = (0);
while(true){
if((i__25877__auto___29777 < len__25876__auto___29776)){
args29702.push((arguments[i__25877__auto___29777]));

var G__29778 = (i__25877__auto___29777 + (1));
i__25877__auto___29777 = G__29778;
continue;
} else {
}
break;
}

var G__29704 = args29702.length;
switch (G__29704) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29702.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26973__auto___29780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto___29780,out){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto___29780,out){
return (function (state_29746){
var state_val_29747 = (state_29746[(1)]);
if((state_val_29747 === (7))){
var inst_29742 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29748_29781 = state_29746__$1;
(statearr_29748_29781[(2)] = inst_29742);

(statearr_29748_29781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (1))){
var inst_29705 = [];
var inst_29706 = inst_29705;
var inst_29707 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29746__$1 = (function (){var statearr_29749 = state_29746;
(statearr_29749[(7)] = inst_29706);

(statearr_29749[(8)] = inst_29707);

return statearr_29749;
})();
var statearr_29750_29782 = state_29746__$1;
(statearr_29750_29782[(2)] = null);

(statearr_29750_29782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (4))){
var inst_29710 = (state_29746[(9)]);
var inst_29710__$1 = (state_29746[(2)]);
var inst_29711 = (inst_29710__$1 == null);
var inst_29712 = cljs.core.not.call(null,inst_29711);
var state_29746__$1 = (function (){var statearr_29751 = state_29746;
(statearr_29751[(9)] = inst_29710__$1);

return statearr_29751;
})();
if(inst_29712){
var statearr_29752_29783 = state_29746__$1;
(statearr_29752_29783[(1)] = (5));

} else {
var statearr_29753_29784 = state_29746__$1;
(statearr_29753_29784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (15))){
var inst_29736 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29754_29785 = state_29746__$1;
(statearr_29754_29785[(2)] = inst_29736);

(statearr_29754_29785[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (13))){
var state_29746__$1 = state_29746;
var statearr_29755_29786 = state_29746__$1;
(statearr_29755_29786[(2)] = null);

(statearr_29755_29786[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (6))){
var inst_29706 = (state_29746[(7)]);
var inst_29731 = inst_29706.length;
var inst_29732 = (inst_29731 > (0));
var state_29746__$1 = state_29746;
if(cljs.core.truth_(inst_29732)){
var statearr_29756_29787 = state_29746__$1;
(statearr_29756_29787[(1)] = (12));

} else {
var statearr_29757_29788 = state_29746__$1;
(statearr_29757_29788[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (3))){
var inst_29744 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29746__$1,inst_29744);
} else {
if((state_val_29747 === (12))){
var inst_29706 = (state_29746[(7)]);
var inst_29734 = cljs.core.vec.call(null,inst_29706);
var state_29746__$1 = state_29746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29746__$1,(15),out,inst_29734);
} else {
if((state_val_29747 === (2))){
var state_29746__$1 = state_29746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29746__$1,(4),ch);
} else {
if((state_val_29747 === (11))){
var inst_29714 = (state_29746[(10)]);
var inst_29710 = (state_29746[(9)]);
var inst_29724 = (state_29746[(2)]);
var inst_29725 = [];
var inst_29726 = inst_29725.push(inst_29710);
var inst_29706 = inst_29725;
var inst_29707 = inst_29714;
var state_29746__$1 = (function (){var statearr_29758 = state_29746;
(statearr_29758[(11)] = inst_29726);

(statearr_29758[(7)] = inst_29706);

(statearr_29758[(12)] = inst_29724);

(statearr_29758[(8)] = inst_29707);

return statearr_29758;
})();
var statearr_29759_29789 = state_29746__$1;
(statearr_29759_29789[(2)] = null);

(statearr_29759_29789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (9))){
var inst_29706 = (state_29746[(7)]);
var inst_29722 = cljs.core.vec.call(null,inst_29706);
var state_29746__$1 = state_29746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29746__$1,(11),out,inst_29722);
} else {
if((state_val_29747 === (5))){
var inst_29714 = (state_29746[(10)]);
var inst_29710 = (state_29746[(9)]);
var inst_29707 = (state_29746[(8)]);
var inst_29714__$1 = f.call(null,inst_29710);
var inst_29715 = cljs.core._EQ_.call(null,inst_29714__$1,inst_29707);
var inst_29716 = cljs.core.keyword_identical_QMARK_.call(null,inst_29707,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29717 = (inst_29715) || (inst_29716);
var state_29746__$1 = (function (){var statearr_29760 = state_29746;
(statearr_29760[(10)] = inst_29714__$1);

return statearr_29760;
})();
if(cljs.core.truth_(inst_29717)){
var statearr_29761_29790 = state_29746__$1;
(statearr_29761_29790[(1)] = (8));

} else {
var statearr_29762_29791 = state_29746__$1;
(statearr_29762_29791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (14))){
var inst_29739 = (state_29746[(2)]);
var inst_29740 = cljs.core.async.close_BANG_.call(null,out);
var state_29746__$1 = (function (){var statearr_29764 = state_29746;
(statearr_29764[(13)] = inst_29739);

return statearr_29764;
})();
var statearr_29765_29792 = state_29746__$1;
(statearr_29765_29792[(2)] = inst_29740);

(statearr_29765_29792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (10))){
var inst_29729 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29766_29793 = state_29746__$1;
(statearr_29766_29793[(2)] = inst_29729);

(statearr_29766_29793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (8))){
var inst_29714 = (state_29746[(10)]);
var inst_29706 = (state_29746[(7)]);
var inst_29710 = (state_29746[(9)]);
var inst_29719 = inst_29706.push(inst_29710);
var tmp29763 = inst_29706;
var inst_29706__$1 = tmp29763;
var inst_29707 = inst_29714;
var state_29746__$1 = (function (){var statearr_29767 = state_29746;
(statearr_29767[(7)] = inst_29706__$1);

(statearr_29767[(14)] = inst_29719);

(statearr_29767[(8)] = inst_29707);

return statearr_29767;
})();
var statearr_29768_29794 = state_29746__$1;
(statearr_29768_29794[(2)] = null);

(statearr_29768_29794[(1)] = (2));


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
});})(c__26973__auto___29780,out))
;
return ((function (switch__26861__auto__,c__26973__auto___29780,out){
return (function() {
var cljs$core$async$state_machine__26862__auto__ = null;
var cljs$core$async$state_machine__26862__auto____0 = (function (){
var statearr_29772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29772[(0)] = cljs$core$async$state_machine__26862__auto__);

(statearr_29772[(1)] = (1));

return statearr_29772;
});
var cljs$core$async$state_machine__26862__auto____1 = (function (state_29746){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_29746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e29773){if((e29773 instanceof Object)){
var ex__26865__auto__ = e29773;
var statearr_29774_29795 = state_29746;
(statearr_29774_29795[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29796 = state_29746;
state_29746 = G__29796;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
cljs$core$async$state_machine__26862__auto__ = function(state_29746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26862__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26862__auto____1.call(this,state_29746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26862__auto____0;
cljs$core$async$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26862__auto____1;
return cljs$core$async$state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto___29780,out))
})();
var state__26975__auto__ = (function (){var statearr_29775 = f__26974__auto__.call(null);
(statearr_29775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto___29780);

return statearr_29775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto___29780,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1516956381613