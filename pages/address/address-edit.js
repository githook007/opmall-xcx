(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/address-edit"],{"0fa7":function(t,e,i){"use strict";i.r(e);var n=i("b11b"),r=i("67cd");for(var o in r)"default"!==o&&function(t){i.d(e,t,function(){return r[t]})}(o);i("3802");var a=i("2877"),s=Object(a["a"])(r["default"],n["a"],n["b"],!1,null,"1ccd9426",null);e["default"]=s.exports},3802:function(t,e,i){"use strict";i("ff0c")},6744:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("a34a")),r=i("2f62"),o=a(i("a95b"));function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e){return d(t)||u(t,e)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var i=[],n=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done);n=!0)if(i.push(a.value),e&&i.length===e)break}catch(c){r=!0,o=c}finally{try{n||null==s["return"]||s["return"]()}finally{if(r)throw o}}return i}}function d(t){if(Array.isArray(t))return t}function f(t,e){if(null==t)return{};var i,n,r=l(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}function l(t,e){if(null==t)return{};var i,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||(r[i]=t[i]);return r}function h(t,e,i,n,r,o,a){try{var s=t[o](a),c=s.value}catch(u){return void i(u)}s.done?e(c):Promise.resolve(c).then(n,r)}function m(t){return function(){var e=this,i=arguments;return new Promise(function(n,r){var o=t.apply(e,i);function a(t){h(o,n,r,a,s,"next",t)}function s(t){h(o,n,r,a,s,"throw",t)}a(void 0)})}}function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(i,!0).forEach(function(e){v(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var _=function(){return i.e("components/page-component/app-area-picker/app-area-picker").then(i.bind(null,"8e44"))},b=function(){return i.e("components/basic-component/app-textarea/app-textarea").then(i.bind(null,"47cb"))},y={name:"address-edit",data:function(){return{form:{location:"",latitude:"",longitude:"",id:"",name:"",mobile:"",address:"",province_id:0,city_id:0,district_id:0,detail:"",type:"",is_default:!1,sign:""},is_refund_address:0,detail_url:"",list:[],submit_status:!1,tt_area_show:!1,automatic:"",provinceString:"",cityString:"",areaString:"",focus:!1,signList:["家","公司","学校"]}},computed:g({},(0,r.mapGetters)("mallConfig",{getTheme:"getTheme"})),components:{appAreaPicker:_,appTextArea:b},onLoad:function(e){var i=this;if(this.$commonLoad.onload(e),this.form.type=1==e.type?1:0,this.getAutoInfo(),this.getLoca(),e.is_refund_address>0?(this.is_refund_address=e.is_refund_address,this.detail_url=this.$api.app_admin.refund_address_edit,t.setNavigationBarTitle({title:"编辑退货地址"})):(this.is_refund_address=0,this.detail_url=this.$api.user.address_detail),e.form){var n=JSON.parse(e.form);"undefined"===typeof n.type&&(n.type=this.form.type),this.form=n,this.form.is_default=1==n.is_default}e.id>0?(this.$showLoading({title:"加载中"}),this.$request({url:this.detail_url,data:e}).then(function(n){if(i.$hideLoading(),0===n.code)if(e.is_refund_address>0){var r=n.data.detail;i.getInfo(Object.assign({detail:r.address_detail},r))}else i.form=n.data.list,i.form.is_default=1==n.data.list.is_default;else t.showToast({title:n.msg,icon:"none"});i.tt_area_show=!0}).catch(function(){i.$hideLoading(),i.tt_area_show=!0})):this.tt_area_show=!0},methods:{getLoca:function(){var e=this;t.getLocation({type:"wgs84",success:function(t){console.log("当前位置的经度："+t.longitude),console.log("当前位置的纬度："+t.latitude),e.form.latitude=t.latitude,e.form.longitude=t.longitude}})},getAutoInfo:function(){var t=m(n.default.mark(function t(){var e,i,r,o,a;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request({url:this.$api.user.auto_address_info,method:"get"});case 2:e=t.sent,0===e.code&&(i=JSON.parse(e.data),r=i.reduce(function(t,e){e.children;var i=f(e,["children"]);return t.concat(i)},[]),o=i.reduce(function(t,e){return t.concat(e.children.map(function(t){t.children;var i=f(t,["children"]);return g({},i,{provinceCode:e.code})}))},[]),a=i.reduce(function(t,e){var i=e.code;return t.concat(e.children.reduce(function(t,e){var n=e.code;return t.concat(e.children.map(function(t){t.children;var e=f(t,["children"]);return g({},e,{cityCode:n,provinceCode:i})}))},[]))},[]),this.provinceString=JSON.stringify(r),this.cityString=JSON.stringify(o),this.areaString=JSON.stringify(a));case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getChooseLocation:function(){var e=m(n.default.mark(function e(){var i,r,o,a,c,u;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return i=this,e.next=3,t.chooseLocation();case 3:r=e.sent,o=s(r,2),a=o[0],c=o[1],c&&(i.form.location=c.address+c.name,i.form.latitude=c.latitude,i.form.longitude=c.longitude),a&&(u=function(){t.showModal({title:"授权权限",content:"请先授权地理位置权限",success:function(e){e.confirm&&t.openSetting({success:function(e){e.authSetting["scope.userLocation"]?t.chooseLocation({success:function(t){i.form.location=t.address+t.name,i.form.latitude=t.latitude,i.form.longitude=t.longitude}}):t.showToast({title:"授权失败",icon:"none"})}})}})},"chooseLocation:fail auth deny"===a.errMsg&&u());case 9:case"end":return e.stop()}},e,this)}));function i(){return e.apply(this,arguments)}return i}(),getInfo:function(e){var i=this;this.$request({url:this.$api.user.wechat_district,data:{province_name:e.address[0],city_name:e.address[1],county_name:e.address[2]}}).then(function(t){if(0===t.code){var n=t.data.district,r=n.province,o=n.city,a=n.district;e.province_id=r.id,e.city_id=o.id,e.district_id=a.id,i.form=e}}).catch(function(){t.showToast({title:"网络异常",icon:"none"})})},areaEvent:function(t){t&&(this.form.province_id=t.province.id,this.form.city_id=t.city.id,this.form.district_id=t.district.id,this.list=[t.province.name,t.city.name,t.district.name])},submit:function(){var e=m(n.default.mark(function e(){var i,r,o,a,s,c,u,d,f,l;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!this.submit_status){e.next=3;break}return e.abrupt("return");case 3:if(this.form.detail||(i=1==this.form.type?"门牌号不能为空":"详细地址不能为空"),this.form.province_id||0!=this.form.type||(i="地区不能为空"),this.form.mobile||(i="联系方式不能为空"),this.$validation.umobile(this.form.mobile)||(i="联系方式格式错误"),this.form.name||(i="姓名不能为空"),!i){e.next=11;break}return t.showToast({title:i,icon:"none"}),e.abrupt("return");case 11:return this.submit_status=!0,this.is_refund_address>0?(a=this.form,s=a.id,c=a.name,u=a.mobile,d=a.detail,f=a.is_default,o=this.$api.app_admin.refund_address_edit,r={form:JSON.stringify({id:s,name:c,mobile:u,address_detail:d,address:this.list,is_default:f,remark:"",latitude:this.form.latitude,longitude:this.form.longitude,type:this.form.type})}):(o=this.$api.user.address_save,r=Object.assign({},this.form)),r.is_default=r.is_default?1:0,e.next=16,this.$request({url:o,data:r,method:"POST"});case 16:l=e.sent,this.submit_status=!1,0===l.code?(t.showToast({title:l.msg,icon:"none"}),t.navigateBack({delta:1})):t.showToast({title:l.msg,icon:"none"}),e.next=25;break;case 21:throw e.prev=21,e.t0=e["catch"](0),this.submit_status=!1,new Error(e.t0);case 25:case"end":return e.stop()}},e,this,[[0,21]])}));function i(){return e.apply(this,arguments)}return i}(),getAddress:function(){var t=(0,o.default)(this.automatic,{},this.provinceString,this.cityString,this.areaString);if(!this.$validation.empty(t)){for(var e=this.$storage.getStorageSync("_DISTRICT"),i=t.name,n=t.province,r=t.city,a=t.area,s=t.phone,c=t.detail,u=0;u<e.length;u++)if(e[u].name===n){for(var d=0;d<e[u].list.length;d++){if(e[u].list[d].name===r){for(var f=0;f<e[u].list[d].list.length;f++)if(e[u].list[d].list[f].name===a){this.form.province_id=e[u].id,this.form.city_id=e[u].list[d].id,this.form.district_id=e[u].list[d].list[f].id;break}break}if("市辖区"===r){for(var l=0;l<e[u].list[d].list.length;l++)if(e[u].list[d].list[l].name===a){this.form.province_id=e[u].id,this.form.city_id=e[u].list[d].id,this.form.district_id=e[u].list[d].list[l].id;break}break}}break}this.form.name=i,this.form.detail="".concat(c),this.form.mobile=s}},detailFocus:function(){this.focus=!0},bindIsDefaultChange:function(t){this.form.is_default=t.detail.value},bindSignClick:function(t){this.form.sign=t}}};e.default=y}).call(this,i("543d")["default"])},"67cd":function(t,e,i){"use strict";i.r(e);var n=i("6744"),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=r.a},b11b:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.focus=!1},t.e1=function(e){t.focus=!1})},r=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r})},ff0c:function(t,e,i){}},[["617f","common/runtime","common/vendor"]]]);