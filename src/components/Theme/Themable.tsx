import { ThemeProvider } from 'styled-components';
// import { useStateContext } from '~/hooks';

import { getTheme } from '~/utils';

interface ThemableProps {
  children: React.ReactNode;
}

export const Themable = ({ children }: ThemableProps) => {
  // const { theme: themeName } = useStateContext();
  const theme = getTheme('dark');
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
