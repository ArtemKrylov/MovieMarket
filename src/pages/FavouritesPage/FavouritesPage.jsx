import FavouritesItem from 'components/FavouritesItem';
import Loader from 'components/Loader/Loader';
import Section from 'components/Section';
import { useEffect, useState } from 'react';
import { useUser } from 'utils/userContext';
import { FavouritesPageStyled } from './FavouritesPage.styled';

export default function FavouritesPage() {
  const [favourites, setFavourites] = useState(null);
  const { getFavouriteMovies, isLoggedIn, deleteMovieFromFavourites } =
    useUser();

  function deleteFilm(id) {
    deleteMovieFromFavourites(id);
    setFavourites(prev => prev.filter(film => film.id !== Number.parseInt(id)));
  }

  useEffect(() => {
    getFavouriteMovies().then(setFavourites).catch(console.error);
  }, [getFavouriteMovies]);

  return (
    <Section className="section--favourites favourites">
      <FavouritesPageStyled>
        {!isLoggedIn ? (
          <p>Login first, please!</p>
        ) : !favourites ? (
          <Loader />
        ) : favourites.length === 0 ? (
          <p>You have no favourites! Please, add something!</p>
        ) : (
          <ul className="favourites__list">
            {favourites.map(film => (
              <FavouritesItem
                key={film.id}
                film={film}
                deleteFilm={deleteFilm}
              ></FavouritesItem>
            ))}
          </ul>
        )}
      </FavouritesPageStyled>
    </Section>
  );
}
