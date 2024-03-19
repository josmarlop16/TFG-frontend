import React from 'react'
import {
  LoginContainer,
  Title,
  LoginForm,
  Input,
  Button,
} from './styles.ts';

const Login = props => {
  return (
    <LoginContainer>
      <LoginForm>
        <Title>Login</Title>
        <Input
          type="text"
          name="Nombre de usuario"
          placeholder="Nombre de usuario"
        />
        <Input
          type="text"
          name="Nombre de usuario"
          placeholder="Nombre de usuario"
        />
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginContainer>
  )
}

Login.propTypes = {}

export default Login