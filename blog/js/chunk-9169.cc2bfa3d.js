(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-9169"],{"3K/O":function(s,t,a){s.exports=a.p+"assets/bg-20170715-02.d65a524.png"},InZI:function(s,t,a){s.exports=a.p+"assets/bg-20170715-01.8807183.png"},"h/N9":function(s,t,a){s.exports=a.p+"assets/bg-20170715-03.97ebba4.png"},yw3E:function(s,t,a){"use strict";a.r(t);var n={created:function(){}},v=a("psIG"),_=Object(v.a)(n,function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"blog-container"},[n("BlogHeader",{attrs:{title:"盒子模型中的box-sizing",subTitle:"",date:"2017-07-15",tags:["CSS"]}}),s._v(" "),n("BlogContent",{attrs:{useCatalog:!1}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("blockquote",[n("p",[s._v("\n                    本文将介绍现在浏览器中box-sizing的用法，它已被广泛应用于移动端布局。\n                ")])]),s._v(" "),n("p",[s._v("\n                在写一个块级元素的时候，经常会碰到一个问题：盒子模型。\n            ")]),s._v(" "),n("p",[s._v("\n                当你设置了元素的宽度，实际展现的元素却超出你的设置：这是因为元素的边框和内边距会撑开元素。\n            ")]),s._v(" "),n("p",[s._v("\n                例如：\n                "),n("pre",{staticClass:"hljs css"},[n("code",{},[n("span",{staticClass:"hljs-selector-class"},[s._v(".simple")]),s._v("{"),n("br"),s._v("    "),n("span",{staticClass:"hljs-attribute"},[s._v("width")]),s._v(": "),n("span",{staticClass:"hljs-number"},[s._v("500px")]),s._v(";"),n("br"),s._v("    "),n("span",{staticClass:"hljs-attribute"},[s._v("margin")]),s._v(": "),n("span",{staticClass:"hljs-number"},[s._v("20px")]),s._v(" auto;"),n("br"),s._v("}"),n("br"),n("span",{staticClass:"hljs-selector-class"},[s._v(".fancy")]),s._v(" {"),n("br"),s._v("    "),n("span",{staticClass:"hljs-attribute"},[s._v("width")]),s._v(": "),n("span",{staticClass:"hljs-number"},[s._v("500px")]),s._v(";"),n("br"),s._v("    "),n("span",{staticClass:"hljs-attribute"},[s._v("margin")]),s._v(": "),n("span",{staticClass:"hljs-number"},[s._v("20px")]),s._v(" auto;"),n("br"),s._v("    "),n("span",{staticClass:"hljs-attribute"},[s._v("padding")]),s._v(": "),n("span",{staticClass:"hljs-number"},[s._v("20px")]),s._v(";"),n("br"),s._v("    "),n("span",{staticClass:"hljs-attribute"},[s._v("border-width")]),s._v(": "),n("span",{staticClass:"hljs-number"},[s._v("10px")]),s._v(";"),n("br"),s._v("}")])]),s._v("\n                结果如下：\n                "),n("img",{attrs:{src:a("InZI")}})]),s._v(" "),n("p",[s._v("\n                如果想让这两个div看上去一样宽，按传统的办法，需要减去内边距和边框，重新定义width。值得庆幸的是，现在不需要再这样做了...\n            ")]),s._v(" "),n("p",[s._v("\n                传统的盒子模型并不直观，所以css3后来新增了"),n("code",[s._v("box-sizing")]),s._v("属性。\n            ")]),s._v(" "),n("p",[s._v("\n                当你设置一个元素为 "),n("code",[s._v("box-sizing: border-box;")]),s._v(" 时，此元素的内边距和边框不再会增加它的宽度。这里有一个与前一页相同的例子，唯一的区别是两个元素都设置了 "),n("code",[s._v("box-sizing: border-box;")])]),s._v(" "),n("p",[s._v("\n                改一下上面的代码：\n                "),n("pre",{staticClass:"hljs css"},[n("code",{},[n("span",{staticClass:"hljs-selector-class"},[s._v(".simple")]),s._v(" {"),n("br"),s._v("    "),n("span",{staticClass:"hljs-attribute"},[s._v("width")]),s._v(": "),n("span",{staticClass:"hljs-number"},[s._v("500px")]),s._v(";"),n("br"),s._v("    "),n("span",{staticClass:"hljs-attribute"},[s._v("margin")]),s._v(": "),n("span",{staticClass:"hljs-number"},[s._v("20px")]),s._v(" auto;"),n("br"),s._v("    "),n("span",{staticClass:"hljs-attribute"},[s._v("box-sizing")]),s._v(": border-box;"),n("br"),s._v("}"),n("br"),n("br"),n("span",{staticClass:"hljs-selector-class"},[s._v(".fancy")]),s._v(" {"),n("br"),s._v("    "),n("span",{staticClass:"hljs-attribute"},[s._v("width")]),s._v(": "),n("span",{staticClass:"hljs-number"},[s._v("500px")]),s._v(";"),n("br"),s._v("    "),n("span",{staticClass:"hljs-attribute"},[s._v("margin")]),s._v(": "),n("span",{staticClass:"hljs-number"},[s._v("20px")]),s._v(" auto;"),n("br"),s._v("    "),n("span",{staticClass:"hljs-attribute"},[s._v("padding")]),s._v(": "),n("span",{staticClass:"hljs-number"},[s._v("20px")]),s._v(";"),n("br"),s._v("    "),n("span",{staticClass:"hljs-attribute"},[s._v("border-width")]),s._v(": "),n("span",{staticClass:"hljs-number"},[s._v("10px")]),s._v(";"),n("br"),s._v("    "),n("span",{staticClass:"hljs-attribute"},[s._v("box-sizing")]),s._v(": border-box;"),n("br"),s._v("}")])]),s._v("\n                效果如下：\n                "),n("img",{attrs:{src:a("3K/O")}})]),s._v(" "),n("p",[s._v("\n                如果想让页面上所有的元素都按这种更直观的方式进行排版，可以这样：\n                "),n("pre",{staticClass:"hljs css"},[n("code",{},[s._v("* {"),n("br"),s._v("    "),n("span",{staticClass:"hljs-attribute"},[s._v("box-sizing")]),s._v(": border-box;"),n("br"),s._v("}")])]),s._v("\n                兼容性上，box-sizing支持ie8+，最好再加上-webkit-和-moz-的前缀。\n            ")]),s._v(" "),n("p",[s._v("\n                下面这张图更形象地对box-sizing的"),n("code",[s._v("content-box")]),s._v("和我们喜爱的"),n("code",[s._v("border-box")]),s._v("，做了对比的效果：\n                "),n("img",{attrs:{src:a("h/N9")}})])])])],1)},[],!1,null,null,null);_.options.__file="box-sizing-in-box-modal.vue";t.default=_.exports}}]);