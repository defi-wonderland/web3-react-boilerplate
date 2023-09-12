import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    font-size: 1.4rem;
    background: ${({ theme }) => theme.backgroundPrimary};
    color: ${({ theme }) => theme.textPrimary};
  }

  .ellipsis {
    text-overflow: ellipsis;
    overflow-wrap: break-word;
    word-break: break-all;
  }

  .clickable {
    cursor: pointer;
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 0.6rem;
    height: 0.6rem;
    background: inherit;
    background: ${({ theme }) => theme.backgroundPrimary};
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.backgroundSecondary};
    border-radius: 0.4rem;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.backgroundPrimary};
    box-shadow: 0 0 0.2rem 0.1rem rgba(0, 0, 0, 0.2);
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:active {
    background: ${({ theme }) => theme.backgroundPrimary};
  }  
`;

export default GlobalStyle;
