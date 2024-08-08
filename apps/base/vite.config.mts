import { defineConfig } from '@bim/vite-config';

export default defineConfig(async () => {
  return {
    application: {},
    vite: {
      server: {
        port: 9527,
      },
    },
  };
});
