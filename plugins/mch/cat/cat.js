(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/mch/cat/cat"],{"0093":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("2f62");function a(t){return c(t)||r(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(i,!0).forEach(function(e){d(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l=function(){return i.e("components/page-component/app-category-list/app-category-list").then(i.bind(null,"5d3f"))},h={components:{"app-category-list":l},data:function(){return{scrollTop:0,list:[],goods:[],request:!0,page:1,classId:0,activeIndex:0,activeIndexTwo:0,height:0,over:!1,scrollHeight:0,mch_id:0,cat_style:0,cat_id:0}},computed:u({},(0,n.mapGetters)("mallConfig",{tabBarNavs:"getNavBar",getTheme:"getTheme"}),{},(0,n.mapState)("gConfig",{windowHeight:function(t){return t.systemInfo.windowHeight},windowWidth:function(t){return t.systemInfo.windowWidth}}),{},(0,n.mapGetters)("iPhoneX",{botHeight:"getBotHeight"}),{setHeight:function(){return this.windowHeight+"px"}}),onReachBottom:function(){},onLoad:function(t){this.$commonLoad.onload(t);var e=this;e.mch_id=t.mch_id,e.$request({url:e.$api.mch.cat_style,data:{mch_id:e.mch_id}}).then(function(t){0===t.code&&(e.cat_style=t.data.setting.cat_style,e.loadData())})},methods:{loadData:function(){var t=this;t.$showLoading(),t.$request({url:t.$api.mch.cats_list,data:{mch_id:t.mch_id,cat_id:t.cat_id}}).then(function(e){t.$hideLoading(),0===e.code&&(t.list=e.data.list)}).catch(function(e){t.$hideLoading()})},active:function(e){var i=this;this.page=1,t.showLoading({text:"加载中...",mask:!0});for(var n=0;n<this.list.length;n++)this.list[n].active!==e.active&&(this.list[n].active=!1),this.list[n].id===e.id&&(this.list[n].active=!0);this.$request({url:"".concat(this.$api.default.goods_list,"&page=").concat(this.page,"&cat_id=").concat(e.id)}).then(function(n){t.hideLoading(),i.goods=n.data.list,i.page=1,i.classId=e.id,i.over=!1}),this.over=!1},req:function(){var e=this;this.$request({url:"".concat(this.$api.default.goods_list,"&page=").concat(this.page,"&cat_id=").concat(this.classId)}).then(function(i){var n;i.data.list.length>0?(n=e.goods).push.apply(n,a(i.data.list)):e.over=!0;t.hideLoading()})},activeThree:function(t){for(var e=t.item,i=(t.index,0);i<this.list.length;i++)this.list[i].active!==e.active&&(this.list[i].active=!1),this.list[i].id===e.id&&(this.list[i].active=!0,this.activeIndex=i)}}};e.default=h}).call(this,i("543d")["default"])},"0cca":function(t,e,i){"use strict";i.r(e);var n=i("9502"),a=i("7730");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("d489");var r=i("2877"),c=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"817cbbb0",null);e["default"]=c.exports},"55dc":function(t,e,i){},7730:function(t,e,i){"use strict";i.r(e);var n=i("0093"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},9502:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},d489:function(t,e,i){"use strict";i("55dc")}},[["0d73","common/runtime","common/vendor"]]]);