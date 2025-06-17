export const primaryTextColor = '#00000073';
export const secondaryTextColor = '#000000E0';
export const foregroundErrorColor = '#FF4D00';
export const backgroundAccentTertiary = '#E6F0FB';

import {
  foregroundAccentColor,
  foregroundPrimaryInverse,
  MediumS,
  RegularXXS,
} from '@ui/fonts/fonts';

export const navigatorBox = {
  display: 'flex',
  padding: '18px 24px 0px 20px',
};

export const iconBox = {
  display: 'flex',
  gap: '25px',
  justifyContent: 'center',
  alignItems: 'center',
  m: '-10px 0px 0px 0px',
};

export const radgeBox = {
  '& .MuiBadge-badge': {
    ...RegularXXS,
    backgroundColor: foregroundErrorColor,
    color: foregroundPrimaryInverse,
    maxHeight: '16px',
  },
};

export const avatarBox = {
  ...MediumS,
  maxHeight: '40px',
  maxWidth: '40px',
  bgcolor: `${backgroundAccentTertiary}`,
  color: `${foregroundAccentColor}`,
};
