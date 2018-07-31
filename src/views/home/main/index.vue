<template>
    <div class="home">
        <header class="intro-header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 ">
                        <div class="site-heading">
                            <h1>Micherwa Blog</h1>
                            <span class="subheading">除了代码，唯有健身与美食不可辜负</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-1 col-md-8 col-md-offset-1 col-sm-12 col-xs-12 postlist-container m-b-15">
                    <div class="post-preview" v-for="(item, $index) in dataList" :key="$index">
                        <router-link :to="{name: item.routeName}">
                            <h2 class="post-title">{{item.title}}</h2>
                            <div class="post-content-preview">{{item.descript}}</div>
                        </router-link>
                        <p class="post-meta">Posted on {{item.date}}</p>
                    </div>
                </div>

                <div class="col-lg-3 col-lg-offset-0 col-md-3 col-md-offset-0 col-sm-12 col-xs-12 sidebar-container">
                    <section>
                        <h5>
                            <router-link :to="{name: 'tags'}">TAGS</router-link>
                        </h5>
                        <div class="tags">
                            <a href="/tags/#知乎" title="知乎">知乎</a>
                        </div>
                    </section>

                    <section class="visible-md visible-lg">
                        <h5>
                            <router-link :to="{name: 'about'}">ABOUT</router-link>
                        </h5>
                        <div class="short-about">
                            <img src="~@/assets/avatar-me.jpg">
                            <p>Code within fit & delicacy<br>除了代码，唯有健身与美食不可辜负</p>
                            <ul class="list-inline">
                                <li v-for="(item, $index) in socialList" :key="$index">
                                    <a :href="item.url" target="_blank">
                                        <span class="fa-stack fa-lg">
                                            <i class="fa fa-circle fa-stack-2x"></i>
                                            <i class="fa fa-stack-1x fa-inverse"
                                             :class="item.icon ? item.icon : ''">{{item.title}}</i>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    </div>
</template>
<style lang="scss" src="./style.scss"></style>
<script src="./script.js"></script>
