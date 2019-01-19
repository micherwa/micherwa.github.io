<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>一篇文章和一道面试题</h2>
                <p>
                    最近，有篇名为
                    <a href="https://segmentfault.com/a/1190000017224799" target="_blank">《8张图帮你一步步看清 async/await 和 promise 的执行顺序》</a>
                    的文章引起了我的关注。
                </p>

                <p>
                    作者用一道2017年「今日头条」的前端面试题为引子，分步讲解了最终结果的执行原因。其中涉及到了不少概念，比如异步的执行顺序，宏任务，微任务等等，同时作者限定了执行范围，以浏览器的 event loop 机制为准。下面是原题的代码：
                    <pre class="hljs javascript"><code class="focus"><span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">async1</span> (<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'async1 start'</span>);<br>    <span class="hljs-keyword">await</span> async2();<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'async1 end'</span>);<br>}<br><br><span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">async2</span> (<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'async2'</span>);<br>}<br><br><span class="hljs-built_in">console</span>.log(<span class="hljs-string">'script start'</span>);<br><br>setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'setTimeout'</span>);<br>}, <span class="hljs-number">0</span>);<br><br>async1();<br><br><span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">resolve</span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'promise1'</span>);<br>    resolve();<br>}).then(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'promise2'</span>);<br>});<br><br><span class="hljs-built_in">console</span>.log(<span class="hljs-string">'script end'</span>);</code></pre>
                </p>

                <p>
                    紧接着，作者先给出了答案。并希望读者先行自我测试。
                    <pre class="hljs sql"><code class="">script start<br>async1 start<br>async2<br>promise1<br>script end<br>promise2<br>async1 end<br>setTimeout</code></pre>
                </p>

                <p>
                    我在看这道题的时候，先按照自己的理解写出了结果。
                    <pre class="hljs sql"><code class="">script start<br>async1 start<br>async2<br>promise1<br>script end<br>async1 end<br>promise2<br>setTimeout</code></pre>
                </p>

                <h2>一些重要的概念</h2>
                <p>
                    这里需要先简单地说一些 event loop 的概念。
                    <ul>
                        <li>Javascript是单线程的，所有的同步任务都会在主线程中执行。</li>
                        <li>主线程之外，还有一个任务队列。每当一个异步任务有结果了，就往任务队列里塞一个事件。</li>
                        <li>当主线程中的任务，都执行完之后，系统会 “依次” 读取任务队列里的事件。与之相对应的异步任务进入主线程，开始执行。</li>
                        <li>异步任务之间，会存在差异，所以它们执行的优先级也会有区别。大致分为 微任务（micro task，如：Promise、MutaionObserver等）和宏任务（macro task，如：setTimeout、setInterval、I/O等）。同一次事件循环中，微任务永远在宏任务之前执行。</li>
                        <li>主线程会不断重复上面的步骤，直到执行完所有任务。</li>
                    </ul>

                    另外，还有 async/await 的概念。
                    <ul>
                        <li>async 函数，可以理解为是Generator 函数的语法糖。</li>
                        <li>它建立在promise之上，总是与await一起使用的。</li>
                        <li>await会返回一个表达式，或者一个值。</li>
                        <li>其目的是为了让异步操作更优雅，能像同步一样地书写。</li>
                    </ul>
                </p>

                <h2>我的理解</h2>
                <p>
                    再说说我对这道题的理解。
                    <ul>
                        <li>首先，从console的数量上看，会输出8行结果。</li>
                        <li>再瞟了一眼代码，看到了setTimeout，于是，默默地把它填入第8行。</li>
                        <li>在setTimeout附近，看到了 console.log( 'script start' ) 和 async1()，可以确认它们是同步任务，会先在主线程中执行。所以，妥妥地在第1行填入 script start，第2行填入async1方法中的第一行 async1 start。</li>
                        <li>接下来，遇到了await。从字面意思理解，让我们等等。需要等待async2()函数的返回，同时会阻塞后面的代码。所以，第3行填入 async2。</li>
                        <li>讲道理，await都执行完了，该轮到console.log( 'async1 end' )的输出了。但是，别忘了下面还有个Promise，有一点需要注意的是：当 new 一个 Promise的时候，其 resolve 方法中的代码会立即执行。如果不是 async1()的 await 横插一杠，promise1 可以排得更前面。所以，现在第4行填入 promise1。</li>
                        <li>再接下来，同步任务 console.log( 'script end' ) 执行。第5行填入 script end。</li>
                        <li>还有第6和第7行，未填。回顾一下上面提到 async/await 的概念，其目的是为了让异步能像同步一样地书写。那么，我认为 console.log( 'async1 end' ) 就是个同步任务。所以，第6行填入async1 end。</li>
                        <li>最后，顺理成章地在第7行填入 promise2。</li>
                    </ul>
                </p>

                <h2>与作者答案的不同</h2>
                <p>
                    回过头对比与作者的答案，发现第6和第7行的顺序有问题。
                </p>

                <p>
                    再耐心地往下看文章，反复地看了几遍 async1 end 和 promise2 谁先谁后，还是无法理解为何在chrome浏览器中，promise2 会先于 async1 end 输出。
                </p>

                <p>
                    然后，看到评论区，发现也有人提出了相同的疑惑。@rhinel提出，在他的72.0.3622.0（正式版本）dev（64 位）的chrome中，跑出来的结果是 async1 end 在 promise2 之前。
                </p>

                <p>
                    随即我想到了一种可能，JS的规范可能会在未来有变化。于是，我用自己的react工程试了一下（工程中的babel-loader版本为7.1.5。.babelrc的presets设置了stage-3），结果与我的理解一致。当前的最新版本 chromeV71，在这里的执行顺序上，的确存在有问题。
                </p>

                <p>
                    于是，我也在评论区给作者留了言，进行了讨论。@rhinel最后也证实，其实最近才发布通过了这个顺序的改进方案，这篇
                    <a href="https://v8.dev/blog/fast-async" target="_blank">《Faster async functions and promises》</a>
                    详细解释了这个改进，以及实现效果。不久之后，作者也在他文章的最后，补充了我们讨论的结果，供读者参考。
                </p>

                <h2>总结</h2>
                <p>
                    最后，我想说的是，本文虽然只是由一道面试题引申出的，对浏览器执行顺序的思考、讨论与验证的过程。但正是因为有了这些过程，才让更多的思想得以碰撞，概念进一步得以理解，规范得以明了。
                </p>
                <p>
                    有机会的话，希望能有与更多的同道，多多交流。
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
