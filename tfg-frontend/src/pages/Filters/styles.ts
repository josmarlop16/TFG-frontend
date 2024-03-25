import styled from 'styled-components';

interface SortProps {
  isVisible: boolean;
}
export const FiltersContainer = styled.div<SortProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-height: ${({ isVisible }) => (isVisible ? '1000px' : '0')};
  overflow: hidden;
  transition: max-height 1s ease;
`;
export const FiltersTitle = styled.h1`
  color: #ffffff;
  font-size: 2rem;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: center;
  align-content: center;
`;
export const ArrowButton = styled.button`
  transform: translateY(-50%);
  margin-top: 0.3rem;
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.5s ease;
`;
export const Sort = styled.div`
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;
export const FiltersSubtitle = styled.h1`
  color: #ffffff;
  font-size: 1rem;
  margin: 0.3rem;
`;
export const FilterSubcontainer = styled.div`
  display: flex;
  flex-direction: row;
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
export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  justify-content: center;
`;
export const ApplyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bae8e8;
  border: 2px solid #ffffff;
  border-radius: 0.5rem;
  width: 30%;
  height: 40px;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  text-decoration: none;
  color: #000000;
  transition: all 0.5s ease;
  &:hover {
      background-color: #ffffff;
      box-shadow: 2px 2px 2px 1px #bae8e8;
  }
`;
export const Select = styled.select`
  border-radius: 0.5rem;
  font-family: "Montserrat", sans-serif;
`;
export const ApplyContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 2rem;
  align-content: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;
export const GenresSubcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;