import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const MovieData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  height: 90vh;
`;
export const Image = styled.img`
  height: auto;
  width: auto;
  max-width: 373px;
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
  width: 90%;
  color: #ffffff;
  justify-content: space-between;
  gap: 0.5rem;
`;
export const MovieSubitle = styled.h2`
  font-size: 2rem;
  color: #ffffff;
  text-align: center;
  margin-top: 2rem;
`;
export const MovieText = styled.p`
  font-size: 1rem;
  color: #ffffff;
  max-width: 100%;
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
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
`;
export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: white;
  .heart-icon,
  .trash-icon {
    transition: color 0.3s ease-in-out;
  }
  .heart-icon:hover,
  .trash-icon:hover {
    transition: color 0.3s ease-in-out;
    color: red;
  }
`;
export const ListSelect = styled.select`
  border-radius: 0.5rem;
  font-family: "Montserrat", sans-serif;
  width: 200px;
`;
export const PosterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
export const RelatedContainer = styled.div`
  background-color: #101415;
`;