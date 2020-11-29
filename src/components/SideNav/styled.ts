import styled from 'styled-components';

export const ContainerNav = styled.nav`
  height: 100%;
  width: 250px;
  padding-top: 90px;
  background: ${({ theme }) => theme.colors.secondary};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  transform: translateX(-250px);

  transition: transform 0.5s ease-in-out;

  a {
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    margin-left: 12px;

    span {
      font: 600 1.8rem Poppins, sans-serif;
      margin-left: 16px;
    }
  }

  a + a {
    padding-top: 40px;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &.nav-responsive {
    transform: translateX(0px);
  }
`;
