// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.routes');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('sablono.core');
clustermap.routes.type_name_keys = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$310,cljs.core.constant$keyword$287,cljs.core.constant$keyword$311,cljs.core.constant$keyword$287,cljs.core.constant$keyword$312,cljs.core.constant$keyword$395], null);
clustermap.routes.name_for = (function name_for(type,obj){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.routes.type_name_keys,type));
});
clustermap.routes.portfolio_company_path = (function portfolio_company_path(app_state,obj){return [cljs.core.str("#/"),cljs.core.str((function (){var G__23198 = app_state;var G__23198__$1 = (((G__23198 == null))?null:cljs.core.deref(G__23198));var G__23198__$2 = (((G__23198__$1 == null))?null:cljs.core.constant$keyword$396.cljs$core$IFn$_invoke$arity$1(G__23198__$1));var G__23198__$3 = (((G__23198__$2 == null))?null:cljs.core.name(G__23198__$2));return G__23198__$3;
})()),cljs.core.str("/portfolio-company/"),cljs.core.str(cljs.core.constant$keyword$397.cljs$core$IFn$_invoke$arity$1(obj))].join('');
});
clustermap.routes.investor_company_path = (function investor_company_path(app_state,obj){return [cljs.core.str("#/"),cljs.core.str((function (){var G__23200 = app_state;var G__23200__$1 = (((G__23200 == null))?null:cljs.core.deref(G__23200));var G__23200__$2 = (((G__23200__$1 == null))?null:cljs.core.constant$keyword$396.cljs$core$IFn$_invoke$arity$1(G__23200__$1));var G__23200__$3 = (((G__23200__$2 == null))?null:cljs.core.name(G__23200__$2));return G__23200__$3;
})()),cljs.core.str("/investor-company/"),cljs.core.str(cljs.core.constant$keyword$398.cljs$core$IFn$_invoke$arity$1(obj))].join('');
});
clustermap.routes.constituency_path = (function constituency_path(app_state,obj){return [cljs.core.str("#/"),cljs.core.str((function (){var G__23202 = app_state;var G__23202__$1 = (((G__23202 == null))?null:cljs.core.deref(G__23202));var G__23202__$2 = (((G__23202__$1 == null))?null:cljs.core.constant$keyword$396.cljs$core$IFn$_invoke$arity$1(G__23202__$1));var G__23202__$3 = (((G__23202__$2 == null))?null:cljs.core.name(G__23202__$2));return G__23202__$3;
})()),cljs.core.str("/constituency/"),cljs.core.str(cljs.core.constant$keyword$399.cljs$core$IFn$_invoke$arity$1(obj))].join('');
});
clustermap.routes.no_selection_path = (function no_selection_path(app_state,_){return [cljs.core.str("#/"),cljs.core.str((function (){var G__23204 = app_state;var G__23204__$1 = (((G__23204 == null))?null:cljs.core.deref(G__23204));var G__23204__$2 = (((G__23204__$1 == null))?null:cljs.core.constant$keyword$396.cljs$core$IFn$_invoke$arity$1(G__23204__$1));var G__23204__$3 = (((G__23204__$2 == null))?null:cljs.core.name(G__23204__$2));return G__23204__$3;
})())].join('');
});
clustermap.routes.type_paths = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$310,clustermap.routes.portfolio_company_path,cljs.core.constant$keyword$311,clustermap.routes.investor_company_path,cljs.core.constant$keyword$312,clustermap.routes.constituency_path,null,clustermap.routes.no_selection_path], null);
clustermap.routes.path_for = (function path_for(app_state,type,obj){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.routes.type_paths,type),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_state,obj], null));
});
clustermap.routes.link_for = (function link_for(app_state,type,obj){return React.DOM.a({"href": clustermap.routes.path_for(app_state,type,obj)},sablono.interpreter.interpret(clustermap.routes.name_for(type,obj)));
});
