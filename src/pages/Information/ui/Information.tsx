import { Company } from './components/Company';
import { Sites } from './components/Sites';
import { Subscriptions } from './components/Subscriptions';
import { DynamicTabs } from '@ui/DynamicTabs';

const tabs = [
  { label: 'Компания', content: <Company /> },
  { label: 'Площадки', content: <Sites /> },
  { label: 'Подписки', content: <Subscriptions /> },
];

export const Information = () => {
  return <DynamicTabs tabs={tabs} ariaLabel="Информация" />;
};
