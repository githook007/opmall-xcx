(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/lottery/index/index"],{"0b7c":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},4628:function(t,e,n){"use strict";n("cd5c")},"8b85":function(t,e,n){"use strict";n.r(e);var i=n("b51e"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},b51e:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62");function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach(function(e){o(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(){return n.e("components/page-component/app-swiper/app-swiper").then(n.bind(null,"8af3"))},s=function(){return n.e("plugins/lottery/integral-model").then(n.bind(null,"5be7"))},u=function(){return Promise.all([n.e("common/vendor"),n.e("plugins/lottery/common-buttom")]).then(n.bind(null,"5a76"))},c={name:"index",components:{appSwiper:l,commonButtom:u,integralModel:s},data:function(){var t;return{integral:t,args:!1,load:!1,page:1,list:null,times:null,title:"幸运抽奖",banner_list:[],setting:null,template_message:null,deplete_integral_num:0}},computed:r({},(0,i.mapGetters)({userInfo:"user/info"})),onHide:function(){clearInterval(this.integral)},onUnload:function(){clearInterval(this.integral)},onLoad:function(e){this.$commonLoad.onload(e);var n=this;n.$request({url:n.$api.lottery.setting}).then(function(e){0===e.code&&(n.setting=e.data.setting,t.setNavigationBarTitle({title:n.setting.title}),n.title=n.setting.title)}),wx.showShareMenu({withShareTicket:!0,menus:["shareAppMessage","shareTimeline"]})},onShareTimeline:function(){return this.$shareTimeline({title:this.title,query:{}})},onReachBottom:function(){var t=this;if(!t.args&&!t.load){t.load=!0;var e=t.page+1;t.$request({url:t.$api.lottery.index,data:{page:e}}).then(function(n){if(0===n.code){var i=[e,0===n.data.list.length,t.list.concat(n.data.list)];t.page=i[0],t.args=i[1],t.list=i[2];var a=t.list.map(function(t){return 2==t.new_status?t.start_at:t.end_at});t.setTimeStart(a)}t.load=!1})}},onShow:function(){var t=this;t.$showLoading({title:"加载中"}),t.$request({url:t.$api.lottery.index}).then(function(e){if(t.$hideLoading(),0===e.code){var n=[e.data.banner_list,e.data.list,e.data.banner_list,e.data.template_message];t.banner_list=n[0],t.list=n[1],t.banner_list=n[2],t.template_message=n[3];var i=[1,!1];t.page=i[0],t.args=i[1];var a=t.list.map(function(t){return 2==t.new_status?t.start_at:t.end_at});t.setTimeStart(a)}}).catch(function(){t.$hideLoading()})},onShareAppMessage:function(){return this.$shareAppMessage({title:this.title,path:"/plugins/lottery/index/index",params:{}})},methods:{qrcode:function(){t.navigateTo({url:"/plugins/lottery/qrcode/qrcode"})},goods:function(e){t.navigateTo({url:"/plugins/lottery/goods/goods?lottery_id=".concat(e.id)})},validateIntegral:function(t){var e=Number(t.deplete_integral_num);e>0?(this.deplete_integral_num=e,this.$refs.integralModel.showModel(t.id)):this.detail(t.id)},detail:function(e){this.$subscribe(this.template_message).then(function(n){t.navigateTo({url:"/plugins/lottery/detail/detail?lottery_id="+e})}).catch(function(n){t.navigateTo({url:"/plugins/lottery/detail/detail?lottery_id="+e})})},setTimeStart:function(t){var e=this;clearInterval(e.integral);var n=function(t){var n=[];t.map(function(t,e,i){var a=t.replace(/-/g,"/"),r=parseInt((new Date(a).getTime()-(new Date).getTime())/1e3),o=0,l=0,s=0,u=0;r>0&&(o=Math.floor(r/86400),l=Math.floor(r/3600)-24*o,s=Math.floor(r/60)-24*o*60-60*l,u=Math.floor(r)-24*o*60*60-60*l*60-60*s),n[e]={day:o,hour:l,minute:s,second:u}}),e.times=n};n(t),e.integral=setInterval(function(){n(t)},1e3)}}};e.default=c}).call(this,n("543d")["default"])},b933:function(t,e,n){"use strict";n.r(e);var i=n("0b7c"),a=n("8b85");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("4628");var o=n("2877"),l=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"2920d72e",null);e["default"]=l.exports},cd5c:function(t,e,n){}},[["030b","common/runtime","common/vendor"]]]);