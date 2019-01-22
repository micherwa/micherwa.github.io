(window.webpackJsonp=window.webpackJsonp||[]).push([["xtFw"],{xtFw:function(s,t,a){"use strict";a.r(t);var n={},l=a("psIG"),v=Object(l.a)(n,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"blog-container"},[a("BlogHeader"),s._v(" "),a("BlogContent",{attrs:{useCatalog:!0}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("h2",[s._v("前言")]),s._v(" "),a("p",[s._v("\n                ES6中的箭头函数，改变了我们写代码的方式，使得JS的易用性得到了提升。但是最近，常会看到有同学问，某一段代码用了箭头函数后产生了问题，是不是箭头函数还不够完善？有哪些场景会发生问题？该如何解决呢？这，正是本文想要一起探讨的。\n            ")]),s._v(" "),a("p",[s._v("首先，我们要明白一点。箭头函数的出现，是为了提升代码的易用性，但并非任何场景下都适用。也并不是一定要用箭头函数才能解决问题，因为箭头函数并不是万能的，不能用的时候，千万别硬往上套。")]),s._v(" "),a("p",[s._v("接下来，将介绍几种不适合箭头函数的场景，并会提出可行的解决方案。")]),s._v(" "),a("h2",[s._v("在对象上定义方法")]),s._v(" "),a("p",[s._v("\n                看下面这个例子：\n                "),a("pre",{staticClass:"hljs javascript"},[a("code",{},[s._v("var test = {"),a("br"),s._v("  x: "),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),a("br"),s._v("  output: "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" =>")]),s._v(" {"),a("br"),s._v("    "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(" === "),a("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v("); "),a("span",{staticClass:"hljs-comment"},[s._v("// => true")]),a("br"),s._v("    "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".x); "),a("span",{staticClass:"hljs-comment"},[s._v("// undefined")]),a("br"),s._v("  }"),a("br"),s._v("};"),a("br"),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(" === "),a("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v("); "),a("span",{staticClass:"hljs-comment"},[s._v("// => true")]),a("br"),s._v("test.output();")])]),s._v("\n                this.x 打印出来是 undefined。为什么？接着打印this，发现竟然指向了window。\n            ")]),s._v(" "),a("p",[s._v("\n                解析：output方法用了箭头函数，其内部的 this 指向的还是上下文window，所以this.x输出为undefined。"),a("br"),s._v("\n                解决办法：用es6的短语法，或者传统的函数表达式，所以：output 要这样写：\n                "),a("pre",{staticClass:"hljs javascript"},[a("code",{},[s._v("output () {"),a("br"),s._v("    console."),a("span",{staticClass:"hljs-built_in"},[s._v("log")]),s._v("("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(" === test); "),a("span",{staticClass:"hljs-comment"},[s._v("// => true")]),a("br"),s._v("    console."),a("span",{staticClass:"hljs-built_in"},[s._v("log")]),s._v("("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".x); "),a("span",{staticClass:"hljs-comment"},[s._v("// 1")]),a("br"),s._v("}")])])]),s._v(" "),a("h2",[s._v("定义原型方法")]),s._v(" "),a("p",[s._v("\n                同样的规则适用于原型方法的定义，使用箭头函数会导致运行时的执行上下文错误。\n                "),a("pre",{staticClass:"hljs javascript"},[a("code",{},[a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),a("span",{staticClass:"hljs-title"},[s._v("Cat")]),s._v("("),a("span",{staticClass:"hljs-params"},[s._v("name")]),s._v(") ")]),s._v("{"),a("br"),s._v("    "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".name = name;"),a("br"),s._v("}"),a("br"),a("br"),s._v("Cat.prototype.sayCatName = "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" =>")]),s._v(" {"),a("br"),s._v("    "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(" === "),a("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v("); "),a("span",{staticClass:"hljs-comment"},[s._v("// => true")]),a("br"),s._v("    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".name;"),a("br"),s._v("};"),a("br"),a("br"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" cat = "),a("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Cat("),a("span",{staticClass:"hljs-string"},[s._v("'Mew'")]),s._v(");"),a("br"),s._v("cat.sayCatName(); "),a("span",{staticClass:"hljs-comment"},[s._v("// => undefined")])])]),s._v("\n                解决办法是：用回传统的函数表达式，像下面这样：\n                "),a("pre",{staticClass:"hljs javascript"},[a("code",{},[s._v("Cat.prototype.sayCatName = "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),a("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{"),a("br"),s._v("    "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(" === cat); "),a("span",{staticClass:"hljs-comment"},[s._v("// => true")]),a("br"),s._v("    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".name;"),a("br"),s._v("};")])]),s._v("\n                sayCatName 变回传统的函数表达式之后，被调用时的执行上下文就会指向新创建的 cat 实例。\n            ")]),s._v(" "),a("h2",[s._v("结合动态上下文的回调函数")]),s._v(" "),a("p",[s._v("\n                当为一个DOM事件绑定回调函数后，触发回调函数时的this，需要指向当前发生事件的 DOM 节点，而动态上下文这个时候就非常有用。看下面这个例子：\n                "),a("pre",{staticClass:"hljs javascript"},[a("code",{},[s._v("var button = "),a("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".getElementById("),a("span",{staticClass:"hljs-string"},[s._v("'myButton'")]),s._v(");"),a("br"),s._v("button.addEventListener("),a("span",{staticClass:"hljs-string"},[s._v("'click'")]),s._v(", "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" =>")]),s._v(" {"),a("br"),s._v("  "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(" === "),a("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v("); "),a("span",{staticClass:"hljs-comment"},[s._v("// => true")]),a("br"),s._v("  "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".innerHTML = "),a("span",{staticClass:"hljs-string"},[s._v("'Clicked button'")]),s._v(";"),a("br"),s._v("});")])]),s._v("\n                解析：给dom元素绑定click事件，用箭头函数去触发一个处理函数，当回调发生时，浏览器会用button的上下文去调用处理函数，也就是说这时的this还是指向window，所以最后的this.innerHTML 等价于 window.innerHTML。\n            ")]),s._v(" "),a("p",[s._v("\n                解决办法：用函数表达式代替箭头函数。像这样：\n                "),a("pre",{staticClass:"hljs javascript"},[a("code",{},[s._v("button.addEventListener("),a("span",{staticClass:"hljs-string"},[s._v("'click'")]),s._v(", "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),a("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{"),a("br"),s._v("    "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(" === button); "),a("span",{staticClass:"hljs-comment"},[s._v("// => true")]),a("br"),s._v("    "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".innerHTML = "),a("span",{staticClass:"hljs-string"},[s._v("'Clicked button'")]),s._v(";"),a("br"),s._v("});")])])]),s._v(" "),a("h2",[s._v("调用构造器")]),s._v(" "),a("p",[s._v("\n                箭头构造函数的执行并没有任何意义，并且是有歧义的。实际上 JS 会禁止你这么做，如果你这么做了，它就会抛出异常。看下面这个例子：\n                "),a("pre",{staticClass:"hljs javascript"},[a("code",{},[a("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" Message = "),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("text")]),s._v(") =>")]),s._v(" {"),a("br"),s._v("  "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".text = text;"),a("br"),s._v("};"),a("br"),a("span",{staticClass:"hljs-comment"},[s._v("// Uncaught TypeError: Message is not a constructor")]),a("br"),a("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" helloMessage = "),a("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Message("),a("span",{staticClass:"hljs-string"},[s._v("'Hello World!’);")])])]),s._v("\n                解析：一个箭头函数不能作为构造器。 JavaScript 会通过抛出异常的方式进行隐式地预防。\n            ")]),s._v(" "),a("p",[s._v("解决方法：用函数表达式代替箭头函数。")]),s._v(" "),a("h2",[s._v("总结")]),s._v(" "),a("p",[s._v("\n                箭头函数无疑是 ES6 带来的重大改进，在正确的场合使用箭头函数，能让代码变得更加简洁短小。但在需要动态上下文的场景中使用箭头函数你要格外的小心，这些场景包括：定义对象方法、定义原型方法、定义事件回调函数、定义构造函数。\n            ")])])])],1)},[],!1,null,null,null);v.options.__file="when-can-not-use-arrow-function.vue";t.default=v.exports}}]);