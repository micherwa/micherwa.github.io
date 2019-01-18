<template>
    <div class="tags-container">
        <BackToTop></BackToTop>

        <header class="intro-header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div class="site-heading">
                            <h1>Tags</h1>
                            <span class="subheading">Catching up time</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 tags-content">
                    <div id="tagCloud" class="tags">
                        <span
                            class="tag hand"
                            v-for="(tag, $index) in tags" :key="$index"
                            :title="tag.name" :rel="tag.rel"
                            @click="handleClickTag(tag.name)">
                            {{tag.name}}
                        </span>
                    </div>

                    <div class="one-tag-list p-b-15" v-for="(oneTag, $index) in oneTagList" :key="$index">
                        <span class="fa fa-tag listing-seperator" :id="oneTag.name">
                            <span class="tag-text">{{oneTag.name}} ({{oneTag.blogList.length}})</span>
                        </span>
                        <div class="post-preview" v-for="(blog, $index) in oneTag.blogList" :key="$index">
                            <router-link :to="{name: blog.routeName}">
                                <h2 class="post-title">{{blog.title}}</h2>
                                <h3 class="post-subtitle">{{blog.subTitle}}</h3>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    import '@/libs/jquery.tagcloud.js';

    import data from '@/data';
    import tagData from '@/data/tags.js';
    import WindowScroll from '@/utils/window-scroll';

    export default {
        data () {
            return {
                tags: tagData,
                oneTagList: [],
                tagName: this.$route.params.name,
                parentOffsetTop: 0
            };
        },

        mounted () {
            $('#tagCloud span.tag').tagcloud({
                size: {start: 1, end: 1, unit: 'em'},
                color: {start: '#bbbbee', end: '#0085a1'}
            });

            this.initOneTagList();
            this.initParentOffsetTop();

            setTimeout(() => {
                if (this.tagName) {
                    this.handleScroll(this.tagName);
                }
            }, 500);
        },

        methods: {
            initOneTagList () {
                this.tags.forEach(item => {
                    const oneTag = {
                        name: item.name,
                        blogList: this.getBlogList(item.name)
                    };
                    this.oneTagList.push(oneTag);
                });
            },

            initParentOffsetTop () {
                const parent = document.querySelector('.tags-content');
                // 是否要-60(顶部nav高度)待定
                this.parentOffsetTop = parent.offsetTop - 20;
            },

            getBlogList (tagName) {
                const blogList = [];
                data.forEach(item => {
                    if (item.tags.indexOf(tagName) > -1) {
                        const blog = {
                            title: item.title,
                            subTitle: item.subTitle,
                            routeName: item.routeName
                        };
                        blogList.push(blog);
                    }
                });

                return blogList;
            },

            handleClickTag (tagName) {
                this.handleScroll(tagName);
            },

            handleScroll (tagName) {
                const jumpEl = document.querySelector('#' + tagName);
                // 获取需要滚动的距离
                let offsetTop = jumpEl.offsetTop + this.parentOffsetTop;
                let distance = document.documentElement.scrollTop || document.body.scrollTop;

                WindowScroll.smoothScroll(offsetTop, distance, 20);
            }
        }
    };
</script>

<style lang="scss">
    .tags-container {
        .intro-header {
            background-image: url('~@/assets/header-bg-tags.jpg');
        }
    }
</style>
