<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>前言</h2>
                <p>这是前端面试题系列的第 8 篇，你可能错过了前面的篇章，可以在这里找到：</p>
                <ul>
                    <li>
                        <a href="https://juejin.im/post/5c727abde51d457fc564cd77" target="_blank">浏览器中的事件机制（涉及主流框架）</a>
                    </li>
                    <li>
                        <a href="https://juejin.im/post/5c677041f265da2de25b7707" target="_blank">理解函数的柯里化</a>
                    </li>
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
                    前端面试中经常会问到数组去重的问题。因为在平时的工作中遇到复杂交互的时候，需要知道该如何解决。另外，我在问应聘者这道题的时候，更多的是想考察 2 个点：对 Array 方法的熟悉程度，还有逻辑算法能力。一般我会先让应聘者说出几种方法，然后随机抽取他说的一种，具体地写一下。
                </p>

                <p>
                    这里有一个通用的面试技巧：自己不熟悉的东西，千万别说！我就碰到过几个应聘者，想尽可能地表现自己，就说了不少方法，随机抽了一个，结果就没写出来，很尴尬。
                </p>

                <p>
                    ok，让我们马上开始今天的主题。会介绍 10 种不同类型的方法，一些类似的方法我做了合并，写法从简到繁，其中还会有 loadsh 源码中的方法。
                </p>

                <h2>10 种去重方法</h2>

                <p>
                    假设有一个这样的数组： <code>let originalArray = [1, '1', '1', 2,  true, 'true', false, false, null, null, {}, {}, 'abc', 'abc', undefined, undefined, NaN, NaN];</code>。后面的方法中的源数组，都是指的这个。
                </p>

                <h4>1、ES6 的 Set 对象</h4>
                <p>
                    ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。Set 本身是一个构造函数，用来生成 Set 数据结构。
                    <pre class="hljs coffeescript"><code class="">let resultArr = Array.<span class="hljs-keyword">from</span>(<span class="hljs-keyword">new</span> Set(originalArray));<br><br><span class="hljs-regexp">//</span> 或者用扩展运算符<br>let resultArr = [...<span class="hljs-keyword">new</span> Set(originalArray)];<br><br><span class="hljs-built_in">console</span>.log(resultArr);<br><span class="hljs-regexp">//</span> [<span class="hljs-number">1</span>, <span class="hljs-string">"1"</span>, <span class="hljs-number">2</span>, <span class="hljs-literal">true</span>, <span class="hljs-string">"true"</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">null</span>, {…}, {…}, <span class="hljs-string">"abc"</span>, <span class="hljs-literal">undefined</span>, NaN]</code></pre>
                    Set 并不是真正的数组，这里的 <code>Array.from</code> 和 <code>...</code> 都可以将 Set 数据结构，转换成最终的结果数组。
                </p>

                <p>
                    这是最简单快捷的去重方法，但是细心的同学会发现，这里的 <code>{}</code> 没有去重。可是又转念一想，2 个空对象的地址并不相同，所以这里并没有问题，结果 ok。
                </p>

                <h4>2、Map 的 has 方法</h4>
                <p>
                    把源数组的每一个元素作为 key 存到 Map 中。由于 Map 中不会出现相同的 key 值，所以最终得到的就是去重后的结果。
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">const</span> resultArr = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>();<br><br><span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; originalArray.length; i++) {<br>    <span class="hljs-comment">// 没有该 key 值</span><br>    <span class="hljs-keyword">if</span> (!map.has(originalArray[i])) {<br>        map.set(originalArray[i], <span class="hljs-literal">true</span>);<br>        resultArr.push(originalArray[i]);<br>    }<br>}<br><br><span class="hljs-built_in">console</span>.log(resultArr);<br><span class="hljs-comment">// [1, "1", 2, true, "true", false, null, {…}, {…}, "abc", undefined, NaN]</span></code></pre>
                    但是它与 Set 的数据结构比较相似，结果 ok。
                </p>

                <h4>3、indexOf 和 includes</h4>

                <p>
                    建立一个新的空数组，遍历源数组，往这个空数组里塞值，每次 push 之前，先判断是否已有相同的值。
                </p>

                <p>
                    判断的方法有 2 个：indexOf 和 includes，但它们的结果之间有细微的差别。先看 indexOf。
                    <pre class="hljs coffeescript"><code class="">const resultArr = [];<br><span class="hljs-keyword">for</span> (let i = <span class="hljs-number">0</span>; i &lt; originalArray.length; i++) {<br>    <span class="hljs-keyword">if</span> (resultArr.indexOf(originalArray[i]) &lt; <span class="hljs-number">0</span>) {<br>        resultArr.push(originalArray[i]);<br>    }<br>}<br><span class="hljs-built_in">console</span>.log(resultArr);<br><span class="hljs-regexp">//</span> [<span class="hljs-number">1</span>, <span class="hljs-string">"1"</span>, <span class="hljs-number">2</span>, <span class="hljs-literal">true</span>, <span class="hljs-string">"true"</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">null</span>, {…}, {…}, <span class="hljs-string">"abc"</span>, <span class="hljs-literal">undefined</span>, NaN, NaN]<br></code></pre>
                    indexOf 并不没处理 <code>NaN</code>。
                </p>

                <p>
                    再来看 includes，它是在 ES7 中正式提出的。
                    <pre class="hljs coffeescript"><code class="">const resultArr = [];<br><span class="hljs-keyword">for</span> (let i = <span class="hljs-number">0</span>; i &lt; originalArray.length; i++) {<br>    <span class="hljs-keyword">if</span> (!resultArr.includes(originalArray[i])) {<br>        resultArr.push(originalArray[i]);<br>    }<br>}<br><span class="hljs-built_in">console</span>.log(resultArr);<br><span class="hljs-regexp">//</span> [<span class="hljs-number">1</span>, <span class="hljs-string">"1"</span>, <span class="hljs-number">2</span>, <span class="hljs-literal">true</span>, <span class="hljs-string">"true"</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">null</span>, {…}, {…}, <span class="hljs-string">"abc"</span>, <span class="hljs-literal">undefined</span>, NaN]</code></pre>
                    includes 处理了 <code>NaN</code>，结果 ok。
                </p>

                <h4>4、sort</h4>
                <p>
                    先将原数组排序，生成新的数组，然后遍历排序后的数组，相邻的两两进行比较，如果不同则存入新数组。
                    <pre class="hljs coffeescript"><code class="">const sortedArr = originalArray.sort();<br><br>const resultArr = [sortedArr[<span class="hljs-number">0</span>]];<br><br><span class="hljs-keyword">for</span> (let i = <span class="hljs-number">1</span>; i &lt; sortedArr.length; i++) {<br>    <span class="hljs-keyword">if</span> (sortedArr[i] !== resultArr[resultArr.length - <span class="hljs-number">1</span>]) {<br>        resultArr.push(sortedArr[i]);<br>    }<br>}<br><span class="hljs-built_in">console</span>.log(resultArr);<br><span class="hljs-regexp">//</span> [<span class="hljs-number">1</span>, <span class="hljs-string">"1"</span>, <span class="hljs-number">2</span>, NaN, NaN, {…}, {…}, <span class="hljs-string">"abc"</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">null</span>, <span class="hljs-literal">true</span>, <span class="hljs-string">"true"</span>, <span class="hljs-literal">undefined</span>]</code></pre>
                    从结果可以看出，对源数组进行了排序。但同样的没有处理 <code>NaN</code>。
                </p>

                <h4>5、双层 for 循环 + splice</h4>
                <p>
                    双层循环，外层遍历源数组，内层从 i+1 开始遍历比较，相同时删除这个值。
                    <pre class="hljs lisp"><code class="focus">for (<span class="hljs-name">let</span> i = 0; i &lt; originalArray.length; i++) {<br>    for (<span class="hljs-name">let</span> j = (<span class="hljs-name">i</span> + <span class="hljs-number">1</span>); j &lt; originalArray.length; j++) {<br>        // 第一个等于第二个，splice去掉第二个<br>        if (<span class="hljs-name">originalArray</span>[i] === originalArray[j]) {<br>            originalArray.splice(<span class="hljs-name">j</span>, <span class="hljs-number">1</span>)<span class="hljs-comment">;</span><br>            j--;<br>        }<br>    }<br>}<br><br>console.log(<span class="hljs-name">originalArray</span>)<span class="hljs-comment">;</span><br><span class="hljs-comment">// [1, "1", 2, true, "true", false, null, {…}, {…}, "abc", undefined, NaN, NaN]</span></code></pre>
                    splice 方法会修改源数组，所以这里我们并没有新开空数组去存储，最终输出的是修改之后的源数组。但同样的没有处理 <code>NaN</code>。
                </p>

                <h4>6、原始去重</h4>
                <p>
                    定义一个新数组，并存放原数组的第一个元素，然后将源数组一一和新数组的元素对比，若不同则存放在新数组中。
                    <pre class="hljs lua"><code class="">let resultArr = [originalArray[<span class="hljs-number">0</span>]];<br><span class="hljs-keyword">for</span>(var i = <span class="hljs-number">1</span>; i &lt; originalArray.length; i++){<br>    var <span class="hljs-keyword">repeat</span> = <span class="hljs-literal">false</span>;<br>    <span class="hljs-keyword">for</span>(var j=<span class="hljs-number">0</span>; j &lt; resultArr.length; j++){<br>        <span class="hljs-keyword">if</span>(originalArray[i] === resultArr[j]){<br>            <span class="hljs-keyword">repeat</span> = <span class="hljs-literal">true</span>;<br>            <span class="hljs-keyword">break</span>;<br>        }<br>    }<br><br>    <span class="hljs-keyword">if</span>(!<span class="hljs-keyword">repeat</span>){<br>       resultArr.push(originalArray[i]);<br>    }<br>}<br>console.<span class="hljs-built_in">log</span>(resultArr);<br>// [<span class="hljs-number">1</span>, <span class="hljs-string">"1"</span>, <span class="hljs-number">2</span>, <span class="hljs-literal">true</span>, <span class="hljs-string">"true"</span>, <span class="hljs-literal">false</span>, null, {…}, {…}, <span class="hljs-string">"abc"</span>, undefined, NaN, NaN]</code></pre>
                    这是最原始的去重方法，很好理解，但写法繁琐。同样的没有处理 <code>NaN</code>。
                </p>

                <h4>7、ES5 的 reduce</h4>
                <p>
                    reduce 是 ES5 中方法，常用于值的累加。它的语法：
                    <pre class="hljs css"><code style="word-break: break-word; white-space: initial;" class=""><span class="hljs-selector-tag">arr</span><span class="hljs-selector-class">.reduce</span>(<span class="hljs-selector-tag">callback</span><span class="hljs-selector-attr">[, initialValue]</span>)</code></pre>
                    reduce 的第一个参数是一个 callback，callback 中的参数分别为： Accumulator(累加器)、currentValue(当前正在处理的元素)、currentIndex(当前正在处理的元素索引，可选)、array(调用 reduce 的数组，可选)。
                </p>
                <p>
                    reduce 的第二个参数，是作为第一次调用 callback 函数时的第一个参数的值。如果没有提供初始值，则将使用数组中的第一个元素。
                </p>

                <p>
                    利用 reduce 的特性，再结合之前的 includes(也可以用 indexOf)，就能得到新的去重方法：
                    <pre class="hljs coffeescript"><code class="">const reducer = <span class="hljs-function"><span class="hljs-params">(acc, cur)</span> =&gt;</span> acc.includes(cur) ? acc : [...acc, cur];<br><br>const resultArr = originalArray.reduce(reducer, []);<br><br><span class="hljs-built_in">console</span>.log(resultArr);<br><span class="hljs-regexp">//</span> [<span class="hljs-number">1</span>, <span class="hljs-string">"1"</span>, <span class="hljs-number">2</span>, <span class="hljs-literal">true</span>, <span class="hljs-string">"true"</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">null</span>, {…}, {…}, <span class="hljs-string">"abc"</span>, <span class="hljs-literal">undefined</span>, NaN]</code></pre>
                    这里的 <code>[]</code> 就是初始值(initialValue)。acc 是累加器，在这里的作用是将没有重复的值塞入新数组（它一开始是空的）。 reduce 的写法很简单，但需要多加理解。它可以处理 <code>NaN</code>，结果 ok。
                </p>

                <h4>8、对象的属性</h4>
                <p>
                    每次取出原数组的元素，然后在对象中访问这个属性，如果存在就说明重复。
                    <pre class="hljs coffeescript"><code class="">const resultArr = [];<br>const obj = {};<br><span class="hljs-keyword">for</span>(let i = <span class="hljs-number">0</span>; i &lt; originalArray.length; i++){<br>    <span class="hljs-keyword">if</span>(!obj[originalArray[i]]){<br>        resultArr.push(originalArray[i]);<br>        obj[originalArray[i]] = <span class="hljs-number">1</span>;<br>    }<br>}<br><span class="hljs-built_in">console</span>.log(resultArr);<br><span class="hljs-regexp">//</span> [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-literal">true</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">null</span>, {…}, <span class="hljs-string">"abc"</span>, <span class="hljs-literal">undefined</span>, NaN]</code></pre>
                    但这种方法有缺陷。从结果看，它貌似只关心值，不关注类型。还把 <code>{}</code> 给处理了，但这不是正统的处理办法，所以 <strong>不推荐使用</strong>。
                </p>

                <h4>9、filter + hasOwnProperty</h4>
                <p>
                    filter 方法会返回一个新的数组，新数组中的元素，通过 hasOwnProperty 来检查是否为符合条件的元素。
                    <pre class="hljs coffeescript"><code class="">const obj = {};<br>const resultArr = originalArray.filter(function (item) {<br>    <span class="hljs-keyword">return</span> obj.hasOwnProperty(<span class="hljs-keyword">typeof</span> item + item) ? <span class="hljs-literal">false</span> : (obj[<span class="hljs-keyword">typeof</span> item + item] = <span class="hljs-literal">true</span>);<br>});<br><br><span class="hljs-built_in">console</span>.log(resultArr);<br><span class="hljs-regexp">//</span> [<span class="hljs-number">1</span>, <span class="hljs-string">"1"</span>, <span class="hljs-number">2</span>, <span class="hljs-literal">true</span>, <span class="hljs-string">"true"</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">null</span>, {…}, <span class="hljs-string">"abc"</span>, <span class="hljs-literal">undefined</span>, NaN]</code></pre>
                    这 <code>貌似</code> 是目前看来最完美的解决方案了。这里稍加解释一下：
                    <ul>
                        <li>
                            hasOwnProperty 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性。
                        </li>
                        <li>
                            <code>typeof item + item</code> 的写法，是为了保证值相同，但类型不同的元素被保留下来。例如：第一个元素为 number1，第二第三个元素都是 string1，所以第三个元素就被去除了。
                        </li>
                        <li>
                            <code>obj[typeof item + item] = true</code> 如果 hasOwnProperty 没有找到该属性，则往 obj 里塞键值对进去，以此作为下次循环的判断依据。
                        </li>
                        <li>
                            如果 hasOwnProperty 没有检测到重复的属性，则告诉 filter 方法可以先积攒着，最后一起输出。
                        </li>
                    </ul>
                </p>

                <p>
                    <code>看似</code> 完美解决了我们源数组的去重问题，但在实际的开发中，一般不会给两个空对象给我们去重。所以稍加改变源数组，给两个空对象中加入键值对。
                    <pre class="hljs typescript"><code style="word-break: break-word; white-space: initial;" class=""><span class="hljs-keyword">let</span> originalArray = [<span class="hljs-number">1</span>, <span class="hljs-string">'1'</span>, <span class="hljs-string">'1'</span>, <span class="hljs-number">2</span>, <span class="hljs-literal">true</span>, <span class="hljs-string">'true'</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">null</span>, <span class="hljs-literal">null</span>, {a: <span class="hljs-number">1</span>}, {a: <span class="hljs-number">2</span>}, <span class="hljs-string">'abc'</span>, <span class="hljs-string">'abc'</span>, <span class="hljs-literal">undefined</span>, <span class="hljs-literal">undefined</span>, <span class="hljs-literal">NaN</span>, <span class="hljs-literal">NaN</span>];</code></pre>
                    然后再用 filter + hasOwnProperty 去重。
                </p>
                <p>
                    然而，结果竟然把 <code>{a: 2}</code> 给去除了！！！这就不对了。
                </p>
                <p>
                    所以，这种方法有点去重 <code>过头</code> 了，也是存在问题的。
                </p>

                <h4>10、lodash 中的 _.uniq</h4>
                <p>
                    灵机一动，让我想到了 lodash 的去重方法 _.uniq，那就尝试一把：
                    <pre class="hljs perl"><code class="">console.log(<span class="hljs-number">_</span>.uni<span class="hljs-string">q(originalArray)</span>);<br><br><span class="hljs-regexp">//</span> [<span class="hljs-number">1</span>, <span class="hljs-string">"1"</span>, <span class="hljs-number">2</span>, true, <span class="hljs-string">"true"</span>, false, null, {…}, {…}, <span class="hljs-string">"abc"</span>, undefined, NaN, NaN]</code></pre>
                    用法很简单， 可以在实际工作中正确处理去重问题。
                </p>
                <p>
                    然后，我在好奇心促使下，看了它的源码，指向了 _.baseUniq 文件，它的源码如下：
                    <pre class="hljs cs"><code class=""><span class="hljs-function">function <span class="hljs-title">baseUniq</span>(<span class="hljs-params">array, iteratee, comparator</span>)</span> {<br>  <span class="hljs-keyword">let</span> index = <span class="hljs-number">-1</span><br>  <span class="hljs-keyword">let</span> includes = arrayIncludes<br>  <span class="hljs-keyword">let</span> isCommon = <span class="hljs-literal">true</span><br><br>  <span class="hljs-keyword">const</span> { length } = array<br>  <span class="hljs-keyword">const</span> result = []<br>  <span class="hljs-keyword">let</span> seen = <span class="hljs-function">result</span><br><span class="hljs-function"></span><br><span class="hljs-function">  <span class="hljs-title">if</span> (<span class="hljs-params">comparator</span>)</span> {<br>    isCommon = <span class="hljs-literal">false</span><br>    includes = arrayIncludesWith<br>  }<br>  <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (length &gt;= LARGE_ARRAY_SIZE) {<br>    <span class="hljs-keyword">const</span> <span class="hljs-keyword">set</span> = iteratee ? <span class="hljs-literal">null</span> : createSet(array)<br>    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">set</span>) {<br>      <span class="hljs-keyword">return</span> setToArray(<span class="hljs-keyword">set</span>)<br>    }<br>    isCommon = <span class="hljs-literal">false</span><br>    includes = cacheHas<br>    seen = <span class="hljs-keyword">new</span> SetCache<br>  }<br>  <span class="hljs-keyword">else</span> {<br>    seen = iteratee ? [] : result<br>  }<br>  outer:<br>  <span class="hljs-keyword">while</span> (++index &lt; length) {<br>    <span class="hljs-keyword">let</span> <span class="hljs-keyword">value</span> = array[index]<br>    <span class="hljs-keyword">const</span> computed = iteratee ? iteratee(<span class="hljs-keyword">value</span>) : <span class="hljs-keyword">value</span><br><br>    <span class="hljs-keyword">value</span> = (comparator || <span class="hljs-keyword">value</span> !== <span class="hljs-number">0</span>) ? <span class="hljs-keyword">value</span> : <span class="hljs-number">0</span><br>    <span class="hljs-keyword">if</span> (isCommon &amp;&amp; computed === computed) {<br>      <span class="hljs-keyword">let</span> seenIndex = seen.<span class="hljs-function">length</span><br><span class="hljs-function">      <span class="hljs-title">while</span> (<span class="hljs-params">seenIndex--</span>)</span> {<br>        <span class="hljs-keyword">if</span> (seen[seenIndex] === computed) {<br>          <span class="hljs-keyword">continue</span> outer<br>        }<br>      }<br>      <span class="hljs-keyword">if</span> (iteratee) {<br>        seen.push(computed)<br>      }<br>      result.push(<span class="hljs-keyword">value</span>)<br>    }<br>    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (!includes(seen, computed, comparator)) {<br>      <span class="hljs-keyword">if</span> (seen !== result) {<br>        seen.push(computed)<br>      }<br>      result.push(<span class="hljs-keyword">value</span>)<br>    }<br>  }<br>  <span class="hljs-keyword">return</span> result<br>}</code></pre>
                    有比较多的干扰项，去除掉之后，就会发现它用了 <code>while</code> 做循环，当遇到值相同的时候，<code>continue outer</code> 再次进入循环进行比较，将没有重复的值塞进 <code>result</code> 里，最终输出。
                </p>

                <p>
                    另外，lodash 里还有一个 _.uniqBy 方法，它可以通过指定 key，来专门去重对象列表，感觉还挺实用的。它的源码还是指向了 <code>_.baseUniq</code>。
                    <pre class="hljs ruby"><code class=""><span class="hljs-number">_</span>.uniqBy([{ <span class="hljs-string">'x'</span>: <span class="hljs-number">1</span> }, { <span class="hljs-string">'x'</span>: <span class="hljs-number">2</span> }, { <span class="hljs-string">'x'</span>: <span class="hljs-number">1</span> }], <span class="hljs-string">'x'</span>);<span class="hljs-regexp"><br>//</span> =&gt; [{ <span class="hljs-string">'x'</span>: <span class="hljs-number">1</span> }, { <span class="hljs-string">'x'</span>: <span class="hljs-number">2</span> }]</code></pre>
                </p>

                <h2>总结</h2>
                <p>
                    从上述的这些方法来看，ES6 开始出现的方法（如 Set、Map、includes），都能完美地解决我们日常开发中的去重需求，关键它们还都是原生的，写法还更简单。
                </p>
                <p>
                    所以，我们提倡拥抱原生，因为它们真的没有那么难以理解，至少在这里我觉得它比 lodash 里 _.uniq 的源码要好理解得多，关键是还能解决问题。
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
