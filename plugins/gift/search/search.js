(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/gift/search/search"],{"124b":function(t,e,n){"use strict";n.r(e);var o=n("872d"),r=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=r.a},"3bcc":function(t,e,n){"use strict";n.r(e);var o=n("3c77"),r=n("124b");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("4572");var s=n("2877"),a=Object(s["a"])(r["default"],o["a"],o["b"],!1,null,"a913b4aa",null);e["default"]=a.exports},"3c77":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})},4572:function(t,e,n){"use strict";n("6b10")},"6b10":function(t,e,n){},"872d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("a34a")),r=n("2f62");function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach(function(e){c(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return g(t)||f(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function g(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function h(t,e,n,o,r,i,s){try{var a=t[i](s),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(o,r)}function p(t){return function(){var e=this,n=arguments;return new Promise(function(o,r){var i=t.apply(e,n);function s(t){h(i,o,r,s,a,"next",t)}function a(t){h(i,o,r,s,a,"throw",t)}s(void 0)})}}var d="GIFT_SEARCH",m=function(){return n.e("components/page-component/app-product-list/app-product-list").then(n.bind(null,"75cc"))},y=function(){return n.e("components/page-component/app-no-goods/app-no-goods").then(n.bind(null,"8112"))},b={name:"search",data:function(){return{keyword:"",strong:[],page:1,goods_list:[],search:!1,is_search:0,loading:!0,goSearch:!1}},onLoad:function(){this.$commonLoad.onload(),this.$storage.getStorageSync(d)?this.strong=this.$storage.getStorageSync(d):this.$storage.setStorageSync(d,[])},methods:{request:function(){var t=p(o.default.mark(function t(){var e,n;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.$request({url:this.$api.gift.list,method:"get",data:{page:this.page,keyword:this.keyword,sign:""}});case 3:e=t.sent,this.loading=!1,0===e.code&&(n=this.goods_list).push.apply(n,u(e.data.list));case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),searchRequest:function(t){this.search=!0,this.goods_list=[],this.page=1,this.keyword=t,this.request()},dataProcessing:function(t){for(var e=0;e<t.list.length;e+=2)e+1!==t.list.length?this.goods_list.push([t.list[e],t.list[e+1]]):this.goods_list.push([t.list[e]]);this.page_count=t.pagination.page_count},setRequest:function(){var t=this;this.keyword.match(/^[ ]*$/)||this.goSearch||(this.goSearch=!0,this.search=!0,this.goods_list=[],this.request().then(function(){for(var e=t.$storage.getStorageSync(d),n=0;n<e.length;n++)if(e[n]===t.keyword)return;e.push(t.keyword),t.$storage.setStorageSync(d,e),t.goSearch=!1}))},routeGo:function(e){e.video_url&&1==this.getVideo?t.navigateTo({url:"/pages/goods/video?goods_id=".concat(e.id,"&sign=gift")}):t.navigateTo({url:"/plugins/gift/goods/goods?".concat(e.page_url.split("?")[1],"&is_search=1")})},empyt_search:function(){this.goods_list=[],this.keyword="",this.search=!1},setClearStorage:function(){this.$storage.removeStorageSync(d),this.strong=[],this.$storage.setStorageSync(d,[])}},components:{"app-product-list":m,appNoGoods:y},computed:a({},(0,r.mapState)("gift",{theme:function(t){return t.theme}}),{},(0,r.mapGetters)("mallConfig",{getVideo:"getVideo"}),{},(0,r.mapState)({platform:function(t){return t.gConfig.systemInfo.platform}})),onReachBottom:function(){this.page<this.page_count&&(this.page++,this.request())}};e.default=b}).call(this,n("543d")["default"])}},[["55ab","common/runtime","common/vendor"]]]);