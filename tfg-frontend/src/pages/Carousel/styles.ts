import styled, { keyframes, css } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 30%;
`;

export const Item = styled.div<{ active: boolean }>`
  display: flex;
  flex-wrap: wrap;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;

  ${props =>
    props.active
      ? css`
          animation-name: ${slideIn};
        `
      : css`
          animation-name: ${slideOut};
        `};
`;
