(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/refund-detail/refund-detail"],{"255e":function(e,t,n){"use strict";n.r(t);var r=n("9d7a"),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=i.a},"26b3":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i})},"2f6d":function(e,t,n){"use strict";n("fb47")},"73d2":function(e,t,n){"use strict";n.r(t);var r=n("26b3"),i=n("255e");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("2f6d");var s=n("2877"),a=Object(s["a"])(i["default"],r["a"],r["b"],!1,null,"b6c75d78",null);t["default"]=a.exports},"9d7a":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("a34a")),i=o(n("ee50f"));function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,r,i,o,s){try{var a=e[o](s),u=a.value}catch(d){return void n(d)}a.done?t(u):Promise.resolve(u).then(r,i)}function a(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var o=e.apply(t,n);function a(e){s(o,r,i,a,u,"next",e)}function u(e){s(o,r,i,a,u,"throw",e)}a(void 0)})}}var u=function(){return n.e("components/page-component/app-order-banner/app-order-banner").then(n.bind(null,"ccb8"))},d=function(){return n.e("components/page-component/app-order-goods-info/app-order-goods-info").then(n.bind(null,"1602"))},c=function(){return n.e("components/page-component/app-order-express/app-order-express").then(n.bind(null,"2338"))},f={components:{"app-order-banner":u,"app-order-goods-info":d,"app-order-express":c},data:function(){return{id:null,refundDetail:{},expressList:[],expressIndex:0,express:"",express_no:"",customer_name:"",index:0,is_show:!1,value:[0]}},methods:{getRefundDetail:function(){var e=this;e.$showLoading(),e.$request({url:e.$api.order.refund_detail,data:{id:e.id}}).then(function(t){e.$hideLoading(),e.is_show=!0,0===t.code&&(e.refundDetail=t.data.detail,e.expressList=t.data.express_list)}).catch(function(){e.$hideLoading()})},formSubmit:function(){var t=a(r.default.mark(function t(){var n;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=this,this.express){t.next=4;break}return e.showToast({title:"请选择快递公司",icon:"none"}),t.abrupt("return");case 4:if(this.express_no){t.next=7;break}return e.showToast({title:"请填写快递单号",icon:"none"}),t.abrupt("return");case 7:this.$subscribe(this.refundDetail.template_message_list).then(function(e){n.submitAction()}).catch(function(e){n.submitAction()});case 8:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),submitAction:function(){var t=this;try{this.$showLoading({title:"提交中"}),this.$request({url:this.$api.order.refund_send,method:"post",data:{id:this.id,express:this.express,customer_name:this.customer_name,express_no:this.express_no}}).then(function(n){t.$hideLoading(),0===n.code?t.getRefundDetail():e.showModal({title:"",content:n.msg,showCancel:!1})})}catch(n){this.$hideLoading()}},copyText:function(){var e=this.refundDetail,t=e.refund_name,n=e.refund_mobile,r=e.refund_address;i.default.copyText("".concat(t," ").concat(n," ").concat(r))},cancel:function(){var t=this;e.showModal({title:"提示",content:"是否撤销申请？",success:function(n){n.confirm&&(e.showLoading({title:"撤销中"}),t.$request({url:t.$api.order.cancel_refund,data:{refund_id:t.refundDetail.id},method:"post"}).then(function(t){e.hideLoading();t.code,t.data;var n=t.msg;e.showModal({title:"",content:n,showCancel:!1,success:function(){var t=getCurrentPages();e.navigateBack({delta:t.length>3?3:1})}})}))}})},expressListChange:function(e){this.expressIndex=e.target.value,this.express=this.expressList[this.expressIndex].name},previewImage:function(t){var n=this.refundDetail.pic_list;e.previewImage({current:n[t],urls:n})}},onLoad:function(e){this.$commonLoad.onload(e),this.id=e.id,this.getRefundDetail()}};t.default=f}).call(this,n("543d")["default"])},fb47:function(e,t,n){}},[["8f6d","common/runtime","common/vendor"]]]);