// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('jayq.core');
goog.require('sablono.core');
goog.require('clustermap.components.full_report.overview');
goog.require('sablono.core');
goog.require('clustermap.components.full_report.portfolio_company_sites');
goog.require('clustermap.components.full_report.details');
goog.require('om.core');
goog.require('clustermap.components.full_report.details');
goog.require('om.core');
goog.require('clustermap.components.full_report.overview');
goog.require('clustermap.components.full_report.portfolio_company_sites');
goog.require('jayq.core');
clustermap.components.full_report.full_report_component = (function full_report_component(p__21695,owner){var map__21701 = p__21695;var map__21701__$1 = ((cljs.core.seq_QMARK_(map__21701))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21701):map__21701);var data = map__21701__$1;var all_portfolio_companies_summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21701__$1,cljs.core.constant$keyword$336);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21701__$1,cljs.core.constant$keyword$274);var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$272);if(typeof clustermap.components.full_report.t21702 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t21702 = (function (comm,selection,all_portfolio_companies_summary,data,map__21701,owner,p__21695,full_report_component,meta21703){
this.comm = comm;
this.selection = selection;
this.all_portfolio_companies_summary = all_portfolio_companies_summary;
this.data = data;
this.map__21701 = map__21701;
this.owner = owner;
this.p__21695 = p__21695;
this.full_report_component = full_report_component;
this.meta21703 = meta21703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t21702.cljs$lang$type = true;
clustermap.components.full_report.t21702.cljs$lang$ctorStr = "clustermap.components.full-report/t21702";
clustermap.components.full_report.t21702.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report/t21702");
});
clustermap.components.full_report.t21702.prototype.om$core$IDidUpdate$ = true;
clustermap.components.full_report.t21702.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).data("bs.tooltip",false);
return jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).tooltip();
});
clustermap.components.full_report.t21702.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t21702.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var attrs21705 = om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.overview.overview,self__.data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,self__.comm], null)], null));if(cljs.core.map_QMARK_(attrs21705))
{return React.DOM.div(sablono.interpreter.attributes(attrs21705),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.details.details,self__.data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,self__.comm], null)], null))),sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.portfolio_company_sites.portfolio_company_sites,cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,self__.comm], null)], null)):null)));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs21705),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.details.details,self__.data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,self__.comm], null)], null))),sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.portfolio_company_sites.portfolio_company_sites,cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,self__.comm], null)], null)):null)));
}
});
clustermap.components.full_report.t21702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21704){var self__ = this;
var _21704__$1 = this;return self__.meta21703;
});
clustermap.components.full_report.t21702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21704,meta21703__$1){var self__ = this;
var _21704__$1 = this;return (new clustermap.components.full_report.t21702(self__.comm,self__.selection,self__.all_portfolio_companies_summary,self__.data,self__.map__21701,self__.owner,self__.p__21695,self__.full_report_component,meta21703__$1));
});
clustermap.components.full_report.__GT_t21702 = (function __GT_t21702(comm__$1,selection__$1,all_portfolio_companies_summary__$1,data__$1,map__21701__$2,owner__$1,p__21695__$1,full_report_component__$1,meta21703){return (new clustermap.components.full_report.t21702(comm__$1,selection__$1,all_portfolio_companies_summary__$1,data__$1,map__21701__$2,owner__$1,p__21695__$1,full_report_component__$1,meta21703));
});
}
return (new clustermap.components.full_report.t21702(comm,selection,all_portfolio_companies_summary,data,map__21701__$1,owner,p__21695,full_report_component,null));
});
clustermap.components.full_report.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,comm], null),clustermap.components.full_report.full_report_component,document.getElementById(elem_id));
});
