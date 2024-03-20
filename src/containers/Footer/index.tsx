import { styled } from '@mui/material/styles';

import { useCustomTheme } from '~/hooks/useTheme';
import { Theme } from '~/types';

export const Footer = () => {
  const { currentTheme } = useCustomTheme();

  return (
    <FooterContainer theme={currentTheme}>
      <h1>Footer</h1>
      <Subtitle>
        <p>Made with 💜 by</p>
        <a href='https://defi.sucks'>Wonderland</a>
      </Subtitle>
    </FooterContainer>
  );
};

//Styles

const FooterContainer = styled('footer')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  height: '8rem',
  padding: '0 8rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.backgroundSecondary,
  borderTop: theme.border,
  width: '100vw',
}));

const Subtitle = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',

  '& p': {
    display: 'inline-block',
  },

  '& a': {
    textDecoration: 'none',
    color: 'inherit',
  },
});
