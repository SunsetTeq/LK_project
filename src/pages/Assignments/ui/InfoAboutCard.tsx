import { Box, IconButton, Typography } from '@mui/material';
import { DynamicTabs } from '@ui/DynamicTabs';
import { foregroundPrimaryColor, HeaderH6 } from '@ui/fonts/fonts';
import { Status } from '@ui/Status/ui/Status';
import { Delivery } from './tabs/Delivery';
import { Execution } from './tabs/Execution';
import { Goods } from './tabs/Goods';
import { ShippingPlan } from './tabs/ShippingPlan';
import { getCardsData } from '../../../shared/model/data/cardsData';
import { useAppSelector } from '@hooks/useAppSelector';
import CloseIcon from './icons/Icon.svg?react';
import { clearSelection } from '@pages/Assignments/model/assignmentsSlice';
import { useAppDispatch } from '@hooks/useAppDispatch';

const tabs = [
  { label: 'Товары', content: <Goods /> },
  { label: 'План отгрузки', content: <ShippingPlan /> },
  { label: 'Исполнение по кол-ву', content: <Execution /> },
  { label: 'Доставки', content: <Delivery /> },
];

export const InfoAboutCard = () => {
  const selectedId = useAppSelector((state) => state.assignments.selectedId);
  const { assignments } = getCardsData();
  const dispatch = useAppDispatch();

  const selectedCard = assignments.find((card) => card.id === selectedId);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <Box component={'div'} sx={{ display: 'flex' }}>
        <Box component={'div'} sx={{ mb: 0 }}>
          <Status
            assignmentStatus={
              selectedCard?.assignment_status ?? 'Неизвестный статус'
            }
          />
        </Box>
        <Box component={'div'} sx={{ mb: '6px', ml: 'auto', mr: '8px' }}>
          <IconButton sx={{ p: 0 }} onClick={() => dispatch(clearSelection())}>
            <CloseIcon width={20} height={20} />
          </IconButton>
        </Box>
      </Box>
      <Typography sx={{ ...HeaderH6, color: foregroundPrimaryColor }}>
        {selectedCard?.title ?? 'Нет информации'}
      </Typography>
      <DynamicTabs tabs={tabs} ariaLabel="Каталог" />
    </Box>
  );
};
