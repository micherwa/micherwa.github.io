<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent>
            <div slot="content">
                <h2>前言</h2>
                <p>
                    在近期的项目中，有大量处理可视化数据的需求。说起这个，相信很多同学跟我一样，都会想到用 Echarts 来实现。没错，Echarts 拥有高度可定制化的配置，以及非常详尽的开发文档，并且它的最新版已经更新到了 <a href="https://www.echartsjs.com/zh/download.html" target="_blank">v4.3</a>。
                </p>
                <p>
                    不过，也是因为 Echarts 的开发文档过于庞杂，对于不熟悉 Echarts 的同学来说，在查找某个效果时，可能需要耗费大量的精力。虽然它也配备了一些官方实例，但或许往往只能借鉴其中的个别配置，还需要回到对应的文档中做印证，另外还得自己做 demo，尝试效果。。。踩坑的过程，很艰辛。
                </p>

                <p>
                    但同时也是收获满满的。今天的这篇文章，主要总结近段时间结合 Echarts 实现数据可视化的一些心得体会。其实只需要一些小技巧，就能实现下面这样 “美美哒” 的图表了。

                    <img src="~@/assets/blog/bg-20190928-01.png">

                    希望给有需要的同学一些启发，相信你也可以定制出自己专属的 Echarts 数据可视化风格。
                </p>

                <h2>版本说明 与 v-charts</h2>

                <p>
                    在踩坑的期间，我查找了不少资料。发现一个不太友好的体验：一些文章中仅仅叙述了某个效果的实现，却没提到它的当前版本。当我拿来尝试的时候，却发现怎么也出不来效果，而且运气不好的话，还会报错，这让我很无奈。
                </p>

                <p>
                    所以，为了避免无谓的麻烦。首先需要申明，本篇文章中的各种配置以及它的效果，是基于 Echarts 目前的最新版 <strong>V4.3</strong> 实现的。
                </p>

                <p>
                    然后，因为项目采用了 Vue 搭建，所以我搭配了 <a href="https://github.com/ElemeFE/v-charts" target="_blank"><strong>v-charts</strong></a> 来实现图表效果。v-charts 是由 “饿了么前端” 开发维护的基于 Vue2.0 和 Echarts 封装的图表组件。我用下来感觉挺不错的，文档很清晰，还有相配合的例子，非常容易上手。它目前的最新版是 <strong>v1.19.0</strong>。
                </p>

                <p>
                    v-charts 一般常用的图表有：ve-line（折线图）、ve-histogram（柱状图）、ve-pie（饼图）、ve-ring（环图）等等。使用时，可以直接将单个图表引入到项目中。
                    <pre><code class="hljs bash" lang="bash">import VeLine from <span class="hljs-string">'v-charts/lib/line.common'</span>;

Vue.component(VeLine.name, VeLine);
</code></pre>
                </p>

                <p>
                    一种典型的 v-charts 的 data 属性数据格式如下：
                    <pre><code class="hljs bash" lang="bash">{
  columns: [<span class="hljs-string">'日期'</span>, <span class="hljs-string">'访问用户'</span>, <span class="hljs-string">'下单用户'</span>],
  rows: [
    { <span class="hljs-string">'日期'</span>: <span class="hljs-string">'2018-05-22'</span>, <span class="hljs-string">'访问用户'</span>: 32371, <span class="hljs-string">'下单用户'</span>: 19810 },
    { <span class="hljs-string">'日期'</span>: <span class="hljs-string">'2018-05-23'</span>, <span class="hljs-string">'访问用户'</span>: 12328, <span class="hljs-string">'下单用户'</span>: 4398 },
    { <span class="hljs-string">'日期'</span>: <span class="hljs-string">'2018-05-24'</span>, <span class="hljs-string">'访问用户'</span>: 92381, <span class="hljs-string">'下单用户'</span>: 52910 }
  ]
}
</code></pre>
                    其中，columns 中是维度和指标的集合，v-charts 中的大部分图表都是单维度多指标，所以默认第一个值为 维度，剩余的值为指标。另外，rows 中是数据的集合。
                </p>
                <p>
                    再举一个柱状图与折线图组合的典型例子。
                    <img src="~@/assets/blog/bg-20190928-02.png">
                    它的代码实现也十分简单，只需额外配置 settings 参数即可，代码如下：
                    <pre><code class="hljs bash" lang="bash">&lt;template&gt;
  &lt;ve-histogram :data=<span class="hljs-string">"chartData"</span> :settings=<span class="hljs-string">"chartSettings"</span>&gt;&lt;/ve-histogram&gt;
&lt;/template&gt;

&lt;script&gt;
  <span class="hljs-built_in">export</span> default {
    <span class="hljs-function"><span class="hljs-title">data</span></span> () {
      this.chartSettings = {
        axisSite: { right: [<span class="hljs-string">'下单率'</span>] },
        yAxisType: [<span class="hljs-string">'KMB'</span>, <span class="hljs-string">'percent'</span>],
        yAxisName: [<span class="hljs-string">'数值'</span>, <span class="hljs-string">'比率'</span>],
        showLine: [<span class="hljs-string">'下单率'</span>],
      }
      <span class="hljs-built_in">return</span> {
        chartData: {
          columns: [<span class="hljs-string">'日期'</span>, <span class="hljs-string">'访问用户'</span>, <span class="hljs-string">'下单用户'</span>, <span class="hljs-string">'下单率'</span>],
          rows: [
            { <span class="hljs-string">'日期'</span>: <span class="hljs-string">'1/1'</span>, <span class="hljs-string">'访问用户'</span>: 1393, <span class="hljs-string">'下单用户'</span>: 1093, <span class="hljs-string">'下单率'</span>: 0.32 },
            { <span class="hljs-string">'日期'</span>: <span class="hljs-string">'1/2'</span>, <span class="hljs-string">'访问用户'</span>: 3530, <span class="hljs-string">'下单用户'</span>: 3230, <span class="hljs-string">'下单率'</span>: 0.26 },
            { <span class="hljs-string">'日期'</span>: <span class="hljs-string">'1/3'</span>, <span class="hljs-string">'访问用户'</span>: 2923, <span class="hljs-string">'下单用户'</span>: 2623, <span class="hljs-string">'下单率'</span>: 0.76 },
            { <span class="hljs-string">'日期'</span>: <span class="hljs-string">'1/4'</span>, <span class="hljs-string">'访问用户'</span>: 1723, <span class="hljs-string">'下单用户'</span>: 1423, <span class="hljs-string">'下单率'</span>: 0.49 },
            { <span class="hljs-string">'日期'</span>: <span class="hljs-string">'1/5'</span>, <span class="hljs-string">'访问用户'</span>: 3792, <span class="hljs-string">'下单用户'</span>: 3492, <span class="hljs-string">'下单率'</span>: 0.323 },
            { <span class="hljs-string">'日期'</span>: <span class="hljs-string">'1/6'</span>, <span class="hljs-string">'访问用户'</span>: 4593, <span class="hljs-string">'下单用户'</span>: 4293, <span class="hljs-string">'下单率'</span>: 0.78 }
          ]
        }
      }
    }
  }
&lt;/script&gt;
</code></pre>
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
                    Echarts 提供了 colors 来自定义颜色，它接收一个数组作为结果。这里有一份来自产品小姐姐的 UI 配色方案，已经可以适用于绝大多数场景了。
                    <img src="~@/assets/blog/bg-20190928-03.png">
                    代码如下：
                    <pre><code class="hljs bash" lang="bash">colors: [<span class="hljs-string">'#60ACFC'</span>, <span class="hljs-string">'#35C5EB'</span>, <span class="hljs-string">'#4DBECF'</span>, <span class="hljs-string">'#65D5B2'</span>, <span class="hljs-string">'#5BC4A0'</span>, <span class="hljs-string">'#9DDD81'</span>, <span class="hljs-string">'#D4ED58'</span>, <span class="hljs-string">'#FFDB43'</span>, <span class="hljs-string">'#FEB54E'</span>, <span class="hljs-string">'#FF9D68'</span>]
</code></pre>
                </p>

                <h4>2、虚线</h4>
                <p>
                    v-charts 中的 x 轴实线看上去有点生硬，可以将它变为虚线，看上去就会清爽很多了，具体可以配置 setOption 下的 yAxis 属性。
                    <pre><code class="hljs bash" lang="bash">yAxis (item) {
    item[0].splitLine = Object.assign({}, {
        lineStyle: {
            color: <span class="hljs-string">'#e1e2e2'</span>,
            <span class="hljs-built_in">type</span>: <span class="hljs-string">'dashed'</span>
        }
    });

    <span class="hljs-built_in">return</span> item;
}
</code></pre>
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
                    <pre><code class="hljs bash" lang="bash">tooltip : {
    axisPointer: {
        lineStyle: {
            color: <span class="hljs-string">'#e1e2e2'</span>,
            <span class="hljs-built_in">type</span>: <span class="hljs-string">'dashed'</span>,
            shadowColor: <span class="hljs-string">'rgba(0, 0, 0, 0.3)'</span>,
            shadowBlur: 5
        }
    }
}
</code></pre>
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
                    <pre><code class="hljs bash" lang="bash">&lt;ve-histogram :extend=<span class="hljs-string">"chartExtend"</span>&gt;&lt;/ve-histogram&gt;
...
this.chartExtend = {
    series: (v) =&gt; {
        Array.from(v).forEach((e, idx) =&gt; {
            <span class="hljs-keyword">if</span> (e.type === <span class="hljs-string">'bar'</span>) {
                e.stack = <span class="hljs-string">'bar'</span>;
            }

            <span class="hljs-keyword">if</span> (e.type === <span class="hljs-string">'line'</span>) {
                e.stack = <span class="hljs-string">'line'</span>;
            }
        };
    },
    ...
};
</code></pre>
                </p>

                <p>
                    而面积图，往往在折线图中是为了突出某一块区域的对比。
                    <img src="~@/assets/blog/bg-20190928-07.png">
                    同样地，在 chartExend 中进行配置：
                    <pre><code class="hljs bash" lang="bash">&lt;ve-line :extend=<span class="hljs-string">"chartExtend"</span>&gt;&lt;/ve-line&gt;
...
this.chartExtend = {
    series: (v) =&gt; {
        Array.from(v).forEach((e, idx) =&gt; {
            // 将指定条件下的折线设置为面积图
            <span class="hljs-keyword">if</span> (...) {
                e.areaStyle = <span class="hljs-string">'line'</span>;
            }

        };
    },
    ...
};
</code></pre>
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
                    <pre><code class="hljs bash" lang="bash">&lt;ve-histogram :data=<span class="hljs-string">"chartData"</span> :extend=<span class="hljs-string">"chartExtend"</span> :events=<span class="hljs-string">"{ click: handleChartEvents }"</span>&gt;&lt;/ve-histogram&gt;
...

handleChartEvents (e) {
    const date = e.name;
    // 设置左上角的时间（带格式化），这里不再展开
    this.setCurrentDate(date);
    this.setChartExtend();
},
...
<span class="hljs-function"><span class="hljs-title">setChartExtend</span></span> () {
    this.chartExtend = {
        legend: {
            formatter: (name) =&gt; {
                // currentNumber 是已经匹配到的当日数据
                const result = [
                    `{a|<span class="hljs-variable">${name}</span>}`,
                    `{b|<span class="hljs-variable">${currentNumber}</span>}`
                ];
                <span class="hljs-built_in">return</span> result.join(<span class="hljs-string">'\n'</span>);
            },
            textStyle: {
                height: 42,
                rich: {
                    a: {
                        fontSize: 12,
                        align: <span class="hljs-string">'left'</span>,
                        padding: [0, 10, 15, 0]
                    },
                    b: {
                        fontSize: 24,
                        align: <span class="hljs-string">'left'</span>,
                        padding: [0, 10, 0, 0],
                        lineHeight: 40,
                        width: 60
                    }
                }
            },
            // 图例标记的图形宽度
            itemWidth: 14,
            // grid 距离整个容器顶部的高度
            grid: {
                top: 120
            }
        },
        ...
    };
},
...
</code></pre>
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

                <h4>5、mini图</h4>

                <p>
                    刚接到需求的时候，第一时间想到的是下面这张图的模样：
                    <img src="~@/assets/blog/bg-20190928-17.png">
                    这是一个不同缓动函数效果的官方示例，每一个缓动效果图都带有一个标题组件。
                </p>
                <p>
                    研究了 <a href="https://echarts.apache.org/examples/zh/editor.html?c=line-easing" target="_blank">示例代码</a> 后，发现它的实现原理是：模拟了输入 x 轴的不断变大的值，通过不同的效果函数，来输出对应的 y 轴的值，达到呈现出不同的效果。
                </p>

                <p>
                    很遗憾，这没法不适用于我们的需求。我们希望实现一个迷你的单一数据趋势图，没有任何坐标轴，但数据的趋势并不一定是线性增长的。然而，值得庆幸的是，可以借鉴其中的隐藏坐标轴的做法。具体的实现，还是要设置 extend，代码如下：
                    <pre><code class="hljs bash" lang="bash">&lt;ve-line :data=<span class="hljs-string">"chartData"</span> :extend=<span class="hljs-string">"chartExtend"</span> width=<span class="hljs-string">"120px"</span> height=<span class="hljs-string">"40px"</span>&gt;
...

this.chartExtend = {
    xAxis: {
        show: <span class="hljs-literal">false</span>,
    },
    yAxis: {
        show: <span class="hljs-literal">false</span>,
    },
    legend: {
        show: <span class="hljs-literal">false</span>
    },
    grid: {
        show: <span class="hljs-literal">true</span>,
        left: 0,
        top: 5,
        width: <span class="hljs-string">'100%'</span>,
        height: <span class="hljs-string">'100%'</span>,
        borderWidth: 0,
        backgroundColor: <span class="hljs-string">'#fff'</span>,
    },
    series: (v) =&gt; {
        Array.from(v).forEach((e, idx) =&gt; {
            e.symbol = <span class="hljs-string">'circle'</span>;
            e.symbolSize = 2;
            e.areaStyle = { opacity: 0.3 };
        });
        <span class="hljs-built_in">return</span> v;
    },
    tooltip: {
        formatter: (params) =&gt; {
            <span class="hljs-built_in">let</span> result = <span class="hljs-string">''</span>;
            params.forEach(param =&gt; {
                <span class="hljs-built_in">let</span> str = `<span class="hljs-variable">${param.marker}</span><span class="hljs-variable">${param.value[0]}</span> <span class="hljs-variable">${param.value[1]}</span>&lt;br&gt;`;
                result += str;
            });

            <span class="hljs-built_in">return</span> result;
        }
    }
};
</code></pre>
                </p>

                <p>
                    因为是迷你的图表，所以需要在布局中，将它调整为可控的大小。相应的，grid 属性的 top 和 left，也可以帮我们做微调。x 轴，y 轴，图例，这些都隐藏掉。最后，为了支持 tooltip，对其结构进行了 formatter。最终的呈现效果如下：
                    <img src="~@/assets/blog/bg-20190928-18.png">
                    正因为 mini 图的尺寸足够的小，所以比较适合于对某些重要数据，做周期性的趋势解读，并可以位于重要数据的附近。这也能使得界面的布局，看上去更为的协调。
                </p>

                <h4>6、双轴单线</h4>

                <p>
                    当一张图表中，存在双轴时，很大概率下都会出现 2 个 y 轴的刻度不一致的情况。
                    <img src="~@/assets/blog/bg-20190928-02.png">
                    想想也是啊，设置为双轴的原因，本来就是因为它们的数值差异过大。如果不设置双轴，某些数据就看不到了，并不是没有渲染，而是因为太小，导致其被数值大的数据 “淹没” 了。
                </p>

                <p>
                    一种解决方案是，需要自己去定义 y 轴的 max，min，interval。因为系统不会再自动计算适配了。
                    <pre><code class="hljs bash" lang="bash">yAxis:[
    {......},
    {
      <span class="hljs-built_in">type</span>: <span class="hljs-string">'value'</span>,
      name: <span class="hljs-string">'销售额(元)'</span>,
      min: 0,
      max: max,        // 计算最大值
      interval: Math.ceil(max / 5),   //  平均分为5份
      axisLabel: {
        formatter: <span class="hljs-string">'{value}'</span>
      }
]
</code></pre>
                    这个方案可以将双轴的刻度重合在一起，实现 “单线” 的效果。但是，因为要自己算，所以略微有些麻烦，均分的份数可能会因为界面的美观，需要进行调整。如果双轴的单位不一致，比如左侧为数值，右侧为百分比，也挺麻烦的。
                </p>

                <p>
                    所以，就想了一个 “偷懒” 的办法。既然只要展示 “单线”，那就把第二根线隐藏起来呗，其实尽管是 “双线”，但其实它们之间离得还是挺近的，从效果上来看，并没有太大的影响。
                </p>

                <p>
                    实现方案也很简单，还记得之前介绍 “虚线” 是如何设置的么？
                    <pre><code class="hljs bash" lang="bash">yAxis (item) {
    item[0].splitLine = Object.assign({}, {
        lineStyle: {
            color: <span class="hljs-string">'#e1e2e2'</span>,
            <span class="hljs-built_in">type</span>: <span class="hljs-string">'dashed'</span>
        }
    });

    <span class="hljs-built_in">return</span> item;
}
</code></pre>
                    其中的 item[0] 代表的是左侧最常用的 y 轴。那么右侧的自然就是 item[1] 了，把它隐藏起来就行了：
                    <pre><code class="hljs bash" lang="bash">yAxis (item) {
    item[0].splitLine = Object.assign({}, {
        ...
    });

    item[1].splitLine = {
        show: <span class="hljs-literal">false</span>
    };

    <span class="hljs-built_in">return</span> item;
},
</code></pre>
                    是不是很简单？其实知道了对的方法，实现起来还是简直就是 easy 模式。但往往探究 “对的方法” 需要耗费大量的精力。
                </p>

                <h2>总结</h2>
                <p>
                    今天介绍了几种 Echarts 定制化的方案，多是由实际工作中提炼总结出来的小技巧，希望能帮到有需要的同学。如果你觉得本文还不错，还请点个 “赞” 或者 “关注”，以便让更多有需要的同学看到，感谢支持！
                </p>

                <p>
                    可能细心的同学会问：本文开头的那张图中的“小图标”是如何实现的呢？文章中貌似没有涉及到。
                </p>

                <p>
                    是的。由于篇幅的关系，我会单独再开一篇，专门来聊一聊关于 “标记” 的定制化方案，欢迎大家届时捧场，感谢！
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
