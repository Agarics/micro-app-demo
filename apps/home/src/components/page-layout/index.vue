<script setup lang="ts">
import { useRoute } from 'vue-router';

import { computedAsync } from '@vueuse/core';

const route = useRoute();

const layout = computedAsync(async () => {
  try {
    const { layout = 'default' } = route.meta;
    const layoutComponent = await import(`~/layouts/${layout}.vue`);
    return layoutComponent.default;
  } catch (error) {
    console.warn(`fail load: ~/layouts/${layout}.vue`, error);
    const defaultComponent = await import(`~/layouts/default.vue`);
    return defaultComponent.default;
  }
});
</script>
<template>
  <component :is="layout"><slot></slot></component>
</template>
