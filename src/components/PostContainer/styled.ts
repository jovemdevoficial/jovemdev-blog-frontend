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
    font: 600 4rem Poppins, sans-serif;
    margin-top: ${({ theme }) => theme.spacings.extraLarge};
  }

  h3 {
    font: 600 3rem Poppins, sans-serif;
    margin-top: ${({ theme }) => theme.spacings.superLarge};
  }

  h4 {
    font: 600 2.2rem Poppins, sans-serif;
  }

  li {
    font: 400 ${({ theme }) => theme.font.sizes.large} Poppins, sans-serif;
    line-height: 30px;
  }

  li + li {
    margin-top: 10px;
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: underline;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  ul,
  ol {
    margin: ${({ theme }) => theme.spacings.medium};
    margin-left: ${({ theme }) => theme.spacings.superLarge};
  }

  pre {
    margin: ${({ theme }) => theme.spacings.large} 0;
    font-size: ${({ theme }) => theme.font.sizes.large};
    overflow-x: auto;
  }

  code {
    border-radius: 10px;
  }

  blockquote {
    border-left: 7px solid ${({ theme }) => theme.colors.primary};
    padding: 5px 0 5px 40px;
    margin: ${({ theme }) => theme.spacings.large} 0;

    p {
      font: italic 400 ${({ theme }) => theme.font.sizes.medium} Poppins,
        sans-serif;
    }
  }

  strong {
    font-weight: bold;
  }

  @media (max-width: 960px) {
    padding: 0 ${({ theme }) => theme.spacings.medium};

    h2 {
      font-size: 3rem;
    }

    h3 {
      font-size: 2.5rem;
    }

    h4 {
      font-size: 2rem;
    }

    li,
    p {
      font-size: 1.8rem;
    }

    blockquote {
      p {
        font-size: 1.8rem;
      }
    }

    pre {
      font-size: 1.8rem;
    }
  }
`;
