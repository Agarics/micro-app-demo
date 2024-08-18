import type { DataListenerParam, MessageData, MicroApp } from '@bim/types';

import microApp from '@micro-zoe/micro-app';
import { microApps } from '~/config/micro-app';

export function addMiroAppDataListener() {
  function createListener(item: MicroApp) {
    return (e: DataListenerParam<MessageData>) => {
      const { data, type } = e;
      switch (type) {
        case 'message': {
          const { info } = data;
          console.log('info, type, from:', info, type, item.name);
          break;
        }
        case 'router': {
          const { info } = data;
          microApp.router.push({
            name: item.name,
            path: info,
          });
          break;
        }
      }
    };
  }

  microApps.forEach((item) => {
    microApp.addDataListener(item.name, createListener(item));
  });
}
