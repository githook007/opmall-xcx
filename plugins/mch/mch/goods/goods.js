(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/mch/mch/goods/goods"],{"114c":function(t,o,i){},"2ab1":function(t,o,i){"use strict";i("114c")},"4bc6":function(t,o,i){"use strict";i.r(o);var e=i("d422"),n=i("bc65");for(var s in n)"default"!==s&&function(t){i.d(o,t,function(){return n[t]})}(s);i("2ab1");var a=i("2877"),c=Object(a["a"])(n["default"],e["a"],e["b"],!1,null,"3867f8d8",null);o["default"]=c.exports},bc65:function(t,o,i){"use strict";i.r(o);var e=i("f9b5"),n=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(o,t,function(){return e[t]})}(s);o["default"]=n.a},d422:function(t,o,i){"use strict";var e=function(){var t=this,o=t.$createElement;t._self._c;t._isMounted||(t.e0=function(o){t.id=null},t.e1=function(o){t.id=null})},n=[];i.d(o,"a",function(){return e}),i.d(o,"b",function(){return n})},f9b5:function(t,o,i){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=i("2f62");function n(t,o){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);o&&(e=e.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,e)}return i}function s(t){for(var o=1;o<arguments.length;o++){var i=null!=arguments[o]?arguments[o]:{};o%2?n(i,!0).forEach(function(o){a(t,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(i).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))})}return t}function a(t,o,i){return o in t?Object.defineProperty(t,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[o]=i,t}var c=function(){return i.e("components/basic-component/app-tab-nav/app-tab-nav").then(i.bind(null,"7fd0"))},d={data:function(){return{theme:{color:"#ff4544"},tabList:[{id:1,name:"出售中"},{id:2,name:"售罄"},{id:3,name:"仓库中"},{id:4,name:"最新"}],activeTab:"1",keyword:"",page:1,id:null,more_list:!1,iphone_x:!1,status:null,page_loading:!0,sort_type:0,sort:1,is_goods_audit:1,go_status:1,is_sold_out:0,list:[],is_switch:!1,is_delete:!1,apply_up:!1,toSearch:!1,device:null,mch_id:0}},components:{"app-tab-nav":c},computed:s({},(0,e.mapState)({appImg:function(t){return t.mallConfig.__wxapp_img.mall},appSetting:function(t){return t.mallConfig.mall.setting},adminImg:function(t){return t.mallConfig.__wxapp_img.mch}})),methods:{toEdit:function(o){var i=this;t.navigateTo({url:"/plugins/mch/mch/add-goods/add-goods?id="+o+"&mch_id="+this.mch_id}),setTimeout(function(){i.id=null})},toAdd:function(){t.navigateTo({url:"/plugins/mch/mch/add-goods/add-goods?mch_id="+this.mch_id})},beSearch:function(){0==this.keyword.length?this.toSearch=!this.toSearch:this.toSearch=this.toSearch},reload:function(){this.id=null,this.getList()},cancel:function(){this.id=null,this.is_delete=!1,this.is_switch=!1,this.apply_up=!1},toDelete:function(t){this.is_delete=!0},showMenu:function(t){this.id=t},toSwitch:function(t,o){var i=this;i.id=o,2==t?i.apply_up=!0:(i.status=t,i.is_switch=!0)},tabStatus:function(t){this.activeTab=t.currentTarget.dataset.id,this.getList()},applyStatus:function(){var o=this;o.apply_up=!1,t.showLoading({title:"申请中..."}),o.$request({url:o.$api.mch.apply_status,method:"post",data:{mch_id:o.mch_id,id:o.id}}).then(function(i){t.hideLoading(),0==i.code?(t.showToast({title:i.msg,duration:1e3}),setTimeout(function(){o.reload()},1e3)):t.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(o){t.hideLoading()})},getList:function(){var o=this;t.showLoading({title:"加载中..."}),o.list=[],o.page=1,"1"==o.activeTab?(o.go_status=1,o.is_sold_out=0):"2"==o.activeTab?(o.go_status=1,o.is_sold_out=1):"3"==o.activeTab?(o.go_status=0,o.is_sold_out=0):"4"==o.activeTab&&(o.go_status=1,o.is_sold_out=0),o.$request({url:o.$api.mch.goods,data:{page:o.page,mch_id:o.mch_id,sort:o.sort,sort_type:o.sort_type,keyword:o.keyword,status:o.go_status,is_sold_out:o.is_sold_out}}).then(function(i){t.hideLoading(),0==i.code?(o.list=i.data.list,o.page++,o.more_list=!1,10==i.data.list.length&&(o.more_list=!0)):t.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(o){t.hideLoading()})},getMore:function(){var o=this;t.showLoading({title:"加载中..."}),"1"==o.activeTab?(o.go_status=1,o.is_sold_out=0):"2"==o.activeTab?(o.go_status=1,o.is_sold_out=1):"3"==o.activeTab?(o.go_status=0,o.is_sold_out=0):"4"==o.activeTab&&(o.go_status=1,o.is_sold_out=0),o.$request({url:o.$api.mch.goods,data:{page:o.page,mch_id:o.mch_id,sort:o.sort,sort_type:o.sort_type,keyword:o.keyword,status:o.go_status,is_sold_out:o.is_sold_out}}).then(function(i){t.hideLoading(),0==i.code?(o.list=o.list.concat(i.data.list),o.page++,o.more_list=!1,10==i.data.list.length&&(o.more_list=!0)):t.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(o){t.hideLoading()})},goods_destroy:function(){var o=this;o.is_delete=!1,t.showLoading({title:"加载中..."}),o.$request({url:o.$api.mch.destroy,data:{mch_id:o.mch_id,id:o.id},method:"post"}).then(function(i){t.hideLoading(),0==i.code?(t.showToast({title:i.msg,duration:1e3}),setTimeout(function(){o.reload()},1e3)):t.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){un})},goods_switch:function(){var o=this;o.is_switch=!1,t.showLoading({title:"加载中..."}),o.$request({url:o.$api.mch.switch_status,data:{mch_id:o.mch_id,id:o.id},method:"post"}).then(function(i){t.hideLoading(),0==i.code?(t.showToast({title:i.msg,duration:1e3}),setTimeout(function(){o.reload()},1e3)):t.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(o){t.hideLoading()})},getSetting:function(){var o=this;o.$showLoading({type:"global",text:"加载中..."}),o.$request({url:o.$api.mch.setting}).then(function(i){o.$hideLoading(),0==i.code?o.is_goods_audit=i.data.setting.is_goods_audit:t.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(t){o.$hideLoading()})}},onReachBottom:function(){this.more_list&&this.getMore()},onLoad:function(t){this.$commonLoad.onload(t);var o=this;o.mch_id=t.mch_id,o.go_status=1,o.is_sold_out=0,o.getSetting()},onShow:function(t){var o=this,i=setInterval(function(){o.mch_id>0&&(clearInterval(i),o.getList())},500)}};o.default=d}).call(this,i("543d")["default"])}},[["0ae7","common/runtime","common/vendor"]]]);