<script setup lang="ts">
import type { RegisterEmits } from './typings';

import { computed, reactive } from 'vue';
import { useRouter } from 'vue-router';

import { $t } from '@micro/locales';
import {
  BimButton,
  BimCheckbox,
  BimInput,
  BimInputPassword,
} from '@micro-core/shadcn-ui';

import Title from './auth-title.vue';

interface Props {
  /**
   * @zh_CN 是否处于加载处理状态
   */
  loading?: boolean;
  /**
   * @zh_CN 登陆路径
   */
  loginPath?: string;
}

defineOptions({
  name: 'RegisterForm',
});

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  loginPath: '/auth/login',
});

const emit = defineEmits<{
  submit: RegisterEmits['submit'];
}>();

const router = useRouter();

const formState = reactive({
  agreePolicy: false,
  confirmPassword: '',
  password: '',
  submitted: false,
  username: '',
});

const usernameStatus = computed(() => {
  return formState.submitted && !formState.username ? 'error' : 'default';
});

const passwordStatus = computed(() => {
  return formState.submitted && !formState.password ? 'error' : 'default';
});

const confirmPasswordStatus = computed(() => {
  return formState.submitted && formState.password !== formState.confirmPassword
    ? 'error'
    : 'default';
});

function handleSubmit() {
  formState.submitted = true;
  if (
    usernameStatus.value !== 'default' ||
    passwordStatus.value !== 'default'
  ) {
    return;
  }

  emit('submit', {
    password: formState.password,
    username: formState.username,
  });
}

function goToLogin() {
  router.push(props.loginPath);
}
</script>

<template>
  <div>
    <Title>
      {{ $t('authentication.createAnAccount') }} 🚀
      <template #desc> {{ $t('authentication.signUpSubtitle') }} </template>
    </Title>
    <BimInput
      v-model="formState.username"
      :error-tip="$t('authentication.usernameTip')"
      :label="$t('authentication.username')"
      :placeholder="$t('authentication.username')"
      :status="usernameStatus"
      name="username"
      type="text"
    />
    <!-- Use 8 or more characters with a mix of letters, numbers & symbols. -->
    <BimInputPassword
      v-model="formState.password"
      :error-tip="$t('authentication.passwordTip')"
      :label="$t('authentication.password')"
      :password-strength="true"
      :placeholder="$t('authentication.password')"
      :status="passwordStatus"
      name="password"
      required
      type="password"
    >
      <template #strengthText>
        {{ $t('authentication.passwordStrength') }}
      </template>
    </BimInputPassword>

    <BimInputPassword
      v-model="formState.confirmPassword"
      :error-tip="$t('authentication.confirmPasswordTip')"
      :label="$t('authentication.confirmPassword')"
      :placeholder="$t('authentication.confirmPassword')"
      :status="confirmPasswordStatus"
      name="confirmPassword"
      required
      type="password"
    />

    <div class="relative mt-4 flex pb-6">
      <div class="flex-center">
        <BimCheckbox v-model:checked="formState.agreePolicy" name="agreePolicy">
          {{ $t('authentication.agree') }}
          <span class="text-primary hover:text-primary-hover">{{
            $t('authentication.privacyPolicy')
          }}</span>
          &
          <span class="text-primary hover:text-primary-hover">
            {{ $t('authentication.terms') }}
          </span>
        </BimCheckbox>
      </div>
      <Transition name="slide-up">
        <p
          v-show="formState.submitted && !formState.agreePolicy"
          class="text-destructive absolute bottom-1 left-0 text-xs"
        >
          {{ $t('authentication.agreeTip') }}
        </p>
      </Transition>
    </div>
    <div>
      <BimButton :loading="loading" class="w-full" @click="handleSubmit">
        {{ $t('authentication.signUp') }}
      </BimButton>
    </div>
    <div class="mt-4 text-center text-sm">
      {{ $t('authentication.alreadyHaveAccount') }}
      <span
        class="text-primary hover:text-primary-hover cursor-pointer text-sm font-normal"
        @click="goToLogin()"
      >
        {{ $t('authentication.goToLogin') }}
      </span>
    </div>
  </div>
</template>
