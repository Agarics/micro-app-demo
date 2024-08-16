import { createApp } from 'vue';

import { registerAccessDirective } from '@bim/access';
import { initStores } from '@bim/stores';
import '@bim/styles';

import { setupI18n } from '#/locales';

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
}

export { bootstrap };
