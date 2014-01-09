// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj32764 = {};return obj32764;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t32768 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t32768 = (function (evt,f,create_listener_function,meta32769){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta32769 = meta32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t32768.cljs$lang$type = true;
domina.events.t32768.cljs$lang$ctorStr = "domina.events/t32768";
domina.events.t32768.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t32768");
});
domina.events.t32768.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t32768.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t32768.prototype.domina$events$Event$ = true;
domina.events.t32768.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t32768.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t32768.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t32768.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t32768.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t32768.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t32768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32770){var self__ = this;
var _32770__$1 = this;return self__.meta32769;
});
domina.events.t32768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32770,meta32769__$1){var self__ = this;
var _32770__$1 = this;return (new domina.events.t32768(self__.evt,self__.f,self__.create_listener_function,meta32769__$1));
});
domina.events.__GT_t32768 = (function __GT_t32768(evt__$1,f__$1,create_listener_function__$1,meta32769){return (new domina.events.t32768(evt__$1,f__$1,create_listener_function__$1,meta32769));
});
}
return (new domina.events.t32768(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__32775(s__32776){return (new cljs.core.LazySeq(null,(function (){var s__32776__$1 = s__32776;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__32776__$1);if(temp__4092__auto__)
{var s__32776__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32776__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__32776__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__32778 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__32777 = 0;while(true){
if((i__32777 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__32777);cljs.core.chunk_append.call(null,b__32778,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__32779 = (i__32777 + 1);
i__32777 = G__32779;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32778),iter__32775.call(null,cljs.core.chunk_rest.call(null,s__32776__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32778),null);
}
} else
{var node = cljs.core.first.call(null,s__32776__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__32775.call(null,cljs.core.rest.call(null,s__32776__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__32788 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32789 = null;var count__32790 = 0;var i__32791 = 0;while(true){
if((i__32791 < count__32790))
{var node = cljs.core._nth.call(null,chunk__32789,i__32791);goog.events.removeAll(node);
{
var G__32796 = seq__32788;
var G__32797 = chunk__32789;
var G__32798 = count__32790;
var G__32799 = (i__32791 + 1);
seq__32788 = G__32796;
chunk__32789 = G__32797;
count__32790 = G__32798;
i__32791 = G__32799;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32788);if(temp__4092__auto__)
{var seq__32788__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32788__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32788__$1);{
var G__32800 = cljs.core.chunk_rest.call(null,seq__32788__$1);
var G__32801 = c__4148__auto__;
var G__32802 = cljs.core.count.call(null,c__4148__auto__);
var G__32803 = 0;
seq__32788 = G__32800;
chunk__32789 = G__32801;
count__32790 = G__32802;
i__32791 = G__32803;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__32788__$1);goog.events.removeAll(node);
{
var G__32804 = cljs.core.next.call(null,seq__32788__$1);
var G__32805 = null;
var G__32806 = 0;
var G__32807 = 0;
seq__32788 = G__32804;
chunk__32789 = G__32805;
count__32790 = G__32806;
i__32791 = G__32807;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__32792 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32793 = null;var count__32794 = 0;var i__32795 = 0;while(true){
if((i__32795 < count__32794))
{var node = cljs.core._nth.call(null,chunk__32793,i__32795);goog.events.removeAll(node,type__$1);
{
var G__32808 = seq__32792;
var G__32809 = chunk__32793;
var G__32810 = count__32794;
var G__32811 = (i__32795 + 1);
seq__32792 = G__32808;
chunk__32793 = G__32809;
count__32794 = G__32810;
i__32795 = G__32811;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32792);if(temp__4092__auto__)
{var seq__32792__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32792__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32792__$1);{
var G__32812 = cljs.core.chunk_rest.call(null,seq__32792__$1);
var G__32813 = c__4148__auto__;
var G__32814 = cljs.core.count.call(null,c__4148__auto__);
var G__32815 = 0;
seq__32792 = G__32812;
chunk__32793 = G__32813;
count__32794 = G__32814;
i__32795 = G__32815;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__32792__$1);goog.events.removeAll(node,type__$1);
{
var G__32816 = cljs.core.next.call(null,seq__32792__$1);
var G__32817 = null;
var G__32818 = 0;
var G__32819 = 0;
seq__32792 = G__32816;
chunk__32793 = G__32817;
count__32794 = G__32818;
i__32795 = G__32819;
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
var G__32820 = parent;
var G__32821 = cljs.core.cons.call(null,parent,so_far);
n = G__32820;
so_far = G__32821;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__32830_32838 = cljs.core.seq.call(null,ancestors);var chunk__32831_32839 = null;var count__32832_32840 = 0;var i__32833_32841 = 0;while(true){
if((i__32833_32841 < count__32832_32840))
{var n_32842 = cljs.core._nth.call(null,chunk__32831_32839,i__32833_32841);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32842;
goog.events.fireListeners(n_32842,evt.type,true,evt);
}
{
var G__32843 = seq__32830_32838;
var G__32844 = chunk__32831_32839;
var G__32845 = count__32832_32840;
var G__32846 = (i__32833_32841 + 1);
seq__32830_32838 = G__32843;
chunk__32831_32839 = G__32844;
count__32832_32840 = G__32845;
i__32833_32841 = G__32846;
continue;
}
} else
{var temp__4092__auto___32847 = cljs.core.seq.call(null,seq__32830_32838);if(temp__4092__auto___32847)
{var seq__32830_32848__$1 = temp__4092__auto___32847;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32830_32848__$1))
{var c__4148__auto___32849 = cljs.core.chunk_first.call(null,seq__32830_32848__$1);{
var G__32850 = cljs.core.chunk_rest.call(null,seq__32830_32848__$1);
var G__32851 = c__4148__auto___32849;
var G__32852 = cljs.core.count.call(null,c__4148__auto___32849);
var G__32853 = 0;
seq__32830_32838 = G__32850;
chunk__32831_32839 = G__32851;
count__32832_32840 = G__32852;
i__32833_32841 = G__32853;
continue;
}
} else
{var n_32854 = cljs.core.first.call(null,seq__32830_32848__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32854;
goog.events.fireListeners(n_32854,evt.type,true,evt);
}
{
var G__32855 = cljs.core.next.call(null,seq__32830_32848__$1);
var G__32856 = null;
var G__32857 = 0;
var G__32858 = 0;
seq__32830_32838 = G__32855;
chunk__32831_32839 = G__32856;
count__32832_32840 = G__32857;
i__32833_32841 = G__32858;
continue;
}
}
} else
{}
}
break;
}
var seq__32834_32859 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__32835_32860 = null;var count__32836_32861 = 0;var i__32837_32862 = 0;while(true){
if((i__32837_32862 < count__32836_32861))
{var n_32863 = cljs.core._nth.call(null,chunk__32835_32860,i__32837_32862);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32863;
goog.events.fireListeners(n_32863,evt.type,false,evt);
}
{
var G__32864 = seq__32834_32859;
var G__32865 = chunk__32835_32860;
var G__32866 = count__32836_32861;
var G__32867 = (i__32837_32862 + 1);
seq__32834_32859 = G__32864;
chunk__32835_32860 = G__32865;
count__32836_32861 = G__32866;
i__32837_32862 = G__32867;
continue;
}
} else
{var temp__4092__auto___32868 = cljs.core.seq.call(null,seq__32834_32859);if(temp__4092__auto___32868)
{var seq__32834_32869__$1 = temp__4092__auto___32868;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32834_32869__$1))
{var c__4148__auto___32870 = cljs.core.chunk_first.call(null,seq__32834_32869__$1);{
var G__32871 = cljs.core.chunk_rest.call(null,seq__32834_32869__$1);
var G__32872 = c__4148__auto___32870;
var G__32873 = cljs.core.count.call(null,c__4148__auto___32870);
var G__32874 = 0;
seq__32834_32859 = G__32871;
chunk__32835_32860 = G__32872;
count__32836_32861 = G__32873;
i__32837_32862 = G__32874;
continue;
}
} else
{var n_32875 = cljs.core.first.call(null,seq__32834_32869__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32875;
goog.events.fireListeners(n_32875,evt.type,false,evt);
}
{
var G__32876 = cljs.core.next.call(null,seq__32834_32869__$1);
var G__32877 = null;
var G__32878 = 0;
var G__32879 = 0;
seq__32834_32859 = G__32876;
chunk__32835_32860 = G__32877;
count__32836_32861 = G__32878;
i__32837_32862 = G__32879;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__32886_32892 = cljs.core.seq.call(null,evt_map);var chunk__32887_32893 = null;var count__32888_32894 = 0;var i__32889_32895 = 0;while(true){
if((i__32889_32895 < count__32888_32894))
{var vec__32890_32896 = cljs.core._nth.call(null,chunk__32887_32893,i__32889_32895);var k_32897 = cljs.core.nth.call(null,vec__32890_32896,0,null);var v_32898 = cljs.core.nth.call(null,vec__32890_32896,1,null);(evt[k_32897] = v_32898);
{
var G__32899 = seq__32886_32892;
var G__32900 = chunk__32887_32893;
var G__32901 = count__32888_32894;
var G__32902 = (i__32889_32895 + 1);
seq__32886_32892 = G__32899;
chunk__32887_32893 = G__32900;
count__32888_32894 = G__32901;
i__32889_32895 = G__32902;
continue;
}
} else
{var temp__4092__auto___32903 = cljs.core.seq.call(null,seq__32886_32892);if(temp__4092__auto___32903)
{var seq__32886_32904__$1 = temp__4092__auto___32903;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32886_32904__$1))
{var c__4148__auto___32905 = cljs.core.chunk_first.call(null,seq__32886_32904__$1);{
var G__32906 = cljs.core.chunk_rest.call(null,seq__32886_32904__$1);
var G__32907 = c__4148__auto___32905;
var G__32908 = cljs.core.count.call(null,c__4148__auto___32905);
var G__32909 = 0;
seq__32886_32892 = G__32906;
chunk__32887_32893 = G__32907;
count__32888_32894 = G__32908;
i__32889_32895 = G__32909;
continue;
}
} else
{var vec__32891_32910 = cljs.core.first.call(null,seq__32886_32904__$1);var k_32911 = cljs.core.nth.call(null,vec__32891_32910,0,null);var v_32912 = cljs.core.nth.call(null,vec__32891_32910,1,null);(evt[k_32911] = v_32912);
{
var G__32913 = cljs.core.next.call(null,seq__32886_32904__$1);
var G__32914 = null;
var G__32915 = 0;
var G__32916 = 0;
seq__32886_32892 = G__32913;
chunk__32887_32893 = G__32914;
count__32888_32894 = G__32915;
i__32889_32895 = G__32916;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__32917_SHARP_){return goog.events.getListeners(p1__32917_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
