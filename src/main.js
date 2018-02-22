import 'babel-polyfill';
import Vue from 'vue';
import 'components';
import App from './views/App.vue';
import VueRouter from 'vue-router';
import routes from './views/routes';
// import store from './store/index';

import { Container, Main, Footer, Header } from 'element-ui';
import 'element-ui/lib/theme-chalk/display.css';

import $ from 'jquery';
import 'libs/preloader/preloader.js';
import 'libs/preloader/style.css';

// 注册vue组件
Vue.use(VueRouter);
Vue.use(Container);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Header);

const router = new VueRouter({
    routes: routes,
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
