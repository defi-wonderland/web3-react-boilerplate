import { Theme } from '~/types';

export const darkTheme: Theme = {
  type: 'dark',
  titleColor: '#000000',
  textPrimary: '#ffffff',
  textSecondary: '#99A4B8',
  backgroundPrimary: '#000000',
  backgroundSecondary: '#161616',
  titleFontFamily: 'Open Sans',
  textFontFamily: 'Open Sans',
  borderRadius: '0.8rem',
  secondaryBorderRadius: '0.4rem',
  border: '0.1rem solid rgba(153, 164, 184, 0.1)',
};

export const lightTheme: Theme = {
  type: 'light',
  titleColor: '#000000',
  textPrimary: '#000000',
  textSecondary: '#717171',
  backgroundPrimary: '#ffffff',
  backgroundSecondary: '#f8f8f8',
  titleFontFamily: 'Open Sans',
  textFontFamily: 'Open Sans',
  borderRadius: '0.8rem',
  secondaryBorderRadius: '0.4rem',
  border: '0.1rem solid rgba(183, 183, 183, 0.3)',
};
