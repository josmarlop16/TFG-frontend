import styled from "styled-components";

export const FiltersContainer = styled.div<{ isvisible: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
  transition: max-height 0.6s ease;
  max-height: ${({ isvisible }) => (isvisible ? '1000px' : '0')};
`;

export const SortContainer = styled.div`
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;
export const SelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 0.3rem;
`;
export const Text = styled.h1`
  color: #ffffff;
  font-size: 1rem;
  margin: 0.3rem;
`;
export const Select = styled.select`
  border-radius: 0.5rem;
  font-family: "Montserrat", sans-serif;
  height: 38px;
  width: 10vw;
`;
export const GenresSubcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  justify-content: center;
`;
export const FilterButton = styled.button<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ active }) => (active ? '#bae8e8' : '#ffffff')};
  border-radius: 0.5rem;
  border: 2px solid;
  border-color: ${({ active }) => (active ? '#bae8e8' : '#0b1623')};
  width: fit-content;
  height: 40px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  text-decoration: none;
  color: #000000;
  transition: all 0.5s ease;
  &:hover {
    background-color: #ffffff;
  }
`;
export const ActorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
`;
export const OrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const Vertical = styled.hr`
  color: #ffffff;
  width: 5rem;
  height: 1rem;
  rotate: 90deg;
  align-self: center;
  margin: -1.5rem;
`;