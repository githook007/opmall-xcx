(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cats/cats"],{"506c":function(t,e,i){"use strict";i("d502")},"6ca4":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return a})},ab0c:function(t,e,i){"use strict";i.r(e);var s=i("6ca4"),a=i("f1f0");for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);i("506c");var r=i("2877"),o=Object(r["a"])(a["default"],s["a"],s["b"],!1,null,"7a15508d",null);e["default"]=o.exports},ae58:function(t,e){t.exports=require("../siteinfo.js")},b205:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=r(i("a34a")),a=i("2f62"),n=r(i("7ab7"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,i,s,a,n,r){try{var o=t[n](r),c=o.value}catch(l){return void i(l)}o.done?e(c):Promise.resolve(c).then(s,a)}function c(t){return function(){var e=this,i=arguments;return new Promise(function(s,a){var n=t.apply(e,i);function r(t){o(n,s,a,r,c,"next",t)}function c(t){o(n,s,a,r,c,"throw",t)}r(void 0)})}}function l(t){return u(t)||d(t)||h()}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}function _(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,s)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?_(i,!0).forEach(function(e){f(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):_(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function f(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var p=function(){return i.e("pages/cats/style-one").then(i.bind(null,"5ec4"))},v=function(){return i.e("pages/cats/style-two").then(i.bind(null,"1380"))},b=function(){return i.e("pages/cats/style-three").then(i.bind(null,"b0635"))},y=function(){return i.e("pages/cats/style-four").then(i.bind(null,"59d9"))},m=function(){return i.e("pages/cats/style-five").then(i.bind(null,"e9c1"))},w=function(){return i.e("pages/cats/style-six").then(i.bind(null,"d582"))},x=function(){return i.e("pages/cats/style-seven").then(i.bind(null,"97f2"))},$=function(){return i.e("pages/cats/style-eight").then(i.bind(null,"5d08"))},k=function(){return i.e("pages/cats/style-nine").then(i.bind(null,"7c2b"))},q=function(){return i.e("pages/cats/style-ten").then(i.bind(null,"d3c3"))},O=function(){return i.e("pages/cats/style-eleven").then(i.bind(null,"262a1"))},I=function(){return i.e("components/page-component/app-search-for/app-search-for").then(i.bind(null,"73f4"))},T=function(){return Promise.all([i.e("common/vendor"),i.e("components/page-component/app-attr/app-attr")]).then(i.bind(null,"d3c4"))},j={components:{"app-search-for":I,"style-one":p,"style-two":v,"style-three":b,"style-four":y,"style-five":m,"style-six":w,"style-seven":x,"style-eight":$,"style-nine":k,"style-ten":q,"style-eleven":O,"app-attr":T},data:function(){return{search_bool:!0,list:[],goods:[],request:!0,page:1,classId:0,activeIndex:0,activeIndexTwo:0,over:!1,scrollHeight:0,tabbarbool:!0,cat_id:0,cat_ids:[],againLower:!0,goods_list:[],page_count:1,select_cat_id:0,first_id:0,loading:!1,selectAttr:{},previewUrl:"",submitUrl:"",show:0,attrGroup:[],item:{},is_over_goods:!0,options:{},goodsLoading:!1,typesta:"1"}},computed:g({},(0,a.mapGetters)("mallConfig",{cat_style:"getCatStyle",getTheme:"getTheme"}),{},(0,a.mapState)("gConfig",{windowHeight:function(t){return t.systemInfo.windowHeight},windowWidth:function(t){return t.systemInfo.windowWidth}}),{},(0,a.mapGetters)("iPhoneX",{botHeight:"getBotHeight"}),{},(0,a.mapState)("mallConfig",{mall:function(t){return t.mall}}),{setHeight:function(){var t=0;return this.tabbarbool&&(t=this.botHeight),this.windowHeight*(750/this.windowWidth)-t-88}}),onReachBottom:function(){var e=this,i=this.cat_style.cat_style;"3"!==i&&"1"!==i&&(this.page<this.page_count?(this.page++,this.$request({url:this.$api.default.goods_list,method:"get",data:{page:this.page,cat_id:this.cat_id}}).then(function(t){var s;0===t.code&&("8"!==i&&"5"!==i||(e.goodsLoading=!0),(s=e.goods_list).push.apply(s,l(t.data.list)))})):("8"!==i&&"5"!==i||(this.goodsLoading=!1),t.showToast({title:"暂无更多商品",icon:"none"})))},methods:{onAttr:function(t){this.selectAttr=t},attr:function(t){var e=t.previewUrl,i=t.submitUrl,s=t.attr_groups,a=t.goods;this.previewUrl=e,this.submitUrl=i,this.attrGroup=s,this.item=a,this.show=Math.random()},route_advert:function(t){(0,n.default)({open_type:t.advert_open_type,params:t.advert_params,page_url:t.advert_url})},active:function(t){var e=this;this.page=1,this.goods_list=[],this.cat_id=t.id,this.select_cat_id=t.id;for(var i=0;i<this.list.length;i++)this.list[i].active=!1;for(var s=0;s<this.list.length;s++)this.list[s].id===t.id&&(this.list[s].active=!0);this.is_over_goods=!1,this.$request({url:"".concat(this.$api.default.goods_list,"&page=").concat(this.page,"&cat_id=").concat(t.id)}).then(function(t){var i;0===t.code&&((i=e.goods_list).push.apply(i,l(t.data.list)),e.page_count=t.data.pagination.page_count,e.goodsLoading=e.page_count>1,e.is_over_goods=!0)})},req:function(){var t=this;this.$request({url:"".concat(this.$api.default.goods_list,"&page=").concat(this.page,"&cat_id=").concat(this.classId)}).then(function(e){var i;e.data.list.length>0?(i=t.goods).push.apply(i,l(e.data.list)):t.over=!0})},activeOne:function(t){var e=this;this.page=1,this.activeIndexTwo=0,this.cat_id=t.id,this.select_cat_id=t.id,this.is_over_goods=!1;for(var i=0;i<this.list.length;i++)this.list[i].active!==t.active&&(this.list[i].active=!1);for(var s=0;s<this.list.length;s++)this.list[s].id===t.id&&(this.list[s].active=!0,this.activeIndex=s);"5"===this.cat_style.cat_style&&(this.goods_list=[]),0===this.list[this.activeIndex].child.length?this.$request({url:"".concat(this.$api.default.goods_list,"&page=").concat(this.page,"&cat_id=").concat(t.id)}).then(function(i){var s=i.data,a=s.list,n=s.pagination;e.goods_list=a,e.is_over_goods=!0,e.page=1,e.cat_id=t.id,e.select_cat_id=t.id,e.page_count=n.page_count}):this.$request({url:"".concat(this.$api.default.goods_list,"&page=").concat(this.page,"&cat_id=").concat(this.list[this.activeIndex].child[0].id)}).then(function(i){var s=i.data,a=s.list,n=s.pagination;e.goods_list=a,e.is_over_goods=!0,e.page=1,e.cat_id=e.list[e.activeIndex].child[0].id,e.select_cat_id=t.id,e.page_count=n.page_count})},activeTwo:function(){var t=c(s.default.mark(function t(e){var i,a,n,r,o,c;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.item,a=e.index,this.page=1,this.activeIndexTwo=a,this.select_cat_id=i.id,this.cat_id=i.id,this.select_cat_id=i.id,this.is_over_goods=!1,t.next=9,this.$request({url:this.$api.default.goods_list,method:"get",data:{page:1,cat_id:i.id}});case 9:n=t.sent,0===n.code&&(r=n.data,o=r.list,c=r.pagination,this.goods_list=[],this.goods_list=o,this.is_over_goods=!0,this.page_count=c.page_count);case 11:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),activeThree:function(t){this.cat_id=t.id,this.select_cat_id=t.id;for(var e=0;e<this.list.length;e++)this.list[e].active!==t.active&&(this.list[e].active=!1),this.list[e].id===t.id&&(this.list[e].active=!0,this.activeIndex=e)},catLower:function(){var t=c(s.default.mark(function t(){var e,i,a,n;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.againLower){t.next=2;break}return t.abrupt("return");case 2:return this.againLower=!1,e=this.goods_list[this.goods_list.length-1],t.next=6,this.$request({url:this.$api.default.cat_goods,method:"get",data:{cat_ids:JSON.stringify(this.cat_ids),cat_id:e.id,offset:e.offset}});case 6:if(i=t.sent,0===i.code){for(i.data.list[0].id===e.id&&i.data.list[0].goods_list.length>0&&((a=this.goods_list[this.goods_list.length-1].goods_list).push.apply(a,l(i.data.list[0].goods_list)),this.goods_list[this.goods_list.length-1].offset=i.data.list[0].offset),n=1;n<i.data.list.length;n++)this.goods_list.push(i.data.list[n]);this.againLower=!0}case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),activeRequest:function(t){var e=t.item;this.goods_list=[],console.log(e),0!==e.child.length&&this.requestCatList({item:e.child[0],index:0})},requestCatList:function(){var t=c(s.default.mark(function t(e){var i,a,n,r;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(i=e.item,a=e.index,this.page=1,this.cat_id=i.id,this.select_cat_id=i.id,this.activeIndexTwo=a,this.goods_list=[],0===i.child.length){t.next=14;break}for(this.is_over_goods=!1,this.cat_ids=[],n=0;n<i.child.length;n++)this.cat_ids.push(i.child[n].id);return t.next=12,this.$request({url:this.$api.default.cat_goods,method:"get",data:{cat_ids:JSON.stringify(this.cat_ids),cat_id:i.child[0].id,offset:0}});case 12:r=t.sent,0===r.code&&(this.is_over_goods=!0,this.goods_list=r.data.list);case 14:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),requestGoods:function(){var t=c(s.default.mark(function t(e){var i,a,n;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=e.item,a=e.index,this.page=1,this.cat_id=i.id,this.select_cat_id=i.id,this.goods_list=[],this.is_over_goods=!1,"10"===this.cat_style.cat_style&&void 0!==a&&0!==this.list[a].child.length&&(this.activeIndexTwo=0,this.cat_id=this.list[a].child[0].id),t.next=9,this.$request({url:this.$api.default.goods_list,method:"get",data:{page:this.page,cat_id:this.cat_id}});case 9:n=t.sent,0===n.code&&(this.is_over_goods=!0,this.goods_list=n.data.list,this.goodsLoading=!0,this.page_count=n.data.pagination.page_count);case 11:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),lower:function(){var e=c(s.default.mark(function e(i){var a,n;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!(this.page<this.page_count)){e.next=8;break}return this.page++,e.next=4,this.$request({url:this.$api.default.goods_list,method:"get",data:{page:this.page,cat_id:i.id}});case 4:a=e.sent,0===a.code&&(n=this.goods_list).push.apply(n,l(a.data.list)),e.next=9;break;case 8:t.showToast({title:"暂无更多商品",icon:"none"});case 9:case"end":return e.stop()}},e,this)}));function i(t){return e.apply(this,arguments)}return i}(),dataProcessing:function(t){for(var e=0;e<t.length;e+=2)e+1!==t.length?this.goods_list.push([t[e],t[e+1]]):this.goods_list.push([t[e]])},requestCat:function(){var t=c(s.default.mark(function t(e,i){var a,n,r,o,c,l,h,d,u,_=this;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!1,t.next=3,this.$request({url:this.$api.default.cat_list,method:"get",data:{cat_id:e||"",select_cat_id:i||""}});case 3:if(a=t.sent,0!==a.code){t.next=64;break}if(this.list=a.data.list,"1"!==this.cat_style.cat_style||0!==this.list.length){t.next=9;break}return this.search_bool=!1,t.abrupt("return");case 9:if("2"!==this.cat_style.cat_style&&"1"!==this.cat_style.cat_style){t.next=11;break}return t.abrupt("return");case 11:if("3"!==this.cat_style.cat_style||0!==this.list.length){t.next=14;break}return this.search_bool=!1,t.abrupt("return");case 14:if(!e&&!i){t.next=42;break}if("11"!==this.cat_style.cat_style){t.next=28;break}if(this.cat_ids=[],this.list.map(function(t,e){t.active&&(_.activeIndex=e)}),0!==this.list[this.activeIndex].child.length){t.next=20;break}return t.abrupt("return");case 20:for(n=0;n<this.list[this.activeIndex].child[0].child.length;n++)this.cat_ids.push(this.list[this.activeIndex].child[0].child[n].id);if(0!==this.cat_ids.length){t.next=23;break}return t.abrupt("return");case 23:return t.next=25,this.$request({url:this.$api.default.cat_goods,method:"get",data:{cat_ids:JSON.stringify(this.cat_ids),cat_id:this.cat_ids[0],offset:0}});case 25:return r=t.sent,0===r.code&&(this.goods_list=r.data.list),t.abrupt("return");case 28:if("6"!==this.cat_style.cat_style&&"7"!==this.cat_style.cat_style){t.next=31;break}return this.list.map(function(t,e){t.active&&(_.activeIndex=e)}),t.abrupt("return");case 31:if(this.list.length>0)for(o=0;o<this.list.length;o++)this.list[o].active&&(this.cat_id=this.list[o].id);if(("5"===this.cat_style.cat_style||"10"===this.cat_style.cat_style)&&this.list.length>0&&this.list[0].child.length>0)for(c=0;c<this.list.length;c++)this.list[c].active&&(this.cat_id=this.list[c].child[0].id);if(0!==this.list.length||"4"!==this.cat_style.cat_style){t.next=36;break}return this.search_bool=!1,t.abrupt("return");case 36:return t.next=38,this.$request({url:this.$api.default.goods_list,method:"get",data:{page:1,cat_id:this.cat_id}});case 38:l=t.sent,0===l.code&&(this.goods_list=l.data.list,this.page_count=l.data.pagination.page_count,0===this.list.length&&0===this.goods_list.length&&(this.search_bool=!1)),t.next=64;break;case 42:if(!(this.list.length>0)){t.next=63;break}if("11"!==this.cat_style.cat_style){t.next=55;break}if(this.cat_ids=[],0!==this.list.length&&0!==this.list[0].child.length){t.next=47;break}return t.abrupt("return");case 47:for(h=0;h<this.list[0].child[0].child.length;h++)this.cat_ids.push(this.list[0].child[0].child[h].id);if(0!==this.cat_ids.length){t.next=50;break}return t.abrupt("return");case 50:return t.next=52,this.$request({url:this.$api.default.cat_goods,method:"get",data:{cat_ids:JSON.stringify(this.cat_ids),cat_id:this.cat_ids[0],offset:0}});case 52:return d=t.sent,0===d.code&&(this.goods_list=d.data.list),t.abrupt("return");case 55:return this.cat_id=this.list[0].id,("5"===this.cat_style.cat_style||"10"===this.cat_style.cat_style)&&this.list[0].child.length>0&&(this.cat_id=this.list[0].child[0].id),t.next=59,this.$request({url:this.$api.default.goods_list,method:"get",data:{page:1,cat_id:this.cat_id}});case 59:u=t.sent,0===u.code&&(this.goods_list=u.data.list,this.page_count=u.data.pagination.page_count),t.next=64;break;case 63:this.search_bool=!1;case 64:case"end":return t.stop()}},t,this)}));function e(e,i){return t.apply(this,arguments)}return e}()},onLoad:function(t){var e=this;this.$commonLoad.onload(t),this.$commonLoad.onload(),this.options=t,setTimeout(function(){e.tabbarbool=e.$children[0].tabbarbool},500),this.cat_id=t.cat_id,this.first_id=t.cat_id,t.first_id&&t.select_cat_id?this.requestCat(t.first_id,t.select_cat_id).then(function(){e.loading=!0}):!t.first_id&&t.select_cat_id?this.requestCat("",t.select_cat_id).then(function(){e.loading=!0}):t.first_id||t.select_cat_id||this.requestCat(t.cat_id).then(function(){e.loading=!0}),wx.showShareMenu({menus:["shareAppMessage","shareTimeline"]})},onShareAppMessage:function(){return this.$shareAppMessage({path:"/pages/cats/cats",title:this.$children[0].navigationBarTitle,params:{cat_id:this.first_id,first_id:this.first_id,select_cat_id:this.select_cat_id}})},onShareTimeline:function(){var t=this.mall.setting,e=t.setting,i=t.name;return this.$shareTimeline({title:e.share_title?e.share_title:i,query:{cat_id:this.first_id,first_id:this.first_id,select_cat_id:this.select_cat_id}})}};e.default=j}).call(this,i("543d")["default"])},d502:function(t,e,i){},f1f0:function(t,e,i){"use strict";i.r(e);var s=i("b205"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);e["default"]=a.a}},[["f539","common/runtime","common/vendor"]]]);