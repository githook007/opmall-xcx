(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/u-index-plugins/u-pick"],{1125:function(t,e,n){},"43c1":function(t,e,n){"use strict";n.r(e);var i=n("732e"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=o.a},4913:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.goodsList,function(e,n){var i=t.isShowStock(e),o=t.isShowMemPrice(e),s=t.isShowVip(e);return{$orig:t.__get_orig(e),m0:i,m1:o,m2:s}}));t.$mp.data=Object.assign({},{$root:{l0:n}})},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},5135:function(t,e,n){"use strict";n("1125")},"732e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach(function(e){r(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=function(){return n.e("components/page-component/u-index-plugins/u-index-plugins").then(n.bind(null,"03c5"))},u=function(){return Promise.all([n.e("common/vendor"),n.e("components/page-component/u-goods-list/u-ordinary-list")]).then(n.bind(null,"24ba"))},c={name:"u-pick",props:{theme:Object,index:Number,is_required:Boolean,page_id:Number,appImg:{type:Object,default:function(){return{plugins_out:""}}},appSetting:{type:Object,default:function(){return{is_show_stock:1,sell_out_pic:"",is_use_stock:1}}}},data:function(){return{newData:[],tempList:[],goodsList:[],time:0,style:"1",goods_num:10}},components:{uIndexPlugins:a,uOrdinaryList:u},computed:s({},(0,i.mapGetters)("mallConfig",{getTheme:"getTheme"}),{copyList:function(){if(this.newData)return this.newData.list}}),methods:{router:function(t){this.$emit("router",t)},isShowMemPrice:function(t){return 1===t.is_level&&1!==t.is_negotiable?1:0},isShowVip:function(t){return t.vip_card_appoint&&t.vip_card_appoint.discount>0&&1!==t.is_negotiable?1:0},isShowStock:function(t){return 1===this.appSetting.is_show_stock&&0===t.goods_stock?1:0},loadData:function(){var t=this,e={type:0===this.page_id?"mall":"diy",key:"pick",page_id:this.page_id,index:this.index};this.goods_num&&(e.goods_num=this.goods_num),this.$request({url:this.$api.index.extra,data:e}).then(function(e){if(t.newData=e.data,0===e.code&&e.data&&0===t.page_id){var n=t.$storage.getStorageSync("INDEX_MALL");n.home_pages[t.index].data=t.newData,t.$storage.setStorageSync("INDEX_MALL",n)}})},cloneData:function(t){return JSON.parse(JSON.stringify(t))},splitData:function(){var t=this;if(this.tempList.length){var e=this.tempList[0];this.goodsList.push(e),this.tempList.splice(0,1),this.tempList.length&&(this.timeOut=setTimeout(function(){t.splitData()},200))}}},mounted:function(){var t=this.$storage.getStorageSync("INDEX_MALL");this.style=t.home_pages[this.index].style,this.goods_num=t.home_pages[this.index].goods_num,this.is_required?this.loadData():this.newData=t.home_pages[this.index].data},watch:{copyList:{handler:function(t){this.$validation.empty(t)||(this.tempList=this.cloneData(t),this.splitData())}}},destroyed:function(){clearTimeout(this.time)}};e.default=c},d44c:function(t,e,n){"use strict";n.r(e);var i=n("4913"),o=n("43c1");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("5135");var r=n("2877"),a=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,"06138c0f",null);e["default"]=a.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/u-index-plugins/u-pick-create-component',
    {
        'components/page-component/u-index-plugins/u-pick-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d44c"))
        })
    },
    [['components/page-component/u-index-plugins/u-pick-create-component']]
]);                
