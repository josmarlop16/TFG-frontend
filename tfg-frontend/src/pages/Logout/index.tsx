import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  LogoutButton,
  LogoutContainer,
  LogoutSubtitle,
  LogoutTitle,
  LogoutForm
} from './styles';
import { useUser } from '../../hooks/userContext';
import toast from 'react-hot-toast';
import LogoutAnimation from "../../lotties/logout-animation.json";
import LottieComponent from '../../components/LottieComponent';
import { AnimatedPage } from '../../components/AnimatedPage';

const Logout = () => {
  const navigate = useNavigate();
  const { clearUser } = useUser();

  const handleLogout = async (event: any) => {
    event.preventDefault();
    try {
      const authToken = sessionStorage.getItem('token') || "";
      const email = sessionStorage.getItem('email') || "";
      if (!email || !authToken) {
        return;
      }
      const response = await axios.post('http://localhost:4000/logout', {
        email,
        authToken
      });
      if (response.status === 200) {
        clearUser()
      } else {
        toast.error('Loggin out error!');
      }
      navigate('/');
    } catch (error:any) {
      toast.error('Loggin out error!', error);
    }
  };

  return (
    <AnimatedPage>
      <LogoutContainer>
        <LogoutForm onSubmit={handleLogout}>
          <LottieComponent animation={LogoutAnimation} />
          <LogoutTitle>Logout</LogoutTitle>
          <LogoutSubtitle>Are you sure you want to exit?</LogoutSubtitle>
          <LogoutButton type="submit">Logout</LogoutButton>
        </LogoutForm>
      </LogoutContainer>
    </AnimatedPage>
  );
};

export default Logout;
