import type { RouteMeta as IRouteMeta } from '@bim-core/typings';
import type { MicroApp } from '@micro-zoe/micro-app';

import 'vue-router';

declare module 'vue-router' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface RouteMeta extends IRouteMeta {}
}

export interface BimAdminProAppConfigRaw {
  VITE_GLOB_API_URL: string;
}

export interface ApplicationConfig {
  apiURL: string;
}

declare global {
  interface Window {
    __MICRO_APP_BASE_ROUTE__: string;
    __MICRO_APP_ENVIRONMENT__: boolean;
    _BIM_ADMIN_PRO_APP_CONF_: BimAdminProAppConfigRaw;
    microApp: MicroApp;
    unmount: any;
  }
}
