import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faHouse, faUserPlus, faArrowRightToBracket, faCircleXmark, faUser } from '@fortawesome/free-solid-svg-icons';
import Register from '../Register/index.tsx';
import Movie from '../Movie/index.tsx';
import { Navbar, StyledLink } from './styles.ts';
import Landing from '../Landing/index.tsx';
import Login from '../Login/index.tsx';
import MoviesList from '../MoviesList/index.tsx';
import Logout from '../Logout/index.tsx';
import User from '../User/index.tsx';
import { UserProvider } from '../../hooks/userContext.js';
import { Toaster } from 'react-hot-toast';

const Header = () => {
  return (
    <UserProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Router>
        <HeaderContent />
      </Router>
    </UserProvider>
  );
};

const HeaderContent = () => {
  const isLoggedIn = sessionStorage.getItem('token');
  const username = sessionStorage.getItem('username') || '';
  const location = useLocation();
  const [key, setKey] = useState(location.pathname);

  useEffect(() => {
    setKey(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <Navbar>
        <StyledLink to="/movies" data-text="Movies">
          <FontAwesomeIcon icon={faFilm} />
        </StyledLink>
        <StyledLink to="/" data-text="Home">
          <FontAwesomeIcon icon={faHouse} />
        </StyledLink>
        {isLoggedIn ? (
          <>
            <StyledLink to="/logout" data-text="Log out">
              <FontAwesomeIcon icon={faCircleXmark} />
            </StyledLink>
            <StyledLink to="/user" data-text={username}>
              <FontAwesomeIcon icon={faUser} />
            </StyledLink>
          </>
        ) : (
          <>
            <StyledLink to="/login" data-text="Log in">
              <FontAwesomeIcon icon={faArrowRightToBracket} />
            </StyledLink>
            <StyledLink to="/register" data-text="Sign up">
              <FontAwesomeIcon icon={faUserPlus} />
            </StyledLink>
          </>
        )}
      </Navbar>
      <TransitionGroup>
        <CSSTransition key={key} classNames="fade" timeout={500}>
          <Routes location={location}>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user" element={<User />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/movies" element={<MoviesList />} />
            <Route path="/movie/:movieId" element={<Movie />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default Header;
