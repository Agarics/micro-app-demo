<script lang="ts" setup>
import { RouterView } from 'vue-router';

defineOptions({ name: 'LayoutContent' });
</script>

<template>
  <div class="relative h-full">
    <RouterView v-slot="{ Component, route }">
      <Transition appear mode="out-in" name="fade-in">
        <component :is="Component" :key="route.fullPath" />
      </Transition>
    </RouterView>
  </div>
</template>
