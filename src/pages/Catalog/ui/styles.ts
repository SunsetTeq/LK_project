import {
  borderSecondaryColor,
  foregroundPrimaryColor,
  foregroundTertiaryColor,
  OpenSansRegularXs,
  RegularXS,
  RegularXXS,
} from '@ui/fonts/fonts';

export const cartWrap = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  minWidth: '270px',
  gap: 1,
  p: '22px 0 0 0',
};

export const cartBoxEmpty = {
  border: `1px dashed ${borderSecondaryColor}`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '160px',
  width: '100%',
  borderRadius: '16px',
};

export const cartBoxNoEmpty = {
  border: `1px solid ${borderSecondaryColor}`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '160px',
  width: '100%',
  borderRadius: '16px',
};

export const cartBoxNoEmptyContent = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
};

export const listofPurchases = {
  ...RegularXXS,
  color: foregroundTertiaryColor,
  m: 2,
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  gap: 0.5,
};

export const stringPurschases = {
  ...RegularXS,
  color: foregroundPrimaryColor,
  display: 'flex',
  gap: 4,
};

export const cartCategoryStyle = {
  ...OpenSansRegularXs,
  color: foregroundTertiaryColor,
};

export const cartFooterBox = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const cartFooter = {
  alignItems: 'center',
  width: '92%',
  m: 2,
};
