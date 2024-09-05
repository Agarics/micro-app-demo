<script setup lang="ts">
import { computed } from 'vue';

import { $t } from '@micro/locales';

const porps = defineProps({
  menu: {
    default() {
      return {};
    },
    type: Object,
  },
});
const hasChildren = computed(() => porps.menu.children?.length);
</script>
<template>
  <el-sub-menu v-if="hasChildren" :index="menu.path">
    <template #title>
      <i class="icon-[ri--menu-fill]"></i>
      <span>{{ $t(menu.name) }}</span>
    </template>
    <el-menu-item
      v-for="child in menu.children"
      :key="child.path"
      :index="child.path"
    >
      <i class="icon-[ri--menu-fill]"></i>
      <span>{{ $t(child.name) }}</span>
    </el-menu-item>
  </el-sub-menu>
  <el-menu-item v-else :index="menu.path">
    <i class="icon-[ri--menu-fill]"></i>
    <span>{{ $t(menu.name) }}</span>
  </el-menu-item>
</template>
