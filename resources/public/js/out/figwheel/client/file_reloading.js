// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24801__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24801__auto__){
return or__24801__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24801__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30834_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30834_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30839 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30840 = null;
var count__30841 = (0);
var i__30842 = (0);
while(true){
if((i__30842 < count__30841)){
var n = cljs.core._nth.call(null,chunk__30840,i__30842);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30843 = seq__30839;
var G__30844 = chunk__30840;
var G__30845 = count__30841;
var G__30846 = (i__30842 + (1));
seq__30839 = G__30843;
chunk__30840 = G__30844;
count__30841 = G__30845;
i__30842 = G__30846;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30839);
if(temp__4657__auto__){
var seq__30839__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30839__$1)){
var c__25612__auto__ = cljs.core.chunk_first.call(null,seq__30839__$1);
var G__30847 = cljs.core.chunk_rest.call(null,seq__30839__$1);
var G__30848 = c__25612__auto__;
var G__30849 = cljs.core.count.call(null,c__25612__auto__);
var G__30850 = (0);
seq__30839 = G__30847;
chunk__30840 = G__30848;
count__30841 = G__30849;
i__30842 = G__30850;
continue;
} else {
var n = cljs.core.first.call(null,seq__30839__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30851 = cljs.core.next.call(null,seq__30839__$1);
var G__30852 = null;
var G__30853 = (0);
var G__30854 = (0);
seq__30839 = G__30851;
chunk__30840 = G__30852;
count__30841 = G__30853;
i__30842 = G__30854;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30905_30916 = cljs.core.seq.call(null,deps);
var chunk__30906_30917 = null;
var count__30907_30918 = (0);
var i__30908_30919 = (0);
while(true){
if((i__30908_30919 < count__30907_30918)){
var dep_30920 = cljs.core._nth.call(null,chunk__30906_30917,i__30908_30919);
topo_sort_helper_STAR_.call(null,dep_30920,(depth + (1)),state);

var G__30921 = seq__30905_30916;
var G__30922 = chunk__30906_30917;
var G__30923 = count__30907_30918;
var G__30924 = (i__30908_30919 + (1));
seq__30905_30916 = G__30921;
chunk__30906_30917 = G__30922;
count__30907_30918 = G__30923;
i__30908_30919 = G__30924;
continue;
} else {
var temp__4657__auto___30925 = cljs.core.seq.call(null,seq__30905_30916);
if(temp__4657__auto___30925){
var seq__30905_30926__$1 = temp__4657__auto___30925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30905_30926__$1)){
var c__25612__auto___30927 = cljs.core.chunk_first.call(null,seq__30905_30926__$1);
var G__30928 = cljs.core.chunk_rest.call(null,seq__30905_30926__$1);
var G__30929 = c__25612__auto___30927;
var G__30930 = cljs.core.count.call(null,c__25612__auto___30927);
var G__30931 = (0);
seq__30905_30916 = G__30928;
chunk__30906_30917 = G__30929;
count__30907_30918 = G__30930;
i__30908_30919 = G__30931;
continue;
} else {
var dep_30932 = cljs.core.first.call(null,seq__30905_30926__$1);
topo_sort_helper_STAR_.call(null,dep_30932,(depth + (1)),state);

var G__30933 = cljs.core.next.call(null,seq__30905_30926__$1);
var G__30934 = null;
var G__30935 = (0);
var G__30936 = (0);
seq__30905_30916 = G__30933;
chunk__30906_30917 = G__30934;
count__30907_30918 = G__30935;
i__30908_30919 = G__30936;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30909){
var vec__30913 = p__30909;
var seq__30914 = cljs.core.seq.call(null,vec__30913);
var first__30915 = cljs.core.first.call(null,seq__30914);
var seq__30914__$1 = cljs.core.next.call(null,seq__30914);
var x = first__30915;
var xs = seq__30914__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30913,seq__30914,first__30915,seq__30914__$1,x,xs,get_deps__$1){
return (function (p1__30855_SHARP_){
return clojure.set.difference.call(null,p1__30855_SHARP_,x);
});})(vec__30913,seq__30914,first__30915,seq__30914__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30949 = cljs.core.seq.call(null,provides);
var chunk__30950 = null;
var count__30951 = (0);
var i__30952 = (0);
while(true){
if((i__30952 < count__30951)){
var prov = cljs.core._nth.call(null,chunk__30950,i__30952);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30953_30961 = cljs.core.seq.call(null,requires);
var chunk__30954_30962 = null;
var count__30955_30963 = (0);
var i__30956_30964 = (0);
while(true){
if((i__30956_30964 < count__30955_30963)){
var req_30965 = cljs.core._nth.call(null,chunk__30954_30962,i__30956_30964);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30965,prov);

var G__30966 = seq__30953_30961;
var G__30967 = chunk__30954_30962;
var G__30968 = count__30955_30963;
var G__30969 = (i__30956_30964 + (1));
seq__30953_30961 = G__30966;
chunk__30954_30962 = G__30967;
count__30955_30963 = G__30968;
i__30956_30964 = G__30969;
continue;
} else {
var temp__4657__auto___30970 = cljs.core.seq.call(null,seq__30953_30961);
if(temp__4657__auto___30970){
var seq__30953_30971__$1 = temp__4657__auto___30970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30953_30971__$1)){
var c__25612__auto___30972 = cljs.core.chunk_first.call(null,seq__30953_30971__$1);
var G__30973 = cljs.core.chunk_rest.call(null,seq__30953_30971__$1);
var G__30974 = c__25612__auto___30972;
var G__30975 = cljs.core.count.call(null,c__25612__auto___30972);
var G__30976 = (0);
seq__30953_30961 = G__30973;
chunk__30954_30962 = G__30974;
count__30955_30963 = G__30975;
i__30956_30964 = G__30976;
continue;
} else {
var req_30977 = cljs.core.first.call(null,seq__30953_30971__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30977,prov);

var G__30978 = cljs.core.next.call(null,seq__30953_30971__$1);
var G__30979 = null;
var G__30980 = (0);
var G__30981 = (0);
seq__30953_30961 = G__30978;
chunk__30954_30962 = G__30979;
count__30955_30963 = G__30980;
i__30956_30964 = G__30981;
continue;
}
} else {
}
}
break;
}

var G__30982 = seq__30949;
var G__30983 = chunk__30950;
var G__30984 = count__30951;
var G__30985 = (i__30952 + (1));
seq__30949 = G__30982;
chunk__30950 = G__30983;
count__30951 = G__30984;
i__30952 = G__30985;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30949);
if(temp__4657__auto__){
var seq__30949__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30949__$1)){
var c__25612__auto__ = cljs.core.chunk_first.call(null,seq__30949__$1);
var G__30986 = cljs.core.chunk_rest.call(null,seq__30949__$1);
var G__30987 = c__25612__auto__;
var G__30988 = cljs.core.count.call(null,c__25612__auto__);
var G__30989 = (0);
seq__30949 = G__30986;
chunk__30950 = G__30987;
count__30951 = G__30988;
i__30952 = G__30989;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30949__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30957_30990 = cljs.core.seq.call(null,requires);
var chunk__30958_30991 = null;
var count__30959_30992 = (0);
var i__30960_30993 = (0);
while(true){
if((i__30960_30993 < count__30959_30992)){
var req_30994 = cljs.core._nth.call(null,chunk__30958_30991,i__30960_30993);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30994,prov);

var G__30995 = seq__30957_30990;
var G__30996 = chunk__30958_30991;
var G__30997 = count__30959_30992;
var G__30998 = (i__30960_30993 + (1));
seq__30957_30990 = G__30995;
chunk__30958_30991 = G__30996;
count__30959_30992 = G__30997;
i__30960_30993 = G__30998;
continue;
} else {
var temp__4657__auto___30999__$1 = cljs.core.seq.call(null,seq__30957_30990);
if(temp__4657__auto___30999__$1){
var seq__30957_31000__$1 = temp__4657__auto___30999__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30957_31000__$1)){
var c__25612__auto___31001 = cljs.core.chunk_first.call(null,seq__30957_31000__$1);
var G__31002 = cljs.core.chunk_rest.call(null,seq__30957_31000__$1);
var G__31003 = c__25612__auto___31001;
var G__31004 = cljs.core.count.call(null,c__25612__auto___31001);
var G__31005 = (0);
seq__30957_30990 = G__31002;
chunk__30958_30991 = G__31003;
count__30959_30992 = G__31004;
i__30960_30993 = G__31005;
continue;
} else {
var req_31006 = cljs.core.first.call(null,seq__30957_31000__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31006,prov);

var G__31007 = cljs.core.next.call(null,seq__30957_31000__$1);
var G__31008 = null;
var G__31009 = (0);
var G__31010 = (0);
seq__30957_30990 = G__31007;
chunk__30958_30991 = G__31008;
count__30959_30992 = G__31009;
i__30960_30993 = G__31010;
continue;
}
} else {
}
}
break;
}

var G__31011 = cljs.core.next.call(null,seq__30949__$1);
var G__31012 = null;
var G__31013 = (0);
var G__31014 = (0);
seq__30949 = G__31011;
chunk__30950 = G__31012;
count__30951 = G__31013;
i__30952 = G__31014;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__31019_31023 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31020_31024 = null;
var count__31021_31025 = (0);
var i__31022_31026 = (0);
while(true){
if((i__31022_31026 < count__31021_31025)){
var ns_31027 = cljs.core._nth.call(null,chunk__31020_31024,i__31022_31026);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31027);

var G__31028 = seq__31019_31023;
var G__31029 = chunk__31020_31024;
var G__31030 = count__31021_31025;
var G__31031 = (i__31022_31026 + (1));
seq__31019_31023 = G__31028;
chunk__31020_31024 = G__31029;
count__31021_31025 = G__31030;
i__31022_31026 = G__31031;
continue;
} else {
var temp__4657__auto___31032 = cljs.core.seq.call(null,seq__31019_31023);
if(temp__4657__auto___31032){
var seq__31019_31033__$1 = temp__4657__auto___31032;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31019_31033__$1)){
var c__25612__auto___31034 = cljs.core.chunk_first.call(null,seq__31019_31033__$1);
var G__31035 = cljs.core.chunk_rest.call(null,seq__31019_31033__$1);
var G__31036 = c__25612__auto___31034;
var G__31037 = cljs.core.count.call(null,c__25612__auto___31034);
var G__31038 = (0);
seq__31019_31023 = G__31035;
chunk__31020_31024 = G__31036;
count__31021_31025 = G__31037;
i__31022_31026 = G__31038;
continue;
} else {
var ns_31039 = cljs.core.first.call(null,seq__31019_31033__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31039);

var G__31040 = cljs.core.next.call(null,seq__31019_31033__$1);
var G__31041 = null;
var G__31042 = (0);
var G__31043 = (0);
seq__31019_31023 = G__31040;
chunk__31020_31024 = G__31041;
count__31021_31025 = G__31042;
i__31022_31026 = G__31043;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24801__auto__ = goog.require__;
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__31044__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31044 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31045__i = 0, G__31045__a = new Array(arguments.length -  0);
while (G__31045__i < G__31045__a.length) {G__31045__a[G__31045__i] = arguments[G__31045__i + 0]; ++G__31045__i;}
  args = new cljs.core.IndexedSeq(G__31045__a,0);
} 
return G__31044__delegate.call(this,args);};
G__31044.cljs$lang$maxFixedArity = 0;
G__31044.cljs$lang$applyTo = (function (arglist__31046){
var args = cljs.core.seq(arglist__31046);
return G__31044__delegate(args);
});
G__31044.cljs$core$IFn$_invoke$arity$variadic = G__31044__delegate;
return G__31044;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31048 = cljs.core._EQ_;
var expr__31049 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31048.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31049))){
var path_parts = ((function (pred__31048,expr__31049){
return (function (p1__31047_SHARP_){
return clojure.string.split.call(null,p1__31047_SHARP_,/[\/\\]/);
});})(pred__31048,expr__31049))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__31048,expr__31049){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31051){if((e31051 instanceof Error)){
var e = e31051;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31051;

}
}})());
});
;})(path_parts,sep,root,pred__31048,expr__31049))
} else {
if(cljs.core.truth_(pred__31048.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31049))){
return ((function (pred__31048,expr__31049){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__31048,expr__31049){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__31048,expr__31049))
);

return deferred.addErrback(((function (deferred,pred__31048,expr__31049){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__31048,expr__31049))
);
});
;})(pred__31048,expr__31049))
} else {
return ((function (pred__31048,expr__31049){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31048,expr__31049))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31052,callback){
var map__31055 = p__31052;
var map__31055__$1 = ((((!((map__31055 == null)))?((((map__31055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31055):map__31055);
var file_msg = map__31055__$1;
var request_url = cljs.core.get.call(null,map__31055__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31055,map__31055__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31055,map__31055__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26973__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto__){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto__){
return (function (state_31079){
var state_val_31080 = (state_31079[(1)]);
if((state_val_31080 === (7))){
var inst_31075 = (state_31079[(2)]);
var state_31079__$1 = state_31079;
var statearr_31081_31101 = state_31079__$1;
(statearr_31081_31101[(2)] = inst_31075);

(statearr_31081_31101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (1))){
var state_31079__$1 = state_31079;
var statearr_31082_31102 = state_31079__$1;
(statearr_31082_31102[(2)] = null);

(statearr_31082_31102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (4))){
var inst_31059 = (state_31079[(7)]);
var inst_31059__$1 = (state_31079[(2)]);
var state_31079__$1 = (function (){var statearr_31083 = state_31079;
(statearr_31083[(7)] = inst_31059__$1);

return statearr_31083;
})();
if(cljs.core.truth_(inst_31059__$1)){
var statearr_31084_31103 = state_31079__$1;
(statearr_31084_31103[(1)] = (5));

} else {
var statearr_31085_31104 = state_31079__$1;
(statearr_31085_31104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (6))){
var state_31079__$1 = state_31079;
var statearr_31086_31105 = state_31079__$1;
(statearr_31086_31105[(2)] = null);

(statearr_31086_31105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (3))){
var inst_31077 = (state_31079[(2)]);
var state_31079__$1 = state_31079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31079__$1,inst_31077);
} else {
if((state_val_31080 === (2))){
var state_31079__$1 = state_31079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31079__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31080 === (11))){
var inst_31071 = (state_31079[(2)]);
var state_31079__$1 = (function (){var statearr_31087 = state_31079;
(statearr_31087[(8)] = inst_31071);

return statearr_31087;
})();
var statearr_31088_31106 = state_31079__$1;
(statearr_31088_31106[(2)] = null);

(statearr_31088_31106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (9))){
var inst_31063 = (state_31079[(9)]);
var inst_31065 = (state_31079[(10)]);
var inst_31067 = inst_31065.call(null,inst_31063);
var state_31079__$1 = state_31079;
var statearr_31089_31107 = state_31079__$1;
(statearr_31089_31107[(2)] = inst_31067);

(statearr_31089_31107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (5))){
var inst_31059 = (state_31079[(7)]);
var inst_31061 = figwheel.client.file_reloading.blocking_load.call(null,inst_31059);
var state_31079__$1 = state_31079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31079__$1,(8),inst_31061);
} else {
if((state_val_31080 === (10))){
var inst_31063 = (state_31079[(9)]);
var inst_31069 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31063);
var state_31079__$1 = state_31079;
var statearr_31090_31108 = state_31079__$1;
(statearr_31090_31108[(2)] = inst_31069);

(statearr_31090_31108[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31080 === (8))){
var inst_31059 = (state_31079[(7)]);
var inst_31065 = (state_31079[(10)]);
var inst_31063 = (state_31079[(2)]);
var inst_31064 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31065__$1 = cljs.core.get.call(null,inst_31064,inst_31059);
var state_31079__$1 = (function (){var statearr_31091 = state_31079;
(statearr_31091[(9)] = inst_31063);

(statearr_31091[(10)] = inst_31065__$1);

return statearr_31091;
})();
if(cljs.core.truth_(inst_31065__$1)){
var statearr_31092_31109 = state_31079__$1;
(statearr_31092_31109[(1)] = (9));

} else {
var statearr_31093_31110 = state_31079__$1;
(statearr_31093_31110[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__26973__auto__))
;
return ((function (switch__26861__auto__,c__26973__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26862__auto__ = null;
var figwheel$client$file_reloading$state_machine__26862__auto____0 = (function (){
var statearr_31097 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31097[(0)] = figwheel$client$file_reloading$state_machine__26862__auto__);

(statearr_31097[(1)] = (1));

return statearr_31097;
});
var figwheel$client$file_reloading$state_machine__26862__auto____1 = (function (state_31079){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_31079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e31098){if((e31098 instanceof Object)){
var ex__26865__auto__ = e31098;
var statearr_31099_31111 = state_31079;
(statearr_31099_31111[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31112 = state_31079;
state_31079 = G__31112;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26862__auto__ = function(state_31079){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26862__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26862__auto____1.call(this,state_31079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26862__auto____0;
figwheel$client$file_reloading$state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26862__auto____1;
return figwheel$client$file_reloading$state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto__))
})();
var state__26975__auto__ = (function (){var statearr_31100 = f__26974__auto__.call(null);
(statearr_31100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto__);

return statearr_31100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto__))
);

return c__26973__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31113,callback){
var map__31116 = p__31113;
var map__31116__$1 = ((((!((map__31116 == null)))?((((map__31116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31116):map__31116);
var file_msg = map__31116__$1;
var namespace = cljs.core.get.call(null,map__31116__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31116,map__31116__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31116,map__31116__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31118){
var map__31121 = p__31118;
var map__31121__$1 = ((((!((map__31121 == null)))?((((map__31121.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31121.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31121):map__31121);
var file_msg = map__31121__$1;
var namespace = cljs.core.get.call(null,map__31121__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24789__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24789__auto__){
var or__24801__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24801__auto__)){
return or__24801__auto__;
} else {
var or__24801__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24801__auto____$1)){
return or__24801__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24789__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31123,callback){
var map__31126 = p__31123;
var map__31126__$1 = ((((!((map__31126 == null)))?((((map__31126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31126):map__31126);
var file_msg = map__31126__$1;
var request_url = cljs.core.get.call(null,map__31126__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31126__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26973__auto___31230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto___31230,out){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto___31230,out){
return (function (state_31212){
var state_val_31213 = (state_31212[(1)]);
if((state_val_31213 === (1))){
var inst_31186 = cljs.core.seq.call(null,files);
var inst_31187 = cljs.core.first.call(null,inst_31186);
var inst_31188 = cljs.core.next.call(null,inst_31186);
var inst_31189 = files;
var state_31212__$1 = (function (){var statearr_31214 = state_31212;
(statearr_31214[(7)] = inst_31187);

(statearr_31214[(8)] = inst_31188);

(statearr_31214[(9)] = inst_31189);

return statearr_31214;
})();
var statearr_31215_31231 = state_31212__$1;
(statearr_31215_31231[(2)] = null);

(statearr_31215_31231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (2))){
var inst_31195 = (state_31212[(10)]);
var inst_31189 = (state_31212[(9)]);
var inst_31194 = cljs.core.seq.call(null,inst_31189);
var inst_31195__$1 = cljs.core.first.call(null,inst_31194);
var inst_31196 = cljs.core.next.call(null,inst_31194);
var inst_31197 = (inst_31195__$1 == null);
var inst_31198 = cljs.core.not.call(null,inst_31197);
var state_31212__$1 = (function (){var statearr_31216 = state_31212;
(statearr_31216[(10)] = inst_31195__$1);

(statearr_31216[(11)] = inst_31196);

return statearr_31216;
})();
if(inst_31198){
var statearr_31217_31232 = state_31212__$1;
(statearr_31217_31232[(1)] = (4));

} else {
var statearr_31218_31233 = state_31212__$1;
(statearr_31218_31233[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (3))){
var inst_31210 = (state_31212[(2)]);
var state_31212__$1 = state_31212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31212__$1,inst_31210);
} else {
if((state_val_31213 === (4))){
var inst_31195 = (state_31212[(10)]);
var inst_31200 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31195);
var state_31212__$1 = state_31212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31212__$1,(7),inst_31200);
} else {
if((state_val_31213 === (5))){
var inst_31206 = cljs.core.async.close_BANG_.call(null,out);
var state_31212__$1 = state_31212;
var statearr_31219_31234 = state_31212__$1;
(statearr_31219_31234[(2)] = inst_31206);

(statearr_31219_31234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (6))){
var inst_31208 = (state_31212[(2)]);
var state_31212__$1 = state_31212;
var statearr_31220_31235 = state_31212__$1;
(statearr_31220_31235[(2)] = inst_31208);

(statearr_31220_31235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (7))){
var inst_31196 = (state_31212[(11)]);
var inst_31202 = (state_31212[(2)]);
var inst_31203 = cljs.core.async.put_BANG_.call(null,out,inst_31202);
var inst_31189 = inst_31196;
var state_31212__$1 = (function (){var statearr_31221 = state_31212;
(statearr_31221[(12)] = inst_31203);

(statearr_31221[(9)] = inst_31189);

return statearr_31221;
})();
var statearr_31222_31236 = state_31212__$1;
(statearr_31222_31236[(2)] = null);

(statearr_31222_31236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__26973__auto___31230,out))
;
return ((function (switch__26861__auto__,c__26973__auto___31230,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26862__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26862__auto____0 = (function (){
var statearr_31226 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31226[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26862__auto__);

(statearr_31226[(1)] = (1));

return statearr_31226;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26862__auto____1 = (function (state_31212){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_31212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e31227){if((e31227 instanceof Object)){
var ex__26865__auto__ = e31227;
var statearr_31228_31237 = state_31212;
(statearr_31228_31237[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31238 = state_31212;
state_31212 = G__31238;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26862__auto__ = function(state_31212){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26862__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26862__auto____1.call(this,state_31212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26862__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26862__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto___31230,out))
})();
var state__26975__auto__ = (function (){var statearr_31229 = f__26974__auto__.call(null);
(statearr_31229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto___31230);

return statearr_31229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto___31230,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31239,opts){
var map__31243 = p__31239;
var map__31243__$1 = ((((!((map__31243 == null)))?((((map__31243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31243):map__31243);
var eval_body__$1 = cljs.core.get.call(null,map__31243__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31243__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24789__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24789__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24789__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31245){var e = e31245;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__31246_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31246_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__31255){
var vec__31256 = p__31255;
var k = cljs.core.nth.call(null,vec__31256,(0),null);
var v = cljs.core.nth.call(null,vec__31256,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31259){
var vec__31260 = p__31259;
var k = cljs.core.nth.call(null,vec__31260,(0),null);
var v = cljs.core.nth.call(null,vec__31260,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31266,p__31267){
var map__31514 = p__31266;
var map__31514__$1 = ((((!((map__31514 == null)))?((((map__31514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31514):map__31514);
var opts = map__31514__$1;
var before_jsload = cljs.core.get.call(null,map__31514__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31514__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31514__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31515 = p__31267;
var map__31515__$1 = ((((!((map__31515 == null)))?((((map__31515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31515):map__31515);
var msg = map__31515__$1;
var files = cljs.core.get.call(null,map__31515__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31515__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31515__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26973__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26973__auto__,map__31514,map__31514__$1,opts,before_jsload,on_jsload,reload_dependents,map__31515,map__31515__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26974__auto__ = (function (){var switch__26861__auto__ = ((function (c__26973__auto__,map__31514,map__31514__$1,opts,before_jsload,on_jsload,reload_dependents,map__31515,map__31515__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31668){
var state_val_31669 = (state_31668[(1)]);
if((state_val_31669 === (7))){
var inst_31532 = (state_31668[(7)]);
var inst_31530 = (state_31668[(8)]);
var inst_31529 = (state_31668[(9)]);
var inst_31531 = (state_31668[(10)]);
var inst_31537 = cljs.core._nth.call(null,inst_31530,inst_31532);
var inst_31538 = figwheel.client.file_reloading.eval_body.call(null,inst_31537,opts);
var inst_31539 = (inst_31532 + (1));
var tmp31670 = inst_31530;
var tmp31671 = inst_31529;
var tmp31672 = inst_31531;
var inst_31529__$1 = tmp31671;
var inst_31530__$1 = tmp31670;
var inst_31531__$1 = tmp31672;
var inst_31532__$1 = inst_31539;
var state_31668__$1 = (function (){var statearr_31673 = state_31668;
(statearr_31673[(7)] = inst_31532__$1);

(statearr_31673[(8)] = inst_31530__$1);

(statearr_31673[(9)] = inst_31529__$1);

(statearr_31673[(10)] = inst_31531__$1);

(statearr_31673[(11)] = inst_31538);

return statearr_31673;
})();
var statearr_31674_31760 = state_31668__$1;
(statearr_31674_31760[(2)] = null);

(statearr_31674_31760[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (20))){
var inst_31572 = (state_31668[(12)]);
var inst_31580 = figwheel.client.file_reloading.sort_files.call(null,inst_31572);
var state_31668__$1 = state_31668;
var statearr_31675_31761 = state_31668__$1;
(statearr_31675_31761[(2)] = inst_31580);

(statearr_31675_31761[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (27))){
var state_31668__$1 = state_31668;
var statearr_31676_31762 = state_31668__$1;
(statearr_31676_31762[(2)] = null);

(statearr_31676_31762[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (1))){
var inst_31521 = (state_31668[(13)]);
var inst_31518 = before_jsload.call(null,files);
var inst_31519 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31520 = (function (){return ((function (inst_31521,inst_31518,inst_31519,state_val_31669,c__26973__auto__,map__31514,map__31514__$1,opts,before_jsload,on_jsload,reload_dependents,map__31515,map__31515__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31263_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31263_SHARP_);
});
;})(inst_31521,inst_31518,inst_31519,state_val_31669,c__26973__auto__,map__31514,map__31514__$1,opts,before_jsload,on_jsload,reload_dependents,map__31515,map__31515__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31521__$1 = cljs.core.filter.call(null,inst_31520,files);
var inst_31522 = cljs.core.not_empty.call(null,inst_31521__$1);
var state_31668__$1 = (function (){var statearr_31677 = state_31668;
(statearr_31677[(13)] = inst_31521__$1);

(statearr_31677[(14)] = inst_31519);

(statearr_31677[(15)] = inst_31518);

return statearr_31677;
})();
if(cljs.core.truth_(inst_31522)){
var statearr_31678_31763 = state_31668__$1;
(statearr_31678_31763[(1)] = (2));

} else {
var statearr_31679_31764 = state_31668__$1;
(statearr_31679_31764[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (24))){
var state_31668__$1 = state_31668;
var statearr_31680_31765 = state_31668__$1;
(statearr_31680_31765[(2)] = null);

(statearr_31680_31765[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (39))){
var inst_31622 = (state_31668[(16)]);
var state_31668__$1 = state_31668;
var statearr_31681_31766 = state_31668__$1;
(statearr_31681_31766[(2)] = inst_31622);

(statearr_31681_31766[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (46))){
var inst_31663 = (state_31668[(2)]);
var state_31668__$1 = state_31668;
var statearr_31682_31767 = state_31668__$1;
(statearr_31682_31767[(2)] = inst_31663);

(statearr_31682_31767[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (4))){
var inst_31566 = (state_31668[(2)]);
var inst_31567 = cljs.core.List.EMPTY;
var inst_31568 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31567);
var inst_31569 = (function (){return ((function (inst_31566,inst_31567,inst_31568,state_val_31669,c__26973__auto__,map__31514,map__31514__$1,opts,before_jsload,on_jsload,reload_dependents,map__31515,map__31515__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31264_SHARP_){
var and__24789__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31264_SHARP_);
if(cljs.core.truth_(and__24789__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31264_SHARP_));
} else {
return and__24789__auto__;
}
});
;})(inst_31566,inst_31567,inst_31568,state_val_31669,c__26973__auto__,map__31514,map__31514__$1,opts,before_jsload,on_jsload,reload_dependents,map__31515,map__31515__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31570 = cljs.core.filter.call(null,inst_31569,files);
var inst_31571 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31572 = cljs.core.concat.call(null,inst_31570,inst_31571);
var state_31668__$1 = (function (){var statearr_31683 = state_31668;
(statearr_31683[(12)] = inst_31572);

(statearr_31683[(17)] = inst_31568);

(statearr_31683[(18)] = inst_31566);

return statearr_31683;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31684_31768 = state_31668__$1;
(statearr_31684_31768[(1)] = (16));

} else {
var statearr_31685_31769 = state_31668__$1;
(statearr_31685_31769[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (15))){
var inst_31556 = (state_31668[(2)]);
var state_31668__$1 = state_31668;
var statearr_31686_31770 = state_31668__$1;
(statearr_31686_31770[(2)] = inst_31556);

(statearr_31686_31770[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (21))){
var inst_31582 = (state_31668[(19)]);
var inst_31582__$1 = (state_31668[(2)]);
var inst_31583 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31582__$1);
var state_31668__$1 = (function (){var statearr_31687 = state_31668;
(statearr_31687[(19)] = inst_31582__$1);

return statearr_31687;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31668__$1,(22),inst_31583);
} else {
if((state_val_31669 === (31))){
var inst_31666 = (state_31668[(2)]);
var state_31668__$1 = state_31668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31668__$1,inst_31666);
} else {
if((state_val_31669 === (32))){
var inst_31622 = (state_31668[(16)]);
var inst_31627 = inst_31622.cljs$lang$protocol_mask$partition0$;
var inst_31628 = (inst_31627 & (64));
var inst_31629 = inst_31622.cljs$core$ISeq$;
var inst_31630 = (inst_31628) || (inst_31629);
var state_31668__$1 = state_31668;
if(cljs.core.truth_(inst_31630)){
var statearr_31688_31771 = state_31668__$1;
(statearr_31688_31771[(1)] = (35));

} else {
var statearr_31689_31772 = state_31668__$1;
(statearr_31689_31772[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (40))){
var inst_31643 = (state_31668[(20)]);
var inst_31642 = (state_31668[(2)]);
var inst_31643__$1 = cljs.core.get.call(null,inst_31642,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31644 = cljs.core.get.call(null,inst_31642,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31645 = cljs.core.not_empty.call(null,inst_31643__$1);
var state_31668__$1 = (function (){var statearr_31690 = state_31668;
(statearr_31690[(21)] = inst_31644);

(statearr_31690[(20)] = inst_31643__$1);

return statearr_31690;
})();
if(cljs.core.truth_(inst_31645)){
var statearr_31691_31773 = state_31668__$1;
(statearr_31691_31773[(1)] = (41));

} else {
var statearr_31692_31774 = state_31668__$1;
(statearr_31692_31774[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (33))){
var state_31668__$1 = state_31668;
var statearr_31693_31775 = state_31668__$1;
(statearr_31693_31775[(2)] = false);

(statearr_31693_31775[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (13))){
var inst_31542 = (state_31668[(22)]);
var inst_31546 = cljs.core.chunk_first.call(null,inst_31542);
var inst_31547 = cljs.core.chunk_rest.call(null,inst_31542);
var inst_31548 = cljs.core.count.call(null,inst_31546);
var inst_31529 = inst_31547;
var inst_31530 = inst_31546;
var inst_31531 = inst_31548;
var inst_31532 = (0);
var state_31668__$1 = (function (){var statearr_31694 = state_31668;
(statearr_31694[(7)] = inst_31532);

(statearr_31694[(8)] = inst_31530);

(statearr_31694[(9)] = inst_31529);

(statearr_31694[(10)] = inst_31531);

return statearr_31694;
})();
var statearr_31695_31776 = state_31668__$1;
(statearr_31695_31776[(2)] = null);

(statearr_31695_31776[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (22))){
var inst_31582 = (state_31668[(19)]);
var inst_31586 = (state_31668[(23)]);
var inst_31590 = (state_31668[(24)]);
var inst_31585 = (state_31668[(25)]);
var inst_31585__$1 = (state_31668[(2)]);
var inst_31586__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31585__$1);
var inst_31587 = (function (){var all_files = inst_31582;
var res_SINGLEQUOTE_ = inst_31585__$1;
var res = inst_31586__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31582,inst_31586,inst_31590,inst_31585,inst_31585__$1,inst_31586__$1,state_val_31669,c__26973__auto__,map__31514,map__31514__$1,opts,before_jsload,on_jsload,reload_dependents,map__31515,map__31515__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31265_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31265_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31582,inst_31586,inst_31590,inst_31585,inst_31585__$1,inst_31586__$1,state_val_31669,c__26973__auto__,map__31514,map__31514__$1,opts,before_jsload,on_jsload,reload_dependents,map__31515,map__31515__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31588 = cljs.core.filter.call(null,inst_31587,inst_31585__$1);
var inst_31589 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31590__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31589);
var inst_31591 = cljs.core.not_empty.call(null,inst_31590__$1);
var state_31668__$1 = (function (){var statearr_31696 = state_31668;
(statearr_31696[(23)] = inst_31586__$1);

(statearr_31696[(24)] = inst_31590__$1);

(statearr_31696[(25)] = inst_31585__$1);

(statearr_31696[(26)] = inst_31588);

return statearr_31696;
})();
if(cljs.core.truth_(inst_31591)){
var statearr_31697_31777 = state_31668__$1;
(statearr_31697_31777[(1)] = (23));

} else {
var statearr_31698_31778 = state_31668__$1;
(statearr_31698_31778[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (36))){
var state_31668__$1 = state_31668;
var statearr_31699_31779 = state_31668__$1;
(statearr_31699_31779[(2)] = false);

(statearr_31699_31779[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (41))){
var inst_31643 = (state_31668[(20)]);
var inst_31647 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31648 = cljs.core.map.call(null,inst_31647,inst_31643);
var inst_31649 = cljs.core.pr_str.call(null,inst_31648);
var inst_31650 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31649)].join('');
var inst_31651 = figwheel.client.utils.log.call(null,inst_31650);
var state_31668__$1 = state_31668;
var statearr_31700_31780 = state_31668__$1;
(statearr_31700_31780[(2)] = inst_31651);

(statearr_31700_31780[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (43))){
var inst_31644 = (state_31668[(21)]);
var inst_31654 = (state_31668[(2)]);
var inst_31655 = cljs.core.not_empty.call(null,inst_31644);
var state_31668__$1 = (function (){var statearr_31701 = state_31668;
(statearr_31701[(27)] = inst_31654);

return statearr_31701;
})();
if(cljs.core.truth_(inst_31655)){
var statearr_31702_31781 = state_31668__$1;
(statearr_31702_31781[(1)] = (44));

} else {
var statearr_31703_31782 = state_31668__$1;
(statearr_31703_31782[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (29))){
var inst_31582 = (state_31668[(19)]);
var inst_31622 = (state_31668[(16)]);
var inst_31586 = (state_31668[(23)]);
var inst_31590 = (state_31668[(24)]);
var inst_31585 = (state_31668[(25)]);
var inst_31588 = (state_31668[(26)]);
var inst_31618 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31621 = (function (){var all_files = inst_31582;
var res_SINGLEQUOTE_ = inst_31585;
var res = inst_31586;
var files_not_loaded = inst_31588;
var dependencies_that_loaded = inst_31590;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31582,inst_31622,inst_31586,inst_31590,inst_31585,inst_31588,inst_31618,state_val_31669,c__26973__auto__,map__31514,map__31514__$1,opts,before_jsload,on_jsload,reload_dependents,map__31515,map__31515__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31620){
var map__31704 = p__31620;
var map__31704__$1 = ((((!((map__31704 == null)))?((((map__31704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31704):map__31704);
var namespace = cljs.core.get.call(null,map__31704__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31582,inst_31622,inst_31586,inst_31590,inst_31585,inst_31588,inst_31618,state_val_31669,c__26973__auto__,map__31514,map__31514__$1,opts,before_jsload,on_jsload,reload_dependents,map__31515,map__31515__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31622__$1 = cljs.core.group_by.call(null,inst_31621,inst_31588);
var inst_31624 = (inst_31622__$1 == null);
var inst_31625 = cljs.core.not.call(null,inst_31624);
var state_31668__$1 = (function (){var statearr_31706 = state_31668;
(statearr_31706[(16)] = inst_31622__$1);

(statearr_31706[(28)] = inst_31618);

return statearr_31706;
})();
if(inst_31625){
var statearr_31707_31783 = state_31668__$1;
(statearr_31707_31783[(1)] = (32));

} else {
var statearr_31708_31784 = state_31668__$1;
(statearr_31708_31784[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (44))){
var inst_31644 = (state_31668[(21)]);
var inst_31657 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31644);
var inst_31658 = cljs.core.pr_str.call(null,inst_31657);
var inst_31659 = [cljs.core.str("not required: "),cljs.core.str(inst_31658)].join('');
var inst_31660 = figwheel.client.utils.log.call(null,inst_31659);
var state_31668__$1 = state_31668;
var statearr_31709_31785 = state_31668__$1;
(statearr_31709_31785[(2)] = inst_31660);

(statearr_31709_31785[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (6))){
var inst_31563 = (state_31668[(2)]);
var state_31668__$1 = state_31668;
var statearr_31710_31786 = state_31668__$1;
(statearr_31710_31786[(2)] = inst_31563);

(statearr_31710_31786[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (28))){
var inst_31588 = (state_31668[(26)]);
var inst_31615 = (state_31668[(2)]);
var inst_31616 = cljs.core.not_empty.call(null,inst_31588);
var state_31668__$1 = (function (){var statearr_31711 = state_31668;
(statearr_31711[(29)] = inst_31615);

return statearr_31711;
})();
if(cljs.core.truth_(inst_31616)){
var statearr_31712_31787 = state_31668__$1;
(statearr_31712_31787[(1)] = (29));

} else {
var statearr_31713_31788 = state_31668__$1;
(statearr_31713_31788[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (25))){
var inst_31586 = (state_31668[(23)]);
var inst_31602 = (state_31668[(2)]);
var inst_31603 = cljs.core.not_empty.call(null,inst_31586);
var state_31668__$1 = (function (){var statearr_31714 = state_31668;
(statearr_31714[(30)] = inst_31602);

return statearr_31714;
})();
if(cljs.core.truth_(inst_31603)){
var statearr_31715_31789 = state_31668__$1;
(statearr_31715_31789[(1)] = (26));

} else {
var statearr_31716_31790 = state_31668__$1;
(statearr_31716_31790[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (34))){
var inst_31637 = (state_31668[(2)]);
var state_31668__$1 = state_31668;
if(cljs.core.truth_(inst_31637)){
var statearr_31717_31791 = state_31668__$1;
(statearr_31717_31791[(1)] = (38));

} else {
var statearr_31718_31792 = state_31668__$1;
(statearr_31718_31792[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (17))){
var state_31668__$1 = state_31668;
var statearr_31719_31793 = state_31668__$1;
(statearr_31719_31793[(2)] = recompile_dependents);

(statearr_31719_31793[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (3))){
var state_31668__$1 = state_31668;
var statearr_31720_31794 = state_31668__$1;
(statearr_31720_31794[(2)] = null);

(statearr_31720_31794[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (12))){
var inst_31559 = (state_31668[(2)]);
var state_31668__$1 = state_31668;
var statearr_31721_31795 = state_31668__$1;
(statearr_31721_31795[(2)] = inst_31559);

(statearr_31721_31795[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (2))){
var inst_31521 = (state_31668[(13)]);
var inst_31528 = cljs.core.seq.call(null,inst_31521);
var inst_31529 = inst_31528;
var inst_31530 = null;
var inst_31531 = (0);
var inst_31532 = (0);
var state_31668__$1 = (function (){var statearr_31722 = state_31668;
(statearr_31722[(7)] = inst_31532);

(statearr_31722[(8)] = inst_31530);

(statearr_31722[(9)] = inst_31529);

(statearr_31722[(10)] = inst_31531);

return statearr_31722;
})();
var statearr_31723_31796 = state_31668__$1;
(statearr_31723_31796[(2)] = null);

(statearr_31723_31796[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (23))){
var inst_31582 = (state_31668[(19)]);
var inst_31586 = (state_31668[(23)]);
var inst_31590 = (state_31668[(24)]);
var inst_31585 = (state_31668[(25)]);
var inst_31588 = (state_31668[(26)]);
var inst_31593 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31595 = (function (){var all_files = inst_31582;
var res_SINGLEQUOTE_ = inst_31585;
var res = inst_31586;
var files_not_loaded = inst_31588;
var dependencies_that_loaded = inst_31590;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31582,inst_31586,inst_31590,inst_31585,inst_31588,inst_31593,state_val_31669,c__26973__auto__,map__31514,map__31514__$1,opts,before_jsload,on_jsload,reload_dependents,map__31515,map__31515__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31594){
var map__31724 = p__31594;
var map__31724__$1 = ((((!((map__31724 == null)))?((((map__31724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31724):map__31724);
var request_url = cljs.core.get.call(null,map__31724__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31582,inst_31586,inst_31590,inst_31585,inst_31588,inst_31593,state_val_31669,c__26973__auto__,map__31514,map__31514__$1,opts,before_jsload,on_jsload,reload_dependents,map__31515,map__31515__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31596 = cljs.core.reverse.call(null,inst_31590);
var inst_31597 = cljs.core.map.call(null,inst_31595,inst_31596);
var inst_31598 = cljs.core.pr_str.call(null,inst_31597);
var inst_31599 = figwheel.client.utils.log.call(null,inst_31598);
var state_31668__$1 = (function (){var statearr_31726 = state_31668;
(statearr_31726[(31)] = inst_31593);

return statearr_31726;
})();
var statearr_31727_31797 = state_31668__$1;
(statearr_31727_31797[(2)] = inst_31599);

(statearr_31727_31797[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (35))){
var state_31668__$1 = state_31668;
var statearr_31728_31798 = state_31668__$1;
(statearr_31728_31798[(2)] = true);

(statearr_31728_31798[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (19))){
var inst_31572 = (state_31668[(12)]);
var inst_31578 = figwheel.client.file_reloading.expand_files.call(null,inst_31572);
var state_31668__$1 = state_31668;
var statearr_31729_31799 = state_31668__$1;
(statearr_31729_31799[(2)] = inst_31578);

(statearr_31729_31799[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (11))){
var state_31668__$1 = state_31668;
var statearr_31730_31800 = state_31668__$1;
(statearr_31730_31800[(2)] = null);

(statearr_31730_31800[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (9))){
var inst_31561 = (state_31668[(2)]);
var state_31668__$1 = state_31668;
var statearr_31731_31801 = state_31668__$1;
(statearr_31731_31801[(2)] = inst_31561);

(statearr_31731_31801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (5))){
var inst_31532 = (state_31668[(7)]);
var inst_31531 = (state_31668[(10)]);
var inst_31534 = (inst_31532 < inst_31531);
var inst_31535 = inst_31534;
var state_31668__$1 = state_31668;
if(cljs.core.truth_(inst_31535)){
var statearr_31732_31802 = state_31668__$1;
(statearr_31732_31802[(1)] = (7));

} else {
var statearr_31733_31803 = state_31668__$1;
(statearr_31733_31803[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (14))){
var inst_31542 = (state_31668[(22)]);
var inst_31551 = cljs.core.first.call(null,inst_31542);
var inst_31552 = figwheel.client.file_reloading.eval_body.call(null,inst_31551,opts);
var inst_31553 = cljs.core.next.call(null,inst_31542);
var inst_31529 = inst_31553;
var inst_31530 = null;
var inst_31531 = (0);
var inst_31532 = (0);
var state_31668__$1 = (function (){var statearr_31734 = state_31668;
(statearr_31734[(32)] = inst_31552);

(statearr_31734[(7)] = inst_31532);

(statearr_31734[(8)] = inst_31530);

(statearr_31734[(9)] = inst_31529);

(statearr_31734[(10)] = inst_31531);

return statearr_31734;
})();
var statearr_31735_31804 = state_31668__$1;
(statearr_31735_31804[(2)] = null);

(statearr_31735_31804[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (45))){
var state_31668__$1 = state_31668;
var statearr_31736_31805 = state_31668__$1;
(statearr_31736_31805[(2)] = null);

(statearr_31736_31805[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (26))){
var inst_31582 = (state_31668[(19)]);
var inst_31586 = (state_31668[(23)]);
var inst_31590 = (state_31668[(24)]);
var inst_31585 = (state_31668[(25)]);
var inst_31588 = (state_31668[(26)]);
var inst_31605 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31607 = (function (){var all_files = inst_31582;
var res_SINGLEQUOTE_ = inst_31585;
var res = inst_31586;
var files_not_loaded = inst_31588;
var dependencies_that_loaded = inst_31590;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31582,inst_31586,inst_31590,inst_31585,inst_31588,inst_31605,state_val_31669,c__26973__auto__,map__31514,map__31514__$1,opts,before_jsload,on_jsload,reload_dependents,map__31515,map__31515__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31606){
var map__31737 = p__31606;
var map__31737__$1 = ((((!((map__31737 == null)))?((((map__31737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31737):map__31737);
var namespace = cljs.core.get.call(null,map__31737__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31737__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31582,inst_31586,inst_31590,inst_31585,inst_31588,inst_31605,state_val_31669,c__26973__auto__,map__31514,map__31514__$1,opts,before_jsload,on_jsload,reload_dependents,map__31515,map__31515__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31608 = cljs.core.map.call(null,inst_31607,inst_31586);
var inst_31609 = cljs.core.pr_str.call(null,inst_31608);
var inst_31610 = figwheel.client.utils.log.call(null,inst_31609);
var inst_31611 = (function (){var all_files = inst_31582;
var res_SINGLEQUOTE_ = inst_31585;
var res = inst_31586;
var files_not_loaded = inst_31588;
var dependencies_that_loaded = inst_31590;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31582,inst_31586,inst_31590,inst_31585,inst_31588,inst_31605,inst_31607,inst_31608,inst_31609,inst_31610,state_val_31669,c__26973__auto__,map__31514,map__31514__$1,opts,before_jsload,on_jsload,reload_dependents,map__31515,map__31515__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31582,inst_31586,inst_31590,inst_31585,inst_31588,inst_31605,inst_31607,inst_31608,inst_31609,inst_31610,state_val_31669,c__26973__auto__,map__31514,map__31514__$1,opts,before_jsload,on_jsload,reload_dependents,map__31515,map__31515__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31612 = setTimeout(inst_31611,(10));
var state_31668__$1 = (function (){var statearr_31739 = state_31668;
(statearr_31739[(33)] = inst_31610);

(statearr_31739[(34)] = inst_31605);

return statearr_31739;
})();
var statearr_31740_31806 = state_31668__$1;
(statearr_31740_31806[(2)] = inst_31612);

(statearr_31740_31806[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (16))){
var state_31668__$1 = state_31668;
var statearr_31741_31807 = state_31668__$1;
(statearr_31741_31807[(2)] = reload_dependents);

(statearr_31741_31807[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (38))){
var inst_31622 = (state_31668[(16)]);
var inst_31639 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31622);
var state_31668__$1 = state_31668;
var statearr_31742_31808 = state_31668__$1;
(statearr_31742_31808[(2)] = inst_31639);

(statearr_31742_31808[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (30))){
var state_31668__$1 = state_31668;
var statearr_31743_31809 = state_31668__$1;
(statearr_31743_31809[(2)] = null);

(statearr_31743_31809[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (10))){
var inst_31542 = (state_31668[(22)]);
var inst_31544 = cljs.core.chunked_seq_QMARK_.call(null,inst_31542);
var state_31668__$1 = state_31668;
if(inst_31544){
var statearr_31744_31810 = state_31668__$1;
(statearr_31744_31810[(1)] = (13));

} else {
var statearr_31745_31811 = state_31668__$1;
(statearr_31745_31811[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (18))){
var inst_31576 = (state_31668[(2)]);
var state_31668__$1 = state_31668;
if(cljs.core.truth_(inst_31576)){
var statearr_31746_31812 = state_31668__$1;
(statearr_31746_31812[(1)] = (19));

} else {
var statearr_31747_31813 = state_31668__$1;
(statearr_31747_31813[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (42))){
var state_31668__$1 = state_31668;
var statearr_31748_31814 = state_31668__$1;
(statearr_31748_31814[(2)] = null);

(statearr_31748_31814[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (37))){
var inst_31634 = (state_31668[(2)]);
var state_31668__$1 = state_31668;
var statearr_31749_31815 = state_31668__$1;
(statearr_31749_31815[(2)] = inst_31634);

(statearr_31749_31815[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (8))){
var inst_31529 = (state_31668[(9)]);
var inst_31542 = (state_31668[(22)]);
var inst_31542__$1 = cljs.core.seq.call(null,inst_31529);
var state_31668__$1 = (function (){var statearr_31750 = state_31668;
(statearr_31750[(22)] = inst_31542__$1);

return statearr_31750;
})();
if(inst_31542__$1){
var statearr_31751_31816 = state_31668__$1;
(statearr_31751_31816[(1)] = (10));

} else {
var statearr_31752_31817 = state_31668__$1;
(statearr_31752_31817[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26973__auto__,map__31514,map__31514__$1,opts,before_jsload,on_jsload,reload_dependents,map__31515,map__31515__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26861__auto__,c__26973__auto__,map__31514,map__31514__$1,opts,before_jsload,on_jsload,reload_dependents,map__31515,map__31515__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26862__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26862__auto____0 = (function (){
var statearr_31756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31756[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26862__auto__);

(statearr_31756[(1)] = (1));

return statearr_31756;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26862__auto____1 = (function (state_31668){
while(true){
var ret_value__26863__auto__ = (function (){try{while(true){
var result__26864__auto__ = switch__26861__auto__.call(null,state_31668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26864__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26864__auto__;
}
break;
}
}catch (e31757){if((e31757 instanceof Object)){
var ex__26865__auto__ = e31757;
var statearr_31758_31818 = state_31668;
(statearr_31758_31818[(5)] = ex__26865__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31819 = state_31668;
state_31668 = G__31819;
continue;
} else {
return ret_value__26863__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26862__auto__ = function(state_31668){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26862__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26862__auto____1.call(this,state_31668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26862__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26862__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26862__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26862__auto__;
})()
;})(switch__26861__auto__,c__26973__auto__,map__31514,map__31514__$1,opts,before_jsload,on_jsload,reload_dependents,map__31515,map__31515__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26975__auto__ = (function (){var statearr_31759 = f__26974__auto__.call(null);
(statearr_31759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26973__auto__);

return statearr_31759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26975__auto__);
});})(c__26973__auto__,map__31514,map__31514__$1,opts,before_jsload,on_jsload,reload_dependents,map__31515,map__31515__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26973__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31822,link){
var map__31825 = p__31822;
var map__31825__$1 = ((((!((map__31825 == null)))?((((map__31825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31825):map__31825);
var file = cljs.core.get.call(null,map__31825__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__31825,map__31825__$1,file){
return (function (p1__31820_SHARP_,p2__31821_SHARP_){
if(cljs.core._EQ_.call(null,p1__31820_SHARP_,p2__31821_SHARP_)){
return p1__31820_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__31825,map__31825__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31831){
var map__31832 = p__31831;
var map__31832__$1 = ((((!((map__31832 == null)))?((((map__31832.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31832.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31832):map__31832);
var match_length = cljs.core.get.call(null,map__31832__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31832__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31827_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31827_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31834 = [];
var len__25876__auto___31837 = arguments.length;
var i__25877__auto___31838 = (0);
while(true){
if((i__25877__auto___31838 < len__25876__auto___31837)){
args31834.push((arguments[i__25877__auto___31838]));

var G__31839 = (i__25877__auto___31838 + (1));
i__25877__auto___31838 = G__31839;
continue;
} else {
}
break;
}

var G__31836 = args31834.length;
switch (G__31836) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31834.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31841_SHARP_,p2__31842_SHARP_){
return cljs.core.assoc.call(null,p1__31841_SHARP_,cljs.core.get.call(null,p2__31842_SHARP_,key),p2__31842_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31843){
var map__31846 = p__31843;
var map__31846__$1 = ((((!((map__31846 == null)))?((((map__31846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31846):map__31846);
var f_data = map__31846__$1;
var file = cljs.core.get.call(null,map__31846__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31848,p__31849){
var map__31858 = p__31848;
var map__31858__$1 = ((((!((map__31858 == null)))?((((map__31858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31858):map__31858);
var opts = map__31858__$1;
var on_cssload = cljs.core.get.call(null,map__31858__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31859 = p__31849;
var map__31859__$1 = ((((!((map__31859 == null)))?((((map__31859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31859):map__31859);
var files_msg = map__31859__$1;
var files = cljs.core.get.call(null,map__31859__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31862_31866 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__31863_31867 = null;
var count__31864_31868 = (0);
var i__31865_31869 = (0);
while(true){
if((i__31865_31869 < count__31864_31868)){
var f_31870 = cljs.core._nth.call(null,chunk__31863_31867,i__31865_31869);
figwheel.client.file_reloading.reload_css_file.call(null,f_31870);

var G__31871 = seq__31862_31866;
var G__31872 = chunk__31863_31867;
var G__31873 = count__31864_31868;
var G__31874 = (i__31865_31869 + (1));
seq__31862_31866 = G__31871;
chunk__31863_31867 = G__31872;
count__31864_31868 = G__31873;
i__31865_31869 = G__31874;
continue;
} else {
var temp__4657__auto___31875 = cljs.core.seq.call(null,seq__31862_31866);
if(temp__4657__auto___31875){
var seq__31862_31876__$1 = temp__4657__auto___31875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31862_31876__$1)){
var c__25612__auto___31877 = cljs.core.chunk_first.call(null,seq__31862_31876__$1);
var G__31878 = cljs.core.chunk_rest.call(null,seq__31862_31876__$1);
var G__31879 = c__25612__auto___31877;
var G__31880 = cljs.core.count.call(null,c__25612__auto___31877);
var G__31881 = (0);
seq__31862_31866 = G__31878;
chunk__31863_31867 = G__31879;
count__31864_31868 = G__31880;
i__31865_31869 = G__31881;
continue;
} else {
var f_31882 = cljs.core.first.call(null,seq__31862_31876__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31882);

var G__31883 = cljs.core.next.call(null,seq__31862_31876__$1);
var G__31884 = null;
var G__31885 = (0);
var G__31886 = (0);
seq__31862_31866 = G__31883;
chunk__31863_31867 = G__31884;
count__31864_31868 = G__31885;
i__31865_31869 = G__31886;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31858,map__31858__$1,opts,on_cssload,map__31859,map__31859__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__31858,map__31858__$1,opts,on_cssload,map__31859,map__31859__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1516956383997