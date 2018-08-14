import Home from '@/views/home/index';
import About from '@/views/about/index';
import Tags from '@/views/tags/index';

import BlogRouters from './blog';

export default [
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
        path: '/tags/:name?',
        name: 'tags',
        component: Tags
    },
    ...BlogRouters
];
