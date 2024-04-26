import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Register from '../Register';
import Movie from '../Movie';
import { AppContainer } from './styles';
import Landing from '../Landing';
import Login from '../Login';
import MoviesList from '../MoviesSearch';
import Logout from '../Logout';
import User from '../User';
import { UserProvider } from '../../hooks/userContext';
import { Toaster } from 'react-hot-toast';
import Footer from '../Footer';
import HeaderComponent from '../Header';
import LoadingAnimationComponent from '../../components/Animations/LoadingAnimationComponent';
import { About } from '../About';
import { Developer } from '../Developer';
import { AnimatePresence } from 'framer-motion';
const App = () => {
  return (
    <Suspense fallback={<LoadingAnimationComponent/>}>
    <UserProvider>
      <Toaster position="top-center" reverseOrder={false}/>
        <Router>
          <Main />
        </Router>
      </UserProvider>
    </Suspense>
  );
};

const Main = () => {
  const location = useLocation();
  
  return (
    <AppContainer>
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
    </AppContainer>
  );
};

export default App;
