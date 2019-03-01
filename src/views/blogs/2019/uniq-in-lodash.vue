<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>前言</h2>
                <p>
                    上一篇文章
                    <a href="" target="_blank">「前端面试题系列8」数组去重(10 种浓缩版)</a>
                    的最后简单介绍了 lodash 中的数组去重方法 <code>_.uniq</code>，并指向了它源码的实现文件 <code>_.baseUniq</code>。它可以实现我们日常工作中的去重需求。
                </p>

                <p>
                    今天要讲的是，我从 _.baseUniq 中学到的几个，都很基础却容易被忽略的知识点。
                </p>

                <h2>三个 API</h2>
                <p>
                    让我们从三个功能相近的去重 API 讲起，他们分别是：<code>_.uniq</code>、<code>_.uniqBy</code>、<code>_.uniqWith</code>。它们三个背后的实现，都是依托于 <strong>.internal</strong> 下的 <code>_.baseUniq</code> 文件。
                </p>
                <p>
                    区别在于 _.uniq 只需传入一个源数组 array， _.uniqBy 相较于 _.uniq 要多传一个迭代器 <code>iteratee</code>，而 _.uniqWith 要多传一个比较器 <code>comparator</code>。iteratee 和 comparator 有什么用？之后会说到。
                </p>
                <p>
                    以 _.uniqWith 为例，它是这样调用 _.baseUniq 的：
                    <pre class="hljs actionscript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">uniqWith</span><span class="hljs-params">(array, comparator)</span> </span>{<br>  comparator = <span class="hljs-keyword">typeof</span> comparator == <span class="hljs-string">'function'</span> ? comparator : <span class="hljs-literal">undefined</span><br>  <span class="hljs-keyword">return</span> (array != <span class="hljs-literal">null</span> &amp;&amp; array.length)<br>    ? baseUniq(array, <span class="hljs-literal">undefined</span>, comparator)<br>    : []<br>}</code></pre>
                </p>

                <h2>_.baseUniq 的实现</h2>
                <p>
                    baseUniq 的源码并不多，但比较绕。先贴一下的源码。
                    <pre class="hljs cs"><code class="">const LARGE_ARRAY_SIZE = 200<br><br><span class="hljs-function">function <span class="hljs-title">baseUniq</span>(<span class="hljs-params">array, iteratee, comparator</span>)</span> {<br>  <span class="hljs-keyword">let</span> index = <span class="hljs-number">-1</span><br>  <span class="hljs-keyword">let</span> includes = arrayIncludes<br>  <span class="hljs-keyword">let</span> isCommon = <span class="hljs-literal">true</span><br><br>  <span class="hljs-keyword">const</span> { length } = array<br>  <span class="hljs-keyword">const</span> result = []<br>  <span class="hljs-keyword">let</span> seen = <span class="hljs-function">result</span><br><span class="hljs-function"></span><br><span class="hljs-function">  <span class="hljs-title">if</span> (<span class="hljs-params">comparator</span>)</span> {<br>    isCommon = <span class="hljs-literal">false</span><br>    includes = arrayIncludesWith<br>  }<br>  <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (length &gt;= LARGE_ARRAY_SIZE) {<br>    <span class="hljs-keyword">const</span> <span class="hljs-keyword">set</span> = iteratee ? <span class="hljs-literal">null</span> : createSet(array)<br>    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">set</span>) {<br>      <span class="hljs-keyword">return</span> setToArray(<span class="hljs-keyword">set</span>)<br>    }<br>    isCommon = <span class="hljs-literal">false</span><br>    includes = cacheHas<br>    seen = <span class="hljs-keyword">new</span> SetCache<br>  }<br>  <span class="hljs-keyword">else</span> {<br>    seen = iteratee ? [] : result<br>  }<br>  outer:<br>  <span class="hljs-keyword">while</span> (++index &lt; length) {<br>    <span class="hljs-keyword">let</span> <span class="hljs-keyword">value</span> = array[index]<br>    <span class="hljs-keyword">const</span> computed = iteratee ? iteratee(<span class="hljs-keyword">value</span>) : <span class="hljs-keyword">value</span><br><br>    <span class="hljs-keyword">value</span> = (comparator || <span class="hljs-keyword">value</span> !== <span class="hljs-number">0</span>) ? <span class="hljs-keyword">value</span> : <span class="hljs-number">0</span><br>    <span class="hljs-keyword">if</span> (isCommon &amp;&amp; computed === computed) {<br>      <span class="hljs-keyword">let</span> seenIndex = seen.<span class="hljs-function">length</span><br><span class="hljs-function">      <span class="hljs-title">while</span> (<span class="hljs-params">seenIndex--</span>)</span> {<br>        <span class="hljs-keyword">if</span> (seen[seenIndex] === computed) {<br>          <span class="hljs-keyword">continue</span> outer<br>        }<br>      }<br>      <span class="hljs-keyword">if</span> (iteratee) {<br>        seen.push(computed)<br>      }<br>      result.push(<span class="hljs-keyword">value</span>)<br>    }<br>    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (!includes(seen, computed, comparator)) {<br>      <span class="hljs-keyword">if</span> (seen !== result) {<br>        seen.push(computed)<br>      }<br>      result.push(<span class="hljs-keyword">value</span>)<br>    }<br>  }<br>  <span class="hljs-keyword">return</span> result<br>}</code></pre>
                    为了兼容刚才说的三个 API，就产生了不少的干扰项。如果先从 _.uniq 入手，去掉 iteratee 和 comparator 的干扰，就会清晰不少。
                    <pre class="hljs cs"><code class=""><span class="hljs-function">function <span class="hljs-title">baseUniq</span>(<span class="hljs-params">array</span>)</span> {<br>    <span class="hljs-keyword">let</span> index = <span class="hljs-number">-1</span><br>    <span class="hljs-keyword">const</span> { length } = array<br>    <span class="hljs-keyword">const</span> result = []<br><br>    <span class="hljs-keyword">if</span> (length &gt;= <span class="hljs-number">200</span>) {<br>        <span class="hljs-keyword">const</span> <span class="hljs-keyword">set</span> = createSet(array)<br>        <span class="hljs-keyword">return</span> setToArray(<span class="hljs-keyword">set</span>)<br>    }<br><br>    outer:<br>    <span class="hljs-keyword">while</span> (++index &lt; length) {<br>        <span class="hljs-keyword">const</span> <span class="hljs-keyword">value</span> = array[index]<br>        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">value</span> === <span class="hljs-keyword">value</span>) {<br>            <span class="hljs-keyword">let</span> resultIndex = result.<span class="hljs-function">length</span><br><span class="hljs-function">            <span class="hljs-title">while</span> (<span class="hljs-params">resultIndex--</span>)</span> {<br>                <span class="hljs-keyword">if</span> (result[resultIndex] === <span class="hljs-keyword">value</span>) {<br>                    <span class="hljs-keyword">continue</span> outer<br>                }<br>            }<br>            result.push(<span class="hljs-keyword">value</span>)<br>        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (!includes(seen, <span class="hljs-keyword">value</span>)) {<br>            result.push(<span class="hljs-keyword">value</span>)<br>        }<br>    }<br>    <span class="hljs-keyword">return</span> result<br>}</code></pre>
                    这里有 2 个知识点。
                </p>

                <h4>知识点一、NaN === NaN 吗？</h4>
                <p>
                    在源码中有一个判断 <code>value === value</code>，乍一看，会觉得这是句废话！？！但其实，这是为了过滤 <code>NaN</code> 的情况。
                </p>
                <p>
                    MDN 中对 NaN 的解释是：它一个全局对象的属性，初始值就是 NaN。它通常都是在计算失败时，作为 Math 的某个方法的返回值出现的。
                </p>
                <p>
                    判断一个值是否是 NaN，必须使用 Number.isNaN() 或 isNaN()，在执行自比较之中：NaN，也只有 NaN，比较之中不等于它自己。
                    <pre class="hljs typescript"><code class=""><span class="hljs-literal">NaN</span> === <span class="hljs-literal">NaN</span>;        <span class="hljs-comment">// false</span><br><span class="hljs-built_in">Number</span>.NaN === <span class="hljs-literal">NaN</span>; <span class="hljs-comment">// false</span><br><span class="hljs-built_in">isNaN</span>(<span class="hljs-literal">NaN</span>);         <span class="hljs-comment">// true</span><br><span class="hljs-built_in">isNaN</span>(<span class="hljs-built_in">Number</span>.NaN);  <span class="hljs-comment">// true</span></code></pre>
                    当遇到 <code>NaN</code> 的情况时，baseUniq 会转而去执行 <code>!includes(seen, value)</code> 的判断
                </p>

                <h4>知识点二、冒号的特殊作用</h4>
                <p>
                    在源码的主体部分，while 语句之前，有一行 <code>outer:</code>，它是干什么用的呢？ while 中还有一个 while 的内部，有一行 <code>continue outer</code>，从语义上理解，好像是继续执行 <code>outer</code>，这又是种什么写法呢？
                    <pre class="hljs perl"><code class="">outer:<br><span class="hljs-keyword">while</span> (++<span class="hljs-keyword">index</span> &lt; <span class="hljs-keyword">length</span>) {<br>    ...<br>    <span class="hljs-keyword">while</span> (resultIndex--) {<br>        <span class="hljs-keyword">if</span> (result[resultIndex] === value) {<br>            <span class="hljs-keyword">continue</span> outer<br>        }<br>    }<br>}</code></pre>
                </p>
                <p>
                    我们都知道 Javascript 中，常用到冒号的地方有三处，分别是：<strong>A ? B : C 三元操作符、switch case 语句中、对象的键值对组成</strong>。
                </p>
                <p>
                    但其实还有一种并不常见的特殊作用：<code><strong>标签语句</strong></code>。
                </p>
                <p>
                    在 Javascript 中，任何语句都可以通过在它前面加上标志符和冒号来标记(<code>identifier: statement</code>)，这样就可以在任何地方使用该标记，最常用于循环语句中。
                </p>

                <h2>_.uniqBy 的 iteratee</h2>
                <p>
                    _.uniqBy 可根据指定的 key 给一个对象数组去重，一个官网的例子如下：
                    <pre class="hljs perl"><code class="">// The <span class="hljs-string">`_.property`</span> iteratee shorthand.<br><span class="hljs-number">_</span>.uniqBy([{ <span class="hljs-string">'x'</span>: <span class="hljs-number">1</span> }, { <span class="hljs-string">'x'</span>: <span class="hljs-number">2</span> }, { <span class="hljs-string">'x'</span>: <span class="hljs-number">1</span> }], <span class="hljs-string">'x'</span>);<br><span class="hljs-regexp">//</span> =&gt; [{ <span class="hljs-string">'x'</span>: <span class="hljs-number">1</span> }, { <span class="hljs-string">'x'</span>: <span class="hljs-number">2</span> }]</code></pre>
                    这里的 <code>'x'</code> 是 <code>_.property('x')</code> 的缩写，它指的就是 <strong>iteratee</strong>。
                </p>
                <p>
                    从给出的例子和语义上看，还挺好理解的。但是为什么 _.property 就能实现对象数组的去重了呢？它又是如何实现的呢？
                    <pre class="hljs typescript"><code class=""><span class="hljs-meta">@param</span> {<span class="hljs-built_in">Array</span>|<span class="hljs-built_in">string</span>} path The path of the property to <span class="hljs-keyword">get</span>.<br><span class="hljs-meta">@returns</span> {<span class="hljs-built_in">Function</span>} Returns the <span class="hljs-keyword">new</span> accessor <span class="hljs-function"><span class="hljs-keyword">function</span>.</span><br><span class="hljs-function"></span><br><span class="hljs-function"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">property</span>(<span class="hljs-params">path</span>) </span>{</span><br><span class="hljs-function">  <span class="hljs-title">return</span> <span class="hljs-title">isKey</span>(<span class="hljs-params">path</span>) ? <span class="hljs-title">baseProperty</span>(<span class="hljs-params">toKey(path)</span>) : <span class="hljs-title">basePropertyDeep</span>(<span class="hljs-params">path</span>)</span><br><span class="hljs-function">}</span></code></pre>
                    从注释看，property 方法会返回一个 <code>Function</code>，再看 baseProperty 的实现：
                    <pre class="hljs javascript"><code class="">@param {string} key The key <span class="hljs-keyword">of</span> the property to get.<br>@returns {<span class="hljs-built_in">Function</span>} Returns the <span class="hljs-keyword">new</span> accessor <span class="hljs-function"><span class="hljs-keyword">function</span>.</span><br><span class="hljs-function"></span><br><span class="hljs-function"><span class="hljs-title">function</span> <span class="hljs-title">baseProperty</span>(<span class="hljs-params">key</span>) </span>{<br>  <span class="hljs-keyword">return</span> <span class="hljs-function">(<span class="hljs-params">object</span>) =&gt;</span> object == <span class="hljs-literal">null</span> ? <span class="hljs-literal">undefined</span> : object[key]<br>}</code></pre>
                    咦？怎么返回的还是个 <code>Function</code> ？感觉它什么也没干呀，跟打酱油一样。。。
                </p>

                <h4>知识点三、纯函数的概念</h4>
                <p>
                    纯函数，是函数式编程中的概念，它代表这样一类函数：<strong>对于指定输出，返回指定的结果。不存在副作用</strong>。
                    <pre class="hljs typescript"><code class=""><span class="hljs-comment">// 这是一个简单的纯函数</span><br><span class="hljs-keyword">const</span> addByOne = <span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> x + <span class="hljs-number">1</span>;</code></pre>
                    也就是说，纯函数的返回值只依赖其参数，函数体内不能存在任何副作用。如果是同样的参数，则一定能得到一致的返回结果。
                    <pre class="hljs typescript"><code class=""><span class="hljs-function"></span><span class="hljs-function"><span class="hljs-title">function</span> <span class="hljs-title">baseProperty</span>(<span class="hljs-params">key</span>) </span>{<br>  <span class="hljs-keyword">return</span> <span class="hljs-function">(<span class="hljs-params">object</span>) =&gt;</span> object == <span class="hljs-literal">null</span> ? <span class="hljs-literal">undefined</span> : object[key]<br>}</code></pre>
                </p>
                <p>
                    baseProperty 返回的就是一个纯函数，在符合条件的情况下，输出 <code>object[key]</code>。在函数式编程中，函数是“一等公民”，它可以只是根据参数，做简单的组合操作，再作为别的函数的返回值。
                </p>

                <h2>_.uniqWith 的 comparator</h2>
                <p>
                    还是先从官网的小例子说起，它会完全地给对象中所有的键值对做比较。
                    <pre class="hljs ruby"><code class="">var objects = [{ <span class="hljs-string">'x'</span>: <span class="hljs-number">1</span>, <span class="hljs-string">'y'</span>: <span class="hljs-number">2</span> }, { <span class="hljs-string">'x'</span>: <span class="hljs-number">2</span>, <span class="hljs-string">'y'</span>: <span class="hljs-number">1</span> }, { <span class="hljs-string">'x'</span>: <span class="hljs-number">1</span>, <span class="hljs-string">'y'</span>: <span class="hljs-number">2</span> }];<br><br><span class="hljs-number">_</span>.uniqWith(objects, <span class="hljs-number">_</span>.isEqual);<br><span class="hljs-regexp">//</span> =&gt; [{ <span class="hljs-string">'x'</span>: <span class="hljs-number">1</span>, <span class="hljs-string">'y'</span>: <span class="hljs-number">2</span> }, { <span class="hljs-string">'x'</span>: <span class="hljs-number">2</span>, <span class="hljs-string">'y'</span>: <span class="hljs-number">1</span> }]</code></pre>
                    而在 baseUniq 的源码中，可以看到最终的实现，需要依赖 arrayIncludesWith 方法。
                    <pre class="hljs php"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">arrayIncludesWith</span><span class="hljs-params">(array, target, comparator)</span> </span>{<br>  <span class="hljs-keyword">if</span> (<span class="hljs-keyword">array</span> == <span class="hljs-keyword">null</span>) {<br>    <span class="hljs-keyword">return</span> <span class="hljs-keyword">false</span><br>  }<br><br>  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">const</span> value of <span class="hljs-keyword">array</span>) {<br>    <span class="hljs-keyword">if</span> (comparator(target, value)) {<br>      <span class="hljs-keyword">return</span> <span class="hljs-keyword">true</span><br>    }<br>  }<br>  <span class="hljs-keyword">return</span> <span class="hljs-keyword">false</span><br>}</code></pre>
                    这里没什么复杂吧。comparator 作为一个参数传入，将 target 和 array 的每个 value 进行处理。如果用官网的例子看，那就是比较它们是否相等。
                </p>

                <p>
                    https://github.com/lodash/lodash/blob/master/.internal/baseIsEqualDeep.js
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
