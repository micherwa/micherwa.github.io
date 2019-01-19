<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <blockquote>
                    <p>
                        <a href="http://www.ietf.org/rfc/rfc2616.txt" target="_blank">HTTP/1.1</a>
                        协议规定的 HTTP 请求方法有 OPTIONS、GET、HEAD、POST、PUT、DELETE、TRACE、CONNECT 这几种。其中 POST 一般用来向服务端提交数据，本文主要讨论 POST 提交数据的几种方式。
                    </p>
                </blockquote>

                <h2>POST在HTTP中扮演的角色</h2>
                <p>
                    先来看HTTP请求的定义。
                </p>
                <p>
                    HTTP 协议是以 ASCII 码传输，建立在 TCP/IP 协议之上的应用层规范。规范把 HTTP 请求分为三个部分：状态行、请求头、消息主体。类似于下面这样：
                    <pre class="hljs oxygene"><code class="">&lt;<span class="hljs-function">method&gt; &lt;request-URL&gt; &lt;version&gt;<span class="line" data-start="2" data-end="2" data-id="8255556"></span><br><span class="hljs-function">&lt;headers</span>&gt;</span><br><br><span class="hljs-function"></span><br><span class="hljs-function">&lt;entity-body&gt;</span></code></pre>
                    协议规定 POST 提交的数据必须放在消息主体（entity-body）中，但协议并没有规定数据必须使用什么编码方式。实际上，开发者完全可以自己决定消息主体的格式，只要最后发送的 HTTP 请求满足上面的格式就可以。
                </p>
                <p>
                    但是，数据发送出去，还要服务端解析成功才有意义。一般服务端语言如 php、python 等，以及它们的 framework，都内置了自动解析常见数据格式的功能。服务端通常是根据请求头（headers）中的 Content-Type 字段来获知请求中的消息主体是用何种方式编码，再对主体进行解析。所以说到 POST 提交数据方案，包含了 Content-Type 和消息主体编码方式两部分。下面就正式开始介绍它们。
                </p>

                <h2>application/x-www-form-urlencoded</h2>
                <p>
                    最常见的 POST 提交数据的方式。浏览器的原生 &lt;form&gt; 表单，如果不设置 <code>enctype</code> 属性，那么最终就会以 application/x-www-form-urlencoded 方式提交数据。大概像下面这样：
                    <pre class="hljs http"><code class=""><span class="hljs-keyword">POST</span> <span class="hljs-string">http://www.example.com</span> HTTP/1.1<br><span class="hljs-attribute">Content-Type</span>: application/x-www-form-urlencoded;charset=utf-8<br><br><span class="maxima"><span class="hljs-built_in">title</span>=test&amp;<span class="hljs-built_in">content</span>=content1&amp;<span class="hljs-built_in">context</span>=content2</span></code></pre>
                    首先，Content-Type 被指定为 application/x-www-form-urlencoded；其次，提交的数据按照 key1=val1&key2=val2 的方式进行编码，key 和 val 都进行了 URL 转码。大部分服务端语言都对这种方式有很好的支持。例如 PHP 中，$_POST['title'] 可以获取到 title 的值，$_POST['sub'] 可以得到 sub 数组。
                </p>

                <h2>multipart/form-data</h2>
                <p>
                    常用于表单中的上传文件。这时，必须让 &lt;form&gt; 表单的 <code>enctype</code> 等于 multipart/form-data。直接来看一个请求示例：
                    <pre class="hljs stata"><code class=""><span class="hljs-keyword">POST</span> http:<span class="hljs-comment">//www.example.com HTTP/1.1</span><br>Content-<span class="hljs-keyword">Type</span>:multipart/<span class="hljs-keyword">form</span>-data; boundary=----WebKitFormBoundaryrGKCBY7qhFd3TrwA<br><br>------WebKitFormBoundaryrGKCBY7qhFd3TrwA<br>Content-Disposition: <span class="hljs-keyword">form</span>-data; name=<span class="hljs-string">"file"</span>; filename=<span class="hljs-string">"chrome.png"</span><br>Content-<span class="hljs-keyword">Type</span>: image/png<br><br><br>------WebKitFormBoundaryrGKCBY7qhFd3TrwA--</code></pre>
                    首先，生成了一个 boundary 用于分割不同的字段，为了避免与正文内容重复，boundary 很长很复杂。
                </p>
                <p>
                    然后 Content-Type 里指明了数据是以 multipart/form-data 来编码，本次请求的 boundary 是什么内容。
                </p>
                <p>
                    消息主体里按照字段个数又分为多个结构类似的部分，每部分都是以 --boundary 开始，紧接着是内容描述信息，然后是回车，最后是字段具体内容（文本或二进制）。如果传输的是文件，还要包含文件名和文件类型信息。消息主体最后以 --boundary-- 标示结束。
                </p>

                <h2>application/json</h2>
                <p>
                    现在越来越多的人把它作为请求头，用来告诉服务端消息主体是序列化后的 JSON 字符串。由于 JSON 规范的流行，除了低版本 IE 之外的各大浏览器都原生支持 JSON.stringify，服务端语言也都有处理 JSON 的函数，使用 JSON 不会遇上什么麻烦。JSON 格式还能支持比键值对复杂得多的结构化数据。
                </p>
                <p>
                    在AngularJS中封装的Ajax请求，默认就是提交 JSON 字符串。发送的请求，比如像下面这样：
                    <pre class="hljs groovy"><code class="">POST <span class="hljs-string">http:</span><span class="hljs-comment">//www.example.com HTTP/1.1 </span><br>Content-<span class="hljs-string">Type:</span> application/json;charset=utf<span class="hljs-number">-8</span><br><br>{<span class="hljs-string">"title"</span>:<span class="hljs-string">"test"</span>,<span class="hljs-string">"sub"</span>:[<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]}</code></pre>
                    这种方案，可以方便的提交复杂的结构化数据。各大抓包工具如 Chrome 自带的开发者工具、Firebug、Fiddler，都会以树形结构展示 JSON 数据，非常友好。
                </p>
                <p>
                    但也有些服务端语言还没有支持这种方式，例如 php 就无法通过 $_POST 对象从上面的请求中获得内容。这时候，需要自己动手处理下：在请求头中 Content-Type 为 application/json 时，从 php://input 里获得原始输入流，再 json_decode 成对象。
                </p>
                <p>
                    当然 AngularJS 也可以配置为使用 x-www-form-urlencoded 方式提交数据。
                </p>

                <h2>text/xml</h2>
                <p>
                    它是一种使用 HTTP 作为传输协议，XML 作为编码方式的远程调用规范。典型的 XML-RPC 请求是这样的：
                    <pre class="hljs xml"><code class="">POST http://www.example.com HTTP/1.1<br>Content-Type: text/xml<br><br><span class="php"><span class="hljs-meta">&lt;?</span>xml version=<span class="hljs-string">"1.0"</span><span class="hljs-meta">?&gt;</span></span><br><span class="hljs-tag">&lt;<span class="hljs-name">methodCall</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">methodName</span>&gt;</span>examples.getStateName<span class="hljs-tag">&lt;/<span class="hljs-name">methodName</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">params</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">param</span>&gt;</span><br>            <span class="hljs-tag">&lt;<span class="hljs-name">value</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i4</span>&gt;</span>41<span class="hljs-tag">&lt;/<span class="hljs-name">i4</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">value</span>&gt;</span><br>        <span class="hljs-tag">&lt;/<span class="hljs-name">param</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">params</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">methodCall</span>&gt;</span></code></pre>
                    XML-RPC 协议简单、功能够用，各种语言的实现都有。它的使用也很广泛，如 WordPress 的 XML-RPC Api，搜索引擎的 ping 服务等等。JavaScript 中，也有现成的库支持以这种方式进行数据交互，能很好的支持已有的 XML-RPC 服务。不过，我个人觉得 XML 结构还是过于臃肿，一般场景用 JSON 会更灵活方便。
                </p>

                <h2>参考文献</h2>
                <p>
                    <ul>
                        <li>
                            <a href="https://imququ.com/post/four-ways-to-post-data-in-http.html" target="_blank">四种常见的 POST 提交数据方式</a>
                        </li>
                    </ul>
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
