(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1016"],{"Wl+1":function(s,a,t){s.exports=t.p+"assets/bg-20190124-01.766b1c6.jpg"},ziwB:function(s,a,t){"use strict";t.r(a);var l={},n=t("psIG"),v=Object(n.a)(l,function(){var s=this,a=s.$createElement,l=s._self._c||a;return l("div",{staticClass:"blog-container"},[l("BlogHeader"),s._v(" "),l("BlogContent",{attrs:{useCatalog:!0}},[l("div",{attrs:{slot:"content"},slot:"content"},[l("h2",[s._v("前言")]),s._v(" "),l("p",[s._v("\n                上一篇文章\n                "),l("router-link",{attrs:{to:{name:"how-to-use-this-in-javascript"}}},[s._v("《「前端面试题系列4」this 的原理以及用法》")]),s._v("\n                中，提到了 call 和 apply。\n            ")],1),s._v(" "),l("p",[s._v("\n                它们最主要的作用，是"),l("strong",[s._v("改变 this 的指向")]),s._v("。在平时的工作中，除了在写一些基础类，或者公用库方法的时候会用到它们，其他时候 call 和 apply 的应用场景并不多。\n            ")]),s._v(" "),l("p",[s._v("\n                不过，突然遇到的时候，需要想一下才能转过弯来。所以今天，就让我们好好地探究一下，这两个方法的区别以及一些妙用。最后，还会介绍与之用法相似的 bind 的方法。\n            ")]),s._v(" "),l("h2",[s._v("call 和 apply 的共同点")]),s._v(" "),l("p",[s._v("\n                它们的共同点是，都能够"),l("strong",[s._v("改变函数执行时的上下文")]),s._v("，将一个对象的方法交给另一个对象来执行，并且是立即执行的。\n            ")]),s._v(" "),l("p",[s._v("\n                为何要改变执行上下文？举一个生活中的小例子：平时没时间做饭的我，周末想给孩子炖个腌笃鲜尝尝。但是没有适合的锅，而我又不想出去买。所以就问邻居借了一个锅来用，这样既达到了目的，又节省了开支，一举两得。\n            ")]),s._v(" "),l("p",[s._v("\n                改变执行上下文也是一样的，A 对象有一个方法，而 B 对象因为某种原因，也需要用到同样的方法，那么这时候我们是单独为 B 对象扩展一个方法呢，还是借用一下 A 对象的方法呢？当然是借用 A 对象的啦，既完成了需求，又减少了内存的占用。\n            ")]),s._v(" "),l("p",[s._v("\n                另外，它们的写法也很类似，"),l("strong",[s._v("调用 call 和 apply 的对象，必须是一个函数 Function")]),s._v("。接下来，就会说到具体的写法，那也是它们区别的主要体现。\n            ")]),s._v(" "),l("h2",[s._v("call 和 apply 的区别")]),s._v(" "),l("p",[s._v("\n                它们的区别，主要体现在参数的写法上。先来看一下它们各自的具体写法。\n            ")]),s._v(" "),l("h4",[s._v("call 的写法")]),s._v(" "),l("p",[l("pre",{staticClass:"hljs fortran"},[l("code",{staticClass:"focus",staticStyle:{"word-break":"break-word","white-space":"initial"}},[l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[s._v("Function")]),s._v("."),l("span",{staticClass:"hljs-title"},[s._v("call")]),l("span",{staticClass:"hljs-params"},[s._v("(obj,[param1[,param2[,…[,paramN]]]])")])])])]),s._v("\n                需要注意以下几点：\n                "),l("ul",[l("li",[s._v("调用 call 的对象，必须是个函数 Function。")]),s._v(" "),l("li",[s._v("call 的第一个参数，是一个对象。 Function 的调用者，将会指向这个对象。如果不传，则默认为全局对象 window。")]),s._v(" "),l("li",[s._v("第二个参数开始，可以接收任意个参数。每个参数会映射到相应位置的 Function 的参数上。但是如果将所有的参数作为数组传入，它们会作为一个整体映射到 Function 对应的第一个参数上，之后参数都为空。")])]),s._v(" "),l("pre",{staticClass:"hljs javascript"},[l("code",{},[s._v("function "),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[s._v("func")]),s._v(" "),l("span",{staticClass:"hljs-params"},[s._v("(a,b,"),l("span",{staticClass:"hljs-built_in"},[s._v("c")]),s._v(")")])]),s._v(" {}"),l("br"),l("br"),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[s._v("func")]),s._v("."),l("span",{staticClass:"hljs-title"},[s._v("call")]),l("span",{staticClass:"hljs-params"},[s._v("(obj, "),l("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),l("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(","),l("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(")")])]),l("br"),l("span",{staticClass:"hljs-comment"},[s._v("// func 接收到的参数实际上是 1,2,3")]),l("br"),l("br"),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[s._v("func")]),s._v("."),l("span",{staticClass:"hljs-title"},[s._v("call")]),l("span",{staticClass:"hljs-params"},[s._v("(obj, ["),l("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),l("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(","),l("span",{staticClass:"hljs-number"},[s._v("3")]),s._v("])")])]),l("br"),l("span",{staticClass:"hljs-comment"},[s._v("// func 接收到的参数实际上是 [1,2,3],undefined,undefined")])])])]),s._v(" "),l("h4",[s._v("apply 的写法")]),s._v(" "),l("p",[l("pre",{staticClass:"hljs fortran"},[l("code",{staticStyle:{"word-break":"break-word","white-space":"initial"}},[l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[s._v("Function")]),s._v("."),l("span",{staticClass:"hljs-title"},[s._v("apply")]),l("span",{staticClass:"hljs-params"},[s._v("(obj[,argArray])")])])])]),s._v("\n                需要注意的是：\n                "),l("ul",[l("li",[s._v("它的调用者必须是函数 Function，并且只接收两个参数，第一个参数的规则与 call 一致。")]),s._v(" "),l("li",[s._v("第二个参数，"),l("strong",[s._v("必须是数组或者类数组")]),s._v("，它们会被转换成类数组，传入 Function 中，并且会被映射到 Function 对应的参数上。这也是 call 和 apply 之间，很重要的一个区别。")])]),s._v(" "),l("pre",{staticClass:"hljs swift"},[l("code",{},[l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[s._v("func")]),s._v("."),l("span",{staticClass:"hljs-title"},[s._v("apply")]),l("span",{staticClass:"hljs-params"},[s._v("(obj, ["),l("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),l("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(","),l("span",{staticClass:"hljs-number"},[s._v("3")]),s._v("])")])]),l("br"),l("span",{staticClass:"hljs-comment"},[s._v("// func 接收到的参数实际上是 1,2,3")]),l("br"),l("br"),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[s._v("func")]),s._v("."),l("span",{staticClass:"hljs-title"},[s._v("apply")]),l("span",{staticClass:"hljs-params"},[s._v("(obj, {")])]),l("br"),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-params"},[s._v("    "),l("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(": "),l("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(",")])]),l("br"),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-params"},[s._v("    "),l("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(": "),l("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(",")])]),l("br"),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-params"},[s._v("    "),l("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(": "),l("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(",")])]),l("br"),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-params"},[s._v("    length: "),l("span",{staticClass:"hljs-number"},[s._v("3")])])]),l("br"),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-params"},[s._v("})")])]),l("br"),l("span",{staticClass:"hljs-comment"},[s._v("// func 接收到的参数实际上是 1,2,3")])])])]),s._v(" "),l("h4",[s._v("什么是类数组？")]),s._v(" "),l("p",[s._v("\n                先说数组，这我们都熟悉。它的特征有：可以通过角标调用，如 array[0]；具有长度属性length；可以通过 for 循环或forEach方法，进行遍历。\n            ")]),s._v(" "),l("p",[s._v("\n                那么，类数组是什么呢？顾名思义，就是"),l("strong",[s._v("具备与数组特征类似的对象")]),s._v("。比如，下面的这个对象，就是一个类数组。\n                "),l("pre",{staticClass:"hljs javascript"},[l("code",{},[l("span",{staticClass:"hljs-attribute"},[s._v("let arrayLike")]),s._v(" = {"),l("br"),s._v("    0: 1,"),l("br"),s._v("    1: 2,"),l("br"),s._v("    2: 3,"),l("br"),s._v("    length: 3"),l("br"),s._v("};")])])]),s._v(" "),l("p",[s._v("\n                类数组 arrayLike 可以通过角标进行调用，具有length属性，同时也可以通过 for 循环进行遍历。\n            ")]),s._v(" "),l("p",[s._v("\n                类数组，还是比较常用的，只是我们平时可能没注意到。比如，我们获取 DOM\n                节点的方法，返回的就是一个类数组。再比如，在一个方法中使用 arguments 获取到的所有参数，也是一个类数组。\n            ")]),s._v(" "),l("p",[s._v("\n                但是需要注意的是："),l("strong",[s._v("类数组无法使用 forEach、splice、push 等数组原型链上的方法")]),s._v("，毕竟它不是真正的数组。\n            ")]),s._v(" "),l("h2",[s._v("call 和 apply 的用途")]),s._v(" "),l("p",[s._v("\n                下面会分别列举 call 和 apply 的一些使用场景。声明：例子中没有哪个场景是必须用 call 或者必须用 apply 的，只是个人习惯这么用而已。\n            ")]),s._v(" "),l("h4",[s._v("call 的使用场景")]),s._v(" "),l("p",[l("strong",[s._v("1、对象的继承")]),s._v("。如下面这个例子：\n                "),l("pre",{staticClass:"hljs javascript"},[l("code",{},[l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),l("span",{staticClass:"hljs-title"},[s._v("superClass")]),s._v(" ("),l("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{"),l("br"),s._v("    "),l("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".a = "),l("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(";"),l("br"),s._v("    "),l("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".print = "),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),l("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{"),l("br"),s._v("        "),l("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),l("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".a);"),l("br"),s._v("    }"),l("br"),s._v("}"),l("br"),l("br"),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),l("span",{staticClass:"hljs-title"},[s._v("subClass")]),s._v(" ("),l("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{"),l("br"),s._v("    superClass.call("),l("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(");"),l("br"),s._v("    "),l("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".print();"),l("br"),s._v("}"),l("br"),l("br"),s._v("subClass();"),l("br"),l("span",{staticClass:"hljs-comment"},[s._v("// 1")])])]),s._v("\n                subClass 通过 call 方法，继承了 superClass 的 print 方法和 a 变量。此外，subClass 还可以扩展自己的其他方法。\n            ")]),s._v(" "),l("p",[l("strong",[s._v("2、借用方法")]),s._v("。还记得刚才的类数组么？如果它想使用 Array 原型链上的方法，可以这样：\n                "),l("pre",{staticClass:"hljs javascript"},[l("code",{staticStyle:{"word-break":"break-word","white-space":"initial"}},[l("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" domNodes = "),l("span",{staticClass:"hljs-built_in"},[s._v("Array")]),s._v(".prototype.slice.call("),l("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".getElementsByTagName("),l("span",{staticClass:"hljs-string"},[s._v('"*"')]),s._v("));")])]),s._v("\n                这样，domNodes 就可以应用 Array 下的所有方法了。\n            ")]),s._v(" "),l("h4",[s._v("apply 的一些妙用")]),s._v(" "),l("p",[l("strong",[s._v("1、Math.max")]),s._v("。用它来获取数组中最大的一项。\n                "),l("pre",{staticClass:"hljs javascript"},[l("code",{staticStyle:{"word-break":"break-word","white-space":"initial"}},[l("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" "),l("span",{staticClass:"hljs-keyword"},[s._v("max")]),s._v(" = Math."),l("span",{staticClass:"hljs-keyword"},[s._v("max")]),s._v(".apply("),l("span",{staticClass:"hljs-built_in"},[s._v("null")]),s._v(", "),l("span",{staticClass:"hljs-built_in"},[s._v("array")]),s._v(");")])])]),s._v(" "),l("p",[s._v("\n                同理，要获取数组中最小的一项，可以这样："),l("br"),s._v(" "),l("pre",{staticClass:"hljs javascript"},[l("code",{staticStyle:{"word-break":"break-word","white-space":"initial"}},[l("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" "),l("span",{staticClass:"hljs-keyword"},[s._v("min")]),s._v(" = Math."),l("span",{staticClass:"hljs-keyword"},[s._v("min")]),s._v(".apply("),l("span",{staticClass:"hljs-built_in"},[s._v("null")]),s._v(", "),l("span",{staticClass:"hljs-built_in"},[s._v("array")]),s._v(");")])])]),s._v(" "),l("p",[l("strong",[s._v("2、实现两个数组合并")]),s._v("。在 ES6 的扩展运算符出现之前，我们可以用 Array.prototype.push来实现。\n                "),l("pre",{staticClass:"hljs javascript"},[l("code",{},[s._v("let arr1 = ["),l("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(", "),l("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(", "),l("span",{staticClass:"hljs-number"},[s._v("3")]),s._v("];"),l("br"),s._v("let arr2 = ["),l("span",{staticClass:"hljs-number"},[s._v("4")]),s._v(", "),l("span",{staticClass:"hljs-number"},[s._v("5")]),s._v(", "),l("span",{staticClass:"hljs-number"},[s._v("6")]),s._v("];"),l("br"),l("br"),s._v("Array.prototype.push.apply(arr1, arr2);"),l("br"),s._v("console.log(arr1); "),l("span",{staticClass:"hljs-comment"},[s._v("// [1, 2, 3, 4, 5, 6]")])])])]),s._v(" "),l("h2",[s._v("bind 的使用")]),s._v(" "),l("p",[s._v("\n                最后来说说 bind。在 MDN 上的解释是：bind() 方法创建一个新的函数，在调用时设置 this 关键字为提供的值。并在调用新函数时，将给定参数列表作为原函数的参数序列的前若干项。\n            ")]),s._v(" "),l("p",[s._v("\n                它的语法如下：\n                "),l("pre",{staticClass:"hljs fortran"},[l("code",{staticStyle:{"word-break":"break-word","white-space":"initial"}},[l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[s._v("Function")]),s._v("."),l("span",{staticClass:"hljs-title"},[s._v("bind")]),l("span",{staticClass:"hljs-params"},[s._v("(thisArg[, arg1[, arg2[, ...]]])")])])])])]),s._v(" "),l("p",[s._v("\n                bind 方法 与 apply 和 call 比较类似，也能改变函数体内的 this 指向。不同的是，"),l("strong",[s._v("bind 方法的返回值是函数，并且需要稍后调用，才会执行")]),s._v("。而 apply 和 call 则是立即调用。\n            ")]),s._v(" "),l("p",[s._v("\n                来看下面这个例子：\n                "),l("pre",{staticClass:"hljs perl"},[l("code",{},[s._v("function "),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[s._v("add ")]),s._v("("),l("span",{staticClass:"hljs-title"},[s._v("a")]),s._v(", "),l("span",{staticClass:"hljs-title"},[s._v("b")]),s._v(") ")]),s._v("{"),l("br"),s._v("    "),l("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" a + b;"),l("br"),s._v("}"),l("br"),l("br"),s._v("function "),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[s._v("sub ")]),s._v("("),l("span",{staticClass:"hljs-title"},[s._v("a")]),s._v(", "),l("span",{staticClass:"hljs-title"},[s._v("b")]),s._v(") ")]),s._v("{"),l("br"),s._v("    "),l("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" a - b;"),l("br"),s._v("}"),l("br"),l("br"),s._v("add.bind("),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[s._v("sub")]),s._v(", 5, 3)")]),s._v("; // "),l("span",{staticClass:"hljs-comment"},[s._v("这时，并不会返回 8")]),l("br"),s._v("add.bind("),l("span",{staticClass:"hljs-function"},[l("span",{staticClass:"hljs-keyword"},[s._v("sub")]),s._v(", 5, 3)")]),s._v("(); // "),l("span",{staticClass:"hljs-comment"},[s._v("调用后，返回 8")])])]),s._v("\n                如果 bind 的第一个参数是 null 或者 undefined，this 就指向全局对象 window。\n            ")]),s._v(" "),l("h2",[s._v("总结")]),s._v(" "),l("p",[s._v("\n                call 和 apply 的主要作用，是改变对象的执行上下文，并且是立即执行的。它们在参数上的写法略有区别。\n            ")]),s._v(" "),l("p",[s._v("\n                bind 也能改变对象的执行上下文，它与 call 和 apply 不同的是，返回值是一个函数，并且需要稍后再调用一下，才会执行。\n            ")]),s._v(" "),l("p",[s._v("\n                最后，分享一个在知乎上看到的，关于 call 和 apply 的便捷记忆法：\n            ")]),s._v(" "),l("blockquote",[s._v("\n                猫吃鱼，狗吃肉，奥特曼打小怪兽。"),l("br"),s._v("\n                有天狗想吃鱼了"),l("br"),s._v("\n                猫.吃鱼.call(狗，鱼)"),l("br"),s._v("\n                狗就吃到鱼了"),l("br"),s._v("\n                猫成精了，想打怪兽"),l("br"),s._v("\n                奥特曼.打小怪兽.call(猫，小怪兽)"),l("br"),s._v("\n                猫也可以打小怪兽了\n            ")]),s._v(" "),l("img",{attrs:{src:t("Wl+1")}})])])],1)},[],!1,null,null,null);v.options.__file="call-and-apply-and-bind.vue";a.default=v.exports}}]);