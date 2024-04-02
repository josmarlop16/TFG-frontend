import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #0b1623;
`;
export const MovieData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 65vh;
`;
export const Image = styled.img`
  height: 100%;
  width: auto;
`;
export const Data = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;
export const MovieTitle = styled.h1`
  font-size: 3rem;
  color: #ffffff;
`;
export const MovieTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  align-self: flex-start;
  color: #ffffff;
  gap: 2rem;
`;
export const MovieSubitle = styled.h2`
  font-size: 2rem;
  color: #ffffff;
  text-align: center;
  background-color: #0b1623;
  margin-top: 2rem;
  margin-bottom: 2rem;
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
export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;