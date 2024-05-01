import React from 'react';
import { DeveloperCard, DeveloperContainer, DeveloperDescription, DeveloperTitle } from './styles';
import { AnimatedPage } from '../../components/AnimatedPage';

export const Developer = () => {
  const goToPortfolio = () => {
    window.location.assign('https://josmarlop16.github.io/portfolio/');
  };

  return (
    <AnimatedPage>
    <DeveloperContainer>
      <DeveloperCard onClick={goToPortfolio}>
        <DeveloperTitle>Discover More!</DeveloperTitle>
        <DeveloperDescription>
          If you're interested in future projects and learning more about the developer of this page, check out his portfolio!
        </DeveloperDescription>
      </DeveloperCard>
    </DeveloperContainer>
    </AnimatedPage>
  );
};
