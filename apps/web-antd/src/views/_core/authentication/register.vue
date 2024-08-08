<script lang="ts" setup>
import type { LoginAndRegisterParams } from '@bim/common-ui';

import { ref } from 'vue';

import { AuthenticationRegister } from '@bim/common-ui';
import { LOGIN_PATH } from '@bim/constants';

defineOptions({ name: 'Register' });

const loading = ref(false);

function handleSubmit(value: LoginAndRegisterParams) {
  console.log('register submit:', value);
}
</script>

<template>
  <AuthenticationRegister
    :loading="loading"
    :login-path="LOGIN_PATH"
    @submit="handleSubmit"
  />
</template>
