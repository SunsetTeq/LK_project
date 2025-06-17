import { foregroundSuccessColor, MediumXS } from '@ui/fonts/fonts';
import { foregroundErrorColor } from '@widgets/Navigation/ui/styles';

export const contentBox = {
  display: 'flex',
  flexDirection: 'column',
  p: '28px 8px 0px 0px',
};

export const contentHeader = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  pb: 3,
};

export const contentTitle = {
  flexGrow: 1,
};

export const debtMessageStyle = (isDebt: boolean) => ({
  ...MediumXS,
  color: isDebt ? foregroundErrorColor : foregroundSuccessColor,
});

export const gridBox = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px',
  alignItems: 'flex-start',
};

export const flexBox = {
  display: 'flex',
};
