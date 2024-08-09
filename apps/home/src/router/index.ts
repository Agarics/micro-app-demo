import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

/**
 *  @zh_CN 创建vue-router实例
 */
const router = createRouter({
  history:
    import.meta.env.VITE_ROUTER_HISTORY === 'hash'
      ? createWebHashHistory(import.meta.env.VITE_BASE)
      : createWebHistory(import.meta.env.VITE_BASE),
  // 应该添加到路由的初始路由列表。
  routes: [
    {
      component: () => import('#/views/index.vue'),
      path: '/',
    },
  ],
  scrollBehavior: () => ({ left: 0, top: 0 }),
  // 是否应该禁止尾部斜杠。
  // strict: true,
});

export { router };
