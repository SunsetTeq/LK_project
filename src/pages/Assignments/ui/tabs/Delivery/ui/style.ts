import {
  borderColorSplit,
  foregroundPrimaryColor,
  foregroundTertiaryColor,
  RegularXS,
} from '@ui/fonts/fonts';

export const deliveryWrapper = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  pt: '8px',
};

export const deliveryCardWrapper = {
  display: 'flex',
  p: '10px 0 0 0',
  flexDirection: 'row',
  gap: 2,
};

export const stepIndicatorBox = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '14px',
};

export const stepIndicatorLine = {
  backgroundColor: borderColorSplit,
  width: '2px',
  height: '100%',
  alignSelf: 'center',
};

export const deliveryCardGrid = {
  display: 'grid',
  gridTemplate: 'repeat(2, 1fr) / repeat(2, max-content 1fr)',
  rowGap: '4px',
  columnGap: '24px',
};

export const itemFirstColumn = {
  ...RegularXS,
  color: foregroundTertiaryColor,
};

export const itemSecondColumn = {
  ...RegularXS,
  color: foregroundPrimaryColor,
};
