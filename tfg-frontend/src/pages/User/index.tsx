import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UserContainer, UserCard, EditForm, EditInput, EditButton, ButtonsContainer, UserTitle, List, MoviesContainer, Container, MovieContainer, PopupContainer, ButtonContainer, Button } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleXmark, faFloppyDisk, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import MovieCard from '../../components/MovieCardComponent';
import { Movie } from '../../types/movie';
import Recommendations from '../Recomendations';
import UserLists from '../../components/UserListsComponent';
import ProfileComponent from '../../components/ProfileComponent';
import { AnimatedPage } from '../../components/AnimatedPage';
import { usePreferences } from '../../hooks/usePreferences';
import { motion } from 'framer-motion';

const UserProfile = () => {
  const [userData, setUserData] = useState<any>(null);
  const [username, setUsername] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');
  const [editing, setEditing] = useState<boolean>(false);
  const [movieToDelete, setMovieToDelete] = useState<string | null>(null); // Estado para almacenar el ID de la película a eliminar
  const { handleRemoveFromPreferences } = usePreferences();
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false); // Estado para controlar la visualización del popup

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

  const handleRemoveClick = async (movieId:string) => {
    if(movieId === undefined) {
      toast.error("Some error occurred during preferences management.")
    } else {
      // Mostrar el popup de confirmación
      setConfirmDelete(true);
      // Establecer el ID de la película a eliminar
      setMovieToDelete(movieId);
    }
  };

  // Función para confirmar la eliminación de la película
  const confirmDeleteMovie = async () => {
    setConfirmDelete(false); // Ocultar el popup de confirmación
    try {
      await handleRemoveFromPreferences(movieToDelete!);
      const updatedUserData = { ...userData };
      updatedUserData.preferences.movies = updatedUserData.preferences.movies.filter((movie: Movie) => movie._id !== movieToDelete);
      setUserData(updatedUserData);
      setMovieToDelete(null); // Reiniciar el estado del ID de la película a eliminar
    } catch (error) {
      console.error('Error removing from preferences:', error);
      toast.error("An error occurred while removing from preferences");
    }
  };

  const activateEditingMode = () => {
    setEditing(true);
  };

  const animations = {
    initial: {opacity:0, y:100},
    animate: {opacity:1, y:0},
    exit: {opacity:0, y:-100},
  }

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "9999",
  }

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
            <EditForm onSubmit={handleEdit} data-testid="edit-profile-form">
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
        {userData && userData.preferences && userData.preferences.movies && Array.isArray(userData.preferences.movies) && (
          <MoviesContainer>
            <UserTitle>Favourite Movies</UserTitle>
            {confirmDelete && (
              <motion.div variants={animations} 
                initial="initial" 
                animate="animate"
                exit="exit"
                transition={{duration:0.5, type:"spring", stiffness:90}}
                style={style}
              >
                <PopupContainer>
                  <p>Are you sure you want to delete this movie from your preferences?</p>
                  <ButtonContainer>
                    <Button>
                      <FontAwesomeIcon icon={faCheck} onClick={confirmDeleteMovie} color='green'/>
                    </Button>
                    <Button>
                      <FontAwesomeIcon icon={faXmark} onClick={() => setConfirmDelete(false)} color='red'/>
                    </Button>
                  </ButtonContainer>
                </PopupContainer>
              </motion.div>
            )}
            <List>
              {Array.isArray(userData.preferences.movies) && userData.preferences.movies.map((movie: Movie) => (
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
