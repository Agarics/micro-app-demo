<script lang="ts" setup>
import { Settings } from '@micro/icons';
import { BimIconButton } from '@micro-core/shadcn-ui';

import Preferences from './preferences.vue';
</script>
<template>
  <Preferences>
    <BimIconButton>
      <Settings class="size-4" />
    </BimIconButton>
  </Preferences>
</template>
