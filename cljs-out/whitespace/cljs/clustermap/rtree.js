// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.rtree');
goog.require('cljs.core');
/**
* take a geojson boundaryline collection index and stuff it into an rtree
* 
* first put each geojson geometry into a geojson featurecollection, along
* with properties
*/
clustermap.rtree.rtree_index = (function rtree_index(js_index){var rtree = (new RTree(10));var keys = Object.keys(js_index);var features = [];var js_feature_coll = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"FeatureCollection"], null));var _ = (js_feature_coll["features"] = features);var seq__45813_45817 = cljs.core.seq.call(null,keys);var chunk__45814_45818 = null;var count__45815_45819 = 0;var i__45816_45820 = 0;while(true){
if((i__45816_45820 < count__45815_45819))
{var k_45821 = cljs.core._nth.call(null,chunk__45814_45818,i__45816_45820);var obj_45822 = (js_index[k_45821]);var geom_45823 = (obj_45822["geojson"]);var feature_45824 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_45822["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_45822["compact_name"])], null)], null));var __45825__$1 = (feature_45824["geometry"] = geom_45823);features.push(feature_45824);
{
var G__45826 = seq__45813_45817;
var G__45827 = chunk__45814_45818;
var G__45828 = count__45815_45819;
var G__45829 = (i__45816_45820 + 1);
seq__45813_45817 = G__45826;
chunk__45814_45818 = G__45827;
count__45815_45819 = G__45828;
i__45816_45820 = G__45829;
continue;
}
} else
{var temp__4092__auto___45830 = cljs.core.seq.call(null,seq__45813_45817);if(temp__4092__auto___45830)
{var seq__45813_45831__$1 = temp__4092__auto___45830;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45813_45831__$1))
{var c__4189__auto___45832 = cljs.core.chunk_first.call(null,seq__45813_45831__$1);{
var G__45833 = cljs.core.chunk_rest.call(null,seq__45813_45831__$1);
var G__45834 = c__4189__auto___45832;
var G__45835 = cljs.core.count.call(null,c__4189__auto___45832);
var G__45836 = 0;
seq__45813_45817 = G__45833;
chunk__45814_45818 = G__45834;
count__45815_45819 = G__45835;
i__45816_45820 = G__45836;
continue;
}
} else
{var k_45837 = cljs.core.first.call(null,seq__45813_45831__$1);var obj_45838 = (js_index[k_45837]);var geom_45839 = (obj_45838["geojson"]);var feature_45840 = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Feature",new cljs.core.Keyword(null,"properties","properties",4382818469),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),(obj_45838["id"]),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),(obj_45838["compact_name"])], null)], null));var __45841__$1 = (feature_45840["geometry"] = geom_45839);features.push(feature_45840);
{
var G__45842 = cljs.core.next.call(null,seq__45813_45831__$1);
var G__45843 = null;
var G__45844 = 0;
var G__45845 = 0;
seq__45813_45817 = G__45842;
chunk__45814_45818 = G__45843;
count__45815_45819 = G__45844;
i__45816_45820 = G__45845;
continue;
}
}
} else
{}
}
break;
}
rtree.geoJSON(js_feature_coll);
return rtree;
});
clustermap.rtree.point_in_polygons = (function point_in_polygons(js_index,x,y){var hits = js_index.search(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",1013904362),x,new cljs.core.Keyword(null,"y","y",1013904363),y,new cljs.core.Keyword(null,"w","w",1013904361),0,new cljs.core.Keyword(null,"h","h",1013904346),0], null)));return cljs.core.filter.call(null,(function (hit){return gju.pointInPolygon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",2885823853),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)),hit.geometry);
}),hits);
});
