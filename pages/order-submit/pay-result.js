(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order-submit/pay-result"],{"16f9":function(e,t,n){},"4b5c":function(e,t,n){"use strict";n.r(t);var r=n("7aa3"),o=n("9e6a");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n("5cd3");var a=n("2877"),u=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,"0c3df147",null);t["default"]=u.exports},"5cd3":function(e,t,n){"use strict";n("16f9")},"72e3":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){a(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(){return n.e("components/page-component/app-related-suggestion-product/app-related-suggestion-product").then(n.bind(null,"1ce4"))},d=function(){return n.e("components/page-component/app-order-share-modal/app-order-share-modal").then(n.bind(null,"16ba3"))},c={name:"pay-result",components:{AppRelatedSuggestionProduct:u,appOrderShareModal:d},data:function(){return{payment_order_union_id:null,result:null,redirectUrl:null,recommendGoodsList:null,shareCheck:!1,orderPageUrl:!1,community:!1,titleType:"",invoice:"",name:""}},computed:i({},(0,r.mapState)({appImg:function(e){return e.mallConfig.__wxapp_img}}),{},(0,r.mapGetters)("mallConfig",{getTheme:"getTheme"}),{showGift:function(){if(!this.result||this.community)return!1;var e=this.result,t=e.send_data,n=e.user_coupon_list,r=e.card_list;return!!(t&&t.send_integral_num>0||t&&t.send_balance>0||n&&n.length||r&&r.length)}}),onLoad:function(e){this.$commonLoad.onload(e);var t=this;"{}"!=e.invoice&&(t.invoice=JSON.parse(e.invoice)),this.payment_order_union_id=e.payment_order_union_id,this.orderPageUrl=decodeURIComponent(e.order_page_url||"/pages/order/index/index?status=0"),"/plugins/community/order/order"===e.order_page_url&&(this.orderPageUrl=this.orderPageUrl+"?is_user=1",this.community=!0),this.loadData(),this.loadRecommendGoodsList()},methods:{loadData:function(){var t=this;this.$showLoading({type:"global"}),this.$request({url:this.$api.order.pay_result,data:{payment_order_union_id:this.payment_order_union_id}}).then(function(n){t.$hideLoading(),0===n.code&&(t.result=n.data,t.shareCheck=t.result.shareCheck,console.log(n.data.order_list[0].id),t.orderId=n.data.order_list[0].id,t.result.order_page_url&&(t.orderPageUrl=t.result.order_page_url),t.orderId&&(t.$showLoading(),t.$request({url:t.$api.order.detail,data:{id:t.orderId}}).then(function(n){t.$hideLoading(),0==n.code&&(t.name=n.data.detail.name,t.invoice.title&&t.name&&("1"==t.invoice.type&&(t.titleType="1"),"0"==t.invoice.type&&(t.titleType="2"),t.$request({url:t.$api.order.invoiciong,method:"POST",data:{order_id:t.orderId,title_type:t.titleType,buyer_title:t.invoice.title,buyer_taxpayer_num:t.invoice.taxNumber,buyer_address:t.invoice.companyAddress,buyer_phone:t.invoice.telephone,buyer_bank_name:t.invoice.bankName,buyer_bank_account:t.invoice.bankAccount,payee:t.invoice.name,buyer_email:t.invoice.email,invoice_type_code:"026",remarks:""}}).then(function(e){e.code}).catch(function(t){e.hideLoading()})))}).catch(function(){})))}).catch(function(){t.$hideLoading()})},redirectTo:function(t){e.redirectTo({url:t})},reLaunch:function(t){e.reLaunch({url:t})},loadRecommendGoodsList:function(){var e=this;if(this.community)return!1;this.$request({url:this.$api.goods.new_recommend,method:"get",data:{type:"order_pay"}}).then(function(t){0===t.code&&(e.recommendGoodsList=t.data.list)}).catch(function(){})}}};t.default=c}).call(this,n("543d")["default"])},"7aa3":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},"9e6a":function(e,t,n){"use strict";n.r(t);var r=n("72e3"),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);t["default"]=o.a}},[["1081","common/runtime","common/vendor"]]]);