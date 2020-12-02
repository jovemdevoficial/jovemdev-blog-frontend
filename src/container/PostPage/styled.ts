import styled, { css } from 'styled-components';

export const WritterBy = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    font: 300 ${theme.font.sizes.superLarge} Roboto, sans-serif;

    margin: ${theme.spacings.large} 0;

    @media (max-width: 960px) {
      margin: ${theme.spacings.large} ${theme.spacings.medium};
    }

    @media (max-width: 960px) {
      font-size: 2.5rem;
    }
  `}
`;
