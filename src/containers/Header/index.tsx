import { ConnectButton } from '@rainbow-me/rainbowkit';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useCustomTheme } from '~/hooks/useTheme';
import { Theme } from '~/types';

export const Header = () => {
  const { changeTheme, currentTheme, theme } = useCustomTheme();

  return (
    <StyledHeader theme={currentTheme}>
      <Logo>Logo</Logo>
      <IconButton onClick={changeTheme}>{theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}</IconButton>
      <ConnectButton />
    </StyledHeader>
  );
};

//Styles

const StyledHeader = styled('header')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  height: '8rem',
  padding: '0 8rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.backgroundSecondary,
  width: '100vw',
  zIndex: 100,
}));

const Logo = styled('h1')({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  cursor: 'pointer',
});
