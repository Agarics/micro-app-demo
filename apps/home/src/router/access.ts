import type {
  ComponentRecordType,
  GenerateMenuAndRoutesOptions,
} from '@micro/types';

import { generateAccessible } from '@micro/access';
import { preferences } from '@micro/preferences';

import { getAllMenusApi } from '~/api';
import { $t } from '~/locales';
import { ElMessage } from 'element-plus';

const forbiddenComponent = () => import('~/views/fallback/forbidden.vue');

async function generateAccess(options: GenerateMenuAndRoutesOptions) {
  const pageMap: ComponentRecordType = import.meta.glob('../views/**/*.vue');

  return await generateAccessible(preferences.app.accessMode, {
    ...options,
    fetchMenuListAsync: async () => {
      ElMessage({
        duration: 1500,
        message: `${$t('common.loadingMenu')}...`,
      });
      return await getAllMenusApi();
    },
    // 可以指定没有权限跳转403页面
    forbiddenComponent,
    // 如果 route.meta.menuVisibleWithForbidden = true
    pageMap,
  });
}

export { generateAccess };
