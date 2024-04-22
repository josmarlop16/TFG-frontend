import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieContainer, Image, DataContainer, MovieTitle, MovieText, CarouselContainer } from './styles';
import { Movie } from '../../types/movie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import { NoPosterText } from '../MovieCard/styles';
import ProviderComponent from '../../components/ProvidersComponent';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

interface MovieCarouselProps {
  movies: Movie[];
  isLoading?: boolean;
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies, isLoading }) => {
  const navigate = useNavigate();

  const handleMovieClick = (movieId: string) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <CarouselContainer>
      <Splide options={{ rewind: true, width:"95%", height:"50vh" }} aria-label="Movie Carousel">
        {movies.map((movie: Movie) => (
          <SplideSlide key={movie._id}>
            <MovieContainer onClick={() => handleMovieClick(movie._id)}>
              {movie.poster_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={`${movie.title} Poster`}
                />
              ) : (
                <NoPosterText>No poster available</NoPosterText>
              )} 
              <DataContainer>
                <MovieTitle>{movie.title}</MovieTitle>
                <MovieText>
                  {Array.from({ length: Math.floor(movie.vote_average) }, (_, index) => (
                      <FontAwesomeIcon key={index} icon={faCouch} style={{marginRight: '0.1rem'}}/>
                  ))}
                  {movie.vote_average}/10
                </MovieText>
                <MovieText>{movie.genres ? movie.genres.join(', ') : ''}</MovieText>
                <MovieText>{movie.overview}</MovieText>
                <ProviderComponent providers={movie.providers} />
              </DataContainer>
            </MovieContainer>
          </SplideSlide>
        ))}
      </Splide>
    </CarouselContainer>
  );
}

export default MovieCarousel;
