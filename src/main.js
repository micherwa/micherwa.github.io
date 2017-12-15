import 'babel-polyfill';
import Vue from 'vue';
import App from './views/App.vue';
import VueRouter from 'vue-router';
import routes from './views/routes';

// 注册vue组件
Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

// eslint-disable-next-line no-new
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
