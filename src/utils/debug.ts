import { isDebug } from 'utils/isDebug.ts';

export function debug(...args: any[]) {
  if (isDebug()) console.log('[debug]', ...args);
}
