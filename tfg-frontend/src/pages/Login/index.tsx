import React, { useState } from 'react';
import axios from 'axios';
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
} from './styles';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/userContext.js';
import toast from 'react-hot-toast';
import { AnimatedPage } from '../../components/AnimatedPage';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { updateUser } = useUser();

  const handleLogin = async (event:any) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login', {
        email,
        password,
      });

      const user = response.data.responseUser;
      updateUser(user);
      navigate('/');
      
    } catch (error:any) {
      toast.error('Some error occured during login, check your credentials')
    }
  };

  return (
    <AnimatedPage>

    
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <LoginTitle>Log in</LoginTitle>
        <LoginSubtitle>Sign into your account to access to recommendations and movie lists.</LoginSubtitle>
        <InputContainer>
          <InputGroup>
            <LoginInput
              required
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-testid="email-input"
            />
            <LoginLabel>Email</LoginLabel>
          </InputGroup>
          <InputGroup>
            <LoginInput
              required
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              data-testid="password-input"
            />
            <LoginLabel>Password</LoginLabel>
          </InputGroup>
          <LoginButton type="submit">Login</LoginButton>
          <LoginSubtitle>No account? No problem!! <br/><a href='/register'>Register now!</a></LoginSubtitle>
        </InputContainer>
      </LoginForm>
    </LoginContainer>
    </AnimatedPage>
  );
};

export default Login;
