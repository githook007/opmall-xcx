(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/composition/index/index"],{"0d92":function(t,o,i){},"14c9":function(t,o,i){"use strict";var e=function(){var t=this,o=t.$createElement;t._self._c},n=[];i.d(o,"a",function(){return e}),i.d(o,"b",function(){return n})},8312:function(t,o,i){"use strict";i.r(o);var e=i("85cc"),n=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(o,t,function(){return e[t]})}(a);o["default"]=n.a},"85cc":function(t,o,i){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=i("2f62");function n(t,o){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);o&&(e=e.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,e)}return i}function a(t){for(var o=1;o<arguments.length;o++){var i=null!=arguments[o]?arguments[o]:{};o%2?n(i,!0).forEach(function(o){s(t,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(i).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))})}return t}function s(t,o,i){return o in t?Object.defineProperty(t,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[o]=i,t}var r=function(){return i.e("components/basic-component/app-composition/app-composition").then(i.bind(null,"9495"))},c={data:function(){return{about:"",list:[],detail:{},position:"static",iphone_x:!1,noMore:!1,showGoods:!1,page:2,height:0,scrollHeight:0,tabbarbool:!1,animationData:{},currentRoute:this.$platDiff.route(),activityBg:""}},components:{"app-composition":r},computed:a({},(0,e.mapState)({tabBarNavs:function(t){return t.mallConfig.navbar.navs},compositionImg:function(t){return t.mallConfig.__wxapp_img.composition}}),{},(0,e.mapGetters)("mallConfig",{getTheme:"getTheme"})),watch:{tabBarNavs:{handler:function(){this.b()},immediate:!0}},methods:{b:function(){for(var t=this.currentRoute,o=0;o<this.tabBarNavs.length;o++)if(t.includes(this.tabBarNavs[o].url.split("?")[0]))return this.tabbarbool=!0;return this.tabbarbool=!1},show:function(o){var i=this;i.detail=o,i.showGoods=!0,i.position="fixed";var e=t.createAnimation({duration:1e3,timingFunction:"ease"});i.animationData=e,setTimeout(function(){e.translateY(i.height).step(),i.animationData=e.export()},200)},close:function(){this.detail={},this.showGoods=!1,this.position="static"},toRule:function(){t.navigateTo({url:"/pages/rules/index?url=".concat(encodeURIComponent(this.$api.composition.config),"&key=rule")})},toDetail:function(o){t.navigateTo({url:"/plugins/composition/detail/detail?composition_id="+o.id})},toGoods:function(o){t.navigateTo({url:"/pages/goods/goods?id="+o})},toSearch:function(){t.navigateTo({url:"/plugins/composition/search/search"})},getSetting:function(){var o=this;o.$showLoading({type:"global",text:"加载中..."}),o.$request({url:o.$api.composition.config}).then(function(i){0==i.code?(o.getList(),o.activityBg=i.data.activityBg):(o.$hideLoading(),t.showToast({title:i.msg,icon:"none",duration:1e3}))}).catch(function(t){o.$hideLoading()})},getList:function(){var o=this;o.$request({url:o.$api.composition.index}).then(function(i){if(o.$hideLoading(),0==i.code){for(var e in o.list=i.data.list,o.list.length<5&&(o.noMore=!0),o.list)for(var n in o.list[e].choose=!1,o.list[e].goods_list)o.list[e].goods_list[n].choose_attr=null,2==o.list[e].type&&(o.list[e].host_list[0].choose_attr=null,o.list[e].host_list[0].opacity=1,o.list[e].goods_list[n].choose_goods=!1,o.list[e].host_list[0].choose_goods=!1);t.setStorage({key:"composition",data:o.list})}else o.$hideLoading(),t.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){o.$hideLoading()})},getMore:function(){var o=this,i=this;t.showLoading({mask:!0,title:"加载中"}),i.$request({url:i.$api.composition.index,data:{page:i.page}}).then(function(e){if(t.hideLoading(),0==e.code){if(0==e.data.list.length)return o.noMore=!0,!1;i.page++;var n=e.data.list;for(var a in n)for(var s in n[a].choose=!1,n[a].goods_list)n[a].goods_list[s].choose_attr=null,2==n[a].type&&(n[a].host_list[0].choose_attr=null,n[a].host_list[0].opacity=1,n[a].goods_list[s].choose_goods=!1,n[a].host_list[0].choose_goods=!1);i.list=i.list.concat(n),t.setStorage({key:"composition",data:i.list})}else t.hideLoading(),t.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(){i.$hideLoading()})}},onLoad:function(){this.$commonLoad.onload();var o=this;t.getSystemInfo({success:function(t){o.height=-t.screenHeight,(t.model.indexOf("iPhone X")>-1||t.model.indexOf("iPhone 11")>-1||t.model.indexOf("iPhone11")>-1||t.model.indexOf("iPhone12")>-1||t.model.indexOf("Unknown Device")>-1)&&(o.iphone_x=!0)}}),wx.showShareMenu({menus:["shareAppMessage","shareTimeline"]}),o.getSetting()},onShareAppMessage:function(){return this.$shareAppMessage({title:this.$children[0].navigationBarTitle,path:"/plugins/composition/index/index"})},onShareTimeline:function(){return this.$shareTimeline({title:this.$children[0].navigationBarTitle,query:{}})},onReachBottom:function(){this.noMore||this.getMore()}};o.default=c}).call(this,i("543d")["default"])},"97b3":function(t,o,i){"use strict";i.r(o);var e=i("14c9"),n=i("8312");for(var a in n)"default"!==a&&function(t){i.d(o,t,function(){return n[t]})}(a);i("e732");var s=i("2877"),r=Object(s["a"])(n["default"],e["a"],e["b"],!1,null,"51242553",null);o["default"]=r.exports},e732:function(t,o,i){"use strict";i("0d92")}},[["f523","common/runtime","common/vendor"]]]);