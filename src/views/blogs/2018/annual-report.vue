<template>
    <div class="blog-container">
        <BlogHeader
            title="「2018」年终总结" subTitle=""
            date="2018-12-30" :tags="['言论与感想']">
        </BlogHeader>

        <BlogContent>
            <div slot="content">
                <h2>前言</h2>
                <p>
                    站在2018的尾巴，回看走过的这一年，萌生了一些感想，想在此做个总结。
                </p>

                <h2>技术</h2>
                <p>
                    在前端框架方面，除了使用vue技术栈持续支持主要的业务以外，还用react支持到了外围的基础工程，小程序也纳入了计划之中。
                </p>
                <p>
                    在前端工程的搭建方面，无论是vue，还是react，都实现了从 0 到 1 的突破。从写第一行package.json开始，到定制化webpack.config，完全契合当前的业务需要。年中的时候为了赶潮流，还升级了一把webpack4，虽然升级的过程中遇到了各种的坑，但在查找资料并最终填完坑后，看到运行与打包的速度，都有了显著的提高的时候，还是挺有成就感的。同时，这也提升了小伙伴的业务开发效率。
                </p>

                <h2>业务</h2>
                <p>

                </p>

                <h2>健身</h2>

                <h2>阅读</h2>

                <h2>面向2019</h2>

                <h2>总结</h2>


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
