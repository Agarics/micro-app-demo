<script lang="ts" setup>
import { AuthenticationLogin } from '@bim/common-ui';

import { useAuthStore } from '#/store';

defineOptions({ name: 'Login' });

const authStore = useAuthStore();
</script>

<template>
  <AuthenticationLogin
    :loading="authStore.loginLoading"
    password-placeholder="123456"
    username-placeholder="bim"
    @submit="authStore.authLogin"
  />
</template>
