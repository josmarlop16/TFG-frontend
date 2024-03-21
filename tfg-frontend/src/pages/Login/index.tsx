import React from 'react'
import {
  LoginContainer,
  LoginLabel,
  LoginTitle,
  LoginSubtitle,
  LoginForm,
  LoginInput,
  LoginButton,
  InputGroup,
  InputContainer,
} from './styles.ts';

const Login = () => {
  return (
    <LoginContainer>
      <LoginForm>
      <LoginTitle>Sign in</LoginTitle>
      <LoginSubtitle>Sign into your account to access to recommendations and movie lists.</LoginSubtitle>
      <InputContainer>
        <InputGroup>
          <LoginInput required type='text' id='email' />
          <LoginLabel>Email</LoginLabel>
        </InputGroup>
        <InputGroup>
          <LoginInput required type='password' id='password' />
          <LoginLabel>Password</LoginLabel>
        </InputGroup>
        <LoginButton type="submit">Login</LoginButton>
        <LoginSubtitle>No account? No problem!! <br/><a href='/register'>Register now!</a></LoginSubtitle>
      </InputContainer>
    </LoginForm>
    </LoginContainer>
  )
}

Login.propTypes = {}

export default Login