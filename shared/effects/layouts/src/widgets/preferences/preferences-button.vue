<script lang="ts" setup>
import { Settings } from '@bim/icons';
import { BimIconButton } from '@bim-core/shadcn-ui';

import Preferences from './preferences.vue';
</script>
<template>
  <Preferences>
    <BimIconButton>
      <Settings class="size-4" />
    </BimIconButton>
  </Preferences>
</template>
