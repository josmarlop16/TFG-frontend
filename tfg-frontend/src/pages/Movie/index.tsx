import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Media, Movie, Providers, RelatedMovie } from '../../types/movie';
import { Button, Data, Image, ListSelect, MovieContainer, MovieData, MovieSubitle, MovieText, MovieTitle, MovieTitleContainer, PosterContainer } from './styles';
import { List } from '../MoviesList/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { NoPosterText } from '../MovieCard/styles';
import { getFaceIcon } from '../../utils/getFaceIcon';
import toast from 'react-hot-toast';
import MovieCard from '../MovieCard';
import ImageComponent from '../../components/ImagesComponent';
import TrailerComponent from '../../components/TrailersComponent';
import ProviderComponent from '../../components/ProvidersComponent';
import LoadingAnimationComponent from '../../components/LoadingAnimationComponent';
import EmptyAnimationComponent from '../../components/EmptyAnimationComponent';
import PreferencesComponent from '../../components/PreferencesComponent';
import { handleAddToUserList } from '../../utils/handleUserList';

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
  providers: Providers;
}

const MovieDetail: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movieData, setMovieData] = useState<MovieDetailData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [, setIsLoadingMedia] = useState<boolean>(true);

  const [userLists, setUserLists] = useState<any[]>([]);
  const [listName, setListName] = useState<string | null>(null);

  const isLoggedIn = sessionStorage.getItem('token');
  const preferencesString = sessionStorage.getItem('preferences');
  const preferences = preferencesString ? JSON.parse(preferencesString) : null;
  const [, setIsInPreferences] = useState<boolean>(false);


  useEffect(() => {
    setIsLoading(true);
    axios.post<MovieDetailData>(`http://localhost:4000/movie-detail`, { movieId })
      .then(response => {
        setMovieData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        toast.error('Error fetching movie details', error);
        setIsLoading(false);
      });
  }, [movieId]);

  useEffect(() => {
    if (movieData && movieData.film.media) {
      setIsLoadingMedia(false);
    }
  }, [movieData]);

  useEffect(() => {
    if (preferences && preferences.movies) {
      setIsInPreferences(preferences.movies.some((p: { _id: string }) => p._id === movieId));
    } else {
      setIsInPreferences(false);
    }
  }, [movieId, preferences]);

  useEffect(() => {
    const fetchUserLists = async () => {
      try {
        const userId = sessionStorage.getItem('userId');
        if (userId) {
          const response = await axios.post('http://localhost:4000/user', { userId });
          const updatedUserLists = response.data.user.userLists;
          setUserLists(updatedUserLists);   
          sessionStorage.setItem('userLists', JSON.stringify(updatedUserLists));
        }
      } catch (error: any) {
        toast.error('Error fetching user lists', error);
      }
    };
    fetchUserLists();
  }, []);

  if (isLoading || !movieData) {
    return (
      <LoadingAnimationComponent />
    );
  }

  const { film, relatedMovies, media, providers } = movieData;

  const roundedRating = film.vote_average.toFixed(2);

  return (
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
          <>
            <ListSelect onChange={(e) => setListName(e.target.value)}>
              <option value="">Select a list</option>
              {userLists.map((list) => (
                <option key={list.listName} value={list.listName}>{list.listName}</option>
              ))}
            </ListSelect>
            <Button onClick={() => handleAddToUserList(listName, movieId)}>
              <FontAwesomeIcon icon={faPlus} />
              Add to List
            </Button>
          </>
        )}
        </PosterContainer>
        <Data>
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
            {media.images ? (
              <ImageComponent {...media}/>
            ): (
              <EmptyAnimationComponent text="No images available at the moment" />
            )}
        </Data>
      </MovieData>
      {media.trailers && media.trailers.length > 0 ? (
        <TrailerComponent {...media}/>
      ) : (
        <EmptyAnimationComponent text="No videos available at the moment" />
      )}
      <MovieSubitle>Related</MovieSubitle>
      {media.trailers && media.trailers.length > 0 ? (
        <List>
          {relatedMovies.map((relatedMovie) => (
            <MovieCard key={relatedMovie._id} movie={relatedMovie} isLoading={isLoading} />
          ))}
        </List>
      ) : (
        <EmptyAnimationComponent text="No related movies at the moment" />
      )}
    </MovieContainer>
  );
};

export default MovieDetail;
