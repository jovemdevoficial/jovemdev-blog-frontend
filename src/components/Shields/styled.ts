import styled from 'styled-components';

export type ContainerProps = {
  color: string;
};

export const Container = styled.div<ContainerProps>`
  min-width: 120px;
  font: 600 1.8rem Roboto, sans-serif;
  padding: 1rem;

  background-color: ${({ color }) => color};
  color: ${({ theme }) => theme.colors.white};

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
