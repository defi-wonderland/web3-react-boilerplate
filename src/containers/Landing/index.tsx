import { styled } from '@mui/material/styles';

import { MAIN_HEIGHT } from '~/utils';

console.log(MAIN_HEIGHT);

export const Landing = () => {
  return (
    <LandingContainer>
      <h1>Web3 React Boilerplate</h1>
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
