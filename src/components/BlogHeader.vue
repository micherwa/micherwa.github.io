<template>
    <div class="blog-header">
        <header class="intro-header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div class="post-heading">
                            <h1>{{title}}</h1>
                            <h2 class="subheading">{{subTitle}}</h2>
                            <span class="meta">Posted on {{date}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script type="text/javascript">
    export default {
        name: 'BlogHeader',

        props: {
            title: {
                type: String,
                default: ''
            },
            subTitle: {
                type: String,
                default: ''
            },
            date: {
                type: String,
                default: ''
            },
            showMask: {
                type: Boolean,
                default: false
            }
        }
    };
</script>

<style lang="scss">
    .blog-header {
        .intro-header {
            position: relative;
            background-image: url('~@/assets/blog-header-bg.jpg');
        }
    }
</style>
