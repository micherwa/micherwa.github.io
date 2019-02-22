<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>前言</h2>
                <p>这是前端面试题系列的第 8 篇，你可能错过了前面的篇章，可以在这里找到：</p>
                <ul>
                    <li>
                        <a href="" target="_blank">浏览器中的事件机制（涉及主流框架）</a>
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
                    前端面试中常会问到数组去重的问题。但在平时的工作中，后端同学会处理好了给我们，一般不用我们操心。但难免会遇到疏漏，又或者我们在处理复杂交互时，还是会遇到需要去重的情况。
                </p>

                <p>
                    我在问数组去重的时候，更多的是想考察应聘者 2 个点：对 Array 方法的熟悉程度，还有算法能力。一般我会先让应聘者说出几种方法，然后随机抽取他说的一种，让他具体地写一下。
                </p>

                <p>
                    所以，这里有一个通用的面试技巧：自己不熟悉的东西，千万别说！我就碰到过几个应聘者，一开始只说了两种方法。我随口问还有别的么？他想了一会儿，又说了一种，我就让他写，结果就没写出来，好尴尬。如果他说没有了，那我就会让他自己写最开始的方法了。
                </p>

                <p>
                    ok，让我们马上开始今天的主题。会介绍 9 种不同类型的方法，一些类似的方法做了合并，写法从简到繁。
                </p>

                <h2>数组的去重</h2>

                <p>
                    假设有一个这样的数组： <code>let originalArray = [1, '1', '1', 2,  true, 'true', false, false, null, null, {}, {}, 'abc', 'abc', undefined, undefined, NaN, NaN];</code>。
                </p>

                <h4>1、ES6 的 Set 对象</h4>
                <p>
                    ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。Set 本身是一个构造函数，用来生成 Set 数据结构。
                    <pre class="hljs coffeescript"><code class="">let resultArr = Array.<span class="hljs-keyword">from</span>(<span class="hljs-keyword">new</span> Set(originalArray));<br><br><span class="hljs-regexp">//</span> 或者用扩展运算符<br>let resultArr = [...<span class="hljs-keyword">new</span> Set(originalArray)];<br><br><span class="hljs-built_in">console</span>.log(resultArr);<br><span class="hljs-regexp">//</span> [<span class="hljs-number">1</span>, <span class="hljs-string">"1"</span>, <span class="hljs-number">2</span>, <span class="hljs-literal">true</span>, <span class="hljs-string">"true"</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">null</span>, {…}, {…}, <span class="hljs-string">"abc"</span>, <span class="hljs-literal">undefined</span>, NaN]</code></pre>
                    Set 并不是真正的数组，这里的 <code>Array.from</code> 和 <code>...</code> 都可以将 Set 数据结构，转换成最终的结果数组。
                </p>

                <p>
                    这是最简单快捷的去重方法，但有一个问题 <code>{}</code> 没有去重，为什么没法去重对象呢？因为它们的地址不一样呗，尽管它们长得一样，都是空对象。不要担心，后面会有方法可以解决。
                </p>

                <h4>2、Map 的 has 方法</h4>
                <p>
                    把源数组的每一个元素作为 key 存到 Map 中。由于 Map 中不会出现相同的 key 值，所以最终得到的就是去重后的结果。
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">const</span> resultArr = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Array</span>();<br><br><span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; originalArray.length; i++) {<br>    <span class="hljs-comment">// 没有该 key 值</span><br>    <span class="hljs-keyword">if</span> (!map.has(originalArray[i])) {<br>        map.set(originalArray[i], <span class="hljs-literal">true</span>);<br>        resultArr.push(originalArray[i]);<br>    }<br>}<br><br><span class="hljs-built_in">console</span>.log(resultArr);<br><span class="hljs-comment">// [1, "1", 2, true, "true", false, null, {…}, {…}, "abc", undefined, NaN]</span></code></pre>
                    但是它与 Set 一样，还是没解决 <code>{}</code> 的问题。
                </p>

                <h4>3、indexOf 和 includes</h4>

                <p>
                    换一种思路，建立一个新的空数组，遍历源数组，往这个空数组里塞值，每次 push 之前，先判断是否已有相同的值。
                </p>

                <p>
                    判断的方法有 2 个：indexOf 和 includes，但它们的结果之间有细微的差别。先看 indexOf。
                    <pre class="hljs coffeescript"><code class="">const resultArr = [];<br><span class="hljs-keyword">for</span> (let i = <span class="hljs-number">0</span>; i &lt; originalArray.length; i++) {<br>    <span class="hljs-keyword">if</span> (resultArr.indexOf(originalArray[i]) &lt; <span class="hljs-number">0</span>) {<br>        resultArr.push(originalArray[i]);<br>    }<br>}<br><span class="hljs-built_in">console</span>.log(resultArr);<br><span class="hljs-regexp">//</span> [<span class="hljs-number">1</span>, <span class="hljs-string">"1"</span>, <span class="hljs-number">2</span>, <span class="hljs-literal">true</span>, <span class="hljs-string">"true"</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">null</span>, {…}, {…}, <span class="hljs-string">"abc"</span>, <span class="hljs-literal">undefined</span>, NaN, NaN]<br></code></pre>
                    indexOf 并不没处理 <code>{}</code> 和 <code>NaN</code>。
                </p>

                <p>
                    再来看 includes，它是在 ES7 中正式提出的。
                    <pre class="hljs coffeescript"><code class="">const resultArr = [];<br><span class="hljs-keyword">for</span> (let i = <span class="hljs-number">0</span>; i &lt; originalArray.length; i++) {<br>    <span class="hljs-keyword">if</span> (!resultArr.includes(originalArray[i])) {<br>        resultArr.push(originalArray[i]);<br>    }<br>}<br><span class="hljs-built_in">console</span>.log(resultArr);<br><span class="hljs-regexp">//</span> [<span class="hljs-number">1</span>, <span class="hljs-string">"1"</span>, <span class="hljs-number">2</span>, <span class="hljs-literal">true</span>, <span class="hljs-string">"true"</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">null</span>, {…}, {…}, <span class="hljs-string">"abc"</span>, <span class="hljs-literal">undefined</span>, NaN]</code></pre>
                    includes 处理了 <code>NaN</code>，却还是没能处理 <code>{}</code>
                </p>

                <h4>4、sort</h4>
                <p>
                    先将原数组排序，生成新的数组，然后遍历排序后的数组，相邻的两两进行比较，如果不同则存入新数组。
                    <pre class="hljs coffeescript"><code class="">const sortedArr = originalArray.sort();<br><br>const resultArr = [sortedArr[<span class="hljs-number">0</span>]];<br><br><span class="hljs-keyword">for</span> (let i = <span class="hljs-number">1</span>; i &lt; sortedArr.length; i++) {<br>    <span class="hljs-keyword">if</span> (sortedArr[i] !== resultArr[resultArr.length - <span class="hljs-number">1</span>]) {<br>        resultArr.push(sortedArr[i]);<br>    }<br>}<br><span class="hljs-built_in">console</span>.log(resultArr);<br><span class="hljs-regexp">//</span> [<span class="hljs-number">1</span>, <span class="hljs-string">"1"</span>, <span class="hljs-number">2</span>, NaN, NaN, {…}, {…}, <span class="hljs-string">"abc"</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">null</span>, <span class="hljs-literal">true</span>, <span class="hljs-string">"true"</span>, <span class="hljs-literal">undefined</span>]</code></pre>

                </p>

                <h4>4、filter + hasOwnProperty</h4>

                <p>
                    filter() 方法会返回一个新的数组，新数组中的元素，通过 hasOwnProperty 来检查是否为符合条件的元素。
                    <pre class="hljs coffeescript"><code class="">const obj = {};<br>const resultArr = originalArray.filter(function (item) {<br>    <span class="hljs-keyword">return</span> obj.hasOwnProperty(<span class="hljs-keyword">typeof</span> item + item) ? <span class="hljs-literal">false</span> : (obj[<span class="hljs-keyword">typeof</span> item + item] = <span class="hljs-literal">true</span>);<br>});<br><br><span class="hljs-built_in">console</span>.log(resultArr);<br><span class="hljs-regexp">//</span> [<span class="hljs-number">1</span>, <span class="hljs-string">"1"</span>, <span class="hljs-number">2</span>, <span class="hljs-literal">true</span>, <span class="hljs-string">"true"</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">null</span>, {…}, <span class="hljs-string">"abc"</span>, <span class="hljs-literal">undefined</span>, NaN]</code></pre>
                    这是目前看来最完美的解决方案了。这里稍加解释一下：
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



                <h2>for嵌套for，然后splice去重</h2>
                <p>
                    双层循环，外层循环元素，内层循环时比较值。值相同时，则删去这个值。
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">for</span> (<span class="hljs-built_in">let</span> i=<span class="hljs-number">0</span>; i &lt; arr.<span class="hljs-built_in">length</span>; i++) {<br>    <span class="hljs-keyword">for</span> (<span class="hljs-built_in">let</span> j=i+<span class="hljs-number">1</span>; j &lt; arr.<span class="hljs-built_in">length</span>; j++) {<br>        // 第一个等于第二个，<span class="hljs-built_in">splice</span>去掉第二个<br>        <span class="hljs-keyword">if</span> (arr[i] === arr[j]) {<br>            arr.<span class="hljs-built_in">splice</span>(j, <span class="hljs-number">1</span>);<br>            j--;<br>        }<br>    }<br>}<br><br>console.<span class="hljs-built_in">log</span>(arr);</code></pre>
                </p>

                <h2>原始去重</h2>
                <p>
                    定义一个新数组，并存放原数组的第一个元素，然后将原数组一一和新数组的元素对比，若不同则存放在新数组中
                    <pre class="hljs javascript"><code class="">let <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span> = [arr[<span class="hljs-number">0</span>]];<br><span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i=<span class="hljs-number">1</span>; i &lt; arr.length; i++){<br>    <span class="hljs-keyword">var</span> repeat = <span class="hljs-literal">false</span>;<br>    <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> j=<span class="hljs-number">0</span>; j &lt; <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>.length; j++){<br>        <span class="hljs-keyword">if</span>(arr[i] == <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>[j]){<br>            repeat = <span class="hljs-literal">true</span>;<br>            <span class="hljs-keyword">break</span>;<br>        }<br>    }<br><br>    <span class="hljs-keyword">if</span>(!repeat){<br>       <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>.push(arr[i]);<br>    }<br>}<br>console.log(<span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>);</code></pre>
                </p>

                <h4>、对象的属性</h4>

                <p>
                    每次取出原数组的元素，然后在对象中访问这个属性，如果存在就说明重复。
                    <pre class="hljs coffeescript"><code class="">const resultArr = [];<br>const obj = {};<br><span class="hljs-keyword">for</span>(let i = <span class="hljs-number">0</span>; i &lt; originalArray.length; i++){<br>    <span class="hljs-keyword">if</span>(!obj[originalArray[i]]){<br>        resultArr.push(originalArray[i]);<br>        obj[originalArray[i]] = <span class="hljs-number">1</span>;<br>    }<br>}<br><span class="hljs-built_in">console</span>.log(resultArr);<br><span class="hljs-regexp">//</span> [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-literal">true</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">null</span>, {…}, <span class="hljs-string">"abc"</span>, <span class="hljs-literal">undefined</span>, NaN]</code></pre>
                    但这种方法有缺陷。从结果看，它貌似只关心值，不关注类型。还把 <code>{}</code> 给处理了，但这不是正统的处理办法，所以 <strong>不推荐使用</strong>。
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
