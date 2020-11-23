import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: ${({ theme }) => theme.spacings.medium};

  @media (max-width: 960px) {
    padding: 0 ${({ theme }) => theme.spacings.medium};
  }
`;

export const DynamicLink = styled.div`
  min-width: 120px;

  ${({ theme }) => css`
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;

      transition: color 0.5s ease-in-out;

      font: 300 14px Roboto, sans-serif;

      color: ${theme.colors.secondary};
    }

    a:hover {
      color: ${theme.colors.primary};
    }
  `}

  @media (max-width: 340px) {
    min-width: 14px;

    span {
      display: none;
    }
  }
`;

export const CurrentPage = styled.div``;
