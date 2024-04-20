import React, { useState } from 'react';
import { EditButton, UserTitle } from '../styles';
import { MoviesList, UserListCard, UserListContainer, UserMovieCard, UserListTitle, UserMovieImage, UserMovieTitle, ListForm, ListInput } from './styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

interface UserData {
  userLists: {
    listName: string;
    movies: {
      _id: string;
      title: string;
      poster_path: string;
    }[];
  }[];
}

function YourLists({ userData }: { userData: UserData }) {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [listName, setListName] = useState('');

  const handleMovieClick = (_id: string) => {
    navigate(`/movie/${_id}`);
  };

  const handleCreateListClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/user/list', { userId: sessionStorage.getItem('userId'), listName });
      setShowForm(false);
      setListName('');
      toast.success("List successfully created. Try adding some movies!");
    } catch (error:any) {
      toast.error('Error creating movie list:', error);
    }
  };

  return (
    <UserListContainer>
      <UserTitle>Your Lists</UserTitle>
      {userData && userData.userLists && userData.userLists.length > 0 ? (
        userData.userLists.map((list, index) => (
          <UserListCard key={index}>
            <UserListTitle>{list.listName}</UserListTitle>
            <MoviesList>
              {list.movies.length > 0 ? (
                list.movies.map((movie, movieIndex) => (
                  <UserMovieCard key={movieIndex} onClick={() => handleMovieClick(movie._id)}>
                    <UserMovieImage src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                    <UserMovieTitle className="movie-title">{movie.title}</UserMovieTitle>
                  </UserMovieCard>
                ))
              ) : (
                <p>No movies yet? Try to add one!</p>
              )}
            </MoviesList>
          </UserListCard>
        ))
      ) : (
        <p>No lists found</p>
      )}
      {!showForm && (
        <EditButton onClick={handleCreateListClick}>Create List</EditButton>
      )}
      {showForm && (
        <ListForm onSubmit={handleFormSubmit}>
          <ListInput type="text" placeholder="Enter list name" value={listName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setListName(e.target.value)} />
          <EditButton type="submit">Create</EditButton>
        </ListForm>
      )}
    </UserListContainer>
  );
}

export default YourLists;
