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
var or__24777__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24777__auto__){
return or__24777__auto__;
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
var or__24777__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29926_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29926_SHARP_));
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
var seq__29931 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29932 = null;
var count__29933 = (0);
var i__29934 = (0);
while(true){
if((i__29934 < count__29933)){
var n = cljs.core._nth.call(null,chunk__29932,i__29934);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29935 = seq__29931;
var G__29936 = chunk__29932;
var G__29937 = count__29933;
var G__29938 = (i__29934 + (1));
seq__29931 = G__29935;
chunk__29932 = G__29936;
count__29933 = G__29937;
i__29934 = G__29938;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29931);
if(temp__4657__auto__){
var seq__29931__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29931__$1)){
var c__25588__auto__ = cljs.core.chunk_first.call(null,seq__29931__$1);
var G__29939 = cljs.core.chunk_rest.call(null,seq__29931__$1);
var G__29940 = c__25588__auto__;
var G__29941 = cljs.core.count.call(null,c__25588__auto__);
var G__29942 = (0);
seq__29931 = G__29939;
chunk__29932 = G__29940;
count__29933 = G__29941;
i__29934 = G__29942;
continue;
} else {
var n = cljs.core.first.call(null,seq__29931__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29943 = cljs.core.next.call(null,seq__29931__$1);
var G__29944 = null;
var G__29945 = (0);
var G__29946 = (0);
seq__29931 = G__29943;
chunk__29932 = G__29944;
count__29933 = G__29945;
i__29934 = G__29946;
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

var seq__29997_30008 = cljs.core.seq.call(null,deps);
var chunk__29998_30009 = null;
var count__29999_30010 = (0);
var i__30000_30011 = (0);
while(true){
if((i__30000_30011 < count__29999_30010)){
var dep_30012 = cljs.core._nth.call(null,chunk__29998_30009,i__30000_30011);
topo_sort_helper_STAR_.call(null,dep_30012,(depth + (1)),state);

var G__30013 = seq__29997_30008;
var G__30014 = chunk__29998_30009;
var G__30015 = count__29999_30010;
var G__30016 = (i__30000_30011 + (1));
seq__29997_30008 = G__30013;
chunk__29998_30009 = G__30014;
count__29999_30010 = G__30015;
i__30000_30011 = G__30016;
continue;
} else {
var temp__4657__auto___30017 = cljs.core.seq.call(null,seq__29997_30008);
if(temp__4657__auto___30017){
var seq__29997_30018__$1 = temp__4657__auto___30017;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29997_30018__$1)){
var c__25588__auto___30019 = cljs.core.chunk_first.call(null,seq__29997_30018__$1);
var G__30020 = cljs.core.chunk_rest.call(null,seq__29997_30018__$1);
var G__30021 = c__25588__auto___30019;
var G__30022 = cljs.core.count.call(null,c__25588__auto___30019);
var G__30023 = (0);
seq__29997_30008 = G__30020;
chunk__29998_30009 = G__30021;
count__29999_30010 = G__30022;
i__30000_30011 = G__30023;
continue;
} else {
var dep_30024 = cljs.core.first.call(null,seq__29997_30018__$1);
topo_sort_helper_STAR_.call(null,dep_30024,(depth + (1)),state);

var G__30025 = cljs.core.next.call(null,seq__29997_30018__$1);
var G__30026 = null;
var G__30027 = (0);
var G__30028 = (0);
seq__29997_30008 = G__30025;
chunk__29998_30009 = G__30026;
count__29999_30010 = G__30027;
i__30000_30011 = G__30028;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30001){
var vec__30005 = p__30001;
var seq__30006 = cljs.core.seq.call(null,vec__30005);
var first__30007 = cljs.core.first.call(null,seq__30006);
var seq__30006__$1 = cljs.core.next.call(null,seq__30006);
var x = first__30007;
var xs = seq__30006__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30005,seq__30006,first__30007,seq__30006__$1,x,xs,get_deps__$1){
return (function (p1__29947_SHARP_){
return clojure.set.difference.call(null,p1__29947_SHARP_,x);
});})(vec__30005,seq__30006,first__30007,seq__30006__$1,x,xs,get_deps__$1))
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
var seq__30041 = cljs.core.seq.call(null,provides);
var chunk__30042 = null;
var count__30043 = (0);
var i__30044 = (0);
while(true){
if((i__30044 < count__30043)){
var prov = cljs.core._nth.call(null,chunk__30042,i__30044);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30045_30053 = cljs.core.seq.call(null,requires);
var chunk__30046_30054 = null;
var count__30047_30055 = (0);
var i__30048_30056 = (0);
while(true){
if((i__30048_30056 < count__30047_30055)){
var req_30057 = cljs.core._nth.call(null,chunk__30046_30054,i__30048_30056);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30057,prov);

var G__30058 = seq__30045_30053;
var G__30059 = chunk__30046_30054;
var G__30060 = count__30047_30055;
var G__30061 = (i__30048_30056 + (1));
seq__30045_30053 = G__30058;
chunk__30046_30054 = G__30059;
count__30047_30055 = G__30060;
i__30048_30056 = G__30061;
continue;
} else {
var temp__4657__auto___30062 = cljs.core.seq.call(null,seq__30045_30053);
if(temp__4657__auto___30062){
var seq__30045_30063__$1 = temp__4657__auto___30062;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30045_30063__$1)){
var c__25588__auto___30064 = cljs.core.chunk_first.call(null,seq__30045_30063__$1);
var G__30065 = cljs.core.chunk_rest.call(null,seq__30045_30063__$1);
var G__30066 = c__25588__auto___30064;
var G__30067 = cljs.core.count.call(null,c__25588__auto___30064);
var G__30068 = (0);
seq__30045_30053 = G__30065;
chunk__30046_30054 = G__30066;
count__30047_30055 = G__30067;
i__30048_30056 = G__30068;
continue;
} else {
var req_30069 = cljs.core.first.call(null,seq__30045_30063__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30069,prov);

var G__30070 = cljs.core.next.call(null,seq__30045_30063__$1);
var G__30071 = null;
var G__30072 = (0);
var G__30073 = (0);
seq__30045_30053 = G__30070;
chunk__30046_30054 = G__30071;
count__30047_30055 = G__30072;
i__30048_30056 = G__30073;
continue;
}
} else {
}
}
break;
}

var G__30074 = seq__30041;
var G__30075 = chunk__30042;
var G__30076 = count__30043;
var G__30077 = (i__30044 + (1));
seq__30041 = G__30074;
chunk__30042 = G__30075;
count__30043 = G__30076;
i__30044 = G__30077;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30041);
if(temp__4657__auto__){
var seq__30041__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30041__$1)){
var c__25588__auto__ = cljs.core.chunk_first.call(null,seq__30041__$1);
var G__30078 = cljs.core.chunk_rest.call(null,seq__30041__$1);
var G__30079 = c__25588__auto__;
var G__30080 = cljs.core.count.call(null,c__25588__auto__);
var G__30081 = (0);
seq__30041 = G__30078;
chunk__30042 = G__30079;
count__30043 = G__30080;
i__30044 = G__30081;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30041__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30049_30082 = cljs.core.seq.call(null,requires);
var chunk__30050_30083 = null;
var count__30051_30084 = (0);
var i__30052_30085 = (0);
while(true){
if((i__30052_30085 < count__30051_30084)){
var req_30086 = cljs.core._nth.call(null,chunk__30050_30083,i__30052_30085);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30086,prov);

var G__30087 = seq__30049_30082;
var G__30088 = chunk__30050_30083;
var G__30089 = count__30051_30084;
var G__30090 = (i__30052_30085 + (1));
seq__30049_30082 = G__30087;
chunk__30050_30083 = G__30088;
count__30051_30084 = G__30089;
i__30052_30085 = G__30090;
continue;
} else {
var temp__4657__auto___30091__$1 = cljs.core.seq.call(null,seq__30049_30082);
if(temp__4657__auto___30091__$1){
var seq__30049_30092__$1 = temp__4657__auto___30091__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30049_30092__$1)){
var c__25588__auto___30093 = cljs.core.chunk_first.call(null,seq__30049_30092__$1);
var G__30094 = cljs.core.chunk_rest.call(null,seq__30049_30092__$1);
var G__30095 = c__25588__auto___30093;
var G__30096 = cljs.core.count.call(null,c__25588__auto___30093);
var G__30097 = (0);
seq__30049_30082 = G__30094;
chunk__30050_30083 = G__30095;
count__30051_30084 = G__30096;
i__30052_30085 = G__30097;
continue;
} else {
var req_30098 = cljs.core.first.call(null,seq__30049_30092__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30098,prov);

var G__30099 = cljs.core.next.call(null,seq__30049_30092__$1);
var G__30100 = null;
var G__30101 = (0);
var G__30102 = (0);
seq__30049_30082 = G__30099;
chunk__30050_30083 = G__30100;
count__30051_30084 = G__30101;
i__30052_30085 = G__30102;
continue;
}
} else {
}
}
break;
}

var G__30103 = cljs.core.next.call(null,seq__30041__$1);
var G__30104 = null;
var G__30105 = (0);
var G__30106 = (0);
seq__30041 = G__30103;
chunk__30042 = G__30104;
count__30043 = G__30105;
i__30044 = G__30106;
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
var seq__30111_30115 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30112_30116 = null;
var count__30113_30117 = (0);
var i__30114_30118 = (0);
while(true){
if((i__30114_30118 < count__30113_30117)){
var ns_30119 = cljs.core._nth.call(null,chunk__30112_30116,i__30114_30118);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30119);

var G__30120 = seq__30111_30115;
var G__30121 = chunk__30112_30116;
var G__30122 = count__30113_30117;
var G__30123 = (i__30114_30118 + (1));
seq__30111_30115 = G__30120;
chunk__30112_30116 = G__30121;
count__30113_30117 = G__30122;
i__30114_30118 = G__30123;
continue;
} else {
var temp__4657__auto___30124 = cljs.core.seq.call(null,seq__30111_30115);
if(temp__4657__auto___30124){
var seq__30111_30125__$1 = temp__4657__auto___30124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30111_30125__$1)){
var c__25588__auto___30126 = cljs.core.chunk_first.call(null,seq__30111_30125__$1);
var G__30127 = cljs.core.chunk_rest.call(null,seq__30111_30125__$1);
var G__30128 = c__25588__auto___30126;
var G__30129 = cljs.core.count.call(null,c__25588__auto___30126);
var G__30130 = (0);
seq__30111_30115 = G__30127;
chunk__30112_30116 = G__30128;
count__30113_30117 = G__30129;
i__30114_30118 = G__30130;
continue;
} else {
var ns_30131 = cljs.core.first.call(null,seq__30111_30125__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30131);

var G__30132 = cljs.core.next.call(null,seq__30111_30125__$1);
var G__30133 = null;
var G__30134 = (0);
var G__30135 = (0);
seq__30111_30115 = G__30132;
chunk__30112_30116 = G__30133;
count__30113_30117 = G__30134;
i__30114_30118 = G__30135;
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
goog.require_figwheel_backup_ = (function (){var or__24777__auto__ = goog.require__;
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
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
var G__30136__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30136 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30137__i = 0, G__30137__a = new Array(arguments.length -  0);
while (G__30137__i < G__30137__a.length) {G__30137__a[G__30137__i] = arguments[G__30137__i + 0]; ++G__30137__i;}
  args = new cljs.core.IndexedSeq(G__30137__a,0);
} 
return G__30136__delegate.call(this,args);};
G__30136.cljs$lang$maxFixedArity = 0;
G__30136.cljs$lang$applyTo = (function (arglist__30138){
var args = cljs.core.seq(arglist__30138);
return G__30136__delegate(args);
});
G__30136.cljs$core$IFn$_invoke$arity$variadic = G__30136__delegate;
return G__30136;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30140 = cljs.core._EQ_;
var expr__30141 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30140.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30141))){
var path_parts = ((function (pred__30140,expr__30141){
return (function (p1__30139_SHARP_){
return clojure.string.split.call(null,p1__30139_SHARP_,/[\/\\]/);
});})(pred__30140,expr__30141))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30140,expr__30141){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30143){if((e30143 instanceof Error)){
var e = e30143;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30143;

}
}})());
});
;})(path_parts,sep,root,pred__30140,expr__30141))
} else {
if(cljs.core.truth_(pred__30140.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30141))){
return ((function (pred__30140,expr__30141){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__30140,expr__30141){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30140,expr__30141))
);

return deferred.addErrback(((function (deferred,pred__30140,expr__30141){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30140,expr__30141))
);
});
;})(pred__30140,expr__30141))
} else {
return ((function (pred__30140,expr__30141){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30140,expr__30141))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30144,callback){
var map__30147 = p__30144;
var map__30147__$1 = ((((!((map__30147 == null)))?((((map__30147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30147):map__30147);
var file_msg = map__30147__$1;
var request_url = cljs.core.get.call(null,map__30147__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30147,map__30147__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30147,map__30147__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto__){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto__){
return (function (state_30171){
var state_val_30172 = (state_30171[(1)]);
if((state_val_30172 === (7))){
var inst_30167 = (state_30171[(2)]);
var state_30171__$1 = state_30171;
var statearr_30173_30193 = state_30171__$1;
(statearr_30173_30193[(2)] = inst_30167);

(statearr_30173_30193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (1))){
var state_30171__$1 = state_30171;
var statearr_30174_30194 = state_30171__$1;
(statearr_30174_30194[(2)] = null);

(statearr_30174_30194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (4))){
var inst_30151 = (state_30171[(7)]);
var inst_30151__$1 = (state_30171[(2)]);
var state_30171__$1 = (function (){var statearr_30175 = state_30171;
(statearr_30175[(7)] = inst_30151__$1);

return statearr_30175;
})();
if(cljs.core.truth_(inst_30151__$1)){
var statearr_30176_30195 = state_30171__$1;
(statearr_30176_30195[(1)] = (5));

} else {
var statearr_30177_30196 = state_30171__$1;
(statearr_30177_30196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (6))){
var state_30171__$1 = state_30171;
var statearr_30178_30197 = state_30171__$1;
(statearr_30178_30197[(2)] = null);

(statearr_30178_30197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (3))){
var inst_30169 = (state_30171[(2)]);
var state_30171__$1 = state_30171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30171__$1,inst_30169);
} else {
if((state_val_30172 === (2))){
var state_30171__$1 = state_30171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30171__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30172 === (11))){
var inst_30163 = (state_30171[(2)]);
var state_30171__$1 = (function (){var statearr_30179 = state_30171;
(statearr_30179[(8)] = inst_30163);

return statearr_30179;
})();
var statearr_30180_30198 = state_30171__$1;
(statearr_30180_30198[(2)] = null);

(statearr_30180_30198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (9))){
var inst_30157 = (state_30171[(9)]);
var inst_30155 = (state_30171[(10)]);
var inst_30159 = inst_30157.call(null,inst_30155);
var state_30171__$1 = state_30171;
var statearr_30181_30199 = state_30171__$1;
(statearr_30181_30199[(2)] = inst_30159);

(statearr_30181_30199[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (5))){
var inst_30151 = (state_30171[(7)]);
var inst_30153 = figwheel.client.file_reloading.blocking_load.call(null,inst_30151);
var state_30171__$1 = state_30171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30171__$1,(8),inst_30153);
} else {
if((state_val_30172 === (10))){
var inst_30155 = (state_30171[(10)]);
var inst_30161 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30155);
var state_30171__$1 = state_30171;
var statearr_30182_30200 = state_30171__$1;
(statearr_30182_30200[(2)] = inst_30161);

(statearr_30182_30200[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30172 === (8))){
var inst_30157 = (state_30171[(9)]);
var inst_30151 = (state_30171[(7)]);
var inst_30155 = (state_30171[(2)]);
var inst_30156 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30157__$1 = cljs.core.get.call(null,inst_30156,inst_30151);
var state_30171__$1 = (function (){var statearr_30183 = state_30171;
(statearr_30183[(9)] = inst_30157__$1);

(statearr_30183[(10)] = inst_30155);

return statearr_30183;
})();
if(cljs.core.truth_(inst_30157__$1)){
var statearr_30184_30201 = state_30171__$1;
(statearr_30184_30201[(1)] = (9));

} else {
var statearr_30185_30202 = state_30171__$1;
(statearr_30185_30202[(1)] = (10));

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
});})(c__27023__auto__))
;
return ((function (switch__26911__auto__,c__27023__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26912__auto__ = null;
var figwheel$client$file_reloading$state_machine__26912__auto____0 = (function (){
var statearr_30189 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30189[(0)] = figwheel$client$file_reloading$state_machine__26912__auto__);

(statearr_30189[(1)] = (1));

return statearr_30189;
});
var figwheel$client$file_reloading$state_machine__26912__auto____1 = (function (state_30171){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_30171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e30190){if((e30190 instanceof Object)){
var ex__26915__auto__ = e30190;
var statearr_30191_30203 = state_30171;
(statearr_30191_30203[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30204 = state_30171;
state_30171 = G__30204;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26912__auto__ = function(state_30171){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26912__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26912__auto____1.call(this,state_30171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26912__auto____0;
figwheel$client$file_reloading$state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26912__auto____1;
return figwheel$client$file_reloading$state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto__))
})();
var state__27025__auto__ = (function (){var statearr_30192 = f__27024__auto__.call(null);
(statearr_30192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto__);

return statearr_30192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto__))
);

return c__27023__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30205,callback){
var map__30208 = p__30205;
var map__30208__$1 = ((((!((map__30208 == null)))?((((map__30208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30208):map__30208);
var file_msg = map__30208__$1;
var namespace = cljs.core.get.call(null,map__30208__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30208,map__30208__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30208,map__30208__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30210){
var map__30213 = p__30210;
var map__30213__$1 = ((((!((map__30213 == null)))?((((map__30213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30213):map__30213);
var file_msg = map__30213__$1;
var namespace = cljs.core.get.call(null,map__30213__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24765__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24765__auto__){
var or__24777__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24777__auto__)){
return or__24777__auto__;
} else {
var or__24777__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24777__auto____$1)){
return or__24777__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24765__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30215,callback){
var map__30218 = p__30215;
var map__30218__$1 = ((((!((map__30218 == null)))?((((map__30218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30218):map__30218);
var file_msg = map__30218__$1;
var request_url = cljs.core.get.call(null,map__30218__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30218__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27023__auto___30322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto___30322,out){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto___30322,out){
return (function (state_30304){
var state_val_30305 = (state_30304[(1)]);
if((state_val_30305 === (1))){
var inst_30278 = cljs.core.seq.call(null,files);
var inst_30279 = cljs.core.first.call(null,inst_30278);
var inst_30280 = cljs.core.next.call(null,inst_30278);
var inst_30281 = files;
var state_30304__$1 = (function (){var statearr_30306 = state_30304;
(statearr_30306[(7)] = inst_30281);

(statearr_30306[(8)] = inst_30279);

(statearr_30306[(9)] = inst_30280);

return statearr_30306;
})();
var statearr_30307_30323 = state_30304__$1;
(statearr_30307_30323[(2)] = null);

(statearr_30307_30323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (2))){
var inst_30281 = (state_30304[(7)]);
var inst_30287 = (state_30304[(10)]);
var inst_30286 = cljs.core.seq.call(null,inst_30281);
var inst_30287__$1 = cljs.core.first.call(null,inst_30286);
var inst_30288 = cljs.core.next.call(null,inst_30286);
var inst_30289 = (inst_30287__$1 == null);
var inst_30290 = cljs.core.not.call(null,inst_30289);
var state_30304__$1 = (function (){var statearr_30308 = state_30304;
(statearr_30308[(10)] = inst_30287__$1);

(statearr_30308[(11)] = inst_30288);

return statearr_30308;
})();
if(inst_30290){
var statearr_30309_30324 = state_30304__$1;
(statearr_30309_30324[(1)] = (4));

} else {
var statearr_30310_30325 = state_30304__$1;
(statearr_30310_30325[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (3))){
var inst_30302 = (state_30304[(2)]);
var state_30304__$1 = state_30304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30304__$1,inst_30302);
} else {
if((state_val_30305 === (4))){
var inst_30287 = (state_30304[(10)]);
var inst_30292 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30287);
var state_30304__$1 = state_30304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30304__$1,(7),inst_30292);
} else {
if((state_val_30305 === (5))){
var inst_30298 = cljs.core.async.close_BANG_.call(null,out);
var state_30304__$1 = state_30304;
var statearr_30311_30326 = state_30304__$1;
(statearr_30311_30326[(2)] = inst_30298);

(statearr_30311_30326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (6))){
var inst_30300 = (state_30304[(2)]);
var state_30304__$1 = state_30304;
var statearr_30312_30327 = state_30304__$1;
(statearr_30312_30327[(2)] = inst_30300);

(statearr_30312_30327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30305 === (7))){
var inst_30288 = (state_30304[(11)]);
var inst_30294 = (state_30304[(2)]);
var inst_30295 = cljs.core.async.put_BANG_.call(null,out,inst_30294);
var inst_30281 = inst_30288;
var state_30304__$1 = (function (){var statearr_30313 = state_30304;
(statearr_30313[(7)] = inst_30281);

(statearr_30313[(12)] = inst_30295);

return statearr_30313;
})();
var statearr_30314_30328 = state_30304__$1;
(statearr_30314_30328[(2)] = null);

(statearr_30314_30328[(1)] = (2));


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
});})(c__27023__auto___30322,out))
;
return ((function (switch__26911__auto__,c__27023__auto___30322,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26912__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26912__auto____0 = (function (){
var statearr_30318 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30318[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26912__auto__);

(statearr_30318[(1)] = (1));

return statearr_30318;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26912__auto____1 = (function (state_30304){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_30304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e30319){if((e30319 instanceof Object)){
var ex__26915__auto__ = e30319;
var statearr_30320_30329 = state_30304;
(statearr_30320_30329[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30330 = state_30304;
state_30304 = G__30330;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26912__auto__ = function(state_30304){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26912__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26912__auto____1.call(this,state_30304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26912__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26912__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto___30322,out))
})();
var state__27025__auto__ = (function (){var statearr_30321 = f__27024__auto__.call(null);
(statearr_30321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto___30322);

return statearr_30321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto___30322,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30331,opts){
var map__30335 = p__30331;
var map__30335__$1 = ((((!((map__30335 == null)))?((((map__30335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30335):map__30335);
var eval_body__$1 = cljs.core.get.call(null,map__30335__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30335__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24765__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24765__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24765__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30337){var e = e30337;
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
return (function (p1__30338_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30338_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__30347){
var vec__30348 = p__30347;
var k = cljs.core.nth.call(null,vec__30348,(0),null);
var v = cljs.core.nth.call(null,vec__30348,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30351){
var vec__30352 = p__30351;
var k = cljs.core.nth.call(null,vec__30352,(0),null);
var v = cljs.core.nth.call(null,vec__30352,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30358,p__30359){
var map__30606 = p__30358;
var map__30606__$1 = ((((!((map__30606 == null)))?((((map__30606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30606):map__30606);
var opts = map__30606__$1;
var before_jsload = cljs.core.get.call(null,map__30606__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30606__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30606__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30607 = p__30359;
var map__30607__$1 = ((((!((map__30607 == null)))?((((map__30607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30607):map__30607);
var msg = map__30607__$1;
var files = cljs.core.get.call(null,map__30607__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30607__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30607__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27023__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27023__auto__,map__30606,map__30606__$1,opts,before_jsload,on_jsload,reload_dependents,map__30607,map__30607__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27024__auto__ = (function (){var switch__26911__auto__ = ((function (c__27023__auto__,map__30606,map__30606__$1,opts,before_jsload,on_jsload,reload_dependents,map__30607,map__30607__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30760){
var state_val_30761 = (state_30760[(1)]);
if((state_val_30761 === (7))){
var inst_30623 = (state_30760[(7)]);
var inst_30621 = (state_30760[(8)]);
var inst_30622 = (state_30760[(9)]);
var inst_30624 = (state_30760[(10)]);
var inst_30629 = cljs.core._nth.call(null,inst_30622,inst_30624);
var inst_30630 = figwheel.client.file_reloading.eval_body.call(null,inst_30629,opts);
var inst_30631 = (inst_30624 + (1));
var tmp30762 = inst_30623;
var tmp30763 = inst_30621;
var tmp30764 = inst_30622;
var inst_30621__$1 = tmp30763;
var inst_30622__$1 = tmp30764;
var inst_30623__$1 = tmp30762;
var inst_30624__$1 = inst_30631;
var state_30760__$1 = (function (){var statearr_30765 = state_30760;
(statearr_30765[(7)] = inst_30623__$1);

(statearr_30765[(11)] = inst_30630);

(statearr_30765[(8)] = inst_30621__$1);

(statearr_30765[(9)] = inst_30622__$1);

(statearr_30765[(10)] = inst_30624__$1);

return statearr_30765;
})();
var statearr_30766_30852 = state_30760__$1;
(statearr_30766_30852[(2)] = null);

(statearr_30766_30852[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (20))){
var inst_30664 = (state_30760[(12)]);
var inst_30672 = figwheel.client.file_reloading.sort_files.call(null,inst_30664);
var state_30760__$1 = state_30760;
var statearr_30767_30853 = state_30760__$1;
(statearr_30767_30853[(2)] = inst_30672);

(statearr_30767_30853[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (27))){
var state_30760__$1 = state_30760;
var statearr_30768_30854 = state_30760__$1;
(statearr_30768_30854[(2)] = null);

(statearr_30768_30854[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (1))){
var inst_30613 = (state_30760[(13)]);
var inst_30610 = before_jsload.call(null,files);
var inst_30611 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30612 = (function (){return ((function (inst_30613,inst_30610,inst_30611,state_val_30761,c__27023__auto__,map__30606,map__30606__$1,opts,before_jsload,on_jsload,reload_dependents,map__30607,map__30607__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30355_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30355_SHARP_);
});
;})(inst_30613,inst_30610,inst_30611,state_val_30761,c__27023__auto__,map__30606,map__30606__$1,opts,before_jsload,on_jsload,reload_dependents,map__30607,map__30607__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30613__$1 = cljs.core.filter.call(null,inst_30612,files);
var inst_30614 = cljs.core.not_empty.call(null,inst_30613__$1);
var state_30760__$1 = (function (){var statearr_30769 = state_30760;
(statearr_30769[(13)] = inst_30613__$1);

(statearr_30769[(14)] = inst_30610);

(statearr_30769[(15)] = inst_30611);

return statearr_30769;
})();
if(cljs.core.truth_(inst_30614)){
var statearr_30770_30855 = state_30760__$1;
(statearr_30770_30855[(1)] = (2));

} else {
var statearr_30771_30856 = state_30760__$1;
(statearr_30771_30856[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (24))){
var state_30760__$1 = state_30760;
var statearr_30772_30857 = state_30760__$1;
(statearr_30772_30857[(2)] = null);

(statearr_30772_30857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (39))){
var inst_30714 = (state_30760[(16)]);
var state_30760__$1 = state_30760;
var statearr_30773_30858 = state_30760__$1;
(statearr_30773_30858[(2)] = inst_30714);

(statearr_30773_30858[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (46))){
var inst_30755 = (state_30760[(2)]);
var state_30760__$1 = state_30760;
var statearr_30774_30859 = state_30760__$1;
(statearr_30774_30859[(2)] = inst_30755);

(statearr_30774_30859[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (4))){
var inst_30658 = (state_30760[(2)]);
var inst_30659 = cljs.core.List.EMPTY;
var inst_30660 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30659);
var inst_30661 = (function (){return ((function (inst_30658,inst_30659,inst_30660,state_val_30761,c__27023__auto__,map__30606,map__30606__$1,opts,before_jsload,on_jsload,reload_dependents,map__30607,map__30607__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30356_SHARP_){
var and__24765__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30356_SHARP_);
if(cljs.core.truth_(and__24765__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30356_SHARP_));
} else {
return and__24765__auto__;
}
});
;})(inst_30658,inst_30659,inst_30660,state_val_30761,c__27023__auto__,map__30606,map__30606__$1,opts,before_jsload,on_jsload,reload_dependents,map__30607,map__30607__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30662 = cljs.core.filter.call(null,inst_30661,files);
var inst_30663 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30664 = cljs.core.concat.call(null,inst_30662,inst_30663);
var state_30760__$1 = (function (){var statearr_30775 = state_30760;
(statearr_30775[(12)] = inst_30664);

(statearr_30775[(17)] = inst_30658);

(statearr_30775[(18)] = inst_30660);

return statearr_30775;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30776_30860 = state_30760__$1;
(statearr_30776_30860[(1)] = (16));

} else {
var statearr_30777_30861 = state_30760__$1;
(statearr_30777_30861[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (15))){
var inst_30648 = (state_30760[(2)]);
var state_30760__$1 = state_30760;
var statearr_30778_30862 = state_30760__$1;
(statearr_30778_30862[(2)] = inst_30648);

(statearr_30778_30862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (21))){
var inst_30674 = (state_30760[(19)]);
var inst_30674__$1 = (state_30760[(2)]);
var inst_30675 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30674__$1);
var state_30760__$1 = (function (){var statearr_30779 = state_30760;
(statearr_30779[(19)] = inst_30674__$1);

return statearr_30779;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30760__$1,(22),inst_30675);
} else {
if((state_val_30761 === (31))){
var inst_30758 = (state_30760[(2)]);
var state_30760__$1 = state_30760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30760__$1,inst_30758);
} else {
if((state_val_30761 === (32))){
var inst_30714 = (state_30760[(16)]);
var inst_30719 = inst_30714.cljs$lang$protocol_mask$partition0$;
var inst_30720 = (inst_30719 & (64));
var inst_30721 = inst_30714.cljs$core$ISeq$;
var inst_30722 = (inst_30720) || (inst_30721);
var state_30760__$1 = state_30760;
if(cljs.core.truth_(inst_30722)){
var statearr_30780_30863 = state_30760__$1;
(statearr_30780_30863[(1)] = (35));

} else {
var statearr_30781_30864 = state_30760__$1;
(statearr_30781_30864[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (40))){
var inst_30735 = (state_30760[(20)]);
var inst_30734 = (state_30760[(2)]);
var inst_30735__$1 = cljs.core.get.call(null,inst_30734,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30736 = cljs.core.get.call(null,inst_30734,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30737 = cljs.core.not_empty.call(null,inst_30735__$1);
var state_30760__$1 = (function (){var statearr_30782 = state_30760;
(statearr_30782[(20)] = inst_30735__$1);

(statearr_30782[(21)] = inst_30736);

return statearr_30782;
})();
if(cljs.core.truth_(inst_30737)){
var statearr_30783_30865 = state_30760__$1;
(statearr_30783_30865[(1)] = (41));

} else {
var statearr_30784_30866 = state_30760__$1;
(statearr_30784_30866[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (33))){
var state_30760__$1 = state_30760;
var statearr_30785_30867 = state_30760__$1;
(statearr_30785_30867[(2)] = false);

(statearr_30785_30867[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (13))){
var inst_30634 = (state_30760[(22)]);
var inst_30638 = cljs.core.chunk_first.call(null,inst_30634);
var inst_30639 = cljs.core.chunk_rest.call(null,inst_30634);
var inst_30640 = cljs.core.count.call(null,inst_30638);
var inst_30621 = inst_30639;
var inst_30622 = inst_30638;
var inst_30623 = inst_30640;
var inst_30624 = (0);
var state_30760__$1 = (function (){var statearr_30786 = state_30760;
(statearr_30786[(7)] = inst_30623);

(statearr_30786[(8)] = inst_30621);

(statearr_30786[(9)] = inst_30622);

(statearr_30786[(10)] = inst_30624);

return statearr_30786;
})();
var statearr_30787_30868 = state_30760__$1;
(statearr_30787_30868[(2)] = null);

(statearr_30787_30868[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (22))){
var inst_30677 = (state_30760[(23)]);
var inst_30678 = (state_30760[(24)]);
var inst_30682 = (state_30760[(25)]);
var inst_30674 = (state_30760[(19)]);
var inst_30677__$1 = (state_30760[(2)]);
var inst_30678__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30677__$1);
var inst_30679 = (function (){var all_files = inst_30674;
var res_SINGLEQUOTE_ = inst_30677__$1;
var res = inst_30678__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30677,inst_30678,inst_30682,inst_30674,inst_30677__$1,inst_30678__$1,state_val_30761,c__27023__auto__,map__30606,map__30606__$1,opts,before_jsload,on_jsload,reload_dependents,map__30607,map__30607__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30357_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30357_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30677,inst_30678,inst_30682,inst_30674,inst_30677__$1,inst_30678__$1,state_val_30761,c__27023__auto__,map__30606,map__30606__$1,opts,before_jsload,on_jsload,reload_dependents,map__30607,map__30607__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30680 = cljs.core.filter.call(null,inst_30679,inst_30677__$1);
var inst_30681 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30682__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30681);
var inst_30683 = cljs.core.not_empty.call(null,inst_30682__$1);
var state_30760__$1 = (function (){var statearr_30788 = state_30760;
(statearr_30788[(23)] = inst_30677__$1);

(statearr_30788[(24)] = inst_30678__$1);

(statearr_30788[(25)] = inst_30682__$1);

(statearr_30788[(26)] = inst_30680);

return statearr_30788;
})();
if(cljs.core.truth_(inst_30683)){
var statearr_30789_30869 = state_30760__$1;
(statearr_30789_30869[(1)] = (23));

} else {
var statearr_30790_30870 = state_30760__$1;
(statearr_30790_30870[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (36))){
var state_30760__$1 = state_30760;
var statearr_30791_30871 = state_30760__$1;
(statearr_30791_30871[(2)] = false);

(statearr_30791_30871[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (41))){
var inst_30735 = (state_30760[(20)]);
var inst_30739 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30740 = cljs.core.map.call(null,inst_30739,inst_30735);
var inst_30741 = cljs.core.pr_str.call(null,inst_30740);
var inst_30742 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30741)].join('');
var inst_30743 = figwheel.client.utils.log.call(null,inst_30742);
var state_30760__$1 = state_30760;
var statearr_30792_30872 = state_30760__$1;
(statearr_30792_30872[(2)] = inst_30743);

(statearr_30792_30872[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (43))){
var inst_30736 = (state_30760[(21)]);
var inst_30746 = (state_30760[(2)]);
var inst_30747 = cljs.core.not_empty.call(null,inst_30736);
var state_30760__$1 = (function (){var statearr_30793 = state_30760;
(statearr_30793[(27)] = inst_30746);

return statearr_30793;
})();
if(cljs.core.truth_(inst_30747)){
var statearr_30794_30873 = state_30760__$1;
(statearr_30794_30873[(1)] = (44));

} else {
var statearr_30795_30874 = state_30760__$1;
(statearr_30795_30874[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (29))){
var inst_30677 = (state_30760[(23)]);
var inst_30678 = (state_30760[(24)]);
var inst_30682 = (state_30760[(25)]);
var inst_30714 = (state_30760[(16)]);
var inst_30674 = (state_30760[(19)]);
var inst_30680 = (state_30760[(26)]);
var inst_30710 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30713 = (function (){var all_files = inst_30674;
var res_SINGLEQUOTE_ = inst_30677;
var res = inst_30678;
var files_not_loaded = inst_30680;
var dependencies_that_loaded = inst_30682;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30677,inst_30678,inst_30682,inst_30714,inst_30674,inst_30680,inst_30710,state_val_30761,c__27023__auto__,map__30606,map__30606__$1,opts,before_jsload,on_jsload,reload_dependents,map__30607,map__30607__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30712){
var map__30796 = p__30712;
var map__30796__$1 = ((((!((map__30796 == null)))?((((map__30796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30796):map__30796);
var namespace = cljs.core.get.call(null,map__30796__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30677,inst_30678,inst_30682,inst_30714,inst_30674,inst_30680,inst_30710,state_val_30761,c__27023__auto__,map__30606,map__30606__$1,opts,before_jsload,on_jsload,reload_dependents,map__30607,map__30607__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30714__$1 = cljs.core.group_by.call(null,inst_30713,inst_30680);
var inst_30716 = (inst_30714__$1 == null);
var inst_30717 = cljs.core.not.call(null,inst_30716);
var state_30760__$1 = (function (){var statearr_30798 = state_30760;
(statearr_30798[(16)] = inst_30714__$1);

(statearr_30798[(28)] = inst_30710);

return statearr_30798;
})();
if(inst_30717){
var statearr_30799_30875 = state_30760__$1;
(statearr_30799_30875[(1)] = (32));

} else {
var statearr_30800_30876 = state_30760__$1;
(statearr_30800_30876[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (44))){
var inst_30736 = (state_30760[(21)]);
var inst_30749 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30736);
var inst_30750 = cljs.core.pr_str.call(null,inst_30749);
var inst_30751 = [cljs.core.str("not required: "),cljs.core.str(inst_30750)].join('');
var inst_30752 = figwheel.client.utils.log.call(null,inst_30751);
var state_30760__$1 = state_30760;
var statearr_30801_30877 = state_30760__$1;
(statearr_30801_30877[(2)] = inst_30752);

(statearr_30801_30877[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (6))){
var inst_30655 = (state_30760[(2)]);
var state_30760__$1 = state_30760;
var statearr_30802_30878 = state_30760__$1;
(statearr_30802_30878[(2)] = inst_30655);

(statearr_30802_30878[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (28))){
var inst_30680 = (state_30760[(26)]);
var inst_30707 = (state_30760[(2)]);
var inst_30708 = cljs.core.not_empty.call(null,inst_30680);
var state_30760__$1 = (function (){var statearr_30803 = state_30760;
(statearr_30803[(29)] = inst_30707);

return statearr_30803;
})();
if(cljs.core.truth_(inst_30708)){
var statearr_30804_30879 = state_30760__$1;
(statearr_30804_30879[(1)] = (29));

} else {
var statearr_30805_30880 = state_30760__$1;
(statearr_30805_30880[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (25))){
var inst_30678 = (state_30760[(24)]);
var inst_30694 = (state_30760[(2)]);
var inst_30695 = cljs.core.not_empty.call(null,inst_30678);
var state_30760__$1 = (function (){var statearr_30806 = state_30760;
(statearr_30806[(30)] = inst_30694);

return statearr_30806;
})();
if(cljs.core.truth_(inst_30695)){
var statearr_30807_30881 = state_30760__$1;
(statearr_30807_30881[(1)] = (26));

} else {
var statearr_30808_30882 = state_30760__$1;
(statearr_30808_30882[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (34))){
var inst_30729 = (state_30760[(2)]);
var state_30760__$1 = state_30760;
if(cljs.core.truth_(inst_30729)){
var statearr_30809_30883 = state_30760__$1;
(statearr_30809_30883[(1)] = (38));

} else {
var statearr_30810_30884 = state_30760__$1;
(statearr_30810_30884[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (17))){
var state_30760__$1 = state_30760;
var statearr_30811_30885 = state_30760__$1;
(statearr_30811_30885[(2)] = recompile_dependents);

(statearr_30811_30885[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (3))){
var state_30760__$1 = state_30760;
var statearr_30812_30886 = state_30760__$1;
(statearr_30812_30886[(2)] = null);

(statearr_30812_30886[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (12))){
var inst_30651 = (state_30760[(2)]);
var state_30760__$1 = state_30760;
var statearr_30813_30887 = state_30760__$1;
(statearr_30813_30887[(2)] = inst_30651);

(statearr_30813_30887[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (2))){
var inst_30613 = (state_30760[(13)]);
var inst_30620 = cljs.core.seq.call(null,inst_30613);
var inst_30621 = inst_30620;
var inst_30622 = null;
var inst_30623 = (0);
var inst_30624 = (0);
var state_30760__$1 = (function (){var statearr_30814 = state_30760;
(statearr_30814[(7)] = inst_30623);

(statearr_30814[(8)] = inst_30621);

(statearr_30814[(9)] = inst_30622);

(statearr_30814[(10)] = inst_30624);

return statearr_30814;
})();
var statearr_30815_30888 = state_30760__$1;
(statearr_30815_30888[(2)] = null);

(statearr_30815_30888[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (23))){
var inst_30677 = (state_30760[(23)]);
var inst_30678 = (state_30760[(24)]);
var inst_30682 = (state_30760[(25)]);
var inst_30674 = (state_30760[(19)]);
var inst_30680 = (state_30760[(26)]);
var inst_30685 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30687 = (function (){var all_files = inst_30674;
var res_SINGLEQUOTE_ = inst_30677;
var res = inst_30678;
var files_not_loaded = inst_30680;
var dependencies_that_loaded = inst_30682;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30677,inst_30678,inst_30682,inst_30674,inst_30680,inst_30685,state_val_30761,c__27023__auto__,map__30606,map__30606__$1,opts,before_jsload,on_jsload,reload_dependents,map__30607,map__30607__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30686){
var map__30816 = p__30686;
var map__30816__$1 = ((((!((map__30816 == null)))?((((map__30816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30816):map__30816);
var request_url = cljs.core.get.call(null,map__30816__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30677,inst_30678,inst_30682,inst_30674,inst_30680,inst_30685,state_val_30761,c__27023__auto__,map__30606,map__30606__$1,opts,before_jsload,on_jsload,reload_dependents,map__30607,map__30607__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30688 = cljs.core.reverse.call(null,inst_30682);
var inst_30689 = cljs.core.map.call(null,inst_30687,inst_30688);
var inst_30690 = cljs.core.pr_str.call(null,inst_30689);
var inst_30691 = figwheel.client.utils.log.call(null,inst_30690);
var state_30760__$1 = (function (){var statearr_30818 = state_30760;
(statearr_30818[(31)] = inst_30685);

return statearr_30818;
})();
var statearr_30819_30889 = state_30760__$1;
(statearr_30819_30889[(2)] = inst_30691);

(statearr_30819_30889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (35))){
var state_30760__$1 = state_30760;
var statearr_30820_30890 = state_30760__$1;
(statearr_30820_30890[(2)] = true);

(statearr_30820_30890[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (19))){
var inst_30664 = (state_30760[(12)]);
var inst_30670 = figwheel.client.file_reloading.expand_files.call(null,inst_30664);
var state_30760__$1 = state_30760;
var statearr_30821_30891 = state_30760__$1;
(statearr_30821_30891[(2)] = inst_30670);

(statearr_30821_30891[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (11))){
var state_30760__$1 = state_30760;
var statearr_30822_30892 = state_30760__$1;
(statearr_30822_30892[(2)] = null);

(statearr_30822_30892[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (9))){
var inst_30653 = (state_30760[(2)]);
var state_30760__$1 = state_30760;
var statearr_30823_30893 = state_30760__$1;
(statearr_30823_30893[(2)] = inst_30653);

(statearr_30823_30893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (5))){
var inst_30623 = (state_30760[(7)]);
var inst_30624 = (state_30760[(10)]);
var inst_30626 = (inst_30624 < inst_30623);
var inst_30627 = inst_30626;
var state_30760__$1 = state_30760;
if(cljs.core.truth_(inst_30627)){
var statearr_30824_30894 = state_30760__$1;
(statearr_30824_30894[(1)] = (7));

} else {
var statearr_30825_30895 = state_30760__$1;
(statearr_30825_30895[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (14))){
var inst_30634 = (state_30760[(22)]);
var inst_30643 = cljs.core.first.call(null,inst_30634);
var inst_30644 = figwheel.client.file_reloading.eval_body.call(null,inst_30643,opts);
var inst_30645 = cljs.core.next.call(null,inst_30634);
var inst_30621 = inst_30645;
var inst_30622 = null;
var inst_30623 = (0);
var inst_30624 = (0);
var state_30760__$1 = (function (){var statearr_30826 = state_30760;
(statearr_30826[(7)] = inst_30623);

(statearr_30826[(32)] = inst_30644);

(statearr_30826[(8)] = inst_30621);

(statearr_30826[(9)] = inst_30622);

(statearr_30826[(10)] = inst_30624);

return statearr_30826;
})();
var statearr_30827_30896 = state_30760__$1;
(statearr_30827_30896[(2)] = null);

(statearr_30827_30896[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (45))){
var state_30760__$1 = state_30760;
var statearr_30828_30897 = state_30760__$1;
(statearr_30828_30897[(2)] = null);

(statearr_30828_30897[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (26))){
var inst_30677 = (state_30760[(23)]);
var inst_30678 = (state_30760[(24)]);
var inst_30682 = (state_30760[(25)]);
var inst_30674 = (state_30760[(19)]);
var inst_30680 = (state_30760[(26)]);
var inst_30697 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30699 = (function (){var all_files = inst_30674;
var res_SINGLEQUOTE_ = inst_30677;
var res = inst_30678;
var files_not_loaded = inst_30680;
var dependencies_that_loaded = inst_30682;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30677,inst_30678,inst_30682,inst_30674,inst_30680,inst_30697,state_val_30761,c__27023__auto__,map__30606,map__30606__$1,opts,before_jsload,on_jsload,reload_dependents,map__30607,map__30607__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30698){
var map__30829 = p__30698;
var map__30829__$1 = ((((!((map__30829 == null)))?((((map__30829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30829):map__30829);
var namespace = cljs.core.get.call(null,map__30829__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30829__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30677,inst_30678,inst_30682,inst_30674,inst_30680,inst_30697,state_val_30761,c__27023__auto__,map__30606,map__30606__$1,opts,before_jsload,on_jsload,reload_dependents,map__30607,map__30607__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30700 = cljs.core.map.call(null,inst_30699,inst_30678);
var inst_30701 = cljs.core.pr_str.call(null,inst_30700);
var inst_30702 = figwheel.client.utils.log.call(null,inst_30701);
var inst_30703 = (function (){var all_files = inst_30674;
var res_SINGLEQUOTE_ = inst_30677;
var res = inst_30678;
var files_not_loaded = inst_30680;
var dependencies_that_loaded = inst_30682;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30677,inst_30678,inst_30682,inst_30674,inst_30680,inst_30697,inst_30699,inst_30700,inst_30701,inst_30702,state_val_30761,c__27023__auto__,map__30606,map__30606__$1,opts,before_jsload,on_jsload,reload_dependents,map__30607,map__30607__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30677,inst_30678,inst_30682,inst_30674,inst_30680,inst_30697,inst_30699,inst_30700,inst_30701,inst_30702,state_val_30761,c__27023__auto__,map__30606,map__30606__$1,opts,before_jsload,on_jsload,reload_dependents,map__30607,map__30607__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30704 = setTimeout(inst_30703,(10));
var state_30760__$1 = (function (){var statearr_30831 = state_30760;
(statearr_30831[(33)] = inst_30697);

(statearr_30831[(34)] = inst_30702);

return statearr_30831;
})();
var statearr_30832_30898 = state_30760__$1;
(statearr_30832_30898[(2)] = inst_30704);

(statearr_30832_30898[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (16))){
var state_30760__$1 = state_30760;
var statearr_30833_30899 = state_30760__$1;
(statearr_30833_30899[(2)] = reload_dependents);

(statearr_30833_30899[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (38))){
var inst_30714 = (state_30760[(16)]);
var inst_30731 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30714);
var state_30760__$1 = state_30760;
var statearr_30834_30900 = state_30760__$1;
(statearr_30834_30900[(2)] = inst_30731);

(statearr_30834_30900[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (30))){
var state_30760__$1 = state_30760;
var statearr_30835_30901 = state_30760__$1;
(statearr_30835_30901[(2)] = null);

(statearr_30835_30901[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (10))){
var inst_30634 = (state_30760[(22)]);
var inst_30636 = cljs.core.chunked_seq_QMARK_.call(null,inst_30634);
var state_30760__$1 = state_30760;
if(inst_30636){
var statearr_30836_30902 = state_30760__$1;
(statearr_30836_30902[(1)] = (13));

} else {
var statearr_30837_30903 = state_30760__$1;
(statearr_30837_30903[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (18))){
var inst_30668 = (state_30760[(2)]);
var state_30760__$1 = state_30760;
if(cljs.core.truth_(inst_30668)){
var statearr_30838_30904 = state_30760__$1;
(statearr_30838_30904[(1)] = (19));

} else {
var statearr_30839_30905 = state_30760__$1;
(statearr_30839_30905[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (42))){
var state_30760__$1 = state_30760;
var statearr_30840_30906 = state_30760__$1;
(statearr_30840_30906[(2)] = null);

(statearr_30840_30906[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (37))){
var inst_30726 = (state_30760[(2)]);
var state_30760__$1 = state_30760;
var statearr_30841_30907 = state_30760__$1;
(statearr_30841_30907[(2)] = inst_30726);

(statearr_30841_30907[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (8))){
var inst_30621 = (state_30760[(8)]);
var inst_30634 = (state_30760[(22)]);
var inst_30634__$1 = cljs.core.seq.call(null,inst_30621);
var state_30760__$1 = (function (){var statearr_30842 = state_30760;
(statearr_30842[(22)] = inst_30634__$1);

return statearr_30842;
})();
if(inst_30634__$1){
var statearr_30843_30908 = state_30760__$1;
(statearr_30843_30908[(1)] = (10));

} else {
var statearr_30844_30909 = state_30760__$1;
(statearr_30844_30909[(1)] = (11));

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
});})(c__27023__auto__,map__30606,map__30606__$1,opts,before_jsload,on_jsload,reload_dependents,map__30607,map__30607__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26911__auto__,c__27023__auto__,map__30606,map__30606__$1,opts,before_jsload,on_jsload,reload_dependents,map__30607,map__30607__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26912__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26912__auto____0 = (function (){
var statearr_30848 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30848[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26912__auto__);

(statearr_30848[(1)] = (1));

return statearr_30848;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26912__auto____1 = (function (state_30760){
while(true){
var ret_value__26913__auto__ = (function (){try{while(true){
var result__26914__auto__ = switch__26911__auto__.call(null,state_30760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26914__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26914__auto__;
}
break;
}
}catch (e30849){if((e30849 instanceof Object)){
var ex__26915__auto__ = e30849;
var statearr_30850_30910 = state_30760;
(statearr_30850_30910[(5)] = ex__26915__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26913__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30911 = state_30760;
state_30760 = G__30911;
continue;
} else {
return ret_value__26913__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26912__auto__ = function(state_30760){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26912__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26912__auto____1.call(this,state_30760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26912__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26912__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26912__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26912__auto__;
})()
;})(switch__26911__auto__,c__27023__auto__,map__30606,map__30606__$1,opts,before_jsload,on_jsload,reload_dependents,map__30607,map__30607__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27025__auto__ = (function (){var statearr_30851 = f__27024__auto__.call(null);
(statearr_30851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27023__auto__);

return statearr_30851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27025__auto__);
});})(c__27023__auto__,map__30606,map__30606__$1,opts,before_jsload,on_jsload,reload_dependents,map__30607,map__30607__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27023__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30914,link){
var map__30917 = p__30914;
var map__30917__$1 = ((((!((map__30917 == null)))?((((map__30917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30917):map__30917);
var file = cljs.core.get.call(null,map__30917__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__30917,map__30917__$1,file){
return (function (p1__30912_SHARP_,p2__30913_SHARP_){
if(cljs.core._EQ_.call(null,p1__30912_SHARP_,p2__30913_SHARP_)){
return p1__30912_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__30917,map__30917__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30923){
var map__30924 = p__30923;
var map__30924__$1 = ((((!((map__30924 == null)))?((((map__30924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30924):map__30924);
var match_length = cljs.core.get.call(null,map__30924__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30924__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30919_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30919_SHARP_);
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
var args30926 = [];
var len__25852__auto___30929 = arguments.length;
var i__25853__auto___30930 = (0);
while(true){
if((i__25853__auto___30930 < len__25852__auto___30929)){
args30926.push((arguments[i__25853__auto___30930]));

var G__30931 = (i__25853__auto___30930 + (1));
i__25853__auto___30930 = G__30931;
continue;
} else {
}
break;
}

var G__30928 = args30926.length;
switch (G__30928) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30926.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30933_SHARP_,p2__30934_SHARP_){
return cljs.core.assoc.call(null,p1__30933_SHARP_,cljs.core.get.call(null,p2__30934_SHARP_,key),p2__30934_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30935){
var map__30938 = p__30935;
var map__30938__$1 = ((((!((map__30938 == null)))?((((map__30938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30938):map__30938);
var f_data = map__30938__$1;
var file = cljs.core.get.call(null,map__30938__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30940,p__30941){
var map__30950 = p__30940;
var map__30950__$1 = ((((!((map__30950 == null)))?((((map__30950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30950):map__30950);
var opts = map__30950__$1;
var on_cssload = cljs.core.get.call(null,map__30950__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30951 = p__30941;
var map__30951__$1 = ((((!((map__30951 == null)))?((((map__30951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30951):map__30951);
var files_msg = map__30951__$1;
var files = cljs.core.get.call(null,map__30951__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30954_30958 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__30955_30959 = null;
var count__30956_30960 = (0);
var i__30957_30961 = (0);
while(true){
if((i__30957_30961 < count__30956_30960)){
var f_30962 = cljs.core._nth.call(null,chunk__30955_30959,i__30957_30961);
figwheel.client.file_reloading.reload_css_file.call(null,f_30962);

var G__30963 = seq__30954_30958;
var G__30964 = chunk__30955_30959;
var G__30965 = count__30956_30960;
var G__30966 = (i__30957_30961 + (1));
seq__30954_30958 = G__30963;
chunk__30955_30959 = G__30964;
count__30956_30960 = G__30965;
i__30957_30961 = G__30966;
continue;
} else {
var temp__4657__auto___30967 = cljs.core.seq.call(null,seq__30954_30958);
if(temp__4657__auto___30967){
var seq__30954_30968__$1 = temp__4657__auto___30967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30954_30968__$1)){
var c__25588__auto___30969 = cljs.core.chunk_first.call(null,seq__30954_30968__$1);
var G__30970 = cljs.core.chunk_rest.call(null,seq__30954_30968__$1);
var G__30971 = c__25588__auto___30969;
var G__30972 = cljs.core.count.call(null,c__25588__auto___30969);
var G__30973 = (0);
seq__30954_30958 = G__30970;
chunk__30955_30959 = G__30971;
count__30956_30960 = G__30972;
i__30957_30961 = G__30973;
continue;
} else {
var f_30974 = cljs.core.first.call(null,seq__30954_30968__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30974);

var G__30975 = cljs.core.next.call(null,seq__30954_30968__$1);
var G__30976 = null;
var G__30977 = (0);
var G__30978 = (0);
seq__30954_30958 = G__30975;
chunk__30955_30959 = G__30976;
count__30956_30960 = G__30977;
i__30957_30961 = G__30978;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30950,map__30950__$1,opts,on_cssload,map__30951,map__30951__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__30950,map__30950__$1,opts,on_cssload,map__30951,map__30951__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1485355880607