import styled from "styled-components";

export const MediaCarrousel = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  height: 55%;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;
export const Image = styled.img`
  width: 40%;
  height: auto;
  cursor: pointer;
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OverlayImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`;
