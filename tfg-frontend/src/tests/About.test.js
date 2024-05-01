import React from 'react';
import { render } from '@testing-library/react';
import { About } from '../pages/About';

describe('About component', () => {
  it('renders without crashing', () => {
    render(<About />);
  });
});
