(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/composition/detail/detail"],{2207:function(t,o,i){"use strict";var s=function(){var t=this,o=t.$createElement;t._self._c},e=[];i.d(o,"a",function(){return s}),i.d(o,"b",function(){return e})},"22ab":function(t,o,i){"use strict";i("26a3")},"26a3":function(t,o,i){},"381c":function(t,o,i){"use strict";i.r(o);var s=i("2207"),e=i("af59");for(var n in e)"default"!==n&&function(t){i.d(o,t,function(){return e[t]})}(n);i("22ab");var l=i("2877"),r=Object(l["a"])(e["default"],s["a"],s["b"],!1,null,"3d4a126a",null);o["default"]=r.exports},af59:function(t,o,i){"use strict";i.r(o);var s=i("b6ba"),e=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(o,t,function(){return s[t]})}(n);o["default"]=e.a},b6ba:function(t,o,i){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var s=i("2f62");function e(t,o){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);o&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,s)}return i}function n(t){for(var o=1;o<arguments.length;o++){var i=null!=arguments[o]?arguments[o]:{};o%2?e(i,!0).forEach(function(o){l(t,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(i).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))})}return t}function l(t,o,i){return o in t?Object.defineProperty(t,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[o]=i,t}var r=function(){return i.e("plugins/composition/components/app-list/app-list").then(i.bind(null,"8e53"))},a=function(){return i.e("components/basic-component/app-composition/app-composition").then(i.bind(null,"9495"))},d={data:function(){return{list:[],other:[],total:0,showNoAttr:!1,noAttrList:[],goods_id:"",max_discount:"0.00",page:2,hidden:!1,iphone_x:!1,noMore:!1,composition_id:"",loading:!1}},components:{"app-list":r,"app-composition":a},computed:n({},(0,s.mapGetters)("mallConfig",{getTheme:"getTheme"})),methods:{choose:function(t){this.composition_id=t.id,this.total="0.00",this.max_discount="0.00",this.getDetail()},toComposition:function(){t.redirectTo({url:"/plugins/composition/index/index"})},toBuy:function(){var o=this,i=[],s=[{mch_id:0,composition_list:[]}];if(o.noAttrList.length>0)o.showNoAttr=!0;else{for(var e in o.list)if(i=[],o.list[e].choose){var n={composition_id:o.list[e].id,goods_list:[]};if(o.list[e].host_list.length>0){for(var l in o.list[e].host_list[0].choose_attr.attr_list)i.push({attr_id:o.list[e].host_list[0].choose_attr.attr_list[l].attr_id,attr_group_id:o.list[e].host_list[0].choose_attr.attr_list[l].attr_group_id});n.goods_list.push({id:o.list[e].host_list[0].goods_id,num:1,goods_attr_id:o.list[e].host_list[0].choose_attr.goods_attr_id,attr:[]})}for(var r in o.list[e].goods_list)if(o.list[e].goods_list[r].choose_attr&&o.list[e].goods_list[r].choose_attr.attr_list.length>0){for(var a in o.list[e].goods_list[r].choose_attr.attr_list)i.push({attr_id:o.list[e].goods_list[r].choose_attr.attr_list[a].attr_id,attr_group_id:o.list[e].goods_list[r].choose_attr.attr_list[a].attr_group_id});n.goods_list.push({id:o.list[e].goods_list[r].goods_id,num:1,goods_attr_id:o.list[e].goods_list[r].choose_attr.goods_attr_id,attr:i})}s[0].composition_list.push(n)}else{var d={composition_id:o.list[e].id,goods_list:[]};if(o.list[e].host_list.length>0&&o.list[e].host_list[0].choose_goods){for(var _ in o.list[e].host_list[0].choose_attr.attr_list)i.push({attr_id:o.list[e].host_list[0].choose_attr.attr_list[_].attr_id,attr_group_id:o.list[e].host_list[0].choose_attr.attr_list[_].attr_group_id});d.goods_list.push({id:o.list[e].host_list[0].goods_id,num:1,goods_attr_id:o.list[e].host_list[0].choose_attr.goods_attr_id,attr:i})}for(var c in o.list[e].goods_list)if(o.list[e].goods_list[c].choose_goods&&o.list[e].goods_list[c].choose_attr.attr_list){for(var h in!1,o.list[e].goods_list[c].choose_attr.attr_list)i.push({attr_id:o.list[e].goods_list[c].choose_attr.attr_list[h].attr_id,attr_group_id:o.list[e].goods_list[c].choose_attr.attr_list[h].attr_group_id});d.goods_list.push({id:o.list[e].goods_list[c].goods_id,num:1,goods_attr_id:o.list[e].goods_list[c].choose_attr.goods_attr_id,attr:i})}d.goods_list.length>0&&s[0].composition_list.push(d)}if(0==s[0].composition_list.length)t.showToast({title:"请选择套餐",icon:"none",duration:1e3});else{for(var g in s[0].composition_list)1==s[0].composition_list[g].goods_list.length&&s[0].composition_list.splice(g,1);if(0==s[0].composition_list.length)t.showToast({title:"请选择搭配商品",icon:"none",duration:1e3});else{for(var u in s[0].goods_list=[],s[0].composition_list)for(var p in s[0].composition_list[u].goods_list)s[0].composition_list[u].goods_list[p].cart_id=0,s[0].goods_list.push(s[0].composition_list[u].goods_list[p]);var f="/pages/order-submit/order-submit?mch_list=".concat(JSON.stringify(s));f+="&preview_url=".concat(encodeURIComponent(this.$api.composition.order_preview),"&submit_url=").concat(encodeURIComponent(this.$api.composition.order_submit),"&plugin=composition"),this.$jump({open_type:"navigate",url:f})}}}},close:function(){this.showNoAttr=!1},updateList:function(t){this.list=t},update:function(t){this.noAttrList=t},getTotal:function(t){this.total=t.total,t.max_discount&&(this.max_discount=t.max_discount.toFixed(2))},getDetail:function(){var o=this;o.loading=!1,t.showLoading({mask:!0,title:"加载中..."});var i={composition_id:o.composition_id};o.goods_id>0&&(i.goods_id=o.goods_id),o.$request({url:o.goods_id>0?o.$api.composition.detail:o.$api.composition.composition_detail,data:i}).then(function(i){if(o.loading=!0,t.hideLoading(),0==i.code){for(var s in o.goods_id>0?(o.list=i.data.other_list,o.other=i.data.list):(o.list=[],o.list[0]=i.data.composition),o.other.length<4&&(o.noMore=!0),o.list)for(var e in o.list[s].choose=!1,o.list[s].goods_list)o.list[s].goods_list[e].choose_attr=null,1==o.list[s].goods_list[e].goods_attr.length&&(o.list[s].goods_list[e].choose_attr=o.list[s].goods_list[e].goods_attr[0],o.list[s].goods_list[e].choose_attr.number=1,o.list[s].goods_list[e].total_price=(+o.list[s].goods_list[e].choose_attr.price-+o.list[s].goods_list[e].price).toFixed(2)),2==o.list[s].type&&(o.list[s].host_list[0].choose_attr=null,1==o.list[s].host_list[0].goods_attr.length&&(o.list[s].host_list[0].choose_attr=o.list[s].host_list[0].goods_attr[0],o.list[s].host_list[0].choose_attr.number=1,o.list[s].host_list[0].total_price=(+o.list[s].host_list[0].choose_attr.price-+o.list[s].host_list[0].price).toFixed(2)),o.list[s].goods_list[e].choose_goods=!1,o.list[s].host_list[0].choose_goods=!0,o.list[s].host_list[0].opacity=.3);1==o.list[0].type&&(o.list[0].choose=!0,o.max_discount=o.list[0].max_discount)}else t.hideLoading(),t.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(i){o.loading=!0,t.hideLoading(),o.$hideLoading()})},getMore:function(){var o=this,i=this;t.showLoading({mask:!0,title:"加载中"}),i.$request({url:i.$api.composition.detail,data:{goods_id:i.goods_id,composition_id:i.composition_id,page:i.page}}).then(function(s){if(t.hideLoading(),0==s.code){if(0==s.data.list.length)return o.noMore=!0,!1;for(var e in i.page++,i.other=i.other.concat(s.data.list),i.list)for(var n in i.list[e].choose=!1,i.list[e].goods_list)i.list[e].goods_list[n].choose_attr=null,2==i.list[e].type&&(i.list[e].host_list[0].choose_attr=null,i.list[e].host_list[0].opacity=1,i.list[e].goods_list[n].choose_goods=!1,i.list[e].host_list[0].choose_goods=!1)}else t.hideLoading(),t.showToast({title:s.msg,icon:"none",duration:1e3})}).catch(function(t){i.$hideLoading()})}},onReachBottom:function(){this.noMore||this.getMore()},onLoad:function(o){this.$commonLoad.onload(o);var i=this;t.getSystemInfo({success:function(t){(t.model.indexOf("iPhone X")>-1||t.model.indexOf("iPhone 11")>-1||t.model.indexOf("iPhone11")>-1||t.model.indexOf("iPhone12")>-1||t.model.indexOf("Unknown Device")>-1)&&(i.iphone_x=!0)}}),this.goods_id=o.goods_id>0?o.goods_id:"",this.composition_id=o.composition_id,i.getDetail()}};o.default=d}).call(this,i("543d")["default"])}},[["221a","common/runtime","common/vendor"]]]);