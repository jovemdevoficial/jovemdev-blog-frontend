import styled from 'styled-components';

export const Container = styled.div`
  ul {
    margin-top: 3rem;
    margin-left: 2rem;
  }

  li {
    font: 400 ${({ theme }) => theme.font.sizes.large} Poppins, sans-serif;
  }

  li + li {
    margin-top: 2rem;
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 960px) {
    padding: 4rem 2rem;
  }
`;
