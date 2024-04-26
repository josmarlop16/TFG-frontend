import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
  border-radius: 1rem;
  padding: 0.5rem;
`;
export const UserAvatar = styled.img`
  max-height: 380px;
  border-radius: 1rem;
`;
export const UsernameContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const Text = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
`;
export const Button = styled.button`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: #bae8e8;
  border: none;
  border-radius: 0.5rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  text-decoration: none;
  color: #000000;
  transition: all 0.5s ease;
  &:hover {
      box-shadow: 2px 2px 2px 1px #656565;
  }
`;