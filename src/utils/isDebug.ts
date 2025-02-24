export function isDebug(): boolean {
  return import.meta.env.MODE !== 'production' && !import.meta.env.VITEST;
}
