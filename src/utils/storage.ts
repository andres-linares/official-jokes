export const Storage = {
  get<T>(key: string, defaultValue: T) {
    const item = localStorage.getItem(key);
    if (!item) return defaultValue;

    return JSON.parse(item) as T;
  },
  set(key: string, value: unknown) {
    const stringValue = JSON.stringify(value);
    localStorage.setItem(key, stringValue);
  },
};
