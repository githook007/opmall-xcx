(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/miaosha/components/app-product-list"],{"1a4a":function(t,e,n){},3196:function(t,e,n){"use strict";n.r(e);var o=n("f097"),r=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=r.a},"697d":function(t,e,n){"use strict";n.r(e);var o=n("bd80"),r=n("3196");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("a0f6");var i=n("2877"),u=Object(i["a"])(r["default"],o["a"],o["b"],!1,null,"41144a87",null);e["default"]=u.exports},a0f6:function(t,e,n){"use strict";n("1a4a")},bd80:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})},f097:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(n,!0).forEach(function(e){i(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={name:"app-product-list",data:function(){return{is_vip:!0,disable:"disable"}},computed:a({},(0,o.mapState)({appImg:function(t){return t.mallConfig.__wxapp_img.mall},appSetting:function(t){return t.mallConfig.mall.setting},platform:function(t){return t.gConfig.systemInfo.platform}}),{},(0,o.mapGetters)("mallConfig",{getVideo:"getVideo"})),props:{list:{type:Array,default:function(){return[]}},status:{type:Number},empty:Boolean,botHeight:Number,theme:{type:Object}},methods:{route_go:function(e){e.goods.video_url&&1==this.getVideo?t.navigateTo({url:"/pages/goods/video?goods_id=".concat(e.goods_id,"&sign=miaosha")}):t.navigateTo({url:"/plugins/miaosha/goods/goods?id=".concat(e.goods_id)})}}};e.default=u}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'plugins/miaosha/components/app-product-list-create-component',
    {
        'plugins/miaosha/components/app-product-list-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("697d"))
        })
    },
    [['plugins/miaosha/components/app-product-list-create-component']]
]);                