import styled from 'styled-components';

export const Container = styled.section`
  margin: ${({ theme }) => theme.spacings.medium} 0;

  p {
    padding-top: ${({ theme }) => theme.spacings.medium};
    text-align: justify;
  }

  @media (max-width: 960px) {
    padding: 0 ${({ theme }) => theme.spacings.medium};

    h1 {
      text-align: center;
    }

    p {
      line-height: 30px;
      padding: 3rem 0;
    }
  }
`;
