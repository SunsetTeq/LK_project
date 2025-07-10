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
    width: '95%',
    backgroundColor: foregroundAccentColor,
  },
};

export const dinTab = {
  ...RegularXS,
  color: foregroundPrimaryColor,
  p: '6px 4px 0 4px',
  minWidth: '0px',
  textTransform: 'none',
  '&.Mui-selected': {
    color: foregroundAccentColor,
  },
};

export const onlyTabs = {
  ml: '0px',
};
