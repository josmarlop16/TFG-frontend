import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

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


  useEffect(() => {
    setIsLoading(true);
    axios.post<MovieDetailData>(`http://localhost:4000/movie-detail`, { movieId })
      .then(response => {
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

      // Si la película ya está en las preferencias del usuario, muestra el mensaje emergente
      if (response.data.message === "La película ya está en las preferencias del usuario.") {
        toast.error("Movie is already on your preferences.");
      } else {
        toast.success("Movie added to your preferences!");
      }
    } catch (error) {
      console.error('Error al agregar la película a las preferencias:', error);
    }
  };

  const { film, relatedMovies, media, providers } = movieData;

  return (
    <MovieContainer>
      <MovieData>
        <Image src={`https://image.tmdb.org/t/p/original${film.poster_path}`} alt={`${film.title} Poster`} />
        <Data>
          <MovieTitleContainer>
            <MovieTitle>{film.title} ({new Date(film.release_date).getFullYear()})</MovieTitle>
            <Button>
              <FontAwesomeIcon size='2x' icon={faHeart} onClick={handleAddToPreferences} color='white'/>
            </Button>
          </MovieTitleContainer>
          <MovieText>
            {Array.from({ length: Math.floor(film.vote_average) }, (_, index) => (
              <span key={index}>🍿</span>
            ))}
            {film.vote_average}/10
          </MovieText>
          <MovieText>{film.genres.join(', ')}</MovieText>
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
