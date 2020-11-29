import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    height: ${theme.spacings.extraLarge};
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: ${theme.colors.white};
      font: 600 ${theme.font.sizes.large} Poppins;
      transition: color 0.5s ease-in-out;
    }

    a:hover {
      color: ${theme.colors.primary};
    }
  `}

  @media (max-width: 960px) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
