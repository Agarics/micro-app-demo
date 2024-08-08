const BasicLayout = () => import('./basic.vue');

const IFrameView = () => import('@bim/layouts').then((m) => m.IFrameView);

const AuthPageLayout = () =>
  import('@bim/layouts').then((m) => m.AuthPageLayout);

export { AuthPageLayout, BasicLayout, IFrameView };
