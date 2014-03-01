// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj38910 = {};return obj38910;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3394__auto__ = evt;if(and__3394__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3394__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4027__auto__ = (((evt == null))?null:evt);return (function (){var or__3406__auto__ = (domina.events.prevent_default[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.events.prevent_default["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3394__auto__ = evt;if(and__3394__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3394__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4027__auto__ = (((evt == null))?null:evt);return (function (){var or__3406__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3394__auto__ = evt;if(and__3394__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3394__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4027__auto__ = (((evt == null))?null:evt);return (function (){var or__3406__auto__ = (domina.events.target[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.events.target["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3394__auto__ = evt;if(and__3394__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3394__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4027__auto__ = (((evt == null))?null:evt);return (function (){var or__3406__auto__ = (domina.events.current_target[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.events.current_target["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3394__auto__ = evt;if(and__3394__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3394__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4027__auto__ = (((evt == null))?null:evt);return (function (){var or__3406__auto__ = (domina.events.event_type[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.events.event_type["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3394__auto__ = evt;if(and__3394__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3394__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4027__auto__ = (((evt == null))?null:evt);return (function (){var or__3406__auto__ = (domina.events.raw_event[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.events.raw_event["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t38914 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t38914 = (function (evt,f,create_listener_function,meta38915){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta38915 = meta38915;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t38914.cljs$lang$type = true;
domina.events.t38914.cljs$lang$ctorStr = "domina.events/t38914";
domina.events.t38914.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t38914");
});
domina.events.t38914.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t38914.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t38914.prototype.domina$events$Event$ = true;
domina.events.t38914.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t38914.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t38914.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t38914.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t38914.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t38914.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t38914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38916){var self__ = this;
var _38916__$1 = this;return self__.meta38915;
});
domina.events.t38914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38916,meta38915__$1){var self__ = this;
var _38916__$1 = this;return (new domina.events.t38914(self__.evt,self__.f,self__.create_listener_function,meta38915__$1));
});
domina.events.__GT_t38914 = (function __GT_t38914(evt__$1,f__$1,create_listener_function__$1,meta38915){return (new domina.events.t38914(evt__$1,f__$1,create_listener_function__$1,meta38915));
});
}
return (new domina.events.t38914(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__38921(s__38922){return (new cljs.core.LazySeq(null,(function (){var s__38922__$1 = s__38922;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__38922__$1);if(temp__4092__auto__)
{var s__38922__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38922__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__38922__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__38924 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__38923 = 0;while(true){
if((i__38923 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__38923);cljs.core.chunk_append.call(null,b__38924,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__38925 = (i__38923 + 1);
i__38923 = G__38925;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38924),iter__38921.call(null,cljs.core.chunk_rest.call(null,s__38922__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38924),null);
}
} else
{var node = cljs.core.first.call(null,s__38922__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__38921.call(null,cljs.core.rest.call(null,s__38922__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__38934 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38935 = null;var count__38936 = 0;var i__38937 = 0;while(true){
if((i__38937 < count__38936))
{var node = cljs.core._nth.call(null,chunk__38935,i__38937);goog.events.removeAll(node);
{
var G__38942 = seq__38934;
var G__38943 = chunk__38935;
var G__38944 = count__38936;
var G__38945 = (i__38937 + 1);
seq__38934 = G__38942;
chunk__38935 = G__38943;
count__38936 = G__38944;
i__38937 = G__38945;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38934);if(temp__4092__auto__)
{var seq__38934__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38934__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__38934__$1);{
var G__38946 = cljs.core.chunk_rest.call(null,seq__38934__$1);
var G__38947 = c__4148__auto__;
var G__38948 = cljs.core.count.call(null,c__4148__auto__);
var G__38949 = 0;
seq__38934 = G__38946;
chunk__38935 = G__38947;
count__38936 = G__38948;
i__38937 = G__38949;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__38934__$1);goog.events.removeAll(node);
{
var G__38950 = cljs.core.next.call(null,seq__38934__$1);
var G__38951 = null;
var G__38952 = 0;
var G__38953 = 0;
seq__38934 = G__38950;
chunk__38935 = G__38951;
count__38936 = G__38952;
i__38937 = G__38953;
continue;
}
}
} else
{return null;
}
}
break;
}
});
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__38938 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38939 = null;var count__38940 = 0;var i__38941 = 0;while(true){
if((i__38941 < count__38940))
{var node = cljs.core._nth.call(null,chunk__38939,i__38941);goog.events.removeAll(node,type__$1);
{
var G__38954 = seq__38938;
var G__38955 = chunk__38939;
var G__38956 = count__38940;
var G__38957 = (i__38941 + 1);
seq__38938 = G__38954;
chunk__38939 = G__38955;
count__38940 = G__38956;
i__38941 = G__38957;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38938);if(temp__4092__auto__)
{var seq__38938__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38938__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__38938__$1);{
var G__38958 = cljs.core.chunk_rest.call(null,seq__38938__$1);
var G__38959 = c__4148__auto__;
var G__38960 = cljs.core.count.call(null,c__4148__auto__);
var G__38961 = 0;
seq__38938 = G__38958;
chunk__38939 = G__38959;
count__38940 = G__38960;
i__38941 = G__38961;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__38938__$1);goog.events.removeAll(node,type__$1);
{
var G__38962 = cljs.core.next.call(null,seq__38938__$1);
var G__38963 = null;
var G__38964 = 0;
var G__38965 = 0;
seq__38938 = G__38962;
chunk__38939 = G__38963;
count__38940 = G__38964;
i__38941 = G__38965;
continue;
}
}
} else
{return null;
}
}
break;
}
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){return ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4090__auto__ = n.parentNode;if(cljs.core.truth_(temp__4090__auto__))
{var parent = temp__4090__auto__;{
var G__38966 = parent;
var G__38967 = cljs.core.cons.call(null,parent,so_far);
n = G__38966;
so_far = G__38967;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__38976_38984 = cljs.core.seq.call(null,ancestors);var chunk__38977_38985 = null;var count__38978_38986 = 0;var i__38979_38987 = 0;while(true){
if((i__38979_38987 < count__38978_38986))
{var n_38988 = cljs.core._nth.call(null,chunk__38977_38985,i__38979_38987);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38988;
goog.events.fireListeners(n_38988,evt.type,true,evt);
}
{
var G__38989 = seq__38976_38984;
var G__38990 = chunk__38977_38985;
var G__38991 = count__38978_38986;
var G__38992 = (i__38979_38987 + 1);
seq__38976_38984 = G__38989;
chunk__38977_38985 = G__38990;
count__38978_38986 = G__38991;
i__38979_38987 = G__38992;
continue;
}
} else
{var temp__4092__auto___38993 = cljs.core.seq.call(null,seq__38976_38984);if(temp__4092__auto___38993)
{var seq__38976_38994__$1 = temp__4092__auto___38993;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38976_38994__$1))
{var c__4148__auto___38995 = cljs.core.chunk_first.call(null,seq__38976_38994__$1);{
var G__38996 = cljs.core.chunk_rest.call(null,seq__38976_38994__$1);
var G__38997 = c__4148__auto___38995;
var G__38998 = cljs.core.count.call(null,c__4148__auto___38995);
var G__38999 = 0;
seq__38976_38984 = G__38996;
chunk__38977_38985 = G__38997;
count__38978_38986 = G__38998;
i__38979_38987 = G__38999;
continue;
}
} else
{var n_39000 = cljs.core.first.call(null,seq__38976_38994__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39000;
goog.events.fireListeners(n_39000,evt.type,true,evt);
}
{
var G__39001 = cljs.core.next.call(null,seq__38976_38994__$1);
var G__39002 = null;
var G__39003 = 0;
var G__39004 = 0;
seq__38976_38984 = G__39001;
chunk__38977_38985 = G__39002;
count__38978_38986 = G__39003;
i__38979_38987 = G__39004;
continue;
}
}
} else
{}
}
break;
}
var seq__38980_39005 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__38981_39006 = null;var count__38982_39007 = 0;var i__38983_39008 = 0;while(true){
if((i__38983_39008 < count__38982_39007))
{var n_39009 = cljs.core._nth.call(null,chunk__38981_39006,i__38983_39008);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39009;
goog.events.fireListeners(n_39009,evt.type,false,evt);
}
{
var G__39010 = seq__38980_39005;
var G__39011 = chunk__38981_39006;
var G__39012 = count__38982_39007;
var G__39013 = (i__38983_39008 + 1);
seq__38980_39005 = G__39010;
chunk__38981_39006 = G__39011;
count__38982_39007 = G__39012;
i__38983_39008 = G__39013;
continue;
}
} else
{var temp__4092__auto___39014 = cljs.core.seq.call(null,seq__38980_39005);if(temp__4092__auto___39014)
{var seq__38980_39015__$1 = temp__4092__auto___39014;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38980_39015__$1))
{var c__4148__auto___39016 = cljs.core.chunk_first.call(null,seq__38980_39015__$1);{
var G__39017 = cljs.core.chunk_rest.call(null,seq__38980_39015__$1);
var G__39018 = c__4148__auto___39016;
var G__39019 = cljs.core.count.call(null,c__4148__auto___39016);
var G__39020 = 0;
seq__38980_39005 = G__39017;
chunk__38981_39006 = G__39018;
count__38982_39007 = G__39019;
i__38983_39008 = G__39020;
continue;
}
} else
{var n_39021 = cljs.core.first.call(null,seq__38980_39015__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_39021;
goog.events.fireListeners(n_39021,evt.type,false,evt);
}
{
var G__39022 = cljs.core.next.call(null,seq__38980_39015__$1);
var G__39023 = null;
var G__39024 = 0;
var G__39025 = 0;
seq__38980_39005 = G__39022;
chunk__38981_39006 = G__39023;
count__38982_39007 = G__39024;
i__38983_39008 = G__39025;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3394__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3394__auto__))
{return o.dispatchEvent;
} else
{return and__3394__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__39032_39038 = cljs.core.seq.call(null,evt_map);var chunk__39033_39039 = null;var count__39034_39040 = 0;var i__39035_39041 = 0;while(true){
if((i__39035_39041 < count__39034_39040))
{var vec__39036_39042 = cljs.core._nth.call(null,chunk__39033_39039,i__39035_39041);var k_39043 = cljs.core.nth.call(null,vec__39036_39042,0,null);var v_39044 = cljs.core.nth.call(null,vec__39036_39042,1,null);(evt[k_39043] = v_39044);
{
var G__39045 = seq__39032_39038;
var G__39046 = chunk__39033_39039;
var G__39047 = count__39034_39040;
var G__39048 = (i__39035_39041 + 1);
seq__39032_39038 = G__39045;
chunk__39033_39039 = G__39046;
count__39034_39040 = G__39047;
i__39035_39041 = G__39048;
continue;
}
} else
{var temp__4092__auto___39049 = cljs.core.seq.call(null,seq__39032_39038);if(temp__4092__auto___39049)
{var seq__39032_39050__$1 = temp__4092__auto___39049;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39032_39050__$1))
{var c__4148__auto___39051 = cljs.core.chunk_first.call(null,seq__39032_39050__$1);{
var G__39052 = cljs.core.chunk_rest.call(null,seq__39032_39050__$1);
var G__39053 = c__4148__auto___39051;
var G__39054 = cljs.core.count.call(null,c__4148__auto___39051);
var G__39055 = 0;
seq__39032_39038 = G__39052;
chunk__39033_39039 = G__39053;
count__39034_39040 = G__39054;
i__39035_39041 = G__39055;
continue;
}
} else
{var vec__39037_39056 = cljs.core.first.call(null,seq__39032_39050__$1);var k_39057 = cljs.core.nth.call(null,vec__39037_39056,0,null);var v_39058 = cljs.core.nth.call(null,vec__39037_39056,1,null);(evt[k_39057] = v_39058);
{
var G__39059 = cljs.core.next.call(null,seq__39032_39050__$1);
var G__39060 = null;
var G__39061 = 0;
var G__39062 = 0;
seq__39032_39038 = G__39059;
chunk__39033_39039 = G__39060;
count__39034_39040 = G__39061;
i__39035_39041 = G__39062;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__39063_SHARP_){return goog.events.getListeners(p1__39063_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
