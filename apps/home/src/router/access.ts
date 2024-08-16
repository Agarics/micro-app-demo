import type {
  ComponentRecordType,
  GenerateMenuAndRoutesOptions,
} from '@bim/types';

import { generateAccessible } from '@bim/access';
import { preferences } from '@bim/preferences';

import { ElMessage } from 'element-plus';

import { getAllMenusApi } from '#/api';
import { $t } from '#/locales';

const forbiddenComponent = () => import('#/views/fallback/forbidden.vue');

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