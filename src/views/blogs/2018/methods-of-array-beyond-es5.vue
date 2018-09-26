<template>
    <div class="blog-container">
        <BlogHeader
            title="数组的常用操作" subTitle="包含es5和es6"
            date="2018-09-26" :tags="['Javascript']">
        </BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <blockquote>
                    <p>汇总Javascript中数组的常用操作，以及如何使用。</p>
                </blockquote>

                <h2>ES5中Array操作</h2>

                <h4>1.forEach</h4>
                <p>
                    Array 方法中最基本的一个，就是遍历，循环。基本用法：<code>[].forEach(function(item, index, array) {});</code>
                    <pre class="hljs smali"><code class="">const<span class="hljs-built_in"> array </span>= [1, 2, 3];<span class="hljs-built_in"></span><br><span class="hljs-built_in">const </span>result = [];<br><br>array.forEach(function(item) {<br>    result.push(item);<br>});<br>console.log(result); // [1, 2, 3]</code></pre>
                </p>

                <h4>2.map</h4>
                <p>
                    map方法的作用不难理解，“映射”嘛，也就是原数组被“映射”成对应的新数组。基本用法跟forEach方法类似：<code>[].map(function(item, index, array) {});</code><br>
                    下面这个例子是数值项求平方：
                    <pre class="hljs actionscript"><code class=""><span class="hljs-keyword">const</span> data = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>];<br><span class="hljs-keyword">const</span> arrayOfSquares = data.map(<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">(item)</span> </span>{<br>    <span class="hljs-keyword">return</span> item * item;<br>});<br>alert(arrayOfSquares); <span class="hljs-comment">// 1, 4, 9, 16</span></code></pre>
                </p>

                <h4>3.filter</h4>
                <p>
                    filter为“过滤”、“筛选”之意。指数组filter后，返回过滤后的新数组。用法跟map极为相似：<code>[].filter(function(item, index, array) {});</code><br>
                    filter 的 callback 函数需要返回布尔值 true 或 false，返回值只要<strong>弱等于</strong>Boolean就行，看下面这个例子：
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">const</span> data = [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];<br><span class="hljs-keyword">const</span> arrayFilter = data.filter(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">item</span>) </span>{<br>    <span class="hljs-keyword">return</span> item;<br>});<br><span class="hljs-built_in">console</span>.log(arrayFilter); <span class="hljs-comment">// [1, 2, 3]</span></code></pre>
                </p>

                <h4>4.some 和 every</h4>
                <p>
                    some 意指“某些”，指是否“某些项”合乎条件。也就是<strong>只要有1值个让 callback 返回 true 就行了</strong>。基本用法：<code>[].som(function(item, index, array) {});</code>
                    <pre class="hljs mipsasm"><code class="">const <span class="hljs-keyword">scores </span>= [<span class="hljs-number">5</span>, <span class="hljs-number">8</span>, <span class="hljs-number">3</span>, <span class="hljs-number">10</span>]<span class="hljs-comment">;</span><br>const current = <span class="hljs-number">7</span><span class="hljs-comment">;</span><br><br>function higherThanCurrent(<span class="hljs-keyword">score) </span>{<br>    return <span class="hljs-keyword">score </span>&gt; current<span class="hljs-comment">;</span><br>}<br><br>if (<span class="hljs-keyword">scores.some(higherThanCurrent)) </span>{<br>    alert(<span class="hljs-string">"one more"</span>)<span class="hljs-comment">;</span><br>}</code></pre>

                    every 跟 some 是一对好基友，同样是返回 Boolean 值。但必须满足每1个值都要让 callback 返回 true 才行。改动一下上面 some 的例子：
                    <pre class="hljs applescript"><code class=""><span class="hljs-keyword">if</span> (scores.<span class="hljs-keyword">every</span>(higherThanCurrent)) {<br>    console.<span class="hljs-built_in">log</span>(<span class="hljs-string">"every is ok!"</span>);<br>} <span class="hljs-keyword">else</span> {<br>    console.<span class="hljs-built_in">log</span>(<span class="hljs-string">"oh no!"</span>);        <br>}</code></pre>
                </p>

                <h4>5.concat 和 join</h4>
                <p>
                    concat() 方法用于连接两个或多个数组。该方法不会改变现有的数组，仅会返回被连接数组的一个副本。
                    <pre class="hljs processing"><code class=""><span class="hljs-keyword">const</span> arr1 = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>];<br><span class="hljs-keyword">const</span> arr2 = [<span class="hljs-number">4</span>,<span class="hljs-number">5</span>];<br><span class="hljs-keyword">const</span> arr3 = arr1.<span class="hljs-built_in">concat</span>(arr2);<br>console.<span class="hljs-built_in">log</span>(arr1); <span class="hljs-comment">//[1, 2, 3]</span><br>console.<span class="hljs-built_in">log</span>(arr3); <span class="hljs-comment">//[1, 2, 3, 4, 5]</span></code></pre>

                    join() 方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的，默认使用','号分割，不改变原数组。
                    <pre class="hljs processing"><code class=""><span class="hljs-keyword">const</span> arr = [<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>];<br>console.<span class="hljs-built_in">log</span>(arr.<span class="hljs-built_in">join</span>());  <span class="hljs-comment">// 2,3,4</span><br>console.<span class="hljs-built_in">log</span>(arr);  <span class="hljs-comment">// [2, 3, 4]</span></code></pre>
                </p>

                <h4>6.indexOf 和 lastIndexOf</h4>
                <p>
                    indexOf 方法在字符串中自古就有，string.indexOf(searchString, position)。数组这里的 indexOf 方法与之类似。<br>
                    返回整数索引值，如果没有匹配（严格匹配），返回-1. fromIndex可选，表示从这个位置开始搜索，若缺省或格式不合要求，使用默认值0，我在FireFox下测试，发现使用字符串数值也是可以的，例如"3"和3都可以。
                    <pre class="hljs xl"><code class="">const <span class="hljs-keyword">data</span> = [<span class="hljs-number">2</span>, <span class="hljs-number">5</span>, <span class="hljs-number">7</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>];<br>console.<span class="hljs-built_in">log</span>(<span class="hljs-keyword">data</span>.indexOf(<span class="hljs-number">5</span>, <span class="hljs-string">"x"</span>));  <span class="hljs-comment">// 1 ("x"被忽略)</span><br>console.<span class="hljs-built_in">log</span>(<span class="hljs-keyword">data</span>.indexOf(<span class="hljs-number">5</span>, <span class="hljs-string">"3"</span>)); <span class="hljs-comment">// 4 (从3号位开始搜索)</span><br><br>console.<span class="hljs-built_in">log</span>(<span class="hljs-keyword">data</span>.indexOf(<span class="hljs-number">4</span>));    <span class="hljs-comment">// -1 (未找到)</span><br>console.<span class="hljs-built_in">log</span>(<span class="hljs-keyword">data</span>.indexOf(<span class="hljs-string">"5"</span>)); <span class="hljs-comment">// -1 (未找到，因为5 !== "5")</span></code></pre>
                    lastIndexOf 则是从后往前找。
                    <pre class="hljs lsl"><code class="">const numbers = [<span class="hljs-number">2</span>, <span class="hljs-number">5</span>, <span class="hljs-number">9</span>, <span class="hljs-number">2</span>];<br>numbers.lastIndexOf(<span class="hljs-number">2</span>);     <span class="hljs-comment">// 3</span><br>numbers.lastIndexOf(<span class="hljs-number">7</span>);     <span class="hljs-comment">// -1</span><br>numbers.lastIndexOf(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>);  <span class="hljs-comment">// 3</span><br>numbers.lastIndexOf(<span class="hljs-number">2</span>, <span class="hljs-number">2</span>);  <span class="hljs-comment">// 0</span><br>numbers.lastIndexOf(<span class="hljs-number">2</span>, <span class="hljs-number">-2</span>); <span class="hljs-comment">// 0</span><br>numbers.lastIndexOf(<span class="hljs-number">2</span>, <span class="hljs-number">-1</span>); <span class="hljs-comment">// 3</span></code></pre>
                </p>

                <h4>7.reduce 和 reduceRight</h4>
                <p>
                    reduce 是JavaScript 1.8 中才引入的，中文意思为“归约”。基本用法：<code>reduce(callback[, initialValue])</code>。<br>
                    callback 函数接受4个参数：之前值(previousValue)、当前值(currentValue)、索引值(currentIndex)以及数组本身(array)。<br>
                    可选的初始值(initialValue)，作为第一次调用回调函数时传给previousValue的值。也就是，为累加等操作传入起始值（额外的加值）。
                    <pre class="hljs javascript"><code class="">var <span class="hljs-built_in">sum</span> = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>].reduce(<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">(previous, current, index, array)</span> {</span><br>    <span class="hljs-keyword">return</span> previous + current;<br>});<br>console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">sum</span>); <span class="hljs-comment">// 10</span></code></pre>
                    解析：
                    <ul>
                        <li>因为initialValue不存在，因此一开始的previous值等于数组的第一个元素</li>
                        <li>从而 current 值在第一次调用的时候就是2</li>
                        <li>最后两个参数为索引值 index 以及数组本身 array</li>
                    </ul>
                    以下为循环执行过程：
                    <pre class="hljs lsl"><code class=""><span class="hljs-comment">// 初始设置</span><br>previous = initialValue = <span class="hljs-number">1</span>, current = <span class="hljs-number">2</span><br><br><span class="hljs-comment">// 第一次迭代</span><br>previous = (<span class="hljs-number">1</span> + <span class="hljs-number">2</span>) =  <span class="hljs-number">3</span>, current = <span class="hljs-number">3</span><br><br><span class="hljs-comment">// 第二次迭代</span><br>previous = (<span class="hljs-number">3</span> + <span class="hljs-number">3</span>) =  <span class="hljs-number">6</span>, current = <span class="hljs-number">4</span><br><br><span class="hljs-comment">// 第三次迭代</span><br>previous = (<span class="hljs-number">6</span> + <span class="hljs-number">4</span>) =  <span class="hljs-number">10</span>, current = undefined (退出)</code></pre>
                </p>

                <p>
                    有了reduce，我们可以轻松实现二维数组的扁平化：
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">var</span> matrix = [<br>  [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>],<br>  [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>],<br>  [<span class="hljs-number">5</span>, <span class="hljs-number">6</span>]<br>];<br><br><span class="hljs-comment">// 二维数组扁平化</span><br><span class="hljs-keyword">var</span> flatten = matrix.reduce(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">previous, current</span>) </span>{<br>    <span class="hljs-keyword">return</span> previous.concat(current);<br>});<br><span class="hljs-built_in">console</span>.log(flatten); <span class="hljs-comment">// [1, 2, 3, 4, 5, 6]</span></code></pre>
                </p>

                <p>
                    reduceRight 跟 reduce 相比，用法类似。实现上差异在于reduceRight是从数组的末尾开始实现。
                    <pre class="hljs fortran"><code class="">const <span class="hljs-keyword">data</span> = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>];<br>const specialDiff = <span class="hljs-keyword">data</span>.reduceRight(<span class="hljs-function"><span class="hljs-keyword">function</span></span> (previous, current, <span class="hljs-built_in">index</span>) {<br>    <span class="hljs-keyword">if</span> (<span class="hljs-built_in">index</span> == <span class="hljs-number">0</span>) {<br>        <span class="hljs-keyword">return</span> previous + current;<br>    }<br>    <span class="hljs-keyword">return</span> previous - current;<br>});<br>console.<span class="hljs-built_in">log</span>(specialDiff);  // <span class="hljs-number">0</span></code></pre>
                    我们一步一步查看循环执行：
                    <pre class="hljs lsl"><code class=""><span class="hljs-comment">// 初始设置</span><br>index = <span class="hljs-number">3</span>, previous = initialValue = <span class="hljs-number">4</span>, current = <span class="hljs-number">3</span><br><br><span class="hljs-comment">// 第一次迭代</span><br>index = <span class="hljs-number">2</span>, previous = (<span class="hljs-number">4</span>- <span class="hljs-number">3</span>) = <span class="hljs-number">1</span>, current = <span class="hljs-number">2</span><br><br><span class="hljs-comment">// 第二次迭代</span><br>index = <span class="hljs-number">1</span>, previous = (<span class="hljs-number">1</span> - <span class="hljs-number">2</span>) = <span class="hljs-number">-1</span>, current = <span class="hljs-number">1</span><br><br><span class="hljs-comment">// 第三次迭代</span><br>index = <span class="hljs-number">0</span>, previous = (<span class="hljs-number">-1</span> + <span class="hljs-number">1</span>) = <span class="hljs-number">0</span>, current = undefined (退出)</code></pre>
                </p>

                <h4>8.push 和 pop</h4>
                <p>
                    push() 方法可向数组的末尾添加一个或多个元素，返回的是新的数组长度，会改变原数组。
                    <pre class="hljs cpp"><code class=""><span class="hljs-keyword">const</span> a = [<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>];<br><span class="hljs-keyword">const</span> b = a.push(<span class="hljs-number">5</span>);<br>console.<span class="hljs-built_in">log</span>(a);  <span class="hljs-comment">// [2,3,4,5]</span><br>console.<span class="hljs-built_in">log</span>(b);  <span class="hljs-comment">// 4</span><br><span class="hljs-comment">// push方法可以一次添加多个元素push(data1, data2....)</span></code></pre>
                </p>

                <p>
                    pop() 方法用于删除并返回数组的最后一个元素。返回的是最后一个元素，会改变原数组。
                    <pre class="hljs cpp"><code class=""><span class="hljs-keyword">const</span> arr = [<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>];<br>console.<span class="hljs-built_in">log</span>(arr.pop()); <span class="hljs-comment">// 4</span><br>console.<span class="hljs-built_in">log</span>(arr);  <span class="hljs-comment">// [2,3]</span></code></pre>
                </p>

                <h4>9.shift 和 unshift</h4>
                <p>
                    shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。返回第一个元素，改变原数组。
                    <pre class="hljs cpp"><code class=""><span class="hljs-keyword">const</span> arr = [<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>];<br>console.<span class="hljs-built_in">log</span>(arr.shift()); <span class="hljs-comment">// 2</span><br>console.<span class="hljs-built_in">log</span>(arr);  <span class="hljs-comment">// [3,4]</span></code></pre>
                </p>
                <p>
                    unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。返回新长度，改变原数组。
                    <pre class="hljs lsl"><code class="">const arr = [<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>];<br>console.log(arr.unshift(<span class="hljs-number">3</span>,<span class="hljs-number">6</span>)); <span class="hljs-comment">// 6</span><br>console.log(arr); <span class="hljs-comment">// [3, 6, 2, 3, 4, 5]</span><br><span class="hljs-comment">// tip:该方法可以不传参数,不传参数就是不增加元素。</span></code></pre>
                </p>

                <h4>10.slice 和 splice</h4>
                <p>
                    slice() 返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。返回选定的元素，该方法不会修改原数组。
                    <pre class="hljs lsl"><code class="">const arr = [<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>];<br>console.log(arr.slice(<span class="hljs-number">1</span>,<span class="hljs-number">3</span>));  <span class="hljs-comment">// [3,4]</span><br>console.log(arr);  <span class="hljs-comment">// [2,3,4,5]</span></code></pre>
                </p>

                <p>
                    splice() 可删除从 index 处开始的零个或多个元素，并且用参数列表中声明的一个或多个值来替换那些被删除的元素。如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。splice() 方法会直接对数组进行修改。
                    <pre class="hljs lsl"><code class="">const a = [<span class="hljs-number">5</span>,<span class="hljs-number">6</span>,<span class="hljs-number">7</span>,<span class="hljs-number">8</span>];<br>console.log(a.splice(<span class="hljs-number">1</span>,<span class="hljs-number">0</span>,<span class="hljs-number">9</span>)); <span class="hljs-comment">//[]</span><br>console.log(a);  <span class="hljs-comment">// [5, 9, 6, 7, 8]</span><br><br>const b = [<span class="hljs-number">5</span>,<span class="hljs-number">6</span>,<span class="hljs-number">7</span>,<span class="hljs-number">8</span>];<br>console.log(b.splice(<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>));  <span class="hljs-comment">//[6, 7]</span><br>console.log(b); <span class="hljs-comment">//[5, 3, 8]</span></code></pre>
                </p>

                <h4>11.sort 和 reverse</h4>
                <p>
                    sort() 按照 Unicode code 位置排序，默认升序。
                    <pre class="hljs prolog"><code class="">const fruit = [<span class="hljs-string">'cherries'</span>, <span class="hljs-string">'apples'</span>, <span class="hljs-string">'bananas'</span>];<br>fruit.sort(); // [<span class="hljs-string">'apples'</span>, <span class="hljs-string">'bananas'</span>, <span class="hljs-string">'cherries'</span>]<br><br>const scores = [<span class="hljs-number">1</span>, <span class="hljs-number">10</span>, <span class="hljs-number">21</span>, <span class="hljs-number">2</span>];<br>scores.sort(); // [<span class="hljs-number">1</span>, <span class="hljs-number">10</span>, <span class="hljs-number">2</span>, <span class="hljs-number">21</span>]</code></pre>
                </p>
                <p>
                    reverse() 方法用于颠倒数组中元素的顺序。返回的是颠倒后的数组，会改变原数组。
                    <pre class="hljs processing"><code class=""><span class="hljs-keyword">const</span> arr = [<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">4</span>];<br>console.<span class="hljs-built_in">log</span>(arr.<span class="hljs-built_in">reverse</span>()); <span class="hljs-comment">// [4, 3, 2]</span><br>console.<span class="hljs-built_in">log</span>(arr);  <span class="hljs-comment">// [4, 3, 2]</span></code></pre>
                </p>

                <h2>ES6新增的Array操作</h2>

                <h4>1.find 和 findIndex</h4>
                <p>
                    find() 传入一个回调函数，找到数组中符合当前搜索规则的第一个元素，返回这个元素，并且终止搜索。
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">const</span> arr = [<span class="hljs-number">1</span>, <span class="hljs-string">"2"</span>, <span class="hljs-number">3</span>, <span class="hljs-number">3</span>, <span class="hljs-string">"2"</span>]<br><span class="hljs-built_in">console</span>.log(arr.find(<span class="hljs-function"><span class="hljs-params">n</span> =&gt;</span> <span class="hljs-keyword">typeof</span> n === <span class="hljs-string">"number"</span>)) <span class="hljs-comment">// 1</span></code></pre>

                    findIndex() 与 find() 类似，只是返回的是，找到的这个元素的下标。
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">const</span> arr = [<span class="hljs-number">1</span>, <span class="hljs-string">"2"</span>, <span class="hljs-number">3</span>, <span class="hljs-number">3</span>, <span class="hljs-string">"2"</span>]<br><span class="hljs-built_in">console</span>.log(arr.findIndex(<span class="hljs-function"><span class="hljs-params">n</span> =&gt;</span> <span class="hljs-keyword">typeof</span> n === <span class="hljs-string">"number"</span>)) <span class="hljs-comment">// 0</span></code></pre>
                </p>

                <h4>2.fill</h4>
                <p>
                    用指定的元素填充数组，其实就是用默认内容初始化数组。基本用法：<code>[].fill(value, start, end)</code><br>
                    该函数有三个参数：填充值(value)，填充起始位置(start，可以省略)，填充结束位置(end，可以省略，实际结束位置是end-1)。
                    <pre class="hljs lsl"><code class=""><span class="hljs-comment">// 采用一个默认值，填充数组</span><br>const arr1 = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span class="hljs-number">11</span>];<br>arr1.fill(<span class="hljs-number">7</span>);<br>console.log(arr1); <span class="hljs-comment">// [7,7,7,7,7,7,7,7,7,7,7]</span><br><br><span class="hljs-comment">// 制定开始和结束位置填充，实际填充结束位置是前一位。</span><br>const arr2 = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span class="hljs-number">11</span>];<br>arr2.fill(<span class="hljs-number">7</span>, <span class="hljs-number">2</span>, <span class="hljs-number">5</span>);<br>console.log(arr2); <span class="hljs-comment">// [1,2,7,7,7,6,7,8,9,10,11]</span><br><br><span class="hljs-comment">// 结束位置省略，从起始位置到最后。</span><br>const arr3 = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span class="hljs-number">11</span>];<br>arr3.fill(<span class="hljs-number">7</span>, <span class="hljs-number">2</span>);<br>console.log(arr3); <span class="hljs-comment">// [1,2,7,7,7,7,7,7,7,7,7]</span></code></pre>
                </p>

                <h4>3.from</h4>
                <p>
                    将类似数组的对象（array-like object）和可遍历（iterable）的对象转为真正的数组。
                    <pre class="hljs oxygene"></span><span class="hljs-keyword">const</span> <span class="hljs-keyword">set</span> = <span class="hljs-keyword">new</span> <span class="hljs-keyword">Set</span>(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>);<br><span class="hljs-keyword">Array</span>.from(<span class="hljs-keyword">set</span>)  <span class="hljs-comment">// [1,2,3,4]</span><br><br><span class="hljs-keyword">Array</span>.from(<span class="hljs-string">'foo'</span>); <span class="hljs-comment">// ["f", "o", "o"]</span></code></pre>
                </p>

                <h4>4.of</h4>
                <p>
                    Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。<br>
                    Array.of() 和 Array 构造函数之间的区别在于处理整数参数：Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个长度为7的空数组（注意：这是指一个有7个空位的数组，而不是由7个undefined组成的数组）。
                    <pre class="hljs lsl"><code class="">Array.of(<span class="hljs-number">7</span>);       <span class="hljs-comment">// [7] </span><br>Array.of(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>); <span class="hljs-comment">// [1, 2, 3]</span><br><br>Array(<span class="hljs-number">7</span>);          <span class="hljs-comment">// [ , , , , , , ]</span><br>Array(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>);    <span class="hljs-comment">// [1, 2, 3]</span></code></pre>
                </p>

                <h4>5.copyWithin</h4>
                <p>
                    选择数组的某个下标，从该位置开始复制数组元素，默认从0开始复制。也可以指定要复制的元素范围。基本用法：<code>[].copyWithin(target, start, end)</code>
                    <pre class="hljs lsl"><code class="">const arr = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>];<br>console.log(arr.copyWithin(<span class="hljs-number">3</span>));<br> <span class="hljs-comment">// [1,2,3,1,2] 从下标为3的元素开始，复制数组，所以4, 5被替换成1, 2</span><br><br>const arr1 = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>];<br>console.log(arr1.copyWithin(<span class="hljs-number">3</span>, <span class="hljs-number">1</span>)); <br><span class="hljs-comment">// [1,2,3,2,3] 从下标为3的元素开始，复制数组，指定复制的第一个元素下标为1，所以4, 5被替换成2, 3</span><br><br>const arr2 = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>];<br>console.log(arr2.copyWithin(<span class="hljs-number">3</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>));<br><span class="hljs-comment">// [1,2,3,2,5] 从下标为3的元素开始，复制数组，指定复制的第一个元素下标为1，结束位置为2，所以4被替换成2</span></code></pre>
                </p>

                <h4>6.includes</h4>
                <p>
                    判断数组中是否存在该元素，参数：查找的值、起始位置，可以替换 ES5 时代的 indexOf 判断方式。
                    <pre class="hljs lsl"><code class="">const arr = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];<br>arr.includes(<span class="hljs-number">2</span>); <span class="hljs-comment">// true</span><br>arr.includes(<span class="hljs-number">4</span>); <span class="hljs-comment">// false</span></code></pre>
                </p>

                <h4>7.entries、values 和 keys</h4>
                <p>
                    entries() 返回迭代器：返回键值对
                    <pre class="hljs javascript"><code class=""><span class="hljs-comment">//数组</span><br><span class="hljs-keyword">const</span> arr = [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>];<br><span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> v <span class="hljs-keyword">of</span> arr.entries()) {<br>    <span class="hljs-built_in">console</span>.log(v)<br>}<br><span class="hljs-comment">// [0, 'a'] [1, 'b'] [2, 'c']</span><br><br><span class="hljs-comment">//Set</span><br><span class="hljs-keyword">const</span> arr = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Set</span>([<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>]);<br><span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> v <span class="hljs-keyword">of</span> arr.entries()) {<br>    <span class="hljs-built_in">console</span>.log(v)<br>}<br><span class="hljs-comment">// ['a', 'a'] ['b', 'b'] ['c', 'c']</span><br><br><span class="hljs-comment">//Map</span><br><span class="hljs-keyword">const</span> arr = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Map</span>();<br>arr.set(<span class="hljs-string">'a'</span>, <span class="hljs-string">'a'</span>);<br>arr.set(<span class="hljs-string">'b'</span>, <span class="hljs-string">'b'</span>);<br><span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> v <span class="hljs-keyword">of</span> arr.entries()) {<br>    <span class="hljs-built_in">console</span>.log(v)<br>}<br><span class="hljs-comment">// ['a', 'a'] ['b', 'b']</span></code></pre>

                    values() 返回迭代器：返回键值对的value
                    <pre class="hljs javascript"><code class=""><span class="hljs-comment">//数组</span><br><span class="hljs-keyword">const</span> arr = [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>];<br><span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> v <span class="hljs-keyword">of</span> arr.values()) {<br>    <span class="hljs-built_in">console</span>.log(v)<br>}<br><span class="hljs-comment">//'a' 'b' 'c'</span><br><br><span class="hljs-comment">//Set</span><br><span class="hljs-keyword">const</span> arr = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Set</span>([<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>]);<br><span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> v <span class="hljs-keyword">of</span> arr.values()) {<br>    <span class="hljs-built_in">console</span>.log(v)<br>}<br><span class="hljs-comment">// 'a' 'b' 'c'</span><br><br><span class="hljs-comment">//Map</span><br><span class="hljs-keyword">const</span> arr = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Map</span>();<br>arr.set(<span class="hljs-string">'a'</span>, <span class="hljs-string">'a'</span>);<br>arr.set(<span class="hljs-string">'b'</span>, <span class="hljs-string">'b'</span>);<br><span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> v <span class="hljs-keyword">of</span> arr.values()) {<br>    <span class="hljs-built_in">console</span>.log(v)<br>}<br><span class="hljs-comment">// 'a' 'b'</span></code></pre>

                    keys() 返回迭代器：返回键值对的key
                    <pre class="hljs javascript"><code class=""><span class="hljs-comment">//数组</span><br><span class="hljs-keyword">const</span> arr = [<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>];<br><span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> v <span class="hljs-keyword">of</span> arr.keys()) {<br>    <span class="hljs-built_in">console</span>.log(v)<br>}<br><span class="hljs-comment">// 0 1 2</span><br><br><span class="hljs-comment">//Set</span><br><span class="hljs-keyword">const</span> arr = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Set</span>([<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>]);<br><span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> v <span class="hljs-keyword">of</span> arr.keys()) {<br>    <span class="hljs-built_in">console</span>.log(v)<br>}<br><span class="hljs-comment">// 'a' 'b' 'c'</span><br><br><span class="hljs-comment">//Map</span><br><span class="hljs-keyword">const</span> arr = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Map</span>();<br>arr.set(<span class="hljs-string">'a'</span>, <span class="hljs-string">'a'</span>);<br>arr.set(<span class="hljs-string">'b'</span>, <span class="hljs-string">'b'</span>);<br><span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> v <span class="hljs-keyword">of</span> arr.keys()) {<br>    <span class="hljs-built_in">console</span>.log(v)<br>}<br><span class="hljs-comment">// 'a' 'b'</span></code></pre>
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
