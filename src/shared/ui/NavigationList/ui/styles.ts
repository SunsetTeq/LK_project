import {
  foregroundAccentColor,
  foregroundPrimaryColor,
  RegularXS,
} from '@ui/fonts/fonts';

export const navigationBox = {
  display: 'flex',
  padding: '0px 0px 0px 4px',
  gap: '28px',
};

export const navigationElementBox = {
  position: 'relative',
};

export const navigationElement = (active: boolean) => ({
  ...RegularXS,
  textDecoration: 'none',
  color: active ? foregroundAccentColor : foregroundPrimaryColor,
});

export const navigationElementAccentBar = {
  position: 'absolute',
  left: -4,
  top: 29,
  minWidth: '76px',
  minHeight: '2px',
  borderRadius: '0px 4px 4px 0px',
  bgcolor: foregroundAccentColor,
};
