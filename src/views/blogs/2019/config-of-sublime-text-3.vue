<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>前言</h2>
                <p>
                    今天为大家分享一款我用了很久的编辑器：sublime text 3。它的轻便和高度可定制化，是我觉得最棒的地方。本文会涉及到 sublime text 3 的方方面面，方便自己的同时，也希望能帮到你。
                </p>

                <h2>安装与初始化</h2>
                <p>
                    可以在
                    <a href="http://www.sublimetext.com/3" target="_blank">官网</a>
                    下载最新版的安装文件。选择对应的平台，我用的是 mac 版，最新的安装包也才 15.2 M，真的很轻量了。
                </p>

                <p>
                    安装完成后的第一件事，就是按照自己的习惯进行定制。打开Preferences->Setting，会分屏显示目前的配置。左侧为 Setting-Default 的系统默认配置，不需要动它。一般我们会在右侧的 Setting-User 中添加常用的配置，我的配置表如下：
                    <pre class="hljs objectivec"><code class="">{<br>    <span class="hljs-comment">// 默认使用Unix换行符，统一风格</span><br>    <span class="hljs-string">"default_line_ending"</span>: <span class="hljs-string">"unix"</span>,<br>    <span class="hljs-comment">// 编写代码时，右侧的代码地图的可视区域部分是否加上边框</span><br>    <span class="hljs-string">"draw_minimap_border"</span>: <span class="hljs-literal">true</span>,<br>    <span class="hljs-string">"font_face"</span>: <span class="hljs-string">"monaco"</span>,<br>    <span class="hljs-comment">// 显示的字体大小</span><br>    <span class="hljs-string">"font_size"</span>: <span class="hljs-number">14</span>,<br>    <span class="hljs-comment">// 突出显示当前光标所在的行</span><br>    <span class="hljs-string">"highlight_line"</span>: <span class="hljs-literal">true</span>,<br>    <span class="hljs-string">"line_padding_bottom"</span>: <span class="hljs-number">1</span>,<br>    <span class="hljs-comment">// 设置每一行到顶部，以像素为单位的间距，效果相当于行距</span><br>    <span class="hljs-string">"line_padding_top"</span>: <span class="hljs-number">1</span>,<br>    <span class="hljs-string">"tab_size"</span>: <span class="hljs-number">4</span>,<br>    <span class="hljs-comment">// 使用空格填充 tab 键</span><br>    <span class="hljs-string">"translate_tabs_to_spaces"</span>: <span class="hljs-literal">true</span>,<br>    <span class="hljs-comment">// 保存文件时会删除每行结束后多余的空格</span><br>    <span class="hljs-string">"trim_trailing_white_space_on_save"</span>: <span class="hljs-literal">true</span>,<br>    <span class="hljs-comment">// 关闭自动更新检查</span><br>    <span class="hljs-string">"update_check"</span>: <span class="hljs-literal">false</span>,<br>    <span class="hljs-comment">// 自动换行</span><br>    <span class="hljs-string">"word_wrap"</span>: <span class="hljs-string">"true"</span><br>}<br></code></pre>
                </p>

                <h2>快捷键</h2>
                <p>
                    快捷键的熟练使用，可以提高你的编码效率。sublime 的快捷键有很多，下面列举的这些常用的快捷键，希望能给还不太熟悉的童鞋一些帮助。
                    <img src="~@/assets/blog/bg-20190628-01.png">
                </p>

                <h3>插件</h3>
                <p>
                    sublime 强大的插件功能，使它具有了非常棒的可扩展性。想要优雅地使用 sublime，插件则是不可缺少的存在。
                </p>

                <p>
                    在安装插件之前，首先需要安装 Package Control 组件，它本身也是个插件。点击 sublime 的菜单栏  view->show console，打开控制台，然后运行以下代码：
                    <pre class="hljs lua"><code style="word-break: break-word; white-space: initial;" class="">import urllib.request,<span class="hljs-built_in">os</span>; pf = <span class="hljs-string">'Package Control.sublime-package'</span>; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); <span class="hljs-built_in">open</span>(<span class="hljs-built_in">os</span>.<span class="hljs-built_in">path</span>.join(ipp, pf), <span class="hljs-string">'wb'</span>).<span class="hljs-built_in">write</span>(urllib.request.urlopen( <span class="hljs-string">'http://sublime.wbond.net/'</span> + pf.replace(<span class="hljs-string">' '</span>,<span class="hljs-string">'%20'</span>)).<span class="hljs-built_in">read</span>())</code></pre>
                    等待几秒钟后，如果能在下图中看到 Package Control，就表示安装成功了。
                    <img src="~@/assets/blog/bg-20190628-02.png">
                </p>

                <p>接下来，我列举了一些非常实用的插件，并会简单介绍各自的使用场景。</p>

                <h2>下载插件被“墙”？</h2>
                <p>
                    国内用户在使用 sublime 下载插件时，可能会出现 <code>There are no packages available for installation</code> 的问题。
                </p>

                <p>
                    这个问题出现的原因很简单，就是获取 Sublime Text 3 的网络地址被“墙”了。
                </p>
                <p>
                    对于有梯子的童鞋，很容易解决。为了给翻不了墙的童鞋提供方便，我找到了一种解决方案。说白了也简单，就是使用别人能够访问的地址就行了呗，比如 github。
                    <pre class="hljs groovy"><code style="word-break: break-word; white-space: initial;" class="">https://raw.githubusercontent.com/SuCicada/channel_v3.json/master/channel_v3.json</code></pre>
                    该如何使用呢？
                </p>
                <p>
                    在 "Preferences -> Package Settings -> Package Control -> Settings User" 中新添加一个项 "channels"。
                    <pre class="hljs objectivec"><code class="">"channels":[<br>    "https://raw.githubusercontent.com/SuCicada/channel_v3.json/master/channel_v3.json"<br>    ],</code></pre>
                    ok，搞定！然后就能愉快地下载插件啦~
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
