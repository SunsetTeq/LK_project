import { getDebtInfo } from '../../../pages/Information/lib/helpers/getDebtInfo';
import { useGetUserQuery } from '@api/userApi';

export const STATUS_OPTIONS = [
  'Черновик',
  'На согласовании',
  'Исполняется',
  'Выполнено',
];

const DEFAULT_SEMEN_LIST = [
  { label: 'Семя, руб', value: '0.00' },
  { label: 'Семя, руб', value: '0.00' },
  { label: 'Семя, руб', value: '0.00' },
];
const DEFAULT_ANIMALS_LIST = [
  { label: 'Молочные коровы, шт', value: 'Не заполнено' },
  { label: 'Тёлки, шт', value: 'Не заполнено' },
];

function ensureSemenList(
  items?: Array<{ label: string; count: number }>,
): Array<{ label: string; value: string }> {
  if (!items || items.length === 0) {
    return DEFAULT_SEMEN_LIST;
  }
  return items.map((item) => ({
    label: item.label,
    value: item.count
      .toLocaleString('ru-RU', { minimumFractionDigits: 2 })
      .replace(',', '.'),
  }));
}

function ensureAnimalsList(
  items?: Array<{ label: string; count: number }>,
): Array<{ label: string; value: string }> {
  if (!items || items.length === 0) {
    return DEFAULT_ANIMALS_LIST;
  }
  return items.map((item) => ({
    label: item.label,
    value: item.count.toLocaleString('ru-RU'),
  }));
}

export function getCardsData() {
  const { data: user } = useGetUserQuery();
  const { debt_message, isDebt } = getDebtInfo(user?.debt);

  // годовой оборот семени
  const annualTurnover = {
    title: user?.annual_turnover?.title ?? 'Годовой оборот, руб',
    status: '',
    header: user?.annual_turnover?.header
      ? user.annual_turnover.header
          .toLocaleString('ru-RU', { minimumFractionDigits: 2 })
          .replace(',', '.')
      : '0.00',
    semen: ensureSemenList(user?.annual_turnover?.semen),
  };

  // поголовье
  const cattle = {
    title: user?.cattle?.title ?? 'Поголовье',
    status: '',
    header: user?.cattle?.header
      ? user.cattle.header.toLocaleString('ru-RU')
      : '0',
    animals: ensureAnimalsList(user?.cattle?.animals),
    date: user?.cattle?.date ?? { label: 'Дата обновления', value: '—' },
  };

  // контакты
  const staff = {
    title: user?.staff?.title ?? 'Контакты',
    header: '',
    status: '',
    content: user?.staff?.content ?? [],
    contactsTitle: user?.staff?.contacts_title ?? 'Контакты не заполнены',
    contacts: user?.staff?.contacts ?? [],
  };

  // сервис менеджеры
  const managers = {
    title: user?.managers?.title ?? 'Сервис менеджеры',
    header: '',
    status: '',
    content: user?.managers?.content ?? [],
  };

  // реквизиты
  const details = {
    title: user?.details?.title ?? 'Реквизиты',
    header: '',
    status: '',
    content: user?.details?.content ?? [],
  };

  const assignments = user?.assignments ?? [];

  type AssignmentGoods = {
    sum: number;
    id: string | null;
    cols: { product: string; article: string; count: string };
    rows: { product: string; article: number; count: number }[];
  };

  const assignmentsGoods: AssignmentGoods[] =
    user?.assignments_goods?.map((item) => ({
      sum: item.sum ?? 0,
      id: item.id ?? null,
      cols: {
        product: 'Товар',
        article: 'Артикул',
        count: 'Кол-во доз',
      },
      rows: item.content ?? [],
    })) ?? [];

  type AssignmentExecution = {
    id: string | null;
    cols: {
      product: string;
      article: string;
      count_fixed: string;
      count_set: string;
      count_required: string;
      count_performed: string;
    };
    rows: {
      product: string;
      article: number;
      count_fixed: number;
      count_set: number;
      count_required: number;
      count_performed: number;
    }[];
  };

  const assignmentsExecution: AssignmentExecution[] =
    user?.assignments_execution?.map((item) => ({
      id: item.id ?? null,
      cols: {
        product: 'Товар',
        article: 'Артикул',
        count_fixed: 'Закреплено, доз',
        count_set: 'Поставлено, доз',
        count_required: 'Требуется, доз',
        count_performed: 'Выполнено',
      },
      rows: item.content ?? [],
    })) ?? [];

  type AssignmentDelivery = {
    id: string | null;
    assignments_id: string | null;
    status: string;
    label: string;
    content: {
      date: string;
      price: string;
      shipped: string;
      left: string;
    };
  };

  const assignmentsDelivery: AssignmentDelivery[] =
    user?.assignments_delivery?.map((item) => ({
      id: item.id ?? null,
      assignments_id: item.assignments_id ?? null,
      status: item.status,
      label: item.label,
      content: {
        date: item.content?.date ?? 'Неизвестная дата',
        price: item.content?.price
          ? `${item.content?.price.toLocaleString('ru-RU')} руб.`
          : '0 руб',
        shipped: item.content?.shipped
          ? `${item.content?.shipped.toLocaleString('ru-RU')} доз`
          : '0 доз',
        left: item.content?.left
          ? `${item.content?.left.toLocaleString('ru-RU')} доз`
          : '0 доз',
      },
    })) ?? [];

  const assignmentsBulls = user?.assignments_bulls ?? [];

  return {
    companyName: user?.active_company_name ?? 'Нет информации',
    debtMessage: debt_message,
    isDebt,
    annualTurnover,
    cattle,
    staff,
    managers,
    details,
    assignments,
    assignmentsGoods,
    assignmentsExecution,
    assignmentsDelivery,
    assignmentsBulls,
  };
}
