<script lang="ts" setup>
import { AuthenticationQrCodeLogin } from '@bim/common-ui';
import { LOGIN_PATH } from '@bim/constants';

defineOptions({ name: 'QrCodeLogin' });
</script>

<template>
  <AuthenticationQrCodeLogin :login-path="LOGIN_PATH" />
</template>
