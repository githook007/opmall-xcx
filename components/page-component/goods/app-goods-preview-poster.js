(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/goods/app-goods-preview-poster"],{"33fe":function(t,e,n){"use strict";n.r(e);var i=n("8955"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},3865:function(t,e,n){},"43fc":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"7dc7":function(t,e,n){"use strict";n.r(e);var i=n("43fc"),o=n("33fe");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("a6d0");var u=n("2877"),s=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,"55aa0035",null);e["default"]=s.exports},8955:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"app-goods-preview-poster",props:{value:{type:Boolean,default:function(){return!1}},url:{type:String,default:function(){return""}},disabled:{type:Boolean,default:function(){return!1}}},created:function(){this.showHidden=this.value},watch:{value:function(t){this.showHidden=t},showHidden:function(t){t&&this.getShareImg()}},data:function(){return{$siteInfo:this.$siteInfo,showHidden:!1,loading:!0,shareImage:""}},methods:{showHiddenClick:function(){this.$emit("close",!1)},savePicture:function(){this.loading||this.$utils.batchSave(this.shareImage,"image").then(function(){t.showToast({title:"保存成功"})})},getShareImg:function(){var e=this;this.url&&(this.loading=!0,this.$request({url:this.url}).then(function(n){0===n.code?(e.shareImage=n.data.pic_url,e.loading=!1):t.showModal({content:n.msg,showCancel:!1})}))},preview:function(){t.previewImage({urls:[this.shareImage]})}}};e.default=n}).call(this,n("543d")["default"])},a6d0:function(t,e,n){"use strict";n("3865")}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/goods/app-goods-preview-poster-create-component',
    {
        'components/page-component/goods/app-goods-preview-poster-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7dc7"))
        })
    },
    [['components/page-component/goods/app-goods-preview-poster-create-component']]
]);                