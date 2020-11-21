import styled, { css } from 'styled-components';

export const SearchText = styled.input`
  border: none;
  padding: 0;
  background: none;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  transition: 0.4s;
  line-height: 30px;
  width: 0;

  transition: all 1s;
`;

export const SearchButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.large};
    background: ${theme.colors.white};
    width: 38px;
    height: 38px;
    border-radius: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 1s linear;

    cursor: pointer;
  `};
`;

export const SearchBox = styled.div`
  height: 38px;
  border-radius: 40px;
  margin-right: 20px;
  background: ${({ theme }) => theme.colors.white};

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    padding: 10px 5px 10px 10px;
    height: 40px;
  }

  &:hover > ${SearchText} {
    width: 240px;
    padding: 0 6px;
  }

  &:hover > ${SearchButton} {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 960px) {
    &:hover > ${SearchText} {
      width: 210px;
    }
  }
`;
