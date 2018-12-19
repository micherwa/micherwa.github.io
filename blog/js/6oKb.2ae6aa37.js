(window.webpackJsonp=window.webpackJsonp||[]).push([["6oKb"],{"6oKb":function(e,n,t){"use strict";t.r(n);var v={created:function(){}},r=t("psIG"),o=Object(r.a)(v,function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"blog-container"},[t("BlogHeader",{attrs:{title:"前端面试题——HTML",subTitle:"",date:"2018-09-08",tags:["面试题"]}}),e._v(" "),t("BlogContent",{attrs:{useCatalog:!0}},[t("div",{attrs:{slot:"content"},slot:"content"},[t("h2",[e._v("HTML5为什么只需要写!DOCTYPE HTML")]),e._v(" "),t("p",[e._v("\n                HTML5不基于SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）"),t("br"),e._v("\n                而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型\n            ")]),e._v(" "),t("h2",[e._v("行内元素、块级元素、空(void)元素，分别有哪些？")]),e._v(" "),t("p",[e._v("\n                行内元素有：a b span img input select strong（强调的语气）"),t("br"),e._v("\n                块级元素有：div ul ol li dl dt dd h1~h6 p"),t("br"),e._v("\n                空元素:br hr img input link meta\n            ")]),e._v(" "),t("h2",[e._v("常见的浏览器内核有哪些？")]),e._v(" "),t("p",[e._v("\n                Blink内核：新版 Chrome、新版 Opera"),t("br"),e._v("\n                Webkit内核：Safari、原Chrome"),t("br"),e._v("\n                Gecko内核：FireFox、Netscape6及以上版本"),t("br"),e._v("\n                Trident内核（又称MSHTML内核）：IE、国产浏览器"),t("br"),e._v("\n                Presto内核：原Opera7及以上\n            ")]),e._v(" "),t("h2",[e._v("cookies，sessionStorage 和 localStorage 有何区别？")]),e._v(" "),t("p",[e._v("\n                cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）"),t("br"),e._v("\n                cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递"),t("br"),e._v("\n                cookie数据大小不能超过4k"),t("br"),e._v("\n                cookie 设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭"),t("br"),e._v("\n                sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存"),t("br"),e._v("\n                sessionStorage和localStorage虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大"),t("br"),e._v("\n                localStorage 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据"),t("br"),e._v("\n                sessionStorage 数据在当前浏览器窗口关闭后自动删除\n            ")]),e._v(" "),t("h2",[e._v("页面可见性（Page Visibility API） 可以有哪些用途？")]),e._v(" "),t("p",[e._v("\n                通过 visibilityState 的值检测页面当前是否可见，以及打开网页的时间等"),t("br"),e._v("\n                在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放"),t("br"),e._v("\n                完成登陆后，无刷新自动同步其他页面的登录状态\n            ")]),e._v(" "),t("h2",[e._v("对浏览器内核的理解？")]),e._v(" "),t("p",[e._v("\n                浏览器内核主要分为两部分：渲染引擎(layout engineer 或 Rendering Engine) 和 JS引擎"),t("br"),e._v("\n                渲染引擎负责取得网页的内容进行布局计和样式渲染，然后会输出至显示器或打印机"),t("br"),e._v("\n                JS引擎则负责解析和执行JS脚本来实现网页的动态效果和用户交互"),t("br"),e._v("\n                最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎"),t("br")]),e._v(" "),t("h2",[e._v("HTML5有哪些新特性？")]),e._v(" "),t("p",[e._v("\n                新增选择器 document.querySelector、document.querySelectorAll"),t("br"),e._v("\n                拖拽释放(Drag and drop) API"),t("br"),e._v("\n                媒体播放的 video 和 audio"),t("br"),e._v("\n                本地存储 localStorage 和 sessionStorage"),t("br"),e._v("\n                离线应用 manifest"),t("br"),e._v("\n                桌面通知 Notifications"),t("br"),e._v("\n                语意化标签 article、footer、header、nav、section"),t("br"),e._v("\n                增强表单控件 calendar、date、time、email、url、search"),t("br"),e._v("\n                地理位置 Geolocation"),t("br"),e._v("\n                多任务 webworker"),t("br"),e._v("\n                全双工通信协议 websocket"),t("br"),e._v("\n                历史管理 history"),t("br"),e._v("\n                跨域资源共享(CORS) Access-Control-Allow-Origin"),t("br"),e._v("\n                页面可见性改变事件 visibilitychange"),t("br"),e._v("\n                跨窗口通信 PostMessage"),t("br"),e._v("\n                Form Data 对象"),t("br"),e._v("\n                绘画 canvas\n            ")]),e._v(" "),t("h2",[e._v("HTML5移除了那些元素？")]),e._v(" "),t("p",[e._v("\n                纯表现的元素：basefont、big、center、font、s、strike、tt、u"),t("br"),e._v("\n                对可用性产生负面影响的元素：frame、frameset、noframes\n            ")]),e._v(" "),t("h2",[e._v("HTML5的离线储存的工作原理以及使用？")]),e._v(" "),t("p",[e._v("\n                原理：\n                    "),t("ul",[t("li",[e._v("用户在线时，保存更新用户机器上的缓存文件")]),e._v(" "),t("li",[e._v("当用户离线时，可以正常访离线储存问站点或应用内容")])]),e._v("\n                使用：\n                "),t("ul",[t("li",[e._v('在文档的 html 标签设置 manifest 属性，如 manifest="/offline.appcache"')]),e._v(" "),t("li",[e._v("在项目中新建 manifest 文件，manifest 文件的命名建议：xxx.appcache")]),e._v(" "),t("li",[e._v("在 web 服务器配置正确的 MIME-type，即 text/cache-manifest")])])]),e._v(" "),t("h2",[e._v("label标签在表单控件中的2种用法")]),e._v(" "),t("p",[e._v("\n                方法1：\n                "),t("ul",[t("li",[e._v('<label for="mobile">Number:</label>')]),e._v(" "),t("li",[e._v('<input type="text" id="mobile">')])]),e._v("\n                方法2：\n                "),t("ul",[t("li",[e._v('<label>Date:<input type="text"></label>')])])])])])],1)},[],!1,null,null,null);o.options.__file="fe-interview-html.vue";n.default=o.exports}}]);