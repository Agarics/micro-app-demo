<script lang="ts" setup>
import type { RouteLocationNormalizedLoaded } from 'vue-router';

import { RouterLink, RouterView } from 'vue-router';

import { Spinner } from '@bim/common-ui';
import { useContentHeight } from '@bim/hooks';
import { preferences, usePreferences } from '@bim/preferences';

import logoUrl from '#/assets/vue.svg';

import { useContentSpinner } from './hooks/use-content-spinner';

defineOptions({ name: 'LayoutDefault' });

const { keepAlive } = usePreferences();
const { spinning } = useContentSpinner();
const { contentStyles } = useContentHeight();

// 页面切换动画
function getTransitionName(_route: RouteLocationNormalizedLoaded) {
  // 如果偏好设置未设置，则不使用动画
  const { tabbar, transition } = preferences;
  const transitionName = transition.name;
  if (!transitionName || !transition.enable) {
    return;
  }

  // 标签页未启用或者未开启缓存，则使用全局配置动画
  if (!tabbar.enable || !keepAlive) {
    return transitionName;
  }
  return transitionName;
}
</script>

<template>
  <div class="relative flex min-h-full w-full">
    <div
      class="flex flex-1 flex-col overflow-hidden transition-all duration-300 ease-in"
    >
      <div class="overflow-hidden transition-all duration-200">
        <header
          class="border-border bg-background top-0 flex w-full flex-[0_0_auto] items-center border-b transition-[margin-top] duration-200"
        >
          <div class="flex h-[60px] items-center justify-between px-[20px]">
            <RouterLink to="/dashboard"><img :src="logoUrl" /></RouterLink>
            <ul class="ml-[20px] flex items-center">
              <li class="mr-[20px]">
                <RouterLink to="/home"> home </RouterLink>
              </li>
              <li class="mr-[20px]">
                <RouterLink to="/home2"> home2 </RouterLink>
              </li>
            </ul>
          </div>
        </header>
      </div>
      <main
        class="bg-background-deep flex-1 transition-[margin-top] duration-200"
      >
        <div class="relative h-full">
          <Spinner
            v-if="preferences.transition.loading"
            :spinning="spinning"
            :style="contentStyles"
          />
          <RouterView v-slot="{ Component, route }">
            <Transition :name="getTransitionName(route)" appear mode="out-in">
              <component :is="Component" :key="route.name" />
            </Transition>
          </RouterView>
        </div>
      </main>
    </div>
  </div>
</template>
