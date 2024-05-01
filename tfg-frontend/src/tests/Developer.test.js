import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Developer } from '../pages/Developer';

// Mock window.location.assign
delete window.location;
window.location = { assign: jest.fn() };

describe('Developer component', () => {
  it('renders without crashing', () => {
    render(<Developer />);
  });

  it('redirects to developer portfolio when clicked', () => {
    const { getByText } = render(<Developer />);
    const discoverMoreButton = getByText('Discover More!');
    
    // Simulate click on "Discover More!" button
    fireEvent.click(discoverMoreButton);

    // Check if window.location.assign is called with the correct URL
    expect(window.location.assign).toHaveBeenCalledWith('https://josmarlop16.github.io/portfolio/');
  });
});