import { foregroundPrimaryColor, RegularXS } from '@ui/fonts/fonts';
import { backgroundAccentTertiary } from '@widgets/Navigation/ui/styles';

export const bullCardWrapper = {
  ...RegularXS,
  color: foregroundPrimaryColor,
  minHeight: '40px',
  backgroundColor: backgroundAccentTertiary,
  display: 'flex',
  borderRadius: '8px',
  alignItems: 'center',
  p: '0 10px',
  mt: '4px',
  flexGrow: 1,
};

export const bullBox = {
  display: 'flex',
  gap: 1,
  alignItems: 'center',
  maxHeight: '40px',
};
