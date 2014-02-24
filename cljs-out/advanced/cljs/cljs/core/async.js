// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t24277 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24277 = (function (f,fn_handler,meta24278){
this.f = f;
this.fn_handler = fn_handler;
this.meta24278 = meta24278;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24277.cljs$lang$type = true;
cljs.core.async.t24277.cljs$lang$ctorStr = "cljs.core.async/t24277";
cljs.core.async.t24277.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24277");
});
cljs.core.async.t24277.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24277.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t24277.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t24277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24279){var self__ = this;
var _24279__$1 = this;return self__.meta24278;
});
cljs.core.async.t24277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24279,meta24278__$1){var self__ = this;
var _24279__$1 = this;return (new cljs.core.async.t24277(self__.f,self__.fn_handler,meta24278__$1));
});
cljs.core.async.__GT_t24277 = (function __GT_t24277(f__$1,fn_handler__$1,meta24278){return (new cljs.core.async.t24277(f__$1,fn_handler__$1,meta24278));
});
}
return (new cljs.core.async.t24277(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__24281 = buff;if(G__24281)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__24281.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__24281.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24281);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__24281);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_24282 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24282) : fn1.call(null,val_24282));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_24282) : fn1.call(null,val_24282));
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.cljs$core$IFn$_invoke$arity$3(port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3394__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{(fn0.cljs$core$IFn$_invoke$arity$0 ? fn0.cljs$core$IFn$_invoke$arity$0() : fn0.call(null));
} else
{cljs.core.async.impl.dispatch.run(fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___24283 = n;var x_24284 = 0;while(true){
if((x_24284 < n__4248__auto___24283))
{(a[x_24284] = 0);
{
var G__24285 = (x_24284 + 1);
x_24284 = G__24285;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__24286 = (i + 1);
i = G__24286;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t24290 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24290 = (function (flag,alt_flag,meta24291){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24291 = meta24291;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24290.cljs$lang$type = true;
cljs.core.async.t24290.cljs$lang$ctorStr = "cljs.core.async/t24290";
cljs.core.async.t24290.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24290");
});
cljs.core.async.t24290.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24290.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t24290.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t24290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24292){var self__ = this;
var _24292__$1 = this;return self__.meta24291;
});
cljs.core.async.t24290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24292,meta24291__$1){var self__ = this;
var _24292__$1 = this;return (new cljs.core.async.t24290(self__.flag,self__.alt_flag,meta24291__$1));
});
cljs.core.async.__GT_t24290 = (function __GT_t24290(flag__$1,alt_flag__$1,meta24291){return (new cljs.core.async.t24290(flag__$1,alt_flag__$1,meta24291));
});
}
return (new cljs.core.async.t24290(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t24296 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24296 = (function (cb,flag,alt_handler,meta24297){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24297 = meta24297;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24296.cljs$lang$type = true;
cljs.core.async.t24296.cljs$lang$ctorStr = "cljs.core.async/t24296";
cljs.core.async.t24296.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24296");
});
cljs.core.async.t24296.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24296.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t24296.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t24296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24298){var self__ = this;
var _24298__$1 = this;return self__.meta24297;
});
cljs.core.async.t24296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24298,meta24297__$1){var self__ = this;
var _24298__$1 = this;return (new cljs.core.async.t24296(self__.cb,self__.flag,self__.alt_handler,meta24297__$1));
});
cljs.core.async.__GT_t24296 = (function __GT_t24296(cb__$1,flag__$1,alt_handler__$1,meta24297){return (new cljs.core.async.t24296(cb__$1,flag__$1,alt_handler__$1,meta24297));
});
}
return (new cljs.core.async.t24296(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$254.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24299_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24299_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24299_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3406__auto__ = wport;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__24300 = (i + 1);
i = G__24300;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3406__auto__ = ret;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$238))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3394__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$238], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__24301){var map__24303 = p__24301;var map__24303__$1 = ((cljs.core.seq_QMARK_(map__24303))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24303):map__24303);var opts = map__24303__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__24301 = null;if (arguments.length > 1) {
  p__24301 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__24301);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24304){
var ports = cljs.core.first(arglist__24304);
var p__24301 = cljs.core.rest(arglist__24304);
return alts_BANG___delegate(ports,p__24301);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t24312 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24312 = (function (ch,f,map_LT_,meta24313){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24313 = meta24313;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24312.cljs$lang$type = true;
cljs.core.async.t24312.cljs$lang$ctorStr = "cljs.core.async/t24312";
cljs.core.async.t24312.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24312");
});
cljs.core.async.t24312.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24312.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t24312.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24312.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t24315 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24315 = (function (fn1,_,meta24313,ch,f,map_LT_,meta24316){
this.fn1 = fn1;
this._ = _;
this.meta24313 = meta24313;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta24316 = meta24316;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24315.cljs$lang$type = true;
cljs.core.async.t24315.cljs$lang$ctorStr = "cljs.core.async/t24315";
cljs.core.async.t24315.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24315");
});
cljs.core.async.t24315.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t24315.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t24315.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t24315.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__24305_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__24305_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24305_SHARP_) : self__.f.call(null,p1__24305_SHARP_)))) : f1.call(null,(((p1__24305_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__24305_SHARP_) : self__.f.call(null,p1__24305_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t24315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24317){var self__ = this;
var _24317__$1 = this;return self__.meta24316;
});
cljs.core.async.t24315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24317,meta24316__$1){var self__ = this;
var _24317__$1 = this;return (new cljs.core.async.t24315(self__.fn1,self__._,self__.meta24313,self__.ch,self__.f,self__.map_LT_,meta24316__$1));
});
cljs.core.async.__GT_t24315 = (function __GT_t24315(fn1__$1,___$2,meta24313__$1,ch__$2,f__$2,map_LT___$2,meta24316){return (new cljs.core.async.t24315(fn1__$1,___$2,meta24313__$1,ch__$2,f__$2,map_LT___$2,meta24316));
});
}
return (new cljs.core.async.t24315(fn1,___$1,self__.meta24313,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t24312.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24312.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24314){var self__ = this;
var _24314__$1 = this;return self__.meta24313;
});
cljs.core.async.t24312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24314,meta24313__$1){var self__ = this;
var _24314__$1 = this;return (new cljs.core.async.t24312(self__.ch,self__.f,self__.map_LT_,meta24313__$1));
});
cljs.core.async.__GT_t24312 = (function __GT_t24312(ch__$1,f__$1,map_LT___$1,meta24313){return (new cljs.core.async.t24312(ch__$1,f__$1,map_LT___$1,meta24313));
});
}
return (new cljs.core.async.t24312(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t24321 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24321 = (function (ch,f,map_GT_,meta24322){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta24322 = meta24322;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24321.cljs$lang$type = true;
cljs.core.async.t24321.cljs$lang$ctorStr = "cljs.core.async/t24321";
cljs.core.async.t24321.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24321");
});
cljs.core.async.t24321.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24321.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t24321.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24321.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24321.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24321.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24323){var self__ = this;
var _24323__$1 = this;return self__.meta24322;
});
cljs.core.async.t24321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24323,meta24322__$1){var self__ = this;
var _24323__$1 = this;return (new cljs.core.async.t24321(self__.ch,self__.f,self__.map_GT_,meta24322__$1));
});
cljs.core.async.__GT_t24321 = (function __GT_t24321(ch__$1,f__$1,map_GT___$1,meta24322){return (new cljs.core.async.t24321(ch__$1,f__$1,map_GT___$1,meta24322));
});
}
return (new cljs.core.async.t24321(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24327 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24327 = (function (ch,p,filter_GT_,meta24328){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24328 = meta24328;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24327.cljs$lang$type = true;
cljs.core.async.t24327.cljs$lang$ctorStr = "cljs.core.async/t24327";
cljs.core.async.t24327.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t24327");
});
cljs.core.async.t24327.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24327.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t24327.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24327.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t24327.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24327.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t24327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24329){var self__ = this;
var _24329__$1 = this;return self__.meta24328;
});
cljs.core.async.t24327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24329,meta24328__$1){var self__ = this;
var _24329__$1 = this;return (new cljs.core.async.t24327(self__.ch,self__.p,self__.filter_GT_,meta24328__$1));
});
cljs.core.async.__GT_t24327 = (function __GT_t24327(ch__$1,p__$1,filter_GT___$1,meta24328){return (new cljs.core.async.t24327(ch__$1,p__$1,filter_GT___$1,meta24328));
});
}
return (new cljs.core.async.t24327(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___24412 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24391){var state_val_24392 = (state_24391[1]);if((state_val_24392 === 1))
{var state_24391__$1 = state_24391;var statearr_24393_24413 = state_24391__$1;(statearr_24393_24413[2] = null);
(statearr_24393_24413[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24392 === 2))
{var state_24391__$1 = state_24391;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24391__$1,4,ch);
} else
{if((state_val_24392 === 3))
{var inst_24389 = (state_24391[2]);var state_24391__$1 = state_24391;return cljs.core.async.impl.ioc_helpers.return_chan(state_24391__$1,inst_24389);
} else
{if((state_val_24392 === 4))
{var inst_24373 = (state_24391[7]);var inst_24373__$1 = (state_24391[2]);var inst_24374 = (inst_24373__$1 == null);var state_24391__$1 = (function (){var statearr_24394 = state_24391;(statearr_24394[7] = inst_24373__$1);
return statearr_24394;
})();if(cljs.core.truth_(inst_24374))
{var statearr_24395_24414 = state_24391__$1;(statearr_24395_24414[1] = 5);
} else
{var statearr_24396_24415 = state_24391__$1;(statearr_24396_24415[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24392 === 5))
{var inst_24376 = cljs.core.async.close_BANG_(out);var state_24391__$1 = state_24391;var statearr_24397_24416 = state_24391__$1;(statearr_24397_24416[2] = inst_24376);
(statearr_24397_24416[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24392 === 6))
{var inst_24373 = (state_24391[7]);var inst_24378 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24373) : p.call(null,inst_24373));var state_24391__$1 = state_24391;if(cljs.core.truth_(inst_24378))
{var statearr_24398_24417 = state_24391__$1;(statearr_24398_24417[1] = 8);
} else
{var statearr_24399_24418 = state_24391__$1;(statearr_24399_24418[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24392 === 7))
{var inst_24387 = (state_24391[2]);var state_24391__$1 = state_24391;var statearr_24400_24419 = state_24391__$1;(statearr_24400_24419[2] = inst_24387);
(statearr_24400_24419[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24392 === 8))
{var inst_24373 = (state_24391[7]);var state_24391__$1 = state_24391;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24391__$1,11,out,inst_24373);
} else
{if((state_val_24392 === 9))
{var state_24391__$1 = state_24391;var statearr_24401_24420 = state_24391__$1;(statearr_24401_24420[2] = null);
(statearr_24401_24420[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24392 === 10))
{var inst_24384 = (state_24391[2]);var state_24391__$1 = (function (){var statearr_24402 = state_24391;(statearr_24402[8] = inst_24384);
return statearr_24402;
})();var statearr_24403_24421 = state_24391__$1;(statearr_24403_24421[2] = null);
(statearr_24403_24421[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24392 === 11))
{var inst_24381 = (state_24391[2]);var state_24391__$1 = state_24391;var statearr_24404_24422 = state_24391__$1;(statearr_24404_24422[2] = inst_24381);
(statearr_24404_24422[1] = 10);
return cljs.core.constant$keyword$248;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_24408 = [null,null,null,null,null,null,null,null,null];(statearr_24408[0] = state_machine__5507__auto__);
(statearr_24408[1] = 1);
return statearr_24408;
});
var state_machine__5507__auto____1 = (function (state_24391){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24391);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24409){if((e24409 instanceof Object))
{var ex__5510__auto__ = e24409;var statearr_24410_24423 = state_24391;(statearr_24410_24423[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24391);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e24409;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__24424 = state_24391;
state_24391 = G__24424;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24391){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24411 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24412);
return statearr_24411;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24576){var state_val_24577 = (state_24576[1]);if((state_val_24577 === 1))
{var state_24576__$1 = state_24576;var statearr_24578_24615 = state_24576__$1;(statearr_24578_24615[2] = null);
(statearr_24578_24615[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24577 === 2))
{var state_24576__$1 = state_24576;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24576__$1,4,in$);
} else
{if((state_val_24577 === 3))
{var inst_24574 = (state_24576[2]);var state_24576__$1 = state_24576;return cljs.core.async.impl.ioc_helpers.return_chan(state_24576__$1,inst_24574);
} else
{if((state_val_24577 === 4))
{var inst_24522 = (state_24576[7]);var inst_24522__$1 = (state_24576[2]);var inst_24523 = (inst_24522__$1 == null);var state_24576__$1 = (function (){var statearr_24579 = state_24576;(statearr_24579[7] = inst_24522__$1);
return statearr_24579;
})();if(cljs.core.truth_(inst_24523))
{var statearr_24580_24616 = state_24576__$1;(statearr_24580_24616[1] = 5);
} else
{var statearr_24581_24617 = state_24576__$1;(statearr_24581_24617[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24577 === 5))
{var inst_24525 = cljs.core.async.close_BANG_(out);var state_24576__$1 = state_24576;var statearr_24582_24618 = state_24576__$1;(statearr_24582_24618[2] = inst_24525);
(statearr_24582_24618[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24577 === 6))
{var inst_24522 = (state_24576[7]);var inst_24527 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_24522) : f.call(null,inst_24522));var inst_24532 = cljs.core.seq(inst_24527);var inst_24533 = inst_24532;var inst_24534 = null;var inst_24535 = 0;var inst_24536 = 0;var state_24576__$1 = (function (){var statearr_24583 = state_24576;(statearr_24583[8] = inst_24534);
(statearr_24583[9] = inst_24533);
(statearr_24583[10] = inst_24535);
(statearr_24583[11] = inst_24536);
return statearr_24583;
})();var statearr_24584_24619 = state_24576__$1;(statearr_24584_24619[2] = null);
(statearr_24584_24619[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24577 === 7))
{var inst_24572 = (state_24576[2]);var state_24576__$1 = state_24576;var statearr_24585_24620 = state_24576__$1;(statearr_24585_24620[2] = inst_24572);
(statearr_24585_24620[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24577 === 8))
{var inst_24535 = (state_24576[10]);var inst_24536 = (state_24576[11]);var inst_24538 = (inst_24536 < inst_24535);var inst_24539 = inst_24538;var state_24576__$1 = state_24576;if(cljs.core.truth_(inst_24539))
{var statearr_24586_24621 = state_24576__$1;(statearr_24586_24621[1] = 10);
} else
{var statearr_24587_24622 = state_24576__$1;(statearr_24587_24622[1] = 11);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24577 === 9))
{var inst_24569 = (state_24576[2]);var state_24576__$1 = (function (){var statearr_24588 = state_24576;(statearr_24588[12] = inst_24569);
return statearr_24588;
})();var statearr_24589_24623 = state_24576__$1;(statearr_24589_24623[2] = null);
(statearr_24589_24623[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24577 === 10))
{var inst_24534 = (state_24576[8]);var inst_24536 = (state_24576[11]);var inst_24541 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24534,inst_24536);var state_24576__$1 = state_24576;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24576__$1,13,out,inst_24541);
} else
{if((state_val_24577 === 11))
{var inst_24533 = (state_24576[9]);var inst_24547 = (state_24576[13]);var inst_24547__$1 = cljs.core.seq(inst_24533);var state_24576__$1 = (function (){var statearr_24593 = state_24576;(statearr_24593[13] = inst_24547__$1);
return statearr_24593;
})();if(inst_24547__$1)
{var statearr_24594_24624 = state_24576__$1;(statearr_24594_24624[1] = 14);
} else
{var statearr_24595_24625 = state_24576__$1;(statearr_24595_24625[1] = 15);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24577 === 12))
{var inst_24567 = (state_24576[2]);var state_24576__$1 = state_24576;var statearr_24596_24626 = state_24576__$1;(statearr_24596_24626[2] = inst_24567);
(statearr_24596_24626[1] = 9);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24577 === 13))
{var inst_24534 = (state_24576[8]);var inst_24533 = (state_24576[9]);var inst_24535 = (state_24576[10]);var inst_24536 = (state_24576[11]);var inst_24543 = (state_24576[2]);var inst_24544 = (inst_24536 + 1);var tmp24590 = inst_24534;var tmp24591 = inst_24533;var tmp24592 = inst_24535;var inst_24533__$1 = tmp24591;var inst_24534__$1 = tmp24590;var inst_24535__$1 = tmp24592;var inst_24536__$1 = inst_24544;var state_24576__$1 = (function (){var statearr_24597 = state_24576;(statearr_24597[8] = inst_24534__$1);
(statearr_24597[9] = inst_24533__$1);
(statearr_24597[10] = inst_24535__$1);
(statearr_24597[11] = inst_24536__$1);
(statearr_24597[14] = inst_24543);
return statearr_24597;
})();var statearr_24598_24627 = state_24576__$1;(statearr_24598_24627[2] = null);
(statearr_24598_24627[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24577 === 14))
{var inst_24547 = (state_24576[13]);var inst_24549 = cljs.core.chunked_seq_QMARK_(inst_24547);var state_24576__$1 = state_24576;if(inst_24549)
{var statearr_24599_24628 = state_24576__$1;(statearr_24599_24628[1] = 17);
} else
{var statearr_24600_24629 = state_24576__$1;(statearr_24600_24629[1] = 18);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24577 === 15))
{var state_24576__$1 = state_24576;var statearr_24601_24630 = state_24576__$1;(statearr_24601_24630[2] = null);
(statearr_24601_24630[1] = 16);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24577 === 16))
{var inst_24565 = (state_24576[2]);var state_24576__$1 = state_24576;var statearr_24602_24631 = state_24576__$1;(statearr_24602_24631[2] = inst_24565);
(statearr_24602_24631[1] = 12);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24577 === 17))
{var inst_24547 = (state_24576[13]);var inst_24551 = cljs.core.chunk_first(inst_24547);var inst_24552 = cljs.core.chunk_rest(inst_24547);var inst_24553 = cljs.core.count(inst_24551);var inst_24533 = inst_24552;var inst_24534 = inst_24551;var inst_24535 = inst_24553;var inst_24536 = 0;var state_24576__$1 = (function (){var statearr_24603 = state_24576;(statearr_24603[8] = inst_24534);
(statearr_24603[9] = inst_24533);
(statearr_24603[10] = inst_24535);
(statearr_24603[11] = inst_24536);
return statearr_24603;
})();var statearr_24604_24632 = state_24576__$1;(statearr_24604_24632[2] = null);
(statearr_24604_24632[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24577 === 18))
{var inst_24547 = (state_24576[13]);var inst_24556 = cljs.core.first(inst_24547);var state_24576__$1 = state_24576;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24576__$1,20,out,inst_24556);
} else
{if((state_val_24577 === 19))
{var inst_24562 = (state_24576[2]);var state_24576__$1 = state_24576;var statearr_24605_24633 = state_24576__$1;(statearr_24605_24633[2] = inst_24562);
(statearr_24605_24633[1] = 16);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24577 === 20))
{var inst_24547 = (state_24576[13]);var inst_24558 = (state_24576[2]);var inst_24559 = cljs.core.next(inst_24547);var inst_24533 = inst_24559;var inst_24534 = null;var inst_24535 = 0;var inst_24536 = 0;var state_24576__$1 = (function (){var statearr_24606 = state_24576;(statearr_24606[8] = inst_24534);
(statearr_24606[9] = inst_24533);
(statearr_24606[15] = inst_24558);
(statearr_24606[10] = inst_24535);
(statearr_24606[11] = inst_24536);
return statearr_24606;
})();var statearr_24607_24634 = state_24576__$1;(statearr_24607_24634[2] = null);
(statearr_24607_24634[1] = 8);
return cljs.core.constant$keyword$248;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_24611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24611[0] = state_machine__5507__auto__);
(statearr_24611[1] = 1);
return statearr_24611;
});
var state_machine__5507__auto____1 = (function (state_24576){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24576);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24612){if((e24612 instanceof Object))
{var ex__5510__auto__ = e24612;var statearr_24613_24635 = state_24576;(statearr_24613_24635[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24576);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e24612;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__24636 = state_24576;
state_24576 = G__24636;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24576){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24614 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24614;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___24717 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24696){var state_val_24697 = (state_24696[1]);if((state_val_24697 === 1))
{var state_24696__$1 = state_24696;var statearr_24698_24718 = state_24696__$1;(statearr_24698_24718[2] = null);
(statearr_24698_24718[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24697 === 2))
{var state_24696__$1 = state_24696;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24696__$1,4,from);
} else
{if((state_val_24697 === 3))
{var inst_24694 = (state_24696[2]);var state_24696__$1 = state_24696;return cljs.core.async.impl.ioc_helpers.return_chan(state_24696__$1,inst_24694);
} else
{if((state_val_24697 === 4))
{var inst_24679 = (state_24696[7]);var inst_24679__$1 = (state_24696[2]);var inst_24680 = (inst_24679__$1 == null);var state_24696__$1 = (function (){var statearr_24699 = state_24696;(statearr_24699[7] = inst_24679__$1);
return statearr_24699;
})();if(cljs.core.truth_(inst_24680))
{var statearr_24700_24719 = state_24696__$1;(statearr_24700_24719[1] = 5);
} else
{var statearr_24701_24720 = state_24696__$1;(statearr_24701_24720[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24697 === 5))
{var state_24696__$1 = state_24696;if(cljs.core.truth_(close_QMARK_))
{var statearr_24702_24721 = state_24696__$1;(statearr_24702_24721[1] = 8);
} else
{var statearr_24703_24722 = state_24696__$1;(statearr_24703_24722[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24697 === 6))
{var inst_24679 = (state_24696[7]);var state_24696__$1 = state_24696;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24696__$1,11,to,inst_24679);
} else
{if((state_val_24697 === 7))
{var inst_24692 = (state_24696[2]);var state_24696__$1 = state_24696;var statearr_24704_24723 = state_24696__$1;(statearr_24704_24723[2] = inst_24692);
(statearr_24704_24723[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24697 === 8))
{var inst_24683 = cljs.core.async.close_BANG_(to);var state_24696__$1 = state_24696;var statearr_24705_24724 = state_24696__$1;(statearr_24705_24724[2] = inst_24683);
(statearr_24705_24724[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24697 === 9))
{var state_24696__$1 = state_24696;var statearr_24706_24725 = state_24696__$1;(statearr_24706_24725[2] = null);
(statearr_24706_24725[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24697 === 10))
{var inst_24686 = (state_24696[2]);var state_24696__$1 = state_24696;var statearr_24707_24726 = state_24696__$1;(statearr_24707_24726[2] = inst_24686);
(statearr_24707_24726[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24697 === 11))
{var inst_24689 = (state_24696[2]);var state_24696__$1 = (function (){var statearr_24708 = state_24696;(statearr_24708[8] = inst_24689);
return statearr_24708;
})();var statearr_24709_24727 = state_24696__$1;(statearr_24709_24727[2] = null);
(statearr_24709_24727[1] = 2);
return cljs.core.constant$keyword$248;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_24713 = [null,null,null,null,null,null,null,null,null];(statearr_24713[0] = state_machine__5507__auto__);
(statearr_24713[1] = 1);
return statearr_24713;
});
var state_machine__5507__auto____1 = (function (state_24696){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24696);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24714){if((e24714 instanceof Object))
{var ex__5510__auto__ = e24714;var statearr_24715_24728 = state_24696;(statearr_24715_24728[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24696);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e24714;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__24729 = state_24696;
state_24696 = G__24729;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24696){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24716 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24717);
return statearr_24716;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5521__auto___24816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24794){var state_val_24795 = (state_24794[1]);if((state_val_24795 === 1))
{var state_24794__$1 = state_24794;var statearr_24796_24817 = state_24794__$1;(statearr_24796_24817[2] = null);
(statearr_24796_24817[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24795 === 2))
{var state_24794__$1 = state_24794;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24794__$1,4,ch);
} else
{if((state_val_24795 === 3))
{var inst_24792 = (state_24794[2]);var state_24794__$1 = state_24794;return cljs.core.async.impl.ioc_helpers.return_chan(state_24794__$1,inst_24792);
} else
{if((state_val_24795 === 4))
{var inst_24775 = (state_24794[7]);var inst_24775__$1 = (state_24794[2]);var inst_24776 = (inst_24775__$1 == null);var state_24794__$1 = (function (){var statearr_24797 = state_24794;(statearr_24797[7] = inst_24775__$1);
return statearr_24797;
})();if(cljs.core.truth_(inst_24776))
{var statearr_24798_24818 = state_24794__$1;(statearr_24798_24818[1] = 5);
} else
{var statearr_24799_24819 = state_24794__$1;(statearr_24799_24819[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24795 === 5))
{var inst_24778 = cljs.core.async.close_BANG_(tc);var inst_24779 = cljs.core.async.close_BANG_(fc);var state_24794__$1 = (function (){var statearr_24800 = state_24794;(statearr_24800[8] = inst_24778);
return statearr_24800;
})();var statearr_24801_24820 = state_24794__$1;(statearr_24801_24820[2] = inst_24779);
(statearr_24801_24820[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24795 === 6))
{var inst_24775 = (state_24794[7]);var inst_24781 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24775) : p.call(null,inst_24775));var state_24794__$1 = state_24794;if(cljs.core.truth_(inst_24781))
{var statearr_24802_24821 = state_24794__$1;(statearr_24802_24821[1] = 9);
} else
{var statearr_24803_24822 = state_24794__$1;(statearr_24803_24822[1] = 10);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24795 === 7))
{var inst_24790 = (state_24794[2]);var state_24794__$1 = state_24794;var statearr_24804_24823 = state_24794__$1;(statearr_24804_24823[2] = inst_24790);
(statearr_24804_24823[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24795 === 8))
{var inst_24787 = (state_24794[2]);var state_24794__$1 = (function (){var statearr_24805 = state_24794;(statearr_24805[9] = inst_24787);
return statearr_24805;
})();var statearr_24806_24824 = state_24794__$1;(statearr_24806_24824[2] = null);
(statearr_24806_24824[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24795 === 9))
{var state_24794__$1 = state_24794;var statearr_24807_24825 = state_24794__$1;(statearr_24807_24825[2] = tc);
(statearr_24807_24825[1] = 11);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24795 === 10))
{var state_24794__$1 = state_24794;var statearr_24808_24826 = state_24794__$1;(statearr_24808_24826[2] = fc);
(statearr_24808_24826[1] = 11);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24795 === 11))
{var inst_24775 = (state_24794[7]);var inst_24785 = (state_24794[2]);var state_24794__$1 = state_24794;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24794__$1,8,inst_24785,inst_24775);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_24812 = [null,null,null,null,null,null,null,null,null,null];(statearr_24812[0] = state_machine__5507__auto__);
(statearr_24812[1] = 1);
return statearr_24812;
});
var state_machine__5507__auto____1 = (function (state_24794){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24794);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24813){if((e24813 instanceof Object))
{var ex__5510__auto__ = e24813;var statearr_24814_24827 = state_24794;(statearr_24814_24827[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24794);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e24813;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__24828 = state_24794;
state_24794 = G__24828;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24794){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24815 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24816);
return statearr_24815;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24875){var state_val_24876 = (state_24875[1]);if((state_val_24876 === 7))
{var inst_24871 = (state_24875[2]);var state_24875__$1 = state_24875;var statearr_24877_24893 = state_24875__$1;(statearr_24877_24893[2] = inst_24871);
(statearr_24877_24893[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24876 === 6))
{var inst_24864 = (state_24875[7]);var inst_24861 = (state_24875[8]);var inst_24868 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24861,inst_24864) : f.call(null,inst_24861,inst_24864));var inst_24861__$1 = inst_24868;var state_24875__$1 = (function (){var statearr_24878 = state_24875;(statearr_24878[8] = inst_24861__$1);
return statearr_24878;
})();var statearr_24879_24894 = state_24875__$1;(statearr_24879_24894[2] = null);
(statearr_24879_24894[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24876 === 5))
{var inst_24861 = (state_24875[8]);var state_24875__$1 = state_24875;var statearr_24880_24895 = state_24875__$1;(statearr_24880_24895[2] = inst_24861);
(statearr_24880_24895[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24876 === 4))
{var inst_24864 = (state_24875[7]);var inst_24864__$1 = (state_24875[2]);var inst_24865 = (inst_24864__$1 == null);var state_24875__$1 = (function (){var statearr_24881 = state_24875;(statearr_24881[7] = inst_24864__$1);
return statearr_24881;
})();if(cljs.core.truth_(inst_24865))
{var statearr_24882_24896 = state_24875__$1;(statearr_24882_24896[1] = 5);
} else
{var statearr_24883_24897 = state_24875__$1;(statearr_24883_24897[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24876 === 3))
{var inst_24873 = (state_24875[2]);var state_24875__$1 = state_24875;return cljs.core.async.impl.ioc_helpers.return_chan(state_24875__$1,inst_24873);
} else
{if((state_val_24876 === 2))
{var state_24875__$1 = state_24875;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24875__$1,4,ch);
} else
{if((state_val_24876 === 1))
{var inst_24861 = init;var state_24875__$1 = (function (){var statearr_24884 = state_24875;(statearr_24884[8] = inst_24861);
return statearr_24884;
})();var statearr_24885_24898 = state_24875__$1;(statearr_24885_24898[2] = null);
(statearr_24885_24898[1] = 2);
return cljs.core.constant$keyword$248;
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_24889 = [null,null,null,null,null,null,null,null,null];(statearr_24889[0] = state_machine__5507__auto__);
(statearr_24889[1] = 1);
return statearr_24889;
});
var state_machine__5507__auto____1 = (function (state_24875){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24875);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24890){if((e24890 instanceof Object))
{var ex__5510__auto__ = e24890;var statearr_24891_24899 = state_24875;(statearr_24891_24899[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24875);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e24890;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__24900 = state_24875;
state_24875 = G__24900;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24875){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24892 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24892;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24962){var state_val_24963 = (state_24962[1]);if((state_val_24963 === 1))
{var inst_24942 = cljs.core.seq(coll);var inst_24943 = inst_24942;var state_24962__$1 = (function (){var statearr_24964 = state_24962;(statearr_24964[7] = inst_24943);
return statearr_24964;
})();var statearr_24965_24983 = state_24962__$1;(statearr_24965_24983[2] = null);
(statearr_24965_24983[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24963 === 2))
{var inst_24943 = (state_24962[7]);var state_24962__$1 = state_24962;if(cljs.core.truth_(inst_24943))
{var statearr_24966_24984 = state_24962__$1;(statearr_24966_24984[1] = 4);
} else
{var statearr_24967_24985 = state_24962__$1;(statearr_24967_24985[1] = 5);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24963 === 3))
{var inst_24960 = (state_24962[2]);var state_24962__$1 = state_24962;return cljs.core.async.impl.ioc_helpers.return_chan(state_24962__$1,inst_24960);
} else
{if((state_val_24963 === 4))
{var inst_24943 = (state_24962[7]);var inst_24946 = cljs.core.first(inst_24943);var state_24962__$1 = state_24962;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24962__$1,7,ch,inst_24946);
} else
{if((state_val_24963 === 5))
{var state_24962__$1 = state_24962;if(cljs.core.truth_(close_QMARK_))
{var statearr_24968_24986 = state_24962__$1;(statearr_24968_24986[1] = 8);
} else
{var statearr_24969_24987 = state_24962__$1;(statearr_24969_24987[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_24963 === 6))
{var inst_24958 = (state_24962[2]);var state_24962__$1 = state_24962;var statearr_24970_24988 = state_24962__$1;(statearr_24970_24988[2] = inst_24958);
(statearr_24970_24988[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24963 === 7))
{var inst_24943 = (state_24962[7]);var inst_24948 = (state_24962[2]);var inst_24949 = cljs.core.next(inst_24943);var inst_24943__$1 = inst_24949;var state_24962__$1 = (function (){var statearr_24971 = state_24962;(statearr_24971[8] = inst_24948);
(statearr_24971[7] = inst_24943__$1);
return statearr_24971;
})();var statearr_24972_24989 = state_24962__$1;(statearr_24972_24989[2] = null);
(statearr_24972_24989[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24963 === 8))
{var inst_24953 = cljs.core.async.close_BANG_(ch);var state_24962__$1 = state_24962;var statearr_24973_24990 = state_24962__$1;(statearr_24973_24990[2] = inst_24953);
(statearr_24973_24990[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24963 === 9))
{var state_24962__$1 = state_24962;var statearr_24974_24991 = state_24962__$1;(statearr_24974_24991[2] = null);
(statearr_24974_24991[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_24963 === 10))
{var inst_24956 = (state_24962[2]);var state_24962__$1 = state_24962;var statearr_24975_24992 = state_24962__$1;(statearr_24975_24992[2] = inst_24956);
(statearr_24975_24992[1] = 6);
return cljs.core.constant$keyword$248;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_24979 = [null,null,null,null,null,null,null,null,null];(statearr_24979[0] = state_machine__5507__auto__);
(statearr_24979[1] = 1);
return statearr_24979;
});
var state_machine__5507__auto____1 = (function (state_24962){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_24962);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24980){if((e24980 instanceof Object))
{var ex__5510__auto__ = e24980;var statearr_24981_24993 = state_24962;(statearr_24981_24993[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24962);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e24980;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__24994 = state_24962;
state_24962 = G__24994;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24962){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24982 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_24982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24982;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count(100,coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj24996 = {};return obj24996;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3394__auto__ = _;if(and__3394__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4027__auto__ = (((_ == null))?null:_);return (function (){var or__3406__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj24998 = {};return obj24998;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t25222 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25222 = (function (cs,ch,mult,meta25223){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25223 = meta25223;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25222.cljs$lang$type = true;
cljs.core.async.t25222.cljs$lang$ctorStr = "cljs.core.async/t25222";
cljs.core.async.t25222.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25222");
});})(cs))
;
cljs.core.async.t25222.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t25222.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t25222.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t25222.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t25222.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25222.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t25222.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25224){var self__ = this;
var _25224__$1 = this;return self__.meta25223;
});})(cs))
;
cljs.core.async.t25222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25224,meta25223__$1){var self__ = this;
var _25224__$1 = this;return (new cljs.core.async.t25222(self__.cs,self__.ch,self__.mult,meta25223__$1));
});})(cs))
;
cljs.core.async.__GT_t25222 = ((function (cs){
return (function __GT_t25222(cs__$1,ch__$1,mult__$1,meta25223){return (new cljs.core.async.t25222(cs__$1,ch__$1,mult__$1,meta25223));
});})(cs))
;
}
return (new cljs.core.async.t25222(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___25445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25359){var state_val_25360 = (state_25359[1]);if((state_val_25360 === 32))
{var inst_25227 = (state_25359[7]);var inst_25303 = (state_25359[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25359,31,Object,null,30);var inst_25310 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25303,inst_25227,done);var state_25359__$1 = state_25359;var statearr_25361_25446 = state_25359__$1;(statearr_25361_25446[2] = inst_25310);
cljs.core.async.impl.ioc_helpers.process_exception(state_25359__$1);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 1))
{var state_25359__$1 = state_25359;var statearr_25362_25447 = state_25359__$1;(statearr_25362_25447[2] = null);
(statearr_25362_25447[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 33))
{var inst_25316 = (state_25359[9]);var inst_25318 = cljs.core.chunked_seq_QMARK_(inst_25316);var state_25359__$1 = state_25359;if(inst_25318)
{var statearr_25363_25448 = state_25359__$1;(statearr_25363_25448[1] = 36);
} else
{var statearr_25364_25449 = state_25359__$1;(statearr_25364_25449[1] = 37);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 2))
{var state_25359__$1 = state_25359;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25359__$1,4,ch);
} else
{if((state_val_25360 === 34))
{var state_25359__$1 = state_25359;var statearr_25365_25450 = state_25359__$1;(statearr_25365_25450[2] = null);
(statearr_25365_25450[1] = 35);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 3))
{var inst_25357 = (state_25359[2]);var state_25359__$1 = state_25359;return cljs.core.async.impl.ioc_helpers.return_chan(state_25359__$1,inst_25357);
} else
{if((state_val_25360 === 35))
{var inst_25341 = (state_25359[2]);var state_25359__$1 = state_25359;var statearr_25366_25451 = state_25359__$1;(statearr_25366_25451[2] = inst_25341);
(statearr_25366_25451[1] = 29);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 4))
{var inst_25227 = (state_25359[7]);var inst_25227__$1 = (state_25359[2]);var inst_25228 = (inst_25227__$1 == null);var state_25359__$1 = (function (){var statearr_25367 = state_25359;(statearr_25367[7] = inst_25227__$1);
return statearr_25367;
})();if(cljs.core.truth_(inst_25228))
{var statearr_25368_25452 = state_25359__$1;(statearr_25368_25452[1] = 5);
} else
{var statearr_25369_25453 = state_25359__$1;(statearr_25369_25453[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 36))
{var inst_25316 = (state_25359[9]);var inst_25320 = cljs.core.chunk_first(inst_25316);var inst_25321 = cljs.core.chunk_rest(inst_25316);var inst_25322 = cljs.core.count(inst_25320);var inst_25295 = inst_25321;var inst_25296 = inst_25320;var inst_25297 = inst_25322;var inst_25298 = 0;var state_25359__$1 = (function (){var statearr_25370 = state_25359;(statearr_25370[10] = inst_25297);
(statearr_25370[11] = inst_25298);
(statearr_25370[12] = inst_25296);
(statearr_25370[13] = inst_25295);
return statearr_25370;
})();var statearr_25371_25454 = state_25359__$1;(statearr_25371_25454[2] = null);
(statearr_25371_25454[1] = 25);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 5))
{var inst_25234 = cljs.core.deref(cs);var inst_25235 = cljs.core.seq(inst_25234);var inst_25236 = inst_25235;var inst_25237 = null;var inst_25238 = 0;var inst_25239 = 0;var state_25359__$1 = (function (){var statearr_25372 = state_25359;(statearr_25372[14] = inst_25239);
(statearr_25372[15] = inst_25238);
(statearr_25372[16] = inst_25237);
(statearr_25372[17] = inst_25236);
return statearr_25372;
})();var statearr_25373_25455 = state_25359__$1;(statearr_25373_25455[2] = null);
(statearr_25373_25455[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 37))
{var inst_25316 = (state_25359[9]);var inst_25325 = cljs.core.first(inst_25316);var state_25359__$1 = (function (){var statearr_25374 = state_25359;(statearr_25374[18] = inst_25325);
return statearr_25374;
})();var statearr_25375_25456 = state_25359__$1;(statearr_25375_25456[2] = null);
(statearr_25375_25456[1] = 41);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 6))
{var inst_25287 = (state_25359[19]);var inst_25286 = cljs.core.deref(cs);var inst_25287__$1 = cljs.core.keys(inst_25286);var inst_25288 = cljs.core.count(inst_25287__$1);var inst_25289 = cljs.core.reset_BANG_(dctr,inst_25288);var inst_25294 = cljs.core.seq(inst_25287__$1);var inst_25295 = inst_25294;var inst_25296 = null;var inst_25297 = 0;var inst_25298 = 0;var state_25359__$1 = (function (){var statearr_25376 = state_25359;(statearr_25376[10] = inst_25297);
(statearr_25376[11] = inst_25298);
(statearr_25376[12] = inst_25296);
(statearr_25376[13] = inst_25295);
(statearr_25376[20] = inst_25289);
(statearr_25376[19] = inst_25287__$1);
return statearr_25376;
})();var statearr_25377_25457 = state_25359__$1;(statearr_25377_25457[2] = null);
(statearr_25377_25457[1] = 25);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 38))
{var inst_25338 = (state_25359[2]);var state_25359__$1 = state_25359;var statearr_25378_25458 = state_25359__$1;(statearr_25378_25458[2] = inst_25338);
(statearr_25378_25458[1] = 35);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 7))
{var inst_25355 = (state_25359[2]);var state_25359__$1 = state_25359;var statearr_25379_25459 = state_25359__$1;(statearr_25379_25459[2] = inst_25355);
(statearr_25379_25459[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 39))
{var inst_25316 = (state_25359[9]);var inst_25334 = (state_25359[2]);var inst_25335 = cljs.core.next(inst_25316);var inst_25295 = inst_25335;var inst_25296 = null;var inst_25297 = 0;var inst_25298 = 0;var state_25359__$1 = (function (){var statearr_25380 = state_25359;(statearr_25380[10] = inst_25297);
(statearr_25380[11] = inst_25298);
(statearr_25380[12] = inst_25296);
(statearr_25380[13] = inst_25295);
(statearr_25380[21] = inst_25334);
return statearr_25380;
})();var statearr_25381_25460 = state_25359__$1;(statearr_25381_25460[2] = null);
(statearr_25381_25460[1] = 25);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 8))
{var inst_25239 = (state_25359[14]);var inst_25238 = (state_25359[15]);var inst_25241 = (inst_25239 < inst_25238);var inst_25242 = inst_25241;var state_25359__$1 = state_25359;if(cljs.core.truth_(inst_25242))
{var statearr_25382_25461 = state_25359__$1;(statearr_25382_25461[1] = 10);
} else
{var statearr_25383_25462 = state_25359__$1;(statearr_25383_25462[1] = 11);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 40))
{var inst_25325 = (state_25359[18]);var inst_25326 = (state_25359[2]);var inst_25327 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25328 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25325);var state_25359__$1 = (function (){var statearr_25384 = state_25359;(statearr_25384[22] = inst_25327);
(statearr_25384[23] = inst_25326);
return statearr_25384;
})();var statearr_25385_25463 = state_25359__$1;(statearr_25385_25463[2] = inst_25328);
cljs.core.async.impl.ioc_helpers.process_exception(state_25359__$1);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 9))
{var inst_25284 = (state_25359[2]);var state_25359__$1 = state_25359;var statearr_25386_25464 = state_25359__$1;(statearr_25386_25464[2] = inst_25284);
(statearr_25386_25464[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 41))
{var inst_25227 = (state_25359[7]);var inst_25325 = (state_25359[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25359,40,Object,null,39);var inst_25332 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_25325,inst_25227,done);var state_25359__$1 = state_25359;var statearr_25387_25465 = state_25359__$1;(statearr_25387_25465[2] = inst_25332);
cljs.core.async.impl.ioc_helpers.process_exception(state_25359__$1);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 10))
{var inst_25239 = (state_25359[14]);var inst_25237 = (state_25359[16]);var inst_25245 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25237,inst_25239);var inst_25246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25245,0,null);var inst_25247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25245,1,null);var state_25359__$1 = (function (){var statearr_25388 = state_25359;(statearr_25388[24] = inst_25246);
return statearr_25388;
})();if(cljs.core.truth_(inst_25247))
{var statearr_25389_25466 = state_25359__$1;(statearr_25389_25466[1] = 13);
} else
{var statearr_25390_25467 = state_25359__$1;(statearr_25390_25467[1] = 14);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 42))
{var state_25359__$1 = state_25359;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25359__$1,45,dchan);
} else
{if((state_val_25360 === 11))
{var inst_25256 = (state_25359[25]);var inst_25236 = (state_25359[17]);var inst_25256__$1 = cljs.core.seq(inst_25236);var state_25359__$1 = (function (){var statearr_25391 = state_25359;(statearr_25391[25] = inst_25256__$1);
return statearr_25391;
})();if(inst_25256__$1)
{var statearr_25392_25468 = state_25359__$1;(statearr_25392_25468[1] = 16);
} else
{var statearr_25393_25469 = state_25359__$1;(statearr_25393_25469[1] = 17);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 43))
{var state_25359__$1 = state_25359;var statearr_25394_25470 = state_25359__$1;(statearr_25394_25470[2] = null);
(statearr_25394_25470[1] = 44);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 12))
{var inst_25282 = (state_25359[2]);var state_25359__$1 = state_25359;var statearr_25395_25471 = state_25359__$1;(statearr_25395_25471[2] = inst_25282);
(statearr_25395_25471[1] = 9);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 44))
{var inst_25352 = (state_25359[2]);var state_25359__$1 = (function (){var statearr_25396 = state_25359;(statearr_25396[26] = inst_25352);
return statearr_25396;
})();var statearr_25397_25472 = state_25359__$1;(statearr_25397_25472[2] = null);
(statearr_25397_25472[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 13))
{var inst_25246 = (state_25359[24]);var inst_25249 = cljs.core.async.close_BANG_(inst_25246);var state_25359__$1 = state_25359;var statearr_25398_25473 = state_25359__$1;(statearr_25398_25473[2] = inst_25249);
(statearr_25398_25473[1] = 15);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 45))
{var inst_25349 = (state_25359[2]);var state_25359__$1 = state_25359;var statearr_25402_25474 = state_25359__$1;(statearr_25402_25474[2] = inst_25349);
(statearr_25402_25474[1] = 44);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 14))
{var state_25359__$1 = state_25359;var statearr_25403_25475 = state_25359__$1;(statearr_25403_25475[2] = null);
(statearr_25403_25475[1] = 15);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 15))
{var inst_25239 = (state_25359[14]);var inst_25238 = (state_25359[15]);var inst_25237 = (state_25359[16]);var inst_25236 = (state_25359[17]);var inst_25252 = (state_25359[2]);var inst_25253 = (inst_25239 + 1);var tmp25399 = inst_25238;var tmp25400 = inst_25237;var tmp25401 = inst_25236;var inst_25236__$1 = tmp25401;var inst_25237__$1 = tmp25400;var inst_25238__$1 = tmp25399;var inst_25239__$1 = inst_25253;var state_25359__$1 = (function (){var statearr_25404 = state_25359;(statearr_25404[27] = inst_25252);
(statearr_25404[14] = inst_25239__$1);
(statearr_25404[15] = inst_25238__$1);
(statearr_25404[16] = inst_25237__$1);
(statearr_25404[17] = inst_25236__$1);
return statearr_25404;
})();var statearr_25405_25476 = state_25359__$1;(statearr_25405_25476[2] = null);
(statearr_25405_25476[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 16))
{var inst_25256 = (state_25359[25]);var inst_25258 = cljs.core.chunked_seq_QMARK_(inst_25256);var state_25359__$1 = state_25359;if(inst_25258)
{var statearr_25406_25477 = state_25359__$1;(statearr_25406_25477[1] = 19);
} else
{var statearr_25407_25478 = state_25359__$1;(statearr_25407_25478[1] = 20);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 17))
{var state_25359__$1 = state_25359;var statearr_25408_25479 = state_25359__$1;(statearr_25408_25479[2] = null);
(statearr_25408_25479[1] = 18);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 18))
{var inst_25280 = (state_25359[2]);var state_25359__$1 = state_25359;var statearr_25409_25480 = state_25359__$1;(statearr_25409_25480[2] = inst_25280);
(statearr_25409_25480[1] = 12);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 19))
{var inst_25256 = (state_25359[25]);var inst_25260 = cljs.core.chunk_first(inst_25256);var inst_25261 = cljs.core.chunk_rest(inst_25256);var inst_25262 = cljs.core.count(inst_25260);var inst_25236 = inst_25261;var inst_25237 = inst_25260;var inst_25238 = inst_25262;var inst_25239 = 0;var state_25359__$1 = (function (){var statearr_25410 = state_25359;(statearr_25410[14] = inst_25239);
(statearr_25410[15] = inst_25238);
(statearr_25410[16] = inst_25237);
(statearr_25410[17] = inst_25236);
return statearr_25410;
})();var statearr_25411_25481 = state_25359__$1;(statearr_25411_25481[2] = null);
(statearr_25411_25481[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 20))
{var inst_25256 = (state_25359[25]);var inst_25266 = cljs.core.first(inst_25256);var inst_25267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25266,0,null);var inst_25268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25266,1,null);var state_25359__$1 = (function (){var statearr_25412 = state_25359;(statearr_25412[28] = inst_25267);
return statearr_25412;
})();if(cljs.core.truth_(inst_25268))
{var statearr_25413_25482 = state_25359__$1;(statearr_25413_25482[1] = 22);
} else
{var statearr_25414_25483 = state_25359__$1;(statearr_25414_25483[1] = 23);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 21))
{var inst_25277 = (state_25359[2]);var state_25359__$1 = state_25359;var statearr_25415_25484 = state_25359__$1;(statearr_25415_25484[2] = inst_25277);
(statearr_25415_25484[1] = 18);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 22))
{var inst_25267 = (state_25359[28]);var inst_25270 = cljs.core.async.close_BANG_(inst_25267);var state_25359__$1 = state_25359;var statearr_25416_25485 = state_25359__$1;(statearr_25416_25485[2] = inst_25270);
(statearr_25416_25485[1] = 24);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 23))
{var state_25359__$1 = state_25359;var statearr_25417_25486 = state_25359__$1;(statearr_25417_25486[2] = null);
(statearr_25417_25486[1] = 24);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 24))
{var inst_25256 = (state_25359[25]);var inst_25273 = (state_25359[2]);var inst_25274 = cljs.core.next(inst_25256);var inst_25236 = inst_25274;var inst_25237 = null;var inst_25238 = 0;var inst_25239 = 0;var state_25359__$1 = (function (){var statearr_25418 = state_25359;(statearr_25418[14] = inst_25239);
(statearr_25418[29] = inst_25273);
(statearr_25418[15] = inst_25238);
(statearr_25418[16] = inst_25237);
(statearr_25418[17] = inst_25236);
return statearr_25418;
})();var statearr_25419_25487 = state_25359__$1;(statearr_25419_25487[2] = null);
(statearr_25419_25487[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 25))
{var inst_25297 = (state_25359[10]);var inst_25298 = (state_25359[11]);var inst_25300 = (inst_25298 < inst_25297);var inst_25301 = inst_25300;var state_25359__$1 = state_25359;if(cljs.core.truth_(inst_25301))
{var statearr_25420_25488 = state_25359__$1;(statearr_25420_25488[1] = 27);
} else
{var statearr_25421_25489 = state_25359__$1;(statearr_25421_25489[1] = 28);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 26))
{var inst_25287 = (state_25359[19]);var inst_25345 = (state_25359[2]);var inst_25346 = cljs.core.seq(inst_25287);var state_25359__$1 = (function (){var statearr_25422 = state_25359;(statearr_25422[30] = inst_25345);
return statearr_25422;
})();if(inst_25346)
{var statearr_25423_25490 = state_25359__$1;(statearr_25423_25490[1] = 42);
} else
{var statearr_25424_25491 = state_25359__$1;(statearr_25424_25491[1] = 43);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 27))
{var inst_25298 = (state_25359[11]);var inst_25296 = (state_25359[12]);var inst_25303 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25296,inst_25298);var state_25359__$1 = (function (){var statearr_25425 = state_25359;(statearr_25425[8] = inst_25303);
return statearr_25425;
})();var statearr_25426_25492 = state_25359__$1;(statearr_25426_25492[2] = null);
(statearr_25426_25492[1] = 32);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 28))
{var inst_25295 = (state_25359[13]);var inst_25316 = (state_25359[9]);var inst_25316__$1 = cljs.core.seq(inst_25295);var state_25359__$1 = (function (){var statearr_25430 = state_25359;(statearr_25430[9] = inst_25316__$1);
return statearr_25430;
})();if(inst_25316__$1)
{var statearr_25431_25493 = state_25359__$1;(statearr_25431_25493[1] = 33);
} else
{var statearr_25432_25494 = state_25359__$1;(statearr_25432_25494[1] = 34);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 29))
{var inst_25343 = (state_25359[2]);var state_25359__$1 = state_25359;var statearr_25433_25495 = state_25359__$1;(statearr_25433_25495[2] = inst_25343);
(statearr_25433_25495[1] = 26);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 30))
{var inst_25297 = (state_25359[10]);var inst_25298 = (state_25359[11]);var inst_25296 = (state_25359[12]);var inst_25295 = (state_25359[13]);var inst_25312 = (state_25359[2]);var inst_25313 = (inst_25298 + 1);var tmp25427 = inst_25297;var tmp25428 = inst_25296;var tmp25429 = inst_25295;var inst_25295__$1 = tmp25429;var inst_25296__$1 = tmp25428;var inst_25297__$1 = tmp25427;var inst_25298__$1 = inst_25313;var state_25359__$1 = (function (){var statearr_25434 = state_25359;(statearr_25434[10] = inst_25297__$1);
(statearr_25434[11] = inst_25298__$1);
(statearr_25434[12] = inst_25296__$1);
(statearr_25434[13] = inst_25295__$1);
(statearr_25434[31] = inst_25312);
return statearr_25434;
})();var statearr_25435_25496 = state_25359__$1;(statearr_25435_25496[2] = null);
(statearr_25435_25496[1] = 25);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25360 === 31))
{var inst_25303 = (state_25359[8]);var inst_25304 = (state_25359[2]);var inst_25305 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_25306 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_25303);var state_25359__$1 = (function (){var statearr_25436 = state_25359;(statearr_25436[32] = inst_25304);
(statearr_25436[33] = inst_25305);
return statearr_25436;
})();var statearr_25437_25497 = state_25359__$1;(statearr_25437_25497[2] = inst_25306);
cljs.core.async.impl.ioc_helpers.process_exception(state_25359__$1);
return cljs.core.constant$keyword$248;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_25441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25441[0] = state_machine__5507__auto__);
(statearr_25441[1] = 1);
return statearr_25441;
});
var state_machine__5507__auto____1 = (function (state_25359){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25359);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25442){if((e25442 instanceof Object))
{var ex__5510__auto__ = e25442;var statearr_25443_25498 = state_25359;(statearr_25443_25498[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25359);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e25442;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__25499 = state_25359;
state_25359 = G__25499;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25359){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25444 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25445);
return statearr_25444;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj25501 = {};return obj25501;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$255,null,cljs.core.constant$keyword$256,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$257);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$256);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v))))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$257,chs);var pauses = pick(cljs.core.constant$keyword$255,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$258,solos,cljs.core.constant$keyword$259,pick(cljs.core.constant$keyword$256,chs),cljs.core.constant$keyword$260,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$255)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t25611 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25611 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta25612){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta25612 = meta25612;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25611.cljs$lang$type = true;
cljs.core.async.t25611.cljs$lang$ctorStr = "cljs.core.async/t25611";
cljs.core.async.t25611.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25611");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25611.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25611.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25611.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25611.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25611.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25611.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25611.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25611.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25611.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25613){var self__ = this;
var _25613__$1 = this;return self__.meta25612;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25613,meta25612__$1){var self__ = this;
var _25613__$1 = this;return (new cljs.core.async.t25611(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta25612__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25611 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25611(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25612){return (new cljs.core.async.t25611(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25612));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25611(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___25720 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25678){var state_val_25679 = (state_25678[1]);if((state_val_25679 === 1))
{var inst_25617 = (state_25678[7]);var inst_25617__$1 = calc_state();var inst_25618 = cljs.core.seq_QMARK_(inst_25617__$1);var state_25678__$1 = (function (){var statearr_25680 = state_25678;(statearr_25680[7] = inst_25617__$1);
return statearr_25680;
})();if(inst_25618)
{var statearr_25681_25721 = state_25678__$1;(statearr_25681_25721[1] = 2);
} else
{var statearr_25682_25722 = state_25678__$1;(statearr_25682_25722[1] = 3);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25679 === 2))
{var inst_25617 = (state_25678[7]);var inst_25620 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25617);var state_25678__$1 = state_25678;var statearr_25683_25723 = state_25678__$1;(statearr_25683_25723[2] = inst_25620);
(statearr_25683_25723[1] = 4);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25679 === 3))
{var inst_25617 = (state_25678[7]);var state_25678__$1 = state_25678;var statearr_25684_25724 = state_25678__$1;(statearr_25684_25724[2] = inst_25617);
(statearr_25684_25724[1] = 4);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25679 === 4))
{var inst_25617 = (state_25678[7]);var inst_25623 = (state_25678[2]);var inst_25624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25623,cljs.core.constant$keyword$260);var inst_25625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25623,cljs.core.constant$keyword$259);var inst_25626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25623,cljs.core.constant$keyword$258);var inst_25627 = inst_25617;var state_25678__$1 = (function (){var statearr_25685 = state_25678;(statearr_25685[8] = inst_25624);
(statearr_25685[9] = inst_25625);
(statearr_25685[10] = inst_25626);
(statearr_25685[11] = inst_25627);
return statearr_25685;
})();var statearr_25686_25725 = state_25678__$1;(statearr_25686_25725[2] = null);
(statearr_25686_25725[1] = 5);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25679 === 5))
{var inst_25627 = (state_25678[11]);var inst_25630 = cljs.core.seq_QMARK_(inst_25627);var state_25678__$1 = state_25678;if(inst_25630)
{var statearr_25687_25726 = state_25678__$1;(statearr_25687_25726[1] = 7);
} else
{var statearr_25688_25727 = state_25678__$1;(statearr_25688_25727[1] = 8);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25679 === 6))
{var inst_25676 = (state_25678[2]);var state_25678__$1 = state_25678;return cljs.core.async.impl.ioc_helpers.return_chan(state_25678__$1,inst_25676);
} else
{if((state_val_25679 === 7))
{var inst_25627 = (state_25678[11]);var inst_25632 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_25627);var state_25678__$1 = state_25678;var statearr_25689_25728 = state_25678__$1;(statearr_25689_25728[2] = inst_25632);
(statearr_25689_25728[1] = 9);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25679 === 8))
{var inst_25627 = (state_25678[11]);var state_25678__$1 = state_25678;var statearr_25690_25729 = state_25678__$1;(statearr_25690_25729[2] = inst_25627);
(statearr_25690_25729[1] = 9);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25679 === 9))
{var inst_25635 = (state_25678[12]);var inst_25635__$1 = (state_25678[2]);var inst_25636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25635__$1,cljs.core.constant$keyword$260);var inst_25637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25635__$1,cljs.core.constant$keyword$259);var inst_25638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25635__$1,cljs.core.constant$keyword$258);var state_25678__$1 = (function (){var statearr_25691 = state_25678;(statearr_25691[12] = inst_25635__$1);
(statearr_25691[13] = inst_25637);
(statearr_25691[14] = inst_25638);
return statearr_25691;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25678__$1,10,inst_25636);
} else
{if((state_val_25679 === 10))
{var inst_25643 = (state_25678[15]);var inst_25642 = (state_25678[16]);var inst_25641 = (state_25678[2]);var inst_25642__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25641,0,null);var inst_25643__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25641,1,null);var inst_25644 = (inst_25642__$1 == null);var inst_25645 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25643__$1,change);var inst_25646 = (inst_25644) || (inst_25645);var state_25678__$1 = (function (){var statearr_25692 = state_25678;(statearr_25692[15] = inst_25643__$1);
(statearr_25692[16] = inst_25642__$1);
return statearr_25692;
})();if(cljs.core.truth_(inst_25646))
{var statearr_25693_25730 = state_25678__$1;(statearr_25693_25730[1] = 11);
} else
{var statearr_25694_25731 = state_25678__$1;(statearr_25694_25731[1] = 12);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25679 === 11))
{var inst_25642 = (state_25678[16]);var inst_25648 = (inst_25642 == null);var state_25678__$1 = state_25678;if(cljs.core.truth_(inst_25648))
{var statearr_25695_25732 = state_25678__$1;(statearr_25695_25732[1] = 14);
} else
{var statearr_25696_25733 = state_25678__$1;(statearr_25696_25733[1] = 15);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25679 === 12))
{var inst_25657 = (state_25678[17]);var inst_25643 = (state_25678[15]);var inst_25638 = (state_25678[14]);var inst_25657__$1 = (inst_25638.cljs$core$IFn$_invoke$arity$1 ? inst_25638.cljs$core$IFn$_invoke$arity$1(inst_25643) : inst_25638.call(null,inst_25643));var state_25678__$1 = (function (){var statearr_25697 = state_25678;(statearr_25697[17] = inst_25657__$1);
return statearr_25697;
})();if(cljs.core.truth_(inst_25657__$1))
{var statearr_25698_25734 = state_25678__$1;(statearr_25698_25734[1] = 17);
} else
{var statearr_25699_25735 = state_25678__$1;(statearr_25699_25735[1] = 18);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25679 === 13))
{var inst_25674 = (state_25678[2]);var state_25678__$1 = state_25678;var statearr_25700_25736 = state_25678__$1;(statearr_25700_25736[2] = inst_25674);
(statearr_25700_25736[1] = 6);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25679 === 14))
{var inst_25643 = (state_25678[15]);var inst_25650 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_25643);var state_25678__$1 = state_25678;var statearr_25701_25737 = state_25678__$1;(statearr_25701_25737[2] = inst_25650);
(statearr_25701_25737[1] = 16);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25679 === 15))
{var state_25678__$1 = state_25678;var statearr_25702_25738 = state_25678__$1;(statearr_25702_25738[2] = null);
(statearr_25702_25738[1] = 16);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25679 === 16))
{var inst_25653 = (state_25678[2]);var inst_25654 = calc_state();var inst_25627 = inst_25654;var state_25678__$1 = (function (){var statearr_25703 = state_25678;(statearr_25703[18] = inst_25653);
(statearr_25703[11] = inst_25627);
return statearr_25703;
})();var statearr_25704_25739 = state_25678__$1;(statearr_25704_25739[2] = null);
(statearr_25704_25739[1] = 5);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25679 === 17))
{var inst_25657 = (state_25678[17]);var state_25678__$1 = state_25678;var statearr_25705_25740 = state_25678__$1;(statearr_25705_25740[2] = inst_25657);
(statearr_25705_25740[1] = 19);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25679 === 18))
{var inst_25637 = (state_25678[13]);var inst_25643 = (state_25678[15]);var inst_25638 = (state_25678[14]);var inst_25660 = cljs.core.empty_QMARK_(inst_25638);var inst_25661 = (inst_25637.cljs$core$IFn$_invoke$arity$1 ? inst_25637.cljs$core$IFn$_invoke$arity$1(inst_25643) : inst_25637.call(null,inst_25643));var inst_25662 = cljs.core.not(inst_25661);var inst_25663 = (inst_25660) && (inst_25662);var state_25678__$1 = state_25678;var statearr_25706_25741 = state_25678__$1;(statearr_25706_25741[2] = inst_25663);
(statearr_25706_25741[1] = 19);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25679 === 19))
{var inst_25665 = (state_25678[2]);var state_25678__$1 = state_25678;if(cljs.core.truth_(inst_25665))
{var statearr_25707_25742 = state_25678__$1;(statearr_25707_25742[1] = 20);
} else
{var statearr_25708_25743 = state_25678__$1;(statearr_25708_25743[1] = 21);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25679 === 20))
{var inst_25642 = (state_25678[16]);var state_25678__$1 = state_25678;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25678__$1,23,out,inst_25642);
} else
{if((state_val_25679 === 21))
{var state_25678__$1 = state_25678;var statearr_25709_25744 = state_25678__$1;(statearr_25709_25744[2] = null);
(statearr_25709_25744[1] = 22);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25679 === 22))
{var inst_25635 = (state_25678[12]);var inst_25671 = (state_25678[2]);var inst_25627 = inst_25635;var state_25678__$1 = (function (){var statearr_25710 = state_25678;(statearr_25710[19] = inst_25671);
(statearr_25710[11] = inst_25627);
return statearr_25710;
})();var statearr_25711_25745 = state_25678__$1;(statearr_25711_25745[2] = null);
(statearr_25711_25745[1] = 5);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25679 === 23))
{var inst_25668 = (state_25678[2]);var state_25678__$1 = state_25678;var statearr_25712_25746 = state_25678__$1;(statearr_25712_25746[2] = inst_25668);
(statearr_25712_25746[1] = 22);
return cljs.core.constant$keyword$248;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_25716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25716[0] = state_machine__5507__auto__);
(statearr_25716[1] = 1);
return statearr_25716;
});
var state_machine__5507__auto____1 = (function (state_25678){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25678);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25717){if((e25717 instanceof Object))
{var ex__5510__auto__ = e25717;var statearr_25718_25747 = state_25678;(statearr_25718_25747[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25678);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e25717;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__25748 = state_25678;
state_25678 = G__25748;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25678){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25719 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25720);
return statearr_25719;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj25750 = {};return obj25750;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3406__auto__,mults){
return (function (p1__25751_SHARP_){if(cljs.core.truth_((p1__25751_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__25751_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__25751_SHARP_.call(null,topic))))
{return p1__25751_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__25751_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25876 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25876 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25877){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25877 = meta25877;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25876.cljs$lang$type = true;
cljs.core.async.t25876.cljs$lang$ctorStr = "cljs.core.async/t25876";
cljs.core.async.t25876.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async/t25876");
});})(mults,ensure_mult))
;
cljs.core.async.t25876.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25876.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25876.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25876.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25876.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25876.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25876.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25876.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25878){var self__ = this;
var _25878__$1 = this;return self__.meta25877;
});})(mults,ensure_mult))
;
cljs.core.async.t25876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25878,meta25877__$1){var self__ = this;
var _25878__$1 = this;return (new cljs.core.async.t25876(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25877__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25876 = ((function (mults,ensure_mult){
return (function __GT_t25876(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25877){return (new cljs.core.async.t25876(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25877));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25876(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___26000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25952){var state_val_25953 = (state_25952[1]);if((state_val_25953 === 1))
{var state_25952__$1 = state_25952;var statearr_25954_26001 = state_25952__$1;(statearr_25954_26001[2] = null);
(statearr_25954_26001[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25953 === 2))
{var state_25952__$1 = state_25952;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25952__$1,4,ch);
} else
{if((state_val_25953 === 3))
{var inst_25950 = (state_25952[2]);var state_25952__$1 = state_25952;return cljs.core.async.impl.ioc_helpers.return_chan(state_25952__$1,inst_25950);
} else
{if((state_val_25953 === 4))
{var inst_25881 = (state_25952[7]);var inst_25881__$1 = (state_25952[2]);var inst_25882 = (inst_25881__$1 == null);var state_25952__$1 = (function (){var statearr_25955 = state_25952;(statearr_25955[7] = inst_25881__$1);
return statearr_25955;
})();if(cljs.core.truth_(inst_25882))
{var statearr_25956_26002 = state_25952__$1;(statearr_25956_26002[1] = 5);
} else
{var statearr_25957_26003 = state_25952__$1;(statearr_25957_26003[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25953 === 5))
{var inst_25888 = cljs.core.deref(mults);var inst_25889 = cljs.core.vals(inst_25888);var inst_25890 = cljs.core.seq(inst_25889);var inst_25891 = inst_25890;var inst_25892 = null;var inst_25893 = 0;var inst_25894 = 0;var state_25952__$1 = (function (){var statearr_25958 = state_25952;(statearr_25958[8] = inst_25893);
(statearr_25958[9] = inst_25894);
(statearr_25958[10] = inst_25891);
(statearr_25958[11] = inst_25892);
return statearr_25958;
})();var statearr_25959_26004 = state_25952__$1;(statearr_25959_26004[2] = null);
(statearr_25959_26004[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25953 === 6))
{var inst_25931 = (state_25952[12]);var inst_25929 = (state_25952[13]);var inst_25881 = (state_25952[7]);var inst_25929__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25881) : topic_fn.call(null,inst_25881));var inst_25930 = cljs.core.deref(mults);var inst_25931__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25930,inst_25929__$1);var state_25952__$1 = (function (){var statearr_25960 = state_25952;(statearr_25960[12] = inst_25931__$1);
(statearr_25960[13] = inst_25929__$1);
return statearr_25960;
})();if(cljs.core.truth_(inst_25931__$1))
{var statearr_25961_26005 = state_25952__$1;(statearr_25961_26005[1] = 19);
} else
{var statearr_25962_26006 = state_25952__$1;(statearr_25962_26006[1] = 20);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25953 === 7))
{var inst_25948 = (state_25952[2]);var state_25952__$1 = state_25952;var statearr_25963_26007 = state_25952__$1;(statearr_25963_26007[2] = inst_25948);
(statearr_25963_26007[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25953 === 8))
{var inst_25893 = (state_25952[8]);var inst_25894 = (state_25952[9]);var inst_25896 = (inst_25894 < inst_25893);var inst_25897 = inst_25896;var state_25952__$1 = state_25952;if(cljs.core.truth_(inst_25897))
{var statearr_25967_26008 = state_25952__$1;(statearr_25967_26008[1] = 10);
} else
{var statearr_25968_26009 = state_25952__$1;(statearr_25968_26009[1] = 11);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25953 === 9))
{var inst_25927 = (state_25952[2]);var state_25952__$1 = state_25952;var statearr_25969_26010 = state_25952__$1;(statearr_25969_26010[2] = inst_25927);
(statearr_25969_26010[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25953 === 10))
{var inst_25893 = (state_25952[8]);var inst_25894 = (state_25952[9]);var inst_25891 = (state_25952[10]);var inst_25892 = (state_25952[11]);var inst_25899 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25892,inst_25894);var inst_25900 = cljs.core.async.muxch_STAR_(inst_25899);var inst_25901 = cljs.core.async.close_BANG_(inst_25900);var inst_25902 = (inst_25894 + 1);var tmp25964 = inst_25893;var tmp25965 = inst_25891;var tmp25966 = inst_25892;var inst_25891__$1 = tmp25965;var inst_25892__$1 = tmp25966;var inst_25893__$1 = tmp25964;var inst_25894__$1 = inst_25902;var state_25952__$1 = (function (){var statearr_25970 = state_25952;(statearr_25970[8] = inst_25893__$1);
(statearr_25970[9] = inst_25894__$1);
(statearr_25970[10] = inst_25891__$1);
(statearr_25970[11] = inst_25892__$1);
(statearr_25970[14] = inst_25901);
return statearr_25970;
})();var statearr_25971_26011 = state_25952__$1;(statearr_25971_26011[2] = null);
(statearr_25971_26011[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25953 === 11))
{var inst_25891 = (state_25952[10]);var inst_25905 = (state_25952[15]);var inst_25905__$1 = cljs.core.seq(inst_25891);var state_25952__$1 = (function (){var statearr_25972 = state_25952;(statearr_25972[15] = inst_25905__$1);
return statearr_25972;
})();if(inst_25905__$1)
{var statearr_25973_26012 = state_25952__$1;(statearr_25973_26012[1] = 13);
} else
{var statearr_25974_26013 = state_25952__$1;(statearr_25974_26013[1] = 14);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25953 === 12))
{var inst_25925 = (state_25952[2]);var state_25952__$1 = state_25952;var statearr_25975_26014 = state_25952__$1;(statearr_25975_26014[2] = inst_25925);
(statearr_25975_26014[1] = 9);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25953 === 13))
{var inst_25905 = (state_25952[15]);var inst_25907 = cljs.core.chunked_seq_QMARK_(inst_25905);var state_25952__$1 = state_25952;if(inst_25907)
{var statearr_25976_26015 = state_25952__$1;(statearr_25976_26015[1] = 16);
} else
{var statearr_25977_26016 = state_25952__$1;(statearr_25977_26016[1] = 17);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_25953 === 14))
{var state_25952__$1 = state_25952;var statearr_25978_26017 = state_25952__$1;(statearr_25978_26017[2] = null);
(statearr_25978_26017[1] = 15);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25953 === 15))
{var inst_25923 = (state_25952[2]);var state_25952__$1 = state_25952;var statearr_25979_26018 = state_25952__$1;(statearr_25979_26018[2] = inst_25923);
(statearr_25979_26018[1] = 12);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25953 === 16))
{var inst_25905 = (state_25952[15]);var inst_25909 = cljs.core.chunk_first(inst_25905);var inst_25910 = cljs.core.chunk_rest(inst_25905);var inst_25911 = cljs.core.count(inst_25909);var inst_25891 = inst_25910;var inst_25892 = inst_25909;var inst_25893 = inst_25911;var inst_25894 = 0;var state_25952__$1 = (function (){var statearr_25980 = state_25952;(statearr_25980[8] = inst_25893);
(statearr_25980[9] = inst_25894);
(statearr_25980[10] = inst_25891);
(statearr_25980[11] = inst_25892);
return statearr_25980;
})();var statearr_25981_26019 = state_25952__$1;(statearr_25981_26019[2] = null);
(statearr_25981_26019[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25953 === 17))
{var inst_25905 = (state_25952[15]);var inst_25914 = cljs.core.first(inst_25905);var inst_25915 = cljs.core.async.muxch_STAR_(inst_25914);var inst_25916 = cljs.core.async.close_BANG_(inst_25915);var inst_25917 = cljs.core.next(inst_25905);var inst_25891 = inst_25917;var inst_25892 = null;var inst_25893 = 0;var inst_25894 = 0;var state_25952__$1 = (function (){var statearr_25982 = state_25952;(statearr_25982[8] = inst_25893);
(statearr_25982[9] = inst_25894);
(statearr_25982[10] = inst_25891);
(statearr_25982[11] = inst_25892);
(statearr_25982[16] = inst_25916);
return statearr_25982;
})();var statearr_25983_26020 = state_25952__$1;(statearr_25983_26020[2] = null);
(statearr_25983_26020[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25953 === 18))
{var inst_25920 = (state_25952[2]);var state_25952__$1 = state_25952;var statearr_25984_26021 = state_25952__$1;(statearr_25984_26021[2] = inst_25920);
(statearr_25984_26021[1] = 15);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25953 === 19))
{var state_25952__$1 = state_25952;var statearr_25985_26022 = state_25952__$1;(statearr_25985_26022[2] = null);
(statearr_25985_26022[1] = 24);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25953 === 20))
{var state_25952__$1 = state_25952;var statearr_25986_26023 = state_25952__$1;(statearr_25986_26023[2] = null);
(statearr_25986_26023[1] = 21);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25953 === 21))
{var inst_25945 = (state_25952[2]);var state_25952__$1 = (function (){var statearr_25987 = state_25952;(statearr_25987[17] = inst_25945);
return statearr_25987;
})();var statearr_25988_26024 = state_25952__$1;(statearr_25988_26024[2] = null);
(statearr_25988_26024[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25953 === 22))
{var inst_25942 = (state_25952[2]);var state_25952__$1 = state_25952;var statearr_25989_26025 = state_25952__$1;(statearr_25989_26025[2] = inst_25942);
(statearr_25989_26025[1] = 21);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25953 === 23))
{var inst_25929 = (state_25952[13]);var inst_25933 = (state_25952[2]);var inst_25934 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25929);var state_25952__$1 = (function (){var statearr_25990 = state_25952;(statearr_25990[18] = inst_25933);
return statearr_25990;
})();var statearr_25991_26026 = state_25952__$1;(statearr_25991_26026[2] = inst_25934);
cljs.core.async.impl.ioc_helpers.process_exception(state_25952__$1);
return cljs.core.constant$keyword$248;
} else
{if((state_val_25953 === 24))
{var inst_25931 = (state_25952[12]);var inst_25881 = (state_25952[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25952,23,Object,null,22);var inst_25938 = cljs.core.async.muxch_STAR_(inst_25931);var state_25952__$1 = state_25952;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25952__$1,25,inst_25938,inst_25881);
} else
{if((state_val_25953 === 25))
{var inst_25940 = (state_25952[2]);var state_25952__$1 = state_25952;var statearr_25992_26027 = state_25952__$1;(statearr_25992_26027[2] = inst_25940);
cljs.core.async.impl.ioc_helpers.process_exception(state_25952__$1);
return cljs.core.constant$keyword$248;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_25996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25996[0] = state_machine__5507__auto__);
(statearr_25996[1] = 1);
return statearr_25996;
});
var state_machine__5507__auto____1 = (function (state_25952){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_25952);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25997){if((e25997 instanceof Object))
{var ex__5510__auto__ = e25997;var statearr_25998_26028 = state_25952;(statearr_25998_26028[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25952);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e25997;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__26029 = state_25952;
state_25952 = G__26029;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25952){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25999 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_25999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26000);
return statearr_25999;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5521__auto___26166 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26136){var state_val_26137 = (state_26136[1]);if((state_val_26137 === 1))
{var state_26136__$1 = state_26136;var statearr_26138_26167 = state_26136__$1;(statearr_26138_26167[2] = null);
(statearr_26138_26167[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26137 === 2))
{var inst_26099 = cljs.core.reset_BANG_(dctr,cnt);var inst_26100 = 0;var state_26136__$1 = (function (){var statearr_26139 = state_26136;(statearr_26139[7] = inst_26100);
(statearr_26139[8] = inst_26099);
return statearr_26139;
})();var statearr_26140_26168 = state_26136__$1;(statearr_26140_26168[2] = null);
(statearr_26140_26168[1] = 4);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26137 === 3))
{var inst_26134 = (state_26136[2]);var state_26136__$1 = state_26136;return cljs.core.async.impl.ioc_helpers.return_chan(state_26136__$1,inst_26134);
} else
{if((state_val_26137 === 4))
{var inst_26100 = (state_26136[7]);var inst_26102 = (inst_26100 < cnt);var state_26136__$1 = state_26136;if(cljs.core.truth_(inst_26102))
{var statearr_26141_26169 = state_26136__$1;(statearr_26141_26169[1] = 6);
} else
{var statearr_26142_26170 = state_26136__$1;(statearr_26142_26170[1] = 7);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26137 === 5))
{var inst_26120 = (state_26136[2]);var state_26136__$1 = (function (){var statearr_26143 = state_26136;(statearr_26143[9] = inst_26120);
return statearr_26143;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26136__$1,12,dchan);
} else
{if((state_val_26137 === 6))
{var state_26136__$1 = state_26136;var statearr_26144_26171 = state_26136__$1;(statearr_26144_26171[2] = null);
(statearr_26144_26171[1] = 11);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26137 === 7))
{var state_26136__$1 = state_26136;var statearr_26145_26172 = state_26136__$1;(statearr_26145_26172[2] = null);
(statearr_26145_26172[1] = 8);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26137 === 8))
{var inst_26118 = (state_26136[2]);var state_26136__$1 = state_26136;var statearr_26146_26173 = state_26136__$1;(statearr_26146_26173[2] = inst_26118);
(statearr_26146_26173[1] = 5);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26137 === 9))
{var inst_26100 = (state_26136[7]);var inst_26113 = (state_26136[2]);var inst_26114 = (inst_26100 + 1);var inst_26100__$1 = inst_26114;var state_26136__$1 = (function (){var statearr_26147 = state_26136;(statearr_26147[7] = inst_26100__$1);
(statearr_26147[10] = inst_26113);
return statearr_26147;
})();var statearr_26148_26174 = state_26136__$1;(statearr_26148_26174[2] = null);
(statearr_26148_26174[1] = 4);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26137 === 10))
{var inst_26104 = (state_26136[2]);var inst_26105 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_26136__$1 = (function (){var statearr_26149 = state_26136;(statearr_26149[11] = inst_26104);
return statearr_26149;
})();var statearr_26150_26175 = state_26136__$1;(statearr_26150_26175[2] = inst_26105);
cljs.core.async.impl.ioc_helpers.process_exception(state_26136__$1);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26137 === 11))
{var inst_26100 = (state_26136[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_26136,10,Object,null,9);var inst_26109 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_26100) : chs__$1.call(null,inst_26100));var inst_26110 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_26100) : done.call(null,inst_26100));var inst_26111 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26109,inst_26110);var state_26136__$1 = state_26136;var statearr_26151_26176 = state_26136__$1;(statearr_26151_26176[2] = inst_26111);
cljs.core.async.impl.ioc_helpers.process_exception(state_26136__$1);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26137 === 12))
{var inst_26122 = (state_26136[12]);var inst_26122__$1 = (state_26136[2]);var inst_26123 = cljs.core.some(cljs.core.nil_QMARK_,inst_26122__$1);var state_26136__$1 = (function (){var statearr_26152 = state_26136;(statearr_26152[12] = inst_26122__$1);
return statearr_26152;
})();if(cljs.core.truth_(inst_26123))
{var statearr_26153_26177 = state_26136__$1;(statearr_26153_26177[1] = 13);
} else
{var statearr_26154_26178 = state_26136__$1;(statearr_26154_26178[1] = 14);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26137 === 13))
{var inst_26125 = cljs.core.async.close_BANG_(out);var state_26136__$1 = state_26136;var statearr_26155_26179 = state_26136__$1;(statearr_26155_26179[2] = inst_26125);
(statearr_26155_26179[1] = 15);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26137 === 14))
{var inst_26122 = (state_26136[12]);var inst_26127 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26122);var state_26136__$1 = state_26136;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26136__$1,16,out,inst_26127);
} else
{if((state_val_26137 === 15))
{var inst_26132 = (state_26136[2]);var state_26136__$1 = state_26136;var statearr_26156_26180 = state_26136__$1;(statearr_26156_26180[2] = inst_26132);
(statearr_26156_26180[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26137 === 16))
{var inst_26129 = (state_26136[2]);var state_26136__$1 = (function (){var statearr_26157 = state_26136;(statearr_26157[13] = inst_26129);
return statearr_26157;
})();var statearr_26158_26181 = state_26136__$1;(statearr_26158_26181[2] = null);
(statearr_26158_26181[1] = 2);
return cljs.core.constant$keyword$248;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_26162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26162[0] = state_machine__5507__auto__);
(statearr_26162[1] = 1);
return statearr_26162;
});
var state_machine__5507__auto____1 = (function (state_26136){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26136);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26163){if((e26163 instanceof Object))
{var ex__5510__auto__ = e26163;var statearr_26164_26182 = state_26136;(statearr_26164_26182[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26136);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e26163;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__26183 = state_26136;
state_26136 = G__26183;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26136){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26165 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26166);
return statearr_26165;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26267){var state_val_26268 = (state_26267[1]);if((state_val_26268 === 1))
{var inst_26238 = cljs.core.vec(chs);var inst_26239 = inst_26238;var state_26267__$1 = (function (){var statearr_26269 = state_26267;(statearr_26269[7] = inst_26239);
return statearr_26269;
})();var statearr_26270_26292 = state_26267__$1;(statearr_26270_26292[2] = null);
(statearr_26270_26292[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26268 === 2))
{var inst_26239 = (state_26267[7]);var inst_26241 = cljs.core.count(inst_26239);var inst_26242 = (inst_26241 > 0);var state_26267__$1 = state_26267;if(cljs.core.truth_(inst_26242))
{var statearr_26271_26293 = state_26267__$1;(statearr_26271_26293[1] = 4);
} else
{var statearr_26272_26294 = state_26267__$1;(statearr_26272_26294[1] = 5);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26268 === 3))
{var inst_26265 = (state_26267[2]);var state_26267__$1 = state_26267;return cljs.core.async.impl.ioc_helpers.return_chan(state_26267__$1,inst_26265);
} else
{if((state_val_26268 === 4))
{var inst_26239 = (state_26267[7]);var state_26267__$1 = state_26267;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_26267__$1,7,inst_26239);
} else
{if((state_val_26268 === 5))
{var inst_26261 = cljs.core.async.close_BANG_(out);var state_26267__$1 = state_26267;var statearr_26273_26295 = state_26267__$1;(statearr_26273_26295[2] = inst_26261);
(statearr_26273_26295[1] = 6);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26268 === 6))
{var inst_26263 = (state_26267[2]);var state_26267__$1 = state_26267;var statearr_26274_26296 = state_26267__$1;(statearr_26274_26296[2] = inst_26263);
(statearr_26274_26296[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26268 === 7))
{var inst_26246 = (state_26267[8]);var inst_26247 = (state_26267[9]);var inst_26246__$1 = (state_26267[2]);var inst_26247__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26246__$1,0,null);var inst_26248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26246__$1,1,null);var inst_26249 = (inst_26247__$1 == null);var state_26267__$1 = (function (){var statearr_26275 = state_26267;(statearr_26275[8] = inst_26246__$1);
(statearr_26275[10] = inst_26248);
(statearr_26275[9] = inst_26247__$1);
return statearr_26275;
})();if(cljs.core.truth_(inst_26249))
{var statearr_26276_26297 = state_26267__$1;(statearr_26276_26297[1] = 8);
} else
{var statearr_26277_26298 = state_26267__$1;(statearr_26277_26298[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26268 === 8))
{var inst_26239 = (state_26267[7]);var inst_26246 = (state_26267[8]);var inst_26248 = (state_26267[10]);var inst_26247 = (state_26267[9]);var inst_26251 = (function (){var c = inst_26248;var v = inst_26247;var vec__26244 = inst_26246;var cs = inst_26239;return ((function (c,v,vec__26244,cs,inst_26239,inst_26246,inst_26248,inst_26247,state_val_26268){
return (function (p1__26184_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__26184_SHARP_);
});
;})(c,v,vec__26244,cs,inst_26239,inst_26246,inst_26248,inst_26247,state_val_26268))
})();var inst_26252 = cljs.core.filterv(inst_26251,inst_26239);var inst_26239__$1 = inst_26252;var state_26267__$1 = (function (){var statearr_26278 = state_26267;(statearr_26278[7] = inst_26239__$1);
return statearr_26278;
})();var statearr_26279_26299 = state_26267__$1;(statearr_26279_26299[2] = null);
(statearr_26279_26299[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26268 === 9))
{var inst_26247 = (state_26267[9]);var state_26267__$1 = state_26267;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26267__$1,11,out,inst_26247);
} else
{if((state_val_26268 === 10))
{var inst_26259 = (state_26267[2]);var state_26267__$1 = state_26267;var statearr_26281_26300 = state_26267__$1;(statearr_26281_26300[2] = inst_26259);
(statearr_26281_26300[1] = 6);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26268 === 11))
{var inst_26239 = (state_26267[7]);var inst_26256 = (state_26267[2]);var tmp26280 = inst_26239;var inst_26239__$1 = tmp26280;var state_26267__$1 = (function (){var statearr_26282 = state_26267;(statearr_26282[7] = inst_26239__$1);
(statearr_26282[11] = inst_26256);
return statearr_26282;
})();var statearr_26283_26301 = state_26267__$1;(statearr_26283_26301[2] = null);
(statearr_26283_26301[1] = 2);
return cljs.core.constant$keyword$248;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_26287 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26287[0] = state_machine__5507__auto__);
(statearr_26287[1] = 1);
return statearr_26287;
});
var state_machine__5507__auto____1 = (function (state_26267){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26267);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26288){if((e26288 instanceof Object))
{var ex__5510__auto__ = e26288;var statearr_26289_26302 = state_26267;(statearr_26289_26302[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26267);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e26288;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__26303 = state_26267;
state_26267 = G__26303;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26267){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26290 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26291);
return statearr_26290;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26373){var state_val_26374 = (state_26373[1]);if((state_val_26374 === 1))
{var inst_26350 = 0;var state_26373__$1 = (function (){var statearr_26375 = state_26373;(statearr_26375[7] = inst_26350);
return statearr_26375;
})();var statearr_26376_26397 = state_26373__$1;(statearr_26376_26397[2] = null);
(statearr_26376_26397[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26374 === 2))
{var inst_26350 = (state_26373[7]);var inst_26352 = (inst_26350 < n);var state_26373__$1 = state_26373;if(cljs.core.truth_(inst_26352))
{var statearr_26377_26398 = state_26373__$1;(statearr_26377_26398[1] = 4);
} else
{var statearr_26378_26399 = state_26373__$1;(statearr_26378_26399[1] = 5);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26374 === 3))
{var inst_26370 = (state_26373[2]);var inst_26371 = cljs.core.async.close_BANG_(out);var state_26373__$1 = (function (){var statearr_26379 = state_26373;(statearr_26379[8] = inst_26370);
return statearr_26379;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26373__$1,inst_26371);
} else
{if((state_val_26374 === 4))
{var state_26373__$1 = state_26373;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26373__$1,7,ch);
} else
{if((state_val_26374 === 5))
{var state_26373__$1 = state_26373;var statearr_26380_26400 = state_26373__$1;(statearr_26380_26400[2] = null);
(statearr_26380_26400[1] = 6);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26374 === 6))
{var inst_26368 = (state_26373[2]);var state_26373__$1 = state_26373;var statearr_26381_26401 = state_26373__$1;(statearr_26381_26401[2] = inst_26368);
(statearr_26381_26401[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26374 === 7))
{var inst_26355 = (state_26373[9]);var inst_26355__$1 = (state_26373[2]);var inst_26356 = (inst_26355__$1 == null);var inst_26357 = cljs.core.not(inst_26356);var state_26373__$1 = (function (){var statearr_26382 = state_26373;(statearr_26382[9] = inst_26355__$1);
return statearr_26382;
})();if(inst_26357)
{var statearr_26383_26402 = state_26373__$1;(statearr_26383_26402[1] = 8);
} else
{var statearr_26384_26403 = state_26373__$1;(statearr_26384_26403[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26374 === 8))
{var inst_26355 = (state_26373[9]);var state_26373__$1 = state_26373;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26373__$1,11,out,inst_26355);
} else
{if((state_val_26374 === 9))
{var state_26373__$1 = state_26373;var statearr_26385_26404 = state_26373__$1;(statearr_26385_26404[2] = null);
(statearr_26385_26404[1] = 10);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26374 === 10))
{var inst_26365 = (state_26373[2]);var state_26373__$1 = state_26373;var statearr_26386_26405 = state_26373__$1;(statearr_26386_26405[2] = inst_26365);
(statearr_26386_26405[1] = 6);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26374 === 11))
{var inst_26350 = (state_26373[7]);var inst_26360 = (state_26373[2]);var inst_26361 = (inst_26350 + 1);var inst_26350__$1 = inst_26361;var state_26373__$1 = (function (){var statearr_26387 = state_26373;(statearr_26387[7] = inst_26350__$1);
(statearr_26387[10] = inst_26360);
return statearr_26387;
})();var statearr_26388_26406 = state_26373__$1;(statearr_26388_26406[2] = null);
(statearr_26388_26406[1] = 2);
return cljs.core.constant$keyword$248;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_26392 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26392[0] = state_machine__5507__auto__);
(statearr_26392[1] = 1);
return statearr_26392;
});
var state_machine__5507__auto____1 = (function (state_26373){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26373);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26393){if((e26393 instanceof Object))
{var ex__5510__auto__ = e26393;var statearr_26394_26407 = state_26373;(statearr_26394_26407[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26373);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e26393;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__26408 = state_26373;
state_26373 = G__26408;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26373){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26395 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26396);
return statearr_26395;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26505 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26480){var state_val_26481 = (state_26480[1]);if((state_val_26481 === 1))
{var inst_26457 = null;var state_26480__$1 = (function (){var statearr_26482 = state_26480;(statearr_26482[7] = inst_26457);
return statearr_26482;
})();var statearr_26483_26506 = state_26480__$1;(statearr_26483_26506[2] = null);
(statearr_26483_26506[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26481 === 2))
{var state_26480__$1 = state_26480;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26480__$1,4,ch);
} else
{if((state_val_26481 === 3))
{var inst_26477 = (state_26480[2]);var inst_26478 = cljs.core.async.close_BANG_(out);var state_26480__$1 = (function (){var statearr_26484 = state_26480;(statearr_26484[8] = inst_26477);
return statearr_26484;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_26480__$1,inst_26478);
} else
{if((state_val_26481 === 4))
{var inst_26460 = (state_26480[9]);var inst_26460__$1 = (state_26480[2]);var inst_26461 = (inst_26460__$1 == null);var inst_26462 = cljs.core.not(inst_26461);var state_26480__$1 = (function (){var statearr_26485 = state_26480;(statearr_26485[9] = inst_26460__$1);
return statearr_26485;
})();if(inst_26462)
{var statearr_26486_26507 = state_26480__$1;(statearr_26486_26507[1] = 5);
} else
{var statearr_26487_26508 = state_26480__$1;(statearr_26487_26508[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26481 === 5))
{var inst_26460 = (state_26480[9]);var inst_26457 = (state_26480[7]);var inst_26464 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26460,inst_26457);var state_26480__$1 = state_26480;if(inst_26464)
{var statearr_26488_26509 = state_26480__$1;(statearr_26488_26509[1] = 8);
} else
{var statearr_26489_26510 = state_26480__$1;(statearr_26489_26510[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26481 === 6))
{var state_26480__$1 = state_26480;var statearr_26491_26511 = state_26480__$1;(statearr_26491_26511[2] = null);
(statearr_26491_26511[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26481 === 7))
{var inst_26475 = (state_26480[2]);var state_26480__$1 = state_26480;var statearr_26492_26512 = state_26480__$1;(statearr_26492_26512[2] = inst_26475);
(statearr_26492_26512[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26481 === 8))
{var inst_26457 = (state_26480[7]);var tmp26490 = inst_26457;var inst_26457__$1 = tmp26490;var state_26480__$1 = (function (){var statearr_26493 = state_26480;(statearr_26493[7] = inst_26457__$1);
return statearr_26493;
})();var statearr_26494_26513 = state_26480__$1;(statearr_26494_26513[2] = null);
(statearr_26494_26513[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26481 === 9))
{var inst_26460 = (state_26480[9]);var state_26480__$1 = state_26480;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26480__$1,11,out,inst_26460);
} else
{if((state_val_26481 === 10))
{var inst_26472 = (state_26480[2]);var state_26480__$1 = state_26480;var statearr_26495_26514 = state_26480__$1;(statearr_26495_26514[2] = inst_26472);
(statearr_26495_26514[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26481 === 11))
{var inst_26460 = (state_26480[9]);var inst_26469 = (state_26480[2]);var inst_26457 = inst_26460;var state_26480__$1 = (function (){var statearr_26496 = state_26480;(statearr_26496[10] = inst_26469);
(statearr_26496[7] = inst_26457);
return statearr_26496;
})();var statearr_26497_26515 = state_26480__$1;(statearr_26497_26515[2] = null);
(statearr_26497_26515[1] = 2);
return cljs.core.constant$keyword$248;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_26501 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26501[0] = state_machine__5507__auto__);
(statearr_26501[1] = 1);
return statearr_26501;
});
var state_machine__5507__auto____1 = (function (state_26480){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26480);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26502){if((e26502 instanceof Object))
{var ex__5510__auto__ = e26502;var statearr_26503_26516 = state_26480;(statearr_26503_26516[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26480);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e26502;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__26517 = state_26480;
state_26480 = G__26517;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26480){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26504 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26505);
return statearr_26504;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26622){var state_val_26623 = (state_26622[1]);if((state_val_26623 === 1))
{var inst_26585 = (new Array(n));var inst_26586 = inst_26585;var inst_26587 = 0;var state_26622__$1 = (function (){var statearr_26624 = state_26622;(statearr_26624[7] = inst_26586);
(statearr_26624[8] = inst_26587);
return statearr_26624;
})();var statearr_26625_26653 = state_26622__$1;(statearr_26625_26653[2] = null);
(statearr_26625_26653[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26623 === 2))
{var state_26622__$1 = state_26622;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26622__$1,4,ch);
} else
{if((state_val_26623 === 3))
{var inst_26620 = (state_26622[2]);var state_26622__$1 = state_26622;return cljs.core.async.impl.ioc_helpers.return_chan(state_26622__$1,inst_26620);
} else
{if((state_val_26623 === 4))
{var inst_26590 = (state_26622[9]);var inst_26590__$1 = (state_26622[2]);var inst_26591 = (inst_26590__$1 == null);var inst_26592 = cljs.core.not(inst_26591);var state_26622__$1 = (function (){var statearr_26626 = state_26622;(statearr_26626[9] = inst_26590__$1);
return statearr_26626;
})();if(inst_26592)
{var statearr_26627_26654 = state_26622__$1;(statearr_26627_26654[1] = 5);
} else
{var statearr_26628_26655 = state_26622__$1;(statearr_26628_26655[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26623 === 5))
{var inst_26586 = (state_26622[7]);var inst_26587 = (state_26622[8]);var inst_26595 = (state_26622[10]);var inst_26590 = (state_26622[9]);var inst_26594 = (inst_26586[inst_26587] = inst_26590);var inst_26595__$1 = (inst_26587 + 1);var inst_26596 = (inst_26595__$1 < n);var state_26622__$1 = (function (){var statearr_26629 = state_26622;(statearr_26629[10] = inst_26595__$1);
(statearr_26629[11] = inst_26594);
return statearr_26629;
})();if(cljs.core.truth_(inst_26596))
{var statearr_26630_26656 = state_26622__$1;(statearr_26630_26656[1] = 8);
} else
{var statearr_26631_26657 = state_26622__$1;(statearr_26631_26657[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26623 === 6))
{var inst_26587 = (state_26622[8]);var inst_26608 = (inst_26587 > 0);var state_26622__$1 = state_26622;if(cljs.core.truth_(inst_26608))
{var statearr_26633_26658 = state_26622__$1;(statearr_26633_26658[1] = 12);
} else
{var statearr_26634_26659 = state_26622__$1;(statearr_26634_26659[1] = 13);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26623 === 7))
{var inst_26618 = (state_26622[2]);var state_26622__$1 = state_26622;var statearr_26635_26660 = state_26622__$1;(statearr_26635_26660[2] = inst_26618);
(statearr_26635_26660[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26623 === 8))
{var inst_26586 = (state_26622[7]);var inst_26595 = (state_26622[10]);var tmp26632 = inst_26586;var inst_26586__$1 = tmp26632;var inst_26587 = inst_26595;var state_26622__$1 = (function (){var statearr_26636 = state_26622;(statearr_26636[7] = inst_26586__$1);
(statearr_26636[8] = inst_26587);
return statearr_26636;
})();var statearr_26637_26661 = state_26622__$1;(statearr_26637_26661[2] = null);
(statearr_26637_26661[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26623 === 9))
{var inst_26586 = (state_26622[7]);var inst_26600 = cljs.core.vec(inst_26586);var state_26622__$1 = state_26622;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26622__$1,11,out,inst_26600);
} else
{if((state_val_26623 === 10))
{var inst_26606 = (state_26622[2]);var state_26622__$1 = state_26622;var statearr_26638_26662 = state_26622__$1;(statearr_26638_26662[2] = inst_26606);
(statearr_26638_26662[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26623 === 11))
{var inst_26602 = (state_26622[2]);var inst_26603 = (new Array(n));var inst_26586 = inst_26603;var inst_26587 = 0;var state_26622__$1 = (function (){var statearr_26639 = state_26622;(statearr_26639[7] = inst_26586);
(statearr_26639[8] = inst_26587);
(statearr_26639[12] = inst_26602);
return statearr_26639;
})();var statearr_26640_26663 = state_26622__$1;(statearr_26640_26663[2] = null);
(statearr_26640_26663[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26623 === 12))
{var inst_26586 = (state_26622[7]);var inst_26610 = cljs.core.vec(inst_26586);var state_26622__$1 = state_26622;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26622__$1,15,out,inst_26610);
} else
{if((state_val_26623 === 13))
{var state_26622__$1 = state_26622;var statearr_26641_26664 = state_26622__$1;(statearr_26641_26664[2] = null);
(statearr_26641_26664[1] = 14);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26623 === 14))
{var inst_26615 = (state_26622[2]);var inst_26616 = cljs.core.async.close_BANG_(out);var state_26622__$1 = (function (){var statearr_26642 = state_26622;(statearr_26642[13] = inst_26615);
return statearr_26642;
})();var statearr_26643_26665 = state_26622__$1;(statearr_26643_26665[2] = inst_26616);
(statearr_26643_26665[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26623 === 15))
{var inst_26612 = (state_26622[2]);var state_26622__$1 = state_26622;var statearr_26644_26666 = state_26622__$1;(statearr_26644_26666[2] = inst_26612);
(statearr_26644_26666[1] = 14);
return cljs.core.constant$keyword$248;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_26648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26648[0] = state_machine__5507__auto__);
(statearr_26648[1] = 1);
return statearr_26648;
});
var state_machine__5507__auto____1 = (function (state_26622){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26622);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26649){if((e26649 instanceof Object))
{var ex__5510__auto__ = e26649;var statearr_26650_26667 = state_26622;(statearr_26650_26667[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26622);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e26649;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__26668 = state_26622;
state_26622 = G__26668;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26622){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26651 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26652);
return statearr_26651;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5521__auto___26811 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26781){var state_val_26782 = (state_26781[1]);if((state_val_26782 === 1))
{var inst_26740 = [];var inst_26741 = inst_26740;var inst_26742 = cljs.core.constant$keyword$261;var state_26781__$1 = (function (){var statearr_26783 = state_26781;(statearr_26783[7] = inst_26741);
(statearr_26783[8] = inst_26742);
return statearr_26783;
})();var statearr_26784_26812 = state_26781__$1;(statearr_26784_26812[2] = null);
(statearr_26784_26812[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26782 === 2))
{var state_26781__$1 = state_26781;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26781__$1,4,ch);
} else
{if((state_val_26782 === 3))
{var inst_26779 = (state_26781[2]);var state_26781__$1 = state_26781;return cljs.core.async.impl.ioc_helpers.return_chan(state_26781__$1,inst_26779);
} else
{if((state_val_26782 === 4))
{var inst_26745 = (state_26781[9]);var inst_26745__$1 = (state_26781[2]);var inst_26746 = (inst_26745__$1 == null);var inst_26747 = cljs.core.not(inst_26746);var state_26781__$1 = (function (){var statearr_26785 = state_26781;(statearr_26785[9] = inst_26745__$1);
return statearr_26785;
})();if(inst_26747)
{var statearr_26786_26813 = state_26781__$1;(statearr_26786_26813[1] = 5);
} else
{var statearr_26787_26814 = state_26781__$1;(statearr_26787_26814[1] = 6);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26782 === 5))
{var inst_26749 = (state_26781[10]);var inst_26745 = (state_26781[9]);var inst_26742 = (state_26781[8]);var inst_26749__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_26745) : f.call(null,inst_26745));var inst_26750 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26749__$1,inst_26742);var inst_26751 = cljs.core.keyword_identical_QMARK_(inst_26742,cljs.core.constant$keyword$261);var inst_26752 = (inst_26750) || (inst_26751);var state_26781__$1 = (function (){var statearr_26788 = state_26781;(statearr_26788[10] = inst_26749__$1);
return statearr_26788;
})();if(cljs.core.truth_(inst_26752))
{var statearr_26789_26815 = state_26781__$1;(statearr_26789_26815[1] = 8);
} else
{var statearr_26790_26816 = state_26781__$1;(statearr_26790_26816[1] = 9);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26782 === 6))
{var inst_26741 = (state_26781[7]);var inst_26766 = inst_26741.length;var inst_26767 = (inst_26766 > 0);var state_26781__$1 = state_26781;if(cljs.core.truth_(inst_26767))
{var statearr_26792_26817 = state_26781__$1;(statearr_26792_26817[1] = 12);
} else
{var statearr_26793_26818 = state_26781__$1;(statearr_26793_26818[1] = 13);
}
return cljs.core.constant$keyword$248;
} else
{if((state_val_26782 === 7))
{var inst_26777 = (state_26781[2]);var state_26781__$1 = state_26781;var statearr_26794_26819 = state_26781__$1;(statearr_26794_26819[2] = inst_26777);
(statearr_26794_26819[1] = 3);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26782 === 8))
{var inst_26741 = (state_26781[7]);var inst_26749 = (state_26781[10]);var inst_26745 = (state_26781[9]);var inst_26754 = inst_26741.push(inst_26745);var tmp26791 = inst_26741;var inst_26741__$1 = tmp26791;var inst_26742 = inst_26749;var state_26781__$1 = (function (){var statearr_26795 = state_26781;(statearr_26795[7] = inst_26741__$1);
(statearr_26795[11] = inst_26754);
(statearr_26795[8] = inst_26742);
return statearr_26795;
})();var statearr_26796_26820 = state_26781__$1;(statearr_26796_26820[2] = null);
(statearr_26796_26820[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26782 === 9))
{var inst_26741 = (state_26781[7]);var inst_26757 = cljs.core.vec(inst_26741);var state_26781__$1 = state_26781;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26781__$1,11,out,inst_26757);
} else
{if((state_val_26782 === 10))
{var inst_26764 = (state_26781[2]);var state_26781__$1 = state_26781;var statearr_26797_26821 = state_26781__$1;(statearr_26797_26821[2] = inst_26764);
(statearr_26797_26821[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26782 === 11))
{var inst_26749 = (state_26781[10]);var inst_26745 = (state_26781[9]);var inst_26759 = (state_26781[2]);var inst_26760 = [];var inst_26761 = inst_26760.push(inst_26745);var inst_26741 = inst_26760;var inst_26742 = inst_26749;var state_26781__$1 = (function (){var statearr_26798 = state_26781;(statearr_26798[7] = inst_26741);
(statearr_26798[8] = inst_26742);
(statearr_26798[12] = inst_26761);
(statearr_26798[13] = inst_26759);
return statearr_26798;
})();var statearr_26799_26822 = state_26781__$1;(statearr_26799_26822[2] = null);
(statearr_26799_26822[1] = 2);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26782 === 12))
{var inst_26741 = (state_26781[7]);var inst_26769 = cljs.core.vec(inst_26741);var state_26781__$1 = state_26781;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26781__$1,15,out,inst_26769);
} else
{if((state_val_26782 === 13))
{var state_26781__$1 = state_26781;var statearr_26800_26823 = state_26781__$1;(statearr_26800_26823[2] = null);
(statearr_26800_26823[1] = 14);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26782 === 14))
{var inst_26774 = (state_26781[2]);var inst_26775 = cljs.core.async.close_BANG_(out);var state_26781__$1 = (function (){var statearr_26801 = state_26781;(statearr_26801[14] = inst_26774);
return statearr_26801;
})();var statearr_26802_26824 = state_26781__$1;(statearr_26802_26824[2] = inst_26775);
(statearr_26802_26824[1] = 7);
return cljs.core.constant$keyword$248;
} else
{if((state_val_26782 === 15))
{var inst_26771 = (state_26781[2]);var state_26781__$1 = state_26781;var statearr_26803_26825 = state_26781__$1;(statearr_26803_26825[2] = inst_26771);
(statearr_26803_26825[1] = 14);
return cljs.core.constant$keyword$248;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_26807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26807[0] = state_machine__5507__auto__);
(statearr_26807[1] = 1);
return statearr_26807;
});
var state_machine__5507__auto____1 = (function (state_26781){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_26781);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$248))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26808){if((e26808 instanceof Object))
{var ex__5510__auto__ = e26808;var statearr_26809_26826 = state_26781;(statearr_26809_26826[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26781);
return cljs.core.constant$keyword$248;
} else
{if(cljs.core.constant$keyword$237)
{throw e26808;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$248))
{{
var G__26827 = state_26781;
state_26781 = G__26827;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26781){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26810 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_26810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26811);
return statearr_26810;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
