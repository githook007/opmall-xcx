(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/basic-component/app-close/app-close"],{"4ff2":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("2f62");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(n,!0).forEach(function(e){o(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(){return n.e("components/basic-component/u-mask/u-mask").then(n.bind(null,"6244"))},u={name:"app-close",components:{uMask:l},props:{modal:{type:Boolean,default:function(){return!0}},toBack:{type:Boolean,default:function(){return!1}},mch_id:{type:[Number,String],default:function(){return 0}},mch_list:{type:String,default:function(){return""}}},data:function(){return{mallStatus:{is_open:0,auto_open_text:""},isMall:!0,list:""}},created:function(){var t=this,e={},n="";this.mch_list&&(n=this.mch_list,n.length>0&&(e.mch_id_list=n,-1==n.indexOf(0)&&(this.isMall=!1))),this.mch_id>0&&(e.mch_id_list=JSON.stringify([this.mch_id]),this.isMall=!1),this.$request({url:this.$api.index.status,data:e}).then(function(a){console.log(e);a.data;if(t.isMall||a.data.shift(),t.mallStatus=a.data[0],t.mch_id>0){var r=!0,i=!1,o=void 0;try{for(var l,u=a.data[Symbol.iterator]();!(r=(l=u.next()).done);r=!0){var c=l.value;c.mch_id==t.mch_id&&(t.mallStatus=c)}}catch(b){i=!0,o=b}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}}if(n.length>0){t.list="";var s=!0,f=!1,d=void 0;try{for(var p,m=a.data[Symbol.iterator]();!(s=(p=m.next()).done);s=!0){var h=p.value;2==h.is_open&&(t.mallStatus.auto_open_text||(t.mallStatus.auto_open_text=h.auto_open_text),t.mallStatus.is_open=h.is_open,t.list.length>0&&(t.list+="、"),t.list+=h.name)}}catch(b){f=!0,d=b}finally{try{s||null==m.return||m.return()}finally{if(f)throw d}}t.$emit("update",t.mallStatus)}else t.$emit("update",t.mallStatus)})},computed:i({},(0,a.mapGetters)("mallConfig",{getTheme:"getTheme"}),{},(0,a.mapState)({mall:function(t){return t.mallConfig.mall},userInfo:function(t){return t.user.info}})),methods:{toIndex:function(){this.toBack?t.navigateBack():t.redirectTo({url:"/pages/index/index"})}}};e.default=u}).call(this,n("543d")["default"])},"5a20":function(t,e,n){"use strict";n.r(e);var a=n("4ff2"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=r.a},"6bf1":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},b068:function(t,e,n){},c9a8:function(t,e,n){"use strict";n("b068")},f0dd:function(t,e,n){"use strict";n.r(e);var a=n("6bf1"),r=n("5a20");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("c9a8");var o=n("2877"),l=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,"29e4ed98",null);e["default"]=l.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/basic-component/app-close/app-close-create-component',
    {
        'components/basic-component/app-close/app-close-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f0dd"))
        })
    },
    [['components/basic-component/app-close/app-close-create-component']]
]);                
