// Compiled by ClojureScript 0.0-2080
goog.provide('clustermap.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.Uri');
goog.require('clustermap.nav');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('clustermap.map');
goog.require('clustermap.map');
goog.require('clojure.browser.repl');
goog.require('clustermap.nav');
goog.require('cljs.core.async');
goog.require('clojure.browser.repl');
goog.require('goog.net.Jsonp');
goog.require('goog.events');
clustermap.core.wiki_search_url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
clustermap.core.listen = (function listen(el,type){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();goog.events.listen(el,type,(function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,e);
}));
return out;
});
clustermap.core.jsonp = (function jsonp(uri){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var req = (new goog.net.Jsonp((new goog.Uri(uri))));req.send(null,(function (res){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,res);
}));
return out;
});
clustermap.core.query_url = (function query_url(q){return [cljs.core.str(clustermap.core.wiki_search_url),cljs.core.str(q)].join('');
});
clustermap.core.user_query = (function user_query(){return goog.dom.getElement("query").value;
});
clustermap.core.render_query = (function render_query(results){return [cljs.core.str("<ul>"),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__3984__auto__ = (function iter__14860(s__14861){return (new cljs.core.LazySeq(null,(function (){var s__14861__$1 = s__14861;while(true){
var temp__4092__auto__ = cljs.core.seq(s__14861__$1);if(temp__4092__auto__)
{var s__14861__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__14861__$2))
{var c__3982__auto__ = cljs.core.chunk_first(s__14861__$2);var size__3983__auto__ = cljs.core.count(c__3982__auto__);var b__14863 = cljs.core.chunk_buffer(size__3983__auto__);if((function (){var i__14862 = 0;while(true){
if((i__14862 < size__3983__auto__))
{var result = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__3982__auto__,i__14862);cljs.core.chunk_append(b__14863,[cljs.core.str("<li>"),cljs.core.str(result),cljs.core.str("</li>")].join(''));
{
var G__14864 = (i__14862 + 1);
i__14862 = G__14864;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14863),iter__14860(cljs.core.chunk_rest(s__14861__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14863),null);
}
} else
{var result = cljs.core.first(s__14861__$2);return cljs.core.cons([cljs.core.str("<li>"),cljs.core.str(result),cljs.core.str("</li>")].join(''),iter__14860(cljs.core.rest(s__14861__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3984__auto__(results);
})())),cljs.core.str("</ul>")].join('');
});
clustermap.core.init = (function init(){clustermap.nav.init();
return clustermap.map.init();
});
clustermap.core.init();
