import { tmdb_API } from 'components/App/App';
import CastList from 'components/CastList';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const [castData, setCastData] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCastData(movieId) {
      const response = await tmdb_API.fetchMovieCredits(movieId);
      setCastData(response.data.cast);
      // console.log('response: ', response);
    }
    getCastData(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log('movieId: ', movieId);
  // console.log('castData', castData);
  return castData ? <CastList data={castData} /> : <Loader />;
}
