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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__22411){var map__22416 = p__22411;var map__22416__$1 = ((cljs.core.seq_QMARK_(map__22416))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22416):map__22416);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22416__$1,cljs.core.constant$keyword$234);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22416__$1,cljs.core.constant$keyword$269);var pred__22417 = cljs.core._EQ_;var expr__22418 = type;if(cljs.core.truth_((pred__22417.cljs$core$IFn$_invoke$arity$2 ? pred__22417.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$302,expr__22418) : pred__22417.call(null,cljs.core.constant$keyword$302,expr__22418))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$308,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$279,"Total",cljs.core.constant$keyword$319,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$317,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$279,"Average",cljs.core.constant$keyword$319,"Averages for the selected Portfolio Company"], null),cljs.core.constant$keyword$318,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$279,"Benchmark",cljs.core.constant$keyword$319,"Averages over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__22417.cljs$core$IFn$_invoke$arity$2 ? pred__22417.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$303,expr__22418) : pred__22417.call(null,cljs.core.constant$keyword$303,expr__22418))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$308,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$279,"Total",cljs.core.constant$keyword$319,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$317,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$279,"Average",cljs.core.constant$keyword$319,"Averages over the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$318,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$279,"Benchmark",cljs.core.constant$keyword$319,"Averages over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__22417.cljs$core$IFn$_invoke$arity$2 ? pred__22417.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$304,expr__22418) : pred__22417.call(null,cljs.core.constant$keyword$304,expr__22418))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$308,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$279,"Total",cljs.core.constant$keyword$319,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$317,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$279,"Average",cljs.core.constant$keyword$319,"Averages over the Portfolio Companies with sites in the selected Constituency"], null),cljs.core.constant$keyword$318,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$279,"Benchmark",cljs.core.constant$keyword$319,"Averages over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$308,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$279,"Total",cljs.core.constant$keyword$319,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$317,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$279,"Average",cljs.core.constant$keyword$319,"Averages over all Portfolio Companies"], null),cljs.core.constant$keyword$318,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$279,"Benchmark",cljs.core.constant$keyword$319,"Averages over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__22420){var map__22446 = p__22420;var map__22446__$1 = ((cljs.core.seq_QMARK_(map__22446))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22446):map__22446);var selection_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22446__$1,cljs.core.constant$keyword$320);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22446__$1,cljs.core.constant$keyword$308);var all_portfolio_company_site_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22446__$1,cljs.core.constant$keyword$321);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var site_stats = (function (){var or__3406__auto__ = selection_portfolio_company_site_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_site_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$308,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$308.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$322,cljs.core.constant$keyword$323,cljs.core.constant$keyword$324,cljs.core.constant$keyword$325,cljs.core.constant$keyword$326,cljs.core.constant$keyword$327,cljs.core.constant$keyword$328,cljs.core.constant$keyword$329,cljs.core.constant$keyword$330],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22447 = site_stats;var G__22447__$1 = (((G__22447 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22447));return G__22447__$1;
})(),cljs.core.constant$keyword$230,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22447 = site_stats;var G__22447__$1 = (((G__22447 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22447));return G__22447__$1;
})(),cljs.core.constant$keyword$230,"-")),(function (){var G__22448 = site_stats;var G__22448__$1 = (((G__22448 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__22448));var G__22448__$2 = (((G__22448__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22448__$1));return G__22448__$2;
})(),(function (){var G__22449 = site_stats;var G__22449__$1 = (((G__22449 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22449));var G__22449__$2 = (((G__22449__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22449__$1));return G__22449__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22450 = site_stats;var G__22450__$1 = (((G__22450 == null))?null:cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(G__22450));return G__22450__$1;
})(),cljs.core.constant$keyword$230,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22450 = site_stats;var G__22450__$1 = (((G__22450 == null))?null:cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(G__22450));return G__22450__$1;
})(),cljs.core.constant$keyword$230,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22451 = site_stats;var G__22451__$1 = (((G__22451 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__22451));var G__22451__$2 = (((G__22451__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22451__$1));return G__22451__$2;
})(),cljs.core.constant$keyword$300,0,cljs.core.constant$keyword$230,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22451 = site_stats;var G__22451__$1 = (((G__22451 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__22451));var G__22451__$2 = (((G__22451__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22451__$1));return G__22451__$2;
})(),cljs.core.constant$keyword$300,0,cljs.core.constant$keyword$230,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22452 = site_stats;var G__22452__$1 = (((G__22452 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22452));var G__22452__$2 = (((G__22452__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22452__$1));return G__22452__$2;
})(),cljs.core.constant$keyword$298,2,cljs.core.constant$keyword$230,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22452 = site_stats;var G__22452__$1 = (((G__22452 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22452));var G__22452__$2 = (((G__22452__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22452__$1));return G__22452__$2;
})(),cljs.core.constant$keyword$298,2,cljs.core.constant$keyword$230,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22453 = site_stats;var G__22453__$1 = (((G__22453 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22453));var G__22453__$2 = (((G__22453__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22453__$1));return G__22453__$2;
})(),cljs.core.constant$keyword$300,0,cljs.core.constant$keyword$230,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22453 = site_stats;var G__22453__$1 = (((G__22453 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22453));var G__22453__$2 = (((G__22453__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22453__$1));return G__22453__$2;
})(),cljs.core.constant$keyword$300,0,cljs.core.constant$keyword$230,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22454 = site_stats;var G__22454__$1 = (((G__22454 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22454));return G__22454__$1;
})(),cljs.core.constant$keyword$230,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22454 = site_stats;var G__22454__$1 = (((G__22454 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22454));return G__22454__$1;
})(),cljs.core.constant$keyword$230,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22455 = site_stats;var G__22455__$1 = (((G__22455 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22455));var G__22455__$2 = (((G__22455__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22455__$1));return G__22455__$2;
})(),cljs.core.constant$keyword$298,2,cljs.core.constant$keyword$230,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22455 = site_stats;var G__22455__$1 = (((G__22455 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22455));var G__22455__$2 = (((G__22455__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22455__$1));return G__22455__$2;
})(),cljs.core.constant$keyword$298,2,cljs.core.constant$keyword$230,"-"))])], 0)),cljs.core.constant$keyword$317,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$322,cljs.core.constant$keyword$323,cljs.core.constant$keyword$324,cljs.core.constant$keyword$325,cljs.core.constant$keyword$326,cljs.core.constant$keyword$327,cljs.core.constant$keyword$328,cljs.core.constant$keyword$329,cljs.core.constant$keyword$330],["\u00A0",(function (){var G__22456 = site_stats;var G__22456__$1 = (((G__22456 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__22456));var G__22456__$2 = (((G__22456__$1 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22456__$1));return G__22456__$2;
})(),(function (){var G__22457 = site_stats;var G__22457__$1 = (((G__22457 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22457));var G__22457__$2 = (((G__22457__$1 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22457__$1));return G__22457__$2;
})(),"\u00A0",(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22458 = site_stats;var G__22458__$1 = (((G__22458 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__22458));var G__22458__$2 = (((G__22458__$1 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22458__$1));return G__22458__$2;
})(),cljs.core.constant$keyword$300,0,cljs.core.constant$keyword$230,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22458 = site_stats;var G__22458__$1 = (((G__22458 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__22458));var G__22458__$2 = (((G__22458__$1 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22458__$1));return G__22458__$2;
})(),cljs.core.constant$keyword$300,0,cljs.core.constant$keyword$230,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22459 = site_stats;var G__22459__$1 = (((G__22459 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22459));var G__22459__$2 = (((G__22459__$1 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22459__$1));return G__22459__$2;
})(),cljs.core.constant$keyword$298,2,cljs.core.constant$keyword$230,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22459 = site_stats;var G__22459__$1 = (((G__22459 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22459));var G__22459__$2 = (((G__22459__$1 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22459__$1));return G__22459__$2;
})(),cljs.core.constant$keyword$298,2,cljs.core.constant$keyword$230,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22460 = site_stats;var G__22460__$1 = (((G__22460 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22460));var G__22460__$2 = (((G__22460__$1 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22460__$1));return G__22460__$2;
})(),cljs.core.constant$keyword$300,0,cljs.core.constant$keyword$230,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22460 = site_stats;var G__22460__$1 = (((G__22460 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22460));var G__22460__$2 = (((G__22460__$1 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22460__$1));return G__22460__$2;
})(),cljs.core.constant$keyword$300,0,cljs.core.constant$keyword$230,"-")),"\u00A0",(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22461 = site_stats;var G__22461__$1 = (((G__22461 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22461));var G__22461__$2 = (((G__22461__$1 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22461__$1));return G__22461__$2;
})(),cljs.core.constant$keyword$298,2,cljs.core.constant$keyword$230,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22461 = site_stats;var G__22461__$1 = (((G__22461 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22461));var G__22461__$2 = (((G__22461__$1 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22461__$1));return G__22461__$2;
})(),cljs.core.constant$keyword$298,2,cljs.core.constant$keyword$230,"-"))])], 0)),cljs.core.constant$keyword$318,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$322,cljs.core.constant$keyword$323,cljs.core.constant$keyword$324,cljs.core.constant$keyword$325,cljs.core.constant$keyword$326,cljs.core.constant$keyword$327,cljs.core.constant$keyword$328,cljs.core.constant$keyword$329,cljs.core.constant$keyword$330],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22462 = all_portfolio_company_site_stats;var G__22462__$1 = (((G__22462 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22462));return G__22462__$1;
})(),cljs.core.constant$keyword$230,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22462 = all_portfolio_company_site_stats;var G__22462__$1 = (((G__22462 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__22462));return G__22462__$1;
})(),cljs.core.constant$keyword$230,"-")),(function (){var G__22463 = all_portfolio_company_site_stats;var G__22463__$1 = (((G__22463 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__22463));var G__22463__$2 = (((G__22463__$1 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22463__$1));return G__22463__$2;
})(),(function (){var G__22464 = all_portfolio_company_site_stats;var G__22464__$1 = (((G__22464 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22464));var G__22464__$2 = (((G__22464__$1 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__22464__$1));return G__22464__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22465 = all_portfolio_company_site_stats;var G__22465__$1 = (((G__22465 == null))?null:cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(G__22465));return G__22465__$1;
})(),cljs.core.constant$keyword$230,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22465 = all_portfolio_company_site_stats;var G__22465__$1 = (((G__22465 == null))?null:cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(G__22465));return G__22465__$1;
})(),cljs.core.constant$keyword$230,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22466 = all_portfolio_company_site_stats;var G__22466__$1 = (((G__22466 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__22466));var G__22466__$2 = (((G__22466__$1 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22466__$1));return G__22466__$2;
})(),cljs.core.constant$keyword$300,0,cljs.core.constant$keyword$230,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22466 = all_portfolio_company_site_stats;var G__22466__$1 = (((G__22466 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__22466));var G__22466__$2 = (((G__22466__$1 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22466__$1));return G__22466__$2;
})(),cljs.core.constant$keyword$300,0,cljs.core.constant$keyword$230,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22467 = all_portfolio_company_site_stats;var G__22467__$1 = (((G__22467 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22467));var G__22467__$2 = (((G__22467__$1 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22467__$1));return G__22467__$2;
})(),cljs.core.constant$keyword$298,2,cljs.core.constant$keyword$230,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22467 = all_portfolio_company_site_stats;var G__22467__$1 = (((G__22467 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__22467));var G__22467__$2 = (((G__22467__$1 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22467__$1));return G__22467__$2;
})(),cljs.core.constant$keyword$298,2,cljs.core.constant$keyword$230,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__22468 = all_portfolio_company_site_stats;var G__22468__$1 = (((G__22468 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22468));var G__22468__$2 = (((G__22468__$1 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22468__$1));return G__22468__$2;
})(),cljs.core.constant$keyword$300,0,cljs.core.constant$keyword$230,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22468 = all_portfolio_company_site_stats;var G__22468__$1 = (((G__22468 == null))?null:cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(G__22468));var G__22468__$2 = (((G__22468__$1 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22468__$1));return G__22468__$2;
})(),cljs.core.constant$keyword$300,0,cljs.core.constant$keyword$230,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22469 = all_portfolio_company_site_stats;var G__22469__$1 = (((G__22469 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22469));return G__22469__$1;
})(),cljs.core.constant$keyword$230,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22469 = all_portfolio_company_site_stats;var G__22469__$1 = (((G__22469 == null))?null:cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(G__22469));return G__22469__$1;
})(),cljs.core.constant$keyword$230,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22470 = all_portfolio_company_site_stats;var G__22470__$1 = (((G__22470 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22470));var G__22470__$2 = (((G__22470__$1 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22470__$1));return G__22470__$2;
})(),cljs.core.constant$keyword$298,2,cljs.core.constant$keyword$230,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22470 = all_portfolio_company_site_stats;var G__22470__$1 = (((G__22470 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__22470));var G__22470__$2 = (((G__22470__$1 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__22470__$1));return G__22470__$2;
})(),cljs.core.constant$keyword$298,2,cljs.core.constant$keyword$230,"-"))])], 0))], null);
});
clustermap.components.full_report.overview.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > 0))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < 0))
{return React.DOM.i({"className": "icon-negative"});
} else
{if(true)
{return null;
} else
{return null;
}
}
}
}
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__22514 = clustermap.components.full_report.overview.overview_data(data);var map__22514__$1 = ((cljs.core.seq_QMARK_(map__22514))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22514):map__22514);var benchmark = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22514__$1,cljs.core.constant$keyword$318);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22514__$1,cljs.core.constant$keyword$317);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22514__$1,cljs.core.constant$keyword$308);if(typeof clustermap.components.full_report.overview.t22515 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t22515 = (function (selection,averages,benchmark,map__22514,data,overview,meta22516){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__22514 = map__22514;
this.data = data;
this.overview = overview;
this.meta22516 = meta22516;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t22515.cljs$lang$type = true;
clustermap.components.full_report.overview.t22515.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t22515";
clustermap.components.full_report.overview.t22515.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.overview/t22515");
});
clustermap.components.full_report.overview.t22515.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t22515.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$319) : self__.selection.call(null,cljs.core.constant$keyword$319))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$279) : self__.selection.call(null,cljs.core.constant$keyword$279)))),React.DOM.td(null,(function (){var attrs22522 = cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22522))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22522], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22522));
}
})()),React.DOM.td(null,(function (){var attrs22523 = cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22523))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22523], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22523));
}
})()),React.DOM.td(null,(function (){var attrs22524 = cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22524))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22524], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22524));
}
})()),React.DOM.td(null,(function (){var attrs22525 = cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22525))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22525], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22525));
}
})()),React.DOM.td(null,(function (){var attrs22526 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs22526))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22526], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22526));
}
})()),React.DOM.td(null,(function (){var attrs22527 = cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22527))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22527], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22527));
}
})()),React.DOM.td(null,(function (){var attrs22528 = cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22528))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22528], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22528));
}
})()),React.DOM.td(null,(function (){var attrs22529 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs22529))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22529], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22529));
}
})()),React.DOM.td(null,(function (){var attrs22530 = cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs22530))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs22530], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs22530));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$319) : self__.averages.call(null,cljs.core.constant$keyword$319))}),sablono.interpreter.interpret((self__.averages.cljs$core$IFn$_invoke$arity$1 ? self__.averages.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$279) : self__.averages.call(null,cljs.core.constant$keyword$279)))),React.DOM.td(null,(function (){var attrs22531 = cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22531))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22531], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22531));
}
})()),React.DOM.td(null,(function (){var attrs22532 = cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22532))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22532], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22532));
}
})()),React.DOM.td(null,(function (){var attrs22533 = cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22533))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22533], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22533));
}
})()),React.DOM.td(null,(function (){var attrs22534 = cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22534))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22534], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22534));
}
})()),React.DOM.td(null,(function (){var attrs22535 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs22535))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22535], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22535));
}
})()),React.DOM.td(null,(function (){var attrs22536 = cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22536))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22536], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22536));
}
})()),React.DOM.td(null,(function (){var attrs22537 = cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22537))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22537], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22537));
}
})()),React.DOM.td(null,(function (){var attrs22538 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(self__.averages));if(cljs.core.map_QMARK_(attrs22538))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22538], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22538));
}
})()),React.DOM.td(null,(function (){var attrs22539 = cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_(attrs22539))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs22539], 0))),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret(attrs22539));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$319) : self__.benchmark.call(null,cljs.core.constant$keyword$319))}),sablono.interpreter.interpret((self__.benchmark.cljs$core$IFn$_invoke$arity$1 ? self__.benchmark.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$279) : self__.benchmark.call(null,cljs.core.constant$keyword$279)))),React.DOM.td(null,(function (){var attrs22540 = cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22540))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22540], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22540));
}
})()),React.DOM.td(null,(function (){var attrs22541 = cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22541))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22541], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22541));
}
})()),React.DOM.td(null,(function (){var attrs22542 = cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22542))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22542], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22542));
}
})()),React.DOM.td(null,(function (){var attrs22543 = cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22543))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22543], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22543));
}
})()),React.DOM.td(null,(function (){var attrs22544 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs22544))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22544], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22544));
}
})()),React.DOM.td(null,(function (){var attrs22545 = cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22545))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22545], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22545));
}
})()),React.DOM.td(null,(function (){var attrs22546 = cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22546))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22546], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22546));
}
})()),React.DOM.td(null,(function (){var attrs22547 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(self__.benchmark));if(cljs.core.map_QMARK_(attrs22547))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22547], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22547));
}
})()),React.DOM.td(null,(function (){var attrs22548 = cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(self__.benchmark);if(cljs.core.map_QMARK_(attrs22548))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["benchmark"], null)], null),attrs22548], 0))),null);
} else
{return React.DOM.span({"className": "benchmark"},sablono.interpreter.interpret(attrs22548));
}
})()))))));
});
clustermap.components.full_report.overview.t22515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22517){var self__ = this;
var _22517__$1 = this;return self__.meta22516;
});
clustermap.components.full_report.overview.t22515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22517,meta22516__$1){var self__ = this;
var _22517__$1 = this;return (new clustermap.components.full_report.overview.t22515(self__.selection,self__.averages,self__.benchmark,self__.map__22514,self__.data,self__.overview,meta22516__$1));
});
clustermap.components.full_report.overview.__GT_t22515 = (function __GT_t22515(selection__$1,averages__$1,benchmark__$1,map__22514__$2,data__$1,overview__$1,meta22516){return (new clustermap.components.full_report.overview.t22515(selection__$1,averages__$1,benchmark__$1,map__22514__$2,data__$1,overview__$1,meta22516));
});
}
return (new clustermap.components.full_report.overview.t22515(selection,averages,benchmark,map__22514__$1,data,overview,null));
});
