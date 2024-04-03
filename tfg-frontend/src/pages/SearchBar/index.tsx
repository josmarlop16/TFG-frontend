import React from 'react';
import { InputContainer, Input, IconContainer, SearchBarContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <SearchBarContainer>
      <InputContainer>
        <Input
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        <IconContainer>
          <FontAwesomeIcon icon={faSearch} />
        </IconContainer>
      </InputContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;
