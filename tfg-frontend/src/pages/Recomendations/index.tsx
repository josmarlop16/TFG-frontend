import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../MovieCard';
import { Movie } from '../../types/movie';
import { List } from '../MoviesList/styles';
import { UserTitle } from '../User/styles';
import Lottie from 'react-lottie';
import LoadingAnimation from "../../lotties/loading-animation.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import { RefreshButton, TitleContainer } from './styles';
import toast from 'react-hot-toast';

const Recommendations = () => {
  const [recommendedMovies, setRecommendedMovies] = useState<Movie[]>([]);
  const userId = sessionStorage.getItem('userId');
  const [loading, setLoading] = useState<boolean>(true);

  const fetchRecommendedMovies = async () => {
      try {
        setLoading(true); // Cambia el estado de carga a verdadero al iniciar la solicitud
        const response = await axios.post('http://localhost:4000/recommended-movies', { 
          userId: userId,
        });
        setRecommendedMovies(response.data);
      } catch (error:any) {
        toast.error('Error fetching recommended movies:', error);
      } finally {
        setLoading(false); // Cambia el estado de carga a falso después de recibir la respuesta o en caso de error
      }
    };

  useEffect(() => {
    fetchRecommendedMovies();
  }, [userId]);

  const handleReload = () => {
    fetchRecommendedMovies();
  };

  return (
    <>
    <TitleContainer>
      <UserTitle>Today, we recommend...</UserTitle>
      <RefreshButton onClick={handleReload}>
        <FontAwesomeIcon icon={faRotate} size='2x'/>
      </RefreshButton>
    </TitleContainer>
      {loading ? (
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: LoadingAnimation,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          }}
          height={200}
          width={200}
        />
      ) : (
        <List>
          {recommendedMovies.map((movie: Movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </List>
      )}
    </>
  );
};

export default Recommendations;
