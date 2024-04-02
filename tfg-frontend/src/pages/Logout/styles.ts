import styled from "styled-components";

export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70vh;
  justify-content: center;
  align-items: center;
`;
export const LogoutForm = styled.form`
  padding: 1rem;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  border-radius: 1rem;
`;
export const LogoutTitle = styled.h1`
  color: #000000;
  text-align: center;
  font-size: 2rem;
  padding: 5%;
`;
export const LogoutSubtitle = styled.h2`
  color: #000000;
  font-size: 0.8rem;
  color: #656565;
  width: 100%;
  margin-bottom: 1rem;
  text-align: center;
`;
export const LogoutButton = styled.button`
  display: flex;
  width: 80%;
  height: 40px;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: #bae8e8;
  border: none;
  border-radius: 0.5rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  text-decoration: none;
  color: #000000;
  transition: all 0.5s ease;
  &:hover {
      box-shadow: 2px 2px 2px 1px #656565;
  }
`;