import { createApp } from 'vue';

import App from './app.vue';
import { router } from './router';

async function bootstrap(_namespace: string) {
  const app = createApp(App);

  // 配置路由及路由守卫
  app.use(router);

  app.mount('#app');

  function dataListener(data: any) {
    console.log('来自主应用的数据:', data);
  }

  // 监听数据变化，初始化时如果有数据则主动触发一次
  window.microApp?.addDataListener(dataListener, true);

  function unmount() {
    app.unmount();
    window.microApp?.addDataListener(dataListener);
  }

  window.unmount = unmount;
}

export { bootstrap };