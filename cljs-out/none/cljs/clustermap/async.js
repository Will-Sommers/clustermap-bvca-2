// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.async');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
/**
* asynchronously maps a function over some colls
* @param {...*} var_args
*/
clustermap.async.map_async = (function() { 
var map_async__delegate = function (f,colls){var coll_chs = cljs.core.map.call(null,(function (coll){var ch = cljs.core.async.chan.call(null);cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
}),colls);return cljs.core.async.map.call(null,f,coll_chs);
};
var map_async = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map_async__delegate.call(this,f,colls);};
map_async.cljs$lang$maxFixedArity = 1;
map_async.cljs$lang$applyTo = (function (arglist__11567){
var f = cljs.core.first(arglist__11567);
var colls = cljs.core.rest(arglist__11567);
return map_async__delegate(f,colls);
});
map_async.cljs$core$IFn$_invoke$arity$variadic = map_async__delegate;
return map_async;
})()
;
/**
* async consume all values from a channel
* @param {...*} var_args
*/
clustermap.async.dorun_async = (function() { 
var dorun_async__delegate = function (ch,p__11568){var map__11628 = p__11568;var map__11628__$1 = ((cljs.core.seq_QMARK_.call(null,map__11628))?cljs.core.apply.call(null,cljs.core.hash_map,map__11628):map__11628);var delay = cljs.core.get.call(null,map__11628__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__11628__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5521__auto___11687 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11657){var state_val_11658 = (state_11657[1]);if((state_val_11658 === 1))
{var state_11657__$1 = state_11657;var statearr_11659_11688 = state_11657__$1;(statearr_11659_11688[2] = null);
(statearr_11659_11688[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11658 === 2))
{var state_11657__$1 = state_11657;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11657__$1,4,ch);
} else
{if((state_val_11658 === 3))
{var inst_11655 = (state_11657[2]);var state_11657__$1 = state_11657;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11657__$1,inst_11655);
} else
{if((state_val_11658 === 4))
{var inst_11631 = (state_11657[7]);var inst_11631__$1 = (state_11657[2]);var state_11657__$1 = (function (){var statearr_11660 = state_11657;(statearr_11660[7] = inst_11631__$1);
return statearr_11660;
})();if(cljs.core.truth_(inst_11631__$1))
{var statearr_11661_11689 = state_11657__$1;(statearr_11661_11689[1] = 5);
} else
{var statearr_11662_11690 = state_11657__$1;(statearr_11662_11690[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11658 === 5))
{var state_11657__$1 = state_11657;if(cljs.core.truth_(delay))
{var statearr_11663_11691 = state_11657__$1;(statearr_11663_11691[1] = 8);
} else
{var statearr_11664_11692 = state_11657__$1;(statearr_11664_11692[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11658 === 6))
{var state_11657__$1 = state_11657;var statearr_11665_11693 = state_11657__$1;(statearr_11665_11693[2] = null);
(statearr_11665_11693[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11658 === 7))
{var inst_11648 = (state_11657[2]);var state_11657__$1 = state_11657;if(cljs.core.truth_(inst_11648))
{var statearr_11666_11694 = state_11657__$1;(statearr_11666_11694[1] = 15);
} else
{var statearr_11667_11695 = state_11657__$1;(statearr_11667_11695[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11658 === 8))
{var inst_11634 = cljs.core.async.timeout.call(null,delay);var state_11657__$1 = state_11657;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11657__$1,11,inst_11634);
} else
{if((state_val_11658 === 9))
{var state_11657__$1 = state_11657;var statearr_11668_11696 = state_11657__$1;(statearr_11668_11696[2] = null);
(statearr_11668_11696[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11658 === 10))
{var inst_11639 = (state_11657[2]);var state_11657__$1 = (function (){var statearr_11669 = state_11657;(statearr_11669[8] = inst_11639);
return statearr_11669;
})();if(cljs.core.truth_(log))
{var statearr_11670_11697 = state_11657__$1;(statearr_11670_11697[1] = 12);
} else
{var statearr_11671_11698 = state_11657__$1;(statearr_11671_11698[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11658 === 11))
{var inst_11636 = (state_11657[2]);var state_11657__$1 = state_11657;var statearr_11672_11699 = state_11657__$1;(statearr_11672_11699[2] = inst_11636);
(statearr_11672_11699[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11658 === 12))
{var inst_11631 = (state_11657[7]);var inst_11641 = cljs.core.clj__GT_js.call(null,inst_11631);var inst_11642 = console.log(inst_11641);var state_11657__$1 = state_11657;var statearr_11673_11700 = state_11657__$1;(statearr_11673_11700[2] = inst_11642);
(statearr_11673_11700[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11658 === 13))
{var state_11657__$1 = state_11657;var statearr_11674_11701 = state_11657__$1;(statearr_11674_11701[2] = null);
(statearr_11674_11701[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11658 === 14))
{var inst_11631 = (state_11657[7]);var inst_11645 = (state_11657[2]);var state_11657__$1 = (function (){var statearr_11675 = state_11657;(statearr_11675[9] = inst_11645);
return statearr_11675;
})();var statearr_11676_11702 = state_11657__$1;(statearr_11676_11702[2] = inst_11631);
(statearr_11676_11702[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11658 === 15))
{var state_11657__$1 = state_11657;var statearr_11677_11703 = state_11657__$1;(statearr_11677_11703[2] = null);
(statearr_11677_11703[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11658 === 16))
{var state_11657__$1 = state_11657;var statearr_11678_11704 = state_11657__$1;(statearr_11678_11704[2] = null);
(statearr_11678_11704[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11658 === 17))
{var inst_11653 = (state_11657[2]);var state_11657__$1 = state_11657;var statearr_11679_11705 = state_11657__$1;(statearr_11679_11705[2] = inst_11653);
(statearr_11679_11705[1] = 3);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_11683 = [null,null,null,null,null,null,null,null,null,null];(statearr_11683[0] = state_machine__5507__auto__);
(statearr_11683[1] = 1);
return statearr_11683;
});
var state_machine__5507__auto____1 = (function (state_11657){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11657);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11684){if((e11684 instanceof Object))
{var ex__5510__auto__ = e11684;var statearr_11685_11706 = state_11657;(statearr_11685_11706[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11657);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11684;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11707 = state_11657;
state_11657 = G__11707;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11657){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11686 = f__5522__auto__.call(null);(statearr_11686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11687);
return statearr_11686;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__11568 = null;if (arguments.length > 1) {
  p__11568 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__11568);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__11708){
var ch = cljs.core.first(arglist__11708);
var p__11568 = cljs.core.rest(arglist__11708);
return dorun_async__delegate(ch,p__11568);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map