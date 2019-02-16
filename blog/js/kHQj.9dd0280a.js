(window.webpackJsonp=window.webpackJsonp||[]).push([["kHQj"],{kHQj:function(s,a,t){"use strict";t.r(a);var n={},_=t("psIG"),v=Object(_.a)(n,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"blog-container"},[t("BlogHeader"),s._v(" "),t("BlogContent",{attrs:{useCatalog:!0}},[t("div",{attrs:{slot:"content"},slot:"content"},[t("h2",[s._v("前言")]),s._v(" "),t("p",[s._v("这是前端面试题系列的第 6 篇，你可能错过了前面的篇章，可以在这里找到：")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://juejin.im/post/5c612a60f265da2da15d9986",target:"_blank"}},[s._v("ES6 中箭头函数的用法")])]),s._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5c428ce0f265da612b13dca7",target:"_blank"}},[s._v("this 的原理以及用法")])]),s._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5c36fd0f6fb9a049cd5465cd",target:"_blank"}},[s._v("伪类与伪元素的区别及实战")])]),s._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5c394fece51d45524c7cc712",target:"_blank"}},[s._v("如何实现一个圣杯布局？")])]),s._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5c394da4518825253661bd4d",target:"_blank"}},[s._v("今日头条 面试题和思路解析")])])]),s._v(" "),t("p",[s._v("\n                最近，朋友T 在准备面试，他为一道编程题所困，向我求助。原题如下：\n                "),t("pre",{staticClass:"hljs typescript"},[t("code",{},[t("span",{staticClass:"hljs-comment"},[s._v("// 写一个 sum 方法，当使用下面的语法调用时，能正常工作")]),t("br"),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(sum("),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(")); "),t("span",{staticClass:"hljs-comment"},[s._v("// Outputs 5")]),t("br"),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(sum("),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(")("),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(")); "),t("span",{staticClass:"hljs-comment"},[s._v("// Outputs 5")])])]),s._v("\n                这道题要考察的，就是对函数柯里化的理解。让我们先来解析一下题目的要求：\n                "),t("ul",[t("li",[s._v("如果传递两个参数，我们只需将它们相加并返回。")]),s._v(" "),t("li",[s._v("否则，我们假设它是以sum(2)(3)的形式被调用的，所以我们返回一个匿名函数，它将传递给sum()（在本例中为2）的参数和传递给匿名函数的参数（在本例中为3）。")])]),s._v("\n                所以，sum 函数可以这样写：\n                "),t("pre",{staticClass:"hljs javascript"},[t("code",{},[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("sum")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("x")]),s._v(") ")]),s._v("{"),t("br"),s._v("    "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" ("),t("span",{staticClass:"hljs-built_in"},[s._v("arguments")]),s._v(".length == "),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(") {"),t("br"),s._v("        "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("arguments")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("] + "),t("span",{staticClass:"hljs-built_in"},[s._v("arguments")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("];"),t("br"),s._v("    }"),t("br"),s._v("    "),t("br"),s._v("    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("y")]),s._v(") ")]),s._v("{"),t("br"),s._v("        "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" x + y;"),t("br"),s._v("    }"),t("br"),s._v("}")])]),s._v("\n                arguments 的用法挺灵活的，在这里它则用于分割两种不同的情况。当参数只有一个的时候，进行柯里化的处理。\n            ")]),s._v(" "),t("p",[s._v("\n                那么，到底什么是函数的柯里化呢？接下来，我们将从概念出发，探究函数柯里化的实现与用途。\n            ")]),s._v(" "),t("h2",[s._v("什么是柯里化")]),s._v(" "),t("p",[s._v("\n                柯里化，是函数式编程的一个重要概念。它既能减少代码冗余，也能增加可读性。另外，附带着还能用来装逼。\n            ")]),s._v(" "),t("p",[s._v("\n                先给出柯里化的定义：在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。\n            ")]),s._v(" "),t("p",[s._v("\n                柯里化的定义，理解起来有点费劲。为了更好地理解，先看下面这个例子：\n                "),t("pre",{staticClass:"hljs javascript"},[t("code",{},[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("sum")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("a, b, c")]),s._v(") ")]),s._v("{"),t("br"),s._v("    "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(a + b + c);"),t("br"),s._v("}"),t("br"),s._v("sum("),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v("); "),t("span",{staticClass:"hljs-comment"},[s._v("// 6")])])]),s._v("\n                毫无疑问，sum是个简单的累加函数，接受3个参数，输出累加的结果。\n            ")]),s._v(" "),t("p",[s._v("\n                假设有这样的需求，sum的前2个参数保持不变，最后一个参数可以随意。那么就会想到，在函数内，是否可以把前2个参数的相加过程，给抽离出来，因为参数都是相同的，没必要每次都做运算。\n            ")]),s._v(" "),t("p",[s._v("\n                如果先不管函数内的具体实现，调用的写法可以是这样： "),t("code",[s._v("sum(1, 2)(3);")]),s._v(" 或这样 "),t("code",[s._v("sum(1, 2)(10);")]),s._v(" 。就是，先把前2个参数的运算结果拿到后，再与第3个参数相加。\n            ")]),s._v(" "),t("p",[s._v("\n                这其实就是函数柯里化的简单应用。\n            ")]),s._v(" "),t("h2",[s._v("柯里化的实现")]),s._v(" "),t("p",[t("code",[s._v("sum(1, 2)(3);")]),s._v(" 这样的写法，并不常见。拆开来看，"),t("code",[s._v("sum(1, 2)")]),s._v(" 返回的应该还是个函数，因为后面还有 "),t("code",[s._v("(3)")]),s._v(" 需要执行。\n            ")]),s._v(" "),t("p",[s._v("\n                那么反过来，从最后一个参数，从右往左看，它的左侧必然是一个函数。以此类推，如果前面有n个()，那就是有n个函数返回了结果，只是返回的结果，还是一个函数。是不是有点递归的意思？\n            ")]),s._v(" "),t("p",[s._v("\n                网上有一些不同的柯里化的实现方式，以下是个人觉得最容易理解的写法：\n                "),t("pre",{staticClass:"hljs javascript"},[t("code",{},[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("curry")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("fn, currArgs")]),s._v(") ")]),s._v("{"),t("br"),s._v("    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{"),t("br"),s._v("        "),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" args = [].slice.call("),t("span",{staticClass:"hljs-built_in"},[s._v("arguments")]),s._v(");"),t("br"),t("br"),s._v("        "),t("span",{staticClass:"hljs-comment"},[s._v("// 首次调用时，若未提供最后一个参数currArgs，则不用进行args的拼接")]),t("br"),s._v("        "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (currArgs !== "),t("span",{staticClass:"hljs-literal"},[s._v("undefined")]),s._v(") {"),t("br"),s._v("            args = args.concat(currArgs);"),t("br"),s._v("        }"),t("br"),t("br"),s._v("        "),t("span",{staticClass:"hljs-comment"},[s._v("// 递归调用")]),t("br"),s._v("        "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (args.length < fn.length) {"),t("br"),s._v("            "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" curry(fn, args);"),t("br"),s._v("        }"),t("br"),t("br"),s._v("        "),t("span",{staticClass:"hljs-comment"},[s._v("// 递归出口")]),t("br"),s._v("        "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" fn.apply("),t("span",{staticClass:"hljs-literal"},[s._v("null")]),s._v(", args);"),t("br"),s._v("    }"),t("br"),s._v("}")])])]),s._v(" "),t("p",[s._v("\n                解析一下 curry 函数的写法：\n            ")]),s._v(" "),t("p",[s._v("\n                首先，它有 2 个参数，fn 指的就是本文一开始的源处理函数 "),t("code",[s._v("sum")]),s._v("。currArgs 是调用 curry 时传入的参数列表，比如 "),t("code",[s._v("(1, 2)(3)")]),s._v(" 这样的。\n            ")]),s._v(" "),t("p",[s._v("\n                再看到 curry 函数内部，它会整个返回一个匿名函数。\n            ")]),s._v(" "),t("p",[s._v("\n                再接下来的 "),t("code",[s._v("let args = [].slice.call(arguments);")]),s._v("，意思是将 arguments 数组化。arguments 是一个类数组的结构，它并不是一个真的数组，所以没法使用数组的方法。我们用了 call 的方法，就能愉快地对 args 使用数组的原生方法了。在这篇\n                "),t("a",{attrs:{href:"https://juejin.im/post/5c493086f265da6115111ce4",target:"_blank"}},[s._v("「干货」细说 call、apply 以及 bind 的区别和用法")]),s._v(" 中，有关于 call 更详细的用法介绍。\n            ")]),s._v(" "),t("p",[t("code",[s._v("currArgs !== undefined")]),s._v(" 的判断，是为了解决递归调用时的参数拼接。\n            ")]),s._v(" "),t("p",[s._v("\n                最后，判断 args 的个数，是否与 fn (也就是 sum )的参数个数相等，相等了就可以把参数都传给 fn，进行输出；否则，继续递归调用，直到两者相等。\n            ")]),s._v(" "),t("p",[s._v("\n                测试一下：\n                "),t("pre",{staticClass:"hljs lsl"},[t("code",{},[s._v("function sum(a, b, c) {"),t("br"),s._v("    console.log(a + b + c);"),t("br"),s._v("}"),t("br"),t("br"),s._v("const fn = curry(sum);"),t("br"),t("br"),s._v("fn("),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v("); "),t("span",{staticClass:"hljs-comment"},[s._v("// 6")]),t("br"),s._v("fn("),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(")("),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v("); "),t("span",{staticClass:"hljs-comment"},[s._v("// 6")]),t("br"),s._v("fn("),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(")("),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v("); "),t("span",{staticClass:"hljs-comment"},[s._v("// 6")]),t("br"),s._v("fn("),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(")("),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(")("),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v("); "),t("span",{staticClass:"hljs-comment"},[s._v("// 6")])])]),s._v("\n                都能输出 6 了，搞定！\n            ")]),s._v(" "),t("h2",[s._v("柯里化的用途")]),s._v(" "),t("p",[s._v("\n                理解了柯里化的实现之后，让我们来看一下它的实际应用。柯里化的目的是，减少代码冗余，以及增加代码的可读性。来看下面这个例子：\n                "),t("pre",{staticClass:"hljs javascript"},[t("code",{},[t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" persons = ["),t("br"),s._v("    { "),t("span",{staticClass:"hljs-attr"},[s._v("name")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'kevin'")]),s._v(", "),t("span",{staticClass:"hljs-attr"},[s._v("age")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v(" },"),t("br"),s._v("    { "),t("span",{staticClass:"hljs-attr"},[s._v("name")]),s._v(": "),t("span",{staticClass:"hljs-string"},[s._v("'bob'")]),s._v(", "),t("span",{staticClass:"hljs-attr"},[s._v("age")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("5")]),s._v(" }"),t("br"),s._v("];"),t("br"),t("br"),t("span",{staticClass:"hljs-comment"},[s._v("// 这里的 curry 函数，之前已实现")]),t("br"),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" getProp = curry("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("key, obj")]),s._v(") ")]),s._v("{"),t("br"),s._v("    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" obj[key];"),t("br"),s._v("});"),t("br"),t("br"),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" ages = persons.map(getProp("),t("span",{staticClass:"hljs-string"},[s._v("'age'")]),s._v(")); "),t("span",{staticClass:"hljs-comment"},[s._v("// [4, 5]")]),t("br"),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" names = persons.map(getProp("),t("span",{staticClass:"hljs-string"},[s._v("'name'")]),s._v(")); "),t("span",{staticClass:"hljs-comment"},[s._v("// ['kevin', 'bob']")])])]),s._v("\n                在实际的业务中，我们常会遇到类似的列表数据。用 getProp 就可以很方便地，取出列表中某个 key 对应的值。\n            ")]),s._v(" "),t("p",[s._v("\n                另外，为了便于理解调用的写法，可以扩展一下：\n                "),t("pre",{staticClass:"hljs go"},[t("code",{staticStyle:{"word-break":"break-word","white-space":"initial"}},[t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" names = persons."),t("span",{staticClass:"hljs-keyword"},[s._v("map")]),s._v("(getProp("),t("span",{staticClass:"hljs-string"},[s._v("'name'")]),s._v("));")])]),s._v("\n                等价于：\n                "),t("pre",{staticClass:"hljs typescript"},[t("code",{},[t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" names = persons.map("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-params"},[s._v("item")]),s._v(" =>")]),s._v(" {"),t("br"),s._v("    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" getProp("),t("span",{staticClass:"hljs-string"},[s._v("'name'")]),s._v(", item);"),t("br"),s._v("});")])])]),s._v(" "),t("p",[s._v("\n                最后，来看一个 Memoization 的例子。它用于优化比较耗时的计算，通过将计算结果缓存到内存中，这样对于同样的输入值，下次只需要中内存中读取结果。\n                "),t("pre",{staticClass:"hljs javascript"},[t("code",{},[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("memoizeFunction")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("func")]),s._v(") ")]),s._v("{"),t("br"),s._v("    "),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" cache = {};"),t("br"),s._v("    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{"),t("br"),s._v("        "),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" key = "),t("span",{staticClass:"hljs-built_in"},[s._v("arguments")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("];"),t("br"),s._v("        "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (cache[key]) {"),t("br"),s._v("            "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" cache[key];"),t("br"),s._v("        } "),t("span",{staticClass:"hljs-keyword"},[s._v("else")]),s._v(" {"),t("br"),s._v("            "),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" val = func.apply("),t("span",{staticClass:"hljs-literal"},[s._v("null")]),s._v(", "),t("span",{staticClass:"hljs-built_in"},[s._v("arguments")]),s._v(");"),t("br"),s._v("            cache[key] = val;"),t("br"),s._v("            "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" val;"),t("br"),s._v("        }"),t("br"),s._v("    };"),t("br"),s._v("}"),t("br"),t("br"),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" fibonacci = memoizeFunction("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("n")]),s._v(") ")]),s._v("{"),t("br"),s._v("    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" (n === "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(" || n === "),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(") ? n : fibonacci(n - "),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(") + fibonacci(n - "),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(");"),t("br"),s._v("});"),t("br"),t("br"),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(fibonacci("),t("span",{staticClass:"hljs-number"},[s._v("100")]),s._v(")); "),t("span",{staticClass:"hljs-comment"},[s._v("// 输出354224848179262000000")]),t("br"),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(fibonacci("),t("span",{staticClass:"hljs-number"},[s._v("100")]),s._v(")); "),t("span",{staticClass:"hljs-comment"},[s._v("// 输出354224848179262000000")])])]),s._v("\n                代码中，第2次计算 fibonacci(100) 则只需要在内存中直接读取结果。\n            ")]),s._v(" "),t("h2",[s._v("总结")]),s._v(" "),t("p",[t("strong",[s._v("函数的柯里化，是 Javascript 中函数式编程的一个重要概念。它返回的，是一个函数的函数。其实现方式，需要依赖参数以及递归，通过拆分参数的方式，来调用一个多参数的函数方法，以达到减少代码冗余，增加可读性的目的。")])]),s._v(" "),t("p",[s._v("\n                虽然一开始理解起来有点云里雾里的，但一旦理解了其中的含义和具体的使用场景，用起来就会得心应手了。\n            ")])])])],1)},[],!1,null,null,null);v.options.__file="curry-function.vue";a.default=v.exports}}]);