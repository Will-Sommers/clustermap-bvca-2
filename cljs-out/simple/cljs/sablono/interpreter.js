// Compiled by ClojureScript 0.0-2173
goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('sablono.util');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('clojure.string');
sablono.interpreter.IInterpreter = (function (){var obj17105 = {};return obj17105;
})();
sablono.interpreter.interpret = (function interpret(this$){if((function (){var and__3429__auto__ = this$;if(and__3429__auto__)
{return this$.sablono$interpreter$IInterpreter$interpret$arity$1;
} else
{return and__3429__auto__;
}
})())
{return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else
{var x__4068__auto__ = (((this$ == null))?null:this$);return (function (){var or__3441__auto__ = (sablono.interpreter.interpret[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (sablono.interpreter.interpret["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInterpreter.interpret",this$);
}
}
})().call(null,this$);
}
});
sablono.interpreter.wrap_form_element = (function wrap_form_element(ctor){return React.createClass({"render": (function (){var this$ = this;return this$.transferPropsTo(ctor.call(null,{"children": (this$.props["children"]), "onChange": (this$["onChange"]), "value": (this$.state["value"])}));
}), "componentWillReceiveProps": (function (new_props){var this$ = this;return this$.setState({"value": (new_props["value"])});
}), "onChange": (function (e){var this$ = this;var handler = (this$.props["onChange"]);if((handler == null))
{return null;
} else
{handler.call(null,e);
return this$.setState({"value": e.target.value});
}
}), "getInitialState": (function (){var this$ = this;return {"value": (this$.props["value"])};
})});
});
sablono.interpreter.input = sablono.interpreter.wrap_form_element.call(null,React.DOM.input);
sablono.interpreter.textarea = sablono.interpreter.wrap_form_element.call(null,React.DOM.textarea);
sablono.interpreter.dom_fn = (function dom_fn(tag){var temp__4090__auto__ = (React.DOM[cljs.core.name.call(null,tag)]);if(cljs.core.truth_(temp__4090__auto__))
{var dom_fn__$1 = temp__4090__auto__;return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input","input",1114262332),sablono.interpreter.input,new cljs.core.Keyword(null,"textarea","textarea",4305627820),sablono.interpreter.textarea], null),cljs.core.keyword.call(null,tag),dom_fn__$1);
} else
{throw cljs.core.ex_info.call(null,[cljs.core.str("Unsupported HTML tag: "),cljs.core.str(cljs.core.name.call(null,tag))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",1014018828),tag], null));
}
});
sablono.interpreter.attributes = (function attributes(attrs){var attrs__$1 = cljs.core.clj__GT_js.call(null,sablono.util.html_to_dom_attrs.call(null,attrs));var class$ = clojure.string.join.call(null," ",cljs.core.flatten.call(null,cljs.core.seq.call(null,attrs__$1.className)));if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,class$)))
{attrs__$1.className = class$;
} else
{}
return attrs__$1;
});
/**
* Render an element vector as a HTML element.
*/
sablono.interpreter.element = (function element(element__$1){var vec__17107 = sablono.util.normalize_element.call(null,element__$1);var tag = cljs.core.nth.call(null,vec__17107,0,null);var attrs = cljs.core.nth.call(null,vec__17107,1,null);var content = cljs.core.nth.call(null,vec__17107,2,null);return sablono.interpreter.dom_fn.call(null,tag).call(null,sablono.interpreter.attributes.call(null,attrs),(((cljs.core.sequential_QMARK_.call(null,content)) && (typeof cljs.core.first.call(null,content) === 'string') && (cljs.core.empty_QMARK_.call(null,cljs.core.rest.call(null,content))))?sablono.interpreter.interpret.call(null,cljs.core.first.call(null,content)):(cljs.core.truth_(content)?sablono.interpreter.interpret.call(null,content):((new cljs.core.Keyword(null,"else","else",1017020587))?null:null))));
});
sablono.interpreter.interpret_seq = (function interpret_seq(s){return cljs.core.into_array.call(null,cljs.core.map.call(null,sablono.interpreter.interpret,s));
});
(sablono.interpreter.IInterpreter["null"] = true);
(sablono.interpreter.interpret["null"] = (function (this$){return null;
}));
(sablono.interpreter.IInterpreter["_"] = true);
(sablono.interpreter.interpret["_"] = (function (this$){return this$;
}));
cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = true;
cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){var this$__$1 = this;return sablono.interpreter.element.call(null,this$__$1);
});
cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = true;
cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){var this$__$1 = this;return sablono.interpreter.interpret_seq.call(null,this$__$1);
});
cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = true;
cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){var this$__$1 = this;return sablono.interpreter.interpret_seq.call(null,this$__$1);
});
cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = true;
cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){var this$__$1 = this;return sablono.interpreter.interpret_seq.call(null,this$__$1);
});
cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = true;
cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){var this$__$1 = this;return sablono.interpreter.interpret_seq.call(null,this$__$1);
});
cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = true;
cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){var this$__$1 = this;return sablono.interpreter.interpret_seq.call(null,this$__$1);
});
