(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/app-share-qr-code-poster/app-share-qr-code-poster"],{"00cc":function(e,t,n){"use strict";n.r(t);var o=n("1b5a"),i=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,function(){return o[e]})}(r);t["default"]=i.a},"1af4":function(e,t,n){},"1b5a":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n("2f62");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){a(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(){return n.e("components/basic-component/app-layout/app-permissions-auth/app-permissions-auth").then(n.bind(null,"1c4d"))},u=function(){return Promise.all([n.e("common/vendor"),n.e("components/page-component/app-share-video-number/app-share-video-number")]).then(n.bind(null,"29ab"))},c={name:"app-share-qr-code-poster",components:{appPermissionsAuth:s,appShareVideoNumber:u},computed:r({},(0,o.mapGetters)("iPhoneX",{getBoolEmpty:"getBoolEmpty"})),props:{title:{type:String,default:function(){return"生成商品海报"}},posterConfig:String,posterGenerate:String,hasPosterNav:{type:Boolean,default:function(){return!1}},value:{type:Boolean,default:function(){return!1}},url:{type:String,default:function(){return""}},disabled:{type:Boolean,default:function(){return!1}},isHidden:{type:Boolean,default:function(){return!0}},posterUrl:{type:String,default:function(){return""}},theme:[Object,String],sign:String,isShowFriend:{type:Boolean,default:function(){return!0}},appShareTitle:String,appSharePic:String,goods:{type:Object,default:function(){return{}}}},data:function(){return{$siteInfo:this.$siteInfo,showHidden:this.value,buttonBoolean:!0,shareImage:"",is_can_save:!1,text:"保存图片需要您的授权。点击去设置,开启 保存到相册 权限",loading:!0,isShowVideoNumber:!1,article_url:"",number:1,isClick:!0,isShow:!1}},methods:{fenxianghaibao:function(){if(this.hasPosterNav){var t=this.posterUrl;""==this.posterUrl&&(t="/pages/poster/goods?poster_config=".concat(escape(this.posterConfig),"&poster_generate=").concat(escape(this.posterGenerate))),e.navigateTo({url:t})}else this.buttonBoolean=!1,this.getShareImg()},showHiddenClick:function(){this.showHidden=!1,this.$emit("input",this.showHidden),this.buttonBoolean=!0},savePicture:function(){this.loading||this.$utils.batchSave(this.shareImage,"image").then(function(){e.showToast({title:"保存成功"})})},getShareImg:function(){var t=this;this.url&&this.$request({url:this.url}).then(function(n){0===n.code?(t.shareImage=n.data.pic_url,t.loading=!1):e.showModal({content:n.msg,showCancel:!1})})},getAuthSetting:function(){var t=this;e.getSetting({success:function(e){t.is_can_save=!e.authSetting["scope.writePhotosAlbum"]}})},cancel:function(e){this.is_can_save=e},preview:function(t){e.previewImage({urls:[t],longPressActions:!0})},videoNumberClick:function(){var t=this;this.isClick&&(this.isClick=!1,e.showLoading({title:"加载中"}),this.$request({url:this.$api.goods.addMaterial,data:{goods_id:this.goods.id}}).then(function(n){e.hideLoading(),0===n.code?(t.isShowVideoNumber=!0,t.getArticleUrl(n.data.media_id)):(t.resetVideoNumber(),e.showModal({content:n.msg,showCancel:!1}))}).catch(function(){t.resetVideoNumber()}))},getArticleUrl:function(t){var n=this,o=setInterval(function(){n.article_url&&clearInterval(o),n.number>30&&(clearInterval(o),n.resetVideoNumber(),e.showModal({content:"获取视频号链接异常,请稍后重试",showCancel:!1})),n.number++,n.$request({url:n.$api.goods.articleUrl,data:{media_id:t}}).then(function(t){e.hideLoading(),0===t.code?n.article_url=t.data.url:(n.resetVideoNumber(),e.showModal({content:t.msg,showCancel:!1}),clearInterval(o))})},1e3)},resetVideoNumber:function(){this.number=1,this.isShowVideoNumber=!1,this.isClick=!0},copyText:function(){this.$utils.uniCopy({data:this.article_url,success:function(){e.showToast({title:"复制成功"}),this.resetVideoNumber()}})},closeVideoNumber:function(){this.isShowVideoNumber=!1}}};t.default=c}).call(this,n("543d")["default"])},"409e":function(e,t,n){"use strict";n.r(t);var o=n("df78"),i=n("00cc");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("599c");var a=n("2877"),s=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"74ef3094",null);t["default"]=s.exports},"599c":function(e,t,n){"use strict";n("1af4")},df78:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){t.preventDefault(),t.stopPropagation(),e.isShowVideoNumber=!0})},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/app-share-qr-code-poster/app-share-qr-code-poster-create-component',
    {
        'components/page-component/app-share-qr-code-poster/app-share-qr-code-poster-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("409e"))
        })
    },
    [['components/page-component/app-share-qr-code-poster/app-share-qr-code-poster-create-component']]
]);                