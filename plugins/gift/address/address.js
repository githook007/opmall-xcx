(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/gift/address/address"],{"3e360":function(t,e,s){"use strict";s.r(e);var i=s("541c"),d=s.n(i);for(var a in i)"default"!==a&&function(t){s.d(e,t,function(){return i[t]})}(a);e["default"]=d.a},"541c":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s("2f62");function d(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,i)}return s}function a(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?d(s,!0).forEach(function(e){r(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):d(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}function r(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var o=function(){return s.e("plugins/gift/address/app-submit-address").then(s.bind(null,"1008"))},n=function(){return s.e("components/basic-component/app-empty-bottom/app-empty-bottom").then(s.bind(null,"0c06"))},l=function(){return s.e("components/page-component/app-diy-form/app-diy-form").then(s.bind(null,"7d93"))},u={name:"address",data:function(){return{previewData:{hasCity:!1},address_id:"",address:{},goods_id:-1,user_order_id:0,goods:[],store_list:[],store_index:0,send_type:[],remark:"",store:{},mch:{},send_data:null,deli:"",loading:!1,dis_send_type:"",diyForm:[],template_message_captain:[]}},onLoad:function(e){var s=this;this.$commonLoad.onload(e),this.goods_id=e.goods_id,this.user_order_id=e.id;var i="";2==e.status?i=this.$api.gift.join_detail:1==e.status&&(i=this.$api.gift.win_detail),this.$request({url:i,data:{user_order_id:e.id}}).then(function(i){for(var d in i.data.detail.detail)i.data.detail.detail[d].form_data=null;s.template_message_captain=i.data.template_message_captain,s.goods=i.data.detail.detail;for(var a={list:[{mch_id:0,goods_list:[],use_integral:0,user_coupon_id:0,distance:0,remark:"",order_form:[]}],address_id:0},r=0;r<s.goods.length;r++){for(var o={id:s.goods[r].goods_id,attr:[],num:s.goods[r].num,cat_id:0,goods_attr_id:s.goods[r].goods_attr_id,cart_id:0,user_order_id:e.id},n=[],l=s.goods[r].goods_info,u=0;u<l.length;u++)n.push({attr_id:l[u].attr_id,attr_group_id:l[u].attr_group_id});o.attr=n,a.list[0].goods_list.push(o)}s.send_data=a,s.$request({url:s.$api.gift.preview,method:"post",data:{form_data:JSON.stringify(a)}}).then(function(e){0===e.code?(s.send_type=e.data.mch_list[0].delivery.send_type_list,s.dis_send_type=e.data.mch_list[0].delivery.send_type,s.mch=e.data.mch_list[0],s.address=e.data.address,s.loading=!0,"offline"===s.send_type[0].value&&s.setMethod()):t.showModal({title:"提示",content:e.msg,success:function(){t.navigateBack()}})})})},onShow:function(){var e=this;if(this.$store.state.gift.address_id&&!this.$validation.isEmpty(this.send_data)){var s=this.send_data;s.list[0].send_type=this.deli,s.list[0].address_id=this.$store.state.gift.address_id,s.address_id=this.$store.state.gift.address_id,this.$request({url:this.$api.gift.preview,method:"post",data:{form_data:JSON.stringify(s)}}).then(function(s){0===s.code?(e.send_type=s.data.mch_list[0].delivery.send_type_list,e.mch=s.data.mch_list[0],e.address=s.data.address,"city"===e.deli&&(e.address=e.mch.address)):t.showModal({title:"提示",content:s.msg,success:function(){t.navigateBack()}})})}if(this.$store.state.gift.store_id)for(var i=0;i<this.store_list.length;i++)this.store_list[i].id===this.$store.state.gift.store_id&&(this.store=this.store_list[i])},methods:{delivery:function(t){this.deli=t},setMethod:function(){var e=this;t.getLocation({type:"wgs84",success:function(t){e.$request({url:e.$api.order.store_list,data:{latitude:t.latitude,longitude:t.longitude,goods_id:e.goods_id}}).then(function(t){e.store_list=t.data.list,e.store=t.data.list[0]})}})},city:function(){var t=this,e=this.send_data;e.list[0].send_type="city",this.address&&1!==this.address.type&&(e.list[0].address_id=this.address.id),this.$request({url:this.$api.gift.preview,method:"post",data:{form_data:JSON.stringify(e)}}).then(function(e){t.send_type=e.data.mch_list[0].delivery.send_type_list,t.mch=e.data.mch_list[0],t.address=e.data.mch_list[0].address,t.address&&1!==t.address.type&&(t.address=null)})},express:function(){var t=this,e=this.send_data;e.list[0].send_type="express",this.address&&(e.list[0].address_id=this.address.id),this.$request({url:this.$api.gift.preview,method:"post",data:{form_data:JSON.stringify(e)}}).then(function(e){t.send_type=e.data.mch_list[0].delivery.send_type_list,t.mch=e.data.mch_list[0],t.address=e.data.mch_list[0].address})},diyFormInput:function(t){var e=t.data;this.diyForm=e},handleGoodsFormInput:function(t,e){var s=e.split(","),i=parseInt(s[1]),d=[];for(var a in t)d[a]={key:t[a].key,label:t[a].name,value:t[a].value,required:t[a].is_required};this.goods[i].form_data=d},handleGoodsFormValidate:function(t,e){var s=e.split(","),i=parseInt(s[1]);this.goods[i].goods_form_validate_result=t}},computed:a({},(0,i.mapState)("gift",{theme:function(t){return t.theme}})),components:{"app-submit-address":o,"app-empty-bottom":n,"app-diy-form":l}};e.default=u}).call(this,s("543d")["default"])},"5f47":function(t,e,s){},ae58:function(t,e){t.exports=require("../siteinfo.js")},b29d:function(t,e,s){"use strict";s("5f47")},dcd9:function(t,e,s){"use strict";s.r(e);var i=s("ed41"),d=s("3e360");for(var a in d)"default"!==a&&function(t){s.d(e,t,function(){return d[t]})}(a);s("b29d");var r=s("2877"),o=Object(r["a"])(d["default"],i["a"],i["b"],!1,null,"29237df6",null);e["default"]=o.exports},ed41:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=(t._self._c,Number(110));t.$mp.data=Object.assign({},{$root:{m0:s}})},d=[];s.d(e,"a",function(){return i}),s.d(e,"b",function(){return d})}},[["1745","common/runtime","common/vendor"]]]);