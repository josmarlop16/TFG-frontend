import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../pages/Footer';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

describe('Footer component', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
  });

  it('renders navigation links correctly', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    // Verifica que los enlaces de navegación estén presentes
    expect(getByTestId('About')).toBeInTheDocument();
    expect(getByTestId('Developers Info')).toBeInTheDocument();
  });
});
