<template>
    <div class="blog-container">
        <BlogHeader
            title="如何实现继承" subTitle=""
            date="2017-06-04" :tags="['Javascript']">
        </BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <!-- https://zhuanlan.zhihu.com/p/25578222 -->

                <h2>参考文献</h2>
                <p>
                    <ul>
                        <li>
                            <a href="http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html" target="_blank">
                                Javascript面向对象编程（二）：构造函数的继承
                            </a>
                        </li>
                        <li>
                            <a href="http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance_continued.html" target="_blank">
                                Javascript面向对象编程（三）：非构造函数的继承
                            </a>
                        </li>
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
