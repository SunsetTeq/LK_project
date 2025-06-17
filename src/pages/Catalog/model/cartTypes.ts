import { Category } from '../constants/categories';

export interface Item {
  uniqId: string;
  id: string;
  naab: string;
  name: string;
  // при необходимости можно добавить цену, описание, картинку и т. д.
}

export interface CategoryInCart {
  category: Category;
  items: Item[];
}

export type CartState = CategoryInCart[];
