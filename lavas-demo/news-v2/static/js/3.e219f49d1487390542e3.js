webpackJsonp([3],{516:function(e,t,a){function n(e){a(563),a(565)}var o=a(33)(a(567),a(568),n,"data-v-8e705804",null);e.exports=o.exports},563:function(e,t,a){var n=a(564);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(510)("788fe001",n,!0,{})},564:function(e,t,a){t=e.exports=a(509)(!0),t.push([e.i,".favor-list-header[data-v-8e705804]{height:52px;line-height:52px;background:#2874f0;color:#fff;font-size:1.2em;padding-right:10px;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px rgba(0,0,0,.14),0 1px 10px rgba(0,0,0,.12)}.favor-list-header .delete[data-v-8e705804]{float:right;line-height:inherit}.favor-list-content[data-v-8e705804]{list-style:none;padding:0 0 52px;overflow-y:auto;height:100%}.favor-list-item[data-v-8e705804]{position:relative;padding:10px;display:flex}.favor-list-item>div[data-v-8e705804]{flex:auto;overflow:hidden}.favor-list-item p[data-v-8e705804]{margin:0}.favor-list-item .news-title[data-v-8e705804]{font-size:1.3em;color:#333;margin-bottom:5px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.favor-list-item .news-date[data-v-8e705804]{font-size:.9em;color:#999}.favor-list-item .news-delete[data-v-8e705804]{color:#e5e5e5;flex:none;margin-right:10px}.favor-list-null[data-v-8e705804]{padding-top:50px;font-size:1.2em;color:#888;text-align:center}.favor-item-fold-enter-active[data-v-8e705804],.favor-item-fold-leave-active[data-v-8e705804]{transition:all .7s}.favor-item-fold-enter[data-v-8e705804],.favor-item-fold-leave-to[data-v-8e705804]{opacity:0;transform:translateY(30px)}","",{version:3,sources:["/Users/baidu/work/lavas/lavas-demo-news/src/pages/Favor.vue"],names:[],mappings:"AACA,oCACE,YAAa,AACb,iBAAkB,AAClB,mBAAoB,AACpB,WAAY,AACZ,gBAAiB,AACjB,mBAAoB,AACpB,6FAAoG,CACrG,AACD,4CACE,YAAa,AACb,mBAAqB,CACtB,AACD,qCACE,gBAAiB,AACjB,iBAAoB,AACpB,gBAAiB,AACjB,WAAa,CACd,AACD,kCACE,kBAAmB,AACnB,aAAc,AACd,YAAc,CACf,AACD,sCACE,UAAW,AACX,eAAiB,CAClB,AACD,oCACE,QAAU,CACX,AACD,8CACE,gBAAiB,AACjB,WAAY,AACZ,kBAAmB,AACnB,gBAAiB,AACjB,mBAAoB,AACpB,sBAAwB,CACzB,AACD,6CACE,eAAiB,AACjB,UAAY,CACb,AACD,+CACE,cAAe,AACf,UAAW,AACX,iBAAmB,CACpB,AACD,kCACE,iBAAkB,AAClB,gBAAiB,AACjB,WAAY,AACZ,iBAAmB,CACpB,AACD,8FAEE,kBAAqB,CACtB,AACD,mFAEE,UAAW,AACX,0BAA4B,CAC7B",file:"Favor.vue",sourcesContent:["\n.favor-list-header[data-v-8e705804] {\n  height: 52px;\n  line-height: 52px;\n  background: #2874f0;\n  color: #fff;\n  font-size: 1.2em;\n  padding-right: 10px;\n  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12);\n}\n.favor-list-header .delete[data-v-8e705804] {\n  float: right;\n  line-height: inherit;\n}\n.favor-list-content[data-v-8e705804] {\n  list-style: none;\n  padding: 0 0 52px 0;\n  overflow-y: auto;\n  height: 100%;\n}\n.favor-list-item[data-v-8e705804] {\n  position: relative;\n  padding: 10px;\n  display: flex;\n}\n.favor-list-item >div[data-v-8e705804] {\n  flex: auto;\n  overflow: hidden;\n}\n.favor-list-item p[data-v-8e705804] {\n  margin: 0;\n}\n.favor-list-item .news-title[data-v-8e705804] {\n  font-size: 1.3em;\n  color: #333;\n  margin-bottom: 5px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.favor-list-item .news-date[data-v-8e705804] {\n  font-size: 0.9em;\n  color: #999;\n}\n.favor-list-item .news-delete[data-v-8e705804] {\n  color: #e5e5e5;\n  flex: none;\n  margin-right: 10px;\n}\n.favor-list-null[data-v-8e705804] {\n  padding-top: 50px;\n  font-size: 1.2em;\n  color: #888;\n  text-align: center;\n}\n.favor-item-fold-enter-active[data-v-8e705804],\n.favor-item-fold-leave-active[data-v-8e705804] {\n  transition: all 0.7s;\n}\n.favor-item-fold-enter[data-v-8e705804],\n.favor-item-fold-leave-to[data-v-8e705804] {\n  opacity: 0;\n  transform: translateY(30px);\n}"],sourceRoot:""}])},565:function(e,t,a){var n=a(566);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(510)("fdea4972",n,!0,{})},566:function(e,t,a){t=e.exports=a(509)(!0),t.push([e.i,".shaking{animation:shake .3s infinite}@-moz-keyframes shake{0%{transform:rotate(0deg)}25%{transform:rotate(20deg)}50%{transform:rotate(0deg)}75%{transform:rotate(-20deg)}to{transform:rotate(0deg)}}@-webkit-keyframes shake{0%{transform:rotate(0deg)}25%{transform:rotate(20deg)}50%{transform:rotate(0deg)}75%{transform:rotate(-20deg)}to{transform:rotate(0deg)}}@-o-keyframes shake{0%{transform:rotate(0deg)}25%{transform:rotate(20deg)}50%{transform:rotate(0deg)}75%{transform:rotate(-20deg)}to{transform:rotate(0deg)}}@keyframes shake{0%{transform:rotate(0deg)}25%{transform:rotate(20deg)}50%{transform:rotate(0deg)}75%{transform:rotate(-20deg)}to{transform:rotate(0deg)}}","",{version:3,sources:["/Users/baidu/work/lavas/lavas-demo-news/src/pages/Favor.vue"],names:[],mappings:"AACA,SACE,4BAA+B,CAChC,AACD,sBACA,GACI,sBAAwB,CAC3B,AACD,IACI,uBAAyB,CAC5B,AACD,IACI,sBAAwB,CAC3B,AACD,IACI,wBAA0B,CAC7B,AACD,GACI,sBAAwB,CAC3B,CACA,AACD,yBACA,GACI,sBAAwB,CAC3B,AACD,IACI,uBAAyB,CAC5B,AACD,IACI,sBAAwB,CAC3B,AACD,IACI,wBAA0B,CAC7B,AACD,GACI,sBAAwB,CAC3B,CACA,AACD,oBACA,GACI,sBAAwB,CAC3B,AACD,IACI,uBAAyB,CAC5B,AACD,IACI,sBAAwB,CAC3B,AACD,IACI,wBAA0B,CAC7B,AACD,GACI,sBAAwB,CAC3B,CACA,AACD,iBACA,GACI,sBAAwB,CAC3B,AACD,IACI,uBAAyB,CAC5B,AACD,IACI,sBAAwB,CAC3B,AACD,IACI,wBAA0B,CAC7B,AACD,GACI,sBAAwB,CAC3B,CACA",file:"Favor.vue",sourcesContent:["\n.shaking {\n  animation: shake 0.3s infinite;\n}\n@-moz-keyframes shake {\n0% {\n    transform: rotate(0deg);\n}\n25% {\n    transform: rotate(20deg);\n}\n50% {\n    transform: rotate(0deg);\n}\n75% {\n    transform: rotate(-20deg);\n}\n100% {\n    transform: rotate(0deg);\n}\n}\n@-webkit-keyframes shake {\n0% {\n    transform: rotate(0deg);\n}\n25% {\n    transform: rotate(20deg);\n}\n50% {\n    transform: rotate(0deg);\n}\n75% {\n    transform: rotate(-20deg);\n}\n100% {\n    transform: rotate(0deg);\n}\n}\n@-o-keyframes shake {\n0% {\n    transform: rotate(0deg);\n}\n25% {\n    transform: rotate(20deg);\n}\n50% {\n    transform: rotate(0deg);\n}\n75% {\n    transform: rotate(-20deg);\n}\n100% {\n    transform: rotate(0deg);\n}\n}\n@keyframes shake {\n0% {\n    transform: rotate(0deg);\n}\n25% {\n    transform: rotate(20deg);\n}\n50% {\n    transform: rotate(0deg);\n}\n75% {\n    transform: rotate(-20deg);\n}\n100% {\n    transform: rotate(0deg);\n}\n}"],sourceRoot:""}])},567:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(90),o=a.n(n),A=a(50),r=a.n(A),s=a(51),i=a(130);t.default={name:"favor",data:function(){return{showDelete:!1,action:{toggleIcon:"delete_forever",toggle:!0,toggleHandler:"toggleDelete",toggleClassObj:{shaking:!1}}}},computed:r()({},Object(s.d)({newsFavorList:function(e){return e.favor.newsFavorList}})),methods:r()({},Object(s.b)(["removeFavorItem"]),Object(s.b)("appShell/appHeader",["setAppHeader"]),{closeAndGo:function(e,t){if(this.showDelete)return void(-1!==t.target.className.indexOf("news-delete")&&this.removeItem(e));this.$router.push("/detail/"+e)},removeItem:function(e){this.removeFavorItem({nid:e})},toggleDelete:function(e){this.showDelete=void 0!==e?e:!this.showDelete,o()(this.action.toggleClassObj,{shaking:this.showDelete}),this.setAppHeader({actions:[this.action]})}}),created:function(){var e=this;i.a.$on("app-header:click-toggle",function(t){e[t.handler]&&e[t.handler]()})},activated:function(){this.setAppHeader({show:!0,title:"收藏夹",showMenu:!1,showBack:!0,showLogo:!1,actions:[this.action]})},deactivated:function(){this.toggleDelete(!1)}}},568:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"favor-list-wrapper"},[a("div",{staticClass:"favor-list-container"},[e.newsFavorList&&e.newsFavorList.length>0?a("transition-group",{staticClass:"favor-list-content",attrs:{name:"favor-item-fold",tag:"ul"}},e._l(e.newsFavorList,function(t){return a("li",{directives:[{name:"ripple",rawName:"v-ripple",value:{class:"grey--text"},expression:"{class: 'grey--text'}"}],key:t.nid,staticClass:"favor-list-item",on:{click:function(a){a.stopPropagation(),e.closeAndGo(t.nid,a)}}},[e.showDelete?a("v-icon",{staticClass:"news-delete"},[e._v("highlight_off")]):e._e(),e._v(" "),a("div",[a("p",{staticClass:"news-title"},[e._v(e._s(t.title))]),e._v(" "),a("p",{staticClass:"news-date"},[e._v("收藏时间："+e._s(e._f("dateFormat")(t.time,"yyyy年M月d日 h时m分")))])])],1)})):a("div",{staticClass:"favor-list-null"},[a("span",[e._v("这里空空的")])])],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=3.e219f49d1487390542e3.js.map