// / <reference types="vite/client" />

declare global {
  interface Window {
    __MICRO_APP_BASE_ROUTE__: string;
    microApp: any;
    unmount: any;
  }
}

export {};
