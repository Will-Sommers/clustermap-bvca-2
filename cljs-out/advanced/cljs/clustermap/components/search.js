// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.search');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.routes');
goog.require('sablono.core');
goog.require('clustermap.routes');
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
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__22673){var map__22679 = p__22673;var map__22679__$1 = ((cljs.core.seq_QMARK_(map__22679))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22679):map__22679);var opts = map__22679__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22679__$1,cljs.core.constant$keyword$301);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22679__$1,cljs.core.constant$keyword$262);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22679__$1,cljs.core.constant$keyword$298);if(typeof clustermap.components.search.t22680 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22680 = (function (comm,type,path_fn,opts,map__22679,p__22673,owner,search_result,search_result_link,meta22681){
this.comm = comm;
this.type = type;
this.path_fn = path_fn;
this.opts = opts;
this.map__22679 = map__22679;
this.p__22673 = p__22673;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta22681 = meta22681;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22680.cljs$lang$type = true;
clustermap.components.search.t22680.cljs$lang$ctorStr = "clustermap.components.search/t22680";
clustermap.components.search.t22680.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22680");
});
clustermap.components.search.t22680.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22680.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(state))?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node(self__.owner,"link");var G__22683 = l;var G__22683__$1 = (((G__22683 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22683));var G__22683__$2 = (((G__22683__$1 == null))?null:G__22683__$1.parents(".search-component"));var G__22683__$3 = (((G__22683__$2 == null))?null:G__22683__$2.toggle());return G__22683__$3;
})},sablono.interpreter.interpret((self__.search_result.cljs$core$IFn$_invoke$arity$1 ? self__.search_result.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$272) : self__.search_result.call(null,cljs.core.constant$keyword$272))),(cljs.core.truth_(cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(state))?"*":null)));
});
clustermap.components.search.t22680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22682){var self__ = this;
var _22682__$1 = this;return self__.meta22681;
});
clustermap.components.search.t22680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22682,meta22681__$1){var self__ = this;
var _22682__$1 = this;return (new clustermap.components.search.t22680(self__.comm,self__.type,self__.path_fn,self__.opts,self__.map__22679,self__.p__22673,self__.owner,self__.search_result,self__.search_result_link,meta22681__$1));
});
clustermap.components.search.__GT_t22680 = (function __GT_t22680(comm__$1,type__$1,path_fn__$1,opts__$1,map__22679__$2,p__22673__$1,owner__$1,search_result__$1,search_result_link__$1,meta22681){return (new clustermap.components.search.t22680(comm__$1,type__$1,path_fn__$1,opts__$1,map__22679__$2,p__22673__$1,owner__$1,search_result__$1,search_result_link__$1,meta22681));
});
}
return (new clustermap.components.search.t22680(comm,type,path_fn,opts,map__22679__$1,p__22673,owner,search_result,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__22684,n){var map__22686 = p__22684;var map__22686__$1 = ((cljs.core.seq_QMARK_(map__22686))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22686):map__22686);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22686__$1,cljs.core.constant$keyword$304);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22686__$1,cljs.core.constant$keyword$384);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22686__$1,cljs.core.constant$keyword$321);var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$297,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$295,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$296,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__22693 = cljs.core._EQ__EQ_;var expr__22694 = e.keyCode;if(cljs.core.truth_((pred__22693.cljs$core$IFn$_invoke$arity$2 ? pred__22693.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__22694) : pred__22693.call(null,clustermap.components.search.ESCAPE_KEY,expr__22694))))
{var G__22696 = om.core.get_node(owner,"search-component");var G__22696__$1 = (((G__22696 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22696));var G__22696__$2 = (((G__22696__$1 == null))?null:G__22696__$1.toggle());return G__22696__$2;
} else
{if(cljs.core.truth_((pred__22693.cljs$core$IFn$_invoke$arity$2 ? pred__22693.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__22694) : pred__22693.call(null,clustermap.components.search.ENTER_KEY,expr__22694))))
{var vec__22697 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$385);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22697,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22697,1,null);var G__22698_22699 = om.core.get_node(owner,"search-component");var G__22698_22700__$1 = (((G__22698_22699 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22698_22699));var G__22698_22701__$2 = (((G__22698_22700__$1 == null))?null:G__22698_22700__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$278,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,res], null)], null));
} else
{if(cljs.core.truth_((pred__22693.cljs$core$IFn$_invoke$arity$2 ? pred__22693.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__22694) : pred__22693.call(null,clustermap.components.search.UP_ARROW,expr__22694))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$385,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$385);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__22693.cljs$core$IFn$_invoke$arity$2 ? pred__22693.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__22694) : pred__22693.call(null,clustermap.components.search.DOWN_ARROW,expr__22694))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$385,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$385);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
clustermap.components.search.search_component = (function search_component(search_results,owner){var map__22731 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__22731__$1 = ((cljs.core.seq_QMARK_(map__22731))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22731):map__22731);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22731__$1,cljs.core.constant$keyword$301);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22731__$1,cljs.core.constant$keyword$298);var map__22732 = search_results;var map__22732__$1 = ((cljs.core.seq_QMARK_(map__22732))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22732):map__22732);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22732__$1,cljs.core.constant$keyword$304);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22732__$1,cljs.core.constant$keyword$384);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22732__$1,cljs.core.constant$keyword$321);if(typeof clustermap.components.search.t22733 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22733 = (function (investor_companies,path_fn,portfolio_companies,search_component,comm,map__22732,owner,map__22731,constituencies,search_results,meta22734){
this.investor_companies = investor_companies;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.comm = comm;
this.map__22732 = map__22732;
this.owner = owner;
this.map__22731 = map__22731;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta22734 = meta22734;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22733.cljs$lang$type = true;
clustermap.components.search.t22733.cljs$lang$ctorStr = "clustermap.components.search/t22733";
clustermap.components.search.t22733.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22733");
});
clustermap.components.search.t22733.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22733.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
}), "id": "search", "className": "search-component", "ref": "search-component"},React.DOM.div({"className": "tbl"},React.DOM.div({"style": {"width": "100%"}, "className": "tbl-cell"},(om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1({"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$386,e.target.value], null));
}), "placeholder": "Search", "type": "text", "ref": "search-field"}) : om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$386,e.target.value], null));
}), "placeholder": "Search", "type": "text", "ref": "search-field"}))),React.DOM.div({"style": {"width": "34"}, "className": "tbl-cell"},React.DOM.button({"onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$386,""], null));
return om.core.get_node(self__.owner,"search-field").value = "";
}), "type": "reset"},"\u00D7")),React.DOM.div({"style": {"width": "136"}, "className": "tbl-cell"},React.DOM.button({"type": "reset", "className": "btn-reset"},"Reset to UK wide"))),(cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3406__auto__ = cljs.core.constant$keyword$385.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$385.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$385,selected_idx):null);return React.DOM.div({"className": "search-results"},cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{},cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies")], null),(function (){var iter__4117__auto__ = (function iter__22736(s__22737){return (new cljs.core.LazySeq(null,(function (){var s__22737__$1 = s__22737;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22737__$1);if(temp__4092__auto__)
{var s__22737__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22737__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22737__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22739 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22738 = 0;while(true){
if((i__22738 < size__4116__auto__))
{var vec__22742 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22738);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22742,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22742,1,null);cljs.core.chunk_append(b__22739,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$289,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$298,self__.comm,cljs.core.constant$keyword$301,self__.path_fn,cljs.core.constant$keyword$262,cljs.core.constant$keyword$297], null),cljs.core.constant$keyword$285,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$277,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$290,((function (i__22738,vec__22742,idx,con,c__4115__auto__,size__4116__auto__,b__22739,s__22737__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$387,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$381))].join(''));
});})(i__22738,vec__22742,idx,con,c__4115__auto__,size__4116__auto__,b__22739,s__22737__$2,temp__4092__auto__))
,cljs.core.constant$keyword$288,cljs.core.constant$keyword$387], null)));
{
var G__22760 = (i__22738 + 1);
i__22738 = G__22760;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22739),iter__22736(cljs.core.chunk_rest(s__22737__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22739),null);
}
} else
{var vec__22743 = cljs.core.first(s__22737__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22743,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22743,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$289,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$298,self__.comm,cljs.core.constant$keyword$301,self__.path_fn,cljs.core.constant$keyword$262,cljs.core.constant$keyword$297], null),cljs.core.constant$keyword$285,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$277,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$290,((function (vec__22743,idx,con,s__22737__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$387,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$381))].join(''));
});})(vec__22743,idx,con,s__22737__$2,temp__4092__auto__))
,cljs.core.constant$keyword$288,cljs.core.constant$keyword$387], null)),iter__22736(cljs.core.rest(s__22737__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies")], null),(function (){var iter__4117__auto__ = (function iter__22744(s__22745){return (new cljs.core.LazySeq(null,(function (){var s__22745__$1 = s__22745;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22745__$1);if(temp__4092__auto__)
{var s__22745__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22745__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22745__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22747 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22746 = 0;while(true){
if((i__22746 < size__4116__auto__))
{var vec__22750 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22746);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22750,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22750,1,null);cljs.core.chunk_append(b__22747,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$289,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$298,self__.comm,cljs.core.constant$keyword$301,self__.path_fn,cljs.core.constant$keyword$262,cljs.core.constant$keyword$295], null),cljs.core.constant$keyword$285,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$277,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$290,((function (i__22746,vec__22750,idx,pc,c__4115__auto__,size__4116__auto__,b__22747,s__22745__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$387,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$379))].join(''));
});})(i__22746,vec__22750,idx,pc,c__4115__auto__,size__4116__auto__,b__22747,s__22745__$2,temp__4092__auto__))
,cljs.core.constant$keyword$288,cljs.core.constant$keyword$387], null)));
{
var G__22761 = (i__22746 + 1);
i__22746 = G__22761;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22747),iter__22744(cljs.core.chunk_rest(s__22745__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22747),null);
}
} else
{var vec__22751 = cljs.core.first(s__22745__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22751,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22751,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$289,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$298,self__.comm,cljs.core.constant$keyword$301,self__.path_fn,cljs.core.constant$keyword$262,cljs.core.constant$keyword$295], null),cljs.core.constant$keyword$285,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$277,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$290,((function (vec__22751,idx,pc,s__22745__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$387,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$379))].join(''));
});})(vec__22751,idx,pc,s__22745__$2,temp__4092__auto__))
,cljs.core.constant$keyword$288,cljs.core.constant$keyword$387], null)),iter__22744(cljs.core.rest(s__22745__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_pcs);
})()):null),cljs.core.array_seq([(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors")], null),(function (){var iter__4117__auto__ = (function iter__22752(s__22753){return (new cljs.core.LazySeq(null,(function (){var s__22753__$1 = s__22753;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22753__$1);if(temp__4092__auto__)
{var s__22753__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22753__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22753__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22755 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22754 = 0;while(true){
if((i__22754 < size__4116__auto__))
{var vec__22758 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22754);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22758,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22758,1,null);cljs.core.chunk_append(b__22755,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$289,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$298,self__.comm,cljs.core.constant$keyword$301,self__.path_fn,cljs.core.constant$keyword$262,cljs.core.constant$keyword$296], null),cljs.core.constant$keyword$285,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$277,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$290,((function (i__22754,vec__22758,idx,inv,c__4115__auto__,size__4116__auto__,b__22755,s__22753__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$387,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$380))].join(''));
});})(i__22754,vec__22758,idx,inv,c__4115__auto__,size__4116__auto__,b__22755,s__22753__$2,temp__4092__auto__))
,cljs.core.constant$keyword$288,cljs.core.constant$keyword$387], null)));
{
var G__22762 = (i__22754 + 1);
i__22754 = G__22762;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22755),iter__22752(cljs.core.chunk_rest(s__22753__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22755),null);
}
} else
{var vec__22759 = cljs.core.first(s__22753__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22759,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22759,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$289,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$298,self__.comm,cljs.core.constant$keyword$301,self__.path_fn,cljs.core.constant$keyword$262,cljs.core.constant$keyword$296], null),cljs.core.constant$keyword$285,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$277,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$290,((function (vec__22759,idx,inv,s__22753__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$387,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$380))].join(''));
});})(vec__22759,idx,inv,s__22753__$2,temp__4092__auto__))
,cljs.core.constant$keyword$288,cljs.core.constant$keyword$387], null)),iter__22752(cljs.core.rest(s__22753__$2)));
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
clustermap.components.search.t22733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22735){var self__ = this;
var _22735__$1 = this;return self__.meta22734;
});
clustermap.components.search.t22733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22735,meta22734__$1){var self__ = this;
var _22735__$1 = this;return (new clustermap.components.search.t22733(self__.investor_companies,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.comm,self__.map__22732,self__.owner,self__.map__22731,self__.constituencies,self__.search_results,meta22734__$1));
});
clustermap.components.search.__GT_t22733 = (function __GT_t22733(investor_companies__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,map__22732__$2,owner__$1,map__22731__$2,constituencies__$1,search_results__$1,meta22734){return (new clustermap.components.search.t22733(investor_companies__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,map__22732__$2,owner__$1,map__22731__$2,constituencies__$1,search_results__$1,meta22734));
});
}
return (new clustermap.components.search.t22733(investor_companies,path_fn,portfolio_companies,search_component,comm,map__22732__$1,owner,map__22731__$1,constituencies,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.om.burrow(clustermap.components.search.search_component,cljs.core.constant$keyword$388),document.getElementById(elem_id));
});
