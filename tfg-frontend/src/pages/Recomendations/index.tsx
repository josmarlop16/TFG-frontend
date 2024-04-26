import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCarousel from '../MovieCarousel';
import { Movie } from '../../types/movie';
import LoadingAnimation from "../../lotties/loading-animation.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import { RefreshButton, TitleContainer, RecommendationContainer, UserTitle } from './styles';
import toast from 'react-hot-toast';
import LottieComponent from '../../components/LottieComponent';
import { AnimatedPage } from '../../components/AnimatedPage';

const Recommendations = () => {
  const [recommendedMovies, setRecommendedMovies] = useState<Movie[]>([]);
  const userId = sessionStorage.getItem('userId');
  const [loading, setLoading] = useState<boolean>(true);

  const fetchRecommendedMovies = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:4000/recommended-movies', { 
        userId: userId,
      });
      setRecommendedMovies(response.data);
    } catch (error:any) {
      toast.error('Error fetching recommended movies:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      await fetchRecommendedMovies();
    };

    fetchMovies();
  }, [userId]); 

  const handleReload = () => {
    fetchRecommendedMovies();
  };

  return (
    <AnimatedPage>
    <RecommendationContainer>
      <TitleContainer>
        <UserTitle>Today, we recommend...</UserTitle>
        <RefreshButton onClick={handleReload}>
          <FontAwesomeIcon icon={faRotate} size='2x'/>
        </RefreshButton>
      </TitleContainer>
      {loading ? (
        <LottieComponent animation={LoadingAnimation} />
      ) : (
        <MovieCarousel movies={recommendedMovies} />
      )}
    </RecommendationContainer>
    </AnimatedPage>
  );
};

export default Recommendations;
