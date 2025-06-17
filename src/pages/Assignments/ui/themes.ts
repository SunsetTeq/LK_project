import { createTheme } from '@mui/material/styles';
import { borderAccentColor } from '@ui/fonts/fonts';

export const paginatiomTheme = createTheme({
  palette: {
    primary: {
      main: borderAccentColor,
    },
  },
});
