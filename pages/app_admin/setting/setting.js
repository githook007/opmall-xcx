(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/app_admin/setting/setting"],{"036c":function(t,e,i){"use strict";i("61b2")},"487c":function(t,e,i){"use strict";i.r(e);var s=i("7a92"),a=i("f0b7");for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);i("036c");var l=i("2877"),o=Object(l["a"])(a["default"],s["a"],s["b"],!1,null,"b767f2d6",null);e["default"]=o.exports},"61b2":function(t,e,i){},"6bc1":function(t,e,i){"use strict";(function(t){function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;for(var a=function(){return i.e("components/basic-component/app-radio/app-radio").then(i.bind(null,"3ac8"))},n=new Date,l=[],o=[],r=[],h=[],u=[],d=[],m=n.getFullYear();m<=n.getFullYear()+10;m++)l.push(m);for(var c=1;c<=12;c++)o.push(c);for(var f=1;f<=31;f++)r.push(f);for(var y=1;y<=30;y++)h.push(y);for(var p=1;p<=28;p++)u.push(p);for(var _=1;_<=29;_++)d.push(_);var g={name:"setting",data:function(){var t;return t={$siteInfo:this.$siteInfo,theme:{background:"#446dfd",color:"#446dfd"},lineHeight:"72rpx",indicatorStyle:"",detail:{setting:{delivery_time:"0",after_sale_time:"0",over_time:"0",member_integral:"0"}},mail:{},sms:{},model:!1,modelType:0,name:"",over_time:"",delivery_time:"",after_sale_time:"",payment_type:[],online_pay:!1,balance:!1,huodao:!1,send_type:[],express:!1,offline:!1,city:!1,member_integral:"",member_integral_rule:"",chooseAuto:1,date:[{label:"周一",value:"1",check:!1},{label:"周二",value:"2",check:!1},{label:"周三",value:"3",check:!1},{label:"周四",value:"4",check:!1},{label:"周五",value:"5",check:!1},{label:"周六",value:"6",check:!1},{label:"周日",value:"7",check:!1}],hour:[],minutes:[],dateVal:[0,0,0],timeVal:[0,0,0]},s(t,"chooseAuto",1),s(t,"years",l),s(t,"months",o),s(t,"days",r),s(t,"bigDays",r),s(t,"smallDays",h),s(t,"secDays",u),s(t,"otherDays",d),t},onLoad:function(){this.$commonLoad.onload();for(var e=0;e<60;e++)e<10&&(e="0"+e),e<24&&this.hour.push(e),this.minutes.push(e);this.indicatorStyle="height: 36px;font-size:14px;";var i=t.getSystemInfoSync().windowWidth,s=375/i;this.lineHeight=72*s+"rpx";var a=new Date,n=a.getFullYear(),l=a.getMonth()+1;l>=1&&l<=9&&(l="0"+l);var o=a.getDate();for(var r in this.years)n==this.years[r]&&(this.dateVal[0]=+r);for(var h in this.months)l==this.months[h]&&(this.dateVal[1]=+h);for(var u in this.days=2==l?n%4==0&&n%400!=0?this.otherDays:this.secDays:l<8&&l%2==1||l>7&&l%2==0?this.bigDays:this.smallDays,this.days)o==this.days[u]&&(this.dateVal[2]=+u)},onShow:function(){this.$showLoading({type:"global",text:"加载中..."}),this.getList()},methods:{getList:function(){var t=this;this.$request({url:this.$api.app_admin.setting}).then(function(e){if(0===e.code){t.detail=e.data.detail,t.$hideLoading();var i=t.detail.setting,s=i.over_time,a=i.delivery_time,n=i.after_sale_time,l=i.payment_type,o=i.member_integral,r=i.member_integral_rule,h=i.is_auto_open;t.over_time=s,t.delivery_time=a,t.after_sale_time=n,t.payment_type=l,t.member_integral=o,t.member_integral_rule=r,t.chooseAuto=h;for(var u=t.detail.setting.send_type,d=0;d<u.length;d++)"express"===u[d]?t.express=!0:"offline"===u[d]?t.offline=!0:"city"===u[d]&&(t.city=!0);t.name=t.detail.name,t.mail=e.data.mail,t.sms=e.data.sms;for(var m=0;m<l.length;m++)"online_pay"===l[m]?t.online_pay=!0:"huodao"===l[m]?t.huodao=!0:"balance"===l[m]&&(t.balance=!0);var c=!0,f=!1,y=void 0;try{for(var p,_=t.date[Symbol.iterator]();!(c=(p=_.next()).done);c=!0){var g=p.value,v=!0,b=!1,T=void 0;try{for(var k,w=t.detail.setting.week_list[Symbol.iterator]();!(v=(k=w.next()).done);v=!0){var D=k.value;g.value==D&&(g.check=!0)}}catch(S){b=!0,T=S}finally{try{v||null==w.return||w.return()}finally{if(b)throw T}}}}catch(S){f=!0,y=S}finally{try{c||null==_.return||_.return()}finally{if(f)throw y}}}})},dateChange:function(t){var e=t.detail.value;this.dateVal=t.detail.value;this.years;var i=this.years[e[0]],s=this.months[e[1]];this.days=2==s?i%4==0&&i%400!=0?this.otherDays:this.secDays:s<8&&s%2==1||s>7&&s%2==0?this.bigDays:this.smallDays},timeChange:function(t){this.timeVal=t.detail.value},openAuto:function(){if(this.chooseAuto=this.detail.setting.is_auto_open,2==this.chooseAuto&&this.detail.setting.auto_open_time.length>0){for(var t in this.years)this.detail.setting.auto_open_time.substring(0,4)==this.years[t]&&(this.dateVal[0]=+t);for(var e in this.months)this.detail.setting.auto_open_time.substring(5,7)==this.months[e]&&(this.dateVal[1]=+e);var i=+this.dateVal[1]+1;for(var s in 2==i?year%4==0&&year%400!=0?this.days=this.otherDays:this.days=this.secDays:this.days=i<8&&i%2==1||i>7&&i%2==0?this.bigDays:this.smallDays,this.days)this.detail.setting.auto_open_time.substring(8,10)==this.days[s]&&(this.dateVal[2]=+s);var a=this.detail.setting.auto_open_time.substring(11);this.timeVal=a.split(":").map(Number)}this.model=!0,this.modelType=9},chooseWeek:function(){var t=!0,e=!1,i=void 0;try{for(var s,a=this.date[Symbol.iterator]();!(t=(s=a.next()).done);t=!0){var n=s.value;n.check=!1;var l=!0,o=!1,r=void 0;try{for(var h,u=this.detail.setting.week_list[Symbol.iterator]();!(l=(h=u.next()).done);l=!0){var d=h.value;n.value==d&&(n.check=!0)}}catch(m){o=!0,r=m}finally{try{l||null==u.return||u.return()}finally{if(o)throw r}}}}catch(m){e=!0,i=m}finally{try{t||null==a.return||a.return()}finally{if(e)throw i}}this.model=!0,this.modelType=8},toggleOpenType:function(t){1==t?(this.detail.setting.open_type=t,this.submit()):this.detail.setting.week_list.length>0?(this.detail.setting.open_type=t,this.submit()):(this.model=!0,this.modelType=8)},toSettingTime:function(){t.navigateTo({url:"/pages/app_admin/open-time/open-time?time_list=".concat(JSON.stringify(this.detail.setting.time_list))})},chooseDate:function(t){t.check=!t.check},toRedirect:function(e){t.redirectTo({url:e})},setLogo:function(){var e=this;t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){t.uploadFile({url:e.$api.upload.file,filePath:i.tempFilePaths[0],name:"file",success:function(t){e.detail.setting.mall_logo_pic=JSON.parse(t.data).data.url,e.submit()}})}})},setSmsStatus:function(){1===this.sms.status?this.sms.status=0:this.sms.status=1,this.submit()},setMailStatus:function(){"1"===this.mail.status?this.mail.status="0":this.mail.status="1",this.submit()},openStatus:function(){1===this.detail.setting.is_open?this.detail.setting.is_open=2:this.detail.setting.is_open=1,this.submit()},setPay:function(t){this[t]=!this[t],!1===this.balance&&!1===this.huodao&&(this.online_pay=!0)},setSend:function(t){this[t]=!this[t],!1===this.offline&&!1===this.city&&(this.express=!0)},sendTypeHandler:function(){this.model=!0,this.modelType=5},jumpGo:function(){this.$jump({open_type:"navigate",url:"/pages/address/address?manual_btn_bg=admin&is_hide_default_btn=1&is_refund_address=1"})},submit:function(){var t=this,e=this.mail?this.mail.status:null,i=this.sms?this.sms.status:null,s={name:this.detail.name,setting:JSON.stringify(this.detail.setting),mail:e,sms:i};this.$request({url:this.$api.app_admin.setting,method:"post",data:s}).then(function(e){0===e.code&&(t.model=!1)})},cancel:function(){this.model=!1},confirm:function(){if(8==this.modelType){var e=!1,i=!0,s=!1,a=void 0;try{for(var n,l=this.date[Symbol.iterator]();!(i=(n=l.next()).done);i=!0){var o=n.value;o.check&&(e=o.check)}}catch(p){s=!0,a=p}finally{try{i||null==l.return||l.return()}finally{if(s)throw a}}if(!e)return t.showToast({title:"请选择营业时间",icon:"none",duration:1e3}),!1;this.detail.setting.open_type=2}else{if(1==this.modelType&&this.over_time>100)return t.showToast({title:"删除未支付订单限时最大为100分钟",icon:"none",duration:1e3}),!1;if(2==this.modelType&&this.delivery_time>30)return t.showToast({title:"自动确认收货时间为30天",icon:"none",duration:1e3}),!1;if(3==this.modelType&&this.after_sale_time>30)return t.showToast({title:"可申请售后时间最大为30天",icon:"none",duration:1e3}),!1}this.detail.name=this.name,this.detail.setting.over_time=this.over_time,this.detail.setting.delivery_time=this.delivery_time,this.detail.setting.after_sale_time=this.after_sale_time,this.detail.setting.payment_type=[],this.detail.setting.member_integral=this.member_integral,this.detail.setting.member_integral_rule=this.member_integral_rule,!0===this.online_pay&&this.detail.setting.payment_type.push("online_pay"),!0===this.huodao&&this.detail.setting.payment_type.push("huodao"),!0===this.balance&&this.detail.setting.payment_type.push("balance"),this.detail.setting.send_type=[],!0===this.offline&&this.detail.setting.send_type.push("offline"),!0===this.express&&this.detail.setting.send_type.push("express"),!0===this.city&&this.detail.setting.send_type.push("city"),this.detail.setting.week_list=[];var r=!0,h=!1,u=void 0;try{for(var d,m=this.date[Symbol.iterator]();!(r=(d=m.next()).done);r=!0){var c=d.value;c.check&&this.detail.setting.week_list.push(c.value)}}catch(p){h=!0,u=p}finally{try{r||null==m.return||m.return()}finally{if(h)throw u}}if(this.detail.setting.is_auto_open=this.chooseAuto,2==this.detail.setting.is_auto_open){var f=this.months[this.dateVal[1]],y=this.days[this.dateVal[2]];f<10&&(f="0"+f),y<10&&(y="0"+y),this.detail.setting.auto_open_time=this.years[this.dateVal[0]]+"-"+f+"-"+y,this.detail.setting.auto_open_time+=" "+this.hour[this.timeVal[0]]+":"+this.minutes[this.timeVal[1]]+":"+this.minutes[this.timeVal[2]]}this.submit()}},components:{appRadio:a}};e.default=g}).call(this,i("543d")["default"])},"7a92":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.model=!0,t.modelType=0,t.name=t.detail.name},t.e1=function(e){t.model=!0,t.modelType=1,t.over_time=t.detail.setting.over_time},t.e2=function(e){t.model=!0,t.modelType=2,t.delivery_time=t.detail.setting.delivery_time},t.e3=function(e){t.model=!0,t.modelType=3,t.after_sale_time=t.detail.setting.after_sale_time},t.e4=function(e){t.model=!0,t.modelType=4,t.payment_type=t.detail.setting.payment_type},t.e5=function(e){t.model=!0,t.modelType=6,t.member_integral=t.detail.setting.member_integral},t.e6=function(e){t.model=!0,t.modelType=7,t.member_integral_rule=t.detail.setting.member_integral_rule},t.e7=function(e){t.chooseAuto=1},t.e8=function(e){t.chooseAuto=2})},a=[];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return a})},f0b7:function(t,e,i){"use strict";i.r(e);var s=i("6bc1"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);e["default"]=a.a}},[["e191","common/runtime","common/vendor"]]]);