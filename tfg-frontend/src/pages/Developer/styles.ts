import styled from "styled-components";

export const DeveloperContainer = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const DeveloperCard = styled.div`
  width: 300px;
  height: 200px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const DeveloperTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 10px;
`;

export const DeveloperDescription = styled.p`
  font-size: 1rem;
  text-align: center;
`;