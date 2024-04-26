import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RegisterContainer, LoginLabel, RegisterTitle, RegisterSubtitle, RegisterForm, LoginInput, RegisterButton, InputGroup, InputContainer } from './styles';
import { useUser } from '../../hooks/userContext.js';
import toast from 'react-hot-toast';
import { AnimatedPage } from '../../components/AnimatedPage';

const Register = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const navigate = useNavigate();
  const { updateUser } = useUser();

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/register', {
        username,
        email,
        password,
        avatar,
      });
      const newUser = response.data.newUser;
      console.log(newUser);
      updateUser(newUser);
      navigate('/');
    } catch (error: any) {
      toast.error(error.message || 'An error occurred while registering.');
    }
  };

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAvatar(event.target.value);
  };

  return (
    <AnimatedPage>
    <RegisterContainer>
      <RegisterForm onSubmit={handleRegister}>
        <RegisterTitle>Sign up</RegisterTitle>
        <RegisterSubtitle>Register to have new features... (movie lists, preferences and recommendations)</RegisterSubtitle>
        <InputContainer>
          <InputGroup>
            <LoginInput required type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <LoginLabel>Username</LoginLabel>
          </InputGroup>
          <InputGroup>
            <LoginInput required type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <LoginLabel>Email</LoginLabel>
          </InputGroup>
          <InputGroup>
            <LoginInput required type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <LoginLabel>Password</LoginLabel>
          </InputGroup>
          <InputGroup>
            <LoginInput type='url' id='avatar' value={avatar} onChange={handleAvatarChange} />
            <LoginLabel>Avatar URL (Optional)</LoginLabel>
          </InputGroup>
          <RegisterButton type="submit">Register</RegisterButton>
          <RegisterSubtitle>Have an account? No problem! <br/><a href='/login'>Login now!</a></RegisterSubtitle>
        </InputContainer>
      </RegisterForm>
    </RegisterContainer>
    </AnimatedPage>
  );
};

export default Register;
