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
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
