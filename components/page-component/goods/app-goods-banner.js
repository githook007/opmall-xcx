(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/goods/app-goods-banner"],{"12b6":function(e,n,t){"use strict";t.r(n);var i=t("97c8"),o=t("f689");for(var r in o)"default"!==r&&function(e){t.d(n,e,function(){return o[e]})}(r);t("192e");var a=t("2877"),c=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"6981aa0a",null);n["default"]=c.exports},"192e":function(e,n,t){"use strict";t("8e51")},"8e51":function(e,n,t){},"97c8":function(e,n,t){"use strict";var i=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"a",function(){return i}),t.d(n,"b",function(){return o})},e5686:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=t("2f62");function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(t,!0).forEach(function(n){a(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c=function(){return Promise.all([t.e("common/vendor"),t.e("components/page-component/app-video/app-video")]).then(t.bind(null,"d824"))},s={components:{"app-video":c},props:{picList:{type:Array,default:function(){return[]}},videoChannel:{type:Object,default:function(){return{}}},share:{type:Number},isCart:{type:Boolean,default:function(){return!0}},videoUrl:{type:String},goods_id:{type:[Number,String]},sign:{type:String}},data:function(){return{isSameCompany:!1,isVideoLiving:!1,noticeId:"",liveData:"",autoplay:!0}},created:function(){var e=this;this.isSameCompany=!1,this.noticeId="",this.videoChannel.finderUserName&&(wx.getChannelsLiveNoticeInfo({finderUserName:this.videoChannel.finderUserName,success:function(n){console.log(n),e.isSameCompany=!0,n.noticeId&&(e.noticeId=n.noticeId)}}),this.isVideoLiving=!1,wx.getChannelsLiveInfo({finderUserName:this.videoChannel.finderUserName,success:function(n){console.log(n),e.isVideoLiving=!0,e.liveData=JSON.stringify({finderUserName:e.videoChannel.finderUserName,feedId:n.feedId,nonceId:n.nonceId})},fail:function(n){console.log(n),e.isVideoLiving=!1}}))},methods:{bannerChange:function(){this.$event.trigger(this.$const.EVENT_VIDEO_END)},videoStart:function(e){this.autoplay=!e},preventD:function(){},clickImage:function(n){var t=[];this.picList.forEach(function(e){t.push(e.pic_url)}),e.previewImage({current:n,urls:t})},routeJumpT:function(){e.navigateTo({url:"/pages/goods/video?goods_id=".concat(this.goods_id,"&sign=").concat(this.sign)})}},computed:r({},(0,i.mapState)({mallConfig:function(e){return e.mallConfig},isScanQrCode:function(e){return e.page.isScanQrCode}}),{},(0,i.mapGetters)("mallConfig",{getVideo:"getVideo"}))};n.default=s}).call(this,t("543d")["default"])},f689:function(e,n,t){"use strict";t.r(n);var i=t("e5686"),o=t.n(i);for(var r in i)"default"!==r&&function(e){t.d(n,e,function(){return i[e]})}(r);n["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/goods/app-goods-banner-create-component',
    {
        'components/page-component/goods/app-goods-banner-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("12b6"))
        })
    },
    [['components/page-component/goods/app-goods-banner-create-component']]
]);                
