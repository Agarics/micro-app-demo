<script lang="ts" setup>
import type { CSSProperties } from 'vue';

import { BimSpinner } from '@bim-core/shadcn-ui';

import { useContentSpinner } from './use-content-spinner';

defineOptions({ name: 'LayoutContentSpinner' });

defineProps<{ overlayStyle: CSSProperties }>();

const { spinning } = useContentSpinner();
</script>
<template>
  <BimSpinner :spinning="spinning" :style="overlayStyle" />
</template>
