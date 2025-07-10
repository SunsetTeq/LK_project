import { Box } from '@mui/material';
import {
  deliveryCardGrid,
  deliveryCardWrapper,
  itemFirstColumn,
  itemSecondColumn,
} from './style';
import { foregroundPrimaryColor, MediumXS } from '@ui/fonts/fonts';
import { ProgressSteps } from '@ui/ProgressSteps';
import { DeliveryIndicator } from './DeliveryIndicator';
import { FC } from 'react';
import { Status } from '@ui/Status/ui/Status';
import { AlertQuestion } from '@pages/Assignments/ui/components/AlertQuestion';

const data = [
  { label: 'Ожидается оплата', active: true },
  { label: 'В сборке', active: false },
  { label: 'В пути', active: false },
  { label: 'Завершен', active: false },
];

import { DeliveryCardProps } from '../model/deliveryData';

export const DeliveryCard: FC<DeliveryCardProps> = ({ delivery }) => {
  return (
    <Box key={delivery.id} component={'div'} sx={deliveryCardWrapper}>
      <DeliveryIndicator status={delivery.status} />
      <Box
        component={'div'}
        sx={{ display: 'flex', flexDirection: 'column', gap: '11px' }}
      >
        <Box
          component={'div'}
          sx={{ display: 'flex', flexDirection: 'row', gap: '8px' }}
        >
          <Box sx={{ ...MediumXS, color: foregroundPrimaryColor }}>
            {delivery.label}
          </Box>
          {delivery.status === 'end' ? (
            <Status assignmentStatus="Завершен" />
          ) : null}
        </Box>
        {delivery.status !== 'end' ? <ProgressSteps steps={data} /> : null}

        <Box component={'div'} sx={deliveryCardGrid}>
          <Box component={'div'} sx={itemFirstColumn}>
            Дата доставки
          </Box>
          <Box component={'div'} sx={itemSecondColumn}>
            {delivery.content.date}
          </Box>
          <Box component={'div'} sx={itemFirstColumn}>
            Отгружено семени
          </Box>
          <Box component={'div'} sx={itemSecondColumn}>
            {delivery.content.shipped}
          </Box>
          <Box component={'div'} sx={itemFirstColumn}>
            Стоимость
          </Box>
          <Box component={'div'} sx={itemSecondColumn}>
            {delivery.content.price}
          </Box>
          <Box component={'div'} sx={itemFirstColumn}>
            Остаток
          </Box>
          <Box component={'div'} sx={itemSecondColumn}>
            {delivery.content.left}
          </Box>
        </Box>

        <AlertQuestion />
        <Box component={'div'} sx={{ height: '27px' }} />
      </Box>
    </Box>
  );
};
