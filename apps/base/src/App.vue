<script lang="ts" setup>
import PageLayout from '~/components/page-layout/index.vue';

defineOptions({ name: 'App' });
</script>

<template>
  <el-config-provider namespace="ep">
    <PageLayout />
  </el-config-provider>
</template>
<style lang="scss">
h2 {
  color: blue;
}
</style>
