(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/binding/app-phone-binding/app-phone-binding"],{"153e":function(e,t,n){"use strict";n("952a")},"4ee3":function(e,t,n){"use strict";n.r(t);var i=n("8a5f"),o=n("a787");for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);n("153e");var a=n("2877"),c=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"51a8258b",null);t["default"]=c.exports},"8a5f":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},"952a":function(e,t,n){},a787:function(e,t,n){"use strict";n.r(t);var i=n("cac6"),o=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=o.a},cac6:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("2f62");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){a(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={name:"app-phone-binding",data:function(){return{code:"",value:"",activeIndex:1,phoneNumber:null,verificationCode:null}},props:{bind:{type:Boolean},phone:{type:String}},computed:r({},(0,i.mapState)({wxapp_img:function(e){return e.mallConfig.__wxapp_img},is_manual_mobile_auth:function(e){return e.mallConfig.mall.setting.is_manual_mobile_auth}})),created:function(){var t=this;e.login({scopes:"auth_base",success:function(e){"login:ok"===e.errMsg&&(t.code=e.code)}})},methods:{getPhoneNumber:function(e){var t=this;if("getPhoneNumber:fail user deny"!==e.detail.errMsg&&this.code){var n=this;this.$request({method:"post",url:n.$api.phone.binding,data:{encryptedData:e.detail.encryptedData,iv:e.detail.iv,code:n.code}}).then(function(e){t.value=e.data.mobile})}},bindPhone:function(t,n){var i=this;if(1===n){if(""===this.value)return;this.$emit("click",t)}else{if(null===this.verificationCode)return;this.$request({url:this.$api.phone.binding,method:"post",data:{mobile:this.phoneNumber,mobile_code:this.verificationCode}}).then(function(n){0===n.code?i.$emit("click",t):1===n.code&&e.showModal({title:"提示",content:n.msg})})}},clearPhone:function(e){this.$emit("click",e)},obtain:function(){null!==this.phoneNumber&&this.$request({url:this.$api.phone.code,data:{mobile:this.phoneNumber}}).then(function(t){0===t.code?e.showModal({title:"提示",content:t.msg}):1===t.code&&e.showModal({title:"提示",content:t.msg})})},setActive:function(e){this.activeIndex=e}}};t.default=c}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/binding/app-phone-binding/app-phone-binding-create-component',
    {
        'pages/binding/app-phone-binding/app-phone-binding-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4ee3"))
        })
    },
    [['pages/binding/app-phone-binding/app-phone-binding-create-component']]
]);                
