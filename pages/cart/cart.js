(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cart/cart"],{"2c90":function(t,i,s){"use strict";s.r(i);var e=s("75b6"),r=s.n(e);for(var o in e)"default"!==o&&function(t){s.d(i,t,function(){return e[t]})}(o);i["default"]=r.a},"75b6":function(t,i,s){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=o(s("a34a")),r=s("2f62");function o(t){return t&&t.__esModule?t:{default:t}}function a(t,i,s,e,r,o,a){try{var n=t[o](a),l=n.value}catch(u){return void s(u)}n.done?i(l):Promise.resolve(l).then(e,r)}function n(t){return function(){var i=this,s=arguments;return new Promise(function(e,r){var o=t.apply(i,s);function n(t){a(o,e,r,n,l,"next",t)}function l(t){a(o,e,r,n,l,"throw",t)}n(void 0)})}}function l(t,i){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);i&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),s.push.apply(s,e)}return s}function u(t){for(var i=1;i<arguments.length;i++){var s=null!=arguments[i]?arguments[i]:{};i%2?l(s,!0).forEach(function(i){c(t,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(s).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(s,i))})}return t}function c(t,i,s){return i in t?Object.defineProperty(t,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[i]=s,t}var d=function(){return s.e("pages/cart/components/app-shop-product/app-shop-product").then(s.bind(null,"def4"))},h=function(){return s.e("components/basic-component/app-radio/app-radio").then(s.bind(null,"3ac8"))},_=function(){return s.e("components/basic-component/app-empty-bottom/app-empty-bottom").then(s.bind(null,"0c06"))},f={name:"cart",components:{"app-shop-product":d,"app-radio":h,"app-empty-bottom":_},data:function(){return{countList:{express:{name:"",number:0,list:[],price:0,is_miaosha:!1},city:{name:"",number:0,list:[],price:0,is_miaosha:!1},offline:{name:"",number:0,list:[],price:0,is_miaosha:!1}},sendDialog:!1,editStatus:!1,listObj:[],all:!1,editList:[],priceNum:0,edit:!1,botBool:!0,currentRoute:this.$platDiff.route(),tabbarbool:!1,spike:-1,submitDis:!0}},computed:u({},(0,r.mapState)({tabBarHeight:function(t){return t.gConfig.tabBarHeight},iphoneHeight:function(t){return t.gConfig.iphoneHeight},iphone:function(t){return t.gConfig.iphone}}),{},(0,r.mapGetters)("iPhoneX",{BotHeight:"getBotHeight",getEmpty:"getEmpty"}),{},(0,r.mapGetters)("mallConfig",{getTheme:"getTheme"}),{},(0,r.mapState)({tabBarNavs:function(t){return t.mallConfig.navbar.navs},is_edit:function(t){return t.cart.is_edit}})),methods:{around:function(){t.reLaunch({url:"/pages/index/index"})},update:function(t){for(var i in this.listObj)for(var s in this.listObj[i].goods_list)"wholesale"==this.listObj[i].goods_list[s].sign&&this.listObj[i].goods_list[s].goods_id==t.goods_id&&(this.listObj[i].goods_list[s]=t,this.$set(this.listObj[i].goods_list,s,t),this.$forceUpdate())},setALl:function(t){this.selectAll(t.active)},editSwitch:function(){this.all=!1;for(var t=0;t<this.listObj.length;t++){this.listObj[t].is_active=!1;for(var i=0;i<this.listObj[t].goods_list.length;i++)if(this.listObj[t].goods_list[i].is_active=!1,"wholesale"===this.listObj[t].goods_list[i].sign){var s=!0,e=!1,r=void 0;try{for(var o,a=this.listObj[t].goods_list[i].attr_arr[Symbol.iterator]();!(s=(o=a.next()).done);s=!0){var n=o.value;n.is_active=!1}}catch(l){e=!0,r=l}finally{try{s||null==a.return||a.return()}finally{if(e)throw r}}}}this.editStatus=!this.editStatus},getProductList:function(){var i=n(e.default.mark(function i(){var s;return e.default.wrap(function(i){while(1)switch(i.prev=i.next){case 0:return t.showLoading({title:"加载中"}),i.next=3,this.$request({url:this.$api.cart.list,method:"get"});case 3:s=i.sent,0===s.code&&(this.listObj=s.data.list,s.data.send_type_desc.express?this.countList.express.name=s.data.send_type_desc.express:this.countList.express.show=!1,s.data.send_type_desc.city?this.countList.city.name=s.data.send_type_desc.city:this.countList.city.show=!1,s.data.send_type_desc.offline?this.countList.offline.name=s.data.send_type_desc.offline:this.countList.offline.show=!1,this.spikeTime(s.data.list)),t.hideLoading();case 6:case"end":return i.stop()}},i,this)}));function s(){return i.apply(this,arguments)}return s}(),changeRadioAll:function(t){for(var i=0;i<this.listObj.length;i++){var s=this.listObj[i],e=s.mch_id,r=s.goods_list;if(t.mch_id===e){for(var o=0;o<r.length;o++)if(this.editStatus?r[o].is_active=!t.is_active:0===r[o].new_status&&r[o].buy_goods_auth&&(r[o].is_active=!t.is_active),"wholesale"===r[o].sign){r[o].choose_num=r[o].is_active?r[o].attrs.num:0,r[o].discount=r[o].is_active?r[o].attrs.discount:1==r[o].plugin_data.discount_type?0:10;var a=!0,n=!1,l=void 0;try{for(var u,c=r[o].attr_arr[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var d=u.value;d.is_active=r[o].is_active}}catch(h){n=!0,l=h}finally{try{a||null==c.return||c.return()}finally{if(n)throw l}}}this.listObj[i].is_active=!t.is_active}}},changeSingleRadio:function(t){for(var i=this,s=t.mch,e=t.item,r=0;r<this.listObj.length;r++)if(this.listObj[r].mch_id===s.mch_id){for(var o=s.goods_list.length,a=0,n=0;n<this.listObj[r].goods_list.length;n++){if("wholesale"===this.listObj[r].goods_list[n].sign)if(this.listObj[r].goods_list[n].discount=1==this.listObj[r].goods_list[n].plugin_data.discount_type?0:10,e.goods_id){if(e.id===this.listObj[r].goods_list[n].id){this.listObj[r].goods_list[n].is_active=!this.listObj[r].goods_list[n].is_active;var l=!0,u=!1,c=void 0;try{for(var d,h=this.listObj[r].goods_list[n].attr_arr[Symbol.iterator]();!(l=(d=h.next()).done);l=!0){var _=d.value;_.is_active=this.listObj[r].goods_list[n].is_active}}catch(k){u=!0,c=k}finally{try{l||null==h.return||h.return()}finally{if(u)throw c}}this.editStatus||(this.listObj[r].goods_list[n].choose_num=this.listObj[r].goods_list[n].is_active?this.listObj[r].goods_list[n].attrs.num:0,this.listObj[r].goods_list[n].discount=this.listObj[r].goods_list[n].is_active?this.listObj[r].goods_list[n].attrs.discount:1==this.listObj[r].goods_list[n].plugin_data.discount_type?0:10)}}else{var f=0;this.listObj[r].goods_list[n].choose_num=0;var g=!0,v=!1,p=void 0;try{for(var m,b=this.listObj[r].goods_list[n].attr_arr[Symbol.iterator]();!(g=(m=b.next()).done);g=!0){var y=m.value;if(e.id===y.id&&(y.is_active=!y.is_active),y.is_active){f++,this.listObj[r].goods_list[n].choose_num+=+y.num;var O=!0,j=!1,w=void 0;try{for(var x,L=this.listObj[r].goods_list[n].plugin_data.discount_rules[Symbol.iterator]();!(O=(x=L.next()).done);O=!0){var S=x.value;+this.listObj[r].goods_list[n].choose_num<+S.num||(this.listObj[r].goods_list[n].discount=S.discount)}}catch(k){j=!0,w=k}finally{try{O||null==L.return||L.return()}finally{if(j)throw w}}}}}catch(k){v=!0,p=k}finally{try{g||null==b.return||b.return()}finally{if(v)throw p}}f==this.listObj[r].goods_list[n].attr_arr.length?this.listObj[r].goods_list[n].is_active=!0:this.listObj[r].goods_list[n].is_active=!1}else e.id===this.listObj[r].goods_list[n].id&&(this.listObj[r].goods_list[n].is_active=!this.listObj[r].goods_list[n].is_active);this.listObj[r].goods_list[n].is_active&&a++,!1!==this.editStatus||0===this.listObj[r].goods_list[n].new_status&&this.listObj[r].goods_list[n].buy_goods_auth||o--}this.listObj[r].is_active=o===a}setTimeout(function(){i.count()})},selectAll:function(t){var i=this;this.listObj.map(function(s){s.is_active=t,s.goods_list.map(function(e){if(!1===i.editStatus){if(0===s.new_status&&0===e.new_status&&e.buy_goods_auth&&(e.is_active=t,"wholesale"===e.sign)){e.choose_num=t?e.attrs.num:0,e.discount=t?e.attrs.discount:1==e.plugin_data.discount_type?0:10;var r=!0,o=!1,a=void 0;try{for(var n,l=e.attr_arr[Symbol.iterator]();!(r=(n=l.next()).done);r=!0){var u=n.value;u.is_active=t}}catch(v){o=!0,a=v}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}}}else if(e.is_active=t,"wholesale"===e.sign){var c=!0,d=!1,h=void 0;try{for(var _,f=e.attr_arr[Symbol.iterator]();!(c=(_=f.next()).done);c=!0){var g=_.value;g.is_active=t}}catch(v){d=!0,h=v}finally{try{c||null==f.return||f.return()}finally{if(d)throw h}}}})})},settlement:function(){var t=this,i=[];this.countList.express.list=[],this.countList.city.list=[],this.countList.offline.list=[],this.countList.express.number=0,this.countList.city.number=0,this.countList.offline.number=0,this.countList.express.price=0,this.countList.city.price=0,this.countList.offline.price=0,this.countList.express.is_miaosha=!1,this.countList.city.is_miaosha=!1,this.countList.offline.is_miaosha=!1;for(var s=!1,e=0,r=0;r<this.listObj.length;r++){for(var o={mch_id:this.listObj[r].mch_id,goods_list:[]},a=0;a<this.listObj[r].goods_list.length;a++){var n=this.listObj[r].goods_list[a];if(0===n.new_status&&n.buy_goods_auth)if(n.is_active)if("miaosha"===n.sign&&(s=!0),"wholesale"===n.sign){var l=!0,u=!1,c=void 0;try{for(var d,h=n.attr_arr[Symbol.iterator]();!(l=(d=h.next()).done);l=!0){var _=d.value;if(_.num>0&&_.is_active){var f={id:_.attr_info.goods_id,attr:[],send_type:n.send_type,cover:n.attrs&&n.attrs.pic_url?n.attrs.pic_url:n.goods.cover_pic,price:_.price,sign:n.sign,num:_.num,cart_id:_.id,goods_attr_id:_.attr_id},g=!0,v=!1,p=void 0;try{for(var m,b=_.attrs.attr[Symbol.iterator]();!(g=(m=b.next()).done);g=!0){var y=m.value,O={attr_id:y.attr_id,attr_group_id:y.attr_group_id};f.attr.push(O)}}catch(yt){v=!0,p=yt}finally{try{g||null==b.return||b.return()}finally{if(v)throw p}}o.goods_list.push(f),e++}}}catch(yt){u=!0,c=yt}finally{try{l||null==h.return||h.return()}finally{if(u)throw c}}}else{var j={id:n.goods_id,attr:[],send_type:n.send_type,cover:n.attrs&&n.attrs.pic_url?n.attrs.pic_url:n.goods.cover_pic,price:n.attrs.price,num:n.num,sign:n.sign,cart_id:n.id,goods_attr_id:n.attr_id};for(var w in n.attrs.attr){var x={attr_id:n.attrs.attr[w].attr_id,attr_group_id:n.attrs.attr[w].attr_group_id};j.attr.push(x)}o.goods_list.push(j),e++}else if("wholesale"===n.sign){var L=!0,S=!1,k=void 0;try{for(var N,$=n.attr_arr[Symbol.iterator]();!(L=(N=$.next()).done);L=!0){var I=N.value;if(I.num>0&&I.is_active){var P={id:I.attr_info.goods_id,attr:[],send_type:n.send_type,cover:n.attrs&&n.attrs.pic_url?n.attrs.pic_url:n.goods.cover_pic,price:I.price,num:I.num,sign:n.sign,cart_id:I.id,goods_attr_id:I.attr_id},D=!0,T=!1,F=void 0;try{for(var B,C=I.attrs.attr[Symbol.iterator]();!(D=(B=C.next()).done);D=!0){var R=B.value,H={attr_id:R.attr_id,attr_group_id:R.attr_group_id};P.attr.push(H)}}catch(yt){T=!0,F=yt}finally{try{D||null==C.return||C.return()}finally{if(T)throw F}}o.goods_list.push(P),e++}}}catch(yt){S=!0,k=yt}finally{try{L||null==$.return||$.return()}finally{if(S)throw k}}}}o.goods_list.length>0&&i.push(o)}i[0].goods_list[0].send_type;for(var J=0,U=i;J<U.length;J++){var E=U[J];this.countList.express.list.push({mch_id:E.mch_id,goods_list:[]}),this.countList.city.list.push({mch_id:E.mch_id,goods_list:[]}),this.countList.offline.list.push({mch_id:E.mch_id,goods_list:[]});var A=!0,q=!1,M=void 0;try{for(var G,X=E.goods_list[Symbol.iterator]();!(A=(G=X.next()).done);A=!0){var z=G.value,K=!0,Q=!1,V=void 0;try{for(var W,Y=z.send_type[Symbol.iterator]();!(K=(W=Y.next()).done);K=!0){var Z=W.value;if("express"==Z){var tt=!0,it=!1,st=void 0;try{for(var et,rt=this.countList.express.list[Symbol.iterator]();!(tt=(et=rt.next()).done);tt=!0){var ot=et.value;ot.mch_id==E.mch_id&&(ot.goods_list.push(z),"miaosha"==z.sign&&(this.countList.express.is_miaosha=!0),this.countList.express.number++,this.countList.express.price=(+this.countList.express.price+ +z.num*+z.price).toFixed(2))}}catch(yt){it=!0,st=yt}finally{try{tt||null==rt.return||rt.return()}finally{if(it)throw st}}}if("city"==Z){var at=!0,nt=!1,lt=void 0;try{for(var ut,ct=this.countList.city.list[Symbol.iterator]();!(at=(ut=ct.next()).done);at=!0){var dt=ut.value;dt.mch_id==E.mch_id&&(dt.goods_list.push(z),"miaosha"==z.sign&&(this.countList.city.is_miaosha=!0),this.countList.city.number++,this.countList.city.price=(+this.countList.city.price+ +z.num*+z.price).toFixed(2))}}catch(yt){nt=!0,lt=yt}finally{try{at||null==ct.return||ct.return()}finally{if(nt)throw lt}}}if("offline"==Z){var ht=!0,_t=!1,ft=void 0;try{for(var gt,vt=this.countList.offline.list[Symbol.iterator]();!(ht=(gt=vt.next()).done);ht=!0){var pt=gt.value;pt.mch_id==E.mch_id&&(pt.goods_list.push(z),"miaosha"==z.sign&&(this.countList.offline.is_miaosha=!0),this.countList.offline.number++,this.countList.offline.price=(+this.countList.offline.price+ +z.num*+z.price).toFixed(2))}}catch(yt){_t=!0,ft=yt}finally{try{ht||null==vt.return||vt.return()}finally{if(_t)throw ft}}}}}catch(yt){Q=!0,V=yt}finally{try{K||null==Y.return||Y.return()}finally{if(Q)throw V}}}}catch(yt){q=!0,M=yt}finally{try{A||null==X.return||X.return()}finally{if(q)throw M}}}var mt=!1;if(console.log(e==this.countList.express.number),console.log(e==this.countList.city.number),console.log(e==this.countList.offline.number),e!=this.countList.express.number&&e!=this.countList.city.number&&e!=this.countList.offline.number||(mt=!0),mt){var bt="/pages/order-submit/order-submit?mch_list=".concat(JSON.stringify(i));s&&(bt+="&preview_url=".concat(encodeURIComponent(this.$api.miaosha.order_preview),"&submit_url=").concat(encodeURIComponent(this.$api.miaosha.order_submit))),this.$jump({open_type:"navigate",url:bt}),setTimeout(function(){t.listObj=[]},1e3)}else this.sendDialog=!0},sendTypeSubmit:function(t){var i=this;for(var s in this.countList[t].list)0==this.countList[t].list[s].goods_list.length&&this.countList[t].list.splice(s,1);var e="/pages/order-submit/order-submit?send_type=".concat(t,"&mch_list=").concat(JSON.stringify(this.countList[t].list));this.countList[t].is_miaosha&&(e+="&preview_url=".concat(encodeURIComponent(this.$api.miaosha.order_preview),"&submit_url=").concat(encodeURIComponent(this.$api.miaosha.order_submit))),this.$jump({open_type:"navigate",url:e}),setTimeout(function(){i.sendDialog=!1,i.listObj=[]},1e3)},editNum:function(){for(var t=this,i=[],s=0;s<this.listObj.length;s++)for(var e=this.listObj[s].goods_list,r=0;r<e.length;r++)if(0===e[r].new_status)if("wholesale"===e[r].sign){var o=!0,a=!1,n=void 0;try{for(var l,u=e[r].attr_arr[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){var c=l.value;i.push({goods_id:c.attr_info.goods_id,num:c.num,attr:c.attr_id})}}catch(d){a=!0,n=d}finally{try{o||null==u.return||u.return()}finally{if(a)throw n}}}else i.push({goods_id:e[r].goods_id,num:e[r].num,attr:e[r].attr_id});this.$request({method:"post",url:this.$api.cart.edit,data:{list:JSON.stringify(i)}}).then(function(){t.$store.dispatch("cart/is_edit",!1)})},deleteProduct:function(){var t=n(e.default.mark(function t(){var i,s,r,o,a,n,l,u,c,d,h,_,f,g,v,p,m,b,y,O,j;return e.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:i=[],s=0;case 2:if(!(s<this.listObj.length)){t.next=58;break}r=this.listObj[s].goods_list,o=0;case 5:if(!(o<r.length)){t.next=55;break}if(!r[o].is_active){t.next=32;break}if("wholesale"!=r[o].sign){t.next=29;break}for(a=!0,n=!1,l=void 0,t.prev=11,u=r[o].attr_arr[Symbol.iterator]();!(a=(c=u.next()).done);a=!0)d=c.value,i.push({mch_id:r[o].mch_id,id:d.id});t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](11),n=!0,l=t.t0;case 19:t.prev=19,t.prev=20,a||null==u.return||u.return();case 22:if(t.prev=22,!n){t.next=25;break}throw l;case 25:return t.finish(22);case 26:return t.finish(19);case 27:t.next=30;break;case 29:i.push({mch_id:r[o].mch_id,id:r[o].id});case 30:t.next=52;break;case 32:if("wholesale"!=r[o].sign){t.next=52;break}for(h=!0,_=!1,f=void 0,t.prev=36,g=r[o].attr_arr[Symbol.iterator]();!(h=(v=g.next()).done);h=!0)p=v.value,p.is_active&&i.push({mch_id:r[o].mch_id,id:p.id});t.next=44;break;case 40:t.prev=40,t.t1=t["catch"](36),_=!0,f=t.t1;case 44:t.prev=44,t.prev=45,h||null==g.return||g.return();case 47:if(t.prev=47,!_){t.next=50;break}throw f;case 50:return t.finish(47);case 51:return t.finish(44);case 52:o++,t.next=5;break;case 55:s++,t.next=2;break;case 58:if(i.length){t.next=60;break}return t.abrupt("return");case 60:return t.next=62,this.$request({method:"post",url:this.$api.cart.delete,data:{cart_id_list:JSON.stringify(i)}});case 62:if(m=t.sent,0===m.code)for(this.editStatus=!1,b=0;b<this.listObj.length;b++)for(y=0;y<i.length;y++)if(this.listObj[b].mch_id==i[y].mch_id){for(O=0;O<this.listObj[b].goods_list.length;O++)if("wholesale"===this.listObj[b].goods_list[O].sign){for(j in this.listObj[b].goods_list[O].attr_arr)this.listObj[b].goods_list[O].attr_arr[j].id==i[y].id&&(this.$delete(this.listObj[b].goods_list[O].attr_arr,j),0==this.listObj[b].goods_list[O].attr_arr.length&&this.$delete(this.listObj[b].goods_list,O));this.count()}else this.listObj[b].goods_list[O].id==i[y].id&&this.$delete(this.listObj[b].goods_list,O);0===this.listObj[b].goods_list.length&&this.$delete(this.listObj,b)}case 64:case"end":return t.stop()}},t,this,[[11,15,19,27],[20,,22,26],[36,40,44,52],[45,,47,51]])}));function i(){return t.apply(this,arguments)}return i}(),b:function(){var t=void 0;t=this.currentRoute;for(var i=0;i<this.tabBarNavs.length;i++)if(t.includes(this.tabBarNavs[i].url.split("?")[0]))return this.tabbarbool=!0;return this.tabbarbool=!1},change:function(t){for(var i=t.number,s=t.id,e=t.mch_id,r=0;r<this.listObj.length;r++)if(this.listObj[r].mch_id===e)for(var o=0;o<this.listObj[r].goods_list.length;o++)if("wholesale"===this.listObj[r].goods_list[o].sign&&3!=this.listObj[r].goods_list[o].new_status){for(var a=0;a<this.listObj[r].goods_list[o].attr_arr.length;a++)if(this.listObj[r].goods_list[o].attr_arr[a].id==s)return this.listObj[r].goods_list[o].attr_arr[a].num=Number(i),void this.count()}else if(this.listObj[r].goods_list[o].id===s)return void(this.listObj[r].goods_list[o].num=Number(i))},count:function(){var t=this,i=!0,s=!1,e=void 0;try{for(var r,o=t.listObj[Symbol.iterator]();!(i=(r=o.next()).done);i=!0){var a=r.value,n=!0,l=!1,u=void 0;try{for(var c,d=a.goods_list[Symbol.iterator]();!(n=(c=d.next()).done);n=!0){var h=c.value;if(h.price=0,"wholesale"===h.sign&&(0==h.new_status||6==h.new_status&&0==h.sell_time)){0==h.plugin_data.discount_type?h.attrs.discount=10:h.attrs.discount=0,h.attrs.num=0;var _=0;h.choose_num=0;var f=!0,g=!1,v=void 0;try{for(var p,m=h.attr_arr[Symbol.iterator]();!(f=(p=m.next()).done);f=!0){var b=p.value;_+=+b.num*+b.attrs.price,h.attrs.num+=+b.num,b.is_active&&(h.choose_num+=+b.num)}}catch(T){g=!0,v=T}finally{try{f||null==m.return||m.return()}finally{if(g)throw v}}var y=0,O=!0,j=!1,w=void 0;try{for(var x,L=h.attr_arr[Symbol.iterator]();!(O=(x=L.next()).done);O=!0){var S=x.value;S.is_active&&(y+=+S.num)}}catch(T){j=!0,w=T}finally{try{O||null==L.return||L.return()}finally{if(j)throw w}}var k=!0,N=!1,$=void 0;try{for(var I,P=h.plugin_data.discount_rules[Symbol.iterator]();!(k=(I=P.next()).done);k=!0){var D=I.value;+h.attrs.num<+D.num||(h.attrs.discount=D.discount),+y<+D.num||(h.discount=D.discount)}}catch(T){N=!0,$=T}finally{try{k||null==P.return||P.return()}finally{if(N)throw $}}0==h.plugin_data.discount_type?h.price=(_*(h.attrs.discount/10)).toFixed(2):h.price=(_-h.attrs.discount*h.attrs.num).toFixed(2),h.attrs.num<h.plugin_data.up_num?h.new_status=6:h.new_status=0}}}catch(T){l=!0,u=T}finally{try{n||null==d.return||d.return()}finally{if(l)throw u}}}}catch(T){s=!0,e=T}finally{try{i||null==o.return||o.return()}finally{if(s)throw e}}},setTime:function(t){for(var i=!1,s=0;s<t.length;s++)for(var e=0;e<t[s].goods_list.length;e++){if(t[s].goods_list[e].sell_time>0){i=!0,t[s].goods_list[e].sell_time--;var r=parseInt(t[s].goods_list[e].sell_time),o=0,a=0;r>60&&(o=parseInt(r/60),r=parseInt(r%60),o>60&&(a=parseInt(o/60),o=parseInt(o%60)));var n={h:a<10?"0"+a:a,m:o<10?"0"+o:o,s:r<10?"0"+r:r};this.$set(this.listObj[s].goods_list[e],"sell_string","".concat(n.h+":"+n.m+":"+n.s)),0==t[s].goods_list[e].sell_time&&this.count()}if("miaosha"===t[s].goods_list[e].sign&&1===t[s].goods_list[e].miaosha_status){i=!0,t[s].goods_list[e].miaosha_time--;var l=parseInt(t[s].goods_list[e].miaosha_time),u=0,c=0;l>60&&(u=parseInt(l/60),l=parseInt(l%60),u>60&&(c=parseInt(u/60),u=parseInt(u%60)));var d={h:c<10?"0"+c:c,m:u<10?"0"+u:u,s:l<10?"0"+l:l};this.$set(this.listObj[s].goods_list[e],"miaosha_string","".concat(d.h+":"+d.m+":"+d.s))}if("flash_sale"===t[s].goods_list[e].sign&&(1===t[s].goods_list[e].flash_sale_status||2===t[s].goods_list[e].flash_sale_status)){i=!0,t[s].goods_list[e].flash_sale_time--;var h=parseInt(t[s].goods_list[e].flash_sale_time),_=0,f=0;h>60&&(_=parseInt(h/60),h=parseInt(h%60),_>60&&(f=parseInt(_/60),_=parseInt(_%60)));var g={h:f<10?"0"+f:f,m:_<10?"0"+_:_,s:h<10?"0"+h:h};this.$set(this.listObj[s].goods_list[e],"flash_sale_string","".concat(g.h+":"+g.m+":"+g.s))}}return i},spikeTime:function(t){var i=this;clearInterval(this.spike);var s=this.setTime(t);s&&(this.spike=setInterval(function(){var s=i.setTime(t);s||clearInterval(i.spike)},1e3))}},onShow:function(){var t=this;this.submitDis=!0,this.listObj=[],setTimeout(function(){t.getProductList()},1e3),this.all=!1},onHide:function(){this.editNum(),clearInterval(this.spike)},onUnload:function(){this.editNum(),clearInterval(this.spike)},watch:{listObj:{handler:function(t){this.priceNum=0;for(var i=0,s=0,e=!0,r=0;r<t.length;r++){(0==t[r].new_status||this.editStatus)&&(i+=t[r].goods_list.length);for(var o=t[r].goods_list.length,a=0,n=0;n<t[r].goods_list.length;n++)if(0===t[r].goods_list[n].new_status||t[r].goods_list[n].buy_goods_auth||a++,!1!==this.editStatus||0===t[r].goods_list[n].new_status&&t[r].goods_list[n].buy_goods_auth||i--,t[r].goods_list[n].is_active)if("wholesale"===t[r].goods_list[n].sign){i+=t[r].goods_list[n].attr_arr.length-1;var l=!0,u=!1,c=void 0;try{for(var d,h=t[r].goods_list[n].attr_arr[Symbol.iterator]();!(l=(d=h.next()).done);l=!0){var _=d.value;if(!this.editStatus)if(0==t[r].goods_list[n].plugin_data.discount_type){var f=t[r].goods_list[n].discount?t[r].goods_list[n].discount:10;_.price=(+_.attrs.price*(+f/10)).toFixed(2)}else{var g=t[r].goods_list[n].discount?t[r].goods_list[n].discount:0;_.price=(+_.attrs.price-+g).toFixed(2)}if(_.is_active)if(this.editStatus)s++;else{var v=Number(_.price)*Number(_.num);this.priceNum+=v,t[r].goods_list[n].choose_num<t[r].goods_list[n].plugin_data.up_num||s++}}}catch(k){u=!0,c=k}finally{try{l||null==h.return||h.return()}finally{if(u)throw c}}}else{if(!this.editStatus){var p=Number(t[r].goods_list[n].attrs.price)*Number(t[r].goods_list[n].num);this.priceNum+=p}s++}else if("wholesale"===t[r].goods_list[n].sign&&3!==t[r].goods_list[n].new_status){i+=t[r].goods_list[n].attr_arr.length-1;var m=!0,b=!1,y=void 0;try{for(var O,j=t[r].goods_list[n].attr_arr[Symbol.iterator]();!(m=(O=j.next()).done);m=!0){var w=O.value;if(0==t[r].goods_list[n].plugin_data.discount_type){var x=t[r].goods_list[n].discount?t[r].goods_list[n].discount:10;w.price=(+w.attrs.price*(+x/10)).toFixed(2)}else{var L=t[r].goods_list[n].discount?t[r].goods_list[n].discount:0;w.price=(+w.attrs.price-+L).toFixed(2)}if(w.is_active)if(this.editStatus)s++;else{var S=Number(w.price)*Number(w.num);this.priceNum+=S,t[r].goods_list[n].choose_num<t[r].goods_list[n].plugin_data.up_num?e=!1:s++}}}catch(k){b=!0,y=k}finally{try{m||null==j.return||j.return()}finally{if(b)throw y}}}o===a&&(this.listObj[r].new_status=0==this.listObj[r].new_status?1:this.listObj[r].new_status)}this.all=s===i&&(0!==i||0!==s),this.submitDis=!(s>0&&e),this.priceNum=this.priceNum.toFixed(2)},deep:!0},tabBarNavs:{handler:function(){this.b()},immediate:!0}}};i.default=f}).call(this,s("543d")["default"])},8557:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=(t._self._c,Number(100));t._isMounted||(t.e0=function(i){t.sendDialog=!1},t.e1=function(i){t.sendDialog=!1}),t.$mp.data=Object.assign({},{$root:{m0:s}})},r=[];s.d(i,"a",function(){return e}),s.d(i,"b",function(){return r})},a366:function(t,i,s){"use strict";s("b2ea")},b2ea:function(t,i,s){},bf12:function(t,i,s){"use strict";s.r(i);var e=s("8557"),r=s("2c90");for(var o in r)"default"!==o&&function(t){s.d(i,t,function(){return r[t]})}(o);s("a366");var a=s("2877"),n=Object(a["a"])(r["default"],e["a"],e["b"],!1,null,"547e4c0c",null);i["default"]=n.exports}},[["587c","common/runtime","common/vendor"]]]);