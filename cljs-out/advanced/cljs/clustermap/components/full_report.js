// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report');
goog.require('cljs.core');
goog.require('sablono.core');
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
clustermap.components.full_report.single_company_selection_QMARK_ = (function single_company_selection_QMARK_(selector){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1,cljs.core.count(selector))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$303,(function (){var G__22560 = selector;var G__22560__$1 = (((G__22560 == null))?null:cljs.core.keys(G__22560));var G__22560__$2 = (((G__22560__$1 == null))?null:cljs.core.first(G__22560__$1));return G__22560__$2;
})()));
});
clustermap.components.full_report.full_report_component = (function full_report_component(p__22561,owner){var map__22568 = p__22561;var map__22568__$1 = ((cljs.core.seq_QMARK_(map__22568))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22568):map__22568);var data = map__22568__$1;var all_portfolio_companies_summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22568__$1,cljs.core.constant$keyword$380);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22568__$1,cljs.core.constant$keyword$309);var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22568__$1,cljs.core.constant$keyword$381);var map__22569 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__22569__$1 = ((cljs.core.seq_QMARK_(map__22569))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22569):map__22569);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22569__$1,cljs.core.constant$keyword$311);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22569__$1,cljs.core.constant$keyword$310);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22569__$1,cljs.core.constant$keyword$306);if(typeof clustermap.components.full_report.t22570 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t22570 = (function (p__22561,full_report_component,path_fn,data,all_portfolio_companies_summary,link_fn,selector,selection,comm,map__22569,owner,map__22568,meta22571){
this.p__22561 = p__22561;
this.full_report_component = full_report_component;
this.path_fn = path_fn;
this.data = data;
this.all_portfolio_companies_summary = all_portfolio_companies_summary;
this.link_fn = link_fn;
this.selector = selector;
this.selection = selection;
this.comm = comm;
this.map__22569 = map__22569;
this.owner = owner;
this.map__22568 = map__22568;
this.meta22571 = meta22571;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t22570.cljs$lang$type = true;
clustermap.components.full_report.t22570.cljs$lang$ctorStr = "clustermap.components.full-report/t22570";
clustermap.components.full_report.t22570.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report/t22570");
});
clustermap.components.full_report.t22570.prototype.om$core$IDidUpdate$ = true;
clustermap.components.full_report.t22570.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).data("bs.tooltip",false);
return jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).tooltip();
});
clustermap.components.full_report.t22570.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t22570.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var attrs22573 = om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.overview.overview,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$306,self__.comm], null),cljs.core.constant$keyword$294,"overview"], null));if(cljs.core.map_QMARK_(attrs22573))
{return React.DOM.div(sablono.interpreter.attributes(attrs22573),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$306,self__.comm], null),cljs.core.constant$keyword$294,"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_(self__.selector))?sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$382.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.company_site_list,cljs.core.constant$keyword$382.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$306,self__.comm,cljs.core.constant$keyword$311,self__.link_fn,cljs.core.constant$keyword$310,self__.path_fn], null),cljs.core.constant$keyword$294,"selection-portfolio-company-sites"], null)):null)):sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$382.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.company_list,cljs.core.constant$keyword$382.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$306,self__.comm,cljs.core.constant$keyword$311,self__.link_fn,cljs.core.constant$keyword$310,self__.path_fn], null),cljs.core.constant$keyword$294,"selection-portfolio-company-sites"], null)):null))));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs22573),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$306,self__.comm], null),cljs.core.constant$keyword$294,"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_(self__.selector))?sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$382.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.company_site_list,cljs.core.constant$keyword$382.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$306,self__.comm,cljs.core.constant$keyword$311,self__.link_fn,cljs.core.constant$keyword$310,self__.path_fn], null),cljs.core.constant$keyword$294,"selection-portfolio-company-sites"], null)):null)):sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$382.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.company_list,cljs.core.constant$keyword$382.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$306,self__.comm,cljs.core.constant$keyword$311,self__.link_fn,cljs.core.constant$keyword$310,self__.path_fn], null),cljs.core.constant$keyword$294,"selection-portfolio-company-sites"], null)):null))));
}
});
clustermap.components.full_report.t22570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22572){var self__ = this;
var _22572__$1 = this;return self__.meta22571;
});
clustermap.components.full_report.t22570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22572,meta22571__$1){var self__ = this;
var _22572__$1 = this;return (new clustermap.components.full_report.t22570(self__.p__22561,self__.full_report_component,self__.path_fn,self__.data,self__.all_portfolio_companies_summary,self__.link_fn,self__.selector,self__.selection,self__.comm,self__.map__22569,self__.owner,self__.map__22568,meta22571__$1));
});
clustermap.components.full_report.__GT_t22570 = (function __GT_t22570(p__22561__$1,full_report_component__$1,path_fn__$1,data__$1,all_portfolio_companies_summary__$1,link_fn__$1,selector__$1,selection__$1,comm__$1,map__22569__$2,owner__$1,map__22568__$2,meta22571){return (new clustermap.components.full_report.t22570(p__22561__$1,full_report_component__$1,path_fn__$1,data__$1,all_portfolio_companies_summary__$1,link_fn__$1,selector__$1,selection__$1,comm__$1,map__22569__$2,owner__$1,map__22568__$2,meta22571));
});
}
return (new clustermap.components.full_report.t22570(p__22561,full_report_component,path_fn,data,all_portfolio_companies_summary,link_fn,selector,selection,comm,map__22569__$1,owner,map__22568__$1,null));
});
clustermap.components.full_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.full_report.full_report_component,document.getElementById(elem_id));
});
