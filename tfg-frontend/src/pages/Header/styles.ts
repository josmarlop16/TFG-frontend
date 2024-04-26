import styled from "styled-components";
import { Link as RouterLink } from 'react-router-dom';

export const Navbar = styled.nav`
  color: #ffffff;
  width: 100%;
  height: 9vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
export const StyledLink = styled(RouterLink)`
  font-style: normal;
  text-decoration: none;
  color: inherit;
  padding: 0 10px;
  transition: color 0.5s ease-in-out;
  font-family: "Montserrat", sans-serif;
  position: relative;
  &:hover {
    color: #bae8e8;
    &:after {
      content: attr(data-text);
      position: absolute;
      bottom: -35px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #101415;
      color: #fafafa;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 14px;
      white-space: nowrap;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
  }
  &:hover:after {
      opacity: 1;
  }
`;