(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/pick/search/search"],{"040e":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];r.d(e,"a",function(){return n}),r.d(e,"b",function(){return i})},"1af3":function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(r("a34a")),i=r("2f62");function o(t){return t&&t.__esModule?t:{default:t}}function a(t){return u(t)||c(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}function f(t,e,r,n,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,i)}function l(t){return function(){var e=this,r=arguments;return new Promise(function(n,i){var o=t.apply(e,r);function a(t){f(o,n,i,a,s,"next",t)}function s(t){f(o,n,i,a,s,"throw",t)}a(void 0)})}}function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(r,!0).forEach(function(e){p(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var y={name:"search",data:function(){return{list:[],keyword:"",activity:{},historyList:[],isSearch:!1,page:1}},onLoad:function(){this.$commonLoad.onload(),this.historyList=this.getHistory()},computed:d({},(0,i.mapState)({appImg:function(t){return t.mallConfig.__wxapp_img.mall},appSetting:function(t){return t.mallConfig.mall.setting}}),{},(0,i.mapGetters)("mallConfig",{getTheme:"getTheme"})),onReachBottom:function(){this.page++,this.getList()},methods:{navigator:function(e){t.navigateTo({url:e})},search:function(){var t=this.keyword;""!==t&&(this.keyword=t.trim(),this.reset())},reset:function(){this.page=1,this.getGoodsList()},getList:function(){var t=l(n.default.mark(function t(){var e,r,i;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request({url:this.$api.pick.goods_list,method:"get",data:{keyword:this.keyword,page:this.page}});case 2:e=t.sent,0===e.code&&(i=e.data.list,(r=this.list).push.apply(r,a(i)));case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getGoodsList:function(){var t=l(n.default.mark(function t(){var e,r,i,o,a,s;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request({url:this.$api.pick.goods_list,method:"get",data:{keyword:this.keyword,page:this.page}});case 2:e=t.sent,0===e.code&&(r=e.data,i=r.bg_url,o=r.list,a=r.form,s=r.activity,this.isSearch=!0,this.list=o,this.background=i,this.form=a,this.activity=s,this.setHistory());case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),setHistory:function(){var t=this.getHistory(),e=this.keyword.trim();t.forEach(function(r,n){r.keyword===e&&t.splice(n,1)}),t.push({keyword:e}),t.length>20&&t.shift(),this.historyList=t,this.$storage.setStorageSync("SEARCH_HISTORY_LIST",t)},getHistory:function(){var t=this.$storage.getStorageSync("SEARCH_HISTORY_LIST");return t||(t=[]),t},deleteHistory:function(){this.$storage.removeStorageSync("SEARCH_HISTORY_LIST"),this.historyList=[]},cancel:function(){this.isSearch=!1,this.keyword="",this.list=[]},historyClick:function(t){this.keyword=t.trim(),this.reset()},deleteKeyword:function(){this.keyword=""}},watch:{keyword:{handler:function(t){""==t&&this.cancel()},immediate:!0}}};e.default=y}).call(this,r("543d")["default"])},"36f8":function(t,e,r){"use strict";r("6a06")},"6a06":function(t,e,r){},c4f0:function(t,e,r){"use strict";r.r(e);var n=r("1af3"),i=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},c5a3:function(t,e,r){"use strict";r.r(e);var n=r("040e"),i=r("c4f0");for(var o in i)"default"!==o&&function(t){r.d(e,t,function(){return i[t]})}(o);r("36f8");var a=r("2877"),s=Object(a["a"])(i["default"],n["a"],n["b"],!1,null,"ef084690",null);e["default"]=s.exports}},[["2644","common/runtime","common/vendor"]]]);