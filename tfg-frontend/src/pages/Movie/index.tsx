import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Media, Movie, RelatedMovie } from '../../types/movie';
import Lottie from 'react-lottie';
import LoadingAnimation from "../../lotties/loading-animation.json";
import EmptyAnimation from "../../lotties/empty-animation.json";
import { Cast, Data, Image, MediaCarrousel, MediaSection, MovieContainer, MovieData, MovieSubitle, MovieText, MovieTitle, Multimedia } from './styles';
import { List } from '../MoviesList/styles';
import MovieCard from '../MovieCard';
import ReactPlayer from 'react-player/lazy';

interface CrewMember {
  _id: string;
  primaryName: string;
  primaryProfession: string[];
}

interface MovieDetailData {
  film: Movie;
  crew: CrewMember[];
  relatedMovies: RelatedMovie[];
  media: Media;
}

const MovieDetail: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movieData, setMovieData] = useState<MovieDetailData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingMedia, setIsLoadingMedia] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
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

  useEffect(() => {
    if (movieData && movieData.film.media) {
      setIsLoadingMedia(false);
    }
  }, [movieData]);

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

  const { film, crew, relatedMovies, media } = movieData;

  return (
    <MovieContainer>
      <MovieData>
        <Image src={`https://image.tmdb.org/t/p/original${film.poster_path}`} alt={`${film.title} Poster`} />
        <Data>
          <MovieTitle>{film.title} ({new Date(film.release_date).getFullYear()})</MovieTitle>
          <div>
            <MovieText>
              {Array.from({ length: Math.floor(film.vote_average) }, (_, index) => (
                <span key={index}>🍿</span>
              ))}
              {film.vote_average}/10
            </MovieText>
            <MovieText>{film.genres.join(', ')}</MovieText>
            <MovieText>{film.overview}</MovieText>
          </div>
          <MovieText>Cast</MovieText>
          <Cast>
            {crew.map(person => (
              <MovieText key={person._id}>
                {person.primaryName}
              </MovieText>
            ))}
          </Cast>
        </Data>
      </MovieData>
      {media && (
        <Multimedia>
          <MediaSection>
            <MovieSubitle>Trailers</MovieSubitle>
            <MediaCarrousel>
              {media.trailers.map((trailer) => (
                <ReactPlayer url={trailer.url} style={{ minWidth: '400px', height: 'auto', marginBottom: '10px', justifyContent: 'center', alignItems: 'center' }} />
              ))}
            </MediaCarrousel>
          </MediaSection>
          <MediaSection>
            <MovieSubitle>Images</MovieSubitle>
            <MediaCarrousel>
              {media.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={`Image ${index + 1}`}
                  style={{ width: '400px', height: 'auto', marginBottom: '10px' }} />
              ))}
            </MediaCarrousel>
          </MediaSection>
        </Multimedia>
      )}
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
