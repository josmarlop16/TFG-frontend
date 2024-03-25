import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard/index.tsx';
import Filters from '../Filters'; // Importa el componente Filters
import { Movie } from '../../types/movie.ts';
import { List, PaginationContainer, PaginationButton, ListContainer, Horizontal } from './styles.ts';
import Lottie from 'react-lottie';
import LoadingAnimation from "../../lotties/loading-animation.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const MoviesList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<{ genres: string[], sortBy: string, order: string }>({
    genres: [],
    sortBy: 'numVotes',
    order: 'desc'
  });

  useEffect(() => {
    setIsLoading(true); // Activamos el estado de carga al cambiar de página o filtros
    let url = `http://localhost:4000/movies/all?sortBy=${filters.sortBy}&order=${filters.order}&page=${page}`;
    if (filters.genres.length > 0) {
      url += `&genres=${filters.genres.join(',')}`;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setMovies(data.movies);
        setTotalPages(data.totalPages);
        setIsLoading(false); // Desactivamos el estado de carga al finalizar la carga
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        setIsLoading(false); // Desactivamos el estado de carga en caso de error
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

  const handleFilterChange = (newFilters: { genres: string[], sortBy: string, order: string }) => {
    setFilters(newFilters);
  };

  return (
    <ListContainer>
      <Filters onFilterChange={handleFilterChange} />
      <Horizontal/>
      {isLoading && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
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
          <><List>
          {movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} isLoading={false} />
          ))}
        </List><PaginationContainer>
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
          </PaginationContainer></>
      )}
    </ListContainer>
  );
}

export default MoviesList;
