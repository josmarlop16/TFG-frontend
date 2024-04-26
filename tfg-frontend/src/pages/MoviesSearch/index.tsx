import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard';
import Filters from '../Filters';
import { Movie } from '../../types/movie';
import { List, ListContainer, Horizontal } from './styles';
import toast from 'react-hot-toast';
import LoadingAnimationComponent from '../../components/Animations/LoadingAnimationComponent';
import EmptyAnimationComponent from '../../components/Animations/EmptyAnimationComponent';
import PaginationComponent from '../../components/PaginationComponent';
import { AnimatedPage } from '../../components/AnimatedPage';

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
    staffName: string
  }>({
    genres: [],
    sortBy: 'vote_count',
    order: 'desc',
    movieName: '',
    staffName: ''
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
    if (filters.staffName.trim() !== '') {
      url += `&staffName=${encodeURIComponent(filters.staffName.trim())}`;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setMovies(data.movies);
        setTotalPages(data.totalPages);
        setIsLoading(false);
      })
      .catch(error => {
        toast.error('Error fetching movies', error);
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
    staffName: string
  }) => {
    setFilters(newFilters);
    setPage(1);
  };

  return (
    <AnimatedPage>
    <ListContainer>
      <Filters onFilterChange={handleFilterChange} />
      <Horizontal/>
      {isLoading && (
        <LoadingAnimationComponent />
      )}
      {!isLoading && (
        <>
          {movies.length === 0 ? (
            <EmptyAnimationComponent text="If you can't find the movie you're looking for, don't fret, just double-check your filters like the cinematic hound you are!"/>
          ) : (
            <List>
              {movies.map((movie) => (
                <MovieCard key={movie._id} movie={movie} isLoading={isLoading}/>
              ))}
            </List>
          )}
          <PaginationComponent
            page={page}
            totalPages={totalPages}
            handleFirstPage={handleFirstPage}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            handleLastPage={handleLastPage}
            handlePageSelect={handlePageSelect}
          />
        </>
      )}
    </ListContainer>
    </AnimatedPage>
  );
};

export default MoviesList;
