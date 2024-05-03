import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieContainer, Image, DataContainer, MovieTitle, MovieText, CarouselContainer } from './styles';
import { Movie } from '../../types/movie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NoPosterText } from '../../components/MovieCardComponent/styles';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { getFaceIcon } from '../../utils/getFaceIcon';
import { AnimatedPage } from '../../components/AnimatedPage';
import '@splidejs/splide/css/sea-green';

interface MovieCarouselProps {
  movies: Movie[];
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies }) => {

  const navigate = useNavigate();

  const handleMovieClick = (movieId: string) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <AnimatedPage>
    <CarouselContainer>
      <Splide options={{ rewind: true, width:"90%", height:"50%", }} aria-label="Movie Carousel" id='splide-component'>
        {movies.map((movie: Movie) => (
          <SplideSlide key={movie._id} id='slide-component' style={{display: "flex", justifyContent: "center", height:"50%"}} >
            <MovieContainer onClick={() => handleMovieClick(movie._id)} id='movie-container'>
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
                  <FontAwesomeIcon icon={getFaceIcon(movie.vote_average)} style={{marginRight: '0.5rem'}}/>
                  {movie.vote_average.toFixed(2)}/10
                </MovieText>
                <MovieText>{movie.genres ? movie.genres.join(', ') : ''}</MovieText>
                <MovieText>{movie.overview}</MovieText>
              </DataContainer>
            </MovieContainer>
          </SplideSlide>
        ))}
      </Splide>
    </CarouselContainer>
    </AnimatedPage>
  );
}

export default MovieCarousel;
