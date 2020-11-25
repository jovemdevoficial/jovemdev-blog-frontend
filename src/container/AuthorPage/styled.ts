import styled from 'styled-components';

export const Line = styled.hr`
  width: 100%;
  margin: ${({ theme }) => theme.spacings.large} 0;
  border-width: 0;
  border-top: 1px solid #dddddd;
`;
