<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

import { cn } from '@micro-core/shared';

const props = defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>

<template>
  <div
    :class="
      cn(
        'bg-card text-card-foreground border-border rounded-xl border shadow-sm',
        props.class,
      )
    "
  >
    <slot></slot>
  </div>
</template>
