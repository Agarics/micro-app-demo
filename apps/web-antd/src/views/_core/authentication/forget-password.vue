<script lang="ts" setup>
import { ref } from 'vue';

import { AuthenticationForgetPassword } from '@bim/common-ui';
import { LOGIN_PATH } from '@bim/constants';

defineOptions({ name: 'ForgetPassword' });

const loading = ref(false);

function handleSubmit(value: string) {
  console.log('reset email:', value);
}
</script>

<template>
  <AuthenticationForgetPassword
    :loading="loading"
    :login-path="LOGIN_PATH"
    @submit="handleSubmit"
  />
</template>
