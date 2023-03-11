import { Container } from 'components/App/App.styled';
import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderStyled from './Header.styled';

export default function Header() {
  return (
    <HeaderStyled className="page-header">
      <Container>
        <nav className="navbar">
          <NavLink to="/" className="navbar__link">
            Home
          </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </Container>
    </HeaderStyled>
  );
}
