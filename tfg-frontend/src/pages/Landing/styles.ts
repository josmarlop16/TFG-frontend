import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 80vh;
  background-color: #101415;
`;
export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
export const LandingTitle = styled.h1`
  color: #fafafa;
  font-size: 5rem;
  font-weight: 300;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export const Carrousel = styled.image`
  width: 50vw;
  height: auto;
  @media screen and (max-width: 768px) {
     width: 60%;
  }
`;
export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: 70%;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
`;
export const StyledLink = styled(RouterLink)`
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
export const StyledLink2 = styled(RouterLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ffffff;
  border-radius: 0.5rem;
  width: 30%;
  height: 40px;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  text-decoration: none;
  color: #ffffff;
  transition: all 0.5s ease;
  &:hover {
      background-color: #ffffff;
      box-shadow: 2px 2px 2px 1px #bae8e8;
      color: #000000;
  }
`;