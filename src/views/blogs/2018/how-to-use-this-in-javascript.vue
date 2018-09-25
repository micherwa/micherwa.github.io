<template>
    <div class="blog-container">
        <BlogHeader
            title="this的原理以及用法" subTitle=""
            date="2018-06-20" :tags="['Javascript']">
        </BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>this是什么？</h2>
                <p>
                    对于this，我们的大脑中总会用“复杂”和“混乱”等词汇来形容它。<br>
                    因为我们对于它到底指向什么而感到困扰，看起来，它就是种彻头彻尾的魔法。
                </p>
                <p>
                    this，不是编写时绑定，而是在运行时绑定。它依赖于函数调用的上下文条件，与函数被调用的方式有关，而与函数声明的位置无关。
                </p>
                <p>
                    实际上，它是在函数被调用时建立的一个绑定，它指向什么，则完全是由函数被调用的调用点来决定的。所以，随着函数使用场合的不同，this的值会发生变化。但是有一个总的原则：那就是<strong>this 总会指向，调用函数的那个对象</strong>。
                </p>

                <h2>为什么要用this？</h2>
                <p>
                    先看个例子：
                    <pre class="hljs actionscript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">identify</span><span class="hljs-params">()</span> </span>{<br>    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.name.toUpperCase();<br>}<br><br><span class="hljs-keyword">var</span> me = {<br>    name: <span class="hljs-string">"Kyle"</span><br>};<br><br><span class="hljs-keyword">var</span> you = {<br>    name: <span class="hljs-string">"Reader"</span><br>};<br><br>identify.call( me ); <span class="hljs-comment">// KYLE</span><br>identify.call( you ); <span class="hljs-comment">// READER</span></code></pre>
                    例子中 call 的用法，可参考 <router-link :to="{ name: 'call-and-apply-in-javascript' }">这篇文章</router-link>。它在这儿的主要作用是，改变this的执行环境。
                </p>

                <p>
                    一开始我们可能太不明白为何这样输出，那不如先换个思路。与使用this相反，我们可以明确地将环境对象，传递给identify()。像这样：
                    <pre class="hljs actionscript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">identify</span><span class="hljs-params">(context)</span> </span>{<br>    <span class="hljs-keyword">return</span> context.name.toUpperCase();<br>}<br>identify( you ); <span class="hljs-comment">// READER</span></code></pre>
                </p>

                <p>
                    结果是一样的，但是this机制，可以提供一种更优雅的方式来隐含地“传递”一个对象引用，导致更加干净的API设计和更容易的复用。当模式越发复杂时，将执行环境作为一个明确参数传递给函数，通常比传递this执行环境要乱。
                </p>

                <h2>this的原理</h2>
                <p>
                    很多教科书会告诉你，this指的是函数运行时所在的环境。但是，为什么会这样？也就是说，函数的运行环境到底是怎么决定的？
                </p>
                <p>理解 this 的原理，有助于帮我们更好地理解它的用法。JavaScript 语言之所以有this的设计，<strong>跟内存里面的数据结构有关系</strong>。</p>

                <p>
                    <pre class="hljs javascript"><code style="word-break: break-word; white-space: initial;" class=""><span class="hljs-attribute">var obj</span> = { foo:  5 };</code></pre>
                    上面的代码将一个对象赋值给变量 obj。JavaScript 引擎会先在内存里面，生成一个对象 { foo: 5 }，然后把这个对象的<strong>内存地址</strong>赋值给变量 obj。
                </p>

                <p>
                    也就是说，变量 obj 其实只是一个地址。后面如果要读取 obj.foo，引擎先从 obj 拿到内存地址，然后再从该地址读出原始的对象，返回它的 foo 属性。
                </p>

                <p>
                    这样的结构很清晰，但如果属性的值是一个函数，又会怎么样呢？比如这样：
                    <pre class="hljs actionscript"><code style="word-break: break-word; white-space: initial;" class=""><span class="hljs-keyword">var</span> obj = { foo: <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">()</span> </span>{} };</code></pre>
                </p>

                <p>
                    这时，引擎会将函数单独保存在内存中，然后再将<strong>函数的地址</strong>赋值给 foo 属性的 value 属性。
                    <img src="~@/assets/blog/bg-20180620-01.png">
                    可以看到，函数是一个单独的值(以地址形式赋值)，所以才可以在不同的环境中执行。
                </p>

                <p>
                    又因为，JavaScript 允许在函数体内部，引用当前环境的其他变量。所以需要有一种机制，能够在函数体内部获得当前的运行环境（context）。所以，this就出现了，它的设计目的就是<strong>在函数体内部，指代函数当前的运行环境</strong>。
                </p>

                <p>
                    看下面这个例子：
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">var</span> f = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{<br>  <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.x);<br>}<br><br><span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>;<br><span class="hljs-keyword">var</span> obj = {<br>  <span class="hljs-attr">f</span>: f,<br>  <span class="hljs-attr">x</span>: <span class="hljs-number">2</span>,<br>};<br><br><span class="hljs-comment">// 单独执行</span><br>f() <span class="hljs-comment">// 1</span><br><br><span class="hljs-comment">// obj 环境执行</span><br>obj.f() <span class="hljs-comment">// 2</span></code></pre>
                </p>
                <p>
                    上面代码中，函数f在全局环境执行，this.x 指向全局环境的 x。<br>
                    在 obj 环境执行，this.x 指向 obj.x。
                </p>

                <h2>this的用法</h2>
                <p>
                    在理解了this的原理之后，接下来详细讨论this的用法，分下面四种情况。
                </p>

                <h4>1、纯粹的函数调用</h4>
                <p>
                    这是函数的最通常用法，属于全局性调用，因此this就代表全局对象Global。
                    <pre class="hljs actionscript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span><span class="hljs-params">()</span></span>{<br>　　<span class="hljs-keyword">this</span>.x = <span class="hljs-number">1</span>;<br>　　<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.x);<br>}<br>test(); <span class="hljs-comment">// 1</span></code></pre>
                </p>

                <h4>2、作为对象方法的调用</h4>
                <p>
                    函数还可以作为某个对象的方法调用，这时this就指这个上级对象。
                    <pre class="hljs javascript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>)</span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.x);<br>}<br><span class="hljs-keyword">var</span> o = {};<br>o.x = <span class="hljs-number">1</span>;<br>o.m = test;<br>o.m(); <span class="hljs-comment">// 1</span></code></pre>
                </p>

                <h4>3、作为构造函数调用</h4>
                <p>
                    所谓构造函数，就是通过这个函数生成一个新对象（object）。这时，this就指这个新对象。
                    <pre class="hljs javascript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>)</span>{<br>    <span class="hljs-keyword">this</span>.x = <span class="hljs-number">1</span>;<br>}<br><span class="hljs-keyword">var</span> o = <span class="hljs-keyword">new</span> test();<br><span class="hljs-built_in">console</span>.log(o.x); <span class="hljs-comment">// 1</span></code></pre>
                </p>

                <h4>4、apply调用</h4>
                <p>
                    apply() 是函数对象的一个方法，它的作用是改变函数的调用对象，它的第一个参数就表示改变后的调用这个函数的对象。因此，this 指的就是这第一个参数。
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">var</span> x = <span class="hljs-number">0</span>;<br><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.x);<br>}<br><span class="hljs-keyword">var</span> o = {};<br>o.x = <span class="hljs-number">1</span>;<br>o.m = test;<br>o.m.apply(); <span class="hljs-comment">//0</span></code></pre>
                    apply() 的参数为空时，默认调用全局对象。因此，这时的运行结果为0，证明this指的是全局对象。
                </p>

                <h2>参考文献</h2>
                <p>
                    <ul>
                        <li>
                            <a href="https://github.com/getify/You-Dont-Know-JS/tree/master/this%20%26%20object%20prototypes" target="_blank">this 与对象原型</a>
                        </li>
                        <li>
                            <a href="http://www.ruanyifeng.com/blog/2018/06/javascript-this.html" target="_blank">JavaScript 的 this 原理</a>
                        </li>
                    </ul>
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
