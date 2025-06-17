import ellipse from './img/Ellipse.png';

const drawerWidth = 240;

import {
  foregroundAccentColor,
  foregroundPrimaryColor,
  foregroundSecondaryColor,
} from '@ui/fonts/fonts';

export const listItemButton = (active: boolean) => ({
  padding: '0px 0px 0px 11px',
  position: 'relative',
  minHeight: '44px',
  margin: '0px 8px',
  borderRadius: '8px',
  bgcolor: active ? '#0053C412' : 'transparent',
  transition: 'background-color 0.3s',
  '&:hover': { bgcolor: '#0053C412' },
});

export const listItemAccentBar = {
  position: 'absolute',
  left: -8,
  top: 8,
  minWidth: '4px',
  minHeight: '28px',
  borderRadius: '0px 4px 4px 0px',
  bgcolor: foregroundAccentColor,
};

export const listItemText = (active: boolean) => ({
  '& .MuiTypography-root': {
    color: active ? foregroundAccentColor : foregroundSecondaryColor,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
    fontWeight: '400',
    fontFamily: 'Inter',
  },
});

export const sidebarBox = {
  width: drawerWidth,
  bgcolor: '#E6F0FB',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '12px',
  margin: '8px 0px 8px 8px',
  height: '100%',
  boxSizing: 'border-box',
};

export const footerBox = {
  padding: '0px 20px',
  margin: '16px 0px 20px 0px',
  display: 'grid',
  rowGap: '8px',
  minHeight: '136px',
};

export const managerCardBox = {
  border: '1px solid #0053C412',
  background: `${`url(${ellipse}) no-repeat right 0%`}, white`,
  borderRadius: '12px',
  minHeight: '102px',
  minWidth: '198px',
};

export const sidebarSx = {
  width: drawerWidth + 16,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth + 16,
    boxSizing: 'border-box',
    background: 'none',
    border: 'none',
    padding: 0,
  },
};

export const headerBox = {
  display: 'grid',
  justifyItems: 'center',
  gap: '12px',
  margin: '20px 0px 8px 0px',
  minHeight: '94px',
};

export const selectBox = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
};

export const selectField = {
  bgcolor: '#FFFFFF',
  borderRadius: '8px',
  minHeight: '40px',
  '& .MuiSelect-icon': {
    right: 12,
    top: '20%',
  },
  '& .MuiSelect-select': {
    color: foregroundPrimaryColor,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0px',
    fontWeight: '400',
    fontFamily: 'Inter',
    paddingLeft: '12px',
    verticalAlign: 'middle',
  },
};

export const iconFill = (active: boolean) => {
  const color = active ? foregroundAccentColor : foregroundSecondaryColor;

  return {
    minWidth: 28,
    '& *': {
      fill: color,
    },
  };
};

export const iconStroke = (active: boolean) => {
  const color = active ? foregroundAccentColor : foregroundSecondaryColor;

  return {
    minWidth: 28,
    '& *': {
      stroke: color,
    },
  };
};
