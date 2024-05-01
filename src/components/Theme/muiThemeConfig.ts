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
          body: {
            background: currentTheme.backgroundPrimary,
            color: currentTheme.textPrimary,
          },
        },
      },
    },
  });
};
