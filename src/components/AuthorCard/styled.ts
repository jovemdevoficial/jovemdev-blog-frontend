import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    border-radius: 100px;
  }

  div + div {
    width: 72rem;
  }

  margin: 7rem 0;

  @media (max-width: 960px) {
    margin: 10rem ${({ theme }) => theme.spacings.medium};

    flex-direction: column;

    div + div {
      width: 100%;
    }

    &:first-child {
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

  span {
    margin-top: 1rem;
    font: 300 1.6rem Poppins, sans-serif;
    color: ${({ theme }) => theme.colors.lightGray};
  }

  p {
    font: 400 ${({ theme }) => theme.font.sizes.medium} Poppins, sans-serif;
    margin: ${({ theme }) => theme.spacings.medium} 0;
    line-height: 4rem;

    text-align: justify;
  }

  @media (max-width: 960px) {
    div {
      margin-top: 5rem;
      margin-bottom: 3rem;
    }

    h3 {
      text-align: center;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    p {
      margin: ${({ theme }) => theme.spacings.large} 0;
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
