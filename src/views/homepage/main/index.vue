<template>
    <div class="home">
        <img src="~assets/logo.png">
        <h1>hello</h1>
        <div class="flex-wrapper">
            <div class="flex-item" @click="tap">
                flex-item1
                <img src="~assets/icon-eye-close.png" />
            </div>

            <div class="flex-item" @click="tap">
                flex-item2
                <img src="~assets/icon-eye-open.png" />
            </div>
            <div class="flex-item" @click="tap">
                flex-item3
                <img src="~assets/icon-arrow-rt.png" />
            </div>
        </div>
        <img src="~assets/test2.png" class="img-responsive" />
    </div>
</template>
<style lang="scss" src="./style.scss"></style>
<script src="./script.js"></script>
