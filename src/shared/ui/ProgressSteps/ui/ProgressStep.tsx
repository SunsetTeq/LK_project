import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import {
  backgroundTertiaryColor,
  foregroundAccentColor,
  foregroundSecondaryColor,
  RegularXXS,
} from '@ui/fonts/fonts';
import {
  progressStepLine,
  progressStepTextBox,
  progressStepWrapper,
} from './style';

interface ProgressStepProps {
  label: string;
  active: boolean;
}

export const ProgressStep: FC<ProgressStepProps> = ({ label, active }) => {
  return (
    <Box component={'div'} sx={progressStepWrapper}>
      <Box
        component={'div'}
        sx={{
          ...progressStepLine,
          backgroundColor: active
            ? foregroundAccentColor
            : backgroundTertiaryColor,
        }}
      ></Box>
      <Box sx={progressStepTextBox}>
        <Typography
          sx={{
            ...RegularXXS,
            color: active ? foregroundAccentColor : foregroundSecondaryColor,
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
};
