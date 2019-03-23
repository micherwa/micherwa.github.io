import Blog2016Routers from './blog-2016';
import Blog2017Routers from './blog-2017';
import Blog2018Routers from './blog-2018';
import Blog2019Routers from './blog-2019';
import Blog2020Routers from './blog-2020';

export default [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index'),
        alias: '/'
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about/index')
    },
    {
        path: '/tags/:name?',
        name: 'tags',
        component: () => import('@/views/tags/index')
    },
    ...Blog2016Routers,
    ...Blog2017Routers,
    ...Blog2018Routers,
    ...Blog2019Routers,
    ...Blog2020Routers
];
