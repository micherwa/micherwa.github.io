<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <img src="~@/assets/blog/bg-20190228-01.jpg">

                <h2>前言</h2>

                <p>这是前端面试题系列的第 7 篇，你可能错过了前面的篇章，可以在这里找到：</p>
                <ul>
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
                    最近，小伙伴L 在温习 《JavaScript高级程序设计》中的 <code>事件</code> 这一章节时，产生了困惑。
                </p>

                <p>
                    他问了我这样几个问题：
                    <ul>
                        <li>
                            了解事件流的顺序，对日常的工作有什么帮助么？
                        </li>
                        <li>
                            在 vue 的文档中，有一个修饰符 <strong>native</strong> ，把它用 <code>.</code> 的形式 连结在事件之后，就可以监听原生事件了。它的背后有什么原理？
                        </li>
                        <li>
                            事件的 event 对象中，有好多的属性和方法，该如何使用？
                        </li>
                    </ul>

                    浏览器中的事件机制，也经常在面试中被提及。所以这回，我们共同探讨了这些问题，并最终整理成文，希望帮到有需要的同学。
                </p>

                <h2>事件流的概念</h2>

                <p>
                    先从概念说起，DOM 事件流分为三个阶段：<code>捕获阶段</code>、<code>目标阶段</code>、<code>冒泡阶段</code>。先调用捕获阶段的处理函数，其次调用目标阶段的处理函数，最后调用冒泡阶段的处理函数。
                    <img src="~@/assets/blog/bg-20190228-02.png">
                </p>

                <p>
                    网景公司提出了 <code>事件捕获</code>的事件流。这就好比采矿的小游戏，每次都会从地面开始一路往下，抛出抓斗，捕获矿石。在上图中就是，某个 div 元素触发了某个事件，最先得到通知的是 window，然后是 document，依次往下，直到真正触发事件的那个目标元素 div 为止。
                </p>

                <p>
                    而 <code>事件冒泡</code> 则是由微软提出的，与之顺序相反。还是刚才的采矿小游戏，命中目标后，抓斗再沿路收回，直到冒出地面。在上图中就是，事件会从目标元素 div 开始依次往上，直到 window 对象为止。
                </p>

                <p>
                    w3c 为了制定统一的标准，采取了折中的方式：<strong>先捕获在冒泡</strong>。同一个 DOM 元素可以注册多个同类型的事件，通过 addEventListener 和 removeEventListener 进行管理。addEventListener 的第三个参数，就是为了捕获和冒泡准备的。
                </p>

                <p>
                    <code>注册事件</code>(addEventListener) 有三个参数，分别为："事件名称", "事件回调", "捕获/冒泡"(布尔型，true代表捕获事件，false代表冒泡事件)。
                    <pre class="hljs scala"><code style="word-break: break-word; white-space: initial;" class="focus">target.addEventListener(<span class="hljs-class"><span class="hljs-keyword">type</span>, <span class="hljs-title">listener</span>[, useCapture])</span>;</code></pre>
                    <ul>
                        <li>type 表示事件类型的字符串。</li>
                        <li>
                            listener 是一个实现了 EventListener 接口的对象，或者是一个函数。当所监听的事件类型触发时，会接收到一个事件通知对象（实现了 Event 接口的对象）。
                        </li>
                        <li>
                            capture 表示 listener 会在该类型的事件捕获阶段，传播到该 EventTarget 时触发，它是一个 Boolean 值。
                        </li>
                    </ul>
                </p>

                <p>
                    <code>解除事件</code>(removeEventListener) 也有三个参数，分别为："事件名称", "事件回调", "捕获/冒泡"(Boolean 值，这个必须和注册事件时的类型一致)。
                    <pre class="hljs scala"><code style="word-break: break-word; white-space: initial;" class="focus">target.removeEventListener(<span class="hljs-class"><span class="hljs-keyword">type</span>, <span class="hljs-title">listener</span>[, useCapture])</span>;</code></pre>
                    要想注册过的事件能够被解除，必须将回调函数保存起来，否则无法解除。例如这样：
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">const</span> btn = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"test"</span>);<br><br><span class="hljs-comment">//将回调存储在变量中</span><br><span class="hljs-keyword">const</span> fn = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>)</span>{<br>    alert(<span class="hljs-string">"ok"</span>);<br>};<br><br><span class="hljs-comment">//绑定</span><br>btn.addEventListener(<span class="hljs-string">"click"</span>, fn, <span class="hljs-literal">false</span>);<br><br><span class="hljs-comment">//解除</span><br>btn.removeEventListener(<span class="hljs-string">"click"</span>, fn, <span class="hljs-literal">false</span>);</code></pre>
                </p>

                <h2>事件捕获和冒泡的5个注意点</h2>

                <p>
                    当有多层交互嵌套时，事件捕获和冒泡的先后顺序，似乎不是那么好理解。接下来，将分 5 种情况讨论它们的顺序，以及如何规避意外情况的发生。
                </p>

                <h4>
                    1.在外层 div 注册事件，点击内层 div 来触发事件时，捕获事件总是要比冒泡事件先触发(与代码顺序无关)
                </h4>
                <p>
                    假设，有这样的 html 结构：
                    <pre class="hljs applescript"><code class="">&lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">id</span>=<span class="hljs-string">"test"</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"test"</span>&gt;<br>   &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">id</span>=<span class="hljs-string">"testInner"</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"test-inner"</span>&gt;&lt;/<span class="hljs-keyword">div</span>&gt;<br>&lt;/<span class="hljs-keyword">div</span>&gt;</code></pre>
                    然后，我们在外层 div 上注册两个 click 事件，分别是捕获事件和冒泡事件，代码如下：
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">const</span> btn = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"test"</span>);<br> <br><span class="hljs-comment">//捕获事件</span><br>btn.addEventListener(<span class="hljs-string">"click"</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>)</span>{<br>    alert(<span class="hljs-string">"capture is ok"</span>);<br>}, <span class="hljs-literal">true</span>);<br> <br><span class="hljs-comment">//冒泡事件</span><br>btn.addEventListener(<span class="hljs-string">"click"</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>)</span>{<br>    alert(<span class="hljs-string">"bubble is ok"</span>);<br>}, <span class="hljs-literal">false</span>);</code></pre>
                    点击内层的 div，先弹出 <code>capture is ok</code>，后弹出 <code>bubble is ok</code>。只有当真正触发事件的 DOM 元素是内层的时候，外层 DOM 元素才有机会模拟捕获事件和冒泡事件。
                </p>

                <h4>2.当在触发事件的 DOM 元素上注册事件时，哪个先注册，就先执行哪个</h4>
                <p>
                    html 结构同上，js 代码如下：
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">const</span> btnInner = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"testInner"</span>);<br><br><span class="hljs-comment">//冒泡事件</span><br>btnInner.addEventListener(<span class="hljs-string">"click"</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>)</span>{<br>    alert(<span class="hljs-string">"bubble is ok"</span>);<br>}, <span class="hljs-literal">false</span>);<br> <br><span class="hljs-comment">//捕获事件</span><br>btnInner.addEventListener(<span class="hljs-string">"click"</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>)</span>{<br>    alert(<span class="hljs-string">"capture is ok"</span>);<br>}, <span class="hljs-literal">true</span>);</code></pre>
                    本例中，冒泡事件先注册，所以先执行。所以，点击内层 div，先弹出 <code>bubble is ok</code>，再弹出 <code>capture is ok</code>。
                </p>

                <h4>3.当外层 div 和内层 div 同时注册了捕获事件时，点击内层 div 时，外层 div 的事件一定会先触发</h4>
                <p>
                    js 代码如下：
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">const</span> btn = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"test"</span>);<br><span class="hljs-keyword">const</span> btnInner = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"testInner"</span>);<br><br>btnInner.addEventListener(<span class="hljs-string">"click"</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>)</span>{<br>    alert(<span class="hljs-string">"inner capture is ok"</span>);<br>}, <span class="hljs-literal">true</span>);<br><br>btn.addEventListener(<span class="hljs-string">"click"</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>)</span>{<br>    alert(<span class="hljs-string">"outer capture is ok"</span>);<br>}, <span class="hljs-literal">true</span>);</code></pre>
                    虽然外层 div 的事件注册在后面，但会先触发。所以，结果是先弹出 <code>outer capture is ok</code>，再弹出 <code>inner capture is ok</code>。
                </p>

                <h4>4.同理，当外层 div 和内层 div 都同时注册了冒泡事件，点击内层 div 时，一定是内层 div 事件先触发。</h4>
                <p>
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">const</span> btn = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"test"</span>);<br><span class="hljs-keyword">const</span> btnInner = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"testInner"</span>);<br><br>btn.addEventListener(<span class="hljs-string">"click"</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>)</span>{<br>    alert(<span class="hljs-string">"outer bubble is ok"</span>);<br>}, <span class="hljs-literal">false</span>);<br><br>btnInner.addEventListener(<span class="hljs-string">"click"</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>)</span>{<br>    alert(<span class="hljs-string">"inner bubble is ok"</span>);<br>}, <span class="hljs-literal">false</span>);</code></pre>
                    先弹出 <code>inner bubble is ok</code>，再弹出 <code>outer bubble is ok</code>。
                </p>

                <h4>5.阻止事件的派发</h4>
                <p>
                    通常情况下，我们都希望点击某个 div 时，就只触发自己的事件回调。比如，明明点击的是内层 div，但是外层 div 的事件也触发了，这是就不是我们想要的了。这时，就需要阻止事件的派发。
                </p>
                <p>
                    事件触发时，会默认传入一个 event 对象，这个 event 对象上有一个方法：<code>stopPropagation</code>。MDN 上的解释是：<strong>阻止 捕获 和 冒泡 阶段中，当前事件的进一步传播</strong>。所以，通过此方法，让外层 div 接收不到事件，自然也就不会触发了。
                    <pre class="hljs javascript"><code class="">btnInner.addEventListener(<span class="hljs-string">"click"</span>, <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(e)</span></span>{<br>    <span class="hljs-comment">//阻止冒泡</span><br>    e.stopPropagation();<br>    alert(<span class="hljs-string">"inner bubble is ok"</span>);<br>}, <span class="hljs-literal">false</span>);</code></pre>
                </p>

                <h2>事件代理</h2>
                <p>
                    我们经常会遇到，要监听列表中多项 li 的情况，假设我们有一个列表如下：
                    <pre class="hljs xml"><code class=""><span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"list"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"item1"</span>&gt;</span>item1<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"item2"</span>&gt;</span>item2<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"item3"</span>&gt;</span>item3<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"item4"</span>&gt;</span>item4<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span></code></pre>
                    如果我们要实现以下功能：当鼠标点击某一 li 时，输出该 li 的内容，我们通常的写法是这样的：
                    <pre class="hljs javascript"><code class=""><span class="hljs-built_in">window</span>.onload=<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{<br>    <span class="hljs-keyword">const</span> ulNode = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"list"</span>);<br>    <span class="hljs-keyword">const</span> liNodes = ulNode.children;<br>    <span class="hljs-keyword">for</span>(<span class="hljs-keyword">var</span> i=<span class="hljs-number">0</span>; i&lt;liNodes.length; i++){<br>        liNodes[i].addEventListener(<span class="hljs-string">'click'</span>,<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>)</span>{<br>            <span class="hljs-built_in">console</span>.log(e.target.innerHTML);<br>        }, <span class="hljs-literal">false</span>);<br>    }<br>}</code></pre>
                    在传统的事件处理中，我们可能会按照需要，为每一个元素添加或者删除事件处理器。然而，事件处理器将有可能导致内存泄露，或者性能下降，用得越多这种风险就越大。JavaScript 的事件代理，则是一种简单的技巧。
                </p>

                <h4>用法及原理</h4>
                <p>
                    事件代理，用到了在 JavaSciprt 事件中的两个特性：<code>事件冒泡</code> 和 <code>目标元素</code>。使用事件代理，我们可以把事件处理器添加到一个元素上，等待一个事件从它的子级元素里冒泡上来，并且可以得知这个事件是从哪个元素开始的。
                </p>
                <p>
                    改进后的 js 代码如下：
                    <pre class="hljs javascript"><code class=""><span class="hljs-built_in">window</span>.onload=<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{<br>    <span class="hljs-keyword">const</span> ulNode=<span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"list"</span>);<br>    ulNode.addEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>) </span>{<br>        <span class="hljs-comment">/*判断目标事件是否为li*/</span><br>        <span class="hljs-keyword">if</span>(e.target &amp;&amp; e.target.nodeName.toUpperCase()==<span class="hljs-string">"LI"</span>){<br>            <span class="hljs-built_in">console</span>.log(e.target.innerHTML);<br>        }<br>    }, <span class="hljs-literal">false</span>);<br>};</code></pre>
                </p>

                <h2>一些常用技巧</h2>
                <p>
                    回到文章开头的问题：了解事件流的顺序，对日常的工作有什么帮助呢？我总结了以下几个注意点。
                </p>

                <h4>1. 阻止默认事件</h4>
                <p>
                    比如 href 的链接跳转，submit 的表单提交等。可以在方法的最后，加上一行 <code>return false;</code>。它会阻止通过 on 的方式绑定的事件的默认事件。
                    <pre class="hljs actionscript"><code class="">ele.onclick = <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> </span>{<br>    ……<br>    <span class="hljs-comment">// 通过返回 false 值，阻止默认事件行为</span><br>    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;<br>}</code></pre>
                    另外，重写 onclick 会覆盖之前的属性，所以解绑事件可以这么写：
                    <pre class="hljs scala"><code class=""><span class="hljs-comment">// 解绑事件，将 onlick 属性设为 null 即可</span><br>ele.onclick = <span class="hljs-literal">null</span>;</code></pre>
                </p>

                <h4>2. stopPropagation 和 stopImmediatePropagation</h4>
                <p>
                    前面说过 stopPropagation 的定义是：终止事件在传播过程的捕获、目标处理或起泡阶段进一步传播。事件不再被分派到其他节点上。
                    <pre class="hljs actionscript"><code class=""><span class="hljs-comment">// 事件捕获到 ele 元素后，就不再向下传播了</span><br>ele.addEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">(event)</span> </span>{<br>  event.stopPropagation();<br>}, <span class="hljs-literal">true</span>);<br><br><span class="hljs-comment">// 事件冒泡到 ele 元素后，就不再向上传播了</span><br>ele.addEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-params">(event)</span> </span>{<br>  event.stopPropagation();<br>}, <span class="hljs-literal">false</span>);</code></pre>
                    但是，stopPropagation 只会阻止当前元素 <code>同类型的</code> 事件冒泡或捕获的传播，并不会阻止该元素上 <code>其他类型</code> 事件的监听。以 click 事件为例：
                    <pre class="hljs javascript"><code class="">ele.addEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">event</span>) </span>{<br>  event.stopPropagation();<br>  <span class="hljs-built_in">console</span>.log(<span class="hljs-number">1</span>);<br>});<br><br>ele.addEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">event</span>) </span>{<br>  <span class="hljs-comment">// 仍然可以触发</span><br>  <span class="hljs-built_in">console</span>.log(<span class="hljs-number">2</span>);<br>});</code></pre>
                    如果想禁用之后所有的 click 事件，就要用到 stopImmediatePropagation 了。但是，需要注意的是，stopImmediatePropagation 只会禁用之后注册的同类型的监听事件。就比如阻止了之后的 click 事件监听函数，但别的事件类型如 mousedown、dblclick 之类，还是可以监听到的。
                    <pre class="hljs javascript"><code class="">ele.addEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">event</span>) </span>{<br>    event.stopImmediatePropagation();<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-number">1</span>);<br>});<br><br>ele.addEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">event</span>) </span>{<br>    <span class="hljs-comment">// 不会触发</span><br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-number">2</span>);<br>});<br><br>ele.addEventListener(<span class="hljs-string">'mousedown'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">event</span>) </span>{<br>    <span class="hljs-comment">// 会触发</span><br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-number">3</span>);<br>});</code></pre>
                </p>

                <h4>3. jquery 中的 return false;</h4>
                <p>
                    jquery 中的 on 是事件冒泡。当用 return false; 阻止浏览器的默认行为时，会做下面这 3 件事：
                    <ul>
                        <li>event.preventDefault();</li>
                        <li>event.stopPropagation();</li>
                        <li>停止回调函数执行并立即返回。</li>
                    </ul>
                    这 3 件事中，只有 preventDefault 是用来阻止默认行为的。除非你还想阻止事件冒泡，否则直接用 return false; 会埋下隐患。
                </p>

                <h4>4. angular 中的 $event</h4>

                <p>
                    angular 是个包罗万象的框架，似乎学完它的一整套之后，就能玩转世界了。它加工封装了许多原生的东西，其中就包括了 event，只是前面需要加一个 $，表示这是 angular 中的特有对象。
                    <pre class="hljs xml"><code class="">// template<br><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"doSomething($event)"</span>&gt;</span>Click me<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br>// js<br>doSomething($event: Event) {<br>    $event.stopPropagation();<br>    ...<br>}</code></pre>
                    $event 在这里作为一个变量，<code>显式地</code> 传入回调函数，之后就可以将 $event 当做原生的事件对象来用了。
                </p>

                <h4>5. vue 中的 native 修饰符</h4>
                <p>
                    在 vue 的自定义组件中绑定原生事件，需要用到修饰符 native。
                </p>
                <p>
                    那是因为，我们的自定义组件，最终会渲染成原生的 html 标签，而非类似于 <code><MyButton /></code> 这样的自定义组件。如果想让一个普通的 html 标签触发事件，那就需要对它做事件监听(addEventListener)。修饰符 native 的作用就在这里，它可以在背后帮我们绑定了原生事件，进行监听。
                </p>
                <p>
                    一个常用的场景是，配合 element-ui 做登录界面时，输完账号密码，想按一下回车就能登录。就可以像下面这样用修饰符：
                    <pre class="hljs scala"><code class="">&lt;el-input<br>    <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"input"</span><br>    v-model=<span class="hljs-string">"password"</span> <span class="hljs-class"><span class="hljs-keyword">type</span></span>=<span class="hljs-string">"password"</span><br>    <span class="hljs-meta">@keyup</span>.enter.native=<span class="hljs-string">"handleSubmit"</span>&gt;<br>&lt;/el-input&gt;</code></pre>
                    el-input 就是自定义组件，而 keyup 就是原生事件，需要用 native 修饰符进行绑定才能监听到。
                </p>

                <h4>6. react 中的合成事件</h4>
                <p>
                    想要在 react 的事件回调中使用 event 对象，会产生困扰，会发现不少原生的属性都是 null。
                </p>
                <p>
                    那是因为在 react 中的事件，其实是合成事件（SyntheticEvent），并不是浏览器的原生事件，但它也符合 w3c 规范。
                </p>
                <p>
                    举一个简单的例子，我们要实现一个组件，它有一个按钮，点击按钮后会显示一张图片，点击这张图片之外的任意区域，可以隐藏这张图片，但是点击该图片本身时，不会隐藏。代码如下：
                    <pre class="hljs kotlin"><code class=""><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">ShowImg</span> <span class="hljs-title">extends</span> <span class="hljs-title">Component</span> </span>{<br>    <span class="hljs-keyword">constructor</span>(props) {<br>        <span class="hljs-keyword">super</span>(props);<br>        <span class="hljs-keyword">this</span>.state = {<br>          active: <span class="hljs-literal">false</span><br>        };<br>    }<br>  <br>    componentDidMount() {<br>        document.addEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-keyword">this</span>.hideImg.bind(this));<br>    }<br><br>    componentWillUnmount() {<br>        document.removeEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-keyword">this</span>.hideImg);<br>    }<br>    <br>    hideImg () {<br>        <span class="hljs-keyword">this</span>.setState({ active: <span class="hljs-literal">false</span> });<br>    }<br>    <br>    handleClickBtn() {<br>        <span class="hljs-keyword">this</span>.setState({ active: !<span class="hljs-keyword">this</span>.state.active });<br>    }<br>  <br>    handleClickImg (e) {<br>        e.stopPropagation();<br>    }<br><br>    render() {<br>        <span class="hljs-keyword">return</span> (<br>            &lt;div className=<span class="hljs-string">"img-wrapper"</span>&gt;<br>                &lt;button<br>                    className=<span class="hljs-string">"showImgBtn"</span><br>                    onClick={<span class="hljs-keyword">this</span>.handleClickBtn.bind(<span class="hljs-keyword">this</span>)}&gt;<br>                    显示图片<br>                &lt;/button&gt;<br>                &lt;div<br>                    className=<span class="hljs-string">"img"</span><br>                    style={{ display: <span class="hljs-keyword">this</span>.state.active ? <span class="hljs-string">'block'</span> : <span class="hljs-string">'none'</span> }}<br>                    onClick={<span class="hljs-keyword">this</span>.handleClickImg.bind(<span class="hljs-keyword">this</span>)}&gt;<br>                    &lt;img src=<span class="hljs-string">"@/assets/avatar.jpg"</span> &gt;<br>                &lt;/div&gt;<br>            &lt;/div&gt;<br>        );<br>    }<br>}</code></pre>
                    按照之前说的原生事件机制，我们会错误地认为通过：
                    <pre class="hljs"><code class="">handleClickImg (e) {<br>    e.stopPropagation();<br>}</code></pre>
                    就可以阻止事件的派发了，但其实没法这么做。想要解决这个问题，当然也不复杂，就把 react 的事件和原生事件分开即可。
                    <pre class="hljs kotlin"><code class="">componentDidMount() {<br>    document.addEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-keyword">this</span>.hideImg.bind(<span class="hljs-keyword">this</span>));<br>    <br>    document.addEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-keyword">this</span>.imgStopPropagation.bind(<span class="hljs-keyword">this</span>));<br>}<br><br>componentWillUnmount() {<br>    document.removeEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-keyword">this</span>.hideImg);<br>    <br>    document.removeEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-keyword">this</span>.imgStopPropagation);<br>}<br><br>hideImg () {<br>    <span class="hljs-keyword">this</span>.setState({ active: <span class="hljs-literal">false</span> });<br>}<br><br>imgStopPropagation (e) {<br>    e.stopPropagation();<br>}</code></pre>
                </p>

                <h4>7. 事件对象 event</h4>
                <p>
                    当对一个元素进行事件监听的时候，它的回调函数里就会默认传递一个参数 event，它是一个对象，包含了许多属性。我列出了一些比较常用的属性：
                    <ul>
                        <li>event.target：指的是触发事件的那个节点，也就是事件最初发生的节点。</li>
                        <li>event.target.matches：可以对关键节点进行匹配，来执行相应操作。</li>
                        <li>event.currentTarget：指的是正在执行的监听函数的那个节点。</li>
                        <li>event.isTrusted：表示事件是否是真实用户触发。</li>
                        <li>event.preventDefault()：取消事件的默认行为。</li>
                        <li>event.stopPropagation()：阻止事件的派发（包括了捕获和冒泡）。</li>
                        <li>event.stopImmediatePropagation()：阻止同一个事件的其他监听函数被调用。</li>
                    </ul>
                </p>

                <h2>总结</h2>
                <p>
                    事件机制在浏览器中非常有用，所有用户的交互型操作，都依赖于它。现代 JavaScript 框架应用中，我们也都离不开与原生事件的交互。
                </p>
                <p>
                    所以，在理解了事件流的概念，清楚了事件捕获与冒泡的顺序，掌握了一些原生事件的技巧之后，相信下次再遇到坑的时候，可以少走一些弯路了。
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
