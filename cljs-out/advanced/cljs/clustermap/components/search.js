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
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__21838){var map__21844 = p__21838;var map__21844__$1 = ((cljs.core.seq_QMARK_(map__21844))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21844):map__21844);var opts = map__21844__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21844__$1,cljs.core.constant$keyword$228);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21844__$1,cljs.core.constant$keyword$266);if(typeof clustermap.components.search.t21845 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t21845 = (function (comm,type,opts,map__21844,p__21838,owner,search_result,search_result_link,meta21846){
this.comm = comm;
this.type = type;
this.opts = opts;
this.map__21844 = map__21844;
this.p__21838 = p__21838;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta21846 = meta21846;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t21845.cljs$lang$type = true;
clustermap.components.search.t21845.cljs$lang$ctorStr = "clustermap.components.search/t21845";
clustermap.components.search.t21845.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t21845");
});
clustermap.components.search.t21845.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t21845.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(cljs.core.constant$keyword$244.cljs$core$IFn$_invoke$arity$1(state))?"selected":null)},React.DOM.a({"ref": "link", "onClick": (function (e){var l = om.core.get_node(self__.owner,"link");var G__21848_21849 = l;var G__21848_21850__$1 = (((G__21848_21849 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__21848_21849));var G__21848_21851__$2 = (((G__21848_21850__$1 == null))?null:G__21848_21850__$1.parents(".search-component"));var G__21848_21852__$3 = (((G__21848_21851__$2 == null))?null:G__21848_21851__$2.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,cljs.core.deref(self__.search_result)], null)], null));
})},sablono.interpreter.interpret((self__.search_result.cljs$core$IFn$_invoke$arity$1 ? self__.search_result.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$239) : self__.search_result.call(null,cljs.core.constant$keyword$239))),(cljs.core.truth_(cljs.core.constant$keyword$244.cljs$core$IFn$_invoke$arity$1(state))?"*":null)));
});
clustermap.components.search.t21845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21847){var self__ = this;
var _21847__$1 = this;return self__.meta21846;
});
clustermap.components.search.t21845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21847,meta21846__$1){var self__ = this;
var _21847__$1 = this;return (new clustermap.components.search.t21845(self__.comm,self__.type,self__.opts,self__.map__21844,self__.p__21838,self__.owner,self__.search_result,self__.search_result_link,meta21846__$1));
});
clustermap.components.search.__GT_t21845 = (function __GT_t21845(comm__$1,type__$1,opts__$1,map__21844__$2,p__21838__$1,owner__$1,search_result__$1,search_result_link__$1,meta21846){return (new clustermap.components.search.t21845(comm__$1,type__$1,opts__$1,map__21844__$2,p__21838__$1,owner__$1,search_result__$1,search_result_link__$1,meta21846));
});
}
return (new clustermap.components.search.t21845(comm,type,opts,map__21844__$1,p__21838,owner,search_result,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__21853,n){var map__21855 = p__21853;var map__21855__$1 = ((cljs.core.seq_QMARK_(map__21855))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21855):map__21855);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21855__$1,cljs.core.constant$keyword$332);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21855__$1,cljs.core.constant$keyword$333);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21855__$1,cljs.core.constant$keyword$276);var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$263,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__21862 = cljs.core._EQ__EQ_;var expr__21863 = e.keyCode;if(cljs.core.truth_((pred__21862.cljs$core$IFn$_invoke$arity$2 ? pred__21862.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__21863) : pred__21862.call(null,clustermap.components.search.ESCAPE_KEY,expr__21863))))
{var G__21865 = om.core.get_node(owner,"search-component");var G__21865__$1 = (((G__21865 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__21865));var G__21865__$2 = (((G__21865__$1 == null))?null:G__21865__$1.toggle());return G__21865__$2;
} else
{if(cljs.core.truth_((pred__21862.cljs$core$IFn$_invoke$arity$2 ? pred__21862.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__21863) : pred__21862.call(null,clustermap.components.search.ENTER_KEY,expr__21863))))
{var vec__21866 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$334);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21866,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21866,1,null);var G__21867_21868 = om.core.get_node(owner,"search-component");var G__21867_21869__$1 = (((G__21867_21868 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__21867_21868));var G__21867_21870__$2 = (((G__21867_21869__$1 == null))?null:G__21867_21869__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$245,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,res], null)], null));
} else
{if(cljs.core.truth_((pred__21862.cljs$core$IFn$_invoke$arity$2 ? pred__21862.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__21863) : pred__21862.call(null,clustermap.components.search.UP_ARROW,expr__21863))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$334,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$334);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__21862.cljs$core$IFn$_invoke$arity$2 ? pred__21862.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__21863) : pred__21862.call(null,clustermap.components.search.DOWN_ARROW,expr__21863))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$334,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$334);if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.search_component = (function search_component(search_results,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$266);var map__21899 = search_results;var map__21899__$1 = ((cljs.core.seq_QMARK_(map__21899))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21899):map__21899);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21899__$1,cljs.core.constant$keyword$332);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21899__$1,cljs.core.constant$keyword$333);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21899__$1,cljs.core.constant$keyword$276);if(typeof clustermap.components.search.t21900 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t21900 = (function (constituencies,portfolio_companies,investor_companies,map__21899,comm,owner,search_results,search_component,meta21901){
this.constituencies = constituencies;
this.portfolio_companies = portfolio_companies;
this.investor_companies = investor_companies;
this.map__21899 = map__21899;
this.comm = comm;
this.owner = owner;
this.search_results = search_results;
this.search_component = search_component;
this.meta21901 = meta21901;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t21900.cljs$lang$type = true;
clustermap.components.search.t21900.cljs$lang$ctorStr = "clustermap.components.search/t21900";
clustermap.components.search.t21900.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t21900");
});
clustermap.components.search.t21900.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t21900.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
}), "id": "search", "className": "search-component", "ref": "search-component"},React.DOM.h2(null,"Search"),React.DOM.div(null,(om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1({"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$335,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"}) : om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$335,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"})),React.DOM.button({"onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$335,""], null));
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
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3406__auto__ = cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$334,selected_idx):null);return React.DOM.div({"className": "search-results"},cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{},cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies")], null),(function (){var iter__4117__auto__ = (function iter__21903(s__21904){return (new cljs.core.LazySeq(null,(function (){var s__21904__$1 = s__21904;while(true){
var temp__4092__auto__ = cljs.core.seq(s__21904__$1);if(temp__4092__auto__)
{var s__21904__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__21904__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__21904__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__21906 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__21905 = 0;while(true){
if((i__21905 < size__4116__auto__))
{var vec__21909 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__21905);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21909,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21909,1,null);cljs.core.chunk_append(b__21906,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$257,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$266,self__.comm,cljs.core.constant$keyword$228,cljs.core.constant$keyword$265], null),cljs.core.constant$keyword$253,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$244,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)));
{
var G__21927 = (i__21905 + 1);
i__21905 = G__21927;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__21906),iter__21903(cljs.core.chunk_rest(s__21904__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__21906),null);
}
} else
{var vec__21910 = cljs.core.first(s__21904__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21910,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21910,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$257,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$266,self__.comm,cljs.core.constant$keyword$228,cljs.core.constant$keyword$265], null),cljs.core.constant$keyword$253,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$244,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)),iter__21903(cljs.core.rest(s__21904__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies")], null),(function (){var iter__4117__auto__ = (function iter__21911(s__21912){return (new cljs.core.LazySeq(null,(function (){var s__21912__$1 = s__21912;while(true){
var temp__4092__auto__ = cljs.core.seq(s__21912__$1);if(temp__4092__auto__)
{var s__21912__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__21912__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__21912__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__21914 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__21913 = 0;while(true){
if((i__21913 < size__4116__auto__))
{var vec__21917 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__21913);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21917,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21917,1,null);cljs.core.chunk_append(b__21914,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$257,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$266,self__.comm,cljs.core.constant$keyword$228,cljs.core.constant$keyword$263], null),cljs.core.constant$keyword$253,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$244,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)));
{
var G__21928 = (i__21913 + 1);
i__21913 = G__21928;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__21914),iter__21911(cljs.core.chunk_rest(s__21912__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__21914),null);
}
} else
{var vec__21918 = cljs.core.first(s__21912__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21918,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21918,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$257,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$266,self__.comm,cljs.core.constant$keyword$228,cljs.core.constant$keyword$263], null),cljs.core.constant$keyword$253,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$244,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)),iter__21911(cljs.core.rest(s__21912__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_pcs);
})()):null),cljs.core.array_seq([(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors")], null),(function (){var iter__4117__auto__ = (function iter__21919(s__21920){return (new cljs.core.LazySeq(null,(function (){var s__21920__$1 = s__21920;while(true){
var temp__4092__auto__ = cljs.core.seq(s__21920__$1);if(temp__4092__auto__)
{var s__21920__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__21920__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__21920__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__21922 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__21921 = 0;while(true){
if((i__21921 < size__4116__auto__))
{var vec__21925 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__21921);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21925,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21925,1,null);cljs.core.chunk_append(b__21922,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$257,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$266,self__.comm,cljs.core.constant$keyword$228,cljs.core.constant$keyword$264], null),cljs.core.constant$keyword$253,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$244,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)));
{
var G__21929 = (i__21921 + 1);
i__21921 = G__21929;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__21922),iter__21919(cljs.core.chunk_rest(s__21920__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__21922),null);
}
} else
{var vec__21926 = cljs.core.first(s__21920__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21926,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21926,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$257,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$266,self__.comm,cljs.core.constant$keyword$228,cljs.core.constant$keyword$264], null),cljs.core.constant$keyword$253,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$244,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)),iter__21919(cljs.core.rest(s__21920__$2)));
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
clustermap.components.search.t21900.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21902){var self__ = this;
var _21902__$1 = this;return self__.meta21901;
});
clustermap.components.search.t21900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21902,meta21901__$1){var self__ = this;
var _21902__$1 = this;return (new clustermap.components.search.t21900(self__.constituencies,self__.portfolio_companies,self__.investor_companies,self__.map__21899,self__.comm,self__.owner,self__.search_results,self__.search_component,meta21901__$1));
});
clustermap.components.search.__GT_t21900 = (function __GT_t21900(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__21899__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta21901){return (new clustermap.components.search.t21900(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__21899__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta21901));
});
}
return (new clustermap.components.search.t21900(constituencies,portfolio_companies,investor_companies,map__21899__$1,comm,owner,search_results,search_component,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$266,comm], null),clustermap.om.burrow(clustermap.components.search.search_component,cljs.core.constant$keyword$336),document.getElementById(elem_id));
});
