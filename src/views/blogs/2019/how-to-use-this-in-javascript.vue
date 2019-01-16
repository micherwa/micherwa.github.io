<template>
    <div class="blog-container">
        <Title :name="info.mainTitle"></Title>
        <BlogHeader :title="info.mainTitle" :subTitle="info.subTitle" :date="info.date" :tags="info.tags"></BlogHeader>

        <BlogContent>
            <div slot="content">
                <h2>前言</h2>
                <p>这是前端面试题系列的第 4 篇，你可能错过了前面的篇章，可以在这里找到：</p>
                <ul>
                    <li>
                        <a href="https://segmentfault.com/a/1190000017480929" target="_blank">今日头条 面试题和思路解析</a>
                    </li>
                    <li>
                        <a href="https://segmentfault.com/a/1190000017540629" target="_blank">如何实现一个圣杯布局？</a>
                    </li>
                    <li>
                        <a href="https://segmentfault.com/a/1190000017784553" target="_blank">伪类与伪元素的区别及实战</a>
                    </li>
                </ul>

                <p>
                    在前端的面试中，经常会问到有关 this 的指向问题。最近，朋友Z 向我求助说，他一看到 this 的题目就犯难，搞不清楚 this 究竟指向了谁。我为他做了解答，并整理成了这篇文章，希望能帮到有需要的同学。
                </p>

                <h2>一道面试题</h2>
                <p>
                    朋友Z 给我看了这样一道题：
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">var</span> length = <span class="hljs-number">10</span>;<br><br><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fn</span> (<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.length);<br>}<br> <br><span class="hljs-keyword">var</span> obj = {<br>    <span class="hljs-attr">length</span>: <span class="hljs-number">5</span>,<br>    <span class="hljs-attr">method</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">fn</span>) </span>{<br>        fn();<br>        <span class="hljs-built_in">arguments</span>[<span class="hljs-number">0</span>]();<br>    }<br>};<br> <br>obj.method(fn, <span class="hljs-number">1</span>);</code></pre>
                    问：浏览器的输出结果是什么？
                </p>

                <p>
                    它的答案是：先输出一个 <code>10</code>，然后输出一个 <code>2</code>。
                </p>

                <p>
                    让我们来看一下，这道题的解析：
                    <ul>
                        <li>
                            请牢记一个重要的原则：<strong>this 永远指向，调用函数的那个对象</strong>。
                        </li>
                        <li>
                            在我们这道题中，虽然 fn 作为 method 的参数传了进来，但它的调用者并不受影响，任然是 <strong>window</strong>，所以输出了 10.
                        </li>
                        <li>
                            <strong>arguments[0]();</strong> 这条语句并不常见，可能大家有疑惑的点在这里。 其实，<strong>arguments 是一种特殊的对象。在函数中，我们无需指出参数名，就能访问。可以认为它是一种，隐式的传参形式</strong>。
                        </li>
                        <li>
                            当执行 arguments[0](); 时，其实调用了 fn()。而这时，fn 函数中 this 就指向了 arguments，这个特殊的对象。obj.method 方法接收了 2 个参数，所以 arguments 的 length，很显然就是 2 了。
                        </li>
                    </ul>
                </p>

                <h2>改造一下</h2>
                <p>
                    再来，不少同学对 this 的指向感到疑惑，是因为 this 并没有指向我们预期的那个对象。
                </p>
                <p>
                    就像这道题，从语义上来看，我们期望 fn() 输出的是 obj 自己的 length，也就是 5，而不是 10。那么如果要得到 5 的结果，我们该如何修改这段代码呢？
                </p>
                <p>
                    其实只要多做一步处理就好。就是让 this 指向 obj 自己。这里，我们可以用 <strong>call</strong> 来改变 this 的指向，像下面这样：
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">var</span> length = <span class="hljs-number">10</span>;<br><br><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">fn</span> (<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.length);<br>}<br><br><span class="hljs-keyword">var</span> obj = {<br>    <span class="hljs-attr">length</span>: <span class="hljs-number">5</span>,<br>    <span class="hljs-attr">method</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">fn</span>) </span>{<br>        <span class="hljs-comment">// 在这里用call 将 this 指向 obj 自己</span><br>        fn.call(<span class="hljs-keyword">this</span>);<br>    }<br>};<br> <br>obj.method(fn);</code></pre>
                    输出的结果就是 5 了，搞定。
                </p>
                <p>
                    其实 this 也没那么复杂吧，我们只需要一些简单的操作，就能控制 this 的指向了。那么，问题来了，为什么有时候 this 会失控呢？
                </p>
                <p>
                    别急，让我们从理解 this 的基本概念开始，来看看 this 到底是什么？
                </p>

                <h2>this 是什么？</h2>
                <p>
                    this 是 JavaScript 中的一个关键字。它通常被运用于函数体内，依赖于函数调用的上下文条件，与函数被调用的方式有关。它指向谁，则完全是由函数被调用的调用点来决定的。
                </p>
                <p>
                    所以，this，是在运行时绑定的，而与编写时的绑定无关。随着函数使用场合的不同，this 的值也会发生变化。但是有一个总的原则：那就是<strong>this 总会指向，调用函数的那个对象</strong>。
                </p>

                <h2>为什么要用this？</h2>
                <p>
                    从概念上理解起来，似乎有点费劲。那我们为什么还要使用 this 呢？用了 this 会带来什么好处？
                </p>
                <p>
                    让我们先看下面这个例子：
                    <pre class="hljs actionscript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">identify</span><span class="hljs-params">()</span> </span>{<br>    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name.toUpperCase();<br>}<br><br><span class="hljs-keyword">var</span> me = {<br>    name: <span class="hljs-string">"Kyle"</span><br>};<br><br><span class="hljs-keyword">var</span> you = {<br>    name: <span class="hljs-string">"Reader"</span><br>};<br><br>identify.call( me ); <span class="hljs-comment">// KYLE</span><br>identify.call( you ); <span class="hljs-comment">// READER</span></code></pre>
                </p>

                <p>
                    一开始我们可能太不明白为何这样输出。那不如先换个思路，与使用 this 相反，我们可以明确地将环境对象，传递给 identify()。像这样：
                    <pre class="hljs actionscript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">identify</span><span class="hljs-params">(context)</span> </span>{<br>    <span class="hljs-keyword">return</span> context.name.toUpperCase();<br>}<br>identify( you ); <span class="hljs-comment">// READER</span></code></pre>
                </p>

                <p>
                   在这个简单的例子中，结果是一样的。我们可以把环境对象直接传入函数，这样看来比较直观。但是，<strong>当模式越发复杂时，将执行环境作为一个明确的参数传递给函数，就会显得非常混乱了</strong>。
                </p>
                <p>
                    而 this 机制，可以提供一种更优雅的方式，来隐含地“传递”一个对象的引用，这会使得 API 的设计更加地干净，复用也会变得容易。
                </p>

                <h2>this 的原理</h2>
                <p>
                    在明白了 this 的概念之后，不经让我好奇，为何 this 指向的就是函数运的执行环境呢？
                </p>
                <p>
                    之前，看到了 <strong>阮老师</strong> 的一篇文章，十分透彻地分析了 this 的原理。我根据自己的理解，整理如下。
                </p>
                <p>
                    很多教科书会告诉你，this 指的是函数运行时所在的环境。但是，为什么会这样？也就是说，函数的运行环境到底是怎么决定的？
                </p>
                <p>
                    理解 this 的原理，有助于帮我们更好地理解它的用法。<strong>JavaScript 语言之所以有 this 的设计，跟内存里面的数据结构有关系</strong>。
                </p>

                <p>
                    来看一个简单的示例：
                    <pre class="hljs javascript"><code style="word-break: break-word; white-space: initial;" class=""><span class="hljs-attribute">var obj</span> = { foo:  5 };</code></pre>
                    上面的代码将一个对象赋值给变量 obj。JavaScript 引擎会先在内存里面，生成一个对象 { foo: 5 }，然后把这个对象的<strong>内存地址</strong>赋值给变量 obj。
                </p>

                <p>
                    也就是说，变量 obj 其实只是一个地址。后面如果要读取 obj.foo，引擎先从 obj 拿到内存地址，然后再从该地址读出原始的对象，返回它的 foo 属性。
                </p>

                <p>
                    这样的结构很清晰，但如果属性的值是一个函数，又会怎么样呢？比如这样：
                    <pre class="hljs actionscript"><code style="word-break: break-word; white-space: initial;" class=""><span class="hljs-keyword">var</span> obj = { foo: <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">()</span> </span>{} };</code></pre>
                </p>

                <p>
                    这时，JavaScript 引擎会将函数单独保存在内存中，然后再将<strong>函数的地址</strong>赋值给 foo 属性的 value 属性。
                    <img src="~@/assets/blog/bg-20190116-01.png">
                    可以看到，函数是一个单独的值(以地址形式赋值)，所以才可以在不同的环境中执行。
                </p>

                <p>
                    又因为，JavaScript 允许在函数体内部，引用当前环境的其他变量。所以需要有一种机制，能够在函数体内部获得当前的运行环境（context）。所以，this就出现了，它的设计目的就是<strong>在函数体内部，指代函数当前的运行环境</strong>。
                </p>

                <h2>this 的用法</h2>
                <p>
                    在理解了 this 的原理之后，我们用下面的 4 种情况，来讨论 this 的用法。同样来自 <strong>阮老师</strong> 给出的例子，个人觉得很具有代表性。
                </p>

                <h4>1、纯粹的函数调用</h4>
                <p>
                    这是函数的最通常用法，属于全局性调用，因此 this 就代表全局对象 window。
                    <pre class="hljs actionscript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span><span class="hljs-params">()</span></span>{<br>　　<span class="hljs-keyword">this</span>.x = <span class="hljs-number">1</span>;<br>　　<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.x);<br>}<br>test(); <span class="hljs-comment">// 1</span></code></pre>
                </p>

                <h4>2、作为对象方法的调用</h4>
                <p>
                    函数作为某个对象的方法调用，这时 this 就指这个上级对象。
                    <pre class="hljs javascript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>)</span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.x);<br>}<br><span class="hljs-keyword">var</span> o = {};<br>o.x = <span class="hljs-number">1</span>;<br>o.m = test;<br>o.m(); <span class="hljs-comment">// 1</span></code></pre>
                </p>

                <h4>3、作为构造函数调用</h4>
                <p>
                    所谓构造函数，就是通过这个函数生成一个新对象（object）。这时，this 就指这个新对象。
                    <pre class="hljs javascript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>)</span>{<br>    <span class="hljs-keyword">this</span>.x = <span class="hljs-number">1</span>;<br>}<br><span class="hljs-keyword">var</span> o = <span class="hljs-keyword">new</span> test();<br><span class="hljs-built_in">console</span>.log(o.x); <span class="hljs-comment">// 1</span></code></pre>
                </p>

                <h4>4、apply调用</h4>
                <p>
                    apply() 是函数对象的一个方法，它的作用是改变函数的调用对象，它的第一个参数就表示改变后的调用这个函数的对象。因此，this 指的就是这第一个参数。
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">var</span> x = <span class="hljs-number">0</span>;<br><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.x);<br>}<br><span class="hljs-keyword">var</span> o = {};<br>o.x = <span class="hljs-number">1</span>;<br>o.m = test;<br>o.m.apply(); <span class="hljs-comment">//0</span></code></pre>
                    apply() 的参数为空时，默认调用全局对象。因此，这时的运行结果为0，证明this指的是全局对象。
                </p>

                <h4>5、箭头函数</h4>
                <p>
                    ES6 中的箭头函数，在大部分情况下，使得 this 的指向，变得符合我们的预期。但有些时候，它也不是万能的，一不小心的话，this 同样会失控。
                </p>
                <p>因为篇幅内容较多，我会另写一篇文章来介绍。</p>

                <h2>另一道面试题</h2>
                <p>
                    最后，让我们来巩固一下 this 的概念和用法。来看一道面试题：
                    <pre class="hljs kotlin"><code class="focus">window.<span class="hljs-keyword">val</span> = <span class="hljs-number">1</span>;<br> <br><span class="hljs-keyword">var</span> obj = {<br>    <span class="hljs-keyword">val</span>: <span class="hljs-number">2</span>,<br>    dbl: function () {<br>        <span class="hljs-keyword">this</span>.<span class="hljs-keyword">val</span> *= <span class="hljs-number">2</span>; <br>        <span class="hljs-keyword">val</span> *= <span class="hljs-number">2</span>;       <br>        console.log(<span class="hljs-string">'val:'</span>, <span class="hljs-keyword">val</span>);<br>        console.log(<span class="hljs-string">'this.val:'</span>, <span class="hljs-keyword">this</span>.<span class="hljs-keyword">val</span>);<br>    }<br>};<br><br> <span class="hljs-comment">// 说出下面的输出结果</span><br> obj.dbl();<br> <span class="hljs-keyword">var</span> func = obj.dbl;<br> func();</code></pre>
                    答案是输出：<code>2 、 4 、 8 、 8 </code>。
                </p>
                <p>
                    解析：
                    <ul>
                        <li>
                            执行 obj.dbl(); 时， this.val 的 this 指向 obj，而下一行的 val 指向 window。所以，由 window.val 输出 2，obj.val 输出 4 。
                        </li>
                        <li>
                            最后一行 func(); 的调用者是 window。 所以，现在的 this.val 的 this 指向 window。
                        </li>
                        <li>
                            别忘了刚才的运算结果，window.val 已经是 2 了，所以现在 this.val *= 2; 的执行结果就是 4。
                        </li>
                        <li>
                            val *= 2; 的执行结果，就是 8 了。 所以，最终的结果就是输出 8 和 8 。
                        </li>
                    </ul>
                </p>

                <h2>总结</h2>
                <p>
                    this 指代了函数当前的运行环境，依赖于函数调用的上下文条件，在运行时才会进行绑定。请牢记总原则：<strong>this 总会指向，调用函数的那个对象</strong>。
                </p>

                <h2>参考文献</h2>
                <p>
                    <ul>
                        <li>
                            <a href="https://github.com/getify/You-Dont-Know-JS/tree/master/this%20%26%20object%20prototypes" target="_blank">this 与对象原型</a>
                        </li>
                        <li>
                            <a href="http://www.ruanyifeng.com/blog/2018/06/javascript-this.html" target="_blank">JavaScript 的 this 原理</a>
                        </li>
                    </ul>
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    import Util from '@/utils';

    export default {
        data () {
            return {
                info: {}
            };
        },

        created () {
            if (this.$route.query.info) {
                this.info = Object.assign({}, JSON.parse(Util.b64ToUtf8(this.$route.query.info)));
            }
        }
    };
</script>
