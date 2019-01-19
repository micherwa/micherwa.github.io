(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6d25"],{"E15+":function(s,n,t){"use strict";t.r(n);var v={},e=t("psIG"),a=Object(e.a)(v,function(){var s=this,n=s.$createElement,v=s._self._c||n;return v("div",{staticClass:"blog-container"},[v("BlogHeader"),s._v(" "),v("BlogContent",[v("div",{attrs:{slot:"content"},slot:"content"},[v("h2",[s._v("一个小需求")]),s._v(" "),v("p",[s._v("\n                事情的起因，是昨天有一个新的需求被提出。\n            ")]),s._v(" "),v("p",[s._v("\n                需求是要实现，让我们自己定制的弹出层，具备按下 ESC 也能退出的功能。我把任务交给了同组的小伙伴S去实现。（这个项目用到了vue技术栈，以及饿了么的UI框架。）\n            ")]),s._v(" "),v("p",[s._v("\n                我开完会回来，发现他还在处理那个功能，但好像遇到了什么瓶颈。于是，我就问了他卡在了什么地方。\n            ")]),s._v(" "),v("p",[s._v("\n                小伙伴S说，他百度了不少资料，还查了官方文档，并且尝试其中的办法，但就是无法触发按下esc的回调方法，很是郁闷。我看了他的代码，他的写法是这样的：\n                "),v("pre",{staticClass:"hljs scala"},[v("code",[s._v("<div "),v("span",{staticClass:"hljs-class"},[v("span",{staticClass:"hljs-keyword"},[s._v("class")])]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"custom-modal"')]),s._v(" "),v("span",{staticClass:"hljs-meta"},[s._v("@keydown")]),v("span",{staticClass:"hljs-number"},[s._v(".27")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"handlePressEscape"')]),s._v(">"),v("br"),s._v("    ..."),v("br"),s._v("</div>")])]),s._v(" "),v("pre",{staticClass:"hljs r"},[v("code",{},[v("span",{staticClass:"hljs-keyword"},[s._v("...")]),v("br"),s._v("handlePressEscape () {"),v("br"),s._v("    console.log("),v("span",{staticClass:"hljs-string"},[s._v("'press escape!'")]),s._v(");"),v("br"),s._v("},"),v("br"),v("span",{staticClass:"hljs-keyword"},[s._v("...")])])]),s._v("\n\n                他的想法不错，因为是自定义的弹出层，所以就想着把 keydown 事件，绑定在最外层的 div 上，让整个弹出层都能监听到。\n            ")]),s._v(" "),v("p",[s._v("\n                他给我看了他查的资料，几乎都是 input 上绑定 keydown 事件的例子，而vue的官方文档里也是类似的例子，实践后却陷入了瓶颈。但是他忽略了一个问题，"),v("strong",[s._v("keydown 事件，并非绑在任意一个标签上都会起作用")]),s._v("。\n            ")]),s._v(" "),v("h2",[s._v("一种思路")]),s._v(" "),v("p",[s._v("\n                我没有直接把答案告诉他，而是给他提供了一个思路：在我们常用的 element-ui 的 el-dialog组件里，有个属性叫做 "),v("code",[s._v("close-on-press-escape")]),s._v("，它的解释如下图：\n                "),v("img",{attrs:{src:t("QVWo")}})]),s._v(" "),v("p",[s._v("\n                从文档的解释，可以看出 el-dialog 在默认情况下，已经实现了我们需要解决的需求。所以，我让他看看 el-dialog 的源码，是如何实现的。\n            ")]),s._v(" "),v("p",[s._v("\n                他一听要看源码，就露出了恐惧之情。\n                "),v("img",{attrs:{src:t("bz4X")}})]),s._v(" "),v("p",[s._v("\n                源码是所有框架和API的根基，因为比较复杂深邃，所以让人很抗拒。我自己也经历过这个阶段，所以非常理解他的心情，鼓励他一起做一次尝试。\n            ")]),s._v(" "),v("h2",[s._v("查找源码")]),s._v(" "),v("p",[s._v("\n                首先，我们在 node_modules 里，找到了 element-ui 的文件夹，它大致长这个样子：\n                "),v("img",{attrs:{src:t("H5gy")}}),s._v("\n\n                接着，我们找到了 packages 里的 dialog 文件夹，再从 index 入口，找到了组件 component.vue。点进去找了半天，也只找到个 "),v("strong",[s._v("closeOnPressEscape")]),s._v(" 属性的定义，却没有实现的方法。\n\n                "),v("pre",{staticClass:"hljs scala"},[v("code",{},[s._v("..."),v("br"),s._v("closeOnPressEscape: {"),v("br"),s._v("    "),v("span",{staticClass:"hljs-class"},[v("span",{staticClass:"hljs-keyword"},[s._v("type")])]),s._v(": "),v("span",{staticClass:"hljs-type"},[s._v("Boolean")]),s._v(","),v("br"),s._v("    "),v("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(": "),v("span",{staticClass:"hljs-literal"},[s._v("true")]),v("br"),s._v("},"),v("br"),s._v("...")])]),s._v("\n\n                这么神奇么？只定义一个属性，就能实现一个事件的交互了？\n            ")]),s._v(" "),v("p",[s._v("\n                感觉不太可能，为了揭开迷雾，继续找。。。\n            ")]),s._v(" "),v("p",[s._v("\n                仔细浏览了 component.vue 文件，发现在 script 里，引入下面 3 个文件：\n                "),v("pre",{staticClass:"hljs typescript"},[v("code",{},[v("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" Popup "),v("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),v("span",{staticClass:"hljs-string"},[s._v("'element-ui/src/utils/popup'")]),s._v(";"),v("br"),v("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" Migrating "),v("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),v("span",{staticClass:"hljs-string"},[s._v("'element-ui/src/mixins/migrating'")]),s._v(";"),v("br"),v("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" emitter "),v("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),v("span",{staticClass:"hljs-string"},[s._v("'element-ui/src/mixins/emitter'")]),s._v(";"),v("br"),s._v("...")])]),s._v("\n                在第一个引入的 Popup 中，竟然也发现了 "),v("strong",[s._v("closeOnPressEscape")]),s._v("，感觉似乎找对方向了。\n            ")]),s._v(" "),v("p",[s._v("\n                令人沮丧的是，Popup 中同样只有 "),v("strong",[s._v("closeOnPressEscape")]),s._v(" 的属性定义，却没有实现。但是它却引入了另一个辅助文件 "),v("strong",[s._v("PopupManager")]),s._v("。\n            ")]),s._v(" "),v("p",[s._v("\n                哇！终于找到了！它的实现，是这样的：\n                "),v("pre",{staticClass:"hljs javascript"},[v("code",{},[v("span",{staticClass:"hljs-comment"},[s._v("// handle `esc` key when the popup is shown")]),v("br"),v("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v(".addEventListener("),v("span",{staticClass:"hljs-string"},[s._v("'keydown'")]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"},[s._v("event")]),s._v(") ")]),s._v("{"),v("br"),s._v("    "),v("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (event.keyCode === "),v("span",{staticClass:"hljs-number"},[s._v("27")]),s._v(") {"),v("br"),s._v("        "),v("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" topPopup = getTopPopup();"),v("br"),v("br"),s._v("        "),v("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (topPopup && topPopup.closeOnPressEscape) {"),v("br"),s._v("            topPopup.handleClose"),v("br"),s._v("                ? topPopup.handleClose()"),v("br"),s._v("                : (topPopup.handleAction"),v("br"),s._v("                    ? topPopup.handleAction("),v("span",{staticClass:"hljs-string"},[s._v("'cancel'")]),s._v(")"),v("br"),s._v("                    : topPopup.close());"),v("br"),s._v("        }"),v("br"),s._v("    }"),v("br"),s._v("});")])]),s._v("\n                原来，是在 window 上添加了事件监听 keydown，当监测到是 ESC 的 keyCode 时，则执行相关操作。\n            ")]),s._v(" "),v("h2",[s._v("模仿源码")]),s._v(" "),v("p",[s._v("\n                ok，现在已经知晓了原理，那就按照我们的实际需求，模仿改造一下：\n                "),v("pre",{staticClass:"hljs kotlin"},[v("code",{},[s._v("..."),v("br"),s._v("props: {"),v("br"),s._v("    ..."),v("br"),s._v("    closeOnPressEscape: {"),v("br"),s._v("        type: "),v("span",{staticClass:"hljs-built_in"},[s._v("Boolean")]),s._v(","),v("br"),s._v("        "),v("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(": "),v("span",{staticClass:"hljs-literal"},[s._v("true")]),v("br"),s._v("    }"),v("br"),s._v("},"),v("br"),s._v("..."),v("br"),s._v("mounted () {"),v("br"),s._v("    window.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v("'keydown'")]),s._v(", "),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".handlePressEscape);"),v("br"),s._v("},"),v("br"),v("br"),s._v("destroyed () {"),v("br"),s._v("    window.removeEventListener("),v("span",{staticClass:"hljs-string"},[s._v("'keydown'")]),s._v(", "),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".handlePressEscape);"),v("br"),s._v("},"),v("br"),v("br"),s._v("methods: {"),v("br"),s._v("    ..."),v("br"),s._v("    handlePressEscape (event) {"),v("br"),s._v("        "),v("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" ("),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".closeOnPressEscape && event.keyCode === "),v("span",{staticClass:"hljs-number"},[s._v("27")]),s._v(") {"),v("br"),s._v("            "),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".handleClose();"),v("br"),s._v("        }"),v("br"),s._v("    }"),v("br"),s._v("}")])]),s._v("\n                在上述实现中，有2个需要注意的点：\n                "),v("ul",[v("li",[s._v("代码方面，在 mounted 中，给 window 添加事件监听之后，要记得在 destroyed 时，去除监听。")]),s._v(" "),v("li",[s._v("业务方面，这是一个我们定制的通用的弹出层组件，所以在 props 中定义了一个 closeOnPressEscape 属性，以方便在某些业务场景下，不需要按 ESC 就退出这个功能的时候，直接设置它为 false 即可。")])]),s._v("\n                到此为止，整个事件画上了圆满的句号。\n            ")]),s._v(" "),v("h2",[s._v("源码真有那么可怕吗？")]),s._v(" "),v("p",[v("strong",[s._v("源码")]),s._v("一词，乍一听就是神秘、高大上、吊炸天的代名词，让很多的前端同学闻风丧胆。回想当初，我也曾一度对它有一股深深的恐惧。\n            ")]),s._v(" "),v("p",[s._v("\n                源码真的这么可怕吗？\n            ")]),s._v(" "),v("p",[s._v("\n                从以上的事例中可以看出，其实并没有。例子中的element-ui源码并不复杂，我和小伙伴S一起看源码时，他也大概都能看得明白。最后因为弄懂了背后的原理，进行简单应用，比较轻松就解决了问题。\n            ")]),s._v(" "),v("p",[v("strong",[s._v("对于源码的恐惧，让我们渐渐思维固化，自己告诉自己不要去碰源码，时间长了就遗忘了还有这样一条路可走。")])]),s._v(" "),v("h2",[s._v("面试中的应用")]),s._v(" "),v("p",[s._v("\n                关于对源代码的考察，我也会经常应用在面试中。在面试中，如果候选人给我的感觉不错，我的惯用伎俩是问下面这个问题：\n                ")]),v("blockquote",[v("p",[s._v("\n                        刚才你说到，用过一段时间 xxx 框架，xx API属性也用过，也很清楚它达到的效果。\n                    ")]),s._v(" "),v("br"),s._v(" "),v("p",[s._v("\n                        那么现在，如果需要你实现一个类似的效果，抛开 xxx 框架以及 xx API属性，\n                    ")]),s._v(" "),v("br"),s._v(" "),v("p",[s._v("\n                        你会如何去实现，有没有其他思路？\n                    ")])]),s._v(" "),v("p"),s._v(" "),v("p",[s._v("\n                这个问题，意在考量候选人的思维方式和解决问题的能力，以及把他思考的过程阐述清楚的表达能力。这三种能力，往往比使用过某些框架的经验，更让我看中。\n            ")]),s._v(" "),v("p",[s._v("\n                这道题的回答思路，其实就是可以通过挖掘源码，去实现功能。另外也可以用原生的js实现，但这条路没有直接挖掘源码来得快。 在遇到实际的业务问题的时候，参考源码的原理和写法，往往能更快地解决问题。\n            ")]),s._v(" "),v("p",[s._v("\n                这是我自己对这道题目的给出的答案。\n            ")]),s._v(" "),v("h2",[s._v("一点点思考")]),s._v(" "),v("p",[s._v("\n                昨天的案例，引发了我的一连串思考：\n            ")]),s._v(" "),v("p",[s._v("\n                现代框架的确降低了前端入门的门槛，提高了开发效率。\n            ")]),s._v(" "),v("p",[s._v("\n                但是，"),v("strong",[s._v("在使用这些框架的过程中，我们到底学到了什么？")])]),s._v(" "),v("p",[v("strong",[s._v("脱离了框架和它的API，我们脑海中还剩下些什么？")])]),s._v(" "),v("p",[v("strong",[s._v("以至于，当下一个更新更棒的框架出现的时候，我们是否能够用已经学到的知识，帮助自己更迅速地上手？")])]),s._v(" "),v("p",[v("strong",[s._v("知其然，并知其所以然")]),s._v("，学习所有的知识都应当有这种探索精神。我们不仅仅是代码的搬运工。领悟这些深层次的原理，比起仅仅熟练地掌握一门框架，要实用得多。\n            ")])])])],1)},[],!1,null,null,null);a.options.__file="thinking-of-solution.vue";n.default=a.exports},H5gy:function(s,n,t){s.exports=t.p+"assets/bg-20190109-02.2eb00df.png"},QVWo:function(s,n){s.exports="data:image/png;base64,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"},bz4X:function(s,n,t){s.exports=t.p+"assets/bg-20190109-03.233896b.jpg"}}]);