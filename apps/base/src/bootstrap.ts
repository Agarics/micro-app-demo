import { createApp } from 'vue';

import { registerAccessDirective } from '@micro/access';
import { initStores } from '@micro/stores';
import '@micro/styles';
import '@micro/styles/global';

import microApp from '@micro-zoe/micro-app';
import { setupI18n } from '~/locales';
import { addMiroAppDataListener } from '~/utils/micro-app-help';

import App from './app.vue';
import { router } from './router';

async function bootstrap(_namespace: string) {
  const app = createApp(App);

  // 国际化 i18n 配置
  await setupI18n(app);

  // 配置 pinia-tore
  await initStores(app);

  // 安装权限指令
  registerAccessDirective(app);

  // 配置路由及路由守卫
  app.use(router);

  app.mount('#app');

  microApp.start({
    // iframeSrc: `${location.origin}${import.meta.env.VITE_BASE}empty.html`, // iframe沙箱加载了主应用的资源
    'router-mode': 'native',
  });

  // 注册主应用路由
  microApp.router.setBaseAppRouter(router);

  addMiroAppDataListener();
}

export { bootstrap };
