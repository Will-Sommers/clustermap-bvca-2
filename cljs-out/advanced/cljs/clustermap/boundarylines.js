// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [7,0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [9,0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [12,3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,0], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3406__auto__ = cljs.core.some((function (p__22281){var vec__22282 = p__22281;var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22282,0,null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22282,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = z;if(cljs.core.truth_(and__3394__auto__))
{return (zoom <= z);
} else
{return and__3394__auto__;
}
})()))
{return t;
} else
{return null;
}
}),clustermap.boundarylines.zoom_tolerances);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
});
clustermap.boundarylines.best_available_tolerance = (function best_available_tolerance(zoom,available_tolerances){var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var coarser = cljs.core.reverse(cljs.core.filter(((function (i_tol){
return (function (t){return (t > i_tol);
});})(i_tol))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,clustermap.boundarylines.zoom_tolerances)));var finer = cljs.core.filter(((function (i_tol,coarser){
return (function (t){return (t < i_tol);
});})(i_tol,coarser))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set(available_tolerances);var or__3406__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(avail_set,i_tol);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = cljs.core.some(avail_set,finer);if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{return cljs.core.some(avail_set,coarser);
}
}
});
/**
* fetch a boundaryline for a given tolerance and add it to the cache
*/
clustermap.boundarylines.fetch_boundaryline = (function fetch_boundaryline(app_state,korks,boundaryline_id,tolerance){var comm = clustermap.api.boundarylines.cljs$core$IFn$_invoke$arity$variadic(boundaryline_id,tolerance,cljs.core.array_seq([cljs.core.constant$keyword$254,true], 0));var use_korks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));var path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(use_korks,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,tolerance], null));var c__5521__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_22302){var state_val_22303 = (state_22302[1]);if((state_val_22303 === 2))
{var inst_22298 = (state_22302[2]);var inst_22299 = (function (){var bl = inst_22298;return ((function (bl,inst_22298,state_val_22303){
return (function (old){return bl;
});
;})(bl,inst_22298,state_val_22303))
})();var inst_22300 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,path,inst_22299);var state_22302__$1 = state_22302;return cljs.core.async.impl.ioc_helpers.return_chan(state_22302__$1,inst_22300);
} else
{if((state_val_22303 === 1))
{var state_22302__$1 = state_22302;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22302__$1,2,comm);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_22307 = [null,null,null,null,null,null,null];(statearr_22307[0] = state_machine__5507__auto__);
(statearr_22307[1] = 1);
return statearr_22307;
});
var state_machine__5507__auto____1 = (function (state_22302){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__(state_22302);if(cljs.core.keyword_identical_QMARK_(result__5509__auto__,cljs.core.constant$keyword$240))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e22308){if((e22308 instanceof Object))
{var ex__5510__auto__ = e22308;var statearr_22309_22311 = state_22302;(statearr_22309_22311[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22302);
return cljs.core.constant$keyword$240;
} else
{if(cljs.core.constant$keyword$229)
{throw e22308;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5508__auto__,cljs.core.constant$keyword$240))
{{
var G__22312 = state_22302;
state_22302 = G__22312;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_22302){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_22302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_22310 = (f__5522__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5522__auto__.cljs$core$IFn$_invoke$arity$0() : f__5522__auto__.call(null));(statearr_22310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_22310;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* gets the best boundaryline version for a zoom level...
* if the best isn't available, fetches it async and immediately
* returns the next best available
* - default : default value to return if nothing currently available
* - min-zoom : if (<= zoom min-zoom) do nothing and return the default
* returns [tolerance, boundaryline] or default if nothing is available or
* (<= zoom min-zoom)
* @param {...*} var_args
*/
clustermap.boundarylines.get_or_fetch_best_boundaryline = (function() { 
var get_or_fetch_best_boundaryline__delegate = function (app_state,korks,boundaryline_id,zoom,p__22313){var map__22315 = p__22313;var map__22315__$1 = ((cljs.core.seq_QMARK_(map__22315))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22315):map__22315);var min_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22315__$1,cljs.core.constant$keyword$258);if(cljs.core.truth_((function (){var and__3394__auto__ = min_zoom;if(cljs.core.truth_(and__3394__auto__))
{return (zoom <= min_zoom);
} else
{return and__3394__auto__;
}
})()))
{return null;
} else
{var use_korks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));var boundarylines = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app_state),use_korks);var bl_versions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(boundarylines,boundaryline_id);var i_tol = clustermap.boundarylines.ideal_tolerance(zoom);var use_tol = clustermap.boundarylines.best_available_tolerance(zoom,cljs.core.keys(bl_versions));var use_bl = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(boundarylines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,use_tol], null));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i_tol,use_tol))
{clustermap.boundarylines.fetch_boundaryline(app_state,korks,boundaryline_id,i_tol);
} else
{}
if(cljs.core.truth_(use_bl))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [use_tol,use_bl], null);
} else
{return null;
}
}
};
var get_or_fetch_best_boundaryline = function (app_state,korks,boundaryline_id,zoom,var_args){
var p__22313 = null;if (arguments.length > 4) {
  p__22313 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return get_or_fetch_best_boundaryline__delegate.call(this,app_state,korks,boundaryline_id,zoom,p__22313);};
get_or_fetch_best_boundaryline.cljs$lang$maxFixedArity = 4;
get_or_fetch_best_boundaryline.cljs$lang$applyTo = (function (arglist__22316){
var app_state = cljs.core.first(arglist__22316);
arglist__22316 = cljs.core.next(arglist__22316);
var korks = cljs.core.first(arglist__22316);
arglist__22316 = cljs.core.next(arglist__22316);
var boundaryline_id = cljs.core.first(arglist__22316);
arglist__22316 = cljs.core.next(arglist__22316);
var zoom = cljs.core.first(arglist__22316);
var p__22313 = cljs.core.rest(arglist__22316);
return get_or_fetch_best_boundaryline__delegate(app_state,korks,boundaryline_id,zoom,p__22313);
});
get_or_fetch_best_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundaryline__delegate;
return get_or_fetch_best_boundaryline;
})()
;
