export function gettext(key: string) {
  return window?.gettext?.(key) || key;
}

export function ngettext(
  singular: string,
  plural: string,
  count: number
): string {
  return window?.ngettext?.(singular, plural, count) || singular;
}
