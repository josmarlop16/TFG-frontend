import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Poster, Details, Title, Subtitle, Image, NoPosterText, Rating } from './styles';
import { Movie } from '../../types/movie';
import Lottie from 'react-lottie';
import LoadingAnimation from "../../lotties/loading-animation.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faFaceGrinHearts, faFaceLaughBeam, faFaceRollingEyes, faFaceTired } from '@fortawesome/free-solid-svg-icons';

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

  // Función para determinar el icono de cara según la puntuación de la película
  const getFaceIcon = (rating: number) => {
    if (rating < 5) {
      return faFaceTired;
    } else if (rating >= 5 && rating < 6) {
      return faFaceRollingEyes;
    } else if (rating >= 6 && rating < 7) {
      return faSmile;
    } else if (rating >= 7 && rating < 8) {
      return faFaceLaughBeam;
    } else {
      return faFaceGrinHearts;
    }
  };

  const roundedRating = vote_average.toFixed(2);

  return (
    <Card onClick={handleMovieClick}>
      {isLoading && (
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
