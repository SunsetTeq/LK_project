import type { CartState } from './cartTypes';

const STORAGE_KEY = 'myApp_cart';

export function loadCartState(): CartState | undefined {
  try {
    const serialized = localStorage.getItem(STORAGE_KEY);
    if (!serialized) return undefined;
    return JSON.parse(serialized) as CartState;
  } catch (e) {
    console.warn('Не удалось загрузить корзину из localStorage:', e);
    return undefined;
  }
}

export function saveCartState(state: CartState): void {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch (e) {
    console.warn('Не удалось сохранить корзину в localStorage:', e);
  }
}
