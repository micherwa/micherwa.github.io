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
                    首先，可以在
                    <a href="http://www.sublimetext.com/3" target="_blank">官网</a>
                    下载最新版的安装文件。选择对应的平台，我用的是 mac 版，最新的安装包也才 15.2 M，真的很轻量了。
                </p>

                <p>
                    安装完成后的第一件事，就是按照自己的习惯进行定制啦~
                </p>
                <p>
                    打开 Preferences->Setting，会分屏显示目前的配置。左侧为 Setting-Default 的系统默认配置，不需要动它。一般我们会在右侧的 Setting-User 中添加定制化的配置，我的配置表如下：
                    <pre class="hljs objectivec"><code class="">{<br>    <span class="hljs-comment">// 默认使用Unix换行符，统一风格</span><br>    <span class="hljs-string">"default_line_ending"</span>: <span class="hljs-string">"unix"</span>,<br>    <span class="hljs-comment">// 编写代码时，右侧的代码地图的可视区域部分是否加上边框</span><br>    <span class="hljs-string">"draw_minimap_border"</span>: <span class="hljs-literal">true</span>,<br>    <span class="hljs-string">"font_face"</span>: <span class="hljs-string">"monaco"</span>,<br>    <span class="hljs-comment">// 显示的字体大小</span><br>    <span class="hljs-string">"font_size"</span>: <span class="hljs-number">14</span>,<br>    <span class="hljs-comment">// 突出显示当前光标所在的行</span><br>    <span class="hljs-string">"highlight_line"</span>: <span class="hljs-literal">true</span>,<br>    <span class="hljs-string">"line_padding_bottom"</span>: <span class="hljs-number">1</span>,<br>    <span class="hljs-comment">// 设置每一行到顶部，以像素为单位的间距，效果相当于行距</span><br>    <span class="hljs-string">"line_padding_top"</span>: <span class="hljs-number">1</span>,<br>    <span class="hljs-string">"tab_size"</span>: <span class="hljs-number">4</span>,<br>    <span class="hljs-comment">// 使用空格填充 tab 键</span><br>    <span class="hljs-string">"translate_tabs_to_spaces"</span>: <span class="hljs-literal">true</span>,<br>    <span class="hljs-comment">// 保存文件时会删除每行结束后多余的空格</span><br>    <span class="hljs-string">"trim_trailing_white_space_on_save"</span>: <span class="hljs-literal">true</span>,<br>    <span class="hljs-comment">// 关闭自动更新检查</span><br>    <span class="hljs-string">"update_check"</span>: <span class="hljs-literal">false</span>,<br>    <span class="hljs-comment">// 自动换行</span><br>    <span class="hljs-string">"word_wrap"</span>: <span class="hljs-string">"true"</span><br>}<br></code></pre>
                </p>

                <h2>快捷键</h2>
                <p>
                    快捷键的熟练使用，可以提高你的编码效率。sublime 的快捷键有很多，下面列举的这些常用的快捷键，希望能给还不太熟悉的童鞋一些帮助。
                    <img src="~@/assets/blog/bg-20190628-01.png">
                </p>

                <h3>插件</h3>
                <p>
                    想要优雅地使用 sublime，插件则是不可缺少的存在。强大的插件功能，造就了它无与伦比的扩展性。
                </p>

                <p>
                    在安装插件之前，首先需要安装 Package Control 组件（它本身也是个插件哦~）。
                </p>
                <p>
                    点击 sublime 的菜单栏  view->show console，打开控制台，然后运行以下代码：
                    <pre class="hljs lua"><code style="word-break: break-word; white-space: initial;" class="">import urllib.request,<span class="hljs-built_in">os</span>; pf = <span class="hljs-string">'Package Control.sublime-package'</span>; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); <span class="hljs-built_in">open</span>(<span class="hljs-built_in">os</span>.<span class="hljs-built_in">path</span>.join(ipp, pf), <span class="hljs-string">'wb'</span>).<span class="hljs-built_in">write</span>(urllib.request.urlopen( <span class="hljs-string">'http://sublime.wbond.net/'</span> + pf.replace(<span class="hljs-string">' '</span>,<span class="hljs-string">'%20'</span>)).<span class="hljs-built_in">read</span>())</code></pre>
                    等待几秒钟后，如果能在下图中看到 Package Control，就表示安装成功了。
                    <img src="~@/assets/blog/bg-20190628-02.png">
                </p>

                <p>
                    安装插件也十分简单，点开上图的 Package Control，直接搜索你想安装的包即可。
                    <img src="~@/assets/blog/bg-20190628-03.png">
                </p>

                <p>接下来，会列举一些非常实用的插件，并简单介绍其各自的使用场景。</p>

                <h4>Material-Theme</h4>
                <p>
                    个人比较喜欢的主题，本文的截图用的正是这个主题。
                </p>
                <p>
                    用法：下载成功后，只需要修改 Preferences->Setting 的 Setting-User，引入主题。具体配置如下：
                    <pre class="hljs cs"><code class="">{<br>    <span class="hljs-comment">// 引入下载的主题包</span><br>    <span class="hljs-string">"color_scheme"</span>: <span class="hljs-string">"Packages/Material Theme/schemes/Material-Theme.tmTheme"</span>,<br>    <span class="hljs-comment">// 设置主题</span><br>    <span class="hljs-string">"theme"</span>: <span class="hljs-string">"Material-Theme.sublime-theme"</span>,<br>    <span class="hljs-comment">// 用来将已修改的代码的标签高亮</span><br>    <span class="hljs-string">"highlight_modified_tabs"</span>: <span class="hljs-literal">true</span>,<br>    <span class="hljs-string">"ignored_packages"</span>:<br>    [<span class="hljs-meta"></span><br><span class="hljs-meta">        <span class="hljs-meta-string">"Vintage"</span></span><br><span class="hljs-meta">    </span>],<br>    ...<br>}<br></code></pre>
                </p>

                <h4>babel</h4>
                <p>
                    用于 react 的语法高亮。
                </p>
                <p>
                    安装后，打开 .js, .jsx 后缀的文件，打开菜单 view， Syntax -> Open all with current extension as... -> Babel -> JavaScript (Babel)，选择 babel 为默认 javascript 打开 syntax。
                </p>

                <h4>SCSS</h4>
                <p>
                    支持 sass 语法提示。
                </p>
                <p>
                    相比于 SASS，SCSS 更适合 .scss 的语法支持。因为 SASS 在某些情况下会被其他的插件影响而导致语法提示失效，这时可以引入另一个插件 <code>Syntax Highlighting for Sass</code>，来解决这个问题。
                </p>
                <p>
                    但如果直接用 SCSS，则不会出现这个问题。
                </p>

                <h4>html5</h4>
                <p>支持hmtl5规范的插件包。</p>
                <p>使用方法：新建 html 文档 > 输入 html5 > 敲击 tab 键 > 自动补全 html5 规范文档。</p>

                <h4>git 和 git blame</h4>
                <p>
                    安装 git 可以在底部状态栏显示当前文件的 git 状态。
                </p>
                <p>
                    而 <code>git blame</code> 则用于查看 git 记录。<strong>很赞的一点</strong>是，它可以查看每一行代码在 git 上的记录，包括 提交人、提交时间以及标识。
                </p>

                <h4>docblockr</h4>
                <p>
                    快速帮你为代码建立文档。它会解析函数，变量，和参数，根据它们自动生成文档，你只需要去填充对应的说明即可。
                </p>
                <p>用法：'/**' 快捷键能快速生成函数注释。</p>

                <h4>EditorConfig</h4>
                <p>控制代码的缩进等的代码规范插件。</p>
                <p>
                    安装好之后，在工程中创建文件.editorConfig，例如：
                    <pre class="hljs ini"><code class=""><span class="hljs-comment"># editorconfig.org</span><br><span class="hljs-attr">root</span> = <span class="hljs-literal">true</span><br><span class="hljs-section"></span><br><span class="hljs-section">[*]</span><br><span class="hljs-attr">indent_style</span> = space<br><span class="hljs-attr">indent_size</span> = <span class="hljs-number">4</span><br><span class="hljs-attr">end_of_line</span> = lf<br><span class="hljs-attr">charset</span> = utf-<span class="hljs-number">8</span><br><span class="hljs-attr">trim_trailing_whitespace</span> = <span class="hljs-literal">true</span><br><span class="hljs-attr">insert_final_newline</span> = <span class="hljs-literal">true</span><br><span class="hljs-section"></span><span class="hljs-section">[*.md]</span><br><span class="hljs-attr">trim_trailing_whitespace</span> = <span class="hljs-literal">false</span></code></pre>
                </p>

                <h4>Bracket Highlighter</h4>
                <p>
                    可匹配 []、()、{}、""、''、&lt;tag&gt;&lt;/tag&gt;，高亮标记，便于查看起始和结束标记。
                </p>

                <h4>SideBarEnhancements</h4>
                <p>
                    增强 sublime 的右键功能，包括拷贝、粘贴、删除、重命名等。
                </p>

                <h4>AutoFileName</h4>
                <p>
                    可以自动补全文件名，如图片选取。比如：输入 "/" 即可看到相对于本项目文件夹的其他文件。
                </p>

                <h4>ConvertToUTF8</h4>
                <p>
                    将文件转码成 UTF-8。用于编辑并保存目前编码不被 Sublime Text 支持的文件，特别是中日韩用户使用的 GB2312，GBK，BIG5，EUC-KR，EUC-JP ，ANSI等。安装插件后自动转换为 UTF-8 格式。
                </p>

                <h4>GBK Support</h4>
                <p>
                    可识别 UTF-8 格式的中文，不识别 GBK 和 ANSI，因此打开很多含中文的文档都会出现乱码。可以通过安装插件 GBK Support，来识别 GBK 和 ANSI。
                </p>
                <p>
                    用法：打开一个 GBK 的文件，直接用 GBK encoding 模式另存为即可。
                </p>

                <h4>FileDiffs</h4>
                <p>
                    强大的比较代码不同工具。用于比较当前文件与选中的代码、剪切板中代码、另一文件、未保存文件之间的差别。可配置为显示差别在外部比较工具，精确到行。
                </p>
                <p>用法：右键标签页，出现 FileDiffs Menu 或者 Diff with Tab… 选择对应文件比较即可。</p>

                <h2>下载插件被“墙”？</h2>
                <p>
                    sublime text 3 很好用，但也会有些小问题。比如，国内用户在使用 sublime 下载插件时，可能会出现 <code>There are no packages available for installation</code> 的问题。
                </p>

                <p>
                    这个问题出现的原因很简单，就是获取 Sublime Text 3 的网络地址被“墙”了。
                </p>
                <p>
                    对于有梯子的童鞋，很容易解决。但对于更多的翻不了墙的童鞋，为了给予方便，我找了一种解决方案。说白了也简单，就是使用别人能够访问的地址就行了呗，比如 github。
                    <pre class="hljs groovy"><code style="word-break: break-word; white-space: initial;" class="">https://raw.githubusercontent.com/SuCicada/channel_v3.json/master/channel_v3.json</code></pre>
                    该如何使用呢？
                </p>
                <p>
                    在 "Preferences -> Package Settings -> Package Control -> Settings User" 中新添加一个项 "channels"。
                    <pre class="hljs objectivec"><code class="">"channels":[<br>    "https://raw.githubusercontent.com/SuCicada/channel_v3.json/master/channel_v3.json"<br>    ],</code></pre>
                    然后，快去下载插件试试吧~
                </p>

                <h2>总结</h2>
                <p>
                    sublime 用了挺久了，因为感觉很棒，正是我喜欢的风格。分享给有需要的朋友~
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
