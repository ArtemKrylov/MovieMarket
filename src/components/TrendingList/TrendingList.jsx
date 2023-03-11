import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import TrendingListStyled from './TrendingList.styled';

export default function TrendingList({ className, moviesList }) {
  const location = useLocation();

  return (
    <TrendingListStyled className="trening__list">
      {moviesList.map(({ id, title }) => (
        <li key={id} className="trending__item">
          <Link
            to={`/movies/${id}`}
            state={{ from: { location } }}
            className="trending__link"
          >
            {title}
          </Link>
        </li>
      ))}
    </TrendingListStyled>
  );
}
TrendingList.propTypes = {
  className: PropTypes.string.isRequired,
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
};
