import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  background-color: #101415;
  width: 100%;
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