<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent>
            <div slot="content">
                <h2>前言</h2>
                <p>
                    在近期的项目中，需要集中处理图表的需求，相信很多同学都会想到用 Echarts 来实现。没错，Echarts 拥有高度可定制化的配置，以及非常详尽的开发文档，并且它的最新版已经更新到了 <a href="https://www.echartsjs.com/zh/download.html" target="_blank">v4.3</a>。
                </p>
                <p>
                    今天这篇文章，主要总结近段时间踩坑 Echarts 的一些心得体会。其实只需要一些小技巧，就能实现下面这样 “美美哒” 图表了。

                    <img src="~@/assets/blog/bg-20190928-01.png">

                    希望能给有需要的同学一些启发，相信你也可以定制出自己专属的 Echarts 图表风格。
                </p>

                <h2>版本说明 与 v-charts</h2>

                <p>
                    在踩坑的期间，我也查找了不少资料。有一个不太友好的体验是，很多文章中只说了某个效果的实现，却没提到它的当前版本。
                </p>
                <p>
                    这让我很无奈，不得不先拿来尝试一把，却发现怎么也出不来效果，而且运气不好的话，还会报错。最后才发现那是两三年前的文章了，但也只能猜测，可能是因为版本的不同导致效果出不来。
                </p>

                <p>所以，为了避免不必要的麻烦。先申明本篇文章中的各种配置以及它的效果，是基于 Echarts 目前的最新版 <strong>V4.3</strong> 实现的。</p>

                <p>
                    然后，给大家推荐的一个图表组件：<a href="https://github.com/ElemeFE/v-charts" target="_blank"><strong>v-charts</strong></a>。它是由 饿了么前端 开发维护的基于 Vue2.0 和 Echarts 封装的图表组件。我用下来感觉挺不错的，文档很清晰，还有相配合的例子，非常容易上手。它目前的最新版是 <strong>v1.19.0</strong>。
                </p>

                <p>
                    一般常用的图表有：ve-line（折线图）、ve-histogram（柱状图）、ve-pie（饼图）、ve-ring（环图）等等。使用时，可以直接将单个图表引入到项目中。
                    <pre class="hljs typescript"><code class=""><span class="hljs-keyword">import</span> VeLine <span class="hljs-keyword">from</span> <span class="hljs-string">'v-charts/lib/line.common'</span>;<br><br>Vue.component(VeLine.name, VeLine);</code></pre>
                </p>

                <p>
                    一种典型的 v-charts 的 data 属性数据格式如下：
                    <pre class="hljs typescript"><code class="">{<br>  columns: [<span class="hljs-string">'日期'</span>, <span class="hljs-string">'访问用户'</span>, <span class="hljs-string">'下单用户'</span>],<br>  rows: [<br>    { <span class="hljs-string">'日期'</span>: <span class="hljs-string">'2018-05-22'</span>, <span class="hljs-string">'访问用户'</span>: <span class="hljs-number">32371</span>, <span class="hljs-string">'下单用户'</span>: <span class="hljs-number">19810</span> },<br>    { <span class="hljs-string">'日期'</span>: <span class="hljs-string">'2018-05-23'</span>, <span class="hljs-string">'访问用户'</span>: <span class="hljs-number">12328</span>, <span class="hljs-string">'下单用户'</span>: <span class="hljs-number">4398</span> },<br>    { <span class="hljs-string">'日期'</span>: <span class="hljs-string">'2018-05-24'</span>, <span class="hljs-string">'访问用户'</span>: <span class="hljs-number">92381</span>, <span class="hljs-string">'下单用户'</span>: <span class="hljs-number">52910</span> }<br>  ]<br>}</code></pre>
                    其中，columns 中是维度和指标的集合，v-charts 中的大部分图表都是单维度多指标，所以默认第一个值为 维度，剩余的值为指标。另外，rows 中是数据的集合。
                </p>
                <p>
                    再举一个柱状图与折线图组合的典型例子。
                    <img src="~@/assets/blog/bg-20190928-02.png">
                    它的代码实现也十分简单，只需额外配置 settings 参数即可，代码如下：
                    <pre class="hljs xml"><code><span class="line" data-start="0" data-start-original="1" data-end="1" data-id="4840363"></span><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
<span class="line" data-start="2" data-end="2" data-id="4840363"></span>  <span class="hljs-tag">&lt;<span class="hljs-name">ve-histogram</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">"chartData"</span> <span class="hljs-attr">:settings</span>=<span class="hljs-string">"chartSettings"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ve-histogram</span>&gt;</span>
<span class="line" data-start="3" data-end="3" data-id="4840363"></span><span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="line" data-start="4" data-end="4" data-id="4840363"></span>
<span class="line" data-start="5" data-end="5" data-id="4840363"></span><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
</span><span class="line" data-start="6" data-end="6" data-id="4840363"></span><span class="javascript">  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
</span><span class="line" data-start="7" data-end="7" data-id="4840363"></span><span class="javascript">    data () {
</span><span class="line" data-start="8" data-end="8" data-id="4840363"></span><span class="javascript">      <span class="hljs-keyword">this</span>.chartSettings = {
</span><span class="line" data-start="9" data-end="9" data-id="4840363"></span><span class="javascript">        <span class="hljs-attr">axisSite</span>: { <span class="hljs-attr">right</span>: [<span class="hljs-string">'下单率'</span>] },
</span><span class="line" data-start="10" data-end="10" data-id="4840363"></span><span class="javascript">        <span class="hljs-attr">yAxisType</span>: [<span class="hljs-string">'KMB'</span>, <span class="hljs-string">'percent'</span>],
</span><span class="line" data-start="11" data-end="11" data-id="4840363"></span><span class="javascript">        <span class="hljs-attr">yAxisName</span>: [<span class="hljs-string">'数值'</span>, <span class="hljs-string">'比率'</span>],
</span><span class="line" data-start="12" data-end="12" data-id="4840363"></span><span class="javascript">        <span class="hljs-attr">showLine</span>: [<span class="hljs-string">'下单率'</span>],
</span><span class="line" data-start="13" data-end="13" data-id="4840363"></span><span class="javascript">      }
</span><span class="line" data-start="14" data-end="14" data-id="4840363"></span><span class="javascript">      <span class="hljs-keyword">return</span> {
</span><span class="line" data-start="15" data-end="15" data-id="4840363"></span><span class="javascript">        <span class="hljs-attr">chartData</span>: {
</span><span class="line" data-start="16" data-end="16" data-id="4840363"></span><span class="javascript">          <span class="hljs-attr">columns</span>: [<span class="hljs-string">'日期'</span>, <span class="hljs-string">'访问用户'</span>, <span class="hljs-string">'下单用户'</span>, <span class="hljs-string">'下单率'</span>],
</span><span class="line" data-start="17" data-end="17" data-id="4840363"></span><span class="javascript">          <span class="hljs-attr">rows</span>: [
</span><span class="line" data-start="18" data-end="18" data-id="4840363"></span><span class="javascript">            { <span class="hljs-string">'日期'</span>: <span class="hljs-string">'1/1'</span>, <span class="hljs-string">'访问用户'</span>: <span class="hljs-number">1393</span>, <span class="hljs-string">'下单用户'</span>: <span class="hljs-number">1093</span>, <span class="hljs-string">'下单率'</span>: <span class="hljs-number">0.32</span> },
</span><span class="line" data-start="19" data-end="19" data-id="4840363"></span><span class="javascript">            { <span class="hljs-string">'日期'</span>: <span class="hljs-string">'1/2'</span>, <span class="hljs-string">'访问用户'</span>: <span class="hljs-number">3530</span>, <span class="hljs-string">'下单用户'</span>: <span class="hljs-number">3230</span>, <span class="hljs-string">'下单率'</span>: <span class="hljs-number">0.26</span> },
</span><span class="line" data-start="20" data-end="20" data-id="4840363"></span><span class="javascript">            { <span class="hljs-string">'日期'</span>: <span class="hljs-string">'1/3'</span>, <span class="hljs-string">'访问用户'</span>: <span class="hljs-number">2923</span>, <span class="hljs-string">'下单用户'</span>: <span class="hljs-number">2623</span>, <span class="hljs-string">'下单率'</span>: <span class="hljs-number">0.76</span> },
</span><span class="line" data-start="21" data-end="21" data-id="4840363"></span><span class="javascript">            { <span class="hljs-string">'日期'</span>: <span class="hljs-string">'1/4'</span>, <span class="hljs-string">'访问用户'</span>: <span class="hljs-number">1723</span>, <span class="hljs-string">'下单用户'</span>: <span class="hljs-number">1423</span>, <span class="hljs-string">'下单率'</span>: <span class="hljs-number">0.49</span> },
</span><span class="line" data-start="22" data-end="22" data-id="4840363"></span><span class="javascript">            { <span class="hljs-string">'日期'</span>: <span class="hljs-string">'1/5'</span>, <span class="hljs-string">'访问用户'</span>: <span class="hljs-number">3792</span>, <span class="hljs-string">'下单用户'</span>: <span class="hljs-number">3492</span>, <span class="hljs-string">'下单率'</span>: <span class="hljs-number">0.323</span> },
</span><span class="line" data-start="23" data-end="23" data-id="4840363"></span><span class="javascript">            { <span class="hljs-string">'日期'</span>: <span class="hljs-string">'1/6'</span>, <span class="hljs-string">'访问用户'</span>: <span class="hljs-number">4593</span>, <span class="hljs-string">'下单用户'</span>: <span class="hljs-number">4293</span>, <span class="hljs-string">'下单率'</span>: <span class="hljs-number">0.78</span> }
</span><span class="line" data-start="24" data-end="24" data-id="4840363"></span><span class="javascript">          ]
</span><span class="line" data-start="25" data-end="25" data-id="4840363"></span><span class="javascript">        }
</span><span class="line" data-start="26" data-end="26" data-id="4840363"></span><span class="javascript">      }
</span><span class="line" data-start="27" data-end="27" data-id="4840363"></span><span class="javascript">    }
</span><span class="line" data-start="28" data-end="28" data-id="4840363"></span><span class="javascript">  }
</span><span class="line" data-start="29" data-end="29" data-id="4840363"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
                </p>
                <p>
                    所以，如果没有很强烈的定制化需求的话，v-charts 已经可以满足大多数的基础需求了。但如果想实现本文开头的那张图中的效果，还需要在 v-charts 的 <code>extends</code> 属性上花一番功夫。extends 在本质上，对应的就是 Echarts 文档的 <a href="https://www.echartsjs.com/zh/option.html" target="_blank">配置项</a> 中的所有属性。
                </p>

                <h2>定制化的踩坑之旅</h2>
                <p>
                    接下来，会在 v-charts 的基础配置之上，具体地介绍一些很实用的小技巧，来帮助你实现 Echarts 的深度定制化需求。
                </p>

                <h4>1、配色</h4>
                <p>
                    Echarts 提供了 colors 来自定义颜色，它接收一个数组作为结果。这里有一份出自产品小姐姐的 UI 配色方案，已经可以适用于绝大多数场景了。
                    <img src="~@/assets/blog/bg-20190928-03.png">
                    代码如下：
                    <pre class="hljs groovy"><code style="word-break: break-word; white-space: initial;" class=""><span class="line" data-start="0" data-start-original="1" data-end="1" data-id="10492862"></span><span class="hljs-string">colors:</span> [<span class="hljs-string">'#60ACFC'</span>, <span class="hljs-string">'#35C5EB'</span>, <span class="hljs-string">'#4DBECF'</span>, <span class="hljs-string">'#65D5B2'</span>, <span class="hljs-string">'#5BC4A0'</span>, <span class="hljs-string">'#9DDD81'</span>, <span class="hljs-string">'#D4ED58'</span>, <span class="hljs-string">'#FFDB43'</span>, <span class="hljs-string">'#FEB54E'</span>, <span class="hljs-string">'#FF9D68'</span>]</code></pre>
                </p>

                <h4>2、虚线</h4>
                <p>
                    v-charts 中的 x 轴实线看上去有点生硬，可以将它变为虚线，看上去就会清爽很多了，具体可以配置 setOption 下的 yAxis 属性。
                    <pre class="hljs typescript"><code class=""><span class="line" data-start="0" data-start-original="1" data-end="1" data-id="12852058"></span>yAxis (item) {
<span class="line" data-start="2" data-end="2" data-id="12852058"></span>    item[<span class="hljs-number">0</span>].splitLine = <span class="hljs-built_in">Object</span>.assign({}, {
<span class="line" data-start="3" data-end="3" data-id="12852058"></span>        lineStyle: {
<span class="line" data-start="4" data-end="4" data-id="12852058"></span>            color: <span class="hljs-string">'#e1e2e2'</span>,
<span class="line" data-start="5" data-end="5" data-id="12852058"></span>            <span class="hljs-keyword">type</span>: <span class="hljs-string">'dashed'</span>
<span class="line" data-start="6" data-end="6" data-id="12852058"></span>        }
<span class="line" data-start="7" data-end="7" data-id="12852058"></span>    });
<span class="line" data-start="8" data-end="8" data-id="12852058"></span>
<span class="line" data-start="9" data-end="9" data-id="12852058"></span>    <span class="hljs-keyword">return</span> item;
<span class="line" data-start="10" data-end="10" data-id="12852058"></span>}</code></pre>
                    这里用到了 es6 中 function 的简写模式。其中的 item 指的是 y 轴，为什么是个数组呢？那是因为一般情况下单个直角坐标系 grid 组件最多只能放左右两个 y 轴。那么 item[0] 是指左侧的最常用的 y 轴，item[1] 是指当有双轴情况下的右侧的 y 轴。
                </p>
                <p>
                    这里核心是要设置 splitLine 下的 lineStyle，效果就如开篇的第一张图那样：
                    <img src="~@/assets/blog/bg-20190928-05.png">
                </p>

                <p>
                    当然，也可以定制 tooltip的虚线，效果如下：
                    <img src="~@/assets/blog/bg-20190928-04.png">
                    只需要配置 tooltip 下 axisPointer 的 lineStyle 即可，代码很简单：
                    <pre class="hljs css"><code class=""><span class="line" data-start="0" data-start-original="1" data-end="1" data-id="6410894"></span><span class="hljs-selector-tag">tooltip</span> : {
<span class="line" data-start="2" data-end="2" data-id="6410894"></span>    <span class="hljs-attribute">axisPointer</span>: {
<span class="line" data-start="3" data-end="3" data-id="6410894"></span>        lineStyle: {
<span class="line" data-start="4" data-end="4" data-id="6410894"></span>            color: <span class="hljs-string">'#e1e2e2'</span>,
<span class="line" data-start="5" data-end="5" data-id="6410894"></span>            type: <span class="hljs-string">'dashed'</span>,
<span class="line" data-start="6" data-end="6" data-id="6410894"></span>            shadowColor: <span class="hljs-string">'rgba(0, 0, 0, 0.3)'</span>,
<span class="line" data-start="7" data-end="7" data-id="6410894"></span>            shadowBlur: <span class="hljs-number">5</span>
<span class="line" data-start="8" data-end="8" data-id="6410894"></span>        }
<span class="line" data-start="9" data-end="9" data-id="6410894"></span>    }
<span class="line" data-start="10" data-end="10" data-id="6410894"></span>}</code></pre>
                </p>

                <h4>3、堆叠与面积</h4>
                <p>
                    堆叠图与面积图在刚接触时容易混淆，它们实际上是两种不同的效果。
                </p>

                <p>
                    堆叠图中的后一项数据会叠在前一项数据之上，像下面这样：
                    <img src="~@/assets/blog/bg-20190928-06.png">
                </p>

                <p>
                    可以通过设置 v-charts 提供的 extend 属性进行配置。之前也说过，它本质上就是配置 Echarts 中的 setOption。
                </p>
                <p>
                    我们分别对柱状图和折线图设置了堆叠效果，可以发现 e.stack 的值是分开设置的，不然的话在数值上就会再次叠加。
                    <pre class="hljs ruby"><code class=""><span class="line" data-start="0" data-start-original="1" data-end="1" data-id="11585835"></span>&lt;ve-histogram <span class="hljs-symbol">:extend=<span class="hljs-string">"chartExtend"</span>&gt;&lt;/ve-histogram&gt;</span>
<span class="line" data-start="2" data-end="2" data-id="11585835"></span>...
<span class="line" data-start="3" data-end="3" data-id="11585835"></span>this.chartExtend = {
<span class="line" data-start="4" data-end="4" data-id="11585835"></span>    <span class="hljs-symbol">series:</span> (v) =&gt; {
<span class="line" data-start="5" data-end="5" data-id="11585835"></span>        Array.from(v).forEach((e, idx) =&gt; {
<span class="line" data-start="6" data-end="6" data-id="11585835"></span>            <span class="hljs-keyword">if</span> (e.type === <span class="hljs-string">'bar'</span>) {
<span class="line" data-start="7" data-end="7" data-id="11585835"></span>                e.stack = <span class="hljs-string">'bar'</span>;
<span class="line" data-start="8" data-end="8" data-id="11585835"></span>            }
<span class="line" data-start="9" data-end="9" data-id="11585835"></span>
<span class="line" data-start="10" data-end="10" data-id="11585835"></span>            <span class="hljs-keyword">if</span> (e.type === <span class="hljs-string">'line'</span>) {
<span class="line" data-start="11" data-end="11" data-id="11585835"></span>                e.stack = <span class="hljs-string">'line'</span>;
<span class="line" data-start="12" data-end="12" data-id="11585835"></span>            }
<span class="line" data-start="13" data-end="13" data-id="11585835"></span>        };
<span class="line" data-start="14" data-end="14" data-id="11585835"></span>    },
<span class="line" data-start="15" data-end="15" data-id="11585835"></span>    ...
<span class="line" data-start="16" data-end="16" data-id="11585835"></span>};</code></pre>
                </p>

                <p>
                    而面积图，往往在折线图中是为了突出某一块区域的对比。
                    <img src="~@/assets/blog/bg-20190928-07.png">
                    同样地，在 chartExend 中进行配置：
                    <pre class="hljs ruby"><code class=""><span class="line" data-start="0" data-start-original="1" data-end="1" data-id="4898210"></span>&lt;ve-line <span class="hljs-symbol">:extend=<span class="hljs-string">"chartExtend"</span>&gt;&lt;/ve-line&gt;</span>
<span class="line" data-start="2" data-end="2" data-id="4898210"></span>...
<span class="line" data-start="3" data-end="3" data-id="4898210"></span>this.chartExtend = {
<span class="line" data-start="4" data-end="4" data-id="4898210"></span>    <span class="hljs-symbol">series:</span> (v) =&gt; {
<span class="line" data-start="5" data-end="5" data-id="4898210"></span>        Array.from(v).forEach((e, idx) =&gt; {
<span class="line" data-start="6" data-end="6" data-id="4898210"></span>            <span class="hljs-regexp">//</span> 将指定条件下的折线设置为面积图
<span class="line" data-start="7" data-end="7" data-id="4898210"></span>            <span class="hljs-keyword">if</span> (...) {
<span class="line" data-start="8" data-end="8" data-id="4898210"></span>                e.areaStyle = <span class="hljs-string">'line'</span>;
<span class="line" data-start="9" data-end="9" data-id="4898210"></span>            }
<span class="line" data-start="10" data-end="10" data-id="4898210"></span>
<span class="line" data-start="11" data-end="11" data-id="4898210"></span>        };
<span class="line" data-start="12" data-end="12" data-id="4898210"></span>    },
<span class="line" data-start="13" data-end="13" data-id="4898210"></span>    ...
<span class="line" data-start="14" data-end="14" data-id="4898210"></span>};</code></pre>
                </p>

                <h4>自定义图例</h4>
                <p>
                    图例，在 Echarts 的配置项中，也叫 legend。通过它可以直观地看到不同颜色对应的数据分布情况。同时，它也是包含点击交互的，当你暂时不想关心某个数据项是，可以点击对应的图例，让它暂时隐藏，再次点击，又会重新渲染出来。
                </p>

                <p>
                    我遇到过更进一步地需求：在柱状图的图例中，要默认展示当天的数据，当点击某一天时柱子时，图例中的数据要随之变化。需求的目的是，让用户能更直观地了解每一天的数据，当他需要看某两天的数据对比时，只需要点击柱子切换数据即可。效果如下：
                    <img src="~@/assets/blog/bg-20190928-08.png">
                    当想看 9月16日的数据时，点击对应的柱子：
                    <img src="~@/assets/blog/bg-20190928-09.png">
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
