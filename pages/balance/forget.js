(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/balance/forget"],{"0e35":function(t,e,n){"use strict";n("9eda")},1694:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},"9eda":function(t,e,n){},b843:function(t,e,n){"use strict";n.r(e);var r=n("1694"),o=n("c4a4");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("0e35");var a=n("2877"),u=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,"48bf051e",null);e["default"]=u.exports},c4a4:function(t,e,n){"use strict";n.r(e);var r=n("e62e"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=o.a},e62e:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach(function(e){a(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={name:"forget",data:function(){return{$siteInfo:this.$siteInfo,detail:null}},computed:i({},(0,r.mapState)({mall:function(t){return t.mallConfig.mall}})),onLoad:function(){this.detail=this.mall.setting.current_customer_service},methods:{saveImg:function(){this.$utils.batchSave(this.detail.qrcode_url,"image").then(function(){t.showToast({title:"保存成功"})})},saveName:function(){this.$utils.uniCopy({data:this.detail.name,success:function(){t.showToast({icon:"none",title:"微信客服复制成功"})}})}}};e.default=u}).call(this,n("543d")["default"])}},[["b68b","common/runtime","common/vendor"]]]);