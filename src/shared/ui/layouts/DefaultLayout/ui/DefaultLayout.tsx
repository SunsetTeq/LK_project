import { Outlet } from 'react-router-dom';
import { Sidebar } from '@widgets/Sidebar';
import { Navigation } from '@widgets/Navigation';

import styles from './styles.module.scss';
import { Box, Divider } from '@mui/material';
import { deviderStyle, navigatorBox } from './styles';

export const DefaultLayout = () => {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Sidebar />
        <div className={styles.container}>
          <Box sx={navigatorBox}>
            <Navigation />
            <Divider variant="middle" sx={deviderStyle} />
          </Box>
          <div className={styles.page_content}>
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};
