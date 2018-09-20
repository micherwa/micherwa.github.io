<template>
    <div class="blog-container">
        <BlogHeader
            title="Javascript中的Event loop(事件循环)" subTitle=""
            date="2018-03-06" :tags="['Javascript']">
        </BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>前言</h2>
                <p>
                    JavaScript语言在设计之初，就确定了它是一种<strong>非阻塞</strong>的<strong>单线程</strong>的脚本语言。
                </p>

                <p>
                    <code>单线程</code>，同一个时间只能做一件事，这样可以提高效率。作为浏览器的脚本语言，JavaScript的主要目的是与用户互动，以及操作DOM。如果它有2个线程，假设一个线程在某个DOM节点上新增了点内容，另一个线程删除了这个节点，这时浏览器就不知道该以哪个线程为准了，所以JavaScript只能是单线程的。
                </p>

                <p>
                    这也意味着，Javascript代码在执行的任何时候，都只有<code>一个主线程</code>来处理所有的任务。
                </p>

                <p>
                    <code>非阻塞</code>，则是当代码需要进行一项异步任务(需要花一定时间，才能返回结果的任务，如I/O事件)的时候，主线程会挂起这个任务，然后在异步任务返回结果的时候，再去执行相应的回调。
                </p>

                <p>
                    那么JavaScript引擎是如何实现 非阻塞 的呢？答案就是：<code>event loop</code> (事件循环)。
                </p>

                <p>
                    注：在nodeJs中，也存在与浏览器环境下相似的 event loop，不过两者之间存在一些不同，所以下面会把两者分开解释。
                </p>

                <h2>浏览器环境下JavaScript的事件循环</h2>

                <h4>事件循环的4个步骤</h4>
                <p>
                    <ul>
                        <li>所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）</li>
                        <li>主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件</li>
                        <li>一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行</li>
                        <li>主线程不断重复上面的第三步。</li>
                    </ul>
                    下图可以更好得理解事件循环的步骤：
                    <img src="~@/assets/blog/bg-20180306-01.png">

                    上图中，主线程运行的时候，产生堆（heap）和栈（stack），栈中的代码调用各种外部API，它们在"任务队列"中加入各种事件（click，load，done）。只要栈中的代码执行完毕，主线程就会去读取"任务队列"，依次执行那些事件所对应的回调函数。
                </p>

                <h4>执行栈 与 任务队列</h4>

                <p>
                    当我们调用一个方法的时候，js会生成一个与这个方法对应的执行环境（context），又叫执行上下文。这个执行环境中存在着这个方法的私有作用域，上层作用域的指向，方法的参数，这个作用域中定义的变量以及这个作用域的this对象。 而当一系列方法被依次调用的时候，因为js是单线程的，同一时间只能执行一个方法，于是这些方法被排队在一个单独的地方。这个地方被称为<code>执行栈</code>。
                </p>

                <p>
                    当一个脚本第一次执行的时候，js引擎会解析这段代码，并将其中的同步代码按照执行顺序加入执行栈中，然后从头开始执行。如果当前执行的是一个方法，那么js会向执行栈中添加这个方法的执行环境，然后进入这个执行环境继续执行其中的代码。当这个执行环境中的代码 执行完毕并返回结果后，js会退出这个执行环境并把这个执行环境销毁，回到上一个方法的执行环境。。这个过程反复进行，直到执行栈中的代码全部执行完毕，。
                </p>

                <p>
                    以上的过程，说的都是同步代码的执行，最先往执行栈中加入的执行环境，将最后执行(栈的原则是 <strong>先进后出</strong> )。
                </p>

                <p>
                    而<code>任务队列</code>，则可是理解为一个事件的队列（也可以理解成消息的队列）。 任务队列 中的事件，除了IO设备的事件以外，还包括一些用户产生的事件（比如鼠标点击、页面滚动等等）。只要指定过回调函数，这些事件发生时就会进入 任务队列 ，等待主线程读取。
                </p>

                <p>
                    所谓 回调函数（callback），就是那些会被主线程挂起来的代码。异步任务必须指定回调函数，当主线程开始执行异步任务，就是执行对应的回调函数。
                </p>

                <p>
                    任务队列 是一个 <strong>先进先出</strong> 的数据结构，排在前面的事件，优先被主线程读取。主线程的读取过程基本上是自动的，只要执行栈一清空，任务队列 上第一位的事件就自动进入主线程。
                </p>

                <h4>macro task 与 micro task</h4>

                <p>
                    因为异步任务之间存在差异，所以它们执行的优先级也会有区别。大致分为两类：微任务（micro task）和宏任务（macro task）。
                </p>

                <p>
                    属于宏任务的事件有：<code>setInterval</code>、<code>setTimeout</code>、<code>script（整体代码）</code>、<code>setImmediate</code>、<code>I/O</code>、<code>UI rendering</code>
                </p>

                <p>
                    属于微任务的事件有：<code>Promises(指浏览器实现的原生 Promise)</code>、<code>MutaionObserver</code>、<code>process.nextTick</code>、<code>Object.observe</code>
                </p>

                <p>
                    对于执行优先级的问题，我们只需要记住 <strong>当执行栈执行完毕时，会立刻优先处理 <code>所有</code> 微任务队列中的事件，然后再去宏任务队列中取出 <code>一个</code> 事件。同一次事件循环中，微任务永远在宏任务之前执行。</strong>
                </p>

                <p>
                    为了更好地理解，请看下面这道面试题：
                    <pre class="hljs javascript"><code class="">setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-number">1</span>);<br>}, <span class="hljs-number">0</span>);<br><br><span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">executor</span>(<span class="hljs-params">resolve</span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-number">2</span>);<br>    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10000</span>; i++) {<br>        i == <span class="hljs-number">9999</span> &amp;&amp; resolve();<br>    }<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-number">3</span>);<br>}).then(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-number">4</span>);<br>});<br><br><span class="hljs-built_in">console</span>.log(<span class="hljs-number">5</span>);<br><br>问：控制台如何输出？</code></pre>
                </p>

                <p>
                    答案是：<code>2 3 5 4 1</code>
                </p>

                <p>
                    解析：
                    <ul>
                        <li>
                            首先，确定1最后输出，因为setTimeout需要等主线程中的所有任务都执行完，才会去执行，还得在微任务(Promise)之后。
                        </li>
                        <li>
                            然后，为什么2第一个输出？是因为promise对象一旦创建成功，就会立即执行。
                        </li>
                        <li>
                            接下来，一个for循环，将resolve()的结果异步输出，所以3第二个输出。
                        </li>
                        <li>
                            然后输出在主线程中的5。
                        </li>
                        <li>
                            最后，输出任务队列里的4。（就算把for循环里的i==9999，改为i==0，结果也是一样的）
                        </li>
                    </ul>
                </p>

                <h2>node环境下的事件循环</h2>

                <p>
                    Node.js也是单线程的Event Loop，但是它的运行机制不同于浏览器环境。
                    <img src="~@/assets/blog/bg-20180306-02.png">
                    根据上图，可以整理出Node.js的运行机制：
                    <ul>
                        <li>V8引擎解析JavaScript脚本</li>
                        <li>解析后的代码，调用Node API</li>
                        <li>libuv库负责Node API的执行。它将不同的任务分配给不同的线程，形成一个Event Loop（事件循环），以异步的方式将任务的执行结果返回给V8引擎</li>
                        <li>V8引擎再将结果返回给用户</li>
                    </ul>
                    因此，实际上node中的事件循环存在于 libuv 引擎中。
                </p>

                <h4>事件循环模型</h4>
                <p>
                    下面是一个libuv引擎中的事件循环的模型示意图：
                    <img src="~@/assets/blog/bg-20180306-03.png">
                    这个模型是node官网上的一篇文章中给出的，模型中的每一个方块代表事件循环的一个阶段，下面的解释也都来源于这篇 <a href="https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick" target="_blank">文章</a>。
                </p>

                <h4>事件循环各阶段详解</h4>
                <p>
                    从上面这个模型中，我们可以大致分析出node中的事件循环的顺序：<br>
                    外部输入数据-->轮询阶段(poll)-->检查阶段(check)-->关闭事件回调阶段(close callback)-->定时器检测阶段(timer)-->I/O事件回调阶段(I/O callbacks)-->闲置阶段(idle, prepare)-->轮询阶段...
                </p>

                <p>
                    这些阶段大致的功能如下：
                    <ul>
                        <li>
                            timers: 这个阶段执行定时器队列中的回调如 setTimeout() 和 setInterval()。
                        </li>
                        <li>
                            I/O callbacks: 这个阶段执行几乎所有的回调。但是不包括close事件，定时器和setImmediate()的回调。
                        </li>
                        <li>
                            idle, prepare: 这个阶段仅在内部使用，可以不必理会。
                        </li>
                        <li>
                            poll: 等待新的I/O事件，node在一些特殊情况下会阻塞在这里。
                        </li>
                        <li>
                            check: setImmediate()的回调会在这个阶段执行。
                        </li>
                        <li>
                            close callbacks: 例如socket.on('close', ...)这种close事件的回调。
                        </li>
                    </ul>
                </p>

                <p>
                    接下来，我们详细说说进入libuv引擎后的这些阶段：
                </p>

                <p>
                    <strong>poll阶段</strong>：当个v8引擎将js代码解析后传入libuv引擎后，循环首先进入poll阶段。poll阶段的执行逻辑如下： 先查看poll queue中是否有事件，有任务就按先进先出的顺序依次执行回调。 当queue为空时，会检查是否有setImmediate()的callback，如果有就进入check阶段执行这些callback。但同时也会检查是否有到期的timer，如果有，就把这些到期的timer的callback按照调用顺序放到timer queue中，之后循环会进入timer阶段执行queue中的 callback。 这两者的顺序是不固定的，收到代码运行的环境的影响。如果两者的queue都是空的，那么loop会在poll阶段停留，直到有一个i/o事件返回，循环会进入i/o callback阶段并立即执行这个事件的callback。<br>
                    值得注意的是，poll 阶段在执行poll queue 中的回调时实际上不会无限的执行下去。有两种情况poll阶段会终止执行 poll queue 中的下一个回调：1.所有回调执行完毕。2.执行数超过了node的限制。
                </p>

                <p>
                    <strong>check阶段</strong>：专门用来执行 setImmediate() 方法的回调，当 poll 阶段进入空闲状态，并且 setImmediate queue 中有 callback 时，事件循环进入这个阶段。
                </p>

                <p>
                    <strong>close阶段</strong>：当一个socket连接或者一个handle被突然关闭时（例如调用了 socket.destroy() 方法），close 事件会被发送到这个阶段执行回调。否则事件会用 process.nextTick() )方法发送出去。
                </p>

                <p>
                    <strong>timer阶段</strong>：这个阶段以先进先出的方式执行所有到期的timer加入timer队列里的 callback，一个 timer callback 指得是一个通过 setTimeout 或者 setInterval 函数设置的回调函数。
                </p>

                <p>
                    <strong>I/O callback阶段</strong>：这个阶段主要执行大部分I/O事件的回调，包括一些为操作系统执行的回调。例如一个TCP连接生错误时，系统需要执行回调来获得这个错误的报告。
                </p>

                <h4>process.nextTick 与 setImmediate 的区别以及使用场景</h4>

                <p>
                    process.nextTick 方法可以在当前"执行栈"的尾部(下一次Event Loop <strong>主线程读取"任务队列"</strong> 之前)触发回调函数。也就是说，它指定的任务总是发生在所有异步任务之前。<br>
                    setImmediate 方法则是在当前"任务队列"的尾部添加事件，也就是说，它指定的任务总是在下一次 Event Loop 时执行，这与setTimeout(fn, 0)很像。
                </p>

                <p>
                    两者的一个重要区别：多个 process.nextTick 语句总是在当前"执行栈"一次执行完，多个 setImmediate 可能则需要多次 loop 才能执行完。事实上，这正是Node.js 10.0版添加 setImmediate 方法的原因，否则像下面这样的递归调用 process.nextTick，将会没完没了，主线程根本不会去读取"任务队列"！
                </p>

                <p>
                    另外，由于process.nextTick指定的回调函数是在本次"事件循环"触发，而setImmediate指定的是在下次"事件循环"触发，所以很显然，前者总是比后者发生得早，而且执行效率也高（因为不用检查"任务队列"）。
                </p>

                <h3>参考文献</h3>

                <p>
                    <ul>
                        <li>
                            <a href="http://www.ruanyifeng.com/blog/2014/10/event-loop.html" target="_blank">JavaScript 运行机制详解：再谈Event Loop</a>
                        </li>
                        <li>
                            <a href="https://zhuanlan.zhihu.com/p/33058983" target="_blank">详解JavaScript中的Event Loop（事件循环）机制</a>
                        </li>
                        <li>
                            <a href="https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/" target="_blank">Tasks, microtasks, queues and schedules</a>
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
