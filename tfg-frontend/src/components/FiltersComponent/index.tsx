import React from 'react';
import { ButtonsContainer, FilterButton, FiltersContainer, Text, GenresSubcontainer, Select, SelectorContainer, SortContainer, ActorContainer, OrderContainer, Vertical } from './styles';
import SearchBar from '../SearchBarComponent';

interface FiltersComponentProps {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  order: string;
  setOrder: React.Dispatch<React.SetStateAction<string>>;
  genres: string[];
  selectedGenres: string[];
  handleGenreClick: (genre: string) => void;
  staffName: string;
  handleStaffSearchChange: (value: string) => void;
  isvisible: boolean;
}

const FiltersComponent: React.FC<FiltersComponentProps> = ({
  sortBy,
  setSortBy,
  order,
  setOrder,
  genres,
  selectedGenres,
  handleGenreClick,
  staffName,
  handleStaffSearchChange,
  isvisible
}) => {

  const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const handleOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOrder(event.target.value);
  };

  return (
    <FiltersContainer isvisible={isvisible}>
      <OrderContainer>
        <SortContainer>
          <SelectorContainer>
            <Text>Sort By</Text>
            <Select value={sortBy} onChange={handleSortByChange}>
              <option value="vote_average">Rating</option>
              <option value="release_date">Release Date</option>
              <option value="runtime">Duration</option>
              <option value="title">Title</option>
            </Select>
          </SelectorContainer>
          <SelectorContainer>
            <Text>Order</Text>
            <Select value={order} onChange={handleOrderChange}>
              <option value="desc">
                Descending
              </option>
              <option value="asc">
                Ascending
              </option>
            </Select>
          </SelectorContainer>
        </SortContainer>
        <Vertical />
        <GenresSubcontainer>
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
      </OrderContainer>
      <ActorContainer>
        <Text>Search by actor:</Text>
        <SearchBar
          value={staffName}
          onChange={handleStaffSearchChange}
          placeholder="Actor name..."
        />
      </ActorContainer>
    </FiltersContainer>
  );
}

export default FiltersComponent;
