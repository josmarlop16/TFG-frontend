import styled from "styled-components";

export const UserListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MoviesList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;
export const UserMovieTitle = styled.p`
  font-size: 1rem;
  width: 100px;
  height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
`;
export const UserListTitle = styled.h1`
  font-size: 1.5rem;
  margin-top: 1rem;
`;
export const UserMovieImage = styled.img`
  width: auto;
  height: 150px;
  border-radius: 1rem;
`;
export const UserMovieCard = styled.div`
  width: 100px;
  .movie-title {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  cursor: pointer;
  &:hover .movie-title {
    opacity: 1;
  }
`;
export const ListForm = styled.form`
  padding: 1rem;
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
export const EditButton = styled.button`
  display: flex;
  width: 50%;
  height: 40px;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: #bae8e8;
  border: none;
  border-radius: 0.5rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  text-decoration: none;
  color: #000000;
  transition: all 0.5s ease;
  &:hover {
      box-shadow: 2px 2px 2px 1px #656565;
  }
`;
export const UserTitle = styled.h1`
  font-size: 2rem;
  color: #fafafa;
  text-align: center;
`;
export const Text = styled.p`
  color: #fafafa;
  width: 30vw;
  text-align: center;
  font-size: 1.5rem;
`;
