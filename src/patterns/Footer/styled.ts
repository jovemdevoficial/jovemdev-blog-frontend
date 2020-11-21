import styled from 'styled-components';

export const Container = styled.footer`
  margin: 0 auto;
  max-width: 96rem;
  color: black;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  span {
    margin-top: 10px;
  }

  @media (max-width: 960px) {
    font-size: ${({ theme }) => theme.font.sizes.small};
  }
`;

export const IconsContainer = styled.div`
  width: 50%;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: transform 2s ease-in-out;

  a:hover {
    transform: scale(1.2, 1.2);
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;

    a + a {
      margin-left: 10px;
    }
  }

  @media (max-width: 460px) {
    img {
      width: 32px;
      height: 32px;
    }
  }
`;

export const Line = styled.hr`
  width: 100%;
  border-width: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
`;
