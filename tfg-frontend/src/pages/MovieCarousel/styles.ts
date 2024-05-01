import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60vh;
  align-items: center;
  justify-content: space-around;
  background-color: #101415;
`;
export const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  flex-wrap: wrap;
  gap: 1rem;
  cursor: pointer;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #222;
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
  border-radius: 0.6rem;
`;
export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;
export const MovieTitle = styled.h1`
  font-size: 2.5rem;
  color: #fafafa;
`;
export const MovieText = styled.p`
  font-size: 1rem;
  color: #fafafa;
  max-width: 100%;
`;