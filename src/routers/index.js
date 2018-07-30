import Home from '@/views/home/main/index';
import About from '@/views/about/main/index';
import Tags from '@/views/tags/main/index';

import BlogRouters from './blog';

export default [
    // {
    //     path: '/',
    //     name: 'index',
    //     redirect: 'home'
    // },
    {
        path: '/home',
        name: 'home',
        component: Home,
        alias: '/'
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/tags',
        name: 'tags',
        component: Tags
    },
    ...BlogRouters
];
