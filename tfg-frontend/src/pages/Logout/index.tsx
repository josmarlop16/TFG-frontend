import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/userContext';
import toast from 'react-hot-toast';
import LogoutAnimation from "../../lotties/logout-animation.json";
import LottieComponent from '../../components/LottieComponent';
import { AnimatedPage } from '../../components/AnimatedPage';
import {
  LogoutButton,
  LogoutContainer,
  LogoutSubtitle,
  LogoutTitle,
  LogoutForm
} from './styles';

const Logout = () => {
  const navigate = useNavigate();
  const { clearUser } = useUser();

  const handleLogout = async (event:any) => {
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
      if (response.status >= 200 && response.status < 300) {
        clearUser();
        navigate('/');
        toast.success('Logout successful');
      } else {
        toast.error('Logout failed!');
      }
    } catch (error:any) {
      if (error.response) {
        // La solicitud fue realizada, pero el servidor respondió con un código de estado que no está en el rango 2xx
        toast.error(`Logout failed with status: ${error.response.status}`);
      } else if (error.request) {
        // La solicitud fue realizada pero no se recibió respuesta
        toast.error('Network error. Please check your internet connection.');
      } else {
        // Ocurrió un error al configurar la solicitud
        toast.error('An unexpected error occurred.');
      }
    }
  };

  return (
    <AnimatedPage>
      <LogoutContainer>
        <LogoutForm onSubmit={handleLogout}>
          <LottieComponent animation={LogoutAnimation} height={200} width={200} />
          <LogoutTitle data-testid="logout-title" >Logout</LogoutTitle>
          <LogoutSubtitle data-testid="logout-subtitle" >Are you sure you want to exit?</LogoutSubtitle>
          <LogoutButton data-testid="logout-button" type="submit">Logout</LogoutButton>
        </LogoutForm>
      </LogoutContainer>
    </AnimatedPage>
  );
};

export default Logout;
