(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/integral_mall/index/index"],{"18e1":function(t,e,n){"use strict";n("927b")},3956:function(t,e,n){"use strict";n.r(e);var o=n("d333"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},"525b":function(t,e,n){"use strict";n.r(e);var o=n("5920"),i=n("3956");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("18e1");var r=n("2877"),s=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,"0f9c7bb1",null);e["default"]=s.exports},5920:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"927b":function(t,e,n){},d333:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(n,!0).forEach(function(e){r(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s={data:function(){return{success:!1,lose:!1,_num:0,more:!1,setting:{},coupon:[],userInfo:{integral:0},choose:{integral:0},banners:[],cats:[],id:0,exchangeCoupon:!1,current:"wechat",goods:[],args:!1,page:1,disable:"disable"}},computed:a({},(0,o.mapState)({integralImg:function(t){return t.mallConfig.plugin.integral_mall},appSetting:function(t){return t.mallConfig.mall.setting},appImg:function(t){return t.mallConfig.__wxapp_img.mall},platform:function(t){return t.gConfig.systemInfo.platform}}),{},(0,o.mapGetters)("mallConfig",{getVideo:"getVideo",getTheme:"getTheme"})),methods:{close:function(){this.success=!1,this.lose=!1},tab:function(t){this._num=t,this.page=1,this.goods=[],this.getGoods()},toList:function(){this.success=!1,t.navigateTo({url:"/pages/coupon/index/index"})},toGoods:function(e){e.goodsWarehouse.video_url&&1==this.getVideo?t.navigateTo({url:"/pages/goods/video?goods_id=".concat(e.id,"&sign=").concat(e.sign)}):t.navigateTo({url:"/plugins/integral_mall/goods/goods?goods_id="+e.id})},toAbout:function(){t.navigateTo({url:"/pages/rules/index?url=".concat(encodeURIComponent(this.$api.integral_mall.index),"&keys=").concat(JSON.stringify(["setting","rule"]))})},router:function(e){t.navigateTo({url:e})},getList:function(){var e=this;e.$request({url:e.$api.integral_mall.index}).then(function(n){if(e.$hideLoading(),0===n.code){var o=n.data,i=o.banners,a=o.setting,r=o.userInfo;e.banners=i,e.setting=a,e.userInfo=r}else t.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(){e.$hideLoading()})},getCoupon:function(){var e=this;e.$request({url:e.$api.integral_mall.coupon}).then(function(n){e.$hideLoading(),0===n.code?e.coupon=n.data.list:t.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(){e.$hideLoading()})},getCat:function(){var e=this;e.$request({url:e.$api.integral_mall.cats}).then(function(n){e.$hideLoading(),0===n.code?e.cats=n.data.list:t.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(){e.$hideLoading()})},getGoods:function(){var e=this;e.$request({url:e.$api.integral_mall.goods,data:{cat_id:e._num,page:e.page}}).then(function(n){e.$hideLoading(),0===n.code?(e.more=!1,n.data.list.length==n.data.pagination.pageSize&&(e.page++,e.more=!0),e.page>1?e.goods=e.goods.concat(n.data.list):e.goods=n.data.list):t.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(){e.$hideLoading()})}},onReachBottom:function(){this.more&&this.getGoods()},onShareAppMessage:function(){return this.$shareAppMessage({title:this.$children[0].navigationBarTitle,path:"/plugins/integral_mall/index/index"})},onShareTimeline:function(){return this.$shareTimeline({title:this.$children[0].navigationBarTitle,query:{}})},onLoad:function(){this.$commonLoad.onload();var t=this;t._num=0,wx.showShareMenu({menus:["shareAppMessage","shareTimeline"]}),t.$showLoading({type:"global",text:"加载中..."}),t.getList(),t.getCoupon(),t.getCat(),t.getGoods()}};e.default=s}).call(this,n("543d")["default"])}},[["e32e","common/runtime","common/vendor"]]]);