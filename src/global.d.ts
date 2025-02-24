export interface ISettings {
  CURRENT_LANGUAGE?: string;
}

export interface IOneTrust {
  Init(): void;
  LoadBanner(): void;
  ToggleInfoDisplay(): void;
}

declare global {
  interface Window {
    gettext(key: string): string;
    ngettext(singular: string, plural: string, count: number): string;
    settings: ISettings;
    OneTrust: IOneTrust;
  }
}
