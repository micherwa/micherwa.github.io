<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>概念</h2>
                <p>
                    DOM事件流：将事件分为三个阶段：<code>捕获阶段</code>、<code>目标阶段</code>、<code>冒泡阶段</code>。先调用捕获阶段的处理函数，其次调用目标阶段的处理函数，最后调用冒泡阶段的处理函数。
                </p>
                <p>
                    同一dom元素可以注册多个同种事件，事件有捕获和冒泡的概念。通过addEventListener和removeEventListener管理。
                </p>
                <p>
                    <code>注册事件</code>(addEventListener) 有三个参数，分别为："事件名称", "事件回调", "捕获/冒泡"(布尔型，true代表捕获事件，false代表冒泡事件)。<br>
                    示意图：<br>
                    <img src="~@/assets/blog/bg-20170821-01.png">
                    意思就是说，某个元素触发了某个事件，最先得到通知的是window，然后是document，依次而入，直到真正触发事件的那个元素(目标元素)为止，这个过程就是<code>捕获</code>。接下来，事件会从目标元素开始起泡，再依次而出，直到window对象为止，这个过程就是<code>冒泡</code>。
                </p>

                <p>
                    <code>解除事件</code>(removeEventListener) 也有三个参数，分别为："事件名称", "事件回调", "捕获/冒泡"(布尔值，这个必须和注册事件时的类型一致)。<br>
                    要想注册过的事件能够被解除，必须将回调函数保存起来，否则无法解除。
                    例如这样：
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">var</span> btn = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"test"</span>);<br><br><span class="hljs-comment">//将回调存储在变量中</span><br><span class="hljs-keyword">var</span> fn = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>)</span>{<br>    alert(<span class="hljs-string">"ok"</span>);<br>};<br><br><span class="hljs-comment">//绑定</span><br>btn.addEventListener(<span class="hljs-string">"click"</span>, fn, <span class="hljs-literal">false</span>);<br><br><span class="hljs-comment">//解除</span><br>btn.removeEventListener(<span class="hljs-string">"click"</span>, fn, <span class="hljs-literal">false</span>);</code></pre>
                </p>

                <h2>关于捕获和冒泡的5点概念</h2>

                <h4>1.在外层div注册事件，点击内层div来触发事件时：捕获事件总是要比冒泡事件先触发(与代码顺序无关)</h4>
                <p>
                    假设有这样的html结构：
                    <pre class="hljs applescript"><code class="">&lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">id</span>=<span class="hljs-string">"test"</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"test"</span>&gt;<br>   &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">id</span>=<span class="hljs-string">"testInner"</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"test-inner"</span>&gt;&lt;/<span class="hljs-keyword">div</span>&gt;<br>&lt;/<span class="hljs-keyword">div</span>&gt;</code></pre>
                    然后我们在外层div上注册两个click事件，分别是捕获事件和冒泡事件，代码如下：
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">var</span> btn = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"test"</span>);<br> <br><span class="hljs-comment">//捕获事件</span><br>btn.addEventListener(<span class="hljs-string">"click"</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>)</span>{<br>    alert(<span class="hljs-string">"ok1"</span>);<br>}, <span class="hljs-literal">true</span>);<br> <br><span class="hljs-comment">//冒泡事件</span><br>btn.addEventListener(<span class="hljs-string">"click"</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>)</span>{<br>    alert(<span class="hljs-string">"ok"</span>);<br>}, <span class="hljs-literal">false</span>);</code></pre>
                    最后，<code>点击内层的div</code>，先弹出ok1，后弹出ok。<br>
                    结合上边的原理图，外层div相当于图中的body，内层div相当于图中最下边的div，证明了捕获事件先执行，然后执行冒泡事件。
                </p>
                <p>
                    为什么要强调点击内层的div呢？<br>
                    因为只有当真正触发事件的dom元素是内层的时候，外层dom元素才有机会模拟捕获事件和冒泡事件。
                </p>

                <h4>2.当在触发事件的dom元素上注册事件时，哪个先注册，就先执行哪个</h4>
                <p>
                    html结构同上，js代码如下：
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">var</span> btnInner = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"testInner"</span>);<br><br><span class="hljs-comment">//冒泡事件</span><br>btnInner.addEventListener(<span class="hljs-string">"click"</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>)</span>{<br>    alert(<span class="hljs-string">"ok"</span>);<br>}, <span class="hljs-literal">false</span>);<br> <br><span class="hljs-comment">//捕获事件</span><br>btnInner.addEventListener(<span class="hljs-string">"click"</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>)</span>{<br>    alert(<span class="hljs-string">"ok1"</span>);<br>}, <span class="hljs-literal">true</span>);</code></pre>
                    本例中，冒泡事件先注册，所以先执行。
                </p>

                <h4>3.当外层div和内层div同时注册了捕获事件时，点击内层div时，外层div的事件一定会先触发。</h4>
                <p>
                    代码如下：
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">var</span> btn = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"test"</span>);<br><span class="hljs-keyword">var</span> btnInner = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"testInner"</span>);<br><br>btnInner.addEventListener(<span class="hljs-string">"click"</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>)</span>{<br>    alert(<span class="hljs-string">"ok"</span>);<br>}, <span class="hljs-literal">true</span>);<br><br>btn.addEventListener(<span class="hljs-string">"click"</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>)</span>{<br>    alert(<span class="hljs-string">"ok1"</span>);<br>}, <span class="hljs-literal">true</span>);</code></pre>
                    结果是先弹出ok1。
                </p>

                <h4>4.同理，当外层div和内层div都同时注册了冒泡事件，点击内层div时，一定是内层div事件先触发。</h4>

                <h4>5.阻止事件冒泡</h4>
                <p>
                    但是明明点击的是内层div，但是外层div的事件也触发了，这是不是我想要的。<br>事件触发时，会默认传入一个event对象，这个event对象上有一个方法：stopPropagation。<br>通过此方法，可以阻止冒泡，让外层div接收不到事件，自然也就不会触发了。
                    <pre class="hljs javascript"><code class="">btnInner.addEventListener(<span class="hljs-string">"click"</span>, <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(e)</span></span>{<br>    <span class="hljs-comment">//阻止冒泡</span><br>    e.stopPropagation();<br>    alert(<span class="hljs-string">"ok"</span>);<br>}, <span class="hljs-literal">false</span>);</code></pre>
                </p>

                <h2>关于事件代理</h2>
                <p>
                    经常会碰到要监听列表中多项li的情形，假设我们有一个列表如下：
                    <pre class="hljs xml"><code class=""><span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"list"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"item1"</span>&gt;</span>item1<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"item2"</span>&gt;</span>item2<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"item3"</span>&gt;</span>item3<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"item4"</span>&gt;</span>item4<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span></code></pre>
                    如果我们要实现以下功能：当鼠标点击某一li时，输出该li的内容，我们通常的写法是这样的：
                    <pre class="hljs javascript"><code class=""><span class="hljs-built_in">window</span>.onload=<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{<br>    <span class="hljs-keyword">var</span> ulNode = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"list"</span>);<br>    <span class="hljs-keyword">var</span> liNodes = ulNode.children;<br>    <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i=<span class="hljs-number">0</span>; i&lt;liNodes.length; i++){<br>        liNodes[i].addEventListener(<span class="hljs-string">'click'</span>,<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>)</span>{<br>            <span class="hljs-built_in">console</span>.log(e.target.innerHTML);<br>        }, <span class="hljs-literal">false</span>);<br>    }<br>}</code></pre>
                    在传统的事件处理中，你按照需要为每一个元素添加或者是删除事件处理器。<br>然而，事件处理器将有可能导致内存泄露或者是性能下降——你用得越多这种风险就越大。JavaScript的事件代理，则是一种简单的技巧。
                </p>

                <h4>事件代理机制</h4>
                <p>
                    事件代理用到了两个在JavaSciprt事件中两个特性：事件冒泡以及目标元素。使用事件代理，我们可以把事件处理器添加到一个元素上，等待一个事件从它的子级元素里冒泡上来，并且可以得知这个事件是从哪个元素开始的。
                </p>
                <p>
                    改进后的代码如下：
                    <pre class="hljs javascript"><code class=""><span class="hljs-built_in">window</span>.onload=<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{<br>    <span class="hljs-keyword">var</span> ulNode=<span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"list"</span>);<br>    ulNode.addEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>) </span>{<br>        <span class="hljs-comment">/*判断目标事件是否为li*/</span><br>        <span class="hljs-keyword">if</span>(e.target &amp;&amp; e.target.nodeName.toUpperCase()==<span class="hljs-string">"LI"</span>){<br>            <span class="hljs-built_in">console</span>.log(e.target.innerHTML);<br>        }<br>    }, <span class="hljs-literal">false</span>);<br>};</code></pre>
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
