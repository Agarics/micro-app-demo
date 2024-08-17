import { createRouter, createWebHashHistory } from 'vue-router';

import { routes } from './routes';

const baseroute =
  window.__MICRO_APP_BASE_ROUTE__ || import.meta.env.VITE_BASE || '';
/**
 *  @zh_CN 创建vue-router实例
 */
const router = createRouter({
  history: createWebHashHistory(baseroute),
  // 应该添加到路由的初始路由列表。
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
  // 是否应该禁止尾部斜杠。
  // strict: true,
});

export { router };
