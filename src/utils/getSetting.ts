import { ISettings } from 'global';

const DEFAULT_SETTINGS: ISettings = {
  CURRENT_LANGUAGE: 'en',
};

export function getSetting<K = string>(key: keyof ISettings): K {
  if (window.settings?.[key]) return window.settings[key] as K;
  if (DEFAULT_SETTINGS[key]) return DEFAULT_SETTINGS[key] as K;
  return '' as K;
}
