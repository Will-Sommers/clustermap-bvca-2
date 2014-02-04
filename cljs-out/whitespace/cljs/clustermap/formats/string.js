// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__32280){var vec__32282 = p__32280;var irreg = cljs.core.nth.call(null,vec__32282,0,null);if((n === 1))
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
var p__32280 = null;if (arguments.length > 2) {
  p__32280 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__32280);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__32283){
var n = cljs.core.first(arglist__32283);
arglist__32283 = cljs.core.next(arglist__32283);
var word = cljs.core.first(arglist__32283);
var p__32280 = cljs.core.rest(arglist__32283);
return pluralize__delegate(n,word,p__32280);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;
