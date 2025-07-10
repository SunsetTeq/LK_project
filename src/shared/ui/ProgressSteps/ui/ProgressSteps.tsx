import { FC } from 'react';
import { ProgressStep } from './ProgressStep';
import { Box } from '@mui/material';
import { progressStepsWrapper } from './style';

interface StepData {
  label: string;
  active: boolean;
}

interface ProgressStepsProps {
  steps: StepData[];
}

export const ProgressSteps: FC<ProgressStepsProps> = ({ steps }) => {
  return (
    <Box component={'div'} sx={progressStepsWrapper}>
      {steps.map(({ label, active }, idx) => (
        <ProgressStep key={idx} label={label} active={active} />
      ))}
    </Box>
  );
};
