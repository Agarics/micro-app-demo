<script lang="ts" setup>
import type { DropdownMenuProps } from '@micro-core/shadcn-ui';

import { ChevronDown } from '@micro-core/icons';
import { BimDropdownMenu } from '@micro-core/shadcn-ui';

defineProps<DropdownMenuProps>();
</script>

<template>
  <BimDropdownMenu :menus="menus" :modal="false">
    <div
      class="flex-center hover:bg-muted hover:text-foreground text-muted-foreground border-border h-full cursor-pointer border-l px-2 text-lg font-semibold"
    >
      <ChevronDown class="size-4" />
    </div>
  </BimDropdownMenu>
</template>
