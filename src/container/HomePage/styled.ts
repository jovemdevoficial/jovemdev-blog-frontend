import styled, { css } from 'styled-components';

export type FeaturedProps = {
  backgroundUrlResponsive: string;
};

export const Featured = styled.section<FeaturedProps>`
  max-width: 920px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: ${({ theme }) => theme.spacings.superLarge};

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
  }
`;

export const FeaturedCover = styled.div`
  max-height: 400px;
  max-width: 400px;

  img {
    border-radius: 40px;
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
      font-size: ${({ theme }) => theme.font.sizes.medium};
    }
  }

  @media (max-width: 320px) {
    h1 {
      font-size: 20px;
    }

    p {
      font-size: ${({ theme }) => theme.font.sizes.medium};
    }
  }
`;

export const AuthorDetails = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

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

    img {
      width: 40px;
      height: 40px;
    }

    span {
      color: ${({ theme }) => theme.colors.white};
      font-size: 10px;
      font-weight: 300;
    }

    a {
      font-size: 10px;
    }
  }
`;

export const IconsContainer = styled.div`
  position: relative;
  float: right;

  display: flex;
  align-items: center;
  justify-content: space-between;

  min-width: 90px;

  span {
    font-weight: 300;
    font-size: ${({ theme }) => theme.font.sizes.large};
    margin-right: 5px;
  }

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

  div {
    display: flex;
  }
`;
