(window.webpackJsonp=window.webpackJsonp||[]).push([["kPYT"],{kPYT:function(s,a,t){"use strict";t.r(a);var n={created:function(){}},v=t("psIG"),_=Object(v.a)(n,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"blog-container"},[t("BlogHeader",{attrs:{title:"实现异步编程的方法",subTitle:"",date:"2017-11-06",tags:["Javascript"]}}),s._v(" "),t("BlogContent",{attrs:{useCatalog:!0}},[t("div",{attrs:{slot:"content"},slot:"content"},[t("h2",[s._v("什么是异步？")]),s._v(" "),t("p",[s._v('\n                所谓"异步"，简单说就是一个任务分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段。'),t("strong",[s._v("这种不连续的执行，就叫做异步(Asynchronous)")]),s._v("。相应地，连续的执行，就叫做同步(Synchronous)。\n            ")]),s._v(" "),t("p",[s._v("\n                异步编程对 JavaScript 语言太重要。JavaScript 只有一根线程，如果没有异步编程，根本没法用，非卡死不可。更具体的，可以参考\n                "),t("router-link",{attrs:{to:{name:"event-loop-in-javascript"}}},[s._v("这篇文章")]),s._v("。\n            ")],1),s._v(" "),t("p",[s._v("\n                常见的异步任务有：\n                "),t("ul",[t("li",[s._v("\n                        onclick等事件 由浏览器内核的 DOM Binding 模块来处理，当事件触发的时候，回调函数会立即添加到任务队列中。\n                    ")]),s._v(" "),t("li",[s._v("\n                        setTimeout 会由浏览器内核的 timer 模块来进行延时处理，当时间到达的时候，才会将回调函数添加到任务队列中。\n                    ")]),s._v(" "),t("li",[s._v("\n                        ajax 则会由浏览器内核的 network 模块来处理，在网络请求完成返回之后，才将回调添加到任务队列中。\n                    ")])]),s._v("\n                本篇仅讨论异步模式的几种方法。\n            ")]),s._v(" "),t("h2",[s._v("实现异步编程的方法")]),s._v(" "),t("h4",[s._v("一、回调函数")]),s._v(" "),t("p",[s._v("\n                它是异步编程最基本的方法。"),t("strong",[s._v("所谓回调函数，就是把任务的第二段单独写在一个函数里面，等到重新执行这个任务的时候，就直接调用这个函数。")])]),s._v(" "),t("p",[s._v("\n                假定有两个函数f1和f2，后者等待前者的执行结果。顺序执行的话，可以这样写："),t("code",[s._v("f1(); f2();")]),s._v("。但是，如果f1是一个很耗时的任务，该怎么办？"),t("br"),s._v("\n                改写一下f1，把f2写成f1的回调函数：\n                "),t("pre",{staticClass:"hljs actionscript"},[t("code",{},[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("f1")]),t("span",{staticClass:"hljs-params"},[s._v("(callback)")])]),s._v("{"),t("br"),s._v("    setTimeout("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" ")]),s._v("{"),t("br"),s._v("        "),t("span",{staticClass:"hljs-comment"},[s._v("// f1的任务代码")]),t("br"),s._v("        callback();"),t("br"),s._v("    }, "),t("span",{staticClass:"hljs-number"},[s._v("1000")]),s._v(");"),t("br"),s._v("}"),t("br"),s._v("f1(f2);")])]),s._v("\n                采用这种方式，我们把同步操作变成了异步操作，f1不会堵塞程序运行，相当于先执行程序的主要逻辑，将耗时的操作推迟执行。\n            ")]),s._v(" "),t("p",[s._v("\n                它的优点是：简单、容易理解和部署。"),t("br"),s._v("\n                缺点是：不利于代码的阅读和维护，各个部分之间高度耦合，流程会很混乱，而且每个任务只能指定一个回调函数。\n            ")]),s._v(" "),t("h4",[s._v("二、事件监听")]),s._v(" "),t("p",[s._v("\n                换一种思路，如果任务的执行不取决于代码的顺序，而取决于某个事件是否发生呢？这就是事件驱动模式。还是以f1和f2为例：\n                "),t("pre",{staticClass:"hljs actionscript"},[t("code",{},[t("span",{staticClass:"hljs-comment"},[s._v("// 采用的jQuery的写法，为f1绑定一个事件，当f1发生done事件，就执行f2")]),t("br"),s._v("f1.on("),t("span",{staticClass:"hljs-string"},[s._v("'done'")]),s._v(", f2);"),t("br"),t("br"),t("span",{staticClass:"hljs-comment"},[s._v("// 改写f1")]),t("br"),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("f1")]),t("span",{staticClass:"hljs-params"},[s._v("()")])]),s._v("{"),t("br"),s._v("    setTimeout("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" ")]),s._v("{"),t("br"),s._v("        "),t("span",{staticClass:"hljs-comment"},[s._v("// f1的任务代码，执行完成后，立即触发done事件，从而开始执行f2。")]),t("br"),s._v("        f1.trigger("),t("span",{staticClass:"hljs-string"},[s._v("'done'")]),s._v(");"),t("br"),s._v("    }, "),t("span",{staticClass:"hljs-number"},[s._v("1000")]),s._v(");"),t("br"),s._v("}")])]),s._v("\n                它的优点是：比较容易理解，可以绑定多个事件，每个事件可以指定多个回调函数，而且可以”去耦合”，有利于实现模块化。"),t("br"),s._v("\n                缺点是：整个程序都要变成事件驱动型，运行流程会变得很不清晰。\n            ")]),s._v(" "),t("h4",[s._v("三、发布/订阅")]),s._v(" "),t("p",[s._v('\n                我们假定，存在一个"信号中心"，某个任务执行完成，就向信号中心"发布"（publish）一个信号，其他任务可以向信号中心"订阅"（subscribe）这个信号，从而知道什么时候自己可以开始执行。这就叫做"发布/订阅模式"（publish-subscribe pattern），又称"观察者模式"（observer pattern）。具体可参考\n                '),t("router-link",{attrs:{to:{name:"publish-subscribe-pattern"}}},[s._v("这篇文章")]),s._v("。\n            ")],1),s._v(" "),t("p",[s._v("\n                下面的例子，采用的是Ben Alman的Tiny Pub/Sub，这是jQuery的一个插件。\n                "),t("pre",{staticClass:"hljs actionscript"},[t("code",{},[t("span",{staticClass:"hljs-comment"},[s._v("// f2向”信号中心“jQuery订阅”done”信号 ")]),t("br"),s._v("jQuery.subscribe("),t("span",{staticClass:"hljs-string"},[s._v('"done"')]),s._v(", f2);"),t("br"),t("br"),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("f1")]),t("span",{staticClass:"hljs-params"},[s._v("()")])]),s._v("{"),t("br"),s._v("    setTimeout("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" ")]),s._v("{"),t("br"),s._v("        "),t("span",{staticClass:"hljs-comment"},[s._v("// f1的任务代码，f1执行完成后，向”信号中心”jQuery发布”done”信号，从而引发f2的执行。")]),t("br"),s._v("        jQuery.publish("),t("span",{staticClass:"hljs-string"},[s._v('"done"')]),s._v(");"),t("br"),s._v("    }, "),t("span",{staticClass:"hljs-number"},[s._v("1000")]),s._v(");"),t("br"),s._v("}"),t("br"),t("br"),t("span",{staticClass:"hljs-comment"},[s._v("// f2完成执行后，也可以取消订阅（unsubscribe） ")]),t("br"),s._v("jQuery.unsubscribe("),t("span",{staticClass:"hljs-string"},[s._v('"done"')]),s._v(", f2);")])]),s._v("\n                这种方法的性质与“事件监听”类似，但是明显优于后者。因为我们可以通过查看“消息中心”，了解存在多少信号、每个信号有多少订阅者，从而监控程序的运行。\n            ")]),s._v(" "),t("h4",[s._v("四、Promise对象")]),s._v(" "),t("p",[s._v("\n                Promise对象是由CommonJS提出的一种规范，它的出现，是为了解决回调函数嵌套("),t("strong",[s._v("回调地狱")]),s._v(")的问题。它不是新的语法功能，而是一种新的写法，允许将回调函数的横向加载，改成纵向加载。它的思想是，每一个异步任务返回一个Promise对象，该对象有一个then方法，允许指定回调函数。\n                "),t("pre",{staticClass:"hljs javascript"},[t("code",{},[t("span",{staticClass:"hljs-comment"},[s._v("// f1() 和 f2() 的链式写法")]),t("br"),s._v("f1().then(f2);"),t("br"),t("br"),t("span",{staticClass:"hljs-comment"},[s._v("// 用jQuery改写f1")]),t("br"),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("f1")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{"),t("br"),s._v("    "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" dfd = $.Deferred();"),t("br"),s._v("    setTimeout("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{"),t("br"),s._v("        "),t("span",{staticClass:"hljs-comment"},[s._v("// f1的任务代码")]),t("br"),s._v("        dfd.resolve();"),t("br"),s._v("    }, "),t("span",{staticClass:"hljs-number"},[s._v("500")]),s._v(");"),t("br"),s._v("    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" dfd.promise;"),t("br"),s._v("}")])]),s._v("\n                它的优点：回调函数变成了链式写法，程序的流程可以看得很清楚，而且有一整套的配套方法，可以实现许多强大的功能。比如，指定多个回调函数："),t("code",[s._v("f1().then(f2).then(f3);")]),s._v("。再比如，指定发生错误时的回调函数："),t("code",[s._v("f1().then(f2).fail(f3);")]),s._v("。还有就是，如果一个任务已经完成，再添加回调函数，该回调函数会立即执行。所以，你不用担心是否错过了某个事件或信号。"),t("br"),s._v("\n                缺点就是：编写和理解，都相对比较难。\n            ")]),s._v(" "),t("h4",[s._v("五、Generator")]),s._v(" "),t("p",[s._v("\n                Generator 函数是协程在 ES6 的实现，最大特点就是可以交出函数的执行权（即暂停执行）。\n                "),t("pre",{staticClass:"hljs javascript"},[t("code",{},[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("* "),t("span",{staticClass:"hljs-title"},[s._v("gen")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("x")]),s._v(")")]),s._v("{"),t("br"),s._v("  "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" y = "),t("span",{staticClass:"hljs-keyword"},[s._v("yield")]),s._v(" x + "),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(";"),t("br"),s._v("  "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" y;"),t("br"),s._v("}")])]),s._v("\n                上面代码就是一个 Generator 函数。它不同于普通函数，是可以暂停执行的，所以函数名之前要加星号，以示区别。整个 Generator 函数就是一个封装的异步任务，或者说是异步任务的容器。异步操作需要暂停的地方，都用 yield 语句注明。Generator 函数的执行方法如下。\n                "),t("pre",{staticClass:"hljs q"},[t("code",{},[t("span",{staticClass:"hljs-built_in"},[s._v("var")]),s._v(" g = gen("),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(");"),t("br"),t("span",{staticClass:"hljs-comment"},[t("br"),s._v("// { value: 3, done: false }")]),t("br"),s._v("g."),t("span",{staticClass:"hljs-built_in"},[s._v("next")]),s._v("();"),t("br"),t("span",{staticClass:"hljs-comment"},[s._v("// { value: undefined, done: true }")]),t("br"),s._v("g."),t("span",{staticClass:"hljs-built_in"},[s._v("next")]),s._v("();")])]),s._v("\n                上面代码中，调用 Generator 函数，会返回一个内部指针（即遍历器 ）g 。这是 Generator 函数不同于普通函数的另一个地方，即执行它不会返回结果，返回的是指针对象。调用指针 g 的 next 方法，会移动内部指针（即执行异步任务的第一段），指向第一个遇到的 yield 语句，上例是执行到 x + 2 为止。\n            ")]),s._v(" "),t("p",[s._v("\n                换言之，next 方法的作用是分阶段执行 Generator 函数。每次调用 next 方法，会返回一个对象，表示当前阶段的信息（ value 属性和 done 属性）。value 属性是 yield 语句后面表达式的值，表示当前阶段的值；done 属性是一个布尔值，表示 Generator 函数是否执行完毕，即是否还有下一个阶段。\n            ")]),s._v(" "),t("p",[s._v("\n                Generator 函数内部还可以部署错误处理代码，捕获函数体外抛出的错误。\n                "),t("pre",{staticClass:"hljs javascript"},[t("code",{},[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("* "),t("span",{staticClass:"hljs-title"},[s._v("gen")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("x")]),s._v(")")]),s._v("{"),t("br"),s._v("  "),t("span",{staticClass:"hljs-keyword"},[s._v("try")]),s._v(" {"),t("br"),s._v("    "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" y = "),t("span",{staticClass:"hljs-keyword"},[s._v("yield")]),s._v(" x + "),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(";"),t("br"),s._v("  } "),t("span",{staticClass:"hljs-keyword"},[s._v("catch")]),s._v(" (e){ "),t("br"),s._v("    "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(e);"),t("br"),s._v("  }"),t("br"),s._v("  "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" y;"),t("br"),s._v("}"),t("br"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" g = gen("),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(");"),t("br"),s._v("g.next();"),t("br"),s._v("g.throw（"),t("span",{staticClass:"hljs-string"},[s._v("'出错了'")]),s._v("）;")])]),s._v("\n                上面代码的最后一行，Generator 函数体外，使用指针对象的 throw 方法抛出的错误，可以被函数体内的 try … catch 代码块捕获。这意味着，出错的代码与处理错误的代码，实现了时间和空间上的分离，这对于异步编程无疑是很重要的。\n            ")]),s._v(" "),t("h4",[s._v("六、async/await")]),s._v(" "),t("p",[s._v("\n                这是 ES7 提出的一种更优雅的异步解决方案，灵感来自于 C# 语言。具体可参考\n                "),t("router-link",{attrs:{to:{name:"async-await"}}},[s._v("这篇文章")]),t("br"),s._v("\n                来看个例子，要实现一个暂停功能，输入N毫秒，则停顿N毫秒后才继续往下执行。\n                "),t("pre",{staticClass:"hljs javascript"},[t("code",{},[t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" sleep = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("time")]),s._v(") ")]),s._v("{"),t("br"),s._v("    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("Promise")]),s._v("("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("resolve, reject")]),s._v(") ")]),s._v("{"),t("br"),s._v("        setTimeout("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{"),t("br"),s._v("            resolve();"),t("br"),s._v("        }, time);"),t("br"),s._v("    })"),t("br"),s._v("};"),t("br"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" start = "),t("span",{staticClass:"hljs-keyword"},[s._v("async")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{"),t("br"),s._v("    "),t("span",{staticClass:"hljs-comment"},[s._v("// 在这里使用起来就像同步代码那样直观")]),t("br"),s._v("    "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v("'start'")]),s._v(");"),t("br"),s._v("    "),t("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" sleep("),t("span",{staticClass:"hljs-number"},[s._v("3000")]),s._v(");"),t("br"),s._v("    "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v("'end'")]),s._v(");"),t("br"),s._v("};"),t("br"),s._v("start();")])]),s._v("\n                控制台先输出start，稍等3秒后，输出了end。\n            ")],1),s._v(" "),t("p",[s._v("\n                解析：\n                "),t("ul",[t("li",[s._v("async 表示这是一个async函数，await只能用在这个函数里面。")]),s._v(" "),t("li",[s._v("await 表示在这里等待promise返回结果了，再继续执行。")]),s._v(" "),t("li",[s._v("\n                        await 后面跟着的应该是一个promise对象（当然，其他返回值也没关系，只是会立即执行，不过那样就没有意义了…）\n                    ")])])]),s._v(" "),t("p",[s._v("\n                await等待的虽然是promise对象，但不必写.then(..)，直接可以得到返回值。\n                "),t("pre",{staticClass:"hljs javascript"},[t("code",{},[t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" sleep = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("time")]),s._v(") ")]),s._v("{"),t("br"),s._v("    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("Promise")]),s._v("("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("resolve, reject")]),s._v(") ")]),s._v("{"),t("br"),s._v("        setTimeout("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{"),t("br"),s._v("            "),t("span",{staticClass:"hljs-comment"},[s._v("// 返回 ‘ok’")]),t("br"),s._v("            resolve("),t("span",{staticClass:"hljs-string"},[s._v("'ok'")]),s._v(");"),t("br"),s._v("        }, time);"),t("br"),s._v("    })"),t("br"),s._v("};"),t("br"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" start = "),t("span",{staticClass:"hljs-keyword"},[s._v("async")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{"),t("br"),s._v("    "),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" result = "),t("span",{staticClass:"hljs-keyword"},[s._v("await")]),s._v(" sleep("),t("span",{staticClass:"hljs-number"},[s._v("3000")]),s._v(");"),t("br"),s._v("    "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(result); "),t("span",{staticClass:"hljs-comment"},[s._v("// 收到 ‘ok’")]),t("br"),s._v("};")])])])])])],1)},[],!1,null,null,null);_.options.__file="async-in-javascript.vue";a.default=_.exports}}]);