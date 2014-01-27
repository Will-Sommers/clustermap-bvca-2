// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report.overview');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__20878){var map__20883 = p__20878;var map__20883__$1 = ((cljs.core.seq_QMARK_(map__20883))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20883):map__20883);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20883__$1,cljs.core.constant$keyword$164);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20883__$1,cljs.core.constant$keyword$194);var pred__20884 = cljs.core._EQ_;var expr__20885 = type;if(cljs.core.truth_((pred__20884.cljs$core$IFn$_invoke$arity$2 ? pred__20884.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$229,expr__20885) : pred__20884.call(null,cljs.core.constant$keyword$229,expr__20885))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$205,"Total",cljs.core.constant$keyword$234,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$233,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$205,"Average",cljs.core.constant$keyword$234,"Averages for the selected Portfolio Company"], null)], null);
} else
{if(cljs.core.truth_((pred__20884.cljs$core$IFn$_invoke$arity$2 ? pred__20884.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$230,expr__20885) : pred__20884.call(null,cljs.core.constant$keyword$230,expr__20885))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$205,"Total",cljs.core.constant$keyword$234,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$233,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$205,"Average",cljs.core.constant$keyword$234,"Averages over the Portfolio Companies of the selected Investor"], null)], null);
} else
{if(cljs.core.truth_((pred__20884.cljs$core$IFn$_invoke$arity$2 ? pred__20884.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$231,expr__20885) : pred__20884.call(null,cljs.core.constant$keyword$231,expr__20885))))
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$205,"Total",cljs.core.constant$keyword$234,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$233,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$205,"Average",cljs.core.constant$keyword$234,"Averages over the Portfolio Companies with sites in the selected Constituency"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$205,"Total",cljs.core.constant$keyword$234,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$233,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$205,"Average",cljs.core.constant$keyword$234,"Averages over all Portfolio Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__20887){var map__20896 = p__20887;var map__20896__$1 = ((cljs.core.seq_QMARK_(map__20896))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20896):map__20896);var selection_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20896__$1,cljs.core.constant$keyword$235);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20896__$1,cljs.core.constant$keyword$232);var all_portfolio_company_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20896__$1,cljs.core.constant$keyword$236);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var use_stats = (function (){var or__3406__auto__ = selection_portfolio_company_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$232,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$232.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$237,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20897 = use_stats;var G__20897__$1 = (((G__20897 == null))?null:cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(G__20897));return G__20897__$1;
})(),cljs.core.constant$keyword$160,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20897 = use_stats;var G__20897__$1 = (((G__20897 == null))?null:cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(G__20897));return G__20897__$1;
})(),cljs.core.constant$keyword$160,"-")),cljs.core.constant$keyword$238,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20898 = use_stats;var G__20898__$1 = (((G__20898 == null))?null:cljs.core.constant$keyword$243.cljs$core$IFn$_invoke$arity$1(G__20898));return G__20898__$1;
})(),cljs.core.constant$keyword$160,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20898 = use_stats;var G__20898__$1 = (((G__20898 == null))?null:cljs.core.constant$keyword$243.cljs$core$IFn$_invoke$arity$1(G__20898));return G__20898__$1;
})(),cljs.core.constant$keyword$160,"-")),cljs.core.constant$keyword$239,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20899 = use_stats;var G__20899__$1 = (((G__20899 == null))?null:cljs.core.constant$keyword$244.cljs$core$IFn$_invoke$arity$1(G__20899));return G__20899__$1;
})(),cljs.core.constant$keyword$160,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20899 = use_stats;var G__20899__$1 = (((G__20899 == null))?null:cljs.core.constant$keyword$244.cljs$core$IFn$_invoke$arity$1(G__20899));return G__20899__$1;
})(),cljs.core.constant$keyword$160,"-")),cljs.core.constant$keyword$240,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20900 = use_stats;var G__20900__$1 = (((G__20900 == null))?null:cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1(G__20900));var G__20900__$2 = (((G__20900__$1 == null))?null:cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(G__20900__$1));return G__20900__$2;
})(),cljs.core.constant$keyword$225,2,cljs.core.constant$keyword$160,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20900 = use_stats;var G__20900__$1 = (((G__20900 == null))?null:cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1(G__20900));var G__20900__$2 = (((G__20900__$1 == null))?null:cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(G__20900__$1));return G__20900__$2;
})(),cljs.core.constant$keyword$225,2,cljs.core.constant$keyword$160,"-")),cljs.core.constant$keyword$241,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__20901 = use_stats;var G__20901__$1 = (((G__20901 == null))?null:cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(G__20901));var G__20901__$2 = (((G__20901__$1 == null))?null:cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(G__20901__$1));return G__20901__$2;
})(),cljs.core.constant$keyword$225,2,cljs.core.constant$keyword$160,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20901 = use_stats;var G__20901__$1 = (((G__20901 == null))?null:cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(G__20901));var G__20901__$2 = (((G__20901__$1 == null))?null:cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(G__20901__$1));return G__20901__$2;
})(),cljs.core.constant$keyword$225,2,cljs.core.constant$keyword$160,"-"))], null)], 0)),cljs.core.constant$keyword$233,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$233.cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$237,"\u00A0",cljs.core.constant$keyword$238,"\u00A0",cljs.core.constant$keyword$239,"\u00A0",cljs.core.constant$keyword$240,(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20902 = use_stats;var G__20902__$1 = (((G__20902 == null))?null:cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1(G__20902));var G__20902__$2 = (((G__20902__$1 == null))?null:cljs.core.constant$keyword$247.cljs$core$IFn$_invoke$arity$1(G__20902__$1));return G__20902__$2;
})(),cljs.core.constant$keyword$225,2,cljs.core.constant$keyword$160,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20902 = use_stats;var G__20902__$1 = (((G__20902 == null))?null:cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1(G__20902));var G__20902__$2 = (((G__20902__$1 == null))?null:cljs.core.constant$keyword$247.cljs$core$IFn$_invoke$arity$1(G__20902__$1));return G__20902__$2;
})(),cljs.core.constant$keyword$225,2,cljs.core.constant$keyword$160,"-")),cljs.core.constant$keyword$241,(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__20903 = use_stats;var G__20903__$1 = (((G__20903 == null))?null:cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(G__20903));var G__20903__$2 = (((G__20903__$1 == null))?null:cljs.core.constant$keyword$247.cljs$core$IFn$_invoke$arity$1(G__20903__$1));return G__20903__$2;
})(),cljs.core.constant$keyword$227,0,cljs.core.constant$keyword$160,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20903 = use_stats;var G__20903__$1 = (((G__20903 == null))?null:cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(G__20903));var G__20903__$2 = (((G__20903__$1 == null))?null:cljs.core.constant$keyword$247.cljs$core$IFn$_invoke$arity$1(G__20903__$1));return G__20903__$2;
})(),cljs.core.constant$keyword$227,0,cljs.core.constant$keyword$160,"-"))], null)], 0))], null);
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__20922 = clustermap.components.full_report.overview.overview_data(data);var map__20922__$1 = ((cljs.core.seq_QMARK_(map__20922))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20922):map__20922);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20922__$1,cljs.core.constant$keyword$233);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20922__$1,cljs.core.constant$keyword$232);if(typeof clustermap.components.full_report.overview.t20923 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t20923 = (function (selection,averages,map__20922,data,overview,meta20924){
this.selection = selection;
this.averages = averages;
this.map__20922 = map__20922;
this.data = data;
this.overview = overview;
this.meta20924 = meta20924;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t20923.cljs$lang$type = true;
clustermap.components.full_report.overview.t20923.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t20923";
clustermap.components.full_report.overview.t20923.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t20923");
});
clustermap.components.full_report.overview.t20923.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t20923.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"2012 Overview"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$234) : self__.selection.call(null,cljs.core.constant$keyword$234))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$205) : self__.selection.call(null,cljs.core.constant$keyword$205)))),React.DOM.td(null,(function (){var attrs20930 = cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs20930))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$185,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs20930], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs20930));
}
})()),React.DOM.td(null,(function (){var attrs20931 = cljs.core.constant$keyword$238.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs20931))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$185,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs20931], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs20931));
}
})()),React.DOM.td(null,(function (){var attrs20932 = cljs.core.constant$keyword$239.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs20932))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$185,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs20932], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs20932));
}
})()),React.DOM.td(null,(function (){var attrs20933 = cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs20933))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$185,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs20933], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs20933));
}
})()),React.DOM.td(null,(function (){var attrs20934 = cljs.core.constant$keyword$241.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs20934))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$185,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs20934], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs20934));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$234) : self__.averages.call(null,cljs.core.constant$keyword$234))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$205) : self__.averages.call(null,cljs.core.constant$keyword$205)))),React.DOM.td(null,(function (){var attrs20935 = cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs20935))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$185,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs20935], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs20935));
}
})()),React.DOM.td(null,(function (){var attrs20936 = cljs.core.constant$keyword$238.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs20936))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$185,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs20936], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs20936));
}
})()),React.DOM.td(null,(function (){var attrs20937 = cljs.core.constant$keyword$239.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs20937))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$185,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs20937], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs20937));
}
})()),React.DOM.td(null,(function (){var attrs20938 = cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs20938))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$185,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs20938], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs20938));
}
})()),React.DOM.td(null,(function (){var attrs20939 = cljs.core.constant$keyword$241.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs20939))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$185,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs20939], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs20939));
}
})()))))));
});
clustermap.components.full_report.overview.t20923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20925){var self__ = this;
var _20925__$1 = this;return self__.meta20924;
});
clustermap.components.full_report.overview.t20923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20925,meta20924__$1){var self__ = this;
var _20925__$1 = this;return (new clustermap.components.full_report.overview.t20923(self__.selection,self__.averages,self__.map__20922,self__.data,self__.overview,meta20924__$1));
});
clustermap.components.full_report.overview.__GT_t20923 = (function __GT_t20923(selection__$1,averages__$1,map__20922__$2,data__$1,overview__$1,meta20924){return (new clustermap.components.full_report.overview.t20923(selection__$1,averages__$1,map__20922__$2,data__$1,overview__$1,meta20924));
});
}
return (new clustermap.components.full_report.overview.t20923(selection,averages,map__20922__$1,data,overview,null));
});
