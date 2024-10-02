import { Theme as MuiTheme } from '@mui/material';
import { Theme as RainbowTheme } from '@rainbow-me/rainbowkit';

export type ThemeName = 'light' | 'dark';

export interface Theme {
  type: ThemeName;
  textPrimary: string;
  textSecondary: string;
  backgroundPrimary: string;
  backgroundSecondary: string;
  titleColor: string;
  titleFontFamily: string;
  textFontFamily: string;
  borderRadius: string;
  secondaryBorderRadius: string;
  border: string;
}

export interface PropTheme {
  theme: Theme;
}

export interface CutomThemes {
  main: {
    light: Theme;
    dark: Theme;
  };
  mui: (currentTheme: Theme, themeName: ThemeName) => MuiTheme;
  rainbow: RainbowTheme;
}
