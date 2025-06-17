// src/features/cart/model/cartSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CATEGORIES, Category } from '../constants/categories';
import type { Item, CartState } from './cartTypes';
import { loadCartState } from './cartPersistence';

// Пытаемся загрузить из localStorage
const persistedCart = loadCartState();

// Если ничего не было в localStorage, создаём «пустые» секции по всем категориям
const initialState: CartState =
  persistedCart ??
  CATEGORIES.map((cat) => ({
    category: cat,
    items: [],
  }));

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Добавить товар в указанную категорию
    addItem(
      state,
      action: PayloadAction<{ category: Category; product: Item }>,
    ) {
      const { category, product } = action.payload;
      const section = state.find((sec) => sec.category === category);
      if (section) {
        section.items.push(product);
      }
    },
    // Удалить товар по id из указанной категории
    removeItem(
      state,
      action: PayloadAction<{ category: Category; uniqId: string }>,
    ) {
      const { category, uniqId } = action.payload;
      const section = state.find((sec) => sec.category === category);
      if (section) {
        section.items = section.items.filter((item) => item.uniqId !== uniqId);
      }
    },
    // Полностью очистить корзину (убрать все товары во всех категориях)
    clearCart(state) {
      state.forEach((sec) => {
        sec.items = [];
      });
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
