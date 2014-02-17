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
goog.require('om.core');
goog.require('hiccups.runtime');
goog.require('hiccups.runtime');
goog.require('clojure.set');
goog.require('om.dom');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('jayq.core');
clustermap.components.map.locate_map = (function locate_map(m){return m.fitBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [59.54,2.3], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [49.29,-11.29], null)], null)),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["paddingTopLeft",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),"paddingBottomRight",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)], null)));
});
clustermap.components.map.api_key = (function (){var or__3406__auto__ = (function (){var G__32912 = config;var G__32912__$1 = (((G__32912 == null))?null:G__32912.components);var G__32912__$2 = (((G__32912__$1 == null))?null:G__32912__$1.map);var G__32912__$3 = (((G__32912__$2 == null))?null:G__32912__$2.api_key);return G__32912__$3;
})();if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "mccraigmccraig.h4f921b9";
}
})();
clustermap.components.map.create_map = (function create_map(id_or_el){var m = L.map.call(null,id_or_el,{"zoomControl": false});var tiles = L.mapbox.tileLayer.call(null,clustermap.components.map.api_key,{"detectRetina": true});var zoom = L.control.zoom.call(null,{"position": "bottomright"});m.addLayer(tiles);
m.addControl(zoom);
clustermap.components.map.locate_map.call(null,m);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414),m,new cljs.core.Keyword(null,"markers","markers",1853155051),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"paths","paths",1120343136),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"path-selections","path-selections",512369281),cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY)], null);
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
pan_to_show.cljs$lang$applyTo = (function (arglist__32913){
var m = cljs.core.first(arglist__32913);
var all_bounds = cljs.core.rest(arglist__32913);
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
clustermap.components.map.marker_popup_content = (function marker_popup_content(path_fn,location_sites){return [cljs.core.str((function (){var attrs32915 = cljs.core.map.call(null,(function (site){return [cljs.core.str("<div"),cljs.core.str(" class=\"map-marker-popup-location-list\""),cljs.core.str(">"),cljs.core.str("<li"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",1017115293),path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),site),new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),null], null))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(site))),cljs.core.str("</a>"),cljs.core.str("</li>"),cljs.core.str("</div>")].join('');
}),location_sites);if(cljs.core.map_QMARK_.call(null,attrs32915))
{return [cljs.core.str("<ul"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"class","class",1108647146),null], null),attrs32915))),cljs.core.str(">"),cljs.core.str("</ul>")].join('');
} else
{return [cljs.core.str("<ul>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs32915)),cljs.core.str("</ul>")].join('');
}
})())].join('');
});
clustermap.components.map.create_marker = (function create_marker(path_fn,leaflet_map,location_sites){var temp__4090__auto__ = (function (){var G__32918 = location_sites;var G__32918__$1 = (((G__32918 == null))?null:cljs.core.first.call(null,G__32918));var G__32918__$2 = (((G__32918__$1 == null))?null:new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(G__32918__$1));var G__32918__$3 = (((G__32918__$2 == null))?null:cljs.core.reverse.call(null,G__32918__$2));var G__32918__$4 = (((G__32918__$3 == null))?null:cljs.core.clj__GT_js.call(null,G__32918__$3));return G__32918__$4;
})();if(cljs.core.truth_(temp__4090__auto__))
{var latlong = temp__4090__auto__;var marker = L.marker(latlong);var popup_content = clustermap.components.map.marker_popup_content.call(null,path_fn,location_sites);marker.bindPopup(popup_content);
marker.addTo(leaflet_map);
return marker;
} else
{return console.log([cljs.core.str("missing location: "),cljs.core.str((function (){var sb__4298__auto__ = (new goog.string.StringBuffer());var _STAR_print_fn_STAR_32919_32920 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (x__4299__auto__){return sb__4298__auto__.append(x__4299__auto__);
});
cljs.core.pr.call(null,location_sites);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32919_32920;
}return [cljs.core.str(sb__4298__auto__)].join('');
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
,update_marker_keys));var _ = (function (){var seq__32925 = cljs.core.seq.call(null,remove_marker_keys);var chunk__32926 = null;var count__32927 = 0;var i__32928 = 0;while(true){
if((i__32928 < count__32927))
{var k = cljs.core._nth.call(null,chunk__32926,i__32928);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__32929 = seq__32925;
var G__32930 = chunk__32926;
var G__32931 = count__32927;
var G__32932 = (i__32928 + 1);
seq__32925 = G__32929;
chunk__32926 = G__32930;
count__32927 = G__32931;
i__32928 = G__32932;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32925);if(temp__4092__auto__)
{var seq__32925__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32925__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32925__$1);{
var G__32933 = cljs.core.chunk_rest.call(null,seq__32925__$1);
var G__32934 = c__4148__auto__;
var G__32935 = cljs.core.count.call(null,c__4148__auto__);
var G__32936 = 0;
seq__32925 = G__32933;
chunk__32926 = G__32934;
count__32927 = G__32935;
i__32928 = G__32936;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__32925__$1);clustermap.components.map.remove_marker.call(null,leaflet_map,cljs.core.get.call(null,markers,k));
{
var G__32937 = cljs.core.next.call(null,seq__32925__$1);
var G__32938 = null;
var G__32939 = 0;
var G__32940 = 0;
seq__32925 = G__32937;
chunk__32926 = G__32938;
count__32927 = G__32939;
i__32928 = G__32940;
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
clustermap.components.map.postgis_envelope__GT_latlngbounds = (function postgis_envelope__GT_latlngbounds(envelope){var map__32949 = cljs.core.js__GT_clj.call(null,envelope);var map__32949__$1 = ((cljs.core.seq_QMARK_.call(null,map__32949))?cljs.core.apply.call(null,cljs.core.hash_map,map__32949):map__32949);var clj_envelope = map__32949__$1;var vec__32950 = cljs.core.get.call(null,map__32949__$1,"coordinates");var vec__32951 = cljs.core.nth.call(null,vec__32950,0,null);var vec__32952 = cljs.core.nth.call(null,vec__32951,0,null);var miny0 = cljs.core.nth.call(null,vec__32952,0,null);var minx0 = cljs.core.nth.call(null,vec__32952,1,null);var vec__32953 = cljs.core.nth.call(null,vec__32951,1,null);var maxy1 = cljs.core.nth.call(null,vec__32953,0,null);var minx1 = cljs.core.nth.call(null,vec__32953,1,null);var vec__32954 = cljs.core.nth.call(null,vec__32951,2,null);var maxy2 = cljs.core.nth.call(null,vec__32954,0,null);var maxx2 = cljs.core.nth.call(null,vec__32954,1,null);var vec__32955 = cljs.core.nth.call(null,vec__32951,3,null);var miny3 = cljs.core.nth.call(null,vec__32955,0,null);var maxx3 = cljs.core.nth.call(null,vec__32955,1,null);var vec__32956 = cljs.core.nth.call(null,vec__32951,4,null);var miny4 = cljs.core.nth.call(null,vec__32956,0,null);var minx4 = cljs.core.nth.call(null,vec__32956,1,null);var inner = vec__32951;var coords = vec__32950;return L.latLngBounds(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [minx0,miny0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maxx2,maxy2], null)], null)));
});
/**
* get the best cached boundaryline, async fetch a better one if required
*/
clustermap.components.map.tolerance_boundaryline = (function tolerance_boundaryline(fetch_boundaryline_fn,index,boundaryline_id,zoom){var default_bl = (cljs.core.truth_(index)?(index[boundaryline_id]):null);var default_tolerance = (cljs.core.truth_(default_bl)?(default_bl["tolerance"]):null);var default$ = (cljs.core.truth_(default_bl)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default_tolerance,default_bl], null):null);var or__3406__auto__ = fetch_boundaryline_fn.call(null,boundaryline_id,zoom,new cljs.core.Keyword(null,"min-zoom","min-zoom",3894785504),7);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return default$;
}
});
clustermap.components.map.style_leaflet_path = (function style_leaflet_path(path,p__32957){var map__32959 = p__32957;var map__32959__$1 = ((cljs.core.seq_QMARK_.call(null,map__32959))?cljs.core.apply.call(null,cljs.core.hash_map,map__32959):map__32959);var selected = cljs.core.get.call(null,map__32959__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));if(cljs.core.truth_(selected))
{return path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1108746965),"#0000ff",new cljs.core.Keyword(null,"weight","weight",4517279210),3,new cljs.core.Keyword(null,"opacity","opacity",4041665405),1,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",960226426),0.3], null)));
} else
{return path.setStyle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1108746965),"#ff0000",new cljs.core.Keyword(null,"weight","weight",4517279210),3,new cljs.core.Keyword(null,"opacity","opacity",4041665405),0,new cljs.core.Keyword(null,"fillOpacity","fillOpacity",960226426),0], null)));
}
});
clustermap.components.map.create_boundaryline_path = (function create_boundaryline_path(comm,boundaryline_id,leaflet_map,js_boundaryline,p__32960){var map__32962 = p__32960;var map__32962__$1 = ((cljs.core.seq_QMARK_.call(null,map__32962))?cljs.core.apply.call(null,cljs.core.hash_map,map__32962):map__32962);var path_attrs = map__32962__$1;var selected = cljs.core.get.call(null,map__32962__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var tolerance = (js_boundaryline["tolerance"]);var bounds = clustermap.components.map.postgis_envelope__GT_latlngbounds.call(null,(js_boundaryline["envelope"]));var leaflet_path = L.geoJson((js_boundaryline["geojson"]));clustermap.components.map.style_leaflet_path.call(null,leaflet_path,path_attrs);
leaflet_path.addTo(leaflet_map);
leaflet_path.on("click",(function (e){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",3902864696),boundaryline_id], null)], null));
}));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tolerance","tolerance",2046976895),tolerance,new cljs.core.Keyword(null,"selected","selected",2205476365),selected,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",1462260071),leaflet_path,new cljs.core.Keyword(null,"bounds","bounds",3925666343),bounds], null);
});
/**
* create leaflet paths for every boundaryline in boundaryline-index
*/
clustermap.components.map.create_paths = (function create_paths(comm,js_boundaryline_index,leaflet_map,paths_atom){if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,paths_atom)))
{var temp__4092__auto__ = cljs.core.not_empty.call(null,Object.keys(js_boundaryline_index));if(cljs.core.truth_(temp__4092__auto__))
{var keys = temp__4092__auto__;return cljs.core.reset_BANG_.call(null,paths_atom,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (boundaryline_id){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,clustermap.components.map.create_boundaryline_path.call(null,comm,boundaryline_id,leaflet_map,(js_boundaryline_index[boundaryline_id]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),false], null))], null);
}),keys)));
} else
{return null;
}
} else
{return null;
}
});
clustermap.components.map.replace_boundaryline_path = (function replace_boundaryline_path(comm,boundaryline_id,leaflet_map,old_path,js_boundaryline,path_attrs){leaflet_map.removeLayer(new cljs.core.Keyword(null,"leaflet-path","leaflet-path",1462260071).cljs$core$IFn$_invoke$arity$1(old_path));
return clustermap.components.map.create_boundaryline_path.call(null,comm,boundaryline_id,leaflet_map,js_boundaryline,path_attrs);
});
/**
* update a Leaflet path for a boundaryline
*/
clustermap.components.map.update_path = (function update_path(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,path,boundaryline_id,path_attrs){var temp__4090__auto__ = clustermap.components.map.tolerance_boundaryline.call(null,fetch_boundaryline_fn,js_boundaryline_index,boundaryline_id,leaflet_map.getZoom());if(cljs.core.truth_(temp__4090__auto__))
{var vec__32964 = temp__4090__auto__;var tolerance = cljs.core.nth.call(null,vec__32964,0,null);var js_boundaryline = cljs.core.nth.call(null,vec__32964,1,null);if(cljs.core.not_EQ_.call(null,tolerance,new cljs.core.Keyword(null,"tolerance","tolerance",2046976895).cljs$core$IFn$_invoke$arity$1(path)))
{return clustermap.components.map.replace_boundaryline_path.call(null,comm,boundaryline_id,leaflet_map,path,js_boundaryline,path_attrs);
} else
{clustermap.components.map.style_leaflet_path.call(null,new cljs.core.Keyword(null,"leaflet-path","leaflet-path",1462260071).cljs$core$IFn$_invoke$arity$1(path),path_attrs);
return path;
}
} else
{return path;
}
});
clustermap.components.map.update_paths = (function update_paths(comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,paths_atom,path_selections_atom,new_selection_locations){if(cljs.core.truth_(js_boundaryline_index))
{var paths = cljs.core.deref.call(null,paths_atom);var path_keys = cljs.core.set.call(null,cljs.core.keys.call(null,paths));var old_selection_path_keys = cljs.core.deref.call(null,path_selections_atom);var new_selection_path_keys = cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487),new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115)),cljs.core.apply.call(null,cljs.core.concat,cljs.core.vals.call(null,new_selection_locations)))));var select_path_keys = cljs.core.into.call(null,clojure.set.intersection.call(null,old_selection_path_keys,new_selection_path_keys),clojure.set.difference.call(null,new_selection_path_keys,old_selection_path_keys));var deselect_path_keys = clojure.set.difference.call(null,old_selection_path_keys,new_selection_path_keys);var selected_paths = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys){
return (function (p__32969){var vec__32970 = p__32969;var k = cljs.core.nth.call(null,vec__32970,0,null);var v = cljs.core.nth.call(null,vec__32970,1,null);return cljs.core.identity.call(null,v);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys))
,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_path.call(null,comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,cljs.core.get.call(null,paths,k),k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),true], null))], null);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys))
,select_path_keys)));var deselected_paths = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys,selected_paths){
return (function (p__32971){var vec__32972 = p__32971;var k = cljs.core.nth.call(null,vec__32972,0,null);var v = cljs.core.nth.call(null,vec__32972,1,null);return cljs.core.identity.call(null,v);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys,selected_paths))
,cljs.core.map.call(null,((function (paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys,selected_paths){
return (function (k){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,clustermap.components.map.update_path.call(null,comm,fetch_boundaryline_fn,js_boundaryline_index,leaflet_map,cljs.core.get.call(null,paths,k),k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),false], null))], null);
});})(paths,path_keys,old_selection_path_keys,new_selection_path_keys,select_path_keys,deselect_path_keys,selected_paths))
,deselect_path_keys)));cljs.core.reset_BANG_.call(null,path_selections_atom,new_selection_path_keys);
return cljs.core.reset_BANG_.call(null,paths_atom,cljs.core.merge.call(null,paths,selected_paths,deselected_paths));
} else
{return null;
}
});
clustermap.components.map.pan_to_selection = (function pan_to_selection(owner,leaflet_map,paths_atom,path_selections_atom){var paths = cljs.core.deref.call(null,paths_atom);var path_selections = cljs.core.deref.call(null,path_selections_atom);if(cljs.core.empty_QMARK_.call(null,paths))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"pan-pending","pan-pending",3214812121),true);
} else
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"pan-pending","pan-pending",3214812121),false);
var temp__4092__auto__ = (function (){var G__32974 = cljs.core.select_keys.call(null,paths,path_selections);var G__32974__$1 = (((G__32974 == null))?null:cljs.core.vals.call(null,G__32974));var G__32974__$2 = (((G__32974__$1 == null))?null:cljs.core.map.call(null,new cljs.core.Keyword(null,"bounds","bounds",3925666343),G__32974__$1));return G__32974__$2;
})();if(cljs.core.truth_(temp__4092__auto__))
{var bounds = temp__4092__auto__;return cljs.core.apply.call(null,clustermap.components.map.pan_to_show,leaflet_map,bounds);
} else
{return null;
}
}
});
/**
* put the leaflet map as state in the om component
*/
clustermap.components.map.map_component = (function map_component(p__32975,owner){var map__32990 = p__32975;var map__32990__$1 = ((cljs.core.seq_QMARK_.call(null,map__32990))?cljs.core.apply.call(null,cljs.core.hash_map,map__32990):map__32990);var app_state = map__32990__$1;var selection = cljs.core.get.call(null,map__32990__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.map.t32991 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map.t32991 = (function (selection,app_state,map__32990,owner,p__32975,map_component,meta32992){
this.selection = selection;
this.app_state = app_state;
this.map__32990 = map__32990;
this.owner = owner;
this.p__32975 = p__32975;
this.map_component = map_component;
this.meta32992 = meta32992;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map.t32991.cljs$lang$type = true;
clustermap.components.map.t32991.cljs$lang$ctorStr = "clustermap.components.map/t32991";
clustermap.components.map.t32991.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map/t32991");
});
clustermap.components.map.t32991.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map.t32991.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (this$,p__32994,next_state){var self__ = this;
var map__32995 = p__32994;var map__32995__$1 = ((cljs.core.seq_QMARK_.call(null,map__32995))?cljs.core.apply.call(null,cljs.core.hash_map,map__32995):map__32995);var next_selection = cljs.core.get.call(null,map__32995__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var next_locations = cljs.core.get.call(null,map__32995__$1,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162));var next_uk_constituencies = cljs.core.get.call(null,map__32995__$1,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365));var next_boundarylines = cljs.core.get.call(null,map__32995__$1,new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847));var next_zoom = cljs.core.get.call(null,map__32995__$1,new cljs.core.Keyword(null,"zoom","zoom",1017648965));var this$__$1 = this;var map__32996 = om.core.get_shared.call(null,self__.owner);var map__32996__$1 = ((cljs.core.seq_QMARK_.call(null,map__32996))?cljs.core.apply.call(null,cljs.core.hash_map,map__32996):map__32996);var path_fn = cljs.core.get.call(null,map__32996__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__32996__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var fetch_boundaryline_fn = cljs.core.get.call(null,map__32996__$1,new cljs.core.Keyword(null,"fetch-boundaryline-fn","fetch-boundaryline-fn",3464186934));var comm = cljs.core.get.call(null,map__32996__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__32997 = om.core.get_state.call(null,self__.owner);var map__32997__$1 = ((cljs.core.seq_QMARK_.call(null,map__32997))?cljs.core.apply.call(null,cljs.core.hash_map,map__32997):map__32997);var map__32998 = cljs.core.get.call(null,map__32997__$1,new cljs.core.Keyword(null,"map","map",1014012110));var map__32998__$1 = ((cljs.core.seq_QMARK_.call(null,map__32998))?cljs.core.apply.call(null,cljs.core.hash_map,map__32998):map__32998);var path_selections = cljs.core.get.call(null,map__32998__$1,new cljs.core.Keyword(null,"path-selections","path-selections",512369281));var paths = cljs.core.get.call(null,map__32998__$1,new cljs.core.Keyword(null,"paths","paths",1120343136));var markers = cljs.core.get.call(null,map__32998__$1,new cljs.core.Keyword(null,"markers","markers",1853155051));var leaflet_map = cljs.core.get.call(null,map__32998__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414));var pan_pending = cljs.core.get.call(null,map__32997__$1,new cljs.core.Keyword(null,"pan-pending","pan-pending",3214812121));clustermap.components.map.update_markers.call(null,path_fn,leaflet_map,markers,next_locations);
if(cljs.core.truth_(next_uk_constituencies))
{clustermap.components.map.create_paths.call(null,comm,next_uk_constituencies,leaflet_map,paths);
clustermap.components.map.update_paths.call(null,comm,fetch_boundaryline_fn,next_uk_constituencies,leaflet_map,paths,path_selections,next_locations);
} else
{}
if(cljs.core.truth_((function (){var or__3406__auto__ = pan_pending;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not_EQ_.call(null,next_selection,self__.selection);
}
})()))
{return clustermap.components.map.pan_to_selection.call(null,self__.owner,leaflet_map,paths,path_selections);
} else
{return null;
}
});
clustermap.components.map.t32991.prototype.om$core$IDidMount$ = true;
clustermap.components.map.t32991.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;var map__32999 = clustermap.components.map.create_map.call(null,node);var map__32999__$1 = ((cljs.core.seq_QMARK_.call(null,map__32999))?cljs.core.apply.call(null,cljs.core.hash_map,map__32999):map__32999);var map = map__32999__$1;var path = cljs.core.get.call(null,map__32999__$1,new cljs.core.Keyword(null,"path","path",1017337751));var markers = cljs.core.get.call(null,map__32999__$1,new cljs.core.Keyword(null,"markers","markers",1853155051));var leaflet_map = cljs.core.get.call(null,map__32999__$1,new cljs.core.Keyword(null,"leaflet-map","leaflet-map",4353500414));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"map","map",1014012110),map);
leaflet_map.on("zoomend",(function (e){return cljs.core.swap_BANG_.call(null,om.core.get_shared.call(null,self__.owner,new cljs.core.Keyword(null,"app-state","app-state",1424976215)),cljs.core.assoc,new cljs.core.Keyword(null,"zoom","zoom",1017648965),leaflet_map.getZoom());
}));
jayq.core.$.call(null,document).on("clustermap-change-view",(function (e){console.log("change-view");
var map__33000 = om.core.get_state.call(null,self__.owner);var map__33000__$1 = ((cljs.core.seq_QMARK_.call(null,map__33000))?cljs.core.apply.call(null,cljs.core.hash_map,map__33000):map__33000);var map__33001 = cljs.core.get.call(null,map__33000__$1,new cljs.core.Keyword(null,"map","map",1014012110));var map__33001__$1 = ((cljs.core.seq_QMARK_.call(null,map__33001))?cljs.core.apply.call(null,cljs.core.hash_map,map__33001):map__33001);var path_selections = cljs.core.get.call(null,map__33001__$1,new cljs.core.Keyword(null,"path-selections","path-selections",512369281));var paths = cljs.core.get.call(null,map__33001__$1,new cljs.core.Keyword(null,"paths","paths",1120343136));leaflet_map.invalidateSize();
return clustermap.components.map.pan_to_selection.call(null,self__.owner,leaflet_map,paths,path_selections);
}));
return om.core.update_BANG_.call(null,self__.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"zoom","zoom",1017648965),leaflet_map.getZoom());
});
clustermap.components.map.t32991.prototype.om$core$IRender$ = true;
clustermap.components.map.t32991.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "map", "ref": "map"});
});
clustermap.components.map.t32991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32993){var self__ = this;
var _32993__$1 = this;return self__.meta32992;
});
clustermap.components.map.t32991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32993,meta32992__$1){var self__ = this;
var _32993__$1 = this;return (new clustermap.components.map.t32991(self__.selection,self__.app_state,self__.map__32990,self__.owner,self__.p__32975,self__.map_component,meta32992__$1));
});
clustermap.components.map.__GT_t32991 = (function __GT_t32991(selection__$1,app_state__$1,map__32990__$2,owner__$1,p__32975__$1,map_component__$1,meta32992){return (new clustermap.components.map.t32991(selection__$1,app_state__$1,map__32990__$2,owner__$1,p__32975__$1,map_component__$1,meta32992));
});
}
return (new clustermap.components.map.t32991(selection,app_state,map__32990__$1,owner,p__32975,map_component,null));
});
clustermap.components.map.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,cljs.core.merge.call(null,shared,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app-state","app-state",1424976215),app_state,new cljs.core.Keyword(null,"fetch-boundaryline-fn","fetch-boundaryline-fn",3464186934),cljs.core.partial.call(null,clustermap.boundarylines.get_or_fetch_best_boundaryline,app_state,new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847))], null)),clustermap.components.map.map_component,document.getElementById(elem_id));
});
