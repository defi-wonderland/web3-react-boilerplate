import { ConnectButton } from '@rainbow-me/rainbowkit';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useCustomTheme } from '~/hooks/useTheme';

export const Header = () => {
  const { changeTheme, theme } = useCustomTheme();

  return (
    <StyledHeader>
      <Logo>Logo</Logo>
      <IconButton onClick={changeTheme}>{theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}</IconButton>
      <ConnectButton />
    </StyledHeader>
  );
};

//Styles
const StyledHeader = styled('header')(() => {
  const { currentTheme } = useCustomTheme();
  return {
    display: 'flex',
    height: '8rem',
    padding: '0 8rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: currentTheme.backgroundSecondary,
    width: '100vw',
    zIndex: 100,
  };
});

const Logo = styled('h1')({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  cursor: 'pointer',
});
