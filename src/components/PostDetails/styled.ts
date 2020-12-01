import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    & > span {
      color: ${theme.colors.lightGray};
      font: 300 25px Roboto, sans-serif;
    }

    & > h1 {
      margin: ${theme.spacings.large} 0;
    }

    & > p {
      margin-bottom: ${theme.spacings.large};
    }

    @media (max-width: 960px) {
      padding: 0 ${theme.spacings.medium};
      padding-top: ${theme.spacings.superLarge};

      & > span {
        font-size: 2rem;
      }

      & > h1 {
        margin: ${theme.spacings.medium} 0;
        font-size: 4rem;
      }

      & > p {
        font-size: 2.5rem;
      }
    }

    @media (max-width: 460px) {
      & > span {
        font-size: 1.5rem;
      }

      & > h1 {
        margin: ${theme.spacings.medium} 0;
        font-size: 3rem;
        line-height: 4.5rem;
      }

      & > p {
        font-size: 2rem;
        line-height: 3rem;
        text-align: justify;
      }
    }
  `}
`;

export const SharedContainer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.large} 0;

    & > span {
      display: block;
      color: ${theme.colors.lightGray};
      font: 300 ${theme.font.sizes.superLarge} Roboto, sans-serif;
      margin-bottom: 4rem;
    }

    @media (max-width: 460px) {
      & > span {
        font-size: 2.5rem;
      }
    }
  `}
`;

export const SharedDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;

  margin: ${({ theme }) => theme.spacings.medium} 0;

  a:hover {
    opacity: 0.8;
  }

  @media (max-width: 960px) {
    a {
      width: 100%;
    }

    a + a {
      margin-top: 2rem;
    }
  }
`;

/*
export const AuthorDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    border-radius: 50px;
  }

  div + div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-left: 10px;
    min-width: 150px;

    a {
      color: ${({ theme }) => theme.colors.secondary};
      font: 300 ${({ theme }) => theme.font.sizes.medium} Roboto, sans-serif;

      transition: color 0.5s ease-in-out;
    }

    a:hover {
      color: ${({ theme }) => theme.colors.primary};
      text-shadow: 2px;
    }

    & > span {
      color: ${({ theme }) => theme.colors.lightGray};
      font: 300 ${({ theme }) => theme.font.sizes.small} Roboto, sans-serif;
      line-height: 16px;
    }
  }
`;
*/
