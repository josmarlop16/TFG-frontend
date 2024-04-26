import React from 'react'
import { Navbar, StyledLink } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faHouse, faUserPlus, faArrowRightToBracket, faCircleXmark, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

  const isLoggedIn = sessionStorage.getItem('token');
  const username = sessionStorage.getItem('username') || '';

  return (
    <Navbar>
      <StyledLink to="/movies" data-text="Movies">
        <FontAwesomeIcon icon={faFilm} />
      </StyledLink>
      <StyledLink to="/" data-text="Home">
        <FontAwesomeIcon icon={faHouse} />
      </StyledLink>
      {isLoggedIn ? (
        <>
          <StyledLink to="/user" data-text={username}>
            <FontAwesomeIcon icon={faUser} />
          </StyledLink>
          <StyledLink to="/logout" data-text="Log out">
            <FontAwesomeIcon icon={faCircleXmark} />
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
  )
}


export default Header;