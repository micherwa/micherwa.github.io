(window.webpackJsonp=window.webpackJsonp||[]).push([["yfyW"],{yfyW:function(s,a,t){"use strict";t.r(a);var l={},_=t("psIG"),v=Object(_.a)(l,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"blog-container"},[t("BlogHeader"),s._v(" "),t("BlogContent",{attrs:{useCatalog:!0}},[t("div",{attrs:{slot:"content"},slot:"content"},[t("p",[s._v("\n                在移动端中，对于dpr为2的设备设置border的宽度为1px时，看上去会变粗，但其实它并没有变粗。设计师口中说的1px是针对设备物理像素的，换算成css像素就是0.5px。\n            ")]),s._v(" "),t("p",[s._v("\n                比如 border: 1px solid black; 在任何屏幕上都是一样粗的，但是retina屏可以显示比这更细的边框，然后设计师就不乐意了，觉得你没写对。那么怎么解决这个问题？也就是，让1px在所有设备看上去都是一样粗细的呢？\n            ")]),s._v(" "),t("p",[s._v("这正是本文需要解决的问题，下面介绍四种思路的写法。")]),s._v(" "),t("h2",[s._v("四种半像素边框的写法")]),s._v(" "),t("h4",[s._v("1.:after + scale(0.5)")]),s._v(" "),t("p",[t("pre",{staticClass:"hljs html"},[t("code",{},[s._v("<"),t("span",{staticClass:"hljs-built_in"},[s._v("li")]),s._v(" class="),t("span",{staticClass:"hljs-string"},[s._v('"half-pixel-after"')]),s._v(">"),t("br"),s._v("    Generate "),t("span",{staticClass:"hljs-built_in"},[s._v("content")]),s._v(" & "),t("span",{staticClass:"hljs-built_in"},[s._v("transform")]),s._v(": "),t("span",{staticClass:"hljs-built_in"},[s._v("scale")]),s._v("(."),t("span",{staticClass:"hljs-number"},[s._v("5")]),s._v(")"),t("br"),s._v("</"),t("span",{staticClass:"hljs-built_in"},[s._v("li")]),s._v(">")])]),s._v(" "),t("pre",{staticClass:"hljs css"},[t("code",{},[t("span",{staticClass:"hljs-selector-class"},[s._v(".half-pixel-after")]),s._v(" {"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("position")]),s._v(": relative;"),t("br"),s._v("}"),t("br"),t("span",{staticClass:"hljs-selector-class"},[s._v(".half-pixel-after")]),t("span",{staticClass:"hljs-selector-pseudo"},[s._v("::after")]),s._v(" {"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("content")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(";"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("position")]),s._v(": absolute;"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("right")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("bottom")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("left")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("border-bottom")]),s._v(": solid "),t("span",{staticClass:"hljs-number"},[s._v("1px")]),s._v(" "),t("span",{staticClass:"hljs-number"},[s._v("#aaa")]),s._v(";"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("transform")]),s._v(": "),t("span",{staticClass:"hljs-built_in"},[s._v("scaleY")]),s._v("(0.5);"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("-webkit-transform")]),s._v(": "),t("span",{staticClass:"hljs-built_in"},[s._v("scaleY")]),s._v("(0.5);"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("transform-origin")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(" "),t("span",{staticClass:"hljs-number"},[s._v("100%")]),s._v(";"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("-webkit-transform-origin")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(" "),t("span",{staticClass:"hljs-number"},[s._v("100%")]),s._v(";"),t("br"),s._v("}")])])]),s._v(" "),t("h4",[s._v("2.background + svg")]),s._v(" "),t("p",[t("pre",{staticClass:"hljs maxima"},[t("code",{},[s._v("<"),t("span",{staticClass:"hljs-built_in"},[s._v("li")]),s._v(" class="),t("span",{staticClass:"hljs-string"},[s._v('"half-pixel-background-svg"')]),s._v(">"),t("br"),s._v("    "),t("span",{staticClass:"hljs-built_in"},[s._v("background")]),s._v(": url(svg)"),t("br"),s._v("</"),t("span",{staticClass:"hljs-built_in"},[s._v("li")]),s._v(">")])]),s._v(" "),t("pre",{staticClass:"hljs maxima"},[t("code",{},[s._v(".half-pixel-"),t("span",{staticClass:"hljs-built_in"},[s._v("background")]),s._v("-svg {"),t("br"),s._v("    "),t("span",{staticClass:"hljs-built_in"},[s._v("background")]),s._v(": url('data:"),t("span",{staticClass:"hljs-built_in"},[s._v("image")]),s._v("/svg+xml, <svg xmlns="),t("span",{staticClass:"hljs-string"},[s._v('"http://www.w3.org/2000/svg"')]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("width")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"1"')]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("height")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"1"')]),s._v("><rect "),t("span",{staticClass:"hljs-built_in"},[s._v("width")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"1"')]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("height")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"0.5"')]),s._v(" fill="),t("span",{staticClass:"hljs-string"},[s._v('"#aaa"')]),s._v("/></svg>') repeat-x bottom;"),t("br"),s._v("}")])])]),s._v(" "),t("h4",[s._v("3. background + linear-gradient")]),s._v(" "),t("p",[t("pre",{staticClass:"hljs maxima"},[t("code",{},[s._v("<"),t("span",{staticClass:"hljs-built_in"},[s._v("li")]),s._v(" class="),t("span",{staticClass:"hljs-string"},[s._v('"half-pixel-background"')]),s._v(">"),t("br"),s._v("    "),t("span",{staticClass:"hljs-built_in"},[s._v("background")]),s._v(": "),t("span",{staticClass:"hljs-built_in"},[s._v("linear")]),s._v("-gradient (visible when dpr gte "),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(")"),t("br"),s._v("</"),t("span",{staticClass:"hljs-built_in"},[s._v("li")]),s._v(">")])]),s._v(" "),t("pre",{staticClass:"hljs css"},[t("code",{},[t("span",{staticClass:"hljs-selector-class"},[s._v(".half-pixel-background")]),s._v(" {"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("background")]),s._v(": "),t("span",{staticClass:"hljs-built_in"},[s._v("-webkit-linear-gradient")]),s._v("(transparent 50%, #aaa 50%) no-repeat left bottom;"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("background")]),s._v(": "),t("span",{staticClass:"hljs-built_in"},[s._v("linear-gradient")]),s._v("(transparent 50%, #aaa 50%) no-repeat left bottom;"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("background-size")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("100%")]),s._v(" "),t("span",{staticClass:"hljs-number"},[s._v("1px")]),s._v(";"),t("br"),s._v("}")])])]),s._v(" "),t("h4",[s._v("4.四边半像素边框")]),s._v(" "),t("p",[t("pre",{staticClass:"hljs javascript"},[t("code",{},[s._v("<div "),t("span",{staticClass:"hljs-class"},[t("span",{staticClass:"hljs-keyword"},[s._v("class")])]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"avatar-box"')]),s._v(">"),t("br"),s._v("    "),t("span",{staticClass:"xml"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("img")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"https://ww3.sinaimg.cn/large/6eba2496gw1f3vtj57hjij20pq0pqwf3.jpg"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("width")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"60"')]),s._v(">")])]),t("br"),t("span",{staticClass:"xml"},[t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")])])])]),s._v(" "),t("pre",{staticClass:"hljs css"},[t("code",{},[t("span",{staticClass:"hljs-selector-class"},[s._v(".avatar-box")]),s._v(" {"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("padding")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("2px")]),s._v(";"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("display")]),s._v(": inline-block;"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("position")]),s._v(": relative;"),t("br"),s._v("}"),t("br"),t("span",{staticClass:"hljs-selector-class"},[s._v(".avatar-box")]),t("span",{staticClass:"hljs-selector-pseudo"},[s._v("::after")]),s._v(" {"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("content")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(";"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("position")]),s._v(": absolute;"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("top")]),s._v(": -"),t("span",{staticClass:"hljs-number"},[s._v("50%")]),s._v(";"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("right")]),s._v(": -"),t("span",{staticClass:"hljs-number"},[s._v("50%")]),s._v(";"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("bottom")]),s._v(": -"),t("span",{staticClass:"hljs-number"},[s._v("50%")]),s._v(";"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("left")]),s._v(": -"),t("span",{staticClass:"hljs-number"},[s._v("50%")]),s._v(";"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("border")]),s._v(": solid "),t("span",{staticClass:"hljs-number"},[s._v("1px")]),s._v(" "),t("span",{staticClass:"hljs-number"},[s._v("#b2b2b2")]),s._v(";"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("transform")]),s._v(": "),t("span",{staticClass:"hljs-built_in"},[s._v("scale")]),s._v("(0.5);"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("-webkit-transform")]),s._v(": "),t("span",{staticClass:"hljs-built_in"},[s._v("scale")]),s._v("(0.5);"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("transform-origin")]),s._v(": center center;"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("-webkit-transform-origin")]),s._v(": center center;"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("pointer-events")]),s._v(": none;"),t("br"),s._v("    "),t("span",{staticClass:"hljs-attribute"},[s._v("border-radius")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("10px")]),s._v(";"),t("br"),s._v("}")])])])])])],1)},[],!1,null,null,null);v.options.__file="half-pixel-border.vue";a.default=v.exports}}]);