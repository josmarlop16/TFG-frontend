import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../MovieCard';
import { Movie } from '../../types/movie';
import { List } from '../MoviesList/styles';

const Recommendations = () => {
  const [recommendedMovies, setRecommendedMovies] = useState<Movie[]>([]);
  const userId = sessionStorage.getItem('userId');

  useEffect(() => {
    const fetchRecommendedMovies = async () => {
      try {
        const response = await axios.post('http://localhost:4000/recommended-movies', { 
            userId: userId,
         });
        setRecommendedMovies(response.data);
      } catch (error) {
        console.error('Error fetching recommended movies:', error);
      }
    };

    fetchRecommendedMovies();
  }, [userId]);

  return (
    <List>
    {recommendedMovies.map((movie: Movie) => (
        <MovieCard key={movie._id} movie={movie} />
    ))}
    </List>
  );
};

export default Recommendations;
