(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7517"],{"3nsm":function(s,t,a){s.exports=a.p+"assets/bg-20170728-02.08cba04.png"},f5FQ:function(s,t,a){"use strict";a.r(t);var n={created:function(){}},v=a("psIG"),_=Object(v.a)(n,function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"blog-container"},[n("BlogHeader",{attrs:{title:"细说async/await相较于Promise的优势",subTitle:"一种更优雅的异步写法",date:"2017-07-28",tags:["Javascript"]}}),s._v(" "),n("BlogContent",{attrs:{useCatalog:!0}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("h2",[s._v("前言")]),s._v(" "),n("p",[s._v("\n                谈及异步回调函数的嵌套，总会让人感到烦躁，特别是当业务逻辑复杂，往往需要调用几次 ajax 才能拿到所有需要的数据。\n            ")]),s._v(" "),n("p",[s._v("\n                从最早的回调函数，到 Promise 对象，再到 Generator 函数，每次都有所改进，但又让人觉得不彻底。它们都有额外的复杂性，都需要理解抽象的底层运行机制。所以，我们需要一种方法，更优雅地解决异步操作。于是，async函数出现了。\n            ")]),s._v(" "),n("h2",[s._v("async 函数是什么？")]),s._v(" "),n("p",[n("strong",[s._v("一句话解释：async 函数，就是 Generator 函数的语法糖。")])]),s._v(" "),n("p",[s._v("\n                它有以下几个特点：\n                "),n("ul",[n("li",[s._v("\n                        建立在promise之上。所以，不能把它和回调函数搭配使用。但它会声明一个异步函数，并隐式地返回一个Promise。因此可以直接return变量，无需使用Promise.resolve进行转换。\n                    ")]),s._v(" "),n("li",[s._v("\n                        和promise一样，是非阻塞的。但不用写 then 及其回调函数，这减少代码行数，也避免了代码嵌套。而且，所有异步调用，可以写在同一个代码块中，无需定义多余的中间变量。\n                    ")]),s._v(" "),n("li",[s._v("\n                        它的最大价值在于，可以使异步代码，在形式上，更接近于同步代码。\n                    ")]),s._v(" "),n("li",[s._v("\n                        它总是与await一起使用的。并且，await 只能在 async 函数体内。\n                    ")]),s._v(" "),n("li",[s._v("\n                        await 是个运算符，用于组成表达式，它会阻塞后面的代码。如果等到的是 Promise 对象，则得到其 resolve值。否则，会得到一个表达式的运算结果。\n                    ")])])]),s._v(" "),n("h2",[s._v("为何说 async 函数是语法糖")]),s._v(" "),n("p",[s._v("\n                async 函数的实现，其实就是将 Generator 函数和自动执行器，包装在一个函数里。下面的这个例子，来自阮老师的\n                "),n("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/05/async.html",target:"_blank"}},[s._v("《async 函数的含义和用法》")]),s._v("\n                一文。\n                "),n("pre",{staticClass:"hljs javascript"},[n("code",{},[n("span",{staticClass:"hljs-keyword"},[s._v("async")]),s._v(" "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),n("span",{staticClass:"hljs-title"},[s._v("fn")]),s._v("("),n("span",{staticClass:"hljs-params"},[s._v("args")]),s._v(") ")]),s._v("{"),n("br"),s._v("    "),n("span",{staticClass:"hljs-comment"},[s._v("// ...")]),n("br"),s._v("}"),n("br"),n("br"),n("span",{staticClass:"hljs-comment"},[s._v("// 等同于")]),n("br"),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),n("span",{staticClass:"hljs-title"},[s._v("fn")]),s._v("("),n("span",{staticClass:"hljs-params"},[s._v("args")]),s._v(") ")]),s._v("{"),n("br"),s._v("    "),n("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" spawn("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("*("),n("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{"),n("br"),s._v("        "),n("span",{staticClass:"hljs-comment"},[s._v("// ...")]),n("br"),s._v("    });"),n("br"),s._v("}"),n("br"),n("br"),n("span",{staticClass:"hljs-comment"},[s._v("// spawn 函数就是自动执行器")]),n("br"),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),n("span",{staticClass:"hljs-title"},[s._v("spawn")]),s._v("("),n("span",{staticClass:"hljs-params"},[s._v("genF")]),s._v(") ")]),s._v("{"),n("br"),s._v("    "),n("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),n("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),n("span",{staticClass:"hljs-built_in"},[s._v("Promise")]),s._v("("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),n("span",{staticClass:"hljs-params"},[s._v("resolve, reject")]),s._v(") ")]),s._v("{"),n("br"),s._v("        "),n("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" gen = genF();"),n("br"),s._v("        "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),n("span",{staticClass:"hljs-title"},[s._v("step")]),s._v("("),n("span",{staticClass:"hljs-params"},[s._v("nextF")]),s._v(") ")]),s._v("{"),n("br"),s._v("            "),n("span",{staticClass:"hljs-keyword"},[s._v("try")]),s._v(" {"),n("br"),s._v("                "),n("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" next = nextF();"),n("br"),s._v("            } "),n("span",{staticClass:"hljs-keyword"},[s._v("catch")]),s._v("(e) {"),n("br"),s._v("                "),n("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" reject(e); "),n("br"),s._v("        }"),n("br"),s._v("        "),n("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v("(next.done) {"),n("br"),s._v("            "),n("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" resolve(next.value);"),n("br"),s._v("        } "),n("br"),s._v("        "),n("span",{staticClass:"hljs-built_in"},[s._v("Promise")]),s._v(".resolve(next.value).then("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),n("span",{staticClass:"hljs-params"},[s._v("v")]),s._v(") ")]),s._v("{"),n("br"),s._v("            step("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),n("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{ "),n("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" gen.next(v); });      "),n("br"),s._v("        }, "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),n("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(") ")]),s._v("{"),n("br"),s._v("            step("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),n("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{ "),n("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" gen.throw(e); });"),n("br"),s._v("        });"),n("br"),s._v("    }"),n("br"),s._v("    step("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),n("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{ "),n("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" gen.next("),n("span",{staticClass:"hljs-literal"},[s._v("undefined")]),s._v("); });"),n("br"),s._v("  });"),n("br"),s._v("}")])]),s._v("\n                所以说，async 函数是 Generator 函数的语法糖。另外，它比较新，是属于ES7中的语法。但是转码器 Babel 已经支持，转码后就能使用。\n            ")]),s._v(" "),n("h2",[s._v("async 相较于 Promise 的优势")]),s._v(" "),n("h4",[s._v("1.相比于 Promise，它能更好地处理then链")]),s._v(" "),n("p",[s._v("\n                看下面这个例子，假设有一个业务，需要分多个步骤完成，每个步骤都是异步的，而且下一个步骤必须依赖于上一个步骤的结果。我们用 setTimeout 来模拟异步操作。\n                "),n("pre",{staticClass:"hljs javascript"},[n("code",{},[n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),n("span",{staticClass:"hljs-title"},[s._v("takeLongTime")]),s._v("("),n("span",{staticClass:"hljs-params"},[s._v("n")]),s._v(") ")]),s._v("{"),n("br"),s._v("    "),n("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),n("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),n("span",{staticClass:"hljs-built_in"},[s._v("Promise")]),s._v("("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-params"},[s._v("resolve")]),s._v(" =>")]),s._v(" {"),n("br"),s._v("        setTimeout("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" =>")]),s._v(" resolve(n + "),n("span",{staticClass:"hljs-number"},[s._v("200")]),s._v("), n);"),n("br"),s._v("    });"),n("br"),s._v("}"),n("br"),n("br"),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),n("span",{staticClass:"hljs-title"},[s._v("step1")]),s._v("("),n("span",{staticClass:"hljs-params"},[s._v("n")]),s._v(") ")]),s._v("{"),n("br"),s._v("    "),n("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),n("span",{staticClass:"hljs-string"},[s._v("`step1 with "),n("span",{staticClass:"hljs-subst"},[s._v("${n}")]),s._v("`")]),s._v(");"),n("br"),s._v("    "),n("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" takeLongTime(n);"),n("br"),s._v("}"),n("br"),n("br"),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),n("span",{staticClass:"hljs-title"},[s._v("step2")]),s._v("("),n("span",{staticClass:"hljs-params"},[s._v("n")]),s._v(") ")]),s._v("{"),n("br"),s._v("    "),n("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),n("span",{staticClass:"hljs-string"},[s._v("`step2 with "),n("span",{staticClass:"hljs-subst"},[s._v("${n}")]),s._v("`")]),s._v(");"),n("br"),s._v("    "),n("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" takeLongTime(n);"),n("br"),s._v("}"),n("br"),n("br"),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),n("span",{staticClass:"hljs-title"},[s._v("step3")]),s._v("("),n("span",{staticClass:"hljs-params"},[s._v("n")]),s._v(") ")]),s._v("{"),n("br"),s._v("    "),n("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),n("span",{staticClass:"hljs-string"},[s._v("`step3 with "),n("span",{staticClass:"hljs-subst"},[s._v("${n}")]),s._v("`")]),s._v(");"),n("br"),s._v("    "),n("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" takeLongTime(n);"),n("br"),s._v("}")])]),s._v("\n                现在用 Promise 方式来实现这三个步骤的处理\n                "),n("pre",{staticClass:"hljs javascript"},[n("code",{},[n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),n("span",{staticClass:"hljs-title"},[s._v("doIt")]),s._v("("),n("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{"),n("br"),s._v("    "),n("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".time("),n("span",{staticClass:"hljs-string"},[s._v('"doIt"')]),s._v(");"),n("br"),s._v("    "),n("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" time1 = "),n("span",{staticClass:"hljs-number"},[s._v("300")]),s._v(";"),n("br"),s._v("    step1(time1)"),n("br"),s._v("        .then("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-params"},[s._v("time2")]),s._v(" =>")]),s._v(" step2(time2))"),n("br"),s._v("        .then("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-params"},[s._v("time3")]),s._v(" =>")]),s._v(" step3(time3))"),n("br"),s._v("        .then("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-params"},[s._v("result")]),s._v(" =>")]),s._v(" {"),n("br"),s._v("            "),n("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),n("span",{staticClass:"hljs-string"},[s._v("`result is "),n("span",{staticClass:"hljs-subst"},[s._v("${result}")]),s._v("`")]),s._v(");"),n("br"),s._v("        });"),n("br"),s._v("}"),n("br"),s._v("doIt();"),n("br"),n("span",{staticClass:"hljs-comment"},[s._v("// step1 with 300")]),n("br"),n("span",{staticClass:"hljs-comment"},[s._v("// step2 with 500")]),n("br"),n("span",{staticClass:"hljs-comment"},[s._v("// step3 with 700")]),n("br"),n("span",{staticClass:"hljs-comment"},[s._v("// result is 900")])])]),s._v("\n                如果用 async/await 来实现的话，会是这样：\n                "),n("pre",{staticClass:"hljs javascript"},[n("code",{},[n("span",{staticClass:"hljs-keyword"},[s._v("async")]),s._v(" "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),n("span",{staticClass:"hljs-title"},[s._v("doIt")]),s._v("("),n("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{"),n("br"),s._v("    "),n("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".time("),n("span",{staticClass:"hljs-string"},[s._v('"doIt"')]),s._v(");"),n("br"),s._v("    "),n("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" time1 = "),n("span",{staticClass:"hljs-number"},[s._v("300")]),s._v(";"),n("br"),s._v("    "),n("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" time2 = "),n("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" step1(time1);"),n("br"),s._v("    "),n("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" time3 = "),n("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" step2(time2);"),n("br"),s._v("    "),n("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" result = "),n("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" step3(time3);"),n("br"),s._v("    "),n("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),n("span",{staticClass:"hljs-string"},[s._v("`result is "),n("span",{staticClass:"hljs-subst"},[s._v("${result}")]),s._v("`")]),s._v(");"),n("br"),s._v("}"),n("br"),s._v("doIt();")])]),s._v("\n                结果和之前的 Promise 实现是一样的，但是这个代码看起来是不是清晰得多，几乎跟同步代码一样。\n            ")]),s._v(" "),n("h4",[s._v("2.中间值")]),s._v(" "),n("p",[s._v("\n                现在把业务要求改一下，仍然是三个步骤，但每一个步骤都需要之前每个步骤的结果。Pomise的实现看着很晕，传递参数太过麻烦。\n                "),n("pre",{staticClass:"hljs javascript"},[n("code",{},[n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),n("span",{staticClass:"hljs-title"},[s._v("doIt")]),s._v("("),n("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{"),n("br"),s._v("    "),n("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".time("),n("span",{staticClass:"hljs-string"},[s._v('"doIt"')]),s._v(");"),n("br"),s._v("    "),n("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" time1 = "),n("span",{staticClass:"hljs-number"},[s._v("300")]),s._v(";"),n("br"),s._v("    step1(time1)"),n("br"),s._v("        .then("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-params"},[s._v("time2")]),s._v(" =>")]),s._v(" {"),n("br"),s._v("            "),n("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" step2(time1, time2)"),n("br"),s._v("                .then("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-params"},[s._v("time3")]),s._v(" =>")]),s._v(" [time1, time2, time3]);"),n("br"),s._v("        })"),n("br"),s._v("        .then("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-params"},[s._v("times")]),s._v(" =>")]),s._v(" {"),n("br"),s._v("            "),n("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" [time1, time2, time3] = times;"),n("br"),s._v("            "),n("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" step3(time1, time2, time3);"),n("br"),s._v("        })"),n("br"),s._v("        .then("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-params"},[s._v("result")]),s._v(" =>")]),s._v(" {"),n("br"),s._v("            "),n("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),n("span",{staticClass:"hljs-string"},[s._v("`result is "),n("span",{staticClass:"hljs-subst"},[s._v("${result}")]),s._v("`")]),s._v(");"),n("br"),s._v("        });"),n("br"),s._v("}"),n("br"),s._v("doIt();")])]),s._v("\n                用 async/await 来写：\n                "),n("pre",{staticClass:"hljs javascript"},[n("code",{},[n("span",{staticClass:"hljs-keyword"},[s._v("async")]),s._v(" "),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),n("span",{staticClass:"hljs-title"},[s._v("doIt")]),s._v("("),n("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{"),n("br"),s._v("    "),n("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".time("),n("span",{staticClass:"hljs-string"},[s._v('"doIt"')]),s._v(");"),n("br"),s._v("    "),n("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" time1 = "),n("span",{staticClass:"hljs-number"},[s._v("300")]),s._v(";"),n("br"),s._v("    "),n("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" time2 = "),n("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" step1(time1);"),n("br"),s._v("    "),n("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" time3 = "),n("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" step2(time1, time2);"),n("br"),s._v("    "),n("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" result = "),n("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" step3(time1, time2, time3);"),n("br"),s._v("    "),n("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),n("span",{staticClass:"hljs-string"},[s._v("`result is "),n("span",{staticClass:"hljs-subst"},[s._v("${result}")]),s._v("`")]),s._v(");"),n("br"),s._v("}"),n("br"),s._v("doIt();")])]),s._v("\n                没有多余的中间值，更加优雅地实现了。\n            ")]),s._v(" "),n("h4",[s._v("3.调试")]),s._v(" "),n("p",[s._v("\n                相比于 Promise 更易于调试。\n            ")]),s._v(" "),n("p",[s._v("\n                因为没有代码块，所以不能在一个返回的箭头函数中设置断点。如果你在一个 .then 代码块中使用调试器的步进(step-over)功能，调试器并不会进入后续的 .then 代码块，因为调试器只能跟踪同步代码的每一步。\n                "),n("img",{attrs:{src:a("p2RB")}}),s._v("\n                现在，如果使用 async/await，你就不必再使用箭头函数。你可以对 await 语句执行步进操作，就好像他们都是普通的同步语句一样。\n                "),n("img",{attrs:{src:a("3nsm")}})]),s._v(" "),n("h2",[s._v("总结")]),s._v(" "),n("p",[s._v("\n                JavaScript的异步编写方式，从 回调函数 到 Promise、Generator 再到 Async/Await。表面上只是写法的变化，但本质上则是语言层的一次次抽象。让我们可以用更简单的方式实现同样的功能，而不需要去考虑代码是如何执行的。换句话说就是："),n("strong",[s._v("异步编程的最高境界，就是根本不用关心它是不是异步")]),s._v("。\n            ")]),s._v(" "),n("h2",[s._v("参考文献")]),s._v(" "),n("p",[n("ul",[n("li",[n("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/05/async.html",target:"_blank"}},[s._v("async 函数的含义和用法")])]),s._v(" "),n("li",[n("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/26260061",target:"_blank"}},[s._v("[译] 6个Async/Await优于Promise的方面")])])])])])])],1)},[],!1,null,null,null);_.options.__file="async-await.vue";t.default=_.exports},p2RB:function(s,t,a){s.exports=a.p+"assets/bg-20170728-01.1169720.png"}}]);