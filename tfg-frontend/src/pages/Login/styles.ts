import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  justify-content: center;
  align-items: center;
`;
export const LoginTitle = styled.h1`
  color: #000000;
  text-align: center;
  font-size: 2rem;
  padding: 5%;
`;
export const LoginSubtitle = styled.h2`
  color: #000000;
  font-size: 0.8rem;
  color: #656565;
  width: 100%;
  margin-bottom: 1rem;
  text-align: center;
`;
export const LoginForm = styled.form`
  padding: 1rem;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  border-radius: 1rem;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 80%;
`;
export const LoginInput = styled.input`
  all: unset;
  color: #fefefe;
  padding: 1rem;
  border: 1px solid #9e9e9e;
  border-radius: 10px;
  height: 20%;
  color: #000000;
  font-family: "Montserrat", sans-serif;
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    border: 1px solid #000000;
  }
  &:focus ~ label,
  &:valid ~ label {
    transform: translateY(-98%) scale(0.7);
    background-color: #fafafa;
    padding-inline: 0.3rem;
    color: #000000;
  }
`;
export const LoginLabel = styled.label`
  position: absolute;
  top: 0.7rem;
  left: 1rem;
  color: #d4d4d4;
  pointer-events: none;
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const LoginButton = styled.button`
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