(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user-center/components/app-svip"],{"07375":function(t,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var e=n("2f62");function a(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,e)}return n}function i(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(n,!0).forEach(function(r){c(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function c(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}var o=function(){return Promise.all([n.e("common/vendor"),n.e("components/page-component/app-vip-card/app-vip-card")]).then(n.bind(null,"19f0"))},u={name:"app-svip",components:{AppVipCard:o},props:{value:Object,bg:Object},data:function(){return{height:136,data:{}}},computed:i({},(0,e.mapState)({mall:function(t){return t.mallConfig.mall},permission:function(t){return t.mallConfig.plugin.vip_card?t.mallConfig.plugin.vip_card.permission:0},is_vip_card_user:function(t){return t.user.info&&t.user.info.is_vip_card_user?1:0}}),{},(0,e.mapGetters)({userInfo:"user/info"}),{areaStyle:function(){var t="padding: ".concat(this.data.card_margin,"rpx 0;");return 1==this.data.bg_style?t+="background-color: ".concat(this.data.bg_color,";"):t+='background-image: url("'.concat(this.data.bg_pic,'");background-size: 100% 100%;'),t}}),created:function(){this.data=JSON.parse(JSON.stringify(this.value)),this.data.margin=this.data.margin?this.data.margin:0,this.data.card_margin=this.data.card_margin?this.data.card_margin:10}};r.default=u},7501:function(t,r,n){"use strict";n("fb71")},"752c":function(t,r,n){"use strict";var e=function(){var t=this,r=t.$createElement;t._self._c},a=[];n.d(r,"a",function(){return e}),n.d(r,"b",function(){return a})},"762c":function(t,r,n){"use strict";n.r(r);var e=n("07375"),a=n.n(e);for(var i in e)"default"!==i&&function(t){n.d(r,t,function(){return e[t]})}(i);r["default"]=a.a},8536:function(t,r,n){"use strict";n.r(r);var e=n("752c"),a=n("762c");for(var i in a)"default"!==i&&function(t){n.d(r,t,function(){return a[t]})}(i);n("7501");var c=n("2877"),o=Object(c["a"])(a["default"],e["a"],e["b"],!1,null,"0b6f34f8",null);r["default"]=o.exports},fb71:function(t,r,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/user-center/components/app-svip-create-component',
    {
        'pages/user-center/components/app-svip-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8536"))
        })
    },
    [['pages/user-center/components/app-svip-create-component']]
]);                