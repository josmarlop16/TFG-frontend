import React from 'react';
import { LandingContainer, LandingTitle, LottieContainer, ButtonsContainer, StyledLink } from './styles.ts';
import Carousel from '../Carousel/index.tsx';
import Lottie from 'react-lottie';
import landingAnimation from "../../lotties/landing-animation.json";

const Landing = () => {
  const texts = [
    "Discover detailed information about your favorite movies!",
    "Explore the biography and filmography of your favorite actors!",
    "Create and organize personalized movie lists by genre, director, and more!",
    "Uncover a new movie recommendation system based on your tastes and preferences!"
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: landingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <LandingContainer>
      <LottieContainer>
        <Lottie 
          options={defaultOptions}
          height={200}
          width={200}
        />
        <LandingTitle>Welcome to Movie Eater!</LandingTitle>
        <ButtonsContainer>
          <StyledLink to="/login">Log in</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
        </ButtonsContainer>
      </LottieContainer>
      <Carousel texts={texts} />
    </LandingContainer>
  );
}

export default Landing;
