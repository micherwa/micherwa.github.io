<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>前言</h2>
                <p>
                    最近，小伙伴S 问了我一段代码：
                    <pre class="hljs coffeescript"><code class="">const funB = <span class="hljs-function"><span class="hljs-params">(value)</span> =&gt;</span> {<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"funB "</span>+ value);<br>};<br><br>const funA = <span class="hljs-function"><span class="hljs-params">(callback)</span> =&gt;</span> {<br>    ...<br>    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {<br>        <span class="hljs-keyword">typeof</span> callback === <span class="hljs-string">"function"</span> &amp;&amp; callback(<span class="hljs-string">"is_ok!"</span>);<br>    }, <span class="hljs-number">1000</span>);<br>}<br><br>funA(funB);</code></pre>
                    他不太理解这段代码中，funB 函数作为 funA 函数的参数这样的写法。从语义上看，callback 的意思是回调，那么是说 funB 是 funA 的回调嘛？
                </p>

                <p>
                    我给他解释说，funB 函数的确是 funA 函数的回调，它会等待 funA 中前面的语句都执行完，再去执行。这是一种异步编程的写法。
                </p>

                <p>
                    小伙伴S 还是有点不太理解：异步编程是什么？除了回调函数之外，异步编程还有哪些？
                </p>

                <p>
                    别急，让我们先从概念入手，再逐个理解异步编程中的方法，看看它的前世今生。
                </p>

                <h2>什么是异步？</h2>
                <p>
                    所谓"异步"(Asynchronous)，可以理解为<strong>一种不连续的执行</strong>。简单地说，就是把一个任务分成两段，先执行第一段，然后转而执行其他任务，等接到通知了，再回过头执行第二段。
                </p>
                <p>
                    我们都知道，JavaScript是单线程的。而异步，对于JavaScript的重要性，则体现在<strong>非阻塞</strong>这一点上。一些常见的异步有：
                    <ul>
                        <li>
                            <code>onclick</code> 在其事件触发的时候，回调会立即添加到任务队列中。
                        </li>
                        <li>
                            <code>setTimeout</code> 只有当时间到达的时候，才会将回调添加到任务队列中。
                        </li>
                        <li>
                            <code>ajax</code> 在网络请求完成并返回之后，才将回调添加到任务队列中。
                        </li>
                    </ul>
                    接下来，我们一起来看看Javascript中的异步编程，具体有哪几种。
                </p>

                <h2>实现异步编程的方法</h2>

                <h4>一、回调函数</h4>
                <p>
                    上面不止一次提到了回调函数。它从概念上说很简单，就是<strong>把任务的第二段单独写在一个函数里面，等到重新执行这个任务的时候，就直接调用这个函数。</strong>它是异步编程中，最基本的方法。
                </p>
                <p>
                    举个例子，假定有两个函数 f1 和 f2，后者等待前者的执行结果。顺序执行的话，可以这样写：
                    <pre class="hljs lisp"><code class="">f1()<span class="hljs-comment">;</span><br>f2()<span class="hljs-comment">;</span></code></pre>
                </p>
                <p>但是，如果 f1 是一个很耗时的任务，该怎么办？</p>
                <p>
                    改写一下 f1，把 f2 写成 f1 的回调函数：
                    <pre class="hljs coffeescript"><code class="">const f1 = <span class="hljs-function"><span class="hljs-params">(callback)</span> =&gt;</span> {<br>    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {<br>        <span class="hljs-keyword">typeof</span> callback === <span class="hljs-string">"function"</span> &amp;&amp; callback();<br>    }, <span class="hljs-number">1000</span>);<br>}<br>f1(f2);</code></pre>
                    采用这种方式，我们就把同步操作变成了异步操作。f1 并不会堵塞整个程序的运行。相当于执行完 f1 之后，通过回调通知了 f2 的执行。
                </p>
                <p>
                    它的优点是：简单、容易理解，写起来也简单。
                </p>
                <p>
                    缺点是：不利于代码的阅读和维护，各个部分之间耦合度太高，流程不够清晰，而且每个方法只能指定一个回调函数。
                </p>

                <h4>二、事件监听</h4>
                <p>onclick 的写法，在异步编程中，称为事件监听。它的思路是：如果任务的执行不取决于代码的顺序，而取决于某个事件是否发生，也就事件驱动模式。</p>
                <p>
                    还是 f1 和 f2 的例子，为了简化代码，这里采用jQuery的写法：
                    <pre class="hljs javascript"><code><span class="hljs-comment">// 为f1绑定一个事件，当f1发生done事件，就执行f2</span><br>f1.on(<span class="hljs-string">'done'</span>, f2);<br><br><span class="hljs-comment">// 改写f1</span><br><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">f1</span>(<span class="hljs-params"></span>)</span>{<br>    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {<br>        <span class="hljs-comment">// f1的任务代码，执行完成后，立即触发done事件</span><br>        f1.trigger(<span class="hljs-string">'done'</span>);<br>    }, <span class="hljs-number">1000</span>);<br>}</code></pre>
                    它的优点是：比较容易理解，耦合度降低了。可以绑定多个事件，而且每个事件还能指定多个回调函数。
                </p>
                <p>
                    缺点是：整个程序都会变为由事件来驱动，流程会变得很不清晰。
                </p>

                <h4>三、发布/订阅</h4>
                <p>
                    这是一种为了处理一对多的业务场景而诞生的设计模式，它也是一种异步编程的方法。vue中MVVM的实现，就有它的功劳。
                </p>
                <p>
                    关于概念，我们可以这样理解，假定存在一个"信号中心"，某个任务执行完成，就向信号中心"发布"（publish）一个信号，其他任务可以向信号中心"订阅"（subscribe）这个信号，从而知道什么时候自己可以开始执行。这就叫做"发布/订阅模式"（publish-subscribe pattern），又称"观察者模式"（observer pattern）。
                </p>
                <p>
                    下面的例子，采用的是 Morgan Roderick 的
                    <a href="https://github.com/mroderick/PubSubJS" target="_blank">PubSubJS</a>
                    ，这是一个无依赖的JavaScript插件：
                    <pre class="hljs coffeescript"><code class=""><span class="hljs-keyword">import</span> PubSub <span class="hljs-keyword">from</span> <span class="hljs-string">'pubsub-js'</span>;<br><br><span class="hljs-regexp">//</span> f2向 <span class="hljs-string">'PubSub'</span> 订阅信号 <span class="hljs-string">'done'</span><br>PubSub.subscribe(<span class="hljs-string">'done'</span>, f2);<br><br>const f1 = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {<br>    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {<br>        <span class="hljs-regexp">//</span> f1执行完成后，向 <span class="hljs-string">'PubSub'</span> 发布信号 <span class="hljs-string">'done'</span>，从而执行 f2<br>        PubSub.publish(<span class="hljs-string">'done'</span>);<br>    }, <span class="hljs-number">1000</span>);<br>};<br>f1();<br><br><span class="hljs-regexp">//</span> f2 完成执行后，也可以取消订阅<br>PubSub.unsubscribe(<span class="hljs-string">"done"</span>, f2);</code></pre>
                    这种模式有点类似于“事件监听”，但是明显优于后者。因为，我们可以通过查看“消息中心”，了解存在多少信号、每个信号有多少订阅者，从而监控程序的运行。
                </p>

                <h4>四、Promise对象</h4>
                <p>接下来，我们聊聊与ajax相关的异步编程方法，Promise对象。</p>
                <p>
                    Promise 是由 CommonJS 提出的一种规范，它是为了解决回调函数嵌套，也就是<strong>回调地狱</strong>的问题。它不是新的语法功能，而是一种新的写法，允许将回调函数的横向加载，改成纵向加载。它的思想是，每一个异步任务返回一个Promise对象，该对象有一个then方法，允许指定回调函数。
                </p>
                <p>
                    继续改写 f1 和 f2：
                    <pre class="hljs coffeescript"><code class="">const f1 = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {<br>    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> Promise(<span class="hljs-function"><span class="hljs-params">(resolve, reject)</span> =&gt;</span> {<br>        let timeOut = Math.random() * <span class="hljs-number">2</span>;<br>        setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {<br>            <span class="hljs-keyword">if</span> (timeOut &lt; <span class="hljs-number">1</span>) {<br>                resolve(<span class="hljs-string">'200 OK'</span>);<br>            } <span class="hljs-keyword">else</span> {<br>                reject(<span class="hljs-string">'timeout in '</span> + timeOut + <span class="hljs-string">' seconds.'</span>);<br>            }<br>        }, <span class="hljs-number">1000</span>);<br>    });  <br>};<br><br>const f2 = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'start f2'</span>);  <br>};<br><br>f1().<span class="hljs-keyword">then</span>(<span class="hljs-function"><span class="hljs-params">(result)</span> =&gt;</span> {<br>    <span class="hljs-built_in">console</span>.log(result);<br>    f2();<br>}).<span class="hljs-keyword">catch</span>(<span class="hljs-function"><span class="hljs-params">(reason)</span> =&gt;</span> {<br>    ...<br>);</code></pre>
                    例子中，用随机数模拟了请求的超时。当 f1 返回 Promise 的 resolve 时，执行 f2。
                </p>
                <p>
                    Promise的优点是：回调函数变成了链式的写法，程序的流程可以看得很清楚。还有就是，如果一个任务已经完成，再添加回调函数，该回调函数会立即执行。所以，你不用担心是否错过了某个状态。
                </p>
                <p>
                    缺点就是：编写和理解，都相对比较难。
                </p>

                <h4>五、Generator</h4>
                <p>
                    generator（生成器）是 ES6 标准引入的数据类型。它最大特点，就是可以交出函数的执行权（即暂停执行），是协程在 ES6 中的实现。
                </p>

                <p>
                    看上去它像一个函数，定义如下：
                    <pre class="hljs javascript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span>* <span class="hljs-title">gen</span>(<span class="hljs-params">x</span>)</span> {<br>  <span class="hljs-keyword">var</span> y = <span class="hljs-keyword">yield</span> x + <span class="hljs-number">2</span>;<br>  <span class="hljs-keyword">return</span> y;<br>}</code></pre>
                    它不同于普通函数，函数名之前要加星号(<code>*</code>)，是可以暂停执行的。
                </p>
                <p>
                    整个 Generator 函数就是一个封装的异步任务，或者说是异步任务的容器。用 yield 语句注明异步操作需要暂停的地方。
                </p>
                <p>
                    我们来看一下 Generator 函数执行的过程：
                    <pre class="hljs q"><code class=""><span class="hljs-built_in">var</span> g = gen(<span class="hljs-number">1</span>);<br><span class="hljs-comment"><br>// { value: 3, done: false }</span><br>g.<span class="hljs-built_in">next</span>();<br><span class="hljs-comment">// { value: undefined, done: true }</span><br>g.<span class="hljs-built_in">next</span>();</code></pre>
                    上面代码中，调用 Generator 函数，会返回一个内部指针（即遍历器 ）g 。这是 Generator 函数不同于普通函数的另一个地方，即执行它不会返回结果，返回的是指针对象。调用指针 g 的 next 方法，会移动内部指针（即执行异步任务的第一段），指向第一个遇到的 yield 语句，上例是执行到 x + 2 为止。
                </p>
                <p>
                    换言之，next 方法的作用是分阶段执行 Generator 函数。每次调用 next 方法，会返回一个对象，表示当前阶段的信息（ value 属性和 done 属性）。value 属性是 yield 语句后面表达式的值，表示当前阶段的值；done 属性是一个布尔值，表示 Generator 函数是否执行完毕，即是否还有下一个阶段。
                </p>

                <h4>六、async/await</h4>
                <p>
                    这是 ES8 中提出的一种更优雅的异步解决方案，灵感来自于 C# 语言。具体可前往
                    <router-link :to="{ name: 'async-await' }">细说 async/await 相较于 Promise 的优势</router-link>
                    ，深入理解其原理及特性。
                </p>
                <p>
                    来看个例子，要实现一个暂停功能，输入 N 毫秒，则停顿 N 毫秒后才继续往下执行。
                    <pre class="hljs typescript"><code class=""><span class="hljs-keyword">const</span> sleep = <span class="hljs-function">(<span class="hljs-params">time</span>) =&gt;</span> {<br>    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {<br>        setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {<br>            resolve();<br>        }, time);<br>    })<br>};<br><br><span class="hljs-keyword">const</span> start = <span class="hljs-keyword">async</span> () =&gt; {<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'start'</span>);<br>    <span class="hljs-comment">// 在这里使用起来就像同步代码那样直观</span><br>    <span class="hljs-keyword">await</span> sleep(<span class="hljs-number">1000</span>);<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'end'</span>);<br>};<br><br>start();</code></pre>
                    控制台先输出 start，稍等 1 秒后，输出结果 ok，最后输出 end。
                </p>

                <p>
                    解析一下上述代码：
                    <ul>
                        <li>
                            async 表示这是一个async函数，await 只能用在这个函数里面。
                        </li>
                        <li>
                            await 表示在这里等待 promise 返回了结果，再继续执行。
                        </li>
                        <li>
                            使用起来，就像写同步代码一样地优雅。
                        </li>
                    </ul>
                </p>

                <h2>总结</h2>
                <p>
                    JavaScript的异步编写方式，从 回调函数 到 async/await，感觉在写法上，每次都有进步，其本质就是一次次对语言层抽象的优化。以至于现在，我们可以像同步一样地，去处理异步。
                </p>

                <p>
                    换句话说就是：<strong>异步编程的最高境界，就是根本不用关心它是不是异步</strong>。
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
