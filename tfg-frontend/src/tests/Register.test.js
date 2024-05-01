import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import Register from '../pages/Register';
import { UserProvider } from '../hooks/userContext'; 
import '@testing-library/jest-dom/extend-expect'; 

// Mockear la función useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

// Mockear axios
jest.mock('axios');

describe('Register component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders registration form', () => {
    const { getByText, getByTestId } = render(
      <Router>
        <UserProvider>
          <Register />
        </UserProvider>
      </Router>
    );

    expect(getByText('Sign up')).toBeInTheDocument();
    expect(getByText('Register to have new features... (movie lists, preferences and recommendations)')).toBeInTheDocument();
    expect(getByTestId('username-input')).toBeInTheDocument();
    expect(getByTestId('email-input')).toBeInTheDocument();
    expect(getByTestId('password-input')).toBeInTheDocument();
    expect(getByTestId('avatar-input')).toBeInTheDocument();
    expect(getByText('Register')).toBeInTheDocument();
    expect(getByText('Have an account? No problem!')).toBeInTheDocument();
    expect(getByText('Login now!')).toBeInTheDocument();
  });

  it('submits registration form with correct data', async () => {
    const newUser = { id: 1, username: 'testUser', email: 'test@example.com' };
    axios.post.mockResolvedValueOnce({ data: { newUser } });

    const { getByTestId, getByText } = render(
      <Router>
        <UserProvider>
            <Register />
        </UserProvider>
      </Router>
    );

    fireEvent.change(getByTestId('username-input'), { target: { value: 'testUser' } });
    fireEvent.change(getByTestId('email-input'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByTestId('password-input'), { target: { value: 'testPassword' } });

    fireEvent.click(getByText('Register'));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith('http://localhost:4000/register', {
        username: 'testUser',
        email: 'test@example.com',
        password: 'testPassword',
        avatar: '', // No avatar URL provided in this test
      });
    });
  });
});
