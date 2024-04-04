import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard/index.tsx';
import Filters from '../Filters';
import { Movie } from '../../types/movie.ts';
import { List, PaginationContainer, PaginationButton, ListContainer, Horizontal, Message } from './styles.ts';
import Lottie from 'react-lottie';
import LoadingAnimation from "../../lotties/loading-animation.json";
import EmptyAnimaton from "../../lotties/empty-animation.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const MoviesList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<{
    genres: string[],
    sortBy: string,
    order: string,
    movieName: string,
    staffName: string // Agregar staffName al estado de los filtros
  }>({
    genres: [],
    sortBy: 'numVotes',
    order: 'desc',
    movieName: '',
    staffName: '' // Inicializar staffName como una cadena vacía
  });

  useEffect(() => {
    setIsLoading(true);
    let url = `http://localhost:4000/movies/all?sortBy=${filters.sortBy}&order=${filters.order}&page=${page}`;
    if (filters.genres && filters.genres.length > 0) {
      url += `&genres=${filters.genres.join(',')}`;
    }
    if (filters.movieName.trim() !== '') {
      url += `&movieName=${encodeURIComponent(filters.movieName.trim())}`;
    }
    if (filters.staffName.trim() !== '') { // Agregar condición para la búsqueda por actor
      url += `&staffName=${encodeURIComponent(filters.staffName.trim())}`;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setMovies(data.movies);
        setTotalPages(data.totalPages);
        console.log(data.movies[0].poster_path);
        console.log(data.movies[1].poster_path);
        console.log(data.movies[2].poster_path);
        console.log(data.movies[3].poster_path);
        console.log(data.movies[4].poster_path);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        setIsLoading(false);
      });
  }, [page, filters]);

  const handlePrevPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const handleFirstPage = () => {
    setPage(1);
  };

  const handleLastPage = () => {
    setPage(totalPages);
  };

  const handlePageSelect = (selectedPage: number) => {
    setPage(selectedPage);
  };

  const handleFilterChange = (newFilters: {
    genres: string[],
    sortBy: string,
    order: string,
    movieName: string,
    staffName: string // Agregar staffName a la firma de la función de devolución de llamada
  }) => {
    setFilters(newFilters);
    setPage(1);
  };

  return (
    <ListContainer>
      <Filters onFilterChange={handleFilterChange} />
      <Horizontal/>
      {isLoading && (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh' }}>
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
        </div>
      )}
      {!isLoading && (
        <>
          {movies.length === 0 ? (
            <>
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: EmptyAnimaton,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice"
                  }
                }}
                height={200}
                width={200} />
                <Message>
                  If you can't find the movie you're looking for, 
                  don't fret, just double-check your filters like 
                  the cinematic hound you are!
                </Message>
            </>
          ) : (
            <List>
              {movies.map((movie, index) => (
                <MovieCard key={movie._id} movie={movie} isLoading={isLoading}/>
              ))}
            </List>
          )}
          <PaginationContainer>
            <PaginationButton onClick={handleFirstPage} disabled={page === 1}><FontAwesomeIcon icon={faAnglesLeft} /></PaginationButton>
            <PaginationButton onClick={handlePrevPage} disabled={page === 1}><FontAwesomeIcon icon={faAngleLeft} /></PaginationButton>
            {Array.from({ length: Math.min(totalPages, 5) }, (_, index) => (
              <PaginationButton
                key={page + index}
                onClick={() => handlePageSelect(page + index)}
                disabled={page + index > totalPages}
              >
                {page + index}
              </PaginationButton>
            ))}
            <PaginationButton onClick={handleNextPage} disabled={page === totalPages}><FontAwesomeIcon icon={faAngleRight} /></PaginationButton>
            <PaginationButton onClick={handleLastPage} disabled={page === totalPages}><FontAwesomeIcon icon={faAnglesRight} /></PaginationButton>
          </PaginationContainer>
        </>
      )}
    </ListContainer>
  );
}

export default MoviesList;
