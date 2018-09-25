<template>
    <div class="blog-container">
        <BlogHeader
            title="前端面试题——HTML" subTitle=""
            date="2018-09-08" :tags="['面试题']">
        </BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>HTML5为什么只需要写!DOCTYPE HTML</h2>
                <p>
                    HTML5不基于SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）<br>
                    而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型
                </p>

                <h2>行内元素、块级元素、空(void)元素，分别有哪些？</h2>
                <p>
                    行内元素有：a b span img input select strong（强调的语气）<br>
                    块级元素有：div ul ol li dl dt dd h1~h6 p<br>
                    空元素:br hr img input link meta
                </p>

                <h2>常见的浏览器内核有哪些？</h2>
                <p>
                    Blink内核：新版 Chrome、新版 Opera<br>
                    Webkit内核：Safari、原Chrome<br>
                    Gecko内核：FireFox、Netscape6及以上版本<br>
                    Trident内核（又称MSHTML内核）：IE、国产浏览器<br>
                    Presto内核：原Opera7及以上
                </p>

                <h2>cookies，sessionStorage 和 localStorage 有何区别？</h2>
                <p>
                    cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）<br>
                    cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递<br>
                    cookie数据大小不能超过4k<br>
                    cookie 设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭<br>
                    sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存<br>
                    sessionStorage和localStorage虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大<br>
                    localStorage 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据<br>
                    sessionStorage 数据在当前浏览器窗口关闭后自动删除
                </p>

                <h2>页面可见性（Page Visibility API） 可以有哪些用途？</h2>
                <p>
                    通过 visibilityState 的值检测页面当前是否可见，以及打开网页的时间等<br>
                    在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放<br>
                    完成登陆后，无刷新自动同步其他页面的登录状态
                </p>

                <h2>对浏览器内核的理解？</h2>
                <p>
                    浏览器内核主要分为两部分：渲染引擎(layout engineer 或 Rendering Engine) 和 JS引擎<br>
                    渲染引擎负责取得网页的内容进行布局计和样式渲染，然后会输出至显示器或打印机<br>
                    JS引擎则负责解析和执行JS脚本来实现网页的动态效果和用户交互<br>
                    最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎<br>
                </p>

                <h2>HTML5有哪些新特性？</h2>
                <p>
                    新增选择器 document.querySelector、document.querySelectorAll<br>
                    拖拽释放(Drag and drop) API<br>
                    媒体播放的 video 和 audio<br>
                    本地存储 localStorage 和 sessionStorage<br>
                    离线应用 manifest<br>
                    桌面通知 Notifications<br>
                    语意化标签 article、footer、header、nav、section<br>
                    增强表单控件 calendar、date、time、email、url、search<br>
                    地理位置 Geolocation<br>
                    多任务 webworker<br>
                    全双工通信协议 websocket<br>
                    历史管理 history<br>
                    跨域资源共享(CORS) Access-Control-Allow-Origin<br>
                    页面可见性改变事件 visibilitychange<br>
                    跨窗口通信 PostMessage<br>
                    Form Data 对象<br>
                    绘画 canvas
                </p>

                <h2>HTML5移除了那些元素？</h2>
                <p>
                    纯表现的元素：basefont、big、center、font、s、strike、tt、u<br>
                    对可用性产生负面影响的元素：frame、frameset、noframes
                </p>

                <h2>HTML5的离线储存的工作原理以及使用？</h2>
                <p>
                    原理：
                        <ul>
                            <li>用户在线时，保存更新用户机器上的缓存文件</li>
                            <li>当用户离线时，可以正常访离线储存问站点或应用内容</li>
                        </ul>
                    使用：
                    <ul>
                        <li>在文档的 html 标签设置 manifest 属性，如 manifest="/offline.appcache"</li>
                        <li>在项目中新建 manifest 文件，manifest 文件的命名建议：xxx.appcache</li>
                        <li>在 web 服务器配置正确的 MIME-type，即 text/cache-manifest</li>
                    </ul>
                </p>

                <h2>label标签在表单控件中的2种用法</h2>
                <p>
                    方法1：
                    <ul>
                        <li>&lt;label for="mobile"&gt;Number:&lt;/label&gt;</li>
                        <li>&lt;input type="text" id="mobile"&gt;</li>
                    </ul>
                    方法2：
                    <ul>
                        <li>&lt;label&gt;Date:&lt;input type="text"&gt;&lt;/label&gt;</li>
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
