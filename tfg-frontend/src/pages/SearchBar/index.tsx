import React, { useState } from 'react';
import { InputContainer, Input, IconContainer, SearchButton, SearchBarContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    onSearch: (data: any[]) => void; // Asegúrate de incluir la propiedad onSearch
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder, onSearch }) => {

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  try {
    const response = await fetch('http://localhost:4000/movies/all?movieName=' + encodeURIComponent(value));
    const data = await response.json();
    onSearch(data.movies);
  } catch (error) {
    console.error('Error searching movies:', error);
  }
};

  return (
     <SearchBarContainer onSubmit={handleSubmit}>
      <InputContainer>
        <Input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <IconContainer>
          <SearchButton type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </SearchButton>
        </IconContainer>
      </InputContainer>
     </SearchBarContainer>
  );
};

export default SearchBar;
