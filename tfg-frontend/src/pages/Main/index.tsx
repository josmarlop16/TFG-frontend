import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Register from '../Register';
import Movie from '../Movie';
import { MainContainer } from './styles';
import Landing from '../Landing';
import Login from '../Login';
import MoviesList from '../MoviesSearch';
import Logout from '../Logout';
import User from '../User';
import Footer from '../Footer';
import HeaderComponent from '../Header';
import { About } from '../About';
import { Developer } from '../Developer';
import { AnimatePresence } from 'framer-motion';

const Main = () => {
  const location = useLocation();
  
  return (
    <MainContainer>
      <HeaderComponent />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<User />} />
          <Route path="/about" element={<About />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/movie/:movieId" element={<Movie />} />
        </Routes>
        </AnimatePresence>
        <Footer />
    </MainContainer>
  );
};

export default Main;
