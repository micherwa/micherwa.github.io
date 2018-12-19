(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ea65"],{"+PaJ":function(s,t,a){"use strict";a.r(t);var v={created:function(){}},n=a("psIG"),_=Object(n.a)(v,function(){var s=this,t=s.$createElement,v=s._self._c||t;return v("div",{staticClass:"blog-container"},[v("BlogHeader",{attrs:{title:"this的原理以及用法",subTitle:"",date:"2018-06-20",tags:["Javascript"]}}),s._v(" "),v("BlogContent",{attrs:{useCatalog:!0}},[v("div",{attrs:{slot:"content"},slot:"content"},[v("h2",[s._v("this是什么？")]),s._v(" "),v("p",[s._v("\n                对于this，我们的大脑中总会用“复杂”和“混乱”等词汇来形容它。"),v("br"),s._v("\n                因为我们对于它到底指向什么而感到困扰，看起来，它就是种彻头彻尾的魔法。\n            ")]),s._v(" "),v("p",[s._v("\n                this，不是编写时绑定，而是在运行时绑定。它依赖于函数调用的上下文条件，与函数被调用的方式有关，而与函数声明的位置无关。\n            ")]),s._v(" "),v("p",[s._v("\n                实际上，它是在函数被调用时建立的一个绑定，它指向什么，则完全是由函数被调用的调用点来决定的。所以，随着函数使用场合的不同，this的值会发生变化。但是有一个总的原则：那就是"),v("strong",[s._v("this 总会指向，调用函数的那个对象")]),s._v("。\n            ")]),s._v(" "),v("h2",[s._v("为什么要用this？")]),s._v(" "),v("p",[s._v("\n                先看个例子：\n                "),v("pre",{staticClass:"hljs actionscript"},[v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),v("span",{staticClass:"hljs-title"},[s._v("identify")]),v("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" ")]),s._v("{"),v("br"),s._v("    "),v("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".name.toUpperCase();"),v("br"),s._v("}"),v("br"),v("br"),v("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" me = {"),v("br"),s._v("    name: "),v("span",{staticClass:"hljs-string"},[s._v('"Kyle"')]),v("br"),s._v("};"),v("br"),v("br"),v("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" you = {"),v("br"),s._v("    name: "),v("span",{staticClass:"hljs-string"},[s._v('"Reader"')]),v("br"),s._v("};"),v("br"),v("br"),s._v("identify.call( me ); "),v("span",{staticClass:"hljs-comment"},[s._v("// KYLE")]),v("br"),s._v("identify.call( you ); "),v("span",{staticClass:"hljs-comment"},[s._v("// READER")])]),s._v("\n                例子中 call 的用法，可参考 "),v("router-link",{attrs:{to:{name:"call-and-apply-in-javascript"}}},[s._v("这篇文章")]),s._v("。它在这儿的主要作用是，改变this的执行环境。\n            ")],1),s._v(" "),v("p",[s._v("\n                一开始我们可能太不明白为何这样输出，那不如先换个思路。与使用this相反，我们可以明确地将环境对象，传递给identify()。像这样：\n                "),v("pre",{staticClass:"hljs actionscript"},[v("code",{},[v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),v("span",{staticClass:"hljs-title"},[s._v("identify")]),v("span",{staticClass:"hljs-params"},[s._v("(context)")]),s._v(" ")]),s._v("{"),v("br"),s._v("    "),v("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" context.name.toUpperCase();"),v("br"),s._v("}"),v("br"),s._v("identify( you ); "),v("span",{staticClass:"hljs-comment"},[s._v("// READER")])])])]),s._v(" "),v("p",[s._v("\n                结果是一样的，但是this机制，可以提供一种更优雅的方式来隐含地“传递”一个对象引用，导致更加干净的API设计和更容易的复用。当模式越发复杂时，将执行环境作为一个明确参数传递给函数，通常比传递this执行环境要乱。\n            ")]),s._v(" "),v("h2",[s._v("this的原理")]),s._v(" "),v("p",[s._v("\n                很多教科书会告诉你，this指的是函数运行时所在的环境。但是，为什么会这样？也就是说，函数的运行环境到底是怎么决定的？\n            ")]),s._v(" "),v("p",[s._v("理解 this 的原理，有助于帮我们更好地理解它的用法。JavaScript 语言之所以有this的设计，"),v("strong",[s._v("跟内存里面的数据结构有关系")]),s._v("。")]),s._v(" "),v("p",[v("pre",{staticClass:"hljs javascript"},[v("code",{staticStyle:{"word-break":"break-word","white-space":"initial"}},[v("span",{staticClass:"hljs-attribute"},[s._v("var obj")]),s._v(" = { foo:  5 };")])]),s._v("\n                上面的代码将一个对象赋值给变量 obj。JavaScript 引擎会先在内存里面，生成一个对象 { foo: 5 }，然后把这个对象的"),v("strong",[s._v("内存地址")]),s._v("赋值给变量 obj。\n            ")]),s._v(" "),v("p",[s._v("\n                也就是说，变量 obj 其实只是一个地址。后面如果要读取 obj.foo，引擎先从 obj 拿到内存地址，然后再从该地址读出原始的对象，返回它的 foo 属性。\n            ")]),s._v(" "),v("p",[s._v("\n                这样的结构很清晰，但如果属性的值是一个函数，又会怎么样呢？比如这样：\n                "),v("pre",{staticClass:"hljs actionscript"},[v("code",{staticStyle:{"word-break":"break-word","white-space":"initial"}},[v("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" obj = { foo: "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),v("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" ")]),s._v("{} };")])])]),s._v(" "),v("p",[s._v("\n                这时，引擎会将函数单独保存在内存中，然后再将"),v("strong",[s._v("函数的地址")]),s._v("赋值给 foo 属性的 value 属性。\n                "),v("img",{attrs:{src:a("6fCn")}}),s._v("\n                可以看到，函数是一个单独的值(以地址形式赋值)，所以才可以在不同的环境中执行。\n            ")]),s._v(" "),v("p",[s._v("\n                又因为，JavaScript 允许在函数体内部，引用当前环境的其他变量。所以需要有一种机制，能够在函数体内部获得当前的运行环境（context）。所以，this就出现了，它的设计目的就是"),v("strong",[s._v("在函数体内部，指代函数当前的运行环境")]),s._v("。\n            ")]),s._v(" "),v("p",[s._v("\n                看下面这个例子：\n                "),v("pre",{staticClass:"hljs javascript"},[v("code",{},[v("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" f = "),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),v("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{"),v("br"),s._v("  "),v("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".x);"),v("br"),s._v("}"),v("br"),v("br"),v("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" x = "),v("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(";"),v("br"),v("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" obj = {"),v("br"),s._v("  "),v("span",{staticClass:"hljs-attr"},[s._v("f")]),s._v(": f,"),v("br"),s._v("  "),v("span",{staticClass:"hljs-attr"},[s._v("x")]),s._v(": "),v("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(","),v("br"),s._v("};"),v("br"),v("br"),v("span",{staticClass:"hljs-comment"},[s._v("// 单独执行")]),v("br"),s._v("f() "),v("span",{staticClass:"hljs-comment"},[s._v("// 1")]),v("br"),v("br"),v("span",{staticClass:"hljs-comment"},[s._v("// obj 环境执行")]),v("br"),s._v("obj.f() "),v("span",{staticClass:"hljs-comment"},[s._v("// 2")])])])]),s._v(" "),v("p",[s._v("\n                上面代码中，函数f在全局环境执行，this.x 指向全局环境的 x。"),v("br"),s._v("\n                在 obj 环境执行，this.x 指向 obj.x。\n            ")]),s._v(" "),v("h2",[s._v("this的用法")]),s._v(" "),v("p",[s._v("\n                在理解了this的原理之后，接下来详细讨论this的用法，分下面四种情况。\n            ")]),s._v(" "),v("h4",[s._v("1、纯粹的函数调用")]),s._v(" "),v("p",[s._v("\n                这是函数的最通常用法，属于全局性调用，因此this就代表全局对象Global。\n                "),v("pre",{staticClass:"hljs actionscript"},[v("code",{},[v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),v("span",{staticClass:"hljs-title"},[s._v("test")]),v("span",{staticClass:"hljs-params"},[s._v("()")])]),s._v("{"),v("br"),s._v("　　"),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".x = "),v("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(";"),v("br"),s._v("　　"),v("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".x);"),v("br"),s._v("}"),v("br"),s._v("test(); "),v("span",{staticClass:"hljs-comment"},[s._v("// 1")])])])]),s._v(" "),v("h4",[s._v("2、作为对象方法的调用")]),s._v(" "),v("p",[s._v("\n                函数还可以作为某个对象的方法调用，这时this就指这个上级对象。\n                "),v("pre",{staticClass:"hljs javascript"},[v("code",{},[v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),v("span",{staticClass:"hljs-title"},[s._v("test")]),s._v("("),v("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{"),v("br"),s._v("    "),v("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".x);"),v("br"),s._v("}"),v("br"),v("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" o = {};"),v("br"),s._v("o.x = "),v("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(";"),v("br"),s._v("o.m = test;"),v("br"),s._v("o.m(); "),v("span",{staticClass:"hljs-comment"},[s._v("// 1")])])])]),s._v(" "),v("h4",[s._v("3、作为构造函数调用")]),s._v(" "),v("p",[s._v("\n                所谓构造函数，就是通过这个函数生成一个新对象（object）。这时，this就指这个新对象。\n                "),v("pre",{staticClass:"hljs javascript"},[v("code",{},[v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),v("span",{staticClass:"hljs-title"},[s._v("test")]),s._v("("),v("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{"),v("br"),s._v("    "),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".x = "),v("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(";"),v("br"),s._v("}"),v("br"),v("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" o = "),v("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" test();"),v("br"),v("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(o.x); "),v("span",{staticClass:"hljs-comment"},[s._v("// 1")])])])]),s._v(" "),v("h4",[s._v("4、apply调用")]),s._v(" "),v("p",[s._v("\n                apply() 是函数对象的一个方法，它的作用是改变函数的调用对象，它的第一个参数就表示改变后的调用这个函数的对象。因此，this 指的就是这第一个参数。\n                "),v("pre",{staticClass:"hljs javascript"},[v("code",{},[v("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" x = "),v("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";"),v("br"),v("span",{staticClass:"hljs-function"},[v("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),v("span",{staticClass:"hljs-title"},[s._v("test")]),s._v("("),v("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{"),v("br"),s._v("    "),v("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),v("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".x);"),v("br"),s._v("}"),v("br"),v("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" o = {};"),v("br"),s._v("o.x = "),v("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(";"),v("br"),s._v("o.m = test;"),v("br"),s._v("o.m.apply(); "),v("span",{staticClass:"hljs-comment"},[s._v("//0")])])]),s._v("\n                apply() 的参数为空时，默认调用全局对象。因此，这时的运行结果为0，证明this指的是全局对象。\n            ")]),s._v(" "),v("h2",[s._v("参考文献")]),s._v(" "),v("p",[v("ul",[v("li",[v("a",{attrs:{href:"https://github.com/getify/You-Dont-Know-JS/tree/master/this%20%26%20object%20prototypes",target:"_blank"}},[s._v("this 与对象原型")])]),s._v(" "),v("li",[v("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/06/javascript-this.html",target:"_blank"}},[s._v("JavaScript 的 this 原理")])])])])])])],1)},[],!1,null,null,null);_.options.__file="how-to-use-this-in-javascript.vue";t.default=_.exports},"6fCn":function(s,t,a){s.exports=a.p+"assets/bg-20180620-01.cd479d3.png"}}]);