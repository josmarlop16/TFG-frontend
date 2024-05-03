import styled, { keyframes, css } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Item = styled.div<{ active: boolean }>`
  display: flex;
  flex-wrap: wrap;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  animation-duration: 0.5s;
  animation-timing-function: ease-in;
  animation-fill-mode: both;
  @media screen and (max-width: 768px) {
     font-size: 0.8rem;
  }
  ${props =>
    props.active
      ? css`
          animation-name: ${slideIn};
        `
      : css`
          animation-name: ${slideOut};
        `};
`;
