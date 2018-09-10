import Home from '@/views/home/index';
import About from '@/views/about/index';
import Tags from '@/views/tags/index';

import Blog2017Routers from './blog-2017';
import Blog2018Routers from './blog-2018';

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
    ...Blog2017Routers,
    ...Blog2018Routers
];
