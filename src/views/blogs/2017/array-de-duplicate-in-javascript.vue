<template>
    <div class="blog-container">
        <BlogHeader
            title="Javascript中数组去重的5种方法" subTitle=""
            date="2017-06-22" :tags="['算法']">
        </BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <p>
                    假设去重的数组是这样的：<code>let arr = [1,2,3,3,4,5,5];</code>。<br>下面介绍5中去重的方法。
                </p>

                <h2>es6的Set对象</h2>
                <p>
                    Set的定义：集合(Set)对象允许你存储任意类型的唯一值(不能重复)，无论它是原始值或者是对象引用。
                    <pre class="hljs haxe"><code class="">let <span class="hljs-keyword">set</span> = <span class="hljs-keyword">new</span> <span class="hljs-type">Set</span>(arr);<br>let <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span> = <span class="hljs-keyword">Array</span>.from(<span class="hljs-keyword">set</span>);<br>console.log(<span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>);</code></pre>
                </p>

                <h2>es5的indexOf方法</h2>
                <p>
                    <pre class="hljs haxe"><code class=""><span class="hljs-keyword">var</span> <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span> = [arr[<span class="hljs-number">0</span>]];<br><span class="hljs-keyword">for</span>(let i=<span class="hljs-number">1</span>; i&lt; arr.length; i++) {<br>    <span class="hljs-keyword">if</span>(<span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>.indexOf(arr[i]) == <span class="hljs-number">-1</span>){<br>        <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>.push(arr[i]);<br>    }<br>}<br>console.log(<span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>);</code></pre>
                </p>

                <h2>对象属性</h2>
                <p>
                    每次取出原数组的元素，然后再对象中访问这个属性，如果存在就说明重复
                    <pre class="hljs haxe"><code class=""><span class="hljs-keyword">var</span> <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span> = [];<br><span class="hljs-keyword">var</span> json = {};<br><span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i=<span class="hljs-number">0</span>; i&lt;arr.length; i++){<br>    <span class="hljs-keyword">if</span>(!json[arr[i]]){<br>        <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>.push(arr[i]);<br>        json[arr[i]] = <span class="hljs-number">1</span>;<br>    }<br>}<br>console.log(<span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>);</code></pre>
                </p>

                <h2>排序去重</h2>
                <p>
                    先将原数组排序，在与相邻的进行比较，如果不同则存入新数组
                    <pre class="hljs haxe"><code class=""><span class="hljs-keyword">var</span> arr2 = arr.sort();<br><span class="hljs-keyword">var</span> <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span> = [arr2[<span class="hljs-number">0</span>]];<br><span class="hljs-keyword">for</span>(let i=<span class="hljs-number">1</span>; i &lt; arr2.length; i++){<br>    <span class="hljs-keyword">if</span>(arr2[i] !== res[res.length<span class="hljs-number">-1</span>]){<br>        <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>.push(arr2[i]);<br>    }<br>}<br>console.log(<span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>);</code></pre>
                </p>

                <h2>原始去重</h2>
                <p>
                    定义一个新数组，并存放原数组的第一个元素，然后将原数组一一和新数组的元素对比，若不同则存放在新数组中
                    <pre class="hljs haxe"><code class="">let <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span> = [arr[<span class="hljs-number">0</span>]];<br><span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i=<span class="hljs-number">1</span>; i &lt; arr.length; i++){<br>    <span class="hljs-keyword">var</span> repeat = <span class="hljs-literal">false</span>;<br>    <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> j=<span class="hljs-number">0</span>; j &lt; <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>.length; j++){<br>        <span class="hljs-keyword">if</span>(arr[i] == <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>[j]){<br>            repeat = <span class="hljs-literal">true</span>;<br>            <span class="hljs-keyword">break</span>;<br>        }<br>    }<br><br>    <span class="hljs-keyword">if</span>(!repeat){<br>       <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>.push(arr[i]);<br>    }<br>}<br>console.log(<span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>);</code></pre>
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
