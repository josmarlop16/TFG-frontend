import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  background-color: #0b1623;
`;
export const MovieData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;
  margin-bottom: 5rem;
`;
export const Image = styled.img`
  height: 35rem;
  width: auto;
`;
export const Data = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0b1623;
  height: 50vh;
`;
export const MovieTitle = styled.h1`
  font-size: 3rem;
  color: #ffffff;
`;
export const MovieSubitle = styled.h2`
  font-size: 2rem;
  color: #ffffff;
  text-align: center;
  background-color: #0b1623;
  padding: 3rem;
`;
export const MovieText = styled.p`
  font-size: 1rem;
  color: #ffffff;
`;
export const Cast = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-x: scroll;
  width: 70vw;
  min-height: 35vh;
  gap: 2rem;
  margin-left: -2rem;
`;
export const MediaContainer = styled.div`
  height: 30vh;
`;
export const MediaSection = styled.div`
  width: 90%;
`;
export const MovieMedia = styled.div`
  background-color: #0b1623;
`;
export const MediaCarrousel = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  width: 100%;
  height: fit-content;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
export const Multimedia = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  background-color: #0b1623;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`;