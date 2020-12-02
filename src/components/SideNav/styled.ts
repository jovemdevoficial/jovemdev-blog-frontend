import styled from 'styled-components';

export const ContainerNav = styled.nav`
  height: 100vh;
  width: 250px;
  padding-top: 90px;
  padding-bottom: 40px;
  background: ${({ theme }) => theme.colors.secondary};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  transform: translateX(-250px);

  transition: transform 0.5s ease-in-out;

  a {
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    margin-left: 12px;

    span {
      font: 600 1.8rem Poppins, sans-serif;
      margin-left: 20px;
    }
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &.nav-responsive {
    transform: translateX(0px);
  }

  @media (max-width: 960px) {
    padding-bottom: 100px;
  }
`;
