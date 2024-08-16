<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router';

import { BimSpinner } from '@bim/common-ui';

import logoUrl from '#/assets/vue.svg';

import { useContentSpinner } from './hooks/use-content-spinner';

defineOptions({ name: 'LayoutDefault' });

const { spinning } = useContentSpinner();
</script>

<template>
  <div class="relative flex min-h-full w-full">
    <div
      class="flex flex-1 flex-col overflow-hidden transition-all duration-300 ease-in"
    >
      <div class="overflow-hidden transition-all duration-200">
        <header
          class="border-border bg-background z-1000 fixed top-0 flex w-full flex-[0_0_auto] items-center border-b transition-[margin-top] duration-200"
        >
          <div class="flex h-[60px] items-center justify-between px-[20px]">
            <RouterLink to="/"><img :src="logoUrl" /></RouterLink>
            <ul class="ml-[20px] flex items-center">
              <li class="mr-[20px]">
                <RouterLink to="/home">home</RouterLink>
              </li>
            </ul>
          </div>
        </header>
      </div>
      <main
        class="bg-background-deep flex-1 pt-[60px] transition-[margin-top] duration-200"
      >
        <div class="relative h-full">
          <BimSpinner :spinning="spinning" class="h-full bg-inherit" />
          <RouterView v-slot="{ Component, route }">
            <Transition appear mode="out-in" name="fade-in">
              <component :is="Component" :key="route.name" />
            </Transition>
          </RouterView>
        </div>
      </main>
    </div>
  </div>
</template>
