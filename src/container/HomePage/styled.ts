import styled from 'styled-components';

export type FeaturedProps = {
  backgroundUrlResponsive: string;
};

export const Featured = styled.section<FeaturedProps>`
  max-width: 920px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: ${({ theme }) => theme.spacings.superLarge};

  h1 {
    a {
      color: ${({ theme }) => theme.colors.secondary};
    }

    a:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 960px) {
    position: relative;
    min-height: 400px;
    max-width: 100%;
    background: url(${({ backgroundUrlResponsive }) => backgroundUrlResponsive})
      center no-repeat;
    background-size: cover;

    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      margin: auto;
      height: 100%;
      background: rgba(24, 20, 20, 0.7);
    }

    h1 {
      a {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`;

export const FeaturedCover = styled.div`
  max-height: 400px;
  max-width: 400px;

  transition: opacity 0.5s ease-in-out;

  img {
    border-radius: 40px;
  }

  img:hover {
    opacity: 0.8;
  }

  @media (max-width: 960px) {
    display: none;
  }
`;

export const FeaturedDatails = styled.div`
  width: 490px;
  z-index: 1;

  @media (max-width: 960px) {
    color: ${({ theme }) => theme.colors.white};
    width: 100%;
    padding: ${({ theme }) => theme.spacings.medium};

    h1 {
      font-size: ${({ theme }) => theme.font.sizes.superLarge};
    }

    p {
      margin-top: 2rem;
      font-size: ${({ theme }) => theme.font.sizes.large};
    }
  }

  @media (max-width: 320px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: ${({ theme }) => theme.font.sizes.medium};
    }
  }
`;

export const AuthorDetails = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  img {
    border-radius: 100%;
  }

  div + div {
    display: flex;
    flex-direction: column;
  }

  span {
    color: ${({ theme }) => theme.colors.secondary};
    font: 500 ${({ theme }) => theme.font.sizes.small} Roboto, sans-serif;
    margin-left: 8px;
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    font: 700 ${({ theme }) => theme.font.sizes.small} Roboto, sans-serif;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }

  @media (max-width: 960px) {
    margin-bottom: 20px;

    span {
      color: ${({ theme }) => theme.colors.white};
      font-size: 12px;
      font-weight: 400;
    }

    a {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const SeeMore = styled.div`
  margin: 5rem 0 3rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    cursor: pointer;

    transition: color 0.5s ease-in-out;

    border: 1px solid ${({ theme }) => theme.colors.secondary};
    padding: 0.5rem 2rem;

    border-radius: 1rem;

    color: ${({ theme }) => theme.colors.secondary};

    span {
      font: 400 2rem Roboto, sans-serif;
      line-height: 4rem;
    }

    svg {
      font-size: 2rem;
    }
  }

  a:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 960px) {
    margin: 4rem 2rem 3rem 2rem;
  }
`;

/*
export const IconsContainer = styled.div`
  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 90px;

  a {
    display: flex;
    align-items: center;

    transition: color 0.5s ease-in-out;
    cursor: pointer;

    ${({ theme }) => css`
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.large};

      &:hover {
        color: ${theme.colors.primary};
      }

      @media (max-width: 960px) {
        color: ${theme.colors.white};
      }
    `}
  }
`;
*/
