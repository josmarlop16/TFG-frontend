import React from 'react';
import { PaginationButton, PaginationContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

interface PaginationProps {
  page: number;
  totalPages: number;
  handleFirstPage: () => void;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  handleLastPage: () => void;
  handlePageSelect: (selectedPage: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({ page, totalPages, handleFirstPage, handlePrevPage, handleNextPage, handleLastPage, handlePageSelect }) => {
  return (
    <PaginationContainer>
      <PaginationButton onClick={handleFirstPage} disabled={page === 1}><FontAwesomeIcon icon={faAnglesLeft} /></PaginationButton>
      <PaginationButton onClick={handlePrevPage} disabled={page === 1}><FontAwesomeIcon icon={faAngleLeft} /></PaginationButton>
      {Array.from({ length: Math.min(totalPages, 5) }, (_, index) => (
        <PaginationButton
          key={page + index}
          onClick={() => handlePageSelect(page + index)}
          disabled={page + index > totalPages}
        >
          {page + index}
        </PaginationButton>
      ))}
      <PaginationButton onClick={handleNextPage} disabled={page === totalPages}><FontAwesomeIcon icon={faAngleRight} /></PaginationButton>
      <PaginationButton onClick={handleLastPage} disabled={page === totalPages}><FontAwesomeIcon icon={faAnglesRight} /></PaginationButton>
    </PaginationContainer>
  );
};

export default PaginationComponent;
