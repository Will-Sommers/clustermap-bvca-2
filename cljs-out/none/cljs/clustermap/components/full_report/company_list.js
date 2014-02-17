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
{var attrs11725 = link_fn.call(null,type,first_obj);if(cljs.core.map_QMARK_.call(null,attrs11725))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs11725),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs11725),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,next_objs))," more...)"));
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
clustermap.components.full_report.company_list.portfolio_company_site = (function portfolio_company_site(site,owner,p__11734){var map__11750 = p__11734;var map__11750__$1 = ((cljs.core.seq_QMARK_.call(null,map__11750))?cljs.core.apply.call(null,cljs.core.hash_map,map__11750):map__11750);var opts = map__11750__$1;var path_fn = cljs.core.get.call(null,map__11750__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__11750__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),site);if(typeof clustermap.components.full_report.company_list.t11751 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t11751 = (function (company_path,link_fn,path_fn,opts,map__11750,p__11734,owner,site,portfolio_company_site,meta11752){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__11750 = map__11750;
this.p__11734 = p__11734;
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta11752 = meta11752;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t11751.cljs$lang$type = true;
clustermap.components.full_report.company_list.t11751.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t11751";
clustermap.components.full_report.company_list.t11751.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-list/t11751");
});
clustermap.components.full_report.company_list.t11751.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t11751.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs11754 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),self__.site);if(cljs.core.map_QMARK_.call(null,attrs11754))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11754),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11754));
}
})(),(function (){var attrs11755 = new cljs.core.Keyword(null,"postcode","postcode",1771366911).cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_.call(null,attrs11755))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11755),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11755));
}
})(),(function (){var attrs11756 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs11756))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11756),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11756));
}
})(),(function (){var attrs11757 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",3902864696),(function (){var G__11764 = self__.site;var G__11764__$1 = (((G__11764 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847).cljs$core$IFn$_invoke$arity$1(G__11764));var G__11764__$2 = (((G__11764__$1 == null))?null:cljs.core.filter.call(null,((function (G__11764,G__11764__$1){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",4487629262).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__11764,G__11764__$1))
,G__11764__$1));return G__11764__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs11757))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11757),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11757));
}
})(),(function (){var attrs11758 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11758))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11758),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11758),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs11759 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs11759))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11759),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11759));
}
})(),(function (){var attrs11760 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11760))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11760),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11760));
}
})(),(function (){var attrs11761 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11761))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11761),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11761),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs11762 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs11762))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11762),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11762));
}
})(),(function (){var attrs11763 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11763))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs11763),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs11763));
}
})());
});
clustermap.components.full_report.company_list.t11751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11753){var self__ = this;
var _11753__$1 = this;return self__.meta11752;
});
clustermap.components.full_report.company_list.t11751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11753,meta11752__$1){var self__ = this;
var _11753__$1 = this;return (new clustermap.components.full_report.company_list.t11751(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__11750,self__.p__11734,self__.owner,self__.site,self__.portfolio_company_site,meta11752__$1));
});
clustermap.components.full_report.company_list.__GT_t11751 = (function __GT_t11751(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__11750__$2,p__11734__$1,owner__$1,site__$1,portfolio_company_site__$1,meta11752){return (new clustermap.components.full_report.company_list.t11751(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__11750__$2,p__11734__$1,owner__$1,site__$1,portfolio_company_site__$1,meta11752));
});
}
return (new clustermap.components.full_report.company_list.t11751(company_path,link_fn,path_fn,opts,map__11750__$1,p__11734,owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(selection_portfolio_company_sites,owner,opts){if(typeof clustermap.components.full_report.company_list.t11771 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t11771 = (function (opts,owner,selection_portfolio_company_sites,company_list,meta11772){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.company_list = company_list;
this.meta11772 = meta11772;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t11771.cljs$lang$type = true;
clustermap.components.full_report.company_list.t11771.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t11771";
clustermap.components.full_report.company_list.t11771.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-list/t11771");
});
clustermap.components.full_report.company_list.t11771.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t11771.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),(function (){var attrs11776 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company_site,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"portfolio_company_site_uid","portfolio_company_site_uid",3220116067),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs11776))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs11776),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs11776));
}
})())));
});
clustermap.components.full_report.company_list.t11771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11773){var self__ = this;
var _11773__$1 = this;return self__.meta11772;
});
clustermap.components.full_report.company_list.t11771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11773,meta11772__$1){var self__ = this;
var _11773__$1 = this;return (new clustermap.components.full_report.company_list.t11771(self__.opts,self__.owner,self__.selection_portfolio_company_sites,self__.company_list,meta11772__$1));
});
clustermap.components.full_report.company_list.__GT_t11771 = (function __GT_t11771(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta11772){return (new clustermap.components.full_report.company_list.t11771(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta11772));
});
}
return (new clustermap.components.full_report.company_list.t11771(opts,owner,selection_portfolio_company_sites,company_list,null));
});

//# sourceMappingURL=company_list.js.map