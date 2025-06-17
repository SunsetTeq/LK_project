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
  };
}
