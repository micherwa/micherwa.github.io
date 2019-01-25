<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>前言</h2>
                <p>这是前端面试题系列的第 5 篇，你可能错过了前面的篇章，可以在这里找到：</p>
                <ul>
                    <li>
                        <a href="https://juejin.im/post/5c428ce0f265da612b13dca7" target="_blank">this的原理以及用法</a>
                    </li>
                    <li>
                        <a href="https://juejin.im/post/5c36fd0f6fb9a049cd5465cd" target="_blank">伪类与伪元素的区别及实战</a>
                    </li>
                    <li>
                        <a href="https://juejin.im/post/5c394fece51d45524c7cc712" target="_blank">如何实现一个圣杯布局？</a>
                    </li>
                    <li>
                        <a href="https://juejin.im/post/5c394da4518825253661bd4d" target="_blank">今日头条 面试题和思路解析</a>
                    </li>
                </ul>

                <p>

                </p>

                <h2></h2>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
