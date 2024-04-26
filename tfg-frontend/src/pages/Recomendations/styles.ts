import styled from "styled-components";

export const RecommendationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  width: 100%;
  background-color: #101415;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const RefreshButton = styled.button`
  background-color: transparent;
  border: none;
  color: #fafafa;
  display: flex;
  flex-direction: column;
`;
export const UserTitle = styled.h1`
  font-size: 2rem;
  color: #fafafa;
  text-align: center;
`;