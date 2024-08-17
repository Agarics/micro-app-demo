import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'Demos',
    path: '/',
    children: [
      {
        component: () => import('~/views/demo/index.vue'),
        meta: {
          icon: 'lucide:area-chart',
          title: 'demo1',
        },
        name: 'Demo1',
        path: '/demo1',
      },
      {
        component: () => import('~/views/demo/demo2.vue'),
        meta: {
          icon: 'lucide:area-chart',
          title: 'demo2',
        },
        name: 'Demo2',
        path: '/demo2',
      },
    ],
  },
];

export default routes;
