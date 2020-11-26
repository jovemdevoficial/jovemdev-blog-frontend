import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  grid-auto-rows: minmax(420px, auto);
  grid-column-gap: 1rem;
  grid-row-gap: 4rem;
`;
