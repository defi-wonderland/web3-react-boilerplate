import { styled } from '@mui/material/styles';

import { MAIN_HEIGHT } from '~/utils';

export const Landing = () => {
  return (
    <LandingContainer>
      <h1 data-testid='boilerplate-title'>Web3 React Boilerplate</h1>
    </LandingContainer>
  );
};

const LandingContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: `calc(100vh - ${MAIN_HEIGHT}rem)`,
  padding: '0 8rem',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});
