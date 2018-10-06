<template>
    <div class="blog-container">
        <BlogHeader
            title="前端面试题——CSS" subTitle=""
            date="2018-09-09" :tags="['面试题']">
        </BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>CSS3有哪些新特性？</h2>
                <p>
                    新增选择器 p:nth-child(n){color: rgba(255, 0, 0, 0.75)}<br>
                    弹性盒模型 display: flex;<br>
                    多列布局 column-count: 5;<br>
                    媒体查询 @media (max-width: 480px) {.box: {column-count: 1;}}<br>
                    个性化字体 @font-face{font-family: BorderWeb; src:url(BORDERW0.eot);}<br>
                    颜色透明度 color: rgba(255, 0, 0, 0.75);<br>
                    圆角 border-radius: 5px;<br>
                    渐变 background:linear-gradient(red, green, blue);<br>
                    阴影 box-shadow:3px 3px 3px rgba(0, 64, 128, 0.3);<br>
                    倒影 box-reflect: below 2px;<br>
                    文字装饰 text-stroke-color: red;<br>
                    文字溢出 text-overflow:ellipsis;<br>
                    背景效果 background-size: 100px 100px;<br>
                    边框效果 border-image:url(bt_blue.png) 0 10;<br>
                    转换<br>
                    <ul>
                        <li>旋转 transform: rotate(20deg);</li>
                        <li>倾斜 transform: skew(150deg, -10deg);</li>
                        <li>位移 transform: translate(20px, 20px);</li>
                        <li>缩放 transform: scale(.5);</li>
                    </ul>
                    平滑过渡 transition: all .3s ease-in .1s;<br>
                    动画 @keyframes anim-1 {50% {border-radius: 50%;}} animation: anim-1 1s;
                </p>

                <h2>display: none; 与 visibility: hidden; 的区别</h2>
                <p>
                    共同点：
                    <ul>
                        <li>
                            它们都能让元素不可见。
                        </li>
                        <li>
                            但我们仍然可以通过JavaScript操作该元素，因为浏览器会解析 HTML 标签生成 DOM Tree。虽然一旦 display: none; 了，因此后续的布局、渲染工作自然没它什么事了，至于DOM操作还是可以的。
                        </li>
                        <li>
                            无法获取焦点，即使通过tab键也是没办法的。
                        </li>
                        <li>
                            不耽误form表单提交数据。表单提交时，依然会将隐藏的 input 元素的值提交上去。
                        </li>
                    </ul>
                    区别：
                    <ul>
                        <li>
                            <code>display: none;</code> 会让元素完全从渲染树中消失，渲染的时候不占据任何空间；<code>visibility: hidden;</code> 不会让元素从渲染树消失，渲染师元素继续占据空间，只是内容不可见。
                        </li>
                        <li>
                            父元素为<code>display: none;</code>，子孙元素哪怕设为显示，也没用，会表现成为 display: none;。<br>
                            父元素为<code>visibility: hidden;</code>，而子元素可以设置为 <code>visibility: visible;</code> 是可以生效的。
                        </li>
                        <li>
                            <code>display: none;</code> 的元素无法响应任何事件。<br>
                            而设置为 <code>visibility: hidden;</code> 的元素其子元素可以为 <code>visibility: visible;</code>，因此隐藏的元素有可能位于事件冒泡的路径上。所以可在冒泡阶段响应事件。
                        </li>
                        <li>
                            display 变化时将触发 reflow；而 visibility 变化则不会，只会触发 repaint。
                        </li>
                        <li>
                            读屏器不会读取 display: none; 元素内容；会读取 visibility: hidden 元素内容。
                        </li>
                        <li>
                            Transition 对 display 的变化无效；而对 visibility 的变化有效。
                        </li>
                        <li>
                            CSS中的 counter 会忽略 <code>display: none;</code> 的元素。 而对 visibility 却不会忽略。
                        </li>
                    </ul>
                </p>

                <h2>CSS优先级算法如何计算？</h2>
                <p>
                    基本原则：
                    <ul>
                        <li>优先级就近原则，同权重情况下样式定义最近者为准</li>
                        <li>载入样式以最后载入的定位为准</li>
                        <li>优先级为: !important > id > class > tag important 比 内联优先级高</li>
                    </ul>
                    css定义的权重规则：
                    <ul>
                        <li>标签的权重为1，class的权重为10，id的权重为100</li>
                        <li>如果权重相同，则最后定义的样式会起作用，但是应该避免这种情况出现</li>
                    </ul>
                    <pre class="hljs xml"><code><span class="hljs-comment">// 权重为1</span><br>div{<br>}<br></span><span class="hljs-comment">// 权重为10</span><br>.class1{<br>}<br><span class="hljs-comment">// 权重为100</span><br>#id1{<br>}<br><span class="hljs-comment">// 权重为100+1=101</span><br><span class="hljs-selector-id">#id1</span> div{<br>}<br><span class="hljs-comment">// 权重为10+1=11</span><br><span class="hljs-selector-class">.class1</span> div{<br>}<br><span class="hljs-comment">// 权重为10+10+1=21</span><br><span class="hljs-selector-class">.class1</span> <span class="hljs-selector-class">.class2</span> div{<br>}</code></pre>
                </p>

                <h2>不定宽高的垂直水平居中</h2>
                <p>
                    传送门：
                    <router-link :to="{ name: 'center-of-horizontal-and-vertical'}">
                        CSS中不定宽高的垂直水平居中
                    </router-link>
                </p>

                <h2>对BFC规范的理解？</h2>
                <p>
                    block formatting context（块级格式化上下文）<br>
                    一个页面是由很多个 Box 组成的,元素的类型和 display 属性,决定了这个 Box 的类型<br>
                    不同类型的 Box，会参与不同的 Formatting Context（决定如何渲染文档的容器），因此 Box 内的元素会以不同的方式渲染，也就是说BFC内部的元素和外部的元素不会互相影响
                </p>

                <h2>伪类与伪元素的区别</h2>
                <p>
                    传送门：
                    <router-link :to="{ name: 'pseudo-class-and-element'}">
                        伪类与伪元素的区别
                    </router-link>
                </p>

                <h2>box-sizing的用法</h2>
                <p>
                    传送门：
                    <router-link :to="{ name: 'box-sizing-in-box-modal'}">
                        盒子模型中的box-sizing
                    </router-link>
                </p>

                <h2>圣杯布局与双飞翼布局的原理以及实现</h2>
                <p>
                    两者的实现效果类似，具体可参考
                    <router-link :to="{ name: 'layout-of-grail'}">
                        这篇文章
                    </router-link>
                </p>

                <h2>a标签上四个伪类的正确执行顺序</h2>
                <p><code>L-V-H-A</code> ：link > visited > hover > active</p>

                <h2>如何修改Chrome记住密码后自动填充表单的黄色背景？</h2>
                <p>
                    产生原因：由于Chrome默认会给自动填充的input表单加上 input:-webkit-autofill 私有属性造成的<br>
                    解决方案1：在form标签上直接关闭了表单的自动填充：autocomplete="off"<br>
                    解决方案2：input:-webkit-autofill { background-color: transparent; }
                </p>

                <h2>如果需要手动写动画，你认为最小时间间隔是多久？</h2>
                <p>
                    <ul>
                        <li>16.7ms 多数显示器默认频率是60Hz，即1秒刷新60次</li>
                        <li>所以理论上最小间隔: 1s / 60 * 1000 ＝ 16.7ms</li>
                    </ul>
                </p>

                <h2>一个高度自适应的div，里面有两个div，一个高度100px，另一个高度自适应</h2>
                <p>
                    <ul>
                        <li>方案1： .sub { height: calc(100%-100px); }</li>
                        <li>方案2： .container { position:relative; } .sub { position: absolute; top: 100px; bottom: 0; }</li>
                        <li>方案3： .container { display:flex; flex-direction:column; } .sub { flex:1; }</li>
                    </ul>
                </p>

                <h2>如果设计中使用了非标准的字体，要如何去实现？</h2>
                <p>
                    <ul>
                        <li>图片替代</li>
                        <li>web fonts在线字库，如Google Webfonts，Typekit 等等</li>
                        <li>@font-face</li>
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
