<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue';

import { cn } from '@micro-core/shared';

import { DialogTitle, type DialogTitleProps } from 'radix-vue';

const props = defineProps<
  { class?: HTMLAttributes['class'] } & DialogTitleProps
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <DialogTitle
    :class="cn('text-foreground font-medium', props.class)"
    v-bind="delegatedProps"
  >
    <slot></slot>
  </DialogTitle>
</template>
