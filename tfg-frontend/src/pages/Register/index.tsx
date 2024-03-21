import React from 'react'
import {
  RegisterContainer,
  LoginLabel,
  RegisterTitle,
  RegisterSubtitle,
  RegisterForm,
  LoginInput,
  RegisterButton,
  InputGroup,
  InputContainer,
} from './styles.ts';

const Register = () => {
  return (
    <RegisterContainer>
      <RegisterForm>
      <RegisterTitle>Register</RegisterTitle>
      <RegisterSubtitle>Register to have new features...</RegisterSubtitle>
      <InputContainer>
        <InputGroup>
          <LoginInput required type='text' id='username' />
          <LoginLabel>Username</LoginLabel>
        </InputGroup>
        <InputGroup>
          <LoginInput required type='email' id='email' />
          <LoginLabel>Email</LoginLabel>
        </InputGroup>
        <InputGroup>
          <LoginInput required type='password' id='password' />
          <LoginLabel>Password</LoginLabel>
        </InputGroup>
        <RegisterButton type="submit">Register</RegisterButton>    
        <RegisterSubtitle>Already a member? <a href='/login'>Login now!</a></RegisterSubtitle>
      </InputContainer>
    </RegisterForm>
    </RegisterContainer>
  )
}

Register.propTypes = {}

export default Register