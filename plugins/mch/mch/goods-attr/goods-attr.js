(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/mch/mch/goods-attr/goods-attr"],{"00d5":function(t,e,o){"use strict";o.r(e);var i=o("de38"),n=o("b063");for(var a in n)"default"!==a&&function(t){o.d(e,t,function(){return n[t]})}(a);o("f8dc");var r=o("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"336c8970",null);e["default"]=s.exports},5080:function(t,e,o){},"98e5":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{list:[],attr:[],iphone_x:!1,noDetail:!0,first:!0,index:-1}},methods:{changeName:function(e){var o=this;if(this.attr.length>0){for(var i in this.attr)for(var n in this.attr[i].attr_list)e.attr_group_id==this.attr[i].attr_list[n].attr_group_id&&(this.attr[i].attr_list[n].attr_group_name=e.attr_group_name);this.$storage.setStorageSync("temp_attr_info",o.attr),t.hideLoading()}},pop:function(t){this.index=t,this.list[this.index].attr_group_name||0!==this.list[this.index].attr_list.length||(this.list.splice(this.index,1),this.index=-1,this.attr=[],this.$storage.removeStorageSync("temp_attr_info"))},close:function(){this.index=-1},changeValue:function(e){this.$storage.setStorageSync("temp_attr",this.list),t.navigateTo({url:"/plugins/mch/mch/goods-attr-edit/goods-attr-edit?index=".concat(e)})},chooseDetail:function(){if(0===this.list.length)return t.showToast({title:"请输入规格信息",icon:"none",duration:1e3}),!1;var e=1;for(var o in this.list)e*=+this.list[o].attr_list.length;if(e>1e3)return t.showToast({title:"规格组合超出1000，请删减规格值再继续操作",icon:"none",duration:1e3}),!1;for(var i in this.list)if(!this.list[i].attr_group_name||0==this.list[i].attr_list.length)return t.showToast({title:"请完善规格信息",icon:"none",duration:1e3}),!1;this.$storage.setStorageSync("temp_attr",this.list),t.navigateTo({url:"/plugins/mch/mch/goods-attr-info/goods-attr-info"})},toDelete:function(){this.list.splice(this.index,1),this.index=-1,this.attr=[],this.$storage.removeStorageSync("temp_attr_info")},save:function(){var e=this;if(0===e.list.length)return t.showToast({title:"请输入规格信息",icon:"none",duration:1e3}),!1;for(var o in e.list)if(!e.list[o].attr_group_name||0===e.list[o].attr_list.length||0===e.attr.length)return t.showToast({title:"请完善规格信息",icon:"none",duration:1e3}),!1;this.$storage.setStorageSync("goods_attr_groups",this.list),t.showLoading({mask:!0,title:"保存中..."}),this.$storage.setStorageSync("goods_attr",this.attr),setTimeout(function(){t.hideLoading(),t.navigateBack()},500),t.setStorage({key:"goods_attr_groups",data:e.list})},add_attr:function(){this.list.push({attr_group_id:this.list.length+1,attr_group_name:"",attr_list:[]}),this.attr=[],t.removeStorage({key:"temp_attr_info"})}},onLoad:function(){this.$commonLoad.onload();var e=this;e.$showLoading({type:"global",text:"加载中..."});e.$storage.getStorageSync("goods_attr_groups")?(e.list=e.$storage.getStorageSync("goods_attr_groups"),e.$storage.setStorageSync("temp_attr",e.list)):e.list=e.$storage.getStorageSync("temp_attr"),e.$storage.getStorageSync("goods_attr")?(e.attr=e.$storage.getStorageSync("goods_attr"),e.$storage.setStorageSync("temp_attr_info",e.$storage.getStorageSync("goods_attr")),e.$hideLoading(),e.first=!1):(e.first=!1,e.$hideLoading()),t.getSystemInfo({success:function(t){(t.model.indexOf("iPhone X")>-1||t.model.indexOf("iPhone 11")>-1||t.model.indexOf("iPhone11")>-1||t.model.indexOf("iPhone12")>-1||t.model.indexOf("Unknown Device")>-1)&&(e.iphone_x=!0)}})},onShow:function(){var t=this;this.first||(t.list=t.$storage.getStorageSync("temp_attr")?t.$storage.getStorageSync("temp_attr"):[],t.attr=t.$storage.getStorageSync("temp_attr_info")?t.$storage.getStorageSync("temp_attr_info"):[])}};e.default=o}).call(this,o("543d")["default"])},b063:function(t,e,o){"use strict";o.r(e);var i=o("98e5"),n=o.n(i);for(var a in i)"default"!==a&&function(t){o.d(e,t,function(){return i[t]})}(a);e["default"]=n.a},de38:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},n=[];o.d(e,"a",function(){return i}),o.d(e,"b",function(){return n})},f8dc:function(t,e,o){"use strict";o("5080")}},[["2a13","common/runtime","common/vendor"]]]);