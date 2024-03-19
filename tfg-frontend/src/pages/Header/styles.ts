import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Navbar = styled.nav`
    color: #ffffff;
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`

export const StyledLink = styled(RouterLink)`
    font-style: normal;
    text-decoration: none;
    color: inherit;
    padding: 0 10px;
    transition: color 0.5s ease;
    font-family: "Montserrat", sans-serif;
    &:hover {
        color: #bae8e8;
    }
`;
