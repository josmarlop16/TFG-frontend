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

const Logout = () => {
  const navigate = useNavigate();
  const { clearUser } = useUser();

  const handleLogout = async (event: any) => {
    event.preventDefault();
    try {
      // Obtener el correo electrónico y el token de autenticación del usuario del almacenamiento local
      const authToken = sessionStorage.getItem('token') || "";
      const email = sessionStorage.getItem('email') || "";

      // Si el correo electrónico o el token de autenticación están vacíos, no realizar el logout
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
        console.error("Loggin out error!");
      }
      // Redirigir al usuario a la página de inicio
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <LogoutContainer>
      <LogoutForm onSubmit={handleLogout}>
        <LogoutTitle>Logout</LogoutTitle>
        <LogoutSubtitle>Are you sure you want to exit?</LogoutSubtitle>
        <LogoutButton type="submit">Logout</LogoutButton>
      </LogoutForm>
    </LogoutContainer>
  );
};

export default Logout;
