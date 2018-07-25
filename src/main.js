import 'babel-polyfill';
import Vue from 'vue';
import '@/components';
import App from '@/views/app.vue';
import VueRouter from 'vue-router';
import routers from '@/routers';
// import store from './store/index';

import $ from 'jquery';
import '@/libs/preloader/preloader.js';
import '@/libs/preloader/style.css';

import '@/libs/bootstrap/css/bootstrap.css';
import '@/libs/bootstrap/js/bootstrap.js';

import '@/styles/app.scss';

// 注册vue组件
Vue.use(VueRouter);

const router = new VueRouter({
    routes: routers,
    mode: 'history'
});

// eslint-disable-next-line no-new
new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount('#app');

// draw preloader
$(document).ready(function () {
    if ($('#preloader')) {
        $('#preloader').show();
        var spinner = $('#preloader').data('spinner');
        var screenbg = $('#preloader').data('screenbg');
        $('#preloader').fakeLoader({
            // Time in milliseconds for fakeLoader disappear
            timeToHide: 1500,
            // Default zIndex
            zIndex: '9999',
            // Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
            spinner: spinner,
            // Hex, RGB or RGBA colors
            bgColor: screenbg
        });
    }
});
