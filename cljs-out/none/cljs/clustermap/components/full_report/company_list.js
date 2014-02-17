// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report.company_list');
goog.require('cljs.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first.call(null,objs);var next_objs = cljs.core.next.call(null,objs);if(next_objs)
{var attrs11712 = link_fn.call(null,type,first_obj);if(cljs.core.map_QMARK_.call(null,attrs11712))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs11712),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs11712),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,next_objs))," more...)"));
}
} else
{return link_fn.call(null,type,first_obj);
}
});
clustermap.components.full_report.company_list.pos_neg = (function pos_neg(value){if((value == null))
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
clustermap.components.full_report.company_list.portfolio_company_site = (function portfolio_company_site(site,owner,p__11721){var map__11737 = p__11721;var map__11737__$1 = ((cljs.core.seq_QMARK_.call(null,map__11737))?cljs.core.apply.call(null,cljs.core.hash_map,map__11737):map__11737);var opts = map__11737__$1;var path_fn = cljs.core.get.call(null,map__11737__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__11737__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),site);if(typeof clustermap.components.full_report.company_list.t11738 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t11738 = (function (company_path,link_fn,path_fn,opts,map__11737,p__11721,owner,site,portfolio_company_site,meta11739){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__11737 = map__11737;
this.p__11721 = p__11721;
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta11739 = meta11739;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t11738.cljs$lang$type = true;
clustermap.components.full_report.company_list.t11738.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t11738";
clustermap.components.full_report.company_list.t11738.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-list/t11738");
});
clustermap.components.full_report.company_list.t11738.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t11738.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs11741 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),self__.site);if(cljs.core.map_QMARK_.call(null,attrs11741))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11741),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11741));
}
})(),(function (){var attrs11742 = new cljs.core.Keyword(null,"postcode","postcode",1771366911).cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_.call(null,attrs11742))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11742),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11742));
}
})(),(function (){var attrs11743 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs11743))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11743),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11743));
}
})(),(function (){var attrs11744 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",3902864696),(function (){var G__11751 = self__.site;var G__11751__$1 = (((G__11751 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847).cljs$core$IFn$_invoke$arity$1(G__11751));var G__11751__$2 = (((G__11751__$1 == null))?null:cljs.core.filter.call(null,((function (G__11751,G__11751__$1){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",4487629262).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__11751,G__11751__$1))
,G__11751__$1));return G__11751__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs11744))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11744),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11744));
}
})(),(function (){var attrs11745 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11745))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11745),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11745),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs11746 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs11746))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11746),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11746));
}
})(),(function (){var attrs11747 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11747))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11747),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11747));
}
})(),(function (){var attrs11748 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11748))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11748),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11748),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs11749 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs11749))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11749),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11749));
}
})(),(function (){var attrs11750 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11750))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11750),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11750));
}
})());
});
clustermap.components.full_report.company_list.t11738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11740){var self__ = this;
var _11740__$1 = this;return self__.meta11739;
});
clustermap.components.full_report.company_list.t11738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11740,meta11739__$1){var self__ = this;
var _11740__$1 = this;return (new clustermap.components.full_report.company_list.t11738(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__11737,self__.p__11721,self__.owner,self__.site,self__.portfolio_company_site,meta11739__$1));
});
clustermap.components.full_report.company_list.__GT_t11738 = (function __GT_t11738(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__11737__$2,p__11721__$1,owner__$1,site__$1,portfolio_company_site__$1,meta11739){return (new clustermap.components.full_report.company_list.t11738(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__11737__$2,p__11721__$1,owner__$1,site__$1,portfolio_company_site__$1,meta11739));
});
}
return (new clustermap.components.full_report.company_list.t11738(company_path,link_fn,path_fn,opts,map__11737__$1,p__11721,owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(selection_portfolio_company_sites,owner,opts){if(typeof clustermap.components.full_report.company_list.t11758 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t11758 = (function (opts,owner,selection_portfolio_company_sites,company_list,meta11759){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.company_list = company_list;
this.meta11759 = meta11759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t11758.cljs$lang$type = true;
clustermap.components.full_report.company_list.t11758.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t11758";
clustermap.components.full_report.company_list.t11758.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-list/t11758");
});
clustermap.components.full_report.company_list.t11758.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t11758.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),(function (){var attrs11763 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company_site,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"portfolio_company_site_uid","portfolio_company_site_uid",3220116067),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs11763))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs11763),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs11763));
}
})())));
});
clustermap.components.full_report.company_list.t11758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11760){var self__ = this;
var _11760__$1 = this;return self__.meta11759;
});
clustermap.components.full_report.company_list.t11758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11760,meta11759__$1){var self__ = this;
var _11760__$1 = this;return (new clustermap.components.full_report.company_list.t11758(self__.opts,self__.owner,self__.selection_portfolio_company_sites,self__.company_list,meta11759__$1));
});
clustermap.components.full_report.company_list.__GT_t11758 = (function __GT_t11758(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta11759){return (new clustermap.components.full_report.company_list.t11758(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta11759));
});
}
return (new clustermap.components.full_report.company_list.t11758(opts,owner,selection_portfolio_company_sites,company_list,null));
});

//# sourceMappingURL=company_list.js.map