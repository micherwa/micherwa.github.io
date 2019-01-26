<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>前言</h2>
                <p>这是前端面试题系列的第 5 篇，你可能错过了前面的篇章，可以在这里找到：</p>
                <ul>
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
                    面试中，我经常会问及 ES6 的知识点，因为平时工作中用得很多。当问到箭头函数时，不少候选人都会赞叹地说：箭头函数很好用，而且再也不用操心 this 的指向了。
                </p>

                <p>
                    我接着问：<strong>箭头函数是挺好用的，但是你有没有遇到过，不适合使用箭头函数的场景呢？</strong>
                </p>

                <p>
                    这时，能回答得上来的候选人就很少了。箭头函数在大多数情况下，是很好用的，但是为什么在有些场景，使用箭头函数后会产生问题？是不是箭头函数还不够完善？又有哪些场景会发生问题？该如何解决呢？这，正是本文想要一起探讨的。
                </p>

                <h2>箭头函数的写法</h2>
                <p>
                    为什么叫箭头函数( Arrow Function )？因为它的写法，看上去就是一个箭头：
                    <pre class="hljs dart"><code style="word-break: break-word; white-space: initial;" class=""><span class="hljs-keyword">const</span> multiply = <span class="hljs-built_in">num</span> =&gt; <span class="hljs-built_in">num</span> * <span class="hljs-built_in">num</span>;</code></pre>
                    它等价于：
                    <pre class="hljs actionscript"><code class=""><span class="hljs-keyword">const</span> multiply = <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">(num)</span> </span>{<br>    <span class="hljs-keyword">return</span> num * num;<br>};</code></pre>
                    此外，还可以传多个参数，以及可变参数。
                    <pre class="hljs typescript"><code class=""><span class="hljs-comment">// 多参数</span><br><span class="hljs-keyword">const</span> multiply = <span class="hljs-function">(<span class="hljs-params">num1, num2</span>) =&gt;</span> num1 * num2;<br><br><span class="hljs-comment">// 可变参数</span><br><span class="hljs-keyword">const</span> sum = <span class="hljs-function">(<span class="hljs-params">num1, num2, ...rest</span>) =&gt;</span> {<br>    <span class="hljs-keyword">let</span> result = num1 + num2;<br>    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; rest.length; i++) {<br>        result += rest[i];<br>    }<br>    <br>    <span class="hljs-keyword">return</span> result;<br>};</code></pre>
                    当有多条语句时，需要配上 <code>{...}</code> 和 <code>return</code>。
                </p>
                <p>
                    另外，如果返回的结果是对象，则需要配上 <code>()</code>，像下面这样：
                    <pre class="hljs go"><code style="word-break: break-word; white-space: initial;" class=""><span class="hljs-keyword">const</span> <span class="hljs-function"><span class="hljs-keyword">func</span> = <span class="hljs-params">val</span> =&gt; <span class="hljs-params">({ value: val })</span>;</span></code></pre>
                </p>
                <p>
                    从上述的写法来看，相较普通函数而言，箭头函数的确简便了很多，提升了我们代码的易用性。但它并非在任何场景下都适用，接下来，将会介绍几种不适合箭头函数的场景，并会提出可行的解决方案。
                </p>

                <h2>不适合的场景</h2>

                <h4>1、对象的方法</h4>
                <p>
                    看下面这个例子：
                    <pre class="hljs coffeescript"><code class="">const obj = {<br>    x: <span class="hljs-number">1</span>,<br>    print: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {<br>        <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span> === <span class="hljs-built_in">window</span>); <span class="hljs-regexp">//</span> =&gt; <span class="hljs-literal">true</span><br>        <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.x); <span class="hljs-regexp">//</span> <span class="hljs-literal">undefined</span><br>    }<br>};<br><br>obj.<span class="hljs-built_in">print</span>();</code></pre>
                    this.x 打印出来是 undefined。为什么？然后，我在上面加了一行，发现 this 指向了 window。
                </p>
                <p>
                    解析：print 方法用了箭头函数，其内部的 this 指向的还是上下文 window，上下文中并没有定义 x，所以 this.x 输出为 undefined。
                </p>
                <p>
                    解决办法：用 ES6 的短语法，或者传统的函数表达式都可以。所以，print 要这样写：
                    <pre class="hljs typescript"><code class="">print () {<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span> === test); <span class="hljs-comment">// =&gt; true</span><br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.x); <span class="hljs-comment">// 1</span><br>}</code></pre>
                </p>

                <h4>2、原型方法</h4>
                <p>
                    同样的规则也适用于原型方法的定义，使用箭头函数会导致运行时的执行上下文错误。
                    <pre class="hljs javascript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Cat</span> (<span class="hljs-params">name</span>) </span>{<br>    <span class="hljs-keyword">this</span>.name = name;<br>}<br><br>Cat.prototype.sayCatName = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span> === <span class="hljs-built_in">window</span>); <span class="hljs-comment">// =&gt; true</span><br>    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name;<br>};<br><br><span class="hljs-keyword">const</span> cat = <span class="hljs-keyword">new</span> Cat(<span class="hljs-string">'Miao'</span>);<br>cat.sayCatName(); <span class="hljs-comment">// =&gt; undefined</span></code></pre>
                    解决办法是：用回传统的函数表达式，像下面这样：
                    <pre class="hljs javascript"><code class="">Cat.prototype.sayCatName = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span> === cat); <span class="hljs-comment">// =&gt; true</span><br>    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name;<br>};</code></pre>
                    sayCatName 变回传统的函数表达式之后，被调用时的执行上下文就会指向新创建的 cat 实例。
                </p>

                <h4>3、事件的回调</h4>
                <p>
                    看下面这个例子：
                    <pre class="hljs typescript"><code class=""><span class="hljs-keyword">const</span> btn = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">'myButton'</span>);<br>btn.addEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {<br>  <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span> === <span class="hljs-built_in">window</span>); <span class="hljs-comment">// =&gt; true</span><br>  <span class="hljs-keyword">this</span>.innerHTML = <span class="hljs-string">'Clicked button'</span>;<br>});</code></pre>
                    这里会有问题，因为 this 指向了 window。
                </p>
                <p>
                    解析：当为一个 DOM 事件绑定回调函数后，触发回调函数时的 this，需要指向当前发生事件的 DOM 节点，也就是这里的 btn。当回调发生时，浏览器会用 btn 的上下文去调用处理函数。所以最后的 this.innerHTML 等价于 window.innerHTML，问题就在这里。
                </p>
                <p>
                    解决办法：用函数表达式代替箭头函数。像这样：
                    <pre class="hljs javascript"><code class="">btn.addEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span> === btn); <span class="hljs-comment">// =&gt; true</span><br>    <span class="hljs-keyword">this</span>.innerHTML = <span class="hljs-string">'Clicked button'</span>;<br>});</code></pre>
                </p>

                <p>
                    另外，在 react 中的事件回调，也经常会遇到类似的问题。
                    <pre class="hljs kotlin"><code class=""><span class="hljs-comment">// jsx render</span><br>&lt;Button onClick={<span class="hljs-keyword">this</span>.handleClickButton.bind(<span class="hljs-keyword">this</span>)}&gt;<br>    ...<br>&lt;/Button&gt;<br><br><span class="hljs-comment">// callback</span><br>handleClickButton () {<br>    ...<br>}</code></pre>
                    注意：这里 onClick 的回调函数，并非字符串，而是一个实实在在的函数。可以将 onClick 理解为一个中间变量，所以 react 在处理函数时的 this 指向就会丢失。
                </p>
                <p>
                    为了解决这个问题，我们需要为回调函数绑定 this，使得事件处理函数无论如何传递，this 都指向我们实例化的那个对象。
                </p>
                <p>
                    在这里，如果用箭头函数，可以这样改写：
                    <pre class="hljs typescript"><code class="">&lt;Button onClick={ <span class="hljs-function"><span class="hljs-params">event</span> =&gt;</span> <span class="hljs-keyword">this</span>.handleClickButton(event) }&gt;<br>    ...<br>&lt;/Button&gt;</code></pre>
                    箭头函数并没有自己的 this，所以事件处理函数的调用者并不受影响。
                </p>

                <h4>4、构造函数</h4>
                <p>
                    箭头函数不能通过 new 关键字调用。
                    <pre class="hljs typescript"><code class=""><span class="hljs-keyword">const</span> Message = <span class="hljs-function">(<span class="hljs-params">text</span>) =&gt;</span> {<br>    <span class="hljs-keyword">this</span>.text = text;<br>};<br><br><span class="hljs-keyword">var</span> helloMessage = <span class="hljs-keyword">new</span> Message(<span class="hljs-string">'Hello World!'</span>);<br><span class="hljs-comment">// Uncaught TypeError: Message is not a constructor</span></code></pre>
                    解析：从报错信息可以看出，箭头函数没有 constructor 方法，所以不能用作构造函数。 JavaScript 会通过抛出异常的方式，进行隐式地预防。
                </p>
                <p>
                    解决方法：用函数表达式代替箭头函数。
                </p>

                <h2>总结</h2>
                <p>
                    回顾 MDN 给出的解释：箭头函数表达式的语法比函数表达式更短，并且没有自己的this，arguments，super或 new.target。这些函数表达式更适用于那些本来需要匿名函数的地方，并且它们不能用作构造函数。
                </p>

                <p>
                    所以说，箭头函数无疑是 ES6 带来的重大改进，在正确的场合使用箭头函数，能让代码变得更加简洁短小。但箭头函数也不是万能的，不能用的时候，千万别硬往上套。比如，<strong>在需要动态上下文的场景中，使用箭头函数需要格外地小心，这些场景包括：对象的方法、原型方法、事件的回调、构造函数</strong>。并非一定要用箭头函数，才能解决问题。
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
