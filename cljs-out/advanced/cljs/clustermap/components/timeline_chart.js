// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.timeline_chart');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('jayq.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('hiccups.runtime');
goog.require('hiccups.runtime');
goog.require('clojure.set');
goog.require('om.dom');
goog.require('clojure.set');
goog.require('jayq.core');
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__22883){var map__22885 = p__22883;var map__22885__$1 = ((cljs.core.seq_QMARK_(map__22885))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22885):map__22885);var opts = map__22885__$1;var y1_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22885__$1,cljs.core.constant$keyword$350);var y0_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22885__$1,cljs.core.constant$keyword$351);var x_labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$352,data);var y_mean = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$332,data);var y_count = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$353,data);var yt = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (x_labels,y_mean,y_count){
return (function (t){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$354,t], null);
});})(x_labels,y_mean,y_count))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$327,data));var y_total = yt;return jayq.core.$.cljs$core$IFn$_invoke$arity$1(node).highcharts(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$355,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$360,null], null),cljs.core.constant$keyword$356,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$361,null], null),cljs.core.constant$keyword$357,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$362,x_labels,cljs.core.constant$keyword$363,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$364,270], null)], null),cljs.core.constant$keyword$358,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$356,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$361,y0_title], null)], null)], null),cljs.core.constant$keyword$359,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$273,y0_title,cljs.core.constant$keyword$263,"column",cljs.core.constant$keyword$358,0,cljs.core.constant$keyword$345,y_total], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$273,[cljs.core.str("Mean "),cljs.core.str(y0_title)].join(''),cljs.core.constant$keyword$263,"line",cljs.core.constant$keyword$358,0,cljs.core.constant$keyword$345,y_mean], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,opts){if(typeof clustermap.components.timeline_chart.t22891 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t22891 = (function (opts,owner,data,timeline_chart,meta22892){
this.opts = opts;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta22892 = meta22892;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t22891.cljs$lang$type = true;
clustermap.components.timeline_chart.t22891.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t22891";
clustermap.components.timeline_chart.t22891.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.timeline-chart/t22891");
});
clustermap.components.timeline_chart.t22891.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t22891.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;return clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node(self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t22891.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t22891.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;return clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node(self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t22891.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t22891.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "ref": "chart"});
});
clustermap.components.timeline_chart.t22891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22893){var self__ = this;
var _22893__$1 = this;return self__.meta22892;
});
clustermap.components.timeline_chart.t22891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22893,meta22892__$1){var self__ = this;
var _22893__$1 = this;return (new clustermap.components.timeline_chart.t22891(self__.opts,self__.owner,self__.data,self__.timeline_chart,meta22892__$1));
});
clustermap.components.timeline_chart.__GT_t22891 = (function __GT_t22891(opts__$1,owner__$1,data__$1,timeline_chart__$1,meta22892){return (new clustermap.components.timeline_chart.t22891(opts__$1,owner__$1,data__$1,timeline_chart__$1,meta22892));
});
}
return (new clustermap.components.timeline_chart.t22891(opts,owner,data,timeline_chart,null));
});
