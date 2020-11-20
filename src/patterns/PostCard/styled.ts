import styled, { css } from 'styled-components';

export const Card = styled.div`
  height: 360px;
  width: 280px;
  border-radius: 20px;

  background: #fdf9f9;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  display: flex;
  flex-direction: column;
  align-items: center;

  justify-self: center;
  align-self: center;

  img {
    width: 280px;
    height: 190px;
    border-radius: 20px 20px 0 0;
  }

  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: translateY(-5%);
  }
`;

export const PostCardDetails = styled.section`
  width: 260px;
  margin-top: 10px;

  p {
    padding: 5px 0 10px 0;
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const ContainerPostDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PublishDetails = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: ${({ theme }) => theme.colors.lightGray};
    font: 300 10px Roboto, sans-serif;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    font: 500 10px Roboto, sans-serif;
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
