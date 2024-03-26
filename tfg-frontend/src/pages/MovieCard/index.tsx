import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate en lugar de useHistory
import { Card, Poster, Details, Title, Subtitle, Image } from './styles';
import { Movie } from '../../types/movie.ts';
import Lottie from 'react-lottie';
import LoadingAnimation from "../../lotties/loading-animation.json";

interface MovieCardProps {
  movie: Movie;
  isLoading: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, isLoading }) => {
  const navigate = useNavigate(); // Utiliza useNavigate para acceder al historial de navegación

  const { _id, primaryTitle, Year, rating, genres, poster } = movie;

  const handleMovieClick = () => {
    console.log('Movie clicked:', _id);
    navigate(`/movie/${_id}`);
  };

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
            <Image
              src={poster}
              alt={`${primaryTitle} Poster`}
            />
          </Poster>
          <Details>
            <Title>{primaryTitle}</Title>
            <Subtitle>{Year} • {genres ? genres.join(', ') : ''}</Subtitle>
            <div className="rating">
              {Array.from({ length: Math.floor(rating) }, (_, index) => (
                <span key={index}>🍿</span>
              ))}
              <span>{rating}/10</span>
            </div>
          </Details>
        </>
      )}
    </Card>
  );
}

export default MovieCard;
