(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/goods/app-goods-video"],{"68c2":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},7789:function(t,e,n){"use strict";n.r(e);var i=n("95f6"),o=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e["default"]=o.a},8867:function(t,e,n){"use strict";n("8f6df")},"8f6df":function(t,e,n){},"95f6":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{video_id:{type:Number,default:0},video_url:{type:String,default:""},play:{type:Boolean,default:!1},height:{type:String,default:""},width:{type:String,default:""}},data:function(){return{loading:!0,videoCtx:null,controls:!1}},methods:{videoPlay:function(){this.videoCtx=t.createVideoContext("video_".concat(this.video_id),this),this.play?this.videoCtx.play():this.videoCtx.pause()},waiting:function(){this.loading=!1},pause:function(){},setPlay:function(){this.loading=!0}},watch:{play:{handler:function(){this.videoPlay()}}},beforeDestroy:function(){this.videoCtx=null}};e.default=n}).call(this,n("543d")["default"])},"9eb5":function(t,e,n){"use strict";n.r(e);var i=n("68c2"),o=n("7789");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("8867");var a=n("2877"),d=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"5ebe4166",null);e["default"]=d.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/goods/app-goods-video-create-component',
    {
        'components/page-component/goods/app-goods-video-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9eb5"))
        })
    },
    [['components/page-component/goods/app-goods-video-create-component']]
]);                
