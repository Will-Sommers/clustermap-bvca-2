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
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__33632){var map__33634 = p__33632;var map__33634__$1 = ((cljs.core.seq_QMARK_.call(null,map__33634))?cljs.core.apply.call(null,cljs.core.hash_map,map__33634):map__33634);var opts = map__33634__$1;var y1_title = cljs.core.get.call(null,map__33634__$1,new cljs.core.Keyword(null,"y1-title","y1-title",3377247893));var y0_title = cljs.core.get.call(null,map__33634__$1,new cljs.core.Keyword(null,"y0-title","y0-title",2489744212));var x_labels = cljs.core.map.call(null,cljs.core.first,data);var y_mean = cljs.core.map.call(null,new cljs.core.Keyword(null,"mean","mean",1017251639),data);var y_count = cljs.core.map.call(null,new cljs.core.Keyword(null,"count","count",1108755585),data);var yt = cljs.core.map.call(null,((function (x_labels,y_mean,y_count){
return (function (t){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",1013904363),t], null);
});})(x_labels,y_mean,y_count))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"total","total",1124454070),data));var y_total = yt;return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1108527952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",1127031096),null], null),new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1126781867),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",2310420878),x_labels,new cljs.core.Keyword(null,"labels","labels",4198454129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",973603568),270], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1127705388),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),y0_title], null)], null)], null),new cljs.core.Keyword(null,"series","series",4403032553),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),y0_title,new cljs.core.Keyword(null,"type","type",1017479852),"boxplot",new cljs.core.Keyword(null,"yAxis","yAxis",1127705388),0,new cljs.core.Keyword(null,"data","data",1016980252),data], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,p__33635){var map__33640 = p__33635;var map__33640__$1 = ((cljs.core.seq_QMARK_.call(null,map__33640))?cljs.core.apply.call(null,cljs.core.hash_map,map__33640):map__33640);var opts = map__33640__$1;var id = cljs.core.get.call(null,map__33640__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(typeof clustermap.components.timeline_chart.t33641 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t33641 = (function (id,opts,map__33640,p__33635,owner,data,timeline_chart,meta33642){
this.id = id;
this.opts = opts;
this.map__33640 = map__33640;
this.p__33635 = p__33635;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta33642 = meta33642;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t33641.cljs$lang$type = true;
clustermap.components.timeline_chart.t33641.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t33641";
clustermap.components.timeline_chart.t33641.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.timeline-chart/t33641");
});
clustermap.components.timeline_chart.t33641.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t33641.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;return clustermap.components.timeline_chart.create_chart.call(null,self__.data,om.core.get_node.call(null,self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t33641.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t33641.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;clustermap.components.timeline_chart.create_chart.call(null,self__.data,om.core.get_node.call(null,self__.owner,"chart"),self__.opts);
return jayq.core.$.call(null,document).on("clustermap-change-view",(function (e){return jayq.core.$.call(null,[cljs.core.str("#"),cljs.core.str(self__.id)].join('')).highcharts().reflow();
}));
});
clustermap.components.timeline_chart.t33641.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t33641.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});
clustermap.components.timeline_chart.t33641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33643){var self__ = this;
var _33643__$1 = this;return self__.meta33642;
});
clustermap.components.timeline_chart.t33641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33643,meta33642__$1){var self__ = this;
var _33643__$1 = this;return (new clustermap.components.timeline_chart.t33641(self__.id,self__.opts,self__.map__33640,self__.p__33635,self__.owner,self__.data,self__.timeline_chart,meta33642__$1));
});
clustermap.components.timeline_chart.__GT_t33641 = (function __GT_t33641(id__$1,opts__$1,map__33640__$2,p__33635__$1,owner__$1,data__$1,timeline_chart__$1,meta33642){return (new clustermap.components.timeline_chart.t33641(id__$1,opts__$1,map__33640__$2,p__33635__$1,owner__$1,data__$1,timeline_chart__$1,meta33642));
});
}
return (new clustermap.components.timeline_chart.t33641(id,opts,map__33640__$1,p__33635,owner,data,timeline_chart,null));
});
