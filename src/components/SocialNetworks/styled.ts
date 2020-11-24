import styled from 'styled-components';

export const Container = styled.div`
  a {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.font.sizes.superLarge};
    margin: ${({ theme }) => theme.spacings.small};
  }

  a:nth-child(1) {
    margin-left: 0;
  }

  a:nth-last-child(1) {
    margin-right: 0;
  }

  svg {
    transition: transform 0.1s ease-in-out;
  }

  svg:hover {
    transform: translateY(-5%);
  }

  a:active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
