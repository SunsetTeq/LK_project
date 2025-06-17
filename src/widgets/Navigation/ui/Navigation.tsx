import { Avatar, Badge, Box, Breadcrumbs, Link } from '@mui/material';
import {
  avatarBox,
  radgeBox,
  iconBox,
  navigatorBox,
  primaryTextColor,
  secondaryTextColor,
} from './styles';
import { useGetUserQuery } from '@api/userApi';
import { useLocation } from 'react-router-dom';
import { RegularXS } from '@ui/fonts/fonts';
import BellIcon from './img/bell.svg?react';

const Locations = [
  { url: '/information', label: 'Информация' },
  { url: '/catalog', label: 'Каталог' },
  { url: '/assignments', label: 'Закрепления' },
];

export const Navigation = () => {
  const { data: user } = useGetUserQuery();
  const location = useLocation();
  const currentLocation =
    Locations.find((item) => location.pathname.startsWith(item.url))?.label ||
    'Нет информации';

  return (
    <Box sx={navigatorBox}>
      <Box sx={{ flexGrow: '1' }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ ...RegularXS, color: primaryTextColor }}
            href="/"
          >
            {user?.company_type ?? 'Нет информации'}
          </Link>
          <Link
            underline="hover"
            sx={{ ...RegularXS, color: secondaryTextColor }}
            href="#"
          >
            {currentLocation}
          </Link>
        </Breadcrumbs>
      </Box>
      <Box sx={iconBox}>
        <Badge badgeContent={5} sx={radgeBox}>
          <BellIcon />
        </Badge>
        <Avatar alt="Саша Вязов" sx={avatarBox}>
          СВ
        </Avatar>
      </Box>
    </Box>
  );
};
