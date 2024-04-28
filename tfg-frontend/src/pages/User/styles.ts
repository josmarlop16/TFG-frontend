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
  height: 80vh;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 70%;
  width: 80vw;
`;
export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-color: #fafafa;
  padding: 1rem;
  height: fit-content;
  width: 100%;
`;
export const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fafafa;
  width: 100%;
  height: 100%;
  padding: 2rem;
  border-radius: 1rem;
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
  width: 100%;
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
  gap: 0.5rem;
  justify-content: center;
`;
// export const Button = styled.button`
//   background-color: transparent;
//   cursor: pointer;
//   border: none;
// `;
export const UserTitle = styled.h1`
  font-size: 2rem;
  color: #fafafa;
  text-align: center;
  margin-top: 0.5rem;
`;
export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  min-height: 40%;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding: 2rem;
`;
export const MoviesContainer = styled.div`
`;
export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #222;
  padding-top: 0.5rem;
  color: #fafafa;
  border-radius: 1rem;
  cursor: pointer;
  :hover.trash-icon {
    color: red;
    transition: color 0.3s ease-in-out;
  }
`;
export const PopupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  background-color: #fafafa;
  width: 15%;
  padding: 1rem;
  border-radius: 1rem;
  text-align: center;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
`;
export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #000;
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
export const RedText = styled.p`
  color: red;
`;