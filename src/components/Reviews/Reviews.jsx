import { tmdb_API } from 'components/App/App';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ReviewsList from 'components/ReviewsList';
import { NoReviews } from './Reviews.styled';

export default function Reviews() {
  const [reviewsData, setReviewsData] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const { movieId } = useParams();
  useEffect(() => {
    async function getReviews(id, page = 1) {
      const {
        data: { results, total_pages },
      } = await tmdb_API.fetchReviews(id, page);
      setReviewsData(results);
      setTotalPages(total_pages);
    }
    getReviews(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {totalPages ? (
        <ReviewsList data={reviewsData} />
      ) : (
        <NoReviews className="reviews--empty">
          No reviews found for this movie
        </NoReviews>
      )}
    </>
  );
}
