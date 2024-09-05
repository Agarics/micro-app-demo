<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import { Breadcrumb } from '@micro/layouts';
import { useAccessStore } from '@micro/stores';

import MenuItem from './components/menu-item.vue';

const accessStore = useAccessStore();

const menus = computed(() => accessStore.accessMenus);
const route = useRoute();
const isCollapse = ref(false);
function toggleCollapse() {
  isCollapse.value = !isCollapse.value;
}
</script>
<template>
  <el-container class="h-full w-full">
    <el-scrollbar>
      <el-menu
        :collapse="isCollapse"
        :default-active="route.path"
        class="min-h-[100vh]"
        router
      >
        <MenuItem v-for="menu in menus" :key="menu.path" :menu="menu" />
      </el-menu>
    </el-scrollbar>
    <el-container>
      <el-header class="flex items-center">
        <span
          class="icon-[ri--menu-fill] cursor-pointer"
          @click="toggleCollapse"
        ></span>
        <Breadcrumb />
      </el-header>
      <el-main>
        <div class="relative h-full">
          <RouterView v-slot="{ Component, route }">
            <Transition appear mode="out-in" name="fade-in">
              <component :is="Component" :key="route.fullPath" />
            </Transition>
          </RouterView>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
