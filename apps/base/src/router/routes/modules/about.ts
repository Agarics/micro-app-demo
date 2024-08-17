import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    component: () => import('~/views/about/index.vue'),
    meta: {
      title: '关于',
    },
    name: 'About',
    path: '/about:path(.*)*',
  },
];

export default routes;
