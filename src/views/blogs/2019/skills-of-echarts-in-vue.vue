<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent>
            <div slot="content">
                <h2>前言</h2>
                <p>
                    在近期的项目中，有大量处理可视化数据的需求。说起处理数据的可视化，相信很多同学跟我一样，都会想到用 Echarts 来实现。没错，Echarts 拥有高度可定制化的配置，以及非常详尽的开发文档，并且它的最新版已经更新到了 <a href="https://www.echartsjs.com/zh/download.html" target="_blank">v4.3</a>。
                </p>
                <p>
                    不过，正是因为 Echarts 的开发文档过于庞杂，对于不熟悉 Echarts 的同学来说，在查找某个效果时，可能需要耗费大量的精力。虽然它也配备了一些官方实例，但往往会遇到，只能借鉴其中的某个参数配置的情况，那就只能再回到文档中相互印证，还要自己做 demo，尝试效果。。。
                </p>

                <p>
                    踩坑的过程，是艰辛的，却也收获满满。今天的这篇文章，主要总结近段时间结合 Echarts 实现数据可视化的一些心得体会。其实只需要一些小技巧，就能实现下面这样 “美美哒” 的图表了。

                    <img src="~@/assets/blog/bg-20190928-01.png">

                    希望能给有需要的同学一些启发，相信你也可以定制出自己专属的 Echarts 数据可视化风格。
                </p>

                <h2>版本说明 与 v-charts</h2>

                <p>
                    在踩坑的期间，我也查找了不少资料。有一个不太友好的体验是，很多文章中只说了某个效果的实现，却没提到它的当前版本。当我拿来尝试的时候，却发现怎么也出不来效果，而且运气不好的话，还会报错，这让我很无奈。
                </p>

                <p>
                    所以，为了避免不必要的麻烦。先申明本篇文章中的各种配置以及它的效果，是基于 Echarts 目前的最新版 <strong>V4.3</strong> 实现的。
                </p>

                <p>
                    然后，给大家推荐的一个图表组件：<a href="https://github.com/ElemeFE/v-charts" target="_blank"><strong>v-charts</strong></a>。它是由 “饿了么前端” 开发维护的基于 Vue2.0 和 Echarts 封装的图表组件。我用下来感觉挺不错的，文档很清晰，还有相配合的例子，非常容易上手。它目前的最新版是 <strong>v1.19.0</strong>。
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
                    所以，如果没有很强烈的定制化需求的话，v-charts 已经可以满足大多数的基础需求了。
                </p>

                <p>
                    但如果想实现本文开头的那张图中的效果，还需要在 v-charts 的 <code>extends</code> 属性上花一番功夫。extends 在本质上，对应的就是 Echarts 文档的 <a href="https://www.echartsjs.com/zh/option.html" target="_blank">配置项</a> 中的所有属性。
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

                <h4>4、自定义图例</h4>
                <p>
                    图例，在 Echarts 的配置项中，也叫 legend。通过它可以直观地看到不同颜色对应的数据分布情况。同时，它也是包含点击交互的，当你暂时不想关心某个数据项是，可以点击对应的图例，让它暂时隐藏，再次点击，又会重新渲染出来。
                </p>

                <p>
                    我遇到过更进一步地需求：在柱状图的图例中，要默认展示当天的数据，当点击某一天时柱子时，图例中的数据要随之变化。需求的目的是，让用户能更直观地了解每一天的数据，当他需要看某两天的数据对比时，只需要点击柱子切换数据即可。效果如下：
                    <img src="~@/assets/blog/bg-20190928-08.png">
                    当想看 9月16日的数据时，点击对应的柱子，则图例中的数据会刷新，同时左上角的时间也会随之变化：
                    <img src="~@/assets/blog/bg-20190928-09.png">
                </p>

                <p>
                    实现的思路基本是这样的：
                    <ul>
                        <li>通过点击事件的回调方法，获取当日的具体时间。</li>
                        <li>对左上角的时间做格式化设置。</li>
                        <li>再次设置 extend 的 legend 配置。</li>
                        <li>在 legend 中，通过 formatter 函数返回自定义模板，实现文字与数字的展现。</li>
                        <li>具体的做法是，根据左上角的时间，过滤 chartData.rows 中的数据，找到对应的那一天的数据。</li>
                        <li>配置自定义模板，输出带样式的结果。</li>
                    </ul>
                </p>

                <p>
                    匹配当日数据的具体方法，因为业务逻辑的不同，数据结构也会不同，这里就不细说了。我把事件回调的写法，还有自定义模板的输出的代码贴出来，给大家参考一下：
                    <pre class="hljs ruby"><code class=""><span class="line" data-start="0" data-start-original="1" data-end="1" data-id="11712821"></span>&lt;ve-histogram <span class="hljs-symbol">:data=<span class="hljs-string">"chartData"</span></span> <span class="hljs-symbol">:extend=<span class="hljs-string">"chartExtend"</span></span> <span class="hljs-symbol">:events=<span class="hljs-string">"{ click: handleChartEvents }"</span>&gt;&lt;/ve-histogram&gt;</span>
<span class="line" data-start="2" data-end="2" data-id="11712821"></span>...
<span class="line" data-start="3" data-end="3" data-id="11712821"></span>
<span class="line" data-start="4" data-end="4" data-id="11712821"></span>handleChartEvents (e) {
<span class="line" data-start="5" data-end="5" data-id="11712821"></span>    const date = e.name;
<span class="line" data-start="6" data-end="6" data-id="11712821"></span>    <span class="hljs-regexp">//</span> 设置左上角的时间（带格式化），这里不再展开
<span class="line" data-start="7" data-end="7" data-id="11712821"></span>    this.setCurrentDate(date);
<span class="line" data-start="8" data-end="8" data-id="11712821"></span>    this.setChartExtend();
<span class="line" data-start="9" data-end="9" data-id="11712821"></span>},
<span class="line" data-start="10" data-end="10" data-id="11712821"></span>...
<span class="line" data-start="11" data-end="11" data-id="11712821"></span>setChartExtend () {
<span class="line" data-start="12" data-end="12" data-id="11712821"></span>    this.chartExtend = {
<span class="line" data-start="13" data-end="13" data-id="11712821"></span>        <span class="hljs-symbol">legend:</span> {
<span class="line" data-start="14" data-end="14" data-id="11712821"></span>            <span class="hljs-symbol">formatter:</span> (name) =&gt; {
<span class="line" data-start="15" data-end="15" data-id="11712821"></span>                <span class="hljs-regexp">//</span> currentNumber 是已经匹配到的当日数据
<span class="line" data-start="16" data-end="16" data-id="11712821"></span>                const result = [
<span class="line" data-start="17" data-end="17" data-id="11712821"></span>                    <span class="hljs-string">`{a|${name}}`</span>,
<span class="line" data-start="18" data-end="18" data-id="11712821"></span>                    <span class="hljs-string">`{b|${currentNumber}}`</span>
<span class="line" data-start="19" data-end="19" data-id="11712821"></span>                ];
<span class="line" data-start="20" data-end="20" data-id="11712821"></span>                <span class="hljs-keyword">return</span> result.join(<span class="hljs-string">'\n'</span>);
<span class="line" data-start="21" data-end="21" data-id="11712821"></span>            },
<span class="line" data-start="22" data-end="22" data-id="11712821"></span>            <span class="hljs-symbol">textStyle:</span> {
<span class="line" data-start="23" data-end="23" data-id="11712821"></span>                <span class="hljs-symbol">height:</span> <span class="hljs-number">42</span>,
<span class="line" data-start="24" data-end="24" data-id="11712821"></span>                <span class="hljs-symbol">rich:</span> {
<span class="line" data-start="25" data-end="25" data-id="11712821"></span>                    <span class="hljs-symbol">a:</span> {
<span class="line" data-start="26" data-end="26" data-id="11712821"></span>                        <span class="hljs-symbol">fontSize:</span> <span class="hljs-number">12</span>,
<span class="line" data-start="27" data-end="27" data-id="11712821"></span>                        <span class="hljs-symbol">align:</span> <span class="hljs-string">'left'</span>,
<span class="line" data-start="28" data-end="28" data-id="11712821"></span>                        <span class="hljs-symbol">padding:</span> [<span class="hljs-number">0</span>, <span class="hljs-number">10</span>, <span class="hljs-number">15</span>, <span class="hljs-number">0</span>]
<span class="line" data-start="29" data-end="29" data-id="11712821"></span>                    },
<span class="line" data-start="30" data-end="30" data-id="11712821"></span>                    <span class="hljs-symbol">b:</span> {
<span class="line" data-start="31" data-end="31" data-id="11712821"></span>                        <span class="hljs-symbol">fontSize:</span> <span class="hljs-number">24</span>,
<span class="line" data-start="32" data-end="32" data-id="11712821"></span>                        <span class="hljs-symbol">align:</span> <span class="hljs-string">'left'</span>,
<span class="line" data-start="33" data-end="33" data-id="11712821"></span>                        <span class="hljs-symbol">padding:</span> [<span class="hljs-number">0</span>, <span class="hljs-number">10</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
<span class="line" data-start="34" data-end="34" data-id="11712821"></span>                        <span class="hljs-symbol">lineHeight:</span> <span class="hljs-number">40</span>,
<span class="line" data-start="35" data-end="35" data-id="11712821"></span>                        <span class="hljs-symbol">width:</span> <span class="hljs-number">60</span>
<span class="line" data-start="36" data-end="36" data-id="11712821"></span>                    }
<span class="line" data-start="37" data-end="37" data-id="11712821"></span>                }
<span class="line" data-start="38" data-end="38" data-id="11712821"></span>            },
<span class="line" data-start="39" data-end="39" data-id="11712821"></span>            <span class="hljs-regexp">//</span> 图例标记的图形宽度
<span class="line" data-start="40" data-end="40" data-id="11712821"></span>            <span class="hljs-symbol">itemWidth:</span> <span class="hljs-number">14</span>,
<span class="line" data-start="41" data-end="41" data-id="11712821"></span>            <span class="hljs-regexp">//</span> grid 距离整个容器顶部的高度
<span class="line" data-start="42" data-end="42" data-id="11712821"></span>            <span class="hljs-symbol">grid:</span> {
<span class="line" data-start="43" data-end="43" data-id="11712821"></span>                <span class="hljs-symbol">top:</span> <span class="hljs-number">120</span>
<span class="line" data-start="44" data-end="44" data-id="11712821"></span>            }
<span class="line" data-start="45" data-end="45" data-id="11712821"></span>        },
<span class="line" data-start="46" data-end="46" data-id="11712821"></span>        ...
<span class="line" data-start="47" data-end="47" data-id="11712821"></span>    };
<span class="line" data-start="48" data-end="48" data-id="11712821"></span>},
<span class="line" data-start="49" data-end="49" data-id="11712821"></span>...</code></pre>
                </p>

                <p>
                    点击事件的回调里，可以拿到具体的时间 name，然后交给 setCurrentDate 方法做时间格式化的设置，并渲染到界面上，同时它也是后续匹配当日数据的依据。
                </p>

                <p>
                    在 legend 的 formatter 方法中组装的自定义模板，分别有两个样式 a 和 b，你也可以取别的样式名字，但要记得对应地在 textStyle 的 rich 对象里设置样式。
                </p>

                <p>
                    rich 是富文本样式的自定义写法，有点类似于平时常见的 css，但像 padding 之类的样式写法，又略有不同，而且调试起来并不容易。上述代码中的数字，是经过多次微调之后的结果。
                </p>

                <p>
                    最后的 itemWidth 是为了设置颜色块的宽度，使之变为方形，更加美观。因为图例中添加的数字的样式，所以整体的高度变得大了。grid 的 top，可以调整主绘制区域到整个容器顶部的距离，从而使之距离图例，也能留出更合理的空白高度。
                </p>

                <p>
                    除此之外，对于数据较多的图表，如果刚加载就展示全部数据的话，会比较乱。
                    <img src="~@/assets/blog/bg-20190928-10.png">
                    这时，我们就想，是否可以只展示其中某一类的数据呢？像下面这样：
                    <img src="~@/assets/blog/bg-20190928-11.png">
                </p>

                <p>
                    这里，就需要用到 legend 的 selected 属性。
                </p>

                <h4>5、标记</h4>
                <p>
                    先来回顾下本文开头的那张 “美美哒” 的图表，折线拐点处的一些 “小圆点”，被替换成了小图标。
                    <img src="~@/assets/blog/bg-20190928-01.png">
                    这里的原始需求是：
                    <ul>
                        <li>有一些活动会发生在某些时间点，或时间段内，需要在活动发生的日期上标注出该活动的类型。</li>
                        <li>当同一天有多个活动发生时，采用复合图标，并当展示 tooltip 时，显示当日的每一个活动的信息。</li>
                        <li>tooltip的布局为：首先显示当前日期，中段展示各个活动的图标以及活动名称，最后展示指标名称和对应的数值。</li>
                        <li>没有活动的日期，拐点处与 tooltip 照常显示原先的样式。</li>
                    </ul>
                    所以，它的完整效果，应该是这样的：
                    <img src="~@/assets/blog/bg-20190928-12.png">
                </p>

                <p>
                    要实现这样的效果，需要思考以下几点：
                    <ul>
                        <li>如何通过日期的定向匹配，将活动的图标以“打点”的形式，定在折线拐点处。</li>
                        <li>图标的大小，要怎么设置？它需要区别于正常的拐点标识。</li>
                        <li>tooltip 的样式要如何改写？还需要兼容没有活动的日期样式。</li>
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
