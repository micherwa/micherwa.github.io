<template>
    <div class="blog-container">
        <BlogHeader
            title="函数的柯里化" subTitle=""
            date="2017-08-30" :tags="['JavaScript']">
        </BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <blockquote>
                    <p>
                        本文将介绍Javascript中函数柯里化的应用，柯里化是函数式编程的一个重要概念。它既能减少代码冗余，也能增加可读性，更关键的是，还能用来装逼。
                    </p>
                </blockquote>

                <h2>柯里化的定义</h2>
                <p>
                    在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
                </p>

                <h2>什么是柯里化</h2>
                <p>
                    柯里化的定义，理解起来有点费劲。为了更好地理解，先看下面这个例子：
                    <pre class="hljs javascript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sum</span>(<span class="hljs-params">a, b, c</span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(a + b + c);<br>}<br>sum(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">// 6</span></code></pre>
                    毫无疑问，sum是个简单的累加函数，接受3个参数，输出累加的结果。
                </p>
                <p>
                    假设有这样的需求，sum的前2个参数保持不变，最后一个参数可以随意。那么就会想到，在函数内，是否可以把前2个参数的相加过程，给抽离出来，因为参数都是相同的，没必要每次都做运算。
                </p>
                <p>
                    如果先不管函数内的具体实现，调用的写法可以是这样：<code>sum(1, 2)(3);</code>或这样<code>sum(1, 2)(10);</code>。就是，先把前2个参数的运算结果拿到后，再与第3个参数相加。
                </p>
                <p>
                    这其实就是函数柯里化的简单应用。
                </p>

                <h2>柯里化的实现</h2>
                <p>
                    <code>sum(1, 2)(3);</code>这样的写法，并不常见。拆开来看，<code>sum(1, 2)</code>返回的应该还是个函数，因为后面还有<code>(3)</code>需要执行。
                </p>
                <p>
                    那么反过来，从最后一个参数，从右往左看，它的左侧必然是一个函数。以此类推，如果前面有n个()，那就是有n个函数返回了结果，只是返回的结果，还是一个函数。是不是有点递归的意思？
                </p>
                <p>
                    网上有一些不同的柯里化的实现方式，以下是个人觉得最容易理解的写法：
                    <pre class="hljs javascript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">curry</span>(<span class="hljs-params">fn, currArgs</span>) </span>{<br>    <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{<br>        <span class="hljs-keyword">let</span> args = [].slice.call(<span class="hljs-built_in">arguments</span>);<br><br>        <span class="hljs-comment">// 首次调用时，若未提供最后一个参数currArgs，则不用进行args的拼接</span><br>        <span class="hljs-keyword">if</span> (currArgs !== <span class="hljs-literal">undefined</span>) {<br>            args = args.concat(currArgs);<br>        }<br><br>        <span class="hljs-comment">// 递归调用</span><br>        <span class="hljs-keyword">if</span> (args.length &lt; fn.length) {<br>            <span class="hljs-keyword">return</span> curry(fn, args);<br>        }<br><br>        <span class="hljs-comment">// 递归出口</span><br>        <span class="hljs-keyword">return</span> fn.apply(<span class="hljs-literal">null</span>, args);<br>    }<br>}</code></pre>
                </p>
                <p>
                    curry函数有2个参数，fn 指的就是本文一开始的源处理函数<code>sum</code>。currArgs 是调用curry时传入的参数列表，比如<code>(1, 2)(3)</code>这样的。
                </p>
                <p>
                    再看到curry函数内部，它会整个返回一个匿名函数。
                </p>
                <p>
                    再接下来的<code>let args = [].slice.call(arguments);</code>，意思是将 arguments 数组化。arguments 是一个类数组的结构，它并不是一个真的数组，所以没法使用数组的方法。我们用了 call 的方法，就能愉快地对 args 使用数组的原生方法了。call 的具体用法，可以参考
                    <router-link :to="{ 'name': 'call-and-apply-and-bind' }">这篇文章</router-link>。
                </p>
                <p>
                    <code>currArgs !== undefined</code>的判断，是为了解决递归调用时的参数拼接。
                </p>
                <p>
                    最后，判断 args 的个数，是否与 fn (也就是 sum )的参数个数相等，相等了就可以把参数都传给 fn，进行输出；否则，继续递归调用，直到两者相等。
                </p>
                <p>
                    测试一下：
                    <pre class="hljs lsl"><code class="">function sum(a, b, c) {<br>    console.log(a + b + c);<br>}<br><br>const fn = curry(sum);<br><br>fn(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">// 6</span><br>fn(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>)(<span class="hljs-number">3</span>); <span class="hljs-comment">// 6</span><br>fn(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">// 6</span><br>fn(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>); <span class="hljs-comment">// 6</span></code></pre>
                    都能输出6。
                </p>

                <h2>柯里化的目的</h2>
                <p>
                    柯里化的目的是为了减少代码冗余，以及增加代码的可读性。比如下面这个更简单的例子：
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">const</span> persons = [{<span class="hljs-attr">name</span>: <span class="hljs-string">'kevin'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">11</span>}, {<span class="hljs-attr">name</span>: <span class="hljs-string">'daisy'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">24</span>}];<br><br><span class="hljs-keyword">let</span> getProp = _.curry(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">key, obj</span>) </span>{<br>    <span class="hljs-keyword">return</span> obj[key];<br>});<br><br><span class="hljs-keyword">let</span> names2 = persons.map(getProp(<span class="hljs-string">'name'</span>));<br><span class="hljs-built_in">console</span>.log(names2); <span class="hljs-comment">// ['kevin', 'daisy']</span><br><br><span class="hljs-keyword">let</span> ages2 = persons.map(getProp(<span class="hljs-string">'age'</span>));<br><span class="hljs-built_in">console</span>.log(ages2); <span class="hljs-comment">// [11, 24]</span></code></pre>
                </p>

                <p>
                    看另一个Memoization的例子：
                    <pre class="hljs javascript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">memoizeFunction</span>(<span class="hljs-params">func</span>) </span>{<br>    <span class="hljs-keyword">const</span> cache = {};<br>    <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{<br>        <span class="hljs-keyword">let</span> key = <span class="hljs-built_in">arguments</span>[<span class="hljs-number">0</span>];<br>        <span class="hljs-keyword">if</span> (cache[key]) {<br>            <span class="hljs-keyword">return</span> cache[key];<br>        } <span class="hljs-keyword">else</span> {<br>            <span class="hljs-keyword">const</span> val = func.apply(<span class="hljs-literal">null</span>, <span class="hljs-built_in">arguments</span>);<br>            cache[key] = val;<br>            <span class="hljs-keyword">return</span> val;<br>        }<br>    };<br>}<br><br><span class="hljs-keyword">const</span> fibonacci = memoizeFunction(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">n</span>) </span>{<br>    <span class="hljs-keyword">return</span> (n === <span class="hljs-number">0</span> || n === <span class="hljs-number">1</span>) ? n : fibonacci(n - <span class="hljs-number">1</span>) + fibonacci(n - <span class="hljs-number">2</span>);<br>});<br><br><span class="hljs-built_in">console</span>.log(fibonacci(<span class="hljs-number">100</span>)); <span class="hljs-comment">// 输出354224848179262000000</span><br><span class="hljs-built_in">console</span>.log(fibonacci(<span class="hljs-number">100</span>)); <span class="hljs-comment">// 输出354224848179262000000</span></code></pre>
                    代码中，第2次计算 fibonacci(100) 则只需要在内存中直接读取结果。
                </p>
                <p>
                    Memoization 用于优化比较耗时的计算，通过将计算结果缓存到内存中，这样对于同样的输入值，下次只需要中内存中读取结果。
                </p>

                <h2>总结</h2>
                <p>
                    实现柯里化的方式，基本都需要根据参数以及递归方式，让我们通过拆分参数的方式，来调用一个多参数的函数方法。
                </p>
                <p>
                    虽然一开始理解起来有点云里雾里的，但一旦理解了其中的含义和具体的使用场景，你一定会对它爱不释手的。
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
