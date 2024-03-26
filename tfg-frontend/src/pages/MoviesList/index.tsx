import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard/index.tsx';
import Filters from '../Filters';
import SearchBar from '../SearchBar'; // Importa el componente SearchBar
import { Movie } from '../../types/movie.ts';
import { List, PaginationContainer, PaginationButton, ListContainer, Horizontal } from './styles.ts';
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
  const [filters, setFilters] = useState<{ genres: string[], sortBy: string, order: string, movieName: string }>({
    genres: [],
    sortBy: 'numVotes',
    order: 'desc',
    movieName: '' // Inicializa el estado de la palabra clave de búsqueda
  });

  useEffect(() => {
    setIsLoading(true);
    let url = `http://localhost:4000/movies/all?sortBy=${filters.sortBy}&order=${filters.order}&page=${page}`;
    if (filters.genres && filters.genres.length > 0) { // Verifica si genres está definido y no está vacío
      url += `&genres=${filters.genres.join(',')}`;
    }
    if (filters.movieName.trim() !== '') { // Agrega la palabra clave de búsqueda a la URL si está presente
      url += `&movieName=${encodeURIComponent(filters.movieName.trim())}`;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setMovies(data.movies);
        setTotalPages(data.totalPages);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        setIsLoading(false);
      });
  }, [page, filters]); // Agrega 'filters' como dependencia para que se vuelva a cargar cuando cambie la palabra clave de búsqueda o los filtros

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

  const handleFilterChange = (newFilters: { genres: string[], sortBy: string, order: string, movieName: string }) => {
    setFilters(newFilters);
    setPage(1); // Reinicia la página al cambiar los filtros
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
    setFilters({ ...filters, movieName: searchQuery });
  };

  return (
    <ListContainer>
      <Filters onFilterChange={handleFilterChange} />
      <SearchBar 
        value={filters.movieName} 
        onChange={handleSearch} 
        placeholder="Search any movie..." 
      />
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
        <>
          {movies.length === 0 ? (
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
              width={200}
            />
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
