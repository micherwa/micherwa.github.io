(window.webpackJsonp=window.webpackJsonp||[]).push([["QogW"],{QogW:function(s,t,a){"use strict";a.r(t);var n={},_=a("psIG"),l=Object(_.a)(n,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"blog-container"},[a("BlogHeader"),s._v(" "),a("BlogContent",{attrs:{useCatalog:!0}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("h2",[s._v("前言")]),s._v(" "),a("p",[s._v("这是前端面试题系列的第 5 篇，你可能错过了前面的篇章，可以在这里找到：")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.im/post/5c428ce0f265da612b13dca7",target:"_blank"}},[s._v("this 的原理以及用法")])]),s._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5c36fd0f6fb9a049cd5465cd",target:"_blank"}},[s._v("伪类与伪元素的区别及实战")])]),s._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5c394fece51d45524c7cc712",target:"_blank"}},[s._v("如何实现一个圣杯布局？")])]),s._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5c394da4518825253661bd4d",target:"_blank"}},[s._v("今日头条 面试题和思路解析")])])]),s._v(" "),a("p",[s._v("\n                面试中，我经常会问及 ES6 的知识点，因为平时工作中用得很多。当问到箭头函数时，不少候选人都会赞叹地说：箭头函数很好用，而且再也不用操心 this 的指向了。\n            ")]),s._v(" "),a("p",[s._v("\n                我接着问："),a("strong",[s._v("箭头函数是挺好用的，但是你有没有遇到过，不适合使用箭头函数的场景呢？")])]),s._v(" "),a("p",[s._v("\n                这时，能回答得上来的候选人就很少了。箭头函数在大多数情况下，是很好用的，但是为什么在有些场景，使用箭头函数后会产生问题？是不是箭头函数还不够完善？又有哪些场景会发生问题？该如何解决呢？这，正是本文想要一起探讨的。\n            ")]),s._v(" "),a("h2",[s._v("箭头函数的写法")]),s._v(" "),a("p",[s._v("\n                为什么叫箭头函数( Arrow Function )？因为它的写法，看上去就是一个箭头：\n                "),a("pre",{staticClass:"hljs dart"},[a("code",{staticStyle:{"word-break":"break-word","white-space":"initial"}},[a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" multiply = "),a("span",{staticClass:"hljs-built_in"},[s._v("num")]),s._v(" => "),a("span",{staticClass:"hljs-built_in"},[s._v("num")]),s._v(" * "),a("span",{staticClass:"hljs-built_in"},[s._v("num")]),s._v(";")])]),s._v("\n                它等价于：\n                "),a("pre",{staticClass:"hljs actionscript"},[a("code",{},[a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" multiply = "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),a("span",{staticClass:"hljs-params"},[s._v("(num)")]),s._v(" ")]),s._v("{"),a("br"),s._v("    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" num * num;"),a("br"),s._v("};")])]),s._v("\n                此外，还可以传多个参数，以及可变参数。\n                "),a("pre",{staticClass:"hljs typescript"},[a("code",{},[a("span",{staticClass:"hljs-comment"},[s._v("// 多参数")]),a("br"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" multiply = "),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("num1, num2")]),s._v(") =>")]),s._v(" num1 * num2;"),a("br"),a("br"),a("span",{staticClass:"hljs-comment"},[s._v("// 可变参数")]),a("br"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" sum = "),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("num1, num2, ...rest")]),s._v(") =>")]),s._v(" {"),a("br"),s._v("    "),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" result = num1 + num2;"),a("br"),s._v("    "),a("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v(" ("),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" i = "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("; i < rest.length; i++) {"),a("br"),s._v("        result += rest[i];"),a("br"),s._v("    }"),a("br"),s._v("    "),a("br"),s._v("    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" result;"),a("br"),s._v("};")])]),s._v("\n                当有多条语句时，需要配上 "),a("code",[s._v("{...}")]),s._v(" 和 "),a("code",[s._v("return")]),s._v("。\n            ")]),s._v(" "),a("p",[s._v("\n                另外，如果返回的结果是对象，则需要配上 "),a("code",[s._v("()")]),s._v("，像下面这样：\n                "),a("pre",{staticClass:"hljs go"},[a("code",{staticStyle:{"word-break":"break-word","white-space":"initial"}},[a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-keyword"},[s._v("func")]),s._v(" = "),a("span",{staticClass:"hljs-params"},[s._v("val")]),s._v(" => "),a("span",{staticClass:"hljs-params"},[s._v("({ value: val })")]),s._v(";")])])])]),s._v(" "),a("p",[s._v("\n                从上述的写法来看，相较普通函数而言，箭头函数的确简便了很多，提升了我们代码的易用性。但它并非在任何场景下都适用，接下来，将会介绍几种不适合箭头函数的场景，并会提出可行的解决方案。\n            ")]),s._v(" "),a("h2",[s._v("不适合的场景")]),s._v(" "),a("h4",[s._v("1、对象的方法")]),s._v(" "),a("p",[s._v("\n                看下面这个例子：\n                "),a("pre",{staticClass:"hljs coffeescript"},[a("code",{},[s._v("const obj = {"),a("br"),s._v("    x: "),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),a("br"),s._v("    print: "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" =>")]),s._v(" {"),a("br"),s._v("        "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(" === "),a("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v("); "),a("span",{staticClass:"hljs-regexp"},[s._v("//")]),s._v(" => "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),a("br"),s._v("        "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".x); "),a("span",{staticClass:"hljs-regexp"},[s._v("//")]),s._v(" "),a("span",{staticClass:"hljs-literal"},[s._v("undefined")]),a("br"),s._v("    }"),a("br"),s._v("};"),a("br"),a("br"),s._v("obj."),a("span",{staticClass:"hljs-built_in"},[s._v("print")]),s._v("();")])]),s._v("\n                this.x 打印出来是 undefined。为什么？然后，我在上面加了一行，发现 this 指向了 window。\n            ")]),s._v(" "),a("p",[s._v("\n                解析：print 方法用了箭头函数，其内部的 this 指向的还是上下文 window，上下文中并没有定义 x，所以 this.x 输出为 undefined。\n            ")]),s._v(" "),a("p",[s._v("\n                解决办法：用 ES6 的短语法，或者传统的函数表达式都可以。所以，print 要这样写：\n                "),a("pre",{staticClass:"hljs typescript"},[a("code",{},[s._v("print () {"),a("br"),s._v("    "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(" === test); "),a("span",{staticClass:"hljs-comment"},[s._v("// => true")]),a("br"),s._v("    "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".x); "),a("span",{staticClass:"hljs-comment"},[s._v("// 1")]),a("br"),s._v("}")])])]),s._v(" "),a("h4",[s._v("2、原型方法")]),s._v(" "),a("p",[s._v("\n                同样的规则也适用于原型方法的定义，使用箭头函数会导致运行时的执行上下文错误。\n                "),a("pre",{staticClass:"hljs javascript"},[a("code",{},[a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),a("span",{staticClass:"hljs-title"},[s._v("Cat")]),s._v(" ("),a("span",{staticClass:"hljs-params"},[s._v("name")]),s._v(") ")]),s._v("{"),a("br"),s._v("    "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".name = name;"),a("br"),s._v("}"),a("br"),a("br"),s._v("Cat.prototype.sayCatName = "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" =>")]),s._v(" {"),a("br"),s._v("    "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(" === "),a("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v("); "),a("span",{staticClass:"hljs-comment"},[s._v("// => true")]),a("br"),s._v("    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".name;"),a("br"),s._v("};"),a("br"),a("br"),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" cat = "),a("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Cat("),a("span",{staticClass:"hljs-string"},[s._v("'Miao'")]),s._v(");"),a("br"),s._v("cat.sayCatName(); "),a("span",{staticClass:"hljs-comment"},[s._v("// => undefined")])])]),s._v("\n                解决办法是：用回传统的函数表达式，像下面这样：\n                "),a("pre",{staticClass:"hljs javascript"},[a("code",{},[s._v("Cat.prototype.sayCatName = "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),a("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{"),a("br"),s._v("    "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(" === cat); "),a("span",{staticClass:"hljs-comment"},[s._v("// => true")]),a("br"),s._v("    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".name;"),a("br"),s._v("};")])]),s._v("\n                sayCatName 变回传统的函数表达式之后，被调用时的执行上下文就会指向新创建的 cat 实例。\n            ")]),s._v(" "),a("h4",[s._v("3、事件的回调")]),s._v(" "),a("p",[s._v("\n                看下面这个例子：\n                "),a("pre",{staticClass:"hljs typescript"},[a("code",{},[a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" btn = "),a("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".getElementById("),a("span",{staticClass:"hljs-string"},[s._v("'myButton'")]),s._v(");"),a("br"),s._v("btn.addEventListener("),a("span",{staticClass:"hljs-string"},[s._v("'click'")]),s._v(", "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" =>")]),s._v(" {"),a("br"),s._v("  "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(" === "),a("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v("); "),a("span",{staticClass:"hljs-comment"},[s._v("// => true")]),a("br"),s._v("  "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".innerHTML = "),a("span",{staticClass:"hljs-string"},[s._v("'Clicked button'")]),s._v(";"),a("br"),s._v("});")])]),s._v("\n                这里会有问题，因为 this 指向了 window。\n            ")]),s._v(" "),a("p",[s._v("\n                解析：当为一个 DOM 事件绑定回调函数后，触发回调函数时的 this，需要指向当前发生事件的 DOM 节点，也就是这里的 btn。当回调发生时，浏览器会用 btn 的上下文去调用处理函数。所以最后的 this.innerHTML 等价于 window.innerHTML，问题就在这里。\n            ")]),s._v(" "),a("p",[s._v("\n                解决办法：用函数表达式代替箭头函数。像这样：\n                "),a("pre",{staticClass:"hljs javascript"},[a("code",{},[s._v("btn.addEventListener("),a("span",{staticClass:"hljs-string"},[s._v("'click'")]),s._v(", "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),a("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{"),a("br"),s._v("    "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(" === btn); "),a("span",{staticClass:"hljs-comment"},[s._v("// => true")]),a("br"),s._v("    "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".innerHTML = "),a("span",{staticClass:"hljs-string"},[s._v("'Clicked button'")]),s._v(";"),a("br"),s._v("});")])])]),s._v(" "),a("p",[s._v("\n                另外，在 react 中的事件回调，也经常会遇到类似的问题。\n                "),a("pre",{staticClass:"hljs kotlin"},[a("code",{},[a("span",{staticClass:"hljs-comment"},[s._v("// jsx render")]),a("br"),s._v("<Button onClick={"),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".handleClickButton.bind("),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(")}>"),a("br"),s._v("    ..."),a("br"),s._v("</Button>"),a("br"),a("br"),a("span",{staticClass:"hljs-comment"},[s._v("// callback")]),a("br"),s._v("handleClickButton () {"),a("br"),s._v("    ..."),a("br"),s._v("}")])]),s._v("\n                注意：这里 onClick 的回调函数，并非字符串，而是一个实实在在的函数。可以将 onClick 理解为一个中间变量，所以 react 在处理函数时的 this 指向就会丢失。\n            ")]),s._v(" "),a("p",[s._v("\n                为了解决这个问题，我们需要为回调函数绑定 this，使得事件处理函数无论如何传递，this 都指向我们实例化的那个对象。\n            ")]),s._v(" "),a("p",[s._v("\n                在这里，如果用箭头函数，可以这样改写：\n                "),a("pre",{staticClass:"hljs typescript"},[a("code",{},[s._v("<Button onClick={ "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("event")]),s._v(" =>")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".handleClickButton(event) }>"),a("br"),s._v("    ..."),a("br"),s._v("</Button>")])]),s._v("\n                箭头函数并没有自己的 this，所以事件处理函数的调用者并不受影响。\n            ")]),s._v(" "),a("h4",[s._v("4、构造函数")]),s._v(" "),a("p",[s._v("\n                箭头函数不能通过 new 关键字调用。\n                "),a("pre",{staticClass:"hljs typescript"},[a("code",{},[a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" Message = "),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("text")]),s._v(") =>")]),s._v(" {"),a("br"),s._v("    "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".text = text;"),a("br"),s._v("};"),a("br"),a("br"),a("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" helloMessage = "),a("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Message("),a("span",{staticClass:"hljs-string"},[s._v("'Hello World!'")]),s._v(");"),a("br"),a("span",{staticClass:"hljs-comment"},[s._v("// Uncaught TypeError: Message is not a constructor")])])]),s._v("\n                解析：从报错信息可以看出，箭头函数没有 constructor 方法，所以不能用作构造函数。 JavaScript 会通过抛出异常的方式，进行隐式地预防。\n            ")]),s._v(" "),a("p",[s._v("\n                解决方法：用函数表达式代替箭头函数。\n            ")]),s._v(" "),a("h2",[s._v("总结")]),s._v(" "),a("p",[s._v("\n                回顾 MDN 给出的解释：箭头函数表达式的语法比函数表达式更短，并且没有自己的this，arguments，super或 new.target。这些函数表达式更适用于那些本来需要匿名函数的地方，并且它们不能用作构造函数。\n            ")]),s._v(" "),a("p",[s._v("\n                所以说，箭头函数无疑是 ES6 带来的重大改进，在正确的场合使用箭头函数，能让代码变得更加简洁短小。但箭头函数也不是万能的，不能用的时候，千万别硬往上套。比如，"),a("strong",[s._v("在需要动态上下文的场景中，使用箭头函数需要格外地小心，这些场景包括：对象的方法、原型方法、事件的回调、构造函数")]),s._v("。并非一定要用箭头函数，才能解决问题。\n            ")])])])],1)},[],!1,null,null,null);l.options.__file="arrow-function.vue";t.default=l.exports}}]);