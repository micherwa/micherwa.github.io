import 'babel-polyfill';
import Vue from 'vue';
import App from './views/App.vue';
import VueRouter from 'vue-router';
import routes from './views/routes';
// import store from './store/index';
import 'libs/preloader/style.scss';
import $ from 'jquery';

// 注册vue组件
Vue.use(VueRouter);

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

/* eslint-disable */
$(document).ready( function ( $ ) {
    if ($('#preloader')) {
        $("#preloader").show();
        var spinner = $('#preloader').data('spinner'),
        screenbg = $('#preloader').data('screenbg');
        $("#preloader").fakeLoader({
            timeToHide: 1000, //Time in milliseconds for fakeLoader disappear
            zIndex: "9999",//Default zIndex
            spinner: spinner,//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
            bgColor: screenbg //Hex, RGB or RGBA colors
        });
    }
});
/* eslint-enable */
