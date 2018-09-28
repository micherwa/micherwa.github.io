<template>
    <div class="blog-container">
        <BlogHeader
            title="前端面试题——算法" subTitle=""
            date="2018-09-20" :tags="['面试题']">
        </BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>数组去重的5种方法</h2>
                <p>
                    <ul class="p-l-0">es6的Set，es5的indexOf，对象属性，排序方法，原始方法</ul>
                    具体可参考
                    <router-link :to="{ name: 'array-de-duplicate-in-javascript' }">这篇文章</router-link>
                </p>

                <h2>什么是哈希表？</h2>
                <p>
                    <ul class="p-l-0">哈希表（Hash table，也叫散列表），是根据关键码值(Key value)而直接进行访问的数据结构。也就是说，它通过把关键码值映射到表中一个位置来访问记录，以加快查找的速度。这个映射函数叫做散列函数，存放记录的数组叫做散列表。</ul>
                    <!-- 具体可参考
                    <router-link :to="{ name: 'hash-table-in-javascript' }">这篇文章</router-link> -->
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
