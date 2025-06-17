import { foregroundGhostColor, RegularXS, RegularXXS } from '@ui/fonts/fonts';

export const selectField = {
  borderRadius: '8px',
  maxHeight: '40px',
  '& .MuiSelect-icon': {
    right: 12,
    top: '20%',
    '& *': {
      stroke: foregroundGhostColor,
    },
  },
  '& .MuiSelect-select': {
    ...RegularXS,
    color: foregroundGhostColor,
  },
};
export const selectBox = {};
export const selectInputLabel = {
  ...RegularXXS,
  fontSize: '16px',
  lineHeight: '22px',
  color: foregroundGhostColor,
};

export const defaultTextBox = {
  display: 'flex',
  height: '100%',
  weight: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

export const rightColumn = {
  mt: 1,
  pt: 2,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};
