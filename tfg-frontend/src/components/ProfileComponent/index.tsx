import React, { useState } from 'react';
import { Button, ProfileContainer, UserAvatar, Text, UsernameContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';

interface ProfileComponentProps {
  avatar: string;
  username: string;
  userEmail: string;
  onEdit: () => void;
}

const ProfileComponent: React.FC<ProfileComponentProps> = ({ avatar, username, userEmail, onEdit }) => {
  const [editing, setEditing] = useState<boolean>(false);

  const handleEditClick = () => {
    setEditing(true);
    onEdit();
  };

  return (
    <ProfileContainer>
      <UserAvatar src={avatar} />
      <UsernameContainer>
        <Text>@{username}</Text>
        <Text>{userEmail}</Text>
      </UsernameContainer>
      {!editing && (
        <Button onClick={handleEditClick}>
          Edit profile
          <FontAwesomeIcon size="1x" icon={faUserPen} style={{marginLeft:'0.6rem'}}/>
        </Button>
      )}
    </ProfileContainer>
  );
};

export default ProfileComponent;
