import styled, { css, keyframes } from 'styled-components';

// Create the keyframes
const scale = keyframes`
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
`;

const Wrapper = styled.div`
  animation: ${scale} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  animation-iteration-count: 3;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
  text-align: center;
  margin-top: 120px;
`;

export default Wrapper;
