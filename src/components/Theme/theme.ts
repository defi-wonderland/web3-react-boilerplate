import { Theme } from '~/types';

export const darkTheme: Theme = {
  type: 'dark',
  titleColor: '#000000',
  textPrimary: '#ffffff',
  textSecondary: '#99A4B8',
  backgroundPrimary: '#000000',
  backgroundSecondary: '#1A191F',
  headerBackground: '#1A191F',
  titleFontFamily: 'Open Sans',
  textFontFamily: 'Open Sans',
  borderRadius: '8px',
  secondaryBorderRadius: '4px',
  border: '1px solid rgba(153, 164, 184, 0.1)',
};

export const lightTheme: Theme = {
  type: 'light',
  titleColor: '#000000',
  textPrimary: '#000000',
  textSecondary: '#717171',
  backgroundPrimary: '#ffffff',
  backgroundSecondary: '#f1f1f1',
  headerBackground: '#ffffff',
  titleFontFamily: 'Open Sans',
  textFontFamily: 'Open Sans',
  borderRadius: '8px',
  secondaryBorderRadius: '4px',
  border: '1px solid rgba(153, 164, 184, 0.3)',
};
