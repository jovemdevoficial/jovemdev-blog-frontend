import styled from 'styled-components';

export const Container = styled.section`
  img {
    border-radius: 100%;
    display: block;
    margin: ${({ theme }) => theme.spacings.large} auto;
  }

  strong {
    font-size: ${({ theme }) => theme.font.sizes.medium};
  }

  @media (max-width: 960px) {
    margin: ${({ theme }) => theme.spacings.medium};

    strong {
      font-size: 14px;
    }
  }
`;

export const AuthorDescription = styled.div`
  h1 {
    text-align: center;
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }

  p {
    text-align: justify;
  }

  & > strong {
    display: block;
    margin-bottom: 20px;
  }
`;

export const AuthorContact = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin: ${({ theme }) => theme.spacings.medium} 0;

  & > div {
    margin-right: 40px;
  }

  strong {
    display: block;
    margin-bottom: 20px;
  }

  @media (max-width: 442px) {
    span {
      margin-top: 15px;
    }
  }
`;
