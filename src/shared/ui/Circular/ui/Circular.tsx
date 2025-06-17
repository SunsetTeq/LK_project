import React from 'react';
import {
  Box,
  CircularProgress,
  Typography,
  circularProgressClasses,
} from '@mui/material';
import {
  MediumXS,
  foregroundPrimaryColor,
  foregroundAccentColor,
  backgroundTertiaryColor,
} from '@ui/fonts/fonts';
import { SxProps, Theme } from '@mui/system';

interface CircularProps {
  value: number;
  size?: number;
  thickness?: number;
  sx?: SxProps<Theme>;
  textColor?: string;
  bgColor?: string;
  progressColor?: string;
}

export const Circular: React.FC<CircularProps> = ({
  value,
  size = 60,
  thickness = 4,
  sx,
  textColor = foregroundPrimaryColor,
  bgColor = backgroundTertiaryColor,
  progressColor = foregroundAccentColor,
}) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', ...sx }}>
      {/* Фоновый круг */}
      <CircularProgress
        variant="determinate"
        value={100}
        size={size}
        thickness={thickness}
        sx={{ color: bgColor }}
      />
      {/* Активный круг */}
      <CircularProgress
        variant="determinate"
        value={value}
        size={size}
        thickness={thickness}
        sx={{
          color: progressColor,
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
      />
      {/* Текст в центре */}
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography component="div" sx={{ ...MediumXS, color: textColor }}>
          {`${value}%`}
        </Typography>
      </Box>
    </Box>
  );
};
