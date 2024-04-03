import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  background-color: #0b1623;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-self: center;
  justify-self: center;
  justify-content: center;
  align-items: center;
  width: auto;
  margin: 1.5rem;
  gap: 2rem;
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
export const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;  
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: auto;
  min-height: 80vh;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding: 2rem;
  background-color: #0b1623;
`;
export const Horizontal = styled.hr`
  color: #ffffff;
  width: 80%;
  align-self: center;
`;

export const Message = styled.p`
display: flex;
justify-self: center;
align-self: center;
  width: 40%;
  font-size: 1rem;
  text-align: center;
  color: #ffffff;
`;