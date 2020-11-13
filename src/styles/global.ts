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

  body, input, button, textarea {
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 700px) {
    html {
      font-size: 62.5%;
    }
}
`;
