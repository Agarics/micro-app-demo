import { resolve } from 'node:path';

import { defineConfig } from '@bim/vite-config';

import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';

export default defineConfig(async () => {
  return {
    application: {},
    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@use "~/styles/element/index.scss" as *;`,
          },
        },
      },
      plugins: [
        AutoImport({
          resolvers: [ElementPlusResolver()],
        }),
        Components({
          resolvers: [
            ElementPlusResolver({
              importStyle: 'sass',
            }),
          ],
        }),
      ],
      resolve: {
        alias: {
          '~': resolve(import.meta.dirname, 'src'),
        },
      },
      server: {
        proxy: {
          '/api': {
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
            // mock代理目标地址
            target: 'http://localhost:5320/api',
            ws: true,
          },
        },
      },
    },
  };
});
