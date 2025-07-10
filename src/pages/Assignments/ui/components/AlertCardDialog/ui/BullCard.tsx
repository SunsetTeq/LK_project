import { Box } from '@mui/material';
import { foregroundTertiaryColor } from '@ui/fonts/fonts';
import { FC } from 'react';
import { bullCardWrapper } from './style';

interface BullCardProps {
  name: string;
  count: number;
  id: string;
}

export const BullCard: FC<BullCardProps> = ({ name, count, id }) => {
  return (
    <Box component={'div'} id={id} sx={bullCardWrapper}>
      <Box sx={{ flexGrow: 1 }}>{name}</Box>
      <Box>
        <Box component={'span'} sx={{ color: foregroundTertiaryColor }}>
          Доступно доз:
        </Box>
        <Box component={'span'}> {count}</Box>
      </Box>
    </Box>
  );
};
