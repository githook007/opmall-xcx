(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/clerk/index/index"],{2804:function(e,t,n){"use strict";n("331a")},"331a":function(e,t,n){},"5f51":function(e,t,n){"use strict";n.r(t);var r=n("f77c"),o=n("f745");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("2804");var c=n("2877"),i=Object(c["a"])(o["default"],r["a"],r["b"],!1,null,"caf7c59a",null);t["default"]=i.exports},dd1d:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n("b1c7")),o=n("2f62");function a(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function c(e){if(e&&e.__esModule)return e;var t=a();if(t&&t.has(e))return t.get(e);var n={};if(null!=e){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var c=r?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(n,o,c):n[o]=e[o]}}return n.default=e,t&&t.set(e,n),n}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){l(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={name:"about",data:function(){return{is_mall:!1,is_scan_code_pay:!1,is_not_wechat:!1}},computed:u({},(0,o.mapState)({clerkImg:function(e){return e.mallConfig.__wxapp_img.clerk},mall:function(e){return e.mallConfig.mall}})),onLoad:function(){this.$commonLoad.onload(),this.getList()},methods:{toStatic:function(){e.navigateTo({url:"/plugins/clerk/statics/statics"})},toOrder:function(){e.navigateTo({url:"/plugins/clerk/order/order?status=1"})},toCard:function(){e.navigateTo({url:"/plugins/clerk/order/order?status=2"})},clerk:function(){var t=this;e.scanCode({success:function(n){if(n.path){var o=n.path;o=o.split("?");var a=o[1],c=new RegExp("scene=","g");a=o[1].replace(c,""),t.$request({url:t.$api.clerk.qrcode_parameter,data:{token:a}}).then(function(t){if(0===t.code){var n=t.data.detail,o="/"+n.path;n.data&&(o+="?"+r.objectToUrlParams(n.data)),e.redirectTo({url:o}),e.options=null}})}else e.showModal({title:"提示",content:"暂不支持此二维码，请使用应用内扫一扫功能",showCancel:!1,icon:"none",duration:1e3})}})},scan:function(){e.redirectTo({url:"/pages/app_admin/payment-code/payment-code?is_clerk_enter=1"})},getList:function(){var t=this;t.$request({url:t.$api.clerk.info}).then(function(n){t.$hideLoading(),0==n.code?(t.is_mall=n.data.is_mall,t.is_scan_code_pay=n.data.is_clerk):"无核销信息权限"==n.msg?e.showModal({title:"提示",content:"该帐号无核销权限",showCancel:!1,success:function(t){e.redirectTo({url:"/pages/index/index"})}}):e.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(e){t.$hideLoading()})}}};t.default=s}).call(this,n("543d")["default"])},f745:function(e,t,n){"use strict";n.r(t);var r=n("dd1d"),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);t["default"]=o.a},f77c:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})}},[["fff4","common/runtime","common/vendor"]]]);