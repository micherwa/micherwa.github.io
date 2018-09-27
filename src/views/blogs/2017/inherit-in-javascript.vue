<template>
    <div class="blog-container">
        <BlogHeader
            title="如何实现继承" subTitle=""
            date="2017-06-04" :tags="['Javascript']">
        </BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <!--
                    http://www.cnblogs.com/haoyijing/p/5760586.htm

                    http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html

                    http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html
                -->
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
