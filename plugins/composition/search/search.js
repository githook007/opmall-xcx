(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/composition/search/search"],{"25fc":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o("2f62");function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(o,!0).forEach(function(e){a(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(o).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var c=function(){return o.e("components/basic-component/app-composition/app-composition").then(o.bind(null,"9495"))},s={data:function(){return{list:[],keyword:"",choose_list:[],detail:{},animationData:{},height:0,searchResult:!1,searchMode:!0,getFocus:!0,showGoods:!1}},components:{"app-composition":c},computed:r({},(0,n.mapGetters)("mallConfig",{getTheme:"getTheme"})),methods:{show:function(e){this.detail=e,this.showGoods=!0;var o=t.createAnimation({duration:1e3,timingFunction:"ease"});this.animation=o,o.translateY(this.height).step(),this.animationData=o.export()},close:function(){this.detail={},this.showGoods=!1},toDetail:function(e){this.close(),t.navigateTo({url:"/plugins/composition/detail/detail?composition_id="+e.id})},toGoods:function(e){t.navigateTo({url:"/pages/goods/goods?id="+e})},clearSearch:function(){this.keyword="",this.list=[],this.searchResult=!1},toSearch:function(){var e=this;t.showLoading({mask:!0,title:"搜索中..."}),e.$request({url:e.$api.composition.index,data:{keyword:e.keyword}}).then(function(o){t.hideLoading(),e.searchResult=!0,0==o.code?e.list=o.data.list:(t.hideLoading(),t.showToast({title:o.msg,icon:"none",duration:1e3}))}).catch(function(t){e.$hideLoading()})}},onLoad:function(){this.$commonLoad.onload();var e=this;t.getSystemInfo({success:function(t){e.height=-t.screenHeight}})}};e.default=s}).call(this,o("543d")["default"])},"7f42":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.getFocus=!0})},i=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})},"83a99":function(t,e,o){"use strict";o.r(e);var n=o("7f42"),i=o("9d7b");for(var r in i)"default"!==r&&function(t){o.d(e,t,function(){return i[t]})}(r);o("fe06");var a=o("2877"),c=Object(a["a"])(i["default"],n["a"],n["b"],!1,null,"5332209e",null);e["default"]=c.exports},"9d7b":function(t,e,o){"use strict";o.r(e);var n=o("25fc"),i=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},efc1:function(t,e,o){},fe06:function(t,e,o){"use strict";o("efc1")}},[["0245","common/runtime","common/vendor"]]]);