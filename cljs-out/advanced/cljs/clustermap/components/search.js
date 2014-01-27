// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.search');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('sablono.core');
goog.require('clustermap.om');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('jayq.core');
goog.require('om.dom');
goog.require('clustermap.om');
goog.require('cljs.core.async');
goog.require('jayq.core');
clustermap.components.search.ESCAPE_KEY = 27;
clustermap.components.search.ENTER_KEY = 13;
clustermap.components.search.LEFT_ARROW = 37;
clustermap.components.search.UP_ARROW = 38;
clustermap.components.search.RIGHT_ARROW = 39;
clustermap.components.search.DOWN_ARROW = 40;
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__21291){var map__21296 = p__21291;var map__21296__$1 = ((cljs.core.seq_QMARK_(map__21296))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21296):map__21296);var opts = map__21296__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21296__$1,cljs.core.constant$keyword$194);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21296__$1,cljs.core.constant$keyword$266);if(typeof clustermap.components.search.t21297 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t21297 = (function (comm,type,opts,map__21296,p__21291,owner,search_result,search_result_link,meta21298){
this.comm = comm;
this.type = type;
this.opts = opts;
this.map__21296 = map__21296;
this.p__21291 = p__21291;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta21298 = meta21298;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t21297.cljs$lang$type = true;
clustermap.components.search.t21297.cljs$lang$ctorStr = "clustermap.components.search/t21297";
clustermap.components.search.t21297.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t21297");
});
clustermap.components.search.t21297.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t21297.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(cljs.core.constant$keyword$210.cljs$core$IFn$_invoke$arity$1(state))?"selected":null)},React.DOM.a({"onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,cljs.core.deref(self__.search_result)], null)], null));
})},sablono.interpreter.interpret((self__.search_result.cljs$core$IFn$_invoke$arity$1 ? self__.search_result.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$205) : self__.search_result.call(null,cljs.core.constant$keyword$205))),(cljs.core.truth_(cljs.core.constant$keyword$210.cljs$core$IFn$_invoke$arity$1(state))?"*":null)));
});
clustermap.components.search.t21297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21299){var self__ = this;
var _21299__$1 = this;return self__.meta21298;
});
clustermap.components.search.t21297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21299,meta21298__$1){var self__ = this;
var _21299__$1 = this;return (new clustermap.components.search.t21297(self__.comm,self__.type,self__.opts,self__.map__21296,self__.p__21291,self__.owner,self__.search_result,self__.search_result_link,meta21298__$1));
});
clustermap.components.search.__GT_t21297 = (function __GT_t21297(comm__$1,type__$1,opts__$1,map__21296__$2,p__21291__$1,owner__$1,search_result__$1,search_result_link__$1,meta21298){return (new clustermap.components.search.t21297(comm__$1,type__$1,opts__$1,map__21296__$2,p__21291__$1,owner__$1,search_result__$1,search_result_link__$1,meta21298));
});
}
return (new clustermap.components.search.t21297(comm,type,opts,map__21296__$1,p__21291,owner,search_result,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__21300,n){var map__21302 = p__21300;var map__21302__$1 = ((cljs.core.seq_QMARK_(map__21302))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21302):map__21302);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21302__$1,cljs.core.constant$keyword$267);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21302__$1,cljs.core.constant$keyword$268);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21302__$1,cljs.core.constant$keyword$239);var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3406__auto__ = portfolio_companies;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3406__auto__ = investor_companies;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();if((n < cljs.core.count(cons)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$231,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){console.log(om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$269));
var pred__21309 = cljs.core._EQ__EQ_;var expr__21310 = e.keyCode;if(cljs.core.truth_((pred__21309.cljs$core$IFn$_invoke$arity$2 ? pred__21309.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__21310) : pred__21309.call(null,clustermap.components.search.ESCAPE_KEY,expr__21310))))
{var G__21312 = om.core.get_node(owner,"search-component");var G__21312__$1 = (((G__21312 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__21312));var G__21312__$2 = (((G__21312__$1 == null))?null:G__21312__$1.toggle());return G__21312__$2;
} else
{if(cljs.core.truth_((pred__21309.cljs$core$IFn$_invoke$arity$2 ? pred__21309.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__21310) : pred__21309.call(null,clustermap.components.search.ENTER_KEY,expr__21310))))
{var vec__21313 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$269);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21313,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21313,1,null);var G__21314_21315 = om.core.get_node(owner,"search-component");var G__21314_21316__$1 = (((G__21314_21315 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__21314_21315));var G__21314_21317__$2 = (((G__21314_21316__$1 == null))?null:G__21314_21316__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$211,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,res], null)], null));
} else
{if(cljs.core.truth_((pred__21309.cljs$core$IFn$_invoke$arity$2 ? pred__21309.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__21310) : pred__21309.call(null,clustermap.components.search.UP_ARROW,expr__21310))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$269,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$269);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__21309.cljs$core$IFn$_invoke$arity$2 ? pred__21309.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__21310) : pred__21309.call(null,clustermap.components.search.DOWN_ARROW,expr__21310))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$269,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$269);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() + 1));
} else
{return console.log(e.keyCode);
}
}
}
}
});
clustermap.components.search.search_component = (function search_component(search_results,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$266);var map__21346 = search_results;var map__21346__$1 = ((cljs.core.seq_QMARK_(map__21346))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21346):map__21346);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21346__$1,cljs.core.constant$keyword$267);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21346__$1,cljs.core.constant$keyword$268);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21346__$1,cljs.core.constant$keyword$239);if(typeof clustermap.components.search.t21347 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t21347 = (function (constituencies,portfolio_companies,investor_companies,map__21346,comm,owner,search_results,search_component,meta21348){
this.constituencies = constituencies;
this.portfolio_companies = portfolio_companies;
this.investor_companies = investor_companies;
this.map__21346 = map__21346;
this.comm = comm;
this.owner = owner;
this.search_results = search_results;
this.search_component = search_component;
this.meta21348 = meta21348;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t21347.cljs$lang$type = true;
clustermap.components.search.t21347.cljs$lang$ctorStr = "clustermap.components.search/t21347";
clustermap.components.search.t21347.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t21347");
});
clustermap.components.search.t21347.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t21347.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
}), "id": "search", "ref": "search-component"},React.DOM.h2(null,"Search"),React.DOM.div(null,(om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1({"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$270,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"}) : om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$270,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"})),React.DOM.button({"onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$270,""], null));
return om.core.get_node(self__.owner,"search-field").value = "";
}), "type": "reset"},"\u00D7")),(cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3406__auto__ = cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$269,selected_idx):null);return React.DOM.div({"className": "search-results"},cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{},cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies")], null),(function (){var iter__4117__auto__ = (function iter__21350(s__21351){return (new cljs.core.LazySeq(null,(function (){var s__21351__$1 = s__21351;while(true){
var temp__4092__auto__ = cljs.core.seq(s__21351__$1);if(temp__4092__auto__)
{var s__21351__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__21351__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__21351__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__21353 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__21352 = 0;while(true){
if((i__21352 < size__4116__auto__))
{var vec__21356 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__21352);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21356,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21356,1,null);cljs.core.chunk_append(b__21353,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$223,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$266,self__.comm,cljs.core.constant$keyword$194,cljs.core.constant$keyword$231], null),cljs.core.constant$keyword$219,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$210,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)));
{
var G__21374 = (i__21352 + 1);
i__21352 = G__21374;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__21353),iter__21350(cljs.core.chunk_rest(s__21351__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__21353),null);
}
} else
{var vec__21357 = cljs.core.first(s__21351__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21357,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21357,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$223,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$266,self__.comm,cljs.core.constant$keyword$194,cljs.core.constant$keyword$231], null),cljs.core.constant$keyword$219,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$210,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)),iter__21350(cljs.core.rest(s__21351__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies")], null),(function (){var iter__4117__auto__ = (function iter__21358(s__21359){return (new cljs.core.LazySeq(null,(function (){var s__21359__$1 = s__21359;while(true){
var temp__4092__auto__ = cljs.core.seq(s__21359__$1);if(temp__4092__auto__)
{var s__21359__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__21359__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__21359__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__21361 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__21360 = 0;while(true){
if((i__21360 < size__4116__auto__))
{var vec__21364 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__21360);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21364,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21364,1,null);cljs.core.chunk_append(b__21361,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$223,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$266,self__.comm,cljs.core.constant$keyword$194,cljs.core.constant$keyword$229], null),cljs.core.constant$keyword$219,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$210,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)));
{
var G__21375 = (i__21360 + 1);
i__21360 = G__21375;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__21361),iter__21358(cljs.core.chunk_rest(s__21359__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__21361),null);
}
} else
{var vec__21365 = cljs.core.first(s__21359__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21365,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21365,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$223,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$266,self__.comm,cljs.core.constant$keyword$194,cljs.core.constant$keyword$229], null),cljs.core.constant$keyword$219,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$210,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)),iter__21358(cljs.core.rest(s__21359__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_pcs);
})()):null),cljs.core.array_seq([(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors")], null),(function (){var iter__4117__auto__ = (function iter__21366(s__21367){return (new cljs.core.LazySeq(null,(function (){var s__21367__$1 = s__21367;while(true){
var temp__4092__auto__ = cljs.core.seq(s__21367__$1);if(temp__4092__auto__)
{var s__21367__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__21367__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__21367__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__21369 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__21368 = 0;while(true){
if((i__21368 < size__4116__auto__))
{var vec__21372 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__21368);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21372,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21372,1,null);cljs.core.chunk_append(b__21369,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$223,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$266,self__.comm,cljs.core.constant$keyword$194,cljs.core.constant$keyword$230], null),cljs.core.constant$keyword$219,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$210,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)));
{
var G__21376 = (i__21368 + 1);
i__21368 = G__21376;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__21369),iter__21366(cljs.core.chunk_rest(s__21367__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__21369),null);
}
} else
{var vec__21373 = cljs.core.first(s__21367__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21373,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21373,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$223,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$266,self__.comm,cljs.core.constant$keyword$194,cljs.core.constant$keyword$230], null),cljs.core.constant$keyword$219,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$210,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)),iter__21366(cljs.core.rest(s__21367__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_invs);
})()):null)], 0))));
})():null));
});
clustermap.components.search.t21347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21349){var self__ = this;
var _21349__$1 = this;return self__.meta21348;
});
clustermap.components.search.t21347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21349,meta21348__$1){var self__ = this;
var _21349__$1 = this;return (new clustermap.components.search.t21347(self__.constituencies,self__.portfolio_companies,self__.investor_companies,self__.map__21346,self__.comm,self__.owner,self__.search_results,self__.search_component,meta21348__$1));
});
clustermap.components.search.__GT_t21347 = (function __GT_t21347(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__21346__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta21348){return (new clustermap.components.search.t21347(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__21346__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta21348));
});
}
return (new clustermap.components.search.t21347(constituencies,portfolio_companies,investor_companies,map__21346__$1,comm,owner,search_results,search_component,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$266,comm], null),clustermap.om.burrow(clustermap.components.search.search_component,cljs.core.constant$keyword$271),document.getElementById(elem_id));
});
