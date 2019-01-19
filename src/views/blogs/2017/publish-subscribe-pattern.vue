<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent :useCatalog="false">
            <div slot="content">
                <p>
                    定义：一个目标对象管理所有相依于它的观察者对象，并且在它本身的状态改变时主动发出通知。这通常透过呼叫各观察者所提供的方法来实现。此种模式通常被用来实时事件处理系统。
                </p>

                <p>
                    它有2个参与者：发布者和订阅者。发布者向某个信道发布一条消息，订阅者绑定这个信道，当有消息发布至信道时就会接收到一个通知。
                </p>

                <p>
                    最重要的一点是， 发布者和订阅者是完全解耦的，彼此并不知晓对方 的存在。两者仅仅共享一个信道名称。
                </p>

                <p>
                    一个简单的观察者模式：（一个事件只绑定一个操作，取消订阅时把整个事件都删掉）
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">var</span> PubSub = (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-keyword">var</span> eventObj = {};<br>    <span class="hljs-keyword">return</span> {<br>        <span class="hljs-attr">subscribe</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">event, fn</span>) </span>{<br>            eventObj[event] = fn;<br>        },<br>        <span class="hljs-attr">publish</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">event</span>) </span>{<br>            <span class="hljs-keyword">if</span> (eventObj[event]) eventObj[event]();<br>        },<br>        <span class="hljs-attr">off</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">event</span>) </span>{<br>            <span class="hljs-keyword">if</span> (eventObj[event]) <span class="hljs-keyword">delete</span> eventObj[event];<br>        }<br>    }<br>}());<br><br><span class="hljs-comment">// 测试：</span><br>PubSub.subscribe(<span class="hljs-string">'event'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'event release'</span>);<br>});<br>PubSub.publish(<span class="hljs-string">'event'</span>); <span class="hljs-comment">// 'event release'  </span></code></pre>
                </p>

                <p>
                    再优化一下：（支持一个事件绑定多个操作的,并且退订时是退订一个事件上的一个操作,而不是删除整个事件）
                    <pre class="hljs javascript"><code class=""><span class="hljs-keyword">var</span> PubSub = (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-keyword">var</span> queue = {};<br>    <span class="hljs-keyword">var</span> subscribe = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">event, fn</span>) </span>{<br>        <span class="hljs-keyword">if</span> (!queue[event]) queue[event] = [];<br>        queue[event].push(fn);<br>    }<br>    <span class="hljs-keyword">var</span> publish = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">event</span>) </span>{<br>        <span class="hljs-keyword">var</span> eventQueue = queue[event];<br>        <span class="hljs-keyword">if</span> (eventQueue) {<br>            eventQueue.forEach(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">item, index</span>) </span>{<br>                item();<br>            });<br>        }<br>    }<br>    <span class="hljs-keyword">var</span> off = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">event, fn</span>) </span>{<br>        <span class="hljs-keyword">var</span> eventQueue = queue[event];<br>        <span class="hljs-keyword">if</span> (eventQueue) {<br>            queue[event] = eventQueue.filter(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">item</span>) </span>{<br>                <span class="hljs-keyword">return</span> item !== fn;<br>            });<br>        }<br>    }<br>    <span class="hljs-keyword">return</span> {<br>        <span class="hljs-attr">subscribe</span>: subscribe,<br>        <span class="hljs-attr">publish</span>: publish,<br>        <span class="hljs-attr">off</span>: off<br>    }<br>}());<br><br><span class="hljs-comment">// 测试：</span><br><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">first</span>(<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'event a publish first'</span>);<br>}<br>PubSub.subscribe(<span class="hljs-string">'a'</span>, first);  <br>PubSub.subscribe(<span class="hljs-string">'a'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{  <br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'event a publish second'</span>);<br>});<br>PubSub.publish(<span class="hljs-string">'a'</span>); <span class="hljs-comment">// event a emit first, event a emit second</span><br><br>PubSub.off(<span class="hljs-string">'a'</span>, first);  <br>PubSub.publish(<span class="hljs-string">'a'</span>);  <span class="hljs-comment">//event a emit second   </span></code></pre>
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
