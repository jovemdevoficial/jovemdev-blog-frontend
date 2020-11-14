import styled from 'styled-components';

export const Container = styled.div`
  width: 60px;
  height: 60px;
`;

export const LabelHamburger = styled.label`
  cursor: pointer;

  div {
    width: 100%;
    height: 100%;
  }
`;

export const Hamburger = styled.span`
  position: relative;
  display: block;
  background: black;
  width: 30px;
  height: 2px;
  top: 29px;
  left: 15px;
  transition: 0.5s ease-in-out;

  &::before,
  &::after {
    background: black;
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
`;

export const InputHamburger = styled.input`
  display: none;

  &:checked ~ label ${Hamburger} {
    transform: rotate(45deg);
  }

  &:checked ~ label ${Hamburger}::before {
    transform: rotate(90deg);
    top: 0;
  }

  &:checked ~ label ${Hamburger}::after {
    transform: rotate(90deg);
    bottom: 0;
  }
`;
