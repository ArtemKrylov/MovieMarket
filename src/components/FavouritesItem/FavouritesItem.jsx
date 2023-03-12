import React from 'react';
import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';

import { FavouritesItemStyled } from './FavouritesItem.styled';

import defaultImg from '../../img/default-image.jpg';

export default function FavouritesItem({ film, deleteFilm }) {
  const { id, poster_path, title } = film;
  function handleDeleteBtnClick(evt) {
    deleteFilm(evt.currentTarget.dataset.id);
  }

  return (
    <FavouritesItemStyled className="favourites__item favFilm">
      {poster_path ? (
        <>
          <button
            type="button"
            className="favFilm__deleteBtn"
            onClick={handleDeleteBtnClick}
            data-id={id}
          >
            <MdDeleteForever />
          </button>
          <picture className="favFilm__image">
            {/* for mobile */}
            <source
              srcSet={`https://image.tmdb.org/t/p/w200/${poster_path} 1x, https://image.tmdb.org/t/p/w500/${poster_path} 2x`}
              media="(max-width: 767px)"
            />
            {/* for tablet */}
            <source
              srcSet={`https://image.tmdb.org/t/p/w300/${poster_path} 1x, https://image.tmdb.org/t/p/w500/${poster_path} 2x`}
              media="(max-width: 1023px)"
            />
            {/* for desktop */}
            <source
              srcSet={`https://image.tmdb.org/t/p/w300/${poster_path} 1x, https://image.tmdb.org/t/p/w500/${poster_path} 2x`}
              media="(min-width: 1024px)"
            />
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              className="favFilm__image"
              alt={`${title}`}
            />
          </picture>
        </>
      ) : (
        <img src={defaultImg} alt={`${title}`} className="favFilm__image" />
      )}
      <div className="favFilm__info">
        <p className="favFilm__title">{title}</p>
      </div>
    </FavouritesItemStyled>
  );
}

FavouritesItem.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  deleteFilm: PropTypes.func.isRequired,
};
