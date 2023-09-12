import styled from 'styled-components';

export const Footer = () => {
  return (
    <FooterContainer>
      <h1>Footer</h1>
      <Subtitle>
        <p>Made with 💜 by</p>
        <a href='https://defi.sucks'>Wonderland</a>
      </Subtitle>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  height: 8rem;
  padding: 0 8rem;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.headerBackground};
  border-top: ${({ theme }) => theme.border};
  width: 100%;
  max-width: 100vw;
`;

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  p {
    display: inline-block;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
