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
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__11586){var map__11591 = p__11586;var map__11591__$1 = ((cljs.core.seq_QMARK_.call(null,map__11591))?cljs.core.apply.call(null,cljs.core.hash_map,map__11591):map__11591);var opts = map__11591__$1;var type = cljs.core.get.call(null,map__11591__$1,new cljs.core.Keyword(null,"type","type",1017479852));var comm = cljs.core.get.call(null,map__11591__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t11592 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t11592 = (function (comm,type,opts,map__11591,p__11586,owner,search_result,search_result_link,meta11593){
this.comm = comm;
this.type = type;
this.opts = opts;
this.map__11591 = map__11591;
this.p__11586 = p__11586;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta11593 = meta11593;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t11592.cljs$lang$type = true;
clustermap.components.search.t11592.cljs$lang$ctorStr = "clustermap.components.search/t11592";
clustermap.components.search.t11592.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t11592");
});
clustermap.components.search.t11592.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t11592.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(state))?"selected":null)},React.DOM.a({"onClick": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,cljs.core.deref.call(null,self__.search_result)], null)], null));
})},sablono.interpreter.interpret.call(null,self__.search_result.call(null,new cljs.core.Keyword(null,"name","name",1017277949))),(cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(state))?"*":null)));
});
clustermap.components.search.t11592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11594){var self__ = this;
var _11594__$1 = this;return self__.meta11593;
});
clustermap.components.search.t11592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11594,meta11593__$1){var self__ = this;
var _11594__$1 = this;return (new clustermap.components.search.t11592(self__.comm,self__.type,self__.opts,self__.map__11591,self__.p__11586,self__.owner,self__.search_result,self__.search_result_link,meta11593__$1));
});
clustermap.components.search.__GT_t11592 = (function __GT_t11592(comm__$1,type__$1,opts__$1,map__11591__$2,p__11586__$1,owner__$1,search_result__$1,search_result_link__$1,meta11593){return (new clustermap.components.search.t11592(comm__$1,type__$1,opts__$1,map__11591__$2,p__11586__$1,owner__$1,search_result__$1,search_result_link__$1,meta11593));
});
}
return (new clustermap.components.search.t11592(comm,type,opts,map__11591__$1,p__11586,owner,search_result,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__11595,n){var map__11597 = p__11595;var map__11597__$1 = ((cljs.core.seq_QMARK_.call(null,map__11597))?cljs.core.apply.call(null,cljs.core.hash_map,map__11597):map__11597);var investor_companies = cljs.core.get.call(null,map__11597__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__11597__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__11597__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
})();if((n < cljs.core.count.call(null,cons)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",3902864696),cljs.core.get.call(null,constituencies,n)], null);
} else
{if((n < (cljs.core.count.call(null,cons) + cljs.core.count.call(null,pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),cljs.core.get.call(null,pcs,(n - cljs.core.count.call(null,cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),cljs.core.get.call(null,invs,((n - cljs.core.count.call(null,cons)) - cljs.core.count.call(null,pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){console.log(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109)));
var pred__11604 = cljs.core._EQ__EQ_;var expr__11605 = e.keyCode;if(cljs.core.truth_(pred__11604.call(null,clustermap.components.search.ESCAPE_KEY,expr__11605)))
{var G__11607 = om.core.get_node.call(null,owner,"search-component");var G__11607__$1 = (((G__11607 == null))?null:jayq.core.$.call(null,G__11607));var G__11607__$2 = (((G__11607__$1 == null))?null:G__11607__$1.toggle());return G__11607__$2;
} else
{if(cljs.core.truth_(pred__11604.call(null,clustermap.components.search.ENTER_KEY,expr__11605)))
{var vec__11608 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__11608,0,null);var res = cljs.core.nth.call(null,vec__11608,1,null);var G__11609_11610 = om.core.get_node.call(null,owner,"search-component");var G__11609_11611__$1 = (((G__11609_11610 == null))?null:jayq.core.$.call(null,G__11609_11610));var G__11609_11612__$2 = (((G__11609_11611__$1 == null))?null:G__11609_11611__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,res], null)], null));
} else
{if(cljs.core.truth_(pred__11604.call(null,clustermap.components.search.UP_ARROW,expr__11605)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__11604.call(null,clustermap.components.search.DOWN_ARROW,expr__11605)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.search_component = (function search_component(search_results,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__11641 = search_results;var map__11641__$1 = ((cljs.core.seq_QMARK_.call(null,map__11641))?cljs.core.apply.call(null,cljs.core.hash_map,map__11641):map__11641);var investor_companies = cljs.core.get.call(null,map__11641__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__11641__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__11641__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t11642 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t11642 = (function (constituencies,portfolio_companies,investor_companies,map__11641,comm,owner,search_results,search_component,meta11643){
this.constituencies = constituencies;
this.portfolio_companies = portfolio_companies;
this.investor_companies = investor_companies;
this.map__11641 = map__11641;
this.comm = comm;
this.owner = owner;
this.search_results = search_results;
this.search_component = search_component;
this.meta11643 = meta11643;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t11642.cljs$lang$type = true;
clustermap.components.search.t11642.cljs$lang$ctorStr = "clustermap.components.search/t11642";
clustermap.components.search.t11642.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t11642");
});
clustermap.components.search.t11642.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t11642.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"onKeyDown": (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
}), "id": "search", "ref": "search-component"},React.DOM.h2(null,"Search"),React.DOM.div(null,om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"}),React.DOM.button({"onClick": (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
}), "type": "reset"},"\u00D7")),(cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = cljs.core.not_empty.call(null,self__.portfolio_companies);if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{return cljs.core.not_empty.call(null,self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,cljs.core.count.call(null,idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod.call(null,(function (){var or__3406__auto__ = new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return React.DOM.div({"className": "search-results"},cljs.core.apply.call(null,om.dom.ul,{},cljs.core.concat.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies")], null),(function (){var iter__4117__auto__ = (function iter__11645(s__11646){return (new cljs.core.LazySeq(null,(function (){var s__11646__$1 = s__11646;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11646__$1);if(temp__4092__auto__)
{var s__11646__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11646__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__11646__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__11648 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__11647 = 0;while(true){
if((i__11647 < size__4116__auto__))
{var vec__11651 = cljs.core._nth.call(null,c__4115__auto__,i__11647);var idx = cljs.core.nth.call(null,vec__11651,0,null);var con = cljs.core.nth.call(null,vec__11651,1,null);cljs.core.chunk_append.call(null,b__11648,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null)], null)));
{
var G__11669 = (i__11647 + 1);
i__11647 = G__11669;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11648),iter__11645.call(null,cljs.core.chunk_rest.call(null,s__11646__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11648),null);
}
} else
{var vec__11652 = cljs.core.first.call(null,s__11646__$2);var idx = cljs.core.nth.call(null,vec__11652,0,null);var con = cljs.core.nth.call(null,vec__11652,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null)], null)),iter__11645.call(null,cljs.core.rest.call(null,s__11646__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies")], null),(function (){var iter__4117__auto__ = (function iter__11653(s__11654){return (new cljs.core.LazySeq(null,(function (){var s__11654__$1 = s__11654;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11654__$1);if(temp__4092__auto__)
{var s__11654__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11654__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__11654__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__11656 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__11655 = 0;while(true){
if((i__11655 < size__4116__auto__))
{var vec__11659 = cljs.core._nth.call(null,c__4115__auto__,i__11655);var idx = cljs.core.nth.call(null,vec__11659,0,null);var pc = cljs.core.nth.call(null,vec__11659,1,null);cljs.core.chunk_append.call(null,b__11656,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null)], null)));
{
var G__11670 = (i__11655 + 1);
i__11655 = G__11670;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11656),iter__11653.call(null,cljs.core.chunk_rest.call(null,s__11654__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11656),null);
}
} else
{var vec__11660 = cljs.core.first.call(null,s__11654__$2);var idx = cljs.core.nth.call(null,vec__11660,0,null);var pc = cljs.core.nth.call(null,vec__11660,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null)], null)),iter__11653.call(null,cljs.core.rest.call(null,s__11654__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors")], null),(function (){var iter__4117__auto__ = (function iter__11661(s__11662){return (new cljs.core.LazySeq(null,(function (){var s__11662__$1 = s__11662;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__11662__$1);if(temp__4092__auto__)
{var s__11662__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11662__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__11662__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__11664 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__11663 = 0;while(true){
if((i__11663 < size__4116__auto__))
{var vec__11667 = cljs.core._nth.call(null,c__4115__auto__,i__11663);var idx = cljs.core.nth.call(null,vec__11667,0,null);var inv = cljs.core.nth.call(null,vec__11667,1,null);cljs.core.chunk_append.call(null,b__11664,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null)], null)));
{
var G__11671 = (i__11663 + 1);
i__11663 = G__11671;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11664),iter__11661.call(null,cljs.core.chunk_rest.call(null,s__11662__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11664),null);
}
} else
{var vec__11668 = cljs.core.first.call(null,s__11662__$2);var idx = cljs.core.nth.call(null,vec__11668,0,null);var inv = cljs.core.nth.call(null,vec__11668,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null)], null)),iter__11661.call(null,cljs.core.rest.call(null,s__11662__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_invs);
})()):null))));
})():null));
});
clustermap.components.search.t11642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11644){var self__ = this;
var _11644__$1 = this;return self__.meta11643;
});
clustermap.components.search.t11642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11644,meta11643__$1){var self__ = this;
var _11644__$1 = this;return (new clustermap.components.search.t11642(self__.constituencies,self__.portfolio_companies,self__.investor_companies,self__.map__11641,self__.comm,self__.owner,self__.search_results,self__.search_component,meta11643__$1));
});
clustermap.components.search.__GT_t11642 = (function __GT_t11642(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__11641__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta11643){return (new clustermap.components.search.t11642(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__11641__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta11643));
});
}
return (new clustermap.components.search.t11642(constituencies,portfolio_companies,investor_companies,map__11641__$1,comm,owner,search_results,search_component,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),clustermap.om.burrow.call(null,clustermap.components.search.search_component,new cljs.core.Keyword(null,"search-results","search-results",1025331267)),document.getElementById(elem_id));
});

//# sourceMappingURL=search.js.map