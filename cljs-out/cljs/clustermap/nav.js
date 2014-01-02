// Compiled by ClojureScript 0.0-2080
goog.provide('clustermap.nav');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('domina');
goog.require('domina.xpath');
goog.require('domina');
goog.require('domina.css');
goog.require('cljs.core.async');
goog.require('domina.css');
goog.require('domina.xpath');
goog.require('jayq.core');
clustermap.nav.toggle_nav_search = (function toggle_nav_search(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#nav .search > a"),new cljs.core.Keyword(null,"click","click",1108654330),(function (e){domina.events.prevent_default.call(null,e);
var target = domina.events.target.call(null,e);var parent = domina.xpath.xpath.call(null,target,"..");domina.toggle_class_BANG_.call(null,parent,"open");
return jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,domina.css.sel.call(null,"#search")))).toggle();
}));
});
clustermap.nav.switch_view = (function switch_view(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#nav .map > a, #nav .lists > a"),new cljs.core.Keyword(null,"click","click",1108654330),(function (e){domina.events.prevent_default.call(null,e);
var target = domina.events.target.call(null,e);var li = domina.xpath.xpath.call(null,target,"..");var ul = domina.xpath.xpath.call(null,li,"..");var active_li = domina.css.sel.call(null,ul,"> .active");domina.remove_class_BANG_.call(null,active_li,"active");
return domina.add_class_BANG_.call(null,li,"active");
}));
});
clustermap.nav.init = (function init(){clustermap.nav.toggle_nav_search.call(null);
return clustermap.nav.switch_view.call(null);
});

//# sourceMappingURL=nav.js.map