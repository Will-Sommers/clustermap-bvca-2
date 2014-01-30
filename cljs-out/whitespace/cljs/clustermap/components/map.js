// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.map');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('jayq.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('hiccups.runtime');
goog.require('hiccups.runtime');
goog.require('clojure.set');
goog.require('om.dom');
goog.require('clojure.set');
goog.require('jayq.core');
clustermap.components.map.locate_map = (function locate_map(m){return m.fitBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3406__auto__ = (function (){var G__31523 = config;var G__31523__$1 = (((G__31523 == null))?null:G__31523.components);var G__31523__$2 = (((G__31523__$1 == null))?null:G__31523__$1.map);var G__31523__$3 = (((G__31523__$2 == null))?null:G__31523__$2.api_key);return G__31523__$3;
})();if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": true});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map.call(null,m);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414),m,new cljs.core.Keyword(null,"markers","markers",1853155051),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"paths","paths",1120343136),cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY)], null);
});
/**
* return a single LatLngBounds object containing all
* given latlongs
*/
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.last,longlats));var w = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,longlats));var n = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.last,longlats));var e = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3394__auto__ = s;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = w;if(cljs.core.truth_(and__3394__auto____$1))
{var and__3394__auto____$2 = n;if(cljs.core.truth_(and__3394__auto____$2))
{return e;
} else
{return and__3394__auto____$2;
}
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,w], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,e], null)], null)));
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
clustermap.components.map.pan_to_show = (function() { 
var pan_to_show__delegate = function (m,all_bounds){if(cljs.core.truth_(cljs.core.not_empty.call(null,all_bounds)))
{var fb = cljs.core.first.call(null,all_bounds);var fb_copy = (new L.LatLngBounds(fb.getSouthWest(),fb.getNorthEast()));var super_bounds = cljs.core.reduce.call(null,((function (fb,fb_copy){
return (function (sb,bounds){return sb.extend(bounds);
});})(fb,fb_copy))
,fb_copy,cljs.core.rest.call(null,all_bounds));return m.fitBounds(super_bounds);
} else
{return null;
}
};
var pan_to_show = function (m,var_args){
var all_bounds = null;if (arguments.length > 1) {
  all_bounds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return pan_to_show__delegate.call(this,m,all_bounds);};
pan_to_show.cljs$lang$maxFixedArity = 1;
pan_to_show.cljs$lang$applyTo = (function (arglist__31524){
var m = cljs.core.first(arglist__31524);
var all_bounds = cljs.core.rest(arglist__31524);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.display_site = (function display_site(m,site){var location = cljs.core.clj__GT_js.call(null,cljs.core.reverse.call(null,(site["location"])));var options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),[cljs.core.str((site["name"])),cljs.core.str(", "),cljs.core.str((site["postcode"])),cljs.core.str(", "),cljs.core.str((site["company_no"]))].join('')], null));var marker = L.marker(location,options);return marker.addTo(m);
});
clustermap.components.map.display_sites = (function display_sites(m,sites){return (function (c){return casync.dorun_async.call(null,c,new cljs.core.Keyword(null,"delay","delay",1109372149),null);
}).call(null,casync.map_async.call(null,cljs.core.partial.call(null,clustermap.components.map.display_site,m),sites));
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(location_sites){return [cljs.core.str(hiccups.runtime.render_html.call(null,cljs.core.map.call(null,(function (site){return [cljs.core.str((function (){var attrs31526 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(site);if(cljs.core.map_QMARK_.call(null,attrs31526))
{return [cljs.core.str("<p"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),null], null),attrs31526))),cljs.core.str(" />")].join('');
} else
{return [cljs.core.str("<p>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs31526)),cljs.core.str("</p>")].join('');
}
})())].join('');
}),location_sites)))].join('');
});
clustermap.components.map.create_marker = (function create_marker(leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__31529 = location_sites;var G__31529__$1 = (((G__31529 == null))?null:cljs.core.first.call(null,G__31529));var G__31529__$2 = (((G__31529__$1 == null))?null:new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(G__31529__$1));var G__31529__$3 = (((G__31529__$2 == null))?null:cljs.core.reverse.call(null,G__31529__$2));var G__31529__$4 = (((G__31529__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__31529__$3));return G__31529__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var marker = L.marker(latlong);var popup_content = clustermap.components.map.marker_popup_content.call(null,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log([cljs.core.str("missing location: "),cljs.core.str((function (){var sb__4298__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_31530_31531 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__4299__auto__){return sb__4298__auto__.append(x__4299__auto__);
});
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31530_31531;
}return [cljs.core.str(sb__4298__auto__)].join('');
})())].join(''));
}
});
clustermap.components.map.update_marker = (function update_marker(leaflet_map,marker,location){marker.setPopupContent(clustermap.components.map.marker_popup_content.call(null,location));
return marker;
});
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,marker){return leaflet_map.removeLayer(marker);
});
clustermap.components.map.update_markers = (function update_markers(leaflet_map,markers_atom,old_locations,new_locations){var markers = cljs.core.deref.call(null,markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var location_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_locations));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,location_keys);var new_marker_keys = clojure.set.difference.call(null,location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,location_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker.call(null,leaflet_map,cljs.core.get.call(null,new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var _ = (function (){var seq__31536 = cljs.core.seq.call(null,remove_marker_keys);var chunk__31537 = null;var count__31538 = 0;var i__31539 = 0;while(true){
if((i__31539 < count__31538))
{var k = cljs.core._nth.call(null,chunk__31537,i__31539);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__31540 = seq__31536;
var G__31541 = chunk__31537;
var G__31542 = count__31538;
var G__31543 = (i__31539 + 1);
seq__31536 = G__31540;
chunk__31537 = G__31541;
count__31538 = G__31542;
i__31539 = G__31543;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31536);if(temp__4092__auto__)
{var seq__31536__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31536__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__31536__$1);{
var G__31544 = cljs.core.chunk_rest.call(null,seq__31536__$1);
var G__31545 = c__4148__auto__;
var G__31546 = cljs.core.count.call(null,c__4148__auto__);
var G__31547 = 0;
seq__31536 = G__31544;
chunk__31537 = G__31545;
count__31538 = G__31546;
i__31539 = G__31547;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__31536__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__31548 = cljs.core.next.call(null,seq__31536__$1);
var G__31549 = null;
var G__31550 = 0;
var G__31551 = 0;
seq__31536 = G__31548;
chunk__31537 = G__31549;
count__31538 = G__31550;
i__31539 = G__31551;
continue;
}
}
} else
{return null;
}
}
break;
}
})();return cljs.core.reset_BANG_.call(null,markers_atom,cljs.core.merge.call(null,updated_markers,new_markers));
});
/**
* turns a PostGIS envelope into a L.LatLngBounds
*/
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__31560 = cljs.core.js__GT_clj.call(null,envelope);var map__31560__$1 = ((cljs.core.seq_QMARK_.call(null,map__31560))?cljs.core.apply.call(null,cljs.core.hash_map,map__31560):map__31560);var clj_envelope = map__31560__$1;var vec__31561 = cljs.core.get.call(null,map__31560__$1,"coordinates");var vec__31562 = cljs.core.nth.call(null,vec__31561,0,null);var vec__31563 = cljs.core.nth.call(null,vec__31562,0,null);var miny0 = cljs.core.nth.call(null,vec__31563,0,null);var minx0 = cljs.core.nth.call(null,vec__31563,1,null);var vec__31564 = cljs.core.nth.call(null,vec__31562,1,null);var maxy1 = cljs.core.nth.call(null,vec__31564,0,null);var minx1 = cljs.core.nth.call(null,vec__31564,1,null);var vec__31565 = cljs.core.nth.call(null,vec__31562,2,null);var maxy2 = cljs.core.nth.call(null,vec__31565,0,null);var maxx2 = cljs.core.nth.call(null,vec__31565,1,null);var vec__31566 = cljs.core.nth.call(null,vec__31562,3,null);var miny3 = cljs.core.nth.call(null,vec__31566,0,null);var maxx3 = cljs.core.nth.call(null,vec__31566,1,null);var vec__31567 = cljs.core.nth.call(null,vec__31562,4,null);var miny4 = cljs.core.nth.call(null,vec__31567,0,null);var minx4 = cljs.core.nth.call(null,vec__31567,1,null);var inner = vec__31562;var coords = vec__31561;return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
clustermap.components.map.create_path = (function create_path(leaflet_map,uk_constituencies,boundaryline_id){var temp__4090__auto__ = (uk_constituencies[boundaryline_id]);if(cljs.core.truth_(temp__4090__auto__))
{var cons = temp__4090__auto__;var path = L.geoJson((cons["geojson"]));var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(cons["envelope"]));path.addTo(leaflet_map);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"bounds","bounds",3925666343),bounds], null);
} else
{return console.log([cljs.core.str("missing boundaryline metadata: "),cljs.core.str(boundaryline_id)].join(''));
}
});
clustermap.components.map.update_path = (function update_path(leaflet_map,uk_constituencies,path,boundaryline_id){return path;
});
clustermap.components.map.remove_path = (function remove_path(leaflet_map,path){var G__31569 = path;var G__31569__$1 = (((G__31569 == null))?null:new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(G__31569));var G__31569__$2 = (((G__31569__$1 == null))?null:leaflet_map.removeLayer(G__31569__$1));return G__31569__$2;
});
clustermap.components.map.update_paths = (function update_paths(leaflet_map,uk_constituencies,paths_atom,old_locations,new_locations){var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var location_path_keys = cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487),new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115)),cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,new_locations)))));var update_path_keys = clojure.set.intersection.call(null,path_keys,location_path_keys);var new_path_keys = clojure.set.difference.call(null,location_path_keys,path_keys);var remove_path_keys = clojure.set.difference.call(null,path_keys,location_path_keys);var new_paths = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys){
return (function (p__31576){var vec__31577 = p__31576;var k = cljs.core.nth.call(null,vec__31577,0,null);var v = cljs.core.nth.call(null,vec__31577,1,null);return cljs.core.identity.call(null,v);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys))
,cljs.core.map.call(null,((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_path.call(null,leaflet_map,uk_constituencies,k)], null);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys))
,new_path_keys)));var updated_paths = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys,new_paths){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_path.call(null,leaflet_map,uk_constituencies,cljs.core.get.call(null,paths,k),k)], null);
});})(paths,path_keys,location_path_keys,update_path_keys,new_path_keys,remove_path_keys,new_paths))
,update_path_keys));var _ = (function (){var seq__31578 = cljs.core.seq.call(null,remove_path_keys);var chunk__31579 = null;var count__31580 = 0;var i__31581 = 0;while(true){
if((i__31581 < count__31580))
{var k = cljs.core._nth.call(null,chunk__31579,i__31581);clustermap.components.map.remove_path.call(null,leaflet_map,cljs.core.get.call(null,paths,k));
{
var G__31582 = seq__31578;
var G__31583 = chunk__31579;
var G__31584 = count__31580;
var G__31585 = (i__31581 + 1);
seq__31578 = G__31582;
chunk__31579 = G__31583;
count__31580 = G__31584;
i__31581 = G__31585;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31578);if(temp__4092__auto__)
{var seq__31578__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31578__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__31578__$1);{
var G__31586 = cljs.core.chunk_rest.call(null,seq__31578__$1);
var G__31587 = c__4148__auto__;
var G__31588 = cljs.core.count.call(null,c__4148__auto__);
var G__31589 = 0;
seq__31578 = G__31586;
chunk__31579 = G__31587;
count__31580 = G__31588;
i__31581 = G__31589;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__31578__$1);clustermap.components.map.remove_path.call(null,leaflet_map,cljs.core.get.call(null,paths,k));
{
var G__31590 = cljs.core.next.call(null,seq__31578__$1);
var G__31591 = null;
var G__31592 = 0;
var G__31593 = 0;
seq__31578 = G__31590;
chunk__31579 = G__31591;
count__31580 = G__31592;
i__31581 = G__31593;
continue;
}
}
} else
{return null;
}
}
break;
}
})();return cljs.core.reset_BANG_.call(null,paths_atom,cljs.core.merge.call(null,updated_paths,new_paths));
});
clustermap.components.map.pan_to_selection = (function pan_to_selection(leaflet_map,paths){var bounds = (function (){var G__31595 = paths;var G__31595__$1 = (((G__31595 == null))?null:cljs.core.vals.call(null,G__31595));var G__31595__$2 = (((G__31595__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"bounds","bounds",3925666343),G__31595__$1));return G__31595__$2;
})();if(cljs.core.truth_(bounds))
{return cljs.core.apply.call(null,clustermap.components.map.pan_to_show,leaflet_map,bounds);
} else
{return null;
}
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__31596,owner){var map__31606 = p__31596;var map__31606__$1 = ((cljs.core.seq_QMARK_.call(null,map__31606))?cljs.core.apply.call(null,cljs.core.hash_map,map__31606):map__31606);var uk_constituencies = cljs.core.get.call(null,map__31606__$1,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365));var selection_portfolio_company_locations = cljs.core.get.call(null,map__31606__$1,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162));var selection_portfolio_company_sites = cljs.core.get.call(null,map__31606__$1,new cljs.core.Keyword(null,"selection-portfolio-company-sites","selection-portfolio-company-sites",3535568680));var selection = cljs.core.get.call(null,map__31606__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.map.t31607 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t31607 = (function (selection,selection_portfolio_company_sites,selection_portfolio_company_locations,uk_constituencies,map__31606,owner,p__31596,map_component,meta31608){
this.selection = selection;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.selection_portfolio_company_locations = selection_portfolio_company_locations;
this.uk_constituencies = uk_constituencies;
this.map__31606 = map__31606;
this.owner = owner;
this.p__31596 = p__31596;
this.map_component = map_component;
this.meta31608 = meta31608;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t31607.cljs$lang$type = true;
clustermap.components.map.t31607.cljs$lang$ctorStr = "clustermap.components.map/t31607";
clustermap.components.map.t31607.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map/t31607");
});
clustermap.components.map.t31607.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t31607.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,next_props,next_state){var self__ = this;
var this$__$1 = this;var map__31610 = om.core.get_state.call(null,self__.owner);var map__31610__$1 = ((cljs.core.seq_QMARK_.call(null,map__31610))?cljs.core.apply.call(null,cljs.core.hash_map,map__31610):map__31610);var map__31611 = cljs.core.get.call(null,map__31610__$1,new cljs.core.Keyword(null,"map","map",1014012110));var map__31611__$1 = ((cljs.core.seq_QMARK_.call(null,map__31611))?cljs.core.apply.call(null,cljs.core.hash_map,map__31611):map__31611);var paths = cljs.core.get.call(null,map__31611__$1,new cljs.core.Keyword(null,"paths","paths",1120343136));var markers = cljs.core.get.call(null,map__31611__$1,new cljs.core.Keyword(null,"markers","markers",1853155051));var leaflet_map = cljs.core.get.call(null,map__31611__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414));var locations = cljs.core.get.call(null,map__31610__$1,new cljs.core.Keyword(null,"locations","locations",4111682256));var new_locations = (function (){var G__31612 = next_props;var G__31612__$1 = (((G__31612 == null))?null:new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162).cljs$core$IFn$_invoke$arity$1(G__31612));var G__31612__$2 = (((G__31612__$1 == null))?null:cljs.core.deref.call(null,G__31612__$1));return G__31612__$2;
})();if(cljs.core._EQ_.call(null,locations,new_locations))
{return null;
} else
{clustermap.components.map.update_markers.call(null,leaflet_map,markers,locations,new_locations);
clustermap.components.map.update_paths.call(null,leaflet_map,self__.uk_constituencies,paths,locations,new_locations);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"locations","locations",4111682256),new_locations);
return clustermap.components.map.pan_to_selection.call(null,leaflet_map,cljs.core.deref.call(null,paths));
}
});
clustermap.components.map.t31607.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t31607.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1014012110),clustermap.components.map.create_map.call(null,node));
});
clustermap.components.map.t31607.prototype.om$core$IRender$ = true;
clustermap.components.map.t31607.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t31607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31609){var self__ = this;
var _31609__$1 = this;return self__.meta31608;
});
clustermap.components.map.t31607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31609,meta31608__$1){var self__ = this;
var _31609__$1 = this;return (new clustermap.components.map.t31607(self__.selection,self__.selection_portfolio_company_sites,self__.selection_portfolio_company_locations,self__.uk_constituencies,self__.map__31606,self__.owner,self__.p__31596,self__.map_component,meta31608__$1));
});
clustermap.components.map.__GT_t31607 = (function __GT_t31607(selection__$1,selection_portfolio_company_sites__$1,selection_portfolio_company_locations__$1,uk_constituencies__$1,map__31606__$2,owner__$1,p__31596__$1,map_component__$1,meta31608){return (new clustermap.components.map.t31607(selection__$1,selection_portfolio_company_sites__$1,selection_portfolio_company_locations__$1,uk_constituencies__$1,map__31606__$2,owner__$1,p__31596__$1,map_component__$1,meta31608));
});
}
return (new clustermap.components.map.t31607(selection,selection_portfolio_company_sites,selection_portfolio_company_locations,uk_constituencies,map__31606__$1,owner,p__31596,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),clustermap.components.map.map_component,document.getElementById(elem_id));
});
