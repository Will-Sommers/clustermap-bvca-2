// Compiled by ClojureScript 0.0-2173
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__17041__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__17040 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__17040,0,null);var body = cljs.core.nthnext.call(null,vec__17040,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__17041 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17041__delegate.call(this,args);};
G__17041.cljs$lang$maxFixedArity = 0;
G__17041.cljs$lang$applyTo = (function (arglist__17042){
var args = cljs.core.seq(arglist__17042);
return G__17041__delegate(args);
});
G__17041.cljs$core$IFn$_invoke$arity$variadic = G__17041__delegate;
return G__17041;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4158__auto__ = (function iter__17047(s__17048){return (new cljs.core.LazySeq(null,(function (){var s__17048__$1 = s__17048;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17048__$1);if(temp__4092__auto__)
{var s__17048__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17048__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__17048__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__17050 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__17049 = 0;while(true){
if((i__17049 < size__4157__auto__))
{var args = cljs.core._nth.call(null,c__4156__auto__,i__17049);cljs.core.chunk_append.call(null,b__17050,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__17051 = (i__17049 + 1);
i__17049 = G__17051;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17050),iter__17047.call(null,cljs.core.chunk_rest.call(null,s__17048__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17050),null);
}
} else
{var args = cljs.core.first.call(null,s__17048__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__17047.call(null,cljs.core.rest.call(null,s__17048__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__17052_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__17052_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4158__auto__ = (function iter__17057(s__17058){return (new cljs.core.LazySeq(null,(function (){var s__17058__$1 = s__17058;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17058__$1);if(temp__4092__auto__)
{var s__17058__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17058__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__17058__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__17060 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__17059 = 0;while(true){
if((i__17059 < size__4157__auto__))
{var style = cljs.core._nth.call(null,c__4156__auto__,i__17059);cljs.core.chunk_append.call(null,b__17060,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__17061 = (i__17059 + 1);
i__17059 = G__17061;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17060),iter__17057.call(null,cljs.core.chunk_rest.call(null,s__17058__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17060),null);
}
} else
{var style = cljs.core.first.call(null,s__17058__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__17057.call(null,cljs.core.rest.call(null,s__17058__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__17062){
var styles = cljs.core.seq(arglist__17062);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.8.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to17063 = (function() { 
var link_to17063__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to17063 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to17063__delegate.call(this,url,content);};
link_to17063.cljs$lang$maxFixedArity = 1;
link_to17063.cljs$lang$applyTo = (function (arglist__17064){
var url = cljs.core.first(arglist__17064);
var content = cljs.core.rest(arglist__17064);
return link_to17063__delegate(url,content);
});
link_to17063.cljs$core$IFn$_invoke$arity$variadic = link_to17063__delegate;
return link_to17063;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17063);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to17065 = (function() { 
var mail_to17065__delegate = function (e_mail,p__17066){var vec__17068 = p__17066;var content = cljs.core.nth.call(null,vec__17068,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3441__auto__ = content;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to17065 = function (e_mail,var_args){
var p__17066 = null;if (arguments.length > 1) {
  p__17066 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to17065__delegate.call(this,e_mail,p__17066);};
mail_to17065.cljs$lang$maxFixedArity = 1;
mail_to17065.cljs$lang$applyTo = (function (arglist__17069){
var e_mail = cljs.core.first(arglist__17069);
var p__17066 = cljs.core.rest(arglist__17069);
return mail_to17065__delegate(e_mail,p__17066);
});
mail_to17065.cljs$core$IFn$_invoke$arity$variadic = mail_to17065__delegate;
return mail_to17065;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17065);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list17070 = (function unordered_list17070(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4158__auto__ = (function iter__17075(s__17076){return (new cljs.core.LazySeq(null,(function (){var s__17076__$1 = s__17076;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17076__$1);if(temp__4092__auto__)
{var s__17076__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17076__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__17076__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__17078 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__17077 = 0;while(true){
if((i__17077 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__17077);cljs.core.chunk_append.call(null,b__17078,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__17079 = (i__17077 + 1);
i__17077 = G__17079;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17078),iter__17075.call(null,cljs.core.chunk_rest.call(null,s__17076__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17078),null);
}
} else
{var x = cljs.core.first.call(null,s__17076__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__17075.call(null,cljs.core.rest.call(null,s__17076__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17070);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list17080 = (function ordered_list17080(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4158__auto__ = (function iter__17085(s__17086){return (new cljs.core.LazySeq(null,(function (){var s__17086__$1 = s__17086;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17086__$1);if(temp__4092__auto__)
{var s__17086__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17086__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__17086__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__17088 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__17087 = 0;while(true){
if((i__17087 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__17087);cljs.core.chunk_append.call(null,b__17088,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__17089 = (i__17087 + 1);
i__17087 = G__17089;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17088),iter__17085.call(null,cljs.core.chunk_rest.call(null,s__17086__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17088),null);
}
} else
{var x = cljs.core.first.call(null,s__17086__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__17085.call(null,cljs.core.rest.call(null,s__17086__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17080);
/**
* Create an image element.
*/
sablono.core.image17090 = (function() {
var image17090 = null;
var image17090__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image17090__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image17090 = function(src,alt){
switch(arguments.length){
case 1:
return image17090__1.call(this,src);
case 2:
return image17090__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image17090.cljs$core$IFn$_invoke$arity$1 = image17090__1;
image17090.cljs$core$IFn$_invoke$arity$2 = image17090__2;
return image17090;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17090);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__17091_SHARP_,p2__17092_SHARP_){return [cljs.core.str(p1__17091_SHARP_),cljs.core.str("["),cljs.core.str(p2__17092_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__17093_SHARP_,p2__17094_SHARP_){return [cljs.core.str(p1__17093_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17094_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field17095 = (function() {
var hidden_field17095 = null;
var hidden_field17095__1 = (function (name){return hidden_field17095.call(null,name,null);
});
var hidden_field17095__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field17095 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field17095__1.call(this,name);
case 2:
return hidden_field17095__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field17095.cljs$core$IFn$_invoke$arity$1 = hidden_field17095__1;
hidden_field17095.cljs$core$IFn$_invoke$arity$2 = hidden_field17095__2;
return hidden_field17095;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17095);
/**
* Creates a new text input field.
*/
sablono.core.text_field17096 = (function() {
var text_field17096 = null;
var text_field17096__1 = (function (name){return text_field17096.call(null,name,null);
});
var text_field17096__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field17096 = function(name,value){
switch(arguments.length){
case 1:
return text_field17096__1.call(this,name);
case 2:
return text_field17096__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field17096.cljs$core$IFn$_invoke$arity$1 = text_field17096__1;
text_field17096.cljs$core$IFn$_invoke$arity$2 = text_field17096__2;
return text_field17096;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17096);
/**
* Creates a new password field.
*/
sablono.core.password_field17097 = (function() {
var password_field17097 = null;
var password_field17097__1 = (function (name){return password_field17097.call(null,name,null);
});
var password_field17097__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field17097 = function(name,value){
switch(arguments.length){
case 1:
return password_field17097__1.call(this,name);
case 2:
return password_field17097__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field17097.cljs$core$IFn$_invoke$arity$1 = password_field17097__1;
password_field17097.cljs$core$IFn$_invoke$arity$2 = password_field17097__2;
return password_field17097;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17097);
/**
* Creates a new email input field.
*/
sablono.core.email_field17098 = (function() {
var email_field17098 = null;
var email_field17098__1 = (function (name){return email_field17098.call(null,name,null);
});
var email_field17098__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field17098 = function(name,value){
switch(arguments.length){
case 1:
return email_field17098__1.call(this,name);
case 2:
return email_field17098__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field17098.cljs$core$IFn$_invoke$arity$1 = email_field17098__1;
email_field17098.cljs$core$IFn$_invoke$arity$2 = email_field17098__2;
return email_field17098;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17098);
/**
* Creates a check box.
*/
sablono.core.check_box17099 = (function() {
var check_box17099 = null;
var check_box17099__1 = (function (name){return check_box17099.call(null,name,null);
});
var check_box17099__2 = (function (name,checked_QMARK_){return check_box17099.call(null,name,checked_QMARK_,"true");
});
var check_box17099__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box17099 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box17099__1.call(this,name);
case 2:
return check_box17099__2.call(this,name,checked_QMARK_);
case 3:
return check_box17099__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box17099.cljs$core$IFn$_invoke$arity$1 = check_box17099__1;
check_box17099.cljs$core$IFn$_invoke$arity$2 = check_box17099__2;
check_box17099.cljs$core$IFn$_invoke$arity$3 = check_box17099__3;
return check_box17099;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17099);
/**
* Creates a radio button.
*/
sablono.core.radio_button17100 = (function() {
var radio_button17100 = null;
var radio_button17100__1 = (function (group){return radio_button17100.call(null,group,null);
});
var radio_button17100__2 = (function (group,checked_QMARK_){return radio_button17100.call(null,group,checked_QMARK_,"true");
});
var radio_button17100__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button17100 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button17100__1.call(this,group);
case 2:
return radio_button17100__2.call(this,group,checked_QMARK_);
case 3:
return radio_button17100__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button17100.cljs$core$IFn$_invoke$arity$1 = radio_button17100__1;
radio_button17100.cljs$core$IFn$_invoke$arity$2 = radio_button17100__2;
radio_button17100.cljs$core$IFn$_invoke$arity$3 = radio_button17100__3;
return radio_button17100;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17100);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options17101 = (function() {
var select_options17101 = null;
var select_options17101__1 = (function (coll){return select_options17101.call(null,coll,null);
});
var select_options17101__2 = (function (coll,selected){var iter__4158__auto__ = (function iter__17110(s__17111){return (new cljs.core.LazySeq(null,(function (){var s__17111__$1 = s__17111;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17111__$1);if(temp__4092__auto__)
{var s__17111__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17111__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__17111__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__17113 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__17112 = 0;while(true){
if((i__17112 < size__4157__auto__))
{var x = cljs.core._nth.call(null,c__4156__auto__,i__17112);cljs.core.chunk_append.call(null,b__17113,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17116 = x;var text = cljs.core.nth.call(null,vec__17116,0,null);var val = cljs.core.nth.call(null,vec__17116,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options17101.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__17118 = (i__17112 + 1);
i__17112 = G__17118;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17113),iter__17110.call(null,cljs.core.chunk_rest.call(null,s__17111__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17113),null);
}
} else
{var x = cljs.core.first.call(null,s__17111__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17117 = x;var text = cljs.core.nth.call(null,vec__17117,0,null);var val = cljs.core.nth.call(null,vec__17117,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options17101.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__17110.call(null,cljs.core.rest.call(null,s__17111__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,coll);
});
select_options17101 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options17101__1.call(this,coll);
case 2:
return select_options17101__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options17101.cljs$core$IFn$_invoke$arity$1 = select_options17101__1;
select_options17101.cljs$core$IFn$_invoke$arity$2 = select_options17101__2;
return select_options17101;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17101);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down17119 = (function() {
var drop_down17119 = null;
var drop_down17119__2 = (function (name,options){return drop_down17119.call(null,name,options,null);
});
var drop_down17119__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down17119 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down17119__2.call(this,name,options);
case 3:
return drop_down17119__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down17119.cljs$core$IFn$_invoke$arity$2 = drop_down17119__2;
drop_down17119.cljs$core$IFn$_invoke$arity$3 = drop_down17119__3;
return drop_down17119;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17119);
/**
* Creates a text area element.
*/
sablono.core.text_area17120 = (function() {
var text_area17120 = null;
var text_area17120__1 = (function (name){return text_area17120.call(null,name,null);
});
var text_area17120__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area17120 = function(name,value){
switch(arguments.length){
case 1:
return text_area17120__1.call(this,name);
case 2:
return text_area17120__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area17120.cljs$core$IFn$_invoke$arity$1 = text_area17120__1;
text_area17120.cljs$core$IFn$_invoke$arity$2 = text_area17120__2;
return text_area17120;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17120);
/**
* Creates a file upload input.
*/
sablono.core.file_upload17121 = (function file_upload17121(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload17121);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label17122 = (function label17122(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17122);
/**
* Creates a submit button.
*/
sablono.core.submit_button17123 = (function submit_button17123(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17123);
/**
* Creates a form reset button.
*/
sablono.core.reset_button17124 = (function reset_button17124(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17124);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to17125 = (function() { 
var form_to17125__delegate = function (p__17126,body){var vec__17128 = p__17126;var method = cljs.core.nth.call(null,vec__17128,0,null);var action = cljs.core.nth.call(null,vec__17128,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to17125 = function (p__17126,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to17125__delegate.call(this,p__17126,body);};
form_to17125.cljs$lang$maxFixedArity = 1;
form_to17125.cljs$lang$applyTo = (function (arglist__17129){
var p__17126 = cljs.core.first(arglist__17129);
var body = cljs.core.rest(arglist__17129);
return form_to17125__delegate(p__17126,body);
});
form_to17125.cljs$core$IFn$_invoke$arity$variadic = form_to17125__delegate;
return form_to17125;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17125);
