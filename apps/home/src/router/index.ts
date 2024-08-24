import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import { resetStaticRoutes } from '@micro/utils';

import { createRouterGuard } from './guard';
import { routes } from './routes';

const baseroute =
  window.__MICRO_APP_BASE_ROUTE__ || import.meta.env.VITE_BASE || '';
/**
 *  @zh_CN 创建vue-router实例
 */
const router = createRouter({
  history:
    import.meta.env.VITE_ROUTER_HISTORY === 'hash'
      ? createWebHashHistory(baseroute)
      : createWebHistory(baseroute),
  // 应该添加到路由的初始路由列表。
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
  // 是否应该禁止尾部斜杠。
  // strict: true,
});

const resetRoutes = () => resetStaticRoutes(router, routes);

// 创建路由守卫
createRouterGuard(router);

export { resetRoutes, router };
