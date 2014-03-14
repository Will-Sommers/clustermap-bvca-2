// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [7,0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [9,0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [12,3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,0], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3441__auto__ = cljs.core.some((function (p__33866){var vec__33867 = p__33866;var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33867,0,null);var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33867,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = z;if(cljs.core.truth_(and__3429__auto__))
{return (zoom <= z);
} else
{return and__3429__auto__;
}
})()))
{return t;
} else
{return null;
}
}),clustermap.boundarylines.zoom_tolerances);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
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
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set(available_tolerances);var or__3441__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(avail_set,i_tol);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = cljs.core.some(avail_set,finer);if(cljs.core.truth_(or__3441__auto____$1))
{return or__3441__auto____$1;
} else
{return cljs.core.some(avail_set,coarser);
}
}
});
/**
* fetch a boundaryline for a given tolerance and add it to the cache
*/
clustermap.boundarylines.fetch_boundaryline = (function fetch_boundaryline(app_state,korks,boundaryline_id,tolerance){var comm = clustermap.api.boundarylines.cljs$core$IFn$_invoke$arity$variadic(boundaryline_id,tolerance,cljs.core.array_seq([cljs.core.constant$keyword$565,true], 0));var use_korks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));var path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(use_korks,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,tolerance], null));var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33887){var state_val_33888 = (state_33887[1]);if((state_val_33888 === 2))
{var inst_33883 = (state_33887[2]);var inst_33884 = (function (){var bl = inst_33883;return ((function (bl,inst_33883,state_val_33888){
return (function (old){return bl;
});
;})(bl,inst_33883,state_val_33888))
})();var inst_33885 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,path,inst_33884);var state_33887__$1 = state_33887;return cljs.core.async.impl.ioc_helpers.return_chan(state_33887__$1,inst_33885);
} else
{if((state_val_33888 === 1))
{var state_33887__$1 = state_33887;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33887__$1,2,comm);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33892 = [null,null,null,null,null,null,null];(statearr_33892[0] = state_machine__5548__auto__);
(statearr_33892[1] = 1);
return statearr_33892;
});
var state_machine__5548__auto____1 = (function (state_33887){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_33887);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$551))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33893){if((e33893 instanceof Object))
{var ex__5551__auto__ = e33893;var statearr_33894_33896 = state_33887;(statearr_33894_33896[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_33887);
return cljs.core.constant$keyword$551;
} else
{if(cljs.core.constant$keyword$540)
{throw e33893;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$551))
{{
var G__33897 = state_33887;
state_33887 = G__33897;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33887){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33895 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_33895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33895;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
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
var get_or_fetch_best_boundaryline__delegate = function (app_state,korks,boundaryline_id,zoom,p__33898){var map__33900 = p__33898;var map__33900__$1 = ((cljs.core.seq_QMARK_(map__33900))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33900):map__33900);var min_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33900__$1,cljs.core.constant$keyword$573);if(cljs.core.truth_((function (){var and__3429__auto__ = min_zoom;if(cljs.core.truth_(and__3429__auto__))
{return (zoom <= min_zoom);
} else
{return and__3429__auto__;
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
var p__33898 = null;if (arguments.length > 4) {
  p__33898 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return get_or_fetch_best_boundaryline__delegate.call(this,app_state,korks,boundaryline_id,zoom,p__33898);};
get_or_fetch_best_boundaryline.cljs$lang$maxFixedArity = 4;
get_or_fetch_best_boundaryline.cljs$lang$applyTo = (function (arglist__33901){
var app_state = cljs.core.first(arglist__33901);
arglist__33901 = cljs.core.next(arglist__33901);
var korks = cljs.core.first(arglist__33901);
arglist__33901 = cljs.core.next(arglist__33901);
var boundaryline_id = cljs.core.first(arglist__33901);
arglist__33901 = cljs.core.next(arglist__33901);
var zoom = cljs.core.first(arglist__33901);
var p__33898 = cljs.core.rest(arglist__33901);
return get_or_fetch_best_boundaryline__delegate(app_state,korks,boundaryline_id,zoom,p__33898);
});
get_or_fetch_best_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundaryline__delegate;
return get_or_fetch_best_boundaryline;
})()
;
