import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Button } from './styles';
import toast from 'react-hot-toast';
import { usePreferences } from '../../hooks/usePreferences';

interface PreferencesComponentProps {
  isLoggedIn: string | null;
  movieId: string | undefined;
}

const PreferencesComponent: React.FC<PreferencesComponentProps> = ({ isLoggedIn, movieId }) => {
  const {
    isInPreferences,
    handleAddToPreferences,
    handleRemoveFromPreferences,
  } = usePreferences(); 

  const handleAddClick = () => {
    if(movieId === undefined) {
      toast.error("Some error ocurred during preferences management.")
    } else {
      handleAddToPreferences(movieId);
    }
  };

  const handleRemoveClick = () => {
    if(movieId === undefined) {
      toast.error("Some error ocurred during preferences management.")
    } else {
      handleRemoveFromPreferences(movieId);
    }
  };
  return (
    <Button>
      {isLoggedIn ? (
        isInPreferences ? (
          <FontAwesomeIcon
            className="trash-icon"
            size='2x'
            icon={faTrashCan}
            onClick={handleRemoveClick}
          />
        ) : (
          <FontAwesomeIcon
            className="heart-icon"
            size='2x'
            icon={faHeart}
            onClick={handleAddClick}
          />
        )
      ) : (
        <Link to="/register">
          <FontAwesomeIcon size='2x' icon={faHeart} color='white'/>
        </Link>
      )}
    </Button>
  )
}

export default PreferencesComponent;