(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/vip_card/index/index"],{"23f7":function(i,t,e){"use strict";var n=function(){var i=this,t=i.$createElement;i._self._c;i._isMounted||(i.e0=function(t){i.showShare=!i.showShare})},r=[];e.d(t,"a",function(){return n}),e.d(t,"b",function(){return r})},a1fe:function(i,t,e){"use strict";e("ff19")},ac0f:function(i,t,e){"use strict";e.r(t);var n=e("c0b5"),r=e.n(n);for(var o in n)"default"!==o&&function(i){e.d(t,i,function(){return n[i]})}(o);t["default"]=r.a},c0b5:function(i,t,e){"use strict";(function(i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=e("2f62");function r(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable})),e.push.apply(e,n)}return e}function o(i){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(e,!0).forEach(function(t){a(i,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):r(e).forEach(function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(e,t))})}return i}function a(i,t,e){return t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}var s=function(){return e.e("components/page-component/app-share-qr-code-poster/app-share-qr-code-poster").then(e.bind(null,"409e"))},c={data:function(){return{list:{form:{}},couponNum:0,cardNum:0,detail:{price:"",expire_day:""},is_buy:!1,first:!0,showLog:!1,showShare:!1,poster:this.$api.vip_card.poster,card:{detail:[]},scroll_position:"",iphone_x:!1,read:!1,vip_icon_width:234,user:{order:[]},title:"",start_time:"",end_time:"",id:0,expire_day:0,vipHeight:"320rpx",content:"",icon_width:"702rpx",currentRoute:this.$platDiff.route(),tabbarbool:!1}},computed:o({},(0,n.mapState)({svipImg:function(i){return i.mallConfig.__wxapp_img.vip_card},tabBarNavs:function(i){return i.mallConfig.navbar.navs}}),{},(0,n.mapGetters)("mallConfig",{getTheme:"getTheme"})),components:{appShareQrCode:s},watch:{tabBarNavs:{handler:function(){this.b()},immediate:!0}},onShareAppMessage:function(){return this.hShareAppMessage()},methods:{hShareAppMessage:function(){var i=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.$shareAppMessage({title:"我是"+this.card.name+"，召唤小伙伴一起来加入会员吧！",imageUrl:this.svipImg.image_share,path:"/plugins/vip_card/index/index"},i)},b:function(){for(var i=this.currentRoute,t=0;t<this.tabBarNavs.length;t++)if(i.includes(this.tabBarNavs[t].url.split("?")[0]))return this.tabbarbool=!0;return this.tabbarbool=!1},toRight:function(){var t=this;null!=t.user&&+t.user.expire>0?i.navigateTo({url:"/plugins/vip_card/rights/rights"}):i.navigateTo({url:"/plugins/vip_card/rights/rights?id="+t.detail.id})},toRead:function(){this.read=!this.read},toggleLog:function(){this.showLog=!this.showLog},toBuy:function(t){var e=0;null!=this.user&&(e=this.user.expire),this.read&&this.list.is_agreement||!this.list.is_agreement?(this.title="",i.navigateTo({url:"/plugins/vip_card/buy/buy?id="+t+"&end="+this.end_time+"&expire_day="+e})):i.showToast({title:"请先查看申请协议并同意",icon:"none",duration:1e3})},toRule:function(){i.navigateTo({url:"/pages/rules/index?url=".concat(encodeURIComponent(this.$api.vip_card.setting),"&key=agreement_content&title=超级会员卡使用说明")})},lookAbout:function(i){i.id>0?(this.title=i.title,this.content=i.content,this.id=i.id,this.expire_day=i.expire_day):(this.title="",this.content="")},choose:function(i,t){var e=this;if(e.is_buy=!1,e.couponNum=0,e.cardNum=0,t>1||t<e.card.detail.lenth-2?t--:t=t<2?0:his.card.detail.lenth-1,e.detail=i,e.scroll_position="detail"+t,i.coupons.length>0)for(var n in i.coupons)e.couponNum+=+i.coupons[n].send_num;if(i.cards.length>0)for(var r in i.cards)e.cardNum+=+i.cards[r].send_num;e.user&&e.user.order&&e.user.order.forEach(function(t){t.detail_id==i.id&&(e.is_buy=!0)})},getList:function(){var t=this;t.$request({url:t.$api.vip_card.index}).then(function(e){t.$hideLoading(),t.first=!1,0==e.code?(t.user=e.data.user,e.data.user.order.forEach(function(i){i.detail_id==t.card.detail[0].id&&(t.is_buy=!0)}),t.user&&(t.start_time=t.user.start_time.slice(0,10).replace(/-/g,"/"),t.end_time=t.user.end_time.slice(0,10).replace(/-/g,"/"))):("超级会员卡已关闭"!=e.msg&&"无超级会员卡权限"!=e.msg||i.redirectTo({url:"/pages/index/index"}),i.showToast({title:e.msg,icon:"none",duration:1e3}))}).catch(function(i){t.$hideLoading()})},getUrlParam:function(i,t){var e=i.split("?")[1];if(e){var n=e.substr(0).match(new RegExp("(^|&)"+t+"=([^&]*)(&|$)"));return null!==n?unescape(n[2]):null}return null},getSetting:function(){var t=this;t.$showLoading({type:"global",text:"加载中..."}),t.$request({url:t.$api.vip_card.setting}).then(function(e){if(0==e.code){for(var n in t.getCard(),t.list=e.data,t.list.form.vip_icon_list)for(var r in t.list.form.vip_icon_list[n])switch(t.list.form.vip_icon_list[n][r].img){case"statics/img/app/vip_card/icon1.png":t.list.form.vip_icon_list[n][r].img=t.svipImg.icon1;break;case"statics/img/app/vip_card/icon2.png":t.list.form.vip_icon_list[n][r].img=t.svipImg.icon2;break;case"statics/img/app/vip_card/icon3.png":t.list.form.vip_icon_list[n][r].img=t.svipImg.icon3;break;case"statics/img/app/vip_card/icon4.png":t.list.form.vip_icon_list[n][r].img=t.svipImg.icon4;break;case"statics/img/app/vip_card/icon5.png":t.list.form.vip_icon_list[n][r].img=t.svipImg.icon5;break;case"statics/img/app/vip_card/icon6.png":t.list.form.vip_icon_list[n][r].img=t.svipImg.icon6;break;case"statics/img/app/vip_card/icon7.png":t.list.form.vip_icon_list[n][r].img=t.svipImg.icon7;break}3==t.list.form.vip_number?t.vip_icon_width=234:4==t.list.form.vip_number?t.vip_icon_width=175:5==t.list.form.vip_number&&(t.vip_icon_width=140),t.vipHeight=160*+t.list.form.vip_line+"rpx",t.icon_width=702*t.list.form.vip_icon_list.length+"rpx"}else i.showToast({title:e.msg,icon:"none",duration:1e3}),"超级会员卡已关闭"!=e.msg&&"无超级会员卡权限"!=e.msg||setTimeout(function(){i.redirectTo({url:"/pages/index/index"})},1e3)}).catch(function(i){t.$hideLoading()})},getCard:function(){var t=this;t.$request({url:t.$api.vip_card.card}).then(function(e){if(0==e.code){if(t.card=e.data,t.detail=t.card.detail[0],t.detail.coupons.length>0)for(var n in t.detail.coupons)t.couponNum+=+t.detail.coupons[n].send_num;if(t.detail.cards.length>0)for(var r in t.detail.cards)t.cardNum+=+t.detail.cards[r].send_num;t.getList()}else i.showToast({title:e.msg,icon:"none",duration:1e3})}).catch(function(i){t.$hideLoading()})}},onLoad:function(){this.$commonLoad.onload();var t=this;t.getSetting(),i.getSystemInfo({success:function(i){(i.model.indexOf("iPhone X")>-1||i.model.indexOf("iPhone 11")>-1||i.model.indexOf("iPhone11")>-1||i.model.indexOf("iPhone12")>-1)&&(t.iphone_x=!0)}})},onShow:function(){var i=this;this.$storage.getStorageSync("vip_card_is_read")&&(this.read=this.$storage.getStorageSync("vip_card_is_read"),this.$storage.removeStorageSync("vip_card_is_read")),i.first||i.getList()}};t.default=c}).call(this,e("543d")["default"])},c938:function(i,t,e){"use strict";e.r(t);var n=e("23f7"),r=e("ac0f");for(var o in r)"default"!==o&&function(i){e.d(t,i,function(){return r[i]})}(o);e("a1fe");var a=e("2877"),s=Object(a["a"])(r["default"],n["a"],n["b"],!1,null,"08296ac7",null);t["default"]=s.exports},ff19:function(i,t,e){}},[["e4b7","common/runtime","common/vendor"]]]);