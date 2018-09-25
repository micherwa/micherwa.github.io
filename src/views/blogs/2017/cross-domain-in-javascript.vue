<template>
    <div class="blog-container">
        <BlogHeader
            title="前端跨域解决方案" subTitle=""
            date="2017-07-12" :tags="['Javascript']">
        </BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <p>
                    这里说的跨域，是指通过js在不同的域之间进行数据传输或通信。<br>比如用ajax向一个不同的域请求数据，或者通过js获取页面中不同域的框架中(iframe)的数据。<br><strong>只要协议、域名、端口有任何一个不同，都被当作是不同的域</strong>。<br>下面介绍几种实现跨域的解决方案。
                </p>

                <h2>服务器反向代理</h2>
                <p>
                    因为服务器之间是不存在跨域问题的，反向代理正是利用了这一点。<br>假设，从客户端A访问服务器A时，服务器A上并没有需要的数据，但可以做一层代理去访问服务器B，从而得到想要的数据返回给客户端A，也就实现了客户端A访问服务器B的跨域需求。<br>通过 nginx 或 apache 都可以设置反向代理，过程也大同小异，以nginx为例，可以这样配置：
                    <pre class="hljs css"><code class="">location ^~ <span class="hljs-regexp">/api/</span> {<br>    <span class="hljs-comment">// 代理的服务器域名</span><br>    proxy_pass <span class="hljs-string">http://xxx.xx.com; </span><br>}</code></pre>
                    对于SPA应用，在开发期间，一般都会在webpack的devServer中配置代理，从本地代理到真正的接口所在的服务器。大致可以这样配置：
                    <pre class="hljs css"><code class=""><span class="hljs-selector-tag">devServer</span>: {<br>    <span class="hljs-attribute">proxy</span>: {<br>        <span class="hljs-string">'/api'</span>: {<br>            target: <span class="hljs-string">'http://xxx.xx.com'</span>,<br>            changeOrigin: true<br>        }<br>    },<br>}</code></pre>
                </p>

                <h2>CORS(跨域源资源共享)</h2>
                <p>
                    基本思想是使用自定义的HTTP头部，让服务器能声明允许访问的来源。<br>
                    使用CORS时，异步请求会被分为简单请求(非Preflight)和非简单请求。
                </p>

                <h4>简单请求</h4>
                <p>
                    所有的跨域请求(简单或非简单)总会包含一个origin的请求头部，浏览器会自动添加，用户不用关心，也无法控制。它的值由协议、域名、端口组成，目的是说明请求的来源。比如：<br>
                    <code>Origin:http://www.hello.com</code>
                </p>
                <p>
                    服务器接收到这个请求后，会在响应头Access-Control-Allow-Origin回发相同的源信息。( * 表明该资源可以被任意外域访问)。比如：<br>
                    <code>Access-Control-Allow-Origin: *</code>
                </p>

                <h4>非简单请求</h4>
                <p>
                    非简单CORS请求会在正式请求之前发送一次<strong>Preflight</strong>请求，得到确认之后才会发送真正的XMLHttpRequest请求。浏览器自动处理这两个请求，并且Preflight请求结束后，结果将按照响应中指定的时间缓存起来。所以，只是第一次发送这种请求时会多一次HTTP请求。
                </p>

                <p>
                    Preflight请求使用<code>OPTIONS</code>方法,发送下列头部：
                    <pre class="hljs oxygene"><code class="">Origin: 与简单请求相同<br></span>Access-Control-Request-<span class="hljs-function"><span class="hljs-keyword">Method</span>:</span> 请求自身使用的方法</code></pre>
                    如果服务器接受带凭据(cookie、HTTP认证、客户端SSL证明等)的请求，就会用到下面的HTTP头部响应：<br>
                    <code>Access-Control-Allow-Credentials: true</code>
                </p>

                <p>
                    虽然这种方法配置也挺简单的，但对SPA应用来说，每个页面重复调用同一个接口的概率很小，也就意味着，每个接口必然会发2次请求，先是OPTIONS校验，然后才是真正的请求。
                </p>
                <p>
                    <strong>所以，个人感觉，从前端的性能优化上考虑，反向代理会更加友好。</strong>
                </p>

                <h2>JSONP(JSON with padding)</h2>
                <p>
                    在js中，我们无法直接用XMLHttpRequest请求不同域上的数据。但在页面中，引入不同域上的js脚本文件，却是可以的。jsonp正是利用这个特性来实现的。<br>
                    JSONP由两部分组成：回调函数 + 数据。回调函数是当有数据返回时，可以通过js调用的函数。数据就是传入回调函数的JSON数据。<br>
                    JSONP是通过动态加载一个<code>&lt;script&gt;</code>元素，而其src属性指定一个<code>跨域的URL</code>来实现的。
                </p>

                <p>
                    假设有一个a.html页面，它要获取一份不同域上的json数据，比如json数据的地址是<code>http://www.hello.com/data.php</code>，那么在a.html中的js代码可以这么写：
                    <pre class="hljs xml"><code class=""><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="actionscript"></span><br><span class="actionscript">    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">doSomething</span> <span class="hljs-params">(data)</span> </span>{</span><br><span class="actionscript">        <span class="hljs-comment">// 处理异步返回的data</span></span><br><span class="actionscript">    }</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span><br><br><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"http://www.hello.com/data.php?callback=doSometing"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
                    上例中，<strong>callback</strong>这个参数名只是按习惯这么取，也可是是其他的。<br>
                    因为是当做一个js文件来引入的，所以<code>http://www.hello.com/data.php</code>返回的必须是一个能执行的js文件，所以这个页面的php代码可能是这样的:
                    <pre class="hljs xml"><code class=""><span class="php"><span class="hljs-meta">&lt;?php</span></span><br><span class="php">    $callback = $_GET[<span class="hljs-string">'callback'</span>]; <span class="hljs-comment">// 得到函数名</span></span><br><span class="php">    $data = <span class="hljs-keyword">array</span>(<span class="hljs-string">'a'</span>, <span class="hljs-string">'b'</span>, <span class="hljs-string">'c'</span>); <span class="hljs-comment">// 模拟要返回的json数据</span></span><br><span class="php">    <span class="hljs-keyword">echo</span> $callback.<span class="hljs-string">'('</span>.json_encode($data).<span class="hljs-string">')'</span>; </span><br><span class="php"><span class="hljs-meta">?&gt;</span></span></code></pre>
                    最终，在a.html中，<code>doSomething</code>的参数就能得到<code>['a', 'b', 'c']</code>
                </p>

                <p>
                    在jquery中，操作jsonp更为方便。<br>
                    <pre class="hljs xml"><code class=""><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript"></span><br><span class="javascript">    $.getJSON(<span class="hljs-string">'http://www.hello.com/data.php?callback=?'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">data</span>) </span>{</span><br><span class="javascript">        <span class="hljs-comment">// 处理异步返回的data</span></span><br><span class="javascript">    });</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
                    原理是一样的，只不过我们不需要手动的插入script标签以及定义回掉函数。jquery会自动生成一个全局函数来替换callback=?中的问号，之后获取到数据后又会自动销毁，实际上就是起一个临时代理函数的作用。$.getJSON方法会自动判断是否跨域，不跨域的话，就调用普通的ajax方法；跨域的话，则会以异步加载js文件的形式来调用jsonp的回调函数。
                </p>

                <h2>通过document.domain来跨子域</h2>
                <p>
                    浏览器的同源策略规定，无法请求不同源中的文档，还有同一个浏览器中不同框架也不能进行js的交互操作。有一点需要说明，不同的框架之间(父子或同辈)，是能够获取到彼此的window对象的，但却无法使用。
                </p>
                <p>
                    比如，有一个页面，它的地址是<code>http://www.example.com/a.html</code>，在这个页面里面有一个iframe，它的src是<code>http://example.com/b.html</code>, 很显然，这个页面与它里面的iframe框架是不同域的，所以我们无法在页面中通过js代码，来获取iframe中的东西：
                    <pre class="hljs xml"><code class=""><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript"></span><br><span class="javascript">    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">onLoad</span> (<span class="hljs-params"></span>) </span>{</span><br><span class="javascript">        <span class="hljs-keyword">let</span> iframe = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">'iframe'</span>);</span><br><span class="javascript">        <span class="hljs-comment">// 这里可以获取到iframe的window对象，但几乎没法用</span></span><br><span class="javascript">        <span class="hljs-keyword">let</span> win = iframe.contentWindow;</span><br><span class="javascript">        <span class="hljs-comment">// 这里是获取不到iframe的document对象的</span></span><br><span class="javascript">        <span class="hljs-keyword">let</span> doc = win.document;</span><br><span class="javascript">    }</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span><br><br><span class="hljs-tag">&lt;<span class="hljs-name">iframe</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"iframe"</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"http://example.com/b.html"</span> <span class="hljs-attr">onload</span>=<span class="hljs-string">"onLoad()"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">iframe</span>&gt;</span></code></pre>
                </p>

                <p>
                    这个时候，<strong>document.domain</strong> 就可以派上用场了，我们只要把<code>http://www.example.com/a.html</code> 和 <code>http://example.com/b.html</code> 这两个页面的 document.domain 都设成相同的域名就可以了。<br>
                    但要注意的是，document.domain 的设置是有限制的，我们只能把document.domain设置成自身或更高一级的父域，且主域必须相同。
                </p>

                <p>
                    例如：a.b.example.com 中某个文档的document.domain 可以设成a.b.example.com、b.example.com 、example.com中的任意一个，但是不可以设成 c.a.b.example.com，因为这是当前域的子域，也不可以设成 baidu.com，因为主域已经不相同了。
                </p>

                <p>
                    所以，在页面 <strong>http://www.example.com/a.html</strong> 中设置 <code>document.domain = 'example.com';</code>。然后，在页面 <strong>http://example.com/b.html</strong> 中也设置<code>document.domain = 'example.com';</code>。 最后，在a.html中调用 <code>onLoad()</code> 方法，就能获取到iframe中的各种属性和对象了。
                </p>

                <p>
                    不过，如果你想在<strong>http://www.example.com/a.html</strong> 页面中通过 ajax 直接请求 <strong>http://example.com/b.html</strong> 页面，即使你设置了相同的 document.domain 也还是不行的，它只适用于不同子域的框架间的交互。
                </p>

                <h2>window.name</h2>
                <p>
                    window对象有个name属性，该属性有个特征：即在一个窗口(window)的生命周期内,窗口载入的所有的页面都是共享一个window.name的，每个页面对window.name都有读写的权限，window.name是持久存在一个窗口载入过的所有页面中的，并不会因新页面的载入而进行重置。
                </p>
                <p>
                    接下来，通过一个例子来理解如何通过window.name进行跨域。<br>
                    假设，有一个 <code>www.example.com/a.html</code> 页面，需要通过 a.html 页面里的js来获取另一个位于不同域上的页面 <code>www.xxx.com/data.html</code> 里的数据。
                </p>

                <p>
                    data.html 页面里的代码很简单，就是给当前的 window.name 设置一个 a.html 页面想要得到的数据值，只要是字符串就行，当然对于json数据来说，需要通过 JSON.stringify() 方法转成字符串即可。
                </p>

                <p>
                    那么在a.html页面中，我们怎么把data.html页面载入进来呢？显然我们不能直接在 a.html 页面中通过改变 window.location 来载入 data.html 页面，因为我们想要即使 a.html 页面不跳转也能得到 data.html 里的数据。答案就是在 a.html 页面中使用一个隐藏的iframe来充当一个中间人角色，由iframe去获取 data.html 的数据，然后a.html 再去得到iframe获取到的数据。
                </p>

                <p>
                    充当中间人的iframe想要获取到 data.html 的通过 window.name 设置的数据，只需要把这个iframe的src设为 www.xxx.com/data.html 就行了。然后 a.html 想要得到iframe所获取到的数据，也就是想要得到iframe的 window.name 的值，还必须把这个iframe的src设成跟 a.html 页面同一个域才行，不然根据前面讲的同源策略，a.html 是不能访问到iframe里的 window.name 属性的。
                </p>

                <p>
                    a.html页面的代码，可以是这样的：
                    <pre class="hljs xml"><code class=""><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript"></span><br><span class="javascript">    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getData</span> (<span class="hljs-params"></span>) </span>{</span><br><span class="javascript">        <span class="hljs-keyword">let</span> iframe = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">'iframe'</span>);</span><br><span class="javascript">        <span class="hljs-comment">// 这里的b.html名字随意，只要是跟a.html同域下的即可</span></span><br><span class="javascript">        iframe.src = <span class="hljs-string">'b.html'</span>;</span><br><span class="javascript">        iframe.onload = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{</span><br><span class="javascript">            <span class="hljs-comment">// 获取iframe里的window的name属性，也就是得到了data.html中设置的数据</span></span><br><span class="javascript">            <span class="hljs-keyword">let</span> data = iframe.contentWindow.name;</span><br><span class="javascript">        }</span><br><span class="javascript">    }</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span><br><br><span class="hljs-tag">&lt;<span class="hljs-name">iframe</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"iframe"</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"http://www.xxx.com/data.html"</span> <span class="hljs-attr">onload</span>=<span class="hljs-string">"getData()"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"display:none;"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">iframe</span>&gt;</span></code></pre>
                </p>

                <p>
                    上面的代码只是最简单的原理演示代码，当然为了安全，获取完数据后，还可以销毁作为代理的iframe。
                </p>

                <h2>HTML5的window.postMessage</h2>

                <p>
                    window.postMessage(message, targetOrigin) 方法是 html5 新引进的特性，可以使用它来向其它的window对象发送消息，无论这个window对象是属于同源或不同源。
                </p>

                <p>
                    需要注意的是，postMessage的调用者window指的是接收消息的一方，该方法的第一个参数 message 是指需要发送的数据(只能为字符串)，第二个参数 targetOrigin 用来限定接收方所在的域，如果不想限定域，可以使用通配符 * 。
                </p>

                <p>
                    消息接收方的window，可以通过 <strong>onMessage</strong> 事件来获取传入的消息，消息内容储存在该事件对象的data属性中。
                </p>

                <p>
                    下面看一个简单的示例：
                    <pre class="hljs xml"><code class=""><span class="hljs-comment">&lt;!-- 这是页面 http://example.com/a.html 的代码 --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript"></span><br><span class="javascript">    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">onLoad</span> (<span class="hljs-params"></span>) </span>{</span><br><span class="javascript">        <span class="hljs-keyword">let</span> iframe = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">'iframe'</span>);</span><br><span class="javascript">        <span class="hljs-keyword">let</span> win = iframe.contentWindow;</span><br><span class="javascript">        win.postMessage(<span class="hljs-string">'这是来自页面a.html的测试数据'</span>, <span class="hljs-string">'*'</span>);</span><br><span class="javascript">    }</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span><br><br><span class="hljs-tag">&lt;<span class="hljs-name">iframe</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"iframe"</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"http://www.example.com/b.html"</span> <span class="hljs-attr">onload</span>=<span class="hljs-string">"onLoad()"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">iframe</span>&gt;</span></code></pre>

                    <pre class="hljs xml"><code class=""><span class="hljs-comment">&lt;!-- 这是页面 http://www.example.com/b.html 的代码 --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript"></span><br><span class="javascript">    <span class="hljs-comment">// 注册mesaage事件接收消息</span></span><br><span class="javascript">    <span class="hljs-built_in">window</span>.onMessage = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">e</span>) </span>{</span><br><span class="javascript">        <span class="hljs-keyword">let</span> e = e || event;</span><br><span class="javascript">        <span class="hljs-comment">// 通过data属性得到传送的消息</span></span><br><span class="javascript">        alert(e.data);</span><br><span class="javascript">    }</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
                </p>

                <p>
                    使用postMessage来跨域传送数据还是比较直观和方便的，只是浏览器兼容是道坎，ie9及以下不支持。
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
