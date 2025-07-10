import React from 'react';
import { Box } from '@mui/material';
import {
  backgroundAccentGhostColor,
  backgroundGhostColor,
  backgroundSuccessColor,
  backgroundWarningColor,
  borderAccentSecondaryColor,
  borderGhostColor,
  borderSuccessSecondaryColor,
  borderWarningSecondaryColor,
  foregroundAccentColor,
  foregroundPrimaryColor,
  foregroundSuccessColor,
  foregroundWarningColor,
} from '@ui/fonts/fonts';
import { cardStatus } from './style';

interface StatusProps {
  assignmentStatus: string;
}

export const Status: React.FC<StatusProps> = ({ assignmentStatus }) => {
  let style = {
    color: foregroundPrimaryColor,
    border: borderGhostColor,
    backgroundColor: backgroundGhostColor,
  };

  if (assignmentStatus === 'На согласовании') {
    style = {
      color: foregroundWarningColor,
      border: `1px solid ${borderWarningSecondaryColor}`,
      backgroundColor: backgroundWarningColor,
    };
  } else if (assignmentStatus === 'Исполняется') {
    style = {
      color: foregroundAccentColor,
      border: `1px solid ${borderAccentSecondaryColor}`,
      backgroundColor: backgroundAccentGhostColor,
    };
  } else if (
    assignmentStatus === 'Выполнено' ||
    assignmentStatus === 'Завершен'
  ) {
    style = {
      color: foregroundSuccessColor,
      border: `1px solid ${borderSuccessSecondaryColor}`,
      backgroundColor: backgroundSuccessColor,
    };
  }

  return <Box sx={{ ...cardStatus, ...style }}>{assignmentStatus}</Box>;
};
