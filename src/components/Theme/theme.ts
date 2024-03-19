'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;

// export const darkTheme: Theme = {
//   type: 'dark',
//   titleColor: '#000000',
//   textPrimary: '#ffffff',
//   textSecondary: '#99A4B8',
//   backgroundPrimary: '#000000',
//   backgroundSecondary: '#1A191F',
//   headerBackground: '#1A191F',
//   titleFontFamily: 'Open Sans',
//   textFontFamily: 'Open Sans',
//   borderRadius: '0.8rem',
//   secondaryBorderRadius: '0.4rem',
//   border: '0.1rem solid rgba(153, 164, 184, 0.1)',
// };

// export const lightTheme: Theme = {
//   type: 'light',
//   titleColor: '#000000',
//   textPrimary: '#000000',
//   textSecondary: '#717171',
//   backgroundPrimary: '#ffffff',
//   backgroundSecondary: '#f1f1f1',
//   headerBackground: '#ffffff',
//   titleFontFamily: 'Open Sans',
//   textFontFamily: 'Open Sans',
//   borderRadius: '0.8rem',
//   secondaryBorderRadius: '0.4rem',
//   border: '0.1rem solid rgba(153, 164, 184, 0.3)',
// };
