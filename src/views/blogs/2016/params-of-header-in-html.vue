<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>Meta标签的意义</h2>
                <p>
                    Meta标签用来描述一个HTML网页文档的属性，例如作者、日期和时间、网页描述、关键词、页面刷新等。搜索引擎通过机器人自动查找网页中的meta值来给网站分类，只有完善了Meta，一个HTML页面才能算是完整的网页。
                </p>
                <p>
                    通常，Meta值在网页中的存在形式：<code>&lt;meta name="title" content="网页标题"&gt;</code> 或者 <code>&lt;meta name="author" content="网页的作者"&gt;</code>
                </p>
                <p>
                    合理利用Meta标签的Description和Keywords属性，加入网站的关键字，可使网站的SEO优化排名快速提升，更贴近用户体验。
                </p>

                <p>
                    除了title属性，和SEO有着直接联系的meta标签还有下面几个：
                    <ul>
                        <li>
                            Keywords：页面的关键词标签，这个标签可以用于提取网站的关键词信息。
                        </li>
                        <li>
                            Description：网站内容描述标签，用以说明该网页的大体内容。
                        </li>
                        <li>
                            Robots：这个标签用来告诉搜索引擎的机器人，哪些页面需要索引，哪些页面不需要索引。该标签最为重要，设置稍有不慎就可能造成搜索引擎停止收录。具体参数如下：
                            <ol>
                                <li>
                                    all：文件将被检索，且页面上的链接可以被查询；
                                </li>
                                <li>
                                    none：将不被检索，且页面上的链接不可以被查询；
                                </li>
                                <li>
                                    index：将被检索；
                                </li>
                                <li>
                                    follow：页面上的链接可以被查询；
                                </li>
                                <li>
                                    noindex：文件不被检索，但页面上的链接可以被查询；
                                </li>
                                <li>
                                    nofollow：文件将被检索，但页面上的链接不可以被查询；
                                </li>
                            </ol>
                        </li>
                    </ul>
                </p>

                <h2>Meta的name属性</h2>
                <p>
                    name属性主要用于描述页面，与之对应的属性值为content，它里面的内容主要是便于搜索引擎机器人查找信息和分类信息用的。
                    <pre class="hljs q" style="max-height: 50em;"><code class=""><span class="hljs-comment">// 控制显示区域各种属性</span><br><span class="hljs-comment">// width：viewport的宽度； height：viewport的高度</span><br><span class="hljs-comment">// initial-scale：初始的缩放比例；</span><br><span class="hljs-comment">// minimum-scale：允许用户缩放到的最小比例； maximum-scale：允许用户缩放到的最大比例；</span><br><span class="hljs-comment">// user-scalable：用户是否可以手动缩放；</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"viewport"</span> content=<span class="hljs-string">"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"</span>&gt;<br><br><span class="hljs-comment">// keywords用来告诉搜索引擎你网页的关键字是什么</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"keywords"</span> content=<span class="hljs-string">"menta总结，meta,meta属性，meta跳转"</span>&gt;<br><br><span class="hljs-comment">// description用来告诉搜索引擎你的网站主要内容</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"description"</span> content=<span class="hljs-string">"html的meta的总结，meta是html语言head区的一个辅助性标签。"</span>&gt;<br><br><span class="hljs-comment">// robots（机器人向导）用来告诉搜索机器人哪些页面需要牵引，哪些页面不需要索引。</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"robots"</span> content=<span class="hljs-string">"none"</span>&gt;<br><br><span class="hljs-comment">// author标注页面的作者</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"author"</span> content=<span class="hljs-string">"root,root@xxxx.com"</span>&gt;<br><br><span class="hljs-comment">// generator代表说明网站采用什么软件制作的</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"generator"</span> content=<span class="hljs-string">"信息参数"</span>&gt;<br><br><span class="hljs-comment">// COPYRIGHT代表网站版权信息</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"COPYRIGHT"</span> content=<span class="hljs-string">"信息参数"</span>&gt;<br><br><span class="hljs-comment">// revisit-after代表网站重新访问，7days代表7天，依次类推。</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"revisit-after"</span> content=<span class="hljs-string">"7days"</span>&gt;</code></pre>
                </p>

                <h2>Meta的http-equiv属性</h2>
                <p>
                    主要是作用于http的文件头。可以向浏览器传回一些有用的信息，以帮助正确和精确的显示网页内容，与之对应的属性值为content，content中的内容其实就是各个参数的变量值。
                    <pre class="hljs q" style="max-height: 80em;"><code class=""><span class="hljs-comment">// expires用于设定网页的到期时间。一旦网页过期，必须到服务器上重新传输。</span><br><span class="hljs-comment">// 注意：必须使用GMT的时间格式 。</span><br>&lt;<span class="hljs-built_in">meta</span> http-equiv=<span class="hljs-string">"expires"</span> content=<span class="hljs-string">"Fri,12Jan200118:18:18GMT"</span>&gt;<br><br><span class="hljs-comment">// 禁止浏览器从本地计算机的缓存中访问页面内容</span><br><span class="hljs-comment">// 注意：这样的设定，访问者将无法脱机浏览。</span><br>&lt;<span class="hljs-built_in">meta</span> http-equiv=<span class="hljs-string">"pragma"</span> content=<span class="hljs-string">"no-cache"</span>&gt;<br><br><span class="hljs-comment">// 优先使用 IE 最新版本</span><br>&lt;<span class="hljs-built_in">meta</span> http-equiv=<span class="hljs-string">"X-UA-Compatible"</span> content=<span class="hljs-string">"IE=edge"</span>&gt;<br><br><span class="hljs-comment">// 告诉浏览器不要缓存页面。</span><br><span class="hljs-comment">// 实际是页面没有发生改变的时候请求是304,如果页面改变了才是200。</span><br><span class="hljs-comment">// 所以说加了no-cache不是说每次都全新下载，而是更新了就会重新下载。</span><br><span class="hljs-comment">// 各个消息中的指令含义如下：</span><br><span class="hljs-comment">// Public 指示响应可被任何缓存区缓存</span><br><span class="hljs-comment">// Private 指示对于单个用户的整个或部分响应消息，不能被共享缓存处理。这允许服务器仅仅描述当用户的部分响应消息，此响应消息对于其他用户的请求无效</span><br><span class="hljs-comment">// no-cache 指示请求或响应消息不能缓存</span><br><span class="hljs-comment">// no-store 用于防止重要的信息被无意的发布。在请求消息中发送将使得请求和响应消息都不使用缓存</span><br><span class="hljs-comment">// max-age 指示客户机可以接收生存期不大于指定时间（以秒为单位）的响应</span><br><span class="hljs-comment">// min-fresh 指示客户机可以接收响应时间小于当前时间加上指定时间的响应</span><br><span class="hljs-comment">// max-stale 指示客户机可以接收超出超时期间的响应消息。如果指定max-stale消息的值，那么客户机可以接收超出超时期指定值之内的响应消息</span><br>&lt;<span class="hljs-built_in">meta</span> http-equiv=<span class="hljs-string">"Cache-Control"</span> content=<span class="hljs-string">"no-cache"</span>&gt;<br><br><span class="hljs-comment">// imagetoolbar 是否显示图片工具栏</span><br>&lt;<span class="hljs-built_in">meta</span> http-equiv=<span class="hljs-string">"imagetoolbar"</span> content=<span class="hljs-string">"false"</span>&gt;<br><br><span class="hljs-comment">// 自动刷新并指向新页面，其中的2是指停留2秒钟后自动刷新到URL网址。</span><br>＜<span class="hljs-built_in">meta</span> http-equiv=<span class="hljs-string">"Refresh"</span> content=<span class="hljs-string">"2; URL=http://www.root.net"</span>＞<br><br><span class="hljs-comment">// Set-Cookie 如果网页到期，那么存盘的cookie将被删除。</span><br><span class="hljs-comment">// 注意：必须使用GMT的时间格式。</span><br>&lt;<span class="hljs-built_in">meta</span> http-equiv=<span class="hljs-string">"Set-Cookie"</span> content=<span class="hljs-string">"cookie value=xxx;expires=Friday,12-Jan-200118:18:18GMT；path=/"</span>&gt;<br><br><span class="hljs-comment">// Window-target强制页面在当前窗口以独立页面显示。</span><br><span class="hljs-comment">// 注意：用来防止别人在框架里调用自己的页面。</span><br>&lt;<span class="hljs-built_in">meta</span> http-equiv=<span class="hljs-string">"Window-target"</span> content=<span class="hljs-string">"_top"</span>&gt;<br><br><span class="hljs-comment">// content-Type设定页面使用的字符集。</span><br><span class="hljs-comment">// UTF-8 代表世界通用的语言编码；</span><br><span class="hljs-comment">// GB2312 说明网站是采用的编码是简体中文；</span><br><span class="hljs-comment">// BIG5 说明网站是采用的编码是繁体中文；</span><br><span class="hljs-comment">// iso-2022-jp 说明网站是采用的编码是日文；</span><br><span class="hljs-comment">// ks_c_5601 说明网站是采用的编码是韩文；</span><br><span class="hljs-comment">// ISO-8859-1 说明网站是采用的编码是英文；</span><br>&lt;<span class="hljs-built_in">meta</span> http-equiv=<span class="hljs-string">"content-Type"</span> content=<span class="hljs-string">"text/html"</span> charset=<span class="hljs-string">"gb2312"</span>&gt;<br><br><span class="hljs-comment">// content-Language显示语言的设定</span><br>&lt;<span class="hljs-built_in">meta</span> http-equiv=<span class="hljs-string">"Content-Language"</span> content=<span class="hljs-string">"zh-cn"</span>&gt;<br><br><span class="hljs-comment">// Content-Script-Type W3C网页规范，指明页面中的脚本类型。</span><br>&lt;<span class="hljs-built_in">meta</span> http-equiv=<span class="hljs-string">"Content-Script-Type"</span> content=<span class="hljs-string">"text/javascript"</span>&gt;</code></pre>
                </p>

                <h2>IOS的头部设置</h2>
                <p>
                    <pre class="hljs q"><code class=""><span class="hljs-comment">// 添加到主屏后的标题（iOS 6 新增）</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"apple-mobile-web-app-title"</span> content=<span class="hljs-string">"标题"</span>&gt;<br><br><span class="hljs-comment">// 设置支持的终端</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"applicable-device"</span> content=<span class="hljs-string">"pc,mobile"</span>&gt;<br><br><span class="hljs-comment">// uc的私有属性，强制图片显示</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"imagemode"</span> content=<span class="hljs-string">"force"</span>&gt;<br><br><span class="hljs-comment">// 是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"apple-mobile-web-app-capable"</span> content=<span class="hljs-string">"yes"</span>&gt;<br><br><span class="hljs-comment">// IOS中Safari顶端状态条样式，设置状态栏的背景颜色为黑色</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"apple-mobile-web-app-status-bar-style"</span> content=<span class="hljs-string">"black"</span>&gt;<br><br><span class="hljs-comment">// 添加智能 App 广告条 Smart App Banner（iOS 6+ Safari）</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"apple-itunes-app"</span> content=<span class="hljs-string">"app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL"</span>&gt;<br><br><span class="hljs-comment">// 使用webkit内核打开页面</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"renderer"</span> content=<span class="hljs-string">"webkit"</span>&gt;<br><br><span class="hljs-comment">// 禁止识别电话号码、邮件</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"format-detection"</span> content=<span class="hljs-string">"telphone=no, email=no"</span>&gt;</code></pre>
                </p>

                <h2>一些特殊浏览器的设置</h2>
                <p>
                    <pre class="hljs q" style="max-height: 60em;"><code class=""><span class="hljs-comment">// QQ强制竖屏</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"x5-orientation"</span> content=<span class="hljs-string">"portrait"</span>&gt;<br><br><span class="hljs-comment">// QQ强制全屏</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"x5-fullscreen"</span> content=<span class="hljs-string">"true"</span>&gt;<br><br><span class="hljs-comment">// QQ应用模式</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"x5-page-mode"</span> content=<span class="hljs-string">"app"</span>&gt;<br><br><span class="hljs-comment">// UC强制竖屏</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"screen-orientation"</span> content=<span class="hljs-string">"portrait"</span>&gt;<br><br><span class="hljs-comment">// UC强制全屏</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"full-screen"</span> content=<span class="hljs-string">"yes"</span>&gt;<br><br><span class="hljs-comment">// UC应用模式</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"browsermode"</span> content=<span class="hljs-string">"application"</span>&gt;<br><br><span class="hljs-comment">// 启用360浏览器的极速模式(webkit)</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"renderer"</span> content=<span class="hljs-string">"webkit"</span>&gt;<br><br><span class="hljs-comment">// windows phone 点击无高光</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"msapplication-tap-highlight"</span> content=<span class="hljs-string">"no"</span>&gt;<br><br><span class="hljs-comment">// Windows 8 磁贴颜色</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"msapplication-TileColor"</span> content=<span class="hljs-string">"#000"</span>&gt;<br><br><span class="hljs-comment">// Windows 8 磁贴图标</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"msapplication-TileImage"</span> content=<span class="hljs-string">"icon.png"</span>&gt;<br><br><span class="hljs-comment">// 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓</span><br>&lt;<span class="hljs-built_in">meta</span> name=<span class="hljs-string">"HandheldFriendly"</span> content=<span class="hljs-string">"true"</span>&gt;</code></pre>
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
