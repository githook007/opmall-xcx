(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/lottery/prize/prize"],{"3e42":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"8c7c":function(t,e,n){},cd97:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return Promise.all([n.e("common/vendor"),n.e("plugins/lottery/common-buttom")]).then(n.bind(null,"5a76"))},i={name:"prize",components:{commonButtom:a},data:function(){return{list:null,page:1,type:1,load:!1,args:!1}},onLoad:function(t){this.$commonLoad.onload(t),this.type=t.type?t.type:1,this.getSetting(),this.loadData()},onReachBottom:function(){var t=this;if(!t.args&&!t.load){t.load=!0;var e=t.page+1;t.$request({url:t.$api.lottery.prize,data:{page:e,type:t.type}}).then(function(n){if(0===n.code){var a=[e,0===n.data.list.length,t.list.concat(n.data.list)];t.page=a[0],t.args=a[1],t.list=a[2]}t.load=!1})}},methods:{getSetting:function(){var e=this;e.$request({url:e.$api.lottery.setting}).then(function(e){0===e.code&&t.setNavigationBarTitle({title:e.data.setting.title})})},loadData:function(){var t=this;t.$showLoading({title:"加载中"}),t.$request({url:t.$api.lottery.prize,data:{type:t.type}}).then(function(e){t.$hideLoading(),0===e.code&&(t.list=e.data.list)}).catch(function(e){t.$hideLoading()})},change:function(t){var e=[t,1,!1];this.type=e[0],this.page=e[1],this.args=e[2],this.loadData()},lotteryDetail:function(e){t.navigateTo({url:"/plugins/lottery/detail/detail?lottery_id="+e})}}};e.default=i}).call(this,n("543d")["default"])},dcfc:function(t,e,n){"use strict";n("8c7c")},deb4:function(t,e,n){"use strict";n.r(e);var a=n("3e42"),i=n("e976");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("dcfc");var r=n("2877"),l=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"11f2b344",null);e["default"]=l.exports},e976:function(t,e,n){"use strict";n.r(e);var a=n("cd97"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a}},[["5b0c","common/runtime","common/vendor"]]]);