import React from 'react';
import { render } from '@testing-library/react';
import Header from '../pages/Header';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

describe('Header component', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  it('renders navigation links correctly when user is logged in', () => {
    sessionStorage.setItem('token', 'mockToken');
    sessionStorage.setItem('username', 'testuser');

    const { getByTestId } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Verifica que los enlaces de navegación estén presentes cuando el usuario ha iniciado sesión
    expect(getByTestId('Movies')).toBeInTheDocument();
    expect(getByTestId('Home')).toBeInTheDocument();
    expect(getByTestId('testuser')).toBeInTheDocument();
    expect(getByTestId('Log out')).toBeInTheDocument();
  });

  it('renders navigation links correctly when user is not logged in', () => {
    sessionStorage.clear(); // Asegura que el usuario no ha iniciado sesión

    const { getByTestId } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Verifica que los enlaces de navegación estén presentes cuando el usuario no ha iniciado sesión
    expect(getByTestId('Movies')).toBeInTheDocument();
    expect(getByTestId('Home')).toBeInTheDocument();
    expect(getByTestId('Log in')).toBeInTheDocument();
    expect(getByTestId('Sign up')).toBeInTheDocument();
  });
});
