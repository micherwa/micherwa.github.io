<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent>
            <div slot="content">
                <h2>前言</h2>
                <p>这是前端面试题系列的第 9 篇，你可能错过了前面的篇章，可以在这里找到：</p>
                <ul>
                    <li>
                        <a href="https://juejin.im/post/5c7b8b4af265da2dcb679d99" target="_blank">数组去重(10 种浓缩版)</a>
                    </li>
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
                    面试的时候，我经常会问候选人深拷贝与浅拷贝的问题。因为它可以考察一个人的很多方面，比如基本功，逻辑能力，编码能力等等。
                </p>
                <p>
                    另外在实际工作中，也常会遇到它。比如页面展示的数据状态，与需要传给后端的数据包中，有几个字段的值需要按照后端给的接口文档来写。为了不影响展示效果，往往就需要深拷贝一下，再改那几个值，否则界面上就会因为某些值的变化，出现奇怪的现象。至于为什么会这样，下文会讲到。
                </p>

                <p>
                    马上开始今天的主题，先从赋值开始说起。
                </p>

                <h2>赋值</h2>
                <p>
                    Javascript 的原始数据类型有这几种：<code>Boolean、Null、Undefined、Number、String、Symbol(ES6)</code>。它们的赋值很简单，且赋值后两个变量互不影响。
                    <pre class="hljs typescript"><code class=""><span class="hljs-keyword">let</span> test1 = <span class="hljs-string">'chao'</span>;<br><span class="hljs-keyword">let</span> test2 = test1;<br><br><span class="hljs-comment">// test2: chao</span><br><br>test1 = <span class="hljs-string">'chao_change'</span>;<br><br><span class="hljs-comment">// test2: chao</span><br><span class="hljs-comment">// test1: chao_change</span></code></pre>
                    另外的引用数据类型有：<code>Object 和 Array</code>。深拷贝与浅拷贝的出现，就与这两个数据类型有关。
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">const</span> obj = {a:<span class="hljs-number">1</span>, b:<span class="hljs-number">2</span>};<br><span class="hljs-keyword">const</span> obj2 = obj;<br>obj2.a = <span class="hljs-number">3</span>;<br>console.<span class="hljs-built_in">log</span>(obj.a); <span class="hljs-comment">// 3</span></code></pre>
                    依照赋值的思路，对 Object 引用类型进行拷贝，就会出问题。很多情况下，这不是我们想要的。这需要用到浅拷贝了。
                </p>

                <h2>浅拷贝</h2>
                <p>
                    什么是浅拷贝？可以这么理解：<strong>创建一个新的对象，把原有的对象属性值，完整地拷贝过来。其中包括了原始类型的值，还有引用类型的内存地址</strong>。
                </p>
                <p>
                    让我们用 <code>Object.assign</code> 来改写一下上面的例子：
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">const</span> obj = <span class="hljs-comment">{a:1, b:2}</span>;<br><span class="hljs-keyword">const</span> obj2 = <span class="hljs-keyword">Object</span>.assign(<span class="hljs-comment">{}</span>, obj);<br>obj2.a = <span class="hljs-number">3</span>;<br>console.log(obj.a); <span class="hljs-comment">// 1</span><br></code></pre>Ok，改变了 obj2 的 a 属性，但 obj 的 a 并没有发生变化，这是我们想要的。
                </p>
                <p>
                    可是，这样的拷贝还有瑕疵，再改一下例子：
                    <pre class="hljs javascript"><code class="">const arr = [{a:<span class="hljs-type">1</span>,b:<span class="hljs-type">2</span>}, {a:<span class="hljs-type">3</span>,b:<span class="hljs-type">4</span>}];<br>const <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span> = [].concat(arr);<br><br><span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>.length = <span class="hljs-number">1</span>; <span class="hljs-comment">// 为了方便区分，只保留新数组的第一个元素</span><br>console.log(<span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>); <span class="hljs-comment">// [{a:1,b:2}]</span><br>console.log(arr); <span class="hljs-comment">// [{a:1,b:2},{a:3,b:4}]</span><br><br><span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>[<span class="hljs-number">0</span>].a = <span class="hljs-number">123</span>; <span class="hljs-comment">// 修改 newArr 中第一个元素的a</span><br>console.log(arr[<span class="hljs-number">0</span>]); <span class="hljs-comment">// {a: 123, b: 2}，竟然把 arr 的第一个元素的 a 也改了</span></code></pre>
                    这不是我想要的...
                </p>
                <p>
                    其实，对象的 <code>Object.assign()</code>，数组的 <code>Array.prototype.slice()</code> 和 <code>Array.prototype.concat()</code>，还有 ES6 的 <code>扩展运算符</code>，都属于 <strong>浅拷贝</strong>。在实际工作中，处理数据的组装时，要格外注意。
                </p>
                <p>
                    所以，我将浅拷贝这样定义：<code>只拷贝第一层的原始类型值，和第一层的引用类型地址</code>。
                </p>

                <h2>深拷贝</h2>
                <p>
                    我们当然希望多层级的对象拷贝，也能实现互不影响的效果。所以，深拷贝的概念也就油然而生了。我将深拷贝定义为：<code>拷贝所有的属性值，以及属性地址指向的值的内存空间</code>。
                </p>
                <p>
                    也就是说，<strong>当遇到对象时，就再新开一个对象，然后将第二层源对象的属性值完整拷贝到新开的这个对象中</strong>。
                </p>
                <p>
                    按照浅拷贝的思路，很容易就想到了递归调用。所以，就自己封装了个深拷贝的方法：
                    <pre class="hljs javascript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deepClone</span></span>(obj){<br>    <span class="hljs-keyword">if</span>(!obj &amp;&amp; typeof obj !== <span class="hljs-string">'object'</span>){<br>        <span class="hljs-keyword">return</span>;<br>    }<br>    <span class="hljs-keyword">var</span> <span class="hljs-keyword">new</span><span class="hljs-type">Obj</span>= toString.call(obj) === <span class="hljs-string">'[object Array]'</span> ? [] : <span class="hljs-type"></span>{};<br>    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> key <span class="hljs-keyword">in</span> obj) {<br>        <span class="hljs-keyword">if</span> (obj[key] &amp;&amp; typeof obj[key] === <span class="hljs-string">'object'</span>) {<br>            <span class="hljs-keyword">new</span><span class="hljs-type">Obj</span>[key] = deepClone(obj[key]);<br>        } <span class="hljs-keyword">else</span> {<br>            <span class="hljs-keyword">new</span><span class="hljs-type">Obj</span>[key] = obj[key];<br>        }<br>    }<br>    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span><span class="hljs-type">Obj</span>;<br>}</code></pre>
                </p>

                <p>
                    再试试看：
                    <pre class="hljs javascript"><code class="">let arr = [{a:<span class="hljs-type">1</span>,b:<span class="hljs-type">2</span>}, {a:<span class="hljs-type">3</span>,b:<span class="hljs-type">4</span>}];<br>let <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span> = deepClone(arr);<br><br><span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>.length = <span class="hljs-number">1</span>; <span class="hljs-comment">// 为了方便区分，只保留新数组的第一个元素</span><br>console.log(<span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>); <span class="hljs-comment">// [{a:1, b:2}]</span><br>console.log(arr); <span class="hljs-comment">// [{a:1, b:2}, {a:3, b:4}]</span><br><br><span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>[<span class="hljs-number">0</span>].a = <span class="hljs-number">123</span>; <span class="hljs-comment">// 修改 newArr 中第一个元素的 a</span><br>console.log(arr[<span class="hljs-number">0</span>]); <span class="hljs-comment">// {a:1, b:2}</span></code></pre>
                    ok，这下搞定了。
                </p>
                <p>
                    不过，似乎会有引用丢失的的问题。比如这样：
                    <pre class="hljs swift"><code class=""><span class="hljs-keyword">var</span> b = {};<br><span class="hljs-keyword">var</span> a = {a1: b, a2: b};<br><br>a.a1 === a.a2 <span class="hljs-comment">// true</span><br><br><span class="hljs-keyword">var</span> <span class="hljs-built_in">c</span> = clone(a);<br><span class="hljs-built_in">c</span>.a1 === <span class="hljs-built_in">c</span>.a2 <span class="hljs-comment">// false</span></code></pre>
                </p>

                <h2>一行代码的深拷贝</h2>
                <p>
                    当然，还有最简单粗暴的深拷贝方法，就是利用 <code>JSON</code> 了。像这样：
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">let</span> newArr2 = <span class="hljs-built_in">JSON</span>.parse(<span class="hljs-built_in">JSON</span>.stringify(arr));<br><span class="hljs-built_in">console</span>.log(arr[<span class="hljs-number">0</span>]); <span class="hljs-comment">// {a:1, b:2}</span><br>newArr2[<span class="hljs-number">0</span>].a = <span class="hljs-number">123</span>;<br><span class="hljs-built_in">console</span>.log(arr[<span class="hljs-number">0</span>]); <span class="hljs-comment">// {a:1, b:2}</span></code></pre>
                    但是，JSON 内部也是使用了递归的方式，所以会有递归爆栈的风险。
                    <pre class="hljs sql"><code style="word-break: break-word; white-space: initial;" class=""><span class="hljs-comment">// Maximum call stack size exceeded</span></code></pre>
                </p>

                <h2>深拷贝的终极方案</h2>
                <p>
                    有位大佬给出了深拷贝的终极方案，利用了“栈”的思想。
                    <pre class="hljs kotlin"><code class="">function cloneForce(x) {<br>    <span class="hljs-comment">// 用来去重</span><br>    <span class="hljs-keyword">const</span> uniqueList = [];<br><br>    let root = {};<br><br>    <span class="hljs-comment">// 循环数组</span><br>    <span class="hljs-keyword">const</span> loopList = [<br>        {<br>            parent: root,<br>            key: undefined,<br>            <span class="hljs-keyword">data</span>: x,<br>        }<br>    ];<br><br>    <span class="hljs-keyword">while</span>(loopList.length) {<br>        <span class="hljs-comment">// 深度优先</span><br>        <span class="hljs-keyword">const</span> node = loopList.pop();<br>        <span class="hljs-keyword">const</span> parent = node.parent;<br>        <span class="hljs-keyword">const</span> key = node.key;<br>        <span class="hljs-keyword">const</span> <span class="hljs-keyword">data</span> = node.<span class="hljs-keyword">data</span>;<br><br>        <span class="hljs-comment">// 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素</span><br>        let res = parent;<br>        <span class="hljs-keyword">if</span> (typeof key !== <span class="hljs-string">'undefined'</span>) {<br>            res = parent[key] = {};<br>        }<br><br>        <span class="hljs-comment">// 数据已经存在</span><br>        let uniqueData = uniqueList.find((item) =&gt; item.source === <span class="hljs-keyword">data</span> );<br>        <span class="hljs-keyword">if</span> (uniqueData) {<br>            parent[key] = uniqueData.target;<br>            <span class="hljs-comment">// 中断本次循环</span><br>            <span class="hljs-keyword">continue</span>;<br>        }<br><br>        <span class="hljs-comment">// 数据不存在</span><br>        <span class="hljs-comment">// 保存源数据，在拷贝数据中对应的引用</span><br>        uniqueList.push({<br>            source: <span class="hljs-keyword">data</span>,<br>            target: res,<br>        });<br><br>        <span class="hljs-keyword">for</span>(let k <span class="hljs-keyword">in</span> <span class="hljs-keyword">data</span>) {<br>            <span class="hljs-keyword">if</span> (<span class="hljs-keyword">data</span>.hasOwnProperty(k)) {<br>                <span class="hljs-keyword">if</span> (typeof <span class="hljs-keyword">data</span>[k] === <span class="hljs-string">'object'</span>) {<br>                    <span class="hljs-comment">// 下一次循环</span><br>                    loopList.push({<br>                        parent: res,<br>                        key: k,<br>                        <span class="hljs-keyword">data</span>: <span class="hljs-keyword">data</span>[k],<br>                    });<br>                } <span class="hljs-keyword">else</span> {<br>                    res[k] = <span class="hljs-keyword">data</span>[k];<br>                }<br>            }<br>        }<br>    }<br><br>    <span class="hljs-keyword">return</span> root;<br>}</code></pre>
                    引入一个数组 <code>uniqueList</code> 用来存储已经拷贝的数组，每次循环遍历时，先判断对象是否在 <code>uniqueList</code> 中了，如果在的话就不执行拷贝逻辑了。
                </p>
                <p>
                    这个方法是为了解决循环引用问题的，如果你并不想保持引用，那就不能用 <code>cloneForce</code>了。更多的细节在此不再过多地展开了，有兴趣的同学，可以前往 <a href="https://juejin.im/post/5bc1ae9be51d450e8b140b0c" target="_blank">这里</a>。
                </p>

                <h2>总结</h2>
                <p>
                    所谓深拷贝与浅拷贝，指的是 <code>Object</code> 和 <code>Array</code> 这样的引用数据类型。
                </p>
                <p>
                    <code>浅拷贝</code>，只拷贝第一层的原始类型值，和第一层的引用类型地址。
                </p>
                <p>
                    <code>深拷贝</code>，拷贝所有的属性值，以及属性地址指向的值的内存空间。通过递归调用，或者 JSON 来做深拷贝，都会有一些问题。而 cloneForce 方法倒是目前看来最完美的解决方案了。
                </p>
                <p>
                    在日常的工作中，我们要特别注意，对象的 <code>Object.assign()</code>，数组的 <code>Array.prototype.slice()</code> 和 <code>Array.prototype.concat()</code>，还有 ES6 的 <code>扩展运算符</code>，都属于浅拷贝。当需要做数据组装时，一定要用深拷贝，以免影响界面展示效果。
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
