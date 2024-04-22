import React, { useState } from 'react';
import { Button, ListSelect, ListSelectorContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { handleAddToUserList } from '../../utils/handleUserList';

interface ListSelectorComponentProps {
  userLists: UserList[];
  movieId: string | undefined;
}

interface UserList {
  listName: string;
  list: any[];
}

const ListSelectorComponent: React.FC<ListSelectorComponentProps> = ({ userLists, movieId }) => {
  const [listName, setListName] = useState<string>('');

  const handleAddToList = () => {
    handleAddToUserList(listName, movieId);
  };

  return (
    <ListSelectorContainer>
      <ListSelect value={listName || ''} onChange={(e) => setListName(e.target.value)}>
        <option value="">Select a list</option>
        {userLists.map((list) => (
          <option key={list.listName} value={list.listName}>
            {list.listName}
          </option>
        ))}
      </ListSelect>
      <Button onClick={handleAddToList}>
        <FontAwesomeIcon icon={faPlus} />
        Add to List
      </Button>
    </ListSelectorContainer>
  );
};

export default ListSelectorComponent;
