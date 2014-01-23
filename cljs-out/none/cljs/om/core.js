// Compiled by ClojureScript 0.0-2138
goog.provide('om.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
om.core._STAR_read_enabled_STAR_ = false;
om.core.IInitState = (function (){var obj15189 = {};return obj15189;
})();
om.core.init_state = (function init_state(this$){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.om$core$IInitState$init_state$arity$1;
} else
{return and__3394__auto__;
}
})())
{return this$.om$core$IInitState$init_state$arity$1(this$);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (om.core.init_state[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core.init_state["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});
om.core.IShouldUpdate = (function (){var obj15191 = {};return obj15191;
})();
om.core.should_update = (function should_update(this$,next_props,next_state){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.om$core$IShouldUpdate$should_update$arity$3;
} else
{return and__3394__auto__;
}
})())
{return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (om.core.should_update[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core.should_update["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IWillMount = (function (){var obj15193 = {};return obj15193;
})();
om.core.will_mount = (function will_mount(this$){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.om$core$IWillMount$will_mount$arity$1;
} else
{return and__3394__auto__;
}
})())
{return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (om.core.will_mount[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core.will_mount["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IDidMount = (function (){var obj15195 = {};return obj15195;
})();
om.core.did_mount = (function did_mount(this$,node){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.om$core$IDidMount$did_mount$arity$2;
} else
{return and__3394__auto__;
}
})())
{return this$.om$core$IDidMount$did_mount$arity$2(this$,node);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (om.core.did_mount[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core.did_mount["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$,node);
}
});
om.core.IWillUnmount = (function (){var obj15197 = {};return obj15197;
})();
om.core.will_unmount = (function will_unmount(this$){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else
{return and__3394__auto__;
}
})())
{return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (om.core.will_unmount[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core.will_unmount["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUpdate = (function (){var obj15199 = {};return obj15199;
})();
om.core.will_update = (function will_update(this$,next_props,next_state){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.om$core$IWillUpdate$will_update$arity$3;
} else
{return and__3394__auto__;
}
})())
{return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (om.core.will_update[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core.will_update["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IDidUpdate = (function (){var obj15201 = {};return obj15201;
})();
om.core.did_update = (function did_update(this$,prev_props,prev_state,root_node){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.om$core$IDidUpdate$did_update$arity$4;
} else
{return and__3394__auto__;
}
})())
{return this$.om$core$IDidUpdate$did_update$arity$4(this$,prev_props,prev_state,root_node);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (om.core.did_update[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core.did_update["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state,root_node);
}
});
om.core.IRender = (function (){var obj15203 = {};return obj15203;
})();
om.core.render = (function render(this$){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.om$core$IRender$render$arity$1;
} else
{return and__3394__auto__;
}
})())
{return this$.om$core$IRender$render$arity$1(this$);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (om.core.render[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core.render["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});
om.core.IRenderState = (function (){var obj15205 = {};return obj15205;
})();
om.core.render_state = (function render_state(this$,state){if((function (){var and__3394__auto__ = this$;if(and__3394__auto__)
{return this$.om$core$IRenderState$render_state$arity$2;
} else
{return and__3394__auto__;
}
})())
{return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else
{var x__4027__auto__ = (((this$ == null))?null:this$);return (function (){var or__3406__auto__ = (om.core.render_state[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core.render_state["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});
om.core.ICursor = (function (){var obj15207 = {};return obj15207;
})();
om.core._value = (function _value(cursor){if((function (){var and__3394__auto__ = cursor;if(and__3394__auto__)
{return cursor.om$core$ICursor$_value$arity$1;
} else
{return and__3394__auto__;
}
})())
{return cursor.om$core$ICursor$_value$arity$1(cursor);
} else
{var x__4027__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3406__auto__ = (om.core._value[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core._value["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-value",cursor);
}
}
})().call(null,cursor);
}
});
om.core._path = (function _path(cursor){if((function (){var and__3394__auto__ = cursor;if(and__3394__auto__)
{return cursor.om$core$ICursor$_path$arity$1;
} else
{return and__3394__auto__;
}
})())
{return cursor.om$core$ICursor$_path$arity$1(cursor);
} else
{var x__4027__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3406__auto__ = (om.core._path[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core._path["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});
om.core._state = (function _state(cursor){if((function (){var and__3394__auto__ = cursor;if(and__3394__auto__)
{return cursor.om$core$ICursor$_state$arity$1;
} else
{return and__3394__auto__;
}
})())
{return cursor.om$core$ICursor$_state$arity$1(cursor);
} else
{var x__4027__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3406__auto__ = (om.core._state[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core._state["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});
om.core._shared = (function _shared(cursor){if((function (){var and__3394__auto__ = cursor;if(and__3394__auto__)
{return cursor.om$core$ICursor$_shared$arity$1;
} else
{return and__3394__auto__;
}
})())
{return cursor.om$core$ICursor$_shared$arity$1(cursor);
} else
{var x__4027__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3406__auto__ = (om.core._shared[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core._shared["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICursor.-shared",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IToCursor = (function (){var obj15209 = {};return obj15209;
})();
om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){if((function (){var and__3394__auto__ = value;if(and__3394__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$2;
} else
{return and__3394__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else
{var x__4027__auto__ = (((value == null))?null:value);return (function (){var or__3406__auto__ = (om.core._to_cursor[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core._to_cursor["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){if((function (){var and__3394__auto__ = value;if(and__3394__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$3;
} else
{return and__3394__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else
{var x__4027__auto__ = (((value == null))?null:value);return (function (){var or__3406__auto__ = (om.core._to_cursor[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core._to_cursor["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
var _to_cursor__4 = (function (value,state,path,shared){if((function (){var and__3394__auto__ = value;if(and__3394__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$4;
} else
{return and__3394__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$4(value,state,path,shared);
} else
{var x__4027__auto__ = (((value == null))?null:value);return (function (){var or__3406__auto__ = (om.core._to_cursor[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core._to_cursor["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path,shared);
}
});
_to_cursor = function(value,state,path,shared){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
case 4:
return _to_cursor__4.call(this,value,state,path,shared);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
_to_cursor.cljs$core$IFn$_invoke$arity$4 = _to_cursor__4;
return _to_cursor;
})()
;
om.core.ITransact = (function (){var obj15211 = {};return obj15211;
})();
om.core._transact_BANG_ = (function _transact_BANG_(cursor,f){if((function (){var and__3394__auto__ = cursor;if(and__3394__auto__)
{return cursor.om$core$ITransact$_transact_BANG_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return cursor.om$core$ITransact$_transact_BANG_$arity$2(cursor,f);
} else
{var x__4027__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3406__auto__ = (om.core._transact_BANG_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (om.core._transact_BANG_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,f);
}
});
om.core.children = (function children(node){var c = node.props.children;if(cljs.core.fn_QMARK_.call(null,c))
{return node.props.children = (function (){var _STAR_read_enabled_STAR_15213 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return c.call(null,node);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15213;
}})();
} else
{return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function get_props(x){return (x.props["__om_cursor"]);
});
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){var state = owner.state;var or__3406__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return (state["__om_state"]);
}
});
var get_state__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.get.call(null,get_state.call(null,owner),korks);
} else
{if(cljs.core.empty_QMARK_.call(null,korks))
{return get_state.call(null,owner);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get_in.call(null,get_state.call(null,owner),korks);
} else
{return null;
}
}
}
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){return om.core._shared.call(null,om.core.get_props.call(null,owner));
});
var get_shared__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.get.call(null,get_shared.call(null,owner),korks);
} else
{if(cljs.core.empty_QMARK_.call(null,korks))
{return get_shared.call(null,owner);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get_in.call(null,get_shared.call(null,owner),korks);
} else
{return null;
}
}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){var state = owner.state;var temp__4092__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(temp__4092__auto__))
{var pending_state = temp__4092__auto__;var G__15215 = state;(G__15215["__om_prev_state"] = (state["__om_state"]));
(G__15215["__om_state"] = pending_state);
(G__15215["__om_pending_state"] = null);
return G__15215;
} else
{return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){return merge_props_state.call(null,owner,null);
});
var merge_props_state__2 = (function (owner,props){var props__$1 = (function (){var or__3406__auto__ = props;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return owner.props;
}
})();var temp__4092__auto__ = (props__$1["__om_state"]);if(cljs.core.truth_(temp__4092__auto__))
{var props_state = temp__4092__auto__;var state = owner.state;(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__3406__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return (state["__om_state"]);
}
})(),props_state));
return (props__$1["__om_state"] = null);
} else
{return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.Pure = React.createClass({"render": (function (){var this$ = this;var c = om.core.children.call(null,this$);var _STAR_read_enabled_STAR_15230 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if((function (){var G__15231 = c;if(G__15231)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__15231.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__15231.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__15231);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__15231);
}
})())
{return om.core.render.call(null,c);
} else
{if((function (){var G__15232 = c;if(G__15232)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__15232.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__15232.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__15232);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__15232);
}
})())
{return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else
{if(cljs.core.truth_(c.render))
{return c.render();
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return c;
} else
{return null;
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15230;
}}), "componentDidUpdate": (function (prev_props,prev_state,root_node){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__15228 = c;if(G__15228)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__15228.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__15228.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__15228);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__15228);
}
})())
{var state_15233 = this$.state;var _STAR_read_enabled_STAR_15229_15234 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props}),(function (){var or__3406__auto__ = (state_15233["__om_prev_state"]);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return (state_15233["__om_state"]);
}
})(),root_node);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15229_15234;
}} else
{}
return (this$.state["__om_prev_state"] = null);
}), "componentWillUpdate": (function (next_props,next_state){var this$ = this;var c_15235 = om.core.children.call(null,this$);if((function (){var G__15226 = c_15235;if(G__15226)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__15226.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__15226.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__15226);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__15226);
}
})())
{var state_15236 = this$.state;var _STAR_read_enabled_STAR_15227_15237 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_update.call(null,c_15235,om.core.get_props.call(null,{"props": next_props}),(function (){var or__3406__auto__ = (state_15236["__om_pending_state"]);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return (state_15236["__om_state"]);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15227_15237;
}} else
{}
return om.core.merge_pending_state.call(null,this$);
}), "componentWillUnmount": (function (){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__15224 = c;if(G__15224)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__15224.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__15224.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__15224);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__15224);
}
})())
{var _STAR_read_enabled_STAR_15225 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.will_unmount.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15225;
}} else
{return null;
}
}), "componentDidMount": (function (node){var this$ = this;var c = om.core.children.call(null,this$);if((function (){var G__15222 = c;if(G__15222)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__15222.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__15222.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__15222);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__15222);
}
})())
{var _STAR_read_enabled_STAR_15223 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.did_mount.call(null,c,node);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15223;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;om.core.merge_props_state.call(null,this$);
var c_15238 = om.core.children.call(null,this$);if((function (){var G__15220 = c_15238;if(G__15220)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__15220.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__15220.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__15220);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__15220);
}
})())
{var _STAR_read_enabled_STAR_15221_15239 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_mount.call(null,c_15238);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15221_15239;
}} else
{}
return om.core.merge_pending_state.call(null,this$);
}), "shouldComponentUpdate": (function (next_props,next_state){var this$ = this;var _STAR_read_enabled_STAR_15218 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$.props;var state = this$.state;var c = om.core.children.call(null,this$);om.core.merge_props_state.call(null,this$,next_props);
if((function (){var G__15219 = c;if(G__15219)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__15219.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__15219.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__15219);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__15219);
}
})())
{return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props}),(this$.state["__om_pending_state"]));
} else
{if(!((om.core._value.call(null,(props["__om_cursor"])) === om.core._value.call(null,(next_props["__om_cursor"])))))
{return true;
} else
{if((!(((state["__om_pending_state"]) == null))) && (cljs.core.not_EQ_.call(null,(state["__om_pending_state"]),(state["__om_state"]))))
{return true;
} else
{if(!(((props["__om_index"]) === (next_props["__om_index"]))))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15218;
}}), "getInitialState": (function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var istate = (props["__om_init_state"]);(props["__om_init_state"] = null);
return {"__om_state": cljs.core.merge.call(null,istate,(((function (){var G__15216 = c;if(G__15216)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__15216.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__15216.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__15216);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__15216);
}
})())?(function (){var _STAR_read_enabled_STAR_15217 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.init_state.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15217;
}})():null))};
})});
om.core.path = (function path(cursor){return om.core._path.call(null,cursor);
});
om.core.value = (function value(cursor){if(om.core._STAR_read_enabled_STAR_)
{return om.core._value.call(null,cursor);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){var G__15241 = x;if(G__15241)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__15241.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__15241.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__15241);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__15241);
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path,shared){
this.value = value;
this.state = state;
this.path = path;
this.shared = shared;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2158364427;
})
om.core.MapCursor.cljs$lang$type = true;
om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";
om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"om.core/MapCursor");
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.call(null,this$__$1,k,null);
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{var v = cljs.core._lookup.call(null,self__.value,k,not_found);if(!(cljs.core._EQ_.call(null,v,not_found)))
{return om.core.to_cursor.call(null,v,self__.state,cljs.core.conj.call(null,self__.path,k),self__.shared);
} else
{return not_found;
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path,self__.shared));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.call = (function() {
var G__15245 = null;
var G__15245__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15245__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15245 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15245__2.call(this,self__,k);
case 3:
return G__15245__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__15245;
})()
;
om.core.MapCursor.prototype.apply = (function (self__,args15242){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15242)));
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.MapCursor.prototype.om$core$ICursor$ = true;
om.core.MapCursor.prototype.om$core$ICursor$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return self__.value;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return self__.path;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return self__.state;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.om$core$ICursor$_shared$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.shared;
});
om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer.call(null,self__.value,writer,opts);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path,self__.shared));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.map.call(null,(function (p__15243){var vec__15244 = p__15243;var k = cljs.core.nth.call(null,vec__15244,0,null);var v = cljs.core.nth.call(null,vec__15244,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core.to_cursor.call(null,v,self__.state,cljs.core.conj.call(null,self__.path,k),self__.shared)], null);
}),self__.value);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count.call(null,self__.value);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,self__.value,other);
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path,self__.shared));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$ICloneable$ = true;
om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(self__.value,self__.state,self__.path,self__.shared));
});
om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.meta.call(null,self__.value);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path,self__.shared));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.om$core$ITransact$ = true;
om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$2 = (function (_,f){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.state,f,self__.path);
});
om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path,shared){return (new om.core.MapCursor(value,state,path,shared));
});

/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path,shared){
this.value = value;
this.state = state;
this.path = path;
this.shared = shared;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2175148827;
})
om.core.IndexedCursor.cljs$lang$type = true;
om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";
om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"om.core/IndexedCursor");
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.call(null,this$__$1,n,null);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.call(null,this$__$1,n,not_found);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,n,v){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core.to_cursor.call(null,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path,self__.shared);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.call = (function() {
var G__15247 = null;
var G__15247__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__15247__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__15247 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__15247__2.call(this,self__,k);
case 3:
return G__15247__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__15247;
})()
;
om.core.IndexedCursor.prototype.apply = (function (self__,args15246){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args15246)));
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.IndexedCursor.prototype.om$core$ICursor$ = true;
om.core.IndexedCursor.prototype.om$core$ICursor$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return self__.value;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return self__.path;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return self__.state;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.om$core$ICursor$_shared$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.shared;
});
om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer.call(null,self__.value,writer,opts);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path,self__.shared));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((cljs.core.count.call(null,self__.value) > 0))
{return cljs.core.map.call(null,(function (v,i){return om.core.to_cursor.call(null,v,self__.state,cljs.core.conj.call(null,self__.path,i),self__.shared);
}),self__.value,cljs.core.range.call(null));
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count.call(null,self__.value);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core.to_cursor.call(null,cljs.core._peek.call(null,self__.value),self__.state,self__.path,self__.shared);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core.to_cursor.call(null,cljs.core._pop.call(null,self__.value),self__.state,self__.path,self__.shared);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,self__.value,other);
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path,self__.shared));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICloneable$ = true;
om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(self__.value,self__.state,self__.path,self__.shared));
});
om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.meta.call(null,self__.value);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core.to_cursor.call(null,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n),self__.shared);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,not_found){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((n < cljs.core._count.call(null,self__.value)))
{return om.core.to_cursor.call(null,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n),self__.shared);
} else
{return not_found;
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.om$core$ITransact$ = true;
om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$2 = (function (_,f){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.state,f,self__.path);
});
om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path,shared){return (new om.core.IndexedCursor(value,state,path,shared));
});
om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path,shared){var x15249 = cljs.core.clone.call(null,val);x15249.cljs$core$IEquiv$ = true;
x15249.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,val,other);
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
x15249.om$core$ITransact$ = true;
x15249.om$core$ITransact$_transact_BANG_$arity$2 = (function (_,f){var ___$1 = this;return cljs.core.swap_BANG_.call(null,state,f,path);
});
x15249.om$core$ICursor$ = true;
x15249.om$core$ICursor$_value$arity$1 = (function (_){var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return val;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
x15249.om$core$ICursor$_state$arity$1 = (function (_){var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return state;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
x15249.om$core$ICursor$_path$arity$1 = (function (_){var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return path;
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and om.core/read operations allowed")].join('')));
}
});
x15249.om$core$ICursor$_shared$arity$1 = (function (_){var ___$1 = this;return shared;
});
return x15249;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){return to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY,null);
});
var to_cursor__2 = (function (val,state){return to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY,null);
});
var to_cursor__3 = (function (val,state,path){return to_cursor.call(null,val,state,path,null);
});
var to_cursor__4 = (function (val,state,path,shared){if(om.core.cursor_QMARK_.call(null,val))
{return val;
} else
{if((function (){var G__15252 = val;if(G__15252)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__15252.om$core$IToCursor$;
}
})()))
{return true;
} else
{if((!G__15252.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__15252);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__15252);
}
})())
{return om.core._to_cursor.call(null,val,state,path,shared);
} else
{if(cljs.core.indexed_QMARK_.call(null,val))
{return (new om.core.IndexedCursor(val,state,path,shared));
} else
{if(cljs.core.map_QMARK_.call(null,val))
{return (new om.core.MapCursor(val,state,path,shared));
} else
{if((function (){var G__15253 = val;if(G__15253)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__15253.cljs$core$ICloneable$;
}
})()))
{return true;
} else
{if((!G__15253.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__15253);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__15253);
}
})())
{return om.core.to_cursor_STAR_.call(null,val,state,path,shared);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return val;
} else
{return null;
}
}
}
}
}
}
});
to_cursor = function(val,state,path,shared){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
case 4:
return to_cursor__4.call(this,val,state,path,shared);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
to_cursor.cljs$core$IFn$_invoke$arity$4 = to_cursor__4;
return to_cursor;
})()
;
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.render_all = (function render_all(){om.core.refresh_queued = false;
var seq__15258 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));var chunk__15259 = null;var count__15260 = 0;var i__15261 = 0;while(true){
if((i__15261 < count__15260))
{var f = cljs.core._nth.call(null,chunk__15259,i__15261);f.call(null);
{
var G__15262 = seq__15258;
var G__15263 = chunk__15259;
var G__15264 = count__15260;
var G__15265 = (i__15261 + 1);
seq__15258 = G__15262;
chunk__15259 = G__15263;
count__15260 = G__15264;
i__15261 = G__15265;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15258);if(temp__4092__auto__)
{var seq__15258__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15258__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__15258__$1);{
var G__15266 = cljs.core.chunk_rest.call(null,seq__15258__$1);
var G__15267 = c__4148__auto__;
var G__15268 = cljs.core.count.call(null,c__4148__auto__);
var G__15269 = 0;
seq__15258 = G__15266;
chunk__15259 = G__15267;
count__15260 = G__15268;
i__15261 = G__15269;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__15258__$1);f.call(null);
{
var G__15270 = cljs.core.next.call(null,seq__15258__$1);
var G__15271 = null;
var G__15272 = 0;
var G__15273 = 0;
seq__15258 = G__15270;
chunk__15259 = G__15271;
count__15260 = G__15272;
i__15261 = G__15273;
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
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* Takes an immutable value or value wrapped in an atom, an initial
* function f, and a DOM target. Installs an Om/React render loop. f
* must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Example:
* 
* (root {:message :hello}
* (fn [data owner]
* ...)
* js/document.body)
*/
om.core.root = (function() {
var root = null;
var root__3 = (function (value,f,target){return root.call(null,value,null,f,target);
});
var root__4 = (function (value,shared,f,target){var roots_SINGLEQUOTE__15278 = cljs.core.deref.call(null,om.core.roots);if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__15278,target))
{cljs.core.get.call(null,roots_SINGLEQUOTE__15278,target).call(null);
} else
{}
var state = (((value instanceof cljs.core.Atom))?value:cljs.core.atom.call(null,value));var rootf = ((function (state){
return (function rootf(){cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);
var value__$1 = cljs.core.deref.call(null,state);var cursor = om.core.to_cursor.call(null,value__$1,state,cljs.core.PersistentVector.EMPTY,shared);return React.renderComponent((new om.core.Pure({"__om_cursor": cursor},((function (value__$1,cursor,state){
return (function (this$){var _STAR_read_enabled_STAR_15277 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,cursor,this$);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15277;
}});})(value__$1,cursor,state))
)),target);
});})(state))
;var watch_key = cljs.core.gensym.call(null);cljs.core.add_watch.call(null,state,watch_key,(function (_,___$1,___$2,___$3){if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf))
{} else
{cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}
if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame(om.core.render_all);
} else
{return setTimeout(om.core.render_all,16);
}
}
}));
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,(function (){cljs.core.remove_watch.call(null,state,watch_key);
cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);
return React.unmountComponentAtNode(target);
}));
return rootf.call(null);
});
root = function(value,shared,f,target){
switch(arguments.length){
case 3:
return root__3.call(this,value,shared,f);
case 4:
return root__4.call(this,value,shared,f,target);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
root.cljs$core$IFn$_invoke$arity$3 = root__3;
root.cljs$core$IFn$_invoke$arity$4 = root__4;
return root;
})()
;
om.core.valid_QMARK_ = (function valid_QMARK_(m){return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),null,new cljs.core.Keyword(null,"state","state",1123661827),null,new cljs.core.Keyword(null,"react-key","react-key",4184082563),null,new cljs.core.Keyword("om.core","index","om.core/index",3166146514),null,new cljs.core.Keyword(null,"key","key",1014010321),null,new cljs.core.Keyword(null,"opts","opts",1017322386),null,new cljs.core.Keyword(null,"fn","fn",1013907514),null], null), null),cljs.core.keys.call(null,m));
});
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a cursor, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument will be
* the cursor and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender instance, this
* instance may implement other React life cycle protocols.
* 
* cursor - an ICursor instance
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* 
* Example:
* 
* (build list-of-gadgets cursor
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,cursor){return build.call(null,f,cursor,null);
});
var build__3 = (function (f,cursor,m){if(om.core.valid_QMARK_.call(null,m))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid?","valid?",1830611324,null),new cljs.core.Symbol(null,"m","m",-1640531418,null))))].join('')));
}
if(om.core.cursor_QMARK_.call(null,cursor))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Cannot build Om component from non-cursor "),cljs.core.str(cursor)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-513552030,null),new cljs.core.Symbol(null,"cursor","cursor",1305316623,null))))].join('')));
}
if((m == null))
{var pure__9178__auto__ = (new om.core.Pure({"__om_cursor": cursor},(function (this$){var _STAR_read_enabled_STAR_15283 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,cursor,this$);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15283;
}})));pure__9178__auto__.constructor = goog.getUid(f);
return pure__9178__auto__;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var map__15284 = m;var map__15284__$1 = ((cljs.core.seq_QMARK_.call(null,map__15284))?cljs.core.apply.call(null,cljs.core.hash_map,map__15284):map__15284);var opts = cljs.core.get.call(null,map__15284__$1,new cljs.core.Keyword(null,"opts","opts",1017322386));var init_state = cljs.core.get.call(null,map__15284__$1,new cljs.core.Keyword(null,"init-state","init-state",4479067398));var state = cljs.core.get.call(null,map__15284__$1,new cljs.core.Keyword(null,"state","state",1123661827));var key = cljs.core.get.call(null,map__15284__$1,new cljs.core.Keyword(null,"key","key",1014010321));var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",1013907514));var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?dataf.call(null,cursor):cursor);var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",4184082563)));var pure__9178__auto__ = (new om.core.Pure({"key": rkey, "__om_state": state, "__om_init_state": init_state, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",3166146514).cljs$core$IFn$_invoke$arity$1(m), "__om_cursor": cursor_SINGLEQUOTE_},(((opts == null))?(function (this$){var _STAR_read_enabled_STAR_15285 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,cursor_SINGLEQUOTE_,this$);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15285;
}}):(function (this$){var _STAR_read_enabled_STAR_15286 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,cursor_SINGLEQUOTE_,this$,opts);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15286;
}}))));pure__9178__auto__.constructor = goog.getUid(f);
return pure__9178__auto__;
} else
{return null;
}
}
});
build = function(f,cursor,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,cursor);
case 3:
return build__3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of cursors, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){return build_all.call(null,f,xs,null);
});
var build_all__3 = (function (f,xs,m){return cljs.core.into_array.call(null,cljs.core.map.call(null,(function (x,i){return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",3166146514),i));
}),xs,cljs.core.range.call(null)));
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
/**
* Given a cursor, an optional list of keys ks, mutate the tree at the
* path specified by the cursor + the optional keys by applying f to the
* specified value in the tree. An Om re-render will be triggered.
* @param {...*} var_args
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){var _STAR_read_enabled_STAR_15294 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_.call(null,cursor,(function (state,path){if(cljs.core.empty_QMARK_.call(null,path))
{return f.call(null,state);
} else
{return cljs.core.update_in.call(null,state,path,f);
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15294;
}});
var transact_BANG___3 = (function (cursor,korks,f){var _STAR_read_enabled_STAR_15295 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_.call(null,cursor,(function (state__9164__auto__,path__9165__auto__){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.update_in.call(null,state__9164__auto__,cljs.core.conj.call(null,path__9165__auto__,korks),f);
} else
{return cljs.core.update_in.call(null,state__9164__auto__,cljs.core.into.call(null,path__9165__auto__,korks),f);
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15295;
}});
var transact_BANG___4 = (function (cursor,korks,f,a){var _STAR_read_enabled_STAR_15296 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_.call(null,cursor,(function (state__9164__auto__,path__9165__auto__){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.update_in.call(null,state__9164__auto__,cljs.core.conj.call(null,path__9165__auto__,korks),f,a);
} else
{return cljs.core.update_in.call(null,state__9164__auto__,cljs.core.into.call(null,path__9165__auto__,korks),f,a);
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15296;
}});
var transact_BANG___5 = (function (cursor,korks,f,a,b){var _STAR_read_enabled_STAR_15297 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_.call(null,cursor,(function (state__9164__auto__,path__9165__auto__){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.update_in.call(null,state__9164__auto__,cljs.core.conj.call(null,path__9165__auto__,korks),f,a,b);
} else
{return cljs.core.update_in.call(null,state__9164__auto__,cljs.core.into.call(null,path__9165__auto__,korks),f,a,b);
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15297;
}});
var transact_BANG___6 = (function (cursor,korks,f,a,b,c){var _STAR_read_enabled_STAR_15298 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_.call(null,cursor,(function (state__9164__auto__,path__9165__auto__){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.update_in.call(null,state__9164__auto__,cljs.core.conj.call(null,path__9165__auto__,korks),f,a,b,c);
} else
{return cljs.core.update_in.call(null,state__9164__auto__,cljs.core.into.call(null,path__9165__auto__,korks),f,a,b,c);
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15298;
}});
var transact_BANG___7 = (function (cursor,korks,f,a,b,c,d){var _STAR_read_enabled_STAR_15299 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_.call(null,cursor,(function (state__9164__auto__,path__9165__auto__){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.update_in.call(null,state__9164__auto__,cljs.core.conj.call(null,path__9165__auto__,korks),f,a,b,c,d);
} else
{return cljs.core.update_in.call(null,state__9164__auto__,cljs.core.into.call(null,path__9165__auto__,korks),f,a,b,c,d);
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15299;
}});
var transact_BANG___8 = (function() { 
var G__15301__delegate = function (cursor,korks,f,a,b,c,d,args){var _STAR_read_enabled_STAR_15300 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_.call(null,cursor,(function (state,path){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.apply.call(null,cljs.core.update_in,state,cljs.core.conj.call(null,path,korks),f,a,b,c,d,args);
} else
{return cljs.core.apply.call(null,cljs.core.update_in,state,cljs.core.into.call(null,path,korks),f,a,b,c,d,args);
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15300;
}};
var G__15301 = function (cursor,korks,f,a,b,c,d,var_args){
var args = null;if (arguments.length > 7) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return G__15301__delegate.call(this,cursor,korks,f,a,b,c,d,args);};
G__15301.cljs$lang$maxFixedArity = 7;
G__15301.cljs$lang$applyTo = (function (arglist__15302){
var cursor = cljs.core.first(arglist__15302);
arglist__15302 = cljs.core.next(arglist__15302);
var korks = cljs.core.first(arglist__15302);
arglist__15302 = cljs.core.next(arglist__15302);
var f = cljs.core.first(arglist__15302);
arglist__15302 = cljs.core.next(arglist__15302);
var a = cljs.core.first(arglist__15302);
arglist__15302 = cljs.core.next(arglist__15302);
var b = cljs.core.first(arglist__15302);
arglist__15302 = cljs.core.next(arglist__15302);
var c = cljs.core.first(arglist__15302);
arglist__15302 = cljs.core.next(arglist__15302);
var d = cljs.core.first(arglist__15302);
var args = cljs.core.rest(arglist__15302);
return G__15301__delegate(cursor,korks,f,a,b,c,d,args);
});
G__15301.cljs$core$IFn$_invoke$arity$variadic = G__15301__delegate;
return G__15301;
})()
;
transact_BANG_ = function(cursor,korks,f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,a);
case 5:
return transact_BANG___5.call(this,cursor,korks,f,a,b);
case 6:
return transact_BANG___6.call(this,cursor,korks,f,a,b,c);
case 7:
return transact_BANG___7.call(this,cursor,korks,f,a,b,c,d);
default:
return transact_BANG___8.cljs$core$IFn$_invoke$arity$variadic(cursor,korks,f,a,b,c,d, cljs.core.array_seq(arguments, 7));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$lang$maxFixedArity = 7;
transact_BANG_.cljs$lang$applyTo = transact_BANG___8.cljs$lang$applyTo;
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
transact_BANG_.cljs$core$IFn$_invoke$arity$5 = transact_BANG___5;
transact_BANG_.cljs$core$IFn$_invoke$arity$6 = transact_BANG___6;
transact_BANG_.cljs$core$IFn$_invoke$arity$7 = transact_BANG___7;
transact_BANG_.cljs$core$IFn$_invoke$arity$variadic = transact_BANG___8.cljs$core$IFn$_invoke$arity$variadic;
return transact_BANG_;
})()
;
/**
* Like transact! but no list of keys given. An Om re-render
* will be triggered.
* @param {...*} var_args
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,f){var _STAR_read_enabled_STAR_15309 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_.call(null,cursor,(function (state__9171__auto__,path__9172__auto__){if(cljs.core.empty_QMARK_.call(null,path__9172__auto__))
{return f.call(null,state__9171__auto__);
} else
{return cljs.core.update_in.call(null,state__9171__auto__,path__9172__auto__,f);
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15309;
}});
var update_BANG___3 = (function (cursor,f,a){var _STAR_read_enabled_STAR_15310 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_.call(null,cursor,(function (state__9171__auto__,path__9172__auto__){if(cljs.core.empty_QMARK_.call(null,path__9172__auto__))
{return f.call(null,state__9171__auto__,a);
} else
{return cljs.core.update_in.call(null,state__9171__auto__,path__9172__auto__,f,a);
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15310;
}});
var update_BANG___4 = (function (cursor,f,a,b){var _STAR_read_enabled_STAR_15311 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_.call(null,cursor,(function (state__9171__auto__,path__9172__auto__){if(cljs.core.empty_QMARK_.call(null,path__9172__auto__))
{return f.call(null,state__9171__auto__,a,b);
} else
{return cljs.core.update_in.call(null,state__9171__auto__,path__9172__auto__,f,a,b);
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15311;
}});
var update_BANG___5 = (function (cursor,f,a,b,c){var _STAR_read_enabled_STAR_15312 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_.call(null,cursor,(function (state__9171__auto__,path__9172__auto__){if(cljs.core.empty_QMARK_.call(null,path__9172__auto__))
{return f.call(null,state__9171__auto__,a,b,c);
} else
{return cljs.core.update_in.call(null,state__9171__auto__,path__9172__auto__,f,a,b,c);
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15312;
}});
var update_BANG___6 = (function (cursor,f,a,b,c,d){var _STAR_read_enabled_STAR_15313 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_.call(null,cursor,(function (state__9171__auto__,path__9172__auto__){if(cljs.core.empty_QMARK_.call(null,path__9172__auto__))
{return f.call(null,state__9171__auto__,a,b,c,d);
} else
{return cljs.core.update_in.call(null,state__9171__auto__,path__9172__auto__,f,a,b,c,d);
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15313;
}});
var update_BANG___7 = (function() { 
var G__15315__delegate = function (cursor,f,a,b,c,d,args){var _STAR_read_enabled_STAR_15314 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core._transact_BANG_.call(null,cursor,(function (state,path){if(cljs.core.empty_QMARK_.call(null,path))
{return cljs.core.apply.call(null,f,state,a,b,c,d,args);
} else
{return cljs.core.apply.call(null,cljs.core.update_in,state,path,f,a,b,c,d,args);
}
}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15314;
}};
var G__15315 = function (cursor,f,a,b,c,d,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__15315__delegate.call(this,cursor,f,a,b,c,d,args);};
G__15315.cljs$lang$maxFixedArity = 6;
G__15315.cljs$lang$applyTo = (function (arglist__15316){
var cursor = cljs.core.first(arglist__15316);
arglist__15316 = cljs.core.next(arglist__15316);
var f = cljs.core.first(arglist__15316);
arglist__15316 = cljs.core.next(arglist__15316);
var a = cljs.core.first(arglist__15316);
arglist__15316 = cljs.core.next(arglist__15316);
var b = cljs.core.first(arglist__15316);
arglist__15316 = cljs.core.next(arglist__15316);
var c = cljs.core.first(arglist__15316);
arglist__15316 = cljs.core.next(arglist__15316);
var d = cljs.core.first(arglist__15316);
var args = cljs.core.rest(arglist__15316);
return G__15315__delegate(cursor,f,a,b,c,d,args);
});
G__15315.cljs$core$IFn$_invoke$arity$variadic = G__15315__delegate;
return G__15315;
})()
;
update_BANG_ = function(cursor,f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,f);
case 3:
return update_BANG___3.call(this,cursor,f,a);
case 4:
return update_BANG___4.call(this,cursor,f,a,b);
case 5:
return update_BANG___5.call(this,cursor,f,a,b,c);
case 6:
return update_BANG___6.call(this,cursor,f,a,b,c,d);
default:
return update_BANG___7.cljs$core$IFn$_invoke$arity$variadic(cursor,f,a,b,c,d, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$lang$maxFixedArity = 6;
update_BANG_.cljs$lang$applyTo = update_BANG___7.cljs$lang$applyTo;
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
update_BANG_.cljs$core$IFn$_invoke$arity$5 = update_BANG___5;
update_BANG_.cljs$core$IFn$_invoke$arity$6 = update_BANG___6;
update_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_BANG___7.cljs$core$IFn$_invoke$arity$variadic;
return update_BANG_;
})()
;
/**
* Given a cursor and a function f, read its current value. f will be
* passed a cursor which can only be read in the scope of f. Can take
* an optional sequence of keys ks. Used for interacting with cursors
* outside of render phase.
*/
om.core.read = (function() {
var read = null;
var read__2 = (function (cursor,f){return read.call(null,cursor,cljs.core.List.EMPTY,f);
});
var read__3 = (function (cursor,korks,f){var _STAR_read_enabled_STAR_15318 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var path = ((!(cljs.core.sequential_QMARK_.call(null,korks)))?cljs.core.conj.call(null,om.core._path.call(null,cursor),korks):cljs.core.into.call(null,om.core._path.call(null,cursor),korks));var state = om.core._state.call(null,cursor);var shared = om.core._shared.call(null,cursor);var value = cljs.core.deref.call(null,state);if(cljs.core.empty_QMARK_.call(null,path))
{return f.call(null,om.core.to_cursor.call(null,value,state,cljs.core.PersistentVector.EMPTY,shared));
} else
{return f.call(null,om.core.to_cursor.call(null,cljs.core.get_in.call(null,value,path),state,path,shared));
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15318;
}});
read = function(cursor,korks,f){
switch(arguments.length){
case 2:
return read__2.call(this,cursor,korks);
case 3:
return read__3.call(this,cursor,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
read.cljs$core$IFn$_invoke$arity$2 = read__2;
read.cljs$core$IFn$_invoke$arity$3 = read__3;
return read;
})()
;
/**
* EXPERIMENTAL: Given a cursor, get value from the root at the path
* specified by a sequential list of keys ks.
*/
om.core.join = (function join(cursor,korks){var _STAR_read_enabled_STAR_15320 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var state = om.core._state.call(null,cursor);var shared = om.core._shared.call(null,cursor);var value = cljs.core.deref.call(null,state);if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return om.core.to_cursor.call(null,cljs.core.get.call(null,value,korks),state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null),shared);
} else
{return om.core.to_cursor.call(null,cljs.core.get_in.call(null,value,korks),state,((cljs.core.vector_QMARK_.call(null,korks))?korks:cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,korks)),shared);
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15320;
}});
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function get_node(owner,name){var temp__4092__auto__ = owner.refs;if(cljs.core.truth_(temp__4092__auto__))
{var refs = temp__4092__auto__;return (refs[name]).getDOMNode();
} else
{return null;
}
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function set_state_BANG_(owner,korks,v){var _STAR_read_enabled_STAR_15322 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = owner.props;var state = owner.state;var cursor = (props["__om_cursor"]);var path = om.core._path.call(null,cursor);var pstate = (function (){var or__3406__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return (state["__om_state"]);
}
})();if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{(state["__om_pending_state"] = cljs.core.assoc.call(null,pstate,korks,v));
} else
{(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,korks,v));
}
if(cljs.core.empty_QMARK_.call(null,path))
{return cljs.core.swap_BANG_.call(null,om.core._state.call(null,cursor),cljs.core.clone);
} else
{return cljs.core.swap_BANG_.call(null,om.core._state.call(null,cursor),cljs.core.update_in,path,cljs.core.clone);
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15322;
}});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){return (owner.state["__om_state"]);
});
var get_render_state__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_.call(null,korks)))
{return cljs.core.get.call(null,get_render_state.call(null,owner),korks);
} else
{if(cljs.core.empty_QMARK_.call(null,korks))
{return get_render_state.call(null,owner);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get_in.call(null,get_render_state.call(null,owner),korks);
} else
{return null;
}
}
}
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;
/**
* Convenience function for creating event handlers on cursors. Takes
* a function f which should receive the event as the first argument,
* the cursor as the second argument, and any number of optional
* arguments beyond that. Inside of f the cursor will be readable.
* @param {...*} var_args
*/
om.core.bind = (function() {
var bind = null;
var bind__2 = (function (f,cursor){return (function (e){return om.core.read.call(null,cursor,(function (cursor__$1){return f.call(null,e,cursor__$1);
}));
});
});
var bind__3 = (function (f,cursor,a){return (function (e){return om.core.read.call(null,cursor,(function (cursor__$1){return f.call(null,e,cursor__$1,a);
}));
});
});
var bind__4 = (function (f,cursor,a,b){return (function (e){return om.core.read.call(null,cursor,(function (cursor__$1){return f.call(null,e,cursor__$1,a,b);
}));
});
});
var bind__5 = (function (f,cursor,a,b,c){return (function (e){return om.core.read.call(null,cursor,(function (cursor__$1){return f.call(null,e,cursor__$1,a,b,c);
}));
});
});
var bind__6 = (function (f,cursor,a,b,c,d){return (function (e){return om.core.read.call(null,cursor,(function (cursor__$1){return f.call(null,e,cursor__$1,a,b,c,d);
}));
});
});
var bind__7 = (function() { 
var G__15323__delegate = function (f,cursor,a,b,c,d,args){return (function (e){return om.core.read.call(null,cursor,(function (cursor__$1){return cljs.core.apply.call(null,f,e,cursor__$1,a,b,c,d,args);
}));
});
};
var G__15323 = function (f,cursor,a,b,c,d,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__15323__delegate.call(this,f,cursor,a,b,c,d,args);};
G__15323.cljs$lang$maxFixedArity = 6;
G__15323.cljs$lang$applyTo = (function (arglist__15324){
var f = cljs.core.first(arglist__15324);
arglist__15324 = cljs.core.next(arglist__15324);
var cursor = cljs.core.first(arglist__15324);
arglist__15324 = cljs.core.next(arglist__15324);
var a = cljs.core.first(arglist__15324);
arglist__15324 = cljs.core.next(arglist__15324);
var b = cljs.core.first(arglist__15324);
arglist__15324 = cljs.core.next(arglist__15324);
var c = cljs.core.first(arglist__15324);
arglist__15324 = cljs.core.next(arglist__15324);
var d = cljs.core.first(arglist__15324);
var args = cljs.core.rest(arglist__15324);
return G__15323__delegate(f,cursor,a,b,c,d,args);
});
G__15323.cljs$core$IFn$_invoke$arity$variadic = G__15323__delegate;
return G__15323;
})()
;
bind = function(f,cursor,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return bind__2.call(this,f,cursor);
case 3:
return bind__3.call(this,f,cursor,a);
case 4:
return bind__4.call(this,f,cursor,a,b);
case 5:
return bind__5.call(this,f,cursor,a,b,c);
case 6:
return bind__6.call(this,f,cursor,a,b,c,d);
default:
return bind__7.cljs$core$IFn$_invoke$arity$variadic(f,cursor,a,b,c,d, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bind.cljs$lang$maxFixedArity = 6;
bind.cljs$lang$applyTo = bind__7.cljs$lang$applyTo;
bind.cljs$core$IFn$_invoke$arity$2 = bind__2;
bind.cljs$core$IFn$_invoke$arity$3 = bind__3;
bind.cljs$core$IFn$_invoke$arity$4 = bind__4;
bind.cljs$core$IFn$_invoke$arity$5 = bind__5;
bind.cljs$core$IFn$_invoke$arity$6 = bind__6;
bind.cljs$core$IFn$_invoke$arity$variadic = bind__7.cljs$core$IFn$_invoke$arity$variadic;
return bind;
})()
;
/**
* EXPERIMENTAL: Like om.core/bind but for event handlers that will never
* mutate the app state.
* @param {...*} var_args
*/
om.core.pure_bind = (function() {
var pure_bind = null;
var pure_bind__2 = (function (f,cursor){return (function (e){var _STAR_read_enabled_STAR_15331 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,e,cursor);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15331;
}});
});
var pure_bind__3 = (function (f,cursor,a){return (function (e){var _STAR_read_enabled_STAR_15332 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,e,cursor,a);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15332;
}});
});
var pure_bind__4 = (function (f,cursor,a,b){return (function (e){var _STAR_read_enabled_STAR_15333 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,e,cursor,a,b);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15333;
}});
});
var pure_bind__5 = (function (f,cursor,a,b,c){return (function (e){var _STAR_read_enabled_STAR_15334 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,e,cursor,a,b,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15334;
}});
});
var pure_bind__6 = (function (f,cursor,a,b,c,d){return (function (e){var _STAR_read_enabled_STAR_15335 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return f.call(null,e,cursor,a,b,c,d);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15335;
}});
});
var pure_bind__7 = (function() { 
var G__15337__delegate = function (f,cursor,a,b,c,d,args){return (function (e){var _STAR_read_enabled_STAR_15336 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return cljs.core.apply.call(null,f,e,cursor,a,b,c,d,args);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_15336;
}});
};
var G__15337 = function (f,cursor,a,b,c,d,var_args){
var args = null;if (arguments.length > 6) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__15337__delegate.call(this,f,cursor,a,b,c,d,args);};
G__15337.cljs$lang$maxFixedArity = 6;
G__15337.cljs$lang$applyTo = (function (arglist__15338){
var f = cljs.core.first(arglist__15338);
arglist__15338 = cljs.core.next(arglist__15338);
var cursor = cljs.core.first(arglist__15338);
arglist__15338 = cljs.core.next(arglist__15338);
var a = cljs.core.first(arglist__15338);
arglist__15338 = cljs.core.next(arglist__15338);
var b = cljs.core.first(arglist__15338);
arglist__15338 = cljs.core.next(arglist__15338);
var c = cljs.core.first(arglist__15338);
arglist__15338 = cljs.core.next(arglist__15338);
var d = cljs.core.first(arglist__15338);
var args = cljs.core.rest(arglist__15338);
return G__15337__delegate(f,cursor,a,b,c,d,args);
});
G__15337.cljs$core$IFn$_invoke$arity$variadic = G__15337__delegate;
return G__15337;
})()
;
pure_bind = function(f,cursor,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return pure_bind__2.call(this,f,cursor);
case 3:
return pure_bind__3.call(this,f,cursor,a);
case 4:
return pure_bind__4.call(this,f,cursor,a,b);
case 5:
return pure_bind__5.call(this,f,cursor,a,b,c);
case 6:
return pure_bind__6.call(this,f,cursor,a,b,c,d);
default:
return pure_bind__7.cljs$core$IFn$_invoke$arity$variadic(f,cursor,a,b,c,d, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pure_bind.cljs$lang$maxFixedArity = 6;
pure_bind.cljs$lang$applyTo = pure_bind__7.cljs$lang$applyTo;
pure_bind.cljs$core$IFn$_invoke$arity$2 = pure_bind__2;
pure_bind.cljs$core$IFn$_invoke$arity$3 = pure_bind__3;
pure_bind.cljs$core$IFn$_invoke$arity$4 = pure_bind__4;
pure_bind.cljs$core$IFn$_invoke$arity$5 = pure_bind__5;
pure_bind.cljs$core$IFn$_invoke$arity$6 = pure_bind__6;
pure_bind.cljs$core$IFn$_invoke$arity$variadic = pure_bind__7.cljs$core$IFn$_invoke$arity$variadic;
return pure_bind;
})()
;
/**
* Create a cursor instance by attaching to an existing cursor. This
* supports building components which don't need to set app state but
* need to be added to the render tree.
*/
om.core.graft = (function graft(value,cursor){var x15340 = cljs.core.clone.call(null,value);x15340.cljs$core$IEquiv$ = true;
x15340.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var ___$1 = this;if(om.core.cursor_QMARK_.call(null,other))
{return cljs.core._EQ_.call(null,value,om.core._value.call(null,other));
} else
{return cljs.core._EQ_.call(null,value,other);
}
});
x15340.om$core$ICursor$ = true;
x15340.om$core$ICursor$_value$arity$1 = (function (_){var ___$1 = this;return value;
});
x15340.om$core$ICursor$_state$arity$1 = (function (_){var ___$1 = this;return om.core._state.call(null,cursor);
});
x15340.om$core$ICursor$_path$arity$1 = (function (_){var ___$1 = this;return om.core._path.call(null,cursor);
});
return x15340;
});

//# sourceMappingURL=core.js.map