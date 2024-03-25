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

interface FiltersProps {
    onFilterChange: (filters: { genres: string[], sortBy: string, order: string, movieName: string }) => void;
}

const Filter: React.FC<FiltersProps> = ({ onFilterChange }) => {
    const [genres, setGenres] = useState<string[]>([]);
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [sortBy, setSortBy] = useState<string>('');
    const [order, setOrder] = useState<string>('');
    const [movieName, setMovieName] = useState<string>(''); // Nuevo estado para la palabra clave de búsqueda
    const [isFilterMenuVisible, setIsFilterMenuVisible] = useState<boolean>(false);

    useEffect(() => {
        axios.get<string[]>('http://localhost:4000/genres')
            .then(response => {
                setGenres(response.data);
            })
            .catch(error => {
                console.error('Error fetching genres:', error);
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

    const handleApplyFilters = () => {
        const filters = {
            genres: selectedGenres,
            sortBy,
            order,
            movieName // Incluir la palabra clave de búsqueda en los filtros
        };
        onFilterChange(filters);
    };

    const handleResetFilters = () => {
        setSelectedGenres([]);
        setSortBy('numVotes');
        setOrder('desc');
        setMovieName(''); // Restablecer la palabra clave de búsqueda al resetear los filtros
        onFilterChange({ genres: [], sortBy: 'numVotes', order: 'desc', movieName: '' });
    };

    const toggleFilterMenu = () => {
        setIsFilterMenuVisible(prevState => !prevState);
    };

    return (
        <>
        <FiltersTitle>
            Search filters
            <ArrowButton onClick={toggleFilterMenu} style={{ transform: `rotate(${isFilterMenuVisible ? '-90deg' : '0deg'})` }}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </ArrowButton>
        </FiltersTitle>
        <FiltersContainer isVisible={isFilterMenuVisible}>

                <Sort>
                    <FilterSubcontainer>
                        <FiltersSubtitle>Sort By</FiltersSubtitle>
                        <Select value={sortBy} onChange={handleSortByChange}>
                            <option value="numVotes">Popularity</option>
                            <option value="primaryTitle">Title</option>
                            <option value="Year">Year</option>
                            <option value="rating">Rating</option>
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
                <ApplyContainer>
                    <ApplyButton onClick={handleApplyFilters}>Apply Filters</ApplyButton>
                    <ApplyButton onClick={handleResetFilters}>Reset Filters</ApplyButton>
                </ApplyContainer>
            </FiltersContainer></>
    );
}

export default Filter;
