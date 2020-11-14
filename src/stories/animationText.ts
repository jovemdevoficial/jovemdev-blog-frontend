import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    top: 40px;
  }

  100% {
    opacity: 1;
    top: 20px;
  }
`;

export const Div = styled.div`
  position: absolute;
  margin-top: 100px;
  animation: ${fadeIn} 0.5s both;
`;
