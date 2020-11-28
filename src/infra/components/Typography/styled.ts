import styled from 'styled-components';

export const Title = styled.h1`
  font: 700 ${({ theme }) => theme.font.sizes.extraLarge} Merriweather,
    sans-serif;
  line-height: 65px;
`;

export const H1 = styled.h1`
  font: 700 ${({ theme }) => theme.font.sizes.superLarge} Merriweather,
    sans-serif;
  line-height: 45px;
`;

export const H2 = styled.h2`
  font: 700 18px Merriweather, sans-serif;
  line-height: 20px;
`;

export const H3 = styled.h3``;

export const H4 = styled.h4``;

export const H5 = styled.h5``;

export const Paragraphy = styled.p``;

export const Subtitle1 = styled.p`
  font: 300 ${({ theme }) => theme.font.sizes.large} Roboto, sans-serif;
  line-height: 40px;
`;

export const Subtitle2 = styled.p`
  font: 300 15px Roboto, sans-serif;
  line-height: 20px;
`;

export const Subtitle3 = styled.p`
  font: 400 ${({ theme }) => theme.font.sizes.superLarge} Poppins, sans-serif;
  line-height: 45px;
  color: ${({ theme }) => theme.colors.secondary};
`;
