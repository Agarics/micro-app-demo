<script lang="ts" setup>
import PageLayout from '~/components/page-layout/index.vue';

defineOptions({ name: 'App' });
</script>

<template>
  <el-config-provider>
    <PageLayout />
  </el-config-provider>
</template>
<style lang="scss">
/*! scopecss-disable-next-line */
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
