(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/store/detail"],{"004e":function(e,t,n){"use strict";n.r(t);var a=n("50f8"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=i.a},"37f0":function(e,t,n){"use strict";n("aed6")},"41b7":function(e,t,n){"use strict";n.r(t);var a=n("a476"),i=n("004e");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("37f0");var s=n("2877"),r=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,"6f0e784a",null);t["default"]=r.exports},"50f8":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){return n.e("components/page-component/app-swiper/app-swiper").then(n.bind(null,"8af3"))},i=function(){return Promise.all([n.e("common/vendor"),n.e("components/basic-component/app-rich/parse")]).then(n.bind(null,"cb0e"))},o={name:"detail",components:{appSwiper:a,appRichText:i},data:function(){return{list:{business_hours:"",name:"",mobile:"",score:"",address:"",description:""}}},onShareAppMessage:function(){return this.$shareAppMessage({title:this.list.name,path:"/pages/store/detail",params:{id:this.list.id}})},onLoad:function(e){if(this.$commonLoad.onload(e),e.id){var t=this;t.$showLoading({title:"加载中"}),t.$request({url:t.$api.store.detail,data:{id:e.id}}).then(function(e){t.$hideLoading(),0===e.code&&(t.list=e.data.list)}).catch(function(e){t.$hideLoading()})}},methods:{goto:function(t){var n=this.list;e.openLocation({latitude:parseFloat(n.latitude),longitude:parseFloat(n.longitude),name:n.name,address:n.address})},mobile:function(){e.makePhoneCall({phoneNumber:this.list.mobile})}}};t.default=o}).call(this,n("543d")["default"])},a476:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},aed6:function(e,t,n){}},[["e5e4","common/runtime","common/vendor"]]]);