import styled from 'styled-components';

const LightBox = styled.div`
  display: none;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  position: fixed;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.6);

  &.bg {
    display: block;
  }
`;

export default LightBox;
