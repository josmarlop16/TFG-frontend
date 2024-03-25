import React from 'react';
import { Card, Poster, Details, Title, Subtitle, Image } from './styles';
import { Movie } from '../../types/movie.ts';
import Lottie from 'react-lottie';
import LoadingAnimation from "../../lotties/loading-animation.json";

interface MovieCardProps {
  movie: Movie;
  isLoading: boolean; // Propiedad de estado de carga
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, isLoading }) => {
  const { primaryTitle, Year, rating, genres, poster } = movie;

  return (
    <Card>
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
            <Subtitle>{Year} • {genres.join(', ')}</Subtitle>
            <div className="rating">
              {Array.from({ length: Math.floor(rating) }, (_, index) => (
                <span key={index}>⭐️</span>
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
