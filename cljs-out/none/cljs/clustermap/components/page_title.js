// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.page_title');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clustermap.formats.number');
clustermap.components.page_title.page_title = (function page_title(data){var type = (function (){var G__11331 = data;var G__11331__$1 = (((G__11331 == null))?null:cljs.core.get_in.call(null,G__11331,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null)));var G__11331__$2 = (((G__11331__$1 == null))?null:cljs.core.name.call(null,G__11331__$1));return G__11331__$2;
})();var name = (function (){var G__11332 = data;var G__11332__$1 = (((G__11332 == null))?null:cljs.core.get_in.call(null,G__11332,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null)));var G__11332__$2 = (((G__11332__$1 == null))?null:(G__11332__$1["name"]));return G__11332__$2;
})();if(typeof clustermap.components.page_title.t11333 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t11333 = (function (name,type,data,page_title,meta11334){
this.name = name;
this.type = type;
this.data = data;
this.page_title = page_title;
this.meta11334 = meta11334;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t11333.cljs$lang$type = true;
clustermap.components.page_title.t11333.cljs$lang$ctorStr = "clustermap.components.page-title/t11333";
clustermap.components.page_title.t11333.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.page-title/t11333");
});
clustermap.components.page_title.t11333.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t11333.prototype.om$core$IRender$render$arity$1 = (function (this__9144__auto__){var self__ = this;
var this__9144__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button"},"View on map"),(function (){var attrs11338 = (function (){var or__3406__auto__ = self__.type;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_.call(null,attrs11338))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11338),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11338));
}
})(),(function (){var attrs11339 = (function (){var or__3406__auto__ = self__.name;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_.call(null,attrs11339))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11339),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11339));
}
})());
});
clustermap.components.page_title.t11333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11335){var self__ = this;
var _11335__$1 = this;return self__.meta11334;
});
clustermap.components.page_title.t11333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11335,meta11334__$1){var self__ = this;
var _11335__$1 = this;return (new clustermap.components.page_title.t11333(self__.name,self__.type,self__.data,self__.page_title,meta11334__$1));
});
clustermap.components.page_title.__GT_t11333 = (function __GT_t11333(name__$1,type__$1,data__$1,page_title__$1,meta11334){return (new clustermap.components.page_title.t11333(name__$1,type__$1,data__$1,page_title__$1,meta11334));
});
}
return (new clustermap.components.page_title.t11333(name,type,data,page_title,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.components.page_title.page_title,document.getElementById(elem_id));
});

//# sourceMappingURL=page_title.js.map