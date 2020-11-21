import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
    height: ${theme.spacings.extraLarge};
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      color: ${theme.colors.white};
      font-weight: 700;
      font-size: ${theme.font.sizes.large};
      transition: color 0.5s ease-in-out;
      position: absolute;
      left: 44%;
    }

    a:hover {
      color: ${theme.colors.primary};
    }
  `}

  @media (max-width: 960px) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 580px) {
    a {
      display: none;
    }
  }
`;
