webpackJsonp([0],{189:function(e,t,n){"use strict";function i(e){n(403)}function a(e){n(404)}function s(e){n(405)}function r(e){n(407)}Object.defineProperty(t,"__esModule",{value:!0});var c=(n(190),n(64),n(191)),o=n.n(c),l=(n(192),n(193)),d=n.n(l),u=(n(194),n(195)),v=n.n(u),f=(n(196),n(197)),p=n.n(f),h=(n(198),n(159)),m={name:"Header",props:{naviList:{type:Array,default:[]}},data:function(){return{}},created:function(){},methods:{handleClickNavItem:function(e){this.$emit("navActived",e)}}},g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-header",{staticClass:"header clearfix"},[n("a",{staticClass:"logo pull-left",attrs:{href:"javascript:;"}},[e._v("logo")]),e._v(" "),n("ul",{staticClass:"nav nav-full pull-right clearfix"},e._l(e.naviList,function(t,i){return n("li",{staticClass:"pull-left nav-item",class:[t.active?"active":""]},[n("a",{staticClass:"c-5a",attrs:{href:"#"},on:{click:function(t){e.handleClickNavItem(i)}}},[e._v(e._s(t.title))])])}))])},b=[],w={render:g,staticRenderFns:b},_=w,x=n(80),k=i,C=x(m,_,!1,k,null,null),y=C.exports,A={name:"Footer",props:{},data:function(){return{}},created:function(){},methods:{}},L=function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-footer",{staticClass:"footer"})},F=[],H={render:L,staticRenderFns:F},I=H,$=n(80),z=a,E=$(A,I,!1,z,null,null),N=E.exports;h.a.component(y.name,y),h.a.component(N.name,N);var P={created:function(){}},R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},T=[],j={render:R,staticRenderFns:T},O=j,J=n(80),M=s,Q=J(P,O,!1,M,null,null),S=Q.exports,W=n(406),q={data:function(){return{naviList:[{title:"item1",achor:"#item1",active:!0},{title:"item2",achor:"#item2",active:!1},{title:"item3",achor:"#item3",active:!1},{title:"item4",achor:"#item4",active:!1},{title:"item5",achor:"#item5",active:!1}]}},created:function(){},methods:{handleNavActived:function(e){var t=this;this.naviList.forEach(function(n,i){n.active=!1,i===e&&(n.active=!0),t.naviList.splice(i,1,n)})}},mounted:function(){}},B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticClass:"homepage"},[n("Header",{attrs:{naviList:e.naviList},on:{navActived:e.handleNavActived}}),e._v(" "),n("Footer",{staticStyle:{"margin-top":"80px"}})],1)},D=[],G={render:B,staticRenderFns:D},K=G,U=n(80),V=r,X=U(q,K,!1,V,null,null),Y=X.exports,Z=[{path:"/homepage",component:Y,alias:"/"}],ee=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(Z)),te=ee,ne=n(408),ie=n.n(ne);n(448),n(449);h.a.use(W.a),h.a.use(p.a),h.a.use(v.a),h.a.use(d.a),h.a.use(o.a);var ae=new W.a({routes:te,mode:"history"});new h.a({router:ae,render:function(e){return e(S)}}).$mount("#app"),ie()(document).ready(function(){if(ie()("#preloader")){ie()("#preloader").show();var e=ie()("#preloader").data("spinner"),t=ie()("#preloader").data("screenbg");ie()("#preloader").fakeLoader({timeToHide:1500,zIndex:"9999",spinner:e,bgColor:t})}})},190:function(e,t){},192:function(e,t){},194:function(e,t){},196:function(e,t){},403:function(e,t){},404:function(e,t){},405:function(e,t){},407:function(e,t){},448:function(e,t){!function(e){function t(){var t=e(window).width(),n=e(window).height(),i=e(".fl").outerWidth(),a=e(".fl").outerHeight();e(".fl").css({position:"absolute",left:t/2-i/2,top:n/2-a/2})}e.fn.fakeLoader=function(n){var i=e.extend({timeToHide:1200,pos:"fixed",top:"0px",left:"0px",width:"100%",height:"100%",zIndex:"999",bgColor:"#2ecc71",spinner:"spinner7",imagePath:""},n),a='<div class="fl spinner1"><span></span><span></span><span></span><span></span><span></span></div>',s=e(this),r={position:i.pos,width:i.width,height:i.height,top:i.top,left:i.left};return s.css(r),s.each(function(){switch(i.spinner){case"spinner1":s.html(a);break;case"spinner2":s.html('<div class="fl spinner2"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>');break;case"spinner3":s.html('<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>');break;case"spinner4":s.html('<div class="fl spinner4"></div>');break;case"spinner5":s.html('<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>');break;case"spinner6":s.html('<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>');break;case"spinner7":s.html('<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>');break;default:s.html(a)}""!=i.imagePath&&s.html('<div class="fl"><img src="'+i.imagePath+'"></div>'),t()}),setTimeout(function(){e(s).fadeOut(function(){e("body").removeClass("preloading")})},i.timeToHide),this.css({backgroundColor:i.bgColor,zIndex:i.zIndex})},e(window).on("load",function(){t(),e(window).resize(function(){t()})})}(jQuery)},449:function(e,t){},64:function(e,t){}},[189]);
//# sourceMappingURL=app.a316de05b4283b516c5b.js.map