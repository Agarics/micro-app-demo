import type { RouteRecordRaw } from 'vue-router';

import { DEFAULT_HOME_PATH } from '@bim/constants';

import { $t } from '#/locales';
import Login from '#/views/authentication/login.vue';

/** 全局404页面 */
const fallbackNotFoundRoute: RouteRecordRaw = {
  component: () => import('#/views/fallback/not-found.vue'),
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
    meta: {
      title: 'Root',
    },
    name: 'Root',
    path: '/',
    redirect: DEFAULT_HOME_PATH,
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
