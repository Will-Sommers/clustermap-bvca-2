// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__23118){var vec__23120 = p__23118;var irreg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23120,0,null);if((n === 1))
{return word;
} else
{var or__3406__auto__ = irreg;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return [cljs.core.str(word),cljs.core.str("s")].join('');
}
}
};
var pluralize = function (n,word,var_args){
var p__23118 = null;if (arguments.length > 2) {
  p__23118 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__23118);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__23121){
var n = cljs.core.first(arglist__23121);
arglist__23121 = cljs.core.next(arglist__23121);
var word = cljs.core.first(arglist__23121);
var p__23118 = cljs.core.rest(arglist__23121);
return pluralize__delegate(n,word,p__23118);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;
