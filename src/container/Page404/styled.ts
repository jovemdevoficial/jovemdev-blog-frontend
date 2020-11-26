import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;
  padding: ${({ theme }) => theme.spacings.medium};
  max-width: 96rem;
  margin-top: ${({ theme }) => theme.spacings.large};

  p {
    padding: ${({ theme }) => theme.spacings.large} 0;
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: ${({ theme }) => theme.spacings.large} 0;

    transition: color 0.5s ease-in-out;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  strong {
    margin-left: 3px;
  }
`;
