import { Box } from '@mui/material';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  navigationBox,
  navigationElement,
  navigationElementAccentBar,
  navigationElementBox,
} from './styles';
import { foregroundPrimaryColor } from '@ui/fonts/fonts';
import { isActivePage } from '@utils/isActivePage';

export interface NavigationItem {
  url: string;
  label: string;
}

interface NavigationListProps {
  items: NavigationItem[];
}

export const NavigationList: React.FC<NavigationListProps> = ({ items }) => {
  const location = useLocation();
  return (
    <Box color={foregroundPrimaryColor} sx={navigationBox}>
      {items.map((item, index) => {
        const isActive = isActivePage(location.pathname, item.url);
        return (
          <Box key={item.url + index} sx={navigationElementBox}>
            <NavLink to={item.url} style={navigationElement(isActive)}>
              {item.label}
            </NavLink>
            {isActive && <Box sx={navigationElementAccentBar} />}
          </Box>
        );
      })}
    </Box>
  );
};
