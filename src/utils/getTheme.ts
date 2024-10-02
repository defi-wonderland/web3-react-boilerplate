import { getConfig } from '~/config';
import { Theme, ThemeName } from '~/types';

export const getTheme = (theme?: ThemeName): Theme => {
  const { dark, light } = getConfig().main;

  switch (theme) {
    case 'light':
      return light;
    case 'dark':
      return dark;
    default:
      return light;
  }
};
