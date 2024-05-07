import { styled, Box, Typography } from '@mui/material';

import { DISCLAIMER_HEIGHT } from '~/utils';

export const Disclaimer = () => {
  return (
    <Container>
      <Typography variant='h1'>
        Disclaimer: This application is currently in beta. Please proceed at your own risk. Any funds lost through its
        use are non-recoverable.
      </Typography>
    </Container>
  );
};

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.6rem;
  height: ${DISCLAIMER_HEIGHT}rem;
  width: 100%;
  margin: 0 auto;
  background-color: white;

  h1 {
    font-size: 1rem;
    color: #121212;
    font-weight: 500;
    letter-spacing: 1;
    @media (max-width: 720px) {
      font-size: 0.8rem;
    }
  }
`;
