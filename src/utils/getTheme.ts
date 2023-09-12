import { darkTheme, lightTheme } from '~/components/Theme';
import { Theme, ThemeName } from '~/types';

export const getTheme = (theme?: ThemeName): Theme => {
  switch (theme) {
    case 'light':
      return lightTheme;
    case 'dark':
      return darkTheme;
    default:
      return lightTheme;
  }
};
