(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-myArtDetail"],{"0257":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={uniPopup:n("54d6").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"bigbox"},[a("v-uni-view",{staticClass:"Box"},[a("v-uni-view",{staticClass:"rotateBox",style:"background-image: url("+t.info.image+");background-size: 100% 100%"},[a("v-uni-image",{staticClass:"image",attrs:{src:n("3cf1")}})],1)],1),a("v-uni-view",{staticClass:"Box1"},[a("v-uni-image",{staticClass:"img",attrs:{src:n("2bd1"),mode:""}}),a("v-uni-view",{staticClass:"center"},[a("v-uni-view",{staticClass:"goodsName"},[t._v(t._s(t.info.name))])],1),a("v-uni-image",{staticClass:"img",attrs:{src:n("ac37"),mode:""}})],1)],1),a("v-uni-view",{staticClass:"msgBox"},[a("v-uni-view",{staticClass:"priceBox"},[t._v("当前价:"),a("v-uni-text",[t._v("¥"+t._s(t.info.price))])],1),a("v-uni-view",{staticClass:"describe"},[t._v(t._s(t.info.title))])],1),a("v-uni-view",{staticClass:"goodsinfo"},[a("v-uni-view",{staticClass:"iptBox  flexBox"},[a("v-uni-view",{staticClass:"label"},[t._v("创作者")]),a("v-uni-view",{staticClass:"center"},[t._v(t._s(t.info.creator))])],1),a("v-uni-view",{staticClass:"iptBox  flexBox"},[a("v-uni-view",{staticClass:"label"},[t._v("编号")]),a("v-uni-view",{staticClass:"center"},[t._v(t._s(t.info.goods_number))])],1),a("v-uni-view",{staticClass:"iptBox flexBox"},[a("v-uni-view",{staticClass:"label"},[t._v("拥有者")]),a("v-uni-view",{staticClass:"center"},[a("v-uni-text",[t._v(t._s(t.info.owner))]),a("v-uni-image",{staticClass:"copy",attrs:{src:n("8ca6"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copy(t.info.owner)}}})],1)],1),a("v-uni-view",{staticClass:"iptBox iptBox1 flexBox"},[a("v-uni-view",{staticClass:"label"},[t._v("铸造平台")]),a("v-uni-view",{staticClass:"center"},[t._v(t._s(t.info.casting_name))])],1),a("v-uni-view",{staticClass:"iptBox iptBox1 flexBox"},[a("v-uni-view",{staticClass:"label"},[t._v("铸造时间")]),a("v-uni-view",{staticClass:"center"},[t._v(t._s(t.info.casting_time))])],1),t.info.number?a("v-uni-view",{staticClass:"iptBox iptBox1 flexBox"},[a("v-uni-view",{staticClass:"label"},[t._v("藏品编号")]),a("v-uni-view",{staticClass:"center"},[t._v(t._s(t.info.number))])],1):t._e(),a("v-uni-view",{staticClass:"iptBox iptBox1 flexBox"},[a("v-uni-view",{staticClass:"label"},[t._v("交易哈希")]),a("v-uni-view",{staticClass:"center"},[t._v(t._s(t.info.blockchain)),a("v-uni-image",{staticClass:"copy",attrs:{src:n("8ca6"),mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copy(t.info.blockchain)}}})],1)],1)],1),t.info.content?a("v-uni-view",{staticClass:"descBox"},[a("v-uni-view",{staticClass:"item"},[t._v("藏品介绍")]),a("v-uni-view",{staticClass:"desinfo",domProps:{innerHTML:t._s(t.util.checkImg(t.info.content))}})],1):t._e(),a("v-uni-view",{staticClass:"footerBox flex_bt"},[t.btnflag||1==t.rank?a("v-uni-view",{staticClass:"subBtn subBtn1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openSalePopup()}}},[t._v("出 售")]):t._e(),a("v-uni-view",{staticClass:"subBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openTransferPopup()}}},[t._v("转 赠")])],1),a("uni-popup",{ref:"salePopup",attrs:{type:"center","mask-click":!1}},[a("v-uni-view",{staticClass:"specs_boxs"},[a("v-uni-view",{staticClass:"flex"},[a("v-uni-input",{staticClass:"ipt",attrs:{type:"digit","placeholder-class":"iptP",placeholder:"请输入出售价格"},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1),a("v-uni-view",{staticClass:"btnBox flex"},[a("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeSalePopup()}}},[t._v("取消")]),a("v-uni-view",{staticClass:"btn btn1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sale()}}},[t._v("确定")])],1)],1)],1),a("uni-popup",{ref:"TransferPopup",attrs:{type:"center","mask-click":!1}},[a("v-uni-view",{staticClass:"specs_boxs"},[a("v-uni-view",{staticClass:"flex"},[a("v-uni-input",{staticClass:"ipt",attrs:{type:"number","placeholder-class":"iptP",placeholder:"请输入受赠人手机号码"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),a("v-uni-view",{staticClass:"btnBox flex"},[a("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeTransferPopup()}}},[t._v("取消")]),a("v-uni-view",{staticClass:"btn btn1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.Transfer()}}},[t._v("确定")])],1)],1)],1),a("v-uni-view",{staticClass:"tech-tip"},[a("v-uni-image",{attrs:{src:n("f4fb"),mode:""}})],1)],1)},o=[]},1242:function(t,e,n){"use strict";var a=n("4d23"),i=n.n(a);i.a},"2bd1":function(t,e,n){t.exports=n.p+"static/img/b1.b9ddb0cd.png"},"2db1":function(t,e,n){var a=n("24fb"),i=n("1de5"),o=n("b491"),s=n("7c20"),c=n("8245");e=a(!1);var r=i(o),d=i(s),l=i(c);e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 颜色变量 */\n/*  常用字体颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-textarea[data-v-cca24088]{background-color:#f8f8f8;width:%?650?%;height:%?130?%;display:block;position:relative;font-size:%?28?%;line-height:normal;white-space:pre-wrap;word-break:break-all;padding:%?20?%;color:#777;border-radius:%?10?%}@-webkit-keyframes myfirst-data-v-cca24088{0%{-webkit-transform:rotatey(0deg);transform:rotatey(0deg)}25%{-webkit-transform:rotatey(90deg);transform:rotatey(90deg)}50%{-webkit-transform:rotatey(180deg);transform:rotatey(180deg)}75%{-webkit-transform:rotatey(270deg);transform:rotatey(270deg)}100%{-webkit-transform:rotatey(1turn);transform:rotatey(1turn)}}@keyframes myfirst-data-v-cca24088{0%{-webkit-transform:rotatey(0deg);transform:rotatey(0deg)}25%{-webkit-transform:rotatey(90deg);transform:rotatey(90deg)}50%{-webkit-transform:rotatey(180deg);transform:rotatey(180deg)}75%{-webkit-transform:rotatey(270deg);transform:rotatey(270deg)}100%{-webkit-transform:rotatey(1turn);transform:rotatey(1turn)}}.content[data-v-cca24088]{padding-bottom:%?200?%}.content .bigbox[data-v-cca24088]{background:url('+r+") no-repeat 0 0;background-size:100%;background-color:#000}.content .Box[data-v-cca24088]{width:100%;height:%?680?%;padding-bottom:%?50?%;background:url("+d+") no-repeat 0 0;background-size:100%;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;perspective:1000;-webkit-perspective:1000}.content .Box .rotateBox[data-v-cca24088]{width:%?540?%;height:%?540?%;-webkit-animation:myfirst-data-v-cca24088 10s linear .15s 100;animation:myfirst-data-v-cca24088 10s linear .15s 100}.content .Box .rotateBox .image[data-v-cca24088]{width:%?540?%;height:%?540?%}.content .Box1[data-v-cca24088]{width:100%;height:%?360?%;margin-top:%?-120?%;padding-bottom:%?30?%;background:url("+l+") no-repeat top;background-size:%?620?%;display:flex;justify-content:center;align-items:flex-end}.content .Box1 .img[data-v-cca24088]{width:%?84?%;height:%?152?%;margin:0 %?15?%}.content .Box1 .center[data-v-cca24088]{max-width:%?500?%;height:%?152?%;display:flex;flex-direction:column;justify-content:space-around;align-items:center}.content .Box1 .center .goodsName[data-v-cca24088]{color:#fff;font-size:%?30?%;text-align:center;overflow:hidden;word-break:break-all;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.content .Box1 .center .LimitBox[data-v-cca24088]{height:%?40?%;line-height:%?40?%;background:#4c464a;border-radius:%?6?%;font-size:12px;text-align:center}.content .Box1 .center .LimitBox .Limit[data-v-cca24088]{width:%?60?%;padding:0 %?10?%;border-radius:%?6?%;color:#010101;background-color:#f1e2bc}.content .Box1 .center .LimitBox .stock[data-v-cca24088]{padding:0 %?10?%;color:#f1e2bc}.content .specs_boxs[data-v-cca24088]{padding:%?50?% 0 %?10?%;width:%?600?%;background:#fff;border-radius:%?12?%;margin:0 auto}.content .specs_boxs .ipt[data-v-cca24088]{flex:1;height:%?100?%;line-height:%?100?%;font-size:%?28?%;font-weight:500;color:#333;background-color:#f8f8f8;padding-left:%?30?%;margin:0 %?30?%}.content .specs_boxs .iptP[data-v-cca24088]{color:#777;font-weight:400}.content .specs_boxs .btnBox[data-v-cca24088]{margin-top:%?20?%}.content .specs_boxs .btnBox .btn[data-v-cca24088]{flex:1;height:%?80?%;line-height:%?80?%;text-align:center;font-size:%?30?%}.content .specs_boxs .btnBox .btn1[data-v-cca24088]{color:#ae3523}.content .banner[data-v-cca24088]{width:100%;height:%?500?%;background-color:#23272c}.content .banner .uni-swiper-wrapper[data-v-cca24088]{z-index:10}.content .banner uni-image[data-v-cca24088]{width:100%;height:%?500?%}.content .msgBox[data-v-cca24088]{margin:0 %?30?%;background-color:#fff;padding:%?30?%;box-shadow:0 0 %?15?% %?6?% rgba(52,52,52,.1);border-radius:%?10?%}.content .msgBox .goodsName[data-v-cca24088]{color:#fff;font-size:%?36?%;font-weight:500;margin-bottom:%?20?%}.content .msgBox .describe[data-v-cca24088]{color:#666;font-size:%?24?%;line-height:%?36?%;font-weight:500;margin-top:%?20?%}.content .msgBox .priceBox[data-v-cca24088]{color:#000;font-size:%?24?%;font-weight:500}.content .msgBox .priceBox uni-text[data-v-cca24088]{font-weight:500;font-size:%?36?%;margin-left:%?10?%}.content .descBox[data-v-cca24088]{padding:%?20?% %?30?%;color:#aaa;margin:0 %?30?%;box-shadow:0 0 %?15?% %?6?% rgba(52,52,52,.1);border-radius:%?10?%}.content .descBox .item[data-v-cca24088]{font-size:%?26?%;font-weight:500;color:#000;margin-bottom:%?10?%}.content .goodsinfo[data-v-cca24088]{padding:0 %?20?%;margin:%?20?% %?30?%;box-shadow:0 0 %?15?% %?6?% rgba(52,52,52,.1);border-radius:%?10?%}.content .goodsinfo .iptBox[data-v-cca24088]{padding:%?20?% 0;border-bottom:%?1?% solid #f0f0f0}.content .goodsinfo .iptBox .label[data-v-cca24088]{width:20%;font-size:%?24?%;color:#666}.content .goodsinfo .iptBox .center[data-v-cca24088]{width:75%;color:#333;font-size:%?24?%;word-break:break-word;line-height:%?44?%;position:relative;justify-content:left}.content .goodsinfo .iptBox .copy[data-v-cca24088]{width:%?44?%;height:%?44?%;position:absolute;bottom:0;right:0}.content .goodsinfo .iptBox1 .center[data-v-cca24088]{color:#aaa;font-weight:500}.content .footerBox[data-v-cca24088]{position:fixed;left:0;bottom:0;z-index:10;width:100%;height:%?120?%;background-color:#fff;box-shadow:%?0?% %?-4?% %?32?% %?0?% hsla(0,0%,70.6%,.5)}.content .footerBox .subBtn[data-v-cca24088]{width:%?320?%;height:%?88?%;line-height:%?88?%;text-align:center;color:#fff;font-size:%?32?%;font-weight:500;background:#00db7d;border-radius:%?44?%;margin:0 %?30?%}.content .footerBox .subBtn1[data-v-cca24088]{background:#fff;color:#00db7d;border:%?2?% solid #00db7d}.content .tech-tip[data-v-cca24088]{margin-top:%?30?%;display:flex;justify-content:center}.content .tech-tip uni-image[data-v-cca24088]{width:%?427?%;height:%?42?%}",""]),t.exports=e},3458:function(t,e,n){"use strict";n.r(e);var a=n("0257"),i=n("99c9");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("1242");var s,c=n("f0c5"),r=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"cca24088",null,!1,a["a"],s);e["default"]=r.exports},"4d23":function(t,e,n){var a=n("2db1");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("04c29c28",a,!0,{sourceMap:!1,shadowMode:!1})},8245:function(t,e,n){t.exports=n.p+"static/img/bj2.f97a4992.png"},"8ca6":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAAiRJREFUWEftmD1vE0EQht/ZO3CHFBokeoTSUoQK6JAooNuxLZeQgiKpQgdUUEHFhyigobDs7LqkxpCOFFDmHyAhF1GKSBjrbtAiBzmnM769+IQNO+3szjzz7uze6AhLZrRkvAjAVZ9YUDgonFHg/2qJbre7qpRqi8gqkXftXwDcYOYDnzbyzjIZ3BhjAGifhJm1uwCu+0CfFPgjgKsAXgHYLgpORBdE5CWA0wC8oOcCTET3tNZPiwK7dcaYWwCsL/RJgXcAXCkDnAO9wcwvZhVdGLjdbq/UarW1JEncMf4ypdQZETlFRIdpmn7PS+Z8zPx+Gogx5hOANSLa1Fo/nwtwp9M5H0XRZwDnZgXM84vIo3q9/iDPVwmwtfaOiLwGMCKi/aLQIhIDOOvWT4OuCnhDRJ65G83Mlz2AyVrrCr09DXqhgMeQx6AB3Gfmx0dFLxzwEXSv19sWEfeR2WHmawsN7OCstVsi8iQA510oa22pSzcZKyj8p6cqKBxeiUx/hJZYtpZQSr0Tka3xV3AFgBtR17XWb2bNKYXm4Xm3BIAPAB5OwH1LkuRSs9n8upDAcRyvj0ajiw4uiqIfw+Fwt9VqFRpb/4rCk8PPLEWz/n8eeA/AXV9Vxuvr473HxkvfWEUV1iLifprMwywzc9lAhYD7/X48GAzeArjpnqAyyUQERLSXpmmr0Wi4kyplhYBLRa5oUwCuSNjfYYPCQeGMAqElqm6Jn1X+8DxdPqDIAAAAAElFTkSuQmCC"},"99c9":function(t,e,n){"use strict";n.r(e);var a=n("c6f0"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},ac37:function(t,e,n){t.exports=n.p+"static/img/b2.a1ea860b.png"},b491:function(t,e,n){t.exports=n.p+"static/img/bg.0b0dc05b.jpg"},c6f0:function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=a(n("1da1")),o={data:function(){return{goodsId:"",banner:{},info:{},price:"",saleFlag:!1,phone:"",TransferFlag:!1,btnflag:!1,rank:null}},onLoad:function(t){this.rank=uni.getStorageSync("rank"),this.goodsId=t.goodsId,this.getData(),this.getflag()},methods:{getflag:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.get("order/ej");case 3:n=e.sent,1==n?t.btnflag=!0:0==n&&(t.btnflag=!1),e.next=9;break;case 7:e.prev=7,e.t0=e["catch"](0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))()},openTransferPopup:function(){this.TransferFlag=!0,this.saleFlag&&this.closeSalePopup(),this.$refs.TransferPopup.open()},closeTransferPopup:function(){this.phone="",this.TransferFlag=!1,this.$refs.TransferPopup.close()},Transfer:function(){var t=this;if(this.phone){var e={id:this.goodsId,target_phone:this.phone};this.$http.post("order/transfer",e).then((function(e){1==e.code?(t.toast(e.msg),t.closeTransferPopup(),setTimeout((function(){uni.navigateBack({delta:1})}),1200)):t.toast(e.msg)}))}else this.toast("请输入受赠人手机号码")},openSalePopup:function(){this.price=this.info.price,this.saleFlag=!0,this.TransferFlag&&this.closeTransferPopup(),this.$refs.salePopup.open()},closeSalePopup:function(){this.price="",this.saleFlag=!1,this.$refs.salePopup.close()},sale:function(){var t=this;if(this.price){var e={id:this.goodsId,price:this.price};this.$http.post("order/sales",e).then((function(e){1==e.code?(t.toast(e.msg),t.closeSalePopup(),setTimeout((function(){uni.navigateBack({delta:1})}),1200)):t.toast(e.msg)}))}else this.toast("请输入出售价格")},pay:function(){this.go("orderMakeSure?goodsId="+this.goodsId)},getData:function(){var t=this;this.$http.get("order/collectionDetail",{id:this.goodsId}).then((function(e){1==e.code&&(t.banner=e.data.images,t.info=e.data)}))}}};e.default=o},f4fb:function(t,e,n){t.exports=n.p+"static/img/tect-tip.b5d44657.png"}}]);