import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    padding: 0 ${({ theme }) => theme.spacings.medium};
  }

  a {
    ${({ theme }) => css`
      padding: ${({ theme }) => theme.spacings.small};
      margin: ${theme.spacings.medium} ${theme.spacings.medium}
        ${theme.spacings.medium} 0;

      border: 1px solid ${theme.colors.secondary};
      border-radius: 10px;

      cursor: pointer;

      font: 400 18px Roboto, sans-serif;
      line-height: 19px;

      color: ${theme.colors.secondary};

      &:hover {
        color: ${theme.colors.secondary};
        border-color: ${theme.colors.primary};
      }
    `}
  }
`;
