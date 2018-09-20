<template>
    <div class="blog-container">
        <BlogHeader
            title="Javascript中this的用法" subTitle=""
            date="2017-06-12" :tags="['Javascript']">
        </BlogHeader>

        <BlogContent :useCatalog="false">
            <div slot="content">
                <!-- this 与对象原型  | Javascript的this用法  http://www.ruanyifeng.com/blog/2018/06/javascript-this.html -->
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
