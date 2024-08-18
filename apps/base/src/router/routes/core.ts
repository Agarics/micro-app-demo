import type { RouteRecordRaw } from 'vue-router';

import { $t } from '~/locales';
import Login from '~/views/authentication/login.vue';

/** 全局404页面 */
const fallbackNotFoundRoute: RouteRecordRaw = {
  component: () => import('~/views/fallback/not-found.vue'),
  meta: {
    hideInBreadcrumb: true,
    hideInMenu: true,
    hideInTab: true,
    title: '404',
  },
  name: 'FallbackNotFound',
  path: '/:path(.*)*',
};

/** 基本路由，这些路由是必须存在的 */
const coreRoutes: RouteRecordRaw[] = [
  {
    component: () => import('~/views/dashboard/index.vue'),
    meta: {
      title: 'Root',
    },
    name: 'Root',
    path: '/',
  },
  {
    component: () => import('~/views/home/index.vue'),
    meta: {
      icon: 'lucide:area-chart',
      title: $t('page.dashboard.analytics'),
    },
    name: 'Home',
    path: '/home:path(.*)*',
  },
  {
    component: Login,
    meta: {
      layout: 'empty',
      title: $t('page.core.login'),
    },
    name: 'Login',
    path: '/login',
  },
];

export { coreRoutes, fallbackNotFoundRoute };
