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
      font-size: 4rem;
    }

    h2 {
      text-align: center;
      font-size: 4rem;
    }
  }
`;

export const InstagramDescription = styled.section`
  padding: ${({ theme }) => theme.spacings.extraLarge} 0;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    width: 65rem;
  }

  @media (max-width: 960px) {
    padding-right: ${({ theme }) => theme.spacings.medium};
    padding-left: ${({ theme }) => theme.spacings.medium};

    & > div {
      flex-direction: column;
    }

    h2 {
      text-align: center;
      font-size: 4rem;
      line-height: 50px;
    }

    p {
      font-size: 2rem;
      width: 100%;
      margin-top: 3.5rem;
    }
  }
`;
