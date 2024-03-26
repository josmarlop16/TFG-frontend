import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Login from '../Login/index.tsx';
import Landing from '../Landing/index.tsx';
import MoviesList from '../MoviesList/index.tsx';
import { Navbar, StyledLink } from './styles.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faHouse } from '@fortawesome/free-solid-svg-icons';
import Register from '../Register/index.tsx';
import Movie from '../Movie/index.tsx';

const Header = () => {
  return (
    <Router>
      <HeaderContent />
    </Router>
  );
};

const HeaderContent = () => {
  const location = useLocation();
  const [key, setKey] = useState(location.pathname);

  useEffect(() => {
    setKey(location.pathname);
  }, [location]);

  return (
    <>
      <Navbar>
        <StyledLink to="/movies">
          <FontAwesomeIcon icon={faFilm} />
        </StyledLink>
        <StyledLink to="/">
          <FontAwesomeIcon icon={faHouse} />
        </StyledLink>
        <StyledLink to="/login">
          Login
        </StyledLink>
        <StyledLink to="/register">
          Register
        </StyledLink>
      </Navbar>
      <TransitionGroup>
        <CSSTransition key={key} classNames="fade" timeout={500}>
          <Routes location={location}>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/movies" element={<MoviesList />} />
            <Route path="/movie/:movieId" element={<Movie />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default Header;
