<script lang="ts" setup>
import { Maximize, Minimize } from '@micro-core/icons';

import { useFullscreen } from '@vueuse/core';

import { BimIconButton } from '../button';

defineOptions({ name: 'FullScreen' });

const { isFullscreen, toggle } = useFullscreen();

// 重新检查全屏状态
isFullscreen.value = !!(
  document.fullscreenElement ||
  // @ts-ignore
  document.webkitFullscreenElement ||
  // @ts-ignore
  document.mozFullScreenElement ||
  // @ts-ignore
  document.msFullscreenElement
);
</script>
<template>
  <BimIconButton @click="toggle">
    <Minimize v-if="isFullscreen" class="size-4" />
    <Maximize v-else class="size-4" />
  </BimIconButton>
</template>
