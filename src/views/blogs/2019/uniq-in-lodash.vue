<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>前言</h2>
                <p>
                    上一篇文章
                    <a href="" target="_blank">「前端面试题系列8」数组去重(10 种浓缩版)</a>
                    的最后，简单介绍了 lodash 中的数组去重方法 <code>_.uniq</code>，它可以实现我们日常工作中的去重需求，能够去重 <code>NaN</code>，并保留 <code>{...}</code>。
                </p>

                <p>
                    今天要讲的，是我从 _.uniq 的源码实现文件 baseUniq.js 中学到的几个很基础，却又容易被忽略的知识点。
                </p>

                <h2>三个 API</h2>
                <p>
                    让我们先从三个功能相近的 API 讲起，他们分别是：<code>_.uniq</code>、<code>_.uniqBy</code>、<code>_.uniqWith</code>。它们三个背后的实现文件，都指向了 <strong>.internal</strong> 下的 <strong>baseUniq.js</strong>。
                </p>
                <p>
                    区别在于 _.uniq 只需传入一个源数组 array， _.uniqBy 相较于 _.uniq 要多传一个迭代器 <code>iteratee</code>，而 _.uniqWith 要多传一个比较器 <code>comparator</code>。iteratee 和 comparator 的用法，会在后面说到。
                </p>
                <p>
                    以 _.uniqWith 为例，它是这样调用 _.baseUniq 的：
                    <pre class="hljs actionscript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">uniqWith</span><span class="hljs-params">(array, comparator)</span> </span>{<br>  comparator = <span class="hljs-keyword">typeof</span> comparator == <span class="hljs-string">'function'</span> ? comparator : <span class="hljs-literal">undefined</span><br>  <span class="hljs-keyword">return</span> (array != <span class="hljs-literal">null</span> &amp;&amp; array.length)<br>    ? baseUniq(array, <span class="hljs-literal">undefined</span>, comparator)<br>    : []<br>}</code></pre>
                </p>

                <h2>baseUniq 的实现原理</h2>
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
                    MDN 中对 NaN 的解释是：它是一个全局对象的属性，初始值就是 NaN。它通常都是在计算失败时，作为 Math 的某个方法的返回值出现的。
                </p>
                <p>
                    判断一个值是否是 NaN，必须使用 <strong>Number.isNaN()</strong> 或 <strong>isNaN()</strong>，在执行自比较之中：NaN，也只有 NaN，比较之中不等于它自己。
                    <pre class="hljs typescript"><code class=""><span class="hljs-literal">NaN</span> === <span class="hljs-literal">NaN</span>;        <span class="hljs-comment">// false</span><br><span class="hljs-built_in">Number</span>.NaN === <span class="hljs-literal">NaN</span>; <span class="hljs-comment">// false</span><br><span class="hljs-built_in">isNaN</span>(<span class="hljs-literal">NaN</span>);         <span class="hljs-comment">// true</span><br><span class="hljs-built_in">isNaN</span>(<span class="hljs-built_in">Number</span>.NaN);  <span class="hljs-comment">// true</span></code></pre>
                    所以，在源码中，当遇到 <code>NaN</code> 的情况时，baseUniq 会转而去执行 <code>!includes(seen, value)</code> 的判断，去处理 NaN 。
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
                    但其实还有一种并不常见的特殊作用：<code><strong>标签语句</strong></code>。在 Javascript 中，任何语句都可以通过在它前面加上标志符和冒号来标记(<code>identifier: statement</code>)，这样就可以在任何地方使用该标记，最常用于循环语句中。
                </p>
                <p>
                    所以，在源码中，outer 只是看着有点不习惯，多看两遍就好了，语义上还是很好理解的。
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
                    咦？怎么返回的还是个 <code>Function</code> ？感觉它什么也没干呀，那个参数 <code>object</code> 又是哪里来的？
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

                <p>
                    所以，在源码中，object 是调用 baseProperty 时传入的对象。 baseProperty 的作用，是返回期望结果为 object[key] 的函数。
                </p>

                <h2>_.uniqWith 的 comparator</h2>
                <p>
                    还是先从官网的小例子说起，它会完全地给对象中所有的键值对，进行比较。
                    <pre class="hljs ruby"><code class="">var objects = [{ <span class="hljs-string">'x'</span>: <span class="hljs-number">1</span>, <span class="hljs-string">'y'</span>: <span class="hljs-number">2</span> }, { <span class="hljs-string">'x'</span>: <span class="hljs-number">2</span>, <span class="hljs-string">'y'</span>: <span class="hljs-number">1</span> }, { <span class="hljs-string">'x'</span>: <span class="hljs-number">1</span>, <span class="hljs-string">'y'</span>: <span class="hljs-number">2</span> }];<br><br><span class="hljs-number">_</span>.uniqWith(objects, <span class="hljs-number">_</span>.isEqual);<br><span class="hljs-regexp">//</span> =&gt; [{ <span class="hljs-string">'x'</span>: <span class="hljs-number">1</span>, <span class="hljs-string">'y'</span>: <span class="hljs-number">2</span> }, { <span class="hljs-string">'x'</span>: <span class="hljs-number">2</span>, <span class="hljs-string">'y'</span>: <span class="hljs-number">1</span> }]</code></pre>
                    而在 baseUniq 的源码中，可以看到最终的实现，需要依赖 <code>arrayIncludesWith</code> 方法，以下是它的源码：
                    <pre class="hljs php"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">arrayIncludesWith</span><span class="hljs-params">(array, target, comparator)</span> </span>{<br>  <span class="hljs-keyword">if</span> (<span class="hljs-keyword">array</span> == <span class="hljs-keyword">null</span>) {<br>    <span class="hljs-keyword">return</span> <span class="hljs-keyword">false</span><br>  }<br><br>  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">const</span> value of <span class="hljs-keyword">array</span>) {<br>    <span class="hljs-keyword">if</span> (comparator(target, value)) {<br>      <span class="hljs-keyword">return</span> <span class="hljs-keyword">true</span><br>    }<br>  }<br>  <span class="hljs-keyword">return</span> <span class="hljs-keyword">false</span><br>}</code></pre>
                    arrayIncludesWith 没什么复杂的。comparator 作为一个参数传入，将 <code>target</code> 和 array 的每个 <code>value</code> 进行处理。从官网的例子看，_.isEqual 就是 comparator，就是要比较它们是否相等。
                </p>

                <p>
                    接着就追溯到了 _.isEqual 的源码，它的实现文件是 baseIsEqualDeep.js。在里面看到一个让我犯迷糊的写法，这是一个判断。
                    <pre class="hljs typescript"><code class=""><span class="hljs-comment">/** Used to check objects for own properties. */</span><br><span class="hljs-keyword">const</span> hasOwnProperty = <span class="hljs-built_in">Object</span>.prototype.hasOwnProperty<br>...<br><br><span class="hljs-keyword">const</span> objIsWrapped = objIsObj &amp;&amp; hasOwnProperty.call(object, <span class="hljs-string">'__wrapped__'</span>)</code></pre>
                    hasOwnProperty ？call， '__wrapped__' ？
                </p>

                <h4>知识点四、对象的 hasOwnProperty</h4>
                <p>
                    再次查找到了 MDN 的解释：所有继承了 Object 的对象都会继承到 hasOwnProperty 方法。它可以用来检测一个对象是否含有特定的自身属性；会忽略掉那些从原型链上继承到的属性。
                    <pre class="hljs ruby"><code class="">o = new Object();<br>o.prop = <span class="hljs-string">'exists'</span>;<br>o.hasOwnProperty(<span class="hljs-string">'prop'</span>);             <span class="hljs-regexp">//</span> 返回 <span class="hljs-literal">true</span><br>o.hasOwnProperty(<span class="hljs-string">'toString'</span>);         <span class="hljs-regexp">//</span> 返回 <span class="hljs-literal">false</span><br>o.hasOwnProperty(<span class="hljs-string">'hasOwnProperty'</span>);   <span class="hljs-regexp">//</span> 返回 <span class="hljs-literal">false</span></code></pre>
                    call 的用法可以参考这篇 <a href="https://juejin.im/post/5c493086f265da6115111ce4" target="_blank">细说 call、apply 以及 bind 的区别和用法</a>。
                </p>
                <p>
                    那么 <code>hasOwnProperty.call(object, '__wrapped__')</code> 的意思就是，判断 object 这个对象上是否存在 '__wrapped__' 这个自身属性。
                </p>

                <p>
                    __wrapped__ 是什么属性？这就要说到 lodash 的延迟计算方法 <code>_.chain</code>，它是一种函数式风格，从名字就可以看出，它实现的是一种链式的写法。比如下面这个例子：
                    <pre class="hljs actionscript"><code class=""><span class="hljs-keyword">var</span> names = _.chain(users)<br>  .map(<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(user)</span></span>{<br>    <span class="hljs-keyword">return</span> user.user;<br>  })<br>  .join(<span class="hljs-string">" , "</span>)<br>  .value();</code></pre>
                    如果你没有显样的调用value方法，使其立即执行的话，将会得到如下的LodashWrapper延迟表达式：
                    <pre class="hljs groovy"><code style="word-break: break-word; white-space: initial;" class="">LodashWrapper {<span class="hljs-string">__wrapped__:</span> LazyWrapper, <span class="hljs-string">__actions__:</span> Array[<span class="hljs-number">1</span>], <span class="hljs-string">__chain__:</span> <span class="hljs-literal">true</span>, <span class="hljs-string">constructor:</span> function, <span class="hljs-string">after:</span> function…}</code></pre>
                    因为延迟表达式的存在，因此我们可以多次增加方法链，但这并不会被执行，所以不会存在性能的问题，最后直到我们需要使用的时候，使用 <code>value()</code> 显式立即执行即可。
                </p>
                <p>
                    所以，在 baseIsEqualDeep 源码中，才需要做 hasOwnProperty 的判断，然后在需要的情况下，执行 <code>object.value()</code>。
                </p>

                <h2>总结</h2>
                <p>
                    阅读源码，在一开始会比较困难，因为会遇到一些看不明白的写法。就像一开始我卡在了 value === value 的写法，不明白它的用意。一旦知道了是为了过滤 NaN 用的，那后面就会通畅很多了。
                </p>
                <p>
                    所以，<strong>阅读源码，是一种很棒的重温基础知识的方式</strong>。遇到看不明白的点，不要放过，多查多问多看，才能<strong>不断地夯实基础，读懂更多的源码思想，体会更多的原生精髓</strong>。如果我在一开始看到 value === value 时就放弃了，那或许就不会有今天的这篇文章了。
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
