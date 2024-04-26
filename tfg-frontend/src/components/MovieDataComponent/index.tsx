import React from 'react'
import { Data, MovieText, MovieTitle, MovieTitleContainer, TextContainer } from './styles';
import PreferencesComponent from '../PreferencesComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getFaceIcon } from '../../utils/getFaceIcon';
import ProviderComponent from '../ProvidersComponent';
import ImageComponent from '../ImagesComponent';
import EmptyAnimationComponent from '../Animations/EmptyAnimationComponent';
import { Movie, Providers, Media } from '../../types/movie';

interface MovieDataComponentProps {
  film: Movie;
  movieId: string | undefined;
  isLoggedIn: string | null;
  providers: Providers;
  media: Media;
}

const MovieDataComponent: React.FC<MovieDataComponentProps> = ({ isLoggedIn, movieId, film, providers, media }) => {

  const roundedRating = film.vote_average.toFixed(2);

  return (
    <Data>
      <TextContainer>
        <MovieTitleContainer>
          <MovieTitle>{film.title} ({new Date(film.release_date).getFullYear()})</MovieTitle>
          <PreferencesComponent isLoggedIn={isLoggedIn} movieId={movieId}/>
        </MovieTitleContainer>
        <MovieText>
          <FontAwesomeIcon icon={getFaceIcon(film.vote_average)} style={{marginRight: '0.5rem'}}/>
          {roundedRating}/10
        </MovieText>
        <MovieText>{film.genres ? film.genres.join(', ') : ''}</MovieText>
        <MovieText>{film.runtime} minutes</MovieText>
        <MovieText>{film.overview}</MovieText>
        <ProviderComponent providers={providers} />
      </TextContainer>
      {media.images ? (
        <ImageComponent {...media}/>
      ): (
        <EmptyAnimationComponent text="No images available at the moment" />
      )}
    </Data>
  )
}

export default MovieDataComponent;