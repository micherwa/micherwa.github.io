<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent>
            <div slot="content">
                <h2>前言</h2>
                <p>
                    上一篇文章 <a href="https://juejin.im/post/5cab479cf265da039d325df4" target="_blank">「前端面试题系列9」浅拷贝与深拷贝的含义、区别及实现</a> 中提到了深拷贝的实现方法，从递归调用，到 JSON，再到终极方案 cloneForce。
                </p>
                <p>
                    不经让我想到，lodash 中的 <code>_.cloneDeep</code> 方法。它是如何实现深拷贝的呢？今天，就让我们来具体地解读一下 _.cloneDeep 的源码实现。
                </p>

                <p>
                    源码中的内容比较多，为了能将知识点讲明白，也为了更好的阅读体验，将会分为上下 2 篇进行解读。今天主要会涉及位掩码、对象判断、数组和正则的深拷贝写法。
                </p>

                <p>ok，现在就让我们深入源码，共同探索吧~</p>

                <h2>_.cloneDeep 的源码实现</h2>
                <p>
                    它的源码内容很少，因为主要还是靠 baseClone 去实现。
                    <pre class="hljs objectivec"><code class=""><span class="hljs-comment">/** Used to compose bitmasks for cloning. */</span><br><span class="hljs-keyword">const</span> <span class="hljs-built_in">CLONE_DEEP_FLAG</span> = <span class="hljs-number">1</span><br><span class="hljs-keyword">const</span> <span class="hljs-built_in">CLONE_SYMBOLS_FLAG</span> = <span class="hljs-number">4</span><br><br>function cloneDeep(value) {<br>  <span class="hljs-keyword">return</span> baseClone(value, <span class="hljs-built_in">CLONE_DEEP_FLAG</span> | <span class="hljs-built_in">CLONE_SYMBOLS_FLAG</span>)<br>}</code></pre>
                    刚看到前两行的常量就懵了，它们的用意是什么？然后，传入 baseClone 的第二个参数，似乎还将那两个常量做了运算，其结果是什么？这么做的目的是什么？
                </p>
                <p>
                    一番查找之后，终于明白这里其实涉及到了 <code>位掩码</code> 与 <code>位运算</code> 的概念。下面就来详细讲解一下。
                </p>

                <h4>位掩码技术</h4>
                <p>
                    回到第一行注释：<code>Used to compose bitmasks for cloning</code>。意思是，用于构成克隆方法的位掩码。
                </p>
                <p>
                    从注释看，这里的 <code>CLONE_DEEP_FLAG</code> 和 <code>CLONE_SYMBOLS_FLAG</code> 就是位掩码了，而 <code>CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG</code> 其实是 <strong>位运算</strong> 中的 <code>按位或</code> 方法。
                </p>
                <p>
                    这里有个不常见的概念：<code>位运算</code>。MDN 上对位运算的解释是：它经常被用来创建、处理以及读取标志位序列——一种类似二进制的变量。虽然可以使用变量代替标志位序列，但是这样可以节省内存（1/32）。
                </p>
                <p>
                    不过实际开发中，位运算用得很少，主要是因为位运算操作的是二进制位，对开发者来说不太好理解。用得少，就容易生疏。但实际上，位运算是一种很棒的思想，它计算得更快，代码量还更少。位运算，常用于处理同时存在多个布尔选项的情形。掩码中的每个选项的值都是 2 的幂，位运算是 32 位的。
                </p>
                <p>
                    在计算机程序的世界里，所有的数据都是以二进制的形式储存的。位运算，说白了就是直接对某个数据在内存中的二进制位，进行运算操作。比如 <code>&</code>、<code>|</code>、<code>~</code>、<code>^</code>、<code>>></code>，这些都是 按位运算符，它们有一些神奇的用法。以系统权限为例：
                    <pre class="hljs objectivec"><code class=""><span class="hljs-keyword">const</span> PERMISSION_A = <span class="hljs-number">1</span>; <span class="hljs-comment">// 0001</span><br><span class="hljs-keyword">const</span> PERMISSION_B = <span class="hljs-number">2</span>; <span class="hljs-comment">// 0010</span><br><span class="hljs-keyword">const</span> PERMISSION_C = <span class="hljs-number">4</span>; <span class="hljs-comment">// 0100</span><br><span class="hljs-keyword">const</span> PERMISSION_D = <span class="hljs-number">8</span>; <span class="hljs-comment">// 1000</span><br><br><span class="hljs-comment">// 当一个用户同时拥有 权限A 和 权限C 时，就产生了一个新的权限</span><br><span class="hljs-keyword">const</span> mask = PERMISSION_A | PERMISSION_C; <span class="hljs-comment">// 0101，十进制为 5</span><br><br><span class="hljs-comment">// 判断该用户是否有 权限C，可以取出 权限C 的位掩码</span><br><span class="hljs-keyword">if</span> (mask &amp; PERMISSION_C) {<br>    ...<br>}<br><br><span class="hljs-comment">// 该用户没有 权限A，也没有 权限C</span><br><span class="hljs-keyword">const</span> mask2 = ~(PERMISSION_A | PERMISSION_C); <span class="hljs-comment">// ~0101 =&gt; 1010</span><br><br><span class="hljs-comment">// 取出 与权限A 不同的部分</span><br><span class="hljs-keyword">const</span> mask3 = mask ^ PERMISSION_A; <span class="hljs-comment">// 0101 ^ 0001 =&gt; 0100</span></code></pre>
                </p>
                <p>
                    回到源码的 <code>CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG</code> 就得到一个新的结果传入 baseClone 中，十进制为 5，至于它是用来干什么的，就需要继续深入到 baseClone 的源码中去看了。
                </p>

                <h2>baseClone 的源码实现</h2>
                <p>
                    先贴一下源码，其中一些关键的判断已经做了注释
                    <pre class="hljs cs"><code class=""><span class="hljs-function">function <span class="hljs-title">baseClone</span>(<span class="hljs-params"><span class="hljs-keyword">value</span>, bitmask, customizer, key, <span class="hljs-keyword">object</span>, stack</span>)</span> {<br>  <span class="hljs-keyword">let</span> result<br>  <span class="hljs-comment">// 根据位掩码，切分判断入口</span><br>  <span class="hljs-keyword">const</span> isDeep = bitmask &amp; CLONE_DEEP_FLAG<br>  <span class="hljs-keyword">const</span> isFlat = bitmask &amp; CLONE_FLAT_FLAG<br>  <span class="hljs-keyword">const</span> isFull = bitmask &amp; CLONE_SYMBOLS_FLAG<br><br>  <span class="hljs-comment">// 自定义 clone 方法，用于 _.cloneWith</span><br>  <span class="hljs-keyword">if</span> (customizer) {<br>    result = <span class="hljs-keyword">object</span> ? customizer(<span class="hljs-keyword">value</span>, key, <span class="hljs-keyword">object</span>, stack) : customizer(<span class="hljs-keyword">value</span>)<br>  }<br>  <span class="hljs-keyword">if</span> (result !== undefined) {<br>    <span class="hljs-keyword">return</span> result<br>  }<br><br>  <span class="hljs-comment">// 过滤出原始类型，直接返回</span><br>  <span class="hljs-keyword">if</span> (!isObject(<span class="hljs-keyword">value</span>)) {<br>    <span class="hljs-keyword">return</span> <span class="hljs-keyword">value</span><br>  }<br>  <br>  <span class="hljs-keyword">const</span> isArr = Array.isArray(<span class="hljs-keyword">value</span>)<br>  <span class="hljs-keyword">const</span> tag = getTag(<span class="hljs-keyword">value</span>)<br>  <span class="hljs-keyword">if</span> (isArr) {<br>    <span class="hljs-comment">// 处理数组</span><br>    result = initCloneArray(<span class="hljs-keyword">value</span>)<br>    <span class="hljs-keyword">if</span> (!isDeep) {<br>      <span class="hljs-comment">// 浅拷贝数组</span><br>      <span class="hljs-keyword">return</span> copyArray(<span class="hljs-keyword">value</span>, result)<br>    }<br>  } <span class="hljs-keyword">else</span> {<br>    <span class="hljs-comment">// 处理对象</span><br>    <span class="hljs-keyword">const</span> isFunc = <span class="hljs-keyword">typeof</span> <span class="hljs-keyword">value</span> == <span class="hljs-string">'function'</span><br>    <br>    <span class="hljs-keyword">if</span> (isBuffer(<span class="hljs-keyword">value</span>)) {<br>      <span class="hljs-keyword">return</span> cloneBuffer(<span class="hljs-keyword">value</span>, isDeep)<br>    }<br>    <span class="hljs-keyword">if</span> (tag == objectTag || tag == argsTag || (isFunc &amp;&amp; !<span class="hljs-keyword">object</span>)) {<br>      result = (isFlat || isFunc) ? {} : initCloneObject(<span class="hljs-keyword">value</span>)<br>      <span class="hljs-keyword">if</span> (!isDeep) {<br>        <span class="hljs-keyword">return</span> isFlat<br>          ? copySymbolsIn(<span class="hljs-keyword">value</span>, copyObject(<span class="hljs-keyword">value</span>, keysIn(<span class="hljs-keyword">value</span>), result))<br>          : copySymbols(<span class="hljs-keyword">value</span>, Object.assign(result, <span class="hljs-keyword">value</span>))<br>      }<br>    } <span class="hljs-keyword">else</span> {<br>      <span class="hljs-keyword">if</span> (isFunc || !cloneableTags[tag]) {<br>        <span class="hljs-keyword">return</span> <span class="hljs-keyword">object</span> ? <span class="hljs-keyword">value</span> : {}<br>      }<br>      result = initCloneByTag(<span class="hljs-keyword">value</span>, tag, isDeep)<br>    }<br>  }<br>  <span class="hljs-comment">// 用 “栈” 处理循环引用</span><br>  stack || (stack = <span class="hljs-keyword">new</span> Stack)<br>  <span class="hljs-keyword">const</span> stacked = stack.<span class="hljs-keyword">get</span>(<span class="hljs-keyword">value</span>)<br>  <span class="hljs-keyword">if</span> (stacked) {<br>    <span class="hljs-keyword">return</span> stacked<br>  }<br>  stack.<span class="hljs-keyword">set</span>(<span class="hljs-keyword">value</span>, result)<br><br>  <span class="hljs-comment">// 处理 Map</span><br>  <span class="hljs-keyword">if</span> (tag == mapTag) {<br>    <span class="hljs-keyword">value</span>.forEach((subValue, key) =&gt; {<br>      result.<span class="hljs-keyword">set</span>(key, baseClone(subValue, bitmask, customizer, key, <span class="hljs-keyword">value</span>, stack))<br>    })<br>    <span class="hljs-keyword">return</span> result<br>  }<br><br>  <span class="hljs-comment">// 处理 Set</span><br>  <span class="hljs-keyword">if</span> (tag == setTag) {<br>    <span class="hljs-keyword">value</span>.forEach((subValue) =&gt; {<br>      result.<span class="hljs-keyword">add</span>(baseClone(subValue, bitmask, customizer, subValue, <span class="hljs-keyword">value</span>, stack))<br>    })<br>    <span class="hljs-keyword">return</span> result<br>  }<br><br>  <span class="hljs-comment">// 处理 typedArray</span><br>  <span class="hljs-keyword">if</span> (isTypedArray(<span class="hljs-keyword">value</span>)) {<br>    <span class="hljs-keyword">return</span> result<br>  }<br><br>  <span class="hljs-keyword">const</span> keysFunc = isFull<br>    ? (isFlat ? getAllKeysIn : getAllKeys)<br>    : (isFlat ? keysIn : keys)<br><br>  <span class="hljs-keyword">const</span> props = isArr ? undefined : keysFunc(<span class="hljs-keyword">value</span>)<br><br>  <span class="hljs-comment">// 遍历赋值</span><br>  arrayEach(props || <span class="hljs-keyword">value</span>, (subValue, key) =&gt; {<br>    <span class="hljs-keyword">if</span> (props) {<br>      key = subValue<br>      subValue = <span class="hljs-keyword">value</span>[key]<br>    }<br>    <span class="hljs-comment">// Recursively populate clone (susceptible to call stack limits).</span><br>    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, <span class="hljs-keyword">value</span>, stack))<br>  })<br><br>  <span class="hljs-keyword">return</span> result<br>}<br></code></pre>
                </p>

                <h4>位掩码的作用</h4>
                <p>
                    <pre class="hljs objectivec"><code class=""><span class="hljs-comment">/** Used to compose bitmasks for cloning. */</span><br><span class="hljs-keyword">const</span> <span class="hljs-built_in">CLONE_DEEP_FLAG</span> = <span class="hljs-number">1</span> <span class="hljs-comment">// 深拷贝标志位</span><br><span class="hljs-keyword">const</span> <span class="hljs-built_in">CLONE_FLAT_FLAG</span> = <span class="hljs-number">2</span> <span class="hljs-comment">// 原型链标志位</span><br><span class="hljs-keyword">const</span> <span class="hljs-built_in">CLONE_SYMBOLS_FLAG</span> = <span class="hljs-number">4</span> <span class="hljs-comment">// Symbol 标志位</span><br><br>function baseClone(value, bitmask, customizer, key, object, stack) {<br>    <span class="hljs-comment">// 根据位掩码，取出位掩码，切分判断入口，bitmask 的十进制为 5</span><br>    <span class="hljs-keyword">const</span> isDeep = bitmask &amp; <span class="hljs-built_in">CLONE_DEEP_FLAG</span> <span class="hljs-comment">// 5 &amp; 1 =&gt; 1 =&gt; true</span><br>    <span class="hljs-keyword">const</span> isFlat = bitmask &amp; <span class="hljs-built_in">CLONE_FLAT_FLAG</span> <span class="hljs-comment">// 5 &amp; 2 =&gt; 0 =&gt; false</span><br>    <span class="hljs-keyword">const</span> isFull = bitmask &amp; <span class="hljs-built_in">CLONE_SYMBOLS_FLAG</span> <span class="hljs-comment">// 5 &amp; 4 =&gt; 4 =&gt; true</span><br>    ...<br>}</code></pre>
                    每个常量基本都加了注释，之前传入 baseClone 的 bitmask 为十进制的 5，其目的就是为了在 baseClone 中进行判断入口的切分。
                </p>

                <h4>是否为对象的判断</h4>
                <p>
                    <pre class="hljs cs"><code class=""><span class="hljs-comment">// 如果不是对象，则直接返回该值</span><br><span class="hljs-keyword">if</span> (!isObject(<span class="hljs-keyword">value</span>)) {<br>    <span class="hljs-keyword">return</span> <span class="hljs-keyword">value</span><br>}<br><br><span class="hljs-comment">// ./isObject.js</span><br><span class="hljs-function">function <span class="hljs-title">isObject</span>(<span class="hljs-params"><span class="hljs-keyword">value</span></span>)</span> {<br>  <span class="hljs-keyword">const</span> type = <span class="hljs-keyword">typeof</span> <span class="hljs-keyword">value</span><br>  <span class="hljs-keyword">return</span> <span class="hljs-keyword">value</span> != <span class="hljs-literal">null</span> &amp;&amp; (type == <span class="hljs-string">'object'</span> || type == <span class="hljs-string">'function'</span>)<br>}</code></pre>
                    这里需要说的就是，是否为对象的判断。用的基本方法是 <code>typeof</code>，但是因为 typeof null 的值也是 'object'，所以最后的 return 需要对 null 做额外处理。
                </p>

                <h4>处理数组和正则</h4>
                <p>
                    <pre class="hljs php"><code class=""><span class="hljs-keyword">const</span> isArr = <span class="hljs-keyword">Array</span>.isArray(value)<br><br><span class="hljs-keyword">if</span> (isArr) {<br>    result = initCloneArray(value)<br>    <span class="hljs-keyword">if</span> (!isDeep) {<br>        <span class="hljs-keyword">return</span> copyArray(value, result)<br>    }<br>} <span class="hljs-keyword">else</span> {<br>    ... <span class="hljs-comment">// 非数组的处理</span><br>}<br><br><span class="hljs-comment">// 用于检测对象自身的属性</span><br><span class="hljs-keyword">const</span> hasOwnProperty = Object.prototype.hasOwnProperty<br><br><span class="hljs-comment">// 初始化需要克隆的数组</span><br><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">initCloneArray</span><span class="hljs-params">(array)</span> </span>{<br>    <span class="hljs-keyword">const</span> { length } = <span class="hljs-keyword">array</span><br>    <span class="hljs-keyword">const</span> result = <span class="hljs-keyword">new</span> <span class="hljs-keyword">array</span>.constructor(length)<br><br>    <span class="hljs-comment">// Add properties assigned by `RegExp#exec`.</span><br>    <span class="hljs-keyword">if</span> (length &amp;&amp; typeof <span class="hljs-keyword">array</span>[<span class="hljs-number">0</span>] == <span class="hljs-string">'string'</span> &amp;&amp; hasOwnProperty.call(<span class="hljs-keyword">array</span>, <span class="hljs-string">'index'</span>)) {<br>        result.index = <span class="hljs-keyword">array</span>.index<br>        result.input = <span class="hljs-keyword">array</span>.input<br>    }<br>    <span class="hljs-keyword">return</span> result<br>}</code></pre>
                    为了不干扰源数组的数据，这里首先会用 initCloneArray 初始化一个全新的数组。
                </p>
                <p>
                    其中，<code>new array.constructor(length)</code> 相当于 <code>new Array(length)</code>，只是换了种不常见的写法，作用是一样的。
                </p>
                <p>
                    接下来的这个判断，让我一头雾水。
                    <pre class="hljs php"><code class=""><span class="hljs-comment">// Add properties assigned by `RegExp#exec`.</span><br><span class="hljs-keyword">if</span> (length &amp;&amp; typeof <span class="hljs-keyword">array</span>[<span class="hljs-number">0</span>] == <span class="hljs-string">'string'</span> &amp;&amp; hasOwnProperty.call(<span class="hljs-keyword">array</span>, <span class="hljs-string">'index'</span>)) {<br>    result.index = <span class="hljs-keyword">array</span>.index<br>    result.input = <span class="hljs-keyword">array</span>.input<br>}</code></pre>
                    判断条件首先确定 length > 0，然后 array[0] 的类型是 string，最后 array 拥有 index 这个属性。
                </p>
                <p>
                    看到判断条件里的两条执行语句更懵了，需要赋值 <code>index</code> 和 <code>input</code>，这又是为什么？/(ㄒoㄒ)/~~
                </p>
                <p>
                    回头看到第一行注释，有个关键点 <code>RegExp#exec</code>。<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec" target="_blank">MDN</a> 中给的解释：exec() 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null。文档下方有个例子：
                    <pre class="hljs typescript"><code class=""><span class="hljs-keyword">var</span> re = <span class="hljs-regexp">/quick\s(brown).+?(jumps)/ig</span>;<br><span class="hljs-keyword">var</span> result = re.exec(<span class="hljs-string">'The Quick Brown Fox Jumps Over The Lazy Dog'</span>);<br><span class="hljs-built_in">console</span>.log(result);<br><br><span class="hljs-comment">// 输出的 result 是一个数组，有 3 个元素和 4 个属性</span><br><span class="hljs-comment">// 0: "Quick Brown Fox Jumps"</span><br><span class="hljs-comment">// 1: "Brown"</span><br><span class="hljs-comment">// 2: "Jumps"</span><br><span class="hljs-comment">// groups: undefined</span><br><span class="hljs-comment">// index: 4</span><br><span class="hljs-comment">// input: "The Quick Brown Fox Jumps Over The Lazy Dog"</span><br><span class="hljs-comment">// length: 3</span></code></pre>
                    哇哦~ 原来 <code>index</code> 和 <code>input</code> 在这里。所以，源码中的为何要那样赋值，就迎刃而解了。
                </p>
                <p>
                    再回到 baseClone 中来，如果不是深拷贝，那就只要做数组的第一层数据的赋值即可。
                    <pre class="hljs php"><code class=""><span class="hljs-keyword">if</span> (!isDeep) {<br>    <span class="hljs-keyword">return</span> copyArray(value, result)<br>}<br><br><span class="hljs-comment">// ./copyArray.js</span><br><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">copyArray</span><span class="hljs-params">(source, array)</span> </span>{<br>  let index = <span class="hljs-number">-1</span><br>  <span class="hljs-keyword">const</span> length = source.length<br><br>  <span class="hljs-keyword">array</span> || (<span class="hljs-keyword">array</span> = <span class="hljs-keyword">new</span> <span class="hljs-keyword">Array</span>(length))<br>  <span class="hljs-keyword">while</span> (++index &lt; length) {<br>    <span class="hljs-keyword">array</span>[index] = source[index]<br>  }<br>  <span class="hljs-keyword">return</span> <span class="hljs-keyword">array</span><br>}</code></pre>
                </p>

                <h2>总结</h2>
                <p>
                    位掩码技术，是一种很棒的思想，可以写出更为简洁的代码，运行得也更快。对象的判断，需要特别注意 null，它的 typeof 值 也是 object。正则的 exec() 方法会返回一个结果数组或 null，其中就会有 index 和 input 属性。
                </p>
                <p>
                    阅读源码的过程比较痛苦，深感自身的不足。从不懂到查阅资料，再到写出来，耗费了我大量的时间，不过写作的过程也给了我不小的收获。修行之路任重而道远，给自己打打气，继续砥砺前行吧。
                </p>

                <p>
                    未完待续。。。
                </p>

                <h2>岗位内推</h2>
                <p>
                    莉莉丝游戏招 <code>中高级前端工程师</code> 啦！！！
                </p>
                <p>
                    你玩过《<strong>小冰冰传奇</strong>（[刀塔传奇]）》么？你玩过《<strong>剑与家园</strong>》么？新游戏《<strong>AFK arena</strong>》现已占领各大海外应用市场（<code>友情提示：要小心，这游戏有毒嗷~</code>）。​
                </p>
                <p>
                    有兴趣的同学，可以 <strong>关注下面的公众号 加我微信</strong> 详聊哈~
                    <img src="https://user-gold-cdn.xitu.io/2019/1/19/1686412fb6f0b803?w=258&h=258&f=jpeg&s=35520">
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
