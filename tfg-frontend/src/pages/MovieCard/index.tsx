import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate en lugar de useHistory
import { Card, Poster, Details, Title, Subtitle, Image } from './styles';
import { Movie } from '../../types/movie'; // No es necesario especificar la extensión .ts en la importación
import Lottie from 'react-lottie';
import LoadingAnimation from "../../lotties/loading-animation.json";

interface MovieCardProps {
  movie: Movie;
  isLoading?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, isLoading }) => {
  const navigate = useNavigate(); // Utiliza useNavigate para acceder al historial de navegación

  const { _id, title, vote_average, genres, poster_path } = movie; // Corrige los nombres de las propiedades

  const handleMovieClick = () => {
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
              src={`https://image.tmdb.org/t/p/original${poster_path}`} // Añade la parte delantera de la URL al poster
              alt={`${title} Poster`}
            />
          </Poster>
          <Details>
            <Title>{title}</Title>
            <Subtitle>{genres ? genres.join(', ') : ''}</Subtitle>
            <div className="rating">
              {Array.from({ length: Math.floor(vote_average) }, (_, index) => (
                <span key={index}>🍿</span>
              ))}
              <span>{vote_average}/10</span>
            </div>
          </Details>
        </>
      )}
    </Card>
  );
}

export default MovieCard;
