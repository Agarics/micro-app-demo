import type { RouteRecordRaw } from 'vue-router';

import { $t } from '~/locales';

const routes: RouteRecordRaw[] = [
  {
    component: () => import('~/views/home/index.vue'),
    meta: {
      icon: 'lucide:area-chart',
      order: -1,
      title: $t('page.dashboard.analytics'),
    },
    name: 'Dashboard',
    path: '/dashboard',
  },
];

export default routes;
