// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__20175){var map__20177 = p__20175;var map__20177__$1 = ((cljs.core.seq_QMARK_.call(null,map__20177))?cljs.core.apply.call(null,cljs.core.hash_map,map__20177):map__20177);var raw = cljs.core.get.call(null,map__20177__$1,new cljs.core.Keyword(null,"raw","raw",1014016922));var comm = cljs.core.async.chan.call(null,1);goog.net.XhrIo.send(url,(function (event){cljs.core.async.put_BANG_.call(null,comm,(function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
}
}).call(null,(JSON.parse.call(null,event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
}));
return comm;
};
var GET = function (url,var_args){
var p__20175 = null;if (arguments.length > 1) {
  p__20175 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__20175);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__20178){
var url = cljs.core.first(arglist__20178);
var p__20175 = cljs.core.rest(arglist__20178);
return GET__delegate(url,p__20175);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* - ocomm : a channel containing [result-chans result-handler-args]
* gather results from the one-or-more result-chans, and
* pass them to the handler along with any result-handler-args
* - handler : invoked with (apply handler result-or-results result-handler-args)
*/
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20311){var state_val_20312 = (state_20311[1]);if((state_val_20312 === 1))
{var state_20311__$1 = state_20311;var statearr_20313_20349 = state_20311__$1;(statearr_20313_20349[2] = null);
(statearr_20313_20349[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20312 === 2))
{var state_20311__$1 = state_20311;if(true)
{var statearr_20314_20350 = state_20311__$1;(statearr_20314_20350[1] = 4);
} else
{var statearr_20315_20351 = state_20311__$1;(statearr_20315_20351[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20312 === 3))
{var inst_20309 = (state_20311[2]);var state_20311__$1 = state_20311;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20311__$1,inst_20309);
} else
{if((state_val_20312 === 4))
{var state_20311__$1 = state_20311;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20311__$1,7,ocomm);
} else
{if((state_val_20312 === 5))
{var state_20311__$1 = state_20311;var statearr_20316_20352 = state_20311__$1;(statearr_20316_20352[2] = null);
(statearr_20316_20352[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20312 === 6))
{var inst_20307 = (state_20311[2]);var state_20311__$1 = state_20311;var statearr_20317_20353 = state_20311__$1;(statearr_20317_20353[2] = inst_20307);
(statearr_20317_20353[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20312 === 7))
{var inst_20269 = (state_20311[7]);var inst_20268 = (state_20311[2]);var inst_20269__$1 = cljs.core.nth.call(null,inst_20268,0,null);var inst_20270 = cljs.core.nth.call(null,inst_20268,1,null);var inst_20271 = cljs.core.sequential_QMARK_.call(null,inst_20269__$1);var state_20311__$1 = (function (){var statearr_20318 = state_20311;(statearr_20318[7] = inst_20269__$1);
(statearr_20318[8] = inst_20270);
return statearr_20318;
})();if(inst_20271)
{var statearr_20319_20354 = state_20311__$1;(statearr_20319_20354[1] = 8);
} else
{var statearr_20320_20355 = state_20311__$1;(statearr_20320_20355[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20312 === 8))
{var inst_20269 = (state_20311[7]);var inst_20273 = inst_20269;var inst_20274 = cljs.core.PersistentVector.EMPTY;var state_20311__$1 = (function (){var statearr_20321 = state_20311;(statearr_20321[9] = inst_20274);
(statearr_20321[10] = inst_20273);
return statearr_20321;
})();var statearr_20322_20356 = state_20311__$1;(statearr_20322_20356[2] = null);
(statearr_20322_20356[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20312 === 9))
{var inst_20269 = (state_20311[7]);var state_20311__$1 = state_20311;if(cljs.core.truth_(inst_20269))
{var statearr_20323_20357 = state_20311__$1;(statearr_20323_20357[1] = 20);
} else
{var statearr_20324_20358 = state_20311__$1;(statearr_20324_20358[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20312 === 10))
{var inst_20270 = (state_20311[8]);var inst_20302 = (state_20311[2]);var inst_20303 = cljs.core.apply.call(null,handler,inst_20302,inst_20270);var state_20311__$1 = (function (){var statearr_20325 = state_20311;(statearr_20325[11] = inst_20303);
return statearr_20325;
})();var statearr_20326_20359 = state_20311__$1;(statearr_20326_20359[2] = null);
(statearr_20326_20359[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20312 === 11))
{var inst_20273 = (state_20311[10]);var inst_20276 = cljs.core.empty_QMARK_.call(null,inst_20273);var state_20311__$1 = state_20311;if(inst_20276)
{var statearr_20327_20360 = state_20311__$1;(statearr_20327_20360[1] = 13);
} else
{var statearr_20328_20361 = state_20311__$1;(statearr_20328_20361[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20312 === 12))
{var inst_20293 = (state_20311[2]);var state_20311__$1 = state_20311;var statearr_20329_20362 = state_20311__$1;(statearr_20329_20362[2] = inst_20293);
(statearr_20329_20362[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20312 === 13))
{var inst_20274 = (state_20311[9]);var state_20311__$1 = state_20311;var statearr_20330_20363 = state_20311__$1;(statearr_20330_20363[2] = inst_20274);
(statearr_20330_20363[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20312 === 14))
{var inst_20273 = (state_20311[10]);var inst_20279 = cljs.core.rest.call(null,inst_20273);var inst_20280 = cljs.core.first.call(null,inst_20273);var state_20311__$1 = (function (){var statearr_20331 = state_20311;(statearr_20331[12] = inst_20279);
return statearr_20331;
})();if(cljs.core.truth_(inst_20280))
{var statearr_20332_20364 = state_20311__$1;(statearr_20332_20364[1] = 16);
} else
{var statearr_20333_20365 = state_20311__$1;(statearr_20333_20365[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20312 === 15))
{var inst_20291 = (state_20311[2]);var state_20311__$1 = state_20311;var statearr_20334_20366 = state_20311__$1;(statearr_20334_20366[2] = inst_20291);
(statearr_20334_20366[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20312 === 16))
{var inst_20273 = (state_20311[10]);var inst_20282 = cljs.core.first.call(null,inst_20273);var state_20311__$1 = state_20311;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20311__$1,19,inst_20282);
} else
{if((state_val_20312 === 17))
{var state_20311__$1 = state_20311;var statearr_20335_20367 = state_20311__$1;(statearr_20335_20367[2] = null);
(statearr_20335_20367[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20312 === 18))
{var inst_20279 = (state_20311[12]);var inst_20274 = (state_20311[9]);var inst_20287 = (state_20311[2]);var inst_20288 = cljs.core.conj.call(null,inst_20274,inst_20287);var inst_20273 = inst_20279;var inst_20274__$1 = inst_20288;var state_20311__$1 = (function (){var statearr_20336 = state_20311;(statearr_20336[9] = inst_20274__$1);
(statearr_20336[10] = inst_20273);
return statearr_20336;
})();var statearr_20337_20368 = state_20311__$1;(statearr_20337_20368[2] = null);
(statearr_20337_20368[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20312 === 19))
{var inst_20284 = (state_20311[2]);var state_20311__$1 = state_20311;var statearr_20338_20369 = state_20311__$1;(statearr_20338_20369[2] = inst_20284);
(statearr_20338_20369[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20312 === 20))
{var inst_20269 = (state_20311[7]);var state_20311__$1 = state_20311;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20311__$1,23,inst_20269);
} else
{if((state_val_20312 === 21))
{var state_20311__$1 = state_20311;var statearr_20339_20370 = state_20311__$1;(statearr_20339_20370[2] = null);
(statearr_20339_20370[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20312 === 22))
{var inst_20300 = (state_20311[2]);var state_20311__$1 = state_20311;var statearr_20340_20371 = state_20311__$1;(statearr_20340_20371[2] = inst_20300);
(statearr_20340_20371[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20312 === 23))
{var inst_20297 = (state_20311[2]);var state_20311__$1 = state_20311;var statearr_20341_20372 = state_20311__$1;(statearr_20341_20372[2] = inst_20297);
(statearr_20341_20372[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20345 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20345[0] = state_machine__5507__auto__);
(statearr_20345[1] = 1);
return statearr_20345;
});
var state_machine__5507__auto____1 = (function (state_20311){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_20311);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20346){if((e20346 instanceof Object))
{var ex__5510__auto__ = e20346;var statearr_20347_20373 = state_20311;(statearr_20347_20373[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20311);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20346;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20374 = state_20311;
state_20311 = G__20374;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20311){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20348 = f__5522__auto__.call(null);(statearr_20348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1));var _ = clustermap.api.ordered_api_results.call(null,ocomm,result_handler);return (function() { 
var G__20377__delegate = function (req_args){var temp__4090__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4090__auto__))
{var r = temp__4090__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__20376 = rseq;var rcomm = cljs.core.nth.call(null,vec__20376,0,null);var result_handler_args = cljs.core.nthnext.call(null,vec__20376,1);return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__20377 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__20377__delegate.call(this,req_args);};
G__20377.cljs$lang$maxFixedArity = 0;
G__20377.cljs$lang$applyTo = (function (arglist__20378){
var req_args = cljs.core.seq(arglist__20378);
return G__20377__delegate(req_args);
});
G__20377.cljs$core$IFn$_invoke$arity$variadic = G__20377__delegate;
return G__20377;
})()
;
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_20396){var state_val_20397 = (state_20396[1]);if((state_val_20397 === 2))
{var inst_20393 = (state_20396[2]);var inst_20394 = console.log(inst_20393);var state_20396__$1 = state_20396;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20396__$1,inst_20394);
} else
{if((state_val_20397 === 1))
{var state_20396__$1 = state_20396;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20396__$1,2,ch);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_20401 = [null,null,null,null,null,null,null];(statearr_20401[0] = state_machine__5507__auto__);
(statearr_20401[1] = 1);
return statearr_20401;
});
var state_machine__5507__auto____1 = (function (state_20396){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_20396);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e20402){if((e20402 instanceof Object))
{var ex__5510__auto__ = e20402;var statearr_20403_20405 = state_20396;(statearr_20403_20405[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20396);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20402;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20406 = state_20396;
state_20396 = G__20406;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_20396){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_20396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_20404 = f__5522__auto__.call(null);(statearr_20404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_20404;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__20407){
var f = cljs.core.first(arglist__20407);
var args = cljs.core.rest(arglist__20407);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__20410){var vec__20411 = p__20410;var k = cljs.core.nth.call(null,vec__20411,0,null);var v = cljs.core.nth.call(null,vec__20411,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(JSON.stringify(cljs.core.clj__GT_js.call(null,v)))].join('');
}),m));
});
clustermap.api.api_prefix = config.api.prefix;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.GET,[cljs.core.str("/api/boundarylines/"),cljs.core.str(id),cljs.core.str("/"),cljs.core.str(tolerance)].join(''),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__20412){
var id = cljs.core.first(arglist__20412);
arglist__20412 = cljs.core.next(arglist__20412);
var tolerance = cljs.core.first(arglist__20412);
var opts = cljs.core.rest(arglist__20412);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collection_index = (function() { 
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.call(null,clustermap.api.GET,[cljs.core.str("/api/boundaryline-collection-index/"),cljs.core.str(id)].join(''),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__20413){
var id = cljs.core.first(arglist__20413);
var opts = cljs.core.rest(arglist__20413);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count.call(null,clojure.string.trim.call(null,q)) > 0))
{return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/search?q="),cljs.core.str(q)].join(''));
} else
{return cljs.core.async.to_chan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/constituencies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.constituencies = (function() { 
var constituencies__delegate = function (p__20414){var vec__20416 = p__20414;var type_ids = cljs.core.nth.call(null,vec__20416,0,null);return clustermap.api.GET.call(null,"/api/",clustermap.api.api_prefix,"/constituencies?",clustermap.api.map_json_params.call(null,type_ids));
};
var constituencies = function (var_args){
var p__20414 = null;if (arguments.length > 0) {
  p__20414 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return constituencies__delegate.call(this,p__20414);};
constituencies.cljs$lang$maxFixedArity = 0;
constituencies.cljs$lang$applyTo = (function (arglist__20417){
var p__20414 = cljs.core.seq(arglist__20417);
return constituencies__delegate(p__20414);
});
constituencies.cljs$core$IFn$_invoke$arity$variadic = constituencies__delegate;
return constituencies;
})()
;
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_companies = (function() { 
var portfolio_companies__delegate = function (p__20418){var vec__20420 = p__20418;var type_ids = cljs.core.nth.call(null,vec__20420,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-companies?sort={\"!latest_turnover\":\"desc\"}&"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_companies = function (var_args){
var p__20418 = null;if (arguments.length > 0) {
  p__20418 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_companies__delegate.call(this,p__20418);};
portfolio_companies.cljs$lang$maxFixedArity = 0;
portfolio_companies.cljs$lang$applyTo = (function (arglist__20421){
var p__20418 = cljs.core.seq(arglist__20421);
return portfolio_companies__delegate(p__20418);
});
portfolio_companies.cljs$core$IFn$_invoke$arity$variadic = portfolio_companies__delegate;
return portfolio_companies;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_stats = (function() { 
var portfolio_company_stats__delegate = function (p__20422){var vec__20424 = p__20422;var type_ids = cljs.core.nth.call(null,vec__20424,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_stats = function (var_args){
var p__20422 = null;if (arguments.length > 0) {
  p__20422 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_stats__delegate.call(this,p__20422);};
portfolio_company_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_stats.cljs$lang$applyTo = (function (arglist__20425){
var p__20422 = cljs.core.seq(arglist__20425);
return portfolio_company_stats__delegate(p__20422);
});
portfolio_company_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_stats__delegate;
return portfolio_company_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_account_stats = (function() { 
var portfolio_company_account_stats__delegate = function (p__20426){var vec__20428 = p__20426;var type_ids = cljs.core.nth.call(null,vec__20428,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-account-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_account_stats = function (var_args){
var p__20426 = null;if (arguments.length > 0) {
  p__20426 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_account_stats__delegate.call(this,p__20426);};
portfolio_company_account_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_account_stats.cljs$lang$applyTo = (function (arglist__20429){
var p__20426 = cljs.core.seq(arglist__20429);
return portfolio_company_account_stats__delegate(p__20426);
});
portfolio_company_account_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_account_stats__delegate;
return portfolio_company_account_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__20430){var vec__20432 = p__20430;var type_ids = cljs.core.nth.call(null,vec__20432,0,null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sort","sort",1017440528),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["?boundarylinecolls.uk_constituencies"], null)], null),type_ids);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-sites?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids__$1))].join(''));
};
var portfolio_company_sites = function (var_args){
var p__20430 = null;if (arguments.length > 0) {
  p__20430 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__20430);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__20433){
var p__20430 = cljs.core.seq(arglist__20433);
return portfolio_company_sites__delegate(p__20430);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__20434){var vec__20436 = p__20434;var type_ids = cljs.core.nth.call(null,vec__20436,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-locations?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_locations = function (var_args){
var p__20434 = null;if (arguments.length > 0) {
  p__20434 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__20434);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__20437){
var p__20434 = cljs.core.seq(arglist__20437);
return portfolio_company_locations__delegate(p__20434);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__20438){var vec__20440 = p__20438;var type_ids = cljs.core.nth.call(null,vec__20440,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-stats?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_stats = function (var_args){
var p__20438 = null;if (arguments.length > 0) {
  p__20438 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__20438);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__20441){
var p__20438 = cljs.core.seq(arglist__20441);
return portfolio_company_site_stats__delegate(p__20438);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__20442){var vec__20444 = p__20442;var type_ids = cljs.core.nth.call(null,vec__20444,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/portfolio-company-site-account-timelines?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__20442 = null;if (arguments.length > 0) {
  p__20442 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__20442);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__20445){
var p__20442 = cljs.core.seq(arglist__20445);
return portfolio_company_site_account_timelines__delegate(p__20442);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies/"),cljs.core.str(id)].join(''));
});
/**
* @param {...*} var_args
*/
clustermap.api.investor_comapnies = (function() { 
var investor_comapnies__delegate = function (p__20446){var vec__20448 = p__20446;var type_ids = cljs.core.nth.call(null,vec__20448,0,null);return clustermap.api.GET.call(null,[cljs.core.str("/api/"),cljs.core.str(clustermap.api.api_prefix),cljs.core.str("/investor-companies?"),cljs.core.str(clustermap.api.map_json_params.call(null,type_ids))].join(''));
};
var investor_comapnies = function (var_args){
var p__20446 = null;if (arguments.length > 0) {
  p__20446 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investor_comapnies__delegate.call(this,p__20446);};
investor_comapnies.cljs$lang$maxFixedArity = 0;
investor_comapnies.cljs$lang$applyTo = (function (arglist__20449){
var p__20446 = cljs.core.seq(arglist__20449);
return investor_comapnies__delegate(p__20446);
});
investor_comapnies.cljs$core$IFn$_invoke$arity$variadic = investor_comapnies__delegate;
return investor_comapnies;
})()
;
