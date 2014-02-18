// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.map');
goog.require('cljs.core');
goog.require('sablono.core');
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
clustermap.components.map.locate_map = (function locate_map(m){return m.fitBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null)),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3406__auto__ = (function (){var G__22545 = config;var G__22545__$1 = (((G__22545 == null))?null:G__22545.components);var G__22545__$2 = (((G__22545__$1 == null))?null:G__22545__$1.map);var G__22545__$3 = (((G__22545__$2 == null))?null:G__22545__$2.api_key);return G__22545__$3;
})();if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": true});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map(m);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$408,m,cljs.core.constant$keyword$409,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$410,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.constant$keyword$411,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),cljs.core.constant$keyword$412,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)], null);
});
/**
* return a single LatLngBounds object containing all
* given latlongs
*/
clustermap.components.map.geojson_point_bounds = (function geojson_point_bounds(longlats){var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var w = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,longlats));var e = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,longlats));if(cljs.core.truth_((function (){var and__3394__auto__ = s;if(cljs.core.truth_(and__3394__auto__))
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
{return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,w], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,e], null)], null)));
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
clustermap.components.map.pan_to_show = (function() { 
var pan_to_show__delegate = function (m,all_bounds){if(cljs.core.truth_(cljs.core.not_empty(all_bounds)))
{var fb = cljs.core.first(all_bounds);var fb_copy = (new L.LatLngBounds(fb.getSouthWest(),fb.getNorthEast()));var super_bounds = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fb,fb_copy){
return (function (sb,bounds){return sb.extend(bounds);
});})(fb,fb_copy))
,fb_copy,cljs.core.rest(all_bounds));return m.fitBounds(super_bounds);
} else
{return null;
}
};
var pan_to_show = function (m,var_args){
var all_bounds = null;if (arguments.length > 1) {
  all_bounds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return pan_to_show__delegate.call(this,m,all_bounds);};
pan_to_show.cljs$lang$maxFixedArity = 1;
pan_to_show.cljs$lang$applyTo = (function (arglist__22546){
var m = cljs.core.first(arglist__22546);
var all_bounds = cljs.core.rest(arglist__22546);
return pan_to_show__delegate(m,all_bounds);
});
pan_to_show.cljs$core$IFn$_invoke$arity$variadic = pan_to_show__delegate;
return pan_to_show;
})()
;
clustermap.components.map.display_site = (function display_site(m,site){var location = cljs.core.clj__GT_js(cljs.core.reverse((site["location"])));var options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$363,[cljs.core.str((site["name"])),cljs.core.str(", "),cljs.core.str((site["postcode"])),cljs.core.str(", "),cljs.core.str((site["company_no"]))].join('')], null));var marker = L.marker(location,options);return marker.addTo(m);
});
clustermap.components.map.display_sites = (function display_sites(m,sites){return (function (c){return (casync.dorun_async.cljs$core$IFn$_invoke$arity$3 ? casync.dorun_async.cljs$core$IFn$_invoke$arity$3(c,cljs.core.constant$keyword$413,null) : casync.dorun_async.call(null,c,cljs.core.constant$keyword$413,null));
}).call(null,(casync.map_async.cljs$core$IFn$_invoke$arity$2 ? casync.map_async.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites) : casync.map_async.call(null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.map.display_site,m),sites)));
});
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return [cljs.core.str((function (){var attrs22548 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (site){return [cljs.core.str("<div"),cljs.core.str(" class=\"map-marker-popup-location-list\""),cljs.core.str(">"),cljs.core.str("<li"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$271,(path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$303,site) : path_fn.call(null,cljs.core.constant$keyword$303,site)),cljs.core.constant$keyword$266,null,cljs.core.constant$keyword$260,null], null))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html(cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(site))),cljs.core.str("</a>"),cljs.core.str("</li>"),cljs.core.str("</div>")].join('');
}),location_sites);if(cljs.core.map_QMARK_(attrs22548))
{return [cljs.core.str("<ul"),cljs.core.str(hiccups.runtime.render_attr_map(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$266,null,cljs.core.constant$keyword$260,null], null),attrs22548], 0)))),cljs.core.str(">"),cljs.core.str("</ul>")].join('');
} else
{return [cljs.core.str("<ul>"),cljs.core.str(hiccups.runtime.render_html(attrs22548)),cljs.core.str("</ul>")].join('');
}
})())].join('');
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__22551 = location_sites;var G__22551__$1 = (((G__22551 == null))?null:cljs.core.first(G__22551));var G__22551__$2 = (((G__22551__$1 == null))?null:cljs.core.constant$keyword$414.cljs$core$IFn$_invoke$arity$1(G__22551__$1));var G__22551__$3 = (((G__22551__$2 == null))?null:cljs.core.reverse(G__22551__$2));var G__22551__$4 = (((G__22551__$3 == null))?null:cljs.core.clj__GT_js(G__22551__$3));return G__22551__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var marker = L.marker(latlong);var popup_content = clustermap.components.map.marker_popup_content(path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log([cljs.core.str("missing location: "),cljs.core.str((function (){var sb__4298__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_22552_22553 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__4299__auto__){return sb__4298__auto__.append(x__4299__auto__);
});
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([location_sites], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22552_22553;
}return [cljs.core.str(sb__4298__auto__)].join('');
})())].join(''));
}
});
clustermap.components.map.update_marker = (function update_marker(path_fn,leaflet_map,marker,location){marker.setPopupContent(clustermap.components.map.marker_popup_content(path_fn,location));
return marker;
});
clustermap.components.map.remove_marker = (function remove_marker(leaflet_map,marker){return leaflet_map.removeLayer(marker);
});
clustermap.components.map.update_markers = (function update_markers(path_fn,leaflet_map,markers_atom,new_locations){var markers = cljs.core.deref(markers_atom);var marker_keys = cljs.core.set(cljs.core.keys(markers));var location_keys = cljs.core.set(cljs.core.keys(new_locations));var update_marker_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(location_keys,marker_keys);var remove_marker_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(marker_keys,location_keys);var new_markers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.create_marker(path_fn,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys))
,new_marker_keys));var updated_markers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_marker(path_fn,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_locations,k))], null);
});})(markers,marker_keys,location_keys,update_marker_keys,new_marker_keys,remove_marker_keys,new_markers))
,update_marker_keys));var _ = (function (){var seq__22558 = cljs.core.seq(remove_marker_keys);var chunk__22559 = null;var count__22560 = 0;var i__22561 = 0;while(true){
if((i__22561 < count__22560))
{var k = chunk__22559.cljs$core$IIndexed$_nth$arity$2(null,i__22561);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__22562 = seq__22558;
var G__22563 = chunk__22559;
var G__22564 = count__22560;
var G__22565 = (i__22561 + 1);
seq__22558 = G__22562;
chunk__22559 = G__22563;
count__22560 = G__22564;
i__22561 = G__22565;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22558);if(temp__4092__auto__)
{var seq__22558__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22558__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22558__$1);{
var G__22566 = cljs.core.chunk_rest(seq__22558__$1);
var G__22567 = c__4148__auto__;
var G__22568 = cljs.core.count(c__4148__auto__);
var G__22569 = 0;
seq__22558 = G__22566;
chunk__22559 = G__22567;
count__22560 = G__22568;
i__22561 = G__22569;
continue;
}
} else
{var k = cljs.core.first(seq__22558__$1);clustermap.components.map.remove_marker(leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(markers,k));
{
var G__22570 = cljs.core.next(seq__22558__$1);
var G__22571 = null;
var G__22572 = 0;
var G__22573 = 0;
seq__22558 = G__22570;
chunk__22559 = G__22571;
count__22560 = G__22572;
i__22561 = G__22573;
continue;
}
}
} else
{return null;
}
}
break;
}
})();return cljs.core.reset_BANG_(markers_atom,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([updated_markers,new_markers], 0)));
});
/**
* turns a PostGIS envelope into a L.LatLngBounds
*/
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__22582 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(envelope);var map__22582__$1 = ((cljs.core.seq_QMARK_(map__22582))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22582):map__22582);var clj_envelope = map__22582__$1;var vec__22583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22582__$1,"coordinates");var vec__22584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22583,0,null);var vec__22585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22584,0,null);var miny0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22585,0,null);var minx0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22585,1,null);var vec__22586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22584,1,null);var maxy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22586,0,null);var minx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22586,1,null);var vec__22587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22584,2,null);var maxy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22587,0,null);var maxx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22587,1,null);var vec__22588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22584,3,null);var miny3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22588,0,null);var maxx3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22588,1,null);var vec__22589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22584,4,null);var miny4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22589,0,null);var minx4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22589,1,null);var inner = vec__22584;var coords = vec__22583;return L.latLngBounds(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
/**
* get the best cached boundaryline, async fetch a better one if required
*/
clustermap.components.map.tolerance_boundaryline = (function tolerance_boundaryline(fetch_boundaryline_fn,index,boundaryline_id,zoom){var default_bl = (cljs.core.truth_(index)?(index[boundaryline_id]):null);var default_tolerance = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);var default$ = (cljs.core.truth_(default_bl)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tolerance,default_bl], null):null);var or__3406__auto__ = (fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4 ? fetch_boundaryline_fn.cljs$core$IFn$_invoke$arity$4(boundaryline_id,zoom,cljs.core.constant$keyword$259,7) : fetch_boundaryline_fn.call(null,boundaryline_id,zoom,cljs.core.constant$keyword$259,7));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return default$;
}
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(leaflet_path,p__22590){var map__22592 = p__22590;var map__22592__$1 = ((cljs.core.seq_QMARK_(map__22592))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22592):map__22592);var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22592__$1,cljs.core.constant$keyword$285);if(cljs.core.truth_(selected))
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$415,"#0000ff",cljs.core.constant$keyword$416,3,cljs.core.constant$keyword$417,1,cljs.core.constant$keyword$418,0.3], null)));
} else
{return leaflet_path.setStyle(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$415,"#ff0000",cljs.core.constant$keyword$416,3,cljs.core.constant$keyword$417,0,cljs.core.constant$keyword$418,0], null)));
}
});
clustermap.components.map.create_path = (function create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,p__22593){var map__22595 = p__22593;var map__22595__$1 = ((cljs.core.seq_QMARK_(map__22595))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22595):map__22595);var path_attrs = map__22595__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22595__$1,cljs.core.constant$keyword$285);var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds((js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path(leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",(function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$286,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$305,boundaryline_id], null)], null));
}));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$266,boundaryline_id,cljs.core.constant$keyword$419,tolerance,cljs.core.constant$keyword$285,selected,cljs.core.constant$keyword$420,leaflet_path,cljs.core.constant$keyword$421,bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.fetch_create_path = (function fetch_create_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,boundaryline_id,path_attrs){var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline(fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__22597 = temp__4090__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22597,0,null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22597,1,null);return clustermap.components.map.create_path(comm,leaflet_map,boundaryline_id,js_boundaryline,path_attrs);
} else
{return null;
}
});
clustermap.components.map.replace_path = (function replace_path(comm,leaflet_map,boundaryline_id,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(cljs.core.constant$keyword$420.cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_path(comm,leaflet_map,cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(old_path),js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,p__22598,path_attrs){var map__22601 = p__22598;var map__22601__$1 = ((cljs.core.seq_QMARK_(map__22601))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22601):map__22601);var path = map__22601__$1;var boundaryline_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22601__$1,cljs.core.constant$keyword$266);var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline(fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__22602 = temp__4090__auto__;var tolerance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22602,0,null);var js_boundaryline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22602,1,null);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tolerance,cljs.core.constant$keyword$419.cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_path(comm,leaflet_map,boundaryline_id,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path(cljs.core.constant$keyword$420.cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
} else
{return path;
}
});
clustermap.components.map.delete_path = (function delete_path(leaflet_map,path){return leaflet_map.removeLayer(cljs.core.constant$keyword$420.cljs$core$IFn$_invoke$arity$1(path));
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,paths_atom,path_selections_atom,new_selection_locations){if(cljs.core.truth_(js_boundaryline_index))
{var paths = cljs.core.deref(paths_atom);var path_keys = cljs.core.set(cljs.core.keys(paths));var old_selection_path_keys = cljs.core.deref(path_selections_atom);var new_selection_path_keys = cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$422,cljs.core.constant$keyword$423),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals(new_selection_locations)))));var create_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new_selection_path_keys,path_keys);var delete_path_keys = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(path_keys,new_selection_path_keys);var update_path_keys = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(path_keys,new_selection_path_keys);var created_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,create_path_keys,delete_path_keys,update_path_keys){
return (function (k){return clustermap.components.map.fetch_create_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,k,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$285,true], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,create_path_keys,delete_path_keys,update_path_keys))
,create_path_keys);var updated_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths){
return (function (k){return clustermap.components.map.update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$285,true], null));
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths))
,update_path_keys);var _ = (function (){var seq__22609 = cljs.core.seq(delete_path_keys);var chunk__22610 = null;var count__22611 = 0;var i__22612 = 0;while(true){
if((i__22612 < count__22611))
{var k = chunk__22610.cljs$core$IIndexed$_nth$arity$2(null,i__22612);var temp__4090__auto___22615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4090__auto___22615))
{var path_22616 = temp__4090__auto___22615;clustermap.components.map.delete_path(leaflet_map,path_22616);
} else
{}
{
var G__22617 = seq__22609;
var G__22618 = chunk__22610;
var G__22619 = count__22611;
var G__22620 = (i__22612 + 1);
seq__22609 = G__22617;
chunk__22610 = G__22618;
count__22611 = G__22619;
i__22612 = G__22620;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__22609);if(temp__4092__auto__)
{var seq__22609__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__22609__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__22609__$1);{
var G__22621 = cljs.core.chunk_rest(seq__22609__$1);
var G__22622 = c__4148__auto__;
var G__22623 = cljs.core.count(c__4148__auto__);
var G__22624 = 0;
seq__22609 = G__22621;
chunk__22610 = G__22622;
count__22611 = G__22623;
i__22612 = G__22624;
continue;
}
} else
{var k = cljs.core.first(seq__22609__$1);var temp__4090__auto___22625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,k);if(cljs.core.truth_(temp__4090__auto___22625))
{var path_22626 = temp__4090__auto___22625;clustermap.components.map.delete_path(leaflet_map,path_22626);
} else
{}
{
var G__22627 = cljs.core.next(seq__22609__$1);
var G__22628 = null;
var G__22629 = 0;
var G__22630 = 0;
seq__22609 = G__22627;
chunk__22610 = G__22628;
count__22611 = G__22629;
i__22612 = G__22630;
continue;
}
}
} else
{return null;
}
}
break;
}
})();var new_paths = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths,updated_paths,_){
return (function (m,p__22613){var map__22614 = p__22613;var map__22614__$1 = ((cljs.core.seq_QMARK_(map__22614))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22614):map__22614);var path = map__22614__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22614__$1,cljs.core.constant$keyword$266);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,id,path);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,create_path_keys,delete_path_keys,update_path_keys,created_paths,updated_paths,_))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(created_paths,updated_paths)));cljs.core.reset_BANG_(path_selections_atom,new_selection_path_keys);
return cljs.core.reset_BANG_(paths_atom,new_paths);
} else
{return null;
}
});
clustermap.components.map.pan_to_selection = (function pan_to_selection(owner,leaflet_map,paths_atom,path_selections_atom){var paths = cljs.core.deref(paths_atom);var path_selections = cljs.core.deref(path_selections_atom);if(cljs.core.empty_QMARK_(paths))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$424,true);
} else
{om.core.set_state_BANG_(owner,cljs.core.constant$keyword$424,false);
var temp__4092__auto__ = (function (){var G__22632 = cljs.core.select_keys(paths,path_selections);var G__22632__$1 = (((G__22632 == null))?null:cljs.core.vals(G__22632));var G__22632__$2 = (((G__22632__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$421,G__22632__$1));return G__22632__$2;
})();if(cljs.core.truth_(temp__4092__auto__))
{var bounds = temp__4092__auto__;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clustermap.components.map.pan_to_show,leaflet_map,bounds);
} else
{return null;
}
}
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__22633,owner){var map__22649 = p__22633;var map__22649__$1 = ((cljs.core.seq_QMARK_(map__22649))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22649):map__22649);var app_state = map__22649__$1;var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22649__$1,cljs.core.constant$keyword$309);if(typeof clustermap.components.map.t22650 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t22650 = (function (selection,app_state,map__22649,owner,p__22633,map_component,meta22651){
this.selection = selection;
this.app_state = app_state;
this.map__22649 = map__22649;
this.owner = owner;
this.p__22633 = p__22633;
this.map_component = map_component;
this.meta22651 = meta22651;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t22650.cljs$lang$type = true;
clustermap.components.map.t22650.cljs$lang$ctorStr = "clustermap.components.map/t22650";
clustermap.components.map.t22650.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map/t22650");
});
clustermap.components.map.t22650.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t22650.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,p__22653,next_state){var self__ = this;
var map__22654 = p__22653;var map__22654__$1 = ((cljs.core.seq_QMARK_(map__22654))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22654):map__22654);var next_selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22654__$1,cljs.core.constant$keyword$309);var next_locations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22654__$1,cljs.core.constant$keyword$425);var next_uk_constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22654__$1,cljs.core.constant$keyword$426);var next_uk_constituencies_rtree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22654__$1,cljs.core.constant$keyword$427);var next_boundarylines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22654__$1,cljs.core.constant$keyword$314);var next_zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22654__$1,cljs.core.constant$keyword$428);var this$__$1 = this;var map__22655 = om.core.get_props(self__.owner);var map__22655__$1 = ((cljs.core.seq_QMARK_(map__22655))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22655):map__22655);var uk_constituencies_rtree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22655__$1,cljs.core.constant$keyword$427);var map__22656 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__22656__$1 = ((cljs.core.seq_QMARK_(map__22656))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22656):map__22656);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22656__$1,cljs.core.constant$keyword$310);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22656__$1,cljs.core.constant$keyword$311);var fetch_boundaryline_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22656__$1,cljs.core.constant$keyword$429);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22656__$1,cljs.core.constant$keyword$306);var map__22657 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__22657__$1 = ((cljs.core.seq_QMARK_(map__22657))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22657):map__22657);var map__22658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22657__$1,cljs.core.constant$keyword$430);var map__22658__$1 = ((cljs.core.seq_QMARK_(map__22658))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22658):map__22658);var path_highlights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22658__$1,cljs.core.constant$keyword$412);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22658__$1,cljs.core.constant$keyword$411);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22658__$1,cljs.core.constant$keyword$410);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22658__$1,cljs.core.constant$keyword$409);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22658__$1,cljs.core.constant$keyword$408);var pan_pending = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22657__$1,cljs.core.constant$keyword$424);clustermap.components.map.update_markers(path_fn,leaflet_map,markers,next_locations);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_uk_constituencies_rtree,uk_constituencies_rtree))
{leaflet_map.on("mousemove",(function (e){var hits = clustermap.rtree.point_in_polygons(next_uk_constituencies_rtree,e.latlng.lng,e.latlng.lat);var hit_path_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hits){
return (function (hit){return hit.properties.id;
});})(hits))
,hits);return console.log(cljs.core.clj__GT_js(hit_path_ids));
}));
leaflet_map.on("click",(function (e){var hits = clustermap.rtree.point_in_polygons(next_uk_constituencies_rtree,e.latlng.lng,e.latlng.lat);var hit_path_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hits){
return (function (hit){return hit.properties.id;
});})(hits))
,hits);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$286,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$305,cljs.core.first(hit_path_ids)], null)], null));
}));
} else
{}
if(cljs.core.truth_(next_uk_constituencies))
{clustermap.components.map.update_paths(comm,fetch_boundaryline_fn,next_uk_constituencies,leaflet_map,paths,path_selections,next_locations);
} else
{}
if(cljs.core.truth_((function (){var or__3406__auto__ = pan_pending;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_selection,self__.selection);
}
})()))
{return clustermap.components.map.pan_to_selection(self__.owner,leaflet_map,paths,path_selections);
} else
{return null;
}
});
clustermap.components.map.t22650.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t22650.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;var map__22659 = clustermap.components.map.create_map(node);var map__22659__$1 = ((cljs.core.seq_QMARK_(map__22659))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22659):map__22659);var map = map__22659__$1;var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22659__$1,cljs.core.constant$keyword$431);var markers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22659__$1,cljs.core.constant$keyword$409);var leaflet_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22659__$1,cljs.core.constant$keyword$408);om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$430,map);
leaflet_map.on("zoomend",(function (e){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_shared.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$432),cljs.core.assoc,cljs.core.constant$keyword$428,leaflet_map.getZoom());
}));
jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",(function (e){console.log("change-view");
var map__22660 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__22660__$1 = ((cljs.core.seq_QMARK_(map__22660))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22660):map__22660);var map__22661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22660__$1,cljs.core.constant$keyword$430);var map__22661__$1 = ((cljs.core.seq_QMARK_(map__22661))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22661):map__22661);var path_selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22661__$1,cljs.core.constant$keyword$411);var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22661__$1,cljs.core.constant$keyword$410);leaflet_map.invalidateSize();
return clustermap.components.map.pan_to_selection(self__.owner,leaflet_map,paths,path_selections);
}));
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4(self__.app_state,cljs.core.assoc,cljs.core.constant$keyword$428,leaflet_map.getZoom());
});
clustermap.components.map.t22650.prototype.om$core$IRender$ = true;
clustermap.components.map.t22650.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t22650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22652){var self__ = this;
var _22652__$1 = this;return self__.meta22651;
});
clustermap.components.map.t22650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22652,meta22651__$1){var self__ = this;
var _22652__$1 = this;return (new clustermap.components.map.t22650(self__.selection,self__.app_state,self__.map__22649,self__.owner,self__.p__22633,self__.map_component,meta22651__$1));
});
clustermap.components.map.__GT_t22650 = (function __GT_t22650(selection__$1,app_state__$1,map__22649__$2,owner__$1,p__22633__$1,map_component__$1,meta22651){return (new clustermap.components.map.t22650(selection__$1,app_state__$1,map__22649__$2,owner__$1,p__22633__$1,map_component__$1,meta22651));
});
}
return (new clustermap.components.map.t22650(selection,app_state,map__22649__$1,owner,p__22633,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([shared,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$432,app_state,cljs.core.constant$keyword$429,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clustermap.boundarylines.get_or_fetch_best_boundaryline,app_state,cljs.core.constant$keyword$314)], null)], 0)),clustermap.components.map.map_component,document.getElementById(elem_id));
});
