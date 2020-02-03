import styled, { css, keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 100% {
    transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
  }
`;

const circleStyles = css`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #333;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${bounce} 2s infinite ease-in-out;
`;

export const Wrapper = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  margin: 100px auto;
`;

export const FirstCircle = styled.div`
  ${circleStyles};
`;

export const SecondCircle = styled.div`
  ${circleStyles};
  animation-delay: -1s;
`;
