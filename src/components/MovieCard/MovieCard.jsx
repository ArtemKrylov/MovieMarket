import React from 'react';
import PropTypes from 'prop-types';
import MovieCardStyled from './MovieCard.styled';

export default function MovieCard({ movieData }) {
  if (Object.keys(movieData).length === 0) return;

  const { poster_path, overview, vote_average, genres, title, release_date } =
    movieData;

  return (
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
