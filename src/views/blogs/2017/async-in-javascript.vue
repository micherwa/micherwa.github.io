<template>
    <div class="blog-container">
        <BlogHeader
            title="实现异步编程的方法" subTitle=""
            date="2017-11-06" :tags="['Javascript']">
        </BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <!-- https://zhuanlan.zhihu.com/p/37492716  |  你不懂JS: 异步与性能 -->
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
