import React from 'react'
import { FooterContainer, StyledLink } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faPerson } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <FooterContainer>
      <StyledLink to="/about" data-testid="About" data-text="About">
        <FontAwesomeIcon icon={faCircleInfo} />
      </StyledLink>
      <StyledLink to="/developer" data-testid="Developers Info" data-text="Developers Info">
        <FontAwesomeIcon icon={faPerson} />
      </StyledLink>
    </FooterContainer>
  )
}

export default Footer;