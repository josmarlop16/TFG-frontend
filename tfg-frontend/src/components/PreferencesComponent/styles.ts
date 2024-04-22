import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: white;
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

