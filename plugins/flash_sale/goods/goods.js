(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/flash_sale/goods/goods"],{ae58:function(t,e){t.exports=require("../siteinfo.js")},bbb2:function(t,e,n){},c92b:function(t,e,n){"use strict";n("bbb2")},d2a1:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=s(n("a34a")),i=n("2f62");function s(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,o,i,s,r){try{var a=t[s](r),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(o,i)}function a(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var s=t.apply(e,n);function a(t){r(s,o,i,a,c,"next",t)}function c(t){r(s,o,i,a,c,"throw",t)}a(void 0)})}}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach(function(e){l(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=function(){return n.e("components/page-component/goods/app-goods-banner").then(n.bind(null,"12b6"))},p=function(){return n.e("components/page-component/app-related-suggestion-product/app-related-suggestion-product").then(n.bind(null,"1ce4"))},h=function(){return n.e("components/page-component/goods/app-goods-full-reduce").then(n.bind(null,"6132"))},f=function(){return Promise.all([n.e("common/vendor"),n.e("components/page-component/goods/u-attr")]).then(n.bind(null,"b4bc"))},g=function(){return Promise.all([n.e("common/vendor"),n.e("components/page-component/goods/bd-info")]).then(n.bind(null,"0e01"))},m=function(){return Promise.all([n.e("common/vendor"),n.e("components/page-component/goods/bd-coupon")]).then(n.bind(null,"11b2"))},_=function(){return n.e("components/page-component/goods/bd-xbc").then(n.bind(null,"8639"))},b=function(){return n.e("components/page-component/goods/bd-kb").then(n.bind(null,"4c29"))},v=function(){return n.e("components/page-component/goods/bd-hc").then(n.bind(null,"de37"))},w=function(){return n.e("components/page-component/goods/bd-detail").then(n.bind(null,"3e70"))},y=function(){return n.e("components/page-component/goods/bd-comments").then(n.bind(null,"9470"))},O=function(){return n.e("components/basic-component/app-close/app-close").then(n.bind(null,"f0dd"))},T=function(){return n.e("components/page-component/goods/bd-service").then(n.bind(null,"861b"))},j={name:"goods",data:function(){return{showClose:!1,is_open:0,goods_id:-1,full_reduce:null,activity:{},activity_status:0,time_str:{day:0,hou:0,min:0,sec:0},timing:null,discount:null,is_vip:!1,is_vip_card_user:0,shareData:null,poster_config:this.$api.flash_sale.poster_config,poster_generate:this.$api.flash_sale.poster_generate,selectAttr:{},url:"",webUrl:"",show:!1,list:[],miaosha_buy_count:0,is_activity:0,loading:!1,is_show_buy:!0,share:!1,goods:null,disable:"disable"}},onLoad:function(t){this.$commonLoad.onload(t),this.goods_id=t.id,this.webUrl="/plugins/flash_sale/goods/goods?id="+t.id,this.share=t.share,wx.showShareMenu({menus:["shareAppMessage","shareTimeline"]})},onHide:function(){clearInterval(this.timing)},onUnload:function(){clearInterval(this.timing)},onShow:function(){var t=this;this.showClose=!1,setTimeout(function(){t.showClose=!0})},computed:u({},(0,i.mapGetters)("mallConfig",{getTheme:"getTheme"})),onShareTimeline:function(){var t=this.goods,e=t.app_share_title,n=t.name,o=t.id;return this.$shareTimeline({title:e||n,query:{id:o,share:!0}})},onShareAppMessage:function(){return this.hShareAppMessage()},methods:{hShareAppMessage:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.goods,n=e.app_share_title,o=e.name,i=e.app_share_pic,s=e.id,r=e.pic_url,a=e.subtitle;return this.$shareAppMessage({path:"/plugins/flash_sale/goods/goods",title:n||o,imageUrl:i||r[0].pic_url,desc:a,params:{id:s,share:!0}},t)},getMall:function(t){this.is_open=t.is_open},getDetail:function(){var e=a(o.default.mark(function e(){var n,i,s,r,a;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!1,e.next=3,this.$request({url:this.$api.flash_sale.detail,data:{id:this.goods_id}});case 3:n=e.sent,0===n.code?(this.loading=!0,i=n.data,s=i.detail,r=i.activity,a=i.activity_status,this.goods=s,this.activity=r,s.goods_activity&&(this.full_reduce=s.goods_activity.full_reduce),this.activity_status=a,s.vip_card_appoint.discount&&(this.is_vip=!0,this.discount=s.vip_card_appoint.discount),this.is_vip_card_user=s.vip_card_appoint.is_vip_card_user,1===a?this.set_time(r.end_at):0===a&&(this.set_time(r.start_at),this.is_show_buy=!1)):(t.showToast({title:n.msg,icon:"none"}),this.share?t.navigateTo({url:"/plugins/flash_sale/index/index"}):t.navigateBack());case 5:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),set_time:function(t){var e=this;clearInterval(this.timing);var n=new Date(t.replace(/-/g,"/"));this.now_time(n),this.timing=setInterval(function(){e.now_time(n)},1e3)},now_time:function(t){var e=t.getTime()-(new Date).getTime();e<0&&clearInterval(this.timing);var n=parseInt(e/1e3/60/60/24),o=parseInt(e/1e3/60/60%24),i=parseInt(e/1e3/60%60),s=parseInt(e/1e3%60);this.time_str.day=n<10?"0"+n:n,this.time_str.hou=o<10?"0"+o:o,this.time_str.min=i<10?"0"+i:i,this.time_str.sec=s<10?"0"+s:s},quickShare:function(t){this.shareData=t},request:function(){var t=a(o.default.mark(function t(e){var n,i,s;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.url,i=e.data,t.next=3,this.$request({url:n,data:i});case 3:if(s=t.sent,0!==s.code){t.next=6;break}return t.abrupt("return",s.data);case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),onAttr:function(t){var e=t.item;this.selectAttr=e},joinCart:function(){this.goods.buy_goods_auth?this.show=!0:this.$tips.showToast({title:"您暂无权限购买该商品",icon:"none"})},leftFunc:function(e){this.$request({url:this.$api.flash_sale.add_cart,data:{flash_goods_id:this.selectAttr.goods_id,attr_id:this.selectAttr.id,num:e},method:"post"}).then(function(e){t.showToast({title:e.msg,type:"success"})})},rightFunc:function(e){t.navigateTo({url:"/pages/order-submit/order-submit?mch_list=".concat(JSON.stringify([e]))})},setCoupon:function(t){this.$set(this.goods.goods_coupon_center[t],"is_receive",1)},back:function(){t.redirectTo({url:"/pages/index/index"})}},watch:{goods_id:{handler:function(){this.getDetail()}}},filters:{getStart:function(t){if(t){var e=new Date(t.replace(/-/g,"/"));return"".concat(e.getHours()<10?"0"+e.getHours():e.getHours(),":").concat(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes()," 开抢 ")}},getStartT:function(t){if(t){var e=new Date(t.replace(/-/g,"/"));return"".concat(e.getFullYear(),".").concat(e.getMonth()+1,".").concat(e.getDate())}}},components:{"app-banner":d,"app-related-suggestion-product":p,appGoodsFullReduce:h,uAttr:f,bdInfo:g,bdCoupon:m,bdXbc:_,bdKb:b,bdHc:v,bdDetail:w,bdComments:y,appClose:O,bdService:T}};e.default=j}).call(this,n("543d")["default"])},da87:function(t,e,n){"use strict";n.r(e);var o=n("d2a1"),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=i.a},eca2:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t._f("getStart")(t.activity.start_at)),o=t._f("getStartT")(t.activity.start_at);t.$mp.data=Object.assign({},{$root:{f0:n,f1:o}})},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},f3ed:function(t,e,n){"use strict";n.r(e);var o=n("eca2"),i=n("da87");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("c92b");var r=n("2877"),a=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,"53d34be2",null);e["default"]=a.exports}},[["25b4","common/runtime","common/vendor"]]]);