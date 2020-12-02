import styled from 'styled-components';

export type ContainerProps = {
  color: string;
};

export const Container = styled.div<ContainerProps>`
  min-width: 125px;
  font: 600 2rem Roboto, sans-serif;

  padding: 1rem 2rem;

  background-color: ${({ color }) => color};
  color: ${({ theme }) => theme.colors.white};

  border-radius: 10px;

  display: flex;
  justify-content: center;

  svg {
    font-size: 2.3rem;
  }

  span {
    margin-left: 1rem;
  }

  @media (max-width: 960px) {
    padding: 2rem 2rem;

    span {
      margin-left: 2rem;
    }
  }
`;
