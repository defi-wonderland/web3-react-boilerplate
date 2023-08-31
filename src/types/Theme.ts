export type ThemeName = 'light' | 'dark';

export interface Theme {
  textPrimary: string;
  textSecondary: string;
  backgroundPrimary: string;
  backgroundSecondary: string;
  backgroundActive: string;
  backgroundActiveSecondary: string;
  titleColor: string;
  titleFontFamily: string;
  textFontFamily: string;
  borderRadius: string;
  secondaryBorderRadius: string;
  pillBackground: string;
  detailsBackground: string;
  cardBackground: string;
  headerBackground: string;
  iconBackground: string;
  close: string;
  tableHeaderBackground: string;
  border: string;
  green: string;
  red: string;
  yellow: string;
  type: 'dark' | 'light';
  baseColor: string;
  highlightColor: string;
}

export interface PropTheme {
  theme: Theme;
}
