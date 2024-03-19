import React from 'react'
import { LandingContainer, LandingTitle } from './styles.ts'
import Carousel from '../Carousel/index.tsx';

const Landing = () => {
  const texts = [
    "Encuentra información detallada sobre tus películas favoritas.",
    "Explora la biografía y filmografía de tus actores preferidos.",
    "Crea y organiza listas personalizadas de películas por género, director, etc.",
    "Descubre un nuevo sistema de recomendación de películas basado en tus gustos y preferencias."
  ];

  return (
    <LandingContainer>
      <LandingTitle>Prueba de landing</LandingTitle>
      <Carousel texts={texts} />
    </LandingContainer>
  )
}
export default Landing;