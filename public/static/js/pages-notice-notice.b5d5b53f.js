(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-notice-notice"],{"0aa6":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("1da1")),r={data:function(){return{noticeList:[]}},onLoad:function(){this.getNotice()},methods:{getNotice:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.get("index/noticeList");case 3:n=e.sent,t.noticeList=n.data,e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))()},goDetail:function(t){var e="./noticeDetail?id="+t.id;this.go(e)}}};e.default=r},"3d23":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"flex flex-column flex-middle"},t._l(t.noticeList,(function(e,i){return n("v-uni-view",{staticClass:"item-notice bg1",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goDetail(e)}}},[n("v-uni-image",{staticClass:"conimg",attrs:{src:e.image,mode:"aspectFill"}}),n("v-uni-view",{staticClass:"conright"},[n("v-uni-view",{staticClass:"black size-28 bold mb-8",staticStyle:{color:"#67c5cd"}},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"flex"},[n("v-uni-view",{staticClass:"label"},[t._v(t._s(e.create_time))])],1)],1)],1)})),1)},r=[]},"75b1":function(t,e,n){"use strict";n.r(e);var i=n("0aa6"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"770e":function(t,e,n){var i=n("df98");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("2612a04b",i,!0,{sourceMap:!1,shadowMode:!1})},b7ce:function(t,e,n){"use strict";n.r(e);var i=n("3d23"),a=n("75b1");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("e0bf");var c,o=n("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"55d3fdc1",null,!1,i["a"],c);e["default"]=s.exports},df98:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 颜色变量 */\n/*  常用字体颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-textarea[data-v-55d3fdc1]{background-color:#f8f8f8;width:%?650?%;height:%?130?%;display:block;position:relative;font-size:%?28?%;line-height:normal;white-space:pre-wrap;word-break:break-all;padding:%?20?%;color:#777;border-radius:%?10?%}.item-notice[data-v-55d3fdc1]{background:#f0f0f0;border-radius:%?30?%;margin-bottom:%?30?%;width:%?720?%;height:%?510?%}.item-notice .conimg[data-v-55d3fdc1]{width:%?720?%;height:%?398?%;border-radius:%?30?%}.item-notice .conright[data-v-55d3fdc1]{margin-left:%?24?%}.item-notice .conright .label[data-v-55d3fdc1]{height:%?40?%;line-height:%?40?%;background-image:linear-gradient(to right bottom,#ceaae6,#61c7cb);border-radius:%?6?%;font-size:%?22?%;padding:0 %?16?%;font-weight:700;color:#fff}',""]),t.exports=e},e0bf:function(t,e,n){"use strict";var i=n("770e"),a=n.n(i);a.a}}]);