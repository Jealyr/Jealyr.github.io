webpackJsonp([6],{"2sLL":function(t,e,i){"use strict";var n=i("0FxO"),s=(Boolean,Boolean,Boolean,String,String,Boolean,String,Object,Array,{name:"x-button",props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String,actionType:String,showLoading:Boolean,link:[String,Object],gradients:{type:Array,validator:function(t){return 2===t.length}}},methods:{onClick:function(){!this.disabled&&Object(n.a)(this.link,this.$router)}},computed:{noBorder:function(){return Array.isArray(this.gradients)},buttonStyle:function(){if(this.gradients)return{background:"linear-gradient(90deg, "+this.gradients[0]+", "+this.gradients[1]+")",color:"#FFFFFF"}},classes:function(){return[{"weui-btn_disabled":!this.plain&&this.disabled,"weui-btn_plain-disabled":this.plain&&this.disabled,"weui-btn_mini":this.mini,"vux-x-button-no-border":this.noBorder},this.plain?"":"weui-btn_"+this.type,this.plain?"weui-btn_plain-"+this.type:"",this.showLoading?"weui-btn_loading":""]}}}),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"weui-btn",class:t.classes,style:t.buttonStyle,attrs:{disabled:t.disabled,type:t.actionType},on:{click:t.onClick}},[t.showLoading?i("i",{staticClass:"weui-loading"}):t._e(),t._v(" "),t._t("default",[t._v(t._s(t.text))])],2)},staticRenderFns:[]};var r=i("VU/8")(s,a,!1,function(t){i("S7m8")},null,null);e.a=r.exports},S7m8:function(t,e){},XWS1:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("+zLN");var n=i("2sLL"),s=i("aTeQ"),a=i("mzja"),r=i("1DHf"),l=i("rHil"),o=(a.a,r.a,l.a,s.a,n.a,{name:"Setting",components:{Alert:a.a,Cell:r.a,Group:l.a,XSwitch:s.a,XButton:n.a},methods:{logout:function(){sessionStorage.removeItem("userid"),this.$router.push("/Account")}}}),u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"setting"},[i("div",{staticClass:"setting-header row"},[i("router-link",{attrs:{to:"/Account"}},[i("svg",{staticClass:"vux-x-icon vux-x-icon-ios-arrow-left setting-header-icon",attrs:{type:"ios-arrow-left",size:"26",xmlns:"http://www.w3.org/2000/svg",width:"26",height:"26",viewBox:"0 0 512 512"}},[i("path",{attrs:{d:"M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"}})])]),t._v(" "),i("p",[t._v("系统设置")])],1),t._v(" "),i("div",{staticClass:"setting-body"},[i("group",{attrs:{gutter:"12px"}},[i("cell",{attrs:{title:t.$t("账号设置")}}),t._v(" "),i("cell",{attrs:{title:t.$t("账号和隐私设置")}}),t._v(" "),i("cell",{attrs:{title:t.$t("黑名单")}})],1),t._v(" "),i("group",{attrs:{gutter:"12px"}},[i("cell",{attrs:{title:t.$t("清除缓存")}}),t._v(" "),i("cell",{attrs:{title:t.$t("字体大小"),"is-link":""}}),t._v(" "),i("x-switch",{attrs:{title:t.$t("列表显示摘要")}}),t._v(" "),i("cell",{attrs:{title:t.$t("非wif网络流量"),value:t.$t("最佳效果（下载大图）")}}),t._v(" "),i("cell",{attrs:{title:t.$t("非wifi网络播放提醒"),value:t.$t("提醒一次")}}),t._v(" "),i("x-switch",{attrs:{title:t.$t("推送通知")}})],1),t._v(" "),i("group",{attrs:{gutter:"12px"}},[i("cell",{attrs:{title:t.$t("头条封面")}}),t._v(" "),i("cell",{attrs:{title:t.$t("当前版本")}})],1),t._v(" "),i("x-button",{staticClass:"setting-logout",nativeOn:{click:function(e){return t.logout(e)}}},[t._v("退出登录")])],1)])},staticRenderFns:[]};var c=i("VU/8")(o,u,!1,function(t){i("ty1g")},"data-v-666ee4f2",null);e.default=c.exports},ty1g:function(t,e){}});
//# sourceMappingURL=6.b884a668f58f40089ffa.js.map