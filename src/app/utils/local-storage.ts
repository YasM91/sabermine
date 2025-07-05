import { Item } from '@types';

export function addLocalStorage(key: string, val: Item) {
  if (typeof window !== 'undefined') {
    return localStorage.setItem(key, JSON.stringify(val));
  }
}

export function getLocalStorage() {
  if (typeof window !== 'undefined') {
    const items: Record<string, unknown> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const val = localStorage.getItem(key);
        items[key] = JSON.parse(val!);
      }
    }
    return items;
  }

  return null;
}

export function getItemLocalStorage(key: string) {
  if (typeof window !== 'undefined') {
    const val = localStorage.getItem(key);

    return val ? JSON.parse(val) : null;
  }

  return null;
}

export function deleteLocalStorage(key: string) {
  if (typeof window !== 'undefined') {
    return localStorage.removeItem(key);
  }
}
