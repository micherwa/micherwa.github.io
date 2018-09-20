<template>
    <div class="blog-container">
        <BlogHeader
            title="Javascript数组去重" subTitle=""
            date="2017-06-22" :tags="['算法']">
        </BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <p>
                    假设去重的数组是这样的：<code>let arr = [1,2,3,3,4,5,5];</code>。<br>
                    下面介绍几种去重的方法。
                </p>

                <h2>es6的Set对象</h2>
                <p>
                    Set的定义：集合(Set)对象允许你存储任意类型的唯一值(不能重复)，无论它是原始值或者是对象引用。
                    <pre class="hljs haxe"><code class="">let <span class="hljs-keyword">set</span> = <span class="hljs-keyword">new</span> <span class="hljs-type">Set</span>(arr);<br>let <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span> = <span class="hljs-keyword">Array</span>.from(<span class="hljs-keyword">set</span>);<br>console.log(<span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>);<br><br><span class="hljs-comment">// 或者更简单的写法</span><br>let <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span> = [...<span class="hljs-keyword">new</span> <span class="hljs-type">Set</span>(arr)];<br>console.log(<span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>);</code></pre>
                </p>

                <h2>es5的indexOf方法</h2>
                <p>
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">var</span> <span class="hljs-keyword">newArr</span> = [arr[<span class="hljs-number">0</span>]];<br><span class="hljs-keyword">for</span>(let i=<span class="hljs-number">1</span>; i&lt; arr.length; i++) {<br>    <span class="hljs-keyword">if</span>(<span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>.indexOf(arr[i]) == <span class="hljs-number">-1</span>){<br>        <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>.push(arr[i]);<br>    }<br>}<br>console.log(<span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>);</code></pre>
                </p>

                <h2>includes</h2>
                <p>
                    <pre class="hljs javascript"><code class="">let <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span> = [];<br><br><span class="hljs-keyword">for</span> (let i=<span class="hljs-number">0</span>; i &lt; arr.length; i++) {<br>    <span class="hljs-keyword">if</span> (!<span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>.includes(arr[i])) {<br>        <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>.push(arr[i]);<br>    }<br>}<br><br>console.log(<span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>);</code></pre>
                </p>

                <h2>对象属性不能相同的特性</h2>
                <p>
                    每次取出原数组的元素，然后再对象中访问这个属性，如果存在就说明重复
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">var</span> <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span> = [];<br><span class="hljs-keyword">var</span> json = {};<br><span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i=<span class="hljs-number">0</span>; i&lt;arr.length; i++){<br>    <span class="hljs-keyword">if</span>(!json[arr[i]]){<br>        <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>.push(arr[i]);<br>        json[arr[i]] = <span class="hljs-number">1</span>;<br>    }<br>}<br>console.log(<span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>);</code></pre>
                </p>

                <h2>filter + hasOwnProperty</h2>
                <p>
                    filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。再利用 hasOwnProperty 判断是否存在对象属性。
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">const</span> obj = {};<br><br><span class="hljs-keyword">let</span> newArr = arr.filter(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">item, index, arr</span>) </span>{<br>    <span class="hljs-keyword">return</span> obj.hasOwnProperty(<span class="hljs-keyword">typeof</span> item + item) ? <span class="hljs-literal">false</span> : (obj[<span class="hljs-keyword">typeof</span> item + item] = <span class="hljs-literal">true</span>);<br>});<br><br><span class="hljs-built_in">console</span>.log(newArr);</code></pre>
                </p>

                <h2>利用Map的has方法</h2>
                <p>
                    把源数组的每一个元素作为key存到Map中。由于Map中不会出现相同的key值，所以最终得到的就是去重后的结果。
                    <pre class="hljs haxe"><code class="">let map = <span class="hljs-keyword">new</span> <span class="hljs-type">Map</span>();<br>let <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span> = <span class="hljs-keyword">new</span> <span class="hljs-type">Array</span>();<br><br><span class="hljs-keyword">for</span> (let i=<span class="hljs-number">0</span>; i &lt; arr.length; i++) {<br>    <span class="hljs-comment">// 如果有该key值</span><br>    <span class="hljs-keyword">if</span> (map.has(arr[i])) {<br>        map.<span class="hljs-keyword">set</span>(arr[i], <span class="hljs-literal">true</span>);<br>    } <span class="hljs-keyword">else</span> {<br>        <span class="hljs-comment">// 没有该key值</span><br>        map.<span class="hljs-keyword">set</span>(arr[i], <span class="hljs-literal">false</span>);<br>        <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>.push(arr[i]);<br>    }<br>}<br><br>console.log(<span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>);</code></pre>
                </p>

                <h2>排序去重</h2>
                <p>
                    先将原数组排序，在与相邻的进行比较，如果不同则存入新数组
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">var</span> arr2 = arr.sort();<br><span class="hljs-keyword">var</span> <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span> = [arr2[<span class="hljs-number">0</span>]];<br><span class="hljs-keyword">for</span>(let i=<span class="hljs-number">1</span>; i &lt; arr2.length; i++){<br>    <span class="hljs-keyword">if</span>(arr2[i] !== res[res.length<span class="hljs-number">-1</span>]){<br>        <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>.push(arr2[i]);<br>    }<br>}<br>console.log(<span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>);</code></pre>
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
