<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent>
            <div slot="content">
                <h2>前言</h2>

                <p>
                    接上一篇文章 <a href="" target="_blank">《「干货」用 Vue + Echarts 打造你的专属可视化界面（上）》</a>，今天着重介绍 <code>标记</code> 的用法，来实现下图中的效果。
                    <img src="~@/assets/blog/bg-20190928-01.png">
                </p>
                <p>
                    所用的 Echarts 的版本号为： v4.3。v-charts 的版本号为：v1.19.0。
                </p>

                <p>标记的用法有很多，今天会介绍的场景有：折线图、柱状图、折线图 + 柱状图。</p>

                <h2>折线图标记 —— symbol</h2>

                <p>
                    上图中，折线的拐点处，一些 “小圆点”，被替换成了小图标。
                </p>
                <p>
                    要实现这样的效果，需要先理一下原始的需求：
                    <ul>
                        <li>每种标记，代表一种活动类型。</li>
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

                <p>思路解析：</p>

                <p>
                    首先为了做日期的定向匹配，需要设计数据结构，形如下面这样：
                    <pre><code class="hljs bash" lang="bash">data: [
    {
        id: <span class="hljs-string">'1, 1, 3, 2'</span>,
        date: <span class="hljs-string">'2019-10-10'</span>,
        name: <span class="hljs-string">'test-name1, test-name2, test-name3, test-name4'</span>
    },
    ...
]
</code></pre>
                    接下来的这个 <strong>核心</strong> 属性：<code>symbol</code> 是关键，它其实就是折线上的 “点”。
                </p>

                <p>
                    symbol 支持的标记类型有：circle、rect、roundRect、triangle、diamond、pin、arrow、none。默认情况下为：emptyCircle，也就是空心的圆。
                </p>

                <p>
                    它还支持链接的格式：<code>'image://http://xxx.xxx.xxx/a/b.png'</code>。此外，如果需要每个数据的图形不一样，可以设置为如下格式的回调函数：
                    <pre><code class="hljs bash" lang="bash">(value: Array|number, params: Object) =&gt; string
</code></pre>
                    其中第一个参数 value 为 data 中的数据值。第二个参数 params 是其它的数据项参数。
                </p>
                <p>
                    这些正是我们需要的。踩坑亲测：上述回调函数，只有在最新版的 <code>V4.3</code> 中才能正常使用，否则会报错。这也是为何，我在一开始就先强调了 Echarts 的版本问题。具体实现如下：
                    <pre><code class="hljs bash" lang="bash">&lt;ve-line ... :extend=<span class="hljs-string">"chartExtend"</span>&gt;&lt;/ve-line&gt;
...

// mock 包含标注的数据结构
dataList: [
    {
        id: <span class="hljs-string">'1, 1, 3, 2'</span>,
        date: <span class="hljs-string">'2019-10-10'</span>,
        name: <span class="hljs-string">'test-name1, test-name2, test-name3, test-name4'</span>
    },
    ...
    {
        id: <span class="hljs-string">'1'</span>,
        date: <span class="hljs-string">'2019-10-17'</span>,
        name: <span class="hljs-string">'test-name1'</span>
    }
],
...

<span class="hljs-function"><span class="hljs-title">setChartExtend</span></span> () {
    this.chartExtend = {
        series: (v) =&gt; {
            Array.from(v).forEach((e, idx) =&gt; {
                e.symbol = (value, params) =&gt; {
                    <span class="hljs-built_in">return</span> getSymbolIcon(params.name, dataList);
                };
                e.symbolSize = (value, params) =&gt; {
                    <span class="hljs-built_in">return</span> getSymbolSize(params.name, dataList);
                };
            });
            <span class="hljs-built_in">return</span> v;
        },
        ...
    };
},

getSymbolIcon (date, dataList) {
    const defaultSymbol = <span class="hljs-string">'circle'</span>;

    <span class="hljs-keyword">if</span> (!dataList || dataList.length === 0) {
        <span class="hljs-built_in">return</span> defaultSymbol;
    }

    // 通过日期匹配，找到对应的标注对象
    const dataItem = dataList.find(item =&gt; item.date === date);

    const iconUrl = getSymbolUrl(dataItem.id);
    <span class="hljs-built_in">return</span> iconUrl ? iconUrl : defaultSymbol;
},

getSymbolSize (date, dataList) {
    <span class="hljs-keyword">if</span> (!dataList || dataList.length === 0) {
        <span class="hljs-built_in">return</span> 4;
    }

    // 通过日期匹配，找到对应的标注对象
    const dataItem = dataList.find(item =&gt; item.date === date);

    <span class="hljs-built_in">return</span> dataItem ? 15 : 4;
},

getSymbolUrl (id) {
    // 这里需要额外先做一层准备工作：将图标按 id 对应图标进行命名，然后传到自家的cdn上
    // 命名可以像这样：symbol-icon-1.jpg、symbol-icon-2.jpg 等等
    // 这里拿到标注的id，拼上链接返回即可
    // 形如：image://http://xxx.xxx.com/symbol-icon-1.jpg
    // 遇到多个 id 的情况，可以多加一个复合图标来处理，id 可以定为 0
}

</code></pre>
                </p>

                <p>
                    最后的一个问题，如何改写 tooltip 的样式问题，以做好兼容呢？
                </p>

                <p>
                    之前说到，tooltip 的布局分为三块：日期、标注信息、具体数值。那么我们就以此，来重新绘制 tooltip。
                    <img src="~@/assets/blog/bg-20190928-13.png">
                </p>
                <p>
                    tooltip 支持 formatter 回调函数，它的返回值类型是 Sting。
                    <pre><code class="hljs bash" lang="bash">// 回调函数格式
(params: Object|Array, ticket: string, callback: (ticket: string, html: string)) =&gt; string
</code></pre>
                    日期的信息，可以通过 params[0].axisValue 来获取。
                </p>
                <p>获取标注信息的方法，与上述获取图标的思路类似，只是这里需要展示具体的标注类型和名称。</p>
                <p>
                    具体的数值，可以通过 params 中的 marker，seriesName，value 等属性获得。具体实现如下：
                    <pre><code class="hljs bash" lang="bash"><span class="hljs-function"><span class="hljs-title">setChartExtend</span></span> () {
    this.chartExtend = {
        series: (v) =&gt; {
            ...
        },
        tooltip: {
            formatter: (params) =&gt; {
                <span class="hljs-built_in">return</span> getTooltipResult(params, dataList);
            }
        }
    };
},

getTooltipResult (params, dataList) {
    const dateResult = params[0].axisValue;
    // 获取原版 tooltip 的渲染结构
    const originalResultObj = getOriginalTooltipResult(params);

    <span class="hljs-keyword">if</span> (!dataList || dataList.length === 0) {
        <span class="hljs-built_in">return</span> dateResult + originalResultObj.strResult;
    }

    const dataItem = dataList.find(item =&gt; item.date === date);

    <span class="hljs-keyword">if</span> (dataItem) {
        <span class="hljs-built_in">return</span> dateResult +  getSymbolResult(dataItem, originalResultObj.strResult);
    }

    <span class="hljs-built_in">return</span> dateResult + originalResultObj.strResult;
},

getOriginalTooltipResult (params) {
    <span class="hljs-built_in">let</span> result = <span class="hljs-string">''</span>;

    params.forEach((param, idx) =&gt; {
        // value 会因为 seriesType 的不同，类型也会有不同
        <span class="hljs-built_in">let</span> value = Object.prototype.toString.call(param.value) === <span class="hljs-string">'[object Array]'</span> ? param.value[1] : param.value;

        const str = `<span class="hljs-variable">${param.marker}</span><span class="hljs-variable">${param.seriesName}</span>: <span class="hljs-variable">${ value }</span>&lt;br&gt;`;
        result += str;
    });

    <span class="hljs-built_in">return</span> {
        strResult: result
    };
},

getSymbolResult (dataItem, originalResult) {
    // 将 dataItem 的 id 转为数组的形式，循环渲染输出图标与名称的组合
    const dataIds = dataItem.id.split(<span class="hljs-string">','</span>);
    const dataNames = dataItem.name.split(<span class="hljs-string">','</span>);

    dataIds.forEach ((id, idx) =&gt; {
        // 通过 id 换取 图标的链接
        const iconUrl = ...;

        // 仿照 param.marker 的 style 写法，渲染图标样式
        const str = `&lt;img src=<span class="hljs-string">"<span class="hljs-variable">${iconUrl}</span>"</span> width=<span class="hljs-string">"11"</span> height=<span class="hljs-string">"11"</span> style=<span class="hljs-string">"display: inline-block; margin-right: 4px; margin-left: -1px;"</span>&gt;<span class="hljs-variable">${dataNames[idx]}</span>&lt;br&gt;`;

        result += str;
    });

    <span class="hljs-built_in">return</span> result + originalResult;
}
</code></pre>
                或许有同学会问 getOriginalTooltipResult 方法返回的值，里面只有一个 strResult，为何要设计为对象？
                </p>

                <p>
                    其实是为了方便扩展。例如，可以在日期的后面跟上下方具体数据的值的总计。那就需要通过 getOriginalTooltipResult 方法里的 params 循环，计算出 total，在配合上样式，生成一个 strTotal。
                    <pre><code class="hljs bash" lang="bash">getOriginalTooltipResult (params) {
    ...

    <span class="hljs-built_in">return</span> {
        strTotal: strTotal,
        strResult: result
    };
}

</code></pre>
                    此外，在实际的业务中，还可能会出现某些线的数值是百分比。那就需要再对 getOriginalTooltipResult 方法做扩展，比如传入一个 options 对象：
                    <pre><code class="hljs bash" lang="bash">getOriginalTooltipResult = (params, options = { isLinePercent: <span class="hljs-literal">false</span>, isShowTotal: <span class="hljs-literal">false</span> }) {
    ...
}
</code></pre>
                    至此，折线图标记的渲染，就能完美地呈现了。
                </p>

                <h2>柱状图标记 —— markPoint</h2>

                <p>
                    很尴尬的一点是：柱状图没有 symbol 属性。也就意味着上面的折线图的那一套，在柱状图中玩不转了。
                    <img src="~@/assets/blog/bg-20190928-14.jpg">
                    没办法，只能从头查文档，继续找资料。经过一番“摸爬滚打”，终于发现了 markPoint 这个属性。在 markPoint 这个对象里面，可以设置 symbol，这样的话，那么之前搞出来的那一套就没有白费呀？！？
                </p>

                <p>
                    需要注意的是，markPoint 的默认 symbol 为 'pin'，就是一个气泡的图标。另外，想要让 markPoint 的标记出现，就必须设置它的 data 属性。我们需要设置 data 里的这样几个属性：
                    <pre><code class="hljs bash" lang="bash">data: [
    {
        symbol: <span class="hljs-string">'...'</span>, // 设置标记的图标链接
        symbolSize: 15, // 设置标记的大小
        coord: [index, 0], // x 轴的第 index 个上，打标记
        symbolOffset: [0, 0] // 将标记定位在 x 轴上
    },
    ...
]
</code></pre>
                </p>
                <p>
                    具体的实现代码如下：
                    <pre><code class="hljs bash" lang="bash">&lt;ve-histogram :data=<span class="hljs-string">"chartData"</span> :extend=<span class="hljs-string">"chartExtend"</span>&gt;&lt;/ve-histogram&gt;
...

// mock 包含标注的数据结构
dataList: [
    {
        id: <span class="hljs-string">'1, 1, 3, 2'</span>,
        date: <span class="hljs-string">'2019-10-10'</span>,
        name: <span class="hljs-string">'test-name1, test-name2, test-name3, test-name4'</span>
    },
    ...
    {
        id: <span class="hljs-string">'1'</span>,
        date: <span class="hljs-string">'2019-10-17'</span>,
        name: <span class="hljs-string">'test-name1'</span>
    }
],
...

<span class="hljs-function"><span class="hljs-title">setChartExtend</span></span> () {
    this.chartExtend = {
        series: (v) =&gt; {
            Array.from(v).forEach((e, idx) =&gt; {
                e.markPoint = {
                    data: getMarkPointData(this.chartData.rows, dataList)
                };
            });
        },
        ...
    };
},

getMarkPointData (rows, dataList) {
    const results = [];

    rows.forEach((row, index) =&gt; {
        // 通过日期匹配，找到对应的标注对象
        const dataItem = dataList.find(item =&gt; item.date === row.date);
        <span class="hljs-keyword">if</span> (dataItem) {
            results.push({
                symbol: getSymbolUrl(dataItem.id),
                symbolSize: 15,
                coord: [index, 0],
                symbolOffset: [0, 0]
            });
        }
    });

    <span class="hljs-built_in">return</span> results;
},

getSymbolUrl (id) {
    // 这里需要额外先做一层准备工作：将图标按 id 对应图标进行命名，然后传到自家的cdn上
    // 命名可以像这样：symbol-icon-1.jpg、symbol-icon-2.jpg 等等
    // 这里拿到标注的id，拼上链接返回即可
    // 形如：image://http://xxx.xxx.com/symbol-icon-1.jpg
    // 遇到多个 id 的情况，可以多加一个复合图标来处理，id 可以定为 0
}

</code></pre>
                    因为 markPoint 在设置 data 时，取不到日期的数据，所以就需要用到 chartData 中的 rows 了。
                </p>
                <p>
                    在 rows 的循环中，如果匹配到当天需要打标记，则往结果数组中存入刚才预设的数据结构，最终返回给 markPoint 的 data，渲染展现。效果如下：
                    <img src="~@/assets/blog/bg-20190928-15.png">
                    tooltip 的实现方法，不受图表的类型影响，是可以通用的。
                </p>

                <p>
                    有时候，会遇到需要处理柱状图是否堆叠的效果。这会影响 symbolOffset 的定位，为了美观，可以这样处理：对于非堆叠的项，将之往右偏移 50%，即 <code>symbolOffset : ['50%', 0]</code>。
                </p>

                <h2>折线图 + 柱状图</h2>

                <p>
                    最后来个 <strong>组合拳</strong>，折线图与柱状图的复合型图表结构，像下面这样：
                    <img src="~@/assets/blog/bg-20190928-16.png">
                    从代码实现上，我们当然可以给每一根符合条件的柱子，和折线的拐点，都打上标记。但在界面设计上，为了美观，我们选择只给折线的拐点打上标记，并且忽略了虚线的拐点。
                </p>

                <p>
                    这样的设计初衷是：标记，只是为了给人提个醒，是为了告诉查阅的同学，这一天因为发生了某些特殊事件，而导致数据发生了较为明显的变化。由此得到的结论是，每天有一个标记就可以了。
                </p>

                <p>
                    具体的实现，其实很简单，只需要在渲染时判断 series 的 type 即可：
                    <pre><code class="hljs bash" lang="bash"><span class="hljs-function"><span class="hljs-title">setChartExtend</span></span> () {
    this.chartExtend = {
        series: (v) =&gt; {
            Array.from(v).forEach((e, idx) =&gt; {
                <span class="hljs-keyword">if</span> (e.type === <span class="hljs-string">'bar'</span>) {
                    // 设置柱状图 markPoint 的方法
                    ...
                }

                <span class="hljs-keyword">if</span> (e.type === <span class="hljs-string">'line'</span>) {
                    // 设置折线图 symbol、symbolSize 的方法
                    ...
                }
            });
        },
        ...
    };
}
</code></pre>
                </p>

                <h2>总结</h2>

                <p>
                    Echarts 可以实现的效果有很多，本篇涉及其中 “标记” 的渲染。在折线图的拐点处，用 symbol 做了匹配化的处理。在柱状图中，因为没有直接的 symbol，转而使用 markPoint 来实现，将标记定位在某个维度上的做法。都很好的呈现了效果。
                </p>

                <p>
                    不过，在后续的使用中，发现了另一个尴尬的情况：<code>在折线图中，当点击图例中的某一项，使其数据隐藏，然后再次点击重新渲染后，发现 symbol 的自定义图标不显示了。</code>
                </p>

                <p>
                    我查了很久，还是没找到有用的信息。怀疑是个渲染的 bug，所以给 Echarts 提了 issue，希望能得到解决吧。也欢迎大家在留言区中，共同探讨。
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
