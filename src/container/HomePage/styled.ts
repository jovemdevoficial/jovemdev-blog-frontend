import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Featured = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FeaturedCover = styled.div`
  img {
    height: 400px;
    width: 400px;
    border-radius: 40px;
  }
`;

export const FeaturedDatails = styled.div`
  width: 490px;
`;

export const AuthorDetails = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;

    margin: 0 8px 0 0;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  span {
    color: ${({ theme }) => theme.colors.lightGray};
    font: 300 ${({ theme }) => theme.font.sizes.small} Roboto, sans-serif;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    font: 700 ${({ theme }) => theme.font.sizes.small} Roboto, sans-serif;
  }

  a:hover {
    text-decoration: underline;
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
    `}
  }

  div {
    display: flex;
  }
`;
