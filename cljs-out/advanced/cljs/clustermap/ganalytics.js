// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.ganalytics');
goog.require('cljs.core');
clustermap.ganalytics.send_pageview = (function send_pageview(path){var ua_code = (function (){var G__34786 = window;var G__34786__$1 = (((G__34786 == null))?null:G__34786.config);var G__34786__$2 = (((G__34786__$1 == null))?null:G__34786__$1.ua);var G__34786__$3 = (((G__34786__$2 == null))?null:G__34786__$2.code);return G__34786__$3;
})();if(cljs.core.truth_((function (){var and__3429__auto__ = window.ga;if(cljs.core.truth_(and__3429__auto__))
{return ua_code;
} else
{return and__3429__auto__;
}
})()))
{return ga("send","pageview",path);
} else
{return null;
}
});
