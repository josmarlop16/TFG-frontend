import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Media, Movie, Providers, RelatedMovie } from '../../types/movie';
import Lottie from 'react-lottie';
import LoadingAnimation from "../../lotties/loading-animation.json";
import EmptyAnimation from "../../lotties/empty-box-animation.json";
import { Button, Data, Image, MovieContainer, MovieData, MovieSubitle, MovieText, MovieTitle, MovieTitleContainer } from './styles';
import { List } from '../MoviesList/styles';
import MovieCard from '../MovieCard';
import ImageComponent from './ImagesComponent';
import TrailerComponent from './TrailersComponent';
import ProviderComponent from './ProvidersComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch, faHeart } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { NoPosterText } from '../MovieCard/styles';

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

  const isLoggedIn = sessionStorage.getItem('token');
  const preferencesString = sessionStorage.getItem('preferences');
  const preferences = preferencesString ? JSON.parse(preferencesString) : null;
  const [isInPreferences, setIsInPreferences] = useState<boolean>(false);


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
    // Verifica si la película está en las preferencias del usuario
    if (preferences && preferences.movies) {
      setIsInPreferences(preferences.movies.some((p: { _id: string }) => p._id === movieId));
    } else {
      setIsInPreferences(false);
    }
  }, [movieId, preferences]);


  if (isLoading || !movieData) {
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

  const handleAddToPreferences = async () => {
    try {
      const response = await axios.post('http://localhost:4000/add-preference', {
        userId: sessionStorage.userId,
        movieId: movieId
      });

      if (response.data.message === "La película ya está en las preferencias del usuario.") {
        toast.error("La película ya está en tus preferencias.");
      } else {
        // Actualiza el estado de las preferencias en sessionStorage
        await updatePreferencesInSessionStorage();
        setIsInPreferences(true); // Actualiza el estado del botón
        toast.success("Película añadida a tus preferencias!");
      }
    } catch (error:any) {
      toast.error('Error durante el proceso de añadir a preferencias', error);
    }
  };

const handleRemoveFromPreferences = async () => {
  try {
    const response = await axios.post('http://localhost:4000/remove-preference', {
      userId: sessionStorage.userId,
      movieId: movieId
    });

    if (response.data.message === "La película no está en las preferencias del usuario.") {
      toast.error("La película no está en tus preferencias.");
    } else {
      // Actualiza el estado de las preferencias en sessionStorage
     await updatePreferencesInSessionStorage();
      setIsInPreferences(false); // Actualiza el estado del botón
      toast.success("Película eliminada de tus preferencias!");
    }
  } catch (error:any) {
    toast.error('Error durante el proceso de eliminación de preferencias', error);
  }
};



  const updatePreferencesInSessionStorage = async () => {
    try {
      const userId = sessionStorage.userId;
      if (!userId) {
        console.error("User ID not found in session storage.");
        return;
      }

      // Hacer una petición al servidor para obtener las preferencias actualizadas del usuario
      const response = await axios.post('http://localhost:4000/user', { userId: sessionStorage.getItem('userId'), });

      const updatedPreferences = response.data.user.preferences;

      // Actualizar las preferencias en sessionStorage con los datos del servidor
      sessionStorage.setItem('preferences', JSON.stringify(updatedPreferences));
    } catch (error) {
      console.error('Error al actualizar las preferencias en sessionStorage:', error);
    }
  };


  const { film, relatedMovies, media, providers } = movieData;

  return (
    <MovieContainer>
      <MovieData>
        {film.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
            alt={`${film.title} Poster`}
          />
        ) : (
          <NoPosterText>No poster available</NoPosterText>
        )}
        <Data>
          <MovieTitleContainer>
            <MovieTitle>{film.title} ({new Date(film.release_date).getFullYear()})</MovieTitle>
            <Button>
              {isLoggedIn ? (
                isInPreferences ? ( // Verifica si la película está en las preferencias
                  <FontAwesomeIcon
                    className="heart-icon selected"
                    size='2x'
                    icon={faHeart}
                    onClick={handleRemoveFromPreferences}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="heart-icon"
                    size='2x'
                    icon={faHeart}
                    onClick={handleAddToPreferences}
                  />
                )
              ) : (
                <Link to="/register">
                  <FontAwesomeIcon size='2x' icon={faHeart} color='white'/>
                </Link>
              )}
            </Button>
          </MovieTitleContainer>
          <MovieText>
            {Array.from({ length: Math.floor(film.vote_average) }, (_, index) => (
                <FontAwesomeIcon key={index} icon={faCouch} style={{marginRight: '0.1rem'}}/>
            ))}
            {film.vote_average}/10
          </MovieText>
          <MovieText>{film.genres.join(', ')}</MovieText>
          <MovieText>{film.runtime} minutes</MovieText>
          <MovieText>{film.overview}</MovieText>
          <ProviderComponent providers={providers} />
            {media.images ? (
              <ImageComponent {...media}/>
            ): (
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center', 
                alignItems: 'center', 
                width: '100%',
                height: '30vh' }}>
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
                  <MovieText>No images available at the moment</MovieText>
              </div>
            )}
        </Data>
      </MovieData>
      <MovieSubitle>Videos</MovieSubitle>
      {media.trailers && media.trailers.length > 0 ? (
        <TrailerComponent {...media}/>
      ) : (
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'center',
            width: '100%',
            height: '30vh' }}>
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
              <MovieText>No videos available at the moment</MovieText>
          </div>
      )}
      <MovieSubitle>Related</MovieSubitle>
      {media.trailers && media.trailers.length > 0 ? (
        <List>
          {relatedMovies.map((relatedMovie) => (
            <MovieCard key={relatedMovie._id} movie={relatedMovie} isLoading={isLoading} />
          ))}
        </List>
      ) : (
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center', 
          alignItems: 'center',
          width: '100%',
          height: '30vh' }}>
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
            <MovieText>No videos available at the moment</MovieText>
        </div>
      )}
    </MovieContainer>
  );
};

export default MovieDetail;
