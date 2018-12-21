<template>
    <div class="blog-container">
        <BlogHeader
            title="细说async/await相较于Promise的优势" subTitle="一种更优雅的异步写法"
            date="2017-07-28" :tags="['Javascript']">
        </BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>前言</h2>
                <p>
                    谈及异步回调函数的嵌套，总会让人感到烦躁，特别是当业务逻辑复杂，往往需要调用几次 ajax 才能拿到所有需要的数据。
                </p>
                <p>
                    从最早的回调函数，到 Promise 对象，再到 Generator 函数，每次都有所改进，但又让人觉得不彻底。它们都有额外的复杂性，都需要理解抽象的底层运行机制。所以，我们需要一种方法，更优雅地解决异步操作。于是，async函数出现了。
                </p>

                <h2>async 函数是什么？</h2>
                <p>
                    <strong>一句话解释：async 函数，就是 Generator 函数的语法糖。</strong>
                </p>
                <p>
                    它有以下几个特点：
                    <ul>
                        <li>
                            建立在promise之上。所以，不能把它和回调函数搭配使用。但它会声明一个异步函数，并隐式地返回一个Promise。因此可以直接return变量，无需使用Promise.resolve进行转换。
                        </li>
                        <li>
                            和promise一样，是非阻塞的。但不用写 then 及其回调函数，这减少代码行数，也避免了代码嵌套。而且，所有异步调用，可以写在同一个代码块中，无需定义多余的中间变量。
                        </li>
                        <li>
                            它的最大价值在于，可以使异步代码，在形式上，更接近于同步代码。
                        </li>
                        <li>
                            它总是与await一起使用的。并且，await 只能在 async 函数体内。
                        </li>
                        <li>
                            await 是个运算符，用于组成表达式，它会阻塞后面的代码。如果等到的是 Promise 对象，则得到其 resolve值。否则，会得到一个表达式的运算结果。
                        </li>
                    </ul>
                </p>

                <h2>为何说 async 函数是语法糖</h2>
                <p>
                    async 函数的实现，其实就是将 Generator 函数和自动执行器，包装在一个函数里。下面的这个例子，来自阮老师的
                    <a href="http://www.ruanyifeng.com/blog/2015/05/async.html" target="_blank">《async 函数的含义和用法》</a>
                    一文。
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fn</span>(<span class="hljs-params">args</span>) </span>{<br>    <span class="hljs-comment">// ...</span><br>}<br><br><span class="hljs-comment">// 等同于</span><br><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fn</span>(<span class="hljs-params">args</span>) </span>{<br>    <span class="hljs-keyword">return</span> spawn(<span class="hljs-function"><span class="hljs-keyword">function</span>*(<span class="hljs-params"></span>) </span>{<br>        <span class="hljs-comment">// ...</span><br>    });<br>}<br><br><span class="hljs-comment">// spawn 函数就是自动执行器</span><br><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">spawn</span>(<span class="hljs-params">genF</span>) </span>{<br>    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">resolve, reject</span>) </span>{<br>        <span class="hljs-keyword">var</span> gen = genF();<br>        <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">step</span>(<span class="hljs-params">nextF</span>) </span>{<br>            <span class="hljs-keyword">try</span> {<br>                <span class="hljs-keyword">var</span> next = nextF();<br>            } <span class="hljs-keyword">catch</span>(e) {<br>                <span class="hljs-keyword">return</span> reject(e); <br>        }<br>        <span class="hljs-keyword">if</span>(next.done) {<br>            <span class="hljs-keyword">return</span> resolve(next.value);<br>        } <br>        <span class="hljs-built_in">Promise</span>.resolve(next.value).then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">v</span>) </span>{<br>            step(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{ <span class="hljs-keyword">return</span> gen.next(v); });      <br>        }, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>) </span>{<br>            step(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{ <span class="hljs-keyword">return</span> gen.throw(e); });<br>        });<br>    }<br>    step(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{ <span class="hljs-keyword">return</span> gen.next(<span class="hljs-literal">undefined</span>); });<br>  });<br>}</code></pre>
                    所以说，async 函数是 Generator 函数的语法糖。另外，它比较新，是属于ES7中的语法。但是转码器 Babel 已经支持，转码后就能使用。
                </p>

                <h2>async 相较于 Promise 的优势</h2>

                <h4>1.相比于 Promise，它能更好地处理then链</h4>
                <p>
                    看下面这个例子，假设有一个业务，需要分多个步骤完成，每个步骤都是异步的，而且下一个步骤必须依赖于上一个步骤的结果。我们用 setTimeout 来模拟异步操作。
                    <pre class="hljs javascript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">takeLongTime</span>(<span class="hljs-params">n</span>) </span>{<br>    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-params">resolve</span> =&gt;</span> {<br>        setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> resolve(n + <span class="hljs-number">200</span>), n);<br>    });<br>}<br><br><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">step1</span>(<span class="hljs-params">n</span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`step1 with <span class="hljs-subst">${n}</span>`</span>);<br>    <span class="hljs-keyword">return</span> takeLongTime(n);<br>}<br><br><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">step2</span>(<span class="hljs-params">n</span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`step2 with <span class="hljs-subst">${n}</span>`</span>);<br>    <span class="hljs-keyword">return</span> takeLongTime(n);<br>}<br><br><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">step3</span>(<span class="hljs-params">n</span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`step3 with <span class="hljs-subst">${n}</span>`</span>);<br>    <span class="hljs-keyword">return</span> takeLongTime(n);<br>}</code></pre>
                    现在用 Promise 方式来实现这三个步骤的处理
                    <pre class="hljs javascript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">doIt</span>(<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-built_in">console</span>.time(<span class="hljs-string">"doIt"</span>);<br>    <span class="hljs-keyword">const</span> time1 = <span class="hljs-number">300</span>;<br>    step1(time1)<br>        .then(<span class="hljs-function"><span class="hljs-params">time2</span> =&gt;</span> step2(time2))<br>        .then(<span class="hljs-function"><span class="hljs-params">time3</span> =&gt;</span> step3(time3))<br>        .then(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> {<br>            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`result is <span class="hljs-subst">${result}</span>`</span>);<br>        });<br>}<br>doIt();<br><span class="hljs-comment">// step1 with 300</span><br><span class="hljs-comment">// step2 with 500</span><br><span class="hljs-comment">// step3 with 700</span><br><span class="hljs-comment">// result is 900</span></code></pre>
                    如果用 async/await 来实现的话，会是这样：
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">doIt</span>(<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-built_in">console</span>.time(<span class="hljs-string">"doIt"</span>);<br>    <span class="hljs-keyword">const</span> time1 = <span class="hljs-number">300</span>;<br>    <span class="hljs-keyword">const</span> time2 = <span class="hljs-keyword">await</span> step1(time1);<br>    <span class="hljs-keyword">const</span> time3 = <span class="hljs-keyword">await</span> step2(time2);<br>    <span class="hljs-keyword">const</span> result = <span class="hljs-keyword">await</span> step3(time3);<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`result is <span class="hljs-subst">${result}</span>`</span>);<br>}<br>doIt();</code></pre>
                    结果和之前的 Promise 实现是一样的，但是这个代码看起来是不是清晰得多，几乎跟同步代码一样。
                </p>

                <h4>2.中间值</h4>
                <p>
                    现在把业务要求改一下，仍然是三个步骤，但每一个步骤都需要之前每个步骤的结果。Pomise的实现看着很晕，传递参数太过麻烦。
                    <pre class="hljs javascript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">doIt</span>(<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-built_in">console</span>.time(<span class="hljs-string">"doIt"</span>);<br>    <span class="hljs-keyword">const</span> time1 = <span class="hljs-number">300</span>;<br>    step1(time1)<br>        .then(<span class="hljs-function"><span class="hljs-params">time2</span> =&gt;</span> {<br>            <span class="hljs-keyword">return</span> step2(time1, time2)<br>                .then(<span class="hljs-function"><span class="hljs-params">time3</span> =&gt;</span> [time1, time2, time3]);<br>        })<br>        .then(<span class="hljs-function"><span class="hljs-params">times</span> =&gt;</span> {<br>            <span class="hljs-keyword">const</span> [time1, time2, time3] = times;<br>            <span class="hljs-keyword">return</span> step3(time1, time2, time3);<br>        })<br>        .then(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> {<br>            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`result is <span class="hljs-subst">${result}</span>`</span>);<br>        });<br>}<br>doIt();</code></pre>
                    用 async/await 来写：
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">doIt</span>(<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-built_in">console</span>.time(<span class="hljs-string">"doIt"</span>);<br>    <span class="hljs-keyword">const</span> time1 = <span class="hljs-number">300</span>;<br>    <span class="hljs-keyword">const</span> time2 = <span class="hljs-keyword">await</span> step1(time1);<br>    <span class="hljs-keyword">const</span> time3 = <span class="hljs-keyword">await</span> step2(time1, time2);<br>    <span class="hljs-keyword">const</span> result = <span class="hljs-keyword">await</span> step3(time1, time2, time3);<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`result is <span class="hljs-subst">${result}</span>`</span>);<br>}<br>doIt();</code></pre>
                    没有多余的中间值，更加优雅地实现了。
                </p>

                <h4>3.调试</h4>
                <p>
                    相比于 Promise 更易于调试。
                </p>
                <p>
                    因为没有代码块，所以不能在一个返回的箭头函数中设置断点。如果你在一个 .then 代码块中使用调试器的步进(step-over)功能，调试器并不会进入后续的 .then 代码块，因为调试器只能跟踪同步代码的每一步。
                    <img src="~@/assets/blog/bg-20170728-01.png">
                    现在，如果使用 async/await，你就不必再使用箭头函数。你可以对 await 语句执行步进操作，就好像他们都是普通的同步语句一样。
                    <img src="~@/assets/blog/bg-20170728-02.png">
                </p>

                <h2>总结</h2>
                <p>
                    JavaScript的异步编写方式，从 回调函数 到 Promise、Generator 再到 Async/Await。表面上只是写法的变化，但本质上则是语言层的一次次抽象。让我们可以用更简单的方式实现同样的功能，而不需要去考虑代码是如何执行的。换句话说就是：<strong>异步编程的最高境界，就是根本不用关心它是不是异步</strong>。
                </p>

                <h2>参考文献</h2>
                <p>
                    <ul>
                        <li>
                            <a href="http://www.ruanyifeng.com/blog/2015/05/async.html" target="_blank">async 函数的含义和用法</a>
                        </li>
                        <li>
                            <a href="https://zhuanlan.zhihu.com/p/26260061" target="_blank">[译] 6个Async/Await优于Promise的方面</a>
                        </li>
                    </ul>
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {
        created () {

        }
    };
</script>
