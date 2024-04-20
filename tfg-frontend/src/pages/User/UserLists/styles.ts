import styled from "styled-components";

export const UserListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0b1623;
  height: auto;
  margin-bottom: 2rem;
  gap: 0.5rem;
`;
export const UserListCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  max-width: 90%;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem;
`;
export const MoviesList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
export const UserMovieTitle = styled.p`
  font-size: 1rem;
  width: 100px;
  height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const UserListTitle = styled.p`
  font-size: 1.5rem;
`;
export const UserMovieImage = styled.img`
  width: auto;
  height: 150px;
  border-radius: 8px;
`;
export const UserMovieCard = styled.div`
  .movie-title {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  cursor: pointer;
  /* Mostrar el título al hacer hover en la imagen */
  &:hover .movie-title {
    opacity: 1;
  }
`;
export const ListForm = styled.form`
  padding: 1rem;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  border-radius: 1rem;
  gap: 0.5rem;
`;
export const ListInput = styled.input`
  all: unset;
  color: #fefefe;
  padding: 1rem;
  border: 1px solid #9e9e9e;
  border-radius: 10px;
  height: 10px;
  color: #000000;
  font-family: "Montserrat", sans-serif;
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    border: 1px solid #000000;
  }
`;