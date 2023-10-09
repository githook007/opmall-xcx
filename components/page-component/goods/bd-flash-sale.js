(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/page-component/goods/bd-flash-sale"],{"0b5e":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"bd-flash-sale",props:{flashSale:{type:Object,default:function(){return{time_status:1,start_at:"",end_at:"",min_discount:""}}},theme:Object},computed:{flashStyle:function(){return"a"==this.theme.theme&&this.flashSale.cover?"background-image: url('"+this.flashSale.cover+")":"background:"+this.theme.background_p}},methods:{navigator:function(){t.navigateTo({url:this.flashSale.url})}}};e.default=a}).call(this,a("543d")["default"])},"28dc":function(t,e,a){"use strict";a.r(e);var n=a("0b5e"),u=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=u.a},"5fa8":function(t,e,a){},"87eba":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},u=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return u})},"975a":function(t,e,a){"use strict";a.r(e);var n=a("87eba"),u=a("28dc");for(var o in u)"default"!==o&&function(t){a.d(e,t,function(){return u[t]})}(o);a("fa8a");var r=a("2877"),c=Object(r["a"])(u["default"],n["a"],n["b"],!1,null,"99165a04",null);e["default"]=c.exports},fa8a:function(t,e,a){"use strict";a("5fa8")}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/page-component/goods/bd-flash-sale-create-component',
    {
        'components/page-component/goods/bd-flash-sale-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("975a"))
        })
    },
    [['components/page-component/goods/bd-flash-sale-create-component']]
]);                
