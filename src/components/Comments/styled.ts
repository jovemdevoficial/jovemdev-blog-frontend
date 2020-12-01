import styled from 'styled-components';

export const Container = styled.section`
  margin-bottom: 2rem;
  margin-top: 12rem;

  @media (max-width: 960px) {
    margin: 0 ${({ theme }) => theme.spacings.medium};
  }
`;
