import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Login/index.tsx';
import Landing from '../Landing/index.tsx';
import { Navbar, StyledLink } from './styles.ts'


const Header = () => {
  return (
    <Router>
      <Navbar>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/">Movie eater</StyledLink>
      </Navbar>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}
export default Header;