import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';

import { QueryGalleryItemStyled } from './QueryGalleryItem.styled';
import { Button } from 'components/App/App.styled';

export default function QueryGalleryItem({ data }) {
  const [isOverViewShown, setIsOverViewShown] = useState(false);
  const { title, id, overview, vote_average, release_date } = data;
  const location = useLocation();

  function handleShowOverViewBtn() {
    setIsOverViewShown(prev => !prev);
  }
  return (
    <QueryGalleryItemStyled className="queryGalleryItem">
      <Link
        to={`/movies/${id}`}
        state={{ from: { location } }}
        className={'queryGalleryItem__link'}
      >
        🍿 {title} ({release_date.slice(0, 4)})
      </Link>
      <p className="queryGalleryItem__vote">
        Average vote: {vote_average ?? `no votes`}
      </p>
      <Button
        type="button"
        onClick={handleShowOverViewBtn}
        className="queryGalleryItem__overviewBtn"
      >
        <span>Overview</span>
        {isOverViewShown ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
      </Button>
      {isOverViewShown && (
        <p className="queryGalleryItem__overview">
          {overview ?? `no overview`}
        </p>
      )}
    </QueryGalleryItemStyled>
  );
}
QueryGalleryItem.propTypes = {
  data: PropTypes.shape({}).isRequired,
};
