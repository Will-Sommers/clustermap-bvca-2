// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.full_report');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('clustermap.components.full_report.company_site_list');
goog.require('sablono.core');
goog.require('clustermap.components.full_report.overview');
goog.require('sablono.core');
goog.require('clustermap.components.full_report.company_site_list');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.components.full_report.overview');
goog.require('clustermap.components.full_report.company_list');
goog.require('clustermap.components.full_report.company_list');
goog.require('clustermap.components.full_report.charts');
goog.require('clustermap.components.full_report.charts');
goog.require('jayq.core');
clustermap.components.full_report.single_company_selection_QMARK_ = (function single_company_selection_QMARK_(selector){return (cljs.core._EQ_.call(null,1,cljs.core.count.call(null,selector))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),(function (){var G__23206 = selector;var G__23206__$1 = (((G__23206 == null))?null:cljs.core.keys.call(null,G__23206));var G__23206__$2 = (((G__23206__$1 == null))?null:cljs.core.first.call(null,G__23206__$1));return G__23206__$2;
})()));
});
clustermap.components.full_report.full_report_component = (function full_report_component(p__23207,owner){var map__23214 = p__23207;var map__23214__$1 = ((cljs.core.seq_QMARK_.call(null,map__23214))?cljs.core.apply.call(null,cljs.core.hash_map,map__23214):map__23214);var data = map__23214__$1;var all_portfolio_companies_summary = cljs.core.get.call(null,map__23214__$1,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533));var selection = cljs.core.get.call(null,map__23214__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var selector = cljs.core.get.call(null,map__23214__$1,new cljs.core.Keyword(null,"selector","selector",2205476689));var map__23215 = om.core.get_shared.call(null,owner);var map__23215__$1 = ((cljs.core.seq_QMARK_.call(null,map__23215))?cljs.core.apply.call(null,cljs.core.hash_map,map__23215):map__23215);var link_fn = cljs.core.get.call(null,map__23215__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var path_fn = cljs.core.get.call(null,map__23215__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__23215__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"lists","lists",1116886791));var link_fn__$1 = cljs.core.partial.call(null,link_fn,new cljs.core.Keyword(null,"lists","lists",1116886791));if(typeof clustermap.components.full_report.t23216 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t23216 = (function (full_report_component,path_fn,data,all_portfolio_companies_summary,link_fn,selector,selection,comm,p__23207,owner,map__23215,map__23214,meta23217){
this.full_report_component = full_report_component;
this.path_fn = path_fn;
this.data = data;
this.all_portfolio_companies_summary = all_portfolio_companies_summary;
this.link_fn = link_fn;
this.selector = selector;
this.selection = selection;
this.comm = comm;
this.p__23207 = p__23207;
this.owner = owner;
this.map__23215 = map__23215;
this.map__23214 = map__23214;
this.meta23217 = meta23217;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t23216.cljs$lang$type = true;
clustermap.components.full_report.t23216.cljs$lang$ctorStr = "clustermap.components.full-report/t23216";
clustermap.components.full_report.t23216.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.full-report/t23216");
});
clustermap.components.full_report.t23216.prototype.om$core$IDidUpdate$ = true;
clustermap.components.full_report.t23216.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var root_node = om.core.get_node.call(null,self__.owner);jayq.core.$.call(null,"[data-toggle='tooltip']",root_node).data("bs.tooltip",false);
return jayq.core.$.call(null,"[data-toggle='tooltip']",root_node).tooltip();
});
clustermap.components.full_report.t23216.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t23216.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var attrs23219 = om.core.build.call(null,clustermap.components.full_report.overview.overview,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"overview"], null));if(cljs.core.map_QMARK_.call(null,attrs23219))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs23219),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_.call(null,self__.selector))?sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.company_site_list.company_site_list,new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301),self__.link_fn,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"selection-investments"], null)):null)):sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.company_list.company_list,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301),self__.link_fn,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"selection-investments-by-company"], null)):null))));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs23219),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_.call(null,self__.selector))?sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.company_site_list.company_site_list,new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301),self__.link_fn,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"selection-investments"], null)):null)):sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.company_list.company_list,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301),self__.link_fn,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"selection-investments-by-company"], null)):null))));
}
});
clustermap.components.full_report.t23216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23218){var self__ = this;
var _23218__$1 = this;return self__.meta23217;
});
clustermap.components.full_report.t23216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23218,meta23217__$1){var self__ = this;
var _23218__$1 = this;return (new clustermap.components.full_report.t23216(self__.full_report_component,self__.path_fn,self__.data,self__.all_portfolio_companies_summary,self__.link_fn,self__.selector,self__.selection,self__.comm,self__.p__23207,self__.owner,self__.map__23215,self__.map__23214,meta23217__$1));
});
clustermap.components.full_report.__GT_t23216 = (function __GT_t23216(full_report_component__$1,path_fn__$2,data__$1,all_portfolio_companies_summary__$1,link_fn__$2,selector__$1,selection__$1,comm__$1,p__23207__$1,owner__$1,map__23215__$2,map__23214__$2,meta23217){return (new clustermap.components.full_report.t23216(full_report_component__$1,path_fn__$2,data__$1,all_portfolio_companies_summary__$1,link_fn__$2,selector__$1,selection__$1,comm__$1,p__23207__$1,owner__$1,map__23215__$2,map__23214__$2,meta23217));
});
}
return (new clustermap.components.full_report.t23216(full_report_component,path_fn__$1,data,all_portfolio_companies_summary,link_fn__$1,selector,selection,comm,p__23207,owner,map__23215__$1,map__23214__$1,null));
});
clustermap.components.full_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.full_report.full_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id),new cljs.core.Keyword(null,"shared","shared",4405305303),shared], null));
});

//# sourceMappingURL=full_report.js.map