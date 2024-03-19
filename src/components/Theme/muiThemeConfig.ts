import { createTheme } from '@mui/material';
import { Theme, ThemeName } from '~/types';

export const getMuiThemeConfig = (currentTheme: Theme, themeName: ThemeName) => {
  return createTheme({
    palette: {
      mode: themeName,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            fontSize: '62.5%', // to enable rem units (1rem = 10px)
          },
          body: {
            overflowY: 'scroll', // Always show scrollbar to prevent shifting content
            '&::-webkit-scrollbar': {
              width: '0.6rem',
              height: '0.6rem',
              background: 'transparent',
            },
          },
          a: {
            color: 'inherit',
            textDecoration: 'none',
          },
          button: {
            '.MuiButton-endIcon': {
              marginRight: '0',
            },
          },
          img: {
            pointerEvents: 'none',
          },
        },
      },
    },
    typography: {
      fontSize: 22.5,
      fontWeightRegular: 500,
      // set your global font family here
      fontFamily: [
        'GeneralSans-Variable',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      body1: {
        fontSize: '1.2rem',
      },
      // Modal title
      h2: {
        fontSize: '2rem',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '150%',
      },
      h3: {
        fontSize: '1.6rem',
        lineHeight: '150%',
      },
    },
  });
};
