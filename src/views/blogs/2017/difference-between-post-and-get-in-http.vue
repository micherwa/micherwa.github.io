<template>
    <div class="blog-container">
        <BlogHeader
            title="HTTP中GET与POST的区别" subTitle=""
            date="2017-11-29" :tags="['Http']">
        </BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <p>
                    最直观的区别就是GET把参数包含在URL中，POST通过request body传递参数。
                </p>

                <h2>w3schools中的“标准答案”</h2>
                <p>
                    <ul>
                        <li>
                            GET在浏览器回退时是无害的，而POST会再次提交请求。
                        </li>
                        <li>
                            GET产生的URL地址可以被Bookmark，而POST不可以。
                        </li>
                        <li>
                            GET请求会被浏览器主动cache，而POST不会，除非手动设置。
                        </li>
                        <li>
                            GET请求只能进行url编码，而POST支持多种编码方式。
                        </li>
                        <li>
                            GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
                        </li>
                        <li>
                            GET请求在URL中传送的参数是有长度限制的，而POST么有。
                        </li>
                        <li>
                            对参数的数据类型，GET只接受ASCII字符，而POST没有限制。
                        </li>
                        <li>
                            GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。
                        </li>
                        <li>
                            GET参数通过URL传递，POST放在Request body中。
                        </li>
                    </ul>
                </p>

                <h2>GET和POST本质上没有区别</h2>
                <p>
                    GET和POST是什么？ HTTP协议中的两种发送请求的方法。
                </p>
                <p>
                    HTTP是什么？ HTTP是基于TCP/IP的关于数据如何在万维网中如何通信的协议。
                </p>
                <p>
                    HTTP的底层是TCP/IP。所以GET和POST的底层也是TCP/IP，也就是说，<code>GET/POST本质上没有区别，都是TCP链接，能做的事情是一样一样的</code>。你要给GET加上request body，给POST带上url参数，技术上是完全行的通的。
                </p>

                <h2>“标准答案”里的那些区别是怎么回事？</h2>
                <p>
                    在我大万维网世界中，TCP就像汽车，我们用TCP来运输数据，它很可靠，从来不会发生丢件少件的现象。但是如果路上跑的全是看起来一模一样的汽车，那这个世界看起来是一团混乱，送急件的汽车可能被前面满载货物的汽车拦堵在路上，整个交通系统一定会瘫痪。为了避免这种情况发生，交通规则HTTP诞生了。HTTP给汽车运输设定了好几个服务类别，有GET, POST, PUT, DELETE等等，HTTP规定，当执行GET请求的时候，要给汽车贴上GET的标签（设置method为GET），而且要求把传送的数据放在车顶上（url中）以方便记录。如果是POST请求，就要在车上贴上POST的标签，并把货物放在车厢里。当然，你也可以在GET的时候往车厢内偷偷藏点货物，但是这是很不光彩；也可以在POST的时候在车顶上也放一些数据，让人觉得傻乎乎的。HTTP只是个行为准则，而TCP才是GET和POST怎么实现的基本。
                </p>

                <h2>“标准答案”里关于参数大小的限制又是从哪来的呢？</h2>
                <p>
                    在我大万维网世界中，还有另一个重要的角色：运输公司。不同的浏览器（发起http请求）和服务器（接受http请求）就是不同的运输公司。 虽然理论上，你可以在车顶上无限的堆货物（url中无限加参数）。但是运输公司可不傻，装货和卸货也是有很大成本的，他们会限制单次运输量来控制风险，数据量太大对浏览器和服务器都是很大负担。业界不成文的规定是，（大多数）浏览器通常都会限制url长度在2K个字节，而（大多数）服务器最多处理64K大小的url。超过的部分，恕不处理。如果你用GET服务，在request body偷偷藏了数据，不同服务器的处理方式也是不同的，有些服务器会帮你卸货，读出数据，有些服务器直接忽略，所以，虽然GET可以带request body，也不能保证一定能被接收到哦。
                </p>
                <p>
                    所以，GET和POST本质上就是TCP链接，并无差别。但是<code>由于HTTP的规定和浏览器/服务器的限制，导致他们在应用过程中体现出一些不同</code>。
                </p>

                <h2>GET和POST还有一个重大区别</h2>
                <p>
                    简单的说：<br>
                    <code>GET产生一个TCP数据包；POST产生两个TCP数据包。</code>
                </p>
                <p>
                    复杂点说：
                    <ul>
                        <li>
                            对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；
                        </li>
                        <li>
                            而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。
                        </li>
                    </ul>
                    也就是说，GET只需要汽车跑一趟就把货送到了，而POST得跑两趟，第一趟，先去和服务器打个招呼“嗨，我等下要送一批货来，你们打开门迎接我”，然后再回头把货送过去。
                </p>

                <p>
                    从时间优势上看，GET比POST更有效。那么，在实际开发中，用GET更好？
                </p>
                <p>
                    答案：不见得。原因如下：
                    <ul>
                        <li>GET与POST都有自己的语义，不能随便混用。</li>
                        <li>据研究，在网络环境好的情况下，发一次包的时间和发两次包的时间差别基本可以无视。而在网络环境差的情况下，两次包的TCP在验证数据包完整性上，有非常大的优点。</li>
                        <li>并不是所有浏览器都会在POST中发送两次包，Firefox就只发送一次。</li>
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
