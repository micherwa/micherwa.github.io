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
                            <h3 class="post-subtitle" v-if="item.subTitle">{{item.subTitle}}</h3>
                            <div class="post-content-preview">{{item.descript}}</div>
                        </router-link>
                        <p class="post-meta">Posted on {{item.date}}</p>
                    </div>
                </div>

                <SidebarRight></SidebarRight>
            </div>
        </div>

    </div>
</template>
<style lang="scss" src="./style.scss"></style>
<script src="./script.js"></script>
