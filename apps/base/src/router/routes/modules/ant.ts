import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: () => import('#/views/ant/index.vue'),
    meta: {
      affixTab: true,
      icon: 'lucide:area-chart',
      title: $t('page.dashboard.analytics'),
    },
    name: 'Ant',
    path: '/ant:path(.*)*',
  },
];

export default routes;
