(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-bindPhone"],{"0058":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{mobile:"",mobileCode:"",btnMsg:"获取验证码",tim:""}},onShow:function(){},onLoad:function(t){},methods:{getCode:function(){var t=this;""==this.tim&&(this.mobile?this.$http.post("login/sendCode",{phone:this.mobile,type:"3"}).then((function(e){if(1==e.code){t.toast(e.msg),t.tim=120;var n=setInterval((function(){t.tim>0?(t.btnMsg=t.tim+"s后重新获取",t.tim--):(t.btnMsg="获取验证码",t.tim="",clearInterval(n))}),1e3)}else t.toast(e.msg)})):this.toast("请输入手机号"))},submit:function(){var t=this;if(this.mobile)if(this.mobileCode){var e={phone:this.mobile,code:this.mobileCode};this.$http.post("login/bindPhone",e).then((function(e){console.log(e),1==e.code?(t.toast(e.msg),uni.setStorageSync("app_token",e.data.app_token),setTimeout((function(){uni.reLaunch({url:"../index/index"})}),1e3)):t.toast(e.msg)}))}else this.toast("请输入验证码");else this.toast("请输入正确的手机号码")}}};e.default=i},1723:function(t,e,n){"use strict";n.r(e);var i=n("3050"),o=n("cbb1f");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("e4ed"),n("83f7");var s,c=n("f0c5"),d=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"1ce857d0",null,!1,i["a"],s);e["default"]=d.exports},2208:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-1ce857d0]{background-color:#23272c}body.?%PAGE?%[data-v-1ce857d0]{background-color:#23272c}",""]),t.exports=e},3050:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"tBox"},[n("v-uni-view",{staticClass:"msg"},[t._v("绑定手机")]),n("v-uni-view",{staticClass:"sMsg"},[t._v("为了你的账号安全,请先绑定手机号")])],1),n("v-uni-view",{staticClass:"iptItem"},[n("v-uni-view",{staticClass:"label"},[t._v("手机号")]),n("v-uni-view",{staticClass:"iptBox flexBox"},[n("v-uni-text",{staticClass:"left"},[t._v("+86")]),n("v-uni-input",{staticClass:"ipt",attrs:{maxlength:"11",type:"number",placeholder:"请输入手机号","placeholder-class":"iptP"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}})],1)],1),n("v-uni-view",{staticClass:"iptItem"},[n("v-uni-view",{staticClass:"label"},[t._v("验证码")]),n("v-uni-view",{staticClass:"iptBox flexBox"},[n("v-uni-text",{}),n("v-uni-input",{staticClass:"ipt",attrs:{type:"number",placeholder:"请输入验证码","placeholder-class":"iptP"},model:{value:t.mobileCode,callback:function(e){t.mobileCode=e},expression:"mobileCode"}}),n("v-uni-view",{staticClass:"codeBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getCode.apply(void 0,arguments)}}},[t._v(t._s(t.btnMsg))])],1)],1),n("v-uni-view",{staticClass:"subBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("完 成")]),n("v-uni-view",{staticClass:"loginBox flex_ct",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go("../index/index")}}},[n("v-uni-text",[t._v("取消登录")])],1)],1)},a=[]},"83f7":function(t,e,n){"use strict";var i=n("afa0"),o=n.n(i);o.a},afa0:function(t,e,n){var i=n("bd6d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("713cd296",i,!0,{sourceMap:!1,shadowMode:!1})},bd6d:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 颜色变量 */\n/*  常用字体颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-textarea[data-v-1ce857d0]{background-color:#f8f8f8;width:%?650?%;height:%?130?%;display:block;position:relative;font-size:%?28?%;line-height:normal;white-space:pre-wrap;word-break:break-all;padding:%?20?%;color:#777;border-radius:%?10?%}.content[data-v-1ce857d0]{padding:0 %?40?%}.content .tBox[data-v-1ce857d0]{padding-top:%?60?%}.content .tBox .msg[data-v-1ce857d0]{font-size:%?50?%;margin-bottom:%?20?%;font-weight:500;color:#fff}.content .tBox .sMsg[data-v-1ce857d0]{font-size:%?24?%;margin-bottom:%?100?%;color:#aaa}.content .iptItem[data-v-1ce857d0]{margin-bottom:%?40?%}.content .iptItem .label[data-v-1ce857d0]{color:#fff;font-size:%?26?%;font-weight:500;margin-bottom:%?20?%}.content .iptItem .iptBox[data-v-1ce857d0]{padding:0 %?30?%;background:#383b3f;height:%?112?%;border-radius:%?56?%;font-size:%?32?%}.content .iptItem .iptBox .left[data-v-1ce857d0]{color:#aaa;margin-right:%?40?%}.content .iptItem .iptBox .ipt[data-v-1ce857d0]{flex:1;height:100%;font-size:%?32?%;font-weight:500;color:#aaa}.content .iptItem .iptBox .iptP[data-v-1ce857d0]{color:#aaa;font-size:%?32?%;font-weight:500}.content .iptItem .iptBox .codeBtn[data-v-1ce857d0]{width:%?220?%;height:%?68?%;line-height:%?68?%;text-align:center;border-radius:%?34?%;font-size:%?30?%;font-weight:500;color:#f0ba55}.content .subBtn[data-v-1ce857d0]{width:%?630?%;height:%?100?%;line-height:%?100?%;text-align:center;background:#ae3523;border-radius:%?50?%;color:#ffdd9d;font-size:%?32?%;margin:%?100?% auto;box-shadow:%?0?% %?8?% %?40?% %?0?% rgba(174,53,35,.4)}.content .loginBox[data-v-1ce857d0]{position:absolute;left:0;bottom:%?50?%;width:100%;height:%?60?%;line-height:%?60?%;font-size:%?24?%;color:#aaa}',""]),t.exports=e},cbb1f:function(t,e,n){"use strict";n.r(e);var i=n("0058"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},d46f:function(t,e,n){var i=n("2208");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("50fc5bde",i,!0,{sourceMap:!1,shadowMode:!1})},e4ed:function(t,e,n){"use strict";var i=n("d46f"),o=n.n(i);o.a}}]);