// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.core');
goog.require('cljs.core');
goog.require('clustermap.app');
goog.require('clustermap.app');
goog.require('clustermap.nav');
goog.require('clustermap.nav');
goog.require('clustermap.repl');
clustermap.core.init = (function init(){clustermap.nav.init();
return clustermap.app.init();
});
if(cljs.core.truth_(config.repl))
{setTimeout(clustermap.core.init,2000);
} else
{if(true)
{clustermap.core.init();
} else
{}
}
