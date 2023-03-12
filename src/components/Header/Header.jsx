import { Container } from 'components/App/App.styled';
import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderStyled from './Header.styled';
import { BsFillPersonXFill, BsPersonCheckFill } from 'react-icons/bs';
import { useUser } from 'utils/userContext';

export default function Header() {
  const { isLoggedIn, setIsAuthModalOpened, userName } = useUser();
  return (
    <HeaderStyled className="page-header">
      <Container>
        <nav className="navbar">
          <NavLink to={`./`} className="navbar__link">
            Home
          </NavLink>
          <NavLink to={`movies`}>Movies</NavLink>
          {isLoggedIn && <NavLink to={'favourites'}>Favourites</NavLink>}
        </nav>
        <div className="auth-panel">
          {isLoggedIn ? (
            <div className="auth-panel__loggedBlock">
              <span>Hello, {userName}!</span>
              <BsPersonCheckFill />
            </div>
          ) : (
            <BsFillPersonXFill
              className="auth-panel__login-icon"
              onClick={setIsAuthModalOpened}
            />
          )}
        </div>
      </Container>
    </HeaderStyled>
  );
}
