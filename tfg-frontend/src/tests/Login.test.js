import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Asegúrate de que esta importación esté presente
import axios from 'axios';
import Login from '../pages/Login';
import { UserProvider } from '../hooks/userContext'; // Asegúrate de que esta ruta sea correcta
import { MemoryRouter } from 'react-router-dom';

jest.mock('axios');

describe('Login component', () => {
  test('renders login form', () => {
    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <UserProvider>
          <Login />
        </UserProvider>
      </MemoryRouter>
    );

    expect(getByText('Log in')).toBeInTheDocument();
    expect(getByText('Sign into your account to access to recommendations and movie lists.')).toBeInTheDocument();
  });

  test('submits login form with correct data', async () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <UserProvider>
          <Login />
        </UserProvider>
      </MemoryRouter>
    );

    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const loginButton = getByText('Login');

    fireEvent.change(emailInput, { target: { value: 'example2@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'example1234@_' } });
    fireEvent.click(loginButton);

    // Mock successful login response
    axios.post.mockResolvedValueOnce({
      data: {
        responseUser: {
            "message": "Usuario autenticado correctamente.",
            "responseUser": {
                "username": "example12345",
                "avatar": "https://image.tmdb.org/t/p/w500/xndWFsBlClOJFRdhSt4NBwiPq2o.jpg",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV4YW1wbGUyQGdtYWlsLmNvbSIsImlhdCI6MTcxNDQxMDQ0MCwiZXhwIjoxNzE0NDE3NjQwfQ.HqIb_VXYV84yEx4ghZf5SM7P7vCG7wP76JLu6I5aQto",
                "email": "example2@gmail.com",
                "userId": "66269be4cf9be8bdde15dba5",
                "userLists": [],
                "preferences": []
            }
        },
      },
    });

    // Wait for the form submission to complete
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('http://localhost:4000/login', {
        email: 'example2@gmail.com',
        password: 'example1234@_',
      });
    });

    // Ensure the user is redirected to the home page after successful login
    expect(window.location.pathname).toBe('/');
  });
});
