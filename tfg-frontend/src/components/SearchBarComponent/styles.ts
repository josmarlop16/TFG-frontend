import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  width: 40%;
  transition: width 0.5s ease;
`;

export const Input = styled.input`
  padding: 8px 30px 8px 8px;
  border: 1px solid #ccc;
  border-radius: 3rem;
  font-size: 1rem;
  outline: none;
  height: 2.2rem;
  font-family: "Montserrat", sans-serif;
  transition: border-color 0.3s ease;
  width: 100%;
  &:focus {
    border-color: #007bff;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  color: #666;
`;
export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
`;
export const SearchBarContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;
`;