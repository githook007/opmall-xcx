(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/invoice/invoice-info/invoice-info"],{"1cdd":function(e,i,t){"use strict";t("335b")},"335b":function(e,i,t){},"6dca":function(e,i,t){"use strict";t.r(i);var n=t("cb4c"),o=t.n(n);for(var a in n)"default"!==a&&function(e){t.d(i,e,function(){return n[e]})}(a);i["default"]=o.a},"935d":function(e,i,t){"use strict";t.r(i);var n=t("d8ea"),o=t("6dca");for(var a in o)"default"!==a&&function(e){t.d(i,e,function(){return o[e]})}(a);t("1cdd");var c=t("2877"),r=Object(c["a"])(o["default"],n["a"],n["b"],!1,null,"de6c57cc",null);i["default"]=r.exports},cb4c:function(e,i,t){"use strict";(function(e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=t("2f62");function o(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function a(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?o(t,!0).forEach(function(i){c(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(t).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}function c(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}var r=function(){return t.e("components/page-component/app-area-picker/app-area-picker").then(t.bind(null,"8e44"))},s={data:function(){return{ids:[0],list:[],name:"",mobile:"",detail:"",order_no:"",province:"",city:"",district:"",order:{},changeAddress:!1,invoiceType:"026",invoice:{},invoices:{},type:"1",email:"",emails:"",orderId:"",titleType:"",invoiceId:""}},components:{"app-area-picker":r},computed:a({},(0,n.mapState)({userInfo:function(e){return e.user.info},adminImg:function(e){return e.mallConfig.__wxapp_img.app_admin}})),methods:{toSelectInvoiceHeader:function(){var e=this;wx.chooseInvoiceTitle({success:function(i){console.log(i),e.invoice=i,e.invoices=i,console.log(e.invoice,"开票信息"),"1"==e.invoice.type&&(e.titleType="1"),"0"==e.invoice.type&&(e.titleType="2")}})},toOrder:function(){if(!this.invoices.name)return e.showToast({icon:"none",mask:!0,title:"请输入收票人"}),setTimeout(function(){e.hideToast()},500),!0;if(this.invoices.email){var i=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!i.test(this.invoices.email))return e.showToast({icon:"none",mask:!0,title:"请输入正确的邮箱"}),setTimeout(function(){e.hideToast()},500),!0;var t=this;e.$emit("invoices",{invoices:JSON.stringify(t.invoices)}),e.navigateBack({})}else e.showToast({icon:"none",mask:!0,title:"请输入邮箱"})},back:function(){e.navigateBack()},emailSend:function(){if(this.emails){var i=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!i.test(this.emails))return e.showToast({icon:"none",mask:!0,title:"请输入正确的邮箱"}),setTimeout(function(){e.hideToast()},500),!0;var t=this;e.showLoading({mask:!0,title:"提交中..."}),t.$request({url:this.$api.order.send_email,method:"GET",data:{id:t.invoiceId,email:t.emails}}).then(function(i){e.hideLoading(),0==i.code?(e.showToast({title:i.msg,duration:1e3,icon:"success",mask:!1}),setTimeout(function(){e.navigateBack()},500)):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(i){e.hideLoading(),e.showToast({title:i,icon:"none",duration:1e3})})}else e.showToast({icon:"none",mask:!0,title:"请输入邮箱"})},setInvoice:function(i){if(!this.name)return e.showToast({icon:"none",mask:!0,title:"请输入收票人"}),setTimeout(function(){e.hideToast()},500),!0;if(this.email){var t=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!t.test(this.email))return e.showToast({icon:"none",mask:!0,title:"请输入正确的邮箱"}),setTimeout(function(){e.hideToast()},500),!0;var n=this;e.showLoading({mask:!0,title:"提交中..."}),n.$request({url:this.$api.order.invoiciong,method:"POST",data:{id:n.invoiceId,order_id:n.orderId,title_type:n.titleType,buyer_title:n.invoice.title,buyer_taxpayer_num:n.invoice.taxNumber,buyer_address:n.invoice.companyAddress,buyer_phone:n.invoice.telephone,buyer_bank_name:n.invoice.bankName,buyer_bank_account:n.invoice.bankAccount,payee:n.name,buyer_email:n.email,invoice_type_code:"026",remarks:""}}).then(function(i){e.hideLoading(),0==i.code?(e.showToast({title:i.msg,duration:1e3,icon:"success",mask:!1}),setTimeout(function(){e.navigateBack()},500)):e.showToast({title:i.msg,icon:"none",duration:1e3})}).catch(function(i){e.hideLoading(),e.showToast({title:i,icon:"none",duration:1e3})})}else e.showToast({icon:"none",mask:!0,title:"请输入邮箱"})}},onLoad:function(e){this.$commonLoad.onload(e);var i=this;console.log(e,"---options"),e.type&&(i.type=e.type),e.orderId&&(i.orderId=e.orderId),e.invoiceId&&(i.invoiceId=e.invoiceId,i.$request({url:i.$api.order.detail,data:{id:i.orderId}}).then(function(e){i.$hideLoading(),0==e.code&&(i.titleType=e.data.detail.invoice.title_type,i.invoice.title=e.data.detail.invoice.buyer_title,i.invoice.taxNumber=e.data.detail.invoice.buyer_taxpayer_num,i.invoice.companyAddress=e.data.detail.invoice.buyer_address,i.invoice.telephone=e.data.detail.invoice.buyer_phone,i.invoice.bankName=e.data.detail.invoice.buyer_bank_name,i.invoice.bankAccount=e.data.detail.invoice.buyer_bank_account,i.name=e.data.detail.invoice.payee,i.email=e.data.detail.invoice.buyer_email,1==e.data.detail.invoice.title_type&&(i.invoice.type="1"),2==e.data.detail.invoice.title_type&&(i.invoice.type="0"))}).catch(function(){i.$hideLoading()}))}};i.default=s}).call(this,t("543d")["default"])},d8ea:function(e,i,t){"use strict";var n=function(){var e=this,i=e.$createElement;e._self._c},o=[];t.d(i,"a",function(){return n}),t.d(i,"b",function(){return o})}},[["fb0d","common/runtime","common/vendor"]]]);