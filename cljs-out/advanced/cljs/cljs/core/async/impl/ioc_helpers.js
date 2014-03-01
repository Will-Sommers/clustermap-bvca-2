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
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$271);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t27429 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t27429 = (function (f,fn_handler,meta27430){
this.f = f;
this.fn_handler = fn_handler;
this.meta27430 = meta27430;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t27429.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t27429.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t27429";
cljs.core.async.impl.ioc_helpers.t27429.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"cljs.core.async.impl.ioc-helpers/t27429");
});
cljs.core.async.impl.ioc_helpers.t27429.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t27429.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t27429.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t27429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27431){var self__ = this;
var _27431__$1 = this;return self__.meta27430;
});
cljs.core.async.impl.ioc_helpers.t27429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27431,meta27430__$1){var self__ = this;
var _27431__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t27429(self__.f,self__.fn_handler,meta27430__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t27429 = (function __GT_t27429(f__$1,fn_handler__$1,meta27430){return (new cljs.core.async.impl.ioc_helpers.t27429(f__$1,fn_handler__$1,meta27430));
});
}
return (new cljs.core.async.impl.ioc_helpers.t27429(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e27433){if((e27433 instanceof Object))
{var ex = e27433;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{if(cljs.core.constant$keyword$261)
{throw e27433;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_27436_27438 = state;(statearr_27436_27438[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_27436_27438[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_27437_27439 = state;(statearr_27437_27439[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_27437_27439[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$272;
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (){var statearr_27442_27444 = state;(statearr_27442_27444[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_27442_27444[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_27443_27445 = state;(statearr_27443_27445[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_27443_27445[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$272;
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__27446){var map__27451 = p__27446;var map__27451__$1 = ((cljs.core.seq_QMARK_(map__27451))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27451):map__27451);var opts = map__27451__$1;var statearr_27452_27455 = state;(statearr_27452_27455[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts((function (val){var statearr_27453_27456 = state;(statearr_27453_27456[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_27454_27457 = state;(statearr_27454_27457[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
return cljs.core.constant$keyword$272;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__27446 = null;if (arguments.length > 3) {
  p__27446 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__27446);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__27458){
var state = cljs.core.first(arglist__27458);
arglist__27458 = cljs.core.next(arglist__27458);
var cont_block = cljs.core.first(arglist__27458);
arglist__27458 = cljs.core.next(arglist__27458);
var ports = cljs.core.first(arglist__27458);
var p__27446 = cljs.core.rest(arglist__27458);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__27446);
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3988__auto__,k27460,else__3989__auto__){var self__ = this;
var this__3988__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k27460,cljs.core.constant$keyword$273))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k27460,cljs.core.constant$keyword$274))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_(k27460,cljs.core.constant$keyword$275))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k27460,cljs.core.constant$keyword$276))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k27460,cljs.core.constant$keyword$277))
{return self__.prev;
} else
{if(cljs.core.constant$keyword$261)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27460,else__3989__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3993__auto__,k__3994__auto__,G__27459){var self__ = this;
var this__3993__auto____$1 = this;var pred__27462 = cljs.core.keyword_identical_QMARK_;var expr__27463 = k__3994__auto__;if(cljs.core.truth_((pred__27462.cljs$core$IFn$_invoke$arity$2 ? pred__27462.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$273,expr__27463) : pred__27462.call(null,cljs.core.constant$keyword$273,expr__27463))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__27459,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__27462.cljs$core$IFn$_invoke$arity$2 ? pred__27462.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$274,expr__27463) : pred__27462.call(null,cljs.core.constant$keyword$274,expr__27463))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__27459,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__27462.cljs$core$IFn$_invoke$arity$2 ? pred__27462.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$275,expr__27463) : pred__27462.call(null,cljs.core.constant$keyword$275,expr__27463))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__27459,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__27462.cljs$core$IFn$_invoke$arity$2 ? pred__27462.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$276,expr__27463) : pred__27462.call(null,cljs.core.constant$keyword$276,expr__27463))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__27459,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__27462.cljs$core$IFn$_invoke$arity$2 ? pred__27462.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$277,expr__27463) : pred__27462.call(null,cljs.core.constant$keyword$277,expr__27463))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__27459,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__3994__auto__,G__27459),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4000__auto__,writer__4001__auto__,opts__4002__auto__){var self__ = this;
var this__4000__auto____$1 = this;var pr_pair__4003__auto__ = (function (keyval__4004__auto__){return cljs.core.pr_sequential_writer(writer__4001__auto__,cljs.core.pr_writer,""," ","",opts__4002__auto__,keyval__4004__auto__);
});return cljs.core.pr_sequential_writer(writer__4001__auto__,pr_pair__4003__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4002__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$273,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$274,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$275,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$276,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$277,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3991__auto__,entry__3992__auto__){var self__ = this;
var this__3991__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__3992__auto__))
{return cljs.core._assoc(this__3991__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__3992__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__3992__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__3991__auto____$1,entry__3992__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__3998__auto__){var self__ = this;
var this__3998__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$273,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$274,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$275,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$276,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$277,self__.prev],null))], null),self__.__extmap));
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3985__auto__,G__27459){var self__ = this;
var this__3985__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__27459,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3984__auto__){var self__ = this;
var this__3984__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3995__auto__,k__3996__auto__){var self__ = this;
var this__3995__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$275,null,cljs.core.constant$keyword$273,null,cljs.core.constant$keyword$274,null,cljs.core.constant$keyword$276,null,cljs.core.constant$keyword$277,null], null), null),k__3996__auto__))
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
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__27461){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__27461),cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__27461),cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__27461),cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(G__27461),cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(G__27461),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27461,cljs.core.constant$keyword$273,cljs.core.array_seq([cljs.core.constant$keyword$274,cljs.core.constant$keyword$275,cljs.core.constant$keyword$276,cljs.core.constant$keyword$277], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_27466 = state;(statearr_27466[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_27466;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__3394__auto__ = exception;if(cljs.core.truth_(and__3394__auto__))
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
{var statearr_27472 = state;(statearr_27472[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_27472[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_27472[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_27472[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$273,null,cljs.core.array_seq([cljs.core.constant$keyword$274,null], 0)));
return statearr_27472;
} else
{if(cljs.core.truth_((function (){var and__3394__auto__ = exception;if(cljs.core.truth_(and__3394__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__3394__auto__;
}
})()))
{var statearr_27473_27477 = state;(statearr_27473_27477[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__27478 = state;
state = G__27478;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3394__auto__ = exception;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not(catch_block);if(and__3394__auto____$1)
{return cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var statearr_27474 = state;(statearr_27474[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_27474[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$275,null));
return statearr_27474;
} else
{if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not(exception);if(and__3394__auto__)
{return cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3394__auto__;
}
})()))
{var statearr_27475 = state;(statearr_27475[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_27475[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$275,null));
return statearr_27475;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_27476 = state;(statearr_27476[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_27476[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_27476;
} else
{if(cljs.core.constant$keyword$261)
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
