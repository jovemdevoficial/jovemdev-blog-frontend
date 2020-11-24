import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.extraLarge} 0;

    & > span {
      color: ${theme.colors.lightGray};
      font: 300 25px Roboto, sans-serif;
    }

    & > h1 {
      margin: ${theme.spacings.medium} 0;
    }

    & > p {
      margin-bottom: ${theme.spacings.large};
    }

    @media (max-width: 960px) {
      padding: ${theme.spacings.medium};
    }
  `}
`;

export const PostCover = styled.img`
  margin: ${({ theme }) => theme.spacings.large} 0;
  max-width: 100%;
`;

export const AuthorDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap-reverse;

  margin: ${({ theme }) => theme.spacings.medium} 0;

  & + & {
    margin-top: ${({ theme }) => theme.spacings.large};
  }
`;

export const AuthorDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 64px;
    height: 64px;
    border-radius: 50px;

    margin-right: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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