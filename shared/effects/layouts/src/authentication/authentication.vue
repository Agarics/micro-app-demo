<script setup lang="ts">
import { computed } from 'vue';

import { preferences } from '@micro/preferences';

import AuthenticationFormView from './form.vue';
import Toolbar from './toolbar.vue';

defineOptions({ name: 'Authentication' });

const appName = computed(() => preferences.app.name);
</script>

<template>
  <div class="flex min-h-full flex-1 select-none overflow-x-hidden">
    <!-- 头部 Logo 和应用名称 -->
    <div class="absolute left-0 top-0 z-10 flex flex-1">
      <div
        class="text-foreground ml-4 mt-4 flex flex-1 items-center sm:left-6 sm:top-6 lg:text-white"
      >
        <p class="text-xl font-medium">
          {{ appName }}
        </p>
      </div>
    </div>
    <Toolbar />
    <!-- 中心认证面板 -->
    <div class="flex-center w-full">
      <AuthenticationFormView
        class="w-full rounded-3xl pb-20 md:w-2/3 lg:w-1/2 xl:w-2/5"
      />
    </div>
  </div>
</template>
