<template>
    <div class="blog-container">
        <BlogHeader
            title="什么时候 “不该” 用箭头函数" subTitle=""
            date="2017-09-12" :tags="['Javascript']">
        </BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>前言</h2>
                <p>
                    ES6中的箭头函数，改变了我们写代码的方式，使得JS的易用性得到了提升。但是最近，常会看到有同学问，某一段代码用了箭头函数后产生了问题，是不是箭头函数还不够完善？有哪些场景会发生问题？该如何解决呢？这，正是本文想要一起探讨的。
                </p>
                <p>首先，我们要明白一点。箭头函数的出现，是为了提升代码的易用性，但并非任何场景下都适用。也并不是一定要用箭头函数才能解决问题，因为箭头函数并不是万能的，不能用的时候，千万别硬往上套。</p>
                <p>接下来，将介绍几种不适合箭头函数的场景，并会提出可行的解决方案。</p>

                <h2>在对象上定义方法</h2>
                <p>
                    看下面这个例子：
                    <pre class="hljs javascript"><code class="">var test = {<br>  x: <span class="hljs-number">1</span>,<br>  output: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span> === <span class="hljs-built_in">window</span>); <span class="hljs-comment">// =&gt; true</span><br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.x); <span class="hljs-comment">// undefined</span><br>  }<br>};<br><span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span> === <span class="hljs-built_in">window</span>); <span class="hljs-comment">// =&gt; true</span><br>test.output();</code></pre>
                    this.x 打印出来是 undefined。为什么？接着打印this，发现竟然指向了window。
                </p>

                <p>
                    解析：output方法用了箭头函数，其内部的 this 指向的还是上下文window，所以this.x输出为undefined。<br>
                    解决办法：用es6的短语法，或者传统的函数表达式，所以：output 要这样写：
                    <pre class="hljs javascript"><code class="">output () {<br>    console.<span class="hljs-built_in">log</span>(<span class="hljs-keyword">this</span> === test); <span class="hljs-comment">// =&gt; true</span><br>    console.<span class="hljs-built_in">log</span>(<span class="hljs-keyword">this</span>.x); <span class="hljs-comment">// 1</span><br>}</code></pre>
                </p>

                <h2>定义原型方法</h2>
                <p>
                    同样的规则适用于原型方法的定义，使用箭头函数会导致运行时的执行上下文错误。
                    <pre class="hljs javascript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Cat</span>(<span class="hljs-params">name</span>) </span>{<br>    <span class="hljs-keyword">this</span>.name = name;<br>}<br><br>Cat.prototype.sayCatName = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span> === <span class="hljs-built_in">window</span>); <span class="hljs-comment">// =&gt; true</span><br>    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name;<br>};<br><br><span class="hljs-keyword">const</span> cat = <span class="hljs-keyword">new</span> Cat(<span class="hljs-string">'Mew'</span>);<br>cat.sayCatName(); <span class="hljs-comment">// =&gt; undefined</span></code></pre>
                    解决办法是：用回传统的函数表达式，像下面这样：
                    <pre class="hljs javascript"><code class="">Cat.prototype.sayCatName = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span> === cat); <span class="hljs-comment">// =&gt; true</span><br>    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name;<br>};</code></pre>
                    sayCatName 变回传统的函数表达式之后，被调用时的执行上下文就会指向新创建的 cat 实例。
                </p>

                <h2>结合动态上下文的回调函数</h2>
                <p>
                    当为一个DOM事件绑定回调函数后，触发回调函数时的this，需要指向当前发生事件的 DOM 节点，而动态上下文这个时候就非常有用。看下面这个例子：
                    <pre class="hljs javascript"><code class="">var button = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">'myButton'</span>);<br>button.addEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {<br>  <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span> === <span class="hljs-built_in">window</span>); <span class="hljs-comment">// =&gt; true</span><br>  <span class="hljs-keyword">this</span>.innerHTML = <span class="hljs-string">'Clicked button'</span>;<br>});</code></pre>
                    解析：给dom元素绑定click事件，用箭头函数去触发一个处理函数，当回调发生时，浏览器会用button的上下文去调用处理函数，也就是说这时的this还是指向window，所以最后的this.innerHTML 等价于 window.innerHTML。
                </p>
                <p>
                    解决办法：用函数表达式代替箭头函数。像这样：
                    <pre class="hljs javascript"><code class="">button.addEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span> === button); <span class="hljs-comment">// =&gt; true</span><br>    <span class="hljs-keyword">this</span>.innerHTML = <span class="hljs-string">'Clicked button'</span>;<br>});</code></pre>
                </p>

                <h2>调用构造器</h2>
                <p>
                    箭头构造函数的执行并没有任何意义，并且是有歧义的。实际上 JS 会禁止你这么做，如果你这么做了，它就会抛出异常。看下面这个例子：
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">var</span> Message = <span class="hljs-function">(<span class="hljs-params">text</span>) =&gt;</span> {<br>  <span class="hljs-keyword">this</span>.text = text;<br>};<br><span class="hljs-comment">// Uncaught TypeError: Message is not a constructor</span><br><span class="hljs-keyword">var</span> helloMessage = <span class="hljs-keyword">new</span> Message(<span class="hljs-string">'Hello World!’);</span></code></pre>
                    解析：一个箭头函数不能作为构造器。 JavaScript 会通过抛出异常的方式进行隐式地预防。
                </p>

                <p>解决方法：用函数表达式代替箭头函数。</p>

                <h2>总结</h2>
                <p>
                    箭头函数无疑是 ES6 带来的重大改进，在正确的场合使用箭头函数，能让代码变得更加简洁短小。但在需要动态上下文的场景中使用箭头函数你要格外的小心，这些场景包括：定义对象方法、定义原型方法、定义事件回调函数、定义构造函数。
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
