<script setup lang="ts">
import type { ButtonVariants } from '@bim-core/shadcn-ui/components/ui/button';

import { computed, type HTMLAttributes, useSlots } from 'vue';

import { BimTooltip } from '@bim-core/shadcn-ui/components/tooltip';
import { cn } from '@bim-core/shared';

import { type PrimitiveProps } from 'radix-vue';

import BimButton from './button.vue';

interface Props extends PrimitiveProps {
  class?: HTMLAttributes['class'];
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
