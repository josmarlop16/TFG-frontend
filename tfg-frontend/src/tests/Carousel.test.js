import React from 'react';
import { render } from '@testing-library/react';
import Carousel from '../pages/Carousel';

describe('Carousel component', () => {
  it('renders without crashing', () => {
    const texts = ['Text 1', 'Text 2', 'Text 3'];
    render(<Carousel texts={texts} />);
  });
});
