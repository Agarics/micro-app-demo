<script setup lang="ts">
import { preferences } from '@micro/preferences';

import { Copyright } from '../basic/copyright';

defineOptions({
  name: 'AuthenticationFormView',
});
</script>

<template>
  <div class="flex-col-center relative px-6 py-10 lg:flex-initial lg:px-8">
    <!-- Router View with Transition and KeepAlive -->
    <RouterView v-slot="{ Component, route }">
      <Transition appear mode="out-in" name="slide-right">
        <KeepAlive :include="['Login']">
          <component
            :is="Component"
            :key="route.fullPath"
            class="enter-x mt-6 w-full sm:mx-auto md:max-w-md"
          />
        </KeepAlive>
      </Transition>
    </RouterView>

    <!-- Footer Copyright -->
    <div
      class="text-muted-foreground absolute bottom-3 flex text-center text-xs"
    >
      <Copyright
        v-if="preferences.copyright.enable"
        v-bind="preferences.copyright"
      />
    </div>
  </div>
</template>
