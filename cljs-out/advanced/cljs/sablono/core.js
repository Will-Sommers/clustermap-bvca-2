// Compiled by ClojureScript 0.0-2138
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__25082__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__25081 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25081,0,null);var body = cljs.core.nthnext(vec__25081,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__25082 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25082__delegate.call(this,args);};
G__25082.cljs$lang$maxFixedArity = 0;
G__25082.cljs$lang$applyTo = (function (arglist__25083){
var args = cljs.core.seq(arglist__25083);
return G__25082__delegate(args);
});
G__25082.cljs$core$IFn$_invoke$arity$variadic = G__25082__delegate;
return G__25082;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__25088(s__25089){return (new cljs.core.LazySeq(null,(function (){var s__25089__$1 = s__25089;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25089__$1);if(temp__4092__auto__)
{var s__25089__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25089__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25089__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25091 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25090 = 0;while(true){
if((i__25090 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25090);cljs.core.chunk_append(b__25091,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__25092 = (i__25090 + 1);
i__25090 = G__25092;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25091),iter__25088(cljs.core.chunk_rest(s__25089__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25091),null);
}
} else
{var args = cljs.core.first(s__25089__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__25088(cljs.core.rest(s__25089__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__25093_SHARP_){return cljs.core.reset_BANG_(html,p1__25093_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__25098(s__25099){return (new cljs.core.LazySeq(null,(function (){var s__25099__$1 = s__25099;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25099__$1);if(temp__4092__auto__)
{var s__25099__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25099__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25099__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25101 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25100 = 0;while(true){
if((i__25100 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25100);cljs.core.chunk_append(b__25101,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$182,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$183,"text/css",cljs.core.constant$keyword$184,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$185,"stylesheet"], null)], null));
{
var G__25102 = (i__25100 + 1);
i__25100 = G__25102;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25101),iter__25098(cljs.core.chunk_rest(s__25099__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25101),null);
}
} else
{var style = cljs.core.first(s__25099__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$182,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$183,"text/css",cljs.core.constant$keyword$184,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$185,"stylesheet"], null)], null),iter__25098(cljs.core.rest(s__25099__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__25103){
var styles = cljs.core.seq(arglist__25103);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to25104 = (function() { 
var link_to25104__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$186,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$184,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to25104 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to25104__delegate.call(this,url,content);};
link_to25104.cljs$lang$maxFixedArity = 1;
link_to25104.cljs$lang$applyTo = (function (arglist__25105){
var url = cljs.core.first(arglist__25105);
var content = cljs.core.rest(arglist__25105);
return link_to25104__delegate(url,content);
});
link_to25104.cljs$core$IFn$_invoke$arity$variadic = link_to25104__delegate;
return link_to25104;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to25104);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to25106 = (function() { 
var mail_to25106__delegate = function (e_mail,p__25107){var vec__25109 = p__25107;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25109,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$186,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$184,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to25106 = function (e_mail,var_args){
var p__25107 = null;if (arguments.length > 1) {
  p__25107 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to25106__delegate.call(this,e_mail,p__25107);};
mail_to25106.cljs$lang$maxFixedArity = 1;
mail_to25106.cljs$lang$applyTo = (function (arglist__25110){
var e_mail = cljs.core.first(arglist__25110);
var p__25107 = cljs.core.rest(arglist__25110);
return mail_to25106__delegate(e_mail,p__25107);
});
mail_to25106.cljs$core$IFn$_invoke$arity$variadic = mail_to25106__delegate;
return mail_to25106;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to25106);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list25111 = (function unordered_list25111(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$187,(function (){var iter__4117__auto__ = (function iter__25116(s__25117){return (new cljs.core.LazySeq(null,(function (){var s__25117__$1 = s__25117;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25117__$1);if(temp__4092__auto__)
{var s__25117__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25117__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25117__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25119 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25118 = 0;while(true){
if((i__25118 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25118);cljs.core.chunk_append(b__25119,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$188,x], null));
{
var G__25120 = (i__25118 + 1);
i__25118 = G__25120;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25119),iter__25116(cljs.core.chunk_rest(s__25117__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25119),null);
}
} else
{var x = cljs.core.first(s__25117__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$188,x], null),iter__25116(cljs.core.rest(s__25117__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list25111);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list25121 = (function ordered_list25121(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$189,(function (){var iter__4117__auto__ = (function iter__25126(s__25127){return (new cljs.core.LazySeq(null,(function (){var s__25127__$1 = s__25127;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25127__$1);if(temp__4092__auto__)
{var s__25127__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25127__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25127__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25129 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25128 = 0;while(true){
if((i__25128 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25128);cljs.core.chunk_append(b__25129,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$188,x], null));
{
var G__25130 = (i__25128 + 1);
i__25128 = G__25130;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25129),iter__25126(cljs.core.chunk_rest(s__25127__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25129),null);
}
} else
{var x = cljs.core.first(s__25127__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$188,x], null),iter__25126(cljs.core.rest(s__25127__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list25121);
/**
* Create an image element.
*/
sablono.core.image25131 = (function() {
var image25131 = null;
var image25131__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$190,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$191,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image25131__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$190,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$191,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$192,alt], null)], null);
});
image25131 = function(src,alt){
switch(arguments.length){
case 1:
return image25131__1.call(this,src);
case 2:
return image25131__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image25131.cljs$core$IFn$_invoke$arity$1 = image25131__1;
image25131.cljs$core$IFn$_invoke$arity$2 = image25131__2;
return image25131;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image25131);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__25132_SHARP_,p2__25133_SHARP_){return [cljs.core.str(p1__25132_SHARP_),cljs.core.str("["),cljs.core.str(p2__25133_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__25134_SHARP_,p2__25135_SHARP_){return [cljs.core.str(p1__25134_SHARP_),cljs.core.str("-"),cljs.core.str(p2__25135_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$193,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$183,type,cljs.core.constant$keyword$194,sablono.core.make_name(name),cljs.core.constant$keyword$180,sablono.core.make_id(name),cljs.core.constant$keyword$153,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field25136 = (function() {
var hidden_field25136 = null;
var hidden_field25136__1 = (function (name){return hidden_field25136.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field25136__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field25136 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field25136__1.call(this,name);
case 2:
return hidden_field25136__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field25136.cljs$core$IFn$_invoke$arity$1 = hidden_field25136__1;
hidden_field25136.cljs$core$IFn$_invoke$arity$2 = hidden_field25136__2;
return hidden_field25136;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field25136);
/**
* Creates a new text input field.
*/
sablono.core.text_field25137 = (function() {
var text_field25137 = null;
var text_field25137__1 = (function (name){return text_field25137.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field25137__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field25137 = function(name,value){
switch(arguments.length){
case 1:
return text_field25137__1.call(this,name);
case 2:
return text_field25137__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field25137.cljs$core$IFn$_invoke$arity$1 = text_field25137__1;
text_field25137.cljs$core$IFn$_invoke$arity$2 = text_field25137__2;
return text_field25137;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field25137);
/**
* Creates a new password field.
*/
sablono.core.password_field25138 = (function() {
var password_field25138 = null;
var password_field25138__1 = (function (name){return password_field25138.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field25138__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field25138 = function(name,value){
switch(arguments.length){
case 1:
return password_field25138__1.call(this,name);
case 2:
return password_field25138__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field25138.cljs$core$IFn$_invoke$arity$1 = password_field25138__1;
password_field25138.cljs$core$IFn$_invoke$arity$2 = password_field25138__2;
return password_field25138;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field25138);
/**
* Creates a new email input field.
*/
sablono.core.email_field25139 = (function() {
var email_field25139 = null;
var email_field25139__1 = (function (name){return email_field25139.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field25139__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field25139 = function(name,value){
switch(arguments.length){
case 1:
return email_field25139__1.call(this,name);
case 2:
return email_field25139__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field25139.cljs$core$IFn$_invoke$arity$1 = email_field25139__1;
email_field25139.cljs$core$IFn$_invoke$arity$2 = email_field25139__2;
return email_field25139;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field25139);
/**
* Creates a check box.
*/
sablono.core.check_box25140 = (function() {
var check_box25140 = null;
var check_box25140__1 = (function (name){return check_box25140.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box25140__2 = (function (name,checked_QMARK_){return check_box25140.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box25140__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$193,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$183,"checkbox",cljs.core.constant$keyword$194,sablono.core.make_name(name),cljs.core.constant$keyword$180,sablono.core.make_id(name),cljs.core.constant$keyword$153,value,cljs.core.constant$keyword$195,checked_QMARK_], null)], null);
});
check_box25140 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box25140__1.call(this,name);
case 2:
return check_box25140__2.call(this,name,checked_QMARK_);
case 3:
return check_box25140__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box25140.cljs$core$IFn$_invoke$arity$1 = check_box25140__1;
check_box25140.cljs$core$IFn$_invoke$arity$2 = check_box25140__2;
check_box25140.cljs$core$IFn$_invoke$arity$3 = check_box25140__3;
return check_box25140;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box25140);
/**
* Creates a radio button.
*/
sablono.core.radio_button25141 = (function() {
var radio_button25141 = null;
var radio_button25141__1 = (function (group){return radio_button25141.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button25141__2 = (function (group,checked_QMARK_){return radio_button25141.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button25141__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$193,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$183,"radio",cljs.core.constant$keyword$194,sablono.core.make_name(group),cljs.core.constant$keyword$180,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$153,value,cljs.core.constant$keyword$195,checked_QMARK_], null)], null);
});
radio_button25141 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button25141__1.call(this,group);
case 2:
return radio_button25141__2.call(this,group,checked_QMARK_);
case 3:
return radio_button25141__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button25141.cljs$core$IFn$_invoke$arity$1 = radio_button25141__1;
radio_button25141.cljs$core$IFn$_invoke$arity$2 = radio_button25141__2;
radio_button25141.cljs$core$IFn$_invoke$arity$3 = radio_button25141__3;
return radio_button25141;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button25141);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options25142 = (function() {
var select_options25142 = null;
var select_options25142__1 = (function (coll){return select_options25142.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options25142__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__25151(s__25152){return (new cljs.core.LazySeq(null,(function (){var s__25152__$1 = s__25152;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25152__$1);if(temp__4092__auto__)
{var s__25152__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25152__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25152__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25154 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25153 = 0;while(true){
if((i__25153 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25153);cljs.core.chunk_append(b__25154,((cljs.core.sequential_QMARK_(x))?(function (){var vec__25157 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25157,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25157,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$196,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$197,text], null),select_options25142.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$198,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$153,val,cljs.core.constant$keyword$199,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$198,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$199,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__25159 = (i__25153 + 1);
i__25153 = G__25159;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25154),iter__25151(cljs.core.chunk_rest(s__25152__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25154),null);
}
} else
{var x = cljs.core.first(s__25152__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__25158 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25158,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25158,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$196,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$197,text], null),select_options25142.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$198,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$153,val,cljs.core.constant$keyword$199,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$198,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$199,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__25151(cljs.core.rest(s__25152__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options25142 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options25142__1.call(this,coll);
case 2:
return select_options25142__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options25142.cljs$core$IFn$_invoke$arity$1 = select_options25142__1;
select_options25142.cljs$core$IFn$_invoke$arity$2 = select_options25142__2;
return select_options25142;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options25142);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down25160 = (function() {
var drop_down25160 = null;
var drop_down25160__2 = (function (name,options){return drop_down25160.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down25160__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$200,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$194,sablono.core.make_name(name),cljs.core.constant$keyword$180,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down25160 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down25160__2.call(this,name,options);
case 3:
return drop_down25160__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down25160.cljs$core$IFn$_invoke$arity$2 = drop_down25160__2;
drop_down25160.cljs$core$IFn$_invoke$arity$3 = drop_down25160__3;
return drop_down25160;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down25160);
/**
* Creates a text area element.
*/
sablono.core.text_area25161 = (function() {
var text_area25161 = null;
var text_area25161__1 = (function (name){return text_area25161.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area25161__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$201,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$194,sablono.core.make_name(name),cljs.core.constant$keyword$180,sablono.core.make_id(name)], null),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null);
});
text_area25161 = function(name,value){
switch(arguments.length){
case 1:
return text_area25161__1.call(this,name);
case 2:
return text_area25161__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area25161.cljs$core$IFn$_invoke$arity$1 = text_area25161__1;
text_area25161.cljs$core$IFn$_invoke$arity$2 = text_area25161__2;
return text_area25161;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area25161);
/**
* Creates a file upload input.
*/
sablono.core.file_upload25162 = (function file_upload25162(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload25162);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label25163 = (function label25163(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$197,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$177,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label25163);
/**
* Creates a submit button.
*/
sablono.core.submit_button25164 = (function submit_button25164(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$193,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$183,"submit",cljs.core.constant$keyword$153,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button25164);
/**
* Creates a form reset button.
*/
sablono.core.reset_button25165 = (function reset_button25165(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$193,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$183,"reset",cljs.core.constant$keyword$153,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button25165);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to25166 = (function() { 
var form_to25166__delegate = function (p__25167,body){var vec__25169 = p__25167;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25169,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25169,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$202,null,cljs.core.constant$keyword$203,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$204,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$205,method_str,cljs.core.constant$keyword$206,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$204,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$205,"POST",cljs.core.constant$keyword$206,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to25166 = function (p__25167,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to25166__delegate.call(this,p__25167,body);};
form_to25166.cljs$lang$maxFixedArity = 1;
form_to25166.cljs$lang$applyTo = (function (arglist__25170){
var p__25167 = cljs.core.first(arglist__25170);
var body = cljs.core.rest(arglist__25170);
return form_to25166__delegate(p__25167,body);
});
form_to25166.cljs$core$IFn$_invoke$arity$variadic = form_to25166__delegate;
return form_to25166;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to25166);
