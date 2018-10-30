<template>
    <div class="blog-container">
        <BlogHeader
            title="读书笔记" subTitle="《软技能：代码之外的生存指南》"
            date="2018-10-29" :tags="['言论与感想']">
        </BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <blockquote>
                    <p class="m-b-10">
                        如果不看本书的内容，只看书名，猜猜看:这会是一本怎样的书?
                    </p>
                    <p class="m-b-10">
                        “这又是一本关于软件开发的书?”——错了。“这是一本专门写给软件开发人员看的书?”——也不全是。“那么，这总归是一本书吧?”——不好意思，你又猜错了，但可以把它当做70篇博客来阅读。
                    </p>
                    <p>
                        在翻译本书的时候，我最多的感慨就是:“如果我早10年甚至早15年读到这本书那该多好啊......”——嗨，John，听到没 有，我这也是对你的抱怨呢!你为什么不早几年写本书呢?!
                    </p>
                </blockquote>

                <p>
                    软件行业泰斗级人物Martin和软件架构师Hanselman作序推荐
                </p>

                <p>
                    你知道如何写简历吗?你了解如何谈判薪水吗?作为一个独立咨询师，你知道如何设定咨询费吗?你知道如何权衡辞去全 职工作转而成为兼职工作者的风险吗?你了解如何获得创业启动资金吗?你明白看电视的成本是多少吗?(是的，你没有看 错。)
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
