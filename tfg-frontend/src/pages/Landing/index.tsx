import React from 'react';
import { LandingContainer, LandingTitle, ButtonsContainer, StyledLink, StyledLink2, UserContainer, AnimationContainer } from './styles.ts';
import Carousel from '../Carousel/index.tsx';
import Lottie from 'react-lottie';
import landingAnimation from "../../lotties/landing-animation.json";
import Recommendations from '../Recomendations/index.tsx';

const Landing = () => {
  const userId = sessionStorage.getItem('userId');

  const texts = [
    "Discover detailed information about your favorite movies!",
    "Explore the filmography of your favorite actors",
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
      {userId ? 
        (<Recommendations />) : (
        <UserContainer>
          <AnimationContainer>
            <Lottie options={defaultOptions} height={200} width={200}/>
            <LandingTitle>Welcome to Movie Eater</LandingTitle>
            <ButtonsContainer>
              <StyledLink2 to="/login">Log in</StyledLink2>
              <StyledLink to="/register">Register</StyledLink>
            </ButtonsContainer>
          </AnimationContainer>
          <Carousel texts={texts} />
        </UserContainer>
      )}
    </LandingContainer>
  );
}

export default Landing;
