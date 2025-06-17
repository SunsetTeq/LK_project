import { useGetUserQuery } from '@api/userApi';
import { Box, Link, Typography } from '@mui/material';
import {
  RegularXS,
  MediumXXS,
  foregroundAccentColor,
  foregroundPrimaryColor,
  foregroundTertiaryColor,
} from '@ui/fonts/fonts';

import { footerBox, managerCardBox } from './styles';
import VkIcon from './img/vk.svg?react';
import TgIcon from './img/tg.svg?react';
import YoutubeIcon from './img/youtube.svg?react';

export const Footer = () => {
  const { data: user } = useGetUserQuery();

  console.log(user);

  return (
    <Box sx={footerBox}>
      <Box sx={managerCardBox}>
        <Box sx={{ margin: '19px 19px 8px 19px' }}>
          <Box color={foregroundTertiaryColor}>
            <Typography sx={MediumXXS}> Ваш менеджер</Typography>
          </Box>
          <Box>
            <Box color={foregroundPrimaryColor}>
              <Typography sx={RegularXS}>
                {user?.manager?.name ?? 'Нет имени'}
              </Typography>
            </Box>
            <Box color={foregroundAccentColor}>
              {user?.manager?.phone ? (
                <Link href={`tel:${user.manager.phone}`} underline="none">
                  <Typography sx={RegularXS}>{user.manager.phone}</Typography>
                </Link>
              ) : (
                <Typography sx={RegularXS}>Нет номера</Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: '8px', padding: '0px 0px 0px 20px' }}>
        <a href="https://vk.com/" target="_blank">
          <VkIcon />
        </a>
        <a href="https://telegram.org/" target="_blank">
          <TgIcon />
        </a>
        <a href="https://youtube.com" target="_blank">
          <YoutubeIcon />
        </a>
      </Box>
    </Box>
  );
};
