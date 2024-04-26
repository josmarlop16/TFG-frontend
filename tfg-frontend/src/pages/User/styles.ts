import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  gap: 2rem;
  background-color: #101415;
`;
export const UserCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-color: #ffffff;
  padding: 1rem;
  height: fit-content;
  width: 100%;
`;
export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const EditInput = styled.input`
  all: unset;
  color: #fefefe;
  padding: 1rem;
  border: 1px solid #9e9e9e;
  border-radius: 10px;
  color: #000000;
  font-family: "Montserrat", sans-serif;
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    border: 1px solid #000000;
  }
  &:focus ~ label,
  &:valid ~ label {
    transform: translateY(-90%) scale(0.7);
    background-color: #fafafa;
    padding-inline: 0.3rem;
    color: #000000;
  }
`;
export const EditButton = styled.button`
  display: flex;
  width: 20%;
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
export const UsernameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
`;
export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`;
export const UserTitle = styled.h1`
  font-size: 2rem;
  color: #ffffff;
  text-align: center;
  margin-top: 0.5rem;
`;
export const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;  
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: auto;
  padding: 2rem;
  overflow-y: auto;
  scroll-behavior: smooth;
`;
export const MoviesContainer = styled.div`
`;