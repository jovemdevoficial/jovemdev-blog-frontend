import styled, { css } from 'styled-components';

export const WritterBy = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.lightGray};
    font: 300 ${theme.font.sizes.superLarge} Roboto, sans-serif;

    margin: ${theme.spacings.large} 0;

    @media (max-width: 960px) {
      margin: ${theme.spacings.large} ${theme.spacings.medium};
    }
  `}
`;
