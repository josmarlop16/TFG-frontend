import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MovieDetailData } from '../../types/movie';
import { Image, MovieContainer, MovieData, MovieSubitle, PosterContainer, RelatedContainer } from './styles';
import { List } from '../MoviesSearch/styles';
import { NoPosterText } from '../../components/MovieCardComponent/styles';
import MovieCard from '../../components/MovieCardComponent';
import TrailerComponent from '../../components/TrailersComponent';
import LoadingAnimationComponent from '../../components/Animations/LoadingAnimationComponent';
import EmptyAnimationComponent from '../../components/Animations/EmptyAnimationComponent';
import ListSelectorComponent from '../../components/ListSelectorComponent';
import { checkPreferences, fetchUserLists, loadMovieDetails } from '../../utils/handleMovieData';
import MovieDataComponent from '../../components/MovieDataComponent';
import { AnimatedPage } from '../../components/AnimatedPage';

const MovieDetail: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movieData, setMovieData] = useState<MovieDetailData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [, setIsLoadingMedia] = useState<boolean>(true);

  const [userLists, setUserLists] = useState<any[]>([]);

  const isLoggedIn = sessionStorage.getItem('token');
  const preferencesString = sessionStorage.getItem('preferences');
  const preferences = preferencesString ? JSON.parse(preferencesString) : null;
  const [, setIsInPreferences] = useState<boolean>(false);


  useEffect(() => {
    loadMovieDetails(movieId, setMovieData, setIsLoading);
  }, [movieId]);

  useEffect(() => {
    if (movieData && movieData.film.media) {
      setIsLoadingMedia(false);
    }
  }, [movieData]);

  useEffect(() => {
    checkPreferences(movieId, preferences, setIsInPreferences);
  }, [movieId, preferences]);

  useEffect(() => {
    fetchUserLists(setUserLists);
  }, []);

  if (isLoading || !movieData) {
    return (
      <LoadingAnimationComponent />
    );
  }

  const { film, relatedMovies, media, providers } = movieData;

  return (
    <AnimatedPage>
    <MovieContainer>
      <MovieData>
        <PosterContainer>
          {film.poster_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
              alt={`${film.title} Poster`}
            />
          ) : (
            <NoPosterText>No poster available</NoPosterText>
          )}
          {userLists.length > 0 && (
            <ListSelectorComponent movieId={film._id} userLists={userLists} />
          )}
        </PosterContainer>
        <MovieDataComponent film={film} isLoggedIn={isLoggedIn} media={media} movieId={movieId} providers={providers}/>
      </MovieData>
      {media.trailers && media.trailers.length > 0 ? (
        <TrailerComponent {...media}/>
      ) : (
        <EmptyAnimationComponent text="No videos available at the moment" />
      )}
      {media.trailers && media.trailers.length > 0 ? (
        <RelatedContainer>
          <MovieSubitle>Related</MovieSubitle>
          <List>
            {relatedMovies.map((relatedMovie) => (
              <MovieCard key={relatedMovie._id} movie={relatedMovie} isLoading={isLoading} />
            ))}
          </List>
        </RelatedContainer>
      ) : (
        <EmptyAnimationComponent text="No related movies at the moment" />
      )}
    </MovieContainer>
    </AnimatedPage>
  );
};

export default MovieDetail;
