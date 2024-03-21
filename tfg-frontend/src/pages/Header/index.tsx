import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Login from '../Login/index.tsx';
import Landing from '../Landing/index.tsx';
import { Navbar, StyledLink } from './styles.ts';
import SearchBar from '../SearchBar/index.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import Register from '../Register/index.tsx';

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
        <StyledLink to="/">
          <FontAwesomeIcon icon={faHouse} />
        </StyledLink>
        <SearchBar />
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/register">Register</StyledLink>
        <StyledLink to="/prueba">pryeba</StyledLink>  
      </Navbar>
      <TransitionGroup>
        <CSSTransition key={key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default Header;
