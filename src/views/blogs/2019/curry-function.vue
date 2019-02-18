<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>前言</h2>

                <p>这是前端面试题系列的第 6 篇，你可能错过了前面的篇章，可以在这里找到：</p>
                <ul>
                    <li>
                        <a href="https://juejin.im/post/5c612a60f265da2da15d9986" target="_blank">ES6 中箭头函数的用法</a>
                    </li>
                    <li>
                        <a href="https://juejin.im/post/5c428ce0f265da612b13dca7" target="_blank">this 的原理以及用法</a>
                    </li>
                    <li>
                        <a href="https://juejin.im/post/5c36fd0f6fb9a049cd5465cd" target="_blank">伪类与伪元素的区别及实战</a>
                    </li>
                    <li>
                        <a href="https://juejin.im/post/5c394fece51d45524c7cc712" target="_blank">如何实现一个圣杯布局？</a>
                    </li>
                    <li>
                        <a href="https://juejin.im/post/5c394da4518825253661bd4d" target="_blank">今日头条 面试题和思路解析</a>
                    </li>
                </ul>

                <p>
                    最近，朋友T 在准备面试，他为一道编程题所困，向我求助。原题如下：
                    <pre class="hljs typescript"><code class=""><span class="hljs-comment">// 写一个 sum 方法，当使用下面的语法调用时，能正常工作</span><br><span class="hljs-built_in">console</span>.log(sum(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>)); <span class="hljs-comment">// Outputs 5</span><br><span class="hljs-built_in">console</span>.log(sum(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>)); <span class="hljs-comment">// Outputs 5</span></code></pre>
                    这道题要考察的，就是对函数柯里化的理解。让我们先来解析一下题目的要求：
                    <ul>
                        <li>如果传递两个参数，我们只需将它们相加并返回。</li>
                        <li>否则，我们假设它是以sum(2)(3)的形式被调用的，所以我们返回一个匿名函数，它将传递给sum()（在本例中为2）的参数和传递给匿名函数的参数（在本例中为3）。</li>
                    </ul>
                    所以，sum 函数可以这样写：
                    <pre class="hljs javascript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sum</span> (<span class="hljs-params">x</span>) </span>{<br>    <span class="hljs-keyword">if</span> (<span class="hljs-built_in">arguments</span>.length == <span class="hljs-number">2</span>) {<br>        <span class="hljs-keyword">return</span> <span class="hljs-built_in">arguments</span>[<span class="hljs-number">0</span>] + <span class="hljs-built_in">arguments</span>[<span class="hljs-number">1</span>];<br>    }<br>    <br>    <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">y</span>) </span>{<br>        <span class="hljs-keyword">return</span> x + y;<br>    }<br>}</code></pre>
                    arguments 的用法挺灵活的，在这里它则用于分割两种不同的情况。当参数只有一个的时候，进行柯里化的处理。
                </p>
                <p>
                    那么，到底什么是函数的柯里化呢？接下来，我们将从概念出发，探究函数柯里化的实现与用途。
                </p>

                <h2>什么是柯里化</h2>
                <p>
                    柯里化，是函数式编程的一个重要概念。它既能减少代码冗余，也能增加可读性。另外，附带着还能用来装逼。
                </p>

                <p>
                    先给出柯里化的定义：在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
                </p>
                <p>
                    柯里化的定义，理解起来有点费劲。为了更好地理解，先看下面这个例子：
                    <pre class="hljs javascript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sum</span> (<span class="hljs-params">a, b, c</span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(a + b + c);<br>}<br>sum(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">// 6</span></code></pre>
                    毫无疑问，sum是个简单的累加函数，接受3个参数，输出累加的结果。
                </p>
                <p>
                    假设有这样的需求，sum的前2个参数保持不变，最后一个参数可以随意。那么就会想到，在函数内，是否可以把前2个参数的相加过程，给抽离出来，因为参数都是相同的，没必要每次都做运算。
                </p>
                <p>
                    如果先不管函数内的具体实现，调用的写法可以是这样： <code>sum(1, 2)(3);</code> 或这样 <code>sum(1, 2)(10);</code> 。就是，先把前2个参数的运算结果拿到后，再与第3个参数相加。
                </p>
                <p>
                    这其实就是函数柯里化的简单应用。
                </p>

                <h2>柯里化的实现</h2>
                <p>
                    <code>sum(1, 2)(3);</code> 这样的写法，并不常见。拆开来看，<code>sum(1, 2)</code> 返回的应该还是个函数，因为后面还有 <code>(3)</code> 需要执行。
                </p>
                <p>
                    那么反过来，从最后一个参数，从右往左看，它的左侧必然是一个函数。以此类推，如果前面有n个()，那就是有n个函数返回了结果，只是返回的结果，还是一个函数。是不是有点递归的意思？
                </p>
                <p>
                    网上有一些不同的柯里化的实现方式，以下是个人觉得最容易理解的写法：
                    <pre class="hljs javascript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">curry</span> (<span class="hljs-params">fn, currArgs</span>) </span>{<br>    <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{<br>        <span class="hljs-keyword">let</span> args = [].slice.call(<span class="hljs-built_in">arguments</span>);<br><br>        <span class="hljs-comment">// 首次调用时，若未提供最后一个参数currArgs，则不用进行args的拼接</span><br>        <span class="hljs-keyword">if</span> (currArgs !== <span class="hljs-literal">undefined</span>) {<br>            args = args.concat(currArgs);<br>        }<br><br>        <span class="hljs-comment">// 递归调用</span><br>        <span class="hljs-keyword">if</span> (args.length &lt; fn.length) {<br>            <span class="hljs-keyword">return</span> curry(fn, args);<br>        }<br><br>        <span class="hljs-comment">// 递归出口</span><br>        <span class="hljs-keyword">return</span> fn.apply(<span class="hljs-literal">null</span>, args);<br>    }<br>}</code></pre>
                </p>
                <p>
                    解析一下 curry 函数的写法：
                </p>
                <p>
                    首先，它有 2 个参数，fn 指的就是本文一开始的源处理函数 <code>sum</code>。currArgs 是调用 curry 时传入的参数列表，比如 <code>(1, 2)(3)</code> 这样的。
                </p>
                <p>
                    再看到 curry 函数内部，它会整个返回一个匿名函数。
                </p>
                <p>
                    再接下来的 <code>let args = [].slice.call(arguments);</code>，意思是将 arguments 数组化。arguments 是一个类数组的结构，它并不是一个真的数组，所以没法使用数组的方法。我们用了 call 的方法，就能愉快地对 args 使用数组的原生方法了。在这篇
                    <a href="https://juejin.im/post/5c493086f265da6115111ce4" target="_blank">「干货」细说 call、apply 以及 bind 的区别和用法</a> 中，有关于 call 更详细的用法介绍。
                </p>
                <p>
                    <code>currArgs !== undefined</code> 的判断，是为了解决递归调用时的参数拼接。
                </p>
                <p>
                    最后，判断 args 的个数，是否与 fn (也就是 sum )的参数个数相等，相等了就可以把参数都传给 fn，进行输出；否则，继续递归调用，直到两者相等。
                </p>
                <p>
                    测试一下：
                    <pre class="hljs lsl"><code class="">function sum(a, b, c) {<br>    console.log(a + b + c);<br>}<br><br>const fn = curry(sum);<br><br>fn(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">// 6</span><br>fn(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>)(<span class="hljs-number">3</span>); <span class="hljs-comment">// 6</span><br>fn(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">// 6</span><br>fn(<span class="hljs-number">1</span>)(<span class="hljs-number">2</span>)(<span class="hljs-number">3</span>); <span class="hljs-comment">// 6</span></code></pre>
                    都能输出 6 了，搞定！
                </p>

                <h2>柯里化的用途</h2>
                <p>
                    理解了柯里化的实现之后，让我们来看一下它的实际应用。柯里化的目的是，减少代码冗余，以及增加代码的可读性。来看下面这个例子：
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">const</span> persons = [<br>    { <span class="hljs-attr">name</span>: <span class="hljs-string">'kevin'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">4</span> },<br>    { <span class="hljs-attr">name</span>: <span class="hljs-string">'bob'</span>, <span class="hljs-attr">age</span>: <span class="hljs-number">5</span> }<br>];<br><br><span class="hljs-comment">// 这里的 curry 函数，之前已实现</span><br><span class="hljs-keyword">const</span> getProp = curry(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">obj, index</span>) </span>{<br>    <span class="hljs-keyword">const</span> args = [].slice.call(<span class="hljs-built_in">arguments</span>);<br>    <span class="hljs-keyword">return</span> obj[args[args.length - <span class="hljs-number">1</span>]];<br>});<br><br><span class="hljs-keyword">const</span> ages = persons.map(getProp(<span class="hljs-string">'age'</span>)); <span class="hljs-comment">// [4, 5]</span><br><span class="hljs-keyword">const</span> names = persons.map(getProp(<span class="hljs-string">'name'</span>)); <span class="hljs-comment">// ['kevin', 'bob']</span></code></pre>
                    在实际的业务中，我们常会遇到类似的列表数据。用 getProp 就可以很方便地，取出列表中某个 key 对应的值。
                </p>
                <p>
                    需要注意的是，<code>const names = persons.map(getProp('name'));</code> 执行这条语句时 getProp 的参数只有一个 <code>name</code>，而定义 getProp 方法时，传入 curry 的参数有2个，<code>obj</code> 和 <code>index</code>（这里必须写 2 个及以上的参数）。
                </p>

                <p>
                    为什么要这么写？关键就在于 <code>arguments</code> 的隐式传参。
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">const</span> getProp = curry(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">obj, index</span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">arguments</span>);<br>    <span class="hljs-comment">// 会输出4个类数组，取其中一个来看</span><br>    <span class="hljs-comment">// {</span><br>    <span class="hljs-comment">//     0: {name: "kevin", age: 4},</span><br>    <span class="hljs-comment">//     1: 0,</span><br>    <span class="hljs-comment">//     2: [</span><br>    <span class="hljs-comment">//         {name: "kevin", age: 4},</span><br>    <span class="hljs-comment">//         {name: "bob", age: 5}</span><br>    <span class="hljs-comment">//     ],</span><br>    <span class="hljs-comment">//     3: "age"</span><br>    <span class="hljs-comment">// }</span><br>});</code></pre>
                </p>

                <p>
                    map 是 Array 的原生方法，它的用法如下：
                    <pre class="hljs actionscript"><code class=""><span class="hljs-keyword">var</span> new_array = arr.map(<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">callback</span><span class="hljs-params">(currentValue[, index[, array]])</span> </span>{<br>    <span class="hljs-comment">// Return element for new_array</span><br>}[, thisArg]);<br></code></pre>
                    所以，我们传入的 <code>name</code>，就排在了 arguments 的最后。为了拿到 <code>name</code> 对应的值，需要对类数组 arguments 做点转换，让它可以使用 Array 的原生方法。所以，最终 getProp 方法定义成了这样：
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">const</span> getProp = curry(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">obj, index</span>) </span>{<br>    <span class="hljs-keyword">const</span> args = [].slice.call(<span class="hljs-built_in">arguments</span>);<br>    <span class="hljs-keyword">return</span> obj[args[args.length - <span class="hljs-number">1</span>]];<br>});</code></pre>
                </p>

                <p>
                    当然，还有另外一种写法，curry 的实现更好理解，但是调用的代码却变多了，大家可以根据实际情况进行取舍。
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">const</span> getProp = curry(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">key, obj</span>) </span>{<br>    <span class="hljs-keyword">return</span> obj[key];<br>});<br><br><span class="hljs-keyword">const</span> ages = persons.map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {<br>    <span class="hljs-keyword">return</span> getProp(item)(<span class="hljs-string">'age'</span>);<br>});<br><span class="hljs-keyword">const</span> names = persons.map(<span class="hljs-function"><span class="hljs-params">item</span> =&gt;</span> {<br>    <span class="hljs-keyword">return</span> getProp(item)(<span class="hljs-string">'name'</span>);<br>});</code></pre>
                </p>

                <p>
                    最后，来看一个 Memoization 的例子。它用于优化比较耗时的计算，通过将计算结果缓存到内存中，这样对于同样的输入值，下次只需要中内存中读取结果。
                    <pre class="hljs javascript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">memoizeFunction</span>(<span class="hljs-params">func</span>) </span>{<br>    <span class="hljs-keyword">const</span> cache = {};<br>    <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{<br>        <span class="hljs-keyword">let</span> key = <span class="hljs-built_in">arguments</span>[<span class="hljs-number">0</span>];<br>        <span class="hljs-keyword">if</span> (cache[key]) {<br>            <span class="hljs-keyword">return</span> cache[key];<br>        } <span class="hljs-keyword">else</span> {<br>            <span class="hljs-keyword">const</span> val = func.apply(<span class="hljs-literal">null</span>, <span class="hljs-built_in">arguments</span>);<br>            cache[key] = val;<br>            <span class="hljs-keyword">return</span> val;<br>        }<br>    };<br>}<br><br><span class="hljs-keyword">const</span> fibonacci = memoizeFunction(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">n</span>) </span>{<br>    <span class="hljs-keyword">return</span> (n === <span class="hljs-number">0</span> || n === <span class="hljs-number">1</span>) ? n : fibonacci(n - <span class="hljs-number">1</span>) + fibonacci(n - <span class="hljs-number">2</span>);<br>});<br><br><span class="hljs-built_in">console</span>.log(fibonacci(<span class="hljs-number">100</span>)); <span class="hljs-comment">// 输出354224848179262000000</span><br><span class="hljs-built_in">console</span>.log(fibonacci(<span class="hljs-number">100</span>)); <span class="hljs-comment">// 输出354224848179262000000</span></code></pre>
                    代码中，第2次计算 fibonacci(100) 则只需要在内存中直接读取结果。
                </p>

                <h2>总结</h2>
                <p>
                    <strong>函数的柯里化，是 Javascript 中函数式编程的一个重要概念。它返回的，是一个函数的函数。其实现方式，需要依赖参数以及递归，通过拆分参数的方式，来调用一个多参数的函数方法，以达到减少代码冗余，增加可读性的目的。</strong>
                </p>

                <p>
                    虽然一开始理解起来有点云里雾里的，但一旦理解了其中的含义和具体的使用场景，用起来就会得心应手了。
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
