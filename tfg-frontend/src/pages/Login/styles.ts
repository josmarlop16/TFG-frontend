import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 50vw;
  height: 70vh;
  margin: 3%;
  padding: 5%;
  text-align: center;
  border-radius: 30px;
  box-shadow: 0 0 10px 0 gray; 
  background-color: white;
  @media (max-width: 768px) {
      flex-direction: column;         
      width: 80vw;         
      height: 100%;
      justify-content: center;
      padding-top: 10px;     
  };
  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;         
      width: 100%;         
      height: 100%;
      justify-content: center;
      padding-top: 10px; 
  };
`;

export const Title = styled.h2`
  color: white;
  line-height: 1.2;
  text-align: center;
  font-size: 1.6rem;
  padding: 5%;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  };
`;

export const Container = styled.div`
  margin: 10px;
  padding-bottom: 5%;
  @media (max-width: 768px) {
    padding-bottom: 5%;
  };
`;

export const LoginForm = styled.form`
  width: 100%;
  height: 100%;
`;

export const Label = styled.label`
  color: wheat;
  font-size: 1.2em;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  };
`;

export const Input = styled.input`
  padding: 15px;
  margin: auto;
  display: flex;
  border-radius: 9px;
  background: wheat;
  color: gray;
  width: 100%;
  max-width: 400px;
  outline: none;
  border: none;
  font-size: 1em;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  };
`;

export const ErrorContainer = styled.div`
  text-align: center;
  border-radius: 8px;
  background-color: red;
  color: beige;
  border-color: black;
  width: 80%;
  height: auto;
  margin: auto;
  padding: 0.5rem;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  };
`;


export const Button = styled.button`
    height: 60px;
    width: 200px;
    border-radius: 9px;
    padding: 0 10px;
    font-size: 1.4rem;
    border: none;
    cursor: pointer;
    color: black;
    background: red;
    @media (max-width: 768px) {
        width: 100%;
    }
    @media (max-width: 768px) {
        width: 90%;
    }
`;