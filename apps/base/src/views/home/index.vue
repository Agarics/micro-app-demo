<script setup lang="ts">
import { computed } from 'vue';

import { microApps } from '#/config/micro-app';

const appConfig = computed(
  () => microApps.find((ele) => ele.name === 'child-home')!,
);
</script>
<template>
  <micro-app
    :baseroute="appConfig.baseroute"
    :name="appConfig.name"
    :url="appConfig.url"
    iframe
  />
</template>
