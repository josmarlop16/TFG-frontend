import React from 'react';
import { render, fireEvent, waitFor, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filters from '../pages/Filters';

describe('Filters component', () => {
  it('renders without crashing', () => {
    const onFilterChange = jest.fn(); // Mock function
    render(<Filters onFilterChange={onFilterChange} />);
  });

  it('renders search bar for movie', () => {
    const onFilterChange = jest.fn();
    const { getByPlaceholderText } = render(<Filters onFilterChange={onFilterChange} />);
    const searchBar = getByPlaceholderText('Search movie...');
    expect(searchBar).toBeInTheDocument();
  });

  it('renders apply buttons', () => {
    const onFilterChange = jest.fn();
    const { getByText, getByTestId } = render(<Filters onFilterChange={onFilterChange} />);
    const searchButton = getByText('Search');
    const resetButton = getByTestId('reset');
    expect(searchButton).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
  });

  it('applies filters when search button is clicked', async () => {
    const onFilterChange = jest.fn();
    const { getByText } = render(<Filters onFilterChange={onFilterChange} />);
    const searchButton = getByText('Search');

    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(onFilterChange).toHaveBeenCalledTimes(1);
    });
  });
});
