export const CATEGORIES = ['Семя', 'Услуги', 'Товары'] as const;

export type Category = (typeof CATEGORIES)[number];
