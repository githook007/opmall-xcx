(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["plugins/lottery/qrcode/qrcode"],{"0547":function(t,n,o){"use strict";o("283b")},"1c51":function(t,n,o){"use strict";o.r(n);var e=o("893d"),c=o("9b57");for(var i in c)"default"!==i&&function(t){o.d(n,t,function(){return c[t]})}(i);o("0547");var s=o("2877"),u=Object(s["a"])(c["default"],e["a"],e["b"],!1,null,"32b54923",null);n["default"]=u.exports},"283b":function(t,n,o){},"893d":function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},c=[];o.d(n,"a",function(){return e}),o.d(n,"b",function(){return c})},"9b57":function(t,n,o){"use strict";o.r(n);var e=o("a657"),c=o.n(e);for(var i in e)"default"!==i&&function(t){o.d(n,t,function(){return e[t]})}(i);n["default"]=c.a},a657:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"qrcode",components:{},data:function(){return{setting:{}}},onLoad:function(){this.$commonLoad.onload();var t=this;t.$request({url:t.$api.lottery.setting}).then(function(n){0===n.code&&(t.setting=n.data.setting)}).catch(function(t){})},methods:{save:function(n){t.showLoading({title:"图片保存中"}),t.downloadFile({url:n,success:function(n){t.saveImageToPhotosAlbum({filePath:n.tempFilePath,success:function(){t.showToast({title:"保存成功"})},fail:function(o){o.errMsg&&t.showModal({title:"提示",content:"您好,请先授权保存到相册权限",showCancel:!1,success:function(o){o.confirm&&t.openSetting({success:function(o){o.authSetting["scope.writePhotosAlbum"]?t.saveImageToPhotosAlbum({filePath:n.tempFilePath,success:function(){t.showToast({title:"保存成功"})}}):t.showModal({title:"提示",content:"授权失败，请稍后重新获取",showCancel:!1})}})}})},complete:function(n){t.hideLoading()}})},fail:function(n){t.showModal({title:"图片下载失败",content:n.errMsg,showCancel:!1})},complete:function(n){t.hideLoading()}})},copy:function(){this.$utils.uniCopy({data:this.setting.cs_wechat,success:function(){}})}}};n.default=o}).call(this,o("543d")["default"])}},[["0194","common/runtime","common/vendor"]]]);