// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.page_title');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.om');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clustermap.om');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__22929 = cljs.core._EQ_;var expr__22930 = type;if(cljs.core.truth_((pred__22929.cljs$core$IFn$_invoke$arity$2 ? pred__22929.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$305,expr__22930) : pred__22929.call(null,cljs.core.constant$keyword$305,expr__22930))))
{return "Portfolio Company";
} else
{if(cljs.core.truth_((pred__22929.cljs$core$IFn$_invoke$arity$2 ? pred__22929.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$306,expr__22930) : pred__22929.call(null,cljs.core.constant$keyword$306,expr__22930))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__22929.cljs$core$IFn$_invoke$arity$2 ? pred__22929.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$307,expr__22930) : pred__22929.call(null,cljs.core.constant$keyword$307,expr__22930))))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__22930)].join('')));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(selection,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$308);var type = (function (){var G__22940 = selection;var G__22940__$1 = (((G__22940 == null))?null:cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(G__22940));var G__22940__$2 = (((G__22940__$1 == null))?null:clustermap.components.page_title.describe_type(G__22940__$1));return G__22940__$2;
})();var name = (function (){var G__22941 = selection;var G__22941__$1 = (((G__22941 == null))?null:cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1(G__22941));var G__22941__$2 = (((G__22941__$1 == null))?null:cljs.core.constant$keyword$282.cljs$core$IFn$_invoke$arity$1(G__22941__$1));return G__22941__$2;
})();var url = (function (){var G__22942 = selection;var G__22942__$1 = (((G__22942 == null))?null:cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1(G__22942));var G__22942__$2 = (((G__22942__$1 == null))?null:cljs.core.constant$keyword$309.cljs$core$IFn$_invoke$arity$1(G__22942__$1));return G__22942__$2;
})();if(typeof clustermap.components.page_title.t22943 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t22943 = (function (url,name,type,comm,owner,selection,page_title_component,meta22944){
this.url = url;
this.name = name;
this.type = type;
this.comm = comm;
this.owner = owner;
this.selection = selection;
this.page_title_component = page_title_component;
this.meta22944 = meta22944;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t22943.cljs$lang$type = true;
clustermap.components.page_title.t22943.cljs$lang$ctorStr = "clustermap.components.page-title/t22943";
clustermap.components.page_title.t22943.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.page-title/t22943");
});
clustermap.components.page_title.t22943.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t22943.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,"map"], null));
})},"View on map"),(function (){var attrs22946 = (function (){var or__3406__auto__ = self__.type;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_(attrs22946))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22946),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22946));
}
})(),(function (){var attrs22947 = (function (){var or__3406__auto__ = self__.name;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_(attrs22947))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22947),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22947));
}
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});
clustermap.components.page_title.t22943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22945){var self__ = this;
var _22945__$1 = this;return self__.meta22944;
});
clustermap.components.page_title.t22943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22945,meta22944__$1){var self__ = this;
var _22945__$1 = this;return (new clustermap.components.page_title.t22943(self__.url,self__.name,self__.type,self__.comm,self__.owner,self__.selection,self__.page_title_component,meta22944__$1));
});
clustermap.components.page_title.__GT_t22943 = (function __GT_t22943(url__$1,name__$1,type__$1,comm__$1,owner__$1,selection__$1,page_title_component__$1,meta22944){return (new clustermap.components.page_title.t22943(url__$1,name__$1,type__$1,comm__$1,owner__$1,selection__$1,page_title_component__$1,meta22944));
});
}
return (new clustermap.components.page_title.t22943(url,name,type,comm,owner,selection,page_title_component,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$311),document.getElementById(elem_id));
});
