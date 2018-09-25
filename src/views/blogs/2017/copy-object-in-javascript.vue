<template>
    <div class="blog-container">
        <BlogHeader
            title="对象的浅拷贝与深拷贝" subTitle=""
            date="2017-08-15" :tags="['Javascript']">
        </BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>基本概念</h2>
                <p>
                    <ul>
                        <li>深拷贝和浅拷贝只针对像Object, Array这样的<code>引用类型数据</code></li>
                        <li>浅拷贝是对对象引用地址进行拷贝，拷贝后，改其中一个对象的属性，则源对象的属性也会改变</li>
                        <li>深拷贝会新开一个引用地址进行拷贝，拷贝后，修改一个对象的属性，不会改变源对象的属性</li>
                    </ul>
                </p>

                <h2>一个简单的浅拷贝的例子</h2>
                <p>
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">const</span> obj = {a:<span class="hljs-number">1</span>, b:<span class="hljs-number">2</span>};<br><span class="hljs-keyword">const</span> obj2 = obj;<br>obj2.a = <span class="hljs-number">3</span>;<br>console.<span class="hljs-built_in">log</span>(obj.a); <span class="hljs-comment">// 3</span></code></pre>
                    很多情况下，这不是我们想要的。那么深拷贝会怎么做？
                </p>

                <h2>修改浅拷贝的例子</h2>
                <p>
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">const</span> obj = <span class="hljs-comment">{a:1, b:2}</span>;<br><span class="hljs-keyword">const</span> obj2 = <span class="hljs-keyword">Object</span>.assign(<span class="hljs-comment">{}</span>, obj);<br>obj2.a = <span class="hljs-number">3</span>;<br>console.log(obj.a); <span class="hljs-comment">// 1</span><br></code></pre>Ok，改变了obj2的a属性，但obj的a并没有发生变化，这是我们想要的。<br>
                    可是这样的深拷贝，还有瑕疵，并没有彻底解决问题。
                </p>

                <h2>进一步改进深拷贝</h2>
                <p>
                    看下面这个例子：
                    <pre class="hljs javascript"><code class="">const arr = [{a:<span class="hljs-type">1</span>,b:<span class="hljs-type">2</span>}, {a:<span class="hljs-type">3</span>,b:<span class="hljs-type">4</span>}];<br>const <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span> = [].concat(arr);<br><br><span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>.length = <span class="hljs-number">1</span>; <span class="hljs-comment">// 为了方便区分，只保留新数组的第一个元素</span><br>console.log(<span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>); <span class="hljs-comment">// [{a:1,b:2}]</span><br>console.log(arr); <span class="hljs-comment">// [{a:1,b:2},{a:3,b:4}]</span><br><br><span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>[<span class="hljs-number">0</span>].a = <span class="hljs-number">123</span>; <span class="hljs-comment">// 修改newArr中第一个元素的a</span><br>console.log(arr[<span class="hljs-number">0</span>]); <span class="hljs-comment">// {a: 123, b: 2}，竟然把arr的第一个元素的a也改了</span></code></pre>
                    这不是我想要的...可是，为什么会这样？<br><br>
                    解析：<br>
                    Object的assign方法、Array的concat和slice等方法，都存在一个问题。<br>
                    <code>只会拷贝第一层的值，对于第一层的值都是深拷贝，而到第二层的时候就是 复制引用。</code>
                </p>

                <p>
                    所以，自己封装个深拷贝的方法：
                    <pre class="hljs javascript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">deepClone</span></span>(obj){<br>    <span class="hljs-keyword">if</span>(!obj &amp;&amp; typeof obj !== <span class="hljs-string">'object'</span>){<br>        <span class="hljs-keyword">return</span>;<br>    }<br>    <span class="hljs-keyword">var</span> <span class="hljs-keyword">new</span><span class="hljs-type">Obj</span>= toString.call(obj) === <span class="hljs-string">'[object Array]'</span> ? [] : <span class="hljs-type"></span>{};<br>    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> key <span class="hljs-keyword">in</span> obj) {<br>        <span class="hljs-keyword">if</span> (obj[key] &amp;&amp; typeof obj[key] === <span class="hljs-string">'object'</span>) {<br>            <span class="hljs-keyword">new</span><span class="hljs-type">Obj</span>[key] = deepClone(obj[key]);<br>        } <span class="hljs-keyword">else</span> {<br>            <span class="hljs-keyword">new</span><span class="hljs-type">Obj</span>[key] = obj[key];<br>        }<br>    }<br>    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span><span class="hljs-type">Obj</span>;<br>}</code></pre>
                </p>

                <p>
                    再试试看：
                    <pre class="hljs javascript"><code class="">let arr = [{a:<span class="hljs-type">1</span>,b:<span class="hljs-type">2</span>}, {a:<span class="hljs-type">3</span>,b:<span class="hljs-type">4</span>}];<br>let <span class="hljs-keyword">new</span><span class="hljs-type">Arr</span> = deepClone(arr);<br><br><span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>.length = <span class="hljs-number">1</span>; <span class="hljs-comment">// 为了方便区分，只保留新数组的第一个元素</span><br>console.log(<span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>); <span class="hljs-comment">// [{a:1,b:2}]</span><br>console.log(arr); <span class="hljs-comment">// [{a:1,b:2},{a:3,b:4}]</span><br><br><span class="hljs-keyword">new</span><span class="hljs-type">Arr</span>[<span class="hljs-number">0</span>].a = <span class="hljs-number">123</span>; <span class="hljs-comment">// 修改newArr中第一个元素的a</span><br>console.log(arr[<span class="hljs-number">0</span>]); <span class="hljs-comment">// {a:1, b:2}</span></code></pre>
                    ok，这下搞定了。
                </p>

                <h2>更简单粗暴的办法</h2>
                <p>
                    把array用json转成string，再转回来。像这样：
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">let</span> newArr2 = <span class="hljs-built_in">JSON</span>.parse(<span class="hljs-built_in">JSON</span>.stringify(arr));<br><span class="hljs-built_in">console</span>.log(arr[<span class="hljs-number">0</span>]); <span class="hljs-comment">// {a:1,b:2}</span><br>newArr2[<span class="hljs-number">0</span>].a = <span class="hljs-number">123</span>;<br><span class="hljs-built_in">console</span>.log(arr[<span class="hljs-number">0</span>]); <span class="hljs-comment">// {a:1,b:2}</span></code></pre>
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
