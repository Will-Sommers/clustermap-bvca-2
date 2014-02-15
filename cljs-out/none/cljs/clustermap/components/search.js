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
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__12264){var map__12270 = p__12264;var map__12270__$1 = ((cljs.core.seq_QMARK_.call(null,map__12270))?cljs.core.apply.call(null,cljs.core.hash_map,map__12270):map__12270);var opts = map__12270__$1;var path_fn = cljs.core.get.call(null,map__12270__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var type = cljs.core.get.call(null,map__12270__$1,new cljs.core.Keyword(null,"type","type",1017479852));var comm = cljs.core.get.call(null,map__12270__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t12271 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12271 = (function (comm,type,path_fn,opts,map__12270,p__12264,owner,search_result,search_result_link,meta12272){
this.comm = comm;
this.type = type;
this.path_fn = path_fn;
this.opts = opts;
this.map__12270 = map__12270;
this.p__12264 = p__12264;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta12272 = meta12272;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12271.cljs$lang$type = true;
clustermap.components.search.t12271.cljs$lang$ctorStr = "clustermap.components.search/t12271";
clustermap.components.search.t12271.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t12271");
});
clustermap.components.search.t12271.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12271.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(state))?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__12274 = l;var G__12274__$1 = (((G__12274 == null))?null:jayq.core.$.call(null,G__12274));var G__12274__$2 = (((G__12274__$1 == null))?null:G__12274__$1.parents(".search-component"));var G__12274__$3 = (((G__12274__$2 == null))?null:G__12274__$2.toggle());return G__12274__$3;
})},sablono.interpreter.interpret.call(null,self__.search_result.call(null,new cljs.core.Keyword(null,"name","name",1017277949))),(cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(state))?"*":null)));
});
clustermap.components.search.t12271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12273){var self__ = this;
var _12273__$1 = this;return self__.meta12272;
});
clustermap.components.search.t12271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12273,meta12272__$1){var self__ = this;
var _12273__$1 = this;return (new clustermap.components.search.t12271(self__.comm,self__.type,self__.path_fn,self__.opts,self__.map__12270,self__.p__12264,self__.owner,self__.search_result,self__.search_result_link,meta12272__$1));
});
clustermap.components.search.__GT_t12271 = (function __GT_t12271(comm__$1,type__$1,path_fn__$1,opts__$1,map__12270__$2,p__12264__$1,owner__$1,search_result__$1,search_result_link__$1,meta12272){return (new clustermap.components.search.t12271(comm__$1,type__$1,path_fn__$1,opts__$1,map__12270__$2,p__12264__$1,owner__$1,search_result__$1,search_result_link__$1,meta12272));
});
}
return (new clustermap.components.search.t12271(comm,type,path_fn,opts,map__12270__$1,p__12264,owner,search_result,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__12275,n){var map__12277 = p__12275;var map__12277__$1 = ((cljs.core.seq_QMARK_.call(null,map__12277))?cljs.core.apply.call(null,cljs.core.hash_map,map__12277):map__12277);var investor_companies = cljs.core.get.call(null,map__12277__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12277__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12277__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__12284 = cljs.core._EQ__EQ_;var expr__12285 = e.keyCode;if(cljs.core.truth_(pred__12284.call(null,clustermap.components.search.ESCAPE_KEY,expr__12285)))
{var G__12287 = om.core.get_node.call(null,owner,"search-component");var G__12287__$1 = (((G__12287 == null))?null:jayq.core.$.call(null,G__12287));var G__12287__$2 = (((G__12287__$1 == null))?null:G__12287__$1.toggle());return G__12287__$2;
} else
{if(cljs.core.truth_(pred__12284.call(null,clustermap.components.search.ENTER_KEY,expr__12285)))
{var vec__12288 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__12288,0,null);var res = cljs.core.nth.call(null,vec__12288,1,null);var G__12289_12290 = om.core.get_node.call(null,owner,"search-component");var G__12289_12291__$1 = (((G__12289_12290 == null))?null:jayq.core.$.call(null,G__12289_12290));var G__12289_12292__$2 = (((G__12289_12291__$1 == null))?null:G__12289_12291__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,res], null)], null));
} else
{if(cljs.core.truth_(pred__12284.call(null,clustermap.components.search.UP_ARROW,expr__12285)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__12284.call(null,clustermap.components.search.DOWN_ARROW,expr__12285)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.search_component = (function search_component(search_results,owner){var map__12322 = om.core.get_shared.call(null,owner);var map__12322__$1 = ((cljs.core.seq_QMARK_.call(null,map__12322))?cljs.core.apply.call(null,cljs.core.hash_map,map__12322):map__12322);var path_fn = cljs.core.get.call(null,map__12322__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12322__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__12323 = search_results;var map__12323__$1 = ((cljs.core.seq_QMARK_.call(null,map__12323))?cljs.core.apply.call(null,cljs.core.hash_map,map__12323):map__12323);var investor_companies = cljs.core.get.call(null,map__12323__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12323__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12323__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t12324 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12324 = (function (investor_companies,path_fn,portfolio_companies,search_component,map__12322,comm,map__12323,owner,constituencies,search_results,meta12325){
this.investor_companies = investor_companies;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.map__12322 = map__12322;
this.comm = comm;
this.map__12323 = map__12323;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta12325 = meta12325;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12324.cljs$lang$type = true;
clustermap.components.search.t12324.cljs$lang$ctorStr = "clustermap.components.search/t12324";
clustermap.components.search.t12324.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t12324");
});
clustermap.components.search.t12324.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12324.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"onKeyDown": (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
}), "id": "search", "className": "search-component", "ref": "search-component"},React.DOM.div({"className": "tbl"},React.DOM.div({"style": {"width": "100%"}, "className": "tbl-cell"},om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),e.target.value], null));
}), "placeholder": "Search", "type": "text", "ref": "search-field"})),React.DOM.div({"style": {"width": "34"}, "className": "tbl-cell"},React.DOM.button({"onClick": (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
}), "type": "reset"},"\u00D7")),React.DOM.div({"style": {"width": "136"}, "className": "tbl-cell"},React.DOM.button({"type": "reset", "className": "btn-reset"},"Reset to UK wide"))),(cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3406__auto__))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return React.DOM.div({"className": "search-results"},cljs.core.apply.call(null,om.dom.ul,{},cljs.core.concat.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies")], null),(function (){var iter__4117__auto__ = (function iter__12327(s__12328){return (new cljs.core.LazySeq(null,(function (){var s__12328__$1 = s__12328;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12328__$1);if(temp__4092__auto__)
{var s__12328__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12328__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__12328__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__12330 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__12329 = 0;while(true){
if((i__12329 < size__4116__auto__))
{var vec__12333 = cljs.core._nth.call(null,c__4115__auto__,i__12329);var idx = cljs.core.nth.call(null,vec__12333,0,null);var con = cljs.core.nth.call(null,vec__12333,1,null);cljs.core.chunk_append.call(null,b__12330,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12329,vec__12333,idx,con,c__4115__auto__,size__4116__auto__,b__12330,s__12328__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__12329,vec__12333,idx,con,c__4115__auto__,size__4116__auto__,b__12330,s__12328__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12351 = (i__12329 + 1);
i__12329 = G__12351;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12330),iter__12327.call(null,cljs.core.chunk_rest.call(null,s__12328__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12330),null);
}
} else
{var vec__12334 = cljs.core.first.call(null,s__12328__$2);var idx = cljs.core.nth.call(null,vec__12334,0,null);var con = cljs.core.nth.call(null,vec__12334,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12334,idx,con,s__12328__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__12334,idx,con,s__12328__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12327.call(null,cljs.core.rest.call(null,s__12328__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies")], null),(function (){var iter__4117__auto__ = (function iter__12335(s__12336){return (new cljs.core.LazySeq(null,(function (){var s__12336__$1 = s__12336;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12336__$1);if(temp__4092__auto__)
{var s__12336__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12336__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__12336__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__12338 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__12337 = 0;while(true){
if((i__12337 < size__4116__auto__))
{var vec__12341 = cljs.core._nth.call(null,c__4115__auto__,i__12337);var idx = cljs.core.nth.call(null,vec__12341,0,null);var pc = cljs.core.nth.call(null,vec__12341,1,null);cljs.core.chunk_append.call(null,b__12338,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12337,vec__12341,idx,pc,c__4115__auto__,size__4116__auto__,b__12338,s__12336__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__12337,vec__12341,idx,pc,c__4115__auto__,size__4116__auto__,b__12338,s__12336__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12352 = (i__12337 + 1);
i__12337 = G__12352;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12338),iter__12335.call(null,cljs.core.chunk_rest.call(null,s__12336__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12338),null);
}
} else
{var vec__12342 = cljs.core.first.call(null,s__12336__$2);var idx = cljs.core.nth.call(null,vec__12342,0,null);var pc = cljs.core.nth.call(null,vec__12342,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12342,idx,pc,s__12336__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__12342,idx,pc,s__12336__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12335.call(null,cljs.core.rest.call(null,s__12336__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors")], null),(function (){var iter__4117__auto__ = (function iter__12343(s__12344){return (new cljs.core.LazySeq(null,(function (){var s__12344__$1 = s__12344;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12344__$1);if(temp__4092__auto__)
{var s__12344__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12344__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__12344__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__12346 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__12345 = 0;while(true){
if((i__12345 < size__4116__auto__))
{var vec__12349 = cljs.core._nth.call(null,c__4115__auto__,i__12345);var idx = cljs.core.nth.call(null,vec__12349,0,null);var inv = cljs.core.nth.call(null,vec__12349,1,null);cljs.core.chunk_append.call(null,b__12346,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12345,vec__12349,idx,inv,c__4115__auto__,size__4116__auto__,b__12346,s__12344__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__12345,vec__12349,idx,inv,c__4115__auto__,size__4116__auto__,b__12346,s__12344__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12353 = (i__12345 + 1);
i__12345 = G__12353;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12346),iter__12343.call(null,cljs.core.chunk_rest.call(null,s__12344__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12346),null);
}
} else
{var vec__12350 = cljs.core.first.call(null,s__12344__$2);var idx = cljs.core.nth.call(null,vec__12350,0,null);var inv = cljs.core.nth.call(null,vec__12350,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12350,idx,inv,s__12344__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__12350,idx,inv,s__12344__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12343.call(null,cljs.core.rest.call(null,s__12344__$2)));
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
clustermap.components.search.t12324.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12326){var self__ = this;
var _12326__$1 = this;return self__.meta12325;
});
clustermap.components.search.t12324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12326,meta12325__$1){var self__ = this;
var _12326__$1 = this;return (new clustermap.components.search.t12324(self__.investor_companies,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.map__12322,self__.comm,self__.map__12323,self__.owner,self__.constituencies,self__.search_results,meta12325__$1));
});
clustermap.components.search.__GT_t12324 = (function __GT_t12324(investor_companies__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,map__12322__$2,comm__$1,map__12323__$2,owner__$1,constituencies__$1,search_results__$1,meta12325){return (new clustermap.components.search.t12324(investor_companies__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,map__12322__$2,comm__$1,map__12323__$2,owner__$1,constituencies__$1,search_results__$1,meta12325));
});
}
return (new clustermap.components.search.t12324(investor_companies,path_fn,portfolio_companies,search_component,map__12322__$1,comm,map__12323__$1,owner,constituencies,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.om.burrow.call(null,clustermap.components.search.search_component,new cljs.core.Keyword(null,"search-results","search-results",1025331267)),document.getElementById(elem_id));
});

//# sourceMappingURL=search.js.map