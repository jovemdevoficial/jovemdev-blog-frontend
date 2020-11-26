import styled from 'styled-components';

export const AboutDescription = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${({ theme }) => theme.spacings.extraLarge} 0;

  img {
    width: 100%;
  }

  h1 {
    margin: ${({ theme }) => theme.spacings.large} 0;
  }

  h2 {
    margin: ${({ theme }) => theme.spacings.large} 0;
    font: 700 ${({ theme }) => theme.font.sizes.extraLarge} Merriweather,
      sans-serif;
    line-height: 65px;
  }

  p {
    text-align: justify;
  }

  @media (max-width: 960px) {
    padding-right: ${({ theme }) => theme.spacings.medium};
    padding-left: ${({ theme }) => theme.spacings.medium};

    img {
      display: none;
    }

    h1 {
      text-align: center;
    }

    h2 {
      text-align: center;
    }
  }
`;

export const InstagramDescription = styled.section`
  padding: ${({ theme }) => theme.spacings.extraLarge} 0;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 {
    margin-top: ${({ theme }) => theme.spacings.large};
    margin-bottom: ${({ theme }) => theme.spacings.superLarge};
    font: 700 ${({ theme }) => theme.font.sizes.extraLarge} Merriweather,
      sans-serif;
    line-height: 65px;
  }

  img {
    border-radius: 100%;
  }

  p {
    text-align: justify;
    padding-left: 4rem;
  }

  @media (max-width: 960px) {
    padding-right: ${({ theme }) => theme.spacings.medium};
    padding-left: ${({ theme }) => theme.spacings.medium};

    & > div {
      flex-direction: column;
    }

    h2 {
      text-align: center;
    }
  }
`;
