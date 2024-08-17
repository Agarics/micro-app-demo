import type { RouteRecordRaw } from 'vue-router';

/** 路由列表，由基本路由+静态路由组成 */
const routes: RouteRecordRaw[] = [
  {
    component: () => import('~/views/index.vue'),
    name: 'index',
    path: '/',
  },
];

export { routes };
