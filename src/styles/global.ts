import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html {
    font-size: 60%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors.secondary};
  }

  body, input, button, textarea {
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }

  noscript {
    font-size: ${({ theme }) => theme.font.sizes.large};
    z-index: 100;
    margin-bottom: ${({ theme }) => theme.spacings.large};
    font-weight: bold;
  }

  @media (min-width: 700px) {
    html {
      font-size: 62.5%;
    }
  }
`;
