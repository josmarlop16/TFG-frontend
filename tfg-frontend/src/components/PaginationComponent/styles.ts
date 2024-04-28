import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-self: center;
  justify-self: center;
  justify-content: center;
  align-items: center;
  width: 30%;
  margin: 1.5rem;
  /* gap: 2rem; */
  color: #000000;
  background-color: #bae8e8;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  text-decoration: none;
  border: 2px solid none;
  border-radius: 1rem;
`;

export const PaginationButton = styled.button`
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  align-self: center;
  text-decoration: none;
  border: none;
  transition: all 0.5s ease;
  background-color: transparent;
  &:hover {
    background-color: #0b1623;
    color: #ffffff;
  }
`;