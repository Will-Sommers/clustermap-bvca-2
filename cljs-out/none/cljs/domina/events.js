// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16502 = {};return obj16502;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16506 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16506 = (function (evt,f,create_listener_function,meta16507){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16507 = meta16507;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16506.cljs$lang$type = true;
domina.events.t16506.cljs$lang$ctorStr = "domina.events/t16506";
domina.events.t16506.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t16506");
});
domina.events.t16506.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16506.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16506.prototype.domina$events$Event$ = true;
domina.events.t16506.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16506.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16506.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16506.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16506.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16506.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16508){var self__ = this;
var _16508__$1 = this;return self__.meta16507;
});
domina.events.t16506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16508,meta16507__$1){var self__ = this;
var _16508__$1 = this;return (new domina.events.t16506(self__.evt,self__.f,self__.create_listener_function,meta16507__$1));
});
domina.events.__GT_t16506 = (function __GT_t16506(evt__$1,f__$1,create_listener_function__$1,meta16507){return (new domina.events.t16506(evt__$1,f__$1,create_listener_function__$1,meta16507));
});
}
return (new domina.events.t16506(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__16513(s__16514){return (new cljs.core.LazySeq(null,(function (){var s__16514__$1 = s__16514;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16514__$1);if(temp__4092__auto__)
{var s__16514__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16514__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16514__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16516 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16515 = 0;while(true){
if((i__16515 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__16515);cljs.core.chunk_append.call(null,b__16516,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16517 = (i__16515 + 1);
i__16515 = G__16517;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16516),iter__16513.call(null,cljs.core.chunk_rest.call(null,s__16514__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16516),null);
}
} else
{var node = cljs.core.first.call(null,s__16514__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16513.call(null,cljs.core.rest.call(null,s__16514__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__16526 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16527 = null;var count__16528 = 0;var i__16529 = 0;while(true){
if((i__16529 < count__16528))
{var node = cljs.core._nth.call(null,chunk__16527,i__16529);goog.events.removeAll(node);
{
var G__16534 = seq__16526;
var G__16535 = chunk__16527;
var G__16536 = count__16528;
var G__16537 = (i__16529 + 1);
seq__16526 = G__16534;
chunk__16527 = G__16535;
count__16528 = G__16536;
i__16529 = G__16537;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16526);if(temp__4092__auto__)
{var seq__16526__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16526__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16526__$1);{
var G__16538 = cljs.core.chunk_rest.call(null,seq__16526__$1);
var G__16539 = c__4148__auto__;
var G__16540 = cljs.core.count.call(null,c__4148__auto__);
var G__16541 = 0;
seq__16526 = G__16538;
chunk__16527 = G__16539;
count__16528 = G__16540;
i__16529 = G__16541;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16526__$1);goog.events.removeAll(node);
{
var G__16542 = cljs.core.next.call(null,seq__16526__$1);
var G__16543 = null;
var G__16544 = 0;
var G__16545 = 0;
seq__16526 = G__16542;
chunk__16527 = G__16543;
count__16528 = G__16544;
i__16529 = G__16545;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16530 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16531 = null;var count__16532 = 0;var i__16533 = 0;while(true){
if((i__16533 < count__16532))
{var node = cljs.core._nth.call(null,chunk__16531,i__16533);goog.events.removeAll(node,type__$1);
{
var G__16546 = seq__16530;
var G__16547 = chunk__16531;
var G__16548 = count__16532;
var G__16549 = (i__16533 + 1);
seq__16530 = G__16546;
chunk__16531 = G__16547;
count__16532 = G__16548;
i__16533 = G__16549;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16530);if(temp__4092__auto__)
{var seq__16530__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16530__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16530__$1);{
var G__16550 = cljs.core.chunk_rest.call(null,seq__16530__$1);
var G__16551 = c__4148__auto__;
var G__16552 = cljs.core.count.call(null,c__4148__auto__);
var G__16553 = 0;
seq__16530 = G__16550;
chunk__16531 = G__16551;
count__16532 = G__16552;
i__16533 = G__16553;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16530__$1);goog.events.removeAll(node,type__$1);
{
var G__16554 = cljs.core.next.call(null,seq__16530__$1);
var G__16555 = null;
var G__16556 = 0;
var G__16557 = 0;
seq__16530 = G__16554;
chunk__16531 = G__16555;
count__16532 = G__16556;
i__16533 = G__16557;
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
var G__16558 = parent;
var G__16559 = cljs.core.cons.call(null,parent,so_far);
n = G__16558;
so_far = G__16559;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__16568_16576 = cljs.core.seq.call(null,ancestors);var chunk__16569_16577 = null;var count__16570_16578 = 0;var i__16571_16579 = 0;while(true){
if((i__16571_16579 < count__16570_16578))
{var n_16580 = cljs.core._nth.call(null,chunk__16569_16577,i__16571_16579);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16580;
goog.events.fireListeners(n_16580,evt.type,true,evt);
}
{
var G__16581 = seq__16568_16576;
var G__16582 = chunk__16569_16577;
var G__16583 = count__16570_16578;
var G__16584 = (i__16571_16579 + 1);
seq__16568_16576 = G__16581;
chunk__16569_16577 = G__16582;
count__16570_16578 = G__16583;
i__16571_16579 = G__16584;
continue;
}
} else
{var temp__4092__auto___16585 = cljs.core.seq.call(null,seq__16568_16576);if(temp__4092__auto___16585)
{var seq__16568_16586__$1 = temp__4092__auto___16585;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16568_16586__$1))
{var c__4148__auto___16587 = cljs.core.chunk_first.call(null,seq__16568_16586__$1);{
var G__16588 = cljs.core.chunk_rest.call(null,seq__16568_16586__$1);
var G__16589 = c__4148__auto___16587;
var G__16590 = cljs.core.count.call(null,c__4148__auto___16587);
var G__16591 = 0;
seq__16568_16576 = G__16588;
chunk__16569_16577 = G__16589;
count__16570_16578 = G__16590;
i__16571_16579 = G__16591;
continue;
}
} else
{var n_16592 = cljs.core.first.call(null,seq__16568_16586__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16592;
goog.events.fireListeners(n_16592,evt.type,true,evt);
}
{
var G__16593 = cljs.core.next.call(null,seq__16568_16586__$1);
var G__16594 = null;
var G__16595 = 0;
var G__16596 = 0;
seq__16568_16576 = G__16593;
chunk__16569_16577 = G__16594;
count__16570_16578 = G__16595;
i__16571_16579 = G__16596;
continue;
}
}
} else
{}
}
break;
}
var seq__16572_16597 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__16573_16598 = null;var count__16574_16599 = 0;var i__16575_16600 = 0;while(true){
if((i__16575_16600 < count__16574_16599))
{var n_16601 = cljs.core._nth.call(null,chunk__16573_16598,i__16575_16600);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16601;
goog.events.fireListeners(n_16601,evt.type,false,evt);
}
{
var G__16602 = seq__16572_16597;
var G__16603 = chunk__16573_16598;
var G__16604 = count__16574_16599;
var G__16605 = (i__16575_16600 + 1);
seq__16572_16597 = G__16602;
chunk__16573_16598 = G__16603;
count__16574_16599 = G__16604;
i__16575_16600 = G__16605;
continue;
}
} else
{var temp__4092__auto___16606 = cljs.core.seq.call(null,seq__16572_16597);if(temp__4092__auto___16606)
{var seq__16572_16607__$1 = temp__4092__auto___16606;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16572_16607__$1))
{var c__4148__auto___16608 = cljs.core.chunk_first.call(null,seq__16572_16607__$1);{
var G__16609 = cljs.core.chunk_rest.call(null,seq__16572_16607__$1);
var G__16610 = c__4148__auto___16608;
var G__16611 = cljs.core.count.call(null,c__4148__auto___16608);
var G__16612 = 0;
seq__16572_16597 = G__16609;
chunk__16573_16598 = G__16610;
count__16574_16599 = G__16611;
i__16575_16600 = G__16612;
continue;
}
} else
{var n_16613 = cljs.core.first.call(null,seq__16572_16607__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16613;
goog.events.fireListeners(n_16613,evt.type,false,evt);
}
{
var G__16614 = cljs.core.next.call(null,seq__16572_16607__$1);
var G__16615 = null;
var G__16616 = 0;
var G__16617 = 0;
seq__16572_16597 = G__16614;
chunk__16573_16598 = G__16615;
count__16574_16599 = G__16616;
i__16575_16600 = G__16617;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__16624_16630 = cljs.core.seq.call(null,evt_map);var chunk__16625_16631 = null;var count__16626_16632 = 0;var i__16627_16633 = 0;while(true){
if((i__16627_16633 < count__16626_16632))
{var vec__16628_16634 = cljs.core._nth.call(null,chunk__16625_16631,i__16627_16633);var k_16635 = cljs.core.nth.call(null,vec__16628_16634,0,null);var v_16636 = cljs.core.nth.call(null,vec__16628_16634,1,null);(evt[k_16635] = v_16636);
{
var G__16637 = seq__16624_16630;
var G__16638 = chunk__16625_16631;
var G__16639 = count__16626_16632;
var G__16640 = (i__16627_16633 + 1);
seq__16624_16630 = G__16637;
chunk__16625_16631 = G__16638;
count__16626_16632 = G__16639;
i__16627_16633 = G__16640;
continue;
}
} else
{var temp__4092__auto___16641 = cljs.core.seq.call(null,seq__16624_16630);if(temp__4092__auto___16641)
{var seq__16624_16642__$1 = temp__4092__auto___16641;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16624_16642__$1))
{var c__4148__auto___16643 = cljs.core.chunk_first.call(null,seq__16624_16642__$1);{
var G__16644 = cljs.core.chunk_rest.call(null,seq__16624_16642__$1);
var G__16645 = c__4148__auto___16643;
var G__16646 = cljs.core.count.call(null,c__4148__auto___16643);
var G__16647 = 0;
seq__16624_16630 = G__16644;
chunk__16625_16631 = G__16645;
count__16626_16632 = G__16646;
i__16627_16633 = G__16647;
continue;
}
} else
{var vec__16629_16648 = cljs.core.first.call(null,seq__16624_16642__$1);var k_16649 = cljs.core.nth.call(null,vec__16629_16648,0,null);var v_16650 = cljs.core.nth.call(null,vec__16629_16648,1,null);(evt[k_16649] = v_16650);
{
var G__16651 = cljs.core.next.call(null,seq__16624_16642__$1);
var G__16652 = null;
var G__16653 = 0;
var G__16654 = 0;
seq__16624_16630 = G__16651;
chunk__16625_16631 = G__16652;
count__16626_16632 = G__16653;
i__16627_16633 = G__16654;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__16655_SHARP_){return goog.events.getListeners(p1__16655_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map