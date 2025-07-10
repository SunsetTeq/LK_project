import { Button, styled } from '@mui/material';
import {
  foregroundAccentColor,
  foregroundPrimaryColor,
  MediumXS,
} from '@ui/fonts/fonts';
import { backgroundAccentTertiary } from '@widgets/Navigation/ui/styles';

export const Button1 = styled(Button)({
  ...MediumXS,
  textTransform: 'none',
  minWidth: '36px',
  boxShadow: 'none',
  borderRadius: '8px',
  backgroundColor: foregroundAccentColor,
  color: 'white',
});

export const Button2 = styled(Button)({
  ...MediumXS,
  textTransform: 'none',
  minWidth: '36px',
  boxShadow: 'none',
  borderRadius: '8px',
  backgroundColor: 'white',
  color: foregroundPrimaryColor,
});

export const Button3 = styled(Button)({
  ...MediumXS,
  textTransform: 'none',
  width: '100%',
  boxShadow: 'none',
  borderRadius: '8px',
  backgroundColor: backgroundAccentTertiary,
  color: foregroundAccentColor,
});
