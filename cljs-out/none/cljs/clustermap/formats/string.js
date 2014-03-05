// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.formats.string');
goog.require('cljs.core');
/**
* @param {...*} var_args
*/
clustermap.formats.string.pluralize = (function() { 
var pluralize__delegate = function (n,word,p__23900){var vec__23902 = p__23900;var irreg = cljs.core.nth.call(null,vec__23902,0,null);if((n === 1))
{return word;
} else
{var or__3441__auto__ = irreg;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return [cljs.core.str(word),cljs.core.str("s")].join('');
}
}
};
var pluralize = function (n,word,var_args){
var p__23900 = null;if (arguments.length > 2) {
  p__23900 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return pluralize__delegate.call(this,n,word,p__23900);};
pluralize.cljs$lang$maxFixedArity = 2;
pluralize.cljs$lang$applyTo = (function (arglist__23903){
var n = cljs.core.first(arglist__23903);
arglist__23903 = cljs.core.next(arglist__23903);
var word = cljs.core.first(arglist__23903);
var p__23900 = cljs.core.rest(arglist__23903);
return pluralize__delegate(n,word,p__23900);
});
pluralize.cljs$core$IFn$_invoke$arity$variadic = pluralize__delegate;
return pluralize;
})()
;

//# sourceMappingURL=string.js.map