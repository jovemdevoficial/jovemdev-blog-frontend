import styled, { css } from 'styled-components';

export const Container = styled.main`
  max-width: 960px;
  padding: 2rem;
  margin: 0 auto;
  margin-top: 2rem;
  min-height: 100vh;

  position: relative;
`;

export const BackgroundContainer = styled.aside`
  width: 100%;
  position: absolute;

  & > div {
    background: linear-gradient(
        180deg,
        #181414 0%,
        rgba(21, 226, 38, 0.35) 100%
      ),
      #15e226;
    height: 60vh;
  }

  img {
    width: 100%;
  }
`;

export const AboveTheFoldContent = styled.div`
  width: 100%;

  h1 {
    color: ${({ theme }) => theme.colors.white};
    font: 600 3.1rem Merriweather, sans-serif;
    line-height: 55px;
    margin-bottom: 5rem;
  }

  @media (max-width: 960px) {
    h1 {
      font-size: 2.5rem;
      text-align: justify;
    }
  }
`;

export const SearchWrapper = styled.div`
  .ais-Hits {
    margin-top: ${({ theme }) => theme.spacings.superLarge};
  }

  .ais-SearchBox {
    width: 100%;
  }

  .ais-SearchBox-input {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.darkGray};
    width: 100%;

    padding: 0 8px;
    background: none;
    border: none;
  }

  .ais-Stats {
    margin-top: 0.7rem;
    margin-left: 0.6rem;
    color: white;
    font: 300 1.6rem Roboto, sans-serif;
  }

  .ais-Hits-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    grid-auto-rows: minmax(545px, auto);
    grid-column-gap: 1rem;
    grid-row-gap: 4rem;
  }

  .ais-Hits-item {
    align-self: center;
    list-style-type: none;
  }

  .ais-Hits-item:nth-child(3n + 2) {
    justify-self: center;
  }

  .ais-Hits-item:nth-child(3n) {
    justify-self: right;
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }

  @media (max-width: 960px) {
    .ais-Hits-item {
      justify-self: center;
      width: 90%;
    }

    .ais-Hits-list:nth-child(3n) {
      justify-self: center;
    }

    .styled__Card-nsuhu7-0.hsXWGP {
      width: 100%;
    }
  }
`;

export const Algolia = styled.h3`
  font: 600 1.6rem Roboto, sans-serif;

  display: flex;
  align-items: center;

  margin-top: 2rem;
`;

export const SearchBoxAlgolia = styled.div`
  height: 54px;
  width: 100%;
  border-radius: 40px;
  padding: 10px 5px 10px 10px;
  background: ${({ theme }) => theme.colors.white};

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: ${({ theme }) => theme.spacings.large};
`;

export const SearchButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    background: ${theme.colors.primary};
    width: 48px;
    height: 48px;
    border-radius: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 960px) {
      height: 44px;
    }
  `};
`;
