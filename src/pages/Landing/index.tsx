import styled from 'styled-components';

export const Landing = () => {
  return (
    <LandingContainer>
      <h1 data-testid='boilerplate-title'>Web3 React Boilerplate</h1>
    </LandingContainer>
  );
};

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 16rem);
  padding: 0 8rem;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
