import { getMuiThemeConfig } from './muiThemeConfig';
import { customTheme as rainbowTheme } from './rainbowTheme';
import { lightTheme, darkTheme } from './theme';

export const getCustomThemes = () => {
  return {
    main: {
      light: lightTheme,
      dark: darkTheme,
    },
    getMui: getMuiThemeConfig,
    rainbow: rainbowTheme,
  };
};
