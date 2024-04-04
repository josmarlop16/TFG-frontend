import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  UserAvatar,
  UserContainer,
  UserCard,
  UserData,
  Username,
  Useremail,
  EditForm,
  EditInput,
  EditButton,
  ProfileContainer,
  UsernameContainer,
  ButtonsContainer,
  Button,
  UserTitle,
  List,
  MoviesContainer,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft, faUserPen } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import MovieCard from '../MovieCard';
import { Movie } from '../../types/movie';
import Recommendations from '../Recomendations';

const UserProfile = () => {
  const [userData, setUserData] = useState<any>(null);
  const [username, setUsername] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');
  const [editing, setEditing] = useState<boolean>(false);

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
      setUserEmail(user.email);
      setEditing(false);
      } catch (error:any) {
      toast.error("Username or email is already used, try another one");
    }
  };

  return (
    <UserContainer>
      <UserCard>
        <UserAvatar src={avatar} />
        <UserData>
          {!editing && userData && (
            <ProfileContainer>
              <UsernameContainer>
                <Username>@{username}</Username>
                <Useremail>{userEmail}</Useremail>
              </UsernameContainer>
              <Button>
                <FontAwesomeIcon size="2x" icon={faUserPen} onClick={() => setEditing(true)} />
              </Button>
            </ProfileContainer>
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
                type="email"
                placeholder="Email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <EditInput
                type="text"
                placeholder="Avatar URL"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              />
              <ButtonsContainer>
                <EditButton type="submit">Save</EditButton>
                <EditButton onClick={() => setEditing(false)}>
                  <FontAwesomeIcon icon={faArrowRotateLeft} />
                </EditButton>
              </ButtonsContainer>
            </EditForm>
          )}
        </UserData>
      </UserCard>
      {userData && userData.preferences && userData.preferences.movies && (
        <MoviesContainer>
          <UserTitle>Favourite Movies</UserTitle>
          <List>
            {userData.preferences.movies.map((movie: Movie) => (
              <MovieCard key={movie._id} movie={movie}/>
            ))}
          </List>
          <Recommendations/>
        </MoviesContainer>
      )}
    </UserContainer>
  );
};

export default UserProfile;
