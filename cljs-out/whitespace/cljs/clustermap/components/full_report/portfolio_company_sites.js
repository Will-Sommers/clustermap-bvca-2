// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report.portfolio_company_sites');
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
clustermap.components.full_report.portfolio_company_sites.portfolio_company_site = (function portfolio_company_site(site,owner){if(typeof clustermap.components.full_report.portfolio_company_sites.t31040 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.portfolio_company_sites.t31040 = (function (owner,site,portfolio_company_site,meta31041){
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta31041 = meta31041;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.portfolio_company_sites.t31040.cljs$lang$type = true;
clustermap.components.full_report.portfolio_company_sites.t31040.cljs$lang$ctorStr = "clustermap.components.full-report.portfolio-company-sites/t31040";
clustermap.components.full_report.portfolio_company_sites.t31040.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.portfolio-company-sites/t31040");
});
clustermap.components.full_report.portfolio_company_sites.t31040.prototype.om$core$IRender$ = true;
clustermap.components.full_report.portfolio_company_sites.t31040.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs31043 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_.call(null,attrs31043))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs31043),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs31043));
}
})(),(function (){var attrs31044 = new cljs.core.Keyword(null,"postcode","postcode",1771366911).cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_.call(null,attrs31044))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs31044),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs31044));
}
})(),React.DOM.td(null,"investor"),React.DOM.td(null,"constituency"),(function (){var attrs31049 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31049))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs31049),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs31049),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs31050 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31050))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs31050),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs31050));
}
})(),(function (){var attrs31051 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31051))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs31051),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs31051),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs31052 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count_delta","latest_employee_count_delta",1082401185).cljs$core$IFn$_invoke$arity$1(self__.site),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31052))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs31052),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs31052));
}
})());
});
clustermap.components.full_report.portfolio_company_sites.t31040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31042){var self__ = this;
var _31042__$1 = this;return self__.meta31041;
});
clustermap.components.full_report.portfolio_company_sites.t31040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31042,meta31041__$1){var self__ = this;
var _31042__$1 = this;return (new clustermap.components.full_report.portfolio_company_sites.t31040(self__.owner,self__.site,self__.portfolio_company_site,meta31041__$1));
});
clustermap.components.full_report.portfolio_company_sites.__GT_t31040 = (function __GT_t31040(owner__$1,site__$1,portfolio_company_site__$1,meta31041){return (new clustermap.components.full_report.portfolio_company_sites.t31040(owner__$1,site__$1,portfolio_company_site__$1,meta31041));
});
}
return (new clustermap.components.full_report.portfolio_company_sites.t31040(owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.portfolio_company_sites.portfolio_company_sites = (function portfolio_company_sites(selection_portfolio_company_sites,owner){if(typeof clustermap.components.full_report.portfolio_company_sites.t31059 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.portfolio_company_sites.t31059 = (function (owner,selection_portfolio_company_sites,portfolio_company_sites,meta31060){
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.portfolio_company_sites = portfolio_company_sites;
this.meta31060 = meta31060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.portfolio_company_sites.t31059.cljs$lang$type = true;
clustermap.components.full_report.portfolio_company_sites.t31059.cljs$lang$ctorStr = "clustermap.components.full-report.portfolio-company-sites/t31059";
clustermap.components.full_report.portfolio_company_sites.t31059.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.portfolio-company-sites/t31059");
});
clustermap.components.full_report.portfolio_company_sites.t31059.prototype.om$core$IRender$ = true;
clustermap.components.full_report.portfolio_company_sites.t31059.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div({"className": "full-report-portfolio-company-sites"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th(null,"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th(null,"Emp. change"))),(function (){var attrs31064 = om.core.build_all.call(null,clustermap.components.full_report.portfolio_company_sites.portfolio_company_site,self__.selection_portfolio_company_sites);if(cljs.core.map_QMARK_.call(null,attrs31064))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs31064),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs31064));
}
})())));
});
clustermap.components.full_report.portfolio_company_sites.t31059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31061){var self__ = this;
var _31061__$1 = this;return self__.meta31060;
});
clustermap.components.full_report.portfolio_company_sites.t31059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31061,meta31060__$1){var self__ = this;
var _31061__$1 = this;return (new clustermap.components.full_report.portfolio_company_sites.t31059(self__.owner,self__.selection_portfolio_company_sites,self__.portfolio_company_sites,meta31060__$1));
});
clustermap.components.full_report.portfolio_company_sites.__GT_t31059 = (function __GT_t31059(owner__$1,selection_portfolio_company_sites__$1,portfolio_company_sites__$1,meta31060){return (new clustermap.components.full_report.portfolio_company_sites.t31059(owner__$1,selection_portfolio_company_sites__$1,portfolio_company_sites__$1,meta31060));
});
}
return (new clustermap.components.full_report.portfolio_company_sites.t31059(owner,selection_portfolio_company_sites,portfolio_company_sites,null));
});
