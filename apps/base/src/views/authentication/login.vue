<script lang="ts" setup>
import { AuthenticationLogin } from '@bim/common-ui';

import { useAuthStore } from '#/store';

defineOptions({ name: 'Login' });

const authStore = useAuthStore();
</script>

<template>
  <div
    class="flex-col-center relative h-full px-6 py-10 lg:flex-initial lg:px-8"
  >
    <AuthenticationLogin
      :loading="authStore.loginLoading"
      :show-code-login="false"
      :show-forget-password="false"
      :show-qrcode-login="false"
      :show-register="false"
      :show-remember-me="false"
      :show-third-party-login="false"
      class="enter-x mt-6 w-full sm:mx-auto md:max-w-md"
      password-placeholder="123456"
      username-placeholder="bim"
      @submit="authStore.authLogin"
    />
  </div>
</template>
