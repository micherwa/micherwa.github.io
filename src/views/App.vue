<template>
    <div id="app">
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    created () {
        const elBase = document.querySelector('base');
        elBase.setAttribute('href', __DEV__ ? '/' : '/blog');
    }
};
</script>

