import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useStateContext } from '~/hooks';
import { THEME_KEY } from '~/utils';

export const Header = () => {
  const { setTheme, theme } = useStateContext();

  const handleThemeChange = () => {
    if (theme === 'light') {
      localStorage.setItem(THEME_KEY, 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem(THEME_KEY, 'light');
      setTheme('light');
    }
  };

  return (
    <header>
      <h1>Logo</h1>
      <button onClick={handleThemeChange}>{theme === 'dark' ? '🌞' : '🌕'}</button>
      <ConnectButton />
    </header>
  );
};
