// Compiled by ClojureScript 0.0-2138
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_16664 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_16665 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_16666 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_16665,table_section_wrapper_16665,opt_wrapper_16664,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_16666,table_section_wrapper_16665,cell_wrapper_16666,opt_wrapper_16664,table_section_wrapper_16665,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_16665]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__16671 = cljs.core.seq.call(null,tbody);var chunk__16672 = null;var count__16673 = 0;var i__16674 = 0;while(true){
if((i__16674 < count__16673))
{var child = cljs.core._nth.call(null,chunk__16672,i__16674);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16675 = seq__16671;
var G__16676 = chunk__16672;
var G__16677 = count__16673;
var G__16678 = (i__16674 + 1);
seq__16671 = G__16675;
chunk__16672 = G__16676;
count__16673 = G__16677;
i__16674 = G__16678;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16671);if(temp__4092__auto__)
{var seq__16671__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16671__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16671__$1);{
var G__16679 = cljs.core.chunk_rest.call(null,seq__16671__$1);
var G__16680 = c__4148__auto__;
var G__16681 = cljs.core.count.call(null,c__4148__auto__);
var G__16682 = 0;
seq__16671 = G__16679;
chunk__16672 = G__16680;
count__16673 = G__16681;
i__16674 = G__16682;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__16671__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16683 = cljs.core.next.call(null,seq__16671__$1);
var G__16684 = null;
var G__16685 = 0;
var G__16686 = 0;
seq__16671 = G__16683;
chunk__16672 = G__16684;
count__16673 = G__16685;
i__16674 = G__16686;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__16688 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__16688,0,null);var start_wrap = cljs.core.nth.call(null,vec__16688,1,null);var end_wrap = cljs.core.nth.call(null,vec__16688,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__16689 = wrapper.lastChild;
var G__16690 = (level - 1);
wrapper = G__16689;
level = G__16690;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj16692 = {};return obj16692;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__16693){
var mesg = cljs.core.seq(arglist__16693);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__16694){
var mesg = cljs.core.seq(arglist__16694);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__16695){
var contents = cljs.core.seq(arglist__16695);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__16696_SHARP_){return p1__16696_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__16697_SHARP_,p2__16698_SHARP_){return goog.dom.insertChildAt(p1__16697_SHARP_,p2__16698_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16700_SHARP_,p2__16699_SHARP_){return goog.dom.insertSiblingBefore(p2__16699_SHARP_,p1__16700_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16702_SHARP_,p2__16701_SHARP_){return goog.dom.insertSiblingAfter(p2__16701_SHARP_,p1__16702_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__16704_SHARP_,p2__16703_SHARP_){return goog.dom.replaceNode(p2__16703_SHARP_,p1__16704_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__16709_16713 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16710_16714 = null;var count__16711_16715 = 0;var i__16712_16716 = 0;while(true){
if((i__16712_16716 < count__16711_16715))
{var n_16717 = cljs.core._nth.call(null,chunk__16710_16714,i__16712_16716);goog.style.setStyle(n_16717,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16718 = seq__16709_16713;
var G__16719 = chunk__16710_16714;
var G__16720 = count__16711_16715;
var G__16721 = (i__16712_16716 + 1);
seq__16709_16713 = G__16718;
chunk__16710_16714 = G__16719;
count__16711_16715 = G__16720;
i__16712_16716 = G__16721;
continue;
}
} else
{var temp__4092__auto___16722 = cljs.core.seq.call(null,seq__16709_16713);if(temp__4092__auto___16722)
{var seq__16709_16723__$1 = temp__4092__auto___16722;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16709_16723__$1))
{var c__4148__auto___16724 = cljs.core.chunk_first.call(null,seq__16709_16723__$1);{
var G__16725 = cljs.core.chunk_rest.call(null,seq__16709_16723__$1);
var G__16726 = c__4148__auto___16724;
var G__16727 = cljs.core.count.call(null,c__4148__auto___16724);
var G__16728 = 0;
seq__16709_16713 = G__16725;
chunk__16710_16714 = G__16726;
count__16711_16715 = G__16727;
i__16712_16716 = G__16728;
continue;
}
} else
{var n_16729 = cljs.core.first.call(null,seq__16709_16723__$1);goog.style.setStyle(n_16729,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16730 = cljs.core.next.call(null,seq__16709_16723__$1);
var G__16731 = null;
var G__16732 = 0;
var G__16733 = 0;
seq__16709_16713 = G__16730;
chunk__16710_16714 = G__16731;
count__16711_16715 = G__16732;
i__16712_16716 = G__16733;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16734){
var content = cljs.core.first(arglist__16734);
arglist__16734 = cljs.core.next(arglist__16734);
var name = cljs.core.first(arglist__16734);
var value = cljs.core.rest(arglist__16734);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__16739_16743 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16740_16744 = null;var count__16741_16745 = 0;var i__16742_16746 = 0;while(true){
if((i__16742_16746 < count__16741_16745))
{var n_16747 = cljs.core._nth.call(null,chunk__16740_16744,i__16742_16746);n_16747.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16748 = seq__16739_16743;
var G__16749 = chunk__16740_16744;
var G__16750 = count__16741_16745;
var G__16751 = (i__16742_16746 + 1);
seq__16739_16743 = G__16748;
chunk__16740_16744 = G__16749;
count__16741_16745 = G__16750;
i__16742_16746 = G__16751;
continue;
}
} else
{var temp__4092__auto___16752 = cljs.core.seq.call(null,seq__16739_16743);if(temp__4092__auto___16752)
{var seq__16739_16753__$1 = temp__4092__auto___16752;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16739_16753__$1))
{var c__4148__auto___16754 = cljs.core.chunk_first.call(null,seq__16739_16753__$1);{
var G__16755 = cljs.core.chunk_rest.call(null,seq__16739_16753__$1);
var G__16756 = c__4148__auto___16754;
var G__16757 = cljs.core.count.call(null,c__4148__auto___16754);
var G__16758 = 0;
seq__16739_16743 = G__16755;
chunk__16740_16744 = G__16756;
count__16741_16745 = G__16757;
i__16742_16746 = G__16758;
continue;
}
} else
{var n_16759 = cljs.core.first.call(null,seq__16739_16753__$1);n_16759.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16760 = cljs.core.next.call(null,seq__16739_16753__$1);
var G__16761 = null;
var G__16762 = 0;
var G__16763 = 0;
seq__16739_16743 = G__16760;
chunk__16740_16744 = G__16761;
count__16741_16745 = G__16762;
i__16742_16746 = G__16763;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16764){
var content = cljs.core.first(arglist__16764);
arglist__16764 = cljs.core.next(arglist__16764);
var name = cljs.core.first(arglist__16764);
var value = cljs.core.rest(arglist__16764);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__16769_16773 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16770_16774 = null;var count__16771_16775 = 0;var i__16772_16776 = 0;while(true){
if((i__16772_16776 < count__16771_16775))
{var n_16777 = cljs.core._nth.call(null,chunk__16770_16774,i__16772_16776);n_16777.removeAttribute(cljs.core.name.call(null,name));
{
var G__16778 = seq__16769_16773;
var G__16779 = chunk__16770_16774;
var G__16780 = count__16771_16775;
var G__16781 = (i__16772_16776 + 1);
seq__16769_16773 = G__16778;
chunk__16770_16774 = G__16779;
count__16771_16775 = G__16780;
i__16772_16776 = G__16781;
continue;
}
} else
{var temp__4092__auto___16782 = cljs.core.seq.call(null,seq__16769_16773);if(temp__4092__auto___16782)
{var seq__16769_16783__$1 = temp__4092__auto___16782;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16769_16783__$1))
{var c__4148__auto___16784 = cljs.core.chunk_first.call(null,seq__16769_16783__$1);{
var G__16785 = cljs.core.chunk_rest.call(null,seq__16769_16783__$1);
var G__16786 = c__4148__auto___16784;
var G__16787 = cljs.core.count.call(null,c__4148__auto___16784);
var G__16788 = 0;
seq__16769_16773 = G__16785;
chunk__16770_16774 = G__16786;
count__16771_16775 = G__16787;
i__16772_16776 = G__16788;
continue;
}
} else
{var n_16789 = cljs.core.first.call(null,seq__16769_16783__$1);n_16789.removeAttribute(cljs.core.name.call(null,name));
{
var G__16790 = cljs.core.next.call(null,seq__16769_16783__$1);
var G__16791 = null;
var G__16792 = 0;
var G__16793 = 0;
seq__16769_16773 = G__16790;
chunk__16770_16774 = G__16791;
count__16771_16775 = G__16792;
i__16772_16776 = G__16793;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__16795 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__16795,0,null);var v = cljs.core.nth.call(null,vec__16795,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16796_SHARP_){var attr = attrs__$1.item(p1__16796_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__16803_16809 = cljs.core.seq.call(null,styles);var chunk__16804_16810 = null;var count__16805_16811 = 0;var i__16806_16812 = 0;while(true){
if((i__16806_16812 < count__16805_16811))
{var vec__16807_16813 = cljs.core._nth.call(null,chunk__16804_16810,i__16806_16812);var name_16814 = cljs.core.nth.call(null,vec__16807_16813,0,null);var value_16815 = cljs.core.nth.call(null,vec__16807_16813,1,null);domina.set_style_BANG_.call(null,content,name_16814,value_16815);
{
var G__16816 = seq__16803_16809;
var G__16817 = chunk__16804_16810;
var G__16818 = count__16805_16811;
var G__16819 = (i__16806_16812 + 1);
seq__16803_16809 = G__16816;
chunk__16804_16810 = G__16817;
count__16805_16811 = G__16818;
i__16806_16812 = G__16819;
continue;
}
} else
{var temp__4092__auto___16820 = cljs.core.seq.call(null,seq__16803_16809);if(temp__4092__auto___16820)
{var seq__16803_16821__$1 = temp__4092__auto___16820;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16803_16821__$1))
{var c__4148__auto___16822 = cljs.core.chunk_first.call(null,seq__16803_16821__$1);{
var G__16823 = cljs.core.chunk_rest.call(null,seq__16803_16821__$1);
var G__16824 = c__4148__auto___16822;
var G__16825 = cljs.core.count.call(null,c__4148__auto___16822);
var G__16826 = 0;
seq__16803_16809 = G__16823;
chunk__16804_16810 = G__16824;
count__16805_16811 = G__16825;
i__16806_16812 = G__16826;
continue;
}
} else
{var vec__16808_16827 = cljs.core.first.call(null,seq__16803_16821__$1);var name_16828 = cljs.core.nth.call(null,vec__16808_16827,0,null);var value_16829 = cljs.core.nth.call(null,vec__16808_16827,1,null);domina.set_style_BANG_.call(null,content,name_16828,value_16829);
{
var G__16830 = cljs.core.next.call(null,seq__16803_16821__$1);
var G__16831 = null;
var G__16832 = 0;
var G__16833 = 0;
seq__16803_16809 = G__16830;
chunk__16804_16810 = G__16831;
count__16805_16811 = G__16832;
i__16806_16812 = G__16833;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__16840_16846 = cljs.core.seq.call(null,attrs);var chunk__16841_16847 = null;var count__16842_16848 = 0;var i__16843_16849 = 0;while(true){
if((i__16843_16849 < count__16842_16848))
{var vec__16844_16850 = cljs.core._nth.call(null,chunk__16841_16847,i__16843_16849);var name_16851 = cljs.core.nth.call(null,vec__16844_16850,0,null);var value_16852 = cljs.core.nth.call(null,vec__16844_16850,1,null);domina.set_attr_BANG_.call(null,content,name_16851,value_16852);
{
var G__16853 = seq__16840_16846;
var G__16854 = chunk__16841_16847;
var G__16855 = count__16842_16848;
var G__16856 = (i__16843_16849 + 1);
seq__16840_16846 = G__16853;
chunk__16841_16847 = G__16854;
count__16842_16848 = G__16855;
i__16843_16849 = G__16856;
continue;
}
} else
{var temp__4092__auto___16857 = cljs.core.seq.call(null,seq__16840_16846);if(temp__4092__auto___16857)
{var seq__16840_16858__$1 = temp__4092__auto___16857;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16840_16858__$1))
{var c__4148__auto___16859 = cljs.core.chunk_first.call(null,seq__16840_16858__$1);{
var G__16860 = cljs.core.chunk_rest.call(null,seq__16840_16858__$1);
var G__16861 = c__4148__auto___16859;
var G__16862 = cljs.core.count.call(null,c__4148__auto___16859);
var G__16863 = 0;
seq__16840_16846 = G__16860;
chunk__16841_16847 = G__16861;
count__16842_16848 = G__16862;
i__16843_16849 = G__16863;
continue;
}
} else
{var vec__16845_16864 = cljs.core.first.call(null,seq__16840_16858__$1);var name_16865 = cljs.core.nth.call(null,vec__16845_16864,0,null);var value_16866 = cljs.core.nth.call(null,vec__16845_16864,1,null);domina.set_attr_BANG_.call(null,content,name_16865,value_16866);
{
var G__16867 = cljs.core.next.call(null,seq__16840_16858__$1);
var G__16868 = null;
var G__16869 = 0;
var G__16870 = 0;
seq__16840_16846 = G__16867;
chunk__16841_16847 = G__16868;
count__16842_16848 = G__16869;
i__16843_16849 = G__16870;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__16875_16879 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16876_16880 = null;var count__16877_16881 = 0;var i__16878_16882 = 0;while(true){
if((i__16878_16882 < count__16877_16881))
{var node_16883 = cljs.core._nth.call(null,chunk__16876_16880,i__16878_16882);goog.dom.classes.add(node_16883,class$);
{
var G__16884 = seq__16875_16879;
var G__16885 = chunk__16876_16880;
var G__16886 = count__16877_16881;
var G__16887 = (i__16878_16882 + 1);
seq__16875_16879 = G__16884;
chunk__16876_16880 = G__16885;
count__16877_16881 = G__16886;
i__16878_16882 = G__16887;
continue;
}
} else
{var temp__4092__auto___16888 = cljs.core.seq.call(null,seq__16875_16879);if(temp__4092__auto___16888)
{var seq__16875_16889__$1 = temp__4092__auto___16888;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16875_16889__$1))
{var c__4148__auto___16890 = cljs.core.chunk_first.call(null,seq__16875_16889__$1);{
var G__16891 = cljs.core.chunk_rest.call(null,seq__16875_16889__$1);
var G__16892 = c__4148__auto___16890;
var G__16893 = cljs.core.count.call(null,c__4148__auto___16890);
var G__16894 = 0;
seq__16875_16879 = G__16891;
chunk__16876_16880 = G__16892;
count__16877_16881 = G__16893;
i__16878_16882 = G__16894;
continue;
}
} else
{var node_16895 = cljs.core.first.call(null,seq__16875_16889__$1);goog.dom.classes.add(node_16895,class$);
{
var G__16896 = cljs.core.next.call(null,seq__16875_16889__$1);
var G__16897 = null;
var G__16898 = 0;
var G__16899 = 0;
seq__16875_16879 = G__16896;
chunk__16876_16880 = G__16897;
count__16877_16881 = G__16898;
i__16878_16882 = G__16899;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__16904_16908 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16905_16909 = null;var count__16906_16910 = 0;var i__16907_16911 = 0;while(true){
if((i__16907_16911 < count__16906_16910))
{var node_16912 = cljs.core._nth.call(null,chunk__16905_16909,i__16907_16911);goog.dom.classes.remove(node_16912,class$);
{
var G__16913 = seq__16904_16908;
var G__16914 = chunk__16905_16909;
var G__16915 = count__16906_16910;
var G__16916 = (i__16907_16911 + 1);
seq__16904_16908 = G__16913;
chunk__16905_16909 = G__16914;
count__16906_16910 = G__16915;
i__16907_16911 = G__16916;
continue;
}
} else
{var temp__4092__auto___16917 = cljs.core.seq.call(null,seq__16904_16908);if(temp__4092__auto___16917)
{var seq__16904_16918__$1 = temp__4092__auto___16917;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16904_16918__$1))
{var c__4148__auto___16919 = cljs.core.chunk_first.call(null,seq__16904_16918__$1);{
var G__16920 = cljs.core.chunk_rest.call(null,seq__16904_16918__$1);
var G__16921 = c__4148__auto___16919;
var G__16922 = cljs.core.count.call(null,c__4148__auto___16919);
var G__16923 = 0;
seq__16904_16908 = G__16920;
chunk__16905_16909 = G__16921;
count__16906_16910 = G__16922;
i__16907_16911 = G__16923;
continue;
}
} else
{var node_16924 = cljs.core.first.call(null,seq__16904_16918__$1);goog.dom.classes.remove(node_16924,class$);
{
var G__16925 = cljs.core.next.call(null,seq__16904_16918__$1);
var G__16926 = null;
var G__16927 = 0;
var G__16928 = 0;
seq__16904_16908 = G__16925;
chunk__16905_16909 = G__16926;
count__16906_16910 = G__16927;
i__16907_16911 = G__16928;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__16933_16937 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16934_16938 = null;var count__16935_16939 = 0;var i__16936_16940 = 0;while(true){
if((i__16936_16940 < count__16935_16939))
{var node_16941 = cljs.core._nth.call(null,chunk__16934_16938,i__16936_16940);goog.dom.classes.toggle(node_16941,class$);
{
var G__16942 = seq__16933_16937;
var G__16943 = chunk__16934_16938;
var G__16944 = count__16935_16939;
var G__16945 = (i__16936_16940 + 1);
seq__16933_16937 = G__16942;
chunk__16934_16938 = G__16943;
count__16935_16939 = G__16944;
i__16936_16940 = G__16945;
continue;
}
} else
{var temp__4092__auto___16946 = cljs.core.seq.call(null,seq__16933_16937);if(temp__4092__auto___16946)
{var seq__16933_16947__$1 = temp__4092__auto___16946;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16933_16947__$1))
{var c__4148__auto___16948 = cljs.core.chunk_first.call(null,seq__16933_16947__$1);{
var G__16949 = cljs.core.chunk_rest.call(null,seq__16933_16947__$1);
var G__16950 = c__4148__auto___16948;
var G__16951 = cljs.core.count.call(null,c__4148__auto___16948);
var G__16952 = 0;
seq__16933_16937 = G__16949;
chunk__16934_16938 = G__16950;
count__16935_16939 = G__16951;
i__16936_16940 = G__16952;
continue;
}
} else
{var node_16953 = cljs.core.first.call(null,seq__16933_16947__$1);goog.dom.classes.toggle(node_16953,class$);
{
var G__16954 = cljs.core.next.call(null,seq__16933_16947__$1);
var G__16955 = null;
var G__16956 = 0;
var G__16957 = 0;
seq__16933_16937 = G__16954;
chunk__16934_16938 = G__16955;
count__16935_16939 = G__16956;
i__16936_16940 = G__16957;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_16966__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__16962_16967 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16963_16968 = null;var count__16964_16969 = 0;var i__16965_16970 = 0;while(true){
if((i__16965_16970 < count__16964_16969))
{var node_16971 = cljs.core._nth.call(null,chunk__16963_16968,i__16965_16970);goog.dom.classes.set(node_16971,classes_16966__$1);
{
var G__16972 = seq__16962_16967;
var G__16973 = chunk__16963_16968;
var G__16974 = count__16964_16969;
var G__16975 = (i__16965_16970 + 1);
seq__16962_16967 = G__16972;
chunk__16963_16968 = G__16973;
count__16964_16969 = G__16974;
i__16965_16970 = G__16975;
continue;
}
} else
{var temp__4092__auto___16976 = cljs.core.seq.call(null,seq__16962_16967);if(temp__4092__auto___16976)
{var seq__16962_16977__$1 = temp__4092__auto___16976;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16962_16977__$1))
{var c__4148__auto___16978 = cljs.core.chunk_first.call(null,seq__16962_16977__$1);{
var G__16979 = cljs.core.chunk_rest.call(null,seq__16962_16977__$1);
var G__16980 = c__4148__auto___16978;
var G__16981 = cljs.core.count.call(null,c__4148__auto___16978);
var G__16982 = 0;
seq__16962_16967 = G__16979;
chunk__16963_16968 = G__16980;
count__16964_16969 = G__16981;
i__16965_16970 = G__16982;
continue;
}
} else
{var node_16983 = cljs.core.first.call(null,seq__16962_16977__$1);goog.dom.classes.set(node_16983,classes_16966__$1);
{
var G__16984 = cljs.core.next.call(null,seq__16962_16977__$1);
var G__16985 = null;
var G__16986 = 0;
var G__16987 = 0;
seq__16962_16967 = G__16984;
chunk__16963_16968 = G__16985;
count__16964_16969 = G__16986;
i__16965_16970 = G__16987;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__16992_16996 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16993_16997 = null;var count__16994_16998 = 0;var i__16995_16999 = 0;while(true){
if((i__16995_16999 < count__16994_16998))
{var node_17000 = cljs.core._nth.call(null,chunk__16993_16997,i__16995_16999);goog.dom.setTextContent(node_17000,value);
{
var G__17001 = seq__16992_16996;
var G__17002 = chunk__16993_16997;
var G__17003 = count__16994_16998;
var G__17004 = (i__16995_16999 + 1);
seq__16992_16996 = G__17001;
chunk__16993_16997 = G__17002;
count__16994_16998 = G__17003;
i__16995_16999 = G__17004;
continue;
}
} else
{var temp__4092__auto___17005 = cljs.core.seq.call(null,seq__16992_16996);if(temp__4092__auto___17005)
{var seq__16992_17006__$1 = temp__4092__auto___17005;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16992_17006__$1))
{var c__4148__auto___17007 = cljs.core.chunk_first.call(null,seq__16992_17006__$1);{
var G__17008 = cljs.core.chunk_rest.call(null,seq__16992_17006__$1);
var G__17009 = c__4148__auto___17007;
var G__17010 = cljs.core.count.call(null,c__4148__auto___17007);
var G__17011 = 0;
seq__16992_16996 = G__17008;
chunk__16993_16997 = G__17009;
count__16994_16998 = G__17010;
i__16995_16999 = G__17011;
continue;
}
} else
{var node_17012 = cljs.core.first.call(null,seq__16992_17006__$1);goog.dom.setTextContent(node_17012,value);
{
var G__17013 = cljs.core.next.call(null,seq__16992_17006__$1);
var G__17014 = null;
var G__17015 = 0;
var G__17016 = 0;
seq__16992_16996 = G__17013;
chunk__16993_16997 = G__17014;
count__16994_16998 = G__17015;
i__16995_16999 = G__17016;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__17021_17025 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17022_17026 = null;var count__17023_17027 = 0;var i__17024_17028 = 0;while(true){
if((i__17024_17028 < count__17023_17027))
{var node_17029 = cljs.core._nth.call(null,chunk__17022_17026,i__17024_17028);goog.dom.forms.setValue(node_17029,value);
{
var G__17030 = seq__17021_17025;
var G__17031 = chunk__17022_17026;
var G__17032 = count__17023_17027;
var G__17033 = (i__17024_17028 + 1);
seq__17021_17025 = G__17030;
chunk__17022_17026 = G__17031;
count__17023_17027 = G__17032;
i__17024_17028 = G__17033;
continue;
}
} else
{var temp__4092__auto___17034 = cljs.core.seq.call(null,seq__17021_17025);if(temp__4092__auto___17034)
{var seq__17021_17035__$1 = temp__4092__auto___17034;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17021_17035__$1))
{var c__4148__auto___17036 = cljs.core.chunk_first.call(null,seq__17021_17035__$1);{
var G__17037 = cljs.core.chunk_rest.call(null,seq__17021_17035__$1);
var G__17038 = c__4148__auto___17036;
var G__17039 = cljs.core.count.call(null,c__4148__auto___17036);
var G__17040 = 0;
seq__17021_17025 = G__17037;
chunk__17022_17026 = G__17038;
count__17023_17027 = G__17039;
i__17024_17028 = G__17040;
continue;
}
} else
{var node_17041 = cljs.core.first.call(null,seq__17021_17035__$1);goog.dom.forms.setValue(node_17041,value);
{
var G__17042 = cljs.core.next.call(null,seq__17021_17035__$1);
var G__17043 = null;
var G__17044 = 0;
var G__17045 = 0;
seq__17021_17025 = G__17042;
chunk__17022_17026 = G__17043;
count__17023_17027 = G__17044;
i__17024_17028 = G__17045;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_17056 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17052_17057 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17053_17058 = null;var count__17054_17059 = 0;var i__17055_17060 = 0;while(true){
if((i__17055_17060 < count__17054_17059))
{var node_17061 = cljs.core._nth.call(null,chunk__17053_17058,i__17055_17060);node_17061.innerHTML = value_17056;
{
var G__17062 = seq__17052_17057;
var G__17063 = chunk__17053_17058;
var G__17064 = count__17054_17059;
var G__17065 = (i__17055_17060 + 1);
seq__17052_17057 = G__17062;
chunk__17053_17058 = G__17063;
count__17054_17059 = G__17064;
i__17055_17060 = G__17065;
continue;
}
} else
{var temp__4092__auto___17066 = cljs.core.seq.call(null,seq__17052_17057);if(temp__4092__auto___17066)
{var seq__17052_17067__$1 = temp__4092__auto___17066;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17052_17067__$1))
{var c__4148__auto___17068 = cljs.core.chunk_first.call(null,seq__17052_17067__$1);{
var G__17069 = cljs.core.chunk_rest.call(null,seq__17052_17067__$1);
var G__17070 = c__4148__auto___17068;
var G__17071 = cljs.core.count.call(null,c__4148__auto___17068);
var G__17072 = 0;
seq__17052_17057 = G__17069;
chunk__17053_17058 = G__17070;
count__17054_17059 = G__17071;
i__17055_17060 = G__17072;
continue;
}
} else
{var node_17073 = cljs.core.first.call(null,seq__17052_17067__$1);node_17073.innerHTML = value_17056;
{
var G__17074 = cljs.core.next.call(null,seq__17052_17067__$1);
var G__17075 = null;
var G__17076 = 0;
var G__17077 = 0;
seq__17052_17057 = G__17074;
chunk__17053_17058 = G__17075;
count__17054_17059 = G__17076;
i__17055_17060 = G__17077;
continue;
}
}
} else
{}
}
break;
}
}catch (e17051){if((e17051 instanceof Error))
{var e_17078 = e17051;domina.replace_children_BANG_.call(null,content,value_17056);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17051;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17085_17089 = cljs.core.seq.call(null,children);var chunk__17086_17090 = null;var count__17087_17091 = 0;var i__17088_17092 = 0;while(true){
if((i__17088_17092 < count__17087_17091))
{var child_17093 = cljs.core._nth.call(null,chunk__17086_17090,i__17088_17092);frag.appendChild(child_17093);
{
var G__17094 = seq__17085_17089;
var G__17095 = chunk__17086_17090;
var G__17096 = count__17087_17091;
var G__17097 = (i__17088_17092 + 1);
seq__17085_17089 = G__17094;
chunk__17086_17090 = G__17095;
count__17087_17091 = G__17096;
i__17088_17092 = G__17097;
continue;
}
} else
{var temp__4092__auto___17098 = cljs.core.seq.call(null,seq__17085_17089);if(temp__4092__auto___17098)
{var seq__17085_17099__$1 = temp__4092__auto___17098;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17085_17099__$1))
{var c__4148__auto___17100 = cljs.core.chunk_first.call(null,seq__17085_17099__$1);{
var G__17101 = cljs.core.chunk_rest.call(null,seq__17085_17099__$1);
var G__17102 = c__4148__auto___17100;
var G__17103 = cljs.core.count.call(null,c__4148__auto___17100);
var G__17104 = 0;
seq__17085_17089 = G__17101;
chunk__17086_17090 = G__17102;
count__17087_17091 = G__17103;
i__17088_17092 = G__17104;
continue;
}
} else
{var child_17105 = cljs.core.first.call(null,seq__17085_17099__$1);frag.appendChild(child_17105);
{
var G__17106 = cljs.core.next.call(null,seq__17085_17099__$1);
var G__17107 = null;
var G__17108 = 0;
var G__17109 = 0;
seq__17085_17089 = G__17106;
chunk__17086_17090 = G__17107;
count__17087_17091 = G__17108;
i__17088_17092 = G__17109;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17079_SHARP_,p2__17080_SHARP_){return f.call(null,p1__17079_SHARP_,p2__17080_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__17111 = list_thing;if(G__17111)
{var bit__4050__auto__ = (G__17111.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17111.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17111.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17111);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17111);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__17112 = content;if(G__17112)
{var bit__4050__auto__ = (G__17112.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17112.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17112.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17112);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17112);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__17113 = content;if(G__17113)
{var bit__4050__auto__ = (G__17113.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17113.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17113.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17113);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17113);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map