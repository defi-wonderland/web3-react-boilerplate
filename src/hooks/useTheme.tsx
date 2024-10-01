import { useContext } from 'react';
import { ThemeContext } from '~/providers/ThemeProvider';

export const useCustomTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a StateProvider');
  }

  return context;
};
