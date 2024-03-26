import React from 'react';
import { InputContainer, Input, IconContainer, SearchBarContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder }) => {
  return (
    <SearchBarContainer>
      <InputContainer>
        <Input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <IconContainer>
          <FontAwesomeIcon icon={faSearch} />
        </IconContainer>
      </InputContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;
