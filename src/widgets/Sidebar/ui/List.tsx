import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Icon1 from './img/Icon-1.svg?react';
import Icon2 from './img/Icon-2.svg?react';
import Icon3 from './img/Icon-3.svg?react';
import Icon4 from './img/Icon-4.svg?react';
import Icon5 from './img/Icon-5.svg?react';
import Icon6 from './img/Icon-6.svg?react';
import Icon7 from './img/Icon-7.svg?react';
import { NavLink, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  iconFill,
  iconStroke,
  listItemAccentBar,
  listItemButton,
  listItemText,
} from './styles';
import { isActivePage } from '@utils/isActivePage';

const ICON_PROPS = [
  { type: 'stroke' },
  { type: 'stroke' },
  { type: 'stroke' },
  { type: 'fill' },
  { type: 'stroke' },
  { type: 'stroke' },
  { type: 'stroke' },
];

const ICONS = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7];

const PAGES = [
  { url: '/information', label: 'Информация' },
  { url: '/assignments', label: 'Закрепления' },
  { url: '/catalog', label: 'Каталог' },
  { url: '2', label: 'Заявки' },
  { url: '3', label: 'Доставки' },
  { url: '4', label: 'Аналитика' },
  { url: '5', label: 'Поддержка' },
];

export const SidebarList = () => {
  const location = useLocation();

  return (
    <List sx={{ flexGrow: 1, p: 0 }}>
      {PAGES.map((page, idx) => {
        const isActive = isActivePage(location.pathname, page.url);
        const Icon = ICONS[idx];

        return (
          <ListItem key={page.url + idx} disablePadding>
            <ListItemButton
              component={NavLink}
              to={page.url}
              sx={listItemButton(isActive)}
            >
              {isActive && <Box sx={listItemAccentBar} />}

              <ListItemIcon
                sx={
                  ICON_PROPS[idx].type === 'fill'
                    ? iconFill(isActive)
                    : iconStroke(isActive)
                }
              >
                <Icon />
              </ListItemIcon>

              <ListItemText primary={page.label} sx={listItemText(isActive)} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
