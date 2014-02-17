// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj37692 = {};return obj37692;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t37696 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t37696 = (function (evt,f,create_listener_function,meta37697){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta37697 = meta37697;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t37696.cljs$lang$type = true;
domina.events.t37696.cljs$lang$ctorStr = "domina.events/t37696";
domina.events.t37696.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t37696");
});
domina.events.t37696.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t37696.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t37696.prototype.domina$events$Event$ = true;
domina.events.t37696.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t37696.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t37696.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t37696.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t37696.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t37696.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t37696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37698){var self__ = this;
var _37698__$1 = this;return self__.meta37697;
});
domina.events.t37696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37698,meta37697__$1){var self__ = this;
var _37698__$1 = this;return (new domina.events.t37696(self__.evt,self__.f,self__.create_listener_function,meta37697__$1));
});
domina.events.__GT_t37696 = (function __GT_t37696(evt__$1,f__$1,create_listener_function__$1,meta37697){return (new domina.events.t37696(evt__$1,f__$1,create_listener_function__$1,meta37697));
});
}
return (new domina.events.t37696(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__37703(s__37704){return (new cljs.core.LazySeq(null,(function (){var s__37704__$1 = s__37704;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37704__$1);if(temp__4092__auto__)
{var s__37704__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37704__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37704__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37706 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37705 = 0;while(true){
if((i__37705 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__37705);cljs.core.chunk_append.call(null,b__37706,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__37707 = (i__37705 + 1);
i__37705 = G__37707;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37706),iter__37703.call(null,cljs.core.chunk_rest.call(null,s__37704__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37706),null);
}
} else
{var node = cljs.core.first.call(null,s__37704__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__37703.call(null,cljs.core.rest.call(null,s__37704__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__37716 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37717 = null;var count__37718 = 0;var i__37719 = 0;while(true){
if((i__37719 < count__37718))
{var node = cljs.core._nth.call(null,chunk__37717,i__37719);goog.events.removeAll(node);
{
var G__37724 = seq__37716;
var G__37725 = chunk__37717;
var G__37726 = count__37718;
var G__37727 = (i__37719 + 1);
seq__37716 = G__37724;
chunk__37717 = G__37725;
count__37718 = G__37726;
i__37719 = G__37727;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37716);if(temp__4092__auto__)
{var seq__37716__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37716__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__37716__$1);{
var G__37728 = cljs.core.chunk_rest.call(null,seq__37716__$1);
var G__37729 = c__4148__auto__;
var G__37730 = cljs.core.count.call(null,c__4148__auto__);
var G__37731 = 0;
seq__37716 = G__37728;
chunk__37717 = G__37729;
count__37718 = G__37730;
i__37719 = G__37731;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__37716__$1);goog.events.removeAll(node);
{
var G__37732 = cljs.core.next.call(null,seq__37716__$1);
var G__37733 = null;
var G__37734 = 0;
var G__37735 = 0;
seq__37716 = G__37732;
chunk__37717 = G__37733;
count__37718 = G__37734;
i__37719 = G__37735;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__37720 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37721 = null;var count__37722 = 0;var i__37723 = 0;while(true){
if((i__37723 < count__37722))
{var node = cljs.core._nth.call(null,chunk__37721,i__37723);goog.events.removeAll(node,type__$1);
{
var G__37736 = seq__37720;
var G__37737 = chunk__37721;
var G__37738 = count__37722;
var G__37739 = (i__37723 + 1);
seq__37720 = G__37736;
chunk__37721 = G__37737;
count__37722 = G__37738;
i__37723 = G__37739;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37720);if(temp__4092__auto__)
{var seq__37720__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37720__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__37720__$1);{
var G__37740 = cljs.core.chunk_rest.call(null,seq__37720__$1);
var G__37741 = c__4148__auto__;
var G__37742 = cljs.core.count.call(null,c__4148__auto__);
var G__37743 = 0;
seq__37720 = G__37740;
chunk__37721 = G__37741;
count__37722 = G__37742;
i__37723 = G__37743;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__37720__$1);goog.events.removeAll(node,type__$1);
{
var G__37744 = cljs.core.next.call(null,seq__37720__$1);
var G__37745 = null;
var G__37746 = 0;
var G__37747 = 0;
seq__37720 = G__37744;
chunk__37721 = G__37745;
count__37722 = G__37746;
i__37723 = G__37747;
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
var G__37748 = parent;
var G__37749 = cljs.core.cons.call(null,parent,so_far);
n = G__37748;
so_far = G__37749;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__37758_37766 = cljs.core.seq.call(null,ancestors);var chunk__37759_37767 = null;var count__37760_37768 = 0;var i__37761_37769 = 0;while(true){
if((i__37761_37769 < count__37760_37768))
{var n_37770 = cljs.core._nth.call(null,chunk__37759_37767,i__37761_37769);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37770;
goog.events.fireListeners(n_37770,evt.type,true,evt);
}
{
var G__37771 = seq__37758_37766;
var G__37772 = chunk__37759_37767;
var G__37773 = count__37760_37768;
var G__37774 = (i__37761_37769 + 1);
seq__37758_37766 = G__37771;
chunk__37759_37767 = G__37772;
count__37760_37768 = G__37773;
i__37761_37769 = G__37774;
continue;
}
} else
{var temp__4092__auto___37775 = cljs.core.seq.call(null,seq__37758_37766);if(temp__4092__auto___37775)
{var seq__37758_37776__$1 = temp__4092__auto___37775;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37758_37776__$1))
{var c__4148__auto___37777 = cljs.core.chunk_first.call(null,seq__37758_37776__$1);{
var G__37778 = cljs.core.chunk_rest.call(null,seq__37758_37776__$1);
var G__37779 = c__4148__auto___37777;
var G__37780 = cljs.core.count.call(null,c__4148__auto___37777);
var G__37781 = 0;
seq__37758_37766 = G__37778;
chunk__37759_37767 = G__37779;
count__37760_37768 = G__37780;
i__37761_37769 = G__37781;
continue;
}
} else
{var n_37782 = cljs.core.first.call(null,seq__37758_37776__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37782;
goog.events.fireListeners(n_37782,evt.type,true,evt);
}
{
var G__37783 = cljs.core.next.call(null,seq__37758_37776__$1);
var G__37784 = null;
var G__37785 = 0;
var G__37786 = 0;
seq__37758_37766 = G__37783;
chunk__37759_37767 = G__37784;
count__37760_37768 = G__37785;
i__37761_37769 = G__37786;
continue;
}
}
} else
{}
}
break;
}
var seq__37762_37787 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__37763_37788 = null;var count__37764_37789 = 0;var i__37765_37790 = 0;while(true){
if((i__37765_37790 < count__37764_37789))
{var n_37791 = cljs.core._nth.call(null,chunk__37763_37788,i__37765_37790);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37791;
goog.events.fireListeners(n_37791,evt.type,false,evt);
}
{
var G__37792 = seq__37762_37787;
var G__37793 = chunk__37763_37788;
var G__37794 = count__37764_37789;
var G__37795 = (i__37765_37790 + 1);
seq__37762_37787 = G__37792;
chunk__37763_37788 = G__37793;
count__37764_37789 = G__37794;
i__37765_37790 = G__37795;
continue;
}
} else
{var temp__4092__auto___37796 = cljs.core.seq.call(null,seq__37762_37787);if(temp__4092__auto___37796)
{var seq__37762_37797__$1 = temp__4092__auto___37796;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37762_37797__$1))
{var c__4148__auto___37798 = cljs.core.chunk_first.call(null,seq__37762_37797__$1);{
var G__37799 = cljs.core.chunk_rest.call(null,seq__37762_37797__$1);
var G__37800 = c__4148__auto___37798;
var G__37801 = cljs.core.count.call(null,c__4148__auto___37798);
var G__37802 = 0;
seq__37762_37787 = G__37799;
chunk__37763_37788 = G__37800;
count__37764_37789 = G__37801;
i__37765_37790 = G__37802;
continue;
}
} else
{var n_37803 = cljs.core.first.call(null,seq__37762_37797__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37803;
goog.events.fireListeners(n_37803,evt.type,false,evt);
}
{
var G__37804 = cljs.core.next.call(null,seq__37762_37797__$1);
var G__37805 = null;
var G__37806 = 0;
var G__37807 = 0;
seq__37762_37787 = G__37804;
chunk__37763_37788 = G__37805;
count__37764_37789 = G__37806;
i__37765_37790 = G__37807;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__37814_37820 = cljs.core.seq.call(null,evt_map);var chunk__37815_37821 = null;var count__37816_37822 = 0;var i__37817_37823 = 0;while(true){
if((i__37817_37823 < count__37816_37822))
{var vec__37818_37824 = cljs.core._nth.call(null,chunk__37815_37821,i__37817_37823);var k_37825 = cljs.core.nth.call(null,vec__37818_37824,0,null);var v_37826 = cljs.core.nth.call(null,vec__37818_37824,1,null);(evt[k_37825] = v_37826);
{
var G__37827 = seq__37814_37820;
var G__37828 = chunk__37815_37821;
var G__37829 = count__37816_37822;
var G__37830 = (i__37817_37823 + 1);
seq__37814_37820 = G__37827;
chunk__37815_37821 = G__37828;
count__37816_37822 = G__37829;
i__37817_37823 = G__37830;
continue;
}
} else
{var temp__4092__auto___37831 = cljs.core.seq.call(null,seq__37814_37820);if(temp__4092__auto___37831)
{var seq__37814_37832__$1 = temp__4092__auto___37831;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37814_37832__$1))
{var c__4148__auto___37833 = cljs.core.chunk_first.call(null,seq__37814_37832__$1);{
var G__37834 = cljs.core.chunk_rest.call(null,seq__37814_37832__$1);
var G__37835 = c__4148__auto___37833;
var G__37836 = cljs.core.count.call(null,c__4148__auto___37833);
var G__37837 = 0;
seq__37814_37820 = G__37834;
chunk__37815_37821 = G__37835;
count__37816_37822 = G__37836;
i__37817_37823 = G__37837;
continue;
}
} else
{var vec__37819_37838 = cljs.core.first.call(null,seq__37814_37832__$1);var k_37839 = cljs.core.nth.call(null,vec__37819_37838,0,null);var v_37840 = cljs.core.nth.call(null,vec__37819_37838,1,null);(evt[k_37839] = v_37840);
{
var G__37841 = cljs.core.next.call(null,seq__37814_37832__$1);
var G__37842 = null;
var G__37843 = 0;
var G__37844 = 0;
seq__37814_37820 = G__37841;
chunk__37815_37821 = G__37842;
count__37816_37822 = G__37843;
i__37817_37823 = G__37844;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__37845_SHARP_){return goog.events.getListeners(p1__37845_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
