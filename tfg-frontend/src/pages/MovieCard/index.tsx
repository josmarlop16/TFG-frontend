import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Poster, Details, Title, Subtitle, Image, NoPosterText, Rating } from './styles';
import { Movie } from '../../types/movie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getFaceIcon } from '../../utils/getFaceIcon';
import LoadingAnimationComponent from '../../components/Animations/LoadingAnimationComponent';

interface MovieCardProps {
  movie: Movie;
  isLoading?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, isLoading }) => {
  const navigate = useNavigate();

  const { _id, title, vote_average, genres, poster_path } = movie;

  const handleMovieClick = () => {
    navigate(`/movie/${_id}`);
  };
  
  const roundedRating = vote_average.toFixed(2);

  return (
    <Card onClick={handleMovieClick}>
      {isLoading && (
        <LoadingAnimationComponent />
      )}
      {!isLoading && (
        <>
          <Poster>
            {poster_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt={`${title} Poster`}
              />
            ) : (
              <NoPosterText>No poster available</NoPosterText>
            )}
          </Poster>
          <Details>
            <Title>{title}</Title>
            <Subtitle>{genres ? genres.join(', ') : ''}</Subtitle>
            <Rating>
              <FontAwesomeIcon icon={getFaceIcon(vote_average)} style={{marginRight: '0.1rem'}}/>
              <span>
                {roundedRating}/10
              </span>
            </Rating>
          </Details>
        </>
      )}
    </Card>
  );
}

export default MovieCard;
