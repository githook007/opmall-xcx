(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/full_reduce/u-waterfall"],{"0e62":function(t,e,n){"use strict";n.r(e);var i=n("7346"),r=n("c5a9");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);n("e396");var a=n("2877"),s=Object(a["a"])(r["default"],i["a"],i["b"],!1,null,"444defb6",null);e["default"]=s.exports},"3b40":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,i,r,u,a){try{var s=t[u](a),o=s.value}catch(c){return void n(c)}s.done?e(o):Promise.resolve(o).then(i,r)}function a(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var a=t.apply(e,n);function s(t){u(a,i,r,s,o,"next",t)}function o(t){u(a,i,r,s,o,"throw",t)}s(void 0)})}}var s=function(){return Promise.all([n.e("common/vendor"),n.e("components/page-component/app-attr/app-attr")]).then(n.bind(null,"d3c4"))},o={name:"u-waterfall",props:{value:{type:Array,required:!0,default:function(){return[]}},addTime:{type:[Number,String],default:200},idKey:{type:String,default:"id"},theme:Object},provide:function(){return{uWaterfall:this}},data:function(){return{leftList:[],rightList:[],tempList:[],children:[],attrShow:0,goods:null}},watch:{copyFlowList:function(t,e){var n=Array.isArray(e)&&e.length>0?e.length:0;this.tempList=this.tempList.concat(this.cloneData(t.slice(n))),this.splitData()}},mounted:function(){this.tempList=this.cloneData(this.copyFlowList),this.splitData()},computed:{copyFlowList:function(){return this.cloneData(this.value)}},methods:{splitData:function(){var t=a(i.default.mark(function t(){var e,n,r,u=this;return i.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.tempList.length){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.uGetRect("#u-left-column");case 4:return e=t.sent,t.next=7,this.uGetRect("#u-right-column");case 7:if(n=t.sent,r=this.tempList[0],r){t.next=11;break}return t.abrupt("return");case 11:e&&e.height<n&&n.height?this.leftList.push(r):e&&e.height>n&&n.height?this.rightList.push(r):this.leftList.length<=this.rightList.length?this.leftList.push(r):this.rightList.push(r),this.tempList.splice(0,1),this.tempList.length&&setTimeout(function(){u.splitData()},this.addTime);case 14:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),cloneData:function(t){return JSON.parse(JSON.stringify(t))},uGetRect:function(e){var n=this;return new Promise(function(i){var r=t.createSelectorQuery().in(n);r.select(e).boundingClientRect(function(t){i(t)}).exec()})},buy:function(t){this.goods=t,this.attrShow=Math.random()},route:function(e){t.navigateTo({url:e.page_url})},emptyList:function(){this.leftList=[],this.tempList=[],this.rightList=[]}},components:{appAttr:s}};e.default=o}).call(this,n("543d")["default"])},"67f0":function(t,e,n){},7346:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},c5a9:function(t,e,n){"use strict";n.r(e);var i=n("3b40"),r=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e["default"]=r.a},e396:function(t,e,n){"use strict";n("67f0")}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/full_reduce/u-waterfall-create-component',
    {
        'pages/full_reduce/u-waterfall-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0e62"))
        })
    },
    [['pages/full_reduce/u-waterfall-create-component']]
]);                