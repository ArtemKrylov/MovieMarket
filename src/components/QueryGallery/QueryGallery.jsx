import React from 'react';
import PropTypes from 'prop-types';
import { STATUS_MACHINE } from 'utils';
import QueryGalleryItem from 'components/QueryGalleryItem';
import QueryGalleryStyled from './QueryGallery.styled';
import Loader from 'components/Loader/Loader';

export default function QueryGallery({ querySearchResults, status }) {
  switch (status) {
    case STATUS_MACHINE.IDLE:
      return (
        <QueryGalleryStyled className="queryGallery--idle">
          Search something
        </QueryGalleryStyled>
      );

    case STATUS_MACHINE.PENDING:
      return (
        <QueryGalleryStyled className="queryGallery--pending">
          <p>Pending...</p>
          <Loader />
        </QueryGalleryStyled>
      );
    case STATUS_MACHINE.REJECTED:
      return (
        <QueryGalleryStyled className="queryGallery--rejected">
          Something went wrong! Please, try again!
        </QueryGalleryStyled>
      );
    case STATUS_MACHINE.RESOLVED:
      if (querySearchResults.length === 0) {
        return (
          <QueryGalleryStyled className="queryGallery--nothingFound">
            Nothing found!
          </QueryGalleryStyled>
        );
      }
      return (
        <QueryGalleryStyled className="queryGallery">
          <ul className="queryGallery__list">
            {querySearchResults.map(item => (
              <QueryGalleryItem key={item.id} data={item} />
            ))}
          </ul>
        </QueryGalleryStyled>
      );
    default:
      throw new Error('Wrong status for STATUS_MACHINE');
  }
}
QueryGallery.propTypes = {
  querySearchResults: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
  status: PropTypes.string.isRequired,
};
