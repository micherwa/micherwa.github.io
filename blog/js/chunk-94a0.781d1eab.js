(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-94a0"],{"9XsX":function(s,t,a){"use strict";a.r(t);var v={},n=a("psIG"),l=Object(n.a)(v,function(){var s=this,t=s.$createElement,v=s._self._c||t;return v("div",{staticClass:"blog-container"},[v("BlogHeader"),s._v(" "),v("BlogContent",{attrs:{useCatalog:!0}},[v("div",{attrs:{slot:"content"},slot:"content"},[v("h2",[s._v("前言")]),s._v(" "),v("p",[s._v("这是前端面试题系列的第 7 篇，你可能错过了前面的篇章，可以在这里找到：")]),s._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://juejin.im/post/5c677041f265da2de25b7707",target:"_blank"}},[s._v("理解函数的柯里化")])]),s._v(" "),v("li",[v("a",{attrs:{href:"https://juejin.im/post/5c612a60f265da2da15d9986",target:"_blank"}},[s._v("ES6 中箭头函数的用法")])]),s._v(" "),v("li",[v("a",{attrs:{href:"https://juejin.im/post/5c428ce0f265da612b13dca7",target:"_blank"}},[s._v("this 的原理以及用法")])]),s._v(" "),v("li",[v("a",{attrs:{href:"https://juejin.im/post/5c36fd0f6fb9a049cd5465cd",target:"_blank"}},[s._v("伪类与伪元素的区别及实战")])]),s._v(" "),v("li",[v("a",{attrs:{href:"https://juejin.im/post/5c394fece51d45524c7cc712",target:"_blank"}},[s._v("如何实现一个圣杯布局？")])]),s._v(" "),v("li",[v("a",{attrs:{href:"https://juejin.im/post/5c394da4518825253661bd4d",target:"_blank"}},[s._v("今日头条 面试题和思路解析")])])]),s._v(" "),v("p",[s._v("\n                最近，小伙伴L 在温习 《JavaScript高级程序设计》中的 "),v("code",[s._v("事件")]),s._v(" 这一章节时，产生了困惑。\n            ")]),s._v(" "),v("p",[s._v("\n                他问了我这样几个问题：\n                "),v("ul",[v("li",[s._v("\n                        了解事件流的顺序，对日常的工作有什么帮助么？\n                    ")]),s._v(" "),v("li",[s._v("\n                        在 vue 的文档中，有一个修饰符 "),v("strong",[s._v("native")]),s._v(" ，把它用 "),v("code",[s._v(".")]),s._v(" 的形式 连结在事件之后，就可以监听原生事件了。它的背后有什么原理？\n                    ")]),s._v(" "),v("li",[s._v("\n                        事件的 event 对象中，有好多的属性和方法，该如何使用？\n                    ")])]),s._v("\n\n                浏览器中的事件机制，也经常在面试中被提及。所以这回，我们共同探讨了这些问题，并最终整理成文，希望帮到有需要的同学。\n            ")]),s._v(" "),v("h2",[s._v("事件流的概念")]),s._v(" "),v("p",[s._v("\n                先从概念说起，DOM 事件流分为三个阶段："),v("code",[s._v("捕获阶段")]),s._v("、"),v("code",[s._v("目标阶段")]),s._v("、"),v("code",[s._v("冒泡阶段")]),s._v("。先调用捕获阶段的处理函数，其次调用目标阶段的处理函数，最后调用冒泡阶段的处理函数。\n                "),v("img",{attrs:{src:a("H+qP")}})]),s._v(" "),v("p",[s._v("\n                网景公司提出了 "),v("code",[s._v("事件捕获")]),s._v("的事件流。这就好比采矿的小游戏，每次都会从地面开始一路往下，抛出抓斗，捕获矿石。在上图中就是，某个 div 元素触发了某个事件，最先得到通知的是 window，然后是 document，依次往下，直到真正触发事件的那个目标元素 div 为止。\n            ")]),s._v(" "),v("p",[s._v("\n                而 "),v("code",[s._v("事件冒泡")]),s._v(" 则是由微软提出的，与之顺序相反。还是刚才的采矿小游戏，命中目标后，抓斗再沿路收回，直到冒出地面。在上图中就是，事件会从目标元素 div 开始依次往上，直到 window 对象为止。\n            ")]),s._v(" "),v("p",[s._v("\n                w3c 为了制定统一的标准，采取了折中的方式："),v("strong",[s._v("先捕获在冒泡")]),s._v("。同一个 DOM 元素可以注册多个同类型的事件，通过 addEventListener 和 removeEventListener 进行管理。addEventListener 的第三个参数，就是为了捕获和冒泡准备的。\n            ")]),s._v(" "),v("p",[v("code",[s._v("注册事件")]),s._v('(addEventListener) 有三个参数，分别为："事件名称", "事件回调", "捕获/冒泡"(布尔型，true代表捕获事件，false代表冒泡事件)。\n                '),v("pre",{staticClass:"hljs scala"},[v("code",{staticClass:"focus",staticStyle:{"word-break":"break-word","white-space":"initial"}},[s._v("target.addEventListener("),v("span",{staticClass:"hljs-class"},[v("span",{staticClass:"hljs-keyword"},[s._v("type")]),s._v(", "),v("span",{staticClass:"hljs-title"},[s._v("listener")]),s._v("[, useCapture])")]),s._v(";")])]),s._v(" "),v("ul",[v("li",[s._v("type 表示事件类型的字符串。")]),s._v(" "),v("li",[s._v("\n                        listener 是一个实现了 EventListener 接口的对象，或者是一个函数。当所监听的事件类型触发时，会接收到一个事件通知对象（实现了 Event 接口的对象）。\n                    ")]),s._v(" "),v("li",[s._v("\n                        capture 表示 listener 会在该类型的事件捕获阶段，传播到该 EventTarget 时触发，它是一个 Boolean 值。\n                    ")])])]),s._v(" "),v("p",[v("code",[s._v("解除事件")]),s._v('(removeEventListener) 也有三个参数，分别为："事件名称", "事件回调", "捕获/冒泡"(Boolean 值，这个必须和注册事件时的类型一致)。\n                '),v("pre",{staticClass:"hljs scala"},[v("code",{staticClass:"focus",staticStyle:{"word-break":"break-word","white-space":"initial"}},[s._v("target.removeEventListener("),v("span",{staticClass:"hljs-class"},[v("span",{staticClass:"hljs-keyword"},[s._v("type")]),s._v(", "),v("span",{staticClass:"hljs-title"},[s._v("listener")]),s._v("[, useCapture])")]),s._v(";")])]),s._v("\n                要想注册过的事件能够被解除，必须将回调函数保存起来，否则无法解除。例如这样：\n                "),v("pre",{staticClass:"hljs javascript"},[v("code",{},[v("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" btn = "),v("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".getElementById("),v("span",{staticClass:"hljs-string"},[s._v('"test"')]),s._v(");"),v("br"),v("br"),v("span",{staticClass:"hljs-comment"},[s._v("//将回调存储在变量中")]),v("br"),v("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" fn = "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(")")]),s._v("{"),v("br"),s._v("    alert("),v("span",{staticClass:"hljs-string"},[s._v('"ok"')]),s._v(");"),v("br"),s._v("};"),v("br"),v("br"),v("span",{staticClass:"hljs-comment"},[s._v("//绑定")]),v("br"),s._v("btn.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(", fn, "),v("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(");"),v("br"),v("br"),v("span",{staticClass:"hljs-comment"},[s._v("//解除")]),v("br"),s._v("btn.removeEventListener("),v("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(", fn, "),v("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(");")])])]),s._v(" "),v("h2",[s._v("事件捕获和冒泡的5个注意点")]),s._v(" "),v("p",[s._v("\n                当有多层交互嵌套时，事件捕获和冒泡的先后顺序，似乎不是那么好理解。接下来，将分 5 种情况讨论它们的顺序，以及如何规避意外情况的发生。\n            ")]),s._v(" "),v("h4",[s._v("\n                1.在外层 div 注册事件，点击内层 div 来触发事件时，捕获事件总是要比冒泡事件先触发(与代码顺序无关)\n            ")]),s._v(" "),v("p",[s._v("\n                假设，有这样的 html 结构：\n                "),v("pre",{staticClass:"hljs applescript"},[v("code",{},[s._v("<"),v("span",{staticClass:"hljs-keyword"},[s._v("div")]),s._v(" "),v("span",{staticClass:"hljs-built_in"},[s._v("id")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"test"')]),s._v(" "),v("span",{staticClass:"hljs-built_in"},[s._v("class")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"test"')]),s._v(">"),v("br"),s._v("   <"),v("span",{staticClass:"hljs-keyword"},[s._v("div")]),s._v(" "),v("span",{staticClass:"hljs-built_in"},[s._v("id")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"testInner"')]),s._v(" "),v("span",{staticClass:"hljs-built_in"},[s._v("class")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"test-inner"')]),s._v("></"),v("span",{staticClass:"hljs-keyword"},[s._v("div")]),s._v(">"),v("br"),s._v("</"),v("span",{staticClass:"hljs-keyword"},[s._v("div")]),s._v(">")])]),s._v("\n                然后，我们在外层 div 上注册两个 click 事件，分别是捕获事件和冒泡事件，代码如下：\n                "),v("pre",{staticClass:"hljs javascript"},[v("code",{},[v("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" btn = "),v("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".getElementById("),v("span",{staticClass:"hljs-string"},[s._v('"test"')]),s._v(");"),v("br"),s._v(" "),v("br"),v("span",{staticClass:"hljs-comment"},[s._v("//捕获事件")]),v("br"),s._v("btn.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(")")]),s._v("{"),v("br"),s._v("    alert("),v("span",{staticClass:"hljs-string"},[s._v('"capture is ok"')]),s._v(");"),v("br"),s._v("}, "),v("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(");"),v("br"),s._v(" "),v("br"),v("span",{staticClass:"hljs-comment"},[s._v("//冒泡事件")]),v("br"),s._v("btn.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(")")]),s._v("{"),v("br"),s._v("    alert("),v("span",{staticClass:"hljs-string"},[s._v('"bubble is ok"')]),s._v(");"),v("br"),s._v("}, "),v("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(");")])]),s._v("\n                点击内层的 div，先弹出 "),v("code",[s._v("capture is ok")]),s._v("，后弹出 "),v("code",[s._v("bubble is ok")]),s._v("。只有当真正触发事件的 DOM 元素是内层的时候，外层 DOM 元素才有机会模拟捕获事件和冒泡事件。\n            ")]),s._v(" "),v("h4",[s._v("2.当在触发事件的 DOM 元素上注册事件时，哪个先注册，就先执行哪个")]),s._v(" "),v("p",[s._v("\n                html 结构同上，js 代码如下：\n                "),v("pre",{staticClass:"hljs javascript"},[v("code",{},[v("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" btnInner = "),v("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".getElementById("),v("span",{staticClass:"hljs-string"},[s._v('"testInner"')]),s._v(");"),v("br"),v("br"),v("span",{staticClass:"hljs-comment"},[s._v("//冒泡事件")]),v("br"),s._v("btnInner.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(")")]),s._v("{"),v("br"),s._v("    alert("),v("span",{staticClass:"hljs-string"},[s._v('"bubble is ok"')]),s._v(");"),v("br"),s._v("}, "),v("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(");"),v("br"),s._v(" "),v("br"),v("span",{staticClass:"hljs-comment"},[s._v("//捕获事件")]),v("br"),s._v("btnInner.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(")")]),s._v("{"),v("br"),s._v("    alert("),v("span",{staticClass:"hljs-string"},[s._v('"capture is ok"')]),s._v(");"),v("br"),s._v("}, "),v("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(");")])]),s._v("\n                本例中，冒泡事件先注册，所以先执行。所以，点击内层 div，先弹出 "),v("code",[s._v("bubble is ok")]),s._v("，再弹出 "),v("code",[s._v("capture is ok")]),s._v("。\n            ")]),s._v(" "),v("h4",[s._v("3.当外层 div 和内层 div 同时注册了捕获事件时，点击内层 div 时，外层 div 的事件一定会先触发")]),s._v(" "),v("p",[s._v("\n                js 代码如下：\n                "),v("pre",{staticClass:"hljs javascript"},[v("code",{},[v("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" btn = "),v("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".getElementById("),v("span",{staticClass:"hljs-string"},[s._v('"test"')]),s._v(");"),v("br"),v("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" btnInner = "),v("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".getElementById("),v("span",{staticClass:"hljs-string"},[s._v('"testInner"')]),s._v(");"),v("br"),v("br"),s._v("btnInner.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(")")]),s._v("{"),v("br"),s._v("    alert("),v("span",{staticClass:"hljs-string"},[s._v('"inner capture is ok"')]),s._v(");"),v("br"),s._v("}, "),v("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(");"),v("br"),v("br"),s._v("btn.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(")")]),s._v("{"),v("br"),s._v("    alert("),v("span",{staticClass:"hljs-string"},[s._v('"outer capture is ok"')]),s._v(");"),v("br"),s._v("}, "),v("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(");")])]),s._v("\n                虽然外层 div 的事件注册在后面，但会先触发。所以，结果是先弹出 "),v("code",[s._v("outer capture is ok")]),s._v("，再弹出 "),v("code",[s._v("inner capture is ok")]),s._v("。\n            ")]),s._v(" "),v("h4",[s._v("4.同理，当外层 div 和内层 div 都同时注册了冒泡事件，点击内层 div 时，一定是内层 div 事件先触发。")]),s._v(" "),v("p",[v("pre",{staticClass:"hljs javascript"},[v("code",{},[v("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" btn = "),v("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".getElementById("),v("span",{staticClass:"hljs-string"},[s._v('"test"')]),s._v(");"),v("br"),v("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" btnInner = "),v("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".getElementById("),v("span",{staticClass:"hljs-string"},[s._v('"testInner"')]),s._v(");"),v("br"),v("br"),s._v("btn.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(")")]),s._v("{"),v("br"),s._v("    alert("),v("span",{staticClass:"hljs-string"},[s._v('"outer bubble is ok"')]),s._v(");"),v("br"),s._v("}, "),v("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(");"),v("br"),v("br"),s._v("btnInner.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(")")]),s._v("{"),v("br"),s._v("    alert("),v("span",{staticClass:"hljs-string"},[s._v('"inner bubble is ok"')]),s._v(");"),v("br"),s._v("}, "),v("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(");")])]),s._v("\n                先弹出 "),v("code",[s._v("inner bubble is ok")]),s._v("，再弹出 "),v("code",[s._v("outer bubble is ok")]),s._v("。\n            ")]),s._v(" "),v("h4",[s._v("5.阻止事件的派发")]),s._v(" "),v("p",[s._v("\n                通常情况下，我们都希望点击某个 div 时，就只触发自己的事件回调。比如，明明点击的是内层 div，但是外层 div 的事件也触发了，这是就不是我们想要的了。这时，就需要阻止事件的派发。\n            ")]),s._v(" "),v("p",[s._v("\n                事件触发时，会默认传入一个 event 对象，这个 event 对象上有一个方法："),v("code",[s._v("stopPropagation")]),s._v("。MDN 上的解释是："),v("strong",[s._v("阻止 捕获 和 冒泡 阶段中，当前事件的进一步传播")]),s._v("。所以，通过此方法，让外层 div 接收不到事件，自然也就不会触发了。\n                "),v("pre",{staticClass:"hljs javascript"},[v("code",{},[s._v("btnInner.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),v("span",{staticClass:"hljs-params"},[s._v("(e)")])]),s._v("{"),v("br"),s._v("    "),v("span",{staticClass:"hljs-comment"},[s._v("//阻止冒泡")]),v("br"),s._v("    e.stopPropagation();"),v("br"),s._v("    alert("),v("span",{staticClass:"hljs-string"},[s._v('"inner bubble is ok"')]),s._v(");"),v("br"),s._v("}, "),v("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(");")])])]),s._v(" "),v("h2",[s._v("事件代理")]),s._v(" "),v("p",[s._v("\n                我们经常会遇到，要监听列表中多项 li 的情况，假设我们有一个列表如下：\n                "),v("pre",{staticClass:"hljs xml"},[v("code",{},[v("span",{staticClass:"hljs-tag"},[s._v("<"),v("span",{staticClass:"hljs-name"},[s._v("ul")]),s._v(" "),v("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"list"')]),s._v(">")]),v("br"),s._v("    "),v("span",{staticClass:"hljs-tag"},[s._v("<"),v("span",{staticClass:"hljs-name"},[s._v("li")]),s._v(" "),v("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"item1"')]),s._v(">")]),s._v("item1"),v("span",{staticClass:"hljs-tag"},[s._v("</"),v("span",{staticClass:"hljs-name"},[s._v("li")]),s._v(">")]),v("br"),s._v("    "),v("span",{staticClass:"hljs-tag"},[s._v("<"),v("span",{staticClass:"hljs-name"},[s._v("li")]),s._v(" "),v("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"item2"')]),s._v(">")]),s._v("item2"),v("span",{staticClass:"hljs-tag"},[s._v("</"),v("span",{staticClass:"hljs-name"},[s._v("li")]),s._v(">")]),v("br"),s._v("    "),v("span",{staticClass:"hljs-tag"},[s._v("<"),v("span",{staticClass:"hljs-name"},[s._v("li")]),s._v(" "),v("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"item3"')]),s._v(">")]),s._v("item3"),v("span",{staticClass:"hljs-tag"},[s._v("</"),v("span",{staticClass:"hljs-name"},[s._v("li")]),s._v(">")]),v("br"),s._v("    "),v("span",{staticClass:"hljs-tag"},[s._v("<"),v("span",{staticClass:"hljs-name"},[s._v("li")]),s._v(" "),v("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"item4"')]),s._v(">")]),s._v("item4"),v("span",{staticClass:"hljs-tag"},[s._v("</"),v("span",{staticClass:"hljs-name"},[s._v("li")]),s._v(">")]),v("br"),v("span",{staticClass:"hljs-tag"},[s._v("</"),v("span",{staticClass:"hljs-name"},[s._v("ul")]),s._v(">")])])]),s._v("\n                如果我们要实现以下功能：当鼠标点击某一 li 时，输出该 li 的内容，我们通常的写法是这样的：\n                "),v("pre",{staticClass:"hljs javascript"},[v("code",{},[v("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v(".onload="),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{"),v("br"),s._v("    "),v("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" ulNode = "),v("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".getElementById("),v("span",{staticClass:"hljs-string"},[s._v('"list"')]),s._v(");"),v("br"),s._v("    "),v("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" liNodes = ulNode.children;"),v("br"),s._v("    "),v("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v("("),v("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" i="),v("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("; i<liNodes.length; i++){"),v("br"),s._v("        liNodes[i].addEventListener("),v("span",{staticClass:"hljs-string"},[s._v("'click'")]),s._v(","),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(")")]),s._v("{"),v("br"),s._v("            "),v("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(e.target.innerHTML);"),v("br"),s._v("        }, "),v("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(");"),v("br"),s._v("    }"),v("br"),s._v("}")])]),s._v("\n                在传统的事件处理中，我们可能会按照需要，为每一个元素添加或者删除事件处理器。然而，事件处理器将有可能导致内存泄露，或者性能下降，用得越多这种风险就越大。JavaScript 的事件代理，则是一种简单的技巧。\n            ")]),s._v(" "),v("h4",[s._v("用法及原理")]),s._v(" "),v("p",[s._v("\n                事件代理，用到了在 JavaSciprt 事件中的两个特性："),v("code",[s._v("事件冒泡")]),s._v(" 和 "),v("code",[s._v("目标元素")]),s._v("。使用事件代理，我们可以把事件处理器添加到一个元素上，等待一个事件从它的子级元素里冒泡上来，并且可以得知这个事件是从哪个元素开始的。\n            ")]),s._v(" "),v("p",[s._v("\n                改进后的 js 代码如下：\n                "),v("pre",{staticClass:"hljs javascript"},[v("code",{},[v("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v(".onload="),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{"),v("br"),s._v("    "),v("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" ulNode="),v("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".getElementById("),v("span",{staticClass:"hljs-string"},[s._v('"list"')]),s._v(");"),v("br"),s._v("    ulNode.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v("'click'")]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(") ")]),s._v("{"),v("br"),s._v("        "),v("span",{staticClass:"hljs-comment"},[s._v("/*判断目标事件是否为li*/")]),v("br"),s._v("        "),v("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v("(e.target && e.target.nodeName.toUpperCase()=="),v("span",{staticClass:"hljs-string"},[s._v('"LI"')]),s._v("){"),v("br"),s._v("            "),v("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(e.target.innerHTML);"),v("br"),s._v("        }"),v("br"),s._v("    }, "),v("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(");"),v("br"),s._v("};")])])]),s._v(" "),v("h2",[s._v("一些常用技巧")]),s._v(" "),v("p",[s._v("\n                回到文章开头的问题：了解事件流的顺序，对日常的工作有什么帮助呢？我总结了以下几个注意点。\n            ")]),s._v(" "),v("h4",[s._v("1. 阻止默认事件")]),s._v(" "),v("p",[s._v("\n                比如 href 的链接跳转，submit 的表单提交等。可以在方法的最后，加上一行 "),v("code",[s._v("return false;")]),s._v("。它会阻止通过 on 的方式绑定的事件的默认事件。\n                "),v("pre",{staticClass:"hljs actionscript"},[v("code",{},[s._v("ele.onclick = "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),v("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" ")]),s._v("{"),v("br"),s._v("    ……"),v("br"),s._v("    "),v("span",{staticClass:"hljs-comment"},[s._v("// 通过返回 false 值，阻止默认事件行为")]),v("br"),s._v("    "),v("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),v("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(";"),v("br"),s._v("}")])]),s._v("\n                另外，重写 onclick 会覆盖之前的属性，所以解绑事件可以这么写：\n                "),v("pre",{staticClass:"hljs scala"},[v("code",{},[v("span",{staticClass:"hljs-comment"},[s._v("// 解绑事件，将 onlick 属性设为 null 即可")]),v("br"),s._v("ele.onclick = "),v("span",{staticClass:"hljs-literal"},[s._v("null")]),s._v(";")])])]),s._v(" "),v("h4",[s._v("2. stopPropagation 和 stopImmediatePropagation")]),s._v(" "),v("p",[s._v("\n                前面说过 stopPropagation 的定义是：终止事件在传播过程的捕获、目标处理或起泡阶段进一步传播。事件不再被分派到其他节点上。\n                "),v("pre",{staticClass:"hljs actionscript"},[v("code",{},[v("span",{staticClass:"hljs-comment"},[s._v("// 事件捕获到 ele 元素后，就不再向下传播了")]),v("br"),s._v("ele.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v("'click'")]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),v("span",{staticClass:"hljs-params"},[s._v("(event)")]),s._v(" ")]),s._v("{"),v("br"),s._v("  event.stopPropagation();"),v("br"),s._v("}, "),v("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(");"),v("br"),v("br"),v("span",{staticClass:"hljs-comment"},[s._v("// 事件冒泡到 ele 元素后，就不再向上传播了")]),v("br"),s._v("ele.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v("'click'")]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),v("span",{staticClass:"hljs-params"},[s._v("(event)")]),s._v(" ")]),s._v("{"),v("br"),s._v("  event.stopPropagation();"),v("br"),s._v("}, "),v("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(");")])]),s._v("\n                但是，stopPropagation 只会阻止当前元素 "),v("code",[s._v("同类型的")]),s._v(" 事件冒泡或捕获的传播，并不会阻止该元素上 "),v("code",[s._v("其他类型")]),s._v(" 事件的监听。以 click 事件为例：\n                "),v("pre",{staticClass:"hljs javascript"},[v("code",{},[s._v("ele.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v("'click'")]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),v("span",{staticClass:"hljs-params"},[s._v("event")]),s._v(") ")]),s._v("{"),v("br"),s._v("  event.stopPropagation();"),v("br"),s._v("  "),v("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),v("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(");"),v("br"),s._v("});"),v("br"),v("br"),s._v("ele.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v("'click'")]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"},[s._v("event")]),s._v(") ")]),s._v("{"),v("br"),s._v("  "),v("span",{staticClass:"hljs-comment"},[s._v("// 仍然可以触发")]),v("br"),s._v("  "),v("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),v("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(");"),v("br"),s._v("});")])]),s._v("\n                如果想禁用之后所有的 click 事件，就要用到 stopImmediatePropagation 了。但是，需要注意的是，stopImmediatePropagation 只会禁用之后注册的同类型的监听事件。就比如阻止了之后的 click 事件监听函数，但别的事件类型如 mousedown、dblclick 之类，还是可以监听到的。\n                "),v("pre",{staticClass:"hljs javascript"},[v("code",{},[s._v("ele.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v("'click'")]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),v("span",{staticClass:"hljs-params"},[s._v("event")]),s._v(") ")]),s._v("{"),v("br"),s._v("    event.stopImmediatePropagation();"),v("br"),s._v("    "),v("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),v("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(");"),v("br"),s._v("});"),v("br"),v("br"),s._v("ele.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v("'click'")]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"},[s._v("event")]),s._v(") ")]),s._v("{"),v("br"),s._v("    "),v("span",{staticClass:"hljs-comment"},[s._v("// 不会触发")]),v("br"),s._v("    "),v("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),v("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(");"),v("br"),s._v("});"),v("br"),v("br"),s._v("ele.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v("'mousedown'")]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"},[s._v("event")]),s._v(") ")]),s._v("{"),v("br"),s._v("    "),v("span",{staticClass:"hljs-comment"},[s._v("// 会触发")]),v("br"),s._v("    "),v("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),v("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(");"),v("br"),s._v("});")])])]),s._v(" "),v("h4",[s._v("3. jquery 中的 return false;")]),s._v(" "),v("p",[s._v("\n                jquery 中的 on 是事件冒泡。当用 return false; 阻止浏览器的默认行为时，会做下面这 3 件事：\n                "),v("ul",[v("li",[s._v("1. event.preventDefault();")]),s._v(" "),v("li",[s._v("2. event.stopPropagation();")]),s._v(" "),v("li",[s._v("3. 停止回调函数执行并立即返回。")])]),s._v("\n                这 3 件事中，只有 preventDefault 是用来阻止默认行为的。除非你还想阻止事件冒泡，否则直接用 return false; 会埋下隐患。\n            ")]),s._v(" "),v("h4",[s._v("4. angular 中的 $event")]),s._v(" "),v("p",[s._v("\n                angular 是个包罗万象的框架，似乎学完它的一整套之后，就能玩转世界了。它加工封装了许多原生的东西，其中就包括了 event，只是前面需要加一个 $，表示这是 angular 中的特有对象。\n                "),v("pre",{staticClass:"hljs xml"},[v("code",{},[s._v("// template"),v("br"),v("span",{staticClass:"hljs-tag"},[s._v("<"),v("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),v("br"),s._v("    "),v("span",{staticClass:"hljs-tag"},[s._v("<"),v("span",{staticClass:"hljs-name"},[s._v("button")]),s._v(" ("),v("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v(")="),v("span",{staticClass:"hljs-string"},[s._v('"doSomething($event)"')]),s._v(">")]),s._v("Click me"),v("span",{staticClass:"hljs-tag"},[s._v("</"),v("span",{staticClass:"hljs-name"},[s._v("button")]),s._v(">")]),v("br"),v("span",{staticClass:"hljs-tag"},[s._v("</"),v("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),v("br"),v("br"),s._v("// js"),v("br"),s._v("doSomething($event: Event) {"),v("br"),s._v("    $event.stopPropagation();"),v("br"),s._v("    ..."),v("br"),s._v("}")])]),s._v("\n                $event 在这里作为一个变量，"),v("code",[s._v("显式地")]),s._v(" 传入回调函数，之后就可以将 $event 当做原生的事件对象来用了。\n            ")]),s._v(" "),v("h4",[s._v("5. vue 中的 native 修饰符")]),s._v(" "),v("p",[s._v("\n                在 vue 的自定义组件中绑定原生事件，需要用到修饰符 native。\n            ")]),s._v(" "),v("p",[s._v("\n                那是因为，我们的自定义组件，最终会渲染成原生的 html 标签，而非类似于 "),v("code",[v("MyButton")],1),s._v(" 这样的自定义组件。如果想让一个普通的 html 标签触发事件，那就需要对它做事件监听(addEventListener)。修饰符 native 的作用就在这里，它可以在背后帮我们绑定了原生事件，进行监听。\n            ")]),s._v(" "),v("p",[s._v("\n                一个常用的场景是，配合 element-ui 做登录界面时，输完账号密码，想按一下回车就能登录。就可以像下面这样用修饰符：\n                "),v("pre",{staticClass:"hljs scala"},[v("code",{},[s._v("<el-input"),v("br"),s._v("    "),v("span",{staticClass:"hljs-class"},[v("span",{staticClass:"hljs-keyword"},[s._v("class")])]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"input"')]),v("br"),s._v("    v-model="),v("span",{staticClass:"hljs-string"},[s._v('"password"')]),s._v(" "),v("span",{staticClass:"hljs-class"},[v("span",{staticClass:"hljs-keyword"},[s._v("type")])]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"password"')]),v("br"),s._v("    "),v("span",{staticClass:"hljs-meta"},[s._v("@keyup")]),s._v(".enter.native="),v("span",{staticClass:"hljs-string"},[s._v('"handleSubmit"')]),s._v(">"),v("br"),s._v("</el-input>")])]),s._v("\n                el-input 就是自定义组件，而 keyup 就是原生事件，需要用 native 修饰符进行绑定才能监听到。\n            ")]),s._v(" "),v("h4",[s._v("6. react 中的合成事件")]),s._v(" "),v("p",[s._v("\n                想要在 react 的事件回调中使用 event 对象，会产生困扰，会发现不少原生的属性都是 null。\n            ")]),s._v(" "),v("p",[s._v("\n                那是因为在 react 中的事件，其实是合成事件（SyntheticEvent），并不是浏览器的原生事件，但它也符合 w3c 规范。\n            ")]),s._v(" "),v("p",[s._v("\n                举一个简单的例子，我们要实现一个组件，它有一个按钮，点击按钮后会显示一张图片，点击这张图片之外的任意区域，可以隐藏这张图片，但是点击该图片本身时，不会隐藏。代码如下：\n                "),v("pre",{staticClass:"hljs kotlin"},[v("code",{},[v("span",{staticClass:"hljs-class"},[v("span",{staticClass:"hljs-keyword"},[s._v("class")]),s._v(" "),v("span",{staticClass:"hljs-title"},[s._v("ShowImg")]),s._v(" "),v("span",{staticClass:"hljs-title"},[s._v("extends")]),s._v(" "),v("span",{staticClass:"hljs-title"},[s._v("Component")]),s._v(" ")]),s._v("{"),v("br"),s._v("    "),v("span",{staticClass:"hljs-keyword"},[s._v("constructor")]),s._v("(props) {"),v("br"),s._v("        "),v("span",{staticClass:"hljs-keyword"},[s._v("super")]),s._v("(props);"),v("br"),s._v("        "),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".state = {"),v("br"),s._v("          active: "),v("span",{staticClass:"hljs-literal"},[s._v("false")]),v("br"),s._v("        };"),v("br"),s._v("    }"),v("br"),s._v("  "),v("br"),s._v("    componentDidMount() {"),v("br"),s._v("        document.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v("'click'")]),s._v(", "),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".hideImg.bind(this));"),v("br"),s._v("    }"),v("br"),v("br"),s._v("    componentWillUnmount() {"),v("br"),s._v("        document.removeEventListener("),v("span",{staticClass:"hljs-string"},[s._v("'click'")]),s._v(", "),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".hideImg);"),v("br"),s._v("    }"),v("br"),s._v("    "),v("br"),s._v("    hideImg () {"),v("br"),s._v("        "),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".setState({ active: "),v("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(" });"),v("br"),s._v("    }"),v("br"),s._v("    "),v("br"),s._v("    handleClickBtn() {"),v("br"),s._v("        "),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".setState({ active: !"),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".state.active });"),v("br"),s._v("    }"),v("br"),s._v("  "),v("br"),s._v("    handleClickImg (e) {"),v("br"),s._v("        e.stopPropagation();"),v("br"),s._v("    }"),v("br"),v("br"),s._v("    render() {"),v("br"),s._v("        "),v("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" ("),v("br"),s._v("            <div className="),v("span",{staticClass:"hljs-string"},[s._v('"img-wrapper"')]),s._v(">"),v("br"),s._v("                <button"),v("br"),s._v("                    className="),v("span",{staticClass:"hljs-string"},[s._v('"showImgBtn"')]),v("br"),s._v("                    onClick={"),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".handleClickBtn.bind("),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(")}>"),v("br"),s._v("                    显示图片"),v("br"),s._v("                </button>"),v("br"),s._v("                <div"),v("br"),s._v("                    className="),v("span",{staticClass:"hljs-string"},[s._v('"img"')]),v("br"),s._v("                    style={{ display: "),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".state.active ? "),v("span",{staticClass:"hljs-string"},[s._v("'block'")]),s._v(" : "),v("span",{staticClass:"hljs-string"},[s._v("'none'")]),s._v(" }}"),v("br"),s._v("                    onClick={"),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".handleClickImg.bind("),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(")}>"),v("br"),s._v("                    <img src="),v("span",{staticClass:"hljs-string"},[s._v('"@/assets/avatar.jpg"')]),s._v(" >"),v("br"),s._v("                </div>"),v("br"),s._v("            </div>"),v("br"),s._v("        );"),v("br"),s._v("    }"),v("br"),s._v("}")])]),s._v("\n                按照之前说的原生事件机制，我们会错误地认为通过：\n                "),v("pre",{staticClass:"hljs"},[v("code",{},[s._v("handleClickImg (e) {"),v("br"),s._v("    e.stopPropagation();"),v("br"),s._v("}")])]),s._v("\n                就可以阻止事件的派发了，但其实没法这么做。想要解决这个问题，当然也不复杂，就把 react 的事件和原生事件分开即可。\n                "),v("pre",{staticClass:"hljs kotlin"},[v("code",{},[s._v("componentDidMount() {"),v("br"),s._v("    document.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v("'click'")]),s._v(", "),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".hideImg.bind("),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v("));"),v("br"),s._v("    "),v("br"),s._v("    document.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v("'click'")]),s._v(", "),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".imgStopPropagation.bind("),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v("));"),v("br"),s._v("}"),v("br"),v("br"),s._v("componentWillUnmount() {"),v("br"),s._v("    document.removeEventListener("),v("span",{staticClass:"hljs-string"},[s._v("'click'")]),s._v(", "),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".hideImg);"),v("br"),s._v("    "),v("br"),s._v("    document.removeEventListener("),v("span",{staticClass:"hljs-string"},[s._v("'click'")]),s._v(", "),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".imgStopPropagation);"),v("br"),s._v("}"),v("br"),v("br"),s._v("hideImg () {"),v("br"),s._v("    "),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".setState({ active: "),v("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(" });"),v("br"),s._v("}"),v("br"),v("br"),s._v("imgStopPropagation (e) {"),v("br"),s._v("    e.stopPropagation();"),v("br"),s._v("}")])])]),s._v(" "),v("h4",[s._v("7. 事件对象 event")]),s._v(" "),v("p",[s._v("\n                当对一个元素进行事件监听的时候，它的回调函数里就会默认传递一个参数 event，它是一个对象，包含了许多属性。我列出了一些比较常用的属性：\n                "),v("ul",[v("li",[s._v("event.target：指的是触发事件的那个节点，也就是事件最初发生的节点。")]),s._v(" "),v("li",[s._v("event.target.matches：可以对关键节点进行匹配，来执行相应操作。")]),s._v(" "),v("li",[s._v("event.currentTarget：指的是正在执行的监听函数的那个节点。")]),s._v(" "),v("li",[s._v("event.isTrusted：表示事件是否是真实用户触发。")]),s._v(" "),v("li",[s._v("event.preventDefault()：取消事件的默认行为。")]),s._v(" "),v("li",[s._v("event.stopPropagation()：阻止事件的派发（包括了捕获和冒泡）。")]),s._v(" "),v("li",[s._v("event.stopImmediatePropagation()：阻止同一个事件的其他监听函数被调用。")])])]),s._v(" "),v("h2",[s._v("总结")]),s._v(" "),v("p",[s._v("\n                事件机制在浏览器中非常有用，所有用户的交互型操作，都依赖于它。现代 JavaScript 框架应用中，我们也都离不开与原生事件的交互。\n            ")]),s._v(" "),v("p",[s._v("\n                所以，在理解了事件流的概念，清楚了事件捕获与冒泡的顺序，掌握了一些原生事件的技巧之后，相信下次再遇到坑的时候，可以少走一些弯路了。\n            ")])])])],1)},[],!1,null,null,null);l.options.__file="event-principle.vue";t.default=l.exports},"H+qP":function(s,t,a){s.exports=a.p+"assets/bg-20170821-01.1590ed9.png"}}]);