(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-center/components/app-account"],{"0c69":function(t,e,r){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r("2f62");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(r,!0).forEach(function(e){i(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u={name:"app-account",props:{value:Object,bg:Object},data:function(){return{data:{}}},computed:o({},(0,n.mapState)({mall:function(t){return t.mallConfig.mall},is_vip_card_user:function(t){return t.user.info&&t.user.info.is_vip_card_user?1:0}}),{},(0,n.mapGetters)({userInfo:"user/info"}),{areaStyle:function(){var t="margin-top: ".concat(this.data.margin,"rpx;");return 2==this.data.mode&&(t+="padding: ".concat(this.data.card_margin,"rpx 20rpx;")),1==this.data.bg&&(1==this.data.bg_style?t+="background-color: ".concat(this.data.bg_color,";"):t+='background-image: url("'.concat(this.data.bg_pic,'");background-size: 100% 100%;')),t},numberStyle:function(){var t="color: ".concat(this.data.number_color,";font-size: ").concat(this.data.number_size,"rpx;");return 1!=this.data.mode&&(t+="margin-bottom: 12rpx;"),t},titleStyle:function(){var t="color: ".concat(this.data.title_color,";font-size: ").concat(this.data.title_size,"rpx;");return t},integral:function(){var t=0;return this.userInfo&&(t=this.handleNumber(this.userInfo.integral)),t},balance:function(){var t=0;return this.userInfo&&(t=this.handleNumber(this.userInfo.balance)),t},coupon:function(){var t=0;return this.userInfo&&(t=this.handleNumber(this.userInfo.coupon)),t},card:function(){var t=0;return this.userInfo&&(t=this.handleNumber(this.userInfo.card)),t}}),created:function(){this.data=JSON.parse(JSON.stringify(this.value))},methods:{router:function(e){t.navigateTo({url:e})},handleNumber:function(t){var e=+t;e=e.toFixed(2);var r=0;return t>0?(r=t<1e4&&t>999.99?e.replace(e[0],e[0]+","):t>1e4?e.substring(0,e.length-7)+"."+e[e.length-7]+"w":e,r.indexOf(".00")>-1&&(r=r.replace(".00","")),r):0}}};e.default=u}).call(this,r("543d")["default"])},"4a2b":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];r.d(e,"a",function(){return n}),r.d(e,"b",function(){return a})},"75ee":function(t,e,r){"use strict";r("d632")},8738:function(t,e,r){"use strict";r.r(e);var n=r("0c69"),a=r.n(n);for(var o in n)"default"!==o&&function(t){r.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},d632:function(t,e,r){},eb1f:function(t,e,r){"use strict";r.r(e);var n=r("4a2b"),a=r("8738");for(var o in a)"default"!==o&&function(t){r.d(e,t,function(){return a[t]})}(o);r("75ee");var i=r("2877"),u=Object(i["a"])(a["default"],n["a"],n["b"],!1,null,"3809fa53",null);e["default"]=u.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/user-center/components/app-account-create-component',
    {
        'pages/user-center/components/app-account-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("eb1f"))
        })
    },
    [['pages/user-center/components/app-account-create-component']]
]);                
