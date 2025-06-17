import {
  foregroundAccentColor,
  foregroundPrimaryColor,
  RegularXS,
} from '@ui/fonts/fonts';

export const dynTabs = {
  '& .MuiTabs-flexContainer': {
    gap: '8px',
  },
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  '& .MuiTabs-indicatorSpan': {
    width: '90%',
    backgroundColor: foregroundAccentColor,
  },
};

export const dinTab = {
  ...RegularXS,
  color: foregroundPrimaryColor,
  p: '6px 0 0 0',
  textTransform: 'none',
  '&.Mui-selected': {
    color: foregroundAccentColor,
  },
};

export const onlyTabs = {
  ml: '-4px',
};
