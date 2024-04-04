// Filters.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  ApplyButton,
  ApplyContainer,
  ButtonsContainer,
  FilterButton,
  FilterSubcontainer,
  FiltersContainer,
  FiltersSubtitle,
  FiltersTitle,
  GenresSubcontainer,
  Select,
  Sort,
  ArrowButton
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../SearchBar';
import toast from 'react-hot-toast';

interface FiltersProps {
  onFilterChange: (filters: { genres: string[], sortBy: string, order: string, movieName: string, staffName: string }) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const [genres, setGenres] = useState<string[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>('');
  const [order, setOrder] = useState<string>('');
  const [movieName, setMovieName] = useState<string>('');
  const [staffName, setStaffName] = useState<string>('');
  const [isFilterMenuVisible, setIsFilterMenuVisible] = useState<boolean>(false);

  useEffect(() => {
    axios.get<string[]>('http://localhost:4000/genres')
      .then(response => {
        setGenres(response.data);
      })
      .catch(error => {
        toast.error('Error fetching genres, still working on it!', error);
      });
  }, []);

  const handleGenreClick = (genre: string) => {
    const newSelectedGenres = selectedGenres.includes(genre)
      ? selectedGenres.filter(g => g !== genre)
      : [...selectedGenres, genre];
    setSelectedGenres(newSelectedGenres);
  };

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const handleOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOrder(event.target.value);
  };

  const handleApplyFilters = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del botón
    const filters = {
      genres: selectedGenres,
      sortBy,
      order,
      movieName,
      staffName
    };
    onFilterChange(filters);
  };

  const handleResetFilters = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del botón
    setSelectedGenres([]);
    setSortBy('vote_count');
    setOrder('desc');
    setMovieName('');
    setStaffName('');
    onFilterChange({ genres: [], sortBy: 'vote_count', order: 'desc', movieName: '', staffName: '' });
  };

  const toggleFilterMenu = () => {
    setIsFilterMenuVisible(prevState => !prevState);
  };

  const handleMovieSearchChange = (value: string) => {
    setMovieName(value);
  };

  const handleStaffSearchChange = (value: string) => {
    setStaffName(value);
  };

  return (
    <>
      <FiltersTitle>
        Search filters
        <ArrowButton onClick={toggleFilterMenu} style={{ transform: `rotate(${isFilterMenuVisible ? '-90deg' : '0deg'})` }}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </ArrowButton>
      </FiltersTitle>
      <SearchBar
        value={movieName}
        onChange={handleMovieSearchChange}
        placeholder="Search movie..."
      />
      <ApplyContainer>
        <ApplyButton onClick={handleApplyFilters}>Apply Filters</ApplyButton>
        <ApplyButton onClick={handleResetFilters}>Reset Filters</ApplyButton>
      </ApplyContainer>
      <FiltersContainer isVisible={isFilterMenuVisible}>
        <Sort>
          <FilterSubcontainer>
            <FiltersSubtitle>Sort By</FiltersSubtitle>
            <Select value={sortBy} onChange={handleSortByChange}>
              <option value="vote_average">Rating</option>
              <option value="vote_count">Number of votes</option>
              <option value="release_date">Release Date</option>
              <option value="runtime">Runtime</option>
              <option value="popularity">Popularity</option>
              <option value="title">Title</option>
            </Select>
          </FilterSubcontainer>
          <FilterSubcontainer>
            <FiltersSubtitle>Order</FiltersSubtitle>
            <Select value={order} onChange={handleOrderChange}>
              <option value="desc">Descending</option>
              <option value="asc">Ascending</option>
            </Select>
          </FilterSubcontainer>
        </Sort>
        <GenresSubcontainer>
          <FiltersSubtitle>Genres</FiltersSubtitle>
          <ButtonsContainer>
            {genres.map(genre => (
              <FilterButton
                key={genre}
                onClick={() => handleGenreClick(genre)}
                active={selectedGenres.includes(genre)}
              >
                {genre}
              </FilterButton>
            ))}
          </ButtonsContainer>
        </GenresSubcontainer>
        <FiltersSubtitle>Search by actor:</FiltersSubtitle>
        <SearchBar
          value={staffName}
          onChange={handleStaffSearchChange}
          placeholder="Actor name..."
        />
      </FiltersContainer>
    </>
  );
}

export default Filters;
