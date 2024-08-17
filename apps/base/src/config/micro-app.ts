interface MicroApp {
  baseroute: string;
  name: string;
  url: string;
}

export const microApps: MicroApp[] = [
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
