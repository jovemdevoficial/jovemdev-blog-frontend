import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: ${({ theme }) => theme.spacings.medium};

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

  .page-not-found {
    width: 100%;
  }
`;
