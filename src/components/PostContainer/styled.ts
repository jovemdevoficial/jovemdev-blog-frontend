import styled from 'styled-components';

export const Container = styled.article`
  line-height: 1.5;

  img {
    max-width: 100%;
  }

  p {
    font: 400 ${({ theme }) => theme.font.sizes.large} Poppins, sans-serif;
    line-height: 35px;

    margin: ${({ theme }) => theme.spacings.medium} 0;
    text-transform: capitalize;
    text-align: justify;
  }

  h2 {
    font: 600 ${({ theme }) => theme.font.sizes.superLarge} Poppins, sans-serif;
  }

  h3 {
    font: 600 2.5rem Poppins, sans-serif;
  }

  h4 {
    font: 600 2rem Poppins, sans-serif;
  }

  li {
    font: 400 ${({ theme }) => theme.font.sizes.large} Poppins, sans-serif;
    line-height: 30px;
  }

  li + li {
    margin-top: 10px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.blueHover};
    text-decoration: underline;
  }

  ul,
  ol {
    margin: ${({ theme }) => theme.spacings.medium};
  }

  pre {
    margin: ${({ theme }) => theme.spacings.medium} 0;
    overflow-y: auto;
  }

  code {
    border-radius: 10px;
  }

  blockquote {
    border-left: 7px solid ${({ theme }) => theme.colors.primary};
    padding: 5px 0 5px 40px;
    margin: ${({ theme }) => theme.spacings.medium} 0;

    p {
      font: italic 400 ${({ theme }) => theme.font.sizes.medium} Poppins,
        sans-serif;
    }
  }

  strong {
    font-weight: bold;
  }

  @media (max-width: 960px) {
    padding: ${({ theme }) => theme.spacings.medium};
  }
`;
