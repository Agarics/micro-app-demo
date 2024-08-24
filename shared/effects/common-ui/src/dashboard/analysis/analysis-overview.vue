<script setup lang="ts">
import type { AnalysisOverviewItem } from '../typing';

import {
  BimCountToAnimator,
  BimIcon,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@micro-core/shadcn-ui';

interface Props {
  items: AnalysisOverviewItem[];
}

defineOptions({
  name: 'AnalysisOverview',
});

withDefaults(defineProps<Props>(), {
  items: () => [],
});
</script>

<template>
  <div class="md:flex">
    <template v-for="(item, index) in items" :key="item.title">
      <Card
        :class="{ 'md:mr-4': index + 1 < 4 }"
        :title="item.title"
        class="mt-5 w-full md:mt-0 md:w-1/4"
      >
        <CardHeader>
          <CardTitle class="text-xl">{{ item.title }}</CardTitle>
        </CardHeader>

        <CardContent class="flex items-center justify-between">
          <BimCountToAnimator
            :end-val="item.value"
            :start-val="1"
            class="text-xl"
            prefix=""
          />
          <BimIcon :icon="item.icon" class="size-8 flex-shrink-0" />
        </CardContent>
        <CardFooter class="justify-between">
          <span>{{ item.totalTitle }}</span>
          <BimCountToAnimator
            :end-val="item.totalValue"
            :start-val="1"
            prefix=""
          />
        </CardFooter>
      </Card>
    </template>
  </div>
</template>
