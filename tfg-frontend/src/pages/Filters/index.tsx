import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  ApplyButton,
  ApplyContainer,
  FiltersTitle,
  ArrowButton
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../../components/SearchBarComponent';
import toast from 'react-hot-toast';
import FiltersComponent from '../../components/FiltersComponent';
import { motion } from 'framer-motion';

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

  const handleApplyFilters = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
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
    event.preventDefault();
    setSelectedGenres([]);
    setSortBy('vote_count');
    setOrder('desc');
    setMovieName('');
    setStaffName('');
    onFilterChange({ genres: [], sortBy: 'vote_count', order: 'desc', movieName: '', staffName: '' });
  };

  const toggleFilterMenu = () => {
    setIsFilterMenuVisible(prevState => !prevState);
    setIsOpen(isOpen => !isOpen);
  };

  const handleMovieSearchChange = (value: string) => {
    setMovieName(value);
  };

  const handleStaffSearchChange = (value: string) => {
    setStaffName(value);
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

  const [isOpen, setIsOpen] = useState(false)

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
        <ApplyButton onClick={handleApplyFilters}>Search</ApplyButton>
        <ApplyButton onClick={handleResetFilters} data-testid="reset">
          <FontAwesomeIcon icon={faFilterCircleXmark} />
        </ApplyButton>
      </ApplyContainer>
      <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{duration:0.5, type:"spring"}}
      >
      <FiltersComponent sortBy={sortBy}
        setSortBy={setSortBy}
        order={order}
        setOrder={setOrder}
        genres={genres}
        selectedGenres={selectedGenres}
        handleGenreClick={handleGenreClick}
        staffName={staffName}
        handleStaffSearchChange={handleStaffSearchChange}
        isvisible={isFilterMenuVisible}
      />
      </motion.nav>
    </>
  );
}

export default Filters;
