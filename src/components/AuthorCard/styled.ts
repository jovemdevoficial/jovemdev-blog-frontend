import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 150px;
    height: 150px;
    border-radius: 100px;
  }

  & > div {
    width: 72rem;
  }

  margin: 7rem 0;

  @media (max-width: 960px) {
    margin: 7rem ${({ theme }) => theme.spacings.medium};

    flex-direction: column;

    & > div {
      width: 100%;
    }

    img {
      margin: ${({ theme }) => theme.spacings.medium} auto;
      margin-bottom: ${({ theme }) => theme.spacings.superLarge};
    }
  }
`;

export const AuthorDescription = styled.div`
  a {
    color: ${({ theme }) => theme.colors.secondary};
  }

  a:hover {
    text-decoration: underline;
  }

  h3 {
    font: 400 ${({ theme }) => theme.font.sizes.superLarge} Merriweather,
      sans-serif;
    line-height: 38px;
  }

  p {
    font: 400 ${({ theme }) => theme.font.sizes.medium} Poppins, sans-serif;
    margin: ${({ theme }) => theme.spacings.medium} 0;

    text-align: justify;
  }

  @media (max-width: 960px) {
    h3 {
      text-align: center;
    }
  }
`;

export const AuthorContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    margin-right: 40px;
  }

  span {
    margin-bottom: 7px;
  }

  @media (max-width: 442px) {
    span {
      margin-top: 15px;
    }
  }
`;
