<script lang="ts" setup>
import { computed } from 'vue';

import { useAntdDesignTokens } from '@bim/hooks';
import { preferences, usePreferences } from '@bim/preferences';

import { App, ConfigProvider, theme } from 'ant-design-vue';

import PageLayout from '#/components/page-layout/index.vue';
import { antdLocale } from '#/locales';

defineOptions({ name: 'App' });

const { isDark } = usePreferences();
const { tokens } = useAntdDesignTokens();

const tokenTheme = computed(() => {
  const algorithm = isDark.value
    ? [theme.darkAlgorithm]
    : [theme.defaultAlgorithm];

  // antd 紧凑模式算法
  if (preferences.app.compact) {
    algorithm.push(theme.compactAlgorithm);
  }

  return {
    algorithm,
    token: tokens,
  };
});
</script>

<template>
  <ConfigProvider :locale="antdLocale" :theme="tokenTheme">
    <App>
      <PageLayout />
    </App>
  </ConfigProvider>
</template>
