(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods-edit/cat-setting/cat-setting"],{"239c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach(function(e){a(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={data:function(){return{mch_id:null,type:"",first:!0,value:-1,color:"",list:[]}},computed:r({},(0,i.mapState)({userInfo:function(t){return t.user.info},adminImg:function(t){return t.mallConfig.__wxapp_img.app_admin}})),methods:{editCat:function(e){var n=e.value?e.value:null;t.navigateTo({url:"/pages/goods-edit/cat-edit/cat-edit?mch_id="+this.mch_id+"&type="+this.type+"&id="+n})},toggle:function(t){t.show=!t.show,this.$forceUpdate()},getCat:function(){var e=this,n=0==this.mch_id?e.$api.app_admin.cat:"mall"==e.type?e.$api.mch.cat:e.$api.mch.mch_cat;e.$request({url:n,data:{mch_id:e.mch_id}}).then(function(n){if(e.first=!1,e.$hideLoading(),t.hideLoading(),0==n.code){e.list=n.data.list;var i=!0,o=!1,r=void 0;try{for(var a,c=e.list[Symbol.iterator]();!(i=(a=c.next()).done);i=!0){var u=a.value;if(u.show=!1,u.children){var d=!0,l=!1,s=void 0;try{for(var f,h=u.children[Symbol.iterator]();!(d=(f=h.next()).done);d=!0){var p=f.value;p.show=!1}}catch(m){l=!0,s=m}finally{try{d||null==h.return||h.return()}finally{if(l)throw s}}}}}catch(m){o=!0,r=m}finally{try{i||null==c.return||c.return()}finally{if(o)throw r}}}else t.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(n){e.$hideLoading(),t.hideLoading()})},pop:function(t){this.value=t},close:function(){this.value=-1},toDelete:function(){var e=this,n=this;t.showLoading({mask:!0,title:"删除中..."});var i=0==this.mch_id?n.$api.app_admin.cat_destroy:n.$api.mch.mch_cat_destroy;n.$request({url:i,data:{id:this.value,mch_id:n.mch_id},method:"post"}).then(function(n){t.hideLoading(),0==n.code?(e.value=-1,e.getCat()):t.showToast({title:n.msg,icon:"none",duration:1e3})}).catch(function(e){t.hideLoading()})}},onShow:function(){this.first||(t.showLoading({mask:!0}),this.getCat())},onLoad:function(t){var e=this;e.$showLoading({type:"global",text:"加载中..."}),this.type=t.type?t.type:"",this.mch_id=t.mch_id?t.mch_id:0,this.color=this.mch_id>0?"#ff4544":"#446dfd",e.getCat()}};e.default=c}).call(this,n("543d")["default"])},"24ce":function(t,e,n){},"4f5f":function(t,e,n){"use strict";n("24ce")},"5bed":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"5c2b":function(t,e,n){"use strict";n.r(e);var i=n("5bed"),o=n("85df");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("4f5f");var a=n("2877"),c=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"55093926",null);e["default"]=c.exports},"85df":function(t,e,n){"use strict";n.r(e);var i=n("239c"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=o.a}},[["2942","common/runtime","common/vendor"]]]);