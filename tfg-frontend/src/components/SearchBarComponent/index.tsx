// SearchBar.tsx
import React from 'react';
import { InputContainer, Input, IconContainer, SearchBarContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      toast('Is this your final search? Click in "Apply Filters"', {
        icon: '😉',
      });
      event.preventDefault(); 
    }
  };

  return (
    <SearchBarContainer>
      <InputContainer>
        <Input
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <IconContainer>
          <FontAwesomeIcon icon={faSearch} />
        </IconContainer>
      </InputContainer>
    </SearchBarContainer>
  );
};

export default SearchBar;
