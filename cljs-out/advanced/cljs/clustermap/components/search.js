// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.search');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.routes');
goog.require('sablono.core');
goog.require('clustermap.routes');
goog.require('sablono.core');
goog.require('clustermap.om');
goog.require('clustermap.model');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.model');
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
clustermap.components.search.search_result_link = (function search_result_link(p__34573,owner,p__34574){var map__34583 = p__34573;var map__34583__$1 = ((cljs.core.seq_QMARK_(map__34583))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34583):map__34583);var search_result = map__34583__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34583__$1,cljs.core.constant$keyword$584);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34583__$1,cljs.core.constant$keyword$594);var map__34584 = p__34574;var map__34584__$1 = ((cljs.core.seq_QMARK_(map__34584))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34584):map__34584);var opts = map__34584__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34584__$1,cljs.core.constant$keyword$632);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34584__$1,cljs.core.constant$keyword$633);if(typeof clustermap.components.search.t34585 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t34585 = (function (opts,path_fn,name,comm,map__34584,search_result,owner,map__34583,p__34574,p__34573,type,search_result_link,meta34586){
this.opts = opts;
this.path_fn = path_fn;
this.name = name;
this.comm = comm;
this.map__34584 = map__34584;
this.search_result = search_result;
this.owner = owner;
this.map__34583 = map__34583;
this.p__34574 = p__34574;
this.p__34573 = p__34573;
this.type = type;
this.search_result_link = search_result_link;
this.meta34586 = meta34586;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t34585.cljs$lang$type = true;
clustermap.components.search.t34585.cljs$lang$ctorStr = "clustermap.components.search/t34585";
clustermap.components.search.t34585.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.search/t34585");
});
clustermap.components.search.t34585.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t34585.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__34588){var self__ = this;
var map__34589 = p__34588;var map__34589__$1 = ((cljs.core.seq_QMARK_(map__34589))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34589):map__34589);var state = map__34589__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34589__$1,cljs.core.constant$keyword$599);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__34590 = l;var G__34590__$1 = (((G__34590 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__34590));var G__34590__$2 = (((G__34590__$1 == null))?null:G__34590__$1.parents(".search-component"));var G__34590__$3 = (((G__34590__$2 == null))?null:G__34590__$2.toggle());return G__34590__$3;
})},sablono.interpreter.interpret(self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t34585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34587){var self__ = this;
var _34587__$1 = this;return self__.meta34586;
});
clustermap.components.search.t34585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34587,meta34586__$1){var self__ = this;
var _34587__$1 = this;return (new clustermap.components.search.t34585(self__.opts,self__.path_fn,self__.name,self__.comm,self__.map__34584,self__.search_result,self__.owner,self__.map__34583,self__.p__34574,self__.p__34573,self__.type,self__.search_result_link,meta34586__$1));
});
clustermap.components.search.__GT_t34585 = (function __GT_t34585(opts__$1,path_fn__$1,name__$1,comm__$1,map__34584__$2,search_result__$1,owner__$1,map__34583__$2,p__34574__$1,p__34573__$1,type__$1,search_result_link__$1,meta34586){return (new clustermap.components.search.t34585(opts__$1,path_fn__$1,name__$1,comm__$1,map__34584__$2,search_result__$1,owner__$1,map__34583__$2,p__34574__$1,p__34573__$1,type__$1,search_result_link__$1,meta34586));
});
}
return (new clustermap.components.search.t34585(opts,path_fn,name,comm,map__34584__$1,search_result,owner,map__34583__$1,p__34574,p__34573,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__34591,n){var map__34593 = p__34591;var map__34593__$1 = ((cljs.core.seq_QMARK_(map__34593))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34593):map__34593);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34593__$1,cljs.core.constant$keyword$685);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34593__$1,cljs.core.constant$keyword$743);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34593__$1,cljs.core.constant$keyword$675);var cons = (function (){var or__3441__auto__ = constituencies;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3441__auto__ = portfolio_companies;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3441__auto__ = investor_companies;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();if((n < cljs.core.count(cons)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$631,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$629,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$630,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__34600 = cljs.core._EQ__EQ_;var expr__34601 = e.keyCode;if(cljs.core.truth_((pred__34600.cljs$core$IFn$_invoke$arity$2 ? pred__34600.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__34601) : pred__34600.call(null,clustermap.components.search.ESCAPE_KEY,expr__34601))))
{var G__34603 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__34603__$1 = (((G__34603 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__34603));var G__34603__$2 = (((G__34603__$1 == null))?null:G__34603__$1.toggle());return G__34603__$2;
} else
{if(cljs.core.truth_((pred__34600.cljs$core$IFn$_invoke$arity$2 ? pred__34600.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__34601) : pred__34600.call(null,clustermap.components.search.ENTER_KEY,expr__34601))))
{var vec__34604 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3441__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$744);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34604,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34604,1,null);var G__34605_34606 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__34605_34607__$1 = (((G__34605_34606 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__34605_34606));var G__34605_34608__$2 = (((G__34605_34607__$1 == null))?null:G__34605_34607__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$600,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__34600.cljs$core$IFn$_invoke$arity$2 ? pred__34600.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__34601) : pred__34600.call(null,clustermap.components.search.UP_ARROW,expr__34601))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$744,((function (){var or__3441__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$744);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__34600.cljs$core$IFn$_invoke$arity$2 ? pred__34600.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__34601) : pred__34600.call(null,clustermap.components.search.DOWN_ARROW,expr__34601))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$744,((function (){var or__3441__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$744);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})() + 1));
} else
{return null;
}
}
}
}
});
clustermap.components.search.search_component = (function search_component(p__34609,owner){var map__34641 = p__34609;var map__34641__$1 = ((cljs.core.seq_QMARK_(map__34641))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34641):map__34641);var map__34642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34641__$1,cljs.core.constant$keyword$640);var map__34642__$1 = ((cljs.core.seq_QMARK_(map__34642))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34642):map__34642);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34642__$1,cljs.core.constant$keyword$584);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34642__$1,cljs.core.constant$keyword$545);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34641__$1,cljs.core.constant$keyword$745);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34641__$1,cljs.core.constant$keyword$746);var map__34643 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__34643__$1 = ((cljs.core.seq_QMARK_(map__34643))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34643):map__34643);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34643__$1,cljs.core.constant$keyword$632);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34643__$1,cljs.core.constant$keyword$633);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__34644 = search_results;var map__34644__$1 = ((cljs.core.seq_QMARK_(map__34644))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34644):map__34644);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34644__$1,cljs.core.constant$keyword$685);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34644__$1,cljs.core.constant$keyword$743);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34644__$1,cljs.core.constant$keyword$675);if(typeof clustermap.components.search.t34645 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t34645 = (function (map__34641,map__34642,investor_companies,selection_value,path_fn,portfolio_companies,view,search_component,map__34644,map__34643,comm,selection_type,owner,constituencies,p__34609,search_results,meta34646){
this.map__34641 = map__34641;
this.map__34642 = map__34642;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.view = view;
this.search_component = search_component;
this.map__34644 = map__34644;
this.map__34643 = map__34643;
this.comm = comm;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.p__34609 = p__34609;
this.search_results = search_results;
this.meta34646 = meta34646;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t34645.cljs$lang$type = true;
clustermap.components.search.t34645.cljs$lang$ctorStr = "clustermap.components.search/t34645";
clustermap.components.search.t34645.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.search/t34645");
});
clustermap.components.search.t34645.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t34645.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
})},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$747,e.target.value], null));
})}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$747,e.target.value], null));
})}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$747,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
})},"\u00D7"))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3441__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3441__auto____$1))
{return or__3441__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3441__auto__ = cljs.core.constant$keyword$744.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$744.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$744,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$748,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$588,(cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$748,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$589,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4158__auto__ = (function iter__34648(s__34649){return (new cljs.core.LazySeq(null,(function (){var s__34649__$1 = s__34649;while(true){
var temp__4092__auto__ = cljs.core.seq(s__34649__$1);if(temp__4092__auto__)
{var s__34649__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__34649__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__34649__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__34651 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__34650 = 0;while(true){
if((i__34650 < size__4157__auto__))
{var vec__34654 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__34650);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34654,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34654,1,null);cljs.core.chunk_append(b__34651,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$614,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$621,((function (i__34650,vec__34654,idx,con,c__4156__auto__,size__4157__auto__,b__34651,s__34649__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$584,cljs.core.constant$keyword$631,cljs.core.array_seq([cljs.core.constant$keyword$580,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$655),cljs.core.constant$keyword$749,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$655))].join('')], 0));
});})(i__34650,vec__34654,idx,con,c__4156__auto__,size__4157__auto__,b__34651,s__34649__$2,temp__4092__auto__))
,cljs.core.constant$keyword$617,cljs.core.constant$keyword$749], null)));
{
var G__34672 = (i__34650 + 1);
i__34650 = G__34672;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__34651),iter__34648(cljs.core.chunk_rest(s__34649__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__34651),null);
}
} else
{var vec__34655 = cljs.core.first(s__34649__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34655,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34655,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$614,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$621,((function (vec__34655,idx,con,s__34649__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$584,cljs.core.constant$keyword$631,cljs.core.array_seq([cljs.core.constant$keyword$580,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$655),cljs.core.constant$keyword$749,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$655))].join('')], 0));
});})(vec__34655,idx,con,s__34649__$2,temp__4092__auto__))
,cljs.core.constant$keyword$617,cljs.core.constant$keyword$749], null)),iter__34648(cljs.core.rest(s__34649__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$748,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$589,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,"search-results-header"], null),"Investor-backed companies"], null)], null),(function (){var iter__4158__auto__ = (function iter__34656(s__34657){return (new cljs.core.LazySeq(null,(function (){var s__34657__$1 = s__34657;while(true){
var temp__4092__auto__ = cljs.core.seq(s__34657__$1);if(temp__4092__auto__)
{var s__34657__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__34657__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__34657__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__34659 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__34658 = 0;while(true){
if((i__34658 < size__4157__auto__))
{var vec__34662 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__34658);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34662,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34662,1,null);cljs.core.chunk_append(b__34659,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$614,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$621,((function (i__34658,vec__34662,idx,pc,c__4156__auto__,size__4157__auto__,b__34659,s__34657__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$584,cljs.core.constant$keyword$629,cljs.core.array_seq([cljs.core.constant$keyword$580,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$692),cljs.core.constant$keyword$749,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$692))].join('')], 0));
});})(i__34658,vec__34662,idx,pc,c__4156__auto__,size__4157__auto__,b__34659,s__34657__$2,temp__4092__auto__))
,cljs.core.constant$keyword$617,cljs.core.constant$keyword$749], null)));
{
var G__34673 = (i__34658 + 1);
i__34658 = G__34673;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__34659),iter__34656(cljs.core.chunk_rest(s__34657__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__34659),null);
}
} else
{var vec__34663 = cljs.core.first(s__34657__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34663,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34663,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$614,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$621,((function (vec__34663,idx,pc,s__34657__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$584,cljs.core.constant$keyword$629,cljs.core.array_seq([cljs.core.constant$keyword$580,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$692),cljs.core.constant$keyword$749,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$692))].join('')], 0));
});})(vec__34663,idx,pc,s__34657__$2,temp__4092__auto__))
,cljs.core.constant$keyword$617,cljs.core.constant$keyword$749], null)),iter__34656(cljs.core.rest(s__34657__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$748,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$589,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4158__auto__ = (function iter__34664(s__34665){return (new cljs.core.LazySeq(null,(function (){var s__34665__$1 = s__34665;while(true){
var temp__4092__auto__ = cljs.core.seq(s__34665__$1);if(temp__4092__auto__)
{var s__34665__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__34665__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__34665__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__34667 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__34666 = 0;while(true){
if((i__34666 < size__4157__auto__))
{var vec__34670 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__34666);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34670,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34670,1,null);cljs.core.chunk_append(b__34667,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$614,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$621,((function (i__34666,vec__34670,idx,inv,c__4156__auto__,size__4157__auto__,b__34667,s__34665__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$584,cljs.core.constant$keyword$630,cljs.core.array_seq([cljs.core.constant$keyword$580,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$653),cljs.core.constant$keyword$749,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$653))].join('')], 0));
});})(i__34666,vec__34670,idx,inv,c__4156__auto__,size__4157__auto__,b__34667,s__34665__$2,temp__4092__auto__))
,cljs.core.constant$keyword$617,cljs.core.constant$keyword$749], null)));
{
var G__34674 = (i__34666 + 1);
i__34666 = G__34674;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__34667),iter__34664(cljs.core.chunk_rest(s__34665__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__34667),null);
}
} else
{var vec__34671 = cljs.core.first(s__34665__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34671,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34671,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$614,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$621,((function (vec__34671,idx,inv,s__34665__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$584,cljs.core.constant$keyword$630,cljs.core.array_seq([cljs.core.constant$keyword$580,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$653),cljs.core.constant$keyword$749,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$653))].join('')], 0));
});})(vec__34671,idx,inv,s__34665__$2,temp__4092__auto__))
,cljs.core.constant$keyword$617,cljs.core.constant$keyword$749], null)),iter__34664(cljs.core.rest(s__34665__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(idx_invs);
})()):null)], null)], null);
})():null)));
});
clustermap.components.search.t34645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34647){var self__ = this;
var _34647__$1 = this;return self__.meta34646;
});
clustermap.components.search.t34645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34647,meta34646__$1){var self__ = this;
var _34647__$1 = this;return (new clustermap.components.search.t34645(self__.map__34641,self__.map__34642,self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.view,self__.search_component,self__.map__34644,self__.map__34643,self__.comm,self__.selection_type,self__.owner,self__.constituencies,self__.p__34609,self__.search_results,meta34646__$1));
});
clustermap.components.search.__GT_t34645 = (function __GT_t34645(map__34641__$2,map__34642__$2,investor_companies__$1,selection_value__$1,path_fn__$2,portfolio_companies__$1,view__$1,search_component__$1,map__34644__$2,map__34643__$2,comm__$1,selection_type__$1,owner__$1,constituencies__$1,p__34609__$1,search_results__$1,meta34646){return (new clustermap.components.search.t34645(map__34641__$2,map__34642__$2,investor_companies__$1,selection_value__$1,path_fn__$2,portfolio_companies__$1,view__$1,search_component__$1,map__34644__$2,map__34643__$2,comm__$1,selection_type__$1,owner__$1,constituencies__$1,p__34609__$1,search_results__$1,meta34646));
});
}
return (new clustermap.components.search.t34645(map__34641__$1,map__34642__$1,investor_companies,selection_value,path_fn__$1,portfolio_companies,view,search_component,map__34644__$1,map__34643__$1,comm,selection_type,owner,constituencies,p__34609,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$619,shared,cljs.core.constant$keyword$624,document.getElementById(elem_id)], null));
});
