import * as React from 'react';
import { useAppDispatch } from '@hooks/useAppDispatch';
import { addItem, clearCart, removeItem } from '@pages/Catalog/model/cartSlice';
import { appStore } from '@app/store/AppStore';
import type { Item } from '@pages/Catalog/model/cartTypes';
import { Category } from '@pages/Catalog/constants/categories';

/**
 * хук принимает props той строки, с которой нужно произвести действие в корзине.
 * возвращает два колбэка — handleAdd и handleClear и привязанные к dispatch.
 */

export function useRowActions() {
  const dispatch = useAppDispatch();

  // добавление в корзину
  const handleAdd = React.useCallback(
    (category: Category, row: any, rowId: number | string) => {
      const product: Item = {
        uniqId: Date.now().toString(),
        id: String(rowId),
        name: String(row.name),
        naab: String(row.naab),
      };
      dispatch(addItem({ category, product }));
      console.log('После addItem:', appStore.getState().cart);
    },
    [dispatch],
  );

  //удаление элемента из корзины
  const handleRemove = React.useCallback(
    (category: Category, uniqId: string) => {
      dispatch(removeItem({ category, uniqId }));
      console.log('После removeItem:', appStore.getState().cart);
    },
    [dispatch],
  );

  // очистка всей корзины
  const handleClear = React.useCallback(() => {
    dispatch(clearCart());
    console.log('После clearCart:', appStore.getState().cart);
  }, [dispatch]);

  return { handleAdd, handleRemove, handleClear };
}
