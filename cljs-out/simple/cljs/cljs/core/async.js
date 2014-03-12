// Compiled by ClojureScript 0.0-2173
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14061 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14061 = (function (f,fn_handler,meta14062){
this.f = f;
this.fn_handler = fn_handler;
this.meta14062 = meta14062;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14061.cljs$lang$type = true;
cljs.core.async.t14061.cljs$lang$ctorStr = "cljs.core.async/t14061";
cljs.core.async.t14061.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14061");
});
cljs.core.async.t14061.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14063){var self__ = this;
var _14063__$1 = this;return self__.meta14062;
});
cljs.core.async.t14061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14063,meta14062__$1){var self__ = this;
var _14063__$1 = this;return (new cljs.core.async.t14061(self__.f,self__.fn_handler,meta14062__$1));
});
cljs.core.async.__GT_t14061 = (function __GT_t14061(f__$1,fn_handler__$1,meta14062){return (new cljs.core.async.t14061(f__$1,fn_handler__$1,meta14062));
});
}
return (new cljs.core.async.t14061(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__14065 = buff;if(G__14065)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__14065.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__14065.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14065);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14065);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_14066 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14066);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_14066);
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3429__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4289__auto___14067 = n;var x_14068 = 0;while(true){
if((x_14068 < n__4289__auto___14067))
{(a[x_14068] = 0);
{
var G__14069 = (x_14068 + 1);
x_14068 = G__14069;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__14070 = (i + 1);
i = G__14070;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14074 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14074 = (function (flag,alt_flag,meta14075){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14075 = meta14075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14074.cljs$lang$type = true;
cljs.core.async.t14074.cljs$lang$ctorStr = "cljs.core.async/t14074";
cljs.core.async.t14074.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14074");
});
cljs.core.async.t14074.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14074.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t14074.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t14074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14076){var self__ = this;
var _14076__$1 = this;return self__.meta14075;
});
cljs.core.async.t14074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14076,meta14075__$1){var self__ = this;
var _14076__$1 = this;return (new cljs.core.async.t14074(self__.flag,self__.alt_flag,meta14075__$1));
});
cljs.core.async.__GT_t14074 = (function __GT_t14074(flag__$1,alt_flag__$1,meta14075){return (new cljs.core.async.t14074(flag__$1,alt_flag__$1,meta14075));
});
}
return (new cljs.core.async.t14074(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14080 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14080 = (function (cb,flag,alt_handler,meta14081){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14081 = meta14081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14080.cljs$lang$type = true;
cljs.core.async.t14080.cljs$lang$ctorStr = "cljs.core.async/t14080";
cljs.core.async.t14080.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14080");
});
cljs.core.async.t14080.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14080.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14080.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14082){var self__ = this;
var _14082__$1 = this;return self__.meta14081;
});
cljs.core.async.t14080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14082,meta14081__$1){var self__ = this;
var _14082__$1 = this;return (new cljs.core.async.t14080(self__.cb,self__.flag,self__.alt_handler,meta14081__$1));
});
cljs.core.async.__GT_t14080 = (function __GT_t14080(cb__$1,flag__$1,alt_handler__$1,meta14081){return (new cljs.core.async.t14080(cb__$1,flag__$1,alt_handler__$1,meta14081));
});
}
return (new cljs.core.async.t14080(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14083_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14083_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3441__auto__ = wport;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__14084 = (i + 1);
i = G__14084;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3441__auto__ = ret;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3429__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3429__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__14085){var map__14087 = p__14085;var map__14087__$1 = ((cljs.core.seq_QMARK_.call(null,map__14087))?cljs.core.apply.call(null,cljs.core.hash_map,map__14087):map__14087);var opts = map__14087__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14085 = null;if (arguments.length > 1) {
  p__14085 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14085);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14088){
var ports = cljs.core.first(arglist__14088);
var p__14085 = cljs.core.rest(arglist__14088);
return alts_BANG___delegate(ports,p__14085);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14096 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14096 = (function (ch,f,map_LT_,meta14097){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14097 = meta14097;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14096.cljs$lang$type = true;
cljs.core.async.t14096.cljs$lang$ctorStr = "cljs.core.async/t14096";
cljs.core.async.t14096.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14096");
});
cljs.core.async.t14096.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14096.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14096.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14096.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14099 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14099 = (function (fn1,_,meta14097,ch,f,map_LT_,meta14100){
this.fn1 = fn1;
this._ = _;
this.meta14097 = meta14097;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14100 = meta14100;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14099.cljs$lang$type = true;
cljs.core.async.t14099.cljs$lang$ctorStr = "cljs.core.async/t14099";
cljs.core.async.t14099.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14099");
});
cljs.core.async.t14099.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14099.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t14099.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t14099.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__14089_SHARP_){return f1.call(null,(((p1__14089_SHARP_ == null))?null:self__.f.call(null,p1__14089_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t14099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14101){var self__ = this;
var _14101__$1 = this;return self__.meta14100;
});
cljs.core.async.t14099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14101,meta14100__$1){var self__ = this;
var _14101__$1 = this;return (new cljs.core.async.t14099(self__.fn1,self__._,self__.meta14097,self__.ch,self__.f,self__.map_LT_,meta14100__$1));
});
cljs.core.async.__GT_t14099 = (function __GT_t14099(fn1__$1,___$2,meta14097__$1,ch__$2,f__$2,map_LT___$2,meta14100){return (new cljs.core.async.t14099(fn1__$1,___$2,meta14097__$1,ch__$2,f__$2,map_LT___$2,meta14100));
});
}
return (new cljs.core.async.t14099(fn1,___$1,self__.meta14097,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3429__auto__ = ret;if(cljs.core.truth_(and__3429__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14096.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14096.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14098){var self__ = this;
var _14098__$1 = this;return self__.meta14097;
});
cljs.core.async.t14096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14098,meta14097__$1){var self__ = this;
var _14098__$1 = this;return (new cljs.core.async.t14096(self__.ch,self__.f,self__.map_LT_,meta14097__$1));
});
cljs.core.async.__GT_t14096 = (function __GT_t14096(ch__$1,f__$1,map_LT___$1,meta14097){return (new cljs.core.async.t14096(ch__$1,f__$1,map_LT___$1,meta14097));
});
}
return (new cljs.core.async.t14096(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14105 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14105 = (function (ch,f,map_GT_,meta14106){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14106 = meta14106;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14105.cljs$lang$type = true;
cljs.core.async.t14105.cljs$lang$ctorStr = "cljs.core.async/t14105";
cljs.core.async.t14105.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14105");
});
cljs.core.async.t14105.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14105.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14105.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14105.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14105.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14105.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14107){var self__ = this;
var _14107__$1 = this;return self__.meta14106;
});
cljs.core.async.t14105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14107,meta14106__$1){var self__ = this;
var _14107__$1 = this;return (new cljs.core.async.t14105(self__.ch,self__.f,self__.map_GT_,meta14106__$1));
});
cljs.core.async.__GT_t14105 = (function __GT_t14105(ch__$1,f__$1,map_GT___$1,meta14106){return (new cljs.core.async.t14105(ch__$1,f__$1,map_GT___$1,meta14106));
});
}
return (new cljs.core.async.t14105(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14111 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14111 = (function (ch,p,filter_GT_,meta14112){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14112 = meta14112;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14111.cljs$lang$type = true;
cljs.core.async.t14111.cljs$lang$ctorStr = "cljs.core.async/t14111";
cljs.core.async.t14111.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t14111");
});
cljs.core.async.t14111.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14111.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14111.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14111.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14111.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14111.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14113){var self__ = this;
var _14113__$1 = this;return self__.meta14112;
});
cljs.core.async.t14111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14113,meta14112__$1){var self__ = this;
var _14113__$1 = this;return (new cljs.core.async.t14111(self__.ch,self__.p,self__.filter_GT_,meta14112__$1));
});
cljs.core.async.__GT_t14111 = (function __GT_t14111(ch__$1,p__$1,filter_GT___$1,meta14112){return (new cljs.core.async.t14111(ch__$1,p__$1,filter_GT___$1,meta14112));
});
}
return (new cljs.core.async.t14111(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
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
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___14196 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14175){var state_val_14176 = (state_14175[1]);if((state_val_14176 === 1))
{var state_14175__$1 = state_14175;var statearr_14177_14197 = state_14175__$1;(statearr_14177_14197[2] = null);
(statearr_14177_14197[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14176 === 2))
{var state_14175__$1 = state_14175;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14175__$1,4,ch);
} else
{if((state_val_14176 === 3))
{var inst_14173 = (state_14175[2]);var state_14175__$1 = state_14175;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14175__$1,inst_14173);
} else
{if((state_val_14176 === 4))
{var inst_14157 = (state_14175[7]);var inst_14157__$1 = (state_14175[2]);var inst_14158 = (inst_14157__$1 == null);var state_14175__$1 = (function (){var statearr_14178 = state_14175;(statearr_14178[7] = inst_14157__$1);
return statearr_14178;
})();if(cljs.core.truth_(inst_14158))
{var statearr_14179_14198 = state_14175__$1;(statearr_14179_14198[1] = 5);
} else
{var statearr_14180_14199 = state_14175__$1;(statearr_14180_14199[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14176 === 5))
{var inst_14160 = cljs.core.async.close_BANG_.call(null,out);var state_14175__$1 = state_14175;var statearr_14181_14200 = state_14175__$1;(statearr_14181_14200[2] = inst_14160);
(statearr_14181_14200[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14176 === 6))
{var inst_14157 = (state_14175[7]);var inst_14162 = p.call(null,inst_14157);var state_14175__$1 = state_14175;if(cljs.core.truth_(inst_14162))
{var statearr_14182_14201 = state_14175__$1;(statearr_14182_14201[1] = 8);
} else
{var statearr_14183_14202 = state_14175__$1;(statearr_14183_14202[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14176 === 7))
{var inst_14171 = (state_14175[2]);var state_14175__$1 = state_14175;var statearr_14184_14203 = state_14175__$1;(statearr_14184_14203[2] = inst_14171);
(statearr_14184_14203[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14176 === 8))
{var inst_14157 = (state_14175[7]);var state_14175__$1 = state_14175;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14175__$1,11,out,inst_14157);
} else
{if((state_val_14176 === 9))
{var state_14175__$1 = state_14175;var statearr_14185_14204 = state_14175__$1;(statearr_14185_14204[2] = null);
(statearr_14185_14204[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14176 === 10))
{var inst_14168 = (state_14175[2]);var state_14175__$1 = (function (){var statearr_14186 = state_14175;(statearr_14186[8] = inst_14168);
return statearr_14186;
})();var statearr_14187_14205 = state_14175__$1;(statearr_14187_14205[2] = null);
(statearr_14187_14205[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14176 === 11))
{var inst_14165 = (state_14175[2]);var state_14175__$1 = state_14175;var statearr_14188_14206 = state_14175__$1;(statearr_14188_14206[2] = inst_14165);
(statearr_14188_14206[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_14192 = [null,null,null,null,null,null,null,null,null];(statearr_14192[0] = state_machine__5548__auto__);
(statearr_14192[1] = 1);
return statearr_14192;
});
var state_machine__5548__auto____1 = (function (state_14175){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14175);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14193){if((e14193 instanceof Object))
{var ex__5551__auto__ = e14193;var statearr_14194_14207 = state_14175;(statearr_14194_14207[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14175);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14193;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14208 = state_14175;
state_14175 = G__14208;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14175){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14195 = f__5563__auto__.call(null);(statearr_14195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___14196);
return statearr_14195;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14360){var state_val_14361 = (state_14360[1]);if((state_val_14361 === 1))
{var state_14360__$1 = state_14360;var statearr_14362_14399 = state_14360__$1;(statearr_14362_14399[2] = null);
(statearr_14362_14399[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14361 === 2))
{var state_14360__$1 = state_14360;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14360__$1,4,in$);
} else
{if((state_val_14361 === 3))
{var inst_14358 = (state_14360[2]);var state_14360__$1 = state_14360;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14360__$1,inst_14358);
} else
{if((state_val_14361 === 4))
{var inst_14306 = (state_14360[7]);var inst_14306__$1 = (state_14360[2]);var inst_14307 = (inst_14306__$1 == null);var state_14360__$1 = (function (){var statearr_14363 = state_14360;(statearr_14363[7] = inst_14306__$1);
return statearr_14363;
})();if(cljs.core.truth_(inst_14307))
{var statearr_14364_14400 = state_14360__$1;(statearr_14364_14400[1] = 5);
} else
{var statearr_14365_14401 = state_14360__$1;(statearr_14365_14401[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14361 === 5))
{var inst_14309 = cljs.core.async.close_BANG_.call(null,out);var state_14360__$1 = state_14360;var statearr_14366_14402 = state_14360__$1;(statearr_14366_14402[2] = inst_14309);
(statearr_14366_14402[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14361 === 6))
{var inst_14306 = (state_14360[7]);var inst_14311 = f.call(null,inst_14306);var inst_14316 = cljs.core.seq.call(null,inst_14311);var inst_14317 = inst_14316;var inst_14318 = null;var inst_14319 = 0;var inst_14320 = 0;var state_14360__$1 = (function (){var statearr_14367 = state_14360;(statearr_14367[8] = inst_14320);
(statearr_14367[9] = inst_14317);
(statearr_14367[10] = inst_14318);
(statearr_14367[11] = inst_14319);
return statearr_14367;
})();var statearr_14368_14403 = state_14360__$1;(statearr_14368_14403[2] = null);
(statearr_14368_14403[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14361 === 7))
{var inst_14356 = (state_14360[2]);var state_14360__$1 = state_14360;var statearr_14369_14404 = state_14360__$1;(statearr_14369_14404[2] = inst_14356);
(statearr_14369_14404[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14361 === 8))
{var inst_14320 = (state_14360[8]);var inst_14319 = (state_14360[11]);var inst_14322 = (inst_14320 < inst_14319);var inst_14323 = inst_14322;var state_14360__$1 = state_14360;if(cljs.core.truth_(inst_14323))
{var statearr_14370_14405 = state_14360__$1;(statearr_14370_14405[1] = 10);
} else
{var statearr_14371_14406 = state_14360__$1;(statearr_14371_14406[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14361 === 9))
{var inst_14353 = (state_14360[2]);var state_14360__$1 = (function (){var statearr_14372 = state_14360;(statearr_14372[12] = inst_14353);
return statearr_14372;
})();var statearr_14373_14407 = state_14360__$1;(statearr_14373_14407[2] = null);
(statearr_14373_14407[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14361 === 10))
{var inst_14320 = (state_14360[8]);var inst_14318 = (state_14360[10]);var inst_14325 = cljs.core._nth.call(null,inst_14318,inst_14320);var state_14360__$1 = state_14360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14360__$1,13,out,inst_14325);
} else
{if((state_val_14361 === 11))
{var inst_14331 = (state_14360[13]);var inst_14317 = (state_14360[9]);var inst_14331__$1 = cljs.core.seq.call(null,inst_14317);var state_14360__$1 = (function (){var statearr_14377 = state_14360;(statearr_14377[13] = inst_14331__$1);
return statearr_14377;
})();if(inst_14331__$1)
{var statearr_14378_14408 = state_14360__$1;(statearr_14378_14408[1] = 14);
} else
{var statearr_14379_14409 = state_14360__$1;(statearr_14379_14409[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14361 === 12))
{var inst_14351 = (state_14360[2]);var state_14360__$1 = state_14360;var statearr_14380_14410 = state_14360__$1;(statearr_14380_14410[2] = inst_14351);
(statearr_14380_14410[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14361 === 13))
{var inst_14320 = (state_14360[8]);var inst_14317 = (state_14360[9]);var inst_14318 = (state_14360[10]);var inst_14319 = (state_14360[11]);var inst_14327 = (state_14360[2]);var inst_14328 = (inst_14320 + 1);var tmp14374 = inst_14317;var tmp14375 = inst_14318;var tmp14376 = inst_14319;var inst_14317__$1 = tmp14374;var inst_14318__$1 = tmp14375;var inst_14319__$1 = tmp14376;var inst_14320__$1 = inst_14328;var state_14360__$1 = (function (){var statearr_14381 = state_14360;(statearr_14381[8] = inst_14320__$1);
(statearr_14381[14] = inst_14327);
(statearr_14381[9] = inst_14317__$1);
(statearr_14381[10] = inst_14318__$1);
(statearr_14381[11] = inst_14319__$1);
return statearr_14381;
})();var statearr_14382_14411 = state_14360__$1;(statearr_14382_14411[2] = null);
(statearr_14382_14411[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14361 === 14))
{var inst_14331 = (state_14360[13]);var inst_14333 = cljs.core.chunked_seq_QMARK_.call(null,inst_14331);var state_14360__$1 = state_14360;if(inst_14333)
{var statearr_14383_14412 = state_14360__$1;(statearr_14383_14412[1] = 17);
} else
{var statearr_14384_14413 = state_14360__$1;(statearr_14384_14413[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14361 === 15))
{var state_14360__$1 = state_14360;var statearr_14385_14414 = state_14360__$1;(statearr_14385_14414[2] = null);
(statearr_14385_14414[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14361 === 16))
{var inst_14349 = (state_14360[2]);var state_14360__$1 = state_14360;var statearr_14386_14415 = state_14360__$1;(statearr_14386_14415[2] = inst_14349);
(statearr_14386_14415[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14361 === 17))
{var inst_14331 = (state_14360[13]);var inst_14335 = cljs.core.chunk_first.call(null,inst_14331);var inst_14336 = cljs.core.chunk_rest.call(null,inst_14331);var inst_14337 = cljs.core.count.call(null,inst_14335);var inst_14317 = inst_14336;var inst_14318 = inst_14335;var inst_14319 = inst_14337;var inst_14320 = 0;var state_14360__$1 = (function (){var statearr_14387 = state_14360;(statearr_14387[8] = inst_14320);
(statearr_14387[9] = inst_14317);
(statearr_14387[10] = inst_14318);
(statearr_14387[11] = inst_14319);
return statearr_14387;
})();var statearr_14388_14416 = state_14360__$1;(statearr_14388_14416[2] = null);
(statearr_14388_14416[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14361 === 18))
{var inst_14331 = (state_14360[13]);var inst_14340 = cljs.core.first.call(null,inst_14331);var state_14360__$1 = state_14360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14360__$1,20,out,inst_14340);
} else
{if((state_val_14361 === 19))
{var inst_14346 = (state_14360[2]);var state_14360__$1 = state_14360;var statearr_14389_14417 = state_14360__$1;(statearr_14389_14417[2] = inst_14346);
(statearr_14389_14417[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14361 === 20))
{var inst_14331 = (state_14360[13]);var inst_14342 = (state_14360[2]);var inst_14343 = cljs.core.next.call(null,inst_14331);var inst_14317 = inst_14343;var inst_14318 = null;var inst_14319 = 0;var inst_14320 = 0;var state_14360__$1 = (function (){var statearr_14390 = state_14360;(statearr_14390[8] = inst_14320);
(statearr_14390[9] = inst_14317);
(statearr_14390[10] = inst_14318);
(statearr_14390[11] = inst_14319);
(statearr_14390[15] = inst_14342);
return statearr_14390;
})();var statearr_14391_14418 = state_14360__$1;(statearr_14391_14418[2] = null);
(statearr_14391_14418[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_14395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14395[0] = state_machine__5548__auto__);
(statearr_14395[1] = 1);
return statearr_14395;
});
var state_machine__5548__auto____1 = (function (state_14360){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14360);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14396){if((e14396 instanceof Object))
{var ex__5551__auto__ = e14396;var statearr_14397_14419 = state_14360;(statearr_14397_14419[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14360);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14396;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14420 = state_14360;
state_14360 = G__14420;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14360){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14398 = f__5563__auto__.call(null);(statearr_14398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_14398;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
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
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5562__auto___14501 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14480){var state_val_14481 = (state_14480[1]);if((state_val_14481 === 1))
{var state_14480__$1 = state_14480;var statearr_14482_14502 = state_14480__$1;(statearr_14482_14502[2] = null);
(statearr_14482_14502[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14481 === 2))
{var state_14480__$1 = state_14480;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14480__$1,4,from);
} else
{if((state_val_14481 === 3))
{var inst_14478 = (state_14480[2]);var state_14480__$1 = state_14480;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14480__$1,inst_14478);
} else
{if((state_val_14481 === 4))
{var inst_14463 = (state_14480[7]);var inst_14463__$1 = (state_14480[2]);var inst_14464 = (inst_14463__$1 == null);var state_14480__$1 = (function (){var statearr_14483 = state_14480;(statearr_14483[7] = inst_14463__$1);
return statearr_14483;
})();if(cljs.core.truth_(inst_14464))
{var statearr_14484_14503 = state_14480__$1;(statearr_14484_14503[1] = 5);
} else
{var statearr_14485_14504 = state_14480__$1;(statearr_14485_14504[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14481 === 5))
{var state_14480__$1 = state_14480;if(cljs.core.truth_(close_QMARK_))
{var statearr_14486_14505 = state_14480__$1;(statearr_14486_14505[1] = 8);
} else
{var statearr_14487_14506 = state_14480__$1;(statearr_14487_14506[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14481 === 6))
{var inst_14463 = (state_14480[7]);var state_14480__$1 = state_14480;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14480__$1,11,to,inst_14463);
} else
{if((state_val_14481 === 7))
{var inst_14476 = (state_14480[2]);var state_14480__$1 = state_14480;var statearr_14488_14507 = state_14480__$1;(statearr_14488_14507[2] = inst_14476);
(statearr_14488_14507[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14481 === 8))
{var inst_14467 = cljs.core.async.close_BANG_.call(null,to);var state_14480__$1 = state_14480;var statearr_14489_14508 = state_14480__$1;(statearr_14489_14508[2] = inst_14467);
(statearr_14489_14508[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14481 === 9))
{var state_14480__$1 = state_14480;var statearr_14490_14509 = state_14480__$1;(statearr_14490_14509[2] = null);
(statearr_14490_14509[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14481 === 10))
{var inst_14470 = (state_14480[2]);var state_14480__$1 = state_14480;var statearr_14491_14510 = state_14480__$1;(statearr_14491_14510[2] = inst_14470);
(statearr_14491_14510[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14481 === 11))
{var inst_14473 = (state_14480[2]);var state_14480__$1 = (function (){var statearr_14492 = state_14480;(statearr_14492[8] = inst_14473);
return statearr_14492;
})();var statearr_14493_14511 = state_14480__$1;(statearr_14493_14511[2] = null);
(statearr_14493_14511[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_14497 = [null,null,null,null,null,null,null,null,null];(statearr_14497[0] = state_machine__5548__auto__);
(statearr_14497[1] = 1);
return statearr_14497;
});
var state_machine__5548__auto____1 = (function (state_14480){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14480);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14498){if((e14498 instanceof Object))
{var ex__5551__auto__ = e14498;var statearr_14499_14512 = state_14480;(statearr_14499_14512[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14480);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14498;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14513 = state_14480;
state_14480 = G__14513;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14480){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14500 = f__5563__auto__.call(null);(statearr_14500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___14501);
return statearr_14500;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5562__auto___14600 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14578){var state_val_14579 = (state_14578[1]);if((state_val_14579 === 1))
{var state_14578__$1 = state_14578;var statearr_14580_14601 = state_14578__$1;(statearr_14580_14601[2] = null);
(statearr_14580_14601[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14579 === 2))
{var state_14578__$1 = state_14578;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14578__$1,4,ch);
} else
{if((state_val_14579 === 3))
{var inst_14576 = (state_14578[2]);var state_14578__$1 = state_14578;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14578__$1,inst_14576);
} else
{if((state_val_14579 === 4))
{var inst_14559 = (state_14578[7]);var inst_14559__$1 = (state_14578[2]);var inst_14560 = (inst_14559__$1 == null);var state_14578__$1 = (function (){var statearr_14581 = state_14578;(statearr_14581[7] = inst_14559__$1);
return statearr_14581;
})();if(cljs.core.truth_(inst_14560))
{var statearr_14582_14602 = state_14578__$1;(statearr_14582_14602[1] = 5);
} else
{var statearr_14583_14603 = state_14578__$1;(statearr_14583_14603[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14579 === 5))
{var inst_14562 = cljs.core.async.close_BANG_.call(null,tc);var inst_14563 = cljs.core.async.close_BANG_.call(null,fc);var state_14578__$1 = (function (){var statearr_14584 = state_14578;(statearr_14584[8] = inst_14562);
return statearr_14584;
})();var statearr_14585_14604 = state_14578__$1;(statearr_14585_14604[2] = inst_14563);
(statearr_14585_14604[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14579 === 6))
{var inst_14559 = (state_14578[7]);var inst_14565 = p.call(null,inst_14559);var state_14578__$1 = state_14578;if(cljs.core.truth_(inst_14565))
{var statearr_14586_14605 = state_14578__$1;(statearr_14586_14605[1] = 9);
} else
{var statearr_14587_14606 = state_14578__$1;(statearr_14587_14606[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14579 === 7))
{var inst_14574 = (state_14578[2]);var state_14578__$1 = state_14578;var statearr_14588_14607 = state_14578__$1;(statearr_14588_14607[2] = inst_14574);
(statearr_14588_14607[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14579 === 8))
{var inst_14571 = (state_14578[2]);var state_14578__$1 = (function (){var statearr_14589 = state_14578;(statearr_14589[9] = inst_14571);
return statearr_14589;
})();var statearr_14590_14608 = state_14578__$1;(statearr_14590_14608[2] = null);
(statearr_14590_14608[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14579 === 9))
{var state_14578__$1 = state_14578;var statearr_14591_14609 = state_14578__$1;(statearr_14591_14609[2] = tc);
(statearr_14591_14609[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14579 === 10))
{var state_14578__$1 = state_14578;var statearr_14592_14610 = state_14578__$1;(statearr_14592_14610[2] = fc);
(statearr_14592_14610[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14579 === 11))
{var inst_14559 = (state_14578[7]);var inst_14569 = (state_14578[2]);var state_14578__$1 = state_14578;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14578__$1,8,inst_14569,inst_14559);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_14596 = [null,null,null,null,null,null,null,null,null,null];(statearr_14596[0] = state_machine__5548__auto__);
(statearr_14596[1] = 1);
return statearr_14596;
});
var state_machine__5548__auto____1 = (function (state_14578){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14578);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14597){if((e14597 instanceof Object))
{var ex__5551__auto__ = e14597;var statearr_14598_14611 = state_14578;(statearr_14598_14611[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14578);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14597;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14612 = state_14578;
state_14578 = G__14612;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14578){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14599 = f__5563__auto__.call(null);(statearr_14599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___14600);
return statearr_14599;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14659){var state_val_14660 = (state_14659[1]);if((state_val_14660 === 7))
{var inst_14655 = (state_14659[2]);var state_14659__$1 = state_14659;var statearr_14661_14677 = state_14659__$1;(statearr_14661_14677[2] = inst_14655);
(statearr_14661_14677[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14660 === 6))
{var inst_14648 = (state_14659[7]);var inst_14645 = (state_14659[8]);var inst_14652 = f.call(null,inst_14645,inst_14648);var inst_14645__$1 = inst_14652;var state_14659__$1 = (function (){var statearr_14662 = state_14659;(statearr_14662[8] = inst_14645__$1);
return statearr_14662;
})();var statearr_14663_14678 = state_14659__$1;(statearr_14663_14678[2] = null);
(statearr_14663_14678[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14660 === 5))
{var inst_14645 = (state_14659[8]);var state_14659__$1 = state_14659;var statearr_14664_14679 = state_14659__$1;(statearr_14664_14679[2] = inst_14645);
(statearr_14664_14679[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14660 === 4))
{var inst_14648 = (state_14659[7]);var inst_14648__$1 = (state_14659[2]);var inst_14649 = (inst_14648__$1 == null);var state_14659__$1 = (function (){var statearr_14665 = state_14659;(statearr_14665[7] = inst_14648__$1);
return statearr_14665;
})();if(cljs.core.truth_(inst_14649))
{var statearr_14666_14680 = state_14659__$1;(statearr_14666_14680[1] = 5);
} else
{var statearr_14667_14681 = state_14659__$1;(statearr_14667_14681[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14660 === 3))
{var inst_14657 = (state_14659[2]);var state_14659__$1 = state_14659;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14659__$1,inst_14657);
} else
{if((state_val_14660 === 2))
{var state_14659__$1 = state_14659;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14659__$1,4,ch);
} else
{if((state_val_14660 === 1))
{var inst_14645 = init;var state_14659__$1 = (function (){var statearr_14668 = state_14659;(statearr_14668[8] = inst_14645);
return statearr_14668;
})();var statearr_14669_14682 = state_14659__$1;(statearr_14669_14682[2] = null);
(statearr_14669_14682[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_14673 = [null,null,null,null,null,null,null,null,null];(statearr_14673[0] = state_machine__5548__auto__);
(statearr_14673[1] = 1);
return statearr_14673;
});
var state_machine__5548__auto____1 = (function (state_14659){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14659);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14674){if((e14674 instanceof Object))
{var ex__5551__auto__ = e14674;var statearr_14675_14683 = state_14659;(statearr_14675_14683[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14659);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14674;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14684 = state_14659;
state_14659 = G__14684;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14659){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14676 = f__5563__auto__.call(null);(statearr_14676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_14676;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
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
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_14746){var state_val_14747 = (state_14746[1]);if((state_val_14747 === 1))
{var inst_14726 = cljs.core.seq.call(null,coll);var inst_14727 = inst_14726;var state_14746__$1 = (function (){var statearr_14748 = state_14746;(statearr_14748[7] = inst_14727);
return statearr_14748;
})();var statearr_14749_14767 = state_14746__$1;(statearr_14749_14767[2] = null);
(statearr_14749_14767[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14747 === 2))
{var inst_14727 = (state_14746[7]);var state_14746__$1 = state_14746;if(cljs.core.truth_(inst_14727))
{var statearr_14750_14768 = state_14746__$1;(statearr_14750_14768[1] = 4);
} else
{var statearr_14751_14769 = state_14746__$1;(statearr_14751_14769[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14747 === 3))
{var inst_14744 = (state_14746[2]);var state_14746__$1 = state_14746;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14746__$1,inst_14744);
} else
{if((state_val_14747 === 4))
{var inst_14727 = (state_14746[7]);var inst_14730 = cljs.core.first.call(null,inst_14727);var state_14746__$1 = state_14746;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14746__$1,7,ch,inst_14730);
} else
{if((state_val_14747 === 5))
{var state_14746__$1 = state_14746;if(cljs.core.truth_(close_QMARK_))
{var statearr_14752_14770 = state_14746__$1;(statearr_14752_14770[1] = 8);
} else
{var statearr_14753_14771 = state_14746__$1;(statearr_14753_14771[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14747 === 6))
{var inst_14742 = (state_14746[2]);var state_14746__$1 = state_14746;var statearr_14754_14772 = state_14746__$1;(statearr_14754_14772[2] = inst_14742);
(statearr_14754_14772[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14747 === 7))
{var inst_14727 = (state_14746[7]);var inst_14732 = (state_14746[2]);var inst_14733 = cljs.core.next.call(null,inst_14727);var inst_14727__$1 = inst_14733;var state_14746__$1 = (function (){var statearr_14755 = state_14746;(statearr_14755[8] = inst_14732);
(statearr_14755[7] = inst_14727__$1);
return statearr_14755;
})();var statearr_14756_14773 = state_14746__$1;(statearr_14756_14773[2] = null);
(statearr_14756_14773[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14747 === 8))
{var inst_14737 = cljs.core.async.close_BANG_.call(null,ch);var state_14746__$1 = state_14746;var statearr_14757_14774 = state_14746__$1;(statearr_14757_14774[2] = inst_14737);
(statearr_14757_14774[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14747 === 9))
{var state_14746__$1 = state_14746;var statearr_14758_14775 = state_14746__$1;(statearr_14758_14775[2] = null);
(statearr_14758_14775[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14747 === 10))
{var inst_14740 = (state_14746[2]);var state_14746__$1 = state_14746;var statearr_14759_14776 = state_14746__$1;(statearr_14759_14776[2] = inst_14740);
(statearr_14759_14776[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_14763 = [null,null,null,null,null,null,null,null,null];(statearr_14763[0] = state_machine__5548__auto__);
(statearr_14763[1] = 1);
return statearr_14763;
});
var state_machine__5548__auto____1 = (function (state_14746){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_14746);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e14764){if((e14764 instanceof Object))
{var ex__5551__auto__ = e14764;var statearr_14765_14777 = state_14746;(statearr_14765_14777[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14746);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14764;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14778 = state_14746;
state_14746 = G__14778;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_14746){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_14746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_14766 = f__5563__auto__.call(null);(statearr_14766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_14766;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj14780 = {};return obj14780;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3429__auto__ = _;if(and__3429__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4068__auto__ = (((_ == null))?null:_);return (function (){var or__3441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj14782 = {};return obj14782;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15006 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15006 = (function (cs,ch,mult,meta15007){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15007 = meta15007;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15006.cljs$lang$type = true;
cljs.core.async.t15006.cljs$lang$ctorStr = "cljs.core.async/t15006";
cljs.core.async.t15006.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t15006");
});})(cs))
;
cljs.core.async.t15006.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15006.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15006.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15006.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15006.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15006.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15006.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15008){var self__ = this;
var _15008__$1 = this;return self__.meta15007;
});})(cs))
;
cljs.core.async.t15006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15008,meta15007__$1){var self__ = this;
var _15008__$1 = this;return (new cljs.core.async.t15006(self__.cs,self__.ch,self__.mult,meta15007__$1));
});})(cs))
;
cljs.core.async.__GT_t15006 = ((function (cs){
return (function __GT_t15006(cs__$1,ch__$1,mult__$1,meta15007){return (new cljs.core.async.t15006(cs__$1,ch__$1,mult__$1,meta15007));
});})(cs))
;
}
return (new cljs.core.async.t15006(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5562__auto___15229 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15143){var state_val_15144 = (state_15143[1]);if((state_val_15144 === 32))
{var inst_15011 = (state_15143[7]);var inst_15087 = (state_15143[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15143,31,Object,null,30);var inst_15094 = cljs.core.async.put_BANG_.call(null,inst_15087,inst_15011,done);var state_15143__$1 = state_15143;var statearr_15145_15230 = state_15143__$1;(statearr_15145_15230[2] = inst_15094);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15143__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 1))
{var state_15143__$1 = state_15143;var statearr_15146_15231 = state_15143__$1;(statearr_15146_15231[2] = null);
(statearr_15146_15231[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 33))
{var inst_15100 = (state_15143[9]);var inst_15102 = cljs.core.chunked_seq_QMARK_.call(null,inst_15100);var state_15143__$1 = state_15143;if(inst_15102)
{var statearr_15147_15232 = state_15143__$1;(statearr_15147_15232[1] = 36);
} else
{var statearr_15148_15233 = state_15143__$1;(statearr_15148_15233[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 2))
{var state_15143__$1 = state_15143;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15143__$1,4,ch);
} else
{if((state_val_15144 === 34))
{var state_15143__$1 = state_15143;var statearr_15149_15234 = state_15143__$1;(statearr_15149_15234[2] = null);
(statearr_15149_15234[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 3))
{var inst_15141 = (state_15143[2]);var state_15143__$1 = state_15143;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15143__$1,inst_15141);
} else
{if((state_val_15144 === 35))
{var inst_15125 = (state_15143[2]);var state_15143__$1 = state_15143;var statearr_15150_15235 = state_15143__$1;(statearr_15150_15235[2] = inst_15125);
(statearr_15150_15235[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 4))
{var inst_15011 = (state_15143[7]);var inst_15011__$1 = (state_15143[2]);var inst_15012 = (inst_15011__$1 == null);var state_15143__$1 = (function (){var statearr_15151 = state_15143;(statearr_15151[7] = inst_15011__$1);
return statearr_15151;
})();if(cljs.core.truth_(inst_15012))
{var statearr_15152_15236 = state_15143__$1;(statearr_15152_15236[1] = 5);
} else
{var statearr_15153_15237 = state_15143__$1;(statearr_15153_15237[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 36))
{var inst_15100 = (state_15143[9]);var inst_15104 = cljs.core.chunk_first.call(null,inst_15100);var inst_15105 = cljs.core.chunk_rest.call(null,inst_15100);var inst_15106 = cljs.core.count.call(null,inst_15104);var inst_15079 = inst_15105;var inst_15080 = inst_15104;var inst_15081 = inst_15106;var inst_15082 = 0;var state_15143__$1 = (function (){var statearr_15154 = state_15143;(statearr_15154[10] = inst_15080);
(statearr_15154[11] = inst_15081);
(statearr_15154[12] = inst_15082);
(statearr_15154[13] = inst_15079);
return statearr_15154;
})();var statearr_15155_15238 = state_15143__$1;(statearr_15155_15238[2] = null);
(statearr_15155_15238[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 5))
{var inst_15018 = cljs.core.deref.call(null,cs);var inst_15019 = cljs.core.seq.call(null,inst_15018);var inst_15020 = inst_15019;var inst_15021 = null;var inst_15022 = 0;var inst_15023 = 0;var state_15143__$1 = (function (){var statearr_15156 = state_15143;(statearr_15156[14] = inst_15023);
(statearr_15156[15] = inst_15020);
(statearr_15156[16] = inst_15022);
(statearr_15156[17] = inst_15021);
return statearr_15156;
})();var statearr_15157_15239 = state_15143__$1;(statearr_15157_15239[2] = null);
(statearr_15157_15239[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 37))
{var inst_15100 = (state_15143[9]);var inst_15109 = cljs.core.first.call(null,inst_15100);var state_15143__$1 = (function (){var statearr_15158 = state_15143;(statearr_15158[18] = inst_15109);
return statearr_15158;
})();var statearr_15159_15240 = state_15143__$1;(statearr_15159_15240[2] = null);
(statearr_15159_15240[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 6))
{var inst_15071 = (state_15143[19]);var inst_15070 = cljs.core.deref.call(null,cs);var inst_15071__$1 = cljs.core.keys.call(null,inst_15070);var inst_15072 = cljs.core.count.call(null,inst_15071__$1);var inst_15073 = cljs.core.reset_BANG_.call(null,dctr,inst_15072);var inst_15078 = cljs.core.seq.call(null,inst_15071__$1);var inst_15079 = inst_15078;var inst_15080 = null;var inst_15081 = 0;var inst_15082 = 0;var state_15143__$1 = (function (){var statearr_15160 = state_15143;(statearr_15160[10] = inst_15080);
(statearr_15160[11] = inst_15081);
(statearr_15160[12] = inst_15082);
(statearr_15160[19] = inst_15071__$1);
(statearr_15160[20] = inst_15073);
(statearr_15160[13] = inst_15079);
return statearr_15160;
})();var statearr_15161_15241 = state_15143__$1;(statearr_15161_15241[2] = null);
(statearr_15161_15241[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 38))
{var inst_15122 = (state_15143[2]);var state_15143__$1 = state_15143;var statearr_15162_15242 = state_15143__$1;(statearr_15162_15242[2] = inst_15122);
(statearr_15162_15242[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 7))
{var inst_15139 = (state_15143[2]);var state_15143__$1 = state_15143;var statearr_15163_15243 = state_15143__$1;(statearr_15163_15243[2] = inst_15139);
(statearr_15163_15243[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 39))
{var inst_15100 = (state_15143[9]);var inst_15118 = (state_15143[2]);var inst_15119 = cljs.core.next.call(null,inst_15100);var inst_15079 = inst_15119;var inst_15080 = null;var inst_15081 = 0;var inst_15082 = 0;var state_15143__$1 = (function (){var statearr_15164 = state_15143;(statearr_15164[10] = inst_15080);
(statearr_15164[11] = inst_15081);
(statearr_15164[12] = inst_15082);
(statearr_15164[13] = inst_15079);
(statearr_15164[21] = inst_15118);
return statearr_15164;
})();var statearr_15165_15244 = state_15143__$1;(statearr_15165_15244[2] = null);
(statearr_15165_15244[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 8))
{var inst_15023 = (state_15143[14]);var inst_15022 = (state_15143[16]);var inst_15025 = (inst_15023 < inst_15022);var inst_15026 = inst_15025;var state_15143__$1 = state_15143;if(cljs.core.truth_(inst_15026))
{var statearr_15166_15245 = state_15143__$1;(statearr_15166_15245[1] = 10);
} else
{var statearr_15167_15246 = state_15143__$1;(statearr_15167_15246[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 40))
{var inst_15109 = (state_15143[18]);var inst_15110 = (state_15143[2]);var inst_15111 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15112 = cljs.core.async.untap_STAR_.call(null,m,inst_15109);var state_15143__$1 = (function (){var statearr_15168 = state_15143;(statearr_15168[22] = inst_15111);
(statearr_15168[23] = inst_15110);
return statearr_15168;
})();var statearr_15169_15247 = state_15143__$1;(statearr_15169_15247[2] = inst_15112);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15143__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 9))
{var inst_15068 = (state_15143[2]);var state_15143__$1 = state_15143;var statearr_15170_15248 = state_15143__$1;(statearr_15170_15248[2] = inst_15068);
(statearr_15170_15248[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 41))
{var inst_15011 = (state_15143[7]);var inst_15109 = (state_15143[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15143,40,Object,null,39);var inst_15116 = cljs.core.async.put_BANG_.call(null,inst_15109,inst_15011,done);var state_15143__$1 = state_15143;var statearr_15171_15249 = state_15143__$1;(statearr_15171_15249[2] = inst_15116);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15143__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 10))
{var inst_15023 = (state_15143[14]);var inst_15021 = (state_15143[17]);var inst_15029 = cljs.core._nth.call(null,inst_15021,inst_15023);var inst_15030 = cljs.core.nth.call(null,inst_15029,0,null);var inst_15031 = cljs.core.nth.call(null,inst_15029,1,null);var state_15143__$1 = (function (){var statearr_15172 = state_15143;(statearr_15172[24] = inst_15030);
return statearr_15172;
})();if(cljs.core.truth_(inst_15031))
{var statearr_15173_15250 = state_15143__$1;(statearr_15173_15250[1] = 13);
} else
{var statearr_15174_15251 = state_15143__$1;(statearr_15174_15251[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 42))
{var state_15143__$1 = state_15143;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15143__$1,45,dchan);
} else
{if((state_val_15144 === 11))
{var inst_15040 = (state_15143[25]);var inst_15020 = (state_15143[15]);var inst_15040__$1 = cljs.core.seq.call(null,inst_15020);var state_15143__$1 = (function (){var statearr_15175 = state_15143;(statearr_15175[25] = inst_15040__$1);
return statearr_15175;
})();if(inst_15040__$1)
{var statearr_15176_15252 = state_15143__$1;(statearr_15176_15252[1] = 16);
} else
{var statearr_15177_15253 = state_15143__$1;(statearr_15177_15253[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 43))
{var state_15143__$1 = state_15143;var statearr_15178_15254 = state_15143__$1;(statearr_15178_15254[2] = null);
(statearr_15178_15254[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 12))
{var inst_15066 = (state_15143[2]);var state_15143__$1 = state_15143;var statearr_15179_15255 = state_15143__$1;(statearr_15179_15255[2] = inst_15066);
(statearr_15179_15255[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 44))
{var inst_15136 = (state_15143[2]);var state_15143__$1 = (function (){var statearr_15180 = state_15143;(statearr_15180[26] = inst_15136);
return statearr_15180;
})();var statearr_15181_15256 = state_15143__$1;(statearr_15181_15256[2] = null);
(statearr_15181_15256[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 13))
{var inst_15030 = (state_15143[24]);var inst_15033 = cljs.core.async.close_BANG_.call(null,inst_15030);var state_15143__$1 = state_15143;var statearr_15182_15257 = state_15143__$1;(statearr_15182_15257[2] = inst_15033);
(statearr_15182_15257[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 45))
{var inst_15133 = (state_15143[2]);var state_15143__$1 = state_15143;var statearr_15186_15258 = state_15143__$1;(statearr_15186_15258[2] = inst_15133);
(statearr_15186_15258[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 14))
{var state_15143__$1 = state_15143;var statearr_15187_15259 = state_15143__$1;(statearr_15187_15259[2] = null);
(statearr_15187_15259[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 15))
{var inst_15023 = (state_15143[14]);var inst_15020 = (state_15143[15]);var inst_15022 = (state_15143[16]);var inst_15021 = (state_15143[17]);var inst_15036 = (state_15143[2]);var inst_15037 = (inst_15023 + 1);var tmp15183 = inst_15020;var tmp15184 = inst_15022;var tmp15185 = inst_15021;var inst_15020__$1 = tmp15183;var inst_15021__$1 = tmp15185;var inst_15022__$1 = tmp15184;var inst_15023__$1 = inst_15037;var state_15143__$1 = (function (){var statearr_15188 = state_15143;(statearr_15188[14] = inst_15023__$1);
(statearr_15188[15] = inst_15020__$1);
(statearr_15188[16] = inst_15022__$1);
(statearr_15188[17] = inst_15021__$1);
(statearr_15188[27] = inst_15036);
return statearr_15188;
})();var statearr_15189_15260 = state_15143__$1;(statearr_15189_15260[2] = null);
(statearr_15189_15260[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 16))
{var inst_15040 = (state_15143[25]);var inst_15042 = cljs.core.chunked_seq_QMARK_.call(null,inst_15040);var state_15143__$1 = state_15143;if(inst_15042)
{var statearr_15190_15261 = state_15143__$1;(statearr_15190_15261[1] = 19);
} else
{var statearr_15191_15262 = state_15143__$1;(statearr_15191_15262[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 17))
{var state_15143__$1 = state_15143;var statearr_15192_15263 = state_15143__$1;(statearr_15192_15263[2] = null);
(statearr_15192_15263[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 18))
{var inst_15064 = (state_15143[2]);var state_15143__$1 = state_15143;var statearr_15193_15264 = state_15143__$1;(statearr_15193_15264[2] = inst_15064);
(statearr_15193_15264[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 19))
{var inst_15040 = (state_15143[25]);var inst_15044 = cljs.core.chunk_first.call(null,inst_15040);var inst_15045 = cljs.core.chunk_rest.call(null,inst_15040);var inst_15046 = cljs.core.count.call(null,inst_15044);var inst_15020 = inst_15045;var inst_15021 = inst_15044;var inst_15022 = inst_15046;var inst_15023 = 0;var state_15143__$1 = (function (){var statearr_15194 = state_15143;(statearr_15194[14] = inst_15023);
(statearr_15194[15] = inst_15020);
(statearr_15194[16] = inst_15022);
(statearr_15194[17] = inst_15021);
return statearr_15194;
})();var statearr_15195_15265 = state_15143__$1;(statearr_15195_15265[2] = null);
(statearr_15195_15265[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 20))
{var inst_15040 = (state_15143[25]);var inst_15050 = cljs.core.first.call(null,inst_15040);var inst_15051 = cljs.core.nth.call(null,inst_15050,0,null);var inst_15052 = cljs.core.nth.call(null,inst_15050,1,null);var state_15143__$1 = (function (){var statearr_15196 = state_15143;(statearr_15196[28] = inst_15051);
return statearr_15196;
})();if(cljs.core.truth_(inst_15052))
{var statearr_15197_15266 = state_15143__$1;(statearr_15197_15266[1] = 22);
} else
{var statearr_15198_15267 = state_15143__$1;(statearr_15198_15267[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 21))
{var inst_15061 = (state_15143[2]);var state_15143__$1 = state_15143;var statearr_15199_15268 = state_15143__$1;(statearr_15199_15268[2] = inst_15061);
(statearr_15199_15268[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 22))
{var inst_15051 = (state_15143[28]);var inst_15054 = cljs.core.async.close_BANG_.call(null,inst_15051);var state_15143__$1 = state_15143;var statearr_15200_15269 = state_15143__$1;(statearr_15200_15269[2] = inst_15054);
(statearr_15200_15269[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 23))
{var state_15143__$1 = state_15143;var statearr_15201_15270 = state_15143__$1;(statearr_15201_15270[2] = null);
(statearr_15201_15270[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 24))
{var inst_15040 = (state_15143[25]);var inst_15057 = (state_15143[2]);var inst_15058 = cljs.core.next.call(null,inst_15040);var inst_15020 = inst_15058;var inst_15021 = null;var inst_15022 = 0;var inst_15023 = 0;var state_15143__$1 = (function (){var statearr_15202 = state_15143;(statearr_15202[29] = inst_15057);
(statearr_15202[14] = inst_15023);
(statearr_15202[15] = inst_15020);
(statearr_15202[16] = inst_15022);
(statearr_15202[17] = inst_15021);
return statearr_15202;
})();var statearr_15203_15271 = state_15143__$1;(statearr_15203_15271[2] = null);
(statearr_15203_15271[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 25))
{var inst_15081 = (state_15143[11]);var inst_15082 = (state_15143[12]);var inst_15084 = (inst_15082 < inst_15081);var inst_15085 = inst_15084;var state_15143__$1 = state_15143;if(cljs.core.truth_(inst_15085))
{var statearr_15204_15272 = state_15143__$1;(statearr_15204_15272[1] = 27);
} else
{var statearr_15205_15273 = state_15143__$1;(statearr_15205_15273[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 26))
{var inst_15071 = (state_15143[19]);var inst_15129 = (state_15143[2]);var inst_15130 = cljs.core.seq.call(null,inst_15071);var state_15143__$1 = (function (){var statearr_15206 = state_15143;(statearr_15206[30] = inst_15129);
return statearr_15206;
})();if(inst_15130)
{var statearr_15207_15274 = state_15143__$1;(statearr_15207_15274[1] = 42);
} else
{var statearr_15208_15275 = state_15143__$1;(statearr_15208_15275[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 27))
{var inst_15080 = (state_15143[10]);var inst_15082 = (state_15143[12]);var inst_15087 = cljs.core._nth.call(null,inst_15080,inst_15082);var state_15143__$1 = (function (){var statearr_15209 = state_15143;(statearr_15209[8] = inst_15087);
return statearr_15209;
})();var statearr_15210_15276 = state_15143__$1;(statearr_15210_15276[2] = null);
(statearr_15210_15276[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 28))
{var inst_15100 = (state_15143[9]);var inst_15079 = (state_15143[13]);var inst_15100__$1 = cljs.core.seq.call(null,inst_15079);var state_15143__$1 = (function (){var statearr_15214 = state_15143;(statearr_15214[9] = inst_15100__$1);
return statearr_15214;
})();if(inst_15100__$1)
{var statearr_15215_15277 = state_15143__$1;(statearr_15215_15277[1] = 33);
} else
{var statearr_15216_15278 = state_15143__$1;(statearr_15216_15278[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 29))
{var inst_15127 = (state_15143[2]);var state_15143__$1 = state_15143;var statearr_15217_15279 = state_15143__$1;(statearr_15217_15279[2] = inst_15127);
(statearr_15217_15279[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 30))
{var inst_15080 = (state_15143[10]);var inst_15081 = (state_15143[11]);var inst_15082 = (state_15143[12]);var inst_15079 = (state_15143[13]);var inst_15096 = (state_15143[2]);var inst_15097 = (inst_15082 + 1);var tmp15211 = inst_15080;var tmp15212 = inst_15081;var tmp15213 = inst_15079;var inst_15079__$1 = tmp15213;var inst_15080__$1 = tmp15211;var inst_15081__$1 = tmp15212;var inst_15082__$1 = inst_15097;var state_15143__$1 = (function (){var statearr_15218 = state_15143;(statearr_15218[10] = inst_15080__$1);
(statearr_15218[11] = inst_15081__$1);
(statearr_15218[12] = inst_15082__$1);
(statearr_15218[31] = inst_15096);
(statearr_15218[13] = inst_15079__$1);
return statearr_15218;
})();var statearr_15219_15280 = state_15143__$1;(statearr_15219_15280[2] = null);
(statearr_15219_15280[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15144 === 31))
{var inst_15087 = (state_15143[8]);var inst_15088 = (state_15143[2]);var inst_15089 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15090 = cljs.core.async.untap_STAR_.call(null,m,inst_15087);var state_15143__$1 = (function (){var statearr_15220 = state_15143;(statearr_15220[32] = inst_15089);
(statearr_15220[33] = inst_15088);
return statearr_15220;
})();var statearr_15221_15281 = state_15143__$1;(statearr_15221_15281[2] = inst_15090);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15143__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_15225 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15225[0] = state_machine__5548__auto__);
(statearr_15225[1] = 1);
return statearr_15225;
});
var state_machine__5548__auto____1 = (function (state_15143){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15143);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15226){if((e15226 instanceof Object))
{var ex__5551__auto__ = e15226;var statearr_15227_15282 = state_15143;(statearr_15227_15282[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15143);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15226;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15283 = state_15143;
state_15143 = G__15283;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15143){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15228 = f__5563__auto__.call(null);(statearr_15228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15229);
return statearr_15228;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
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
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj15285 = {};return obj15285;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3429__auto__ = m;if(and__3429__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4068__auto__ = (((m == null))?null:m);return (function (){var or__3441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t15395 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15395 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15396){
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
this.meta15396 = meta15396;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15395.cljs$lang$type = true;
cljs.core.async.t15395.cljs$lang$ctorStr = "cljs.core.async/t15395";
cljs.core.async.t15395.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t15395");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15395.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15395.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15395.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15395.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15395.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15395.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15395.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15395.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15395.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15397){var self__ = this;
var _15397__$1 = this;return self__.meta15396;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15397,meta15396__$1){var self__ = this;
var _15397__$1 = this;return (new cljs.core.async.t15395(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15396__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15395 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15395(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15396){return (new cljs.core.async.t15395(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15396));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15395(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5562__auto___15504 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15462){var state_val_15463 = (state_15462[1]);if((state_val_15463 === 1))
{var inst_15401 = (state_15462[7]);var inst_15401__$1 = calc_state.call(null);var inst_15402 = cljs.core.seq_QMARK_.call(null,inst_15401__$1);var state_15462__$1 = (function (){var statearr_15464 = state_15462;(statearr_15464[7] = inst_15401__$1);
return statearr_15464;
})();if(inst_15402)
{var statearr_15465_15505 = state_15462__$1;(statearr_15465_15505[1] = 2);
} else
{var statearr_15466_15506 = state_15462__$1;(statearr_15466_15506[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15463 === 2))
{var inst_15401 = (state_15462[7]);var inst_15404 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15401);var state_15462__$1 = state_15462;var statearr_15467_15507 = state_15462__$1;(statearr_15467_15507[2] = inst_15404);
(statearr_15467_15507[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15463 === 3))
{var inst_15401 = (state_15462[7]);var state_15462__$1 = state_15462;var statearr_15468_15508 = state_15462__$1;(statearr_15468_15508[2] = inst_15401);
(statearr_15468_15508[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15463 === 4))
{var inst_15401 = (state_15462[7]);var inst_15407 = (state_15462[2]);var inst_15408 = cljs.core.get.call(null,inst_15407,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15409 = cljs.core.get.call(null,inst_15407,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15410 = cljs.core.get.call(null,inst_15407,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15411 = inst_15401;var state_15462__$1 = (function (){var statearr_15469 = state_15462;(statearr_15469[8] = inst_15410);
(statearr_15469[9] = inst_15411);
(statearr_15469[10] = inst_15408);
(statearr_15469[11] = inst_15409);
return statearr_15469;
})();var statearr_15470_15509 = state_15462__$1;(statearr_15470_15509[2] = null);
(statearr_15470_15509[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15463 === 5))
{var inst_15411 = (state_15462[9]);var inst_15414 = cljs.core.seq_QMARK_.call(null,inst_15411);var state_15462__$1 = state_15462;if(inst_15414)
{var statearr_15471_15510 = state_15462__$1;(statearr_15471_15510[1] = 7);
} else
{var statearr_15472_15511 = state_15462__$1;(statearr_15472_15511[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15463 === 6))
{var inst_15460 = (state_15462[2]);var state_15462__$1 = state_15462;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15462__$1,inst_15460);
} else
{if((state_val_15463 === 7))
{var inst_15411 = (state_15462[9]);var inst_15416 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15411);var state_15462__$1 = state_15462;var statearr_15473_15512 = state_15462__$1;(statearr_15473_15512[2] = inst_15416);
(statearr_15473_15512[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15463 === 8))
{var inst_15411 = (state_15462[9]);var state_15462__$1 = state_15462;var statearr_15474_15513 = state_15462__$1;(statearr_15474_15513[2] = inst_15411);
(statearr_15474_15513[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15463 === 9))
{var inst_15419 = (state_15462[12]);var inst_15419__$1 = (state_15462[2]);var inst_15420 = cljs.core.get.call(null,inst_15419__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15421 = cljs.core.get.call(null,inst_15419__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15422 = cljs.core.get.call(null,inst_15419__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15462__$1 = (function (){var statearr_15475 = state_15462;(statearr_15475[12] = inst_15419__$1);
(statearr_15475[13] = inst_15421);
(statearr_15475[14] = inst_15422);
return statearr_15475;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15462__$1,10,inst_15420);
} else
{if((state_val_15463 === 10))
{var inst_15426 = (state_15462[15]);var inst_15427 = (state_15462[16]);var inst_15425 = (state_15462[2]);var inst_15426__$1 = cljs.core.nth.call(null,inst_15425,0,null);var inst_15427__$1 = cljs.core.nth.call(null,inst_15425,1,null);var inst_15428 = (inst_15426__$1 == null);var inst_15429 = cljs.core._EQ_.call(null,inst_15427__$1,change);var inst_15430 = (inst_15428) || (inst_15429);var state_15462__$1 = (function (){var statearr_15476 = state_15462;(statearr_15476[15] = inst_15426__$1);
(statearr_15476[16] = inst_15427__$1);
return statearr_15476;
})();if(cljs.core.truth_(inst_15430))
{var statearr_15477_15514 = state_15462__$1;(statearr_15477_15514[1] = 11);
} else
{var statearr_15478_15515 = state_15462__$1;(statearr_15478_15515[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15463 === 11))
{var inst_15426 = (state_15462[15]);var inst_15432 = (inst_15426 == null);var state_15462__$1 = state_15462;if(cljs.core.truth_(inst_15432))
{var statearr_15479_15516 = state_15462__$1;(statearr_15479_15516[1] = 14);
} else
{var statearr_15480_15517 = state_15462__$1;(statearr_15480_15517[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15463 === 12))
{var inst_15422 = (state_15462[14]);var inst_15441 = (state_15462[17]);var inst_15427 = (state_15462[16]);var inst_15441__$1 = inst_15422.call(null,inst_15427);var state_15462__$1 = (function (){var statearr_15481 = state_15462;(statearr_15481[17] = inst_15441__$1);
return statearr_15481;
})();if(cljs.core.truth_(inst_15441__$1))
{var statearr_15482_15518 = state_15462__$1;(statearr_15482_15518[1] = 17);
} else
{var statearr_15483_15519 = state_15462__$1;(statearr_15483_15519[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15463 === 13))
{var inst_15458 = (state_15462[2]);var state_15462__$1 = state_15462;var statearr_15484_15520 = state_15462__$1;(statearr_15484_15520[2] = inst_15458);
(statearr_15484_15520[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15463 === 14))
{var inst_15427 = (state_15462[16]);var inst_15434 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15427);var state_15462__$1 = state_15462;var statearr_15485_15521 = state_15462__$1;(statearr_15485_15521[2] = inst_15434);
(statearr_15485_15521[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15463 === 15))
{var state_15462__$1 = state_15462;var statearr_15486_15522 = state_15462__$1;(statearr_15486_15522[2] = null);
(statearr_15486_15522[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15463 === 16))
{var inst_15437 = (state_15462[2]);var inst_15438 = calc_state.call(null);var inst_15411 = inst_15438;var state_15462__$1 = (function (){var statearr_15487 = state_15462;(statearr_15487[9] = inst_15411);
(statearr_15487[18] = inst_15437);
return statearr_15487;
})();var statearr_15488_15523 = state_15462__$1;(statearr_15488_15523[2] = null);
(statearr_15488_15523[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15463 === 17))
{var inst_15441 = (state_15462[17]);var state_15462__$1 = state_15462;var statearr_15489_15524 = state_15462__$1;(statearr_15489_15524[2] = inst_15441);
(statearr_15489_15524[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15463 === 18))
{var inst_15421 = (state_15462[13]);var inst_15422 = (state_15462[14]);var inst_15427 = (state_15462[16]);var inst_15444 = cljs.core.empty_QMARK_.call(null,inst_15422);var inst_15445 = inst_15421.call(null,inst_15427);var inst_15446 = cljs.core.not.call(null,inst_15445);var inst_15447 = (inst_15444) && (inst_15446);var state_15462__$1 = state_15462;var statearr_15490_15525 = state_15462__$1;(statearr_15490_15525[2] = inst_15447);
(statearr_15490_15525[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15463 === 19))
{var inst_15449 = (state_15462[2]);var state_15462__$1 = state_15462;if(cljs.core.truth_(inst_15449))
{var statearr_15491_15526 = state_15462__$1;(statearr_15491_15526[1] = 20);
} else
{var statearr_15492_15527 = state_15462__$1;(statearr_15492_15527[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15463 === 20))
{var inst_15426 = (state_15462[15]);var state_15462__$1 = state_15462;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15462__$1,23,out,inst_15426);
} else
{if((state_val_15463 === 21))
{var state_15462__$1 = state_15462;var statearr_15493_15528 = state_15462__$1;(statearr_15493_15528[2] = null);
(statearr_15493_15528[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15463 === 22))
{var inst_15419 = (state_15462[12]);var inst_15455 = (state_15462[2]);var inst_15411 = inst_15419;var state_15462__$1 = (function (){var statearr_15494 = state_15462;(statearr_15494[19] = inst_15455);
(statearr_15494[9] = inst_15411);
return statearr_15494;
})();var statearr_15495_15529 = state_15462__$1;(statearr_15495_15529[2] = null);
(statearr_15495_15529[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15463 === 23))
{var inst_15452 = (state_15462[2]);var state_15462__$1 = state_15462;var statearr_15496_15530 = state_15462__$1;(statearr_15496_15530[2] = inst_15452);
(statearr_15496_15530[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_15500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15500[0] = state_machine__5548__auto__);
(statearr_15500[1] = 1);
return statearr_15500;
});
var state_machine__5548__auto____1 = (function (state_15462){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15462);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15501){if((e15501 instanceof Object))
{var ex__5551__auto__ = e15501;var statearr_15502_15531 = state_15462;(statearr_15502_15531[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15462);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15501;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15532 = state_15462;
state_15462 = G__15532;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15462){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15503 = f__5563__auto__.call(null);(statearr_15503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15504);
return statearr_15503;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj15534 = {};return obj15534;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3429__auto__ = p;if(and__3429__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3429__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4068__auto__ = (((p == null))?null:p);return (function (){var or__3441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3441__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3441__auto__,mults){
return (function (p1__15535_SHARP_){if(cljs.core.truth_(p1__15535_SHARP_.call(null,topic)))
{return p1__15535_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15535_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3441__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15660 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15660 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15661){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15661 = meta15661;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15660.cljs$lang$type = true;
cljs.core.async.t15660.cljs$lang$ctorStr = "cljs.core.async/t15660";
cljs.core.async.t15660.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"cljs.core.async/t15660");
});})(mults,ensure_mult))
;
cljs.core.async.t15660.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15660.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15660.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15660.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15660.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15660.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15660.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15660.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15662){var self__ = this;
var _15662__$1 = this;return self__.meta15661;
});})(mults,ensure_mult))
;
cljs.core.async.t15660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15662,meta15661__$1){var self__ = this;
var _15662__$1 = this;return (new cljs.core.async.t15660(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15661__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15660 = ((function (mults,ensure_mult){
return (function __GT_t15660(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15661){return (new cljs.core.async.t15660(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15661));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15660(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5562__auto___15784 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15736){var state_val_15737 = (state_15736[1]);if((state_val_15737 === 1))
{var state_15736__$1 = state_15736;var statearr_15738_15785 = state_15736__$1;(statearr_15738_15785[2] = null);
(statearr_15738_15785[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15737 === 2))
{var state_15736__$1 = state_15736;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15736__$1,4,ch);
} else
{if((state_val_15737 === 3))
{var inst_15734 = (state_15736[2]);var state_15736__$1 = state_15736;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15736__$1,inst_15734);
} else
{if((state_val_15737 === 4))
{var inst_15665 = (state_15736[7]);var inst_15665__$1 = (state_15736[2]);var inst_15666 = (inst_15665__$1 == null);var state_15736__$1 = (function (){var statearr_15739 = state_15736;(statearr_15739[7] = inst_15665__$1);
return statearr_15739;
})();if(cljs.core.truth_(inst_15666))
{var statearr_15740_15786 = state_15736__$1;(statearr_15740_15786[1] = 5);
} else
{var statearr_15741_15787 = state_15736__$1;(statearr_15741_15787[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15737 === 5))
{var inst_15672 = cljs.core.deref.call(null,mults);var inst_15673 = cljs.core.vals.call(null,inst_15672);var inst_15674 = cljs.core.seq.call(null,inst_15673);var inst_15675 = inst_15674;var inst_15676 = null;var inst_15677 = 0;var inst_15678 = 0;var state_15736__$1 = (function (){var statearr_15742 = state_15736;(statearr_15742[8] = inst_15675);
(statearr_15742[9] = inst_15678);
(statearr_15742[10] = inst_15677);
(statearr_15742[11] = inst_15676);
return statearr_15742;
})();var statearr_15743_15788 = state_15736__$1;(statearr_15743_15788[2] = null);
(statearr_15743_15788[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15737 === 6))
{var inst_15665 = (state_15736[7]);var inst_15713 = (state_15736[12]);var inst_15715 = (state_15736[13]);var inst_15713__$1 = topic_fn.call(null,inst_15665);var inst_15714 = cljs.core.deref.call(null,mults);var inst_15715__$1 = cljs.core.get.call(null,inst_15714,inst_15713__$1);var state_15736__$1 = (function (){var statearr_15744 = state_15736;(statearr_15744[12] = inst_15713__$1);
(statearr_15744[13] = inst_15715__$1);
return statearr_15744;
})();if(cljs.core.truth_(inst_15715__$1))
{var statearr_15745_15789 = state_15736__$1;(statearr_15745_15789[1] = 19);
} else
{var statearr_15746_15790 = state_15736__$1;(statearr_15746_15790[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15737 === 7))
{var inst_15732 = (state_15736[2]);var state_15736__$1 = state_15736;var statearr_15747_15791 = state_15736__$1;(statearr_15747_15791[2] = inst_15732);
(statearr_15747_15791[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15737 === 8))
{var inst_15678 = (state_15736[9]);var inst_15677 = (state_15736[10]);var inst_15680 = (inst_15678 < inst_15677);var inst_15681 = inst_15680;var state_15736__$1 = state_15736;if(cljs.core.truth_(inst_15681))
{var statearr_15751_15792 = state_15736__$1;(statearr_15751_15792[1] = 10);
} else
{var statearr_15752_15793 = state_15736__$1;(statearr_15752_15793[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15737 === 9))
{var inst_15711 = (state_15736[2]);var state_15736__$1 = state_15736;var statearr_15753_15794 = state_15736__$1;(statearr_15753_15794[2] = inst_15711);
(statearr_15753_15794[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15737 === 10))
{var inst_15675 = (state_15736[8]);var inst_15678 = (state_15736[9]);var inst_15677 = (state_15736[10]);var inst_15676 = (state_15736[11]);var inst_15683 = cljs.core._nth.call(null,inst_15676,inst_15678);var inst_15684 = cljs.core.async.muxch_STAR_.call(null,inst_15683);var inst_15685 = cljs.core.async.close_BANG_.call(null,inst_15684);var inst_15686 = (inst_15678 + 1);var tmp15748 = inst_15675;var tmp15749 = inst_15677;var tmp15750 = inst_15676;var inst_15675__$1 = tmp15748;var inst_15676__$1 = tmp15750;var inst_15677__$1 = tmp15749;var inst_15678__$1 = inst_15686;var state_15736__$1 = (function (){var statearr_15754 = state_15736;(statearr_15754[8] = inst_15675__$1);
(statearr_15754[14] = inst_15685);
(statearr_15754[9] = inst_15678__$1);
(statearr_15754[10] = inst_15677__$1);
(statearr_15754[11] = inst_15676__$1);
return statearr_15754;
})();var statearr_15755_15795 = state_15736__$1;(statearr_15755_15795[2] = null);
(statearr_15755_15795[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15737 === 11))
{var inst_15675 = (state_15736[8]);var inst_15689 = (state_15736[15]);var inst_15689__$1 = cljs.core.seq.call(null,inst_15675);var state_15736__$1 = (function (){var statearr_15756 = state_15736;(statearr_15756[15] = inst_15689__$1);
return statearr_15756;
})();if(inst_15689__$1)
{var statearr_15757_15796 = state_15736__$1;(statearr_15757_15796[1] = 13);
} else
{var statearr_15758_15797 = state_15736__$1;(statearr_15758_15797[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15737 === 12))
{var inst_15709 = (state_15736[2]);var state_15736__$1 = state_15736;var statearr_15759_15798 = state_15736__$1;(statearr_15759_15798[2] = inst_15709);
(statearr_15759_15798[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15737 === 13))
{var inst_15689 = (state_15736[15]);var inst_15691 = cljs.core.chunked_seq_QMARK_.call(null,inst_15689);var state_15736__$1 = state_15736;if(inst_15691)
{var statearr_15760_15799 = state_15736__$1;(statearr_15760_15799[1] = 16);
} else
{var statearr_15761_15800 = state_15736__$1;(statearr_15761_15800[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15737 === 14))
{var state_15736__$1 = state_15736;var statearr_15762_15801 = state_15736__$1;(statearr_15762_15801[2] = null);
(statearr_15762_15801[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15737 === 15))
{var inst_15707 = (state_15736[2]);var state_15736__$1 = state_15736;var statearr_15763_15802 = state_15736__$1;(statearr_15763_15802[2] = inst_15707);
(statearr_15763_15802[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15737 === 16))
{var inst_15689 = (state_15736[15]);var inst_15693 = cljs.core.chunk_first.call(null,inst_15689);var inst_15694 = cljs.core.chunk_rest.call(null,inst_15689);var inst_15695 = cljs.core.count.call(null,inst_15693);var inst_15675 = inst_15694;var inst_15676 = inst_15693;var inst_15677 = inst_15695;var inst_15678 = 0;var state_15736__$1 = (function (){var statearr_15764 = state_15736;(statearr_15764[8] = inst_15675);
(statearr_15764[9] = inst_15678);
(statearr_15764[10] = inst_15677);
(statearr_15764[11] = inst_15676);
return statearr_15764;
})();var statearr_15765_15803 = state_15736__$1;(statearr_15765_15803[2] = null);
(statearr_15765_15803[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15737 === 17))
{var inst_15689 = (state_15736[15]);var inst_15698 = cljs.core.first.call(null,inst_15689);var inst_15699 = cljs.core.async.muxch_STAR_.call(null,inst_15698);var inst_15700 = cljs.core.async.close_BANG_.call(null,inst_15699);var inst_15701 = cljs.core.next.call(null,inst_15689);var inst_15675 = inst_15701;var inst_15676 = null;var inst_15677 = 0;var inst_15678 = 0;var state_15736__$1 = (function (){var statearr_15766 = state_15736;(statearr_15766[16] = inst_15700);
(statearr_15766[8] = inst_15675);
(statearr_15766[9] = inst_15678);
(statearr_15766[10] = inst_15677);
(statearr_15766[11] = inst_15676);
return statearr_15766;
})();var statearr_15767_15804 = state_15736__$1;(statearr_15767_15804[2] = null);
(statearr_15767_15804[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15737 === 18))
{var inst_15704 = (state_15736[2]);var state_15736__$1 = state_15736;var statearr_15768_15805 = state_15736__$1;(statearr_15768_15805[2] = inst_15704);
(statearr_15768_15805[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15737 === 19))
{var state_15736__$1 = state_15736;var statearr_15769_15806 = state_15736__$1;(statearr_15769_15806[2] = null);
(statearr_15769_15806[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15737 === 20))
{var state_15736__$1 = state_15736;var statearr_15770_15807 = state_15736__$1;(statearr_15770_15807[2] = null);
(statearr_15770_15807[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15737 === 21))
{var inst_15729 = (state_15736[2]);var state_15736__$1 = (function (){var statearr_15771 = state_15736;(statearr_15771[17] = inst_15729);
return statearr_15771;
})();var statearr_15772_15808 = state_15736__$1;(statearr_15772_15808[2] = null);
(statearr_15772_15808[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15737 === 22))
{var inst_15726 = (state_15736[2]);var state_15736__$1 = state_15736;var statearr_15773_15809 = state_15736__$1;(statearr_15773_15809[2] = inst_15726);
(statearr_15773_15809[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15737 === 23))
{var inst_15713 = (state_15736[12]);var inst_15717 = (state_15736[2]);var inst_15718 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15713);var state_15736__$1 = (function (){var statearr_15774 = state_15736;(statearr_15774[18] = inst_15717);
return statearr_15774;
})();var statearr_15775_15810 = state_15736__$1;(statearr_15775_15810[2] = inst_15718);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15736__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15737 === 24))
{var inst_15665 = (state_15736[7]);var inst_15715 = (state_15736[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15736,23,Object,null,22);var inst_15722 = cljs.core.async.muxch_STAR_.call(null,inst_15715);var state_15736__$1 = state_15736;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15736__$1,25,inst_15722,inst_15665);
} else
{if((state_val_15737 === 25))
{var inst_15724 = (state_15736[2]);var state_15736__$1 = state_15736;var statearr_15776_15811 = state_15736__$1;(statearr_15776_15811[2] = inst_15724);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15736__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_15780 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15780[0] = state_machine__5548__auto__);
(statearr_15780[1] = 1);
return statearr_15780;
});
var state_machine__5548__auto____1 = (function (state_15736){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15736);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15781){if((e15781 instanceof Object))
{var ex__5551__auto__ = e15781;var statearr_15782_15812 = state_15736;(statearr_15782_15812[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15736);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15781;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15813 = state_15736;
state_15736 = G__15813;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15736){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15783 = f__5563__auto__.call(null);(statearr_15783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15784);
return statearr_15783;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5562__auto___15950 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_15920){var state_val_15921 = (state_15920[1]);if((state_val_15921 === 1))
{var state_15920__$1 = state_15920;var statearr_15922_15951 = state_15920__$1;(statearr_15922_15951[2] = null);
(statearr_15922_15951[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15921 === 2))
{var inst_15883 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15884 = 0;var state_15920__$1 = (function (){var statearr_15923 = state_15920;(statearr_15923[7] = inst_15883);
(statearr_15923[8] = inst_15884);
return statearr_15923;
})();var statearr_15924_15952 = state_15920__$1;(statearr_15924_15952[2] = null);
(statearr_15924_15952[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15921 === 3))
{var inst_15918 = (state_15920[2]);var state_15920__$1 = state_15920;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15920__$1,inst_15918);
} else
{if((state_val_15921 === 4))
{var inst_15884 = (state_15920[8]);var inst_15886 = (inst_15884 < cnt);var state_15920__$1 = state_15920;if(cljs.core.truth_(inst_15886))
{var statearr_15925_15953 = state_15920__$1;(statearr_15925_15953[1] = 6);
} else
{var statearr_15926_15954 = state_15920__$1;(statearr_15926_15954[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15921 === 5))
{var inst_15904 = (state_15920[2]);var state_15920__$1 = (function (){var statearr_15927 = state_15920;(statearr_15927[9] = inst_15904);
return statearr_15927;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15920__$1,12,dchan);
} else
{if((state_val_15921 === 6))
{var state_15920__$1 = state_15920;var statearr_15928_15955 = state_15920__$1;(statearr_15928_15955[2] = null);
(statearr_15928_15955[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15921 === 7))
{var state_15920__$1 = state_15920;var statearr_15929_15956 = state_15920__$1;(statearr_15929_15956[2] = null);
(statearr_15929_15956[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15921 === 8))
{var inst_15902 = (state_15920[2]);var state_15920__$1 = state_15920;var statearr_15930_15957 = state_15920__$1;(statearr_15930_15957[2] = inst_15902);
(statearr_15930_15957[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15921 === 9))
{var inst_15884 = (state_15920[8]);var inst_15897 = (state_15920[2]);var inst_15898 = (inst_15884 + 1);var inst_15884__$1 = inst_15898;var state_15920__$1 = (function (){var statearr_15931 = state_15920;(statearr_15931[10] = inst_15897);
(statearr_15931[8] = inst_15884__$1);
return statearr_15931;
})();var statearr_15932_15958 = state_15920__$1;(statearr_15932_15958[2] = null);
(statearr_15932_15958[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15921 === 10))
{var inst_15888 = (state_15920[2]);var inst_15889 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15920__$1 = (function (){var statearr_15933 = state_15920;(statearr_15933[11] = inst_15888);
return statearr_15933;
})();var statearr_15934_15959 = state_15920__$1;(statearr_15934_15959[2] = inst_15889);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15920__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15921 === 11))
{var inst_15884 = (state_15920[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15920,10,Object,null,9);var inst_15893 = chs__$1.call(null,inst_15884);var inst_15894 = done.call(null,inst_15884);var inst_15895 = cljs.core.async.take_BANG_.call(null,inst_15893,inst_15894);var state_15920__$1 = state_15920;var statearr_15935_15960 = state_15920__$1;(statearr_15935_15960[2] = inst_15895);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15920__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15921 === 12))
{var inst_15906 = (state_15920[12]);var inst_15906__$1 = (state_15920[2]);var inst_15907 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15906__$1);var state_15920__$1 = (function (){var statearr_15936 = state_15920;(statearr_15936[12] = inst_15906__$1);
return statearr_15936;
})();if(cljs.core.truth_(inst_15907))
{var statearr_15937_15961 = state_15920__$1;(statearr_15937_15961[1] = 13);
} else
{var statearr_15938_15962 = state_15920__$1;(statearr_15938_15962[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15921 === 13))
{var inst_15909 = cljs.core.async.close_BANG_.call(null,out);var state_15920__$1 = state_15920;var statearr_15939_15963 = state_15920__$1;(statearr_15939_15963[2] = inst_15909);
(statearr_15939_15963[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15921 === 14))
{var inst_15906 = (state_15920[12]);var inst_15911 = cljs.core.apply.call(null,f,inst_15906);var state_15920__$1 = state_15920;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15920__$1,16,out,inst_15911);
} else
{if((state_val_15921 === 15))
{var inst_15916 = (state_15920[2]);var state_15920__$1 = state_15920;var statearr_15940_15964 = state_15920__$1;(statearr_15940_15964[2] = inst_15916);
(statearr_15940_15964[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15921 === 16))
{var inst_15913 = (state_15920[2]);var state_15920__$1 = (function (){var statearr_15941 = state_15920;(statearr_15941[13] = inst_15913);
return statearr_15941;
})();var statearr_15942_15965 = state_15920__$1;(statearr_15942_15965[2] = null);
(statearr_15942_15965[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_15946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15946[0] = state_machine__5548__auto__);
(statearr_15946[1] = 1);
return statearr_15946;
});
var state_machine__5548__auto____1 = (function (state_15920){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_15920);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e15947){if((e15947 instanceof Object))
{var ex__5551__auto__ = e15947;var statearr_15948_15966 = state_15920;(statearr_15948_15966[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15920);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15947;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15967 = state_15920;
state_15920 = G__15967;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_15920){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_15920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_15949 = f__5563__auto__.call(null);(statearr_15949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___15950);
return statearr_15949;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16075 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16051){var state_val_16052 = (state_16051[1]);if((state_val_16052 === 1))
{var inst_16022 = cljs.core.vec.call(null,chs);var inst_16023 = inst_16022;var state_16051__$1 = (function (){var statearr_16053 = state_16051;(statearr_16053[7] = inst_16023);
return statearr_16053;
})();var statearr_16054_16076 = state_16051__$1;(statearr_16054_16076[2] = null);
(statearr_16054_16076[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16052 === 2))
{var inst_16023 = (state_16051[7]);var inst_16025 = cljs.core.count.call(null,inst_16023);var inst_16026 = (inst_16025 > 0);var state_16051__$1 = state_16051;if(cljs.core.truth_(inst_16026))
{var statearr_16055_16077 = state_16051__$1;(statearr_16055_16077[1] = 4);
} else
{var statearr_16056_16078 = state_16051__$1;(statearr_16056_16078[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16052 === 3))
{var inst_16049 = (state_16051[2]);var state_16051__$1 = state_16051;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16051__$1,inst_16049);
} else
{if((state_val_16052 === 4))
{var inst_16023 = (state_16051[7]);var state_16051__$1 = state_16051;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16051__$1,7,inst_16023);
} else
{if((state_val_16052 === 5))
{var inst_16045 = cljs.core.async.close_BANG_.call(null,out);var state_16051__$1 = state_16051;var statearr_16057_16079 = state_16051__$1;(statearr_16057_16079[2] = inst_16045);
(statearr_16057_16079[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16052 === 6))
{var inst_16047 = (state_16051[2]);var state_16051__$1 = state_16051;var statearr_16058_16080 = state_16051__$1;(statearr_16058_16080[2] = inst_16047);
(statearr_16058_16080[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16052 === 7))
{var inst_16031 = (state_16051[8]);var inst_16030 = (state_16051[9]);var inst_16030__$1 = (state_16051[2]);var inst_16031__$1 = cljs.core.nth.call(null,inst_16030__$1,0,null);var inst_16032 = cljs.core.nth.call(null,inst_16030__$1,1,null);var inst_16033 = (inst_16031__$1 == null);var state_16051__$1 = (function (){var statearr_16059 = state_16051;(statearr_16059[10] = inst_16032);
(statearr_16059[8] = inst_16031__$1);
(statearr_16059[9] = inst_16030__$1);
return statearr_16059;
})();if(cljs.core.truth_(inst_16033))
{var statearr_16060_16081 = state_16051__$1;(statearr_16060_16081[1] = 8);
} else
{var statearr_16061_16082 = state_16051__$1;(statearr_16061_16082[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16052 === 8))
{var inst_16023 = (state_16051[7]);var inst_16032 = (state_16051[10]);var inst_16031 = (state_16051[8]);var inst_16030 = (state_16051[9]);var inst_16035 = (function (){var c = inst_16032;var v = inst_16031;var vec__16028 = inst_16030;var cs = inst_16023;return ((function (c,v,vec__16028,cs,inst_16023,inst_16032,inst_16031,inst_16030,state_val_16052){
return (function (p1__15968_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15968_SHARP_);
});
;})(c,v,vec__16028,cs,inst_16023,inst_16032,inst_16031,inst_16030,state_val_16052))
})();var inst_16036 = cljs.core.filterv.call(null,inst_16035,inst_16023);var inst_16023__$1 = inst_16036;var state_16051__$1 = (function (){var statearr_16062 = state_16051;(statearr_16062[7] = inst_16023__$1);
return statearr_16062;
})();var statearr_16063_16083 = state_16051__$1;(statearr_16063_16083[2] = null);
(statearr_16063_16083[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16052 === 9))
{var inst_16031 = (state_16051[8]);var state_16051__$1 = state_16051;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16051__$1,11,out,inst_16031);
} else
{if((state_val_16052 === 10))
{var inst_16043 = (state_16051[2]);var state_16051__$1 = state_16051;var statearr_16065_16084 = state_16051__$1;(statearr_16065_16084[2] = inst_16043);
(statearr_16065_16084[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16052 === 11))
{var inst_16023 = (state_16051[7]);var inst_16040 = (state_16051[2]);var tmp16064 = inst_16023;var inst_16023__$1 = tmp16064;var state_16051__$1 = (function (){var statearr_16066 = state_16051;(statearr_16066[7] = inst_16023__$1);
(statearr_16066[11] = inst_16040);
return statearr_16066;
})();var statearr_16067_16085 = state_16051__$1;(statearr_16067_16085[2] = null);
(statearr_16067_16085[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_16071 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16071[0] = state_machine__5548__auto__);
(statearr_16071[1] = 1);
return statearr_16071;
});
var state_machine__5548__auto____1 = (function (state_16051){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16051);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16072){if((e16072 instanceof Object))
{var ex__5551__auto__ = e16072;var statearr_16073_16086 = state_16051;(statearr_16073_16086[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16051);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16072;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16087 = state_16051;
state_16051 = G__16087;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16051){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16074 = f__5563__auto__.call(null);(statearr_16074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16075);
return statearr_16074;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16180 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16157){var state_val_16158 = (state_16157[1]);if((state_val_16158 === 1))
{var inst_16134 = 0;var state_16157__$1 = (function (){var statearr_16159 = state_16157;(statearr_16159[7] = inst_16134);
return statearr_16159;
})();var statearr_16160_16181 = state_16157__$1;(statearr_16160_16181[2] = null);
(statearr_16160_16181[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16158 === 2))
{var inst_16134 = (state_16157[7]);var inst_16136 = (inst_16134 < n);var state_16157__$1 = state_16157;if(cljs.core.truth_(inst_16136))
{var statearr_16161_16182 = state_16157__$1;(statearr_16161_16182[1] = 4);
} else
{var statearr_16162_16183 = state_16157__$1;(statearr_16162_16183[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16158 === 3))
{var inst_16154 = (state_16157[2]);var inst_16155 = cljs.core.async.close_BANG_.call(null,out);var state_16157__$1 = (function (){var statearr_16163 = state_16157;(statearr_16163[8] = inst_16154);
return statearr_16163;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16157__$1,inst_16155);
} else
{if((state_val_16158 === 4))
{var state_16157__$1 = state_16157;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16157__$1,7,ch);
} else
{if((state_val_16158 === 5))
{var state_16157__$1 = state_16157;var statearr_16164_16184 = state_16157__$1;(statearr_16164_16184[2] = null);
(statearr_16164_16184[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16158 === 6))
{var inst_16152 = (state_16157[2]);var state_16157__$1 = state_16157;var statearr_16165_16185 = state_16157__$1;(statearr_16165_16185[2] = inst_16152);
(statearr_16165_16185[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16158 === 7))
{var inst_16139 = (state_16157[9]);var inst_16139__$1 = (state_16157[2]);var inst_16140 = (inst_16139__$1 == null);var inst_16141 = cljs.core.not.call(null,inst_16140);var state_16157__$1 = (function (){var statearr_16166 = state_16157;(statearr_16166[9] = inst_16139__$1);
return statearr_16166;
})();if(inst_16141)
{var statearr_16167_16186 = state_16157__$1;(statearr_16167_16186[1] = 8);
} else
{var statearr_16168_16187 = state_16157__$1;(statearr_16168_16187[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16158 === 8))
{var inst_16139 = (state_16157[9]);var state_16157__$1 = state_16157;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16157__$1,11,out,inst_16139);
} else
{if((state_val_16158 === 9))
{var state_16157__$1 = state_16157;var statearr_16169_16188 = state_16157__$1;(statearr_16169_16188[2] = null);
(statearr_16169_16188[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16158 === 10))
{var inst_16149 = (state_16157[2]);var state_16157__$1 = state_16157;var statearr_16170_16189 = state_16157__$1;(statearr_16170_16189[2] = inst_16149);
(statearr_16170_16189[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16158 === 11))
{var inst_16134 = (state_16157[7]);var inst_16144 = (state_16157[2]);var inst_16145 = (inst_16134 + 1);var inst_16134__$1 = inst_16145;var state_16157__$1 = (function (){var statearr_16171 = state_16157;(statearr_16171[10] = inst_16144);
(statearr_16171[7] = inst_16134__$1);
return statearr_16171;
})();var statearr_16172_16190 = state_16157__$1;(statearr_16172_16190[2] = null);
(statearr_16172_16190[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_16176 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16176[0] = state_machine__5548__auto__);
(statearr_16176[1] = 1);
return statearr_16176;
});
var state_machine__5548__auto____1 = (function (state_16157){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16157);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16177){if((e16177 instanceof Object))
{var ex__5551__auto__ = e16177;var statearr_16178_16191 = state_16157;(statearr_16178_16191[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16157);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16177;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16192 = state_16157;
state_16157 = G__16192;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16157){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16179 = f__5563__auto__.call(null);(statearr_16179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16180);
return statearr_16179;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16289 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16264){var state_val_16265 = (state_16264[1]);if((state_val_16265 === 1))
{var inst_16241 = null;var state_16264__$1 = (function (){var statearr_16266 = state_16264;(statearr_16266[7] = inst_16241);
return statearr_16266;
})();var statearr_16267_16290 = state_16264__$1;(statearr_16267_16290[2] = null);
(statearr_16267_16290[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16265 === 2))
{var state_16264__$1 = state_16264;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16264__$1,4,ch);
} else
{if((state_val_16265 === 3))
{var inst_16261 = (state_16264[2]);var inst_16262 = cljs.core.async.close_BANG_.call(null,out);var state_16264__$1 = (function (){var statearr_16268 = state_16264;(statearr_16268[8] = inst_16261);
return statearr_16268;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16264__$1,inst_16262);
} else
{if((state_val_16265 === 4))
{var inst_16244 = (state_16264[9]);var inst_16244__$1 = (state_16264[2]);var inst_16245 = (inst_16244__$1 == null);var inst_16246 = cljs.core.not.call(null,inst_16245);var state_16264__$1 = (function (){var statearr_16269 = state_16264;(statearr_16269[9] = inst_16244__$1);
return statearr_16269;
})();if(inst_16246)
{var statearr_16270_16291 = state_16264__$1;(statearr_16270_16291[1] = 5);
} else
{var statearr_16271_16292 = state_16264__$1;(statearr_16271_16292[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16265 === 5))
{var inst_16244 = (state_16264[9]);var inst_16241 = (state_16264[7]);var inst_16248 = cljs.core._EQ_.call(null,inst_16244,inst_16241);var state_16264__$1 = state_16264;if(inst_16248)
{var statearr_16272_16293 = state_16264__$1;(statearr_16272_16293[1] = 8);
} else
{var statearr_16273_16294 = state_16264__$1;(statearr_16273_16294[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16265 === 6))
{var state_16264__$1 = state_16264;var statearr_16275_16295 = state_16264__$1;(statearr_16275_16295[2] = null);
(statearr_16275_16295[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16265 === 7))
{var inst_16259 = (state_16264[2]);var state_16264__$1 = state_16264;var statearr_16276_16296 = state_16264__$1;(statearr_16276_16296[2] = inst_16259);
(statearr_16276_16296[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16265 === 8))
{var inst_16241 = (state_16264[7]);var tmp16274 = inst_16241;var inst_16241__$1 = tmp16274;var state_16264__$1 = (function (){var statearr_16277 = state_16264;(statearr_16277[7] = inst_16241__$1);
return statearr_16277;
})();var statearr_16278_16297 = state_16264__$1;(statearr_16278_16297[2] = null);
(statearr_16278_16297[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16265 === 9))
{var inst_16244 = (state_16264[9]);var state_16264__$1 = state_16264;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16264__$1,11,out,inst_16244);
} else
{if((state_val_16265 === 10))
{var inst_16256 = (state_16264[2]);var state_16264__$1 = state_16264;var statearr_16279_16298 = state_16264__$1;(statearr_16279_16298[2] = inst_16256);
(statearr_16279_16298[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16265 === 11))
{var inst_16244 = (state_16264[9]);var inst_16253 = (state_16264[2]);var inst_16241 = inst_16244;var state_16264__$1 = (function (){var statearr_16280 = state_16264;(statearr_16280[7] = inst_16241);
(statearr_16280[10] = inst_16253);
return statearr_16280;
})();var statearr_16281_16299 = state_16264__$1;(statearr_16281_16299[2] = null);
(statearr_16281_16299[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_16285 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16285[0] = state_machine__5548__auto__);
(statearr_16285[1] = 1);
return statearr_16285;
});
var state_machine__5548__auto____1 = (function (state_16264){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16264);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16286){if((e16286 instanceof Object))
{var ex__5551__auto__ = e16286;var statearr_16287_16300 = state_16264;(statearr_16287_16300[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16264);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16286;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16301 = state_16264;
state_16264 = G__16301;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16264){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16288 = f__5563__auto__.call(null);(statearr_16288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16289);
return statearr_16288;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16436 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16406){var state_val_16407 = (state_16406[1]);if((state_val_16407 === 1))
{var inst_16369 = (new Array(n));var inst_16370 = inst_16369;var inst_16371 = 0;var state_16406__$1 = (function (){var statearr_16408 = state_16406;(statearr_16408[7] = inst_16370);
(statearr_16408[8] = inst_16371);
return statearr_16408;
})();var statearr_16409_16437 = state_16406__$1;(statearr_16409_16437[2] = null);
(statearr_16409_16437[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16407 === 2))
{var state_16406__$1 = state_16406;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16406__$1,4,ch);
} else
{if((state_val_16407 === 3))
{var inst_16404 = (state_16406[2]);var state_16406__$1 = state_16406;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16406__$1,inst_16404);
} else
{if((state_val_16407 === 4))
{var inst_16374 = (state_16406[9]);var inst_16374__$1 = (state_16406[2]);var inst_16375 = (inst_16374__$1 == null);var inst_16376 = cljs.core.not.call(null,inst_16375);var state_16406__$1 = (function (){var statearr_16410 = state_16406;(statearr_16410[9] = inst_16374__$1);
return statearr_16410;
})();if(inst_16376)
{var statearr_16411_16438 = state_16406__$1;(statearr_16411_16438[1] = 5);
} else
{var statearr_16412_16439 = state_16406__$1;(statearr_16412_16439[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16407 === 5))
{var inst_16370 = (state_16406[7]);var inst_16371 = (state_16406[8]);var inst_16379 = (state_16406[10]);var inst_16374 = (state_16406[9]);var inst_16378 = (inst_16370[inst_16371] = inst_16374);var inst_16379__$1 = (inst_16371 + 1);var inst_16380 = (inst_16379__$1 < n);var state_16406__$1 = (function (){var statearr_16413 = state_16406;(statearr_16413[11] = inst_16378);
(statearr_16413[10] = inst_16379__$1);
return statearr_16413;
})();if(cljs.core.truth_(inst_16380))
{var statearr_16414_16440 = state_16406__$1;(statearr_16414_16440[1] = 8);
} else
{var statearr_16415_16441 = state_16406__$1;(statearr_16415_16441[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16407 === 6))
{var inst_16371 = (state_16406[8]);var inst_16392 = (inst_16371 > 0);var state_16406__$1 = state_16406;if(cljs.core.truth_(inst_16392))
{var statearr_16417_16442 = state_16406__$1;(statearr_16417_16442[1] = 12);
} else
{var statearr_16418_16443 = state_16406__$1;(statearr_16418_16443[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16407 === 7))
{var inst_16402 = (state_16406[2]);var state_16406__$1 = state_16406;var statearr_16419_16444 = state_16406__$1;(statearr_16419_16444[2] = inst_16402);
(statearr_16419_16444[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16407 === 8))
{var inst_16370 = (state_16406[7]);var inst_16379 = (state_16406[10]);var tmp16416 = inst_16370;var inst_16370__$1 = tmp16416;var inst_16371 = inst_16379;var state_16406__$1 = (function (){var statearr_16420 = state_16406;(statearr_16420[7] = inst_16370__$1);
(statearr_16420[8] = inst_16371);
return statearr_16420;
})();var statearr_16421_16445 = state_16406__$1;(statearr_16421_16445[2] = null);
(statearr_16421_16445[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16407 === 9))
{var inst_16370 = (state_16406[7]);var inst_16384 = cljs.core.vec.call(null,inst_16370);var state_16406__$1 = state_16406;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16406__$1,11,out,inst_16384);
} else
{if((state_val_16407 === 10))
{var inst_16390 = (state_16406[2]);var state_16406__$1 = state_16406;var statearr_16422_16446 = state_16406__$1;(statearr_16422_16446[2] = inst_16390);
(statearr_16422_16446[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16407 === 11))
{var inst_16386 = (state_16406[2]);var inst_16387 = (new Array(n));var inst_16370 = inst_16387;var inst_16371 = 0;var state_16406__$1 = (function (){var statearr_16423 = state_16406;(statearr_16423[7] = inst_16370);
(statearr_16423[8] = inst_16371);
(statearr_16423[12] = inst_16386);
return statearr_16423;
})();var statearr_16424_16447 = state_16406__$1;(statearr_16424_16447[2] = null);
(statearr_16424_16447[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16407 === 12))
{var inst_16370 = (state_16406[7]);var inst_16394 = cljs.core.vec.call(null,inst_16370);var state_16406__$1 = state_16406;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16406__$1,15,out,inst_16394);
} else
{if((state_val_16407 === 13))
{var state_16406__$1 = state_16406;var statearr_16425_16448 = state_16406__$1;(statearr_16425_16448[2] = null);
(statearr_16425_16448[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16407 === 14))
{var inst_16399 = (state_16406[2]);var inst_16400 = cljs.core.async.close_BANG_.call(null,out);var state_16406__$1 = (function (){var statearr_16426 = state_16406;(statearr_16426[13] = inst_16399);
return statearr_16426;
})();var statearr_16427_16449 = state_16406__$1;(statearr_16427_16449[2] = inst_16400);
(statearr_16427_16449[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16407 === 15))
{var inst_16396 = (state_16406[2]);var state_16406__$1 = state_16406;var statearr_16428_16450 = state_16406__$1;(statearr_16428_16450[2] = inst_16396);
(statearr_16428_16450[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_16432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16432[0] = state_machine__5548__auto__);
(statearr_16432[1] = 1);
return statearr_16432;
});
var state_machine__5548__auto____1 = (function (state_16406){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16406);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16433){if((e16433 instanceof Object))
{var ex__5551__auto__ = e16433;var statearr_16434_16451 = state_16406;(statearr_16434_16451[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16406);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16433;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16452 = state_16406;
state_16406 = G__16452;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16406){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16435 = f__5563__auto__.call(null);(statearr_16435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16436);
return statearr_16435;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5562__auto___16595 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_16565){var state_val_16566 = (state_16565[1]);if((state_val_16566 === 1))
{var inst_16524 = [];var inst_16525 = inst_16524;var inst_16526 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16565__$1 = (function (){var statearr_16567 = state_16565;(statearr_16567[7] = inst_16526);
(statearr_16567[8] = inst_16525);
return statearr_16567;
})();var statearr_16568_16596 = state_16565__$1;(statearr_16568_16596[2] = null);
(statearr_16568_16596[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16566 === 2))
{var state_16565__$1 = state_16565;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16565__$1,4,ch);
} else
{if((state_val_16566 === 3))
{var inst_16563 = (state_16565[2]);var state_16565__$1 = state_16565;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16565__$1,inst_16563);
} else
{if((state_val_16566 === 4))
{var inst_16529 = (state_16565[9]);var inst_16529__$1 = (state_16565[2]);var inst_16530 = (inst_16529__$1 == null);var inst_16531 = cljs.core.not.call(null,inst_16530);var state_16565__$1 = (function (){var statearr_16569 = state_16565;(statearr_16569[9] = inst_16529__$1);
return statearr_16569;
})();if(inst_16531)
{var statearr_16570_16597 = state_16565__$1;(statearr_16570_16597[1] = 5);
} else
{var statearr_16571_16598 = state_16565__$1;(statearr_16571_16598[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16566 === 5))
{var inst_16529 = (state_16565[9]);var inst_16533 = (state_16565[10]);var inst_16526 = (state_16565[7]);var inst_16533__$1 = f.call(null,inst_16529);var inst_16534 = cljs.core._EQ_.call(null,inst_16533__$1,inst_16526);var inst_16535 = cljs.core.keyword_identical_QMARK_.call(null,inst_16526,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16536 = (inst_16534) || (inst_16535);var state_16565__$1 = (function (){var statearr_16572 = state_16565;(statearr_16572[10] = inst_16533__$1);
return statearr_16572;
})();if(cljs.core.truth_(inst_16536))
{var statearr_16573_16599 = state_16565__$1;(statearr_16573_16599[1] = 8);
} else
{var statearr_16574_16600 = state_16565__$1;(statearr_16574_16600[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16566 === 6))
{var inst_16525 = (state_16565[8]);var inst_16550 = inst_16525.length;var inst_16551 = (inst_16550 > 0);var state_16565__$1 = state_16565;if(cljs.core.truth_(inst_16551))
{var statearr_16576_16601 = state_16565__$1;(statearr_16576_16601[1] = 12);
} else
{var statearr_16577_16602 = state_16565__$1;(statearr_16577_16602[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16566 === 7))
{var inst_16561 = (state_16565[2]);var state_16565__$1 = state_16565;var statearr_16578_16603 = state_16565__$1;(statearr_16578_16603[2] = inst_16561);
(statearr_16578_16603[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16566 === 8))
{var inst_16529 = (state_16565[9]);var inst_16533 = (state_16565[10]);var inst_16525 = (state_16565[8]);var inst_16538 = inst_16525.push(inst_16529);var tmp16575 = inst_16525;var inst_16525__$1 = tmp16575;var inst_16526 = inst_16533;var state_16565__$1 = (function (){var statearr_16579 = state_16565;(statearr_16579[11] = inst_16538);
(statearr_16579[7] = inst_16526);
(statearr_16579[8] = inst_16525__$1);
return statearr_16579;
})();var statearr_16580_16604 = state_16565__$1;(statearr_16580_16604[2] = null);
(statearr_16580_16604[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16566 === 9))
{var inst_16525 = (state_16565[8]);var inst_16541 = cljs.core.vec.call(null,inst_16525);var state_16565__$1 = state_16565;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16565__$1,11,out,inst_16541);
} else
{if((state_val_16566 === 10))
{var inst_16548 = (state_16565[2]);var state_16565__$1 = state_16565;var statearr_16581_16605 = state_16565__$1;(statearr_16581_16605[2] = inst_16548);
(statearr_16581_16605[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16566 === 11))
{var inst_16529 = (state_16565[9]);var inst_16533 = (state_16565[10]);var inst_16543 = (state_16565[2]);var inst_16544 = [];var inst_16545 = inst_16544.push(inst_16529);var inst_16525 = inst_16544;var inst_16526 = inst_16533;var state_16565__$1 = (function (){var statearr_16582 = state_16565;(statearr_16582[12] = inst_16543);
(statearr_16582[13] = inst_16545);
(statearr_16582[7] = inst_16526);
(statearr_16582[8] = inst_16525);
return statearr_16582;
})();var statearr_16583_16606 = state_16565__$1;(statearr_16583_16606[2] = null);
(statearr_16583_16606[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16566 === 12))
{var inst_16525 = (state_16565[8]);var inst_16553 = cljs.core.vec.call(null,inst_16525);var state_16565__$1 = state_16565;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16565__$1,15,out,inst_16553);
} else
{if((state_val_16566 === 13))
{var state_16565__$1 = state_16565;var statearr_16584_16607 = state_16565__$1;(statearr_16584_16607[2] = null);
(statearr_16584_16607[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16566 === 14))
{var inst_16558 = (state_16565[2]);var inst_16559 = cljs.core.async.close_BANG_.call(null,out);var state_16565__$1 = (function (){var statearr_16585 = state_16565;(statearr_16585[14] = inst_16558);
return statearr_16585;
})();var statearr_16586_16608 = state_16565__$1;(statearr_16586_16608[2] = inst_16559);
(statearr_16586_16608[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16566 === 15))
{var inst_16555 = (state_16565[2]);var state_16565__$1 = state_16565;var statearr_16587_16609 = state_16565__$1;(statearr_16587_16609[2] = inst_16555);
(statearr_16587_16609[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_16591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16591[0] = state_machine__5548__auto__);
(statearr_16591[1] = 1);
return statearr_16591;
});
var state_machine__5548__auto____1 = (function (state_16565){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_16565);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e16592){if((e16592 instanceof Object))
{var ex__5551__auto__ = e16592;var statearr_16593_16610 = state_16565;(statearr_16593_16610[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16565);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16592;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16611 = state_16565;
state_16565 = G__16611;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_16565){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_16565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_16594 = f__5563__auto__.call(null);(statearr_16594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___16595);
return statearr_16594;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
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
