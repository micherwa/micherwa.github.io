<template>
    <div class="blog-container">
        <BlogHeader
            title="Javascript中的异步编程" subTitle=""
            date="2017-11-06" :tags="['Javascript']">
        </BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>前言</h2>
                <p>
                    最近，有个小伙伴问了我一段代码：
                    <pre class="hljs typescript"><code class=""><span class="hljs-keyword">const</span> funB = <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"funB "</span>+ value);<br>};<br><br><span class="hljs-keyword">const</span> funA = <span class="hljs-function">(<span class="hljs-params">callback</span>) =&gt;</span> {<br>    ...<br>    <span class="hljs-keyword">typeof</span> callback === <span class="hljs-string">"function"</span> &amp;&amp; callback(<span class="hljs-string">"is_ok!"</span>);<br>}<br><br>funA(funB);</code></pre>
                    他不太理解这段代码中，funB函数作为funA函数的参数这样的写法。从语义上看，callback的意思是回调，那么是说funB是funA的回调嘛？
                </p>

                <p>
                    我看了一会说，这是一种异步编程的写法，funB函数的确是funA函数的回调，它会等待funA中前面的语句都执行完，再去执行。
                </p>

                <p>
                    嗯...额...等一下，异步编程，是什么？除了回调函数之外，还有什么？
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
                            onclick等事件 由浏览器内核的 DOM Binding 模块来处理，当事件触发的时候，回调函数会立即添加到任务队列中。
                        </li>
                        <li>
                            setTimeout 会由浏览器内核的 timer 模块来进行延时处理，当时间到达的时候，才会将回调函数添加到任务队列中。
                        </li>
                        <li>
                            ajax 则会由浏览器内核的 network 模块来处理，在网络请求完成返回之后，才将回调添加到任务队列中。
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
                    它的优点是：简单、容易理解，写起来也简单。<br>
                    但缺点是：不利于代码的阅读和维护，各个部分之间耦合度太高，流程不够清晰，而且每个方法只能指定一个回调函数。
                </p>

                <h4>二、事件监听</h4>
                <p>onclick 的写法，在异步编程中，称为事件监听。它的思路是：如果任务的执行不取决于代码的顺序，而取决于某个事件是否发生，也就事件驱动模式。</p>
                <p>
                    还是 f1 和 f2 的例子，为了简化代码，这里采用jQuery的写法：
                    <pre class="hljs javascript"><code><span class="hljs-comment">// 为f1绑定一个事件，当f1发生done事件，就执行f2</span><br>f1.on(<span class="hljs-string">'done'</span>, f2);<br><br><span class="hljs-comment">// 改写f1</span><br><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">f1</span>(<span class="hljs-params"></span>)</span>{<br>    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {<br>        <span class="hljs-comment">// f1的任务代码，执行完成后，立即触发done事件</span><br>        f1.trigger(<span class="hljs-string">'done'</span>);<br>    }, <span class="hljs-number">1000</span>);<br>}</code></pre>
                    它的优点是：比较容易理解，耦合度降低了。可以绑定多个事件，而且每个事件还能指定多个回调函数。<br>
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
                    Promise 是由 CommonJS 提出的一种规范，它是为了解决回调函数嵌套(<strong>回调地狱</strong>)的问题。它不是新的语法功能，而是一种新的写法，允许将回调函数的横向加载，改成纵向加载。它的思想是，每一个异步任务返回一个Promise对象，该对象有一个then方法，允许指定回调函数。
                </p>
                <p>
                    继续改写 f1 和 f2：
                    <pre class="hljs javascript"><code class=""><span class="hljs-comment">// f1() 和 f2() 的链式写法</span><br>f1().then(f2);<br><br><span class="hljs-comment">// 用jQuery改写f1</span><br><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">f1</span>(<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-keyword">var</span> dfd = $.Deferred();<br>    setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{<br>        <span class="hljs-comment">// f1的任务代码</span><br>        dfd.resolve();<br>    }, <span class="hljs-number">500</span>);<br>    <span class="hljs-keyword">return</span> dfd.promise;<br>}</code></pre>
                    它的优点：回调函数变成了链式写法，程序的流程可以看得很清楚，而且有一整套的配套方法，可以实现许多强大的功能。比如，指定多个回调函数：<code>f1().then(f2).then(f3);</code>。再比如，指定发生错误时的回调函数：<code>f1().then(f2).fail(f3);</code>。还有就是，如果一个任务已经完成，再添加回调函数，该回调函数会立即执行。所以，你不用担心是否错过了某个事件或信号。<br>
                    缺点就是：编写和理解，都相对比较难。
                </p>

                <h4>五、Generator</h4>
                <p>
                    Generator 函数是协程在 ES6 的实现，最大特点就是可以交出函数的执行权（即暂停执行）。
                    <pre class="hljs javascript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span>* <span class="hljs-title">gen</span>(<span class="hljs-params">x</span>)</span>{<br>  <span class="hljs-keyword">var</span> y = <span class="hljs-keyword">yield</span> x + <span class="hljs-number">2</span>;<br>  <span class="hljs-keyword">return</span> y;<br>}</code></pre>
                    上面代码就是一个 Generator 函数。它不同于普通函数，是可以暂停执行的，所以函数名之前要加星号，以示区别。整个 Generator 函数就是一个封装的异步任务，或者说是异步任务的容器。异步操作需要暂停的地方，都用 yield 语句注明。Generator 函数的执行方法如下。
                    <pre class="hljs q"><code class=""><span class="hljs-built_in">var</span> g = gen(<span class="hljs-number">1</span>);<br><span class="hljs-comment"><br>// { value: 3, done: false }</span><br>g.<span class="hljs-built_in">next</span>();<br><span class="hljs-comment">// { value: undefined, done: true }</span><br>g.<span class="hljs-built_in">next</span>();</code></pre>
                    上面代码中，调用 Generator 函数，会返回一个内部指针（即遍历器 ）g 。这是 Generator 函数不同于普通函数的另一个地方，即执行它不会返回结果，返回的是指针对象。调用指针 g 的 next 方法，会移动内部指针（即执行异步任务的第一段），指向第一个遇到的 yield 语句，上例是执行到 x + 2 为止。
                </p>
                <p>
                    换言之，next 方法的作用是分阶段执行 Generator 函数。每次调用 next 方法，会返回一个对象，表示当前阶段的信息（ value 属性和 done 属性）。value 属性是 yield 语句后面表达式的值，表示当前阶段的值；done 属性是一个布尔值，表示 Generator 函数是否执行完毕，即是否还有下一个阶段。
                </p>
                <p>
                    Generator 函数内部还可以部署错误处理代码，捕获函数体外抛出的错误。
                    <pre class="hljs javascript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span>* <span class="hljs-title">gen</span>(<span class="hljs-params">x</span>)</span>{<br>  <span class="hljs-keyword">try</span> {<br>    <span class="hljs-keyword">var</span> y = <span class="hljs-keyword">yield</span> x + <span class="hljs-number">2</span>;<br>  } <span class="hljs-keyword">catch</span> (e){ <br>    <span class="hljs-built_in">console</span>.log(e);<br>  }<br>  <span class="hljs-keyword">return</span> y;<br>}<br><span class="hljs-keyword">var</span> g = gen(<span class="hljs-number">1</span>);<br>g.next();<br>g.throw（<span class="hljs-string">'出错了'</span>）;</code></pre>
                    上面代码的最后一行，Generator 函数体外，使用指针对象的 throw 方法抛出的错误，可以被函数体内的 try … catch 代码块捕获。这意味着，出错的代码与处理错误的代码，实现了时间和空间上的分离，这对于异步编程无疑是很重要的。
                </p>

                <h4>六、async/await</h4>
                <p>
                    这是 ES7 提出的一种更优雅的异步解决方案，灵感来自于 C# 语言。具体可参考
                    <router-link :to="{ name: 'async-await' }">这篇文章</router-link><br>
                    来看个例子，要实现一个暂停功能，输入N毫秒，则停顿N毫秒后才继续往下执行。
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">var</span> sleep = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">time</span>) </span>{<br>    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">resolve, reject</span>) </span>{<br>        setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{<br>            resolve();<br>        }, time);<br>    })<br>};<br><span class="hljs-keyword">var</span> start = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-comment">// 在这里使用起来就像同步代码那样直观</span><br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'start'</span>);<br>    <span class="hljs-keyword">await</span> sleep(<span class="hljs-number">3000</span>);<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'end'</span>);<br>};<br>start();</code></pre>
                    控制台先输出start，稍等3秒后，输出了end。
                </p>

                <p>
                    解析：
                    <ul>
                        <li>async 表示这是一个async函数，await只能用在这个函数里面。</li>
                        <li>await 表示在这里等待promise返回结果了，再继续执行。</li>
                        <li>
                            await 后面跟着的应该是一个promise对象（当然，其他返回值也没关系，只是会立即执行，不过那样就没有意义了…）
                        </li>
                    </ul>
                </p>

                <p>
                    await等待的虽然是promise对象，但不必写.then(..)，直接可以得到返回值。
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">var</span> sleep = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">time</span>) </span>{<br>    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">resolve, reject</span>) </span>{<br>        setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{<br>            <span class="hljs-comment">// 返回 ‘ok’</span><br>            resolve(<span class="hljs-string">'ok'</span>);<br>        }, time);<br>    })<br>};<br><span class="hljs-keyword">var</span> start = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-keyword">let</span> result = <span class="hljs-keyword">await</span> sleep(<span class="hljs-number">3000</span>);<br>    <span class="hljs-built_in">console</span>.log(result); <span class="hljs-comment">// 收到 ‘ok’</span><br>};</code></pre>
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
