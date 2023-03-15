import React from 'react';
import ReviewsListStyled from './ReviewsList.styled';

export default function ReviewsList({ data }) {
  return (
    <ReviewsListStyled className="reviews__list">
      {data.map(({ id, author, content }) => (
        <li key={id} className="reviews__item">
          <h4 className="reviews__author">Author: {author}</h4>

          <p
            className="reviews__content"
            dangerouslySetInnerHTML={{ __html: content }}
          ></p>
        </li>
      ))}
    </ReviewsListStyled>
  );
}
