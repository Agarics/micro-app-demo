<script setup lang="ts">
import type { ButtonVariants } from '../ui/button';

import { computed, useSlots } from 'vue';

import { cn } from '@micro-core/shared';

import { type PrimitiveProps } from 'radix-vue';

import { BimTooltip } from '../tooltip';
import BimButton from './button.vue';

interface Props extends PrimitiveProps {
  class?: any;
  disabled?: boolean;
  onClick?: () => void;
  tooltip?: string;
  tooltipSide?: 'bottom' | 'left' | 'right' | 'top';
  variant?: ButtonVariants['variant'];
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  onClick: () => {},
  tooltipSide: 'bottom',
  variant: 'icon',
});

const slots = useSlots();

const showTooltip = computed(() => !!slots.tooltip || !!props.tooltip);
</script>

<template>
  <BimButton
    v-if="!showTooltip"
    :class="cn('rounded-full', props.class)"
    :disabled="disabled"
    :variant="variant"
    size="icon"
    @click="onClick"
  >
    <slot></slot>
  </BimButton>

  <BimTooltip v-else :side="tooltipSide">
    <template #trigger>
      <BimButton
        :class="cn('rounded-full', props.class)"
        :disabled="disabled"
        :variant="variant"
        size="icon"
        @click="onClick"
      >
        <slot></slot>
      </BimButton>
    </template>
    <slot v-if="slots.tooltip" name="tooltip"> </slot>
    <template v-else>
      {{ tooltip }}
    </template>
  </BimTooltip>
</template>
