import React from 'react';
import { LandingContainer, LandingTitle, ButtonsContainer, StyledLink, StyledLink2, UserContainer, AnimationContainer } from './styles';
import Carousel from '../Carousel';
import Recommendations from '../Recomendations';
import LottieComponent from '../../components/LottieComponent';
import LandingAnimation from '../../lotties/landing-animation.json';
import { AnimatedPage } from '../../components/AnimatedPage';

const Landing = () => {
  const userId = sessionStorage.getItem('userId');

  const texts = [
    "Discover detailed information about your favorite movies!",
    "Explore the filmography of your favorite actors",
    "Create and organize personalized movie lists by genre, director, and more!",
    "Uncover a new movie recommendation system based on your tastes and preferences!"
  ];

  return (
    <AnimatedPage>
    <LandingContainer>
      {userId ? 
        (<Recommendations />) : (
        <UserContainer>
          <AnimationContainer>
            <LottieComponent animation={LandingAnimation} height={200} width={200}/>
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
    </AnimatedPage>
  );
}

export default Landing;
