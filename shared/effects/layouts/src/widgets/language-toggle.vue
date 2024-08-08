<script setup lang="ts">
import type { SupportedLanguagesType } from '@bim/locales';

import { SUPPORT_LANGUAGES } from '@bim/constants';
import { Languages } from '@bim/icons';
import { loadLocaleMessages } from '@bim/locales';
import { preferences, updatePreferences } from '@bim/preferences';
import { BimDropdownRadioMenu, BimIconButton } from '@bim-core/shadcn-ui';

defineOptions({
  name: 'LanguageToggle',
});

async function handleUpdate(value: string) {
  const locale = value as SupportedLanguagesType;
  updatePreferences({
    app: {
      locale,
    },
  });
  await loadLocaleMessages(locale);
}
</script>

<template>
  <div>
    <BimDropdownRadioMenu
      :menus="SUPPORT_LANGUAGES"
      :model-value="preferences.app.locale"
      @update:model-value="handleUpdate"
    >
      <BimIconButton>
        <Languages class="size-4" />
      </BimIconButton>
    </BimDropdownRadioMenu>
  </div>
</template>
