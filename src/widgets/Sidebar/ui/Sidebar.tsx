import Drawer from '@mui/material/Drawer';

import { Box } from '@mui/material';
import { headerBox, sidebarBox, sidebarSx } from './styles';

import Logo from './img/_wrapperlogo.svg?react';

import { SidebarList } from './List';
import { Selector } from './Select';
import { Footer } from './Footer';

export const Sidebar = () => {
  return (
    <Drawer sx={sidebarSx} variant="permanent" anchor="left">
      <Box sx={sidebarBox}>
        <Box sx={headerBox}>
          <Box>
            <Logo />
          </Box>
          <Selector />
        </Box>
        <SidebarList />
        <Footer />
      </Box>
    </Drawer>
  );
};
