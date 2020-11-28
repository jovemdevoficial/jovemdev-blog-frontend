import styled, { css } from 'styled-components';

export const Card = styled.div`
  min-height: 496px;
  width: 280px;
  border-radius: 20px;

  background: #fdf9f9;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  display: flex;
  flex-direction: column;
  align-items: center;

  align-self: center;

  &:nth-child(3n + 2) {
    justify-self: center;
  }

  &:nth-child(3n) {
    justify-self: right;
  }

  & > a {
    width: 100%;
  }

  img {
    border-radius: 20px 20px 0 0;
  }

  @media (max-width: 960px) {
    justify-self: center;

    &:nth-child(3n) {
      justify-self: center;
    }

    width: 90%;
  }
`;

export const PostCardDetails = styled.section`
  position: relative;
  min-height: 306px;
  margin: 20px 20px 0 20px;

  h2 {
    margin-top: 1rem;
  }

  p {
    padding: 15px 0 25px 0;
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
  }

  a:hover {
    text-decoration: underline;
  }

  span {
    display: block;
    color: ${({ theme }) => theme.colors.secondary};
    font: 300 ${({ theme }) => theme.font.sizes.small} Roboto, sans-serif;
  }

  @media (max-width: 960px) {
    p {
      padding: 10px 0 35px 0;
    }
  }
`;

export const ContainerPostDetails = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.large};
  position: absolute;
  width: 100%;
  min-height: 4rem;
  bottom: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PublishDetails = styled.div`
  display: flex;
  flex-direction: column;

  span {
    display: block;
    color: ${({ theme }) => theme.colors.secondary};
    font: 300 ${({ theme }) => theme.font.sizes.small} Roboto, sans-serif;
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    font: 600 ${({ theme }) => theme.font.sizes.small} Roboto, sans-serif;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const IconsDetails = styled.div`
  width: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
  }

  span {
    font-weight: 300;
    font-size: 14px;
    margin-right: 4px;
  }

  a {
    display: flex;
    align-items: center;

    transition: color 0.5s ease-in-out;
    cursor: pointer;

    ${({ theme }) => css`
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.medium};

      &:hover {
        color: ${theme.colors.primary};
      }
    `}
  }
`;
