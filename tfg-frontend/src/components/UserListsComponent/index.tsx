import React, { useState } from 'react';
import { UserTitle, MoviesList, UserListContainer, UserMovieCard, EditButton, UserListTitle, UserMovieImage, UserMovieTitle, ListForm, ListInput, Text } from './styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { UserData } from '../../types/movie';

interface YourListsProps {
  userData: UserData;
}

const YourLists: React.FC<YourListsProps> = ({ userData }) => {
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
      <Splide options={{ perPage: 1, arrows: true, autoplay: true, lazyLoad: true, width:"50vw" ,wheel: true, margin:"0.5rem"}}>
      {userData && userData.userLists && userData.userLists.length > 0 ? (
        userData.userLists.map((list, index) => (
          <SplideSlide key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          width: "100%" ,backgroundColor: "#fafafa", borderRadius: "1rem", padding: "0rem 2rem 0rem 2rem"}}>
            <UserListTitle>{list.listName}</UserListTitle>
            <Splide options={{ perPage: 4, arrows: true, autoplay: true, lazyLoad: true, width:"20vw", wheel: true, margin:"0.5rem"}} style={{minWidth:"100%"}}>
              {list.movies.length > 0 ? (
                list.movies.map((movie, movieIndex) => (
                  <SplideSlide key={movieIndex}>
                    <UserMovieCard onClick={() => handleMovieClick(movie._id)}>
                      <UserMovieImage src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                      <UserMovieTitle className="movie-title">{movie.title}</UserMovieTitle>
                    </UserMovieCard>
                  </SplideSlide>
                ))
              ) : (
                <p>No movies yet? Try to add one!</p>
              )}
            </Splide>
          </SplideSlide>
        ))
      ) : (
        <MoviesList>
          <Text>No lists yet...</Text>
        </MoviesList>
      )}
      </Splide>
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