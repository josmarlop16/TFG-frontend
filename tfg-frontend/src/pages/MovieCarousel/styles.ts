import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90vh;
  align-items: center;
  justify-content: center;
`;
export const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  cursor: pointer;
`;
export const PosterContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;
export const Image = styled.img`
  height: auto;
  width: auto;
  max-width: 25%;
`;
export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;
export const MovieTitle = styled.h1`
  font-size: 2.5rem;
  color: #ffffff;
`;
export const MovieText = styled.p`
  font-size: 1rem;
  color: #ffffff;
  max-width: 100%;
`;