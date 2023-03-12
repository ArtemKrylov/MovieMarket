import React from 'react';
import PropTypes from 'prop-types';
import MovieCardStyled from './MovieCard.styled';
import Loader from 'components/Loader/Loader';
import { Button } from 'components/App/App.styled';
import { useUser } from 'utils/userContext';

export default function MovieCard({ movieData }) {
  const { isLoggedIn, addMovieToFavourites } = useUser();

  const {
    id,
    poster_path,
    overview,
    vote_average,
    genres,
    title,
    release_date,
  } = movieData;

  function handleAddToFavouritesBtnClick() {
    addMovieToFavourites({
      id,
      poster_path,
      title,
      release_date,
      vote_average,
    });
  }

  return (
    <>
      {Object.keys(movieData).length === 0 ? (
        <Loader />
      ) : (
        <MovieCardStyled className="moviecard">
          <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt={title}
            className="moviecard__image"
          />

          <div className="moviecard__info">
            <h4 className="moviecard__title">
              {title}
              <span>({release_date.slice(0, 4)})</span>
            </h4>
            <p className="moviecard__votes">User score: {vote_average}</p>

            {isLoggedIn && (
              <Button
                type="button"
                className="moviecard__addToFavouritesBtn"
                onClick={handleAddToFavouritesBtnClick}
              >
                Add to favourites
              </Button>
            )}

            <h5 className="moviecard__subtitle">Overview</h5>
            <p className="moviecard__overview">{overview}</p>
            <h5 className="moviecard__subtitle">Genres</h5>
            <p className="moviecard__genres">
              {genres.map(genre => (
                <span key={genre.id} className="moviecard__genreName">
                  {genre.name}
                </span>
              ))}
            </p>
          </div>
        </MovieCardStyled>
      )}
    </>
  );
}

MovieCard.propTypes = {
  movieData: PropTypes.shape({
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
    title: PropTypes.string,
    release_date: PropTypes.string,
  }).isRequired,
};
