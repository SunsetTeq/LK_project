import { Box } from '@mui/system';
import { stepIndicatorBox, stepIndicatorLine } from './style';
import ClockIcon from './icons/ClockCircle.svg?react';
import EndIcon from './icons/Ellipse.svg?react';
import { FC } from 'react';
import { DeliveryIndicatorProps } from '../model/deliveryData';

export const DeliveryIndicator: FC<DeliveryIndicatorProps> = ({ status }) => {
  return (
    <Box component={'div'} sx={stepIndicatorBox}>
      {status !== 'end' ? (
        <ClockIcon width={14} height={14} />
      ) : (
        <EndIcon width={10} height={10} />
      )}
      <Box component={'div'} sx={stepIndicatorLine} />
    </Box>
  );
};
