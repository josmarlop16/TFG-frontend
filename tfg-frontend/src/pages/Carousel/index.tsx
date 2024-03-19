// Carousel.js
import React, { useEffect, useState } from 'react';
import { Container, Item } from './styles.ts';

const Carousel = ({ texts, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [texts, interval]);

  return (
    <Container>
      {texts.map((text: string, index: number) => (
        <Item key={index} active={index === currentIndex}>
          {text}
        </Item>
      ))}
    </Container>
  );
};

export default Carousel;
