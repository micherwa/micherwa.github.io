(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-a8a9"],{"H+qP":function(s,a,t){s.exports=t.p+"assets/bg-20170821-01.1590ed9.png"},HjhQ:function(s,a,t){"use strict";t.r(a);var v={created:function(){}},l=t("psIG"),n=Object(l.a)(v,function(){var s=this,a=s.$createElement,v=s._self._c||a;return v("div",{staticClass:"blog-container"},[v("BlogHeader",{attrs:{title:"重温JavaScript事件的触发机制",subTitle:"",date:"2017-08-21",tags:["Javascript"]}}),s._v(" "),v("BlogContent",{attrs:{useCatalog:!0}},[v("div",{attrs:{slot:"content"},slot:"content"},[v("h2",[s._v("概念")]),s._v(" "),v("p",[s._v("\n                DOM事件流：将事件分为三个阶段："),v("code",[s._v("捕获阶段")]),s._v("、"),v("code",[s._v("目标阶段")]),s._v("、"),v("code",[s._v("冒泡阶段")]),s._v("。先调用捕获阶段的处理函数，其次调用目标阶段的处理函数，最后调用冒泡阶段的处理函数。\n            ")]),s._v(" "),v("p",[s._v("\n                同一dom元素可以注册多个同种事件，事件有捕获和冒泡的概念。通过addEventListener和removeEventListener管理。\n            ")]),s._v(" "),v("p",[v("code",[s._v("注册事件")]),s._v('(addEventListener) 有三个参数，分别为："事件名称", "事件回调", "捕获/冒泡"(布尔型，true代表捕获事件，false代表冒泡事件)。'),v("br"),s._v("\n                示意图："),v("br"),s._v(" "),v("img",{attrs:{src:t("H+qP")}}),s._v("\n                意思就是说，某个元素触发了某个事件，最先得到通知的是window，然后是document，依次而入，直到真正触发事件的那个元素(目标元素)为止，这个过程就是"),v("code",[s._v("捕获")]),s._v("。接下来，事件会从目标元素开始起泡，再依次而出，直到window对象为止，这个过程就是"),v("code",[s._v("冒泡")]),s._v("。\n            ")]),s._v(" "),v("p",[v("code",[s._v("解除事件")]),s._v('(removeEventListener) 也有三个参数，分别为："事件名称", "事件回调", "捕获/冒泡"(布尔值，这个必须和注册事件时的类型一致)。'),v("br"),s._v("\n                要想注册过的事件能够被解除，必须将回调函数保存起来，否则无法解除。\n                例如这样：\n                "),v("pre",{staticClass:"hljs javascript"},[v("code",{},[v("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" btn = "),v("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".getElementById("),v("span",{staticClass:"hljs-string"},[s._v('"test"')]),s._v(");"),v("br"),v("br"),v("span",{staticClass:"hljs-comment"},[s._v("//将回调存储在变量中")]),v("br"),v("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" fn = "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(")")]),s._v("{"),v("br"),s._v("    alert("),v("span",{staticClass:"hljs-string"},[s._v('"ok"')]),s._v(");"),v("br"),s._v("};"),v("br"),v("br"),v("span",{staticClass:"hljs-comment"},[s._v("//绑定")]),v("br"),s._v("btn.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(", fn, "),v("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(");"),v("br"),v("br"),v("span",{staticClass:"hljs-comment"},[s._v("//解除")]),v("br"),s._v("btn.removeEventListener("),v("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(", fn, "),v("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(");")])])]),s._v(" "),v("h2",[s._v("关于捕获和冒泡的5点概念")]),s._v(" "),v("h4",[s._v("1.在外层div注册事件，点击内层div来触发事件时：捕获事件总是要比冒泡事件先触发(与代码顺序无关)")]),s._v(" "),v("p",[s._v("\n                假设有这样的html结构：\n                "),v("pre",{staticClass:"hljs applescript"},[v("code",{},[s._v("<"),v("span",{staticClass:"hljs-keyword"},[s._v("div")]),s._v(" "),v("span",{staticClass:"hljs-built_in"},[s._v("id")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"test"')]),s._v(" "),v("span",{staticClass:"hljs-built_in"},[s._v("class")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"test"')]),s._v(">"),v("br"),s._v("   <"),v("span",{staticClass:"hljs-keyword"},[s._v("div")]),s._v(" "),v("span",{staticClass:"hljs-built_in"},[s._v("id")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"testInner"')]),s._v(" "),v("span",{staticClass:"hljs-built_in"},[s._v("class")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"test-inner"')]),s._v("></"),v("span",{staticClass:"hljs-keyword"},[s._v("div")]),s._v(">"),v("br"),s._v("</"),v("span",{staticClass:"hljs-keyword"},[s._v("div")]),s._v(">")])]),s._v("\n                然后我们在外层div上注册两个click事件，分别是捕获事件和冒泡事件，代码如下：\n                "),v("pre",{staticClass:"hljs javascript"},[v("code",{},[v("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" btn = "),v("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".getElementById("),v("span",{staticClass:"hljs-string"},[s._v('"test"')]),s._v(");"),v("br"),s._v(" "),v("br"),v("span",{staticClass:"hljs-comment"},[s._v("//捕获事件")]),v("br"),s._v("btn.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(")")]),s._v("{"),v("br"),s._v("    alert("),v("span",{staticClass:"hljs-string"},[s._v('"ok1"')]),s._v(");"),v("br"),s._v("}, "),v("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(");"),v("br"),s._v(" "),v("br"),v("span",{staticClass:"hljs-comment"},[s._v("//冒泡事件")]),v("br"),s._v("btn.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(")")]),s._v("{"),v("br"),s._v("    alert("),v("span",{staticClass:"hljs-string"},[s._v('"ok"')]),s._v(");"),v("br"),s._v("}, "),v("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(");")])]),s._v("\n                最后，"),v("code",[s._v("点击内层的div")]),s._v("，先弹出ok1，后弹出ok。"),v("br"),s._v("\n                结合上边的原理图，外层div相当于图中的body，内层div相当于图中最下边的div，证明了捕获事件先执行，然后执行冒泡事件。\n            ")]),s._v(" "),v("p",[s._v("\n                为什么要强调点击内层的div呢？"),v("br"),s._v("\n                因为只有当真正触发事件的dom元素是内层的时候，外层dom元素才有机会模拟捕获事件和冒泡事件。\n            ")]),s._v(" "),v("h4",[s._v("2.当在触发事件的dom元素上注册事件时，哪个先注册，就先执行哪个")]),s._v(" "),v("p",[s._v("\n                html结构同上，js代码如下：\n                "),v("pre",{staticClass:"hljs javascript"},[v("code",{},[v("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" btnInner = "),v("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".getElementById("),v("span",{staticClass:"hljs-string"},[s._v('"testInner"')]),s._v(");"),v("br"),v("br"),v("span",{staticClass:"hljs-comment"},[s._v("//冒泡事件")]),v("br"),s._v("btnInner.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(")")]),s._v("{"),v("br"),s._v("    alert("),v("span",{staticClass:"hljs-string"},[s._v('"ok"')]),s._v(");"),v("br"),s._v("}, "),v("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(");"),v("br"),s._v(" "),v("br"),v("span",{staticClass:"hljs-comment"},[s._v("//捕获事件")]),v("br"),s._v("btnInner.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(")")]),s._v("{"),v("br"),s._v("    alert("),v("span",{staticClass:"hljs-string"},[s._v('"ok1"')]),s._v(");"),v("br"),s._v("}, "),v("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(");")])]),s._v("\n                本例中，冒泡事件先注册，所以先执行。\n            ")]),s._v(" "),v("h4",[s._v("3.当外层div和内层div同时注册了捕获事件时，点击内层div时，外层div的事件一定会先触发。")]),s._v(" "),v("p",[s._v("\n                代码如下：\n                "),v("pre",{staticClass:"hljs javascript"},[v("code",{},[v("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" btn = "),v("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".getElementById("),v("span",{staticClass:"hljs-string"},[s._v('"test"')]),s._v(");"),v("br"),v("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" btnInner = "),v("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".getElementById("),v("span",{staticClass:"hljs-string"},[s._v('"testInner"')]),s._v(");"),v("br"),v("br"),s._v("btnInner.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(")")]),s._v("{"),v("br"),s._v("    alert("),v("span",{staticClass:"hljs-string"},[s._v('"ok"')]),s._v(");"),v("br"),s._v("}, "),v("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(");"),v("br"),v("br"),s._v("btn.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(")")]),s._v("{"),v("br"),s._v("    alert("),v("span",{staticClass:"hljs-string"},[s._v('"ok1"')]),s._v(");"),v("br"),s._v("}, "),v("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(");")])]),s._v("\n                结果是先弹出ok1。\n            ")]),s._v(" "),v("h4",[s._v("4.同理，当外层div和内层div都同时注册了冒泡事件，点击内层div时，一定是内层div事件先触发。")]),s._v(" "),v("h4",[s._v("5.阻止事件冒泡")]),s._v(" "),v("p",[s._v("\n                但是明明点击的是内层div，但是外层div的事件也触发了，这是不是我想要的。"),v("br"),s._v("事件触发时，会默认传入一个event对象，这个event对象上有一个方法：stopPropagation。"),v("br"),s._v("通过此方法，可以阻止冒泡，让外层div接收不到事件，自然也就不会触发了。\n                "),v("pre",{staticClass:"hljs javascript"},[v("code",{},[s._v("btnInner.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v('"click"')]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),v("span",{staticClass:"hljs-params"},[s._v("(e)")])]),s._v("{"),v("br"),s._v("    "),v("span",{staticClass:"hljs-comment"},[s._v("//阻止冒泡")]),v("br"),s._v("    e.stopPropagation();"),v("br"),s._v("    alert("),v("span",{staticClass:"hljs-string"},[s._v('"ok"')]),s._v(");"),v("br"),s._v("}, "),v("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(");")])])]),s._v(" "),v("h2",[s._v("关于事件代理")]),s._v(" "),v("p",[s._v("\n                经常会碰到要监听列表中多项li的情形，假设我们有一个列表如下：\n                "),v("pre",{staticClass:"hljs xml"},[v("code",{},[v("span",{staticClass:"hljs-tag"},[s._v("<"),v("span",{staticClass:"hljs-name"},[s._v("ul")]),s._v(" "),v("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"list"')]),s._v(">")]),v("br"),s._v("    "),v("span",{staticClass:"hljs-tag"},[s._v("<"),v("span",{staticClass:"hljs-name"},[s._v("li")]),s._v(" "),v("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"item1"')]),s._v(">")]),s._v("item1"),v("span",{staticClass:"hljs-tag"},[s._v("</"),v("span",{staticClass:"hljs-name"},[s._v("li")]),s._v(">")]),v("br"),s._v("    "),v("span",{staticClass:"hljs-tag"},[s._v("<"),v("span",{staticClass:"hljs-name"},[s._v("li")]),s._v(" "),v("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"item2"')]),s._v(">")]),s._v("item2"),v("span",{staticClass:"hljs-tag"},[s._v("</"),v("span",{staticClass:"hljs-name"},[s._v("li")]),s._v(">")]),v("br"),s._v("    "),v("span",{staticClass:"hljs-tag"},[s._v("<"),v("span",{staticClass:"hljs-name"},[s._v("li")]),s._v(" "),v("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"item3"')]),s._v(">")]),s._v("item3"),v("span",{staticClass:"hljs-tag"},[s._v("</"),v("span",{staticClass:"hljs-name"},[s._v("li")]),s._v(">")]),v("br"),s._v("    "),v("span",{staticClass:"hljs-tag"},[s._v("<"),v("span",{staticClass:"hljs-name"},[s._v("li")]),s._v(" "),v("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),v("span",{staticClass:"hljs-string"},[s._v('"item4"')]),s._v(">")]),s._v("item4"),v("span",{staticClass:"hljs-tag"},[s._v("</"),v("span",{staticClass:"hljs-name"},[s._v("li")]),s._v(">")]),v("br"),v("span",{staticClass:"hljs-tag"},[s._v("</"),v("span",{staticClass:"hljs-name"},[s._v("ul")]),s._v(">")])])]),s._v("\n                如果我们要实现以下功能：当鼠标点击某一li时，输出该li的内容，我们通常的写法是这样的：\n                "),v("pre",{staticClass:"hljs javascript"},[v("code",{},[v("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v(".onload="),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{"),v("br"),s._v("    "),v("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" ulNode = "),v("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".getElementById("),v("span",{staticClass:"hljs-string"},[s._v('"list"')]),s._v(");"),v("br"),s._v("    "),v("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" liNodes = ulNode.children;"),v("br"),s._v("    "),v("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v("("),v("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" i="),v("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("; i<liNodes.length; i++){"),v("br"),s._v("        liNodes[i].addEventListener("),v("span",{staticClass:"hljs-string"},[s._v("'click'")]),s._v(","),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(")")]),s._v("{"),v("br"),s._v("            "),v("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(e.target.innerHTML);"),v("br"),s._v("        }, "),v("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(");"),v("br"),s._v("    }"),v("br"),s._v("}")])]),s._v("\n                在传统的事件处理中，你按照需要为每一个元素添加或者是删除事件处理器。"),v("br"),s._v("然而，事件处理器将有可能导致内存泄露或者是性能下降——你用得越多这种风险就越大。JavaScript的事件代理，则是一种简单的技巧。\n            ")]),s._v(" "),v("h4",[s._v("事件代理机制")]),s._v(" "),v("p",[s._v("\n                事件代理用到了两个在JavaSciprt事件中两个特性：事件冒泡以及目标元素。使用事件代理，我们可以把事件处理器添加到一个元素上，等待一个事件从它的子级元素里冒泡上来，并且可以得知这个事件是从哪个元素开始的。\n            ")]),s._v(" "),v("p",[s._v("\n                改进后的代码如下：\n                "),v("pre",{staticClass:"hljs javascript"},[v("code",{},[v("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v(".onload="),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{"),v("br"),s._v("    "),v("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" ulNode="),v("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".getElementById("),v("span",{staticClass:"hljs-string"},[s._v('"list"')]),s._v(");"),v("br"),s._v("    ulNode.addEventListener("),v("span",{staticClass:"hljs-string"},[s._v("'click'")]),s._v(", "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),v("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(") ")]),s._v("{"),v("br"),s._v("        "),v("span",{staticClass:"hljs-comment"},[s._v("/*判断目标事件是否为li*/")]),v("br"),s._v("        "),v("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v("(e.target && e.target.nodeName.toUpperCase()=="),v("span",{staticClass:"hljs-string"},[s._v('"LI"')]),s._v("){"),v("br"),s._v("            "),v("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(e.target.innerHTML);"),v("br"),s._v("        }"),v("br"),s._v("    }, "),v("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(");"),v("br"),s._v("};")])])])])])],1)},[],!1,null,null,null);n.options.__file="event-principle-in-javascript.vue";a.default=n.exports}}]);