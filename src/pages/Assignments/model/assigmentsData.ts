export const DEFAULT_ASSIGNMENTS_CONTENT = {
  regular: '0',
  period: '0',
  total_doses: 0,
  shipped_doses: 0,
  left_doses: 0,
  dealings: 0,
};
export const DEFAULT_ASSIGNMENTS_LABELS = {
  regular: 'Регулярность поставок',
  period: 'Период',
  total_doses: 'Всего доз, шт',
  shipped_doses: 'Отгружено доз, шт',
  left_doses: 'Осталось доз, шт',
  dealings: 'Сделок с отгрузками, шт',
};

export interface CardAssignmentsProps {
  title: string;
  headerValue: string;
  assignmentStatus: string;
  content: {
    regular: string;
    period: string;
    total_doses: number;
    shipped_doses: number;
    left_doses: number;
    dealings: number;
  };
  contentLabels: {
    regular: string;
    period: string;
    total_doses: string;
    shipped_doses: string;
    left_doses: string;
    dealings: string;
  };
}

export const KEYS = [
  'regular',
  'period',
  'total_doses',
  'shipped_doses',
  'left_doses',
  'dealings',
] as const;
