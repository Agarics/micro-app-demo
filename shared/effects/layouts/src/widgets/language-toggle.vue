<script setup lang="ts">
import type { SupportedLanguagesType } from '@micro/locales';

import { SUPPORT_LANGUAGES } from '@micro/constants';
import { Languages } from '@micro/icons';
import { loadLocaleMessages } from '@micro/locales';
import { preferences, updatePreferences } from '@micro/preferences';
import { BimDropdownRadioMenu, BimIconButton } from '@micro-core/shadcn-ui';

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
