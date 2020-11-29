import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    margin: 0 auto;
    padding: ${theme.spacings.medium};
    padding-top: ${theme.spacings.superLarge};
    max-width: 96rem;

    @media (max-width: 960px) {
      padding: 0 0 ${theme.spacings.medium} 0;
    }
  `}
`;
