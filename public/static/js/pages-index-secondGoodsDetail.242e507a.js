(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-secondGoodsDetail"],{"0b79":function(t,e,i){var n=i("8d05");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("6e018c55",n,!0,{sourceMap:!1,shadowMode:!1})},"17e9":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"bigbox"},[n("v-uni-view",{staticClass:"Box"},[n("v-uni-view",{staticClass:"rotateBox",style:"background-image: url("+t.info.image+");background-size: 100% 100%"},[n("v-uni-image",{staticClass:"image",attrs:{src:i("3cf1")}})],1)],1),n("v-uni-view",{staticClass:"Box1"},[n("v-uni-image",{staticClass:"img",attrs:{src:i("2bd1"),mode:""}}),n("v-uni-view",{staticClass:"center"},[n("v-uni-view",{staticClass:"goodsName"},[t._v(t._s(t.info.name))]),n("v-uni-view",{staticClass:"flexBox LimitBox"},[n("v-uni-view",{staticClass:"Limit"},[t._v("限量")]),n("v-uni-view",{staticClass:"stock"},[t._v(t._s(t.info.surplus)+"份")])],1)],1),n("v-uni-image",{staticClass:"img",attrs:{src:i("ac37"),mode:""}})],1)],1),n("v-uni-view",{staticClass:"msgBox"},[n("v-uni-view",{staticClass:"flex_bt"},[n("v-uni-view",{staticClass:"priceBox"},[t._v("当前价:"),n("v-uni-text",[t._v("¥"+t._s(t.info.price))])],1),n("v-uni-view",{staticClass:"category_name"},[t._v(t._s(t.info.goods_category_name))])],1),n("v-uni-view",{staticClass:"describe"},[t._v(t._s(t.info.title))])],1),n("v-uni-view",{staticClass:"goodsinfo"},[n("v-uni-view",{staticClass:"iptBox  flexBox"},[n("v-uni-view",{staticClass:"label"},[t._v("创作者")]),n("v-uni-view",{staticClass:"center"},[t._v(t._s(t.info.creator))])],1),n("v-uni-view",{staticClass:"iptBox flexBox"},[n("v-uni-view",{staticClass:"label"},[t._v("拥有者")]),n("v-uni-view",{staticClass:"center"},[n("v-uni-text",[t._v(t._s(t.info.owner))]),n("v-uni-image",{staticClass:"copy",attrs:{src:i("8ca6"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copy(t.info.owner)}}})],1)],1),n("v-uni-view",{staticClass:"iptBox iptBox1 flexBox"},[n("v-uni-view",{staticClass:"label"},[t._v("铸造平台")]),n("v-uni-view",{staticClass:"center"},[t._v(t._s(t.info.casting_name))])],1),n("v-uni-view",{staticClass:"iptBox iptBox1 flexBox"},[n("v-uni-view",{staticClass:"label"},[t._v("铸造时间")]),n("v-uni-view",{staticClass:"center"},[t._v(t._s(t.info.casting_time))])],1),t.info.number?n("v-uni-view",{staticClass:"iptBox iptBox1"},[n("v-uni-view",{staticClass:"label"},[t._v("藏品编号")]),n("v-uni-view",{staticClass:"center"},[t._v(t._s(t.info.number))])],1):t._e()],1),t.info.content?n("v-uni-view",{staticClass:"descBox"},[n("v-uni-view",{staticClass:"item"},[t._v("藏品介绍")]),n("v-uni-view",{staticClass:"desinfo",domProps:{innerHTML:t._s(t.util.checkImg(t.info.content))}})],1):t._e(),n("v-uni-view",{staticClass:"tech-tip"},[n("v-uni-image",{attrs:{src:i("f4fb"),mode:""}})],1),n("v-uni-view",{staticClass:"footerBox flex_bt"},[n("v-uni-view",{staticClass:"price"},[t._v("¥"+t._s(t.info.price))]),n("v-uni-view",{staticClass:"subBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.pay()}}},[t._v("立即购买")])],1)],1)},a=[]},"1de5":function(t,e,i){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"287f":function(t,e,i){"use strict";i.r(e);var n=i("17e9"),o=i("6611");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("e090");var s,r=i("f0c5"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"712c30be",null,!1,n["a"],s);e["default"]=c.exports},"2bd1":function(t,e,i){t.exports=i.p+"static/img/b1.b9ddb0cd.png"},"353b":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{goodsId:"",banner:{},info:{}}},onLoad:function(t){this.goodsId=t.goodsId,this.getData()},onShow:function(){},methods:{pay:function(){this.go("orderMakeSure?goodsId="+this.goodsId+"&type=second")},getData:function(){var t=this;this.$http.get("order/memberGoodsDetail",{id:this.goodsId}).then((function(e){1==e.code&&(t.banner=e.data.images,t.info=e.data)}))}}};e.default=n},"3cf1":function(t,e,i){t.exports=i.p+"static/img/bj3.459a1d68.png"},6611:function(t,e,i){"use strict";i.r(e);var n=i("353b"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"7c20":function(t,e,i){t.exports=i.p+"static/img/bj1.07e987b0.png"},8245:function(t,e,i){t.exports=i.p+"static/img/bj2.f97a4992.png"},"8ca6":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAAiRJREFUWEftmD1vE0EQht/ZO3CHFBokeoTSUoQK6JAooNuxLZeQgiKpQgdUUEHFhyigobDs7LqkxpCOFFDmHyAhF1GKSBjrbtAiBzmnM769+IQNO+3szjzz7uze6AhLZrRkvAjAVZ9YUDgonFHg/2qJbre7qpRqi8gqkXftXwDcYOYDnzbyzjIZ3BhjAGifhJm1uwCu+0CfFPgjgKsAXgHYLgpORBdE5CWA0wC8oOcCTET3tNZPiwK7dcaYWwCsL/RJgXcAXCkDnAO9wcwvZhVdGLjdbq/UarW1JEncMf4ypdQZETlFRIdpmn7PS+Z8zPx+Gogx5hOANSLa1Fo/nwtwp9M5H0XRZwDnZgXM84vIo3q9/iDPVwmwtfaOiLwGMCKi/aLQIhIDOOvWT4OuCnhDRJ65G83Mlz2AyVrrCr09DXqhgMeQx6AB3Gfmx0dFLxzwEXSv19sWEfeR2WHmawsN7OCstVsi8iQA510oa22pSzcZKyj8p6cqKBxeiUx/hJZYtpZQSr0Tka3xV3AFgBtR17XWb2bNKYXm4Xm3BIAPAB5OwH1LkuRSs9n8upDAcRyvj0ajiw4uiqIfw+Fwt9VqFRpb/4rCk8PPLEWz/n8eeA/AXV9Vxuvr473HxkvfWEUV1iLifprMwywzc9lAhYD7/X48GAzeArjpnqAyyUQERLSXpmmr0Wi4kyplhYBLRa5oUwCuSNjfYYPCQeGMAqElqm6Jn1X+8DxdPqDIAAAAAElFTkSuQmCC"},"8d05":function(t,e,i){var n=i("24fb"),o=i("1de5"),a=i("b491"),s=i("7c20"),r=i("8245");e=n(!1);var c=o(a),d=o(s),f=o(r);e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 颜色变量 */\n/*  常用字体颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-textarea[data-v-712c30be]{background-color:#f8f8f8;width:%?650?%;height:%?130?%;display:block;position:relative;font-size:%?28?%;line-height:normal;white-space:pre-wrap;word-break:break-all;padding:%?20?%;color:#777;border-radius:%?10?%}@-webkit-keyframes myfirst-data-v-712c30be{0%{-webkit-transform:rotatey(0deg);transform:rotatey(0deg)}25%{-webkit-transform:rotatey(90deg);transform:rotatey(90deg)}50%{-webkit-transform:rotatey(180deg);transform:rotatey(180deg)}75%{-webkit-transform:rotatey(270deg);transform:rotatey(270deg)}100%{-webkit-transform:rotatey(1turn);transform:rotatey(1turn)}}@keyframes myfirst-data-v-712c30be{0%{-webkit-transform:rotatey(0deg);transform:rotatey(0deg)}25%{-webkit-transform:rotatey(90deg);transform:rotatey(90deg)}50%{-webkit-transform:rotatey(180deg);transform:rotatey(180deg)}75%{-webkit-transform:rotatey(270deg);transform:rotatey(270deg)}100%{-webkit-transform:rotatey(1turn);transform:rotatey(1turn)}}.content[data-v-712c30be]{padding-bottom:%?150?%}.content .bigbox[data-v-712c30be]{background:url('+c+") no-repeat 0 0;background-size:100%;background-color:#000}.content .Box[data-v-712c30be]{width:100%;height:%?680?%;padding-bottom:%?50?%;background:url("+d+") no-repeat 0 0;background-size:100%;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;perspective:1000;-webkit-perspective:1000}.content .Box .rotateBox[data-v-712c30be]{width:%?540?%;height:%?540?%;-webkit-animation:myfirst-data-v-712c30be 10s linear .15s 100;animation:myfirst-data-v-712c30be 10s linear .15s 100}.content .Box .rotateBox .image[data-v-712c30be]{width:%?540?%;height:%?540?%}.content .Box1[data-v-712c30be]{width:100%;height:%?360?%;margin-top:%?-120?%;padding-bottom:%?30?%;background:url("+f+") no-repeat top;background-size:%?620?%;display:flex;justify-content:center;align-items:flex-end}.content .Box1 .img[data-v-712c30be]{width:%?84?%;height:%?152?%;margin:0 %?15?%}.content .Box1 .center[data-v-712c30be]{max-width:%?500?%;height:%?152?%;display:flex;flex-direction:column;justify-content:space-around;align-items:center}.content .Box1 .center .goodsName[data-v-712c30be]{color:#fff;font-size:%?30?%;text-align:center;overflow:hidden;word-break:break-all;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.content .Box1 .center .LimitBox[data-v-712c30be]{height:%?40?%;line-height:%?40?%;background:#4c464a;border-radius:%?6?%;font-size:12px;text-align:center}.content .Box1 .center .LimitBox .Limit[data-v-712c30be]{width:%?60?%;padding:0 %?10?%;border-radius:%?6?%;color:#010101;background-color:#f1e2bc}.content .Box1 .center .LimitBox .stock[data-v-712c30be]{padding:0 %?10?%;color:#f1e2bc}.content .banner[data-v-712c30be]{width:100%;height:%?500?%;background-color:#23272c}.content .banner .uni-swiper-wrapper[data-v-712c30be]{z-index:10}.content .banner uni-image[data-v-712c30be]{width:100%;height:%?500?%}.content .msgBox[data-v-712c30be]{background-color:#fff;padding:%?20?%;margin:0 %?30?%;border-radius:%?10?%;box-shadow:%?0?% %?0?% %?15?% %?6?% rgba(52,52,52,.1)}.content .msgBox .goodsName[data-v-712c30be]{color:#fff;font-size:%?36?%;font-weight:500;margin-bottom:%?20?%}.content .msgBox .category_name[data-v-712c30be]{height:%?40?%;line-height:%?40?%;font-size:%?22?%;padding:0 %?15?%;background:#f1e2bc;border-radius:%?6?%;color:#1e1817;margin-right:%?20?%}.content .msgBox .number[data-v-712c30be]{height:%?40?%;line-height:%?40?%;padding:0 %?15?%;border-radius:%?20?%;background-color:#ffdd9d;color:#8a683a;font-size:%?20?%;font-weight:500}.content .msgBox .describe[data-v-712c30be]{color:#666;font-size:%?26?%;line-height:%?38?%;font-weight:500;margin-top:%?20?%}.content .msgBox .priceBox[data-v-712c30be]{color:#000;font-size:%?24?%;font-weight:500}.content .msgBox .priceBox uni-text[data-v-712c30be]{font-weight:500;font-size:%?36?%;margin-left:%?10?%}.content .msgBox .rule[data-v-712c30be]{background:#fff;border-radius:%?20?%;padding:%?20?%;color:#777;font-size:%?24?%;line-height:%?34?%;margin-top:%?20?%;box-shadow:0 0 %?15?% %?6?% rgba(52,52,52,.1);border-radius:%?10?%}.content .msgBox .rule .rule1[data-v-712c30be]{color:#000;margin-bottom:%?10?%}.content .descBox[data-v-712c30be]{margin:0 %?30?%;padding:%?20?% %?30?%;background-color:#fff;color:#aaa;box-shadow:0 0 %?15?% %?6?% rgba(52,52,52,.1);border-radius:%?10?%}.content .descBox .item[data-v-712c30be]{font-size:%?26?%;font-weight:500;color:#000;margin-bottom:%?10?%}.content .goodsinfo[data-v-712c30be]{padding:0 %?30?%;background-color:#fff;margin:%?20?% %?30?%;box-shadow:0 0 %?15?% %?6?% rgba(52,52,52,.1);border-radius:%?10?%}.content .goodsinfo .iptBox[data-v-712c30be]{padding:%?20?% 0;border-bottom:%?1?% solid #f0f0f0}.content .goodsinfo .iptBox .label[data-v-712c30be]{width:20%;font-size:%?24?%;color:0}.content .goodsinfo .iptBox .center[data-v-712c30be]{width:75%;color:#aaa;font-size:%?24?%;word-break:break-word;display:flow-root}.content .goodsinfo .iptBox .copy[data-v-712c30be]{width:%?44?%;height:%?44?%;display:inline-block}.content .tech-tip[data-v-712c30be]{margin-top:%?30?%;display:flex;justify-content:center}.content .tech-tip uni-image[data-v-712c30be]{width:%?427?%;height:%?42?%}.content .footerBox[data-v-712c30be]{position:fixed;left:0;bottom:0;z-index:100;width:100%;height:%?120?%;background-color:#fff;box-shadow:%?0?% %?-4?% %?32?% %?0?% hsla(0,0%,70.6%,.5)}.content .footerBox .price[data-v-712c30be]{color:#000;font-size:%?40?%;margin-left:%?30?%}.content .footerBox .count[data-v-712c30be]{color:#777;font-size:%?28?%;margin-left:%?30?%}.content .footerBox .subBtn[data-v-712c30be]{width:%?360?%;height:%?88?%;line-height:%?88?%;text-align:center;font-size:%?30?%;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:#333;font-weight:500;background:#00db7d;border-radius:%?44?%;margin-right:%?30?%}.content .footerBox .subnrn1[data-v-712c30be]{background:#8c8c8c}",""]),t.exports=e},ac37:function(t,e,i){t.exports=i.p+"static/img/b2.a1ea860b.png"},b491:function(t,e,i){t.exports=i.p+"static/img/bg.0b0dc05b.jpg"},e090:function(t,e,i){"use strict";var n=i("0b79"),o=i.n(n);o.a},f4fb:function(t,e,i){t.exports=i.p+"static/img/tect-tip.b5d44657.png"}}]);