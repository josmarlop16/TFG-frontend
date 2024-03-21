// SearchBar.tsx
import React, { useState } from 'react';
import { InputContainer, Input, IconContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleFocus = (): void => {
    setIsExpanded(true);
  };

  const handleBlur = (): void => {
    setIsExpanded(false);
  };

  return (
    <InputContainer expanded={isExpanded}>
      <Input
        placeholder="Search any movie..."
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <IconContainer>
        <FontAwesomeIcon icon={faSearch} />
      </IconContainer>
    </InputContainer>
  );
};

export default SearchBar;
