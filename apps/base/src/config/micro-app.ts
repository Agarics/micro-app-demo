import type { MicroApp } from '@micro/types';

// 子应用列表
const appConfigList: MicroApp[] = [
  {
    baseroute: 'home',
    name: 'child-home',
    url: 'http://localhost:9528',
  },
  {
    baseroute: 'about',
    name: 'child-about',
    url: 'http://localhost:9526',
  },
];

// 子应用于基座应用部署在同一域名下，url直接使用location.origin
if (import.meta.env.PROD) {
  appConfigList.forEach((item) => {
    item.url = location.origin;
  });
}

export const microApps = appConfigList;
