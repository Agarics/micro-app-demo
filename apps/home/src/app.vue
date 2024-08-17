<script lang="ts" setup>
import PageLayout from '~/components/page-layout/index.vue';

defineOptions({ name: 'App' });
</script>

<template>
  <el-config-provider>
    <PageLayout />
  </el-config-provider>
</template>
