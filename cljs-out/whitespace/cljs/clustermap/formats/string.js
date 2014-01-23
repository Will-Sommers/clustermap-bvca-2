// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__30537){var vec__30539 = p__30537;var irreg = cljs.core.nth.call(null,vec__30539,0,null);if((n === 1))
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
var p__30537 = null;if (arguments.length > 2) {
  p__30537 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__30537);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__30540){
var n = cljs.core.first(arglist__30540);
arglist__30540 = cljs.core.next(arglist__30540);
var word = cljs.core.first(arglist__30540);
var p__30537 = cljs.core.rest(arglist__30540);
return pluralize__delegate(n,word,p__30537);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;