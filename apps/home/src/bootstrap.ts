import { createApp } from 'vue';

import App from './app.vue';
import { router } from './router';

async function bootstrap(_namespace: string) {
  const app = createApp(App);

  // 配置路由及路由守卫
  app.use(router);

  app.mount('#app');
}

export { bootstrap };
