(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/index/app-nav-bar"],{"59f3":function(t,e,n){"use strict";n.r(e);var r=n("b46d"),a=n("b7ce");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("8aef");var i=n("2877"),u=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,"6cf7eecc",null);e["default"]=u.exports},"6dce":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach(function(e){i(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={name:"app-nav-bar",data:function(){return{hw_style:{}}},watch:{leftIcon:function(t,e){console.log("lefticon 监听测试"),this.doSomething()}},props:{fixed:{type:[Boolean,String],default:!0},shadow:{type:[String,Boolean],default:!1},hasHeight:{type:Boolean,default:!0},border:{type:[String,Boolean],default:!1},backgroundColor:{type:String,default:"#FFFFFF"},leftIcon:{type:String,default:""},link:{type:[Object,Array]},title:{type:String,default:""},xStyle:{type:[Number,String],default:1},hasMallSetting:{type:[Number,String],default:1},color:{type:String,default:"#000000"},position:{type:String,default:"center"},placeholder:{type:String,default:"搜索"},placeholderColor:{type:String,default:"#666666"},backColor:{type:String,default:"black"},typeStyle:{type:String,default:""}},computed:o({},(0,r.mapState)({statusBarHeight:function(t){return t.gConfig.systemInfo.statusBarHeight},mBarHeight:function(t){return t.gConfig.mBarHeight},appImg:function(t){return t.mallConfig.__wxapp_img.mall},mallNavbar:function(t){return t.mallConfig.navbar}}),{maxWidth:function(){var e=this;return function(){var n=parseInt(e.xStyle),r=0;switch(n){case 1:r="center"===e.position?t.upx2px(360):t.upx2px(500);break;case 2:r=t.upx2px(400);break;case 4:r=t.upx2px(200);break;default:break}return r&&e.pagesLength>1&&(r-=t.upx2px(42)),Object.assign({},{"max-width":r+"px"})}},hiddenHeight:function(){var t=this;return function(){var e;e=t.statusBarHeight,e=e||0;var n=e+t.mBarHeight;return t.$emit("headHeight",n),{height:n+"px"}}},ordinaryStyle:function(){var t=this;return function(){var e,n="",r="";n=t.mallNavbar.top_text_color,r=t.mallNavbar.top_background_color,1==t.hasMallSetting?(n=t.mallNavbar.top_text_color,r=t.mallNavbar.top_background_color):(n=t.color,r=t.backgroundColor),e=t.statusBarHeight,e=e||0;var a=e+t.mBarHeight;return t.$emit("headHeight",a),n=n||"#000000",r=r||"#FFFFFF",Object.assign({},{color:n,backgroundColor:r,height:a+"px",paddingTop:e+"px"})}},hasJump:function(){return-1!==[2,4].indexOf(parseInt(this.xStyle))},showLeftIcon:function(){return-1!==[2,3].indexOf(parseInt(this.xStyle))&&this.leftIcon},showTitle:function(){return-1!==[1,2,4].indexOf(parseInt(this.xStyle))&&this.title},showLink:function(){return-1!==[3,4].indexOf(parseInt(this.xStyle))&&this.link},pagesLength:function(){return getCurrentPages().length}}),mounted:function(){this.doSomething()},methods:{doSomething:function(){var e=54,n=100,r=this;t.getImageInfo({src:r.leftIcon,success:function(a){var o=a.height,i=a.width;o<=e&&i>=n&&(o/=i/n,i=n),o>=e&&i<=n&&(o=e,i/=o/e),o>e&&i>=n&&(n/e>i/o?(i/=o/e,o=e):(o/=i/n,i=n)),r.hw_style={height:t.upx2px(o)+"px",width:t.upx2px(i)+"px"}}})},navGoodsSearch:function(){t.navigateTo({url:"/pages/search/search"})},onClickBack:function(){t.navigateBack({delta:1})}}};e.default=u}).call(this,n("543d")["default"])},"8aef":function(t,e,n){"use strict";n("b27a")},b27a:function(t,e,n){},b46d:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__get_style([t.hiddenHeight()])),r=t.__get_style([t.ordinaryStyle()]),a=t.__get_style([t.hw_style]),o=t.__get_style([t.maxWidth()]),i=t.__get_style([t.maxWidth()]);t.$mp.data=Object.assign({},{$root:{s0:n,s1:r,s2:a,s3:o,s4:i}})},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},b7ce:function(t,e,n){"use strict";n.r(e);var r=n("6dce"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/index/app-nav-bar-create-component',
    {
        'components/page-component/index/app-nav-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("59f3"))
        })
    },
    [['components/page-component/index/app-nav-bar-create-component']]
]);                