webpackJsonp([1],{"9bBU":function(t,e,i){i("mClu");var s=i("FeBl").Object;t.exports=function(t,e,i){return s.defineProperty(t,e,i)}},C4MV:function(t,e,i){t.exports={default:i("9bBU"),__esModule:!0}},FRuO:function(t,e){},Zrlr:function(t,e,i){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},aRqR:function(t,e){},j7e0:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=s("Dd8w"),o=s.n(n),r=s("piuB"),a=(r.b,Number,String,String,String,String,Boolean,Function,String,Boolean,Number,String,{name:"tab",mixins:[r.b],mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.hasReady=!0},0)})},props:{lineWidth:{type:Number,default:3},activeColor:String,barActiveColor:String,defaultColor:String,disabledColor:String,animate:{type:Boolean,default:!0},customBarWidth:[Function,String],preventDefault:Boolean,scrollThreshold:{type:Number,default:4},barPosition:{type:String,default:"bottom",validator:function(t){return-1!==["bottom","top"].indexOf(t)}}},computed:{barLeft:function(){if(this.hasReady){var t=this.$refs.nav,e=this.scrollable?t.offsetWidth/this.$children[this.currentIndex||0].$el.getBoundingClientRect().width:this.number;return this.currentIndex*(100/e)+"%"}},barRight:function(){if(this.hasReady){var t=this.$refs.nav,e=this.scrollable?t.offsetWidth/this.$children[this.currentIndex||0].$el.getBoundingClientRect().width:this.number;return(e-this.currentIndex-1)*(100/e)+"%"}},innerBarStyle:function(){return{width:"function"==typeof this.customBarWidth?this.customBarWidth(this.currentIndex):this.customBarWidth,background:this.barActiveColor||this.activeColor}},barStyle:function(){var t={left:this.barLeft,right:this.barRight,display:"block",height:this.lineWidth+"px",transition:this.hasReady?null:"none"};return this.customBarWidth?t.background="transparent":t.background=this.barActiveColor||this.activeColor,t},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}},scrollable:function(){return this.number>this.scrollThreshold}},watch:{currentIndex:function(t,e){this.direction=t>e?"forward":"backward",this.$emit("on-index-change",t,e),this.hasReady&&this.scrollToActiveTab()}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}},methods:{scrollToActiveTab:function(){var t=this;if(this.scrollable&&this.$children&&this.$children.length){var e=this.$children[this.currentIndex].$el,i=0;window.requestAnimationFrame(function s(){var n=t.$refs.nav;n.scrollLeft+=(e.offsetLeft-(n.offsetWidth-e.offsetWidth)/2-n.scrollLeft)/15,++i<15&&window.requestAnimationFrame(s)})}}}}),l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab-wrap",class:"top"===t.barPosition?"vux-tab-bar-top":""},[i("div",{staticClass:"vux-tab-container"},[i("div",{ref:"nav",staticClass:"vux-tab",class:[{"vux-tab-no-animate":!t.animate},{scrollable:t.scrollable}]},[t._t("default"),t._v(" "),t.animate?i("div",{staticClass:"vux-tab-ink-bar",class:t.barClass,style:t.barStyle},[t.customBarWidth?i("span",{staticClass:"vux-tab-bar-inner",style:t.innerBarStyle}):t._e()]):t._e()],2)])])},staticRenderFns:[]};var c=s("VU/8")(a,l,!1,function(t){s("aRqR")},null,null).exports,h=(r.a,String,Boolean,String,String,String,{name:"tab-item",mixins:[r.a],props:{activeClass:String,disabled:Boolean,badgeBackground:{type:String,default:"#f74c31"},badgeColor:{type:String,default:"#fff"},badgeLabel:String},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.currentSelected?this.$parent.activeColor:this.disabled?this.$parent.disabledColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}),u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab-item",class:[t.currentSelected?t.activeClass:"",{"vux-tab-selected":t.currentSelected,"vux-tab-disabled":t.disabled}],style:t.style,on:{click:t.onItemClick}},[t._t("default"),t._v(" "),void 0!==t.badgeLabel&&""!==t.badgeLabel?i("span",{staticClass:"vux-tab-item-badge",style:{background:t.badgeBackground,color:t.badgeColor}},[t._v("\n  "+t._s(t.badgeLabel))]):t._e()],2)},staticRenderFns:[]},d=s("VU/8")(h,u,!1,null,null,null).exports,v=s("mvHQ"),f=s.n(v),p=s("Zrlr"),_=s.n(p),m=s("wxAW"),w=s.n(m),g=s("BEQ0"),x=s.n(g),b=function(t){return Array.prototype.slice.call(t)},y=function(){function t(e){if(_()(this,t),this._default={container:".vux-swiper",item:".vux-swiper-item",direction:"vertical",activeClass:"active",threshold:50,duration:300,auto:!1,loop:!1,interval:3e3,height:"auto",minMovingDistance:0},this._options=x()(this._default,e),this._options.height=this._options.height.replace("px",""),this._start={},this._move={},this._end={},this._eventHandlers={},this._prev=this._current=this._goto=0,this._width=this._height=this._distance=0,this._offset=[],this.$box=this._options.container,this.$container=this._options.container.querySelector(".vux-swiper"),this.$items=this.$container.querySelectorAll(this._options.item),this.count=this.$items.length,this.realCount=this.$items.length,this._position=[],this._firstItemIndex=0,this._isMoved=!1,this.count)return this._init(),this._auto(),this._bind(),this._onResize(),this}return w()(t,[{key:"_auto",value:function(){var t=this;t.stop(),t._options.auto&&(t.timer=setTimeout(function(){t.next()},t._options.interval))}},{key:"updateItemWidth",value:function(){this._width=this.$box.offsetWidth||document.documentElement.offsetWidth,this._distance="horizontal"===this._options.direction?this._width:this._height}},{key:"stop",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"_loop",value:function(){return this._options.loop&&this.realCount>=3}},{key:"_onResize",value:function(){var t=this;this.resizeHandler=function(){setTimeout(function(){t.updateItemWidth(),t._setOffset(),t._setTransform()},100)},window.addEventListener("orientationchange",this.resizeHandler,!1)}},{key:"_init",value:function(){this._height="auto"===this._options.height?"auto":this._options.height-0,this.updateItemWidth(),this._initPosition(),this._activate(this._current),this._setOffset(),this._setTransform(),this._loop()&&this._loopRender()}},{key:"_initPosition",value:function(){for(var t=0;t<this.realCount;t++)this._position.push(t)}},{key:"_movePosition",value:function(t){if(t>0){var e=this._position.splice(0,1);this._position.push(e[0])}else if(t<0){var i=this._position.pop();this._position.unshift(i)}}},{key:"_setOffset",value:function(){var t=this,e=t._position.indexOf(t._current);t._offset=[],b(t.$items).forEach(function(i,s){t._offset.push((s-e)*t._distance)})}},{key:"_setTransition",value:function(t){var e="none"===(t=t||this._options.duration||"none")?"none":t+"ms";b(this.$items).forEach(function(t,i){t.style.webkitTransition=e,t.style.transition=e})}},{key:"_setTransform",value:function(t){var e=this;t=t||0,b(e.$items).forEach(function(i,s){var n=e._offset[s]+t,o="translate3d("+n+"px, 0, 0)";"vertical"===e._options.direction&&(o="translate3d(0, "+n+"px, 0)"),i.style.webkitTransform=o,i.style.transform=o,e._isMoved=!0})}},{key:"_bind",value:function(){var t=this,e=this;e.touchstartHandler=function(t){e.stop(),e._start.x=t.changedTouches[0].pageX,e._start.y=t.changedTouches[0].pageY,e._setTransition("none"),e._isMoved=!1},e.touchmoveHandler=function(i){if(1!==e.count){e._move.x=i.changedTouches[0].pageX,e._move.y=i.changedTouches[0].pageY;var s=e._move.x-e._start.x,n=e._move.y-e._start.y,o=n,r=Math.abs(s)>Math.abs(n);"horizontal"===e._options.direction&&r&&(o=s),t._options.loop||t._current!==t.count-1&&0!==t._current||(o/=3),((e._options.minMovingDistance&&Math.abs(o)>=e._options.minMovingDistance||!e._options.minMovingDistance)&&r||e._isMoved)&&e._setTransform(o),r&&i.preventDefault()}},e.touchendHandler=function(t){if(1!==e.count){e._end.x=t.changedTouches[0].pageX,e._end.y=t.changedTouches[0].pageY;var i=e._end.y-e._start.y;"horizontal"===e._options.direction&&(i=e._end.x-e._start.x),0!==(i=e.getDistance(i))&&e._options.minMovingDistance&&Math.abs(i)<e._options.minMovingDistance&&!e._isMoved||(i>e._options.threshold?e.move(-1):i<-e._options.threshold?e.move(1):e.move(0),e._loopRender())}},e.transitionEndHandler=function(t){e._activate(e._current);var i=e._eventHandlers.swiped;i&&i.apply(e,[e._prev%e.count,e._current%e.count]),e._auto(),e._loopRender(),t.preventDefault()},e.$container.addEventListener("touchstart",e.touchstartHandler,!1),e.$container.addEventListener("touchmove",e.touchmoveHandler,!1),e.$container.addEventListener("touchend",e.touchendHandler,!1),e.$items[1]&&e.$items[1].addEventListener("webkitTransitionEnd",e.transitionEndHandler,!1)}},{key:"_loopRender",value:function(){var t=this;t._loop()&&(0===t._offset[t._offset.length-1]?(t.$container.appendChild(t.$items[0]),t._loopEvent(1)):0===t._offset[0]&&(t.$container.insertBefore(t.$items[t.$items.length-1],t.$container.firstChild),t._loopEvent(-1)))}},{key:"_loopEvent",value:function(t){var e=this;e._itemDestoy(),e.$items=e.$container.querySelectorAll(e._options.item),e.$items[1]&&e.$items[1].addEventListener("webkitTransitionEnd",e.transitionEndHandler,!1),e._movePosition(t),e._setOffset(),e._setTransform()}},{key:"getDistance",value:function(t){return this._loop()?t:t>0&&0===this._current?0:t<0&&this._current===this.realCount-1?0:t}},{key:"_moveIndex",value:function(t){0!==t&&(this._prev=this._current,this._current+=this.realCount,this._current+=t,this._current%=this.realCount)}},{key:"_activate",value:function(t){var e=this._options.activeClass;Array.prototype.forEach.call(this.$items,function(i,s){i.classList.remove(e),t===Number(i.dataset.index)&&i.classList.add(e)})}},{key:"go",value:function(t){var e=this;return e.stop(),t=t||0,t+=this.realCount,t%=this.realCount,t=this._position.indexOf(t)-this._position.indexOf(this._current),e._moveIndex(t),e._setOffset(),e._setTransition(),e._setTransform(),e._auto(),this}},{key:"next",value:function(){return this.move(1),this}},{key:"move",value:function(t){return this.go(this._current+t),this}},{key:"on",value:function(t,e){return this._eventHandlers[t]&&console.error("[swiper] event "+t+" is already register"),"function"!=typeof e&&console.error("[swiper] parameter callback must be a function"),this._eventHandlers[t]=e,this}},{key:"_itemDestoy",value:function(){var t=this;this.$items.length&&b(this.$items).forEach(function(e){e.removeEventListener("webkitTransitionEnd",t.transitionEndHandler,!1)})}},{key:"destroy",value:function(){if(this.stop(),this._current=0,this._setTransform(0),window.removeEventListener("orientationchange",this.resizeHandler,!1),this.$container.removeEventListener("touchstart",this.touchstartHandler,!1),this.$container.removeEventListener("touchmove",this.touchmoveHandler,!1),this.$container.removeEventListener("touchend",this.touchendHandler,!1),this._itemDestoy(),this._options.loop&&2===this.count){var t=this.$container.querySelector(this._options.item+"-clone");t&&this.$container.removeChild(t),(t=this.$container.querySelector(this._options.item+"-clone"))&&this.$container.removeChild(t)}}}]),t}(),k=s("0FxO"),C=(Array,String,Boolean,Boolean,String,String,Boolean,Boolean,Number,Number,Number,String,Number,Number,Number,{name:"swiper",created:function(){this.index=this.value||0,this.index&&(this.current=this.index)},mounted:function(){var t=this;this.hasTwoLoopItem(),this.$nextTick(function(){t.list&&0===t.list.length||t.render(t.index),t.xheight=t.getHeight(),t.$emit("on-get-height",t.xheight)})},methods:{hasTwoLoopItem:function(){2===this.list.length&&this.loop?this.listTwoLoopItem=this.list:this.listTwoLoopItem=[]},clickListItem:function(t){Object(k.a)(t.url,this.$router),this.$emit("on-click-list-item",JSON.parse(f()(t)))},buildBackgroundUrl:function(t){return t.fallbackImg?"url("+t.img+"), url("+t.fallbackImg+")":"url("+t.img+")"},render:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.swiper&&this.swiper.destroy(),this.swiper=new y({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(e,i){t.current=i%t.length,t.index=i%t.length}),e>0&&this.swiper.go(e)},rerender:function(){var t=this;this.$el&&!this.hasRender&&(this.hasRender=!0,this.hasTwoLoopItem(),this.$nextTick(function(){t.index=t.value||0,t.current=t.value||0,t.length=t.list.length||t.$children.length,t.destroy(),t.render(t.value)}))},destroy:function(){this.hasRender=!1,this.swiper&&this.swiper.destroy()},getHeight:function(){var t=parseInt(this.height,10);return t?this.height:t?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:Boolean,loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function(){return{hasRender:!1,current:this.index||0,xheight:"auto",length:this.list.length,index:0,listTwoLoopItem:[]}},watch:{auto:function(t){t?this.swiper&&this.swiper._auto():this.swiper&&this.swiper.stop()},list:function(t,e){f()(t)!==f()(e)&&this.rerender()},current:function(t){this.index=t,this.$emit("on-index-change",t)},index:function(t){var e=this;t!==this.current&&this.$nextTick(function(){e.swiper&&e.swiper.go(t)}),this.$emit("input",t)},value:function(t){this.index=t}},beforeDestroy:function(){this.destroy()}}),$={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-slider"},[i("div",{staticClass:"vux-swiper",style:{height:t.xheight}},[t._t("default"),t._v(" "),t._l(t.list,function(e,s){return i("div",{staticClass:"vux-swiper-item",attrs:{"data-index":s},on:{click:function(i){return t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])])}),t._v(" "),t._l(t.listTwoLoopItem,function(e,s){return t.listTwoLoopItem.length>0?i("div",{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":s},on:{click:function(i){return t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])]):t._e()})],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showDots,expression:"showDots"}],class:[t.dotsClass,"vux-indicator","vux-indicator-"+t.dotsPosition]},t._l(t.length,function(e){return i("a",{attrs:{href:"javascript:"}},[i("i",{staticClass:"vux-icon-dot",class:{active:e-1===t.current}})])}),0)])},staticRenderFns:[]};var D=s("VU/8")(C,$,!1,function(t){s("o4Ys")},null,null).exports,N={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vux-swiper-item"},[this._t("default")],2)},staticRenderFns:[]},S=s("VU/8")({name:"swiper-item",mounted:function(){var t=this;this.$nextTick(function(){t.$parent.rerender()})},beforeDestroy:function(){var t=this.$parent;this.$nextTick(function(){t.rerender()})}},N,!1,null,null,null).exports,T=s("63CM"),L=s("/kga"),B=s("aTeQ"),E=s("HD9R"),H=s("rHil"),R=(Number,String,String,String,String,String,{name:"flexbox",props:{gutter:{type:Number,default:8},orient:{type:String,default:"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){var t={"justify-content":this.justify,"-webkit-justify-content":this.justify,"align-items":this.align,"-webkit-align-items":this.align,"flex-wrap":this.wrap,"-webkit-flex-wrap":this.wrap,"flex-direction":this.direction,"-webkit-flex-direction":this.direction};return t}}}),M={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vux-flexbox",class:{"vux-flex-col":"vertical"===this.orient,"vux-flex-row":"horizontal"===this.orient},style:this.styles},[this._t("default")],2)},staticRenderFns:[]};var I=s("VU/8")(R,M,!1,function(t){s("xX3d")},null,null).exports,O=(Number,String,Number,String,["-moz-box-","-webkit-box-",""]),W={name:"flexbox-item",props:{span:[Number,String],order:[Number,String]},beforeMount:function(){this.bodyWidth=document.documentElement.offsetWidth},methods:{buildWidth:function(t){return"number"==typeof t?t<1?t:t/12:"string"==typeof t?t.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var t={},e="horizontal"===this.$parent.orient?"marginLeft":"marginTop";if(1*this.$parent.gutter!=0&&(t[e]=this.$parent.gutter+"px"),this.span)for(var i=0;i<O.length;i++)t[O[i]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return void 0!==this.order&&(t.order=this.order),t}},data:function(){return{bodyWidth:0}}},F={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vux-flexbox-item",style:this.style},[this._t("default")],2)},staticRenderFns:[]},z=s("VU/8")(W,F,!1,null,null,null).exports,A=s("teIl"),j=s("TVmP"),P=s("sqAx"),q=s("mtWM"),U=s.n(q),V=s("NYxO"),X=(T.a,A.a,j.a,L.a,B.a,E.a,H.a,P.a,o()({},Object(V.b)(["newsList"])),{name:"Home",directives:{TransferDom:T.a},components:{Header:A.a,Footer:j.a,Tab:c,TabItem:d,Swiper:D,SwiperItem:S,XDialog:L.a,XSwitch:B.a,Popup:E.a,Group:H.a,Flexbox:I,FlexboxItem:z,NoData:P.a},data:function(){return{showHideOnBlur:!1,showNewsDetails:!1,newDetails:{},selected:"推荐",index:0,myNews:[],pushNews:[],newList:[]}},computed:o()({},Object(V.b)(["newsList"])),created:function(){var t=this;this.myNews=this.newsList.slice(0,9),this.pushNews=this.newsList.slice(9),U.a.get("https://www.easy-mock.com/mock/5d0b684896278014af027705/TodayHeadlines/newsList").then(function(i){t.newList=i.data.data.list||[e]}).catch(function(t){console.log(t)})},methods:{moreNews:function(){this.showHideOnBlur=!this.showHideOnBlur},menuSelect:function(t){var i=this;this.selected=t.title,scrollTo(0,0),U.a.get("https://www.easy-mock.com/mock/5d0b684896278014af027705/TodayHeadlines/newsList?id="+t.id).then(function(t){console.log(t),console.log(t.data.data),i.newList=t.data.data.list||[e],console.log(i.newList)}).catch(function(t){console.log(t)})},deletNews:function(t){var e=this.myNews.indexOf(t);this.myNews.splice(e,1),this.pushNews.unshift(t),this.selected=this.myNews[0].title},addNews:function(t){var e=this.myNews.indexOf(t);this.pushNews.splice(e,1),this.myNews.unshift(t),this.selected=this.myNews[0].title},toNewsDetails:function(t){this.newDetails=t,this.showNewsDetails=!0}}}),J={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("tab",{attrs:{"line-width":2,"active-color":"#d43d3d","custom-bar-width":"60px"},model:{value:t.index,callback:function(e){t.index=e},expression:"index"}},[t._l(t.myNews,function(e,s){return i("tab-item",{key:s,attrs:{selected:t.selected===e.title},nativeOn:{click:function(i){return t.menuSelect(e)}}},[t._v(t._s(e.title))])}),t._v(" "),i("svg",{staticClass:"vux-x-icon vux-x-icon-ios-plus-empty ios-plus-empty",attrs:{type:"ios-plus-empty",size:"35",xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",viewBox:"0 0 512 512"},on:{click:t.moreNews}},[i("path",{attrs:{d:"M384 265H264v119h-17V265H128v-17h119V128h17v120h120v17z"}})])],2),t._v(" "),i("div",{staticClass:"home-content"},[t._l(t.newList,function(e,s){return i("div",{key:s,staticClass:"home-content-news",on:{click:function(i){return t.toNewsDetails(e)}}},[0===e.picture.length?i("div",{staticClass:"nopic"},[i("h4",[t._v(" "+t._s(t.selected)+" --- "+t._s(e.newtitle)+" ")]),t._v(" "),i("p",[t._v(" "+t._s(e.intro))]),t._v(" "),i("div",{staticClass:"home-content-footer"},[i("span",[t._v(" "+t._s(e.source))]),t._v(" "),i("span",[t._v("评论："+t._s(e.comment))]),t._v(" "),i("span",[t._v(" "+t._s(e.time))])])]):t._e(),t._v(" "),1===e.picture.length?i("div",{staticClass:"onepic"},[i("div",{staticClass:"home-content-left"},[i("h4",[t._v(" "+t._s(t.selected)+" --- "+t._s(e.newtitle)+" ")]),t._v(" "),i("p",[t._v(" "+t._s(e.intro))]),t._v(" "),i("div",{staticClass:"home-content-footer"},[i("span",[t._v(" "+t._s(e.source))]),t._v(" "),i("span",[t._v("评论："+t._s(e.comment))])])]),t._v(" "),t._l(e.picture,function(t,e){return i("div",{staticClass:"home-content-right"},[i("img",{attrs:{src:t,alt:""}})])})],2):t._e(),t._v(" "),2===e.picture.length?i("div",{staticClass:"home-content-twopic"},[i("h4",[t._v(" "+t._s(t.selected)+" --- "+t._s(e.newtitle)+" ")]),t._v(" "),i("p",[t._v(" "+t._s(e.intro))]),t._v(" "),t._l(e.picture,function(t,e){return i("div",{staticClass:"twopic"},[i("img",{attrs:{src:t,alt:""}})])}),t._v(" "),i("div",{staticClass:"home-content-footer"},[i("span",[t._v(" "+t._s(e.source))]),t._v(" "),i("span",[t._v("评论："+t._s(e.comment))]),t._v(" "),i("span",[t._v(" "+t._s(e.time))])])],2):t._e(),t._v(" "),e.picture.length>=3?i("div",{staticClass:"home-content-threepic"},[i("h4",[t._v(" "+t._s(t.selected)+" --- "+t._s(e.newtitle)+" ")]),t._v(" "),i("p",[t._v(" "+t._s(e.intro))]),t._v(" "),t._l(e.picture,function(t,e){return i("div",{staticClass:"threepic"},[i("img",{attrs:{src:t,alt:""}})])}),t._v(" "),i("div",{staticClass:"home-content-footer"},[i("span",[t._v(" "+t._s(e.source))]),t._v(" "),i("span",[t._v("评论："+t._s(e.comment))]),t._v(" "),i("span",[t._v(" "+t._s(e.time))])])],2):t._e()])}),t._v(" "),t.newList&&t.newList.length>0?i("NoData"):t._e()],2),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("popup",{staticClass:"home-Bulletbox",attrs:{height:"100%"},model:{value:t.showHideOnBlur,callback:function(e){t.showHideOnBlur=e},expression:"showHideOnBlur"}},[i("div",{staticClass:"popup"},[i("svg",{staticClass:"vux-x-icon vux-x-icon-ios-close-empty close",attrs:{type:"ios-close-empty",size:"30",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 512 512"},on:{click:t.moreNews}},[i("path",{staticClass:"st0",attrs:{d:"M340.2 160l-84.4 84.3-84-83.9-11.8 11.8 84 83.8-84 83.9 11.8 11.7 84-83.8 84.4 84.2 11.8-11.7-84.4-84.3 84.4-84.2z"}})]),t._v(" "),i("div",{staticClass:"myNews"},[i("h4",[t._v("我的频道")]),t._v(" "),i("p",[t._v("点击删除以下频道")]),t._v(" "),i("flexbox",{attrs:{gutter:0,wrap:"wrap"}},t._l(t.myNews,function(e,s){return i("flexbox-item",{key:e.index,attrs:{span:.25}},[i("div",{staticClass:"flex-demo",on:{click:function(i){return t.deletNews(e)}}},[t._v(t._s(e.title))])])}),1)],1),t._v(" "),i("div",{staticClass:"pushNews"},[i("h4",[t._v("推送频道")]),t._v(" "),i("p",[t._v("点击添加以下频道")]),t._v(" "),i("flexbox",{attrs:{gutter:0,wrap:"wrap"}},t._l(t.pushNews,function(e,s){return i("flexbox-item",{key:e.index,attrs:{span:.25}},[i("div",{staticClass:"flex-demo",on:{click:function(i){return t.addNews(e)}}},[t._v(t._s(e.title))])])}),1)],1)])])],1),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("popup",{staticClass:"newsDetailsbox",attrs:{position:"right",height:"100%",width:"100%"},model:{value:t.showNewsDetails,callback:function(e){t.showNewsDetails=e},expression:"showNewsDetails"}},[i("div",{staticClass:"popup"},[i("svg",{staticClass:"vux-x-icon vux-x-icon-ios-close-empty showNewsDetails-icon",attrs:{type:"ios-close-empty",size:"30",position:"absolute",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 512 512"},on:{click:function(e){t.showNewsDetails=!1}}},[i("path",{staticClass:"st0",attrs:{d:"M340.2 160l-84.4 84.3-84-83.9-11.8 11.8 84 83.8-84 83.9 11.8 11.7 84-83.8 84.4 84.2 11.8-11.7-84.4-84.3 84.4-84.2z"}})]),t._v(" "),i("p",{staticClass:"newsDetailsbox-title"},[t._v(t._s(t.newDetails.name))]),t._v(" "),i("div",{staticClass:"newsDetailsbox-header"},[i("img",{attrs:{src:t.newDetails.userimg,alt:""}}),t._v(" "),i("span",{staticClass:"newsDetailsbox-header-span"},[i("h4",[t._v(t._s(t.newDetails.source))]),t._v(" "),i("p",[t._v(t._s(t.newDetails.duration)+"小时以前")])]),t._v(" "),i("div",{staticClass:"newsDetailsbox-follow",on:{click:function(e){t.newDetails.attention=!t.newDetails.attention}}},[t.newDetails.attention?i("div",{staticClass:"newsDetailsbox-follow-followed"},[i("p",[t._v("已关注")])]):i("div",[i("p",[t._v("关注")])])])]),t._v(" "),i("article",{staticClass:"newsDetailsbox-article"},[t._v("\n          "+t._s(t.newDetails.intro)+"\n        ")]),t._v(" "),i("div",{staticClass:"newsDetailsbox-keyword row"},t._l(t.newDetails.keyword,function(e,s){return i("span",{key:e},[t._v(t._s(e))])}),0),t._v(" "),i("div",{staticClass:"newsDetailsbox-like row",on:{click:function(e){t.newDetails.liked=!t.newDetails.liked}}},[t.newDetails.liked?i("div",{staticClass:"newsDetailsbox-like-liked row"},[i("img",{attrs:{src:s("JFxr"),alt:""}}),t._v(" "),i("p",[t._v(" "+t._s(t.newDetails.like+1)+" ")])]):i("div",{staticClass:"row"},[i("img",{attrs:{src:s("knK7"),alt:""}}),t._v(" "),i("p",[t._v(" "+t._s(t.newDetails.like)+" ")])])])])])],1)],1)},staticRenderFns:[]};var Y=s("VU/8")(X,J,!1,function(t){s("FRuO")},"data-v-7ffdcf3f",null);i.default=Y.exports},mClu:function(t,e,i){var s=i("kM2E");s(s.S+s.F*!i("+E39"),"Object",{defineProperty:i("evD5").f})},mvHQ:function(t,e,i){t.exports={default:i("qkKv"),__esModule:!0}},o4Ys:function(t,e){},qkKv:function(t,e,i){var s=i("FeBl"),n=s.JSON||(s.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}},wxAW:function(t,e,i){"use strict";e.__esModule=!0;var s,n=i("C4MV"),o=(s=n)&&s.__esModule?s:{default:s};e.default=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),(0,o.default)(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}()},xX3d:function(t,e){}});
//# sourceMappingURL=1.3b39bb3d37a9a176e66c.js.map