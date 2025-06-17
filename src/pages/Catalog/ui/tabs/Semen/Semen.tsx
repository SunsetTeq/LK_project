import { Box } from '@mui/material';
import { Grid } from './Grid';
import { Cart } from '../../components/Cart';

export const Semen = () => {
  return (
    <Box
      component={'div'}
      sx={{ display: 'flex', gap: 3, flexGrow: '1', overflow: 'hidden' }}
    >
      <Grid />
      <Cart />
    </Box>
  );
};
