<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>尽可能多地列举http状态码，并解释其含义</h2>
                <p>
                    <pre class="hljs basic"><code class=""><span class="hljs-symbol">100 </span> Continue   继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确认，之后发送具体参数信息<br><span class="hljs-symbol">200 </span> OK         正常返回信息<br><span class="hljs-symbol">201 </span> Created    请求成功并且服务器创建了新的资源<br><span class="hljs-symbol">202 </span> Accepted   服务器已接受请求，但尚未处理<br><span class="hljs-symbol">301 </span> Moved Permanently  请求的网页已永久移动到新位置。<br><span class="hljs-symbol">302 </span> Found       临时性重定向。<br><span class="hljs-symbol">303 </span> See Other   临时性重定向，且总是使用 <span class="hljs-keyword">GET</span> 请求新的 URI。<br><span class="hljs-symbol">304 </span> Not Modified 自从上次请求后，请求的网页未修改过。<br><br><span class="hljs-symbol">400 </span> Bad Request  服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。<br><span class="hljs-symbol">401 </span> Unauthorized 请求未授权。<br><span class="hljs-symbol">403 </span> Forbidden   禁止访问。<br><span class="hljs-symbol">404 </span> Not Found   找不到如何与 URI 相匹配的资源。<br><br><span class="hljs-symbol">500 </span> Internal Server <span class="hljs-keyword">Error</span>  最常见的服务器端错误。<br><span class="hljs-symbol">503 </span> Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）。</code></pre>
                </p>

                <h2>一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？</h2>
                <p>
                    简洁版：
                    <ul>
                        <li>
                            浏览器根据请求的URL交给DNS域名解析，找到真实IP，向服务器发起请求；
                        </li>
                        <li>
                            服务器交给后台处理完成后返回数据，浏览器接收文件（HTML、JS、CSS、图象等）；
                        </li>
                        <li>
                            浏览器对加载到的资源（HTML、JS、CSS等）进行语法解析，建立相应的内部数据结构（如HTML的DOM）；
                        </li>
                        <li>
                            载入解析到的资源文件，渲染页面，完成。
                        </li>
                    </ul>
                    详细版：
                    <ul>
                        <li>
                            浏览器会开启一个线程来处理这个请求，对 URL 分析判断如果是 http 协议就按照 Web 方式来处理;
                        </li>
                        <li>
                            调用浏览器内核中的对应方法，比如 WebView 中的 loadUrl 方法;
                        </li>
                        <li>
                            通过DNS解析获取网址的IP地址，设置 UA 等信息发出第二个GET请求;
                        </li>
                        <li>
                            进行HTTP协议会话，客户端发送报头(请求报头);
                        </li>
                        <li>
                            进入到web服务器上的 Web Server，如 Apache、Tomcat、Node.JS 等服务器;
                        </li>
                        <li>
                            进入部署好的后端应用，如 PHP、Java、JavaScript、Python 等，找到对应的请求处理;
                        </li>
                        <li>
                            处理结束回馈报头，此处如果浏览器访问过，缓存上有对应资源，会与服务器最后修改时间对比，一致则返回304;
                        </li>
                        <li>
                            浏览器开始下载html文档(响应报头，状态码200)，同时使用缓存;
                        </li>
                        <li>
                            文档树建立，根据标记请求所需指定MIME类型的文件（比如css、js）,同时设置了cookie;
                        </li>
                        <li>
                            页面开始渲染DOM，JS根据DOM API操作DOM,执行事件绑定等，页面显示完成。
                        </li>
                    </ul>
                </p>

                <h2>说说TCP传输的三次握手四次挥手策略</h2>
                <p>
                    为了准确无误地把数据送达目标处，TCP协议采用了三次握手策略。用TCP协议把数据包送出去后，TCP不会对传送 后的情况置之不理，它一定会向对方确认是否成功送达。握手过程中使用了TCP的标志：SYN和ACK
                </p>
                <p>
                    发送端首先发送一个带SYN标志的数据包给对方。接收端收到后，回传一个带有SYN/ACK标志的数据包以示传达确认信息。 最后，发送端再回传一个带ACK标志的数据包，代表“握手”结束。 若在握手过程中某个阶段莫名中断，TCP协议会再次以相同的顺序发送相同的数据包
                </p>

                <h2>描述断开一个TCP连接的“四次挥手”</h2>
                <p>
                    <ul>
                        <li>
                            第一次挥手：<br>
                            主动关闭方发送一个FIN，用来关闭主动方到被动关闭方的数据传送，也就是主动关闭方告诉被动关闭方：我已经不 会再给你发数据了(当然，在fin包之前发送出去的数据，如果没有收到对应的ack确认报文，主动关闭方依然会重发这些数据)，但是，此时主动关闭方还可 以接受数据
                        </li>
                        <li>
                            第二次挥手：<br>
                            被动关闭方收到FIN包后，发送一个ACK给对方，确认序号为收到序号+1（与SYN相同，一个FIN占用一个序号）
                        </li>
                        <li>
                            第三次挥手：<br>
                            被动关闭方发送一个FIN，用来关闭被动关闭方到主动关闭方的数据传送，也就是告诉主动关闭方，我的数据也发送完了，不会再给你发数据了
                        </li>
                        <li>
                            第四次挥手：<br>
                            主动关闭方收到FIN后，发送一个ACK给被动关闭方，确认序号为收到序号+1，至此，完成四次挥手
                        </li>
                    </ul>
                </p>

                <h2>TCP和UDP的区别</h2>
                <p>
                    TCP（Transmission Control Protocol，传输控制协议）是基于连接的协议，也就是说，在正式收发数据前，必须和对方建立可靠的连接。一个TCP连接必须要经过三次“对话”才能建立起来
                </p>
                <p>
                    UDP（User Data Protocol，用户数据报协议）是与TCP相对应的协议。它是面向非连接的协议，它不与对方建立连接，而是直接就把数据包发送过去！ UDP适用于一次只传送少量数据、对可靠性要求不高的应用环境
                </p>

                <h2>HTTP和HTTPS</h2>
                <p>
                    HTTP协议通常承载于TCP协议之上，在HTTP和TCP之间添加一个安全协议层（SSL或TSL），这个时候，就成了我们常说的HTTPS。HTTP的端口号为80，HTTPS的端口号为443
                </p>
                <p>
                    为什么HTTPS安全？<br>
                    因为网络请求需要中间有很多的服务器路由器的转发。中间的节点都可能篡改信息，而如果使用HTTPS，密钥在你和终点站才有。https之所以比http安全，是因为他利用ssl/tls协议传输。它包含证书，卸载，流量转发，负载均衡，页面适配，浏览器适配，refer传递等。保障了传输过程的安全性。
                </p>

                <h2>GET和POST的区别，何时使用POST？</h2>
                <p>
                    GET：一般用于信息获取，使用URL传递参数，对所发送信息的数量也有限制，一般在2000个字符
                </p>
                <p>
                    POST：一般用于修改服务器上的资源，对所发送的信息没有限制。
                </p>
                <p>
                    GET方式需要使用Request.QueryString来取得变量的值，而POST方式通过Request.Form来获取变量的值，也就是说Get是通过地址栏来传值，而Post是通过提交表单来传值。
                </p>
                <p>
                    以下情况，需要使用POST：
                    <ul>
                        <li>无法使用缓存文件（更新服务器上的文件或数据库）</li>
                        <li>向服务器发送大量数据（POST 没有数据量限制）</li>
                        <li>发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠</li>
                    </ul>
                </p>

                <h2>HTTP/2 了解多少？相较 HTTP/1.x 的优势有哪些？</h2>
                <p>
                    对 HTTP/2 的了解：
                    <ul>
                        <li>
                            HTTP/2引入了“服务端推（server push）”的概念，它允许服务端在客户端需要数据之前就主动地将数据发送到客户端缓存中，从而提高性能。
                        </li>
                        <li>
                            HTTP/2提供更多的加密支持
                        </li>
                        <li>
                            HTTP/2使用多路技术，允许多个消息在一个连接上同时交差。
                        </li>
                        <li>
                            它增加了头压缩（header compression），因此即使非常小的请求，其请求和响应的header都只会占用很小比例的带宽
                        </li>
                    </ul>
                    相较 HTTP/1.x 的优势：
                    <ul>
                        <li>二进制协议代替文本协议，更加简洁高效</li>
                        <li>针对每个域只使用一个多路复用的连接</li>
                        <li>压缩头部信息减小开销</li>
                        <li>允许服务器主动推送应答到客户端的缓存中</li>
                    </ul>
                </p>

                <h2>网络分层里七层模型是哪七层</h2>
                <p>
                    <ul>
                        <li>
                            应用层：允许访问OSI环境的手段（应用协议数据单元APDU）
                        </li>
                        <li>
                            表示层：对数据进行翻译、加密和压缩（表示协议数据单元PPDU）
                        </li>
                        <li>
                            会话层：建立、管理和终止会话（会话协议数据单元SPDU）
                        </li>
                        <li>
                            传输层：提供端到端的可靠报文传递和错误恢复（段Segment）
                        </li>
                        <li>
                            网络层：负责数据包从源到宿的传递和网际互连（包PackeT）
                        </li>
                        <li>
                            数据链路层：将比特组装成帧和点到点的传递（帧Frame）
                        </li>
                        <li>
                            物理层：通过媒介传输比特,确定机械及电气规范（比特Bit）
                        </li>
                    </ul>
                </p>

                <h2>304缓存的原理</h2>
                <p>
                    服务器首先产生ETag，服务器可在稍后使用它来判断页面是否已经被修改。本质上，客户端通过将该记号传回服务器要求服务器验证其（客户端）缓存
                </p>
                <p>
                    304是HTTP状态码，服务器用来标识这个文件没修改，不返回内容，浏览器在接收到个状态码后，会使用浏览器已缓存的文件
                </p>
                <p>
                    客户端请求一个页面（A）。 服务器返回页面A，并在给A加上一个ETag。 客户端展现该页面，并将页面连同ETag一起缓存。 客户再次请求页面A，并将上次请求时服务器返回的ETag一起传递给服务器。 服务器检查该ETag，并判断出该页面自上次客户端请求之后还未被修改，直接返回响应304（未修改——Not Modified）和一个空的响应体
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
