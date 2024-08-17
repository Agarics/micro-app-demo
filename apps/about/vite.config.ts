import { resolve } from 'node:path';

import { defineConfig } from '@bim/vite-config';

export default defineConfig(async () => {
  return {
    application: {
      injectGlobalScss: false,
    },
    vite: {
      resolve: {
        alias: {
          '~': resolve(import.meta.dirname, 'src'),
        },
      },
      server: {},
    },
  };
});
