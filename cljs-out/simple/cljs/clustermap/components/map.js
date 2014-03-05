// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.map');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.boundarylines');
goog.require('clustermap.boundarylines');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.rtree');
goog.require('om.core');
goog.require('clustermap.rtree');
goog.require('hiccups.runtime');
goog.require('hiccups.runtime');
goog.require('clojure.set');
goog.require('om.dom');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('jayq.core');
clustermap.components.map.initial_bounds = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null);
clustermap.components.map.locate_map = (function locate_map(m){return m.fitBounds(cljs.core.clj__GT_js.call(null,clustermap.components.map.initial_bounds),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3441__auto__ = (function (){var G__12304 = config;var G__12304__$1 = (((G__12304 == null))?null:G__12304.components);var G__12304__$2 = (((G__12304__$1 == null))?null:G__12304__$1.map);var G__12304__$3 = (((G__12304__$2 == null))?null:G__12304__$2.api_key);return G__12304__$3;
})();if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": cljs.core.not.call(null,config.repl)});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map.call(null,m);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414),m,new cljs.core.Keyword(null,"markers","markers",1853155051),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"paths","paths",1120343136),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"path-selections","path-selections",512369281),cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY)], null);
});
/**
* return a single LatLngBounds object containing all
* given latlongs
*/
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.last,longlats));var w = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,cljs.core.first,longlats));var n = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.last,longlats));var e = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3429__auto__ = s;if(cljs.core.truth_(and__3429__auto__))
{var and__3429__auto____$1 = w;if(cljs.core.truth_(and__3429__auto____$1))
{var and__3429__auto____$2 = n;if(cljs.core.truth_(and__3429__auto____$2))
{return e;
} else
{return and__3429__auto____$2;
}
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
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
pan_to_show.cljs$lang$applyTo = (function (arglist__12305){
var m = cljs.core.first(arglist__12305);
var all_bounds = cljs.core.rest(arglist__12305);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return [cljs.core.str((function (){var attrs12307 = cljs.core.map.call(null,(function (site){return [cljs.core.str("<li"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",1017115293),path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),site),new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),null], null))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(site))),cljs.core.str("</a>"),cljs.core.str("</li>")].join('');
}),location_sites);if(cljs.core.map_QMARK_.call(null,attrs12307))
{return [cljs.core.str("<ul"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),"map-marker-popup-location-list"], null),attrs12307))),cljs.core.str(">"),cljs.core.str("</ul>")].join('');
} else
{return [cljs.core.str("<ul class=\"map-marker-popup-location-list\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs12307)),cljs.core.str("</ul>")].join('');
}
})())].join('');
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__12310 = location_sites;var G__12310__$1 = (((G__12310 == null))?null:cljs.core.first.call(null,G__12310));var G__12310__$2 = (((G__12310__$1 == null))?null:new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(G__12310__$1));var G__12310__$3 = (((G__12310__$2 == null))?null:cljs.core.reverse.call(null,G__12310__$2));var G__12310__$4 = (((G__12310__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__12310__$3));return G__12310__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var icon = L.divIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",1004015509),"map-marker",new cljs.core.Keyword(null,"iconSize","iconSize",4570914700),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [24,28], null),new cljs.core.Keyword(null,"iconAnchor","iconAnchor",4290568192),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [12,14], null),new cljs.core.Keyword(null,"popupAnchor","popupAnchor",1041293811),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,-8], null)], null)));var marker = L.marker(latlong,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1017130987),icon], null)));var popup_content = clustermap.components.map.marker_popup_content.call(null,path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log([cljs.core.str("missing location: "),cljs.core.str((function (){var sb__4339__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_12311_12312 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__4340__auto__){return sb__4339__auto__.append(x__4340__auto__);
});
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12311_12312;
}return [cljs.core.str(sb__4339__auto__)].join('');
})())].join(''));
}
});
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,marker,location){marker.setPopupContent(clustermap.components.map.marker_popup_content.call(null,path_fn,location));
return marker;
});
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,marker){return leaflet_map.removeLayer(marker);
});
clustermap.components.map.update_markers = (function update_markers(path_fn,leaflet_map,markers_atom,new_locations){var markers = cljs.core.deref.call(null,markers_atom);var marker_keys = cljs.core.set.call(null,cljs.core.keys.call(null,markers));var location_keys = cljs.core.set.call(null,cljs.core.keys.call(null,new_locations));var update_marker_keys = clojure.set.intersection.call(null,marker_keys,location_keys);var new_marker_keys = clojure.set.difference.call(null,location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.call(null,marker_keys,location_keys);var new_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker.call(null,path_fn,leaflet_map,cljs.core.get.call(null,new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker.call(null,path_fn,leaflet_map,cljs.core.get.call(null,markers,k),cljs.core.get.call(null,new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var _ = (function (){var seq__12317 = cljs.core.seq.call(null,remove_marker_keys);var chunk__12318 = null;var count__12319 = 0;var i__12320 = 0;while(true){
if((i__12320 < count__12319))
{var k = cljs.core._nth.call(null,chunk__12318,i__12320);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__12321 = seq__12317;
var G__12322 = chunk__12318;
var G__12323 = count__12319;
var G__12324 = (i__12320 + 1);
seq__12317 = G__12321;
chunk__12318 = G__12322;
count__12319 = G__12323;
i__12320 = G__12324;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12317);if(temp__4092__auto__)
{var seq__12317__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12317__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__12317__$1);{
var G__12325 = cljs.core.chunk_rest.call(null,seq__12317__$1);
var G__12326 = c__4189__auto__;
var G__12327 = cljs.core.count.call(null,c__4189__auto__);
var G__12328 = 0;
seq__12317 = G__12325;
chunk__12318 = G__12326;
count__12319 = G__12327;
i__12320 = G__12328;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__12317__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__12329 = cljs.core.next.call(null,seq__12317__$1);
var G__12330 = null;
var G__12331 = 0;
var G__12332 = 0;
seq__12317 = G__12329;
chunk__12318 = G__12330;
count__12319 = G__12331;
i__12320 = G__12332;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__12341 = cljs.core.js__GT_clj.call(null,envelope);var map__12341__$1 = ((cljs.core.seq_QMARK_.call(null,map__12341))?cljs.core.apply.call(null,cljs.core.hash_map,map__12341):map__12341);var clj_envelope = map__12341__$1;var vec__12342 = cljs.core.get.call(null,map__12341__$1,"coordinates");var vec__12343 = cljs.core.nth.call(null,vec__12342,0,null);var vec__12344 = cljs.core.nth.call(null,vec__12343,0,null);var miny0 = cljs.core.nth.call(null,vec__12344,0,null);var minx0 = cljs.core.nth.call(null,vec__12344,1,null);var vec__12345 = cljs.core.nth.call(null,vec__12343,1,null);var maxy1 = cljs.core.nth.call(null,vec__12345,0,null);var minx1 = cljs.core.nth.call(null,vec__12345,1,null);var vec__12346 = cljs.core.nth.call(null,vec__12343,2,null);var maxy2 = cljs.core.nth.call(null,vec__12346,0,null);var maxx2 = cljs.core.nth.call(null,vec__12346,1,null);var vec__12347 = cljs.core.nth.call(null,vec__12343,3,null);var miny3 = cljs.core.nth.call(null,vec__12347,0,null);var maxx3 = cljs.core.nth.call(null,vec__12347,1,null);var vec__12348 = cljs.core.nth.call(null,vec__12343,4,null);var miny4 = cljs.core.nth.call(null,vec__12348,0,null);var minx4 = cljs.core.nth.call(null,vec__12348,1,null);var inner = vec__12343;var coords = vec__12342;return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
/**
* get the best cached boundaryline, async fetch a better one if required
*/
clustermap.components.map.tolerance_boundaryline = (function tolerance_boundaryline(fetch_boundaryline_fn,index,boundaryline_id,zoom){var default_bl = (cljs.core.truth_(index)?(index[boundaryline_id]):null);var default_tolerance = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);var default$ = (cljs.core.truth_(default_bl)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tolerance,default_bl], null):null);var or__3441__auto__ = fetch_boundaryline_fn.call(null,boundaryline_id,zoom,new cljs.core.Keyword(null,"min-zoom","min-zoom",3894785504),7);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return default$;
}
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__12349){var map__12351 = p__12349;var map__12351__$1 = ((cljs.core.seq_QMARK_.call(null,map__12351))?cljs.core.apply.call(null,cljs.core.hash_map,map__12351):map__12351);var highlighted = cljs.core.get.call(null,map__12351__$1,new cljs.core.Keyword(null,"highlighted","highlighted",3500421061));var selected = cljs.core.get.call(null,map__12351__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));if(cljs.core.truth_((function (){var and__3429__auto__ = selected;if(cljs.core.truth_(and__3429__auto__))
{return highlighted;
} else
{return and__3429__auto__;
}
})()))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1108746965),"#0000aa",new cljs.core.Keyword(null,"weight","weight",4517279210),2,new cljs.core.Keyword(null,"opacity","opacity",4041665405),1,new cljs.core.Keyword(null,"fill","fill",1017047285),true,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",960226426),0.2], null)));
} else
{if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1108746965),"#0000aa",new cljs.core.Keyword(null,"weight","weight",4517279210),2,new cljs.core.Keyword(null,"opacity","opacity",4041665405),1,new cljs.core.Keyword(null,"fill","fill",1017047285),true,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",960226426),0.2], null)));
} else
{if(cljs.core.truth_(highlighted))
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1108746965),"#000000",new cljs.core.Keyword(null,"weight","weight",4517279210),2,new cljs.core.Keyword(null,"opacity","opacity",4041665405),1,new cljs.core.Keyword(null,"fill","fill",1017047285),false], null)));
} else
{if(true)
{return leaflet_path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1108746965),"#ff0000",new cljs.core.Keyword(null,"weight","weight",4517279210),2,new cljs.core.Keyword(null,"opacity","opacity",4041665405),0,new cljs.core.Keyword(null,"fill","fill",1017047285),false,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",960226426),0], null)));
} else
{return null;
}
}
}
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__12352){var map__12354 = p__12352;var map__12354__$1 = ((cljs.core.seq_QMARK_.call(null,map__12354))?cljs.core.apply.call(null,cljs.core.hash_map,map__12354):map__12354);var path_attrs = map__12354__$1;var selected = cljs.core.get.call(null,map__12354__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",(function (e){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",3902864696),boundaryline_id], null)], null));
}));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",1013907597),boundaryline_id,new cljs.core.Keyword(null,"tolerance","tolerance",2046976895),tolerance,new cljs.core.Keyword(null,"selected","selected",2205476365),selected,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",1462260071),leaflet_path,new cljs.core.Keyword(null,"bounds","bounds",3925666343),bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,boundaryline_id,path_attrs){var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline.call(null,fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__12356 = temp__4090__auto__;var tolerance = cljs.core.nth.call(null,vec__12356,0,null);var js_boundaryline = cljs.core.nth.call(null,vec__12356,1,null);return clustermap.components.map.create_path.call(null,comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
} else
{return null;
}
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",1462260071).cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path.call(null,comm,leaflet_map,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,p__12357,path_attrs){var map__12360 = p__12357;var map__12360__$1 = ((cljs.core.seq_QMARK_.call(null,map__12360))?cljs.core.apply.call(null,cljs.core.hash_map,map__12360):map__12360);var path = map__12360__$1;var boundaryline_id = cljs.core.get.call(null,map__12360__$1,new cljs.core.Keyword(null,"id","id",1013907597));var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline.call(null,fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__12361 = temp__4090__auto__;var tolerance = cljs.core.nth.call(null,vec__12361,0,null);var js_boundaryline = cljs.core.nth.call(null,vec__12361,1,null);if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",2046976895).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path.call(null,comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",1462260071).cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
} else
{return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",1462260071).cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,paths_atom,path_selections_atom,new_path_highlights,new_selection_locations){if(cljs.core.truth_(js_boundaryline_index))
{var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487),new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115)),cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,new_selection_locations)))));var live_path_keys = clojure.set.union.call(null,new_selection_path_keys,new_path_highlights);var create_path_keys = clojure.set.difference.call(null,live_path_keys,path_keys);var delete_path_keys = clojure.set.difference.call(null,path_keys,live_path_keys);var update_path_keys = clojure.set.intersection.call(null,path_keys,live_path_keys);var created_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys){
return (function (k){return clustermap.components.map.fetch_create_path.call(null,comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,k,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"highlighted","highlighted",3500421061),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys))
,create_path_keys);var updated_paths = cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths){
return (function (k){return clustermap.components.map.update_path.call(null,comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,cljs.core.get.call(null,paths,k),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core.contains_QMARK_.call(null,new_selection_path_keys,k),new cljs.core.Keyword(null,"highlighted","highlighted",3500421061),cljs.core.contains_QMARK_.call(null,new_path_highlights,k)], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths))
,update_path_keys);var _ = (function (){var seq__12368 = cljs.core.seq.call(null,delete_path_keys);var chunk__12369 = null;var count__12370 = 0;var i__12371 = 0;while(true){
if((i__12371 < count__12370))
{var k = cljs.core._nth.call(null,chunk__12369,i__12371);var temp__4090__auto___12374 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4090__auto___12374))
{var path_12375 = temp__4090__auto___12374;clustermap.components.map.delete_path.call(null,leaflet_map,path_12375);
} else
{}
{
var G__12376 = seq__12368;
var G__12377 = chunk__12369;
var G__12378 = count__12370;
var G__12379 = (i__12371 + 1);
seq__12368 = G__12376;
chunk__12369 = G__12377;
count__12370 = G__12378;
i__12371 = G__12379;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12368);if(temp__4092__auto__)
{var seq__12368__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12368__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__12368__$1);{
var G__12380 = cljs.core.chunk_rest.call(null,seq__12368__$1);
var G__12381 = c__4189__auto__;
var G__12382 = cljs.core.count.call(null,c__4189__auto__);
var G__12383 = 0;
seq__12368 = G__12380;
chunk__12369 = G__12381;
count__12370 = G__12382;
i__12371 = G__12383;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__12368__$1);var temp__4090__auto___12384 = cljs.core.get.call(null,paths,k);if(cljs.core.truth_(temp__4090__auto___12384))
{var path_12385 = temp__4090__auto___12384;clustermap.components.map.delete_path.call(null,leaflet_map,path_12385);
} else
{}
{
var G__12386 = cljs.core.next.call(null,seq__12368__$1);
var G__12387 = null;
var G__12388 = 0;
var G__12389 = 0;
seq__12368 = G__12386;
chunk__12369 = G__12387;
count__12370 = G__12388;
i__12371 = G__12389;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths,updated_paths,_){
return (function (m,p__12372){var map__12373 = p__12372;var map__12373__$1 = ((cljs.core.seq_QMARK_.call(null,map__12373))?cljs.core.apply.call(null,cljs.core.hash_map,map__12373):map__12373);var path = map__12373__$1;var id = cljs.core.get.call(null,map__12373__$1,new cljs.core.Keyword(null,"id","id",1013907597));return cljs.core.assoc.call(null,m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,live_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths,updated_paths,_))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.concat.call(null,created_paths,updated_paths)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
return cljs.core.reset_BANG_.call(null,paths_atom,new_paths);
} else
{return null;
}
});
clustermap.components.map.pan_to_selection = (function pan_to_selection(owner,leaflet_map,paths_atom,path_selections_atom){var paths = cljs.core.deref.call(null,paths_atom);var path_selections = cljs.core.deref.call(null,path_selections_atom);if(cljs.core.empty_QMARK_.call(null,path_selections))
{return clustermap.components.map.locate_map.call(null,leaflet_map);
} else
{if(cljs.core.empty_QMARK_.call(null,paths))
{return om.core.set_state.call(null,owner,new cljs.core.Keyword(null,"pan-pending","pan-pending",3214812121),true);
} else
{if(cljs.core.truth_(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"pan-pending","pan-pending",3214812121))))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"pan-pending","pan-pending",3214812121),false);
} else
{}
var temp__4090__auto__ = (function (){var G__12391 = cljs.core.select_keys.call(null,paths,path_selections);var G__12391__$1 = (((G__12391 == null))?null:cljs.core.vals.call(null,G__12391));var G__12391__$2 = (((G__12391__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"bounds","bounds",3925666343),G__12391__$1));var G__12391__$3 = (((G__12391__$2 == null))?null:cljs.core.not_empty.call(null,G__12391__$2));return G__12391__$3;
})();if(cljs.core.truth_(temp__4090__auto__))
{var bounds = temp__4090__auto__;return cljs.core.apply.call(null,clustermap.components.map.pan_to_show,leaflet_map,bounds);
} else
{return clustermap.components.map.pan_to_show.call(null,clustermap.components.map.initial_bounds);
}
}
}
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__12392,owner){var map__12412 = p__12392;var map__12412__$1 = ((cljs.core.seq_QMARK_.call(null,map__12412))?cljs.core.apply.call(null,cljs.core.hash_map,map__12412):map__12412);var app_state = map__12412__$1;var selection = cljs.core.get.call(null,map__12412__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.map.t12413 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t12413 = (function (selection,app_state,map__12412,owner,p__12392,map_component,meta12414){
this.selection = selection;
this.app_state = app_state;
this.map__12412 = map__12412;
this.owner = owner;
this.p__12392 = p__12392;
this.map_component = map_component;
this.meta12414 = meta12414;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t12413.cljs$lang$type = true;
clustermap.components.map.t12413.cljs$lang$ctorStr = "clustermap.components.map/t12413";
clustermap.components.map.t12413.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.map/t12413");
});
clustermap.components.map.t12413.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t12413.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,p__12416,p__12417){var self__ = this;
var map__12418 = p__12416;var map__12418__$1 = ((cljs.core.seq_QMARK_.call(null,map__12418))?cljs.core.apply.call(null,cljs.core.hash_map,map__12418):map__12418);var next_selection = cljs.core.get.call(null,map__12418__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var next_locations = cljs.core.get.call(null,map__12418__$1,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162));var next_uk_constituencies = cljs.core.get.call(null,map__12418__$1,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365));var next_uk_constituencies_rtree = cljs.core.get.call(null,map__12418__$1,new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",3542903600));var next_boundarylines = cljs.core.get.call(null,map__12418__$1,new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847));var next_zoom = cljs.core.get.call(null,map__12418__$1,new cljs.core.Keyword(null,"zoom","zoom",1017648965));var map__12419 = p__12417;var map__12419__$1 = ((cljs.core.seq_QMARK_.call(null,map__12419))?cljs.core.apply.call(null,cljs.core.hash_map,map__12419):map__12419);var next_path_highlights = cljs.core.get.call(null,map__12419__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",2524998745));var this$__$1 = this;var map__12420 = om.core.get_props.call(null,self__.owner);var map__12420__$1 = ((cljs.core.seq_QMARK_.call(null,map__12420))?cljs.core.apply.call(null,cljs.core.hash_map,map__12420):map__12420);var uk_constituencies_rtree = cljs.core.get.call(null,map__12420__$1,new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",3542903600));var map__12421 = om.core.get_shared.call(null,self__.owner);var map__12421__$1 = ((cljs.core.seq_QMARK_.call(null,map__12421))?cljs.core.apply.call(null,cljs.core.hash_map,map__12421):map__12421);var path_fn = cljs.core.get.call(null,map__12421__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__12421__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var fetch_boundaryline_fn = cljs.core.get.call(null,map__12421__$1,new cljs.core.Keyword(null,"fetch-boundaryline-fn","fetch-boundaryline-fn",3464186934));var comm = cljs.core.get.call(null,map__12421__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__12422 = om.core.get_state.call(null,self__.owner);var map__12422__$1 = ((cljs.core.seq_QMARK_.call(null,map__12422))?cljs.core.apply.call(null,cljs.core.hash_map,map__12422):map__12422);var map__12423 = cljs.core.get.call(null,map__12422__$1,new cljs.core.Keyword(null,"map","map",1014012110));var map__12423__$1 = ((cljs.core.seq_QMARK_.call(null,map__12423))?cljs.core.apply.call(null,cljs.core.hash_map,map__12423):map__12423);var path_selections = cljs.core.get.call(null,map__12423__$1,new cljs.core.Keyword(null,"path-selections","path-selections",512369281));var paths = cljs.core.get.call(null,map__12423__$1,new cljs.core.Keyword(null,"paths","paths",1120343136));var markers = cljs.core.get.call(null,map__12423__$1,new cljs.core.Keyword(null,"markers","markers",1853155051));var leaflet_map = cljs.core.get.call(null,map__12423__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414));var pan_pending = cljs.core.get.call(null,map__12422__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",3214812121));var path_highlights = cljs.core.get.call(null,map__12422__$1,new cljs.core.Keyword(null,"path-highlights","path-highlights",2524998745));var mousemove_listener = cljs.core.get.call(null,map__12422__$1,new cljs.core.Keyword(null,"mousemove-listener","mousemove-listener",3228037661));var click_listener = cljs.core.get.call(null,map__12422__$1,new cljs.core.Keyword(null,"click-listener","click-listener",1807691467));clustermap.components.map.update_markers.call(null,path_fn,leaflet_map,markers,next_locations);
if(cljs.core.not_EQ_.call(null,next_uk_constituencies_rtree,uk_constituencies_rtree))
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mousemove-listener","mousemove-listener",3228037661),(function (e){var lat = e.latlng.lat;var lng = e.latlng.lng;var hits = clustermap.rtree.point_in_polygons.call(null,next_uk_constituencies_rtree,lng,lat);var hit_path_ids = cljs.core.map.call(null,((function (lat,lng,hits){
return (function (hit){return hit.properties.id;
});})(lat,lng,hits))
,hits);var highlight_hit = cljs.core.first.call(null,hits);var highlight_path_ids = cljs.core.set.call(null,cljs.core.take.call(null,1,hit_path_ids));var old_path_highlights = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",2524998745));if(cljs.core.truth_((function (){var and__3429__auto__ = highlight_hit;if(cljs.core.truth_(and__3429__auto__))
{return cljs.core.not_EQ_.call(null,old_path_highlights,highlight_path_ids);
} else
{return and__3429__auto__;
}
})()))
{var G__12424_12431 = L.popup();G__12424_12431.setLatLng(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lng], null)));
G__12424_12431.setContent([cljs.core.str("<p>"),cljs.core.str((function (){var G__12425 = highlight_hit;var G__12425__$1 = (((G__12425 == null))?null:G__12425.properties);var G__12425__$2 = (((G__12425__$1 == null))?null:G__12425__$1.compact_name);return G__12425__$2;
})()),cljs.core.str("</p>")].join(''));
G__12424_12431.openOn(leaflet_map);
} else
{}
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",2524998745),highlight_path_ids);
}));
if(cljs.core.truth_(mousemove_listener))
{leaflet_map.off("mousemove",mousemove_listener);
} else
{}
leaflet_map.on("mousemove",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mousemove-listener","mousemove-listener",3228037661)));
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"click-listener","click-listener",1807691467),(function (e){var hits = clustermap.rtree.point_in_polygons.call(null,next_uk_constituencies_rtree,e.latlng.lng,e.latlng.lat);var hit_path_ids = cljs.core.map.call(null,((function (hits){
return (function (hit){return hit.properties.id;
});})(hits))
,hits);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",3902864696),cljs.core.first.call(null,hit_path_ids)], null)], null));
}));
if(cljs.core.truth_(click_listener))
{leaflet_map.off("click",click_listener);
} else
{}
leaflet_map.on("click",om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"click-listener","click-listener",1807691467)));
} else
{}
if(cljs.core.truth_(next_uk_constituencies))
{clustermap.components.map.update_paths.call(null,comm,fetch_boundaryline_fn,next_uk_constituencies,leaflet_map,paths,path_selections,next_path_highlights,next_locations);
} else
{}
if(cljs.core.truth_((function (){var or__3441__auto__ = pan_pending;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.not_EQ_.call(null,next_selection,self__.selection);
}
})()))
{return clustermap.components.map.pan_to_selection.call(null,self__.owner,leaflet_map,paths,path_selections);
} else
{return null;
}
});
clustermap.components.map.t12413.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t12413.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);var map__12426 = clustermap.components.map.create_map.call(null,node);var map__12426__$1 = ((cljs.core.seq_QMARK_.call(null,map__12426))?cljs.core.apply.call(null,cljs.core.hash_map,map__12426):map__12426);var map = map__12426__$1;var path = cljs.core.get.call(null,map__12426__$1,new cljs.core.Keyword(null,"path","path",1017337751));var markers = cljs.core.get.call(null,map__12426__$1,new cljs.core.Keyword(null,"markers","markers",1853155051));var leaflet_map = cljs.core.get.call(null,map__12426__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1014012110),map);
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"path-highlights","path-highlights",2524998745),cljs.core.PersistentHashSet.EMPTY);
leaflet_map.on("zoomend",(function (e){return cljs.core.swap_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"app-state","app-state",1424976215)),cljs.core.assoc,new cljs.core.Keyword(null,"zoom","zoom",1017648965),leaflet_map.getZoom());
}));
jayq.core.$.call(null,document).on("clustermap-change-view",(function (e){var map__12427 = om.core.get_state.call(null,self__.owner);var map__12427__$1 = ((cljs.core.seq_QMARK_.call(null,map__12427))?cljs.core.apply.call(null,cljs.core.hash_map,map__12427):map__12427);var map__12428 = cljs.core.get.call(null,map__12427__$1,new cljs.core.Keyword(null,"map","map",1014012110));var map__12428__$1 = ((cljs.core.seq_QMARK_.call(null,map__12428))?cljs.core.apply.call(null,cljs.core.hash_map,map__12428):map__12428);var path_selections = cljs.core.get.call(null,map__12428__$1,new cljs.core.Keyword(null,"path-selections","path-selections",512369281));var paths = cljs.core.get.call(null,map__12428__$1,new cljs.core.Keyword(null,"paths","paths",1120343136));leaflet_map.invalidateSize();
return clustermap.components.map.pan_to_selection.call(null,self__.owner,leaflet_map,paths,path_selections);
}));
return om.core.update_BANG_.call(null,self__.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"zoom","zoom",1017648965),leaflet_map.getZoom());
});
clustermap.components.map.t12413.prototype.om$core$IRender$ = true;
clustermap.components.map.t12413.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t12413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12415){var self__ = this;
var _12415__$1 = this;return self__.meta12414;
});
clustermap.components.map.t12413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12415,meta12414__$1){var self__ = this;
var _12415__$1 = this;return (new clustermap.components.map.t12413(self__.selection,self__.app_state,self__.map__12412,self__.owner,self__.p__12392,self__.map_component,meta12414__$1));
});
clustermap.components.map.__GT_t12413 = (function __GT_t12413(selection__$1,app_state__$1,map__12412__$2,owner__$1,p__12392__$1,map_component__$1,meta12414){return (new clustermap.components.map.t12413(selection__$1,app_state__$1,map__12412__$2,owner__$1,p__12392__$1,map_component__$1,meta12414));
});
}
return (new clustermap.components.map.t12413(selection,app_state,map__12412__$1,owner,p__12392,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map.map_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),cljs.core.merge.call(null,shared,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app-state","app-state",1424976215),app_state,new cljs.core.Keyword(null,"fetch-boundaryline-fn","fetch-boundaryline-fn",3464186934),cljs.core.partial.call(null,clustermap.boundarylines.get_or_fetch_best_boundaryline,app_state,new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847))], null)),new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
