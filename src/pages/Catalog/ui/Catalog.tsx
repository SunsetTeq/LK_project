import { DynamicTabs } from '@ui/DynamicTabs';
import { Training } from './tabs/Training';
import { Semen } from './tabs/Semen/Semen';
import { Services } from './tabs/Services';
import { ITSolutions } from './tabs/ITSolutions';
import { Products } from './tabs/Products';

const tabs = [
  { label: 'Семя', content: <Semen /> },
  { label: 'Услуги', content: <Services /> },
  { label: 'IT-решения', content: <ITSolutions /> },
  { label: 'Товары', content: <Products /> },
  { label: 'Обучение', content: <Training /> },
];

export const Catalog = () => {
  return <DynamicTabs tabs={tabs} ariaLabel="Каталог" />;
};
