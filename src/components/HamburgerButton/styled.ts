import styled from 'styled-components';

export const Container = styled.div`
  height: ${({ theme }) => theme.spacings.extraLarge};
  width: ${({ theme }) => theme.spacings.extraLarge};

  position: absolute;
  left: 0;

  z-index: 4;
`;

export const LabelHamburger = styled.span`
  cursor: pointer;

  div {
    width: 100%;
    height: 100%;
  }
`;

export const Hamburger = styled.span`
  position: relative;
  display: block;
  background: #fff;
  width: 30px;
  height: 3px;
  top: 29px;
  left: 15px;
  transition: 0.5s ease-in-out;

  &::before,
  &::after {
    background: #fff;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.5s ease-in-out;
  }

  &::before {
    top: -10px;
  }

  &::after {
    bottom: -10px;
  }

  &.hamburger-close {
    position: fixed;
    transform: rotate(45deg);
  }

  &.hamburger-close::before {
    transform: rotate(90deg);
    top: 0;
  }

  &.hamburger-close::after {
    transform: rotate(90deg);
    bottom: 0;
  }
`;
