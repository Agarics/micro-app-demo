<script setup lang="ts">
import { cn } from '@micro-core/shared';

import { Primitive, type PrimitiveProps } from 'radix-vue';

interface Props extends PrimitiveProps {
  class?: any;
  href: string;
}

const props = withDefaults(defineProps<Props>(), {
  as: 'a',
  class: '',
  href: '',
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn('text-primary hover:text-primary-hover', props.class)"
    :href="href"
    target="_blank"
  >
    <slot></slot>
  </Primitive>
</template>
