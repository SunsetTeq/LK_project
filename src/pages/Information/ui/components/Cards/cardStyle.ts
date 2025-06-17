import {
  backgroundGhostColor,
  foregroundPrimaryColor,
  foregroundSecondaryColor,
  MediumXS,
  RegularXS,
} from '@ui/fonts/fonts';

export const cardWrapper = {
  display: 'flex',
  width: '100%',
  borderRadius: '16px',
  backgroundColor: backgroundGhostColor,
  flexDirection: 'column',
  m: '24px 0px 16px 0px',
};

export const cardHeader = {
  display: 'flex',
  p: '16px 24px 12px 24px',
};

export const cardTitle = {
  ...MediumXS,
  flexGrow: 1,
  color: foregroundPrimaryColor,
};

export const cardContentBox = {
  display: 'flex',
  m: '0 4px 4px 4px ',
  p: '16px 20px',
  borderRadius: '12px',
  backgroundColor: 'white',
  minHeight: '48px',
};

export const cardColumn = {
  ...RegularXS,
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
  color: foregroundPrimaryColor,
  alignItems: 'flex-end',
};

export const cardFirstColumn = {
  ...cardColumn,
  flexGrow: 1,
  color: foregroundSecondaryColor,
  alignItems: 'flex-start',
};

export const cardCountValue = {
  ...RegularXS,
  color: foregroundPrimaryColor,
};
