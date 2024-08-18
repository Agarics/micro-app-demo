export interface MicroApp {
  baseroute: string;
  name: string;
  url: string;
}

export enum EventTypes {
  message = 'message',
}

export enum MessageTypes {
  error = 'error',
  info = 'info',
  router = 'router',
  success = 'success',
  warn = 'warn',
}

export interface MessageData {
  from: string;
  info: string;
  type: MessageTypes;
}

export interface DataListenerParam<T> {
  data: T;
  type: EventTypes;
}
