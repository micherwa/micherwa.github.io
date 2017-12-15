import 'babel-polyfill';
import Vue from 'vue';
import App from './views/App.vue';
import VueRouter from 'vue-router';
import routes from './views/routes';
import store from './store/index';
import { Row, Col } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 注册vue组件
Vue.use(VueRouter);
Vue.use(Row);
Vue.use(Col);

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

// eslint-disable-next-line no-new
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
