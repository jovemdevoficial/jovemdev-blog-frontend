import styled from 'styled-components';

export const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  background: none;
  font-size: 18px;
  padding: 0 50px 0 10px;
  border-bottom: 2px solid #15e226;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &.active {
    opacity: 1;
  }
`;

export const SearchButton = styled.div`
  position: absolute;
  top: 50%;
  right: 0px;
  z-index: 1;
  transform: translateY(-50%);
  color: #c4c4c4;
  line-height: 60px;
  font-size: 22px;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    right: -8px;
    height: 50px;
    width: 50px;
    color: #000;
    line-height: 50px;
    font-size: 20px;
    transform: translateY(-50%) rotate(360deg);
  }
`;

export const CancelButton = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  color: #000;
  transform: translateY(-50%);
  font-size: 25px;
  cursor: pointer;
  transition: all 0.5s 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  display: none;

  &.active {
    right: -40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SearchBox = styled.div`
  position: relative;
  height: 40px;
  width: 30px;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &.active {
    width: 300px;
  }
`;
