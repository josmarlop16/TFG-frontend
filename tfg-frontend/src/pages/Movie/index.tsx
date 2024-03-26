import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Movie, RelatedMovie } from '../../types/movie';
import Lottie from 'react-lottie';
import LoadingAnimation from "../../lotties/loading-animation.json";
import EmptyAnimation from "../../lotties/empty-animation.json";
import { Cast, Data, Image, MediaCarrousel, MediaSection, MovieContainer, MovieData, MovieSubitle, MovieText, MovieTitle, Multimedia } from './styles';
import { List } from '../MoviesList/styles';
import MovieCard from '../MovieCard';

interface CrewMember {
  _id: string;
  primaryName: string;
  primaryProfession: string[];
}

interface MovieDetailData {
  movie: Movie;
  crew: CrewMember[];
  relatedMovies: RelatedMovie[];
}

const MovieDetail: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movieData, setMovieData] = useState<MovieDetailData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    console.log(movieId);
    axios.post<MovieDetailData>(`http://localhost:4000/movie-detail`, { movieId })
      .then(response => {
        console.log(response.data);
        setMovieData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
        setIsLoading(false);
      });
  }, [movieId]);

  if (isLoading) {
    return (
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
    );
  }

  if (!movieData) {
    return (
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: EmptyAnimation,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
          }
        }}
        height={200}
        width={200}
      />
    );
  }

  const { movie, crew, relatedMovies } = movieData;

  return (
    <MovieContainer>
      <MovieData>
        <Image src={movie.poster} alt={movie.primaryTitle} />
        <Data>
          <MovieTitle>{movie.primaryTitle} ({movie.Year})</MovieTitle>
          <div>
            <MovieText>
              {Array.from({ length: Math.floor(movie.rating) }, (_, index) => (
                <span key={index}>🍿</span>
              ))}
              {movie.rating}/10
            </MovieText>
            <MovieText>{movie.genres.join(', ')}</MovieText>
            <MovieText>{movie.synopsis}</MovieText>
          </div>
          <Cast>
            {crew.map(person => (
              <MovieText key={person._id}>
                {person.primaryName}
              </MovieText>
            ))}
          </Cast>
        </Data>
      </MovieData>
      <Multimedia>
        <MediaSection>
            <MovieSubitle>Trailers</MovieSubitle>
            <MediaCarrousel>
                {movie.media.trailers.map((trailer, index) => (
                    <iframe
                        key={index}
                        width="560"
                        height="315"
                        src={trailer.url}
                        title={`Trailer ${index + 1}`}
                        allowFullScreen
                    ></iframe>
                ))}
            </MediaCarrousel>
        </MediaSection>
        <MediaSection>
            <MovieSubitle>Images</MovieSubitle>
            <MediaCarrousel>
                {movie.media.images.map((image, index) => (
                    <img
                        key={index}
                        src={image.url}
                        alt={`Image ${index + 1}`}
                        style={{ width: '400px', height: 'auto', marginRight: '10px', marginBottom: '10px' }} />
                ))}
            </MediaCarrousel>
        </MediaSection>
      </Multimedia>
    <MovieSubitle>Related</MovieSubitle>
    <List>
        {relatedMovies.map((relatedMovie) => (
        <MovieCard key={relatedMovie._id} movie={relatedMovie} isLoading={isLoading} />
        ))}
    </List>
    </MovieContainer>
  );
};

export default MovieDetail;
