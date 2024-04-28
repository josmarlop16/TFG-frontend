import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UserContainer, UserCard, EditForm, EditInput, EditButton, ButtonsContainer, UserTitle, List, MoviesContainer, Container, MovieContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faFloppyDisk, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import MovieCard from '../../components/MovieCardComponent';
import { Movie } from '../../types/movie';
import Recommendations from '../Recomendations';
import UserLists from '../../components/UserListsComponent';
import ProfileComponent from '../../components/ProfileComponent';
import { AnimatedPage } from '../../components/AnimatedPage';
import { usePreferences } from '../../hooks/usePreferences';

const UserProfile = () => {
  const [userData, setUserData] = useState<any>(null);
  const [username, setUsername] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');
  const [editing, setEditing] = useState<boolean>(false);
  const { handleRemoveFromPreferences } = usePreferences();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post('http://localhost:4000/user', {
          userId: sessionStorage.getItem('userId'),
        });
        setUserData(response.data.user);
      } catch (error:any) {
        toast.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (userData) {
      setUsername(userData.username);
      setUserEmail(userData.email);
      setAvatar(userData.avatar);
    }
  }, [userData]);

  const handleEdit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/user-edit', {
        email: userEmail,
        username,
        avatar,
      });
      const { user } = response.data;
      sessionStorage.setItem('username', user.username);
      sessionStorage.setItem('avatar', user.avatar);
      toast.success("Profile updated successfully!");
      setEditing(false);
    } catch (error:any) {
      if (error.response && error.response.data.error === 'El username ya está en uso.') {
        if (userData && userData.username === username) {
          toast.success("Profile updated successfully!");
          setEditing(false);
        } else {
          toast.error("Username or email is already used, try another one");
        }
      } else {
        toast.error("An error occurred while updating profile");
      }
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post('http://localhost:4000/user', {
          userId: sessionStorage.getItem('userId'),
        });
        setUserData(response.data.user);
      } catch (error:any) {
        toast.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleRemoveClick = async (movieId:string) => {
    if(movieId === undefined) {
      toast.error("Some error occurred during preferences management.")
    } else {
      try {
        await handleRemoveFromPreferences(movieId);
        const updatedUserData = { ...userData };
        updatedUserData.preferences.movies = updatedUserData.preferences.movies.filter((movie: Movie) => movie._id !== movieId);
        setUserData(updatedUserData);
      } catch (error) {
        console.error('Error removing from preferences:', error);
        toast.error("An error occurred while removing from preferences");
      }
    }
  };
  
  const activateEditingMode = () => {
    setEditing(true);
  };

  return (
    <AnimatedPage>
    <UserContainer>
      <UserCard>
        {!editing && userData && (
          <Container>
            <ProfileComponent
              avatar={avatar}
              username={username}
              userEmail={userEmail}
              onEdit={activateEditingMode}
            />
            <UserLists userData={userData} />
          </Container>
        )}
        {editing && (
          <EditForm onSubmit={handleEdit}>
            <EditInput
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <EditInput
              type="text"
              placeholder="Avatar URL"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <ButtonsContainer>
              <EditButton type="submit">
                <FontAwesomeIcon icon={faFloppyDisk} />
              </EditButton>
              <EditButton onClick={() => setEditing(false)}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </EditButton>
            </ButtonsContainer>
          </EditForm>
        )}
      </UserCard>
      <Recommendations/>
      {userData && userData.preferences && userData.preferences.movies && (
        <MoviesContainer>
          <UserTitle>Favourite Movies</UserTitle>
          <List>
            {userData.preferences.movies.map((movie: Movie) => (
              <MovieContainer key={movie._id}>
                <FontAwesomeIcon
                  className="trash-icon"
                  size='1x'
                  icon={faTrashCan}
                  onClick={() => handleRemoveClick(movie._id)}
                />
                <MovieCard movie={movie} />
              </MovieContainer>
            ))}
          </List>
        </MoviesContainer>
      )}
    </UserContainer>
    </AnimatedPage>
  );
};

export default UserProfile;