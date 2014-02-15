// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = 0;
cljs.core.async.impl.ioc_helpers.STATE_IDX = 1;
cljs.core.async.impl.ioc_helpers.VALUE_IDX = 2;
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = 3;
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = 4;
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = 5;
cljs.core.async.impl.ioc_helpers.USER_START_IDX = 6;
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$232);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t26541 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t26541 = (function (f,fn_handler,meta26542){
this.f = f;
this.fn_handler = fn_handler;
this.meta26542 = meta26542;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t26541.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t26541.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t26541";
cljs.core.async.impl.ioc_helpers.t26541.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async.impl.ioc-helpers/t26541");
});
cljs.core.async.impl.ioc_helpers.t26541.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t26541.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t26541.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t26541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26543){var self__ = this;
var _26543__$1 = this;return self__.meta26542;
});
cljs.core.async.impl.ioc_helpers.t26541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26543,meta26542__$1){var self__ = this;
var _26543__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t26541(self__.f,self__.fn_handler,meta26542__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t26541 = (function __GT_t26541(f__$1,fn_handler__$1,meta26542){return (new cljs.core.async.impl.ioc_helpers.t26541(f__$1,fn_handler__$1,meta26542));
});
}
return (new cljs.core.async.impl.ioc_helpers.t26541(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e26545){if((e26545 instanceof Object))
{var ex = e26545;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{if(cljs.core.constant$keyword$222)
{throw e26545;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_26548_26550 = state;(statearr_26548_26550[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_26548_26550[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_26549_26551 = state;(statearr_26549_26551[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_26549_26551[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$233;
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (){var statearr_26554_26556 = state;(statearr_26554_26556[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_26554_26556[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_26555_26557 = state;(statearr_26555_26557[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_26555_26557[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$233;
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__26558){var map__26563 = p__26558;var map__26563__$1 = ((cljs.core.seq_QMARK_(map__26563))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26563):map__26563);var opts = map__26563__$1;var statearr_26564_26567 = state;(statearr_26564_26567[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts((function (val){var statearr_26565_26568 = state;(statearr_26565_26568[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_26566_26569 = state;(statearr_26566_26569[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
return cljs.core.constant$keyword$233;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__26558 = null;if (arguments.length > 3) {
  p__26558 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__26558);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__26570){
var state = cljs.core.first(arglist__26570);
arglist__26570 = cljs.core.next(arglist__26570);
var cont_block = cljs.core.first(arglist__26570);
arglist__26570 = cljs.core.next(arglist__26570);
var ports = cljs.core.first(arglist__26570);
var p__26558 = cljs.core.rest(arglist__26570);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__26558);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler((function (){return null;
})));
}
c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3981__auto__){var self__ = this;
var this__3981__auto____$1 = this;var h__3817__auto__ = self__.__hash;if(!((h__3817__auto__ == null)))
{return h__3817__auto__;
} else
{var h__3817__auto____$1 = cljs.core.hash_imap(this__3981__auto____$1);self__.__hash = h__3817__auto____$1;
return h__3817__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3986__auto__,k__3987__auto__){var self__ = this;
var this__3986__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__3986__auto____$1,k__3987__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3988__auto__,k26572,else__3989__auto__){var self__ = this;
var this__3988__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k26572,cljs.core.constant$keyword$234))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k26572,cljs.core.constant$keyword$235))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_(k26572,cljs.core.constant$keyword$236))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k26572,cljs.core.constant$keyword$237))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k26572,cljs.core.constant$keyword$238))
{return self__.prev;
} else
{if(cljs.core.constant$keyword$222)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26572,else__3989__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3993__auto__,k__3994__auto__,G__26571){var self__ = this;
var this__3993__auto____$1 = this;var pred__26574 = cljs.core.keyword_identical_QMARK_;var expr__26575 = k__3994__auto__;if(cljs.core.truth_((pred__26574.cljs$core$IFn$_invoke$arity$2 ? pred__26574.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$234,expr__26575) : pred__26574.call(null,cljs.core.constant$keyword$234,expr__26575))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__26571,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__26574.cljs$core$IFn$_invoke$arity$2 ? pred__26574.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$235,expr__26575) : pred__26574.call(null,cljs.core.constant$keyword$235,expr__26575))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__26571,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__26574.cljs$core$IFn$_invoke$arity$2 ? pred__26574.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$236,expr__26575) : pred__26574.call(null,cljs.core.constant$keyword$236,expr__26575))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__26571,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__26574.cljs$core$IFn$_invoke$arity$2 ? pred__26574.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$237,expr__26575) : pred__26574.call(null,cljs.core.constant$keyword$237,expr__26575))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__26571,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__26574.cljs$core$IFn$_invoke$arity$2 ? pred__26574.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$238,expr__26575) : pred__26574.call(null,cljs.core.constant$keyword$238,expr__26575))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__26571,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__3994__auto__,G__26571),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4000__auto__,writer__4001__auto__,opts__4002__auto__){var self__ = this;
var this__4000__auto____$1 = this;var pr_pair__4003__auto__ = (function (keyval__4004__auto__){return cljs.core.pr_sequential_writer(writer__4001__auto__,cljs.core.pr_writer,""," ","",opts__4002__auto__,keyval__4004__auto__);
});return cljs.core.pr_sequential_writer(writer__4001__auto__,pr_pair__4003__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4002__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$234,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$235,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$236,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$237,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$238,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3991__auto__,entry__3992__auto__){var self__ = this;
var this__3991__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__3992__auto__))
{return cljs.core._assoc(this__3991__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__3992__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__3992__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__3991__auto____$1,entry__3992__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__3998__auto__){var self__ = this;
var this__3998__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$234,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$235,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$236,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$237,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$238,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3990__auto__){var self__ = this;
var this__3990__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3982__auto__,other__3983__auto__){var self__ = this;
var this__3982__auto____$1 = this;if(cljs.core.truth_((function (){var and__3394__auto__ = other__3983__auto__;if(cljs.core.truth_(and__3394__auto__))
{return ((this__3982__auto____$1.constructor === other__3983__auto__.constructor)) && (cljs.core.equiv_map(this__3982__auto____$1,other__3983__auto__));
} else
{return and__3394__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3985__auto__,G__26571){var self__ = this;
var this__3985__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__26571,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3984__auto__){var self__ = this;
var this__3984__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3995__auto__,k__3996__auto__){var self__ = this;
var this__3995__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$236,null,cljs.core.constant$keyword$234,null,cljs.core.constant$keyword$235,null,cljs.core.constant$keyword$237,null,cljs.core.constant$keyword$238,null], null), null),k__3996__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__3995__auto____$1),self__.__meta),k__3996__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__3996__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4020__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4020__auto__,writer__4021__auto__){return cljs.core._write(writer__4021__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__26573){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$234.cljs$core$IFn$_invoke$arity$1(G__26573),cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(G__26573),cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(G__26573),cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1(G__26573),cljs.core.constant$keyword$238.cljs$core$IFn$_invoke$arity$1(G__26573),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26573,cljs.core.constant$keyword$234,cljs.core.array_seq([cljs.core.constant$keyword$235,cljs.core.constant$keyword$236,cljs.core.constant$keyword$237,cljs.core.constant$keyword$238], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_26578 = state;(statearr_26578[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_26578;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = cljs.core.constant$keyword$234.cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__3394__auto__ = exception;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not(exception_frame);
} else
{return and__3394__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__3394__auto__ = exception;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = catch_block;if(cljs.core.truth_(and__3394__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var statearr_26584 = state;(statearr_26584[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_26584[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_26584[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_26584[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$234,null,cljs.core.array_seq([cljs.core.constant$keyword$235,null], 0)));
return statearr_26584;
} else
{if(cljs.core.truth_((function (){var and__3394__auto__ = exception;if(cljs.core.truth_(and__3394__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__3394__auto__;
}
})()))
{var statearr_26585_26589 = state;(statearr_26585_26589[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$238.cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__26590 = state;
state = G__26590;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3394__auto__ = exception;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not(catch_block);if(and__3394__auto____$1)
{return cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var statearr_26586 = state;(statearr_26586[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_26586[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$236,null));
return statearr_26586;
} else
{if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not(exception);if(and__3394__auto__)
{return cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3394__auto__;
}
})()))
{var statearr_26587 = state;(statearr_26587[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_26587[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$236,null));
return statearr_26587;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_26588 = state;(statearr_26588[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_26588[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$238.cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_26588;
} else
{if(cljs.core.constant$keyword$222)
{if(false)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No matching clause"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)))].join('')));
}
} else
{return null;
}
}
}
}
}
}
}
break;
}
});
